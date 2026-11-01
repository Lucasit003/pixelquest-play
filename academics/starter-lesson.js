/* Library first (owner, 1 Nov 2026; docs/playtest/libraryfirst-nov1/REPORT.md). A player went straight past the learning and still got
   far, so a NEW game now starts at the Library: Archivist Aldous shows the hero round (a short tour), then a very short "starter cut" of
   the first lesson in the hero's own starter subject (at most STARTER_STEPS steps and STARTER_TRYITS Try-its, from its first steps)
   awakens the class's starter ability with the existing celebration. The south gate (the prologue) stays shut until then.

   Who gets it: save.opening==='library' is set once, when a brand-new game begins (main.js Begin: not started, asleep, no progress).
   It is additive within v9 (core/save.js normalize keeps it, else null), so an older save, an awake save or one with any progress
   plays exactly as before. A save that won the prologue but never woke its starter (the old order) is offered the same short
   awakening at the Library (awakenOffer), and is never shut out of anything it had.

   The starter cut never rewords a step or a Try-it (narration clips are keyed by step text, question ids by prompt text): it is
   the lesson's own first steps. The rest of the lesson stays on the shelf; finishing it is a normal lesson finish, and the quiz,
   practice and the mastery test work exactly as before. Nothing here unlocks an ability: awaken() (awakening.js) only wakes the
   gate-0 starter that unlocked() already allows, as finishing a first lesson always has. Pure: reads the save it is given, except
   where a function says it writes. */
import {ABILITIES} from '../game/abilities.js';
import {SUBJECTS} from '../game/data.js';
import {xpLevel,unlocked} from '../game/math.js';
import {awakened,starterOf,asleep} from './awakening.js';
import {TOPICS,gradeTopics,topicOpen,mastered,rungOf,openGrade} from './lessons.js';
import {topicInSchoolMode,lessonsToUnlock} from './study-unlock.js';
import {startGrade} from './placement.js';

export const STARTER_STEPS=4,STARTER_TRYITS=2;
/* the line the south gate says while it is shut, and the second line that says where the Library is */
export const GATE_LINE='First, learn your first power at the Library!';
export const GATE_WHERE='The Library is the big timber building west of the fountain.';

const prologueDone=save=>!!save?.levels?.prologue?.done;
/* a new game on the Library-first opening (set at Begin) */
export const libraryOpening=save=>save?.opening==='library';
/* the opening is under way: a Library-first save whose starter still sleeps */
export const libraryFirst=save=>libraryOpening(save)&&!awakened(save);
/* the south gate and every road out stay shut until the starter is awake, for a Library-first save that has not won the prologue */
export const gateShut=save=>libraryFirst(save)&&!prologueDone(save);
/* the Library offers the short awakening: a Library-first save, or an asleep save that already won the prologue in the old order and has
   not finished a lesson yet (finishing any lesson wakes the starter, as it always has, so a save with one done keeps today's Library) */
const lessonDone=save=>Object.values(save?.lessons||{}).some(l=>l?.done);
export const awakenOffer=save=>!awakened(save)&&!!starterOf(save?.hero)&&(libraryOpening(save)||prologueDone(save)&&!lessonDone(save));
/* the tour plays once, on the first visit to the Library while the awakening is on offer */
export const TOUR_SEEN='tour';
export const tourDue=save=>awakenOffer(save)&&!(save?.hub?.seen||[]).includes(TOUR_SEEN);

export const starterSubject=save=>starterOf(save?.hero)?.subject||null;
/* The topic the awakening lesson is cut from. The one already begun (save.starterLesson) while it is still the hero's starter subject;
   else the easiest topic open to the child in their own school stage: Elementary, the first topic of the lowest open grade (a new save:
   Grade 2; a grade the child picked higher opens only through the check, which stays the child's choice afterwards); Middle and High
   School, the first topic of the grade picked at the title (placement.js startGrade; High School: Grade 9), which startLesson opens
   with startAt, so the starter lesson comes before any placement check. -> {topic, grade, open} or null. */
