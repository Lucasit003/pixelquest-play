/* Ability seals in a fight (improve20-r20j-nov4; rules: game/ability-seals.js; docs/design/ABILITY_SEALS.md). The World (scenes/combat.js)
   calls four hooks: sealStart after the run layer sets up a level, sealCast at the top of cast() (a woken ability cast into an unbroken seal
   with no foe in reach goes into the seal), sealTouch with the secrets check (the approach line and the cache), and sealLayer with the
   depth-sorted actors. The pocket is an ellipse on the far verge: while the seal holds, layout.blocked() says so, so neither hero nor foe
   walks in; the road below it stays open (the band is 128 units deep, the pocket 26). All drawing is code: a rune dome, one pip per
   ability still needed, a crack burst; the cache is the existing reward chest (ui/skin/rewards/chest.png). No Hall, Rift or arena run. */
import {sealsIn,sealBroken,sealLooted,breakSeal,lootSeal,sealNeedText,wokenCount,rewardText} from '../game/ability-seals.js';
import {unlocked} from '../game/math.js';
import {asleep} from '../academics/awakening.js';
import {drawPixelText} from '../ui/canvas-ui.js';
import {sfx} from '../core/audio.js';
import {earnTitles} from '../game/titles.js';
/* improve20-r20m-nov4 #2 */import {bannerActive} from '../gfx/stage-view.js';
export const POCKET={rx:36,ry:30,lift:4,chestR:20,reach:130,see:110};
const TINT={elderwood:'#8fe6a0',emberkeep:'#ffb36b',veilmoor:'#c6a8ff'};
const IMG={};const img=src=>{if(typeof Image==='undefined')return null;if(!IMG[src]){const i=new Image();i.src=new URL(`../${src}`,import.meta.url).href;IMG[src]=i;}return IMG[src].complete&&IMG[src].naturalWidth?IMG[src]:null;};
export const CHEST_ART='ui/skin/rewards/chest.png';
/* inside the closed pocket (an ellipse centred just above the band's far edge) */
export const inPocket=(z,x,y)=>!!z&&!z.broken&&((x-z.x)/z.rx)**2+((y-z.cy)/z.ry)**2<1;
export function sealStart(w){w.aseal=null;const l=w.level;if(!l||w.hall||w.rift||w.arena||!w.layout)return null;const def=sealsIn(l.id)[0];if(!def)return null;const L=w.layout,top=L.floorTop;
 const z=w.aseal={def,id:def.id,x:def.x,cy:top-POCKET.lift,rx:POCKET.rx,ry:POCKET.ry,chest:{x:def.x,y:top+8},hits:new Set(),broken:sealBroken(w.save,def.id),looted:sealLooted(w.save,def.id),said:false,burst:0,pulse:0,tint:TINT[def.chapter]||'#9fd8ff'};
 const b0=L.blocked;L.blocked=(x,y)=>b0(x,y)||inPocket(z,x,y);img(CHEST_ART);return z;}
