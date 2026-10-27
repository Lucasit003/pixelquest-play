/* The placement check (docs/reference/LEARNING_GAMES.md): twelve questions across grades 2, 3
   and 4 that decide which grade a subject opens at, so a child who already knows this work does
   not have to climb from the bottom. It opens grades; it never marks a topic mastered, never
   lowers a placement already earned, and never closes a grade. Designed and written by Codex. */
import {shownPic} from './filler-pic.js';
import {needsCalc} from './placement-calc.js';
import {ITEMS,POOL,gradeTopics,grades,rungOf,topic,grade,placementGrade,openGrade} from './lessons.js';
export const PLACEMENT_GRADES=Object.freeze([2,3,4]),PLACEMENT_PER_GRADE=4,PLACEMENT_PASS=3;
/* The Middle and High School checks ask only their own stage's work (26 Oct, playtest P8). They used to ask the grade
   below (Middle: Grades 5-7, High: Grade 8), so a High School History check was all Middle School source puzzles and
   no AP history. Now the Middle check asks Grades 6, 7 and 8 and the High check Grades 9 to 12 (whichever have
   topics), and three of four right in a grade opens that grade: the child has shown they can work at it. The ceilings
   are unchanged (Middle opens up to Grade 8, High up to Grade 12) and so is the pass rule. The Elementary check still
   asks Grades 2-4 and opens the grade above each one passed, up to Grade 5. With no topics in a stage for a subject
   there is no check for it (placementGrades is empty). */
export const MIDDLE_PLACEMENT_GRADES=Object.freeze([6,7,8]);
export const HIGH_PLACEMENT_GRADES=Object.freeze([9,10,11,12]);
const STAGE_GRADES={middle:MIDDLE_PLACEMENT_GRADES,high:HIGH_PLACEMENT_GRADES};
export const placementGrades=(subject,stage='elementary')=>STAGE_GRADES[stage]?STAGE_GRADES[stage].filter(g=>grades(subject).includes(g)):PLACEMENT_GRADES;
/* The grade a passed block opens: the next one in Elementary, the block's own grade in Middle and High. */
export const opensGrade=(stage,g)=>STAGE_GRADES[stage]?g:g+1;
/* Placement pictures (26 Oct, P8). A lesson picture often draws the worked result to teach it (the sum's blocks, the
   jumps landing on the difference, two fraction bars whose sizes settle a comparison, a word card that is the answer).
   In a lesson that is the point; in a check it answers the question without the skill. placementPic(q) is the picture
   the check shows: the item's own picture, or none when it gives the answer away. Items, ids and the lesson pictures are
   untouched. givesAway reads the picture as it is drawn when asked (count and solve are never drawn in a question). */
