/* "Study to unlock" (v2:edu): what stands between the hero and the next abilities, as a list a
   world map or Stats screen can show. Pure: it reads a save and returns data; it never changes the
   save and never unlocks anything. The rule it explains is the game's own (CLAUDE.md invariants):
   an ability needs its subject's ability mastery AND the hero level, `unlocked()` in game/math.js.

   Ability mastery = bank mastery b + Elementary points e/5, the Elementary share fading as b grows
   (abilityMastery in game/math.js). So the plan for a mastery gap is, in order:
   1. the next unmastered Elementary topics of that subject, in ladder order (lowest grade first),
      as many as the gap needs -- while Elementary alone can still reach the gate;
   2. otherwise Library training at Middle School, then High School, then College, with the target
      percentage that closes the gap.
   A learner above Grade 2 instead gets the lesson route from their current subject grade first.
   A level gap is reported separately; XP never closes a mastery gap and gold closes nothing. */
import {ABILITIES} from '../game/abilities.js';
import {LEVELS,SUBJECTS} from '../game/data.js';
import {mastery,elementary,abilityMastery,unlocked,xpLevel,clamp} from '../game/math.js';
import {TOPICS,ELEMENTARY_RUNGS,MIDDLE_RUNGS,HIGH_RUNGS,rungOf,topicPoints,mastered,topicOpen,openGrade,testReady,PRACTICE_NEEDED} from './lessons.js';
import {middleLadder,highLadder} from '../game/math.js';
import {placementGrades} from './placement.js';

const FADE=250/4.5;
const EPS=1e-8;
/* Ability mastery for a given bank mastery b and Elementary points e (mirrors game/math.js). */
export const abilityFrom=(b,e)=>b+Math.min(100,e)/5*Math.max(0,1-b/FADE);
const ladder=(subject,rungs=ELEMENTARY_RUNGS)=>rungs.flatMap(g=>TOPICS.filter(t=>t.subject===subject&&rungOf(t)===g));
/* Middle School points needed for one point of weighted mastery, then High, then College. */
const WEIGHT=[1,1.5,2];