export function starterTopic(save){
 const sub=starterSubject(save);if(!sub)return null;
 const kept=save?.starterLesson&&TOPICS.find(t=>t.id===save.starterLesson&&t.subject===sub);
 if(kept)return {topic:kept,grade:rungOf(kept),open:topicOpen(save,kept)};
 const mode=save?.schoolMode;
 if(mode==='middle'||mode==='high'){const g=startGrade(save,sub);if(g==null)return null;const t=gradeTopics(sub,g)[0];return t?{topic:t,grade:g,open:topicOpen(save,t)}:null;}
 const g=openGrade(save,sub),inMode=t=>topicInSchoolMode(save,t);
 const t=gradeTopics(sub,g).find(t=>inMode(t)&&topicOpen(save,t)&&!mastered(save,t))||TOPICS.find(t=>t.subject===sub&&inMode(t)&&topicOpen(save,t)&&!mastered(save,t));
 return t?{topic:t,grade:rungOf(t),open:true}:null;
}
/* How many of a lesson's first steps make the starter cut: at most STARTER_STEPS steps holding at most STARTER_TRYITS Try-its and about
   STARTER_WORDS spoken words (each step's caption and its Try-it question; the narration reads about 2.5 words a second, so with the
   Try-its the cut stays near 90 seconds even where Middle and High School steps are long), never less than the first step. Within that
   it ends on a Try-it (the power wakes right after an answer) when that drops at most one step; otherwise it takes every step that fits.
   null while the lesson's steps are not loaded yet (the browser loads a lesson on demand). */
export const STARTER_WORDS=190;
const spoken=st=>String(st?.say||'').split(/\s+/).filter(Boolean).length+(st?.check?String(st.check.prompt||'').split(/\s+/).filter(Boolean).length:0);
export function starterCut(t){
 const st=t?.steps;if(!Array.isArray(st)||!st.length)return null;
 let fit=0,tries=0,words=0;
 for(let i=0;i<Math.min(STARTER_STEPS,st.length);i++){words+=spoken(st[i]);if(st[i].check)tries++;if(tries>STARTER_TRYITS||i>0&&words>STARTER_WORDS)break;fit=i+1;}
 for(let p=fit;p>=Math.max(1,fit-1);p--)if(st[p-1].check)return p;
 return Math.max(1,fit);
}
/* The cut's Try-its, by step index (the rest of the lesson keeps its own). */
export const cutChecks=(t,n)=>(t?.steps||[]).slice(0,n).map((s,i)=>s.check?i:-1).filter(i=>i>=0);
/* The cut for this lesson visit: its length when the save is still asleep, the awakening is on offer, `id` is the starter topic and the
   cursor is still inside the cut; else 0 (a normal lesson). */
export function cutFor(save,id){
 if(!awakenOffer(save))return 0;const st=starterTopic(save);if(!st||st.topic.id!==id)return 0;
 const n=starterCut(st.topic);if(!n)return 0;return (save?.lessons?.[id]?.at|0)<n?n:0;
}

/* ---- the tour (ui/library-tour.js draws it; main.js opens it on the first Library visit) ---- */
const sname=s=>SUBJECTS[s]?.name||s;
/* the first topic on an ability's road that is in the child's own school stage (a Middle School learner is never told to master a Grade 2
   topic); null when the road has none there yet (a subject not opened in this stage: the line then says "Study <subject>") */
const firstInMode=(save,r)=>r?.reachable?(r.topics||[]).map(id=>TOPICS.find(t=>t.id===id)).find(t=>t&&topicInSchoolMode(save,t))||null:null;
/* What wakes each of the hero's first powers, in ladder order: the starter (glowing, its starter topic) and the next ones (locked, with
   the topic, or topic count, that masters them, and the hero level). Read-only, from the same rules unlocked() reads. */
