/* improve20-x-nov1 #20a (audit4 #4): the Showpiece shelf at Home -> Decorate, and its Trophies entry. Big cosmetic pieces to save gold
   for (game/furniture.js SHOWPIECES), one of each; owning them all hangs an entry in the Trophy Hall. HTML only: main.js shows it and
   wires the Buy buttons (data-buy-furn, the catalogue's own). Nothing here reads or writes a stat, an ability or learning. */
import {SHOWPIECES,showpiecesOwned,allShowpieces,nextShowpiece} from '../game/furniture.js';
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
