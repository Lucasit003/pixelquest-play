/* improve20-r11c-nov2 #1 (audit9 a4, audit8 #13): the chapter-clear moment, full screen. On m7 the "Chapter clear!" line, the seal and the
   keepsake sat under the stars, the drops, an Echo box and "Heroic is now open", and most kids pressed "Return to map" without seeing them.
   Now a chapter's first Normal clear (Elderwood at e8, Emberkeep at m7) shows one card before the result card: the chapter's name and "is
   free", its seal (the chapter's finale scene with CLEARED stamped over it, as in the Trophy Hall) and keepsake, one line on what opens next
   and one button. The result card that follows drops its chapter-clear block (main.js, r.chCard). The last chapter (the Veilmoor, v7) has
   the Champion card instead (main.js finaleCard), which now names its keepsakes and seal itself, so nothing doubles up there.
   Seen once: s.settings.chapterCards lists the chapters whose card has shown (additive within save v9, cleaned by core/save.js normalize()),
   written when the card shows, so a reload never shows it twice. No timers; the card waits for the child. */
import {chapterClear,LEVELS,CHAPTERS} from '../game/levels.js';
import {winKeepsakes,CHAPTER_BACKDROPS} from '../game/prizes.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const the=n=>String(n).replace(/^The /,'the ');
/* a soft glow in the chapter's own colour behind the card (an effect; the seal carries the chapter's art) */
const GLOW={elderwood:'rgba(120,200,110,.30)',emberkeep:'rgba(255,120,50,.30)',veilmoor:'rgba(170,120,255,.30)'};
export const CHAPTER_IDS=CHAPTERS.map(c=>c.id);
/* improve24-r24n-nov5 #8 (audit16 minor): Heroic was announced on e1's first win; the news now waits for the first chapter's clear and is one line on its card. firstChapterDone: the first chapter's finale is won */
export const HEROIC_OPEN_LINE='Heroic is open on every level you’ve won.';
export const firstChapterDone=s=>{const fin=LEVELS.find(l=>l.chapter===CHAPTERS[0].id&&chapterClear(l.id));return !!(fin&&s?.levels?.[fin.id]?.done);};
/* the chapter cards a save has seen: a clean list of known chapter ids */
export const cleanChapterCards=v=>Array.isArray(v)?[...new Set(v.filter(x=>typeof x==='string'&&CHAPTER_IDS.includes(x)))]:[];
/* r: the level result ({won, id, tier, stats:{first}}); the card is due on a chapter's first Normal clear, once per save */
export function chapterCardDue(s,r){if(!r?.won||r.riftRun||(r.tier||'normal')!=='normal'||!r.stats?.first)return null;const cc=chapterClear(r.id);if(!cc)return null;return cleanChapterCards(s?.settings?.chapterCards).includes(cc.chapter.id)?null:cc;}
export function markChapterCard(s,id){s.settings??={};s.settings.chapterCards=[...cleanChapterCards(s.settings.chapterCards),id].filter((x,i,a)=>a.indexOf(x)===i);}
/* the seal's picture: the chapter's finale scene (game/prizes.js CHAPTER_BACKDROPS, the crop the Trophy Hall seal and hero-card backdrop use) */
export const sealArt=levelId=>CHAPTER_BACKDROPS.find(b=>b[3]===levelId)?.[2]||'';
export const firstStop=next=>LEVELS.find(l=>l.chapter===next.id&&l.kind==='level'&&!l.hidden&&!l.optional)||null;
/* cc: chapterClear(id); levelId: the level just won; owned: the keepsake keys the save owns (s.prizes.own) */
/* improve20-r16a-nov3 #1 (audit12 finding 1): when the first stop is power-gated the NEXT line names the gate and its honest count (lead.gate, from
   game/card-lead.js gateLead) instead of promising the pad, with a "While you learn" line (lead.also) naming something to play meanwhile */
export function chapterCardHTML(cc,levelId,owned=[],lead={}){const art=sealArt(levelId),ks=winKeepsakes(levelId).filter(p=>owned.includes(p.key)),stop=firstStop(cc.next);
 return `<div class="chapter-clear" data-chapter-clear="${esc(cc.chapter.id)}" style="--cc-glow:${GLOW[cc.chapter.id]||GLOW.elderwood}"><div class="cc-inner">`+
  `<small class="cc-eyebrow"><img src="ui/skin/pl-icons/tier-star.png" width="32" height="32" alt="" draggable="false">CHAPTER CLEAR</small>`+
  `<h2 class="cc-title">${esc(cc.chapter.name)} is free!</h2>`+
  `<div class="chapter-seal seal-won seal-stamp cc-seal" data-seal="${esc(cc.chapter.id)}"><span class="seal-pic"${art?` style="background-image:url(${esc(art)})"`:''}></span><strong>${esc(cc.chapter.name)}</strong><small>CLEARED</small></div>`+
  `<p class="cc-line cc-seal-line">Its chapter seal hangs in your Trophy Hall at Home.</p>`+
  (ks.length?`<p class="cc-line cc-keepsake" data-keepsake="${esc(ks.map(p=>p.key).join(' '))}"><img src="ui/skin/rewards/chest.png" width="32" height="32" alt="" draggable="false"><span>New keepsake: <strong>${ks.map(p=>esc(p.name)).join(' and ')}</strong>. Wear ${ks.length>1?'them':'it'} from your Hero card.</span></p>`:'')+
  (lead?.gate?`<p class="cc-line cc-next cc-gated" data-cc-next="${esc(cc.next.id)}" data-cc-gate><small>NEXT</small><span><strong>${esc(lead.gate)}.</strong> Learn ${lead.n===1?'it':'them'} at the Library.</span></p>`+(lead.also?`<p class="cc-line cc-while" data-cc-while>${esc(lead.also)}</p>`:''):`<p class="cc-line cc-next" data-cc-next="${esc(cc.next.id)}"><small>NEXT</small><span>The road to ${esc(the(cc.next.name))} is open${stop?`. First stop: <strong>${esc(stop.name)}</strong>`:''}.</span></p>`)+
  /* improve24-r24n-nov5 #8 */(cc.chapter.id===CHAPTERS[0].id?`<p class="cc-line cc-heroic" data-cc-heroic>${HEROIC_OPEN_LINE}</p>`:'')+
  `<div class="modal-actions cc-actions"><button type="button" id="cc-continue" class="primary">Continue</button></div></div></div>`;}
