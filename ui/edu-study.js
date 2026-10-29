import {lessonGradeLabel} from './lesson-labels.js';
/* "Study to unlock" panel (v2:edu), for the world map's bottom bar / Stats screen and anywhere else
   that wants to say what the next abilities need. Data comes from academics/study-unlock.js; this
   file only renders it. Styling lives in dist/ui/library.css under .edu-study.

   Integrator:
     import {studyPanelHTML,mountStudyPanel} from './ui/edu.js';
     el.innerHTML=studyPanelHTML(save,{limit:3});              // static markup, or
     mountStudyPanel(el,save,{limit:3,onOpenLibrary:()=>library(),onOpenLesson:id=>startLesson(id)});
   Buttons carry data-edu-lesson="<topic id>" and data-edu-library; mountStudyPanel wires them. */
import {studyPlan,nextLesson,goalLine,topicStage,placementNudge} from '../academics/study-unlock.js';
import {SUBJECTS} from '../game/data.js';
import {xpFor,xpLevel} from '../game/math.js';
import {nextStep} from '../game/next-step.js';
import {levelById} from '../game/levels.js';
import {ownIconURL} from './icons.js';
import {ICON_NAMES} from './icon-names.js';

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pct=(have,need)=>need>0?Math.max(0,Math.min(100,Math.round(have/need*100))):100;
/* A subject's pack icon (index in ui/icon-names.js, the Shikashi strip), drawn by .edu-ico in library.css. */
export const SUBJECT_ICON_INDEX={math:60,cs:62,science:64,geography:68,history:67,language:69,finance:58};
/* uiicons-oct25: a subject whose strip cell we redrew (ui/icons.js OWN) draws our file at --i:0 */
const subjectIcon=s=>{const own=ownIconURL(ICON_NAMES[SUBJECT_ICON_INDEX[s]??2]);return `<i class="edu-ico" style="--i:${own?0:SUBJECT_ICON_INDEX[s]??2}${own?`;background-image:url(${own})`:''}" aria-hidden="true"></i>`;};
/* "Read to me" on every panel: any [data-edu-read] button reads its text (dist/ui/edu.js wires the clicks). */
export const readButtonHTML=text=>`<button type="button" class="edu-read" data-edu-read="${esc(text)}" aria-label="Read this to me">Read to me</button>`;

