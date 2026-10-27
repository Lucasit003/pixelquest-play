/* The run layer's screens (docs/design/research/SKYBLOCK_DUNGEONS_PROGRESSION.md): the grade breakdown and the Victory
   Chest row on the result card, the Boss Meter and its target picker on the tier screen, best grades and the recommended
   Delver level on the tier cards, and the Skills page of the journal. HTML strings only; main.js shows them.
   Icons are PixelLab (art/pixellab/run-layer, served from ui/skin/run/); the chest opening is a code effect (a lid pop,
   a burst, the items rising). No spinning reel, no roulette, nothing to buy. */
import {gradeFile,GRADE_STARS,nextGrade} from '../game/grade.js';
import {meterOf,REQ} from '../game/meter.js';
import {delverLevel,classRank,delverTitle,rankTitle,ROLES,RANK_MAX,DELVE_MAX} from '../game/delve.js';
import {SKILLS,SKILL_NAMES,SKILL_TEXT,skillLevels,adventurerLevel,TASKS,taskDone,nameColor,SKILL_MAX} from '../game/skills.js';
import {MATS,ITEM,firstLegendary} from '../game/gear.js';
import {JEWEL} from '../game/jewels.js';
import {gearIcon} from './gear-ui.js';
import {jewelIcon} from './icons.js';
import {CLASSES} from '../game/data.js';
import {tierRecord} from '../game/levels.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const runIcon=(n,sz=32,cls='run-icon')=>`<img class="${cls}" src="ui/skin/run/${n}.png" width="${sz}" height="${sz}" alt="" draggable="false" style="image-rendering:pixelated">`;
const matIcon=m=>`<img class="run-mat" src="ui/skin/gear/mat-${m}.png" width="16" height="16" alt="" style="image-rendering:pixelated">`;
const matName=m=>m==='elite-shard'?'Essence':MATS[m]?.name||m;
export const gradeBadge=(g,sz=32)=>g?`<span class="run-grade" data-grade="${esc(g)}">${runIcon(gradeFile(g),sz,'run-grade-icon')}<strong>${esc(g)}</strong></span>`:'';
const bar=(frac,cls='')=>`<span class="run-bar ${cls}"><span style="width:${Math.round(Math.max(0,Math.min(1,frac))*100)}%"></span></span>`;
const PARTS=[['skill','Skill',100],['explore','Exploration',100],['speed','Speed',100],['bonus','Bonus',10]];
/* The grade, its four parts with one tip, the chests, the meter and the Delver line, for a finished map-level run. The
   card reveals itself in stages (runRevealTick): the grade slams in after the stars, the chests pop one by one, then the
   meter fills and the Delver line lands. A total above 300 is S+ with bonus to spare, so it reads "306 points", never
   "306 / 300". */
