/* The Trophy Hall panel (improve20-c-oct31, item 16; data: game/trophies.js). Each plaque is a canvas: the existing PixelLab card
   frame (skin/pl-card-plain.png, 9-slice at 2x) tinted bronze, silver or gold from the art itself, with the boss's own idle frame inside,
   cropped to its drawn pixels. An unbeaten boss is its own shape filled dark, with a "?". No new art.
   Boss atlases load only as their plaque scrolls into view, and are let go when the panel closes (the town never needs them). */
import {trophies,trophyCount,TROPHY_TOTAL,METAL_TINT,storyTrophies} from '../game/trophies.js';
import {gradeFile} from '../game/grade.js';
import {CHAPTER_BACKDROPS} from '../game/prizes.js';
/* improve20-r20j-nov4 #3: the rune seals row (game/ability-seals.js) */
import {sealTrophies} from '../game/ability-seals.js';
/* improve20-r20n-nov4 #1b: the keepsake shelf (§6.4), live chains only */
import {keepsakeShelf,questLive} from '../game/quests.js';
import {levelById,CHAPTERS} from '../game/levels.js';
/* improve20-r22f-nov4 #2: the Rift tower */
import {riftTower,weekLabel,riftOpen,/* improve25-r25f-nov5 #2 */TOWER_MARKS} from '../game/rift.js';
import {loadSprite,spriteImage,spriteMeta,spriteReady,releaseSprite,loadedSprites} from '../gfx/actors/sprites.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const TIER_NAME={normal:'Normal',heroic:'Heroic',legendary:'Legendary'};
const later=(f,ms)=>{const h=setTimeout(f,ms);h?.unref?.();return h;};
/* improve20-y-nov1 #6 (audit4 #25): the bosses filled about 100 px of a 176x148 plaque (tall figures in a wide window, a third of its area).
   The plaque is taller now (176x196) and its window fits the boss to about 80% of the frame's height and up to 80% of its width; the canvas
   is drawn at PQ_RES (2x), so a fractional nearest-neighbour scale lands on half pixels and the boss's pixels stay even. */
export const PLAQUE_W=176,PLAQUE_H=196,PQ_RES=2;
/* improve20-r8a-nov1 #7 (audit7 d4): a chapter seal for each chapter cleared, at the top of the hall: the chapter's finale scene (the same crop as
   its hero-card backdrop) in a seal frame with "CLEARED" stamped over it. A seal not yet seen stamps in once (opts.fresh, main.js keeps
   s.settings.sealsSeen); an uncleared chapter is a dark seal with its name. The stamp is a CSS effect over existing art. */