export function studyPanelHTML(save,{hero=save.hero,subject=null,limit=3,title='Study to unlock',maxTopics=3}={}){
 const plans=studyPlan(save,{hero,subject,limit});
 if(!plans.length)return `<section class="edu-study" aria-label="${esc(title)}"><h3 class="edu-title">${esc(title)}</h3><p class="edu-empty">Every ability for this hero is unlocked.</p></section>`;
 return `<section class="edu-study" aria-label="${esc(title)}"><h3 class="edu-title">${esc(title)}</h3><ol class="edu-plans">${plans.map(p=>{
  const sub=SUBJECTS[p.ability.subject]||{name:p.ability.subject,color:'#e7c77e'};
  const steps=p.steps.map(s=>{
   if(s.kind==='elementary'){const shown=s.topics.slice(0,maxTopics),more=s.topics.length-shown.length;
    return `<li class="edu-step edu-step-lessons${s.optional?' optional':''}"><span class="edu-step-k">${s.optional?'Lessons that help':'Lessons'}</span><ul>${shown.map(t=>`<li><button type="button" class="edu-topic" data-edu-lesson="${esc(t.id)}"${t.open?'':' disabled'} title="${t.open?'Open this lesson':`Opens when Grade ${t.grade-1} is mastered`}">${esc(t.title)} <small>${esc(lessonGradeLabel(t))}${t.open?'':' · locked'}</small></button></li>`).join('')}${more>0?`<li class="edu-more">and ${more} more</li>`:''}</ul></li>`;}
   if(s.kind==='middle'||s.kind==='high'){const shown=s.topics.slice(0,maxTopics),more=s.topics.length-shown.length;
    return `<li class="edu-step edu-step-lessons${s.optional?' optional':''}"><span class="edu-step-k">${s.optional?'Or ':''}${s.kind==='high'?'High School':'Middle School'} lessons</span><ul>${shown.map(t=>`<li><button type="button" class="edu-topic" data-edu-lesson="${esc(t.id)}"${t.open?'':' disabled'} title="${t.open?'Open this lesson':`Opens when Grade ${t.grade-1} is mastered`}">${esc(t.title)} <small>${esc(lessonGradeLabel(t))} · +${t.gain}%${t.open?'':' · locked'}</small></button></li>`).join('')}${more>0?`<li class="edu-more">and ${more} more</li>`:''}</ul></li>`;}
   if(s.kind==='training')return `<li class="edu-step edu-step-train"><span class="edu-step-k">Training</span> ${s.targets.map(t=>`${esc(t.name)}: about ${t.answersAbout} right answers`).join(', then ')} <button type="button" class="edu-go" data-edu-library>Train in the Library</button></li>`;
   if(s.kind==='level')return `<li class="edu-step edu-step-level"><span class="edu-step-k">Hero level</span> ${s.have} → ${s.need} <small>XP from lessons, training and levels</small></li>`;
   return '';}).join('');
  const m=pct(p.mastery.have,p.mastery.need);
  return `<li class="edu-plan${p.ready?' ready':''}" style="--accent:${sub.color}" data-edu-ability="${esc(p.ability.id)}"><div class="edu-plan-head"><strong>${esc(p.ability.name)}</strong><span class="edu-sub">${esc(sub.name)}</span></div>
<p class="edu-goal">${subjectIcon(p.ability.subject)}<b>${esc(p.goal)}</b></p><div class="edu-meter" role="progressbar" aria-label="${esc(sub.name)}: progress toward ${esc(p.ability.name)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${m}"><i style="width:${m}%"></i></div>
<p class="edu-summary">${esc(p.summary)} ${readButtonHTML(`${p.goal.replace(/\.$/,'')}. ${p.summary}`)}</p>${steps?`<ol class="edu-steps">${steps}</ol>`:''}</li>`;}).join('')}</ol><p class="edu-rule">Abilities need knowledge and hero level. Clearing levels and gold never unlock them.</p></section>`;
}

export function mountStudyPanel(el,save,{onOpenLibrary,onOpenLesson,...opts}={}){
 if(!el)return;el.innerHTML=studyPanelHTML(save,opts);
 el.querySelectorAll('[data-edu-lesson]').forEach(b=>b.onclick=()=>onOpenLesson?onOpenLesson(b.dataset.eduLesson):onOpenLibrary?.());
 el.querySelectorAll('[data-edu-library]').forEach(b=>b.onclick=()=>onOpenLibrary?.());
}

/* Hero XP bar for the Library header, world map or Stats screen. The bar shows progress through the
   current level; the number is what the level-up needs. Styling: .edu-xp in library.css. */
export function xpBarHTML(save){
 const lv=save.level||1,need=xpFor(lv),have=Math.max(0,Math.min(need,+save.xp||0)),p=Math.round(have/need*100);
 return `<div class="edu-xp"><span class="edu-xp-lv" aria-hidden="true">LV ${lv}</span><div class="edu-xp-bar" role="progressbar" aria-label="Hero level ${lv}: experience toward level ${lv+1}" aria-valuemin="0" aria-valuemax="${need}" aria-valuenow="${Math.round(have)}"><i style="width:${p}%"></i></div><span class="edu-xp-num">${Math.round(have)} / ${need} XP</span></div>`;
}

/* The Library's big "Next lesson" card: the one lesson to do now, what it leads to, Start and Read to me.
   For a new hero it is the class's first earnable ability's first topic (study-unlock.js nextLesson).
   At a subject station (`subject`, art director round 3) Start opens that subject's next lesson, never another
   shelf's; when the hero's next unlock is on another shelf, one line says which. */
