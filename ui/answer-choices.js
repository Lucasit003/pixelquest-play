/* Answer buttons for choice questions (learning-flow fix, 17 Oct; docs/design/GAME_READINESS.md section 5).
   A question with 2-8 fixed answers ("Answer A, B or C.", "active or passive?", q.options) is answered by tapping a
   button or pressing its number key, never by typing. choicesOf() in game/math.js decides which questions qualify.
   The form keeps the ids and the hidden input each screen already reads, so a screen's own submit handler grades the
   pick exactly as it graded a typed answer: no new path to XP, mastery or retirement. */
import {choicesOf,accepts} from '../game/math.js';

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* oct24-polish2 (playtest r3 F13): a list read from "Land or water: plain?" kept the sentence's capital on its first item
   only (Land | water, True | false, Fact | opinion). When the first label is the only capitalised one, every label starts
   with a capital. Labels only: the value graded is untouched. A language set with a one-word label keeps its case (I / me, her / my), and
   so does any set where a later label is capitalised (names, Mercator | Gall-Peters). */
const up=ch=>ch!==ch.toLowerCase(),low=ch=>ch!==ch.toUpperCase();
export function caseLabels(c,q={}){if(q.subject==='language'&&c.some(x=>!/\s/.test(String(x.label).trim()))||c.length<2||c.some(x=>x.text))return c;const first=c.map(x=>String(x.label)[0]||'');
 if(!up(first[0])||!first.slice(1).every(low))return c;return c.map(x=>({...x,label:String(x.label)[0].toUpperCase()+String(x.label).slice(1)}));}

/* The form for a choice question, or '' when the question needs a typed answer. `extra` goes after the buttons
   (a screen's own Close button, say). The submit button stays (hidden) so code that disables it still finds it. */
export function choiceFormHTML(q,{form='quiz-form',input='quiz-answer',check='quiz-check',cls='',extra=''}={}){
 const c0=choicesOf(q);if(!c0)return '';const c=caseLabels(c0,q);
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
