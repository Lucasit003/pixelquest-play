/* Answer buttons for choice questions (learning-flow fix, 17 Oct; docs/design/GAME_READINESS.md section 5).
   A question with 2-8 fixed answers ("Answer A, B or C.", "active or passive?", q.options) is answered by tapping a
   button or pressing its number key, never by typing. choicesOf() in game/math.js decides which questions qualify.
   The form keeps the ids and the hidden input each screen already reads, so a screen's own submit handler grades the
   pick exactly as it graded a typed answer: no new path to XP, mastery or retirement. */
import {choicesOf,accepts} from '../game/math.js';
import {letterNames,numberTexts} from '../academics/choice-text.js';
import {isMoneyItem,shownOption} from '../academics/money-shown.js';

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* oct24-polish2 (playtest r3 F13): a list read from "Land or water: plain?" kept the sentence's capital on its first item
   only (Land | water, True | false, Fact | opinion). When the first label is the only capitalised one, every label starts
   with a capital. Labels only: the value graded is untouched. A language set with a one-word label keeps its case (I / me, her / my), and
   so does any set where a later label is capitalised (names, Mercator | Gall-Peters). */
const up=ch=>ch!==ch.toLowerCase(),low=ch=>ch!==ch.toUpperCase();
export function caseLabels(c,q={}){if(q.subject==='language'&&c.some(x=>!/\s/.test(String(x.label).trim()))||c.length<2||c.some(x=>x.text))return c;const first=c.map(x=>String(x.label)[0]||'');
 if(!up(first[0])||!first.slice(1).every(low))return c;return c.map(x=>({...x,label:String(x.label)[0].toUpperCase()+String(x.label).slice(1)}));}

/* improve20-y-nov1 #8 (lane M's note): bare letter buttons ("A", "B") for a prompt that names its letters ("Shop A ... Shop B") carry the
   names ("Shop A", "Shop B"), as lane M's Try-its do (academics/choice-text.js letterNames). The value graded is still the letter. */
export function namedLetters(c,q={}){if(!c?.length||c.some(x=>x.text)||!c.every(x=>/^[A-F]$/.test(String(x.label).trim())))return c;const n=letterNames(q.prompt,c.map(x=>String(x.value).trim()));return n?c.map((x,i)=>({...x,label:n[i]})):c;}
/* The form for a choice question, or '' when the question needs a typed answer. `extra` goes after the buttons
   (a screen's own Close button, say). The submit button stays (hidden) so code that disables it still finds it. */
export function choiceFormHTML(q,{form='quiz-form',input='quiz-answer',check='quiz-check',cls='',extra=''}={}){
 const c1=choicesOf(q);if(!c1)return '';const nt=/* improve20-r20i-nov4 #5: numbered options carry their text (caseLabels and namedLetters leave a set with text as it is) */numberTexts(q),c0=nt?c1.map((x,i)=>({...x,label:nt[i],text:nt[i]})):c1;const c2=namedLetters(caseLabels(c0,q),q),/* improve20-r20g-nov4 #3: a money item's number options read as money; the value graded is unchanged (lead merge with R20I: numbered options keep their text) */c=isMoneyItem(q)?c2.map(x=>x.text?x:{...x,label:shownOption(x.label,q)}):c2;
 const long=c.some(x=>x.label.length>34);
 return `<form id="${form}" class="choice-form ${cls}" data-choice-form><input type="hidden" id="${input}" value=""><div class="answers choice-answers${long?' long':''}" role="group" aria-label="Answer choices">${c.map((x,i)=>`<button type="button" data-answer="${esc(x.value)}"><span class="tag" aria-hidden="true">${i+1}</span><span class="choice-text">${esc(x.label)}</span></button>`).join('')}</div><p class="subtle choice-keys">Tap an answer, or press ${c.length>2?`1-${c.length}`:'1 or 2'}.</p>${extra}<button type="submit" id="${check}" hidden>Check</button></form>`;
}

/* Wire a choice form: a tap fills the hidden input and submits the form; once the screen has taken the answer (it
   disables or locks the input), every button locks, the pick is marked, and after a miss the right one is shown. */
export function wireChoices(form,q){
 if(!form?.matches?.('[data-choice-form]'))return false;
 const input=form.querySelector('input'),buttons=[...form.querySelectorAll('[data-answer]')],Ev=form.ownerDocument.defaultView.Event;
 for(const b of buttons)b.onclick=()=>{if(b.disabled)return;input.value=b.dataset.answer;form.dispatchEvent(new Ev('submit',{bubbles:true,cancelable:true}));
  if(!input.disabled&&!input.readOnly)return;const ok=accepts(b.dataset.answer,q);
  for(const x of buttons){x.disabled=true;if(!ok&&accepts(x.dataset.answer,q))x.classList.add('right');}
  b.classList.add('picked',ok?'right':'wrong');};
 return true;
}

/* First-hour playtest (24 Oct): a new question used to focus answer 1, so the Enter a child pressed for "Next question"
   (or a second, quick Enter) picked answer 1 and marked it wrong. Focus goes to the answer group instead: number keys,
   taps and Tab still answer, Enter alone never does. Returns the focused group, or null when there are no answers. */
export function focusAnswers(root){const b=root?.querySelector?.('[data-answer]:not(:disabled)'),g=b?.parentElement;if(!g)return null;if(!g.hasAttribute('tabindex'))g.tabIndex=-1;g.focus({preventScroll:true});return g;}

