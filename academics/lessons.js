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
function install(t){
 {const st=STAGES[stageOf(t)];if(t.level!==st.level||!t.id.startsWith(`${t.subject}-${st.tag}-`))throw new Error(`lessons: ${t.id} must be level ${st.level} with a -${st.tag}- id for grade ${t.grade}`);}
 const ids=[];
 t.items((skill,prompt,answer,pic,explanation,accept)=>{const id=idOf(t,prompt);claim(id,t.id);
  items[id]=Object.freeze({id,subject:t.subject,level:t.level,topic:t.id,skill,prompt,answer,numeric:typeof answer==='number',pic,explanation,...(accept?.length?{accept:Object.freeze([...accept])}:{})});ids.push(id);});
 t.steps.forEach((s,i)=>{if(!s.check)return;const id=idOf(t,s.check.prompt);claim(id,`${t.id} step ${i}`);
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
export const testReady=(save,t)=>{const r=save.lessons?.[t.id]||{},done=r.done===true,need=Math.ceil(PASS*QUIZ_SIZE-1e-9),quiz=(r.quiz||0)>=need||left(save,t)<need,p=practised(save,t),n=practiceNeeded(save,t);
 return {ready:done&&quiz&&p>=n,lesson:done,quiz,quizNeed:need,quizSize:QUIZ_SIZE,practice:Math.min(p,n),needed:n};};
/* How many questions a practice sitting asks (late playtest 24 Oct: at 24 of 25 a child sat a full ten for the one answer the
   test still needed). Before the test opens: what is still needed, between 5 and size; after that, size. Never a limit on practice. */
export const practiceSitting=(save,t,size=10)=>{const r=testReady(save,t);return r.practice>=r.needed?size:Math.max(5,Math.min(size,r.needed-r.practice));};
export const exact=(input,q)=>accepts(input,q) && (q.numeric?numberIn(input,q)===Number(q.answer):true);
/* quizfun-oct29: `avoid` (a Set of ids) is only ever a preference: those items go last and skip the per-skill quota, and are
   served only when the rest of the pool cannot fill the sitting. Retirement, misses-last and the size of a sitting are unchanged. */
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
    const taken=[];
    for(const k of skills){
        let got=0;
        for(const id of candidates){
            if(taken.length>=n||got>=quota)break;
            if(ITEMS[id].skill===k&&!avoid?.has(id)){
                taken.push(id);
                got++;
            }
        }
    }
    for(const id of candidates){
        if(taken.length>=n)break;
        if(!taken.includes(id))taken.push(id);
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
/* A mastery sitting covers every skill with unretired work. Large units need more than ten
   questions; exhausted skills already have two correct answers on every item and stay retired.
   Snapshot both coverage and readiness before any answers in this sitting are credited. */
const liveTestSkills=(save,t)=>Object.keys(t.skills).filter(k=>POOL[t.id].some(id=>ITEMS[id].skill===k&&(save.answers[id]||0)<2));
export function beginMasteryTest(save,t,random=Math.random){
    const requiredSkills=liveTestSkills(save,t);
    return {items:pickItems(save,t,Math.max(TEST_SIZE,requiredSkills.length),random),requiredSkills,ready:testReady(save,t).ready};
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
export function checksLeft(save,t,attempted=[]){
    const attempts=new Set([...(save.lessons?.[t.id]?.tried||[]),...attempted]);
    return Object.values(CHECKS).filter(q=>q.topic===t.id&&!attempts.has(q.id)).sort((a,b)=>a.step-b.step).map(q=>q.id);
}
export function finishLesson(save,t,attempted){
    const attempts=new Set([...(save.lessons?.[t.id]?.tried||[]),...attempted]);
    for(const id of attempts)recordCheckAttempt(save,t,id);
    const skipped=checksLeft(save,t,attempted);
    if(skipped.length)return {xp:0,first:false,skipped};
    const r=setStep(save,t,0);
    if(!r.done){
        r.done=true;
        return {xp:XP.lesson,first:true,skipped:[]};
    }
    return {xp:0,first:false,skipped:[]};
}
export function recordQuiz(save,t,score){
    const r=rec(save,t),before=r.quiz||0,best=Math.max(before,Math.min(99,score|0));
    const improved=best>before,first=!(r.quiz>0);
    r.quiz=best;
    return {best,improved,first,before};
}
export function finishTest(save,t,sitting){
    if(!sitting.items.length || sitting.items.some(i=>typeof sitting.right[i.id]!=='boolean'))return {graded:false,passed:false,first:false,xp:0,score:0,total:sitting.items.length,missed:[]};
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
    const passed=score>=Math.ceil(PASS*total-1e-9) && covered && (typeof sitting.ready==='boolean'?sitting.ready:testReady(save,t).ready);
    const missed=[...skills].filter(skill=>!sitting.items.some(item=>item.skill===skill)||sitting.items.some(item=>item.skill===skill && !sitting.right[item.id]));
    const r=rec(save,t);
    r.test=Math.max(r.test||0,Math.min(99,score));
    r.miss=sitting.items.filter(item=>!sitting.right[item.id]).map(item=>item.id).slice(0,10);
    const first=passed && !(r.pts>0);
    if(first){settleFirst(save,t);r.pts=topicPoints(t);keepOpen(save,t);}
    return {graded:true,passed,first,xp:first?XP.mastered:0,score,total,missed};
}
