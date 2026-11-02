/* kidfix-c-oct31 (kid-appeal playtest, problem 2: practice was "homework"): practice at the training dummy.
   During practice the card's guide becomes a small scene in the Library yard: the hero stands at a training dummy (our own
   PixelLab prop, assets/lesson/training-dummy.png). Each right answer plays the hero's own attack animation and lands the
   existing hit spark on the dummy; a wrong answer only makes the dummy wobble (the card shows the right answer, as before).
   The dummy's health is the topic's practice still needed (testReady(...).needed minus practised), so it reads the real
   count and never a literal 25. When it empties the dummy cracks over with the existing dust and straw particles.
   The dummy is never drawn in code: only transforms of its image, plus the existing effect sprites. No timers: the scene
   only reacts to answers. Reduced motion: the still frame of each moment. */
import {loadSprite,drawSprite} from '../gfx/actors/sprites.js';
import {drawHeroFigure,previewAttackLen,previewHitAt} from '../gfx/actors/hero-sprites.js';
import {drawEffect} from '../gfx/combat-fx.js';
import {motionReduced} from './juice.js';

export const DUMMY_SRC=new URL('../assets/lesson/training-dummy.png',import.meta.url).href;
const YARD_SRC=new URL('../assets/theater/farm.webp',import.meta.url).href;
/* the farm stage's open meadow (the Lesson Theater's own Oakhaven stage), as the yard behind the dummy */
const YARD=[600,186,176,100];
export const SCENE_W=176,SCENE_H=100;
const GROUND=92,HERO_X=54,DUMMY_X=104;
/* a loop runs only while its card is on screen (in the page and in an open dialog), on its own ~30 fps timer so it never takes
   the game's requestAnimationFrame slot */
const tick=(f,ms=33)=>{const h=setTimeout(()=>f(performance.now()),ms);h?.unref?.();};
const live=cv=>cv.isConnected&&cv.ownerDocument===globalThis.document&&!cv.closest('dialog:not([open])');
let dummyImg=null,yardImg=null;
function images(){if(typeof Image!=='function')return;if(!dummyImg){dummyImg=new Image();dummyImg.src=DUMMY_SRC;}if(!yardImg){yardImg=new Image();yardImg.src=YARD_SRC;}}

/* The dummy's health: practice still needed, never below 0; done when the topic's practice count is met. */
export function dummyHealth(g){const max=Math.max(1,g?.needed||1),left=Math.max(0,max-(g?.practice||0));return {left,max,done:(g?.practice||0)>=(g?.needed||0)};}
export function dummyBarHTML(h,extra=false){
 if(extra)return `<span class="pd-bar extra" role="img" aria-label="Extra practice: the dummy is fresh"><i style="width:100%"></i></span><span class="pd-label">Extra practice</span>`;
 const pct=Math.round(h.left/h.max*100);
 return `<span class="pd-bar${h.left?'':' empty'}" role="img" aria-label="Training dummy: ${h.left} of ${h.max} hits left"><i style="width:${pct}%"></i></span><span class="pd-label">${h.left?`Dummy ${h.left}/${h.max}`:'Dummy broken!'}</span>`;
}
export function dummySceneHTML(h,{extra=false}={}){
 return `<div class="qf-guide pd-scene" data-practice-scene><canvas class="pd-canvas" width="${SCENE_W}" height="${SCENE_H}" role="img" aria-label="Your hero at a training dummy in the Library yard"></canvas><span class="pd-hud">${dummyBarHTML(h,extra)}</span></div>`;
}

