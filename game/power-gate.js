/* Power gates, the words and the way there (improve20-r12a-nov2; kid sims round 2, docs/playtest/kidsim2-nov2/REPORT.md finding 1:
   0 of 10 fresh runs woke a second ability, and nobody sat a quiz). The gate itself lives beside the star gate in game/levels.js
   (powerGate, powerGateMet, powerShort, powerGateText); this file adds what the gate still asks for, read from the ladder
   (academics/study-unlock.js lessonsToUnlock, xpLevel), and the one learning step that leads there (lesson, quiz, practice or test), so
   the map card, the next goal, the win card and the Library all say the same thing. Read-only: it never unlocks, masters or writes. */
import {LEVELS,levelById,levelFogged,powerShort,powerGateText,awakeCount} from './levels.js';
import {SUBJECTS} from './data.js';
import {xpLevel,unlocked} from './math.js';
import {ABILITIES} from './abilities.js';
import {TOPICS,mastered,topicOpen,openGrade} from '../academics/lessons.js';
import {lessonsToUnlock,topicStage,topicInSchoolMode,nextLesson,/* improve26-r26b-nov6 #3 */testDue} from '../academics/study-unlock.js';
import {tasterRunId} from '../academics/hs-taster.js';/* improve20-r22b-nov4 #2 */
const sname=id=>SUBJECTS[id]?.name||id;
/* what the ladder still asks for this ability: {topics, subject (its name), subjectId, lvl, lvlOk, reachable} */
export function powerWants(save,a){if(!a)return null;const r=unlocked(save,a)?{lessons:0,reachable:true,topics:[]}:lessonsToUnlock(save,a),lvl=xpLevel(a);
 return {topics:r.lessons|0,subject:sname(a.subject),subjectId:a.subject,lvl,lvlOk:(save?.level||1)>=lvl,reachable:!!r.reachable,road:r.topics||[]};}
/* the one learning step toward an ability: the first topic on its road that is open in the child's school stage (a started topic comes
   first: the road runs in ladder order, so it is the first unmastered), and its stage. -> {topic, stage, label, subject} or null */
export function stepLabel(g){return {lesson:'Start lesson',quiz:'Take the quiz',practice:`Finish practice: ${Math.max(0,(g?.needed|0)-(g?.practice|0))} to go`,test:'Take the mastery test'}[g?.stage]||'Go to the Library';}
export function powerStep(save,a){if(!a)return null;const w=powerWants(save,a);if(!w||w.topics<=0)return null;
 const ts=w.road.map(id=>TOPICS.find(t=>t.id===id)).filter(t=>t&&!mastered(save,t)&&topicInSchoolMode(save,t)&&topicOpen(save,t));
 const started=ts.find(t=>save?.lessons?.[t.id]?.done),t=started||ts[0];
 if(!t)return {topic:null,stage:'library',label:'Go to the Library',subject:a.subject};
 const g=topicStage(save,t);return {topic:t,stage:g.stage,label:stepLabel(g),subject:t.subject,practice:g.practice,needed:g.needed};}
/* the first main-road pad held by a power gate (its road walked, its power still asleep), or null */
/* the first main-road pad held by a power gate (its road walked, its power still asleep), or null. improve20-r13b-nov2 #1: `a` is the power
   that opens it soonest (nextPower below), `rung` the ladder's Nth rung the gate is counted against (game/levels.js powerGateMet) */
export function gateAt(save){for(const l of LEVELS){if(l.kind!=='level'||l.hidden||l.optional||levelFogged(l))continue;const g=powerShort(save,l.id);if(g)return g;}return null;}
export function waitingGate(save){const g=gateAt(save);if(!g)return null;const p=nextPower(save);return {...g,rung:g.a,a:p?.a||g.a};}
/* everything a locked pad's card needs: {id, name, a, text, wants, step} or null */
export function gateInfo(save,id){const g0=powerShort(save,id);if(!g0?.a)return null;const p=nextPower(save),g={...g0,rung:g0.a,a:p?.a||g0.a,have:awakeCount(save)};const w=powerWants(save,g.a);return {id,name:g.level.name,a:g.a,text:powerGateText(g,w),wants:w,step:powerStep(save,g.a)};}
/* the subject the Library leads with: the waiting gate's power first, else the fastest next ability (study-unlock.js nextLesson) */
export function leadSubject(save){const g=waitingGate(save);if(g?.a){const st=powerStep(save,g.a);if(st?.topic)return st.subject;}/* improve26-r26b-nov6 #3 (audit17 #5): a topic whose mastery test is open leads the Library to its subject */{const td=testDue(save);if(td)return td.subject;}if(g?.a){/* improve20-r14a-nov3 #2: a road whose first lessons a placement opens leads with that subject, not the nearest open lesson elsewhere */const p=nextPower(save);if(p?.place&&p.a.id===g.a.id)return p.place;}return nextLesson(save)?.topic?.subject||null;}
/* the next power one mastery step away: a started topic of the next locked ability's road whose quiz, practice or test is next, and
   whose mastery would wake that ability (its road is one topic long). -> {a, step} or null */
export function nearPower(save){const a=nextPower(save)?.a;if(!a)return null;
 const w=powerWants(save,a);if(!w||w.topics!==1)return null;const st=powerStep(save,a);if(!st?.topic||st.stage==='lesson'||!save?.lessons?.[st.topic.id]?.done)return null;return {a,step:st,wants:w};}
export {levelById};
/* improve20-r12a-nov2 #2 (kidsim2 finding 1): what a win card leads with when learning matters: the waiting gate's power (its quiz,
   practice or test by name; else "Go to the Library"), or the next power one mastery step away. -> {label, subject, a, why} or null */
