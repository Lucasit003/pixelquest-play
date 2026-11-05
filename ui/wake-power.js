/* improve20-r11c-nov2 #2 (audit9 a9): "Wake your next power". A typical champion finishes with 4 of 8 abilities ("13 topics · 4 abilities
   earned") while the Library sat 5th on "What's next". The ability gates stay (owner decision, delegated: learning is what unlocks powers);
   the game now says so where it matters. The Champion card and its "What's next" list lead with the next ability to wake: its icon, its
   name, the topics still needed (academics/study-unlock.js lessonsToUnlock, the ladder's own count, never a literal) and its hero level.
   The Champion card and the Hero card show all eight abilities, the locked ones dim with the topics each still needs.
   Read-only: reads unlocked() (game/math.js) and the ladder, writes nothing, unlocks nothing. */
import {ABILITIES} from '../game/abilities.js';
import {SUBJECTS} from '../game/data.js';
import {unlocked,xpLevel} from '../game/math.js';
import {lessonsToUnlock} from '../academics/study-unlock.js';
import {asleep} from '../academics/awakening.js';
import {abilityIcon} from './icons.js';
import {nextPower} from '../game/power-gate.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const subName=id=>SUBJECTS[id]?.name||id;
/* the hero's eight abilities in ladder order: {a, on, topics (still to master, from the ladder), reachable, lvl, lvlOk} */
export function powerRow(s,hero=s?.hero){return [...(ABILITIES[hero]||[])].sort((x,y)=>x.gate-y.gate).map(a=>{const on=!!unlocked(s,a)&&!asleep(s,a),r=on?null:lessonsToUnlock(s,a),lvl=xpLevel(a);return {a,on,topics:r?r.lessons|0:0,reachable:!r||!!r.reachable,lvl,lvlOk:(s?.level||1)>=lvl};});}
/* the next ability to wake (the lowest gate still locked), or null when all are awake */
/* improve20-r13b-nov2 #1: the shared pick (game/power-gate.js nextPower: fewest topics, the gate's cheapest power), no longer the lowest gate */
export const nextWake=(s,hero=s?.hero)=>{const p=nextPower(s,{hero});return p&&powerRow(s,hero).find(x=>!x.on&&x.a.id===p.a.id)||null;};
/* what it still needs, in kid words: ["Master 8 more Math topics", "Reach hero level 10"] (a met level reads "Hero level 10 ✓") */
export function wakeNeeds(x){if(!x||x.on)return [];const out=[];if(x.topics>0)out.push(`Master ${x.topics} more ${subName(x.a.subject)} topic${x.topics===1?'':'s'}`);else if(!x.lvlOk)out.push(`${subName(x.a.subject)} topics done`);out.push(x.lvlOk?`Hero level ${x.lvl} ✓`:`Reach hero level ${x.lvl}`);return out;}
/* the block that leads the Champion card's "What's next" */
export function wakeNextHTML(s,hero=s?.hero){const x=nextWake(s,hero);if(!x)return `<div class="wake-next wake-all" data-wake="all"><small class="wake-eyebrow">ALL POWERS AWAKE</small><p class="wake-line">Every one of your hero's abilities is awake.</p></div>`;
 const color=SUBJECTS[x.a.subject]?.color||'#e7c77e',[topics,lvl0]=x.topics>0||!x.lvlOk?wakeNeeds(x):['',''],lvl=x.lvlOk?'':lvl0/* improve20-r20d-nov4 #5 (audit14 minor: "Hero level 6 ✓" at level 19): a level already reached is not shown */;
 return `<div class="wake-next" data-wake="${esc(x.a.id)}" data-wake-topics="${x.topics}" data-wake-level="${x.lvl}" style="--accent:${esc(color)}"><small class="wake-eyebrow">WAKE YOUR NEXT POWER</small><div class="wake-body"><span class="wake-icon">${abilityIcon(x.a,hero,48)}</span><span class="wake-text"><strong>${esc(x.a.name)}</strong><span class="wake-need">${esc(topics)}${x.topics>0?' at the Library':''}</span><span class="wake-level${x.lvlOk?' met':''}">${esc(lvl)}</span></span></div></div>`;}
/* all eight abilities: awake ones bright, locked ones dim with the topics each still needs (a level-only gate shows "Lv N") */
/* improve20-r16a-nov3 #7 (audit12 finding 11: "Master 68 more Math topics" read as never): only the next power to wake (nextWake, the one the
   cards name) shows its count; every other locked badge shows a lock with no number ("later as you learn") */
