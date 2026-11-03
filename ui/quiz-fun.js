/* quizfun-oct29 (docs/design/GAME_READINESS_OCT29.md #4): the quiz, practice and test screen was "the dullest screen in the game",
   a text line, a typing box and an empty panel. It now looks like the lesson beside it: Archivist Aldous (the lesson guide's own
   pack portrait) asks the question from a parchment plate, the question's picture sits beside him, the progress pips are a row of
   stars, and a right answer lights its star with the pack burst, a coin chime and a line that varies.
   Calm by design: no timers, nothing counts down, and a wrong answer only tilts the guide's head (as in the lesson); its card is
   unchanged. Pure markup builders and two small DOM touches; no save writes, no scoring, no XP of their own. Styling: style.css,
   "quizfun-oct29". */
import {askedPic,givesAway} from '../academics/placement.js';
import {COIN} from '../gfx/lesson-art.js';
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
 {const m=modelPic(q,a);if(m)return {spec:m,derived:true};}
 /* improve20-r9d-nov1 #2 (audit8 a3): a pattern item's tiles (its worked answer, kept for after an answer) are drawn without the answer: the
    same row with its blank as a dashed "?" (gfx/lesson-art.js tiles draws a fill only when solving). The row is the prompt's own words. */
 if(a.t==='tiles'&&Array.isArray(a.seq)&&a.seq.length)return {spec:{t:'tiles',seq:[...a.seq]},derived:true};
 if(a.t!=='word'||typeof a.base!=='string'||!(NOUN_ART[a.base]||NOUN_ANIM[a.base]))return null;
 if(low(a.base)===low(q.answer))return null;
 return {spec:{t:'word',base:a.base,...(a.n?{n:a.n}:{})},derived:true};
}
/* improve20-r7c-nov1 #6 (Grade 2-3 quiz pictures): a math item whose only picture is its worked answer (a hint) shows the PROBLEM instead,
   drawn by the same exact-number renderers, never the result: the coins being counted (two or more, the answer their total, so no single
   coin's printed value is the answer), the starting blocks of a subtraction (no trade drawn), or an empty number line up to 20 to count along, with
   the start and the end the question names but no jumps (so the step size is not drawn). Each one is checked with givesAway (placement.js),
   the rule placement checks use. Prompts, ids and lesson pictures are untouched. Returns the spec or null. */
const nums=s=>(String(s).match(/-?\d+(\.\d+)?/g)||[]).map(Number);
export function modelPic(q,a){
 if(!q||!a?.hint||Array.isArray(a))return null;const n=Number(q.answer),ok=p=>p&&!givesAway(q,p)?p:null;if(!Number.isFinite(n))return null;
 if(a.t==='coins'){const list=(a.coins||[]).filter(k=>COIN[k]);if(list.length<2||list.reduce((s,k)=>s+COIN[k].c,0)!==n||list.some(k=>COIN[k].c===n))return null;return ok({t:'coins',coins:list});}
 if(a.t==='blocks'){if(a.regroup||a.h)return null;const v=(a.ten||0)*10+(a.one||0);if(!nums(q.prompt).includes(v))return null;return ok({t:'blocks',ten:a.ten||0,one:a.one||0});}
 if(a.t==='line'){if(a.back||!(a.jumps>0)||!(a.hop>0))return null;const from=+a.from||0,end=from+a.jumps*a.hop,said=nums(q.prompt);if(said.includes(n)||end>a.max||a.max>20)return null;/* up to 20 every whole number has a tick, so the start and the end sit on one */
  const p={t:'line',max:a.max,jumps:0,...(from?{from}:{}),...(said.includes(end)?{mark:end}:{})};return ok(p);}
 return null;}
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
 /* improve20-r13a-nov2 #8: "3 more pass the quiz" read as missing a word */return `${right} right so far. ${more} more to pass the quiz.`;
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
