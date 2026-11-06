/* improve20-r21b-nov4 #1 (audit15 #2, shots 03, 04, 10): a red "Fight X" or "Go to X" starts X (main.js leadGo: playPad, which opens the tier
   picker when X has more than one open tier, or a companion line to show), instead of dropping the kid in Oakhaven with a banner. A level that
   cannot start from here (the gate is still shut, or a power or star gate holds it) is never promised: its button says "Head to X" and the
   banner says how to get there. Pure: it reads the save; main.js does the starting. */
import {levelById,levelOpen} from './levels.js';
/* can a lead button start this level now? shut: starter-lesson.js gateShut(save) (no fight before the first power is awake) */
export const leadStarts=(save,id,shut=false)=>{const l=levelById(id);return !!l&&l.kind!=='home'&&!shut&&levelOpen(save,id);};
export const headLabel=name=>`Head to ${name}`;
export const headLine=name=>`${name}: walk out of the south gate and pick it on the map.`;
/* the button's words: its own label when it starts the level, else "Head to X" */
export const leadLabel=(save,id,label,shut=false)=>leadStarts(save,id,shut)?label:headLabel(levelById(id)?.name||id);
/* improve20-r21b-nov4 #6 (audit15 minor): "then practise 3/10" read as "3 of 10"; the topic's own count (testReady(...).needed), never a literal */
export const breakText=(name,g)=>{const left=Math.max(0,(g?.needed|0)-(g?.practice|0));return `Fight ${name}, then ${left} more practice answer${left===1?'':'s'} (${g?.practice|0} of ${g?.needed|0} done)`;};
/* improve23-r23t-nov4 #2 (kidsim6 #1): a failed first-topic test's red, the quiz's split: "Fight Goblin Camp, then try the test again" */
export const testBreakText=name=>`Fight ${name}, then try the test again`;
/* improve26-r26d-nov6 #3 (audit17 #7, kidsim9 #5): the second failed quiz sitting in a row on a topic leads with one adventure first, the test break's
   shape; the retake stays one tap away. QUIZ_BREAK_MISSES: failed sittings in a row (academics/lessons.js recordQuiz qmiss) */
export {QUIZ_BREAK_MISSES} from '../academics/study-unlock.js';
export const quizBreakText=name=>`Fight ${name}, then retake`;
