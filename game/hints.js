/* Kid-appeal help (kidfix-a-oct31, docs/playtest/kidfix-a-oct31/REPORT.md). One additive save field within v9 (no version bump):
   s.hints = {casts:{[abilityId]:n}, lowHp:n, defeat:0|1|2, petPointer:bool, offered:[subject]}
   - casts: how often the player has cast each ability; the boss "Tip: press 1 for ..." stops for an ability at NUDGE_STOP casts.
   - lowHp: how many times the "Drink a potion!" help has shown (it stops at LOW_HP_HELPS, per save).
   - defeat: 0 = no defeat yet, 1 = the first defeat happened and its retry gives one extra potion, 2 = that potion was handed out.
   - petPointer: the one-time "Your cat has friends!" pointer at Home has shown.
   - offered: subjects whose first-open placement offer has shown.
   s.schoolGrade (2-5, 0 for "Not sure", null when never asked) is the title flow's optional grade hint. It never sets a placement.
   Pure: callers pass the save. */
export const NUDGE_STOP=10,LOW_HP_HELPS=2,LOW_HP=.3,SCHOOL_GRADES=[2,3,4,5];
export const emptyHints=()=>({casts:{},lowHp:0,defeat:0,petPointer:false,offered:[]});
const int=(v,lo,hi)=>Math.max(lo,Math.min(hi,Math.floor(Number(v))||0));
export function cleanHints(v){const h=emptyHints();if(!v||typeof v!=='object'||Array.isArray(v))return h;
 if(v.casts&&typeof v.casts==='object'&&!Array.isArray(v.casts))for(const [id,n] of Object.entries(v.casts).slice(0,200))if(typeof id==='string'&&id.length<=40&&int(n,0,1e6)>0)h.casts[id]=int(n,0,1e6);
 h.lowHp=int(v.lowHp,0,LOW_HP_HELPS);h.defeat=int(v.defeat,0,2);h.petPointer=v.petPointer===true;
 if(Array.isArray(v.offered))h.offered=[...new Set(v.offered.filter(x=>typeof x==='string'&&x.length<=40))].slice(0,32);return h;}
export const cleanSchoolGrade=v=>v===0||SCHOOL_GRADES.includes(v)?v:null;
const H=s=>s.hints||(s.hints=emptyHints());
export function noteCast(s,id){const h=H(s);h.casts[id]=Math.min(1e6,(h.casts[id]|0)+1);return h.casts[id];}
/* the boss ability tip: never on Heroic or Legendary, and never for an ability cast NUDGE_STOP times */
export const nudgeTier=s=>!['heroic','legendary'].includes(s.settings?.difficulty);
export const nudgeWanted=(s,id)=>nudgeTier(s)&&(H(s).casts[id]|0)<NUDGE_STOP;
/* "Drink a potion!" the first LOW_HP_HELPS times health drops below LOW_HP while the hero holds a potion; true = show it now (counted) */
export function lowHpHelp(s,hp,maxHp,hasPotion){const h=H(s);if(!hasPotion||h.lowHp>=LOW_HP_HELPS||!(maxHp>0)||hp<=0||hp/maxHp>=LOW_HP)return false;h.lowHp++;return true;}
export const potionHelpText=(key,touch)=>touch?'Tap the potion!':`Drink a potion! (${key})`;
/* the save's first defeat ever: mark it so the retry button offers one extra potion (once per save, so it cannot be farmed) */
export function noteDefeat(s){const h=H(s);if(h.defeat===0){h.defeat=1;return true;}return false;}
export const defeatBoost=s=>H(s).defeat===1;
export function useDefeatBoost(s){const h=H(s);if(h.defeat!==1)return false;h.defeat=2;return true;}
/* the one-time Pets pointer: the first time Home is entered after the first level win */
export const petPointerDue=(s,won)=>!H(s).petPointer&&!!won;
export function markPetPointer(s){H(s).petPointer=true;}
export const PET_POINTER_TEXT='Your cat has friends! Visit Pets to choose who travels with you.';
/* a subject's first Library open: offer the placement check when a stated grade above 2 has no placement and no work in it */
export function placementOffer(s,subject,hasWork){const g=s.schoolGrade;if(!(g>2)||H(s).offered.includes(subject))return null;if((s.placement?.[subject]|0)>0||hasWork)return null;return g;}
export function markOffered(s,subject){const h=H(s);if(!h.offered.includes(subject))h.offered.push(subject);}
