import {drawPixelText} from '../ui/canvas-ui.js';
import {sfx} from '../core/audio.js';
/* Arena-owned hazards: visible warning -> one bounded impact window -> rest. No actor, XP or save record.
   Placement is checked against the baked collision and camera. A failed check waits; tells are never shortened. */
import {STAGE} from '../game/stage.js';
import {liveThreatFx} from './encounter-budget.js';
/* the arena's hazard row: the tier's encounter, or a Rift run's Hazard storm (scenes/rift-fx.js riftStorm) */
export const encOf=w=>w?.level?.encounter||w?.riftStorm||null;
export const HAZARD_CUES={tide:'Tide! Walk to the dry lane!',lures:'Lure! Leave the circle!',echoes:'Echo! Leave your old circle!',stars:'Starfall! Leave the circle!',beats:'Choir beat! Step off the glowing row!',portals:'Portal! Leave the solid circle!',tentacles:'Tentacle! Leave the circle!',pollen:'Pollen! Leave the circle!',volley:'Arrows! Step off the glowing row!',stones:'Falling stone! Leave the circle!',graves:'Bones rising! Step off the glowing row!',roots:'Roots! Leave the circle!',rubble:'Falling rubble! Leave the circle!',thorns:'Thorns! Move to the CLEAR lane!',wire:'Tripwire! Step off the glowing row!',spores:'Spores! Leave the circle!',vents:'Vents! Move to the CLEAR lane!',hammers:'Hammer falling! Leave the circle!',jets:'Fire jet! Step off the glowing row!',drill:'Drill volley! Step off the glowing row!',banks:'Vents! Move to the CLEAR lane!',faults:'Glass fault! Step off the glowing row!',islands:'Lava pulse! Move to a green island!',gust:'Ash gust! Move to the CLEAR lane!'};
export const ESCAPE_WIDTH=48,SLOW_WALK=58,REACTION=.4;
export const hazardContains=(m,p,pad=0)=>m.organic?((p.x-(m.x0+m.x1)/2)/((m.x1-m.x0)/2+pad))**2+((p.y-m.y)/(m.band+pad))**2<=1:p.x>=m.x0-pad&&p.x<=m.x1+pad&&Math.abs(p.y-m.y)<=m.band+pad;
const fighting=w=>['wave','boss'].includes(w.flow)&&!w.ended&&w.player?.hp>0&&!w.deathPending;
const guarded=w=>w.enemies.some(e=>e.hp>0&&(encOf(w)?.readable&&e.dizzyUntil>w.time||e.shielded||e.linkTo||e.helper||e.decoy||e.mini||e.echo||e.entering>0||e.cinematic&&e.inv>1))||(w.enemyFx||[]).some(f=>f.pilotPuddle);
const attacking=w=>w.enemies.some(e=>e.hp>0&&(encOf(w)&&e.boss&&e.brain?.mode==='recover'||e.wind>0||['tele','act'].includes(e.brain?.mode)))||(w.enemyFx||[]).some(f=>liveThreatFx(f))||(w.shots||[]).some(s=>s.hostile);
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
 /* improve20-p-oct31 #6: on a phone a CLEAR column could sit under the joystick or the action arc (ui/mobile.js padL/padR, each a hero
    half-width more than the control reaches); it is now chosen in the floor the controls leave free. Desktop pads are 0. */
 const cl=Math.max(0,(STAGE.padL||0)-20),cr=Math.max(0,(STAGE.padR||0)-20);
 const xs=[];for(let x=Math.max(B.x0+(w.lock?78:24),(w.camX||0)+24+cl);x<=Math.min(B.x1-(w.lock?78:24),(w.camX||0)+STAGE.camW-24-cr);x+=2)if(x+24<m.x0||x-24>m.x1)xs.push(x);xs.sort((a,b)=>Math.abs(a-p.x)-Math.abs(b-p.x));for(const x of xs){if(Math.abs(x-p.x)>speed*Math.max(0,warning-REACTION)+1e-9)continue;/* improve20-r9a-nov1: the column is the clear stretch round the hero's row, not always the whole band height: v7's deep water
     (game/sleeper-pool.js) blocks the back of some columns, and the corridor drawn stops at it (an open arena keeps the full band) */
   const colClear=y=>{for(let xx=x-24;xx<=x+24;xx+=4)if(blocked(xx,y))return false;return true;};if(!colClear(p.y))continue;let lo=p.y,hi=p.y;while(lo-4>=B.y0&&colClear(lo-4))lo-=4;while(hi+4<=B.y1&&colClear(hi+4))hi+=4;if(lo-B.y0<4)lo=B.y0;if(B.y1-hi<4)hi=B.y1;if(hi-lo<48)continue;let clear=true;const n=Math.ceil(Math.abs(x-p.x)/4);for(let i=0;i<=n;i++)if(blocked(p.x+(x-p.x)*i/Math.max(1,n),p.y))clear=false;if(clear)return {x0:x-24,x1:x+24,y0:lo,y1:hi};}return null;}
