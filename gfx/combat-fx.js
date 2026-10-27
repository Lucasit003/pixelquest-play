// Combat VFX from downloaded effect sheets (docs/STYLE_GUIDE.md rule 0). Owned by the enemies agent (round 3).
// gfx/world.js effect() hands every combat effect here; slime droplets are a small procedural effect.
// Atlases (tools/bake-sprites.mjs, one per element and shape): fx-slash-<el> (v-ktor swings), fx-hit-<el> (v-ktor star and
// splash), fx-spark-<el> (v-ktor sparks), fx-bolt-<el> (Foozle fireball and explosion), fx-col-<el> (devkidd floored fire),
// fx-aura-<el> (pimen heal sparkles). Elements: fire ice storm poison holy nature shadow arcane physical.
// Size rule (art direction): every effect stays inside 2x hero height by 3x hero width (the sheets are 64 px or smaller,
// and rings tile small sprites around their edge instead of scaling anything).
import {loadSprite,drawSprite} from './actors/sprites.js';
import {ABILITY_FX_SPRITES} from '../game/ability-fx.js';

export const ELEMENTS=['fire','ice','storm','poison','holy','nature','shadow','arcane','physical'];
/* combat.js passes colours, not element names: the element palette maps back exactly; anything else is physical. */
const BY_COLOR={'#ff9b58':'fire','#a5e3f5':'ice','#dae5ff':'storm','#b1db79':'poison','#ffe4a0':'holy','#8bd8a0':'nature','#cd9eea':'shadow','#bdb2fa':'arcane',
 '#8de3c9':'nature','#8de2c8':'nature','#98eadb':'nature','#f9dfab':'holy','#b6e6aa':'nature','#ffb072':'fire','#f1bd85':'physical',
 /* combat.js GRIT colours (the bible's impact debris) */
 '#9d8f76':'physical','#d9ecf5':'ice','#bfe8f2':'ice','#ff9f5c':'fire','#fff0bb':'storm','#c6bfa4':'physical','#dff0d8':'holy','#8fc46e':'nature'};
export function elementOf(f){if(f.element&&ELEMENTS.includes(f.element))return f.element;return BY_COLOR[String(f.color||'').toLowerCase().slice(0,7)]||'physical';}
export function preloadCombatFx(){for(const el of ELEMENTS)for(const k of ['slash','hit','spark','bolt','col','aura'])loadSprite(`fx-${k}-${el}`);loadSprite('theater-coin-gold');for(const id of ABILITY_FX_SPRITES)loadSprite(id);}
const age=f=>Math.max(0,(f.max||.4)-(f.life||0));
const put=(c,id,state,t,x,y,o={})=>drawSprite(c,id,state,t,Math.round(x),Math.round(y),o);
/* Draws one effect record ({type,x,y,radius,angle,color|element,big,life,max,tx,ty}). Returns false only for types it
   doesn't own (text), so the caller can handle those. */
