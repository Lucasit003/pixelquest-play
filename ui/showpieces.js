/* improve20-x-nov1 #20a (audit4 #4): the Showpiece shelf at Home -> Decorate, and its Trophies entry. Big cosmetic pieces to save gold
   for (game/furniture.js SHOWPIECES), one of each; owning them all hangs an entry in the Trophy Hall. HTML only: main.js shows it and
   wires the Buy buttons (data-buy-furn, the catalogue's own). Nothing here reads or writes a stat, an ability or learning. */
import {SHOWPIECES,showpiecesOwned,allShowpieces,nextShowpiece} from '../game/furniture.js';
/* improve25-r25q-nov5 #2 */
import {PLAQUES_ALL,plaqueOpen,plaqueMetal} from '../game/furniture.js';
import {PLAQUE_W as HALL_W,PLAQUE_H as HALL_H,PQ_RES} from './trophy-hall.js';
import {CHAPTERS} from '../game/levels.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const own=(s,f)=>(s?.house?.owned?.[f.id]|0)>0;
/** The shelf. card(f, bodyHTML) is decorate()'s own card (picture and name). */
export function showpieceShelfHTML(s,card){const n=SHOWPIECES.length,k=showpiecesOwned(s),gold=Math.max(0,s?.gold|0);
 return `<p class="deco-show-head"><strong>${k} of ${n} Showpieces.</strong> Big pieces to save up for, one of each. Just for show: they never change stats. Own all ${n} for an entry in your Trophies.</p><div class="grid deco-grid deco-show-grid">${SHOWPIECES.map(f=>card(f,own(s,f)?'<p class="deco-owned">Yours ✓ Place it from Your furniture.</p>':`<p class="deco-save${gold>=f.price?' can':''}" title="${Math.min(gold,f.price)} of ${f.price} gold"><span class="deco-save-bar"><span style="width:${Math.min(100,Math.floor(gold/f.price*100))}%"></span></span><small>${gold>=f.price?'You can buy it now':`${f.price-gold} more gold`}</small></p><button data-buy-furn="${f.id}" ${gold<f.price?'disabled':''}>Buy ◆ ${f.price}</button>`).replace('class="card deco-card','class="card deco-card deco-show')).join('')}</div>`;}
/* improve20-r20e-nov4 #3 (audit14 #2, plan item 5: the smith said "save gold for a Showpiece" with no name, price or progress): the next
   Showpiece as a named goal, the cheapest one not yet owned (game/furniture.js nextShowpiece), with its price and the gold held. The smith
   shows it where it used to say "save gold", and the HUD wallet carries a small copy (main.js updateHUD) while the NEXT GOAL is a
   Showpiece (game/next-step.js showpieceStep). Gold only, earned in play: nothing is bought with real money. -> null when every one is owned */
const num=n=>Math.max(0,n|0).toLocaleString('en-US');
export function showpieceGoal(s){const f=nextShowpiece(s);if(!f)return null;const have=Math.max(0,s?.gold|0);return {id:f.id,name:f.name,price:f.price,img:f.img,have,ready:have>=f.price,pct:Math.min(100,Math.round(100*have/f.price))};}
export function showpieceGoalHTML(s){const g=showpieceGoal(s);if(!g)return '';
 return `<div class="smith-goal${g.ready?' ready':''}" data-showpiece-goal="${esc(g.id)}"><img src="${esc(g.img)}" alt="" draggable="false"><span><strong>Showpiece: ${esc(g.name)} — ${num(Math.min(g.have,g.price))} / ${num(g.price)} gold</strong><span class="deco-save-bar" aria-hidden="true"><span style="width:${g.pct}%"></span></span><small>${g.ready?'You can buy it now at Home (Decorate tab). Just for show: it never changes stats.':`${num(g.price-g.have)} more gold. Buy it at Home (Decorate tab). Just for show.`}</small></span></div>`;}
