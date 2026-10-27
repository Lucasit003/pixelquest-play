import {drawPixelText} from '../ui/canvas-ui.js';
import {sfx} from '../core/audio.js';
/* Arena-owned hazards: visible warning -> one bounded impact window -> rest. No actor, XP or save record.
   Placement is checked against the baked collision and camera. A failed check waits; tells are never shortened. */
import {STAGE} from '../game/stage.js';
import {liveThreatFx} from './encounter-budget.js';
export const HAZARD_CUES={tide:'Tide! Walk to the dry lane!',lures:'Lure! Leave the circle!',echoes:'Echo! Leave your old circle!',stars:'Starfall! Leave the circle!',beats:'Choir beat! Step off the glowing row!',portals:'Portal! Leave the solid circle!',tentacles:'Tentacle! Leave the circle!',pollen:'Pollen! Leave the circle!',volley:'Arrows! Step off the glowing row!',stones:'Falling stone! Leave the circle!',graves:'Bones rising! Step off the glowing row!',roots:'Roots! Leave the circle!',rubble:'Falling rubble! Leave the circle!',thorns:'Thorns! Move to the green lane!',wire:'Tripwire! Step off the glowing row!',spores:'Spores! Leave the circle!',vents:'Vents! Move to the green lane!',hammers:'Hammer falling! Leave the circle!',jets:'Fire jet! Step off the glowing row!',drill:'Drill volley! Step off the glowing row!',banks:'Vents! Move to the green lane!',faults:'Glass fault! Step off the glowing row!',islands:'Lava pulse! Move to a green island!',gust:'Ash gust! Move to the green lane!'};
export const ESCAPE_WIDTH=48,SLOW_WALK=58,REACTION=.4;
export const hazardContains=(m,p,pad=0)=>m.organic?((p.x-(m.x0+m.x1)/2)/((m.x1-m.x0)/2+pad))**2+((p.y-m.y)/(m.band+pad))**2<=1:p.x>=m.x0-pad&&p.x<=m.x1+pad&&Math.abs(p.y-m.y)<=m.band+pad;
const fighting=w=>['wave','boss'].includes(w.flow)&&!w.ended&&w.player?.hp>0&&!w.deathPending;
const guarded=w=>w.enemies.some(e=>e.hp>0&&(w.level?.encounter?.readable&&e.dizzyUntil>w.time||e.shielded||e.linkTo||e.helper||e.decoy||e.mini||e.echo||e.entering>0||e.cinematic&&e.inv>1))||(w.enemyFx||[]).some(f=>f.pilotPuddle);
const attacking=w=>w.enemies.some(e=>e.hp>0&&(w.level?.encounter&&e.boss&&e.brain?.mode==='recover'||e.wind>0||['tele','act'].includes(e.brain?.mode)))||(w.enemyFx||[]).some(f=>liveThreatFx(f))||(w.shots||[]).some(s=>s.hostile);
export function clearHazards(w){w.tierFx={age:0,side:0,current:null,want:false,count:0};}
/* A 48-unit clear corridor parallel to the patch, plus a collision-free walking segment from the hero.
   Scan every 4 units (baked collision cells are >=8), including the corridor edges. No dodge/ability is assumed. */
export function escapeRoute(w,m,warning){m={...m,x0:Math.min(m.x0,m.x1),x1:Math.max(m.x0,m.x1)};const B=w.bounds(),p=w.player,blocked=w.layout?.blocked||(()=>false),speed=Math.min(SLOW_WALK,w.base?.speed||SLOW_WALK)*(p.slowZ??1),ys=[];
 for(let y=B.y0+24;y<=B.y1-24;y+=2)if(Math.abs(y-m.y)>=m.band+25&&y-24>=(w.camTop||0)&&y+24<=(w.camTop||0)+STAGE.camH-STAGE.hudBottom)ys.push(y);ys.sort((a,b)=>Math.abs(a-p.y)-Math.abs(b-p.y));
 for(const y of ys){if(Math.abs(y-p.y)>speed*Math.max(0,warning-REACTION)+1e-9)continue;let clear=true;
  for(let x=m.x0;x<=m.x1;x+=4)for(let yy=y-24;yy<=y+24;yy+=4)if(blocked(x,yy))clear=false;
  const n=Math.ceil(Math.abs(y-p.y)/4);for(let i=0;i<=n;i++)if(blocked(p.x,p.y+(y-p.y)*i/Math.max(1,n)))clear=false;
  if(clear)return {x0:m.x0,x1:m.x1,y0:y-24,y1:y+24};}
 /* A central patch can also be walked past horizontally. Check a full 48-unit lane and the approach segment. */
 const xs=[];for(let x=Math.max(B.x0+(w.lock?78:24),(w.camX||0)+24);x<=Math.min(B.x1-(w.lock?78:24),(w.camX||0)+STAGE.camW-24);x+=2)if(x+24<m.x0||x-24>m.x1)xs.push(x);xs.sort((a,b)=>Math.abs(a-p.x)-Math.abs(b-p.x));for(const x of xs){if(Math.abs(x-p.x)>speed*Math.max(0,warning-REACTION)+1e-9)continue;let clear=true;for(let xx=x-24;xx<=x+24;xx+=4)for(let y=B.y0;y<=B.y1;y+=4)if(blocked(xx,y))clear=false;const n=Math.ceil(Math.abs(x-p.x)/4);for(let i=0;i<=n;i++)if(blocked(p.x+(x-p.x)*i/Math.max(1,n),p.y))clear=false;if(clear)return {x0:x-24,x1:x+24,y0:B.y0,y1:B.y1};}return null;}
