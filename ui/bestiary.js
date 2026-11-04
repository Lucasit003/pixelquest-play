/* The Bestiary (Journal tab): improve20-j-nov1 #2 (audit3 #19: 62 big cards with a 40 px sprite each, about ten screens long).
   Now a compact grid of sprite tiles grouped by chapter: each foe's own atlas sprite (idle frame 0, unmodified) cropped to what is
   drawn and scaled up to 2x with nearest-neighbour, a foe seen but not beaten a little dimmed, and one not met yet as a dark
   silhouette of the same sprite (an effect on the existing art, never a drawn icon). The name, the fact and the counts open in a detail
   panel on a click, a tap or Enter; Escape or the close button shuts it. Every fact's text is exactly what the card showed (lane M
   sourced them). Display only: nothing here writes the save. */
import {bestiaryPages,levelById,CHAPTERS} from '../game/levels.js';
import {baseDef} from '../game/roster.js';
import {loadSprite,drawSprite} from '../gfx/actors/sprites.js';
/* improve20-r22f-nov4 #3: the Hall boss diary, at the top of the Bestiary once the Hall's door is open (or a page is filled) */
import {diaryPages} from '../game/hall-diary.js';
import {hallDoor} from '../game/hall.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* One page's words, exactly as the old card had them. */
export function bestiaryPage(save,p){const b=save?.bestiary||{},r=b[p.key],d=baseDef(p.key),lv=levelById(p.level),name=p.boss?(lv?.bossName||d.name):d.name,state=r?.defeated?'defeated':r?.seen?'seen':'unknown';
 const text=state==='defeated'?(d.fact?.text||(typeof d.fact==='string'?d.fact:'')||'More about this one soon.'):state==='seen'?'Seen, not yet defeated.':'Not met yet.';
 return {key:p.key,boss:p.boss,state,name,shown:state==='unknown'?'???':name,tag:`${p.boss?'BOSS':'ENEMY'} · ${lv?.name||''}`,text,seen:r?.seen|0,defeated:r?.defeated|0,sprite:d.sprite||'',chapter:lv?.chapter||CHAPTERS[0].id,record:!!r};}
/* tile: the canvas size in CSS pixels (124 on a desktop, so a 58 px foe fits at 2x; 96 in phone mode), drawn 1:1 so the scale stays whole */
export const TILE=124,TILE_PHONE=96;
/* improve20-r22f-nov4 #3 (audit15 plan item 7): one page per Hall boss, filled by a Hall win on any rung: the boss's own idle frame, how you beat
   it and a joke; an unbeaten boss is its dark shape with the rung that has it. Folded in a <details> so the Bestiary below stays one tap away. */
export function hallDiaryHTML(save,{tile=TILE}={}){const ps=diaryPages(save),n=ps.filter(p=>p.beat).length;if(!n&&!hallDoor(save))return '';const t=Math.round(tile*.6);
 return `<details class="hall-diary" data-filled="${n}"${n?' open':''}><summary><h4>Hall boss diary <small>${n} / ${ps.length} pages</small></h4></summary><p class="subtle hall-diary-lead">Beat a boss in the Hall of Echoes, on any rung, to fill its page.</p><div class="hall-diary-pages">${ps.map(p=>`<article class="diary-page ${p.beat?'diary-filled':'diary-locked'}" data-diary="${esc(p.id)}">${p.sprite?`<canvas class="diary-art" data-sprite="${esc(p.sprite)}" data-mode="${p.beat?'defeated':'unknown'}" width="${t}" height="${t}" style="width:${t}px;height:${t}px" aria-hidden="true"></canvas>`:''}<div class="diary-text"><h5>${esc(p.beat?p.name:'???')}</h5>${p.beat?`<p class="diary-how">${esc(p.how)}</p><p class="diary-joke">${esc(p.joke)}</p>`:`<p class="diary-lock">${esc(p.lock)}</p>`}</div></article>`).join('')}</div></details>`;}