/* the HUD wallet's copy: "/ 800" and the piece's own picture, its name in the title */
export function goldGoalHTML(s){const g=showpieceGoal(s);if(!g)return '';/* lead (4 Nov, R20H merge): once the gold covers the price, a check replaces "/ price", so the HUD never reads "2067 / 600" */return `<span class="gold-goal-n">${g.ready?'✓':'/ '+num(g.price)}</span><img src="${esc(g.img)}" alt="" draggable="false">`;}
export const goldGoalTitle=s=>{const g=showpieceGoal(s);return g?`Showpiece goal: ${g.name}, ${num(g.price)} gold${g.ready?' (you can buy it now at Home)':''}`:'';};
/** The Trophy Hall entry: shown once one Showpiece is owned, gold-framed when all are. */
export function showpieceTrophyHTML(s){const n=SHOWPIECES.length,k=showpiecesOwned(s);if(!k)return '';const all=allShowpieces(s);
 return `<div class="trophy-showpieces${all?' is-complete':''}" data-showpieces="${k}"><div class="trophy-show-row">${SHOWPIECES.map(f=>`<img src="${f.img}" alt="" width="${f.w}" height="${f.h}" class="${own(s,f)?'':'is-dark'}" draggable="false">`).join('')}</div><p>${all?`<strong>Grand Collector.</strong> Every Showpiece is in your Home: all ${n} of them.`:`<strong>Showpiece collection: ${k} of ${n}.</strong> Own all ${n} to complete it.`}</p></div>`;}
/* improve25-r25q-nov5 #2 (audit16 #18): Home -> Decorate -> Boss plaques. One card per Trophy Hall boss: its plaque painted by the hall's own
   wireTrophyHall (the canvas carries data-trophy-sprite and data-metal: plain, silver or gold from the best tier won, '' for the dark "?" of a boss not
   beaten). A beaten boss has its price and Buy; one not beaten says "Beat <boss> to hang this" and has no button. HTML only; main.js wires Buy
   (data-buy-furn) and paints the canvases. Gold only, earned in play; nothing here reads or writes a stat, an ability or learning. */
const METAL_WORD={plain:'Normal win: plain frame',silver:'Heroic win: silver frame',gold:'Legendary win: gold frame'};
/* improve25-r25r-nov5 #2: the Home look (data-rim: a steel ramp and a light rim on silver, a rim on gold; ui/trophy-hall.js) and a tier tag on the picture */
const TIER_TAG={silver:'Heroic',gold:'Legendary'};
export const plaquePicHTML=(s,f)=>`<span class="deco-pic deco-plaque-pic">${TIER_TAG[plaqueMetal(s,f.id)]?`<span class="deco-tier deco-tier-${plaqueMetal(s,f.id)}">${TIER_TAG[plaqueMetal(s,f.id)]}</span>`:''}<canvas class="deco-plaque-cv" data-rim="1" data-trophy-sprite="${esc(f.sprite)}" data-metal="${esc(plaqueMetal(s,f.id)||'')}" width="${HALL_W*PQ_RES}" height="${HALL_H*PQ_RES}" aria-hidden="true"></canvas></span>`;
export function plaqueShelfHTML(s){const gold=Math.max(0,s?.gold|0),won=PLAQUES_ALL.filter(f=>plaqueOpen(s,f.id)),mine=PLAQUES_ALL.filter(f=>own(s,f)).length;
 const card=f=>{const open=plaqueOpen(s,f.id),m=plaqueMetal(s,f.id);return `<div class="card deco-card deco-plaque${open?'':' deco-plaque-lock'}" data-plaque="${esc(f.id)}" data-metal="${esc(m||'')}">${plaquePicHTML(s,f)}<h3>${esc(open?f.boss:'?')}</h3>${!open?`<p class="subtle deco-plaque-need">Beat ${esc(f.boss)} to hang this</p>`:own(s,f)?`<p class="deco-owned">Yours ✓ Hang it from Your furniture.</p><small class="subtle">${esc(METAL_WORD[m])}</small>`:`<small class="subtle">${esc(METAL_WORD[m])}</small><button data-buy-furn="${esc(f.id)}" ${gold<f.price?'disabled':''}>Buy ◆ ${f.price}</button>`}</div>`;};
 return `<p class="deco-show-head"><strong>${mine} of ${PLAQUES_ALL.length} boss plaques.</strong> Hang a plaque for every boss you have beaten. Its frame shows your best win and changes by itself: plain for Normal, silver for Heroic, gold for Legendary. Just for show.</p>${CHAPTERS.map(c=>{const xs=PLAQUES_ALL.filter(f=>f.chapter===c.id);return xs.length?`<h3 class="deco-plaque-ch">${esc(c.name)} <small>${xs.filter(f=>plaqueOpen(s,f.id)).length} of ${xs.length} beaten · ◆ ${xs[0].price} each</small></h3><div class="grid deco-grid deco-plaque-grid">${xs.map(card).join('')}</div>`:'';}).join('')}`;}