/* The plan for one ability. Returns null for an ability already unlocked. */
export function abilityPlan(save,a){
 if(unlocked(save,a))return null;
 const have=abilityMastery(save,a.subject),short=Math.max(0,a.gate-have),lvNeed=xpLevel(a),lvHave=save.level||1;
 const steps=[];
 if(short>EPS){
  const b=mastery(save,a.subject),e=elementary(save,a.subject),topics=[];
  let e2=e;
  const placed=openGrade(save,a.subject)>2?lessonsToUnlock(save,a):null;
  if(placed?.reachable){
   for(const id of placed.topics){const t=TOPICS.find(x=>x.id===id),kind=t.grade>=9?'high':t.grade>=6?'middle':'elementary';
    let step=steps.at(-1);if(step?.kind!==kind){step={kind,subject:a.subject,topics:[],count:0};steps.push(step);}
    step.topics.push({id:t.id,title:t.title,grade:t.grade,open:topicOpen(save,t),gain:+topicPoints(t).toFixed(2)});step.count++;}
  }else if(abilityFrom(b,100)+EPS>=a.gate){
   for(const t of ladder(a.subject)){if(abilityFrom(b,e2)+EPS>=a.gate)break;if(mastered(save,t))continue;
    const gain=abilityFrom(b,e2+topicPoints(t))-abilityFrom(b,e2);e2+=topicPoints(t);
    topics.push({id:t.id,title:t.title,grade:t.grade,open:topicOpen(save,t),gain:+gain.toFixed(2)});}
   steps.push({kind:'elementary',subject:a.subject,topics,count:topics.length});
  }else{
   /* Elementary cannot reach this gate on its own: bank mastery has to rise. The targets are what
      training alone needs from today's Elementary points, filling Middle -> High -> College in
      order, so they are true without any more lessons; the lessons listed as helping lower them. */
   const m=(save.mastery?.[a.subject]||[0,0,0]).map(x=>clamp(+x||0,0,100));
   /* the slots mastery() really reads: Middle and High are each at least their lesson ladder */
   m[0]=Math.max(m[0],middleLadder(save,a.subject));m[1]=Math.max(m[1],highLadder(save,a.subject));
   /* The bank mastery b that reaches the gate: b + e/5 (1 - b/FADE) >= gate. */
   const bNeed=Math.max(b,(a.gate-Math.min(100,e)/5)/(1-Math.min(100,e)/5/FADE));
   /* Targets round UP to the 0.1 shown, so reaching the number shown always meets the gate (rounding to nearest could fall 0.01 short). */
   let need=(bNeed-b)*4.5;const targets=[];
   for(let i=0;i<3&&need>EPS;i++){const room=100-m[i],pts=Math.min(room,need/WEIGHT[i]);if(pts>EPS){targets.push({level:i,name:LEVELS[i],from:+m[i].toFixed(1),to:Math.min(100,Math.ceil((m[i]+pts)*10-1e-9)/10),answersAbout:Math.ceil(pts/7)});need-=pts*WEIGHT[i];}}
   const left=ladder(a.subject).filter(t=>!mastered(save,t));
   if(left.length)steps.push({kind:'elementary',subject:a.subject,topics:left.map(t=>({id:t.id,title:t.title,grade:t.grade,open:topicOpen(save,t),gain:null})),count:left.length,optional:true});
   steps.push({kind:'training',subject:a.subject,targets,reachable:need<=EPS});
   /* Middle School lessons raise the Middle slot too (Middle = max(training, Middle lesson points)), so where
      the target is Middle School, list the unmastered Middle lessons as a second road to the same number. */
   const mid=targets.find(t=>t.level===0),midLeft=ladder(a.subject,MIDDLE_RUNGS).filter(t=>!mastered(save,t));
   if(mid&&midLeft.length)steps.push({kind:'middle',subject:a.subject,topics:midLeft.map(t=>({id:t.id,title:t.title,grade:t.grade,open:topicOpen(save,t),gain:+topicPoints(t).toFixed(2)})),count:midLeft.length,ladder:+middleLadder(save,a.subject).toFixed(2),optional:true});
   /* High School lessons do the same for the High slot (docs/HIGH_SCHOOL_SPEC.md §2). */
   const hi=targets.find(t=>t.level===1),hiLeft=ladder(a.subject,HIGH_RUNGS).filter(t=>!mastered(save,t));
   if(hi&&hiLeft.length)steps.push({kind:'high',subject:a.subject,topics:hiLeft.map(t=>({id:t.id,title:t.title,grade:t.grade,open:topicOpen(save,t),gain:+topicPoints(t).toFixed(2)})),count:hiLeft.length,ladder:+highLadder(save,a.subject).toFixed(2),optional:true});
  }
 }
 if(lvHave<lvNeed)steps.push({kind:'level',have:lvHave,need:lvNeed,levels:lvNeed-lvHave});
 return {ability:{id:a.id,name:a.name,subject:a.subject,gate:a.gate,branch:a.branch},
  mastery:{have:+have.toFixed(2),need:a.gate,short:+short.toFixed(2)},level:{have:lvHave,need:lvNeed,short:Math.max(0,lvNeed-lvHave)},
  ready:short<=EPS&&lvHave>=lvNeed,steps,lessons:lessonsToUnlock(save,a),summary:summarize(a,short,steps),goal:goalLine(save,a)};
}

/* A plain sentence a child can act on: lessons and hero levels, never percentages. */
export function summarize(a,short,steps){
 const sub=SUBJECTS[a.subject]?.name||a.subject,parts=[];
 for(const s of steps){
  if(['elementary','middle','high'].includes(s.kind)&&!s.optional&&s.count)parts.push(`master ${s.count} more ${sub} topic${s.count===1?'':'s'} (lesson, quiz, practice and test)`);
  if(s.kind==='training')parts.push(`keep studying ${sub} (Middle and High School lessons and Library training)`);
  if(s.kind==='level')parts.push(`reach hero level ${s.need}`);
 }
 if(!parts.length)return `${a.name} is ready.`;
 return `To unlock ${a.name}: ${parts.join(' and ')}.`;
}

/* The next `limit` abilities the hero could unlock, nearest first (smallest mastery gap, then
   level), optionally for one subject. hero defaults to the save's hero. */
export function studyPlan(save,{hero=save.hero,subject=null,limit=3}={}){
 return (ABILITIES[hero]||[]).filter(a=>!subject||a.subject===subject).map(a=>abilityPlan(save,a)).filter(Boolean)
  .sort((x,y)=>x.mastery.short-y.mastery.short||x.level.short-y.level.short||x.ability.gate-y.ability.gate).slice(0,limit);
}

