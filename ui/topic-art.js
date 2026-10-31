/* kidfix-c-oct31 (kid-appeal playtest, problem 2): the lesson's picture stays on every quiz, practice and test card.
   Each topic shows its own lesson art, small, beside the question: the creature or person its Lesson Theater scene
   already casts (the orange cat for plurals, the bunny for habitats...), the first PixelLab illustration its steps use,
   or the lesson-sprite icon of its word card. A topic with none keeps today's card (topicArt returns null).
   The art reacts with code effects only (style.css "kidfix-c-oct31"): a small hop and sparkles on a right answer, a gentle
   head-tilt on a wrong one. Nothing is drawn in code: the sprite's own atlas frames, the illustration or the icon. */
import {loadSprite,spriteFrame} from '../gfx/actors/sprites.js';
import {NOUN_ART} from '../gfx/lesson-art.js';
import {drawSprite as drawIcon} from '../gfx/lesson-sprites.js';
import {motionReduced} from './juice.js';

/* The scene's own cast member that stands for the lesson: an animal where the scene has one, else its guide or helper. */
export const SCENE_MASCOT=Object.freeze({plurals:'theater-cat-orange','food-chain':'theater-rabbit-pl',habitat:'theater-bunny',river:'theater-duck',
 garden:'theater-villager-m3','plant-cycle':'theater-villager-m3',helpers:'theater-smith',bridge:'theater-knight-blue','water-cycle':'theater-villager-f1',
 'day-night':'theater-villager-f1',coins:'theater-trader',savings:'theater-trader',needs:'theater-trader',weather:'theater-scholar',records:'theater-scholar',ratios:'theater-villager-m2'});

/* a loop runs only while its card is on screen (in the page and in an open dialog), on its own ~30 fps timer so it never takes
   the game's requestAnimationFrame slot */
const tick=(f,ms=33)=>{const h=setTimeout(()=>f(performance.now()),ms);h?.unref?.();};
const live=cv=>cv.isConnected&&cv.ownerDocument===globalThis.document&&!cv.closest('dialog:not([open])');
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const picsOf=t=>(t?.steps||[]).flatMap(s=>[].concat(s.pic||[]));

/* {kind:'sprite',atlas} | {kind:'img',src} | {kind:'icon',name} | null */
export function topicArt(t){
 const pics=picsOf(t);
 const th=pics.find(p=>p?.t==='theater'&&SCENE_MASCOT[p.scene]);if(th)return {kind:'sprite',atlas:SCENE_MASCOT[th.scene]};
 const art=pics.flatMap(p=>p?.t==='art'?(p.items||[p]):[]).find(i=>typeof i?.src==='string');if(art)return {kind:'img',src:art.src};
 const w=pics.find(p=>p?.t==='word'&&NOUN_ART[p.base]);if(w)return {kind:'icon',name:NOUN_ART[w.base]};
 return null;
}

export function topicArtHTML(a){
 if(!a)return '';
 const inner=a.kind==='img'?`<img src="${esc(new URL(`../assets/lesson/art/${a.src}`,import.meta.url).href)}" alt="" width="64" height="64">`:`<canvas width="64" height="64"></canvas>`;
 return `<span class="topic-art" data-art-kind="${a.kind}" aria-hidden="true"><span class="ta-body">${inner}</span><span class="ta-spark" aria-hidden="true"><i></i><i></i><i></i><i></i></span></span>`;
}

/* The union of every frame's opaque pixels in a state's row, so a 160 px villager cell crops to the villager. */
const BOX=new Map();
function boxOf(sh,state){
 const k=sh.id+'|'+state;if(BOX.has(k))return BOX.get(k);
 const m=sh.meta,st=m.states[state],[w,h]=m.cell,doc=globalThis.document;let box=[0,st.row*h,w,h];
 try{const cv=doc.createElement('canvas');cv.width=w*st.frames;cv.height=h;const g=cv.getContext('2d',{willReadFrequently:true});g.drawImage(sh.img,0,st.row*h,w*st.frames,h,0,0,w*st.frames,h);
  const d=g.getImageData(0,0,w*st.frames,h).data;let x0=w,y0=h,x1=-1,y1=-1;
  for(let y=0;y<h;y++)for(let x=0;x<w*st.frames;x++)if(d[(y*w*st.frames+x)*4+3]>16){const cx=x%w;if(cx<x0)x0=cx;if(cx>x1)x1=cx;if(y<y0)y0=y;if(y>y1)y1=y;}
  if(x1>=0)box=[x0,st.row*h+y0,x1-x0+1,y1-y0+1];}catch{}
 BOX.set(k,box);return box;
}

/* Paint the art into its card; a sprite keeps its idle loop running while the card is on screen (reduced motion: one frame). */
export function mountTopicArt(root,a){
 const el=root?.querySelector?.('.topic-art');if(!el||!a)return null;const cv=el.querySelector('canvas');
 if(a.kind==='icon'&&cv){const paint=()=>{const g=cv.getContext('2d');g.clearRect(0,0,64,64);return drawIcon(g,a.name,32,32,64);};if(!paint())setTimeout(paint,300);}
 if(a.kind==='sprite'&&cv){const sh=loadSprite(a.atlas),t0=performance.now(),still=motionReduced();
  const paint=now=>{if(!live(cv))return;if(sh.ready){const m=sh.meta,state=m.states.idle?'idle':Object.keys(m.states)[0],st=m.states[state],[bx,by,bw,bh]=boxOf(sh,state),{i}=spriteFrame(m,state,still?0:(now-t0)/1000),[w]=m.cell;
    const k=Math.max(1,Math.floor(Math.min(64/bw,64/bh))),g=cv.getContext('2d');g.clearRect(0,0,64,64);g.imageSmoothingEnabled=false;
    const flip=m.faces==='left';g.save();if(flip){g.translate(64,0);g.scale(-1,1);}g.drawImage(sh.img,i*w+bx,by,bw,bh,Math.round((64-bw*k)/2),64-bh*k,bw*k,bh*k);g.restore();
    if(still||st.frames<2)return;}
   tick(paint);};
  tick(paint);}
 return el;
}

/* A right answer: a hop and sparkles. A wrong answer: a gentle head-tilt. Replays on every answer. */
export function topicArtReact(root,ok){
 const el=root?.querySelector?.('.topic-art');if(!el)return false;
 el.classList.remove('ta-right','ta-wrong');void el.offsetWidth;el.classList.add(ok?'ta-right':'ta-wrong');return true;
}