export const sealsOf=s=>CHAPTER_BACKDROPS.map(([id,name,img,level])=>{const l=levelById(level),ch=CHAPTERS.find(c=>c.id===l?.chapter);return {id:ch?.id||id,chapter:ch?.name||'',img,level,won:!!s?.levels?.[level]?.done};});
export function chapterSealsHTML(s,fresh=[]){return `<div class="chapter-seals" role="list" aria-label="Chapter seals">${sealsOf(s).map(x=>`<div class="chapter-seal ${x.won?'seal-won':'seal-dark'}${x.won&&fresh.includes(x.id)?' seal-stamp':''}" role="listitem" data-seal="${esc(x.id)}"><span class="seal-pic"${x.won?` style="background-image:url(${esc(x.img)})"`:''}></span><strong>${esc(x.chapter)}</strong><small>${x.won?'CLEARED':'Not yet'}</small></div>`).join('')}</div>`;}
/* improve20-r20e-nov4 #4: the Story row (game/trophies.js storyTrophies), bronze tiles a Story kid can fill without Heroic */
export function storyRowHTML(s){const xs=storyTrophies(s),n=xs.filter(x=>x.won).length;return `<section class="story-row" aria-label="Story trophies"><h3 class="story-row-head">Story trophies <small>${n} of ${xs.length}</small></h3><div class="story-tiles" role="list">${xs.map(x=>`<div class="story-tile ${x.won?'story-won':'story-dark'}" role="listitem" data-story-trophy="${esc(x.id)}"><span class="story-pic${x.id==='rift'||x.id==='hall'?' story-icon':''}" style="background-image:url(${esc(x.img)})"></span><strong>${esc(x.name)}</strong><small>${esc(x.text)}</small></div>`).join('')}</div></section>`;}
/* improve20-r20j-nov4 #3: one bronze tile per rune seal opened (the existing story-tile look; the chest is the reward chest picture) */
export function runeSealRowHTML(s){const xs=sealTrophies(s),n=xs.filter(x=>x.won).length;return `<section class="story-row seal-row" aria-label="Rune seals"><h3 class="story-row-head">Rune seals opened <small>${n} of ${xs.length}</small></h3><div class="story-tiles" role="list">${xs.map(x=>`<div class="story-tile ${x.won?'story-won':x.state==='ready'?/* improve24-r24n-nov5 #3: a seal the kid can break now is lit, with a Go button (main.js trophyHall starts its level) */'story-won seal-ready':x.state==='broken'?'story-won seal-broken':'story-dark'}" role="listitem" data-seal-trophy="${esc(x.id)}" data-seal-state="${esc(x.state||'')}"><span class="story-pic story-icon" style="background-image:url(ui/skin/rewards/chest.png)"></span><strong>${esc(x.name)}</strong><small>${esc(x.text)}</small>${x.go?`<button type="button" class="primary seal-go" data-seal-go="${esc(x.go)}" aria-label="Go to ${esc(x.name.replace(/ seal$/,''))} and break its seal">Go</button>`:''}</div>`).join('')}</div></section>`;}
/* improve20-r20n-nov4 #1b: one tile per live quest chain: the keepsake's picture and its one-line story once earned, else a dark slot */
export function keepsakeShelfHTML(s){const xs=keepsakeShelf(s,questLive);if(!xs.length)return '';const n=xs.filter(x=>x.won).length;return `<section class="story-row keepsake-row" aria-label="Keepsakes"><h3 class="story-row-head">Keepsakes <small>${n} of ${xs.length}</small></h3><div class="story-tiles" role="list">${xs.map(x=>`<div class="story-tile ${x.won?'story-won':'story-dark'}" role="listitem" data-keepsake="${esc(x.id)}"${x.won?` title="${esc(x.story)}"`:''}><span class="story-pic story-icon keepsake-pic" style="background-image:url(${esc(x.img)})"></span><strong>${esc(x.won?x.name:x.title)}</strong><small>${esc(x.won?x.story:'Finish a quest to fill this.')}</small></div>`).join('')}</div></section>`;}
/* improve20-r22f-nov4 #2 (audit15 plan item 6): the Rift tower, one floor per Story Rift win (game/rift.js riftTower), newest week on top, each
   week with its count. Drawn with the UI skin's slot frame and the world map's rift portal on top; no new art. At most 8 floor bars a week are
   drawn, the label always gives the real count. Nothing here is "this week" or a cap. */
export const TOWER_BARS=8;
/* improve25-r25f-nov5 #2 (audit16 plan 4: "the tower is one icon"): the entry draws a stacked tower from PixelLab pieces (ui/skin/rift-tower, DRAFT):
   the base, one block per Story Rift floor climbed, faint blocks up to the next marker, a banner at floors 4, 8 and 12 (lit once reached; each
   earns its title, game/titles.js) and the rift portal on top. The week list stays beside it; the label always gives the real count. Up to
   TOWER_DRAWN blocks are drawn. No cap on floors, no week limit, nothing lost. */
