/* Hero sprites: downloaded packs used exactly as their artists drew them (owner rule, 8 Oct), sliced into
   dist/assets/sprites/hero-<class>.png/.json by tools/bake-heroes.mjs. Supplementary PixelLab directional
   locomotion comes from tools/bake-hero-directions.mjs. Native pixel size (one art pixel = one world unit).
   There is no code-drawn fallback: a hero whose atlas is still loading draws
   nothing, and assets.js preloads the player's class at boot so that never shows. Gear shows on the sprite
   (15 Oct, hero-looks.js): a weapon with drawn art swaps in its own atlas, and the worn chest's set recolours the
   armour; both fall back to the base atlas until ready. */
import {loadSprite,spriteFrame,drawSprite,stateDuration} from './sprites.js';
import {appearance} from './definitions.js';
import {ABILITY_GLOW} from '../../game/ability-fx.js';
import {heroSpriteIds,heroArtKey} from './hero-directions.js';
import {heroDrawId,heroDirectionDrawId,heroBustId,heroBustPending,heroLookOf,variantAtlasId} from './hero-looks.js';
export {setHeroLooks,previewHeroArt,setHeroColours,heroColoursOf,heroLookPending} from './hero-looks.js';
export {setHeroBodies,heroBody} from './hero-directions.js';

export const HERO_IDS=['warrior','mage','rogue','ranger','paladin','berserker','summoner'];
/* the class's atlas under the body its save chose (s.heroBody, hero-directions.js), else the original */
export function heroSpriteId(look){return HERO_IDS.includes(look)?'hero-'+heroArtKey(look):null;}
/* Start loading a class's atlas (boot, class select). Resolves when ready, or after `ms` regardless. */
export function preloadHero(look,ms=4000){if(!heroSpriteId(look))return Promise.resolve(false);const sheets=heroSpriteIds(look).map(loadSprite);
 /* the worn weapon's drawn atlas starts too (not waited for: the base draws until it lands) */
 heroDrawId(look);
 return new Promise(res=>{const t0=Date.now(),tick=()=>{if(sheets.every(s=>s.ready||s.failed)||Date.now()-t0>ms)return res(sheets.every(s=>s.ready));setTimeout(tick,30);};tick();});}

/* The ready atlas for a hero: {id,meta}, or null when the actor isn't a hero or its atlas is still loading
   (worldmap.js relies on this contract). The id is the gear look's (hero-looks.js): a drawn weapon and the worn
   set's colours when ready, else the base. a.plain (town NPCs) always uses the base; a.look overrides {art,set}. */
export function heroAtlas(a){const look=appearance(a);if(!heroSpriteId(look))return null;const id=heroDrawId(look,{plain:!!a.plain,...(a.look||{})}),s=loadSprite(id);
 if(s.ready)return{id,meta:s.meta};const b=loadSprite(heroSpriteId(look));return b.ready?{id:b.id,meta:b.meta}:null;}

/* Game pose -> atlas state. Contact frames in the atlas sit at floor(TRACKS[pose].contact*fps). */
const ANIM={light0:'attack',light1:'attack2',light2:'attack3',heavy:'heavy',dodge:'dodge',hurt:'hurt',knockback:'hurt',parry:'parry',cast:'cast'};
const dur=stateDuration;
const shots=new WeakMap();
/* Ranged basic attacks play the game's 'cast' pose with their own cadence: 0.28s (light, contact .11) or
   0.5s (heavy, contact .27); abilities play it for 0.42s (contact .17). The claim sets attack = duration
   and counts it down in real time, so attack + animAge recovers which one this is. */
function castState(a,S){if(!S.shoot)return'cast';const k=shots.get(a);if(k&&a.token!==undefined&&k.token===a.token)return k.state;
 const total=(a.attack||0)+(a.animAge||0),state=total<.36?'shoot':total>.46?'shootHeavy':'cast';if(a.token!==undefined)shots.set(a,{token:a.token,state});return state;}