export function hazardMarker(w,h,side=0){const B=w.bounds(),cam=w.camX||0,x0=Math.max(B.x0+54,cam+24),x1=Math.min(B.x1-54,cam+STAGE.camW-24);let y=encOf(w)?Math.max(B.y0+h.band,Math.min(B.y1-h.band,w.player.y+(encOf(w).readable&&!['stones','roots'].includes(h.kind)?(side%2?4:-4):0))):(side?B.y1-h.band:B.y0+h.band);
 /* tallfields-oct31: on a band taller than STAGE's a small camera may not show both edges at once; an edge marker then sits at the
    edge of the visible strip instead of being skipped (96-unit bands keep their placement exactly) */
 /* improve20-p-oct31 #5: a phone's visible strip ends at its floor gap (STAGE.padB; game/stage.js phoneNearEdge ends the band there), not
    at the desktop hotbar's 34 px, which on a phone skipped every hazard while the hero stood in the near third of the band */
 const shown=(w.camTop||0)+STAGE.camH-(STAGE.padB??STAGE.hudBottom);
 if(!encOf(w)&&w.layout&&w.layout.floorBottom-w.layout.floorTop>STAGE.floorBottom-STAGE.floorTop)y=side?Math.min(y,shown-h.band):Math.max(y,(w.camTop||0)+h.band);
 if(x1-x0<120||y-h.band<(w.camTop||0)||y+h.band>shown)return null;
 if(encOf(w)?.veilmoor)return veilMarker(w,h,side,{x0,x1,y,B});
 if(encOf(w)?.emberkeep)return emberMarker(w,h,side,{x0,x1,y,B});
 if(encOf(w)?.readable&&['volley','graves','thorns','wire'].includes(h.kind))return {shape:'box',lane:true,x0,x1,y:w.player.y<=(B.y0+B.y1)/2?Math.min(y,B.y1-ESCAPE_WIDTH-h.band-2):Math.max(y,B.y0+ESCAPE_WIDTH+h.band+2),band:h.band};
 const width=h.width||64,x=Math.max(x0,Math.min(x1-width,w.player.x-width/2));return {shape:'box',organic:true,x0:x,x1:x+width,y,band:h.band};}