export const TOWER_DRAWN=30;
export function riftTowerHTML(s){const t=riftTower(s);if(!t.floors&&!riftOpen(s))return '';
 const rows=[...t.rows].reverse().map(x=>`<li class="rift-week" data-week="${esc(x.week||'early')}"><small><b>${esc(weekLabel(x.week))}</b> · ${x.n} floor${x.n===1?'':'s'}</small></li>`).join('');
 const nx=TOWER_MARKS.find(m=>m.at>t.floors),shown=Math.min(TOWER_DRAWN,Math.max(t.floors,nx?nx.at:0)),mark=m=>m?`<img class="rift-mark${m.at<=t.floors?' lit':''}" src="ui/skin/rift-tower/mark.png" alt="" width="32" height="48" draggable="false" data-mark="${m.at}">`:'';
 const blocks=Array.from({length:shown},(_,i)=>{const f=i+1;return `<span class="rift-block${f>t.floors?' ghost':''}" data-floor="${f}"><img src="ui/skin/rift-tower/floor.png" alt="" width="36" height="20" draggable="false">${mark(TOWER_MARKS.find(m=>m.at===f))}</span>`;}).join('');
 const marks=`<ul class="rift-marks">${TOWER_MARKS.map(m=>`<li data-mark-title="${esc(m.id)}"${m.at<=t.floors?' data-earned':''}>${m.at<=t.floors?'✓ ':''}<b>${esc(m.name)}</b> at ${m.at} floors</li>`).join('')}</ul>`;
 const next=nx?`<p class="rift-next" data-next-mark="${nx.at}">${nx.at-t.floors} more floor${nx.at-t.floors===1?'':'s'} to the ${esc(nx.name)} banner.</p>`:'<p class="rift-next" data-next-mark="done">Every banner is up. The tower still grows with each Story Rift win.</p>';
 return `<section class="story-row rift-tower-row" aria-label="Rift tower" data-floors="${t.floors}"><h3 class="story-row-head">Rift tower <small>${t.floors} floor${t.floors===1?'':'s'}</small></h3><div class="rift-tower"><div class="rift-stack" aria-hidden="true"><img class="rift-base" src="ui/skin/rift-tower/base.png" alt="" width="78" height="30" draggable="false">${blocks}<img class="rift-tower-top" src="assets/worldmap/rift-portal.png" alt="" width="32" height="40" draggable="false"></div><div class="rift-side">${t.floors?`<ol class="rift-floors">${rows}</ol>`:'<p class="rift-tower-empty">Win a Story Rift to build the first floor.</p>'}${next}${marks}</div></div><p class="subtle rift-tower-note">Every Story Rift win adds a floor, replays too. A skipped week loses nothing.</p></section>`;}
export function trophyHallHTML(s,{freshSeals=[]}={}){const list=trophies(s),n=trophyCount(s);
 return `${chapterSealsHTML(s,freshSeals)}${storyRowHTML(s)}${/* improve20-r22f-nov4 #2 */riftTowerHTML(s)}${/* improve20-r20n-nov4 #1b */keepsakeShelfHTML(s)}${runeSealRowHTML(s)}<p class="subtle trophy-count">${n} of ${TROPHY_TOTAL} bosses beaten. Win on Heroic for a silver frame, on Legendary for gold.</p><div class="trophy-grid" role="list">${list.map(t=>`<div class="trophy ${t.won?'trophy-won trophy-'+t.metal:'trophy-dark'}" role="listitem" data-trophy="${esc(t.id)}"><canvas class="trophy-art" data-trophy-sprite="${esc(t.sprite)}" data-metal="${t.metal||''}" width="${PLAQUE_W*PQ_RES}" height="${PLAQUE_H*PQ_RES}" aria-hidden="true"></canvas>${t.won?`<h3>${esc(t.name)}</h3><p class="trophy-meta">${t.grade?`<img src="ui/skin/run/${gradeFile(t.grade)}.png" alt="" width="20" height="20"> Best grade ${esc(t.grade)} · `:''}${TIER_NAME[t.tier]} clear</p><p class="trophy-line">“${esc(t.line)}”</p>`:`<h3>?</h3><p class="trophy-meta">${esc(t.level)}</p><p class="trophy-line subtle">Beat this boss to hang its plaque.</p>`}</div>`).join('')}</div>`;}

