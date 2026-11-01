/* The run layer's screens (docs/design/research/SKYBLOCK_DUNGEONS_PROGRESSION.md): the grade breakdown and the Victory
   Chest row on the result card, the Boss Meter and its target picker on the tier screen, best grades and the recommended
   Delver level on the tier cards, and the Skills page of the journal. HTML strings only; main.js shows them.
   Icons are PixelLab (art/pixellab/run-layer, served from ui/skin/run/); the chest opening is a code effect (a lid pop,
   a burst, the items rising). No spinning reel, no roulette, nothing to buy. */
import {gradeFile,GRADE_STARS,nextGrade} from '../game/grade.js';
import {meterOf,REQ} from '../game/meter.js';
import {delverLevel,classRank,delverTitle,RANK_TITLES,RANK_MAX,DELVE_MAX} from '../game/delve.js';
import {xpFor} from '../game/math.js';
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
/* Which of the side counters went up on this run (Delver level, class rank, Adventurer level). */
export const levelUps=run=>{const d=run?.delve,a=run?.adv;return {delver:!!d&&d.after?.level>d.before?.level,rank:!!d&&d.rankAfter?.level>d.rankBefore?.level,adventurer:!!a&&a.after>a.before};};
/* improve20-b-oct31 #9: early (before the second chapter is open) shows only what this run changed: the four-part breakdown and a
   Boss Meter that gained nothing stay out; the grade, the chests and any level-up still show */
/* improve20-j-nov1 #1 (audit3 #10: the chests and the Delver and class-rank level-ups sat under Details, which most children never press):
   the main result card carries a compact chest row after the stars, each chest opening in two short beats (a shake, then the lid pops and
   its items show; resultChestTick), and a Delver or class-rank level-up gets its own banner line like the hero's. Tap or any key skips
   the beats; reduced motion shows them open and still. The Details breakdown (card:true) no longer repeats either. Display only. */
const chestItem=it=>it.mat?`${matIcon(it.mat)}<b>${it.n}</b><em> ${esc(matName(it.mat))}</em>`:it.item?`★<em> ${esc(ITEM[it.item]?.name||it.item)}</em>`:it.gold?'':esc(it.note);
/* improve20-y-nov1 #2 (lane J): on desktop the chest art was 36 px with 14 px words (about 20 px of drawn chest); it is drawn 1:1 at 48 px now,
   its name and items at 16 px. fitResult (main.js) still keeps every line clear of the sticky NEXT GOAL. Phones keep the compact row. */
export function resultChestsHTML(run){const c=run?.grade&&run.chests;if(!c?.length)return '';
 return `<div class="result-chests" role="group" aria-label="Victory chests">${c.map((x,i)=>`<div class="result-chest" data-chest="${esc(x.key)}" data-i="${i}" aria-label="${esc(x.name)}: ${esc(x.items.map(it=>it.mat?`${it.n} ${matName(it.mat)}`:it.item?ITEM[it.item]?.name||it.item:it.gold?'your gold':it.note).join(', '))}">${runIcon('chest-'+x.key,48,'result-chest-img')}<span class="result-chest-text"><small>${esc(x.name)}</small><span class="result-chest-items">${x.items.map(chestItem).filter(Boolean).map(h=>`<span>${h}</span>`).join('')||`<span>${x.items.some(it=>it.gold)?'Your gold':'Boss loot'}</span>`}</span></span></div>`).join('')}</div>`;}
export function resultUpsHTML(run,cls){const d=run?.delve,up=levelUps(run);if(!d||!(up.delver||up.rank))return '';
 const text=[up.delver?`<span>Delver level ${d.after.level}</span>`:'',up.rank?`<span>${esc(cls)} rank ${d.rankAfter.level}</span>`:''].filter(Boolean).join('<i class="level-ups-sep"> · </i>');
 return `<p class="level-record level-levelup level-ups"${up.delver?` data-delver="${d.after.level}"`:''}${up.rank?` data-rank="${d.rankAfter.level}"`:''}>${runIcon(up.delver?'delver-emblem':'skill-combat',32,'levelup-emblem')}<span><small>Level up!</small><strong>${text}</strong></span></p>`;}
/* Each frame: chest i shakes at RC_AT + RC_STEP*i and opens RC_BEAT later. t = Infinity opens all (skip, reduced motion). Returns true once all are open. */
export const RC_AT=1.5,RC_STEP=.55,RC_BEAT=.25;
export function resultChestTick(t,root,onOpen){const els=[...(root?.querySelectorAll?.('.result-chest')||[])];for(const el of els){const at=RC_AT+RC_STEP*(+el.dataset.i||0);if(el.classList.contains('open'))continue;
  if(t>=at+RC_BEAT){el.classList.remove('shake');el.classList.add('open');if(t<1e3)onOpen?.(el.dataset.chest);}else if(t>=at)el.classList.add('shake');}
 return els.every(el=>el.classList.contains('open'));}