export function hazardMarker(w,h,side=0){const B=w.bounds(),cam=w.camX||0,x0=Math.max(B.x0+54,cam+24),x1=Math.min(B.x1-54,cam+STAGE.camW-24),y=w.level?.encounter?Math.max(B.y0+h.band,Math.min(B.y1-h.band,w.player.y+(w.level.encounter.readable&&!['stones','roots'].includes(h.kind)?(side%2?4:-4):0))):(side?B.y1-h.band:B.y0+h.band);
 if(x1-x0<120||y-h.band<(w.camTop||0)||y+h.band>(w.camTop||0)+STAGE.camH-STAGE.hudBottom)return null;
 if(w.level?.encounter?.veilmoor)return veilMarker(w,h,side,{x0,x1,y,B});
 if(w.level?.encounter?.emberkeep)return emberMarker(w,h,side,{x0,x1,y,B});
 if(w.level?.encounter?.readable&&['volley','graves','thorns','wire'].includes(h.kind))return {shape:'box',lane:true,x0,x1,y:w.player.y<=(B.y0+B.y1)/2?Math.min(y,B.y1-ESCAPE_WIDTH-h.band-2):Math.max(y,B.y0+ESCAPE_WIDTH+h.band+2),band:h.band};
 const width=h.width||64,x=Math.max(x0,Math.min(x1-width,w.player.x-width/2));return {shape:'box',organic:true,x0:x,x1:x+width,y,band:h.band};}
export function tierTick(w,dt){const r=w.level?.encounter;if(!r||w.hazardsDisabled)return;if(!w.tierFx)clearHazards(w);const f=w.tierFx;
 if(!fighting(w)){clearHazards(w);return;}if(w.paused||w.cinematicShot)return;if(r.readable&&(w.level.id==='e8'||r.emberkeep||r.veilmoor)&&w.flowT<2){f.current=null;f.age=0;f.want=false;return;}
 if(guarded(w)){f.current=null;f.want=false;f.age=0;return;}
 const h=r.hazard;if(!f.current){f.age+=dt;if(f.age<h.rest)return;f.want=true;if(attacking(w))return;const m=hazardMarker(w,h,h.alternate?f.side%2:0);if(!m||!escapeRoute(w,m,h.warning)){f.want=false;f.age=h.rest-.5;return;}
  const markers=m.parts||[m];if(w.tierKey==='legendary'&&!r.readable){const B=w.bounds(),left=Math.max(B.x0+54,(w.camX||0)+24),right=Math.min(B.x1-54,(w.camX||0)+STAGE.camW-24),m2={...m,x0:m.x0-left>=80?Math.max(left,m.x0-120):m.x1+8,x1:m.x0-left>=80?m.x0-8:Math.min(right,m.x1+120)};if(m2.x1-m2.x0>=48&&escapeRoute(w,{...m,x0:Math.min(m.x0,m2.x0),x1:Math.max(m.x1,m2.x1)},h.warning))markers.push(m2);}
  f.current={markers,marker:m,safe:r.readable&&(m.lane||r.emberkeep||r.veilmoor)?escapeRoute(w,m,h.warning):null,islands:m.islands,cue:r.readable?HAZARD_CUES[h.kind]:null,age:0,warning:h.warning,active:h.active,hit:false,kind:h.kind};f.want=false;f.age=0;f.count++;if(r.readable)sfx('tell.aoe');return;}
 const z=f.current;if(z.marker.x0<(w.camX||0)||z.marker.x1>(w.camX||0)+STAGE.camW){f.current=null;f.age=0;return;}z.age+=dt;if(r.readable&&z.age>=z.warning&&!z.impact){z.impact=true;sfx('land');const fx={stones:'fx-wr-rocks',graves:'fx-bone-totem',volley:'fx-hr-arrow',roots:'fx-earth-spike',rubble:'fx-wr-rocks',thorns:'fx-earth-spike',spores:'fx-spore',stars:'fx-bolt-holy',echoes:'fx-col-shadow',portals:'fx-portal',tentacles:'fx-tentacle',pollen:'fx-spore',lures:'fx-marsh-gas'}[h.kind];if(fx)(w.enemyFx??=[]).push({kind:'hazard',owner:z,a:{dmg:0},fx,hs:['stones','rubble'].includes(h.kind)?'play':['volley','spores'].includes(h.kind)?'fly':'rise',x:(z.marker.x0+z.marker.x1)/2,y:z.marker.y,r:0,t:0,hit:true,marker:null});}if(z.age+1e-9>=z.warning&&z.age<z.warning+z.active&&!z.hit&&(z.markers||[z.marker]).some(m=>hazardContains(m,w.player))&&!(w.player.z>14)){
  if(h.slow){w.player.slowZ=Math.min(w.player.slowZ??1,1-h.slow);}else{const before=w.player.hp;w.hurt(w.level.encounter.hazard.damage??24,{x:(z.marker.x0+z.marker.x1)/2,y:z.marker.y,kb:24,move:`arena ${z.kind}`,arenaHazard:true});if(w.player.hp<before)z.hit=true;}}
 if(z.age+1e-9>=z.warning+z.active){f.current=null;f.age=r.readable&&w.tierKey==='legendary'&&['stones','wire','hammers','banks','stars','pollen','beats','portals','tentacles'].includes(h.kind)&&f.side%2===0?h.rest:0;f.side++;}}
