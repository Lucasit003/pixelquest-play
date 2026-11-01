/* Companions (game/data.js PETS): original PixelLab animal sprites in pet-<key> atlases. The pet
   eases toward its spot beside the hero, so it trails, turns and breaks into a walk or a run on its own; it draws
   the same downloaded ground shadow (Mixel's, unmodified) as the heroes and stages. Replaces the code-drawn
   companion. Under reduced motion it keeps to its spot, walks only while the hero walks and holds its first
   idle frame. */
import {drawHearts} from '../pet-hearts.js';
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

/* kidfix-a-oct31: "Pet <name>" in Home and town (scenes/town.js). petThePet() asks for a PET_TIME s pat: the pet plays its own sit
   animation from its atlas (no new art) while small hearts rise over it (an effect drawn in code, gfx/pet-hearts.js). -1 = asked, started at the next draw.
   ownernotes-a-nov1 (owner, 1 Nov: "actually be an animation of you petting the cat"): the pat is longer (PET_TIME 2.4 s) and plays as a scene. The hero
   turns, kneels and pats (hero-sprites.js PET_POSE, his own frames); the companion faces him and plays its 'pet' row, a PixelLab reaction made from its own
   sitting frame (art/pets/<key>/pixellab/pet: it tilts its head up into the hand and closes its eyes): PET_REACT says which frames lead in at
   REACT_STEP s each once the hand lands (REACT_AT), which loop while it is stroked (HOLD_STEP s each) and which play as the hand lifts at the end.
   The hearts start as the eyes close. A pet without a 'pet' row keeps the old sit. */
export const PET_TIME=2.4,REACT_AT=.3,REACT_STEP=.1,HOLD_STEP=.3,HEARTS_AT=.6;
/* the companion's spot while petted, [behind, below] the hero's feet (its usual spot is [22, 9]): close enough for a kneeling hero's hand */
export const PAT_SPOT=[15,4];const PETTED=new Map();
export const PET_REACT={study:{lead:[0,1,2,3],hold:[3,2],out:[1,0]},speed:{lead:[0,1,2,3,4,5],hold:[6,7,6,5],out:[8]},loot:{lead:[0,1,2,3,4],hold:[5,6,7,6],out:[8]},
 defence:{lead:[0,1,2,3,4],hold:[5,6,7,6],out:[8]},fire:{lead:[0,1,2,3,4],hold:[5,4],out:[6,7,8]}};
export function petThePet(pet){if(pet?.key)PETTED.set(pet.key,-1);}
export const pettingNow=pet=>PETTED.has(pet?.key);
/* age (s) of the pat in progress at draw time t, or -1; the hero's pose (hero-sprites.js) reads the same clock as the pet */
export function patAge(t){for(const [k,pt] of PETTED){if(pt===-1){PETTED.set(k,t+PET_TIME);return 0;}if(t<pt)return t-(pt-PET_TIME);}return -1;}
/* the reaction frame at pat age g */
export function reactFrameAt(R,g,len=PET_TIME){const o=R.out.length;if(g<REACT_AT)return R.lead[0];if(g>=len-o*REACT_STEP)return R.out[Math.min(o-1,Math.floor((g-(len-o*REACT_STEP))/REACT_STEP))];
 const l=Math.floor((g-REACT_AT)/REACT_STEP);if(l<R.lead.length)return R.lead[l];return R.hold[Math.floor((g-REACT_AT-R.lead.length*REACT_STEP)/HOLD_STEP)%R.hold.length];}

/* Same signature as the old companion(): (c, pet, x, y, t, moving, facing, motion), x,y = its spot by the hero. */
export function drawPet(c,pet,x,y,t,moving,facing,motion){const id=petSpriteId(pet);if(!id)return false;const s=loadSprite(id),still=motion===false;
 const f=petFollow(pet,x,y,t,facing,!still,!!moving);drawShadow(c,f.x,f.y);if(!s.ready)return true;
 let pt=PETTED.get(pet.key);if(pt===-1){pt=t+PET_TIME;PETTED.set(pet.key,pt);}const petting=pt!=null&&t<pt&&!moving;if(pt!=null&&!petting)PETTED.delete(pet.key);
 const g=t-(pt-PET_TIME),R=PET_REACT[pet.key],row=s.meta?.states?.pet;
 /* the pet faces the hero, who stands where its spot points back to (x + 22 facing, scenes/town.js) */
 /* it steps to PAT_SPOT first (its own walk), then sits into the reaction */
 const there=Math.hypot(x-f.x,y-f.y)<1.5;
 const react=petting&&!!row&&!!R;
 if(react&&(there||g>=REACT_AT)){const i=still?R.hold[0]:reactFrameAt(R,g);drawSprite(c,id,'pet',(i+.5)/(row.fps||8),Math.round(f.x),Math.round(f.y),{facing:facing<0?-1:1,scale:.8});if(g>=HEARTS_AT)drawHearts(c,f.x+(facing<0?-1:1)*6,f.y-26,g-HEARTS_AT,still);return true;}
 if(petting&&!react&&s.meta?.states?.sit){drawSprite(c,id,'sit',still?0:g,Math.round(f.x),Math.round(f.y),{facing:f.facing,scale:.8});drawHearts(c,f.x,f.y-20,g,still);return true;}
 const did=petDirectionAtlas(pet),d=did?loadSprite(did):null,pose=petRenderPose(f,s,d?.ready?d:null,t,still);
 drawSprite(c,pose.id,pose.state,pose.t,Math.round(f.x),Math.round(f.y),{facing:pose.facing,scale:.8});if(petting&&!react)drawHearts(c,f.x,f.y-20,g,still);return true;}
