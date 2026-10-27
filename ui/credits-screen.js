/* Credits: rendered from dist/ui/credits.js, which tools/build-credits.mjs generates from
   art/packs/PACKS.md. Required CC-BY attributions are listed first and verbatim. */
import {CREDITS} from './credits.js';
import {openSheet,sheetHeader} from './sheet.js';
import {playMusic,currentMusic} from '../core/audio.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const SECTIONS=[['art','World, characters and effects'],['ui','Interface and icons'],['audio','Music and jingles'],['font','Typeface'],['code','Code']];
export function creditsHTML(c=CREDITS){
 const group=(list)=>list.map(a=>`<li><strong>${esc(a.author)}</strong><span>${a.packs.map(p=>`${esc(p.name)}${p.required?' <em class="req">CC BY</em>':''}`).join(' · ')}</span></li>`).join('');
 return `<div class="credits"><div class="credits-crest" aria-hidden="true"></div><p class="credits-title">PixelQuest<span>The Thorn Kingdom</span></p>`+
  `<section class="credits-required"><h3>Required attributions</h3><ul>${c.attribution.map(a=>`<li>${esc(a)}</li>`).join('')}</ul><p class="subtle">CC BY 4.0: https://creativecommons.org/licenses/by/4.0/</p></section>`+
  SECTIONS.filter(([k])=>c[k]?.length).map(([k,t])=>`<section><h3>${t}</h3><ul class="credit-list">${group(c[k])}</ul></section>`).join('')+
  `<p class="subtle credits-foot">Every pack, with its licence and source, is listed in art/packs/PACKS.md. Thank you to every artist and musician who shares their work.</p></div>`;
}
export function openCredits(){
 const before=currentMusic();
 openSheet('credits',sheetHeader('Credits','THANK YOU')+creditsHTML(),{onClose:()=>{if(before)playMusic(before);}});
 playMusic('credits');
}
