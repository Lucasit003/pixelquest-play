/* phone-oct29 (#7, GAME_READINESS_OCT29): on a phone the action arc covers the screen's right side, and in a wide boss arena the
   camera (camface-oct28, kept for the boss-off bound) cannot always hold the hero and the boss in the clear band, so the boss stood
   under the potion/jump buttons or past the edge and a kid lost sight of it. (A camera that counted the boss's body was tried and
   dropped: when hero and boss fit the band camface already keeps the body clear, and when they do not the hero's own margin wins,
   so it changed almost nothing; campad-oct28 test D still pins the boss-fight camera frame by frame.) When less than half of the boss's body can be seen
   (under SEEN_OK of its box: off screen, or behind the buttons), a small "BOSS" chip with an arrow sits in the nearest clear spot on the boss's side and
   points at it. Phones only, boss flow only; it reads the world and moves nothing (no camera, no gameplay). */
import {spriteMeta} from '../gfx/actors/sprites.js';
import {icon} from './icons.js';

const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const meet=(a,b)=>Math.max(0,Math.min(a.right,b.right)-Math.max(a.left,b.left))*Math.max(0,Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top));
const hits=(a,b)=>a.left<b.right&&a.right>b.left&&a.top<b.bottom&&a.bottom>b.top;

/** A boss's drawn half-width in world units: its atlas's ground shadow x1.25 (Bramblejaw 36, its body without the club), else 32. */
export const bossHalfW=e=>{const m=e?.sprite?spriteMeta(e.sprite):null;return Math.round((m?.shadow?.[0]||26)*1.25*Math.max(1,e?.scale||1));};
/** The boss's drawn body in world units: bossHalfW either side of its feet and its atlas height (meta.height). */
export function bossBody(e){const m=e?.sprite?spriteMeta(e.sprite):null,hw=bossHalfW(e),h=Math.round((m?.height||90)*Math.max(1,e?.scale||1));
 return {left:e.x-hw,right:e.x+hw,top:e.y-(e.z||0)-h,bottom:e.y-(e.z||0)};}

/* the chip shows while less than this share of the body's box can be seen (the box holds some empty sprite cell, so .6 of it
   is roughly half the drawn boss: the crystal golem with only its head over the potion slot measured .51) */
export const SEEN_OK=.6;
/** How much of the boss's body (stage CSS px) a player can see: inside the view and not under a HUD box, 0..1 (null for no body). */
export function bossSeen(body,view,obstacles=[]){if(!body||!view?.width)return null;const area=(body.right-body.left)*(body.bottom-body.top);if(!(area>0))return null;
 const inView={left:Math.max(body.left,view.left),right:Math.min(body.right,view.right),top:Math.max(body.top,view.top),bottom:Math.min(body.bottom,view.bottom)};
 let seen=Math.max(0,inView.right-inView.left)*Math.max(0,inView.bottom-inView.top);
 if(seen>0)for(const o of obstacles)seen-=meet(inView,o);return +(Math.max(0,seen)/area).toFixed(2);}

/** Pure placement in stage CSS px. body: the boss's box; view: the canvas box; obstacles: HUD boxes. Returns null when at least
 *  half the body shows (outside the view or under an obstacle counts as hidden), else {left,top,size,angle,side,seen}. */
export function bossPointerPlacement({body,view,obstacles=[],size=48,gap=6,inset=6}){
 const seen=bossSeen(body,view,obstacles);if(seen==null||seen>=SEEN_OK)return null;
 const cx=(body.left+body.right)/2,cy=(body.top+body.bottom)/2,right=cx>view.left+view.width/2;
 const free=(x,y)=>{const b={left:x-gap,top:y-gap,right:x+size+gap,bottom:y+size+gap};return !obstacles.some(o=>hits(b,o));};
 const y0=clamp(cy-size/2,view.top+inset,view.bottom-size-inset),half=view.left+view.width/2;
 /* nearest the boss first: from the boss's edge inward along its height, then the same scan a step up and down */
 for(let dy=0;dy<=view.height;dy+=12)for(const y of dy?[y0-dy,y0+dy]:[y0]){if(y<view.top+inset||y>view.bottom-size-inset)continue;
  if(right){for(let x=Math.min(view.right-size-inset,Math.max(half,body.left-size-gap*2));x>=half;x-=4)if(free(x,y))return out(x,y);}
  else for(let x=Math.max(view.left+inset,Math.min(half-size,body.right+gap*2));x<=half-size;x+=4)if(free(x,y))return out(x,y);}
 return null;
 function out(x,y){return {left:Math.round(x),top:Math.round(y),size,side:right?'right':'left',seen:+seen.toFixed(2),angle:Math.round(Math.atan2(cy-(y+size/2),cx-(x+size/2))*180/Math.PI+90)};}
}