/* Holy rises as gold-white sparkles (pimen heal sheet), never as the floored flames the other elements use (art director round 3). */
const column=el=>el==='holy'?'fx-aura-holy':`fx-col-${el}`;
export function drawEffect(c,f){const el=elementOf(f),t=age(f),r=f.radius||16;
 switch(f.type){
  /* Small ballistic droplets: rise, fall under gravity, then fade without leaving a floor blob. */
  case 'slime-splash':{c.save();c.fillStyle=f.color;c.globalAlpha*=Math.max(0,1-t/.65);for(let i=0;i<11;i++){const a=i*2.4,v=22+(i%4)*9,x=f.x+Math.cos(a)*v*t,y=f.y-10+Math.sin(a)*v*t*.35-(38+i%3*12)*t+110*t*t,size=i%3===0?3:2;c.fillRect(Math.round(x),Math.round(y),size,size);}c.restore();return true;}

  /* Ability world effects (game/ability-fx.js, PixelLab sprites). A mark spreads from its centre (an elliptical clip that
     grows over f.reveal seconds to f.upto of the sprite), then fades with the rest of the effect. */
  case 'mark':{const sh=loadSprite(f.sprite);if(!sh.ready)return true;const [w,h]=sh.meta.cell,p=f.reveal?Math.min(1,t/f.reveal):1,k=(f.upto||1)*(.12+.88*p);
   c.save();c.beginPath();c.ellipse(Math.round(f.x),Math.round(f.y),w/2*k+1,h/2*k+1,0,0,Math.PI*2);c.clip();put(c,f.sprite,'idle',t,f.x,f.y,{facing:f.flip||1});c.restore();return true;}
  case 'debris':put(c,f.sprite,'play',t,f.x,f.y,{facing:f.flip||1});return true;
  /* a standing prop an entrance leaves in the arena (a goblin tent), drawn behind whoever comes out of it */
  case 'prop':put(c,f.sprite,'idle',t,f.x,f.y,{scale:f.scale??1});return true;
  /* a signature projectile look: the sprite flies f.dist forward at chest height over most of its life (Heavy Strike's crescent) */
  case 'wave':put(c,f.sprite,'idle',t,f.x+(f.flip||1)*(f.dist||60)*Math.min(1,t/((f.max||.3)*.8)),f.y-24,{facing:f.flip||1});return true;
  /* an impact that bursts open from its centre at chest height (Shield Bash) */
  case 'pop':{const sh=loadSprite(f.sprite);if(!sh.ready)return true;const [w,h]=sh.meta.cell,k=Math.min(1,.2+t/.08);c.save();c.beginPath();c.ellipse(Math.round(f.x),Math.round(f.y-22),w/2*k+1,h/2*k+1,0,0,Math.PI*2);c.clip();put(c,f.sprite,'idle',t,f.x,f.y-22,{facing:f.flip||1});c.restore();return true;}
  /* a ground rupture that tears forward from the hero over f.reveal seconds (Sundering Blow) */
  case 'rupture':{const sh=loadSprite(f.sprite);if(!sh.ready)return true;const [w,h]=sh.meta.cell,dir=f.flip||1,p=f.reveal?Math.min(1,t/f.reveal):1;c.save();c.beginPath();c.rect(dir>0?Math.round(f.x):Math.round(f.x-w*p),Math.round(f.y-h),Math.ceil(w*p),h*2);c.clip();put(c,f.sprite,'idle',t,f.x+dir*w/2,f.y,{facing:dir});c.restore();return true;}
  case 'aura':put(c,f.sprite,'idle',t,f.x,f.y,{alpha:.7+.3*Math.sin(t*11)});return true;
  /* a ring of a sprite's own animation (its first state) around the caster: n copies at radius r, depth-sorted back to
     front, each started a little after the last so the ring spreads (Frost Nova's spikes, Static Field's bolts) */
  case 'ring-of':{const sh=loadSprite(f.sprite);if(!sh.ready)return true;const st=Object.keys(sh.meta.states)[0],n=f.n||8,r=f.r||40,pts=[];
   for(let i=0;i<n;i++){const a=i/n*Math.PI*2+(f.spin?t*f.spin:0);pts.push([f.x+Math.cos(a)*r,f.y+Math.sin(a)*r*.45,i]);}
   pts.sort((a,b)=>a[1]-b[1]).forEach(([x,y,i])=>put(c,f.sprite,st,Math.max(0,t-i*(f.stagger??.025))*(f.rate||1),x,y,{alpha:f.alpha??1}));return true;}
  /* wards orbiting the caster while a buff lasts (Arcane Shield): like plates, with the sprite's own animation looping */
  case 'orbit-of':{const sh=loadSprite(f.sprite);if(!sh.ready)return true;const st=Object.keys(sh.meta.states)[0];for(let i=0;i<(f.n||3);i++){const a=i/(f.n||3)*Math.PI*2+t*2.2;if((Math.sin(a)>0)!==(f.half==='front'))continue;
   put(c,f.sprite,st,(t*1.6+i*.3)%1.2,f.x+Math.cos(a)*24,f.y-12+Math.sin(a)*8,{alpha:.85});}return true;}
  /* four barrier plates circle the hero; the back half draws behind the hero, the front half in front (effectDepth) */
  case 'plates':for(let i=0;i<4;i++){const a=i/4*Math.PI*2+t*1.7;if((Math.sin(a)>0)!==(f.half==='front'))continue;put(c,f.sprite,'idle',t,f.x+Math.cos(a)*22,f.y-14+Math.sin(a)*7);}return true;
  case 'slash':{const dir=Math.cos(f.angle||0)>=0?1:-1;put(c,`fx-slash-${el}`,f.big?'big':'small',t,f.x+dir*Math.min(r,30)*.45,f.y-34,{facing:dir});return true;}
  case 'burst':put(c,`fx-hit-${el}`,'star',t,f.x,f.y-16);return true;
  /* an enemy falls: the element's impact star at the chest, then its motes rising off the body (combat.js deathFx) */
  case 'death':put(c,`fx-hit-${el}`,'splash',t,f.x,f.y-14);if(t>.12)put(c,`fx-aura-${el}`,'rise',t-.12,f.x,f.y-12);return true;
  case 'column':case 'pillar':case 'beam':put(c,column(el),'rise',t,f.x,f.y);if(r>24){put(c,column(el),'rise',t+.05,f.x-12,f.y+2);put(c,column(el),'rise',t+.1,f.x+12,f.y+2);}return true;
  case 'dome':put(c,`fx-aura-${el}`,'rise',t,f.x,f.y-20);return true;
  case 'orbit':{const rr=Math.min(r,26);for(let i=0;i<4;i++){const a=i/4*Math.PI*2+t*5;put(c,`fx-spark-${el}`,'twinkle',t+i*.08,f.x+Math.cos(a)*rr,f.y-19+Math.sin(a)*rr*.42);}return true;}
  case 'ring':case 'shockwave':case 'nova':{
   /* small rings (dodge, landing, totem pulses) are one splash; area rings tile splashes along their edge so the size reads */
   if(r<22){put(c,`fx-hit-${el}`,'splash',t,f.x,f.y-6);return true;}
   /* area rings: the element's floored flames rise around the edge (back half first so depth reads), then a splash */
   const n=Math.min(12,Math.max(6,Math.round(r*Math.PI*2/30))),k=Math.min(1,.5+t*2.4),pts=[];
   for(let i=0;i<n;i++){const a=i/n*Math.PI*2;pts.push([f.x+Math.cos(a)*r*k,f.y+Math.sin(a)*r*.5*k,i]);}
   pts.sort((p,q)=>p[1]-q[1]).forEach(([x,y,i])=>put(c,column(el),'rise',t*1.4+i*.02,x,y));
   put(c,`fx-hit-${el}`,'splash',t,f.x,f.y-8);return true;}
  case 'line':{const x0=f.x,y0=f.y-24,x1=f.tx??f.x,y1=(f.ty??f.y)-24,d=Math.hypot(x1-x0,y1-y0),n=Math.max(2,Math.round(d/14));
   for(let i=0;i<=n;i++)put(c,`fx-spark-${el}`,'twinkle',t+i*.04,x0+(x1-x0)*i/n,y0+(y1-y0)*i/n);put(c,`fx-hit-${el}`,'star',t,x1,y1);return true;}
  /* juice-oct27 kill pop: the element's own spark sprites burst out of the fallen body, arc down under gravity and fade */
  case 'killpop':{const n=f.n||6,k=Math.max(0,1-t/(f.max||.42));c.save();c.globalAlpha*=Math.min(1,k*1.6);for(let i=0;i<n;i++){const a=i/n*Math.PI*2+(f.spin||0),v=70+(i%3)*18;put(c,`fx-spark-${el}`,'twinkle',t+i*.03,f.x+Math.cos(a)*v*t,f.y-14+Math.sin(a)*v*t*.55-60*t+170*t*t);}c.restore();return true;}
  case 'particle':return true;
  case 'text':return false;}
 put(c,`fx-hit-${el}`,'splash',t,f.x,f.y-8);return true;}
/* A projectile ({x,y,h,vx,vy,color|element}): the element's bolt, flying the way it moves. */
export function drawShot(c,s,t=0){if(s.sprite)return put(c,s.sprite,'fly',(s.age||0)+t*0,s.x,s.y-(s.h??24),{facing:s.vx<0?-1:1});const el=s.element||elementOf(s);return put(c,`fx-bolt-${el}`,'fly',(s.age||0)+t*0,s.x,s.y-(s.h??24),{facing:s.vx<0?-1:1});}
/* Depth key for an effect, so the hero (same y) draws over its own slash and casts, and hit stars sit on their target. */
export function effectDepth(f){return f.type==='burst'||f.type==='line'||((f.type==='plates'||f.type==='orbit-of')&&f.half==='front')?f.y+1:f.y-.5;}