/* ---------- Goals an 8-year-old can read (owner decision 8 Oct; DIRECTION_REVIEW change 5) ----------
   Never percentages: "4 lessons → Shield Bash". lessonsToUnlock counts the topics still to master, in
   the order a child meets them (their current subject grade first), by actually adding each
   topic's points to a copy of the save and asking the real abilityMastery() when the gate is met.
   Training in the bank still counts for mastery; this only says how many LESSONS would do it. */
/* Start with the subject's current grade, including a placement or saved work. Earlier grades remain
   available as remediation after the current and later work; nothing about their unlocks changes. */
const stageLadder=(save,subject)=>{const g=openGrade(save,subject),ts=[...ladder(subject,ELEMENTARY_RUNGS),...ladder(subject,MIDDLE_RUNGS),...ladder(subject,HIGH_RUNGS)];
 return [...ts.filter(t=>rungOf(t)>=g),...ts.filter(t=>rungOf(t)<g).sort((a,b)=>rungOf(b)-rungOf(a))];};
export function lessonsToUnlock(save,a){
 const need=a.gate,have=abilityMastery(save,a.subject);
 if(have+EPS>=need)return {lessons:0,reachable:true,topics:[]};
 const trial={...save,lessons:{...(save.lessons||{})}},topics=[];
 for(const t of stageLadder(save,a.subject)){if(mastered(save,t))continue;trial.lessons[t.id]={...(trial.lessons[t.id]||{}),pts:topicPoints(t)};topics.push(t);
  if(abilityMastery(trial,a.subject)+EPS>=need)return {lessons:topics.length,reachable:true,topics:topics.map(t=>t.id)};}
 return {lessons:topics.length,reachable:false,topics:topics.map(t=>t.id)};
}
/* Where a topic stands on its way to mastery (playtest S2-3): the four steps a child really does, the same
   numbers the mastery test gate uses (lessons.js testReady). stage is the next thing to do. */
export function topicStage(save,t){
 if(mastered(save,t))return {stage:'done',lesson:true,quiz:true,practice:PRACTICE_NEEDED,needed:PRACTICE_NEEDED};
 const g=testReady(save,t),stage=!g.lesson?'lesson':!g.quiz?'quiz':g.practice<g.needed?'practice':'test';
 return {stage,lesson:g.lesson,quiz:g.quiz,practice:g.practice,needed:g.needed};
}
/* juice-oct27: how far a topic is toward mastery, 0..1, for the Library's bar: the lesson and the quiz are 15% each, the
   PRACTICE_NEEDED practised questions 55% (one share per question), the mastery test the last 15%. The same steps the gate
   checks (topicStage), only weighted for a bar; nothing here is a rule. `left` names what is still to do. */
export const MASTERY_SHARE={lesson:.15,quiz:.15,practice:.55,test:.15};
export function topicMastery(save,t){const g=topicStage(save,t),S=MASTERY_SHARE;if(g.stage==='done')return {frac:1,left:'Mastered',stage:'done'};
 const frac=(g.lesson?S.lesson:0)+(g.quiz?S.quiz:0)+S.practice*Math.min(1,g.practice/g.needed),k=g.needed-g.practice;
 const left={lesson:'Start with the lesson',quiz:'Next: pass the quiz',practice:`Practice ${k} more question${k===1?'':'s'}`,test:'Next: the mastery test'}[g.stage];
 return {frac:Math.round(frac*1000)/1000,left,stage:g.stage};}
/* "Lesson ✓ · Quiz · Practice 0/25 · Test": the steps left in one topic, for a goal line or a card. */
export function stepsLine(save,t){
 const g=topicStage(save,t);
 return `Lesson${g.lesson?' ✓':''} · Quiz${g.quiz?' ✓':''} · Practice ${g.practice}/${g.needed}${g.practice>=g.needed?' ✓':''} · Test${g.stage==='done'?' ✓':''}`;
}
/* One short line for an ability: what is left, in topics and hero levels. A topic is mastered by its lesson,
   quiz, practice and test, so the line says so instead of "1 lesson" (playtest S2-3: that took 38 answers). */