const woken=(w,a)=>!!a&&!!unlocked(w.save,a)&&!asleep(w.save,a)&&a.id!==w.echoId;
const sealDist=(w,z)=>Math.hypot(w.player.x-z.x,(w.player.y-(z.cy+z.ry*.6))*1.3);
/* a cast into the seal: true when the cast went to the seal (the caller spends nothing more and returns). `pose()` claims the cast's pose. */
export function sealCast(w,a,pose){const z=w.aseal,p=w.player;if(!z||z.broken||!w.level||w.ended||!p)return false;if(sealDist(w,z)>POCKET.reach)return false;
 if(w.enemies?.some(e=>e.hp>0&&Math.hypot(e.x-p.x,e.y-p.y)<=(a.range||60)+30))return false;
 if(!woken(w,a)){w.text?.('Only your own woken abilities break a seal',z.x,z.cy-26,'#ffd27a');return false;}
 p.mp-=a.cost;p.cooldowns[a.id]=a.cd*(1-(w.base?.cdr||0));p.facing=z.x>=p.x?1:-1;pose?.();
 w.effect?.('nova',z.x,z.cy+z.ry*.5,{element:a.element||'arcane',radius:28,life:.5,max:.5});z.pulse=.5;
 const n=wokenCount(w.save),need=z.def.cast,was=z.hits.has(a.id);z.hits.add(a.id);
 if(n<z.def.awake){w.text?.(sealNeedText(w.save,z.def),z.x,z.cy-26,'#ffd27a',true);sfx('blocked');return true;}
 if(z.hits.size>=need){z.broken=true;z.burst=1;z.brokeNow=true/* improve20-r21b-nov4 #4 */;breakSeal(w.save,z.id);w.effect?.('nova',z.x,z.cy+z.ry*.5,{element:'holy',radius:56,life:.9,max:.9});w.quake?.('aoe');w.text?.('SEAL BROKEN!',z.x,z.cy-30,'#fff1a8',true);w.text?.('Walk in for the cache',z.x,z.cy+30,'#f3d98a');sfx('unlock');w.events.persist?.();return true;}
 w.text?.(was?'A different ability!':`${z.hits.size} of ${need}`,z.x,z.cy-26,was?'#ffd27a':'#e9f6ff',true);sfx(was?'blocked':'ward');return true;}
/* each move: the seal's words once a run as the hero comes near, and the cache when the hero steps in (or presses interact beside it) */
export function sealTouch(w,pressed){const z=w.aseal,p=w.player;if(!z||!p||!w.level||w.ended)return null;/* improve20-r21b-nov4 #4: the hero walked on past the closed pocket *//* improve23-r23s-nov4 #4 (kidsim6 #10: a boss retry starts past the pocket and was counted as a walk-by): only a hero who came within POCKET.see on this run has passed it */if(!z.broken&&sealDist(w,z)<POCKET.see)z.near=true;if(!z.broken&&z.near&&p.x>z.x+POCKET.reach)z.passed=true;
 /* the barrier's own words are drawn over it (sealLayer); a toast would sit on top of the pocket, so the approach line is a floating text */if(!z.broken&&!z.said&&sealDist(w,z)<POCKET.see){z.said=true;w.text?.(`Inside: ${rewardText(z.def)}`,z.x,z.cy-4,'#f3d98a');}
 if(!z.broken||z.looted)return null;if(Math.hypot(p.x-z.chest.x,(p.y-z.chest.y)*1.2)>(pressed?POCKET.chestR+10:POCKET.chestR))return null;
 const got=lootSeal(w.save,z.id);z.looted=true;if(!got)return null;z.got=got;earnTitles(w.save);
 /* improve20-r21b-nov4 #4 (audit15 #16, shot 12: the cache toast sat over the hero standing in the pocket): the cache's words float on the road by the pocket (cacheY), not in a screen toast over the hero; the win card names it again */
 w.text?.(`Seal cache: +${got.gold} gold, +${got.essence} Essence`,z.chest.x,cacheY(z),'#f3d98a',false,{life:CACHE_LIFE});if(got.title)w.text?.(`New title: ${got.title}!`,z.chest.x,cacheY(z)+24,'#fff1a8',false,{life:CACHE_LIFE});sfx('coin');w.events.sealLoot?.(z.def,got);w.events.persist?.();return got;}
/* is the hero beside something the seal offers (main.js's interact verb and the phone's interact button can read it) */
export const nearSealChest=w=>{const z=w.aseal,p=w.player;return !!z&&z.broken&&!z.looted&&!!p&&Math.hypot(p.x-z.chest.x,(p.y-z.chest.y)*1.2)<POCKET.chestR+10;};

/* drawing: depth-sorted items (World.enemyLayer). The barrier: two rune pillars and a translucent dome between them over the chest, one pip
   per ability still needed (lit as each different ability lands), and its words above it while the hero is near. Reduced motion holds it still. */
