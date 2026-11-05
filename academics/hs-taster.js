/* hstaster-nov3 (audit12 #12, shot 16; roadmap "a reviewed 6-8 step taster per subject"): a High School subject's first lesson used to open dense
   (English 10: Literary Analysis, Part 1 of 2, Step 1 of 8, 16 steps in all, a 3-sentence Try-it on step 1). Now the first lesson that "Start"
   opens in each subject, for every High School grade (course-grades.js startTopic), first plays a Quick start: 7 short steps, about 175-265
   words, 2 Try-its, written and reviewed for it (academics/hs-taster-steps.js, loaded with the lesson), then leads into Part 1.

   It changes nothing about learning: the lesson's own steps, Try-its, pool, quiz, practice and test are untouched, and no question id
   changes. A Quick start Try-it has its own id (subject-level-hash of its own prompt, as every Try-it) but is never credited: it writes no
   answer, retirement, point, `tried` or `tright`, and no lesson cursor (main.js lessonStep). The only thing saved is that it was seen:
   'taster:<topic id>' in save.hub.seen, an array every v9 save already has (additive, no version bump).

   When: the topic has a Quick start, is a High School topic, its Quick start was not seen, and the lesson was never begun (no cursor, no
   furthest step, no Try-it tried, not done, not mastered). An older save that already started Part 1 keeps going where it was. On a
   Library-first save whose starter subject this is, the Quick start replaces the 4-step starter cut and wakes the first power. Pure. */
import {stageOf,mastered,TOPICS} from './lessons.js';

/* one per subject's first High School lesson, de-duplicated across grades 9-12 (tests/hstaster-nov3.test.js checks every grade and subject) */
export const TASTER_IDS=Object.freeze(['math-h-math-1-expressions-equations-and-units','math-h-math-2-radicals-and-complex-numbers','math-h-ap-precalc-polynomial-and-rational-functions','math-h-ap-calc-ab-limits-and-continuity',
 'cs-h-programming-python-variables-and-data-types','cs-h-ap-csp-creative-development',
 'history-h-ap-world-the-global-tapestry-1200-1450','history-h-apush-period-1-1491-1607','history-h-ap-gov-foundations-of-american-democracy',
 'geography-h-world-geography-maps-and-geospatial-tools','geography-h-ap-hug-thinking-geographically',
 'science-h-acceleration','science-h-moles','science-h-ap-bio-chemistry-of-life',
 'language-h-english-9-reading-literature','language-h-english-10-literary-analysis','language-h-ap-lang-rhetorical-situation','language-h-ap-lit-short-fiction',
 'finance-h-budget','finance-h-ap-macro-basic-economic-concepts']);
export const TASTER_LABEL='Quick start';
export const tasterKey=id=>'taster:'+id;
export const hasTaster=id=>TASTER_IDS.includes(id);
export const tasterSeen=(save,id)=>(save?.hub?.seen||[]).includes(tasterKey(id));
/* the lesson was begun: a cursor or furthest step past the first, a Try-it tried, or done */
export const lessonBegun=(save,id)=>{const r=save?.lessons?.[id];return !!r&&((r.at|0)>0||(r.reached|0)>0||!!r.done||(Array.isArray(r.tried)&&r.tried.length>0));};
export const tasterDue=(save,t)=>!!t&&hasTaster(t.id)&&stageOf(t)==='high'&&!tasterSeen(save,t.id)&&!lessonBegun(save,t.id)&&!mastered(save,t);
/* writes: the Quick start was seen (finished, or skipped by the starter's awakening) */
/* improve20-r21b-nov4 #5 (audit15 #18): one Quick start per session. played: the topic id whose Quick start played this session (main.js keeps it,
   never the save). True when t is another topic whose Quick start would play now (tasterDue with a save; without one, any other topic with a taster),
   so it is skipped: the lesson opens on Part 1 and a lead goes to the played one's subject instead */
export const tasterHold=(played,t,save=null)=>!!played&&!!t&&t.id!==played&&(save?tasterDue(save,t):hasTaster(t.id));
/* improve20-r22b-nov4 #2 (R21B follow-up: after a held Quick start the HUD's "Next power", NEXT GOAL and "Find your level in English" still led to
   English): the same session-only id, kept here too (never the save) so the shared next-power pick (game/power-gate.js powerRank) and the placement
   nudge (study-unlock.js) point where the Library's lead points. heldSubject(save,sub): true while sub's lead would be another Quick start held this
   session and the played topic is not yet mastered (main.js heldTopic's rule) */
let tasterPlayed=null;export const setTasterRun=id=>{tasterPlayed=id||null;};export const tasterRunId=()=>tasterPlayed;
export function heldSubject(save,sub,played=tasterPlayed){if(!played||!sub)return false;const h=TOPICS.find(t=>t.id===played);if(!h||h.subject===sub||mastered(save,h))return false;return TOPICS.some(t=>t.subject===sub&&tasterHold(played,t,save));}
export function markTaster(save,id){const hub=(save.hub??={seen:[]}),seen=Array.isArray(hub.seen)?hub.seen:(hub.seen=[]);if(!seen.includes(tasterKey(id)))seen.push(tasterKey(id));}

let mod=null,task=null;
export const tastersLoaded=()=>!!mod;
export function loadTasters(){return task??=import('./hs-taster-steps.js').then(m=>{mod=m.TASTERS;return mod;}).catch(e=>{task=null;throw e;});}
/* the Quick start's lesson view: the topic with the Quick start's steps (same id, subject and level, so a Try-it id is formed as every Try-it's) */
export function tasterTopic(t){const q=mod?.[t?.id];return q?Object.freeze({...t,steps:q.steps,taster:true,review:q.review}):null;}
/* the line on the Quick start's end card: what comes next */
export const tasterNextLine=(t,parts)=>parts>1?`Next: “${t.title}”, Part 1 of ${parts}.`:`Next: “${t.title}”.`;