/* Mount the scene on its canvas. Returns {hit(h), miss(), crack(), cheer(), set(h,extra)}; the loop stops when the card closes. */
export function mountDummyScene(root,{hero,health,cracked=false,extra=false}={}){
 const cv=root?.querySelector?.('.pd-canvas');if(!cv)return null;images();
 for(const id of ['fx-hit-physical','fx-dust'])loadSprite(id);
 const still=motionReduced(),c=cv.getContext('2d'),heroCv=globalThis.document.createElement('canvas');heroCv.width=103;heroCv.height=98;
 const st={hero:'idle',heroT:0,wobble:0,wobT:-9,kick:0,kickT:-9,crack:cracked?1:0,crackT:cracked?-9:null,fx:[],last:performance.now(),clock:0,h:health,extra};
 const bar=()=>{const hud=root.querySelector('.pd-hud');if(hud)hud.innerHTML=dummyBarHTML(st.h,st.extra);};
 const paint=now=>{if(!live(cv))return;const dt=Math.min(.05,(now-st.last)/1000);st.last=now;st.clock+=dt;
  c.clearRect(0,0,SCENE_W,SCENE_H);c.imageSmoothingEnabled=false;
  if(yardImg?.complete&&yardImg.naturalWidth)c.drawImage(yardImg,YARD[0],YARD[1],YARD[2],YARD[3],0,0,SCENE_W,SCENE_H);
  /* the dummy: a kick back on a hit, a damped wobble on a miss, falling over when it cracks; pivot at its base */
  if(dummyImg?.complete&&dummyImg.naturalWidth){const w=dummyImg.naturalWidth,h=dummyImg.naturalHeight,tk=st.clock-st.kickT,tw=st.clock-st.wobT;
   let ang=0,dx=0;
   if(tk<.35){ang+=.22*Math.exp(-tk*9)*Math.cos(tk*30);dx+=3*Math.exp(-tk*12);}
   if(tw<1.1){ang+=.14*Math.exp(-tw*3.5)*Math.sin(tw*16);}
   if(st.crack){const tc=st.crackT==null?9:st.clock-st.crackT,p=still?1:Math.min(1,Math.max(0,tc)/.5);ang=1.15*p*p;dx=3*p;}
   c.save();c.translate(DUMMY_X+dx,GROUND);c.rotate(ang);c.drawImage(dummyImg,Math.round(-w/2),-h);c.restore();}
  /* the hero: their own idle, attack and victory animations, gear look included, facing the dummy ('attack' is the class's showcase
     attack, hero-sprites.js PREVIEW_ATTACK: the Ranger's arrow flies at the dummy, ownernotes-a-nov1) */
  const ht=st.clock-st.heroT,state=st.hero==='attack'&&ht>Math.max(.6,previewAttackLen(hero))?'idle':st.hero==='victory'&&ht>1.3?'idle':st.hero;if(state==='idle')st.hero='idle';
  if(drawHeroFigure(heroCv,hero,{state,time:still?(state==='idle'?0:.3):(state==='idle'?st.clock:ht),front:false,reach:DUMMY_X-HERO_X-6}))c.drawImage(heroCv,Math.round(HERO_X-51.5),GROUND+4-98);
  /* effects: the existing hit spark and straw-coloured splash particles, dust when it cracks */
  st.fx=st.fx.filter(f=>(f.life-=dt)>0);for(const f of st.fx){if(f.type==='dust'){drawSprite(c,'fx-dust','rise',f.max-f.life,f.x,f.y);}else drawEffect(c,f);}
  if(!still||st.fx.length)tick(paint);else tick(paint,120);};
 tick(paint);
 const ctl={
  hit(h){st.h=h;st.hero='attack';st.heroT=st.clock;
   const land=()=>{st.kickT=st.clock;st.fx.push({type:'burst',element:'physical',x:DUMMY_X-4,y:GROUND-18,life:.36,max:.36});st.fx.push({type:'slime-splash',color:'#d9b44a',x:DUMMY_X-2,y:GROUND-14,life:.6,max:.65});bar();if(st.h.left===0&&!st.crack&&!st.extra)ctl.crack();};
   /* improve20-r9c-nov1 #6: it kicks back when the swing or the shot reaches it (the Mage's Fireball, the Ranger's arrow) */still?land():setTimeout(land,Math.round(1000*previewHitAt(hero,DUMMY_X-HERO_X-6)));},
  miss(){st.wobT=st.clock;},
  crack(){if(st.crack)return;st.crack=1;st.crackT=st.clock;st.fx.push({type:'dust',x:DUMMY_X+8,y:GROUND+2,life:.42,max:.42},{type:'burst',element:'physical',x:DUMMY_X,y:GROUND-24,life:.36,max:.36},{type:'slime-splash',color:'#e8c862',x:DUMMY_X,y:GROUND-26,life:.65,max:.65},{type:'slime-splash',color:'#b58b3a',x:DUMMY_X+6,y:GROUND-20,life:.65,max:.65});},
  cheer(){st.hero='victory';st.heroT=st.clock;},
  set(h,extra=st.extra){st.h=h;st.extra=extra;bar();}};
 return ctl;
}
