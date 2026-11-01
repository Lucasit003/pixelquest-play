// improve20-b-oct31 #10 (kid-appeal playtest, shot 19: "Buys armour; her hero looks the same. It's just numbers."): the smith's hero
// preview is zoomed 2x (whole pixels, crisp) and, while a weapon or chest is hovered, tapped or picked, shows the hero NOW beside the
// hero WITH that piece: the drawn weapon art and the chest's armour palette (gfx/actors/hero-looks.js, hero-armor.js), the same
// recolour the hero wears in the world. A piece that does not change the look says so plainly. HTML and rules only; main.js paints.
import {ITEM,heroLook} from '../game/gear.js';
import {tintFor} from '../gfx/actors/hero-looks.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
/* 2x a figure about 60x64 px (hero-sprites.js drawHeroFigure picks the whole-number scale from the canvas size) */
export const DOLL={w:120,h:132,scale:2};

/** What the hero would look like wearing item `id`: {over:{art}|{set}, same, name} or null for a piece the preview cannot show. */
export function smithLook(s,cls,id){const it=ITEM[id];if(!it||!['weapon','chest'].includes(it.slot))return null;const now=heroLook(s,cls);
 if(it.slot==='weapon'){const art=it.art||null;return {over:{art},same:art===(now.art||null),name:it.name,slot:'weapon'};}
 const set=it.set||null;return {over:{set},same:tintFor(cls,set)===tintFor(cls,now.set),name:it.name,slot:'chest'};}

export function smithDollHTML(){return `<div class="smith-doll"><figure class="smith-fig"><canvas width="${DOLL.w}" height="${DOLL.h}" id="smith-hero" aria-label="Your hero now"></canvas><figcaption>Now</figcaption></figure>`
 +`<figure class="smith-fig smith-after" hidden><canvas width="${DOLL.w}" height="${DOLL.h}" id="smith-hero-after" aria-label="Your hero wearing it"></canvas><figcaption id="smith-after-cap"></figcaption></figure></div>`;}

/** The caption under the second figure. */
export function smithAfterCaption(L){return L?(L.same?'Same look, more power':`With ${esc(L.name)}`):'';}

/* improve20-x-nov1 #20b (audit4 #10): on a window taller than 600 px the preview is a small portrait (whole pixels: the 2x canvas at half
   size) in one row with the tabs, and the name line shows only with a note; the cards start right under the row. Phones keep the
   floating peek below. Buy cards lead with their price (gear-ui.js). */
export const SMITH_HEAD_CSS=`@media(min-height:601px){dialog[data-view=smith] .smith-head{display:flex;align-items:center;gap:8px 12px;flex-wrap:wrap;margin-bottom:2px}
dialog[data-view=smith] .smith-head .smith-preview{min-height:0;gap:10px;flex:none}
dialog[data-view=smith] .smith-preview:is(.is-idle,.is-peek) .smith-say{display:none}
dialog[data-view=smith] .smith-head .smith-tabs{flex:1 1 520px}
dialog[data-view=smith] .smith-head .smith-tabs button{padding-left:10px;padding-right:10px}
dialog[data-view=smith] .smith-head .smith-doll{gap:2px}
dialog[data-view=smith] .smith-head .smith-fig canvas{width:${DOLL.w/2}px;height:${DOLL.h/2}px}
dialog[data-view=smith] .smith-head .smith-fig figcaption{width:88px;font-size:16px;line-height:1;height:2em}
dialog[data-view=smith] .smith-tab-help{margin:2px 0}}
.gear-card-top{display:flex;flex-direction:column;align-items:stretch;gap:4px;margin:2px 0 4px}
.gear-cap-top{margin:0;font-size:14px;line-height:1.15;color:#ffd58a;border:1px solid rgba(227,184,90,.5);border-radius:3px;padding:2px 6px;background:rgba(40,30,10,.5)}
.smith-show-line{margin:2px 0 8px;color:#ffe08a}
dialog[data-view=smith] .smith-head .smith-preview.is-idle .smith-fig:first-child figcaption{visibility:hidden}
.m-mode dialog[data-view=smith] .gear-card{display:flex;flex-direction:column}
.m-mode dialog[data-view=smith] .gear-card>.gear-card-top{order:-1;margin:0 0 2px}
.m-mode dialog[data-view=smith] .gear-card>.smith-ico{width:40px;height:40px;margin:2px auto 0;border-width:2px}
.m-mode dialog[data-view=smith] .gear-card>.smith-ico .gear-ico{width:32px;height:32px}
.m-mode dialog[data-view=smith] .gear-card>h3{margin:2px 0}
.m-mode dialog[data-view=smith] .gear-card-top button{white-space:nowrap;padding-left:4px;padding-right:4px;min-height:36px}
.m-mode dialog[data-view=smith] .gear-card-top .forge-reason{margin:0;font-size:13px}
.m-mode dialog[data-view=smith] .smith-show-line{margin:0 0 4px;font-size:14px}`;
export const SMITH_DOLL_CSS=`.smith-doll{display:flex;gap:10px;flex:none}
.smith-fig{margin:0;display:flex;flex-direction:column;align-items:center;gap:2px}
.smith-fig canvas{width:${DOLL.w}px;height:${DOLL.h}px;image-rendering:pixelated;background:radial-gradient(ellipse at 50% 88%,rgba(255,226,150,.18),transparent 60%)}
.smith-fig figcaption{font-size:14px;color:#e9dcc0;width:150px;text-align:center;line-height:1.15;height:2.3em;overflow:hidden}
/* hidden until a piece is hovered, but keeping its place so the cards below never jump */
.smith-after[hidden]{display:flex;visibility:hidden}
.smith-after figcaption{color:#ffe08a}
.smith-after[data-same] figcaption{color:#cfc6b3}
@media(max-height:600px){dialog[data-view=smith] .smith-preview.is-peek{display:flex;position:fixed;right:18px;top:64px;z-index:5;min-height:0;padding:8px;background:rgba(14,16,38,.94);border:2px solid #b88b3e;border-radius:6px;box-shadow:0 6px 18px rgba(0,0,0,.5)}
 dialog[data-view=smith] .smith-preview.is-peek>div:not(.smith-doll){display:none}}`;
