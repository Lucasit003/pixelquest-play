/* Boot keeps topic metadata and retirement IDs. Lesson modules and question pools load on demand;
   Node content audits eagerly load the same modules. No save fields or question text change. */
import {BANK,hash} from './bank.js';
import {XP,accepts,numberIn} from '../game/math.js';
export const LEVEL=3,QUIZ_SIZE=5,TEST_SIZE=10;
/* Middle School lesson topics (docs/MIDDLE_SCHOOL_SPEC.md) share this engine. Their question ids use
   level 4, a namespace of their own, so they never meet the Middle School training bank (level 0). */
import {courseOf,highUnitCount} from './courses.js';
export const MIDDLE_LEVEL=4;
/* High School topics (docs/HIGH_SCHOOL_SPEC.md) use level 5 and -h- ids, grades 9 to 12. */
export const HIGH_LEVEL=5;
export const stageOf=t=>t.grade>=9?'high':t.grade>=6?'middle':'elementary';
export const STAGES=Object.freeze({elementary:Object.freeze({name:'Elementary',level:LEVEL,tag:'e',rungs:Object.freeze([2,3,4,5])}),middle:Object.freeze({name:'Middle School',level:MIDDLE_LEVEL,tag:'m',rungs:Object.freeze([6,7,8])}),high:Object.freeze({name:'High School',level:HIGH_LEVEL,tag:'h',rungs:Object.freeze([9,10,11,12])})});
export const stageName=t=>STAGES[stageOf(t)].name;

// Every rung holds five topics (27 Sept). Math grade 2 had thirteen; eight are left unregistered on
// disk -- expanded form, subtract without regrouping, missing addend, number-line jumps, doubling,
// compare numbers, compare three-digit, odd and even -- and can come back. A save keeps any points it
// banked on them (elementary() sums the save's records, and load keeps unknown topic ids).
/* hook-oct27 (lighter first load): topic metadata boots (lesson-meta.js); the retirement ids of every pool (lesson-catalog.js,
   about 450 KB gzipped) load after the title: loadPools(), which Begin awaits (main.js) and every lesson load awaits. Until then
   POOL holds an empty frozen list per topic, so nothing reads undefined. Node and jsdom load them before this module finishes. */
import {META,LESSON_PATHS,POOL_SIZES} from './lesson-meta.js';
const EAGER=typeof window==='undefined'||/jsdom/i.test(globalThis.navigator?.userAgent||'');
export const TOPICS=META.map(t=>({...t}));
const items={},pool={},checks={};
const idOf=(t,prompt)=>`${t.subject}-${t.level}-${hash(prompt)}`;
const bankIds=new Set(BANK.map(q=>q.id));
// A repeated id would let one answer retire two questions, or silently un-retire one: refuse to load.
const claim=(id,where)=>{if(bankIds.has(id)||items[id]||checks[id])throw new Error(`lessons: duplicate id ${id} (${where})`);};
const NONE=Object.freeze([]);for(const t of META)pool[t.id]=NONE;
export const ITEMS=items,POOL=pool,CHECKS=checks;
let poolsTask=null,poolsIn=false;
export const poolsLoaded=()=>poolsIn;
/* lightload2-oct27: what the town needs before the pools. A pool's counts (left, practised) depend only on the save's answers whose
   ids carry the topic's subject and level (idOf). A save with none of those, such as a new player's, reads them from POOL_SIZES; any
   other save, and any save with a lesson record (the Seal and the knowledge check read pools for those), waits for the pools at Begin
   (poolsNeeded), as before. Every lesson, quiz, test and placement still awaits loadPools. */
const LESSON_PREFIX=[...new Set(META.map(t=>`${t.subject}-${t.level}-`))];
const touches=(save,pre)=>{for(const id in save?.answers||{})if(pre.some(p=>id.startsWith(p)))return true;return false;};
const untouched=(save,t)=>!poolsIn&&!touches(save,[`${t.subject}-${t.level}-`]);
export const poolsNeeded=save=>!poolsIn&&(touches(save,LESSON_PREFIX)||Object.keys(save?.lessons||{}).length>0);
export function loadPools(){return poolsTask??=import('./lesson-catalog.js').then(m=>{for(const t of META)pool[t.id]=Object.freeze(m.POOLS[t.id]);Object.freeze(pool);poolsIn=true;}).catch(e=>{poolsTask=null;throw e;});}
const pending=new Map(),loaded=new Set();
export const lessonLoaded=id=>loaded.has(id);
export async function loadLesson(id){if(loaded.has(id))return TOPICS.find(t=>t.id===id);if(pending.has(id))return pending.get(id);
 const path=LESSON_PATHS[id];if(!path)throw new Error(`Unknown lesson: ${id}`);
 const task=loadPools().then(()=>import(new URL(path,import.meta.url).href)).then(m=>{const i=TOPICS.findIndex(t=>t.id===id),t=EAGER?(TOPICS[i]=m.default):Object.assign(TOPICS[i],m.default);install(t);loaded.add(id);return t;}).finally(()=>pending.delete(id));pending.set(id,task);return task;}