export function bestiaryHTML(save,{tile=TILE}={}){const pages=bestiaryPages().map(p=>bestiaryPage(save,p)),met=pages.filter(p=>p.state==='defeated').length;
 const groups=CHAPTERS.map(c=>({c,list:pages.filter(p=>p.chapter===c.id)})).filter(g=>g.list.length);
 const tileHTML=p=>`<button type="button" class="bestiary-tile" data-key="${esc(p.key)}" data-state="${p.state}" data-boss="${p.boss}" aria-label="${esc(p.state==='unknown'?'Not met yet':p.name)}" title="${esc(p.state==='unknown'?'Not met yet':p.name)}">${p.sprite?`<canvas class="bestiary-tile-art" data-sprite="${esc(p.sprite)}" data-mode="${p.state}" width="${tile}" height="${tile}" style="width:${tile}px;height:${tile}px" aria-hidden="true"></canvas>`:''}${p.boss?'<span class="bestiary-boss-tag">BOSS</span>':''}</button>`;
 return /* improve20-r22f-nov4 #3 */hallDiaryHTML(save,{tile})+`<p class="subtle bestiary-count">${met} / ${pages.length} pages filled. Defeat an enemy to fill its page. Tap a monster to read its page.</p>`+
  groups.map(g=>{const grid=`<div class="bestiary-grid" style="--tile:${tile}px">${g.list.map(tileHTML).join('')}</div>`;return g.list.some(p=>p.state!=='unknown')?`<section class="bestiary-chapter" data-chapter="${esc(g.c.id)}"><h4>${esc(g.c.name)} <small>${g.list.filter(p=>p.state==='defeated').length} / ${g.list.length}</small></h4>${grid}</section>`:`<details class="bestiary-chapter bestiary-unmet" data-chapter="${esc(g.c.id)}"><summary><h4>${esc(g.c.name)} <small>Not explored yet · ${g.list.length} pages</small></h4></summary>${grid}</details>`;}).join('')+
  `<div class="bestiary-detail-wrap" hidden><div class="bestiary-detail card" role="dialog" aria-modal="false" aria-labelledby="bestiary-detail-name"></div></div>`;}
/* improve20-r10d-nov2 #6 (kid sims nov2 #30): before the first foe is met the tab is one friendly line, not 67 silhouettes; after that, a
   chapter with nothing met yet folds to its name (bestiaryHTML) */
export function bestiaryEarlyHTML(save){const b=save?.bestiary||{};return bestiaryPages().some(p=>b[p.key]?.seen||b[p.key]?.defeated)?'':'<p class="journal-early">Beat your first monster to fill this book.</p>';}
export function bestiaryDetailHTML(p){return `<button type="button" class="bestiary-detail-close" aria-label="Close">✕</button>${p.sprite?`<canvas class="bestiary-detail-art" data-sprite="${esc(p.sprite)}" data-mode="${p.state}" data-max="3" width="160" height="128" aria-hidden="true"></canvas>`:''}<div class="bestiary-detail-text"><span class="tag">${esc(p.tag)}</span><h3 id="bestiary-detail-name">${esc(p.shown)}</h3><p>${esc(p.text)}</p>${p.record?`<div class="stats-row"><span>Seen <strong>${p.seen}</strong></span><span>Defeated <strong>${p.defeated}</strong></span></div>`:''}</div>`;}
/* Draws a sprite into a canvas: the drawn part of its idle frame, at the largest whole scale up to data-max (2) that fits, feet on the
   floor; data-mode: defeated (as made), seen (dimmed), unknown (a dark silhouette). Returns false while the atlas loads. */