const CSS=`
#m-boss-pointer{position:absolute;z-index:6;width:48px;height:48px;box-sizing:border-box;pointer-events:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;background:#2a1418;border:3px solid #e0543c;box-shadow:2px 2px 0 #100d15;image-rendering:pixelated;animation:m-boss-pointer-bob 1s steps(2,end) infinite}
#m-boss-pointer[hidden]{display:none!important}
#m-boss-pointer .ico{transform-origin:center;filter:drop-shadow(1px 1px 0 #130d09)}
#m-boss-pointer b{font:700 10px/1 var(--ui,sans-serif);letter-spacing:1px;color:#ffd9c8;text-shadow:1px 1px 0 #120c08}
@keyframes m-boss-pointer-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
@media(prefers-reduced-motion:reduce){#m-boss-pointer{animation:none}}
:root[data-motion="reduced"] #m-boss-pointer{animation:none}
`;
/* everything drawn over the canvas on a phone that the boss can hide behind, or the chip must not cover */
const HUD='#touch button,#hotbar button,#hud-potion,#m-menu button,#boss-hud,#hud .hero-hud,#hud .hud-sub,#joy-ghost,#controls-tutorial,.controls-tutorial,#toast.show';

export function createBossPointer({stage,canvas}={}){
 const doc=stage?.ownerDocument;if(!doc||!canvas)return {update(){},hide(){}};
 if(!doc.getElementById('m-boss-pointer-style')){const st=doc.createElement('style');st.id='m-boss-pointer-style';st.textContent=CSS;doc.head.append(st);}
 const el=doc.createElement('div');el.id='m-boss-pointer';el.hidden=true;el.setAttribute('aria-hidden','true');el.innerHTML=icon('up',{size:24})+'<b>BOSS</b>';stage.append(el);
 const arrow=el.querySelector('.ico');let obs=null,obsAt=-1e9;
 const hide=()=>{el.hidden=true;};
 return {element:el,hide,update({world,boss,now=0}={}){
  if(!doc.documentElement.classList.contains('m-mode')||!world?.level||world.paused||world.flow!=='boss'||!boss||boss.hp<=0||!world.camera?.width){hide();return;}
  const r=canvas.getBoundingClientRect(),sr=stage.getBoundingClientRect();if(!r.width){hide();return;}
  const ox=sr.left+(stage.clientLeft||0),oy=sr.top+(stage.clientTop||0),view={left:r.left-ox,top:r.top-oy,width:r.width,height:r.height,right:r.right-ox,bottom:r.bottom-oy};
  /* the HUD boxes are re-read twice a second (the arc does not move during a fight) */
  if(!obs||now-obsAt>500){obsAt=now;obs=[...doc.querySelectorAll(HUD)].filter(n=>!n.hidden&&!n.closest('[hidden]')&&getComputedStyle(n).display!=='none'&&getComputedStyle(n).visibility!=='hidden'&&+getComputedStyle(n).opacity>.05)
   .map(n=>n.getBoundingClientRect()).filter(b=>b.width&&b.height).map(b=>({left:b.left-ox,top:b.top-oy,right:b.right-ox,bottom:b.bottom-oy}));}
  const c=world.camera,kx=view.width/c.width,ky=view.height/c.height,L=c.x-c.width/2,T=c.y-c.height/2,b=bossBody(boss);
  const body={left:view.left+(b.left-L)*kx,right:view.left+(b.right-L)*kx,top:view.top+(b.top-T)*ky,bottom:view.top+(b.bottom-T)*ky};
  const at=bossPointerPlacement({body,view,obstacles:obs});el.dataset.seen=bossSeen(body,view,obs);el.dataset.body=[body.left,body.top,body.right,body.bottom].map(Math.round).join(',');
  if(!at){hide();return;}
  el.hidden=false;el.dataset.side=at.side;el.style.left=`${at.left}px`;el.style.top=`${at.top}px`;arrow.style.transform=`rotate(${at.angle}deg)`;
 }};
}