const low=v=>String(v??'').trim().toLowerCase().replace(/^(a|an|the)\s+/,''),num=v=>{const s=String(v??'').trim().replace(/^\$/,'').replace(/,/g,''),f=s.match(/^(-?\d+)\/(\d+)$/);return f?+f[1]/+f[2]:/^-?\d+(\.\d+)?$/.test(s)?+s:NaN;};
const TURN={right:1,left:-1,around:2},DIRS=['north','east','south','west'],word=(a,s)=>a.length>1&&new RegExp(`(^|[^a-z])${a.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}([^a-z]|$)`).test(low(s));
/* Pictures that state the rule the question tests (a table mapping each case to its answer). */
export const DEFINES=Object.freeze(['finance-h-ap-macro-basic-economic-concepts|demand','finance-h-ap-macro-basic-economic-concepts|supply','science-h-moles|spectra']);
export function givesAway(q,pic=q?.pic){
 if(!q||!pic)return false;if(DEFINES.includes(`${q.topic}|${q.skill}`))return true;
 const A=low(q.answer),n=num(q.answer),is=x=>Number.isFinite(n)&&x!=null&&Number.isFinite(+x)&&Math.abs(n-x)<1e-9;
 return [].concat(pic).some(p=>{if(!p||typeof p!=='object')return false;switch(p.t){
  case 'word':return low(p.base)===A;
  case 'compass':return low(p.mark)===A||(!!p.from&&low(p.dir)===A)||(!!p.face&&!!p.turn&&DIRS[(DIRS.indexOf(p.face)+TURN[p.turn]+4)%4]===A);
  case 'cycle':return low(p.mark)===A;
  case 'world':return low(p.blank)===A||low(p.mark)===A;
  case 'matter':return !!p.change||(p.jars||[]).some(j=>!j.hide&&word(low(j.label||j.state),A));
  case 'rule':return q.subject!=='cs'&&[p.yes,p.no].some(l=>word(A,l));
  case 'line':{const from=+p.from||0,end=from+(p.back?-1:1)*(+p.jumps||0)*(+p.hop||0);return [end,p.mark,p.hop,from].some(is);}
  case 'bar':return [p.parts,p.shade,p.parts-p.shade,p.shade/p.parts].some(is);
  case 'bars':return (p.rows||[]).some(r=>r.shade!=null&&[r.shade,r.shade/r.parts].some(is));
  case 'groups':return [p.n,p.k,p.n*p.k].some(is);
  case 'array':return [p.r,p.c,p.r*p.c,2*(p.r+p.c)].some(is);
  case 'blocks':{const h=p.h||0,t=p.ten||0,o=p.one||0;if(!h&&!t&&!o)return true;/* an empty frame ("Round 30" draws 0 tens): it shows nothing true */return [h*100+t*10+o,h,t,o,p.regroup===true?t+1:null,p.regroup==='split'?o+10:null,p.regroup==='split'?t-1:null].some(is);}
  case 'fit':{const L=p.total[0]/p.total[1],size=p.share?L/p.share:p.piece[0]/p.piece[1];return [L/size,size].some(is);}
  case 'numline':return (p.marks||[]).some(m=>is(m.v)||(m.label!=null&&low(m.label)===A));
  case 'lines':return (p.places||[]).some(x=>low(x.name)===A);
  case 'timeline':{const ev=p.events||[];return ev.length===2&&ev.every(e=>e!=null)&&ev.some(e=>low(e)===A);}
  default:return false;}});
}
/* 26 Oct leftovers: a filler picture (filler-pic.js) is not shown either */
export const placementPic=q=>q?.pic&&!givesAway(q)?shownPic(q):null;
/* oct26 exploit round 3. The Scholar's Seal and the pre-boss knowledge check pay a reward for a right answer, so they are
   checks too: they show placementPic(q). Quizzes, practice, tests and course reviews keep their teaching models (blocks,
   bars, jumps; an owner question), but never a picture that prints the answer itself: a word card that is the answer
   ("unhappy" under "Add a prefix to 'happy'") or a world map whose one "?" sits on the answer continent. askedPic(q) is
   shownPic(q) without those parts. Items, ids, prompts and lesson pictures are untouched. */
export const NAMES_ANSWER=Object.freeze(['word','world']);
export function askedPic(q){const pic=shownPic(q);if(!pic)return null;const bad=p=>!!p&&typeof p==='object'&&NAMES_ANSWER.includes(p.t)&&givesAway(q,p);
 if(!Array.isArray(pic))return bad(pic)?null:pic;const kept=pic.filter(p=>p&&!bad(p));return kept.length===pic.filter(Boolean).length?pic:kept.length?kept:null;}
/* Placement items for each subject (26 Oct, docs/playtest/oct26-histplace/REPORT.md). The High School checks of History,
   Geography and Language skip items that need a calculation (needsCalc in placement-calc.js): an AP History check tests
   history, not a tax bill worked out on paper (about 3% of those pools). Science, Finance and Computer Science keep them: working out a speed, a mole ratio, an
   interest payment or a loop's output is part of what their grades test. The items stay in lessons, quizzes, practice and
   tests; only the placement draw passes them by. The Elementary and Middle checks are unchanged: Middle History and
   Geography are skills curricula whose topics are the working (BCE/CE spans, census rates, gradients), and skipping them
   would leave whole topics of a grade untested before the check opens it (lead ruling, 26 Oct). */