export function heroState(a,meta,time=0){const r=heroStateRaw(a,meta,time);if(!Number.isFinite(r.t)||r.t<0)r.t=0;return r;}
function heroStateRaw(a,meta,time){const S=meta.states,age=Number.isFinite(a.animAge)?Math.max(0,a.animAge):0;
 if(a.hp<=0||a.dead>0)return{state:'death',t:a.anim==='death'?age:99};
 if(a.dodge>0)return{state:'dodge',t:a.anim==='dodge'?age:Math.max(0,.32-a.dodge)};
 /* the result screen's victory cheer: plays once, then holds its last pose */
 if(a.anim==='victory'&&S.victory)return{state:'victory',t:Math.min(age,dur(S.victory)-.001)};
 /* Each ability has its own animation, 'ab-<ability id>' (docs/CHARACTER_PIPELINE.md); combat claims it by that name. */
 if(a.anim&&a.anim.startsWith('ab-')&&S[a.anim]&&age<dur(S[a.anim]))return{state:a.anim,t:age};
 if(a.anim&&ANIM[a.anim]){const st=a.anim==='cast'?castState(a,S):ANIM[a.anim];if(S[st]&&age<dur(S[st]))return{state:st,t:age};}
 if(a.knock>0)return{state:'hurt',t:Math.min(age,dur(S.hurt)-.001)};
 if(a.wind>0||a.blocking)return{state:'block',t:time};
 if((a.z||0)>.5)return{state:(a.vz||0)>0?'jump':'fall',t:time};
 if(a.moving)return{state:a.running?'run':'walk',t:Number.isFinite(a.walkAge)?a.walkAge:time};
 return{state:'idle',t:time};}

/* Direction only changes grounded locomotion. Combat, jumps, blocks and their anchors keep the base atlas.
   A down/up view must never inherit the last horizontal mirror; the weapon stays in its source hand. */
export function heroRenderPose(a,base,directional,time=0){const pose=heroState(a,base.meta,time),fallback={...base,...pose,facing:a.facing<0?-1:1};
 if(!directional||!['idle','walk','run'].includes(pose.state))return fallback;
 const direction=a.moving?a.direction:(a.lastDirection||a.direction),suffix=direction==='down'?'south':direction==='up'?'north':null;
 if(!suffix)return fallback;const S=directional.meta.states;let state=pose.state+'-'+suffix,t=pose.t;
 /* a standing-only atlas (the front/back views baked for the creator, 15 Oct) never turns the town hero: without a walk
    row in that direction the hero would face you standing and turn sideways to move */
 if(!S['walk-'+suffix])return fallback;
 if(!S[state]&&pose.state==='run'&&S['walk-'+suffix]){state='walk-'+suffix;t*= (base.meta.states.run?.fps||16)/(S[state].fps||12);}
 if(!S[state])return fallback;return{...directional,state,t,facing:1};}

export const HERO_RENDER_SCALE=.85;
const pixelScale=a=>Math.max(.25,Number(a.scale)||1)*HERO_RENDER_SCALE;
/* Grip, tip and strike edge in world coordinates from the atlas' per-frame weapon points (source px relative
   to the feet anchor). Before the atlas has loaded (or in node tests) a chest-height point in front of the
   hero stands in, so projectiles still leave the weapon side rather than the feet. */
export function anchorsFromMeta(a,meta,time=0){const k=pixelScale(a)*(meta?.scale||1),face=a.facing<0?-1:1;let px=16,py=-26;
 if(meta){const {state,t}=heroState(a,meta,time),{i}=spriteFrame(meta,state,t),pts=meta.points?.[state];if(pts?.[i])[px,py]=pts[i];}
 const world=(x,y)=>({x:a.x+face*x*k,y:(a.y-(a.z||0))+y*k});const tip=world(px,py);
 return{grip:world(Math.min(px,9),py+1),tip,edge:world(px*.6,py),height:a.y-tip.y};}
export function heroAnchors(a,time=0){if(!heroSpriteId(appearance(a)))return null;const h=heroAtlas(a);return anchorsFromMeta(a,h?h.meta:null,time);}