export function nextLessonHTML(save,{hero=save.hero,subject=null}={}){
 const n=nextLesson(save,{hero,subject}),all=subject?nextLesson(save,{hero}):null;
 /* oct24-polish3 (playtest D3 screenshot 22): this shelf's road and the hero's fastest ability elsewhere read as two orders. The other
    shelf is now its own labelled line, "Fastest next ability: <name>", with the hero level when that is part of the gate. */
 const awayName=all?.ability?SUBJECTS[all.topic.subject]?.name||all.topic.subject:'',awayLv=all?.ability?xpLevel(all.ability):0,awayN=all?.lessons||1;
 const awayK=all&&all.ability&&all.topic.subject!==subject?'Fastest next ability':'',away=awayK?`${all.ability.name}, ${awayN} ${awayName} topic${awayN===1?'':'s'} away${awayLv>(save.level||1)?`, and\u00a0hero\u00a0level\u00a0${awayLv}`:''}.`:'';
 const awayHTML=away?`<b class="edu-away-k">${esc(awayK)}</b> ${esc(away)}`:'';
 /* oct25-tryit P1: when a subject the child has not placed in would reach an ability sooner, that one line replaces the
    "Fastest next ability" line (it is nearer by definition) and offers the subject's Find-your-level check. */
 const nudge=placementNudgeHTML(save,{hero});
 /* oct24-r3 playtest: the line is also a button to that shelf, so a child does not start an off-road lesson by default */
 const go=away?` <button type="button" class="edu-next-go" data-away-subject="${esc(all.topic.subject)}">Go to ${esc(SUBJECTS[all.topic.subject]?.name||all.topic.subject)}</button>`:'';
 if(!n&&nudge)return `<p class="edu-next-away edu-place-nudge-row">${nudge}</p>`;
 if(!n)return away?`<p class="edu-next-away" data-away="${esc(all.topic.subject)}">${awayHTML}${go}</p>`:`<p class="edu-next-away">No unmastered lessons are open in this school stage${subject?' for this subject':''}. Choose another subject or change School stage in Settings when you like, or return to your adventure. ${esc(nextStep(save).text)}</p>`;
 const t=n.topic,sub=SUBJECTS[t.subject]||{name:t.subject,color:'#e7c77e'};
 /* The card steps on through the topic (playtest S2-3): lesson, then quiz, then practice, then the test,
    never re-offering a finished lesson. */
 const g=topicStage(save,t),act={lesson:['Next lesson','data-lesson','Start lesson'],quiz:['Next: the quiz','data-quiz','Take the quiz'],practice:['Next: practice','data-practice',`Practice (${g.practice}/${g.needed})`],test:['Next: the mastery test','data-test','Mastery test']}[g.stage]||['Next lesson','data-lesson','Start lesson'];
 /* The Library agrees with the town strip (game/next-step.js, playtest S4): when the next step is an adventure,
    the card says so and the study step stays offered, but not insisted on. A subject station keeps its own card. */
 const step=subject?null:nextStep(save),lv=step?.target?.kind==='pad'?levelById(step.target.id):null;
 if(lv){act[0]=g.stage==='practice'?`Practice paused: ${lv.name} awaits!`:`${lv.name} awaits!`;}
 const keep=lv?(g.stage==='practice'?'You can keep practising.':'You can keep studying.'):'';
 const say=lv?`${act[0]} ${step.text} ${keep}`:`${act[0]}: ${t.title}. ${n.goal}`;
 return `<section class="edu-next${lv?' edu-next-adventure':''}" style="--accent:${sub.color}" aria-label="${esc(act[0])}" data-stage="${g.stage}" data-next-subject="${esc(t.subject)}"${lv?` data-next-level="${esc(lv.id)}"`:''}>${subjectIcon(t.subject)}<div class="edu-next-text"><span class="edu-next-k">${esc(act[0])}</span>${lv?`<strong>${esc(step.text)}</strong><small>${esc(keep)} <span class="edu-next-title">“${esc(t.title)}”</span> · <span class="edu-nw">${esc(sub.name)}</span> · <span class="edu-nw">${esc(lessonGradeLabel(t))}</span></small>`:`<strong>${esc(t.title)}</strong><small>${esc(sub.name)} · ${esc(lessonGradeLabel(t))}</small>${n.goal?`<span class="edu-next-goal">${esc(n.goal)}</span>`:''}${g.stage==='practice'?`<span class="edu-next-why">${esc(practiceWhy(g.needed))}</span>`:''}`}${nudge?`<span class="edu-next-away edu-place-nudge-row">${nudge}</span>`:away?`<span class="edu-next-away" data-away="${esc(all.topic.subject)}">${awayHTML}${go}</span>`:''}</div><div class="edu-next-actions">${/* the primary button does what the headline says (polish, 19 Oct): go to the adventure */lv?`<button type="button" class="primary" data-go-adventure="${esc(lv.id)}">Go to ${esc(lv.name)}</button>`:''}<button type="button"${lv?'':' class="primary"'} ${act[1]}="${esc(t.id)}">${esc(act[2])}</button>${readButtonHTML(say)}</div></section>`;
}
/* The P1 line: "Nearer: Quick Shot, about 1 Computer Science topic away. [Find your level in Computer Science]", or '' when no
   unplaced subject is nearer (study-unlock.js placementNudge). The button is wired once in main.js (data-find-level). */