export function winLead(save){const g=waitingGate(save);if(g?.a){const st=powerStep(save,g.a);return {label:st?.topic&&st.stage!=='lesson'?st.label:'Go to the Library',subject:st?.subject||g.a.subject,a:g.a,why:'gate',gate:g.level.id};}
 const n=nearPower(save);return n?{label:n.step.label,subject:n.step.subject,a:n.a,why:'near'}:null;}

/* ---- improve20-r13b-nov2 #1 (audit10 a5 and the v1 note): ONE "next ability" for every card ---------------------------------------
   The Library goal, the next-ability card, the mastery card, the power-gate card, the HUD goal and the Champion card each picked their own
   (lowest gate, smallest mastery gap, the subject on screen), so a level 9 Paladin at the v1 gate was shown Consecration (10 Money topics)
   while Hammer of Light (3 History topics) opened the gate. The rule, read from the ladder (lessonsToUnlock, xpLevel; the Paladin swap is
   already in each ability's gate and lvl):
   - among the hero's locked abilities (gate above 0), the one with the fewest topics still to master wins (a road the lessons cannot finish
     comes last); then the fewest hero levels still missing, then the lower hero level, then the lower gate;
   - at a power gate (gateAt) a tie on topics goes first to the subject the child is working on (a topic under way, workingSubject);
     elsewhere that subject breaks only the ties left after the hero level.
   Pure and read-only: it never unlocks anything (unlocked() decides). -> {a, topics, subject, subjectId, lvl, lvlOk, reachable, road,
   gate (the held pad or null)} or null when every ability is unlocked. */
const RANK=new Map(),STAGE_FIRST={middle:6,high:9};
export function workingSubject(save){let best=null,at=-1;for(const t of TOPICS){const r=save?.lessons?.[t.id];if(!r||mastered(save,t))continue;if(!(r.done||r.at>0||r.reached>0||r.practice>0))continue;const w=+r.at||0;if(w>at){at=w;best=t.subject;}}return best;}
export function powerRank(save,{hero=save?.hero,gate=false}={}){const sv=hero===save?.hero?save:{...save,hero},lv=save?.level||1;
 const key=JSON.stringify([hero,lv,gate,save?.lessons,save?.mastery,save?.placement,save?.kept,save?.schoolMode,save?.schoolGrade,save?.ladder,/* improve20-r22b-nov4 #2 */tasterRunId(),save?.hub?.seen]);if(RANK.has(key))return RANK.get(key);
 const ws=workingSubject(sv),mine=x=>x.subjectId===ws?0:1;/* improve26-r26b-nov6 #2 (audit17 #2: a Grade 10 Ranger who played Math's Quick start was led to Rain of Arrows, 60 topics, while Quick Shot was 1 Coding topic away): the session's held Quick start (improve20-r22b-nov4 #2) no longer reorders the powers; the nearest one leads, an unplaced subject's included (`place`) */
 const out=(ABILITIES[hero]||[]).filter(a=>a.gate>0&&!unlocked(sv,a)).map(a=>{let w=powerWants(sv,a),place=null;
  /* a Middle or High School learner cannot open the lower grades of a subject they have not placed in: that road is counted from the stage's
     first grade (as placementNudge does), and `place` names the subject whose Find-your-level check opens it */
  const first=STAGE_FIRST[sv.schoolMode];if(first&&w.topics>0&&!powerStep(sv,a)?.topic&&openGrade(sv,a.subject)<first){const w2=powerWants({...sv,placement:{...(sv.placement||{}),[a.subject]:first}},a);if(w2.reachable){w={...w2,lvlOk:w.lvlOk};place=a.subject;}}
  return {a,...w,place,short:Math.max(0,w.lvl-lv)};})
  .sort((x,y)=>(y.reachable-x.reachable)||x.topics-y.topics||(gate?mine(x)-mine(y):0)||x.short-y.short||x.lvl-y.lvl||mine(x)-mine(y)||x.a.gate-y.a.gate);
 if(RANK.size>40)RANK.clear();RANK.set(key,out);return out;}
export function nextPower(save,{hero=save?.hero}={}){if(!save)return null;const sv=hero===save.hero?save:{...save,hero},g=gateAt(sv),x=powerRank(sv,{hero,gate:!!g})[0];return x?{...x,gate:g?.level||null}:null;}
/* the helper's words, for every card: "Hammer of Light: 2 more History topics (hero level 3)"; never a "(then N more topics)" tail */
export function powerLine(x){if(!x?.a)return '';const t=x.topics|0,lv=x.lvlOk?'':` (hero level ${x.lvl})`;
 if(!x.reachable)return `${x.a.name}: keep training ${x.subject}${lv}`;if(t>0)return `${x.a.name}: ${t} more ${x.subject} topic${t===1?'':'s'}${lv}${x.place?` (find your level in ${x.subject} first)`:''}`;return x.lvlOk?`${x.a.name}: ready`:`${x.a.name}: reach hero level ${x.lvl}`;}
/* improve20-r22f-nov4 #4 (audit15 plan item 8): a topic mastered toward a next power that needs 3 or more topics gets a one-time cheer (main.js
   playCharge: a toast, the next-power card pulsing once, the existing 'correct' sound): "Ground Slam: 3 of 10 topics!". Shorter roads keep the
   charge line alone. No timer, no streak, nothing lost. c = {name, done, total} -> the line, or null */
export const CHEER_MIN=3;
export const powerCheer=c=>c&&c.name&&(c.total|0)>=CHEER_MIN&&(c.done|0)>0&&(c.done|0)<=(c.total|0)?`${c.name}: ${c.done|0} of ${c.total|0} topics!`:null;