/* followups-nov2 (FACTSWEEP_NOV2 note): a numeric item that asks for N significant figures shows its key with N of them. The stored
   number dropped trailing zeros (21 for 21.0, 5.2 for 5.20); the key becomes that text, still graded as a number (numeric stays true, so
   "21" and "21.0" both pass by value), and the last standalone copy of the short form in the explanation is padded the same way. */
const SIG_ASK=/\bround(?:ed)? to (two|three|four|2|3|4) significant figures\b/i,SIG_N={two:2,three:3,four:4};
export function sigShown(prompt,answer,explanation){const m=SIG_ASK.exec(prompt||'');if(!m||typeof answer!=='number'||!Number.isFinite(answer))return {answer,explanation};const n=SIG_N[m[1].toLowerCase()]||+m[1],s=answer.toPrecision(n),short=String(answer);
 if(/e/i.test(s)||s===short||Number(s)!==answer)return {answer,explanation};const re=new RegExp(`(?<![\\d.])${short.replace('.','\\.')}(?![\\d]|\\.\\d)`,'g');let last=-1;for(const x of String(explanation||'').matchAll(re))last=x.index;
 return {answer:s,explanation:last<0?explanation:explanation.slice(0,last)+s+explanation.slice(last+short.length)};}
function install(t){
 {const st=STAGES[stageOf(t)];if(t.level!==st.level||!t.id.startsWith(`${t.subject}-${st.tag}-`))throw new Error(`lessons: ${t.id} must be level ${st.level} with a -${st.tag}- id for grade ${t.grade}`);}
 const ids=[];
 /* improve20-n-nov1: an item may pass the text its id was first hashed from (key), so a prompt that only lost a doubled quote mark keeps its
    id and retirement; the item then carries it as idText, and its id is subject-level-hash(idText) (tests/improve20-n-nov1.test.js) */
 t.items((skill,prompt,answer,pic,explanation,accept,key)=>{const id=idOf(t,key??prompt);claim(id,t.id);const numeric=typeof answer==='number';({answer,explanation}=sigShown(prompt,answer,explanation));
  items[id]=Object.freeze({id,subject:t.subject,level:t.level,topic:t.id,skill,prompt,answer,numeric,pic,explanation,...(accept?.length?{accept:Object.freeze([...accept])}:{}),...(key!=null&&key!==prompt?{idText:key}:{})});ids.push(id);});
 t.steps.forEach((s,i)=>{if(!s.check)return;/* improve20-r20g-nov4 #2: a Try-it may pass the text its id was first hashed from (key), as items do *//* improve20-r20f-nov4 #5: a Try-it may keep its id through key, as items do */const id=idOf(t,s.check.key??s.check.prompt);claim(id,`${t.id} step ${i}`);
  checks[id]=Object.freeze({id,subject:t.subject,level:t.level,topic:t.id,skill:s.skill,step:i,...s.check,numeric:typeof s.check.answer==='number'});});
 if(JSON.stringify(ids)!==JSON.stringify(pool[t.id]))throw new Error(`Stale lesson catalog: ${t.id}`);}
/* Node's content audits keep the synchronous API. Browsers load only a requested lesson or placement/course group. */
if(EAGER){await loadPools();for(const t of TOPICS)await loadLesson(t.id);Object.freeze(items);Object.freeze(checks);}Object.freeze(TOPICS);
// A subject's 100 Elementary points are earned by climbing its grades: each grade is worth 25,
// shared between the topics in it, so five topics in a grade are 5 points each and twelve are
// 25/12. Points are weighted here rather than in the topic file, so adding a topic to a grade
// never makes that grade worth more than the ones beside it. Points already banked in a save
// keep whatever they were worth when they were earned.
// The Elementary ladder has four rungs, grades 2 to 5, so a subject climbed to the top is exactly 100.
// A grade 1 topic sits on the first rung with the grade 2 work rather than adding a fifth.
// Middle School continues the same climb with grades 6, 7 and 8, three rungs of 100/3: its 100
// points are Middle School mastery, not Elementary (docs/MIDDLE_SCHOOL_SPEC.md §2).
/* High School continues with grades 9 to 12, four rungs of 25: its 100 points are High School mastery
   (docs/HIGH_SCHOOL_SPEC.md §2). */
export const ELEMENTARY_RUNGS=STAGES.elementary.rungs,MIDDLE_RUNGS=STAGES.middle.rungs,HIGH_RUNGS=STAGES.high.rungs;
export const RUNGS=Object.freeze([...ELEMENTARY_RUNGS,...MIDDLE_RUNGS,...HIGH_RUNGS]);
export const rungOf=t=>t.grade>=9?Math.min(12,t.grade):t.grade>=6?Math.min(8,t.grade):Math.min(5,Math.max(2,t.grade));
const rungCount={};for(const t of TOPICS){const k=`${t.subject}-${rungOf(t)}`;rungCount[k]=(rungCount[k]||0)+1;}
export const GRADE_POINTS=25;
export const gradePoints=g=>g>=9?GRADE_POINTS:g>=6?100/3:GRADE_POINTS;
/* A High School topic is a course unit (docs/design/COURSES.md): it sits on the Grade 9 rung, so it opens with High School
   for its subject, and it is worth 100 / the subject's High School units (planned ones included), so a unit's value
   holds steady as courses fill in. Points a save already banked keep their value. */