export const SHOWPIECE_CSS=`.deco-show-head{margin:4px 0 8px}
.deco-show-grid .deco-pic{min-height:150px}
.deco-show{border-color:#c9a24a}
.deco-save{display:flex;flex-direction:column;align-items:center;gap:2px;width:100%;margin:2px 0}
.deco-save-bar{display:block;width:80%;height:8px;border:1px solid #b88b3e;border-radius:2px;background:#151624;overflow:hidden}
.deco-save-bar>span{display:block;height:100%;background:#e3b85a}
.deco-owned{color:#9fe0a0}
.deco-show>button{white-space:nowrap;padding-left:6px;padding-right:6px}
.m-mode .deco-show-grid .deco-pic{min-height:0}
.m-mode .deco-show-grid .deco-pic img{max-height:84px;width:auto!important;height:auto!important;max-width:100%}
.m-mode .deco-show-head{margin:0 0 4px;font-size:14px}
/* improve20-y-nov1 #6 (lane X): on a phone the first row's Buy sat under the fold at 844x390: the picture is 44 px tall, the Decorate tabs 32 px, and "You can buy
   it now" gives way to the lit Buy button (the gold bar stays) */
.m-mode .deco-show-grid .deco-pic img{max-height:44px}
.m-mode dialog[data-home] .deco-tabs button{min-height:32px;padding-top:2px;padding-bottom:2px}
.m-mode .deco-show .deco-save{margin:0}
.m-mode .deco-show .deco-save.can small{display:none}
.m-mode .deco-show h3{margin:0}
.deco-plaque-pic{min-height:0}
.deco-plaque-cv{width:88px;height:98px;image-rendering:pixelated}
.deco-plaque-ch{margin:10px 0 4px}
.deco-plaque-ch small{font-weight:normal;opacity:.8}
.deco-plaque-need{margin:2px 0}
.m-mode .deco-plaque-cv{width:55px;height:61px}
/* improve25-r25r-nov5 #2: the tier tag over a silver or gold plaque's top edge (16 px desktop, 14 px phone: the Pixel Operator floors) */
.deco-plaque-pic{position:relative;display:inline-block}
.deco-tier{position:absolute;left:50%;top:-6px;transform:translateX(-50%);z-index:1;padding:0 6px;border-radius:3px;font-size:16px;line-height:18px;white-space:nowrap;font-weight:bold;pointer-events:none}
.deco-tier-silver{background:#e9eef7;color:#1d2433;border:1px solid #ffffff;box-shadow:0 0 0 1px #4a5366}
.deco-tier-gold{background:#f7cf4a;color:#3a2600;border:1px solid #fff3b0;box-shadow:0 0 0 1px #6e4a06}
.m-mode .deco-tier{font-size:14px;line-height:16px;padding:0 4px;top:-4px}
.m-mode .deco-plaque h3{margin:0;font-size:14px}
.trophy-showpieces{margin:0 0 12px;padding:10px 12px;border:2px solid #817b89;border-radius:6px;background:rgba(10,12,30,.45)}
.trophy-showpieces.is-complete{border-color:#ffc928;box-shadow:0 0 0 1px rgba(255,201,40,.35) inset}
.trophy-show-row{display:flex;flex-wrap:wrap;align-items:flex-end;gap:10px}
.trophy-show-row img{image-rendering:pixelated;height:auto;max-height:64px;width:auto}
.trophy-show-row img.is-dark{filter:brightness(0) opacity(.55)}
.trophy-showpieces p{margin:6px 0 0}
/* improve20-r20e-nov4 #3: the smith's Showpiece goal and the wallet's copy */
.smith-goal{display:flex;align-items:center;gap:10px;margin:2px 0 8px;padding:6px 10px;border:2px solid #c9a24a;border-radius:6px;background:rgba(10,12,30,.45)}
.smith-goal img{image-rendering:pixelated;max-height:40px;width:auto;flex:none}
.smith-goal>span{display:flex;flex-direction:column;gap:3px;min-width:0;flex:1}
.smith-goal .deco-save-bar{width:100%;max-width:320px}
.smith-goal small{color:var(--ink-2,#c9c2d6)}
.smith-goal.ready{border-color:#9fe0a0}
.m-mode .smith-goal{margin:0 0 4px;padding:3px 8px;gap:8px}
.m-mode .smith-goal img{max-height:28px}
.m-mode .smith-goal small{display:none}
#gold-goal{display:inline-flex;align-items:center;gap:3px;font-size:1em;color:#e9dcb6}
#gold-goal[hidden]{display:none}
#gold-goal img{image-rendering:pixelated;height:18px;width:auto}
#gold-goal.ready .gold-goal-n{color:#9fe0a0}`;
