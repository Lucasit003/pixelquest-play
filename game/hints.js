/* Kid-appeal help (kidfix-a-oct31, docs/playtest/kidfix-a-oct31/REPORT.md). One additive save field within v9 (no version bump):
   s.hints = {casts:{[abilityId]:n}, lowHp:n, defeat:0|1|2, petPointer:bool, offered:[subject]}
   - casts: how often the player has cast each ability; the boss "Tip: press 1 for ..." stops for an ability at NUDGE_STOP casts.
   - lowHp: how many times the "Drink a potion!" help has shown (it stops at LOW_HP_HELPS, per save).
   - defeat: 0 = no defeat yet, 1 = the first defeat happened and its retry gives one extra potion, 2 = that potion was handed out.
   - petPointer: the one-time "Your cat has friends!" pointer at Home has shown.
   - offered: subjects whose first-open placement offer has shown.
   - petTips: how often each pet's "+N%" has shown beside its proc (improve20-w-nov1; it stops at scenes/pet-fx.js PET_TIPS).
   - firstCast: abilities whose first-cast moment has played (kidfix-b-oct31: once per ability per save). A save from before the
     field gets every ability it already owns listed (core/save.js), so only a newly unlocked ability gets the moment.
   s.schoolGrade (2-5, 6-8 for Middle School since improve20-z-nov1, 9-12 for High School since improve20-r8c-nov1, 0 for "Not sure", null when never asked) is the title flow's optional grade hint. It never sets a placement.
   Pure: callers pass the save. */
export const NUDGE_STOP=10,LOW_HP_HELPS=2,LOW_HP=.3,SCHOOL_GRADES=[2,3,4,5,6,7,8,9,10,11,12];
/* improve20-z-nov1 #2: Middle School asks the grade too (6-8); the Elementary-only helpers below read 2-5 */
export const ELEMENTARY_GRADES=[2,3,4,5],MIDDLE_GRADES=[6,7,8];
export const emptyHints=()=>({casts:{},lowHp:0,defeat:0,petPointer:false,offered:[],firstCast:[],petTips:{}});
const int=(v,lo,hi)=>Math.max(lo,Math.min(hi,Math.floor(Number(v))||0));
export function cleanHints(v){const h=emptyHints();if(!v||typeof v!=='object'||Array.isArray(v))return h;
 if(v.casts&&typeof v.casts==='object'&&!Array.isArray(v.casts))for(const [id,n] of Object.entries(v.casts).slice(0,200))if(typeof id==='string'&&id.length<=40&&int(n,0,1e6)>0)h.casts[id]=int(n,0,1e6);
 h.lowHp=int(v.lowHp,0,LOW_HP_HELPS);h.defeat=int(v.defeat,0,2);h.petPointer=v.petPointer===true;
 if(Array.isArray(v.offered))h.offered=[...new Set(v.offered.filter(x=>typeof x==='string'&&x.length<=40))].slice(0,32);
 if(Array.isArray(v.firstCast))h.firstCast=[...new Set(v.firstCast.filter(x=>typeof x==='string'&&x.length<=40))].slice(0,64);
 if(v.petTips&&typeof v.petTips==='object'&&!Array.isArray(v.petTips))for(const k of ['fire','study','defence','loot','speed'])if(int(v.petTips[k],0,99)>0)h.petTips[k]=int(v.petTips[k],0,99);return h;}
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
export const PET_POINTER_TEXT='Your cat has friends! Visit Pets to meet them.';
/* a subject's first Library open: offer the placement check when a stated grade above 2 has no placement and no work in it */
export function placementOffer(s,subject,hasWork){const g=s.schoolGrade;if(!(g>2)||g>5||H(s).offered.includes(subject))return null;if((s.placement?.[subject]|0)>0||hasWork)return null;return g;}
export function markOffered(s,subject){const h=H(s);if(!h.offered.includes(subject))h.offered.push(subject);}
/* kidfix-b-oct31, the first-cast moment: true the first time this ability is cast in a level on this save (then marked) */
export const firstCastDue=(s,id)=>!!id&&!(H(s).firstCast||[]).includes(id);
export function markFirstCast(s,id){const h=H(s);(h.firstCast||(h.firstCast=[])).includes(id)||h.firstCast.push(id);}
/* improve20-c-oct31, "Too easy? Skip ahead": on a lesson's first screen, offer the existing placement check for its subject while the subject
   has no placement and the topic sits below the grade the player stated at the title (s.schoolGrade), or no grade was stated (null or 0,
   "Not sure"). rung: the topic's grade (academics/lessons.js rungOf); checkable: the subject has a check at the topic's stage. The check
   only ever raises a placement; nothing places on its own. */
export function skipAheadDue(s,subject,rung,checkable){if(!checkable||(s?.placement?.[subject]|0)>0)return false;const g=s?.schoolGrade;return g==null||g===0||rung<g;}
/* improve20-w-nov1 #13: a pet's "+N%" shows the first `max` times per pet per save; true = show it now (counted) */
export function notePetTip(s,key,max){const h=H(s),t=h.petTips||(h.petTips={});if((t[key]|0)>=max)return false;t[key]=(t[key]|0)+1;return true;}
/* improve20-f-nov1 #13 (audit5 #17): the beginner "Tap the ability buttons" tip still showed at hero level 9 (a save that never set
   settings.castTip). It is retired once castTip is set, once the save has cast abilities TIP_CASTS times in all (hints.casts), or once
   chapter 1 is cleared (CHAPTER1_END, the Elderwood finale). */
export const TIP_CASTS=3,CHAPTER1_END='e8';
export const abilityTipRetired=s=>!!s?.settings?.castTip||Object.values(s?.hints?.casts||{}).reduce((t,n)=>t+(n|0),0)>=TIP_CASTS||!!s?.levels?.[CHAPTER1_END]?.done;
/* improve20-r8c-nov1 #1 (audit7 d12): a High School learner starts on Standard combat at hero level 1 (main.js Begin), so the prologue is
   their hardest first fight. On any difficulty but Story, the High School prologue gives one extra free potion (World.startLevel adds it to
   p.freePotion, which it SETS each attempt, so retries never stack it and it never reaches s.potions). */
export const HS_PROLOGUE_POTIONS=1;
export const extraFreePotions=(s,id)=>id==='prologue'&&s?.schoolMode==='high'&&s?.settings?.difficulty!=='easy'?HS_PROLOGUE_POTIONS:0;
