/* quizfun-oct29 (docs/design/GAME_READINESS_OCT29.md #4): the quiz, practice and test screen was "the dullest screen in the game",
   a text line, a typing box and an empty panel. It now looks like the lesson beside it: Archivist Aldous (the lesson guide's own
   pack portrait) asks the question from a parchment plate, the question's picture sits beside him, the progress pips are a row of
   stars, and a right answer lights its star with the pack burst, a coin chime and a line that varies.
   Calm by design: no timers, nothing counts down, and a wrong answer only tilts the guide's head (as in the lesson); its card is
   unchanged. Pure markup builders and two small DOM touches; no save writes, no scoring, no XP of their own. Styling: style.css,
   "quizfun-oct29". */
import {askedPic} from '../academics/placement.js';
import {NOUN_ART,NOUN_ANIM,describe} from '../gfx/lesson-art.js';
import {questionPictureHTML} from './question-picture.js';
import {GUIDE_NAME} from './edu-narration.js';
import {motionReduced} from './juice.js';

const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const low=v=>String(v??'').trim().toLowerCase();
const GUIDE_SRC=new URL('./portraits/archivist.png',import.meta.url).href;

/* The picture a sitting question shows. The asked picture (askedPic: no filler, nothing that prints the answer) when the
   question has one to show. A word item whose only picture is its worked answer (a hint card such as "egg + s" beside two eggs,
   kept for after an answer) shows the same board without the answer: the noun's pack art and its plain word, never the ending.
   Only nouns with art are drawn: a bare word card would repeat the prompt (filler-pic.js). {spec, derived} or null. */
export function quizPic(q){
 const a=askedPic(q);if(!a)return null;
 if(Array.isArray(a)||!a.hint)return questionPictureHTML(a)?{spec:a,derived:false}:null;
 if(a.t!=='word'||typeof a.base!=='string'||!(NOUN_ART[a.base]||NOUN_ANIM[a.base]))return null;
 if(low(a.base)===low(q.answer))return null;
 return {spec:{t:'word',base:a.base,...(a.n?{n:a.n}:{})},derived:true};
}
export function quizPicHTML(p){
 if(!p)return '';
 return p.derived?`<canvas id="quiz-pic" width="640" height="280" role="img" aria-label="${esc(describe(p.spec))}"></canvas>`:questionPictureHTML(p.spec);
}

/* The guide beside the question: decorative (the question's words are the h3 beside it, read aloud by Read to me). */
export const quizGuideHTML=()=>`<div class="qf-guide" aria-hidden="true"><span class="edu-guide-frame"><img class="edu-guide" src="${GUIDE_SRC}" alt="" width="120" height="120"></span><span class="qf-name">${esc(GUIDE_NAME)}</span></div>`;

/* A quiz's encouraging second line after a right answer: how the pass is coming along, only while it can still be reached.
   Never shown after a wrong answer, and never a count of misses. need = right answers that pass (4 of 5). */
export function quizCheer({right=0,answered=0,n=5,need=4}={}){
 if(right>=need)return right===need?`That is ${need} right: enough to pass the quiz!`:`${right} right. Another star for your quiz!`;
 const more=need-right;if(n-answered<more)return '';
 return `${right} right so far. ${more} more ${more===1?'passes':'pass'} the quiz.`;
}

/* The answer moment on the screen around the card: the star of question i lights with the pack burst (no burst with reduced
   motion), and the guide cheers on a right answer or tilts his head, thinking, on any other. No timers (learning runs none,
   tests/ui.test.js): the burst removes itself when its animation ends, and onLand (the caller's coin chime) plays when the star
   has popped in; with reduced motion there is no pop, so no chime either. */
/* pips: which row of stars lights (polish2-oct29: the field mission's three task stars use the same moment) */
export function quizMoment(root,i,ok,{reduced=motionReduced(),onLand=null,pips='.question .am-pips i'}={}){
 const g=root?.querySelector?.('.qf-guide .edu-guide');if(g){g.classList.toggle('cheer',!!ok);g.classList.toggle('think',!ok);}
 if(!ok)return null;
 const pip=root?.querySelectorAll?.(pips)?.[i];if(!pip)return null;
 pip.classList.add('lit');if(reduced)return pip;
 const fx=(root.ownerDocument||root).createElement('span');fx.className='qf-pop';fx.setAttribute('aria-hidden','true');pip.append(fx);
 fx.addEventListener('animationend',()=>fx.remove(),{once:true});
 if(onLand){let landed=false;pip.addEventListener('animationend',e=>{if(e.target!==pip||landed)return;landed=true;onLand();});}
 return pip;
}

/* polish2-oct29 (readiness #15): a right field-mission answer was a plain line, "Correct! 4 + 4 + 3 = 11 apples.". It is now the quiz's
   answer moment: the task's star lights (quizMoment with FIELD_PIPS), the check badge and a praise line with a small burst behind it,
   the working, and the gold chip when the delivery pays. Words and markup only: answerFieldMission still decides and pays, once. */
export const FIELD_PIPS='.field-mission .field-stars .am-pips i';
export function fieldRightHTML({moment='',explanation='',gold=0,goldIcon=''}={}){
 return `<div class="feedback field-right">${moment}<p class="field-working">${esc(explanation)}</p>${gold>0?`<p class="field-gold">${goldIcon}<strong>Delivery complete! +${esc(gold)} gold</strong></p>`:''}</div>`;
}
