// improve20-b-oct31 #12 (kid-appeal playtest: "See the delivery" was a text list; "That's it? Where are the guards?"): the delivery
// screen shows the south gate's guards receiving the supplies -- the Lesson Theater's knight (theater-knight-blue, existing NPC art,
// its own idle frames; the second one mirrored to face the first) -- with a short thank-you each, then the rewards as icons (gold and
// the potion, paid once by game/field-mission.js). Nothing is drawn in code. HTML here; ui/topic-art.js mountTopicArt paints them.
import {topicArtHTML,mountTopicArt} from './topic-art.js';
import {FIELD_REWARD} from '../game/field-mission.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const GUARD_ART={kind:'sprite',atlas:'theater-knight-blue'};
/* what each stage packed (game/field-mission.js FIELD_TASKS), in the guards' words; one short line each */
export const GUARD_THANKS={elementary:['Apples and water! Thank you!','Now we can guard the gate.'],middle:['Rations and mortar! Thank you!','Now we can fix the wall.'],high:['Every crate checked. Thank you!','The repairs can start today.']};
export const GUARDS=['Guard Rowan','Guard Ada'];

/** The delivered screen. m: fieldMission(save); tasks: FIELD_TASKS[m.stage]; goal: nextStep text; icon(name): a reward <img>. */
export function deliveryHTML({m,tasks,goal,icon,overflow=0}){
 const lines=GUARD_THANKS[m.stage]||GUARD_THANKS.elementary;
 const guard=(i)=>`<figure class="fd-guard${i?' fd-mirror':''}" data-guard="${i}">${topicArtHTML(GUARD_ART)}<figcaption><strong>${esc(GUARDS[i])}</strong><q>${esc(lines[i])}</q></figcaption></figure>`;
 const chip=(img,n,what)=>`<span class="fd-chip">${img}<span><strong>${esc(n)}</strong><small>${esc(what)}</small></span></span>`;
 const got=m.rewarded?[chip(icon('gold'),`+${m.gold||FIELD_REWARD}`,'gold'),...(m.potion==='added'?[chip(icon('potion'),'+1','health potion')]:m.potion==='sold'?[chip(icon('gold'),`+${overflow}`,'gold (potion bag full)')]:[])].join(''):'';
 return `<div class="field-delivered"><h3 class="field-delivered-title">Delivery complete!</h3><div class="fd-guards">${guard(0)}${guard(1)}</div>`
  +(got?`<div class="fd-got"><small>You got</small><div class="fd-chips">${got}</div></div>`:'<p class="subtle">No reward this time.</p>')
  +`<details class="fd-did"><summary><small>What you did</small></summary><ul class="field-done-list">${tasks.map(t=>`<li><strong>${esc(t.title)}</strong><span>${esc(t.explanation)}</span></li>`).join('')}</ul></details>`
  +`<p class="result-goal"><small>NEXT GOAL</small><strong>${esc(goal)}</strong></p></div>`;
}
/** Paint both guards (each figure is its own root for mountTopicArt). */
export function mountDelivery(root){for(const f of root?.querySelectorAll?.('.fd-guard')||[])mountTopicArt(f,GUARD_ART);}

export const FIELD_DELIVERY_CSS=`.field-delivered .field-delivered-title{justify-content:center;text-align:center}
.fd-guards{display:flex;justify-content:center;gap:28px;margin:-18px 0 6px}
.fd-guard{margin:0;display:flex;flex-direction:column;align-items:center;gap:4px;max-width:220px}
.fd-guard .topic-art{position:static;width:128px;height:128px;display:block}
.fd-guard .topic-art .ta-body,.fd-guard .topic-art canvas{width:128px;height:128px;image-rendering:pixelated}
.fd-guard .topic-art .ta-spark{display:none}
.fd-mirror .topic-art canvas{transform:scaleX(-1)}
.fd-guard figcaption{display:flex;flex-direction:column;align-items:center;text-align:center;gap:2px}
.fd-guard figcaption strong{color:#e3b85a;font-size:14px}
.fd-guard q{position:relative;background:#f3e6c8;color:#3a2412;padding:6px 10px;border-radius:6px;font-size:16px;line-height:1.2;quotes:none}
.fd-guard q::before{content:'';position:absolute;left:50%;top:-6px;margin-left:-6px;border:6px solid transparent;border-top:0;border-bottom-color:#f3e6c8}
.fd-got{display:flex;flex-direction:column;align-items:center;gap:4px;margin:6px 0}
.fd-got>small{color:#e3b85a;letter-spacing:.12em;text-transform:uppercase}
.fd-chips{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.fd-chip{display:inline-flex;align-items:center;gap:6px;padding:4px 10px 4px 6px;border:1px solid rgba(227,184,90,.45);border-radius:4px;background:rgba(10,12,30,.45)}
.fd-chip img{width:32px;height:32px;image-rendering:pixelated}
.fd-chip>span{display:flex;flex-direction:column;line-height:1.05}
.fd-chip strong{color:#ffe9a8;font-size:22px}
.fd-chip small{color:#e9dcc0}
.fd-did{margin:4px 0;text-align:left}
.fd-did summary{cursor:pointer;text-align:center}
.fd-did summary small{display:inline;color:#e3b85a;letter-spacing:1px;text-transform:uppercase;font-size:13px}
@media(max-height:420px){.fd-guard .topic-art,.fd-guard .topic-art .ta-body,.fd-guard .topic-art canvas{width:64px;height:64px}.fd-guards{gap:16px;margin:2px 0}.fd-guard q{font-size:14px;padding:4px 8px}}`;