/* 9-slice at whole scale k, edges stretched (the card's edges are plain) */
function nine(c,im,x,y,w,h,[t,r,b,l],k){const W=im.width,H=im.height,mw=W-l-r,mh=H-t-b,d=(sx,sy,sw,sh,dx,dy,dw,dh)=>{if(sw>0&&sh>0&&dw>0&&dh>0)c.drawImage(im,sx,sy,sw,sh,dx,dy,dw,dh);};
 d(l,t,mw,mh,x+l*k,y+t*k,w-(l+r)*k,h-(t+b)*k);d(l,0,mw,t,x+l*k,y,w-(l+r)*k,t*k);d(l,H-b,mw,b,x+l*k,y+h-b*k,w-(l+r)*k,b*k);d(0,t,l,mh,x,y+t*k,l*k,h-(t+b)*k);d(W-r,t,r,mh,x+w-r*k,y+t*k,r*k,h-(t+b)*k);
 d(0,0,l,t,x,y,l*k,t*k);d(W-r,0,r,t,x+w-r*k,y,r*k,t*k);d(0,H-b,l,b,x,y+h-b*k,l*k,b*k);d(W-r,H-b,r,b,x+w-r*k,y+h-b*k,r*k,b*k);}
const mk=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c;};
const frames={};
/* the card frame tinted to a metal: hue and saturation from the tint, light and shade from the art ('color' blend), alpha kept */
/* gold is a gradient map over the art's own light and shade (dark amber to pale gold), not a flat hue: a 'color' blend kept the card's
   low brown luminance and read mustard beside the bright silver (improve20-l-oct31) */
export const GOLD_STOPS=[[0,[112,62,8]],[.34,[222,158,30]],[.6,[252,208,64]],[1,[255,248,196]]];
export function goldShade(t){t=Math.max(0,Math.min(1,t));let i=1;while(i<GOLD_STOPS.length-1&&t>GOLD_STOPS[i][0])i++;const [a,ca]=GOLD_STOPS[i-1],[b,cb]=GOLD_STOPS[i],f=(t-a)/(b-a||1);return ca.map((v,k)=>Math.round(v+(cb[k]-v)*f));}
function goldMap(g){const {width:W,height:H}=g.canvas,im=g.getImageData(0,0,W,H),d=im.data;let lo=1,hi=0;const L=i=>(.299*d[i]+.587*d[i+1]+.114*d[i+2])/255;
 for(let i=0;i<d.length;i+=4)if(d[i+3]>8){const l=L(i);if(l<lo)lo=l;if(l>hi)hi=l;}
 for(let i=0;i<d.length;i+=4)if(d[i+3]>8){const c=goldShade((L(i)-lo)/((hi-lo)||1));d[i]=c[0];d[i+1]=c[1];d[i+2]=c[2];}
 g.putImageData(im,0,0);}
