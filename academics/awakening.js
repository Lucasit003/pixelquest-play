/* The awakening (owner/integrator decision, 7 Oct 2026; docs/review/v2/edu/HOOKS.md). A class's gate-0
   starter ability needs no mastery, so it was always unlocked. On a NEW save it now stays asleep until the
   first lesson is completed, and then "your training awakens" it with the unlock celebration. No gate or
   mastery rule changes: unlocked() still says the starter is unlocked, XP and gold still unlock nothing,
   and every gated ability works exactly as before.

   save.awakened is an additive field. fresh() starts it at false; normalize() keeps a stored boolean, and a
   save from before the field existed loads as awakened when it shows any progress (a lesson record, XP,
   a hero level above 1, an answer, mastery, or a level done), so no veteran ever loses a starter.
   Pure: these functions read or change only the save passed in. */
import {ABILITIES} from '../game/abilities.js';

export const awakened=save=>save?.awakened!==false;
export const isStarter=a=>a.gate===0;
/* A starter that is still asleep: listed as locked, not equippable, and absent from the hotbar. */
export const asleep=(save,a)=>!awakened(save)&&isStarter(a);
export const starterOf=hero=>ABILITIES[hero]?.find(isStarter)||null;

/* The HUD and combat share a filtered view; a sleeping starter never becomes usable just because an
   older save already selected it. Keep the stored slots intact for the first-lesson awakening. */
export function activeLoadout(save,hero=save.hero){
 const ids=save.loadouts?.[hero]??[starterOf(hero)?.id??null];
 return ids.slice(0,4).map(id=>{const a=ABILITIES[hero]?.find(a=>a.id===id);return a&&!asleep(save,a)?id:null;});
}

/* What normalize() uses for a save that has no awakened field yet. */
export const hasProgress=s=>Object.keys(s.lessons||{}).length>0||(+s.xp||0)>0||(+s.level||1)>1||Object.keys(s.answers||{}).length>0
 ||Object.values(s.mastery||{}).some(m=>Array.isArray(m)&&m.some(v=>+v>0))||Object.values(s.levels||{}).some(l=>l?.done)||(s.cleared||[]).length>0;
export const awakenedOnLoad=(value,s)=>typeof value?.awakened==='boolean'?value.awakened:hasProgress(s);

/* Before the awakening, every hero's hotbar is empty (combat's default loadout would otherwise hand out the
   starter). Only fills loadouts a save has not set, and does nothing once awakened. */
export function sleepLoadouts(save){
 if(awakened(save))return false;
 save.loadouts??={};
 for(const h of Object.keys(ABILITIES))if(!Array.isArray(save.loadouts[h])||!save.loadouts[h].some(Boolean))save.loadouts[h]=[null,null,null,null];
 return true;
}

/* Completing the first lesson: wake the starter, put it in slot 1 of every empty hotbar, and return the
   current hero's starter for the celebration (null if the save was already awake). */
export function awaken(save){
 if(awakened(save))return null;
 save.awakened=true;
 for(const h of Object.keys(ABILITIES)){const ids=save.loadouts?.[h];if(!Array.isArray(ids)||!ids.some(Boolean))(save.loadouts??={})[h]=[starterOf(h).id,null,null,null];}
 return starterOf(save.hero);
}
