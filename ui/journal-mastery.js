/* improve20-k-nov1 #3 (audit3 #17): the Journal's Mastery tab as one row per subject a child can read: the subject's icon, the
   stage they are in, "N topics mastered" and a bar to the hero's next ability in that subject. The bar reads the same inputs
   unlocked() reads (abilityMastery against the gate, the hero level against xpLevel); it never unlocks anything. The old
   percentage grid stays below in a "Details" fold for grown-ups, with stage columns nobody has started left out. */
import {SUBJECTS,CLASSES} from '../game/data.js';
import {ABILITIES} from '../game/abilities.js';
import {abilityMastery,unlocked,xpLevel,elementary} from '../game/math.js';
import {TOPICS,mastered,openGrade} from '../academics/lessons.js';
import {lessonsToUnlock} from '../academics/study-unlock.js';
import {icon,SUBJECT_ICON} from './icons.js';

const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* the stage a child is in for one subject: the grade their Library ladder is open at */
export function subjectStage(save,subject){const g=openGrade(save,subject);if(!g)return 'Every lesson done';return g<=5?`Elementary · Grade ${g}`:g<=8?`Middle School · Grade ${g}`:'High School';}
export const topicsMastered=(save,subject)=>TOPICS.filter(t=>t.subject===subject&&mastered(save,t)).length;
/* the hero's next ability in this subject and how far the subject's ability mastery is toward its gate (0..1), or null */
export function nextAbility(save,subject,hero=save.hero){const own=(ABILITIES[hero]||[]).filter(a=>a.subject===subject);if(!own.length)return {none:true};
 const a=own.filter(a=>!unlocked(save,a)).sort((x,y)=>x.gate-y.gate||xpLevel(x)-xpLevel(y))[0];if(!a)return {all:own.length};
 const have=abilityMastery(save,subject),frac=a.gate>0?Math.max(0,Math.min(1,have/a.gate)):1,lv=Math.max(0,xpLevel(a)-(save.level||1)),n=lessonsToUnlock(save,a);
 return {a,frac,lv,need:xpLevel(a),topics:n.reachable?n.lessons:null};}
function goal(save,subject,x){const sub=SUBJECTS[subject]?.name||subject;
 if(x.none)return `<span class="jm-goal jm-quiet">No ${esc(CLASSES[save.hero]?.name||'hero')} ability uses ${esc(sub)}. It counts for your other heroes.</span>`;
 if(x.all)return `<span class="jm-goal">All ${x.all} ${esc(sub)} abilit${x.all===1?'y is':'ies are'} yours!</span>`;
 const parts=[];if(x.frac<1)parts.push(x.topics?`${x.topics} more topic${x.topics===1?'':'s'}`:`more ${esc(sub)} study`);if(x.lv)parts.push(`hero level ${x.need}`);
 return `<span class="jm-goal">Next: <b>${esc(x.a.name)}</b>${parts.length?` · ${parts.join(' and ')}`:' · ready!'}</span>`;}
export function masteryRowsHTML(save){
 const rows=Object.entries(SUBJECTS).map(([id,v])=>{const n=topicsMastered(save,id),x=nextAbility(save,id),pct=x.all?100:x.none?0:Math.round(x.frac*100);
  return `<li class="jm-row${n?' jm-started':''}" style="--subject-color:${v.color}" data-subject="${id}">${icon(SUBJECT_ICON[id]||'book-open',{size:32})}<div class="jm-text"><span class="jm-top"><strong>${esc(v.name)}</strong><small class="jm-stage">${esc(subjectStage(save,id))}</small></span>
<span class="jm-count"><b>${n}</b> topic${n===1?'':'s'} mastered</span>${x.none?'':`<div class="meter jm-bar" role="progressbar" aria-label="${esc(v.name)} toward the next ability" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><i style="width:${pct}%"></i></div>`}${goal(save,id,x)}</div></li>`;}).join('');
 return `<ul class="jm-rows" aria-label="Your subjects">${rows}</ul>`;}
/* improve20-r10d-nov2 #6 (kid sims nov2 #30: early tabs read as empty walls): while no topic is mastered in any subject, the page opens on one
   friendly line; the rows below still name each subject's next ability */
export const masteryEarlyHTML=save=>Object.keys(SUBJECTS).some(id=>topicsMastered(save,id)>0)?'':'<p class="journal-early">Master your first topic in the Library to fill this page.</p>';
/* the grown-ups' grid: the old table, without stage columns that are empty for every subject */
export function masteryDetailsHTML(save,levelMastery){const S=Object.keys(SUBJECTS),cols=[['ELEM',id=>elementary(save,id)],['MIDDLE',id=>levelMastery(id,0)],['HIGH',id=>levelMastery(id,1)],['COLLEGE',id=>levelMastery(id,2)]].filter(([,f])=>S.some(id=>f(id)>.05));
 const row=(a,b)=>`<div class="journal-row" style="--jm-cols:${cols.length}">${a}${b}</div>`;
 return `<details class="jm-details"><summary>Details for grown-ups: mastery by school stage</summary><div class="jm-grid">${row('<strong>SUBJECT</strong>',cols.map(c=>`<span>${c[0]}</span>`).join('')+'<span>TOTAL</span>')}${Object.entries(SUBJECTS).map(([id,v])=>row(`<span class="journal-subject" style="--subject-color:${v.color}">${esc(v.name)}<small>${esc(v.stat)}</small></span>`,cols.map(c=>`<span>${c[1](id).toFixed(1)}%</span>`).join('')+`<strong title="What your abilities count: lessons and training together">${abilityMastery(save,id).toFixed(1)}%</strong>`)).join('')}</div><p class="subtle">TOTAL is the number abilities count: lessons and Library training together.${cols.length<4?' Stages nobody has started yet are left out.':''}</p></details>`;}