export const topicPoints=t=>t.grade>=9&&courseOf(t.id)?100/highUnitCount(t.subject):gradePoints(rungOf(t))/rungCount[`${t.subject}-${rungOf(t)}`];
export const grades=subject=>RUNGS.filter(g=>TOPICS.some(t=>t.subject===subject&&rungOf(t)===g));
export const gradeTopics=(subject,grade)=>TOPICS.filter(t=>t.subject===subject&&rungOf(t)===grade);
// A grade is done when every topic in it is mastered; the next grade opens then, and the
// lowest grade of a subject is always open. Nothing here can close a grade again.
export const gradeDone=(save,subject,grade)=>gradeTopics(subject,grade).every(t=>mastered(save,t));
// A child's placement is the highest rung they have been let into: the one the placement check
// gave them, or -- so that nothing can ever close a grade -- the highest rung on which they have
// any recorded work. Grades were once all open, and a grade also grows when a topic is added to
// it, so "every lower topic is mastered" can turn false for a child who was already through;
// a recorded lesson, quiz, test or mastery on a rung keeps that rung open for good.
/* `reached` is the furthest lesson step ever shown, kept when "Start over" moves the cursor `at` back to 0, so
   restarting a lesson never removes the evidence that opened its grade (Codex invariant review, 8 Oct). */
const rungWithWork=(save,subject)=>TOPICS.reduce((m,t)=>{if(t.subject!==subject||rungOf(t)<=m)return m;const r=save.lessons?.[t.id];return r&&(r.done||r.at>0||r.reached>0||r.quiz>0||r.test>0||r.pts>0)?rungOf(t):m;},0);
export const placementGrade=(save,subject)=>Math.max(RUNGS.includes(save.placement?.[subject])?save.placement[subject]:2,rungWithWork(save,subject));
// Finishing a grade opens the next one, and that is written down, so adding a topic to the
// finished grade later cannot take the next one away again.
const keepOpen=(save,t)=>{const g=rungOf(t);if(g<12&&gradeDone(save,t.subject,g))(save.placement??={})[t.subject]=Math.max(placementGrade(save,t.subject),g+1);};
export const gradeOpen=(save,subject,grade)=>grades(subject).includes(grade)&&grades(subject).filter(g=>g>=placementGrade(save,subject)&&g<grade).every(g=>gradeDone(save,subject,g));
export const openGrade=(save,subject)=>{const gs=grades(subject);return gs.find(g=>g>=placementGrade(save,subject)&&gradeOpen(save,subject,g)&&!gradeDone(save,subject,g))??gs[gs.length-1];};
export const topicOpen=(save,t)=>gradeOpen(save,t.subject,rungOf(t));
export const topic=id=>TOPICS.find(t=>t.id===id)||null;
// Grading, the quiz and the mastery test (spec §7). Pure: they change only the save passed in and
// RETURN xp amounts; main.js pays them through earn(), so XP is never paid twice.
export const PASS=0.8;
export const rec=(save,t)=>(save.lessons??={})[t.id]??={at:0,done:false,quiz:0,test:0,pts:0,miss:[]};
export const mastered=(save,t)=>(save.lessons?.[t.id]?.pts||0)>0;
/* Move a lesson's cursor. `reached` only ever grows, so the work a step shows is never forgotten. */
export const setStep=(save,t,i)=>{const r=rec(save,t);r.reached=Math.max(r.reached||0,r.at||0,i);r.at=i;return r;};
export const left=(save,t)=>untouched(save,t)?POOL_SIZES[t.id]:POOL[t.id].filter(id=>(save.answers[id]||0)<2).length;
// A topic used to be masterable in about three minutes: skip the lesson, sit the ten-question
// test, done. The test is the last step now, not the only one. Before it opens, a child has to
// have watched the lesson, passed the quiz, and answered PRACTICE_NEEDED different questions from
// the topic's own pool correctly. Nothing here is a timer or a penalty: everything that counts
// toward it is work already done, and a wrong answer only means that question is not counted yet.
export const PRACTICE_NEEDED=25;
export const practised=(save,t)=>untouched(save,t)?0:POOL[t.id].filter(id=>(save.answers[id]||0)>0).length;
/* Owner, 29 Oct 2026 (docs/reference/SPEC_DECISIONS.md): a save's FIRST topic needs only FIRST_PRACTICE_NEEDED practised
   questions before its test; every later topic keeps PRACTICE_NEEDED. The first topic is any topic worked on while the save
   has no mastered topic (any subject or level, placement included, since placement never masters). Only the topic that gets
   mastered first keeps the lower count (`first` on its lesson record, written by settleFirst; it is already mastered, so the
   mark is for display). follow6-oct29 (lead, under the owner's "first topic only"): every other topic follows
   PRACTICE_NEEDED from then on, even one that already had its 10, so practising 10 in many topics first skips nothing; a
   `first` on a topic that is not mastered counts only while no topic is mastered (core/save.js normalize drops it otherwise).
   Only the practice count before the test changes: topicPoints, retirement and weighted mastery do not. */