export function goalLine(save,a){
 if(unlocked(save,a))return `${a.name} is yours.`;
 const l=lessonsToUnlock(save,a),lv=Math.max(0,xpLevel(a)-(save.level||1)),lvText=lv?` (and\u00a0hero\u00a0level\u00a0${xpLevel(a)})`:'';/* no-break spaces: the line never wraps to leave a lone "2)" (polish, 19 Oct) */
 if(l.lessons===0)return lv?`Fight foes and finish adventures to earn XP toward hero level ${xpLevel(a)} → ${a.name}`:`${a.name} is ready.`;
 if(!l.reachable)return `Keep training ${SUBJECTS[a.subject]?.name||a.subject} → ${a.name}${lvText}`;
 if(l.lessons===1){const t=TOPICS.find(x=>x.id===l.topics[0]);return `Master 1 topic: ${stepsLine(save,t)} → ${a.name}${lvText}`;}
 return `Master ${l.lessons} topics → ${a.name}${lvText}`;
}
/* The one lesson to do next, for the Library's big "Next lesson" button and the first visit:
   the nearest locked ability of this hero, and the first open, unmastered topic in its subject.
   For a new hero that is the class's first earnable ability (gate 1 after the re-curve) and the
   first Grade 2 topic of its subject. Falls back to any open unmastered topic.
   With `subject` (a Library subject station, art director round 3) it stays in that subject: the nearest
   locked ability of the hero in that subject, else the subject's first open, unmastered topic. */
export const topicInSchoolMode=(save,t)=>!save.schoolMode||(save.schoolMode==='elementary'?rungOf(t)<=5:save.schoolMode==='middle'?rungOf(t)>=6&&rungOf(t)<=8:rungOf(t)>=9);
export function nextLesson(save,{hero=save.hero,subject=null}={}){
 const plans=studyPlan(save,{hero,subject,limit:8});
 for(const p of plans){const a=ABILITIES[hero].find(x=>x.id===p.ability.id),l=lessonsToUnlock(save,a);
  const t=l.topics.map(id=>TOPICS.find(x=>x.id===id)).find(t=>t&&topicInSchoolMode(save,t)&&topicOpen(save,t));
  if(t)return {topic:t,ability:a,lessons:l.lessons,goal:goalLine(save,a)};}
 const subjects=subject?[subject]:[...new Set(TOPICS.map(t=>t.subject))];
 const t=subjects.flatMap(id=>stageLadder(save,id)).find(t=>topicInSchoolMode(save,t)&&topicOpen(save,t)&&!mastered(save,t));
 return t?{topic:t,ability:null,lessons:0,goal:''}:null;
}
/* oct25-tryit (learning-loop playtest P1): "Fastest next ability" and the Closer line only count subjects whose lessons are open in
   the child's school stage. A High schooler with only History placed saw Hunter's Mark at 29 topics while a subject they had not
   placed would get there sooner. This names that subject, so the card can offer its Find-your-level check. Read-only.
   A subject counts only while it still has a placement option and needs it: the subject has not reached this stage's first grade
   (by placement or by lessons), the stage has a check for it, and no lesson of this stage is open in it yet. An Elementary
   learner always has Grade 2 open, so this line is for Middle and High School learners; Elementary keeps its own "Already know
   Grade N? Find your level" button, and a child who finished Elementary is never sent back to an Elementary check. Its distance is lessonsToUnlock() with the subject opened at the stage's first grade -- the
   least the check can give, so the line never promises more than a placement delivers. Shown only when strictly nearer than the
   current plan; otherwise null (never a nag). */
const STAGE_FIRST={elementary:2,middle:6,high:9};
export function placementNudge(save,{hero=save.hero}={}){
 const mode=STAGE_FIRST[save.schoolMode]?save.schoolMode:'elementary',first=STAGE_FIRST[mode];
 const subjects=Object.keys(SUBJECTS).filter(subject=>openGrade(save,subject)<first&&placementGrades(subject,mode).length&&!TOPICS.some(t=>t.subject===subject&&topicInSchoolMode(save,t)&&topicOpen(save,t)&&!mastered(save,t))&&(ABILITIES[hero]||[]).some(a=>a.subject===subject&&!unlocked(save,a)));
 if(!subjects.length)return null;
 const cur=nextLesson(save,{hero}),best=cur?.ability?cur.lessons:Infinity;let out=null;
 for(const subject of subjects){
  const trial={...save,placement:{...(save.placement||{}),[subject]:Math.max(first,openGrade(save,subject))}};
  for(const a of (ABILITIES[hero]||[]).filter(a=>a.subject===subject&&!unlocked(save,a))){
   const l=lessonsToUnlock(trial,a);
   if(l.reachable&&l.lessons>0&&l.lessons<best&&(!out||l.lessons<out.lessons))out={subject,ability:{id:a.id,name:a.name},lessons:l.lessons,stage:mode};
  }
 }
 return out;
}