let scratch=null;
function canvas(w,h){if(!scratch)scratch=typeof OffscreenCanvas!=='undefined'?new OffscreenCanvas(w,h):document.createElement('canvas');if(scratch.width<w)scratch.width=w;if(scratch.height<h)scratch.height=h;return scratch;}
/* Ground shadow: Mixel's character shadow (art/packs/mixel-topdown-32), used unmodified as its licence
   requires: a 20x12 ellipse centred in a 32x32 cell. */
let shadow=null;
function drawShadow(c,x,y,k){if(typeof Image==='undefined')return;if(!shadow){shadow=new Image();shadow.src=new URL('../../assets/sprites/hero-shadow.png',import.meta.url).href;}
 if(!shadow.complete||!shadow.naturalWidth)return;c.save();c.imageSmoothingEnabled=false;c.drawImage(shadow,Math.round(x-16*k),Math.round(y-16*k),32*k,32*k);c.restore();}
/* Draws shadow + hero, feet-anchored. Returns true for a hero (drawn, or still loading and so drawn as
   nothing), false when the actor isn't a hero. */
export function drawHero(c,a,time=0){if(!heroSpriteId(appearance(a)))return false;const h=heroAtlas(a);if(!h)return true;
 const did=heroDirectionDrawId(appearance(a),{plain:!!a.plain,...(a.look||{})}),ds=did?loadSprite(did):null,{id,meta,state,t,facing}=heroRenderPose(a,h,ds?.ready?{id:did,meta:ds.meta}:null,time);
 const k=pixelScale(a),x=Math.round(a.x),y=Math.round(a.y-(a.z||0));
 const alpha=a.hidden>0?.28:a.inv>0&&Math.floor(time*22)%2?.65:1;
 if(!a.noShadow)drawShadow(c,x,Math.round(a.y),k);/* v2:levels -- stages draw their own downloaded shadow (a.noShadow) */
 /* rage (an attack buff, e.g. Berserker Rage): a red aura hugging the hero's own outline, breathing at 2 Hz (ability bible) */
 if(a.attackBuff>1&&a.buffTime>0)drawRageGlow(c,id,meta,state,t,x,y,facing,k,.42+.26*Math.sin(time*Math.PI*4));
 /* an ability's own glow while it plays, so it never looks like a normal attack (game/ability-fx.js ABILITY_GLOW) */
 else if(state.startsWith('ab-')&&ABILITY_GLOW[state.slice(3)])drawRageGlow(c,id,meta,state,t,x,y,facing,k,.55+.2*Math.sin(time*Math.PI*8),ABILITY_GLOW[state.slice(3)]);
 if(!(a.flash>0))return drawSprite(c,id,state,t,x,y,{facing,scale:k,alpha})||true;
 /* Hit flash on a scratch canvas: a source-atop fill on the live canvas would also whiten the backdrop. */
 const [w,hh]=meta.cell,[ax,ay]=meta.anchor,cv=canvas(w*k,hh*k),sc=cv.getContext('2d');
 sc.save();sc.globalCompositeOperation='source-over';sc.clearRect(0,0,cv.width,cv.height);drawSprite(sc,id,state,t,ax*k,ay*k,{facing:1,scale:k});
 sc.globalCompositeOperation='source-atop';sc.globalAlpha=.45;sc.fillStyle='#fff2d6';sc.fillRect(0,0,w*k,hh*k);sc.restore();
 c.save();c.globalAlpha*=alpha;c.imageSmoothingEnabled=false;c.translate(x,y);if(facing<0)c.scale(-1,1);c.drawImage(cv,0,0,w*k,hh*k,-ax*k,-ay*k,w*k,hh*k);c.restore();return true;}