const DOME_H=46;
/* improve20-r21b-nov4 #4: the cache line's height. The pocket sits at the far verge, so a hero standing in it is near the top of the view, where
   world/stage labels are kept clear of the HUD (gfx/world.js clearLabel) and pile onto the hero; the words go on the open road just under the
   pocket (as the seal's own words do, WORDS_BELOW), clear of the hero, and stay up as long as the old toast did */
export const CACHE_LIFE=2.6;export const cacheY=z=>Math.round(z.chest.y+6+WORDS_BELOW+30);
/* improve20-r21b-nov4 #4: what the seal did on this run, for the win card (game/ability-seals.js sealRunLine), or null */
export function sealRunNote(w){const z=w?.aseal;if(!z||!z.def)return null;return {id:z.id,level:z.def.level,broke:!!z.brokeNow,got:z.got||null,passed:!!z.passed,broken:!!z.broken,openable:wokenCount(w.save)>=z.def.awake};}
/* improve20-r20m-nov4 #2 (R20J: the words sat over the far verge, under the level toasts and the WAVE CLEARED banner): they are drawn on the road just under
   the pocket (WORDS_BELOW units below its base), and only while the hero is near and no centre-screen beat (stage-view bannerActive) is up */
export const WORDS_BELOW=20;
export const sealWordsDue=(w,z)=>!!z&&!z.broken&&!!w?.player&&sealDist(w,z)<POCKET.see+40&&!bannerActive(w);
function pillar(c,x,by,tint,a){c.fillStyle='#2b2438';c.fillRect(x-4,by-30,8,30);c.fillStyle='#4a3f5c';c.fillRect(x-4,by-30,3,30);c.fillStyle='#1a1426';c.fillRect(x-5,by-2,10,3);c.fillRect(x-5,by-33,10,4);
 c.globalAlpha=a;c.fillStyle=tint;c.fillRect(x-1,by-25,3,3);c.fillRect(x-1,by-18,3,3);c.fillRect(x-1,by-11,3,3);c.globalAlpha=1;}