export const FIRST_PRACTICE_NEEDED=10;
const anyMastered=(save,except)=>Object.entries(save.lessons||{}).some(([id,r])=>id!==except&&(r?.pts||0)>0);
export const firstTopic=(save,t)=>{const r=save.lessons?.[t.id];return (r?.first===true&&(r.pts||0)>0)||!anyMastered(save,t.id);};
export const practiceNeeded=(save,t)=>firstTopic(save,t)?FIRST_PRACTICE_NEEDED:PRACTICE_NEEDED;
const settleFirst=(save,t)=>{if(!anyMastered(save))rec(save,t).first=true;};
// The quiz half of the gate: 4 of 5, or the pool has too few unretired questions left to ask 4,
// in which case a quiz can never reach it and the practice already done stands in for it.
/* improve20-r15a-nov3 #1 (lead, 3 Nov, delegated by the owner; docs/reference/SPEC_DECISIONS.md): the save's FIRST topic (firstTopic, the rule
   behind FIRST_PRACTICE_NEEDED) also passes its quiz once QUIZ_NEED different questions of its pool have been answered right in quizzes, summed
   across sittings (`qright` on the lesson record; the pass latches as `qsum`, so mastering another topic later never takes it back). Every
   other quiz keeps 4 of 5 in one sitting. `quizSum` = {have, need} while the summed rule is the one that applies and the quiz is not passed. */
export const quizSumOn=(save,t)=>firstTopic(save,t)&&!mastered(save,t);
/* improve20-r17a-nov3 #1 (kidsim4 k2, lead, 3 Nov): on that same first topic, a lesson Try-it answered right on its first try (and never tried
   before, so a rewatch after the answer was shown never counts) also counts toward the 4: `tright` (distinct Try-it ids of the topic, additive,
   kept by normalize(); save stays v9). It is recorded only while quizSumOn holds, and read only by the summed rule. The quiz must still be sat:
   the pass is decided in recordQuiz, when a sitting with at least one answer ends. Practice and the mastery test are unchanged. */
/* lead review (r17a): Try-its count at most TRY_SUM_MAX of the 4, so the quiz itself always supplies right answers (a 0-right sitting can never pass) */export const TRY_SUM_MAX=2;
const sumHave=r=>(Array.isArray(r?.qright)?r.qright.length:0)+Math.min(TRY_SUM_MAX,Array.isArray(r?.tright)?r.tright.length:0);
export function recordTryRight(save,t,id){if(!quizSumOn(save,t)||CHECKS[id]?.topic!==t.id)return false;const r=rec(save,t),have=new Set(Array.isArray(r.tright)?r.tright:[]);if(have.has(id))return false;have.add(id);r.tright=[...have].slice(0,20);return true;}
export const testReady=(save,t)=>{const r=save.lessons?.[t.id]||{},done=r.done===true,need=Math.ceil(PASS*QUIZ_SIZE-1e-9),quiz=(r.quiz||0)>=need||r.qsum===true||left(save,t)<need,p=practised(save,t),n=practiceNeeded(save,t);
 return {ready:done&&quiz&&p>=n,lesson:done,quiz,quizNeed:need,quizSize:QUIZ_SIZE,practice:Math.min(p,n),needed:n,quizSum:!quiz&&quizSumOn(save,t)?{have:Math.min(need,sumHave(r)),need,...(Array.isArray(r.tright)&&r.tright.length?{tries:r.tright.length}:{})}:null};};
/* How many questions a practice sitting asks (late playtest 24 Oct: at 24 of 25 a child sat a full ten for the one answer the
   test still needed). Before the test opens: what is still needed, between 5 and size; after that, size. Never a limit on practice. */
export const practiceSitting=(save,t,size=10)=>{const r=testReady(save,t);return r.practice>=r.needed?size:Math.max(5,Math.min(size,r.needed-r.practice));};
export const exact=(input,q)=>accepts(input,q) && (q.numeric?numberIn(input,q)===Number(q.answer):true);
/* quizfun-oct29: `avoid` (a Set of ids) is only ever a preference: those items go last and skip the per-skill quota, and are
   served only when the rest of the pool cannot fill the sitting. Retirement, misses-last and the size of a sitting are unchanged. */
/* kidfix-a-oct31 (kid-appeal playtest: "boat" and "ball" twice each in a five-question quiz, and "In the plan for X, which is done first"
   again and again): a sitting prefers items that share no answer word and no template with an item already in it. An item's words are its
   word card's word and its written answer (letters only, 3+ letters, so "-s" or a number never counts); its template is its prompt with
   quoted parts, digits, small words (in, the, a...) and the words of its picture's title, its word and its answer taken out. This is only a preference, in three
   steps: no shared word or template, then no shared word, then anything, so a small pool still fills the sitting; each skill still gets its
   quota, and a skill whose items all clash still gets one. Ids, prompts, retirement and misses-last are untouched. */
