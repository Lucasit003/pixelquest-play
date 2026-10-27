/* Companions (game/data.js PETS): original PixelLab animal sprites in pet-<key> atlases. The pet
   eases toward its spot beside the hero, so it trails, turns and breaks into a walk or a run on its own; it draws
   the same downloaded ground shadow (Mixel's, unmodified) as the heroes and stages. Replaces the code-drawn
   companion. Under reduced motion it keeps to its spot, walks only while the hero walks and holds its first
   idle frame. */
import {loadSprite,drawSprite} from './sprites.js';
import {petDirectionAtlas} from './pet-directions.js';

export const petSpriteId=pet=>pet?(pet.sprite||'pet-'+pet.key):null;
let shadow=null;
function drawShadow(c,x,y){if(typeof Image==='undefined')return;if(!shadow){shadow=new Image();shadow.src=new URL('../../assets/sprites/hero-shadow.png',import.meta.url).href;}
 if(shadow.complete&&shadow.naturalWidth){c.save();c.imageSmoothingEnabled=false;c.drawImage(shadow,Math.round(x)-16,Math.round(y)-16);c.restore();}}

/* One follower per pet key: eased position, facing and state. Asking twice for the same t returns the same
   answer, so the depth sort can read it before the draw. A jump (a new scene, a teleport, a paused frame)
   puts the pet straight back on its spot. */
const F=new Map();
/* Pick the dominant travel axis, with a small tie band to prevent flicker on almost-diagonal paths.
   The follower's displacement matters, including when it catches up to a stationary hero. */
export function petTravelDirection(dx,dy,previous='side'){
 const ax=Math.abs(dx),ay=Math.abs(dy);if(Math.max(ax,ay)<.001)return previous;
 if(ay>ax*1.1)return dy<0?'north':'south';
 if(ax>ay*1.1)return 'side';
 return previous==='side'?'side':dy<0?'north':'south';
}
export function petFollow(pet,tx,ty,t,facing=1,motion=true,moving=false){const key=pet.key,face=facing<0?-1:1;let f=F.get(key);
 if(f&&t===f.t&&f.motion===motion)return f;
 const jump=f&&Math.hypot(tx-f.x,ty-f.y)>90,reset=!f||jump||t<f.t||t-f.t>.5||f.motion!==motion;
 if(reset){const keep=f&&!jump&&t>=f.t;f={x:tx,y:ty,t,motion,facing:keep?f.facing:face,direction:keep?f.direction:'side',age:0,state:!motion&&moving?'walk':'idle'};F.set(key,f);return f;}
 const dt=t-f.t,k=motion?Math.min(1,dt*6):1,nx=f.x+(tx-f.x)*k,ny=f.y+(ty-f.y)*k,dx=nx-f.x,dy=ny-f.y,speed=dt>0?Math.hypot(dx,dy)/dt:0;
 const state=motion?(speed>84?'run':speed>8?'walk':'idle'):(moving?'walk':'idle'),direction=state==='idle'?f.direction:petTravelDirection(dx,dy,f.direction);
 f.age=state===f.state&&direction===f.direction?f.age+dt:0;
 if(state!=='idle'&&Math.abs(dx)>.001)f.facing=dx>0?1:-1;
 f.state=state;f.direction=direction;f.x=nx;f.y=ny;f.t=t;return f;}

/* North/south use real supplementary rows. Missing rows keep the original animation. A real
   walk frame can be held for idle when no static rotation exists; it is never geometrically rotated. */
export function petRenderPose(f,base,directional,t,still=false){
 const fallback={id:base.id,meta:base.meta,state:f.state,t:still&&f.state==='idle'?0:t,facing:f.facing};
 const direction=f.direction;if(!directional?.meta||!['north','south'].includes(direction))return fallback;
 const states=directional.meta.states||{},idle=f.state==='idle',walk='walk-'+direction;
 let state=(idle?'idle-':f.state+'-')+direction,age=f.age||0;
 if(!states[state]){if(!states[walk])return fallback;state=walk;age=idle?0:age*(base.meta?.states?.[f.state]?.fps||12)/(states[walk].fps||12);}
 return {id:directional.id,meta:directional.meta,state,t:idle&&still?0:age,facing:1};
}

/* Same signature as the old companion(): (c, pet, x, y, t, moving, facing, motion), x,y = its spot by the hero. */
export function drawPet(c,pet,x,y,t,moving,facing,motion){const id=petSpriteId(pet);if(!id)return false;const s=loadSprite(id),still=motion===false;
 const f=petFollow(pet,x,y,t,facing,!still,!!moving);drawShadow(c,f.x,f.y);if(!s.ready)return true;
 const did=petDirectionAtlas(pet),d=did?loadSprite(did):null,pose=petRenderPose(f,s,d?.ready?d:null,t,still);
 drawSprite(c,pose.id,pose.state,pose.t,Math.round(f.x),Math.round(f.y),{facing:pose.facing,scale:.8});return true;}
