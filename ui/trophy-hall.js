/* The Trophy Hall panel (improve20-c-oct31, item 16; data: game/trophies.js). Each plaque is a canvas: the existing PixelLab card
   frame (skin/pl-card.png, 9-slice at 2x) tinted bronze, silver or gold from the art itself, with the boss's own idle frame inside,
   cropped to its drawn pixels. An unbeaten boss is its own shape filled dark, with a "?". No new art.
   Boss atlases load only as their plaque scrolls into view, and are let go when the panel closes (the town never needs them). */
import {trophies,trophyCount,TROPHY_TOTAL,METAL_TINT} from '../game/trophies.js';
import {gradeFile} from '../game/grade.js';
import {loadSprite,spriteImage,spriteMeta,spriteReady,releaseSprite,loadedSprites} from '../gfx/actors/sprites.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const TIER_NAME={normal:'Normal',heroic:'Heroic',legendary:'Legendary'};
const later=(f,ms)=>{const h=setTimeout(f,ms);h?.unref?.();return h;};
export const PLAQUE_W=176,PLAQUE_H=148;
export function trophyHallHTML(s){const list=trophies(s),n=trophyCount(s);
 return `<p class="subtle trophy-count">${n} of ${TROPHY_TOTAL} bosses beaten. Win on Heroic for a silver frame, on Legendary for gold.</p><div class="trophy-grid" role="list">${list.map(t=>`<div class="trophy ${t.won?'trophy-won trophy-'+t.metal:'trophy-dark'}" role="listitem" data-trophy="${esc(t.id)}"><canvas class="trophy-art" data-trophy-sprite="${esc(t.sprite)}" data-metal="${t.metal||''}" width="${PLAQUE_W}" height="${PLAQUE_H}" aria-hidden="true"></canvas>${t.won?`<h3>${esc(t.name)}</h3><p class="trophy-meta">${t.grade?`<img src="ui/skin/run/${gradeFile(t.grade)}.png" alt="" width="20" height="20"> Best grade ${esc(t.grade)} · `:''}${TIER_NAME[t.tier]} clear</p><p class="trophy-line">“${esc(t.line)}”</p>`:`<h3>?</h3><p class="trophy-meta">${esc(t.level)}</p><p class="trophy-line subtle">Beat this boss to hang its plaque.</p>`}</div>`).join('')}</div>`;}

/* 9-slice at whole scale k, edges stretched (the card's edges are plain) */
function nine(c,im,x,y,w,h,[t,r,b,l],k){const W=im.width,H=im.height,mw=W-l-r,mh=H-t-b,d=(sx,sy,sw,sh,dx,dy,dw,dh)=>{if(sw>0&&sh>0&&dw>0&&dh>0)c.drawImage(im,sx,sy,sw,sh,dx,dy,dw,dh);};
 d(l,t,mw,mh,x+l*k,y+t*k,w-(l+r)*k,h-(t+b)*k);d(l,0,mw,t,x+l*k,y,w-(l+r)*k,t*k);d(l,H-b,mw,b,x+l*k,y+h-b*k,w-(l+r)*k,b*k);d(0,t,l,mh,x,y+t*k,l*k,h-(t+b)*k);d(W-r,t,r,mh,x+w-r*k,y+t*k,r*k,h-(t+b)*k);
 d(0,0,l,t,x,y,l*k,t*k);d(W-r,0,r,t,x+w-r*k,y,r*k,t*k);d(0,H-b,l,b,x,y+h-b*k,l*k,b*k);d(W-r,H-b,r,b,x+w-r*k,y+h-b*k,r*k,b*k);}
const mk=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c;};
const frames={};
/* the card frame tinted to a metal: hue and saturation from the tint, light and shade from the art ('color' blend), alpha kept */
export function plaqueFrame(card,metal){const key=metal||'dark';if(frames[key])return frames[key];const cv=mk(PLAQUE_W,PLAQUE_H),g=cv.getContext('2d');g.imageSmoothingEnabled=false;nine(g,card,0,0,PLAQUE_W,PLAQUE_H,[10,8,8,8],2);
 const base=mk(PLAQUE_W,PLAQUE_H);base.getContext('2d').drawImage(cv,0,0);
 if(metal){g.globalCompositeOperation='color';g.fillStyle=METAL_TINT[metal];g.fillRect(0,0,PLAQUE_W,PLAQUE_H);g.globalCompositeOperation=metal==='bronze'?'multiply':'screen';g.globalAlpha=metal==='bronze'?.25:metal==='gold'?.38:.22;g.fillRect(0,0,PLAQUE_W,PLAQUE_H);g.globalAlpha=1;}
 else{g.globalCompositeOperation='multiply';g.fillStyle='#5a5f6a';g.fillRect(0,0,PLAQUE_W,PLAQUE_H);}
 g.globalCompositeOperation='destination-in';g.drawImage(base,0,0);g.globalCompositeOperation='source-over';
 /* the window behind the boss: a dark wall so every sprite reads */
 const gr=g.createLinearGradient(0,22,0,PLAQUE_H-14);gr.addColorStop(0,metal?'#1d2333':'#14161c');gr.addColorStop(1,metal?'#2c3346':'#1b1e26');g.fillStyle=gr;g.fillRect(14,22,PLAQUE_W-28,PLAQUE_H-36);
 return frames[key]=cv;}
