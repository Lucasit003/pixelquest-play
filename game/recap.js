/* improve20-r12c-nov2 #1 (kidsim2 #4: Nia's Continue card showed only "Bramble" and Today's goals, and the town said only "Welcome to
   Oakhaven."). One line for a returning player, on the Continue button and in the town greeting: "Last: cleared Magma Bridges · Next: Ember
   Barracks". Last is save.lastClear (the last level won, with its tier off Normal), else the furthest level done; Next is the HUD's goal
   (nextStep) as a place: its pad's name, or the Library, the Apothecary, the Guild board, the Weaponsmith or the south gate (else the goal's
   first short clause). Pure; null for a new save. */
import {LEVELS,levelById,levelDone} from './levels.js';
import {TIERS} from './tiers.js';
import {nextStep} from './next-step.js';
const PLACE={library:'the Library',alchemist:'the Apothecary',guild:'the Guild board',gate:'the south gate',smith:'the Weaponsmith'};
/* any other goal (a talk, a building): its first clause when short ("Talk to Farmer Hob at his farm") */
const clause=t=>{const c=String(t||'').split(/[:.!]/)[0].trim();return c&&c.length<=42?c.charAt(0).toLowerCase()+c.slice(1):null;};
const tierWord=k=>k&&k!=='normal'&&TIERS[k]?` on ${TIERS[k].label}`:'';
export function lastCleared(save){const c=save?.lastClear,l=c&&levelById(c.id);if(l)return {level:l,tier:c.tier||'normal'};let f=null;for(const o of LEVELS)if(o.kind==='level'&&!o.hidden&&!o.optional&&levelDone(save,o.id))f=o;return f?{level:f,tier:'normal'}:null;}
export function nextPlace(save){let n=null;try{n=nextStep(save);}catch{return null;}const t=(n?.then||n)?.target;if(!t)return null;if(t.kind==='pad'){const l=levelById(t.id);return l?`${l.name}${tierWord(t.tier)}`:null;}return PLACE[t.kind]||clause(n.text);}
export function recapLine(save){const last=lastCleared(save);if(!last)return null;const next=nextPlace(save);return `Last: cleared ${last.level.name}${tierWord(last.tier)}${next?` · Next: ${next}`:''}`;}
export const recapGreeting=save=>{const r=recapLine(save);return r?`Welcome back to Oakhaven. ${r}.`:'Welcome to Oakhaven.';};