export function powersBoard(save,{count=4}={}){
 const hero=save?.hero,list=[...(ABILITIES[hero]||[])].sort((a,b)=>a.gate-b.gate||xpLevel(a)-xpLevel(b)),st=starterTopic(save);
 return list.slice(0,count).map(a=>{
  if(a.gate===0){const awake=!asleep(save,a);return {a,state:awake?'awake':'glow',subject:a.subject,topic:st?.topic||null,line:awake?'Awake!':st?.topic?`Learn it now: “${st.topic.title}”`:'Learn it now'};}
  if(unlocked(save,a))return {a,state:'awake',subject:a.subject,topic:null,line:'Awake!'};
  const r=lessonsToUnlock(save,a),first=firstInMode(save,r),lv=xpLevel(a);
  const what=first&&r.lessons===1?`Master “${first.title}”`:first&&r.lessons>1?`Master ${r.lessons} ${sname(a.subject)} topics`:`Study ${sname(a.subject)}`;
  return {a,state:'locked',subject:a.subject,topic:first,topics:r.lessons|0,level:lv,line:`${what}${lv>1?` and reach hero level ${lv}`:''}`};
 });
}
/* The four beats, one short line each (kid words). `lines` are what the "Read to me" button says. */
export function tourBeats(save){
 const a=starterOf(save?.hero),name=a?.name||'your first power';
 return [
  {id:'books',say:'Hello! I am Aldous. Every power is learned here, in these books.'},
  {id:'practice',say:'Read a lesson. Then practise to grow stronger, and pass the test!'},
  {id:'powers',say:'These are your powers. Each topic you master wakes one up!'},
  {id:'start',say:`Your first power is ${name}. Let’s wake it up with a short lesson!`}];
}
/* What the awaken card's "Read to me" says (ui/library-tour.js awakenCardHTML): the power, then how long, or where the child left off */
export const awakenReadLine=(name,at=0,n=0)=>`Wake up ${name}. ${at>0&&n&&at<n?`Step ${at+1} of ${n}. Keep going!`:'A short lesson, just a few steps.'}`;
/* Every sentence the tour and the awaken card read aloud, for every class ("Read to me" speaks a reading sentence by sentence, ui/edu.js),
   so tools/narration-clips.mjs --library-first records them in the lessons' voice; a line without a clip falls back to the browser voice */
export function narrationLines(){
 const out=new Set(),add=t=>{for(const x of String(t).split(/(?<=[.!?])\s+/))if(x)out.add(x);};
 for(const hero of Object.keys(ABILITIES)){const a=starterOf(hero);if(!a)continue;for(const b of tourBeats({hero}))add(b.say);add(awakenReadLine(a.name));for(let at=1;at<STARTER_STEPS;at++)for(let n=at+1;n<=STARTER_STEPS;n++)add(awakenReadLine(a.name,at,n));}
 return [...out];
}
/* The line under the starter cut's last step and on the awakening card's way out: what comes after the cut */
export const restLine=t=>`The rest of “${t.title}” waits on the Library shelf. Finish it to start practising.`;
/* What the next power is and which topic wakes it, for the prologue's victory card and the HUD line after it: {a, topic, lessons, line}
   or null. Reads lessonsToUnlock, as the board does. */
export function nextPowerLine(save){
 const a=[...(ABILITIES[save?.hero]||[])].filter(x=>x.gate>0&&!unlocked(save,x)).sort((x,y)=>x.gate-y.gate)[0];if(!a)return null;
 const r=lessonsToUnlock(save,a),t=firstInMode(save,r);
 const where=t?`learn “${t.title}” (${sname(t.subject)}) at the Library`:`study ${sname(a.subject)} at the Library`;
 return {a,topic:t,lessons:r.lessons|0,line:`Next power: ${a.name}. To wake it, ${where}.`};
}