/* The hero's silhouette tinted red, stamped at 1-2 px offsets behind the sprite: an outline aura made from the art itself. */
function drawRageGlow(c,id,meta,state,t,x,y,facing,k,alpha,color='#ff3b24'){const [w,hh]=meta.cell,[ax,ay]=meta.anchor,cv=canvas(w*k,hh*k),sc=cv.getContext('2d');
 sc.save();sc.globalCompositeOperation='source-over';sc.clearRect(0,0,cv.width,cv.height);drawSprite(sc,id,state,t,ax*k,ay*k,{facing:1,scale:k});
 sc.globalCompositeOperation='source-atop';sc.fillStyle=color;sc.fillRect(0,0,w*k,hh*k);sc.restore();
 c.save();c.imageSmoothingEnabled=false;c.translate(x,y);if(facing<0)c.scale(-1,1);
 for(const [dx,dy,a] of [[-2,0,.55],[2,0,.55],[0,-2,.55],[0,1,.4],[-1,-1,1],[1,-1,1],[-1,1,1],[1,1,1],[-1,0,1],[1,0,1],[0,-1,1]]){c.globalAlpha=alpha*a;c.drawImage(cv,0,0,w*k,hh*k,-ax*k+dx*k,-ay*k+dy*k,w*k,hh*k);}
 c.restore();}

/* Bust for the HUD, class select, stats and dialogue: a crop of the hero's own idle frame (meta.bust, set by
   the bake) at the largest whole-number scale that fits the canvas. Replaces the old generated portraits.
   Redraws itself once the atlas arrives. */
export function drawHeroBust(cv,look,size=192,tries=0,o={}){if(!heroSpriteId(look)||!cv)return false;const id=heroBustId(look,o);cv.width=size;cv.height=size;const c=cv.getContext('2d');if(!c)return false;c.clearRect(0,0,size,size);
 const s=loadSprite(id);if(!s.ready){if(!s.failed)setTimeout(()=>drawHeroBust(cv,look,size,tries+1,o),60);return false;}
 /* the worn set's colours are made once, a moment after the first request: draw the plain bust now, then once more */
 if(id===heroSpriteId(look)&&heroBustPending(look,o)&&tries<50)setTimeout(()=>{if(cv.isConnected!==false)drawHeroBust(cv,look,size,tries+1,o);},80);
 const m=s.meta,[bx,by,bw,bh]=m.bust||[0,0,m.cell[0],m.cell[1]],k=Math.max(1,Math.floor(size/Math.max(bw,bh))),row=(m.states[m.bustState]||m.states.idle).row*m.cell[1];
 c.imageSmoothingEnabled=false;c.drawImage(s.img,bx,row+by,bw,bh,Math.round((size-bw*k)/2),Math.round((size-bh*k)/2),bw*k,bh*k);return true;}

/* The whole hero standing (the inventory's paper doll): the idle animation at the largest whole-number scale that fits
   the canvas, feet on the bottom margin, with the gear look (or a preview {art, set} of an item being hovered). */
export function drawHeroFigure(cv,look,{time=0,art,set,colours,state='idle',plain=false,front=true}={}){if(!heroSpriteId(look)||!cv)return false;const c=cv.getContext('2d');if(!c)return false;
 const o={plain,...(art!==undefined?{art}:{}),...(set!==undefined?{set}:{}),...(colours!==undefined?{colours}:{})},id=heroDrawId(look,o),s=loadSprite(id),b=s.ready?s:loadSprite(heroSpriteId(look));c.clearRect(0,0,cv.width,cv.height);if(!b.ready)return false;
 /* facing the viewer (owner, 15 Oct): the directions atlas' south row when this body has one (the figure is ~54x60 of a 112x100 cell) */
 if(front&&(state==='idle'||state==='walk')){const did=heroDirectionDrawId(look,o),d=did?loadSprite(did):null;
  const S=d?.ready?d.meta?.states||{}:{},st=S[state+'-south']?state+'-south':S['idle-south']?'idle-south':null;
  if(st){const k=Math.max(1,Math.floor(Math.min(cv.width/60,(cv.height-4)/64)));return drawSprite(c,d.id,st,st===state+'-south'?time:0,cv.width/2,cv.height-4,{facing:1,scale:k});}}
 /* idle frames are about 34x56 px of a 103x98 cell: scale on that, not on the cell */
 const k=Math.max(1,Math.floor(Math.min(cv.width/40,(cv.height-4)/60)));return drawSprite(c,b.id,b.meta?.states?.[state]?state:'idle',time,cv.width/2,cv.height-4,{facing:1,scale:k});}
export {variantAtlasId,heroLookOf};