export const CALC_FREE_SUBJECTS=Object.freeze(['history','geography','language']);
export const placementOk=(q,stage='high')=>!!q&&(stage!=='high'||!CALC_FREE_SUBJECTS.includes(q.subject)||!needsCalc(q));
export {needsCalc};
export function beginPlacement(save,subject,random=Math.random,{stage='elementary'}={}){
 const items=[],gs=placementGrades(subject,stage);if(!gs.length)return null;
 for(const g of gs){
  const candidates=gradeTopics(subject,g).flatMap(t=>POOL[t.id].filter(id=>(save.answers[id]||0)<2&&ITEMS[id]&&placementOk(ITEMS[id],stage)).map(id=>ITEMS[id]));/* calculation items are passed by in History, Geography and Language (placementOk); an unloaded lesson's items are skipped, never read as undefined (25 Oct) */
  if(candidates.length<PLACEMENT_PER_GRADE)return null;
  for(let i=candidates.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[candidates[i],candidates[j]]=[candidates[j],candidates[i]];}
  const topics={},skills={};
  for(let i=0;i<PLACEMENT_PER_GRADE;i++){
   candidates.sort((a,b)=>(topics[a.topic]||0)-(topics[b.topic]||0)||(skills[a.topic+':'+a.skill]||0)-(skills[b.topic+':'+b.skill]||0)||(save.answers[a.id]||0)-(save.answers[b.id]||0));
   const q=candidates.shift();items.push(q);topics[q.topic]=(topics[q.topic]||0)+1;const k=q.topic+':'+q.skill;skills[k]=(skills[k]||0)+1;
  }
 }
 return {subject,stage,grades:gs,items,i:0,right:{},xp:0,closed:false};
}
export function answerPlacement(save,run,id,input){
 if(!run||run.closed||run.items[run.i]?.id!==id||!String(input).trim())return null;
 /* Retirement and XP count as usual; mastering a topic by retiring its last question does not,
    because this check opens grades and nothing else. */
 const r=grade(save,run.items[run.i],input,{master:false});run.right[id]=r.ok;run.i++;run.xp+=r.xp;return r;
}
export function finishPlacement(save,run){
 const gs=run?.grades||PLACEMENT_GRADES;
 if(!run||run.closed||run.i!==gs.length*PLACEMENT_PER_GRADE||run.items.length!==run.i||new Set(run.items.map(q=>q.id)).size!==run.i||run.items.some(q=>ITEMS[q.id]!==q||q.subject!==run.subject||typeof run.right[q.id]!=='boolean'))return null;
 const scores=gs.map(g=>{const qs=run.items.filter(q=>rungOf(topic(q.topic))===g);return {grade:g,total:qs.length,score:qs.filter(q=>run.right[q.id]).length};});
 if(scores.some(r=>r.total!==PLACEMENT_PER_GRADE))return null;
 const before=openGrade(save,run.subject);let floor=0;
 /* balance-oct26 (owner): the highest grade passed opens, even past a failed lower block (Middle 2/4, 4/4, 3/4 opens Grade 8; it
    used to stop at the failed Grade 6 and open nothing). Every grade below a placement is open too (lessons.js gradeOpen), so a
    later pass also opens Grade 6. Same rule for the Elementary and High checks. Still only ever raises; never masters a topic. */
 /* hook-oct27 (lead, newplayer-oct27 finding 8): a Middle or High check that passes no grade still opens the floor of the stage the
    child chose (Grade 6, Grade 9: gs[0], the lowest grade the check asks), a starting point with nothing mastered, instead of
    leaving a beginner with no lesson to open. The Elementary check keeps its own floor (Grade 2). Only ever raises. */
 if(STAGE_GRADES[run.stage]&&gs.length)floor=gs[0];
 for(const r of scores)if(r.score>=PLACEMENT_PASS)floor=Math.max(floor,opensGrade(run.stage,r.grade));
 (save.placement??={})[run.subject]=Math.max(placementGrade(save,run.subject),floor);
 run.closed=true;const current=openGrade(save,run.subject);
 return {grade:current,opened:current>before,scores,xp:run.xp};
}