/* The pilot keeps its oval pools. Elderwood lanes use continuous bands, never tiled crack bricks;
   organic arena footprints use the exact ellipse for impact. Progress follows the perimeter, never a blocky bar. */
export function softMarker(c,m,prog=0,live=false){if(m.lane){softBand(c,m,prog,live);return;}const box=m.shape==='box',x=box?(m.x0+m.x1)/2:m.x,y=m.y,rx=box?Math.abs(m.x1-m.x0)/(m.organic?2:Math.SQRT2):m.r,ry=box?m.band*(m.organic?1:Math.SQRT2):m.r*.55;c.save();c.fillStyle=live?'rgba(227,90,45,.24)':'rgba(255,207,92,.10)';c.strokeStyle=live?'#ff986f':'#ffe49a';c.lineWidth=1.5;c.beginPath();c.ellipse(x,y,rx+1,ry+1,0,0,Math.PI*2);c.fill();c.stroke();c.globalAlpha=.55;c.lineWidth=2;c.beginPath();c.ellipse(x,y,rx*.85,ry*.8,0,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.max(.03,Math.min(1,prog)));c.stroke();c.restore();}
/* A continuous softly edged band encloses the exact rectangular hit area, including its corners. */
function softBand(c,m,prog,live){const x=Math.min(m.x0,m.x1),width=Math.abs(m.x1-m.x0),y=m.y-m.band,height=m.band*2,safe=m.safe;c.save();c.strokeStyle=safe?'#a5f0cc':live?'#ff986f':'#ffe49a';c.fillStyle=safe?'rgba(82,209,157,.09)':live?'rgba(227,90,45,.24)':'rgba(255,207,92,.16)';c.beginPath();c.roundRect(x-2,y-2,width+4,height+4,3);c.fill();for(const [line,alpha] of [[7,.08],[4,.16],[1.5,.95]]){c.lineWidth=line;c.globalAlpha=alpha;c.stroke();}c.globalAlpha=.8;c.lineWidth=1;if(safe){c.setLineDash([5,4]);c.stroke();if(!m.noLabel){const lx=Math.round(m.labelX??x+width/2),ly=Math.round(m.labelY??m.y+3);if(m.labelSink)m.labelSink.push({x:lx,y:ly});else clearLabel(c,lx,ly);}}else{c.beginPath();c.moveTo(x,y+height/2);c.lineTo(x+width*Math.max(.03,Math.min(1,prog)),y+height/2);c.stroke();}c.restore();}
/* Only trim the drawing to the visible safe ground; combat keeps the original corridor. */
export function visibleSafeLane(w,r){if(!r)return null;const top=w?.camTop||0,bottom=top+(w?.hudClearBottom??STAGE.camH-STAGE.hudBottom)-4,y0=Math.max(r.y0,top+4),y1=Math.min(r.y1,bottom);return y1-y0>=12?{...r,y0,y1}:null;}
/* oct24-ember-econ (playtest ch2 shot 17): the CLEAR word sat in the lane's middle, which is where the hero stands once they
   reach it, so it drew over the hero. It keeps the middle unless the hero covers it; then it moves along the lane beside the
   hero (toward the middle when both sides fit), else under the hero's feet or over the head, still inside the lane. */
