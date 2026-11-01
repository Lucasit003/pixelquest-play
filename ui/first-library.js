/* improve20-m-nov1 (audit3 #4, IMPROVE20 round 3 item 7): the first Library visit for a Middle or High School learner was a wall.
   The shelf opened on Math whatever the class (the subject of a Mage's next ability is Money, a Warrior's English), the line above
   the lessons said "Take the Middle School check to open your first Math lessons", the whole check form stood open under it, and
   every High School course read "Locked". The rules stay exactly as they were (lessons.js gradeOpen: a stage's lessons open through
   its check, which always opens at least the stage's first grade, or by finishing the grade below); only what the child is shown
   changes:
   - firstShelf: the shelf opens on the subject of the next lesson, else on the subject whose check brings the class's next ability
     nearest (study-unlock.js placementNudge), else Math;
   - firstCheck: one friendly line, true to finishPlacement (the stage's first grade opens whatever the score), and the button that
     starts it;
   - lockedText: a shut grade, course or lesson says what opens it, in the child's own stage. Read-only: no save, no gate. */
import {nextLesson,placementNudge} from '../academics/study-unlock.js';
import {placementGrades,PLACEMENT_PER_GRADE,startGrade} from '../academics/placement.js';
import {placementGrade,gradeOpen,grades,topicOpen,TOPICS} from '../academics/lessons.js';
import {coursesFor,builtUnits,HIGH_COURSE_LEVEL} from '../academics/courses.js';
export const STAGE_NAME=Object.freeze({elementary:'Elementary',middle:'Middle School',high:'High School'});
const STAGE_OF=g=>g>=9?'high':g>=6?'middle':'elementary';
export function firstShelf(save,fallback='math'){return nextLesson(save)?.topic.subject||placementNudge(save)?.subject||fallback;}
export function firstCheck(save,subject,name=subject){
 const stage=save?.schoolMode;if(stage!=='middle'&&stage!=='high')return null;
 const gs=placementGrades(subject,stage);if(!gs.length)return null;const n=gs.length*PLACEMENT_PER_GRADE;
 const text=stage==='high'?`A short ${name} check (${n} questions, no timer) opens your High School ${name} courses, whatever your score.`:`A short ${name} check (${n} questions, no timer) opens your first lessons: Grade ${gs[0]} for everyone, and higher grades if you know them.`;
 return {stage,grades:gs,questions:n,text,note:`Your ${name} ${stage==='high'?'courses':'lessons'} open with the ${STAGE_NAME[stage]} check.`,button:`Start the ${name} check`};
}
/* improve20-z-nov1 #2 (audit6 #8): the first visit was a 12-question typed check before any lesson. A lesson now comes first: the main
   button opens the grade picked at the title (placement.js startGrade/startAt) and starts its first lesson; the check stays as the second
   choice, true to finishPlacement (it can open higher grades, never lower ones). Read-only. */
export function firstStart(save,subject,name=subject){const fc=firstCheck(save,subject,name);if(!fc)return null;const g=startGrade(save,subject);if(g==null)return null;
 const high=fc.stage==='high';
 return {...fc,grade:g,text:high?`Start your High School ${name} courses with a lesson now. Or take a short check (${fc.questions} questions, no timer) that can open later courses.`:`Start with a Grade ${g} ${name} lesson now. Know it already? A short check (${fc.questions} questions, no timer) can open higher grades.`,
  button:high?'Start a High School lesson now':`Start a Grade ${g} lesson now`,checkButton:`Take the ${name} check instead`};}
/* What opens a shut grade g of a subject. A stage's check names itself only while it can still open the grade: the child has not yet been
   placed into that stage, and the subject has a check there. Its first grade always opens with it; a later grade only when that part of
   the check is passed, so the line says "can". Otherwise the grade below opens it, as before. */
export function lockedText(save,subject,g){
 const stage=STAGE_OF(g),gs=stage==='elementary'?[]:placementGrades(subject,stage),first=stage==='high'?9:6;
 if(gs.length&&placementGrade(save,subject)<first&&gs.includes(g)){
  const name=`the ${STAGE_NAME[stage]} check`;
  if(g===gs[0])return save?.schoolMode===stage?`Opens with ${name}`:`Opens with ${name}, or when Grade ${g-1} is mastered`;
  return `${name[0].toUpperCase()+name.slice(1)} can open it, or master Grade ${g-1}`;
 }
 return `Opens when Grade ${g-1} is mastered`;
}
/* improve20-m-nov1 item 13 (audit3 #18): what a finished check opened, in one line for the placement result. The grades of the check's own
   stage that are open now (every grade below a placement is open: lessons.js gradeOpen), or, in High School, its courses that are open. */
const IN_STAGE={elementary:g=>g<=5,middle:g=>g>=6&&g<=8,high:g=>g>=9};
export function placementOpens(save,subject,stage,name=subject){
 if(stage==='high'){const ids=new Set(TOPICS.map(t=>t.id)),cs=coursesFor(subject,HIGH_COURSE_LEVEL).filter(c=>builtUnits(c,ids).length),open=cs.filter(c=>builtUnits(c,ids).some(u=>topicOpen(save,TOPICS.find(t=>t.id===u.topic))));
  if(!open.length)return '';return open.length===cs.length?(cs.length===1?`Your High School ${name} course is open.`:`All ${cs.length} High School ${name} courses are open.`):`${open.length} of ${cs.length} High School ${name} courses are open.`;}
 const gs=grades(subject).filter(g=>(IN_STAGE[stage]||IN_STAGE.elementary)(g)&&gradeOpen(save,subject,g));
 if(!gs.length)return '';return gs.length===1?`Your Grade ${gs[0]} ${name} lessons are open.`:`Your ${name} lessons from Grade ${gs[0]} to Grade ${gs.at(-1)} are open.`;
}
/* improve20-f-nov1 #12 (audit5 #14): a child who picked Grade 3, 4 or 5 at the title saw "Already know Grade 2? Find your level" in the lesson
   card and a second "You're in Grade 3: find your level" box half below the fold. One line in the card and one button instead. True to the
   check: it asks PLACEMENT_PER_GRADE questions for each of its grades, has no timer, and only ever raises a placement (placement.js). */
export function gradeLine(save,subject,name=subject,warm=2){const g=save?.schoolGrade;if(save?.schoolMode!=='elementary'||!(g>2)||g>5)return null;const gs=placementGrades(subject,'elementary');if(!gs.length)return null;
 return {grade:g,questions:gs.length*PLACEMENT_PER_GRADE,text:`You picked Grade ${g}. Take a short check (${gs.length*PLACEMENT_PER_GRADE} questions, no timer) to start at your level, or warm up with Grade ${warm}.`,button:'Take the check'};}
