/* Ability Runes (kidfix-b-oct31; docs/playtest/kidfix-b-oct31/REPORT.md; decided 31 Oct 2026 under the owner's delegation).
   Every mastered topic gives 1 rune point, in any subject or school: the point total IS the number of mastered topics
   (game/gear.js masteredTopics: lessons with points, the same test as academics/lessons.js mastered()). Mastery is never lost,
   so points never drop, and a save from before runes gets its points for what it has mastered, ready to place.
   The player places runes in abilities they already own (unlocked() and awake), up to RUNE_MAX (3) each: rank I, II, III.
   Save field (additive within v9, no version bump): s.runes = {[abilityId]: rank}. cleanRunes() accepts a save without it and
   clamps bad data: unknown or unowned ids dropped, no rank above 3, and the total placed never above the points.
   A placed rune is never taken away except by the player's own free "Reset runes" at Home (the current hero's runes only).
   Each hero has its own budget of all the points, so a hero switch never strands runes.
   Runes never unlock anything: unlocked() never reads s.runes. Pure: callers pass the save. */
import {ABILITIES} from './abilities.js';
import {unlocked,runeRank,RUNE_MAX,RUNE_STEP,RUNE_CDR} from './math.js';
import {masteredTopics} from './gear.js';
import {asleep} from '../academics/awakening.js';
export {RUNE_MAX};
export const RUNE_COLOR='#7ff0ff',RUNE_NUMERALS=['','I','II','III'];
const BY_ID=Object.fromEntries(Object.values(ABILITIES).flat().map(a=>[a.id,a]));
/* each hero has its own rune budget (review, 31 Oct): every hero may place all the points, so switching heroes never strands runes */
const HERO_OF=Object.fromEntries(Object.entries(ABILITIES).flatMap(([h,list])=>list.map(a=>[a.id,h])));
export const heroOfAbility=id=>HERO_OF[id]||null;
export const abilityById=id=>BY_ID[id]||null;
export const runePoints=s=>masteredTopics(s);
export const runesPlaced=(s,hero=s?.hero)=>Object.keys(s?.runes||{}).filter(id=>HERO_OF[id]===hero).reduce((t,id)=>t+runeRank(s,id),0);
export const runesFree=(s,hero=s?.hero)=>Math.max(0,runePoints(s)-runesPlaced(s,hero));
export const owns=(s,a)=>!!a&&unlocked(s,a)&&!asleep(s,a);
/* the current hero's owned abilities, in ladder order */
export const ownedAbilities=(s,hero=s?.hero)=>[...(ABILITIES[hero]||[])].sort((a,b)=>a.gate-b.gate).filter(a=>owns(s,a));
export function canPlace(s,id){const a=BY_ID[id];return !!a&&owns(s,a)&&runeRank(s,id)<RUNE_MAX&&runesFree(s)>0;}
/* place one rune in ability id; returns the new rank, or 0 when it cannot be placed */
export function placeRune(s,id){if(!canPlace(s,id))return 0;const r=s.runes&&typeof s.runes==='object'?s.runes:(s.runes={});r[id]=runeRank(s,id)+1;return r[id];}
/* Reset is free and open whenever the current hero has a rune placed; it returns only that hero's runes */
export const canReset=s=>runesPlaced(s)>0;
export function resetRunes(s){if(!canReset(s))return false;for(const id of Object.keys(s.runes))if(HERO_OF[id]===s.hero)delete s.runes[id];return true;}
/* improve20-q-oct31 (audit2 #21): rune lines (the result card, rune goals, objective text: game/rune-goal.js runeLead) wait for the
   save's first rune and an owned ability whose slot can take it. A new player's first lesson wakes the starter ability before any
   topic is mastered, and "Master 1 more topic: earn a rune" then led the lesson summary above the one next goal (the second
   ability, which that same first topic opens). Home → Abilities keeps its rune bar and slots: that is where runes live. */
export const runesShown=s=>runePoints(s)>0&&ownedAbilities(s).length>0;
/* any owned ability of the current hero still below rank III */
export const runeRoom=s=>ownedAbilities(s).some(a=>runeRank(s,a.id)<RUNE_MAX);
/* how many free runes the current hero can place right now (the rest wait, banked, for the next ability) */
export const runesPlaceable=s=>Math.min(runesFree(s),ownedAbilities(s).reduce((t,a)=>t+RUNE_MAX-runeRank(s,a.id),0));
export function cleanRunes(v,s){const out={};if(!v||typeof v!=='object'||Array.isArray(v))return out;
 for(const [id,n] of Object.entries(v).slice(0,64)){const k=Math.floor(Number(n));if(!BY_ID[id]||!(k>0)||!owns(s,BY_ID[id]))continue;out[id]=Math.min(RUNE_MAX,k);}
 const pts=runePoints(s);for(const h of new Set(Object.keys(out).map(id=>HERO_OF[id]))){let over=Object.keys(out).filter(id=>HERO_OF[id]===h).reduce((t,id)=>t+out[id],0)-pts;const ids=Object.keys(out).filter(id=>HERO_OF[id]===h).reverse();
  while(over>0&&ids.length){const id=ids[0];out[id]--;over--;if(out[id]<=0){delete out[id];ids.shift();}}}
 return out;}
/* What one rank does, in one line: "Spirit Bolt II: +10% damage, brighter bolt" (the cast's visible change named per rank) */
/* what a rank multiplies: damage (summons hit with the totem's power), healing, a shield, an attack boost's bonus, the Stone
   Guardian's punch, or, for an ability with none of those (Vanish, Hunter's Mark, Sanctuary, Blood Frenzy), how long it lasts */
export const runeDurationOnly=a=>!!a&&!(a.damage>0)&&!(a.heal>0)&&!(a.shield>0)&&!(a.attackBuff>1)&&a.id!=='stone-totem';
const EFFECT=a=>a.heal>0?'healing':a.kind==='totem'?(a.damage>0?'wolf power':'guardian power'):a.shield>0?(a.attackBuff>1?'shield and attack boost':'shield'):a.attackBuff>1?'attack boost':runeDurationOnly(a)?'duration':'damage';
const NOUN=a=>({projectile:'bolt',chain:'chain',aoe:'blast',melee:'strike',heal:'glow',buff:'aura',totem:'totem',mark:'mark',aura:'circle'})[a.kind]||'cast';
export function runeLine(a,rank){if(!a||!(rank>=1&&rank<=RUNE_MAX))return '';const pct=Math.round(RUNE_STEP*100),look=rank===1?`rune-blue ${NOUN(a)}`:rank===2?`bigger, brighter ${NOUN(a)}`:`an extra rune ring, ${Math.round(RUNE_CDR*100)}% faster cooldown`;
 return `${a.name} ${RUNE_NUMERALS[rank]}: +${pct}% ${EFFECT(a)}, ${look}`;}