/* the Champion card's line for the last chapter (main.js finaleCard): its keepsakes and its seal, so the Veilmoor's clear is named there */
export function finaleKeepsakeHTML(levelId,owned=[]){const ks=winKeepsakes(levelId).filter(p=>owned.includes(p.key));const ch=CHAPTERS.find(c=>c.id===LEVELS.find(l=>l.id===levelId)?.chapter);
 return `<p class="finale-keepsake" data-keepsake="${esc(ks.map(p=>p.key).join(' '))}"><img src="ui/skin/rewards/chest.png" width="32" height="32" alt="" draggable="false"><span>${ks.length?`New keepsake${ks.length>1?'s':''}: <strong>${ks.map(p=>esc(p.name)).join(' and ')}</strong>. `:''}${ch?`The ${esc(the(ch.name).replace(/^the /,''))} seal hangs in your Trophy Hall.`:''}</span></p>`;}
export const CHAPTER_CARD_CSS=`dialog[data-view=chapter-clear]{width:100vw;max-width:100vw;height:100vh;height:100dvh;max-height:100dvh;margin:0;padding:0;border:0;background:#0b0c1c}
dialog[data-view=chapter-clear] .modal-head{display:none}
dialog[data-view=chapter-clear] #modal-content{height:100%;max-height:none;padding:0;overflow:auto}
.chapter-clear{position:relative;min-height:100%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:16px;text-align:center;background:radial-gradient(ellipse at 50% 42%,var(--cc-glow,rgba(255,210,120,.25)),transparent 62%),#0b0c1c}
.cc-inner{display:flex;flex-direction:column;align-items:center;gap:8px;max-width:640px}
.cc-eyebrow{display:flex;align-items:center;gap:8px;font:700 20px/1 var(--ui);letter-spacing:4px;color:#ffd96a}
.cc-eyebrow img{image-rendering:pixelated}
dialog[data-view=chapter-clear] .cc-title{margin:0;font-size:clamp(28px,6vw,48px);line-height:1.1;color:#fff1c8;text-transform:none;letter-spacing:1px;text-shadow:0 3px 0 #000a}
.cc-seal{width:160px;margin:4px 0 0}
.cc-seal .seal-pic{width:120px;height:120px}
.chapter-seal.cc-seal.seal-won small{top:56px}
.cc-line{display:flex;align-items:center;justify-content:center;gap:8px;margin:0;color:#f1e6cc;font-size:18px;line-height:1.3}
.cc-line img{image-rendering:pixelated;flex:none}
.cc-line strong{color:#fff1c8}
.cc-next small{letter-spacing:2px;color:var(--gold,#e3b85a)}
.cc-while{font-size:16px;color:#cfc6b3}
.cc-actions{margin-top:6px;justify-content:center}
.cc-actions button{min-width:200px}
@media (max-height:480px){.cc-inner{gap:4px}.cc-eyebrow{font-size:16px}.cc-eyebrow img{width:24px;height:24px}dialog[data-view=chapter-clear] .cc-title{font-size:30px}.cc-seal{width:auto;flex-direction:row;padding:4px 10px;gap:10px}.cc-seal .seal-pic{width:72px;height:72px}.chapter-seal.cc-seal.seal-won small{top:30px;left:42px}.cc-line{font-size:16px}.cc-line img{width:24px;height:24px}.cc-actions{margin-top:2px}.cc-actions button{min-height:40px}}
.finale-keepsake{display:flex;align-items:center;justify-content:center;gap:8px;margin:2px 0;text-align:left}
.finale-keepsake img{image-rendering:pixelated;flex:none}`;
/* injects the card's styles once (the card owns its look; main.js keeps only the hook) */
export function ensureChapterCardCSS(doc=globalThis.document){if(!doc||doc.getElementById('chapter-clear-css'))return;const st=doc.createElement('style');st.id='chapter-clear-css';st.textContent=CHAPTER_CARD_CSS;doc.head.appendChild(st);}