export function powerRowHTML(s,hero=s?.hero,{size=32}={}){const row=powerRow(s,hero),nx=nextWake(s,hero)?.a.id;return `<ul class="power-row" aria-label="Your abilities: ${row.filter(x=>x.on).length} of ${row.length} awake">${row.map(x=>{const next=!x.on&&x.a.id===nx,tag=x.on||!next?'':x.topics>0?String(x.topics):!x.lvlOk?`Lv ${x.lvl}`:'',tip=x.on?`${x.a.name}: awake`:next?`${x.a.name}: ${wakeNeeds(x).join(', ')}`:`${x.a.name}: locked, it wakes later as you learn`;
 return `<li class="power-cell${x.on?' on':' locked'}${next?' next':''}" data-power="${esc(x.a.id)}"${next?` data-topics="${x.topics}"`:''} title="${esc(tip)}"><span class="power-ico">${abilityIcon(x.a,hero,size)}</span>${tag?`<b class="power-tag">${esc(tag)}</b>`:!x.on?'<img class="power-lock" src="ui/skin/pl-icons/tier-lock.png" width="16" height="16" alt="" draggable="false">':''}<span class="sr-only">${esc(tip)}</span></li>`;}).join('')}</ul>`;}
export const POWER_CSS=`.power-row{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin:4px 0;padding:0;list-style:none}
.power-cell{position:relative;display:grid;place-items:center;width:40px;height:40px;border:2px solid #c19149;border-radius:4px;background:rgba(10,12,30,.6)}
.power-cell.locked{border-color:#5d5244;background:rgba(10,12,30,.35)}
.power-cell.locked .power-ico{filter:grayscale(1) brightness(.45);opacity:.8}
.power-tag{position:absolute;right:-6px;bottom:-6px;min-width:18px;padding:0 3px;font:700 16px/18px var(--ui);color:#fff1c8;background:#3b2a52;border:1px solid #a984ff;border-radius:3px;text-align:center}
.power-lock{position:absolute;right:-5px;bottom:-5px;width:16px;height:16px;image-rendering:pixelated}
.power-cell.next{border-color:#a984ff}
.power-cell .sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.wake-next{margin:2px 0 6px;padding:6px 10px;border:2px solid var(--accent,#e3b85a);border-radius:5px;background:rgba(20,16,40,.7);text-align:left}
.wake-eyebrow{display:block;letter-spacing:3px;color:#ffd96a}
.wake-body{display:flex;align-items:center;gap:10px}
.wake-icon{flex:none;display:grid;place-items:center;width:56px;height:56px;border:2px solid var(--accent,#e3b85a);border-radius:4px;background:rgba(0,0,0,.35)}
.wake-text{display:flex;flex-direction:column;gap:0;min-width:0}
.wake-text strong{font-size:20px;color:#fff1c8}
.wake-need{color:#f1e6cc}.wake-level{color:#cfc6b3}.wake-level.met{color:#9fe0b0}
/* the Champion card: the block sits under the hero picture, beside the adventure's totals, so it shows without scrolling */
.finale>.wake-next{grid-area:wake;align-self:start;margin:4px 0 0}
@media(min-width:701px){.finale{grid-template-areas:"banner banner" "scene story" "wake story" "next next" "actions actions"}}
@media(max-width:700px){.finale{grid-template-areas:"banner" "scene" "wake" "story" "next" "actions"}}
.herocard-stats .power-row{justify-content:flex-start;gap:5px;margin:2px 0}
.herocard-stats .power-cell{width:34px;height:34px}
.herocard-stats .power-tag{font-size:16px;line-height:16px}
/* improve20-r21c-nov4 #7 (audit15 #17, shot 29: at 844x390 the Champion card's 8 ability icons were cut off by its buttons; 26 px cells were
   tried and the story column still cut them): on a short phone the row is dropped, and the "N ability earned" line above it still counts them */
@media(max-height:420px){.m-mode .finale .power-row{display:none}}`;
export function ensurePowerCSS(doc=globalThis.document){if(!doc||doc.getElementById('wake-power-css'))return;const st=doc.createElement('style');st.id='wake-power-css';st.textContent=POWER_CSS;doc.head.appendChild(st);}
