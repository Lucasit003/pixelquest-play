/* The Grown-ups' Report Card (v2:edu; DIRECTION_REVIEW change 10). A page for parents and teachers built
   only from the save on this device: no server, no account, nothing sent anywhere. It is worded as a
   record of what was learned, never as a target, streak or comparison.

   - Topics mastered by subject and grade, with each topic's curriculum standard.
   - Lessons watched, questions practised and questions retired (answered right twice).
   - The next three lessons, and each unlocked ability with the learning that earned it.
   - A certificate for every finished grade. Print with the browser (print CSS in library.css shows
     only the report).

   Children don't wander in by accident: the Grown-ups button must be held for two seconds. The hold
   is a CSS animation (no JavaScript timer); letting go early cancels it.

   Integrator: settings HTML gets grownupsButtonHTML(); after rendering, wireGrownupsButton(root, save). */
import {TOPICS,POOL,mastered,topicOpen,stageName,rungOf,gradeTopics,grades} from '../academics/lessons.js';
import {ABILITIES} from '../game/abilities.js';
import {SUBJECTS,CLASSES} from '../game/data.js';
import {unlocked,abilityMastery} from '../game/math.js';

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const gradeName=g=>g>=6?`Grade ${g} (Middle School)`:`Grade ${g}`;

/* The numbers behind the page, kept separate so they can be tested. */
export function reportData(save){
 const ans=save.answers||{},subjects=Object.keys(SUBJECTS).filter(id=>TOPICS.some(t=>t.subject===id));
 const bySubject=subjects.map(id=>{
  const ts=TOPICS.filter(t=>t.subject===id),ids=ts.flatMap(t=>POOL[t.id]);
  const done=ts.filter(t=>mastered(save,t));
  return {id,name:SUBJECTS[id].name,mastered:done.map(t=>({id:t.id,title:t.title,grade:t.grade,rung:rungOf(t),stage:stageName(t),standard:t.standard||''})),
   lessons:ts.filter(t=>save.lessons?.[t.id]?.done).length,practised:ids.filter(q=>(ans[q]||0)>0).length,retired:ids.filter(q=>(ans[q]||0)>=2).length,
   grades:grades(id).filter(g=>gradeTopics(id,g).every(t=>mastered(save,t))).map(g=>({grade:g,name:gradeName(g)}))};});
 const next=TOPICS.filter(t=>topicOpen(save,t)&&!mastered(save,t)).sort((a,b)=>rungOf(a)-rungOf(b)).slice(0,3).map(t=>({id:t.id,title:t.title,subject:SUBJECTS[t.subject].name,grade:t.grade}));
 const hero=save.hero,abilities=(ABILITIES[hero]||[]).filter(a=>a.gate>0&&(unlocked(save,a)||save.kept?.includes(a.id))).map(a=>({name:a.name,subject:SUBJECTS[a.subject].name,gate:a.gate,
  earnedBy:TOPICS.filter(t=>t.subject===a.subject&&mastered(save,t)).map(t=>t.title).slice(0,6)}));
 const total=k=>bySubject.reduce((n,s)=>n+(k==='mastered'?s.mastered.length:s[k]),0);
 return {hero:CLASSES[hero]?.name||hero,level:save.level||1,bySubject,next,abilities,totals:{mastered:total('mastered'),lessons:total('lessons'),practised:total('practised'),retired:total('retired')}};
}