let scratch=null;
export function paintSpriteTile(cv){const id=cv.dataset.sprite,sp=loadSprite(id);if(!sp.ready)return sp.failed?null:false;const m=sp.meta,k=m.scale||1,[w,h]=m.cell.map(v=>Math.ceil(v*k)),[ax,ay]=m.anchor.map(v=>v*k);
 scratch??=document.createElement('canvas');scratch.width=w;scratch.height=h;const g=scratch.getContext('2d',{willReadFrequently:true});g.clearRect(0,0,w,h);drawSprite(g,id,'idle',0,ax,ay);
 const px=g.getImageData(0,0,w,h).data;let x0=w,y0=h,x1=-1,y1=-1;for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(px[(y*w+x)*4+3]>8){if(x<x0)x0=x;if(x>x1)x1=x;if(y<y0)y0=y;if(y>y1)y1=y;}
 const c=cv.getContext('2d');c.clearRect(0,0,cv.width,cv.height);if(x1<0)return true;const bw=x1-x0+1,bh=y1-y0+1,pad=4,max=+(cv.dataset.max||2);
 let s=Math.min(max,Math.floor(Math.min((cv.width-pad)/bw,(cv.height-pad)/bh)));if(s<1)s=Math.min((cv.width-pad)/bw,(cv.height-pad)/bh);
 const dw=Math.round(bw*s),dh=Math.round(bh*s),dx=Math.round((cv.width-dw)/2),dy=cv.height-dh-3;c.imageSmoothingEnabled=false;
 if(cv.dataset.mode==='unknown'){g.globalCompositeOperation='source-in';g.fillStyle='#0d0b16';g.fillRect(0,0,w,h);g.globalCompositeOperation='source-over';c.globalAlpha=.85;}
 else if(cv.dataset.mode==='seen')c.globalAlpha=.6;
 c.drawImage(scratch,x0,y0,bw,bh,dx,dy,dw,dh);c.globalAlpha=1;cv.removeAttribute('data-sprite');return true;}
export function paintBestiary(root,stillOpen,tries=0){let waiting=false;for(const cv of root.querySelectorAll('canvas[data-sprite]')){const r=paintSpriteTile(cv);if(r===false)waiting=true;}
 if(waiting&&tries<60&&stillOpen())setTimeout(()=>paintBestiary(root,stillOpen,tries+1),120);}
/* Wires the tiles in root (the journal body): a click, a tap or Enter on a tile opens its page; Escape, the close button or a click
   outside the panel shuts it and gives focus back to the tile. */
export function wireBestiary(root,save,stillOpen){const wrap=root.querySelector('.bestiary-detail-wrap'),box=wrap?.querySelector('.bestiary-detail');if(!box)return;let from=null;
 const close=()=>{if(wrap.hidden)return;wrap.hidden=true;root.querySelectorAll('.bestiary-tile.on').forEach(t=>t.classList.remove('on'));from?.focus?.({preventScroll:true});};
 const open=t=>{const p=bestiaryPages().find(x=>x.key===t.dataset.key);if(!p)return;from=t;root.querySelectorAll('.bestiary-tile.on').forEach(x=>x.classList.remove('on'));t.classList.add('on');
  box.innerHTML=bestiaryDetailHTML(bestiaryPage(save,p));wrap.hidden=false;paintBestiary(box,stillOpen);box.querySelector('.bestiary-detail-close').onclick=close;box.querySelector('.bestiary-detail-close').focus({preventScroll:true});};
 root.querySelectorAll('.bestiary-tile').forEach(t=>t.onclick=()=>open(t));wrap.onclick=e=>{if(e.target===wrap)close();};
 const key=e=>{if(!root.isConnected||!stillOpen()){document.removeEventListener('keydown',key,true);return;}if(e.key==='Escape'&&!wrap.hidden){e.preventDefault();e.stopImmediatePropagation();close();}};
 document.addEventListener('keydown',key,true);return {open,close};}