export function sealLayer(w,c,t,dt=1/60){const z=w.aseal;if(!z)return [];const still=w.motion===false,out=[];z.pulse=Math.max(0,z.pulse-dt);z.burst=Math.max(0,z.burst-dt*1.2);
 const cx=Math.round(z.x),by=Math.round(z.chest.y+6),rx=z.rx-6;
 out.push({y:z.chest.y-1,draw:()=>{const im=img(CHEST_ART);if(!im)return;c.save();if(z.looted)c.globalAlpha=.5;c.drawImage(im,Math.round(z.chest.x-im.width/2),Math.round(z.chest.y-im.height+6));c.restore();}});
 out.push({y:z.chest.y,draw:()=>{c.save();
  if(!z.broken){const a=still?.8:.7+.2*Math.sin(t*2.6)+z.pulse;
   /* the dome: a soft fill, a bright rim, a ring on the ground */
   c.globalAlpha=Math.min(.5,.28+z.pulse*.4);c.fillStyle=z.tint;c.beginPath();c.ellipse(cx,by,rx,DOME_H,0,Math.PI,0);c.ellipse(cx,by,rx,7,0,0,Math.PI);c.fill();
   c.globalAlpha=Math.min(1,a);c.strokeStyle=z.tint;c.lineWidth=2;c.beginPath();c.ellipse(cx,by,rx,DOME_H,0,Math.PI,0);c.stroke();c.lineWidth=1;c.strokeStyle='#ffffff';c.globalAlpha=Math.min(.8,a*.7);c.beginPath();c.ellipse(cx,by,rx-3,DOME_H-4,0,Math.PI*1.15,Math.PI*1.45);c.stroke();
   c.globalAlpha=Math.min(1,a);c.strokeStyle=z.tint;c.beginPath();c.ellipse(cx,by,rx+3,8,0,0,Math.PI*2);c.stroke();
   /* rune marks climbing the dome, turning slowly */
   const k=9,sp=still?0:t*.35;c.fillStyle='#ffffff';for(let i=0;i<k;i++){const f=((i/k+sp)%1),ang=Math.PI+f*Math.PI,px=cx+Math.cos(ang)*rx,py=by+Math.sin(ang)*DOME_H;c.globalAlpha=.4+.6*Math.sin(f*Math.PI);c.fillRect(Math.round(px)-1,Math.round(py)-1,3,3);}
   c.globalAlpha=1;pillar(c,cx-rx-6,by+2,z.tint,Math.min(1,a));pillar(c,cx+rx+6,by+2,z.tint,Math.min(1,a));
   const n=z.def.cast,gap=9,x0=cx-(n-1)*gap/2,py=by-DOME_H-8;for(let i=0;i<n;i++){const on=i<z.hits.size,px=Math.round(x0+i*gap);c.globalAlpha=1;c.fillStyle='#1a1426';c.fillRect(px-4,py-4,8,8);c.fillStyle=on?'#fff1a8':z.tint;c.globalAlpha=on?1:.5;c.fillRect(px-3,py-3,6,6);}
   c.globalAlpha=1;}
  else{/* broken: the pillars stay, dark; shards on the ground; a burst as it breaks */pillar(c,cx-rx-6,by+2,z.tint,.15);pillar(c,cx+rx+6,by+2,z.tint,.15);c.globalAlpha=.4;c.fillStyle=z.tint;for(let i=0;i<9;i++){const ang=i/9*Math.PI*2;c.fillRect(Math.round(cx+Math.cos(ang)*rx*.9),Math.round(by+Math.sin(ang)*6),2,2);}
   if(z.burst>0){const r=(1-z.burst)*rx*2;c.globalAlpha=z.burst;c.strokeStyle='#fff1a8';c.lineWidth=2;c.beginPath();c.ellipse(cx,by-DOME_H/2,r,r*.7,0,0,Math.PI*2);c.stroke();for(let i=0;i<14;i++){const ang=i/14*Math.PI*2+.3;c.fillStyle=i%2?'#fff1a8':z.tint;c.fillRect(Math.round(cx+Math.cos(ang)*r),Math.round(by-DOME_H/2+Math.sin(ang)*r*.7),3,3);}}}
  c.restore();}});
 /* improve20-r20m-nov4 #2: the words are drawn last (over the hero walking past on the road), not in the pocket's depth slot */
 out.push({y:1e9,draw:()=>{if(!sealWordsDue(w,z))return;const nw=wokenCount(w.save),short=nw<z.def.awake;c.save();c.globalAlpha=1;drawPixelText(c,short?`NEEDS ${z.def.awake} ABILITIES: YOU HAVE ${nw}`:`CAST ${z.def.cast} DIFFERENT ABILITIES`,cx,by+WORDS_BELOW,{align:'center',color:short?'#ffd27a':'#eaffef',outline:'#18122a'});c.restore();}});
 return out;}
/* improve23-r23s-nov4 #3 (kidsim6 #9, shots 02/08: GO was drawn over the seal's right pillar and dome at 1280x720): the seal's box in view units
   (pillars, dome, pips, its words under it, and the chest), for gfx/stage-view.js to keep the GO arrow and the lane chevrons off it; null when off view */
export function sealViewRect(w,vw=480){const z=w?.aseal;if(!z)return null;const ox=w.camX||0,oy=w.camTop||0,by=z.chest.y+6;
 const r={left:z.x-z.rx-12-ox,right:z.x+z.rx+12-ox,top:by-DOME_H-14-oy,bottom:by+WORDS_BELOW+8-oy};return r.right<0||r.left>vw?null:r;}

