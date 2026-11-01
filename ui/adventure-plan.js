import {nextStep} from '../game/next-step.js';
import {abilityProgressHTML} from './answer-moment.js';
import {fieldMission,FIELD_REWARD} from '../game/field-mission.js';
import {dailyView} from '../game/daily.js';
import {tomorrowLines,dayDone} from '../game/tomorrow.js';
import {ABILITIES} from '../game/abilities.js';
import {abilityIcon} from './icons.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function adventurePlanHTML(save){const step=nextStep(save),m=fieldMission(save),young=save.schoolMode==='elementary';return `<section class="adventure-plan"><div class="adventure-next"><span class="tag">YOUR NEXT STEP</span><h3>${esc(step.text)}</h3><p>${young?'Take your time. The Library is always open.':'Use the next step above to choose your destination. You can return to learning whenever you choose.'}</p></div><div class="adventure-power">${abilityProgressHTML(save)}</div><div class="adventure-field"><span class="tag">OPTIONAL FIELD MISSION · SOUTH GATE</span><h3>Supplies for the watch</h3><p>${young?'Help the guards count and pack their supplies.':'Use mathematics to prepare supplies and keep the south-gate watch equipped.'}</p><p>${m.at}/3 tasks · ${m.rewarded?'Reward already collected':`${m.reward||FIELD_REWARD} gold and a health potion for completing the mission`}</p><button id="field-mission-open">${m.done?'Review your delivery':'Help prepare supplies'}</button></div></section>`;}
/* Daily goals (herocard-oct27, game/daily.js): optional extras for today. No streak, no countdown; unfinished ones simply go away tomorrow. */
export function dailyGoalsHTML(save,now=Date.now()){const v=dailyView(save,now);return `<section class="daily-goals" aria-label="Today's optional goals"><div class="daily-head"><span class="tag">TODAY'S GOALS · OPTIONAL</span><button id="journal-herocard">Hero card</button></div><p>Small extras for today. Skip any you like: nothing is lost, and new ones come tomorrow.</p><ul>${v.map(g=>`<li class="daily-goal${g.done?' done':''}" data-daily="${g.id}"><span class="daily-kind">${{adventure:'Adventure',feat:'Feat',town:'Town'}[g.kind]}</span><span class="daily-text">${esc(g.text)}</span><span class="daily-prog">${g.done?'Done':`${g.have} / ${g.need}`}</span><span class="daily-reward">${prizePic(g)}${esc(g.reward)}</span></li>`).join('')}</ul></section>`;}

/* improve20-f-nov1 #10 (audit5 #2): the prize goal shows the Home piece it pays, in the piece's own catalogue picture (game/furniture.js) */
/* improve20-r7a-nov1 #8: any keepsake's picture: a Home piece or a backdrop in its own art, a title as the scroll icon, a trail as a short
   streak of its colours (drawn by CSS: a trail is an effect, so its preview is one too) */
export function prizePicHTML(p,size=24,cls='daily-prize'){if(!p)return '';const kind=p.prizeKind??p.kind,img=p.prizeImg??p.img,color=p.prizeColor??p.color,spark=p.prizeSpark??p.spark;
 if(kind==='trail'&&color)return `<span class="${cls} trail-swatch" style="--c1:${esc(color)};--c2:${esc(spark||color)};width:${size}px;height:${size}px" aria-hidden="true"></span>`;
 return img?`<img class="${cls}${kind==='backdrop'?' prize-backdrop':''}" src="${esc(img)}" alt="" width="${size}" height="${size}" loading="lazy">`:'';}
const prizePic=g=>g.prize?prizePicHTML(g):'';
/* The title screen's Continue card: today's three goals with ticks, and on the way out (after a session, or once all three are done) a
   short "Tomorrow" list (game/tomorrow.js). No streak, no days counted, no "come back" wording (VISION pillar 4). */
export function todayHTML(save,{after=false,now=Date.now()}={}){let v;try{v=dailyView(save,now);}catch{return '';}const done=v.every(g=>g.done),n=v.filter(g=>g.done).length;
 const tm=after||done?tomorrowLines(save,now):[];
 return `<section class="title-today${done?' all-done':''}" aria-label="Today's goals"><h3><span>Today's goals</span><small>${n} / ${v.length} · optional</small></h3><ul>${v.map(g=>`<li class="${g.done?'done':''}" data-daily="${g.id}"><b aria-hidden="true">${g.done?'✓':'·'}</b><span>${esc(g.text)}</span><em>${prizePic(g)}${esc(g.reward)}</em><span class="sr">${g.done?'done':'not done yet'}</span></li>`).join('')}</ul>${done?'<p class="today-bye">All done for today. See you tomorrow!</p>':''}${tm.length?`<div class="title-tomorrow"><strong>Tomorrow</strong><ul>${tm.map(l=>`<li data-tomorrow="${l.id}"><span class="tm-ico">${lineIcon(save,l)}</span><span>${esc(l.text)}</span></li>`).join('')}</ul></div>`:''}</section>`;}
/* improve20-r7a-nov1 #9 (audit6 #10): a Tomorrow line's icon: the prize's picture, the ability's own icon, the Rift portal (all existing art) */
function lineIcon(save,l){if(l.prize)return prizePicHTML(l.prize,28,'tm-pic');if(l.ability){const a=(ABILITIES[save?.hero]||[]).find(x=>x.id===l.ability);return a?abilityIcon(a,save.hero,28):'';}if(l.img)return `<img class="tm-pic" src="${esc(l.img)}" alt="" width="28" height="28" loading="lazy">`;return '';}
/* the town HUD chip: "Today 1/3" (opens the Journal's goals) */
export function todayChip(save,now=Date.now()){let v;try{v=dailyView(save,now);}catch{return null;}const n=v.filter(g=>g.done).length;const pg=v.find(g=>g.prize&&!g.done);return {n,of:v.length,done:n===v.length,text:n===v.length?'Today ✓':`Today ${n}/${v.length}`,label:`Today's goals: ${n} of ${v.length} done.${pg?` Today's prize: ${pg.reward}.`:''} Open the Journal to see them.`,...(pg?{prize:pg.prize,pic:prizePicHTML(pg,20,'chip-prize')}:{})};}