export const BESTIARY_CSS=`dialog[data-view=journal] .hall-diary{margin:0 0 10px;padding:4px 8px;border:2px solid #e3b85a;border-radius:6px;background:rgba(10,12,30,.45)}
dialog[data-view=journal] .hall-diary>summary{cursor:pointer;list-style-position:inside}dialog[data-view=journal] .hall-diary>summary h4{display:inline;margin:0;font-size:16px;color:var(--gold,#e3b85a);letter-spacing:1px;text-transform:uppercase}dialog[data-view=journal] .hall-diary>summary h4 small{color:#cfc3a8;font-size:13px;letter-spacing:0;text-transform:none}
dialog[data-view=journal] .hall-diary-lead{margin:4px 0 6px}
dialog[data-view=journal] .hall-diary-pages{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:6px}
dialog[data-view=journal] .diary-page{display:flex;gap:8px;align-items:center;padding:6px;border:1px solid #c1914966;border-radius:4px;background:#2a2d48}
dialog[data-view=journal] .diary-page.diary-locked{background:#1c1d30;border-color:#c1914933}
dialog[data-view=journal] .diary-art{image-rendering:pixelated;flex:none}
dialog[data-view=journal] .diary-text{min-width:0}dialog[data-view=journal] .diary-text h5{margin:0 0 2px;font-size:15px;color:#ffe08a}dialog[data-view=journal] .diary-text p{margin:0 0 2px;font-size:13px;line-height:16px}
dialog[data-view=journal] .diary-joke{color:#cfc3a8;font-style:italic}dialog[data-view=journal] .diary-lock{color:#a9a3b8}
.m-mode dialog[data-view=journal] .hall-diary-pages{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}
dialog[data-view=journal] .bestiary-count{margin:0 0 4px}
dialog[data-view=journal] .bestiary-chapter{margin:0 0 8px}dialog[data-view=journal] .bestiary-chapter>h4{margin:6px 0 4px;font-size:16px;color:var(--gold,#e3b85a);letter-spacing:1px;text-transform:uppercase}dialog[data-view=journal] .bestiary-chapter>h4 small{color:#cfc3a8;font-size:13px;letter-spacing:0;text-transform:none}
dialog[data-view=journal] .bestiary-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(var(--tile,124px),1fr));gap:4px}
dialog[data-view=journal] .bestiary-tile{position:relative;display:grid;place-items:center;min-height:0;height:calc(var(--tile,124px) + 2px);padding:0;margin:0;overflow:hidden;border:1px solid #c1914966;border-radius:4px;background:#2a2d48;box-shadow:none;cursor:pointer;transform:none}
dialog[data-view=journal] .bestiary-tile[data-state=unknown]{background:#1c1d30;border-color:#c1914933}dialog[data-view=journal] .bestiary-tile[data-boss=true]{border-color:#e3b85a}
dialog[data-view=journal] .bestiary-tile:hover,dialog[data-view=journal] .bestiary-tile:focus-visible,dialog[data-view=journal] .bestiary-tile.on{outline:2px solid #ffe08a;outline-offset:1px;background:#353a5e}
dialog[data-view=journal] .bestiary-tile-art{image-rendering:pixelated;pointer-events:none}
dialog[data-view=journal] .bestiary-boss-tag{position:absolute;top:2px;left:3px;font-size:10px;letter-spacing:1px;color:#ffe08a;text-shadow:0 1px 0 #000;pointer-events:none}
dialog[data-view=journal] .bestiary-detail-wrap{position:fixed;inset:0;z-index:30;display:grid;place-items:center;background:#0008;padding:16px}dialog[data-view=journal] .bestiary-detail-wrap[hidden]{display:none}
dialog[data-view=journal] .bestiary-detail{position:relative;display:flex;gap:16px;align-items:center;width:min(620px,100%);max-height:calc(100dvh - 32px);overflow:auto;padding:18px 20px;box-sizing:border-box}
dialog[data-view=journal] .bestiary-detail-art{flex:none;width:160px;height:128px;image-rendering:pixelated}
dialog[data-view=journal] .bestiary-detail-text{min-width:0;text-align:left;padding-right:28px}dialog[data-view=journal] .bestiary-detail-text .tag{font-size:14px;color:var(--gold,#e3b85a)}dialog[data-view=journal] .bestiary-detail-text h3{font-size:22px;margin:4px 0}dialog[data-view=journal] .bestiary-detail-text p{line-height:1.4;margin:6px 0 10px}
dialog[data-view=journal] .bestiary-detail>.bestiary-detail-close{position:absolute;top:6px;right:6px;left:auto;width:36px!important;min-width:36px;height:36px;min-height:36px!important;padding:0!important;margin:0;font-size:16px;line-height:1}
@media (max-height:440px),(max-width:560px){dialog[data-view=journal] .bestiary-detail{padding:12px 14px;gap:10px}dialog[data-view=journal] .bestiary-detail-art{width:120px;height:96px}dialog[data-view=journal] .bestiary-detail-text h3{font-size:18px}dialog[data-view=journal] .bestiary-detail-text p{font-size:15px;margin:4px 0 6px}}`;