/* the opaque box of a boss's first idle frame, found once per atlas */
const boxes={};
function idleBox(id){if(boxes[id])return boxes[id];const im=spriteImage(id),m=spriteMeta(id);if(!im||!m)return null;const st=m.states.idle||Object.values(m.states)[0],[w,h]=m.cell,cv=mk(w,h),g=cv.getContext('2d',{willReadFrequently:true});g.drawImage(im,0,st.row*h,w,h,0,0,w,h);
 const d=g.getImageData(0,0,w,h).data;let x0=w,y0=h,x1=-1,y1=-1;for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(d[(y*w+x)*4+3]>24){if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y;}
 return boxes[id]=x1<0?{cv,x:0,y:0,w,h}:{cv,x:x0,y:y0,w:x1-x0+1,h:y1-y0+1};}
export function paintPlaque(cv,card,id,metal){const g=cv.getContext('2d');g.imageSmoothingEnabled=false;g.clearRect(0,0,cv.width,cv.height);g.drawImage(plaqueFrame(card,metal),0,0);
 const b=spriteReady(id)?idleBox(id):null;if(!b){if(!metal)mark(g);return false;}
 const BW=PLAQUE_W-40,BH=PLAQUE_H-48,k=Math.min(BW/b.w,BH/b.h,2),dw=Math.round(b.w*k),dh=Math.round(b.h*k),dx=Math.round((PLAQUE_W-dw)/2),dy=Math.round(PLAQUE_H-16-dh);
 if(metal){g.drawImage(b.cv,b.x,b.y,b.w,b.h,dx,dy,dw,dh);return true;}
 /* unbeaten: the boss's own shape, filled dark, with a "?" */
 const sc=mk(dw,dh),sg=sc.getContext('2d');sg.imageSmoothingEnabled=false;sg.drawImage(b.cv,b.x,b.y,b.w,b.h,0,0,dw,dh);sg.globalCompositeOperation='source-in';sg.fillStyle='#07080b';sg.fillRect(0,0,dw,dh);g.globalAlpha=.9;g.drawImage(sc,dx,dy);g.globalAlpha=1;mark(g);return true;}
function mark(g){g.font='bold 40px "Pixel Operator", monospace';g.textAlign='center';g.textBaseline='middle';g.fillStyle='#000';g.fillText('?',PLAQUE_W/2+2,PLAQUE_H/2+8);g.fillStyle='#e9dcb6';g.fillText('?',PLAQUE_W/2,PLAQUE_H/2+6);}
/* browser: load the card once, then each plaque's atlas when it scrolls into view; repaint until ready; release on close */
export function wireTrophyHall(root){const cvs=[...root.querySelectorAll('[data-trophy-sprite]')];if(!cvs.length)return;const before=new Set(loadedSprites()),mine=new Set();
 const card=new Image();card.src=new URL('./skin/pl-card.png',import.meta.url).href;
 const want=new Set(),paint=()=>{if(!card.complete||!card.naturalWidth)return;for(const cv of cvs)if(!cv.dataset.done){const id=cv.dataset.trophySprite;if(want.has(cv)&&paintPlaque(cv,card,id,cv.dataset.metal||null))cv.dataset.done='1';else if(!cv.dataset.base){paintPlaque(cv,card,id,cv.dataset.metal||null);cv.dataset.base='1';}}};
 const see=cv=>{if(want.has(cv))return;want.add(cv);const id=cv.dataset.trophySprite;if(!before.has(id))mine.add(id);loadSprite(id);};
 if(typeof IntersectionObserver==='function'){const io=new IntersectionObserver(es=>{for(const e of es)if(e.isIntersecting){see(e.target);io.unobserve(e.target);}},{root:null,rootMargin:'120px'});cvs.forEach(cv=>io.observe(cv));}else cvs.forEach(see);
 const tick=()=>{if(!cvs[0].isConnected){for(const id of mine)releaseSprite(id,true);return;}paint();if(cvs.some(cv=>!cv.dataset.done))later(tick,120);else{const wait=()=>{if(!cvs[0].isConnected){for(const id of mine)releaseSprite(id,true);return;}later(wait,500);};wait();}};
 card.onload=paint;tick();}
