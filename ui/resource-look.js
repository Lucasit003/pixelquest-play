/* improve20-j-nov1 #4 (audit3 #24: the hotbar's bare "12" and "10" and the potion's "5+1" beside a "+1 free each level" pill meant nothing to
   a child). Each class resource has one colour, used for its cost badges on the hotbar and its bar in the hero panel (the bar fills are the
   existing skin fills), and one small existing icon from the UI skin strip (ui/skin/icons.png), or none: Focus has no fitting icon, so it
   is told by its colour alone. Nothing is drawn in code. */
import {stripIcon} from './icons.js';
export const RESOURCE={Mana:{color:'#9ccfff',icon:'drop',fill:'blue'},Stamina:{color:'#ffd87a',icon:'strength',fill:'gold'},Energy:{color:'#ffe95c',icon:'lightning',fill:'gold'},Fury:{color:'#ff8f73',icon:'flame-skull',fill:'red'},Focus:{color:'#8fe6a6',icon:null,fill:'green'}};
export const resourceLook=name=>RESOURCE[name]||{color:'#b9d6ee',icon:null,fill:'blue'};
/* a hotbar cost: the resource's icon (when it has one) before the number; main.js keeps the words for screen readers */
export const costIcon=name=>{const r=resourceLook(name);return r.icon?stripIcon(r.icon,{size:16}):'';};
/* the free potion's one sign: the skin strip's sparkle on the potion slot while this level's free potion waits */
export const FREE_POTION_TIP='The sparkle is your free potion: every level gives you 1, and it is used before your own.';
export const freePotionSign=()=>`<span class="potion-free" aria-hidden="true">${stripIcon('sparkle',{size:16})}</span>`;