export function runResultHTML(run){if(!run)return '';const won=!!run.grade;
 const head=won?`<div class="run-head"><span class="run-total"><small>Adventure score</small><strong>${esc(run.grade)} · ${run.total} points</strong>${/* a first clear has no earlier grade to beat */run.newBest&&run.prevBest?`<em class="run-newbest">New best grade!</em>`:''}</span></div>`:`<div class="run-head"><span class="run-total"><small>Try again when you like</small><strong>Every try counts toward your Delver level.</strong></span></div>`;
 const parts=won?`<div class="run-parts">${PARTS.map(([k,n,max])=>`<div class="run-part" data-part="${k}"><span>${n}</span>${bar(run[k]/max)}<strong>${run[k]}</strong></div>`).join('')}</div>`:'';
 const ng=won?nextGrade(run.total):null;const tips=won?[...run.tips.map(t=>t.text),...(ng&&!run.tips.length?[`${ng.need} more points for ${ng.grade}.`]:[])]:[];
 const tip=tips.length?`<p class="run-tip">${tips.map(esc).join(' ')}</p>`:'';
 /* guide-oct26 (oct26-midgame): the Wooden Chest listed "436 gold", the same gold already shown under Earned, so a child counted it twice;
    it now points at Earned without a second number (game/chests.js still records it; amounts unchanged) */
 const chests=run.chests?.length?`<p class="run-tip">Your victory chests. Everything inside is already yours. Spend Essence at the smith to upgrade gear.</p><div class="run-chests" aria-label="Victory chests">${run.chests.map((c,i)=>`<div class="run-chest" data-chest="${c.key}" data-i="${i}">${runIcon('chest-'+c.key,48,'run-chest-img')}<small>${esc(c.name)}</small><ul class="run-chest-items">${c.items.map(it=>`<li${it.gold?' class="run-chest-earned"':''}>${it.mat?`${matIcon(it.mat)} ${it.n} ${esc(matName(it.mat))}`:it.item?`★ ${esc(ITEM[it.item]?.name||it.item)}`:it.gold?'◆ Your gold (in Earned)':esc(it.note)}</li>`).join('')||'<li>Boss loot</li>'}</ul></div>`).join('')}</div>`:'';
 const m=run.meter;const from=m?.paid?Math.max(0,1-(m.added||0)/(REQ[m.paid.kind]||1)):m?.need?Math.max(0,(m.pts-(m.added||0))/m.need):0,to=m?.paid?1:m?.frac||0;
 const meter=m?.target||m?.paid?`<div class="run-meter run-stage">${runIcon('meter-skull',16,'run-meter-icon')}<span><small>Boss Meter${m.paid?'':m.target?`: ${esc(m.name)}`:''}</small>${m.target||m.paid?`<span class="run-bar run-meter-bar"><span style="width:${Math.round(from*100)}%" data-to="${Math.round(to*100)}%"></span></span>`:''}<em${m.paid?' class="run-paid"':''}>${m.paid?`Full! Guaranteed drop: ${esc(m.paid.name)}`:m.target?`${m.pts} / ${m.need}${m.added?` (+${m.added})`:''}`:''}</em></span></div>`:'';
 const d=run.delve;const delve=d?`<p class="run-delve run-stage">${runIcon('delver-emblem',16)} <span>${d.after.level>d.before.level?`<strong>Delver level ${d.after.level} reached!</strong>`:/* oct24-progress (playtest r3): a fresh Delver read "level 0" after a win; below level 1 the line shows the way to it */d.after.level?`Delver level ${d.after.level}`:`Delver XP ${d.after.into} / ${d.after.need} to level 1`} · +${d.xp+d.bonus} XP${d.bonus?(run.prevBest?' (new best grade bonus)':' (first grade bonus)'):''}${d.rankAfter.level>d.rankBefore.level?` · <span class="run-rank">Class rank ${d.rankAfter.level} reached!</span>`:''}</span></p>`:'';
 const tasks=run.tasks?.length?`<p class="run-tasks run-stage">${runIcon('adventurer-emblem',16)} <span>${run.tasks.length>1?'Tasks done':'Task done'}: ${run.tasks.map(id=>esc((TASKS.find(t=>t.id===id)?.text||id).replace(/\.$/,''))).join(' · ')}</span></p>`:'';
 return `<section class="run-result" data-won="${won}"><div class="run-top">${head}${parts}</div>${tip}${chests}<div class="run-foot">${meter}${delve}${tasks}</div></section>`;}
/* Each frame on the result screen: the chests open one by one after the grade, oldest first. Returns how many opened. */
export const GRADE_AT=1.45,CHEST_AT=2,CHEST_STEP=.6;
export function runResultTick(t,els,onOpen){let n=0;for(const el of els){const i=+el.dataset.i;if(!el.classList.contains('open')&&t>CHEST_AT+CHEST_STEP*i){el.classList.add('open');onOpen?.(el.dataset.chest);}if(el.classList.contains('open'))n++;}return n;}
/* The whole staged reveal (root: the result card). The grade slams in, the chests open, then the meter fills and the
   Delver and task lines land. Returns true once everything is shown; t = Infinity shows it all at once (Skip, reduced
   motion). */
export function runRevealTick(t,root,onOpen){if(!root)return true;const g=root.querySelector('.level-grade');if(g&&!g.classList.contains('on')&&t>GRADE_AT){g.classList.add('on');onOpen?.('grade');}
 const els=[...root.querySelectorAll('.run-chest')],n=runResultTick(t,els,onOpen),after=CHEST_AT+CHEST_STEP*Math.max(0,els.length-1)+.5;
 const stages=[...root.querySelectorAll('.run-stage')];stages.forEach((el,i)=>{if(!el.classList.contains('on')&&t>after+.45*i){el.classList.add('on');const b=el.querySelector('[data-to]');if(b)b.style.width=b.dataset.to;}});
 return n===els.length&&stages.every(el=>el.classList.contains('on'))&&(!g||g.classList.contains('on'));}