export function reportCardHTML(save){
 const d=reportData(save);
 const subj=d.bySubject.map(s=>`<section class="edu-rc-subject"><h3>${esc(s.name)}</h3><p class="edu-rc-line">${s.mastered.length} topic${s.mastered.length===1?'':'s'} mastered · ${s.lessons} lesson${s.lessons===1?'':'s'} watched · ${s.practised} questions practised · ${s.retired} answered right twice</p>${s.mastered.length?`<table><thead><tr><th scope="col">Grade</th><th scope="col">Topic</th><th scope="col">Standard</th></tr></thead><tbody>${s.mastered.map(t=>`<tr><td>${esc(gradeName(t.rung))}</td><td>${esc(t.title)}</td><td>${esc(t.standard)}</td></tr>`).join('')}</tbody></table>`:'<p class="edu-rc-none">No topics mastered here yet.</p>'}</section>`).join('');
 const certs=d.bySubject.flatMap(s=>s.grades.map(g=>`<div class="edu-rc-cert"><span>Certificate</span><strong>${esc(g.name)} ${esc(s.name)}</strong><small>Every topic in this grade was mastered: lesson, quiz, practice and test.</small></div>`)).join('');
 return `<article class="edu-rc" aria-label="Grown-ups' report card">
<header><h2>Learning record</h2><p>${esc(d.hero)} · hero level ${d.level}. Built from this device's save only; nothing is sent anywhere.</p></header>
<section class="edu-rc-totals"><div><b>${d.totals.mastered}</b><span>topics mastered</span></div><div><b>${d.totals.lessons}</b><span>lessons watched</span></div><div><b>${d.totals.practised}</b><span>questions practised</span></div><div><b>${d.totals.retired}</b><span>answered right twice</span></div></section>
<section><h3>Next lessons</h3>${d.next.length?`<ol>${d.next.map(n=>`<li>${esc(n.title)} <small>${esc(n.subject)}, Grade ${n.grade}</small></li>`).join('')}</ol>`:'<p>Every open lesson is mastered.</p>'}</section>
<section><h3>Abilities and the learning that earned them</h3>${d.abilities.length?`<ul>${d.abilities.map(a=>`<li><b>${esc(a.name)}</b>: ${esc(a.subject)}${a.earnedBy.length?` (${a.earnedBy.map(esc).join(', ')})`:''}</li>`).join('')}</ul>`:'<p>No abilities earned through study yet.</p>'}</section>
${subj}${certs?`<section class="edu-rc-certs"><h3>Certificates</h3>${certs}</section>`:''}
<p class="edu-rc-note">Abilities in PixelQuest are unlocked only by mastering topics (plus the hero's level). There are no timers, no penalties and nothing to keep up daily.</p>
</article>`;
}

/* The page: an overlay with Print and Close. */
export function openReportCard(save,doc=globalThis.document){
 if(!doc?.body)return null;
 doc.getElementById('edu-report')?.remove();
 const el=doc.createElement('div');el.id='edu-report';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');el.setAttribute('aria-label',"Grown-ups' report card");
 el.innerHTML=`<div class="edu-rc-bar"><button type="button" class="primary" data-edu-print>Print</button><button type="button" data-edu-rc-close>Close</button></div>${reportCardHTML(save)}`;
 doc.body.append(el);
 el.querySelector('[data-edu-print]').onclick=()=>{try{doc.defaultView?.print?.();}catch{}};
 el.querySelector('[data-edu-rc-close]').onclick=()=>el.remove();
 el.addEventListener('keydown',e=>{if(e.key==='Escape'){e.stopPropagation();el.remove();}});
 el.querySelector('[data-edu-print]').focus?.();
 return el;
}

/* The hold-to-open button: the fill animation runs while it is held; its end opens the report. */
export const grownupsButtonHTML=()=>`<button type="button" id="edu-grownups" class="edu-grownups" aria-describedby="edu-grownups-help">Grown-ups</button><small id="edu-grownups-help" class="subtle">Hold for two seconds to open the learning record.</small>`;
export function wireGrownupsButton(root,save,{onOpen}={}){
 const b=root?.querySelector?.('#edu-grownups');if(!b)return false;
 const start=e=>{e.preventDefault?.();b.classList.add('holding');},stop=()=>b.classList.remove('holding');
 b.addEventListener('pointerdown',start);for(const ev of ['pointerup','pointerleave','pointercancel','blur'])b.addEventListener(ev,stop);
 /* Keyboard: hold Space or Enter the same way. */
 b.addEventListener('keydown',e=>{if((e.key===' '||e.key==='Enter')&&!e.repeat){e.preventDefault();start(e);}});b.addEventListener('keyup',e=>{if(e.key===' '||e.key==='Enter')stop();});
 b.addEventListener('animationend',e=>{if(!b.classList.contains('holding'))return;stop();const el=openReportCard(save,root.ownerDocument);onOpen?.(el);});
 return true;
}