export function clearLabelAt(w,r){const cx=(r.x0+r.x1)/2,cy=(r.y0+r.y1)/2+3,p=w?.player,hit=(x,y)=>p&&Math.abs(x-p.x)<40&&y>p.y-56&&y-8<p.y+6;if(!hit(cx,cy))return {x:cx,y:cy};
 const xs=[p.x-62,p.x+62].filter(x=>x-16>=r.x0&&x+16<=r.x1).sort((a,b)=>Math.abs(a-cx)-Math.abs(b-cx));if(xs.length)return {x:xs[0],y:cy};
 for(const y of [p.y+16,p.y-60])if(y-8>=r.y0&&y+2<=r.y1&&!hit(cx,y))return {x:cx,y};return {x:cx,y:cy};}
/* oct25-exploit2 O4: a boss standing in the lane hid its CLEAR word (v7 Legendary). In a fight the lane is still painted under
   the actors, but its word is collected in w.clearLabels and drawn above them (combat.js enemyLayer, clearLabelLayer). */
const clearLabel=(c,x,y)=>drawPixelText(c,'CLEAR',x,y,{align:'center',color:'#c5ffe4',outline:'#18392b'});
export function clearLabelLayer(w,c){const list=w.clearLabels=[];return {y:1e9+1,draw:()=>{for(const l of list)clearLabel(c,l.x,l.y);}};}
export function safeLane(c,r,label=true,w){r=visibleSafeLane(w,r);if(!r)return;const at=label?clearLabelAt(w,r):null;softMarker(c,{labelSink:Array.isArray(w?.clearLabels)?w.clearLabels:null,noLabel:!label,shape:'box',lane:true,safe:true,x0:r.x0,x1:r.x1,y:(r.y0+r.y1)/2,band:(r.y1-r.y0)/2,...(at?{labelX:at.x,labelY:at.y}:{})});}
export function tierLayer(w,c){const z=w.tierFx?.current;if(!z)return;if(!z.islands)safeLane(c,z.safe,!w.level?.encounter?.readable,w);for(const r of z.islands||[])safeLane(c,r,!w.level?.encounter?.readable,w);for(const m of z.markers||[z.marker])softMarker(c,m,z.age/z.warning,z.age+1e-9>=z.warning);}

/* Arena banks stay deterministic. Each handoff is fully warned; the same footprint drives drawing and damage. */
function emberMarker(w,h,side,{x0,x1,y,B}){const top=Math.max(B.y0+h.band,(w.camTop||0)+h.band),bottom=Math.min(B.y1-h.band,(w.camTop||0)+STAGE.camH-STAGE.hudBottom-h.band),rowY=side%2?bottom-8:top+8;
 if(h.kind==='hammers'){const width=h.width,x=Math.max(x0,Math.min(x1-width,w.player.x-width/2+(side%2?20:-20)));return {shape:'box',organic:true,x0:x,x1:x+width,y,band:h.band};}
 const m={shape:'box',lane:true,x0,x1,y:['jets','drill','faults','gust'].includes(h.kind)?Math.max(top,Math.min(bottom,y)):rowY,band:h.band};
 /* Both end islands remain clear through the rotating middle pulse, including its handoff. */
 if(h.kind==='islands'){const offset=side%3===0?-8:side%3===1?8:0;const mid=(x0+x1)/2+offset;m.x0=mid-60;m.x1=mid+60;m.y=(B.y0+B.y1)/2;m.band=(B.y1-B.y0)/2;m.islands=[{x0,x1:m.x0-2,y0:B.y0,y1:B.y1},{x0:m.x1+2,x1,y0:B.y0,y1:B.y1}];}
 if(h.kind==='banks'){const mid=(x0+x1)/2;m.parts=[{...m,x1:mid-24},{...m,x0:mid+24}];}
 return m;}

/* Positions are frozen at warning start. A second Legendary pulse starts only after the first expires. */
function veilMarker(w,h,side,{x0,x1,y,B}){if(['tide','beats'].includes(h.kind)){const top=B.y0+h.band+2,bottom=B.y1-h.band-2;return {shape:'box',lane:true,x0,x1,y:side%2?bottom:top,band:h.band};}
 const width=h.width,offset=h.kind==='pollen'?(side%2?28:-28):h.kind==='lures'?(side%2?16:-16):0,x=Math.max(x0,Math.min(x1-width,w.player.x-width/2+offset));return {shape:'box',organic:true,x0:x,x1:x+width,y,band:h.band};}