/* ---- the tier screen ---- */
export function meterHTML(s,l){const m=meterOf(s,l.id);if(!m.target&&!m.pts)return '';
 return `<div class="run-meter run-meter-pad" data-level="${esc(l.id)}">${runIcon('meter-skull',16,'run-meter-icon')}<span><small>Boss Meter${m.target?`: ${esc(m.name)} · ${m.pts} / ${m.need}`:': nothing left to chase here'}</small>${m.target?bar(m.frac,'run-meter-bar'):''}<em>${m.target?`Every win fills this. When it's full, your pick is guaranteed.`:''}</em></span>${m.targets.length>1?'<button id="meter-pick">Change pick</button>':''}</div>`;}
export function meterPickerHTML(s,l){const m=meterOf(s,l.id),gift=[l.boss,l.duo].filter(Boolean).some(b=>firstLegendary(s,b));
 return `<div class="grid run-meter-picks">${m.targets.map(t=>{const icon=t.kind==='jewel'?jewelIcon(t.id,32):gearIcon(t.id,32);return `<div class="card run-meter-pick ${t.id===m.target?'chosen':''}"><span class="tag">${t.kind==='piece'?'SET PIECE':t.kind==='trick'?'TRICK WEAPON':'JEWEL'}</span><span class="run-pick-name">${icon}<strong>${esc(t.name)}</strong></span><p class="subtle">${REQ[t.kind]} points${t.id===m.target?' · your pick':''}</p><button data-meter="${esc(t.id)}" ${t.id===m.target?'disabled':''}>${t.id===m.target?'Chosen':'Pick this'}</button></div>`;}).join('')}</div><p class="subtle">Your points stay when you change your pick.${gift?' The first Legendary boss gives your missing set piece pick. Otherwise it gives the first missing set piece in this order. If none are missing, you get extra boss materials.':''}</p>`;}
/* Best grade sits beside time stars; neither is a tier gate. */
export function tierRunHTML(s,l,k){const g=tierRecord(s,l.id,k)?.best?.grade;return `<span class="run-best">Best grade: ${g?gradeBadge(g,16):'none yet'}</span>`;}
/* ---- the journal's Skills page ---- */
export function skillsHTML(s){const A=adventurerLevel(s),lv=skillLevels(s),D=delverLevel(s),title=delverTitle(D.level);
 const hero=s.hero,R=classRank(s,hero);
 const row=(icon,name,L,max,into,need,text)=>`<div class="run-skill">${runIcon(icon,32)}<span><strong>${esc(name)} ${L}${L>=max?' (max)':''}</strong>${bar(need?into/need:1)}<small>${need?`${into} / ${need} XP`:'Maxed'}${text?` · ${esc(text)}`:''}</small></span></div>`;
 const groups=[...new Set(TASKS.map(t=>t.group))];
 return `<div class="run-skills"><div class="run-adv">${runIcon('adventurer-emblem',48)}<span><small>Adventurer Level</small><strong style="color:${nameColor(A.level)}">${A.level}</strong>${bar(A.into/A.need)}<small>${A.into} / ${A.need} XP · from skill levels and tasks</small></span></div><div class="run-skill-grid">`+
  row('delver-emblem',`Delver${title?` · ${title}`:''}`,D.level,DELVE_MAX,D.into,D.need,'Every level run counts, wins most.')+
  row('skill-combat',`${CLASSES[hero]?.name||hero} rank (${ROLES[hero]||''})${rankTitle(hero,R.level)?` · ${rankTitle(hero,R.level)}`:''}`,R.level,RANK_MAX,R.into,R.need,'Runs as this hero; the others share a quarter.')+
  SKILLS.map(k=>row('skill-'+k,SKILL_NAMES[k],lv[k].level,SKILL_MAX,lv[k].into,lv[k].need,SKILL_TEXT[k])).join('')+
  `</div><h3>Adventurer tasks</h3><div class="run-task-groups">${groups.map(g=>`<div class="run-task-group"><small>${esc(g)}</small>${TASKS.filter(t=>t.group===g).map(t=>`<p class="run-task ${taskDone(s,t.id)?'done':''}">${taskDone(s,t.id)?'✔':'○'} ${esc(t.text)} <em>+${t.xp}</em></p>`).join('')}</div>`).join('')}</div></div>`;}
export const RUN_CSS=`:where(.run-result){display:flex;flex-direction:column;gap:6px;margin:6px 0;text-align:left}:where(.run-head,.run-adv,.run-skill,.run-meter){display:flex;align-items:center;gap:10px}
:where(.run-total,.run-adv>span,.run-skill>span,.run-meter>span){display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}:where(.run-grade){display:inline-flex;align-items:center;gap:4px;vertical-align:middle}
.run-result .run-total strong,.run-grade strong{color:#e3b85a}.run-newbest{color:#7fd36b;font-style:normal}
:where(.run-parts){display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 14px}:where(.run-part){display:grid;grid-template-columns:84px 1fr 30px;align-items:center;gap:6px}
.run-bar{display:block;height:8px;background:#2a2230;border:1px solid #5b4a3a;border-radius:2px;overflow:hidden;min-width:60px}.run-bar>span{display:block;height:100%;background:linear-gradient(#f3d98a,#c98a2e)}
.run-meter-bar>span{background:linear-gradient(#ff8a7a,#c0392b)}.run-tip{margin:0;color:#cfc3a8;font-size:.9em}
:where(.run-chests){display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:4px 0}:where(.run-chest){display:flex;flex-direction:column;align-items:center;width:96px;position:relative}
.run-chest .run-chest-img{width:48px;height:48px;opacity:.55;filter:grayscale(.6)}.run-chest.open .run-chest-img{opacity:1;filter:none;animation:run-pop .45s ease-out}
.run-chest::before{content:"";position:absolute;top:-6px;width:60px;height:60px;background:url(ui/skin/pl-icons/victory-sunburst.png) center/contain no-repeat;opacity:0;pointer-events:none}
.run-chest.open::before{animation:run-burst .9s ease-out}.run-chest-items{list-style:none;margin:2px 0 0;padding:0;font-size:.8em;text-align:center;visibility:hidden}.run-chest.open .run-chest-items{visibility:visible;animation:run-rise .5s ease-out}
@keyframes run-pop{0%{transform:scale(1)}35%{transform:scale(1.25) translateY(-4px)}100%{transform:scale(1)}}@keyframes run-burst{0%{opacity:0;transform:scale(.4)}30%{opacity:.9}100%{opacity:0;transform:scale(1.4)}}@keyframes run-rise{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){.run-chest.open .run-chest-img,.run-chest.open::before,.run-chest.open .run-chest-items{animation:none}}
.run-skill-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:10px 24px}.run-task-groups{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:6px 24px}.run-task-group>small{color:#e3b85a;letter-spacing:1px;text-transform:uppercase}.run-task{margin:2px 0}.run-adv>span>strong{font-size:36px;line-height:1;text-shadow:2px 2px 0 #000}.run-adv{padding:6px 10px;background:#00000026;border:1px solid #e3b85a33;border-radius:4px}.run-task.done{color:#7fd36b}.run-task em{color:#e3b85a;font-style:normal;font-size:.85em}:where(.run-skills){display:flex;flex-direction:column;gap:8px}:where(.run-meter-picks){margin-top:8px}.grid.run-meter-picks{grid-template-columns:repeat(auto-fit,minmax(190px,1fr))}.run-meter-pick.chosen{outline:2px solid #e3b85a}.run-meter-pick>.tag{display:block;margin-bottom:4px}.run-pick-name{display:flex;align-items:center;gap:8px;margin:2px 0}.run-pick-name>*{flex:none}
@media (max-width:560px){:where(.run-parts){grid-template-columns:1fr}}
dialog[data-view=result] #modal-content{overflow-y:auto;scroll-behavior:smooth}
dialog[data-view=result] .run-result{margin:6px 0 0;padding-top:6px;border-top:1px solid #e3b85a33;gap:6px}
.run-top{display:grid;grid-template-columns:minmax(150px,190px) 1fr;gap:6px 16px;align-items:center}.run-top .run-total strong{font-size:18px;line-height:1.1}
.run-foot{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:4px 16px;align-items:center}.run-foot>p{margin:0;display:flex;align-items:center;gap:6px}.run-foot img{flex:none}
.run-chests{min-height:96px;gap:6px!important}dialog[data-view=result] .run-chest{width:118px}.run-chest small{color:#f1e6cc;white-space:nowrap;font-size:16px}dialog[data-view=result] .run-chest-items{line-height:1.15;font-size:16px;color:#ddcfae}.run-chest-items li{display:flex;align-items:center;justify-content:center;gap:3px;white-space:normal;overflow-wrap:anywhere;max-width:100%}.run-chest-items img{width:16px;height:16px}
.run-chest.open .run-chest-img{filter:drop-shadow(0 0 5px #ffd97acc)}.run-chest[data-chest=crystal].open .run-chest-img{filter:drop-shadow(0 0 6px #8fe0ffcc)}.run-chest[data-chest=star].open .run-chest-img{filter:drop-shadow(0 0 8px #ffe066)}
.level-starline{display:flex;align-items:center;justify-content:center;gap:16px}
.level-grade{opacity:0;transform:scale(2.4)}.level-grade.on{animation:run-slam .4s cubic-bezier(.2,1.5,.45,1) forwards}
.level-grade .run-grade{gap:6px}.level-grade .run-grade strong{font-size:30px;line-height:1;text-shadow:2px 2px 0 #000}.level-grade .run-grade:is([data-grade="S+"],[data-grade=S]) strong{color:#ffe066}
@keyframes run-slam{0%{opacity:0;transform:scale(2.4) rotate(-8deg)}60%{opacity:1;transform:scale(.92) rotate(2deg)}100%{opacity:1;transform:none}}
.run-paid{color:#ffe066;font-style:normal}.run-stage{opacity:0;transform:translateY(5px);transition:opacity .3s ease-out,transform .3s ease-out}.run-stage.on{opacity:1;transform:none}.run-meter-bar>span{transition:width .9s cubic-bezier(.2,.8,.3,1)}
dialog[data-view=result] .level-result>.modal-actions{position:static;margin:0;padding:8px;background:none}
.result-more{position:static;transform:none;padding:2px 12px!important;min-height:0!important;font-size:12px!important;border-radius:10px;background:#2a2f5c!important;color:#f1e6cc;border:1px solid #e3b85a88!important;animation:run-nudge 1.4s ease-in-out infinite;display:none}
dialog[data-view=result].has-more .result-more{display:block}#result-skip{display:none}dialog[data-view=result].revealing #result-skip{display:inline-flex}
@keyframes run-nudge{50%{transform:translate(-50%,3px)}}
dialog[data-view=seal] .seal-q{text-transform:none;letter-spacing:0;font-size:20px;line-height:1.25;margin:6px 0 8px}dialog[data-view=seal] #seal-form{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px}dialog[data-view=seal] #seal-form .modal-actions{margin:0 0 0 auto}dialog[data-view=seal] #seal-answer{flex:1 1 220px;font-size:20px;min-width:min(260px,100%)}dialog[data-view=seal] .run-tip{font-size:16px;line-height:1.3;color:#ddcfae;margin:4px 0}.seal-runes{display:flex;gap:8px;margin:4px 0}.seal-runes span{width:18px;height:18px;transform:rotate(45deg);border:2px solid #8fd0ff88;background:#1a2440}.seal-runes span.lit{background:#8fd0ff;box-shadow:0 0 8px #8fd0ff}dialog[data-view=seal] #quiz-pic{display:block;width:min(100%,480px);height:auto;margin:4px auto 8px}dialog[data-view=seal] .question-text-card{margin:4px 0 8px}
@media (max-height:440px){dialog[data-view=seal] #quiz-pic{width:min(100%,480px);max-width:100%;height:auto;margin:2px auto 4px}dialog[data-view=seal] .seal-q{font-size:18px;margin:2px 0 4px}}
@media (max-width:700px),(max-height:440px){.run-top{grid-template-columns:1fr}.run-chests{min-height:0}.run-chest{width:96px}.level-grade .run-grade strong{font-size:22px}}
@media (prefers-reduced-motion:reduce){.level-grade{opacity:1;transform:none}.level-grade.on,.result-more{animation:none}.run-stage{opacity:1;transform:none;transition:none}.run-meter-bar>span{transition:none}}`;
export {GRADE_STARS};
