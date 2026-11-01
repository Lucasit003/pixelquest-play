/* improve20-w-nov1 #13 (a8): every pet's real bonus shows when it works. A tiny proc effect at the moment the bonus applies
   (gfx/pet-proc.js draws it), and a small "+N%" with the real number (petPower, rounded down) the first PET_TIPS times per pet
   per save, at most one every TIP_GAP s (s.hints.petTips, game/hints.js). Read-only for the fight: it never changes a number, it only shows one.
   - Ember Fox (fire): a fire hit on a foe, boosted by petPower -> sparks at the foe
   - Ink Cat (study): a learned ability's hit, boosted by petPower -> a rune ring at the hero
   - Stone Sphinx (defence): a hit the hero takes (defence is multiplied by petPower) -> a shield flash
   - Lucky Cat (loot): a kill's coins reach the hero (the level's gold is multiplied by petPower at the end) -> the coin glints
   - Swift Tabby (speed): the hero walking faster -> a dust puff at the heels */
import {petPower} from '../game/jewels.js';
import {notePetTip} from '../game/hints.js';
export const PET_TIPS=3,TIP_GAP=4;
const GAP={fire:.45,study:.8,defence:.6,loot:.12,speed:.42};
export const petPercent=s=>Math.floor(petPower(s)*100+1e-9);
export function petProc(w,key,at){const s=w?.save;if(!s||s.pet!==key||!w.level||!at)return false;const T=w.petFx||(w.petFx={});if(w.time-(T[key]??-9)<GAP[key])return false;T[key]=w.time;
 const p=w.player,still=w.motion===false,life=key==='speed'?.35:.45;w.effect('pet-proc',at.x,at.y,{pet:key,still,life,max:life,dir:p?.facing||1});
 /* the Ember Fox puffs a spark of its own too, so the bonus is tied to the fox */
 if(key==='fire'&&p)w.effect('pet-proc',Math.round(p.x-22*(p.facing||1)),Math.round(p.y+2),{pet:key,still,life,max:life,dir:p.facing||1});
 if((key!=='speed'||p?.moving)&&!(w.time-(T['tip-'+key]??-99)<TIP_GAP)&&notePetTip(s,key,PET_TIPS)){T['tip-'+key]=w.time;const px=Math.round(p.x-22*(p.facing||1)),py=Math.round(p.y+9);w.text(`+${petPercent(s)}%`,px,py-22,'#f3e3a2');}
 return true;}
/* the Swift Tabby's heels: called once a frame */
export function petTick(w){const p=w?.player;if(w?.save?.pet==='speed'&&p?.moving&&p.hp>0&&['wave','boss','walk','go'].includes(w.flow))petProc(w,'speed',{x:p.x,y:p.y});}
