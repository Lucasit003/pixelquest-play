/* Fast travel picker (25 Oct, game/fasttravel.js). One button per place: Oakhaven's key spots, then each chapter's stops.
   A place not reached yet stays in the list, greyed, saying how it unlocks, so a child sees there is more to find. Buttons are
   thumb-sized (44 CSS px, style.css "fast travel") and in reading order, so Tab / Shift+Tab and Enter work. */
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KIND={level:'Adventure',shop:'Shop',arena:'Arena'};
function row(p,here,sub){const at=p.id===here;
 if(at)return `<button type="button" class="travel-place travel-here" disabled aria-label="${esc(p.name)}: you are here"><b>${esc(p.name)}</b><small>You are here</small></button>`;
 if(!p.open)return `<button type="button" class="travel-place travel-locked" disabled aria-label="${esc(p.name)}: not visited yet"><b>${esc(p.name)}</b><small>Visit it once to unlock</small></button>`;
 return `<button type="button" class="travel-place" data-travel="${esc(p.id)}"><b>${esc(p.name)}</b><small>${esc(sub)}</small></button>`;}
/* list: travelList(save); here: the place id the hero stands at (no trip to it) */
export function travelPickerHTML(list,{here=null}={}){
 const town=`<section class="travel-group" aria-label="Oakhaven"><h3>Oakhaven</h3><div class="travel-grid">${list.town.map(p=>row(p,here,p.note)).join('')}</div></section>`;
 const chapters=list.chapters.map(c=>c.reached
  ?`<section class="travel-group" aria-label="${esc(c.name)}"><h3>${esc(c.name)}</h3><div class="travel-grid">${c.stops.map(p=>row(p,here,(KIND[p.kind]||'Stop')+(p.optional?' · side path':''))).join('')}</div></section>`
  :`<section class="travel-group travel-group-locked" aria-label="${esc(c.name)}"><h3>${esc(c.name)}</h3><p class="travel-none">Not reached yet. Walk there on the world map to unlock its stops.</p></section>`).join('');
 return `<div class="travel-picker"><p class="travel-lead"><span class="travel-free">Free</span> ${list.count} ${list.count===1?'place':'places'} unlocked. Pick one to go there now.</p>${town}${chapters}</div>`;}
