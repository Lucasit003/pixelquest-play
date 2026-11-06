/* improve25-r25t-nov5 #2: the study looks on screen (game/study-looks.js): their own row in Home -> Looks (the 'appearance' tab), the mastery
   card's "New look" line with Wear it (the friends2 gear pattern), and the HUD card's next-look marker (#3). Markup and wiring only: what is
   earned is worked out from mastered topics each time; nothing here can buy, roll or time a look. Styles: style.css "improve25-r25t-nov5". */
import {STUDY_LOOKS,LOOK,LOOK_SLOTS,topicsLearned,lookEarned,wornLook,wearLook,lookLine,lockedLine,slotName,slotWhat,unseenLooks,markSeen,markerText} from '../game/study-looks.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* a small code-drawn sample of the look (CSS only): three footfalls for a step look, a soft glow round a blade for a glow */
export const swatchHTML=l=>`<span class="sl-swatch sl-${esc(l.slot)} sl-shape-${esc(l.shape)}" style="--look:${esc(l.color)};--look-light:${esc(l.light)}" aria-hidden="true">${l.slot==='trail'?'<i></i><i></i><i></i>':'<i></i>'}</span>`;
function cardHTML(s,l,n){const on=wornLook(s,l.slot)?.id===l.id,got=n>=l.at;
 if(!got)return `<div class="sl-card" data-study-look="${esc(l.id)}" data-state="locked">${swatchHTML(l)}<strong>${esc(l.name)}</strong><small>${esc(lockedLine(l,n))}</small></div>`;
 return `<button type="button" class="sl-card${on?' on':''}" data-study-look="${esc(l.id)}" data-state="${on?'worn':'earned'}" data-study-wear="${esc(l.id)}" aria-pressed="${on}">${swatchHTML(l)}<strong>${esc(l.name)}</strong><small>${on?'Worn ✓':`Wear it · ${esc(l.at)} topics`}</small></button>`;}
/* the Looks tab's row: one line per slot, Off first, then its looks in the order they are earned */
export function studyLooksHTML(s){const n=topicsLearned(s);
 return `<section class="study-looks" data-study-looks><h3>Study looks <small>${esc(n)} topic${n===1?'':'s'} learned</small></h3><p class="sl-why">Earned only by learning topics in the Library. Never sold.</p>${LOOK_SLOTS.map(slot=>{const w=wornLook(s,slot);
  return `<div class="sl-row" data-slot="${esc(slot)}"><p class="sl-slot"><b>${esc(slotName(slot))}</b> <small>${esc(slotWhat(slot))}</small></p><div class="sl-cards"><button type="button" class="sl-card sl-off${w?'':' on'}" data-study-off="${esc(slot)}" aria-pressed="${!w}"><span class="sl-swatch sl-none" aria-hidden="true"></span><strong>Off</strong><small>${w?'Take it off':'Nothing worn'}</small></button>${STUDY_LOOKS.filter(l=>l.slot===slot).map(l=>cardHTML(s,l,n)).join('')}</div></div>`;}).join('')}</section>`;}
/* the mastery card's line: the look this topic earned (the newest, if an older one was never told), with Wear it */
export function masteryLookHTML(looks){if(!looks?.length)return '';const l=looks.at(-1),more=looks.length-1;
 return `<div class="mm-look" data-mm-look="${esc(l.id)}">${swatchHTML(l)}<span class="mm-look-text">${esc(lookLine(l))}${more?` <small>(and ${more} more at Home → Looks)</small>`:''}</span><button type="button" class="mm-look-wear" data-study-wear="${esc(l.id)}">Wear it</button></div>`;}
/* #3: the HUD card's marker (game/study-looks.js lookMarker): "2 more topics: Clover Steps" with the look's own colour */
export const markerHTML=m=>m?`<span class="road-look" data-look-marker="${esc(m.look.id)}" style="--look:${esc(m.look.color)}"><i aria-hidden="true"></i><b class="road-look-text">${esc(markerText(m))}</b></span>`:'';
/* wires every Wear it / Off inside root. o: {save:()=>s, onChange(look|null), sfx}. In the Looks tab the row redraws itself; elsewhere the button says Worn */
export function wireStudyLooks(root,o={}){if(!root?.querySelectorAll)return;const s=()=>o.save?.();
 const sec=root.matches?.('[data-study-looks]')?root:root.querySelector('[data-study-looks]');if(sec){const sv=s();if(sv&&markSeen(sv,unseenLooks(sv)))o.onChange?.(null);}
 for(const b of root.querySelectorAll('[data-study-wear],[data-study-off]'))b.onclick=()=>{const sv=s();if(!sv)return;const id=b.dataset.studyWear,slot=b.dataset.studyOff;
  const ok=id?wearLook(sv,id):wearLook(sv,null,slot);if(!ok&&id&&wornLook(sv,LOOK[id]?.slot)?.id!==id)return;if(ok){o.onChange?.(id?LOOK[id]:null);o.sfx?.(id?'pickup':'ui.click');}
  const box=b.closest('[data-study-looks]');if(box){const fresh=document.createElement('div');fresh.innerHTML=studyLooksHTML(sv);const nw=fresh.firstElementChild;box.replaceWith(nw);wireStudyLooks(nw,o);nw.querySelector(`[data-study-look="${CSS.escape(id||'')}"],[data-study-off="${CSS.escape(slot||'')}"]`)?.focus?.({preventScroll:true});return;}
  if(id){b.disabled=true;b.textContent='Worn ✓';}};}
export {lookEarned};
