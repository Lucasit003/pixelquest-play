/* improve20-x-nov1 #20a (audit4 #4): the Showpiece shelf at Home -> Decorate, and its Trophies entry. Big cosmetic pieces to save gold
   for (game/furniture.js SHOWPIECES), one of each; owning them all hangs an entry in the Trophy Hall. HTML only: main.js shows it and
   wires the Buy buttons (data-buy-furn, the catalogue's own). Nothing here reads or writes a stat, an ability or learning. */
import {SHOWPIECES,showpiecesOwned,allShowpieces} from '../game/furniture.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const own=(s,f)=>(s?.house?.owned?.[f.id]|0)>0;
/** The shelf. card(f, bodyHTML) is decorate()'s own card (picture and name). */
export function showpieceShelfHTML(s,card){const n=SHOWPIECES.length,k=showpiecesOwned(s),gold=Math.max(0,s?.gold|0);
 return `<p class="deco-show-head"><strong>${k} of ${n} Showpieces.</strong> Big pieces to save up for, one of each. Just for show: they never change stats. Own all ${n} for an entry in your Trophies.</p><div class="grid deco-grid deco-show-grid">${SHOWPIECES.map(f=>card(f,own(s,f)?'<p class="deco-owned">Yours ✓ Place it from Your furniture.</p>':`<p class="deco-save${gold>=f.price?' can':''}" title="${Math.min(gold,f.price)} of ${f.price} gold"><span class="deco-save-bar"><span style="width:${Math.min(100,Math.floor(gold/f.price*100))}%"></span></span><small>${gold>=f.price?'You can buy it now':`${f.price-gold} more gold`}</small></p><button data-buy-furn="${f.id}" ${gold<f.price?'disabled':''}>Buy ◆ ${f.price}</button>`).replace('class="card deco-card','class="card deco-card deco-show')).join('')}</div>`;}
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
.trophy-showpieces p{margin:6px 0 0}`;