export function tierTick(w,dt){const r=encOf(w);if(!r||w.hazardsDisabled)return;if(!w.tierFx)clearHazards(w);const f=w.tierFx;
 if(!fighting(w)){clearHazards(w);return;}if(w.paused||w.cinematicShot)return;if(r.readable&&(w.level.id==='e8'||r.emberkeep||r.veilmoor)&&w.flowT<2){f.current=null;f.age=0;f.want=false;return;}
 if(guarded(w)){f.current=null;f.want=false;f.age=0;return;}
 const h=r.hazard;if(!f.current){f.age+=dt;if(f.age<h.rest)return;f.want=true;if(attacking(w))return;const m=hazardMarker(w,h,h.alternate?f.side%2:0);if(!m||!escapeRoute(w,m,h.warning)){f.want=false;f.age=h.rest-.5;return;}
  const markers=m.parts||[m];if(w.tierKey==='legendary'&&!r.readable){const B=w.bounds(),left=Math.max(B.x0+54,(w.camX||0)+24),right=Math.min(B.x1-54,(w.camX||0)+STAGE.camW-24),m2={...m,x0:m.x0-left>=80?Math.max(left,m.x0-120):m.x1+8,x1:m.x0-left>=80?m.x0-8:Math.min(right,m.x1+120)};if(m2.x1-m2.x0>=48&&escapeRoute(w,{...m,x0:Math.min(m.x0,m2.x0),x1:Math.max(m.x1,m2.x1)},h.warning))markers.push(m2);}
  f.current={markers,marker:m,safe:r.readable&&(m.lane||r.emberkeep||r.veilmoor)?escapeRoute(w,m,h.warning):null,islands:m.islands,cue:r.readable?HAZARD_CUES[h.kind]:null,age:0,warning:h.warning,active:h.active,hit:false,kind:h.kind};f.want=false;f.age=0;f.count++;if(r.readable)sfx('tell.aoe');return;}
 const z=f.current;if(z.marker.x0<(w.camX||0)||z.marker.x1>(w.camX||0)+STAGE.camW){f.current=null;f.age=0;return;}z.age+=dt;if(r.readable&&z.age>=z.warning&&!z.impact){z.impact=true;sfx('land');const fx={stones:'fx-wr-rocks',graves:'fx-bone-totem',volley:'fx-hr-arrow',roots:'fx-earth-spike',rubble:'fx-wr-rocks',thorns:'fx-earth-spike',spores:'fx-spore',stars:'fx-bolt-holy',echoes:'fx-col-shadow',portals:'fx-portal',tentacles:'fx-tentacle',pollen:'fx-spore',lures:'fx-marsh-gas'}[h.kind];if(fx)(w.enemyFx??=[]).push({kind:'hazard',owner:z,a:{dmg:0},fx,hs:['stones','rubble'].includes(h.kind)?'play':['volley','spores'].includes(h.kind)?'fly':'rise',x:(z.marker.x0+z.marker.x1)/2,y:z.marker.y,r:0,t:0,hit:true,marker:null});}if(z.age+1e-9>=z.warning&&z.age<z.warning+z.active&&!z.hit&&(z.markers||[z.marker]).some(m=>hazardContains(m,w.player))&&!(w.player.z>14)){
  if(h.slow){w.player.slowZ=Math.min(w.player.slowZ??1,1-h.slow);}else{const before=w.player.hp;w.hurt(encOf(w).hazard.damage??24,{x:(z.marker.x0+z.marker.x1)/2,y:z.marker.y,kb:24,move:`arena ${z.kind}`,arenaHazard:true});if(w.player.hp<before)z.hit=true;}}
 if(z.age+1e-9>=z.warning+z.active){f.current=null;f.age=r.readable&&w.tierKey==='legendary'&&['stones','wire','hammers','banks','stars','pollen','beats','portals','tentacles'].includes(h.kind)&&f.side%2===0?h.rest:0;f.side++;}}
/* The pilot keeps its oval pools. Elderwood lanes use continuous bands, never tiled crack bricks;
   organic arena footprints use the exact ellipse for impact. Progress follows the perimeter, never a blocky bar. */
/* improve20-w-nov1 #11 (a5): danger ground reads on every floor, light cobbles or dark stone. A dark filled footprint (the floor shows
   through it as shadowed ground) with a thick two-tone rim; the rim pulses faster as the hit nears (1.5 Hz rising to 6.5 Hz, steady under
   reduced motion); falling rocks also cast a shadow that grows toward impact. The footprint is the exact hit area. o={age,warning,motion,kind} */
export const FALLING=['stones','rubble','hammers','stars'];
export function dangerPulse(o={}){if(o.motion===false)return 1;const a=Math.max(0,o.age||0),W=Math.max(.2,o.warning||1);return .5+.5*Math.sin(Math.PI*2*(1.5*a+2.5*a*a/W));}
export function softMarker(c,m,prog=0,live=false,o={}){if(m.lane){softBand(c,m,prog,live,o);return;}const box=m.shape==='box',x=box?(m.x0+m.x1)/2:m.x,y=m.y,rx=box?Math.abs(m.x1-m.x0)/(m.organic?2:Math.SQRT2):m.r,ry=box?m.band*(m.organic?1:Math.SQRT2):m.r*.55,p=Math.max(0,Math.min(1,prog)),pu=dangerPulse(o),oval=(a,b)=>{c.beginPath();c.ellipse(x,y,a,b,0,0,Math.PI*2);};
 c.save();c.fillStyle=live?'rgba(120,18,6,.55)':`rgba(26,8,4,${(.34+.16*p).toFixed(3)})`;oval(rx+1,ry+1);c.fill();
 c.fillStyle=live?'rgba(255,92,48,.32)':`rgba(255,110,52,${(.10+.16*p*pu).toFixed(3)})`;oval(rx+1,ry+1);c.fill();
 if(FALLING.includes(o.kind)&&!live){const k=.22+.62*p;c.fillStyle=`rgba(0,0,0,${(.22+.34*p).toFixed(3)})`;oval(rx*k,ry*k);c.fill();}
 c.strokeStyle='#2a0d06';c.globalAlpha=.85;c.lineWidth=4.5;oval(rx+1,ry+1);c.stroke();
 c.strokeStyle=live?'#ff6a3d':p>.7?'#ff7a45':'#ffc061';c.globalAlpha=.65+.35*pu;c.lineWidth=2.5;oval(rx+1,ry+1);c.stroke();
 c.globalAlpha=.9;c.strokeStyle='#fff1c4';c.lineWidth=2;c.beginPath();c.ellipse(x,y,rx*.85,ry*.8,0,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.max(.03,p));c.stroke();c.restore();}
