import {describe} from '../gfx/lesson-art.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* Plain word cards have no spatial information. Keep richer language and math diagrams intact. */
/* picframe-nov2 #1: the text-only picture kinds (passages: 1-5 text cards; setups: a titled table) held up to 10-12 lines in a 640x280 frame
   that, fitted beside a question, reads about 6, so wrapped lines touched or clipped (R11F's sweep: history-3/language-4/5 passages,
   history-4/language-4/geography-5/finance-5/science-3 setups). They have nothing drawn, so they are real HTML text instead: it wraps to the
   space, follows the page's type, and a screen reader reads it. Same words, same order, same letters (A, B... or 1, 2... when nums), the same
   cells the canvas drew (a row's first cols.length+1 cells), and solve marks the same row. Mixed pictures stay canvases. */
/* picframe2-nov2 #3: program (a numbered code listing) joins them: long cs-4 lines dropped to the small bitmap size (6-11 CSS px) and wrapped
   cs-5 rows touched. The card keeps the title, every line's number and its code exactly (leading spaces kept, white-space:pre-wrap), in order. */
export const TEXT_PICS=new Set(['passages','setups','program']);
export const isTextPic=spec=>{const l=[].concat(spec??[]);return l.length>0&&l.every(p=>p&&TEXT_PICS.has(p.t));};
const passHTML=({title,texts=[],nums})=>`<p class="pt-title">${esc(title)}</p>${texts.length>1?`<ol class="pt-list">${texts.map((t,i)=>`<li><b class="pt-tag">${nums?i+1:String.fromCharCode(65+i)}</b><span>${esc(t)}</span></li>`).join('')}</ol>`:texts.map(t=>`<p class="pt-one">${esc(t)}</p>`).join('')}`;
const setHTML=({title='Two setups',rows=[],head='Thing',cols=['Setup A','Setup B'],mark,solve})=>`<table class="pt-table"><caption class="pt-title">${esc(title)}</caption>${/* a heading row with no words (head:'' and blank columns) is left out rather than drawn as an empty strip */[head,...cols].some(h=>String(h??'').trim())?`<thead><tr>${[head,...cols].map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead>`:''}<tbody>${rows.map(r=>`<tr${solve&&mark!=null&&mark===r[0]?' class="pt-mark"':''}>${r.slice(0,cols.length+1).map((v,j)=>j?`<td>${esc(v)}</td>`:`<th scope="row">${esc(v)}</th>`).join('')}</tr>`).join('')}</tbody></table>`;
const codeHTML=({title='Program',lines=[]})=>`<p class="pt-title">${esc(title)}</p><ol class="pt-code">${lines.map(v=>{const m=String(v).match(/^(\d+)\. ?(.*)$/);return `<li><b class="pt-num">${m?m[1]:''}</b><code>${esc(m?m[2]:v)}</code></li>`;}).join('')}</ol>`;
export function textPicHTML(spec,cls='question-text-card pic-text'){
 if(!isTextPic(spec))return '';const l=[].concat(spec);
 return `<div class="${cls}" data-pic="${l.map(p=>p.t).join('+')}" role="group" aria-label="Picture">${l.map(p=>p.t==='passages'?passHTML(p):p.t==='program'?codeHTML(p):setHTML(p)).join('')}</div>`;
}
/* the same card in place of a canvas that a step or an answer's notes paints (main.js picStart): the canvas stays in the DOM, hidden
   (.as-text), so the code that finds it still does; anything else drops the card and shows the canvas again. True when a card shows. */
export function textPicSync(el,spec){
 if(!el)return false;const n=el.nextElementSibling,old=n?.classList?.contains('pic-text')?n:null,h=spec==null?'':textPicHTML(spec,'pic-text pic-text-canvas');
 old?.remove();el.classList.toggle('as-text',!!h);if(h)el.insertAdjacentHTML('afterend',h);return !!h;
}
export function questionPictureHTML(spec){
 if(!spec||spec.hint)return '';
 if(isTextPic(spec))return textPicHTML(spec);
 const parts=Array.isArray(spec)?spec:[spec];
 if(parts.length&&parts.every(p=>p?.t==='word'&&typeof p.base==='string'&&Object.keys(p).every(k=>k==='t'||k==='base')))
  return `<div class="question-text-card">${parts.map(p=>`<p>${esc(p.base)}</p>`).join('')}</div>`;
 return `<canvas id="quiz-pic" width="640" height="280" role="img" aria-label="${esc(describe(spec))}"></canvas>`;
}