const vNorm=x=>String(x??'').toLowerCase().replace(/[\u2018\u2019`]/g,"'").replace(/[^a-z' -]+/g,' ').replace(/\s+/g,' ').trim();
const vCache=new Map(),V_STOP=new Set(['in','the','a','an','for','of','to','on','at']);
export function varietyKeys(q){if(vCache.has(q.id))return vCache.get(q.id);const pics=[].concat(q.pic||[]).filter(p=>p&&typeof p==='object'),
  bases=pics.map(p=>p.t==='word'&&typeof p.base==='string'?vNorm(p.base):'').filter(b=>/[a-z]{3}/.test(b)),ans=typeof q.answer==='string'&&/[a-z]{3}/i.test(q.answer)&&!q.numeric?vNorm(q.answer):'',
  words=[...new Set([...bases,...(ans?[ans]:[])])],strip=new Set([...pics.flatMap(p=>[p.title,p.base].filter(x=>typeof x==='string')),String(q.answer??'')].flatMap(x=>vNorm(x).split(' ')).filter(Boolean)),
  t=String(q.prompt||'').toLowerCase().replace(/'[^']*'|"[^"]*"|\u2018[^\u2019]*\u2019|\u201c[^\u201d]*\u201d/g,' ').replace(/[0-9]+/g,' ').split(/[^a-z_]+/).filter(w=>w&&!strip.has(w)&&!V_STOP.has(w)).join(' '),
  k={words,t};vCache.set(q.id,k);return k;}
export function pickItems(save,t,n,random=Math.random,avoid=null){
    const candidates=POOL[t.id].filter(id=>(save.answers[id]||0)<2);
    if(!candidates.length)return [];
    const miss=save.lessons?.[t.id]?.miss||[];
    const rank=id=>(avoid?.has(id)?10:0)+(miss.includes(id)?2:(save.answers[id]||0));
    for(let i=candidates.length-1;i>0;i--){
        const j=Math.floor(random()*(i+1));
        [candidates[i],candidates[j]]=[candidates[j],candidates[i]];
    }
    candidates.sort((a,b)=>rank(a)-rank(b));
    const skills=Object.keys(t.skills);
    const quota=Math.max(1,Math.floor(n/skills.length));
    const taken=[],usedW=new Set(),usedT=new Set();
    const clash=(id,lvl)=>{const k=varietyKeys(ITEMS[id]);return (lvl<2&&k.words.some(w=>usedW.has(w)))||(lvl<1&&usedT.has(k.t));};
    const take=id=>{const k=varietyKeys(ITEMS[id]);taken.push(id);k.words.forEach(w=>usedW.add(w));usedT.add(k.t);};
    for(const k of skills){
        let got=0;
        for(const lvl of [0,1,2]){
            for(const id of candidates){
                if(taken.length>=n||got>=quota||(lvl===2&&got>0))break;
                if(ITEMS[id].skill===k&&!avoid?.has(id)&&!taken.includes(id)&&!clash(id,lvl)){
                    take(id);
                    got++;
                }
            }
            if(got>=quota)break;
        }
    }
    for(const lvl of [0,1,2])for(const id of candidates){
        if(taken.length>=n)break;
        if(!taken.includes(id)&&!clash(id,lvl))take(id);
    }
    return taken.map(id=>ITEMS[id]);
}
/* quizfun-oct29 (readiness #4): the quiz asked "What is the plural of lunch?" right after the lesson's own Try-it about Leo's two
   lunches. A pool item echoes a Try-it when it has the same written answer as one of the topic's Try-its (an answer with letters,
   shared by at most three items, so "-es" or "yes" never counts) or when its word card's word (letters only) is a word of a Try-it.
   The quiz prefers the other items (pickQuiz); practice, the mastery test, the pool, ids and retirement are untouched. */
const echoNorm=s=>String(s).toLowerCase().replace(/[\u201c\u201d"\u2018\u2019'`]/g,'').replace(/[^a-z0-9-]+/g,' ').trim();
const echoCache=new WeakMap();
export function tryItEchoes(t){
 if(!t?.steps)return new Set();if(echoCache.has(t))return echoCache.get(t);
 const cs=t.steps.filter(s=>s.check).map(s=>s.check),out=new Set();
 if(cs.length){const words=new Set(cs.flatMap(c=>echoNorm(`${c.prompt} ${c.answer}`).split(' ')).filter(Boolean)),
   ans=new Set(cs.filter(c=>typeof c.answer==='string'&&/[a-z]{3}/i.test(c.answer)).map(c=>echoNorm(c.answer))),cnt={};
  for(const id of POOL[t.id]){const a=echoNorm(ITEMS[id].answer);cnt[a]=(cnt[a]||0)+1;}
  for(const id of POOL[t.id]){const q=ITEMS[id],a=echoNorm(q.answer),bases=[].concat(q.pic||[]).filter(p=>p?.t==='word'&&typeof p.base==='string'&&/^[a-z][a-z' -]{2,}$/i.test(p.base)).map(p=>echoNorm(p.base));
   if((ans.has(a)&&cnt[a]<=3)||bases.some(b=>words.has(b)))out.add(id);}}
 if(POOL[t.id].length)echoCache.set(t,out);return out;
}
export const pickQuiz=(save,t,n=QUIZ_SIZE,random=Math.random)=>pickItems(save,t,n,random,tryItEchoes(t));
/* improve20-r17a-nov3 #5 (kidsim4 k16): between mastery-test tries, a short practice on one missed skill: up to n unretired items of that skill
   from the topic's own pool, missed ones first, then the least answered (as pickItems ranks them). It is ordinary practice: the answers are
   graded and recorded as any practice answer, and retirement is untouched. */
export const SKILL_PRACTICE=3;
export function pickSkillItems(save,t,skill,n=SKILL_PRACTICE,random=Math.random){
    const miss=save.lessons?.[t.id]?.miss||[],c=(POOL[t.id]||[]).filter(id=>ITEMS[id].skill===skill&&(save.answers[id]||0)<2);
    for(let i=c.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[c[i],c[j]]=[c[j],c[i]];}
    const rank=id=>miss.includes(id)?-1:(save.answers[id]||0);c.sort((a,b)=>rank(a)-rank(b));return c.slice(0,n).map(id=>ITEMS[id]);
}
/* the skill that practice goes to after a failed test: one with no right answer in the sitting first, then the most missed; only a skill
   with unretired items left. -> skill key or null */
export function testPracticeSkill(save,t,items,right,r){/* improve24-r24k-nov5 #2: at 8 of 8 summed with a skill still uncovered, practice goes to that skill */{const g=testSumGap(save,t);if(g)return g;}const wrong=k=>(items||[]).filter(x=>x.skill===k&&right?.[x.id]===false).length,un=new Set(r?.uncovered||[]);
    const ks=[...new Set(r?.missed||[])].sort((a,b)=>(un.has(b)-un.has(a))||(wrong(b)-wrong(a)));return ks.find(k=>(POOL[t.id]||[]).some(id=>ITEMS[id].skill===k&&(save.answers[id]||0)<2))??null;}
/* A mastery sitting covers every skill with unretired work. Large units need more than ten
   questions; exhausted skills already have two correct answers on every item and stay retired.
   Snapshot both coverage and readiness before any answers in this sitting are credited. */
const liveTestSkills=(save,t)=>Object.keys(t.skills).filter(k=>POOL[t.id].some(id=>ITEMS[id].skill===k&&(save.answers[id]||0)<2));
/* improve23-r23t-nov4 #3: `avoid` is pickItems's preference only (the first topic's test prefers questions that tap); the size, coverage and ids are unchanged */
export function beginMasteryTest(save,t,random=Math.random,avoid=null){
    const requiredSkills=liveTestSkills(save,t),items=pickItems(save,t,Math.max(TEST_SIZE,requiredSkills.length),random,avoid);
    /* improve24-r24k-nov5 #2: the summed test's uncovered skill comes first (same items and size; only the order, or a last item swapped in when none was drawn) */
    {const g=testSumGap(save,t);if(g&&items.length){const i=items.findIndex(x=>x.skill===g);if(i>0)items.unshift(...items.splice(i,1));else if(i<0){const x=pickSkillItems(save,t,g,1,random)[0];if(x){items.pop();items.unshift(x);}}}}
    return {items,requiredSkills,ready:testReady(save,t).ready};
}
/* A course's exam review (docs/design/COURSES.md): up to n unretired questions dealt round-robin across the given mastered
   units, each unit's pool shuffled first, so every unit is asked about; a retired question never comes back. */
export function pickReview(save,topics,n,random=Math.random){
    const pools=topics.map(t=>{const c=POOL[t.id].filter(id=>(save.answers[id]||0)<2);for(let i=c.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[c[i],c[j]]=[c[j],c[i]];}return c;});
    const out=[];
    for(let round=0;out.length<n&&pools.some(p=>p.length>round);round++)for(const p of pools)if(out.length<n&&p[round])out.push(ITEMS[p[round]]);
    return out;
}
/* A course's practice exam (docs/design/COURSE_QUALITY.md): n unretired questions from the given mastered units, shared out
   in proportion to each unit's exam weight (largest remainder first) and passed on to other units when a unit runs out;
   each unit's pool is shuffled, and the exam is shuffled at the end. units: [{topic, weight}] or [{questionIds, weight}] for mapped exam groups. No timer. */
export function pickPracticeExam(save,units,n,random=Math.random){
    const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
    const seen=new Set(),pools=units.map(u=>shuffle((u.questionIds||POOL[u.topic.id]).filter(id=>{if(seen.has(id)||!ITEMS[id]||(save.answers[id]||0)>=2)return false;seen.add(id);return true;})));
    const total=units.reduce((s,u)=>s+u.weight,0)||1,want=units.map(u=>n*u.weight/total),take=want.map(Math.floor);
    want.map((w,i)=>[w-Math.floor(w),i]).sort((a,b)=>b[0]-a[0]).slice(0,n-take.reduce((s,v)=>s+v,0)).forEach(([,i])=>take[i]++);
    let spare=0;take.forEach((t,i)=>{if(t>pools[i].length){spare+=t-pools[i].length;take[i]=pools[i].length;}});
    for(let i=0;spare>0&&pools.some((p,j)=>take[j]<p.length);i=(i+1)%pools.length)if(take[i]<pools[i].length){take[i]++;spare--;}
    return shuffle(pools.flatMap((p,i)=>p.slice(0,take[i]).map(id=>ITEMS[id])));
}
export function grade(save,item,input,{master=true}={}){
    if(!exact(input,item))return {ok:false,xp:0,mastered:false};
    const n=save.answers[item.id]||0;
    if(n>=2)return {ok:true,xp:0,mastered:false};
    save.answers[item.id]=n+1;
    let xp=XP.correct;
    const t=topic(item.topic);
    if(master && masterExhausted(save,t).mastered)return {ok:true,xp:xp+XP.mastered,mastered:true};
    return {ok:true,xp,mastered:false};
}
// The exhaustion rule: a topic whose every pool question is retired is mastered, because no quiz or
// test could ever be sat on it. grade() applies it on the answer that retires the last question, and
// opening a quiz, practice or test on an exhausted pool applies it too: placement retires questions
// but never masters (grade(...,{master:false})), so its last answers could otherwise leave a topic
// that nothing can ever master (Codex invariant review, 8 Oct). Placement itself never calls this.
export function masterExhausted(save,t){
    if(!t||left(save,t)>0||mastered(save,t))return {mastered:false,xp:0};
    settleFirst(save,t);rec(save,t).pts=topicPoints(t);keepOpen(save,t);
    return {mastered:true,xp:XP.mastered};
}
export function creditCheck(save,id,credited){
    if(credited.has(id))return false;
    credited.add(id);
    save.answers[id]=Math.min(2,(save.answers[id]||0)+1);
    return true;
}
export function recordCheckAttempt(save,t,id){
    if(CHECKS[id]?.topic!==t.id)return false;
    const r=rec(save,t);r.tried=[...new Set([...(r.tried||[]),id])];return true;
}
/* The lesson's Try-it questions not yet attempted, in step order (learning-flow fix, 17 Oct): what "Finish" says is left. */
/* improve20-r18d-nov3 #3: `only` (step indices, the first topic's core path, academics/first-core.js) limits what is left to those steps' Try-its */
export function checksLeft(save,t,attempted=[],only=null){
    const attempts=new Set([...(save.lessons?.[t.id]?.tried||[]),...attempted]),on=Array.isArray(only)?new Set(only):null;
    return Object.values(CHECKS).filter(q=>q.topic===t.id&&!attempts.has(q.id)&&(!on||on.has(q.step))).sort((a,b)=>a.step-b.step).map(q=>q.id);
}
export function finishLesson(save,t,attempted,only=null){
    const attempts=new Set([...(save.lessons?.[t.id]?.tried||[]),...attempted]);
    for(const id of attempts)recordCheckAttempt(save,t,id);
    const skipped=checksLeft(save,t,attempted,only);
    if(skipped.length)return {xp:0,first:false,skipped};
    const r=setStep(save,t,0);
    if(!r.done){
        r.done=true;
        return {xp:XP.lesson,first:true,skipped:[]};
    }
    return {xp:0,first:false,skipped:[]};
}
/* improve20-r15a-nov3 #1: `right` ({id: true|false}, the sitting's answers) feeds the first topic's summed pass (distinct pool ids, so the same
   question right twice counts once); `full` (the quiz was answered to its last question) counts a missed quiz in a row (`qmiss`, reset by a
   pass), which main.js reads to lead with the lesson from the second miss. Both are additive lesson-record fields (save stays v9). */
export function recordQuiz(save,t,score,{right=null,full=false}={}){
    const was=testReady(save,t).quiz,sum=quizSumOn(save,t);
    const r=rec(save,t),before=r.quiz||0,best=Math.max(before,Math.min(99,score|0));
    const improved=best>before,first=!(r.quiz>0);
    r.quiz=best;
    const need=Math.ceil(PASS*QUIZ_SIZE-1e-9);
    if(sum&&right&&typeof right==='object'&&Object.keys(right).length){const pool=new Set(POOL[t.id]||[]),have=new Set(Array.isArray(r.qright)?r.qright:[]);for(const [id,ok] of Object.entries(right))if(ok===true&&pool.has(id))have.add(id);if(have.size)r.qright=[...have].slice(0,QUIZ_SIZE*2);/* improve20-r17a-nov3 #1: the first topic's first-try Try-its count too */if(sumHave(r)>=need)r.qsum=true;}
    const passed=testReady(save,t).quiz,passedNow=passed&&!was,bySum=passedNow&&r.qsum===true&&best<need;
    if(passed)delete r.qmiss;else if(full)r.qmiss=Math.min(99,(r.qmiss|0)+1);
    return {best,improved,first,before,passed,passedNow,bySum,misses:r.qmiss|0};
}
export function finishTest(save,t,sitting){
    if(!sitting.items.length || sitting.items.some(i=>typeof sitting.right[i.id]!=='boolean'))return {graded:false,passed:false,first:false,xp:0,score:0,total:sitting.items.length,missed:[],uncovered:[]};
    const score=sitting.items.filter(item=>sitting.right[item.id]).length;
    const total=sitting.items.length;
    /* Old callers without a snapshot still cannot omit live skills. Include the sitting's
       skills too: its final correct answers may have retired a skill's last live items. */
    const skills=[...new Set([...(sitting.requiredSkills||[]),...liveTestSkills(save,t),...sitting.items.map(item=>item.skill)])];
    const covered=skills.every(skill=>sitting.items.some(item=>item.skill===skill && sitting.right[item.id]));
    // The test only masters a topic once the rest of the work is done. A sitting taken early is
    // still graded and still pays for right answers; it just cannot hand over the topic.
    // Readiness is settled when the sitting starts (sitting.ready), never after its own ten
    // answers have been counted: otherwise a test started at practice 15/25 could complete the
    // practice count during the sitting and master the topic from the locked state.
    const isReady=typeof sitting.ready==='boolean'?sitting.ready:testReady(save,t).ready;
    /* improve23-r23t-nov4 #1 (kidsim6 #1, lead decision 4 Nov under the owner's delegation; docs/reference/SPEC_DECISIONS.md): on the save's FIRST topic
       (testSumOn: firstTopic and not mastered, the topic practiceNeeded gives 10) the test also passes once TEST_SUM_NEED different test questions have been
       answered right across ready sittings, with a right answer in every skill among them (`testright` on the lesson record, distinct pool ids; additive,
       kept by normalize(); save stays v9). The pass is still decided here, when a sitting ends; a sitting begun before testReady counts nothing. */
    const sumOn=testSumOn(save,t)&&isReady,tr=sumOn?testSumAdd(save,t,sitting.right):null;
    const sumCovered=!!tr&&skills.every(skill=>tr.some(id=>ITEMS[id]?.skill===skill)||!sitting.items.some(item=>item.skill===skill)&&!liveTestSkills(save,t).includes(skill));
    const bySum=!!tr&&tr.length>=TEST_SUM_NEED&&sumCovered&&!(score>=Math.ceil(PASS*total-1e-9)&&covered);
    const passed=(score>=Math.ceil(PASS*total-1e-9) && covered || bySum) && isReady;
    const missed=[...skills].filter(skill=>!sitting.items.some(item=>item.skill===skill)||sitting.items.some(item=>item.skill===skill && !sitting.right[item.id]));
    const r=rec(save,t);
    r.test=Math.max(r.test||0,Math.min(99,score));
    r.miss=sitting.items.filter(item=>!sitting.right[item.id]).map(item=>item.id).slice(0,10);
    const first=passed && !(r.pts>0);
    if(first){settleFirst(save,t);r.pts=topicPoints(t);keepOpen(save,t);}
    /* improve20-m-nov1 (audit3 #6): the skills with no right answer in this sitting, so a 9 of 10 that misses one skill can name it */
    const uncovered=skills.filter(skill=>!sitting.items.some(item=>item.skill===skill && sitting.right[item.id]));
    return {graded:true,passed,first,xp:first?XP.mastered:0,score,total,missed,uncovered,...(tr?{sum:{have:Math.min(TEST_SUM_NEED,tr.length),need:TEST_SUM_NEED,covered:sumCovered,/* improve24-r24k-nov5 #2 */gap:passed?null:testSumGap(save,t)},bySum:bySum&&passed}:{})};
}
/* improve23-r23t-nov4 #1: the first topic's summed test; testSumHave = {have, need} while that rule applies (for the card's line), else null */
export const TEST_SUM_NEED=Math.ceil(PASS*TEST_SIZE-1e-9);
export const testSumOn=(save,t)=>!!t&&firstTopic(save,t)&&!mastered(save,t);
export const testSumHave=(save,t)=>testSumOn(save,t)?{have:Math.min(TEST_SUM_NEED,(Array.isArray(save.lessons?.[t.id]?.testright)?save.lessons[t.id].testright:[]).filter(id=>POOL[t.id]?.includes(id)).length),need:TEST_SUM_NEED}:null;
/* improve24-r24k-nov5 #2 (kidsim7 #2: Ivy at 8 of 8 with one skill uncovered, and nothing named it): once the first topic's summed count is full, the
   first live skill with no right answer in `testright`, else null. The every-skill rule is unchanged; this only names the skill and points practice and the next sitting at it */
export function testSumGap(save,t){if(!testSumOn(save,t))return null;const pool=new Set(POOL[t.id]||[]),tr=(Array.isArray(save.lessons?.[t.id]?.testright)?save.lessons[t.id].testright:[]).filter(id=>pool.has(id));if(tr.length<TEST_SUM_NEED)return null;
 return liveTestSkills(save,t).find(k=>!tr.some(id=>ITEMS[id]?.skill===k))||null;}
function testSumAdd(save,t,right){const r=rec(save,t),pool=new Set(POOL[t.id]||[]),have=new Set((Array.isArray(r.testright)?r.testright:[]).filter(id=>pool.has(id)));for(const [id,ok] of Object.entries(right||{}))if(ok===true&&pool.has(id))have.add(id);if(have.size)r.testright=[...have].slice(0,TEST_SIZE*2);return [...have];}