/* A continuous band encloses the exact rectangular hit area, including its corners: dark fill and a thick pulsing rim (CLEAR lanes keep their green) */
function softBand(c,m,prog,live,o={}){const x=Math.min(m.x0,m.x1),width=Math.abs(m.x1-m.x0),y=m.y-m.band,height=m.band*2,safe=m.safe,p=Math.max(0,Math.min(1,prog)),pu=dangerPulse(o),box=()=>{c.beginPath();c.roundRect(x-2,y-2,width+4,height+4,3);};c.save();
 if(safe){c.strokeStyle='#a5f0cc';c.fillStyle='rgba(82,209,157,.09)';box();c.fill();for(const [line,alpha] of [[7,.08],[4,.16],[1.5,.95]]){c.lineWidth=line;c.globalAlpha=alpha;c.stroke();}}
 else{c.fillStyle=live?'rgba(120,18,6,.55)':`rgba(26,8,4,${(.32+.16*p).toFixed(3)})`;box();c.fill();c.fillStyle=live?'rgba(255,92,48,.3)':`rgba(255,110,52,${(.10+.16*p*pu).toFixed(3)})`;c.fill();c.strokeStyle='#2a0d06';c.globalAlpha=.85;c.lineWidth=4.5;c.stroke();c.strokeStyle=live?'#ff6a3d':p>.7?'#ff7a45':'#ffc061';c.globalAlpha=.65+.35*pu;c.lineWidth=2.5;c.stroke();}
 c.globalAlpha=.9;c.lineWidth=1;if(safe){c.setLineDash([5,4]);c.stroke();if(!m.noLabel){const lx=Math.round(m.labelX??x+width/2),ly=Math.round(m.labelY??m.y+3);if(m.labelSink)m.labelSink.push({x:lx,y:ly});else clearLabel(c,lx,ly);}}else{c.strokeStyle='#fff1c4';c.lineWidth=2;c.beginPath();c.moveTo(x,y+height/2);c.lineTo(x+width*Math.max(.03,p),y+height/2);c.stroke();}c.restore();}
/* improve20-p-oct31 #6: every lane on screen right now, in world boxes: live boss telegraphs (box markers) and their CLEAR lanes, and the
   arena hazard's markers, CLEAR lane and islands. main.js fades the hotbar or a phone button a danger lane passes under (combat.js follow()
   reads the same CLEAR lanes inline, to keep a CLEAR column between a phone's controls). */
const laneBox=m=>m&&m.shape==='box'&&Number.isFinite(m.band)?{x0:Math.min(m.x0,m.x1),x1:Math.max(m.x0,m.x1),y0:m.y-m.band,y1:m.y+m.band}:null;
export function liveLanes(w){const out=[],safe=[];for(const e of w?.enemies||[]){const b=e.brain;if(e.hp<=0||!b||!['tele','act'].includes(b.mode))continue;for(const m of b.markers||[]){const r=laneBox(m);if(r)out.push(r);}if(b.safeLane)safe.push(b.safeLane);}
 const z=w?.tierFx?.current;if(z){for(const m of z.markers||[z.marker]){const r=laneBox(m);if(r)out.push(r);}for(const r of z.islands||[z.safe])if(r)safe.push(r);}
 return {danger:out,safe,all:[...out,...safe]};}
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
export function tierLayer(w,c){const z=w.tierFx?.current;if(!z)return;if(!z.islands)safeLane(c,z.safe,!encOf(w)?.readable,w);for(const r of z.islands||[])safeLane(c,r,!encOf(w)?.readable,w);for(const m of z.markers||[z.marker])softMarker(c,m,z.age/z.warning,z.age+1e-9>=z.warning,{age:z.age,warning:z.warning,motion:w.motion!==false,kind:z.kind});}

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
