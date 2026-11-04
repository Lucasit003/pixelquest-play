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
import {unlocked,runeRank,runeMul,runeCd,RUNE_MAX,RUNE_STEP,RUNE_CDR} from './math.js';
import {masteredTopics} from './gear.js';
import {asleep} from '../academics/awakening.js';
export {RUNE_MAX};
export const RUNE_COLOR='#7ff0ff',RUNE_NUMERALS=['','I','II','III'];
const BY_ID=Object.fromEntries(Object.values(ABILITIES).flat().map(a=>[a.id,a]));
/* each hero has its own rune budget (review, 31 Oct): every hero may place all the points, so switching heroes never strands runes */
const HERO_OF=Object.fromEntries(Object.entries(ABILITIES).flatMap(([h,list])=>list.map(a=>[a.id,h])));
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
/* improve20-r9e-nov1 #6 (audit8 a17): the HUD said "12 runes are ready" (placeable) while Home → Abilities said "13 runes to place" (free).
   One tally and one wording everywhere: place = what fits in owned abilities now, saved = the rest, waiting for the next ability (or spare once
   every ability of this hero is owned). "12 runes to place · 1 saved for your next ability" */
export function runeTally(s){const free=runesFree(s),place=runesPlaceable(s),all=(ABILITIES[s?.hero]||[]).length,own=ownedAbilities(s).length;return {free,place,saved:free-place,full:all>0&&own>=all};}
export function runeCountText(s,{where=''}={}){const {place,saved,full}=runeTally(s);return `${place} ${place===1?'rune':'runes'} to place${where}${saved>0?` · ${saved} ${full?'spare: every ability is at III':'saved for your next ability'}`:''}`;}
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
/* improve20-r8a-nov1 #5 (audit7 d20): runes piled up behind "6 runes are ready: place them at Home → Abilities" (13 on the ending save). "Place
   for me" puts each free rune, one at a time, on the ability it helps most: an equipped ability (the loadout) before one in the bag, the lowest
   rank first (so ranks rise evenly), then the most damage, healing or shield per second of cooldown, then ladder order. Only owned abilities
   below rank III take one; what does not fit waits, banked, for the next ability (as runesPlaceable says). Returns the ids placed, in order.
   Runes never unlock anything, and Reset runes still gives them all back. */
export const runeHelp=a=>((a?.damage||0)*Math.max(1,a?.count|0||1)+(a?.heal||0)+(a?.shield||0)+(a?.attackBuff>1?(a.attackBuff-1)*100:0))/Math.max(1,a?.cd||1);
export function runePick(s){const eq=new Set((s?.loadouts?.[s?.hero]||[]).filter(Boolean)),own=ownedAbilities(s).filter(a=>runeRank(s,a.id)<RUNE_MAX);if(!own.length)return null;
 const pool=own.some(a=>eq.has(a.id))?own.filter(a=>eq.has(a.id)):own;return [...pool].sort((a,b)=>runeRank(s,a.id)-runeRank(s,b.id)||runeHelp(b)-runeHelp(a)||a.gate-b.gate)[0];}
export function autoPlaceRunes(s){const out=[];for(let i=0;i<64&&runesFree(s)>0;i++){const a=runePick(s);if(!a||!placeRune(s,a.id))break;out.push(a.id);}return out;}

/* improve20-r14b-nov3 #1 (audit11 #1, shot 21: a level-9 Warrior lost m1 twice with "6 runes to place" in small print): what placing the
   waiting runes is worth, worked out, never guessed. Place for me (autoPlaceRunes) runs on a copy; the gain is the change in the output of the
   abilities on the hotbar, each weighted by what it does per second (runeHelp: damage, healing, shield or attack boost per second of cooldown)
   and scaled by its rank (runeMul, and rank III's shorter cooldown, runeCd). -> {n: runes placed, pct: whole % more ability power, ids} */
export function runePlaceGain(s){const n0=runesPlaceable(s);if(!(n0>0))return {n:0,pct:0,ids:[]};const t={...s,runes:{...(s.runes||{})}},ids=autoPlaceRunes(t);if(!ids.length)return {n:0,pct:0,ids:[]};
 const bar=(s.loadouts?.[s.hero]||[]).filter(Boolean).map(id=>BY_ID[id]).filter(a=>a&&owns(s,a)),pool=bar.length?bar:ownedAbilities(s),out=r=>runeMul(r)/runeCd(r);
 let w0=0,w1=0;for(const a of pool){const w=runeHelp(a)||1;w0+=w*out(runeRank(s,a.id));w1+=w*out(runeRank(t,a.id));}
 return {n:ids.length,pct:w0>0?Math.max(0,Math.round((w1/w0-1)*100)):0,ids};}
/* improve20-r14b-nov3 #3 (audit11 #14: "6 runes to place" in town, on the defeat card and in the Journal, never cleared for you): the nag offers
   ONE auto-place, on a defeat card or on the second town visit with runes waiting, then goes quiet until the rune count changes (a new topic
   mastered, or runes placed or reset). Home → Abilities and the Journal keep a quiet count. Additive save field s.settings.runeNag =
   {n: the free count it is about, visits, offered, done}; a bad or stale record starts over. */
export const RUNE_NAG_VISITS=2;
/* runeNagView reads without writing (reading a save never changes it); runeNag stores the fresh record before a change */
export function runeNagView(s){const free=runesFree(s),v=s?.settings?.runeNag;return !v||typeof v!=='object'||v.n!==free?{n:free,visits:0,offered:false,done:false}:{n:free,visits:Math.max(0,Math.min(99,v.visits|0)),offered:!!v.offered,done:!!v.done};}
export function runeNag(s){const g=runeNagView(s);if(s?.settings)s.settings.runeNag=g;return g;}
/* quiet: runes wait, the one offer was made and the count has not changed since */
export const runesQuiet=s=>runesPlaceable(s)>0&&runeNagView(s).done;
/* a return to town with runes waiting counts a visit; a visit after the one where the offer showed makes it quiet */
export function runeTownVisit(s){if(!(runesPlaceable(s)>0))return runeNagView(s);const g=runeNag(s);if(g.done)return g;if(g.offered){g.done=true;return g;}g.visits++;return g;}
/* the town offer shows from the second visit; showing it marks it offered (it stays up for this visit) */
export const runeTownOfferDue=s=>runesPlaceable(s)>0&&runesShown(s)&&(g=>!g.done&&g.visits>=RUNE_NAG_VISITS)(runeNagView(s));
export function markRuneOffer(s,{now=false}={}){const g=runeNag(s);g.offered=true;if(now)g.done=true;return g;}
/* the defeat card's lead: the first defeat with runes waiting that are not quiet. -> {n, pct, ids} or null */
/* improve20-r18a-nov3 #2 (audit13 #13): an offer worth under RUNE_CARD_MIN % is not shown on result cards ("Place runes: +3%" was noise) */
export const RUNE_CARD_MIN=5;
/* improve20-r20d-nov4 #1 (audit14 #1: 6 runes waited in grey small print on the Rift's second loss): loud, from the second loss in a row, the offer leads even after the one town/card offer went quiet (a loss is when the runes help) */
export function runeDefeatLead(s,{loud=false}={}){if(!runesShown(s)||!loud&&runesQuiet(s))return null;const g=runePlaceGain(s);return g.n>0&&g.pct>=RUNE_CARD_MIN?g:null;}
export const runeLeadText=g=>`Place ${g.n} ${g.n===1?'rune':'runes'}: +${g.pct}% ability power`;