export function placementNudgeHTML(save,{hero=save.hero}={}){
 const p=placementNudge(save,{hero});if(!p)return '';const sub=SUBJECTS[p.subject]?.name||p.subject;
 return `<span class="edu-place-nudge"><b class="edu-away-k">Nearer:</b> ${esc(p.ability.name)}, about ${p.lessons} ${esc(sub)} topic${p.lessons===1?'':'s'} away. <button type="button" class="edu-next-go" data-find-level="${esc(p.subject)}">Find your level in ${esc(sub)}</button></span>`;
}
/* Why practice is needed, in one line a child can read (playtest S2-3). The number is the topic's own (owner 29 Oct: 10 on a
   save's first topic, 25 after; lessons.js practiceNeeded); PRACTICE_WHY is the 25 line. */
export const practiceWhy=(n=25)=>`Practice helps your brain keep what you learned: get ${n} different questions right, and the mastery test opens.`;
export const PRACTICE_WHY=practiceWhy(25);

/* ---------- A topic's progress, visible from the first step (playtest m15) ----------
   Four steps that light up as the child does them: Lesson, Quiz, Practice n/25 (n/10 on a first topic, with a bar), Test. The same
   numbers the mastery test gate uses (lessons.js testReady), so what the child sees is what the game checks. */
import {testReady,mastered as isMastered} from '../academics/lessons.js';
import {topicMastery} from '../academics/study-unlock.js';
export function topicProgressHTML(save,t,{compact=false}={}){
 const g=testReady(save,t),m=isMastered(save,t),N=g.needed,p=m?N:g.practice,pc=Math.round(p/N*100);
 const step=(cls,on,label,extra='')=>`<li class="edu-pstep ${cls}${on?' on':''}"><span class="edu-pstep-name">${label}${on?' ✓':''}</span>${extra}</li>`;
 const say=`${t.title}. Lesson ${g.lesson||m?'done':'not done yet'}. Quiz ${g.quiz||m?'passed':'not passed yet'}. Practice ${p} of ${N}. Test ${m?'passed':'not yet'}.`;
 const tm=topicMastery(save,t),tp=Math.round(tm.frac*100);
 /* juice-oct27: one bar for the whole way to mastery above the four steps (study-unlock.js topicMastery) */
 return `<div class="edu-mastery${m?' done':''}" role="progressbar" aria-label="Toward mastery of ${esc(t.title)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${tp}"><span class="edu-mastery-k">${m?'Mastered':'Toward mastery'}</span><span class="edu-mastery-bar" aria-hidden="true"><i style="width:${tp}%"></i></span><span class="edu-mastery-left">${m?'✓':esc(tm.left)}</span></div><ol class="edu-progress${compact?' compact':''}" aria-label="${esc(say)}">${step('lesson',g.lesson||m,'Lesson')}${step('quiz',g.quiz||m,'Quiz')}${step('practice',p>=N,`Practice ${p}/${N}`,`<span class="edu-pbar" aria-hidden="true"><i style="width:${pc}%"></i></span>`)}${step('test',m,'Test')}</ol>`;
}

/* ---------- A right answer deserves a moment (playtest m14) ----------
   Varied praise in short, plain words; the n-th right answer in a lesson gets the n-th line, so there is
   variety without randomness. A pack burst (ui/skin/fx-burst.png) plays once on the answer. */
/* (PRAISE and praise() live in edu-narration.js, so their lines are recorded as clips too.) */
export const burstHTML=()=>'<span class="edu-burst" aria-hidden="true"></span>';
