/* improve25-r25f-nov5 #4 (audit16 plan 7: make the next power feel near between topics): when the next ability still needs 3 or more topics,
   every 3rd topic mastered toward it brightens a soft glow at the hero's feet (gfx/hero-glow.js, drawn by code under the sprite, never on it),
   in that ability's subject colour, in steps (3, 6, 9...). Earned by mastery only: the count is topics mastered since this ability became the
   next one (s.glow = {id, base}, additive within save v9, kept by core/save.js normalize; base = the subject's mastered topics then). It never
   goes down while the ability stays next (mastery is never removed), and it resets to nothing once the ability wakes (the next ability starts
   its own count); the wake is the payoff. No timer, no streak; nothing here unlocks anything or changes a number in combat. */
import {SUBJECTS} from './data.js';
export const GLOW_EVERY=3,GLOW_MIN=3;
export function cleanGlow(v){return v&&typeof v==='object'&&typeof v.id==='string'&&v.id.length<64&&Number.isFinite(+v.base)&&+v.base>=0?{id:v.id,base:Math.floor(+v.base)}:null;}
/* keeps s.glow on the road's ability (academics/learning-road.js learningRoad); returns true when it changed the save */
export function glowSync(s,road){if(!s)return false;const a=road?.ability;if(!a||road.sleeping){if(s.glow){delete s.glow;return true;}return false;}
 const d=Math.max(0,road.done|0);if(s.glow?.id!==a.id){s.glow={id:a.id,base:d};return true;}if(d<s.glow.base){s.glow.base=d;return true;}return false;}
/* -> {id, name, subject, color, k (topics mastered toward it), need (topics it needed when it became next), step} or null */
export function glowState(s,road){const g=cleanGlow(s?.glow),a=road?.ability;if(!g||!a||g.id!==a.id||road.sleeping||!road.reachable)return null;
 const need=(road.total|0)-g.base;if(need<GLOW_MIN)return null;const k=Math.max(0,Math.min(need,(road.done|0)-g.base));
 return {id:a.id,name:a.name,subject:a.subject,color:SUBJECTS[a.subject]?.color||'#d8c8ff',k,need,step:Math.floor(k/GLOW_EVERY)};}
/* the mastery summary's line: "Your glow grows: 3 of 8 toward Ground Slam" when this topic lit a step, else where the next step is */
export function glowLine(g){if(!g||g.k<1)return null;if(g.k%GLOW_EVERY===0)return `Your glow grows: ${g.k} of ${g.need} toward ${g.name}`;const at=(Math.floor(g.k/GLOW_EVERY)+1)*GLOW_EVERY;return at<=g.need?`Your glow: ${g.k} of ${g.need} toward ${g.name}. It brightens at ${at}.`:`Your glow: ${g.k} of ${g.need} toward ${g.name}`;}
/* what the hero wears now (main.js sets it when the road changes; the town and level drawers read it) */
let cur=null;
export const setHeroGlow=g=>{cur=g&&g.step>0?g:null;};
export const heroGlow=()=>cur;
