/* Power gates, the words and the way there (improve20-r12a-nov2; kid sims round 2, docs/playtest/kidsim2-nov2/REPORT.md finding 1:
   0 of 10 fresh runs woke a second ability, and nobody sat a quiz). The gate itself lives beside the star gate in game/levels.js
   (powerGate, powerGateMet, powerShort, powerGateText); this file adds what the gate still asks for, read from the ladder
   (academics/study-unlock.js lessonsToUnlock, xpLevel), and the one learning step that leads there (lesson, quiz, practice or test), so
   the map card, the next goal, the win card and the Library all say the same thing. Read-only: it never unlocks, masters or writes. */
import {LEVELS,levelById,levelFogged,powerShort,powerGateText} from './levels.js';
import {SUBJECTS} from './data.js';
import {xpLevel,unlocked} from './math.js';
import {ABILITIES} from './abilities.js';
import {TOPICS,mastered,topicOpen} from '../academics/lessons.js';
import {lessonsToUnlock,topicStage,topicInSchoolMode,nextLesson} from '../academics/study-unlock.js';
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
export function waitingGate(save){for(const l of LEVELS){if(l.kind!=='level'||l.hidden||l.optional||levelFogged(l))continue;const g=powerShort(save,l.id);if(g)return g;}return null;}
/* everything a locked pad's card needs: {id, name, a, text, wants, step} or null */
export function gateInfo(save,id){const g=powerShort(save,id);if(!g?.a)return null;const w=powerWants(save,g.a);return {id,name:g.level.name,a:g.a,text:powerGateText(g,w),wants:w,step:powerStep(save,g.a)};}
/* the subject the Library leads with: the waiting gate's power first, else the fastest next ability (study-unlock.js nextLesson) */
export function leadSubject(save){const g=waitingGate(save);if(g?.a){const st=powerStep(save,g.a);if(st?.topic)return st.subject;}return nextLesson(save)?.topic?.subject||null;}
/* the next power one mastery step away: a started topic of the next locked ability's road whose quiz, practice or test is next, and
   whose mastery would wake that ability (its road is one topic long). -> {a, step} or null */
export function nearPower(save){const a=[...(ABILITIES[save?.hero]||[])].filter(x=>x.gate>0&&!unlocked(save,x)).sort((x,y)=>x.gate-y.gate)[0];if(!a)return null;
 const w=powerWants(save,a);if(!w||w.topics!==1)return null;const st=powerStep(save,a);if(!st?.topic||st.stage==='lesson'||!save?.lessons?.[st.topic.id]?.done)return null;return {a,step:st,wants:w};}
export {levelById};
/* improve20-r12a-nov2 #2 (kidsim2 finding 1): what a win card leads with when learning matters: the waiting gate's power (its quiz,
   practice or test by name; else "Go to the Library"), or the next power one mastery step away. -> {label, subject, a, why} or null */
export function winLead(save){const g=waitingGate(save);if(g?.a){const st=powerStep(save,g.a);return {label:st?.topic&&st.stage!=='lesson'?st.label:'Go to the Library',subject:st?.subject||g.a.subject,a:g.a,why:'gate',gate:g.level.id};}
 const n=nearPower(save);return n?{label:n.step.label,subject:n.step.subject,a:n.a,why:'near'}:null;}
