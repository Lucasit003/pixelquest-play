/* Library first (libraryfirst-nov1, academics/starter-lesson.js): Archivist Aldous's short tour, the Library's "wake up your first power"
   card and the prologue victory card's "Next power" line. Read-only HTML; main.js shows and wires it. Existing art only: Aldous's bust
   (ui/portraits/archivist.png, the dialogue box's), the subject and step icons from the UI strip and the ability icons (ui/icons.js).
   Styling: ui/library.css, "Library first". One line per beat, in kid words; "Read to me" reads it. */
import {SUBJECTS} from '../game/data.js';
import {starterOf} from '../academics/awakening.js';
import {tourBeats,powersBoard,starterTopic,starterCut,cutFor,awakenReadLine} from '../academics/starter-lesson.js';
import {icon,abilityIcon,SUBJECT_ICON} from './icons.js';
import {readButtonHTML} from './edu-study.js';
import {lessonGradeLabel} from './lesson-labels.js';

const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sub=id=>SUBJECTS[id]||{name:id,color:'#e7c77e'};
const BUST=new URL('./portraits/archivist.png',import.meta.url).href;
/* the four steps of mastering a topic, as the Library names them (Lesson → Quiz → Practice → Mastery test) */
const STEPS=[['book-open','Lesson'],['scroll','Quiz'],['strength','Practice'],['key','Test']];

function show(save,beat){
 const hero=save.hero;
 if(beat.id==='books'){const mine=starterOf(hero)?.subject;return `<ul class="lib-tour-books" aria-label="The Library’s subjects">${Object.entries(SUBJECTS).map(([id,v])=>`<li class="${id===mine?'mine':''}" style="--accent:${v.color}">${icon(SUBJECT_ICON[id]||'book-blue',{size:32})}<span>${esc(v.name)}</span></li>`).join('')}</ul>`;}
 if(beat.id==='practice')return `<ol class="lib-tour-steps" aria-label="How a topic is mastered">${STEPS.map(([ic,name],i)=>`<li${i===2?' class="grow"':''}>${icon(ic,{size:32})}<span>${name}</span></li>`).join('')}</ol>`;
 if(beat.id==='powers'){const rows=powersBoard(save),more=Math.max(0,8-rows.length);
  return `<ol class="lib-powers" aria-label="Your powers">${rows.map(r=>`<li class="lib-power lib-power-${r.state}" style="--accent:${sub(r.subject).color}" data-ability="${esc(r.a.id)}"${/* improve20-r20i-nov4 #8 */r.state==='awake'?'':` role="button" tabindex="0" data-power-tap="${r.state}" data-need="${esc(`${r.a.name}: ${r.line}.`)}"`}><span class="lib-power-ico">${abilityIcon(r.a,hero,48)}</span><b>${esc(r.a.name)}</b><small>${esc(r.line)}</small><em>${r.state==='glow'?'First!':r.state==='awake'?'Awake':`${esc(sub(r.subject).name)}`}</em></li>`).join('')}</ol><p class="lib-power-need" data-power-need role="status" aria-live="polite"></p>${more?`<p class="lib-powers-more">…and ${more} more powers to find.</p>`:''}`;}
 const a=starterOf(hero),st=starterTopic(save),t=st?.topic;
 return `<div class="lib-tour-first" style="--accent:${sub(a?.subject).color}"><span class="lib-power-ico">${a?abilityIcon(a,hero,64):''}</span><div><b>${esc(a?.name||'')}</b><small>Your first power</small>${t?`<span>Short lesson: “${esc(t.title)}” · ${esc(sub(t.subject).name)}</span>`:''}</div></div>`;
}
/* Beat i of the tour: Aldous's line, the thing he shows, and the buttons (Skip / Next, then "Start the lesson" on the last). */
export function tourHTML(save,i=0){
 const beats=tourBeats(save),k=Math.max(0,Math.min(beats.length-1,i)),b=beats[k],last=k===beats.length-1;
 return `<div class="lib-tour" data-beat="${b.id}" data-i="${k}"><div class="lib-tour-talk"><span class="lib-tour-bust"><img src="${BUST}" alt="" draggable="false"></span><p class="lib-tour-line"><b>Archivist Aldous</b><span>${esc(b.say)}</span></p></div>`+
  `<div class="lib-tour-show">${show(save,b)}</div><div class="lib-tour-foot"><ol class="lib-tour-dots" aria-label="Step ${k+1} of ${beats.length}">${beats.map((_,j)=>`<li class="${j===k?'on':j<k?'done':''}"></li>`).join('')}</ol>`+
  `<div class="modal-actions lib-tour-actions">${last?'':'<button type="button" class="ghost" data-tour-skip>Skip</button>'}${readButtonHTML(b.say)}${last?'<button type="button" class="primary" data-tour-start>Start the lesson</button>':'<button type="button" class="primary" data-tour-next>Next</button>'}</div></div></div>`;
}
/* The Library's top card while the awakening is on offer: the power, its short lesson, Start (or Keep going), and the tour again. */
export function awakenCardHTML(save){
 const a=starterOf(save.hero),st=starterTopic(save);if(!a||!st)return '';const t=st.topic,s=sub(t.subject),at=save.lessons?.[t.id]?.at|0,n=cutFor(save,t.id)||starterCut(t);
 const going=at>0&&n&&at<n,line=awakenReadLine(a.name,going?at:0,n).replace(/^Wake up [^.]*\. /,'');
 return `<section class="edu-next lib-awaken" style="--accent:${s.color}" data-awaken="${esc(t.id)}" aria-label="Wake up your first power"><span class="lib-power-ico">${abilityIcon(a,save.hero,48)}</span><div class="edu-next-text"><span class="edu-next-k">Your first power</span><strong>Wake up ${esc(a.name)}</strong><small>“${esc(t.title)}” · <span class="edu-nw">${esc(s.name)}</span> · <span class="edu-nw">${esc(lessonGradeLabel(t))}</span></small><span class="edu-next-goal">${esc(line)}</span></div>`+
  `<div class="edu-next-actions"><button type="button" class="primary" data-awaken-start>${going?'Keep going':'Start the lesson'}</button><button type="button" class="ghost" data-tour-replay>Show me around</button>${readButtonHTML(awakenReadLine(a.name,going?at:0,n))}</div></section>`;
}
/* "Next power" on the prologue's victory card (and anywhere the next power is named): its icon, name and the topic that wakes it. */
export function nextPowerHTML(np,hero){
 if(!np)return '';const s=sub(np.a.subject);
 return `<p class="level-record level-nextpower" style="--accent:${s.color}" data-next-power="${esc(np.a.id)}">${abilityIcon(np.a,hero,32)}<span><small>Next power</small><strong>${esc(np.a.name)}</strong><em>${np.topic?`Learn “${esc(np.topic.title)}” (${esc(s.name)}) at the Library`:`Study ${esc(s.name)} at the Library`}</em></span></p>`;
}