export function plaqueFrame(card,metal){const key=metal||'dark';if(frames[key])return frames[key];const cv=mk(PLAQUE_W,PLAQUE_H),g=cv.getContext('2d');g.imageSmoothingEnabled=false;nine(g,card,0,0,PLAQUE_W,PLAQUE_H,[10,8,8,8],2);
 const base=mk(PLAQUE_W,PLAQUE_H);base.getContext('2d').drawImage(cv,0,0);
 if(metal==='gold')goldMap(g);else if(metal){g.globalCompositeOperation='color';g.fillStyle=METAL_TINT[metal];g.fillRect(0,0,PLAQUE_W,PLAQUE_H);g.globalCompositeOperation=metal==='bronze'?'multiply':'screen';g.globalAlpha=metal==='bronze'?.25:metal==='gold'?.38:.22;g.fillRect(0,0,PLAQUE_W,PLAQUE_H);g.globalAlpha=1;}
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
export function paintPlaque(cv,card,id,metal){const g=cv.getContext('2d');g.setTransform?.(1,0,0,1,0,0);g.imageSmoothingEnabled=false;g.clearRect(0,0,cv.width,cv.height);const r=cv.width/PLAQUE_W||1;g.setTransform?.(r,0,0,r,0,0);g.imageSmoothingEnabled=false;g.drawImage(plaqueFrame(card,metal),0,0);
 const b=spriteReady(id)?idleBox(id):null;if(!b){if(!metal)mark(g);return false;}
 const BW=PLAQUE_W-36,BH=PLAQUE_H-40,k=Math.min(BW/b.w,BH/b.h,3),q=v=>Math.round(v*r)/r,dw=q(b.w*k),dh=q(b.h*k),dx=q((PLAQUE_W-dw)/2),dy=q(PLAQUE_H-16-dh);
 if(metal){g.drawImage(b.cv,b.x,b.y,b.w,b.h,dx,dy,dw,dh);return true;}
 /* unbeaten: the boss's own shape, filled dark, with a "?" */
 const sc=mk(Math.round(dw*r),Math.round(dh*r)),sg=sc.getContext('2d');sg.imageSmoothingEnabled=false;sg.drawImage(b.cv,b.x,b.y,b.w,b.h,0,0,sc.width,sc.height);sg.globalCompositeOperation='source-in';sg.fillStyle='#07080b';sg.fillRect(0,0,sc.width,sc.height);g.globalAlpha=.9;g.drawImage(sc,dx,dy,dw,dh);g.globalAlpha=1;mark(g);return true;}
function mark(g){g.font='bold 40px "Pixel Operator", monospace';g.textAlign='center';g.textBaseline='middle';g.fillStyle='#000';g.fillText('?',PLAQUE_W/2+2,PLAQUE_H/2+8);g.fillStyle='#e9dcb6';g.fillText('?',PLAQUE_W/2,PLAQUE_H/2+6);}
/* browser: load the card once, then each plaque's atlas when it scrolls into view; repaint until ready; release on close */
export function wireTrophyHall(root){const cvs=[...root.querySelectorAll('[data-trophy-sprite]')];if(!cvs.length)return;const before=new Set(loadedSprites()),mine=new Set();
 const card=new Image();card.src=new URL('./skin/pl-card-plain.png',import.meta.url).href;
 const want=new Set(),paint=()=>{if(!card.complete||!card.naturalWidth)return;for(const cv of cvs)if(!cv.dataset.done){const id=cv.dataset.trophySprite;if(want.has(cv)&&paintPlaque(cv,card,id,cv.dataset.metal||null))cv.dataset.done='1';else if(!cv.dataset.base){paintPlaque(cv,card,id,cv.dataset.metal||null);cv.dataset.base='1';}}};
 const see=cv=>{if(want.has(cv))return;want.add(cv);const id=cv.dataset.trophySprite;if(!before.has(id))mine.add(id);loadSprite(id);};
 if(typeof IntersectionObserver==='function'){const io=new IntersectionObserver(es=>{for(const e of es)if(e.isIntersecting){see(e.target);io.unobserve(e.target);}},{root:null,rootMargin:'120px'});cvs.forEach(cv=>io.observe(cv));}else cvs.forEach(see);
 const tick=()=>{if(!cvs[0].isConnected){for(const id of mine)releaseSprite(id,true);return;}paint();if(cvs.some(cv=>!cv.dataset.done))later(tick,120);else{const wait=()=>{if(!cvs[0].isConnected){for(const id of mine)releaseSprite(id,true);return;}later(wait,500);};wait();}};
 card.onload=paint;tick();}
