// Sprite-sheet actors: baked atlases from third-party packs (heroes, enemies, bosses).
// Contract (docs/GAME_V2_PLAN.md §Sprite atlas): dist/assets/sprites/<id>.png + <id>.json
// {"image":"<id>.png","cell":[w,h],"anchor":[x,y],"faces":"right","scale":1,
//  "states":{"idle":{"row":0,"frames":6,"fps":8,"loop":true},"attack":{"row":1,"frames":10,"fps":12,"loop":false,"contact":[6]}}}
// Row r holds one state, frames left to right, each cell w x h. anchor = the feet point inside a cell.
// Additive changes only: other agents depend on these five exports.
const BASE=new URL('../../assets/sprites/',import.meta.url);
const sheets=new Map();
export function loadSprite(id){if(sheets.has(id))return sheets.get(id);
 const s={id,ready:false,meta:null,img:null,failed:false};sheets.set(id,s);
 if(typeof Image==='undefined'||typeof fetch==='undefined')return s;
 fetch(new URL(id+'.json',BASE)).then(r=>r.json()).then(meta=>{s.meta=meta;const img=new Image();img.onload=()=>{s.img=img;s.ready=true;};img.onerror=()=>{s.failed=true;};img.src=new URL(meta.image||id+'.png',BASE).href;}).catch(()=>{s.failed=true;});
 return s;}
export function spriteReady(id){return !!sheets.get(id)?.ready;}
export function spriteMeta(id){return sheets.get(id)?.meta||null;}
/* A state's length in seconds: its per-frame ms when it has them (hand-timed attacks), else frames/fps. */
export function stateDuration(st){return Array.isArray(st?.ms)&&st.ms.length===st.frames?st.ms.reduce((a,b)=>a+b,0)/1000:(st?.frames||1)/(st?.fps||8);}
/* Seconds from a state's start to the start of frame i (an ability's contact frame -> its hit time). */
export function frameStart(st,i){return Array.isArray(st?.ms)&&st.ms.length===st.frames?st.ms.slice(0,i).reduce((a,b)=>a+b,0)/1000:i/(st?.fps||8);}
/* Frame index for a state at time t (seconds since the state began); done = a non-looping state has finished.
   States with per-frame ms (slow anticipation, a fast strike, a held follow-through) are timed frame by frame. */
export function spriteFrame(meta,state,t){const st=meta?.states?.[state]||meta?.states?.idle;if(!st)return{st:null,i:0,done:true};
 const n=st.frames,loop=st.loop!==false;
 if(Array.isArray(st.ms)&&st.ms.length===n){const total=stateDuration(st);let tt=Math.max(0,t);if(loop)tt%=total;else if(tt>=total)return{st,i:n-1,done:true};
  let acc=0;for(let i=0;i<n;i++){acc+=st.ms[i]/1000;if(tt<acc)return{st,i,done:false};}return{st,i:n-1,done:!loop};}
 const raw=Math.floor(Math.max(0,t)*(st.fps||8));
 return{st,i:loop?raw%n:Math.min(raw,n-1),done:!loop&&raw>=n};}
/* Draws feet-anchored at (x,y). facing 1 = right, -1 = left. flash 0..1 tints white for hits. Returns false until loaded. */
export function drawSprite(c,id,state,t,x,y,{facing=1,scale=1,alpha=1,flash=0}={}){const s=sheets.get(id)||loadSprite(id);if(!s.ready)return false;
 const m=s.meta,{st,i}=spriteFrame(m,state,t);if(!st)return false;const [w,h]=m.cell,[ax,ay]=m.anchor,k=scale*(m.scale||1);
 const flip=(m.faces==='left'?-1:1)*facing<0;c.save();c.globalAlpha*=alpha;c.translate(Math.round(x),Math.round(y));if(flip)c.scale(-1,1);c.imageSmoothingEnabled=false;
 c.drawImage(s.img,i*w,st.row*h,w,h,-ax*k,-ay*k,w*k,h*k);
 if(flash>0){const f=flashCell(s.img,i*w,st.row*h,w,h);if(f){c.globalAlpha=alpha*Math.min(1,flash);c.drawImage(f,0,0,w,h,-ax*k,-ay*k,w*k,h*k);}}
 c.restore();return true;}
/* White silhouette of one frame, on its own canvas so the flash never whitens what is behind the sprite. */
let flashCv=null;
function flashCell(img,sx,sy,w,h){if(typeof document==='undefined'&&typeof OffscreenCanvas==='undefined')return null;
 if(!flashCv)flashCv=typeof OffscreenCanvas!=='undefined'?new OffscreenCanvas(w,h):document.createElement('canvas');
 if(flashCv.width<w)flashCv.width=w;if(flashCv.height<h)flashCv.height=h;const g=flashCv.getContext('2d');
 g.globalCompositeOperation='copy';g.clearRect(0,0,flashCv.width,flashCv.height);g.drawImage(img,sx,sy,w,h,0,0,w,h);
 g.globalCompositeOperation='source-in';g.fillStyle='#fff';g.fillRect(0,0,w,h);g.globalCompositeOperation='source-over';
 return flashCv;}
/* v2:enemies (additive) -- the loaded sheet image, for overlays such as telegraph tints; and a way for node tools and
   tests to register an atlas they loaded themselves (no fetch/Image there). */
export function spriteImage(id){return sheets.get(id)?.img||null;}
export function registerSprite(id,meta,img){const s={id,ready:!!(meta&&img),meta,img,failed:false};sheets.set(id,s);return s;}
/* v2:perf (additive) -- core/loader.js lets go of atlases a scene no longer needs (enemies of other levels, the
   other classes' heroes) so decoded memory stays bounded; loadSprite() fetches one again on demand (from cache). */
export function loadedSprites(){return [...sheets.keys()];}
/* force (weapon-runtime): also forget a sheet still loading (its late image is dropped with the orphaned record) */
export function releaseSprite(id,force=false){const s=sheets.get(id);if(!s||(!force&&!s.ready&&!s.failed))return false;sheets.delete(id);return true;}
/* Seconds on the wall clock, for looping props that animate whatever the caller's own clock is doing (a steaming dish). */
export const animClock=()=>(typeof performance!=='undefined'?performance.now():Date.now())/1000;
