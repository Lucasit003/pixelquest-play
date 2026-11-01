/* improve20-s-nov1 #18 (audit5 b18): rarity never by colour alone. Under deuteranopia Rare and Epic were the same blue (Machado
   simulation, CIE76 distance 2.3; tools/rarity-cvd.mjs) and Uncommon and Legendary the same mustard, while victory chips, chest
   contents and bag borders showed rarity only as a colour. Every rarity also shows a row of 1-5 small diamonds (style.css .rar-pips,
   in the pip art's colours) and says its name to screen readers and on hover. */
import {RARITY} from '../game/jewels.js';
export const RAR_PIPS={common:1,uncommon:2,rare:3,epic:4,legendary:5};
const rk=r=>r in RAR_PIPS?r:'common';
/** The pips for rarity r. cls 'rar-on-cell' pins them to the foot of an item cell. */
export function rarPips(r,cls=''){const k=rk(r),n=RARITY[k].name;return `<span class="rar-pips${cls?' '+cls:''}" data-rar="${k}" role="img" aria-label="${n}" title="${n}">${'<i></i>'.repeat(RAR_PIPS[k])}</span>`;}
export const rarName=r=>RARITY[rk(r)].name;
export const rarColor=r=>RARITY[rk(r)].color;