/* kidfix-c-oct31: tap tiles for a young player's short typed answer (academics/tile-choices.js builds them). The same form,
   ids and hidden input as a choice question, so the screen's own submit handler grades a tap exactly as it grades typing;
   "Type it instead" swaps in the typing box (the screen re-binds it). */
export function tileFormHTML(q,tiles,{form='quiz-form',input='quiz-answer',check='quiz-check'}={}){
 if(!tiles?.length)return '';
 return `<form id="${form}" class="choice-form tile-form" data-choice-form data-tiles><input type="hidden" id="${input}" value=""><div class="answers choice-answers tile-answers" role="group" aria-label="Answer tiles">${tiles.map((x,i)=>`<button type="button" data-answer="${esc(x.value)}"><span class="tag" aria-hidden="true">${i+1}</span><span class="choice-text">${esc(x.label)}</span></button>`).join('')}</div><p class="subtle choice-keys">Tap an answer, or press 1-${tiles.length}.</p><p class="tile-alt"><button type="button" class="tile-type" data-type-instead>Type it instead</button></p><button type="submit" id="${check}" hidden>Check</button></form>`;
}

/* improve20-r9d-nov1 #2 (audit8 a3): an empty Check popped Chrome's raw grey "Please fill out this field" bubble (the answer boxes were
   `required`). The boxes are not required now; an empty answer is stopped here, before the screen's own submit handler, and a game-styled
   line says what to do: "Type your answer first" under a typing box, "Pick one" on a tap form. It goes as soon as the child types or taps.
   Nothing is graded and nothing is recorded for an empty answer, exactly as before. */
export const EMPTY_TYPE='Type your answer first',EMPTY_PICK='Pick one';
export function emptyAnswer(form){const i=form?.querySelector?.('#quiz-answer,#answer,#field-answer');if(!i||i.disabled||String(i.value||'').trim())return null;return form.matches('[data-choice-form]')||i.type==='hidden'?EMPTY_PICK:EMPTY_TYPE;}
export function installEmptyHint(doc){doc.addEventListener('submit',e=>{const form=e.target,msg=emptyAnswer(form);if(!msg)return;e.preventDefault();e.stopImmediatePropagation();let p=form.querySelector('.answer-hint');if(!p){p=doc.createElement('p');p.className='answer-hint';p.setAttribute('role','status');const i=form.querySelector('#quiz-answer,#answer,#field-answer');(i.type==='hidden'?form.querySelector('.answers')||i:i).after(p);i.addEventListener('input',()=>p.remove(),{once:true});}p.textContent=msg;p.classList.remove('pulse');void p.offsetWidth;p.classList.add('pulse');if(msg===EMPTY_TYPE)form.querySelector('#quiz-answer,#answer,#field-answer')?.focus({preventScroll:true});},true);}

/* improve20-r20g-nov4 #1 (audit14 #6): tap-to-order for an Elementary placement answer that is the prompt's own numbers in a new order
   (academics/placement-choices.js orderPieces). Each number is a tile; a tap moves it to the answer line in that order, Undo puts the last one
   back, and Check grades once every number is placed. The taps write the same "a, b, c, d" text a typed answer would into the same hidden
   input, so the screen's own submit handler grades it: nothing new for XP, retirement or placement. "Type it instead" stays. */
export function orderFormHTML(q,pieces,{form='quiz-form',input='quiz-answer',check='quiz-check'}={}){
 if(!pieces?.length)return '';
 return `<form id="${form}" class="choice-form tile-form order-form" data-order-form><input type="hidden" id="${input}" value=""><p class="order-built" aria-live="polite" data-order-built><span class="order-hint">Tap the numbers in their new order</span></p><div class="answers choice-answers tile-answers order-answers" role="group" aria-label="Numbers to put in order">${pieces.map((x,i)=>`<button type="button" data-piece="${esc(x.value)}" data-i="${i}"><span class="tag" aria-hidden="true">${i+1}</span><span class="choice-text">${esc(x.label)}</span></button>`).join('')}</div><p class="tile-alt"><button type="button" class="tile-type" data-order-undo disabled>Undo</button><button type="button" class="tile-type" data-type-instead>Type it instead</button></p><button type="submit" id="${check}" class="primary order-check" disabled>Check</button></form>`;
}
export function wireOrder(form){
 if(!form?.matches?.('[data-order-form]'))return false;
 const input=form.querySelector('input[type=hidden]'),built=form.querySelector('[data-order-built]'),undo=form.querySelector('[data-order-undo]'),check=form.querySelector('[type=submit]'),pieces=[...form.querySelectorAll('[data-piece]')],picked=[];
 const draw=()=>{input.value=picked.map(b=>b.dataset.piece).join(', ');built.innerHTML=picked.length?picked.map(b=>`<b class="order-chip">${esc(b.dataset.piece)}</b>`).join('<span class="order-comma" aria-hidden="true">,</span> '):'<span class="order-hint">Tap the numbers in their new order</span>';undo.disabled=!picked.length||input.disabled;check.disabled=picked.length<pieces.length||input.disabled;};
 for(const b of pieces)b.onclick=()=>{if(b.disabled||input.disabled)return;picked.push(b);b.disabled=true;b.classList.add('placed');draw();if(picked.length===pieces.length)check.focus({preventScroll:true});};
 undo.onclick=()=>{if(input.disabled)return;const b=picked.pop();if(b){b.disabled=false;b.classList.remove('placed');}draw();};
 /* once the screen has taken the answer (it disables the input), every tile and Undo lock */
 form.addEventListener('submit',()=>Promise.resolve().then(()=>{if(input.disabled){for(const b of pieces)b.disabled=true;undo.disabled=true;}}));
 draw();return true;
}
