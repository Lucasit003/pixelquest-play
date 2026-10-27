import {describe} from '../gfx/lesson-art.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* Plain word cards have no spatial information. Keep richer language and math diagrams intact. */
export function questionPictureHTML(spec){
 if(!spec||spec.hint)return '';
 const parts=Array.isArray(spec)?spec:[spec];
 if(parts.length&&parts.every(p=>p?.t==='word'&&typeof p.base==='string'&&Object.keys(p).every(k=>k==='t'||k==='base')))
  return `<div class="question-text-card">${parts.map(p=>`<p>${esc(p.base)}</p>`).join('')}</div>`;
 return `<canvas id="quiz-pic" width="640" height="280" role="img" aria-label="${esc(describe(spec))}"></canvas>`;
}