export function runResultHTML(run,{early=false,card=false}={}){if(!run)return '';const won=!!run.grade;
 const head=won?`<div class="run-head"><span class="run-total"><small>Adventure score</small><strong>${esc(run.grade)} · ${run.total} points</strong>${/* a first clear has no earlier grade to beat */run.newBest&&run.prevBest?`<em class="run-newbest">New best grade!</em>`:''}</span></div>`:`<div class="run-head"><span class="run-total"><small>Try again when you like</small><strong>Every try counts. You keep what you earned.</strong></span></div>`;
 const parts=won&&!early?`<div class="run-parts">${PARTS.map(([k,n,max])=>`<div class="run-part" data-part="${k}"><span>${n}</span>${bar(run[k]/max)}<strong>${run[k]}</strong></div>`).join('')}</div>`:'';
 const ng=won?nextGrade(run.total):null;const tips=won?[...run.tips.map(t=>t.text),...(ng&&!run.tips.length?[`${ng.need} more points for ${ng.grade}.`]:[])]:[];
 const tip=tips.length?`<p class="run-tip">${tips.map(esc).join(' ')}</p>`:'';
 /* guide-oct26 (oct26-midgame): the Wooden Chest listed "436 gold", the same gold already shown under Earned, so a child counted it twice;
    it now points at Earned without a second number (game/chests.js still records it; amounts unchanged) */
 const chests=!card&&run.chests?.length?`<p class="run-tip">Your victory chests: all of it is yours. Spend Essence at the smith.</p><div class="run-chests" aria-label="Victory chests">${run.chests.map((c,i)=>`<div class="run-chest" data-chest="${c.key}" data-i="${i}">${runIcon('chest-'+c.key,48,'run-chest-img')}<small>${esc(c.name)}</small><ul class="run-chest-items">${c.items.map(it=>`<li${it.gold?' class="run-chest-earned"':''}>${it.mat?`${matIcon(it.mat)} ${it.n} ${esc(matName(it.mat))}`:it.item?`★<em> ${esc(ITEM[it.item]?.name||it.item)}</em>`:it.gold?'◆ Your gold (already in your purse)':esc(it.note)}</li>`).join('')||'<li>Boss loot</li>'}</ul></div>`).join('')}</div>`:'';
 const m=run.meter;const from=m?.paid?Math.max(0,1-(m.added||0)/(REQ[m.paid.kind]||1)):m?.need?Math.max(0,(m.pts-(m.added||0))/m.need):0,to=m?.paid?1:m?.frac||0;
 const meter=(m?.target||m?.paid)&&!(early&&!m.paid&&!m.added)?`<div class="run-meter run-stage">${runIcon('meter-skull',16,'run-meter-icon')}<span><small>Boss Meter${m.paid?'':m.target?`: ${esc(m.name)}`:''}</small>${m.target||m.paid?`<span class="run-bar run-meter-bar"><span style="width:${Math.round(from*100)}%" data-to="${Math.round(to*100)}%"></span></span>`:''}<em${m.paid?' class="run-paid"':''}>${m.paid?`Full! Guaranteed drop: ${esc(m.paid.name)}`:m.target?`${m.pts} / ${m.need}${m.added?` (+${m.added})`:''}`:''}</em></span></div>`:'';
 /* balance-oct26 (owner: too many level counters for a 12-year-old): the Delver line (with a class rank inside it) and the
    Adventurer task line show only when one of them levels up; the Journal's Skills page keeps every number. Nothing saved changes. */
 const d=run.delve,up=levelUps(run);const delve=!card&&d&&(up.delver||up.rank)?`<p class="run-delve run-stage">${runIcon('delver-emblem',16)} <span>${d.after.level>d.before.level?`<strong>Delver level ${d.after.level} reached!</strong>`:/* oct24-progress (playtest r3): a fresh Delver read "level 0" after a win; below level 1 the line shows the way to it */d.after.level?`Delver level ${d.after.level}`:`Delver XP ${d.after.into} / ${d.after.need} to level 1`} · +${d.xp+d.bonus} XP${d.bonus?(run.prevBest?' (new best grade bonus)':' (first grade bonus)'):''}${d.rankAfter.level>d.rankBefore.level?` · <span class="run-rank">Class rank ${d.rankAfter.level} reached!</span>`:''}</span></p>`:'';
 const tasks=up.adventurer?`<p class="run-tasks run-stage">${runIcon('adventurer-emblem',16)} <span><strong>Adventurer level ${run.adv.after} reached!</strong>${run.tasks?.length?` ${run.tasks.length>1?'Tasks done':'Task done'}: ${run.tasks.map(id=>esc((TASKS.find(t=>t.id===id)?.text||id).replace(/\.$/,''))).join(' · ')}`:''}</span></p>`:'';
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
/* improve20-h-nov1 (audit2 #11: nine different levels on one page, "Delver" beside "Delving", "Warrior rank (Berserk)" and a Rogue
   rank reading "(Archer)"): the page leads with two numbers, the hero level (what abilities ask for) and the one Adventurer level
   (every counter rolls up into it); the Delver level, the class rank and the skills wait under Details. The Delving skill is
   Delver XP / 5 (game/skills.js), so it is folded into the Delver row instead of sitting beside it as a second near-identical
   word, and the task group of the same name reads "Level runs". A class rank is named after its own class only. Display only:
   every save field and every XP rule is unchanged. */
const RANK_NAME=L=>{let t='';for(const [at,n] of Object.entries(RANK_TITLES))if(L>=+at)t=n;return t;};
export const TASK_GROUP_LABEL={Delving:'Level runs'};
export function skillsHTML(s){const A=adventurerLevel(s),lv=skillLevels(s),D=delverLevel(s),title=delverTitle(D.level);
 const hero=s.hero,R=classRank(s,hero),cls=CLASSES[hero]?.name||hero,rank=RANK_NAME(R.level),L=Math.max(1,s.level|0),need=xpFor(L),into=Math.max(0,+s.xp||0);
 const row=(icon,name,L,max,into,need,text,tag='')=>`<div class="run-skill">${runIcon(icon,32)}<span><strong>${esc(name)} ${L}${L>=max?' (max)':''}${tag?` <em class="run-skill-tag">${esc(tag)}</em>`:''}</strong>${bar(need?into/need:1)}<small>${need?`${into} / ${need} XP`:'Maxed'}${text?` · ${esc(text)}`:''}</small></span></div>`;
 const groups=[...new Set(TASKS.map(t=>t.group))],others=SKILLS.filter(k=>k!=='delving'),dv=lv.delving.level*10;
 return `<div class="run-skills"><div class="run-lead"><div class="run-adv run-hero-level"><img class="run-icon" src="ui/skin/pl-icons/level-up-emblem.png" width="48" height="48" alt="" draggable="false" style="image-rendering:pixelated"><span><small>Hero level</small><strong>${L}</strong>${bar(into/need)}<small>${into} / ${need} XP<span class="run-why"> · each ability needs a hero level and its topics</span></small></span></div>`+
  `<div class="run-adv">${runIcon('adventurer-emblem',48)}<span><small>Adventurer Level</small><strong style="color:${nameColor(A.level)}">${A.level}</strong>${bar(A.into/A.need)}<small>${A.into} / ${A.need} XP<span class="run-why"> · from the skills under Details and your tasks</span></small></span></div></div>`+
  `<details class="run-more"><summary>Details: Delver level, ${esc(cls)} rank and ${others.length} skills</summary><div class="run-skill-grid">`+
  row('delver-emblem','Delver level',D.level,DELVE_MAX,D.into,D.need,`Every level run counts, wins most.${dv?` Worth ${dv} Adventurer XP so far.`:''}`,title&&title!=='Delver'?title:'')+
  row('skill-combat',`${cls} rank`,R.level,RANK_MAX,R.into,R.need,`Runs as the ${cls}; your other heroes share a quarter.`,rank)+
  others.map(k=>row('skill-'+k,SKILL_NAMES[k],lv[k].level,SKILL_MAX,lv[k].into,lv[k].need,SKILL_TEXT[k])).join('')+
  `</div></details><h3>Adventurer tasks</h3><div class="run-task-groups">${groups.map(g=>`<div class="run-task-group"><small>${esc(TASK_GROUP_LABEL[g]||g)}</small>${TASKS.filter(t=>t.group===g).map(t=>`<p class="run-task ${taskDone(s,t.id)?'done':''}">${taskDone(s,t.id)?'✔':'○'} ${esc(t.text)} <em>+${t.xp}</em></p>`).join('')}</div>`).join('')}</div></div>`;}
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
/* improve20-h-nov1: the Skills page leads with the hero level and the Adventurer level side by side; the rest folds under Details */
.run-lead{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:8px 16px}.run-hero-level>span>strong{color:#ffe9a8}
.run-more{margin:0}.run-more>summary{cursor:pointer;min-height:40px;display:flex;align-items:center;gap:8px;font-weight:700;color:#e3b85a;list-style:none}.run-more>summary::-webkit-details-marker{display:none}
.run-more>summary::before{content:'▸'}.run-more[open]>summary::before{content:'▾'}.run-more[open]>summary{margin-bottom:6px}.run-skill-tag{font-style:normal;font-weight:400;color:#e3b85a;font-size:.85em}
html.m-mode .run-lead .run-adv>span>strong{font-size:26px}html.m-mode .run-lead .run-adv{padding:4px 8px}html.m-mode .run-lead .run-icon{width:36px;height:36px}html.m-mode .run-lead .run-why{display:none}
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
.result-chests{display:flex;flex-wrap:wrap;justify-content:center;gap:6px 10px;margin:4px 0 2px}.result-chest{display:flex;align-items:center;gap:6px;padding:1px 8px 1px 3px;max-width:290px!important;border:1px solid #e3b85a44;border-radius:4px;background:#00000026;position:relative;max-width:100%}
.result-chest-img{flex:none;width:48px;height:48px;margin:-4px 0;opacity:.6;filter:grayscale(.6)}.result-chest.shake .result-chest-img{animation:rc-shake .25s linear}.result-chest.open .result-chest-img{opacity:1;filter:drop-shadow(0 0 5px #ffd97acc);animation:run-pop .4s ease-out}
.result-chest::before{content:"";position:absolute;left:-8px;top:50%;width:68px;height:68px;margin-top:-34px;background:url(ui/skin/pl-icons/victory-sunburst.png) center/contain no-repeat;opacity:0;pointer-events:none}.result-chest.open::before{animation:run-burst .8s ease-out}
.result-chest-text{display:flex;flex-direction:column;line-height:1.15;text-align:left;min-width:0}.result-chest-text>small{color:#f1e6cc;font-size:16px;white-space:nowrap}.result-chest-items{display:flex;flex-wrap:wrap;gap:0 8px;font-size:16px;color:#ddcfae;visibility:hidden}.result-chest.open .result-chest-items{visibility:visible;animation:run-rise .35s ease-out}
.result-chest-items>span{display:inline-flex;align-items:center;gap:3px;white-space:nowrap}.result-chest-items b{color:#ffe9a8}.result-chest-items em{font-style:normal}html.m-mode .result-chests{flex-wrap:nowrap;gap:4px;margin:2px 0}html.m-mode .result-chest{padding:0 6px 0 2px;gap:3px}html.m-mode .result-chest-img{width:28px;height:28px;margin:0}html.m-mode .result-chest-items{font-size:14px}html.m-mode .result-chest-text>small,html.m-mode .result-chest-items em{display:none}html.m-mode .result-chest::before{width:40px;height:40px;margin-top:-20px}.result-chest-items img{width:16px;height:16px}.result-chest[data-chest=crystal].open .result-chest-img{filter:drop-shadow(0 0 6px #8fe0ffcc)}.result-chest[data-chest=star].open .result-chest-img{filter:drop-shadow(0 0 8px #ffe066)}
@keyframes rc-shake{0%,100%{transform:none}25%{transform:rotate(-9deg)}75%{transform:rotate(9deg)}}dialog[data-view=result] .level-highlights .level-ups{flex-wrap:nowrap}dialog[data-view=result] .level-highlights .level-ups strong{font-size:18px;white-space:nowrap}dialog[data-view=result] .level-ups strong>span{display:inline}.level-ups-sep{font-style:normal}html.m-mode dialog[data-view=result] .level-highlights .level-ups strong{font-size:16px;display:flex;flex-direction:column;align-items:flex-start}html.m-mode dialog[data-view=result] .level-ups strong>span{display:block}html.m-mode .level-ups-sep{display:none}html.m-mode dialog[data-view=result] .level-highlights .level-ups small{display:none}
html[data-motion=reduced] .result-chest .result-chest-img,html[data-motion=reduced] .result-chest::before,html[data-motion=reduced] .result-chest-items{animation:none!important}
@media (prefers-reduced-motion:reduce){.result-chest .result-chest-img,.result-chest::before,.result-chest-items{animation:none!important}}
@media (prefers-reduced-motion:reduce){.level-grade{opacity:1;transform:none}.level-grade.on,.result-more{animation:none}.run-stage{opacity:1;transform:none;transition:none}.run-meter-bar>span{transition:none}}`;
export {GRADE_STARS};
