/* Short player-facing previews from the shipped encounter rules. Reads progress, never writes it. */
import {LEVELS,tiered,tierOpen,tierDone,tierRecord,starsOf,levelOpen,starsShort,levelReward,levelXPReward} from './levels.js';
import {TIER_KEYS,TIERS,adviceLevel,XP_TUNE,tierKey} from './tiers.js';
import {overLevelXP} from './math.js';
import {encounterFor} from './tier-encounters.js';
import {ENEMY_TYPES} from './enemies.js';
import {NORMAL_SEQUENCES} from '../scenes/normal-pacing.js';
import {legendaryReward,bossMat,TIER_COUNT,ITEM,MATS,firstKillBonus} from './gear.js';
const HAZARDS={
 ambush:['Ambush lanes','leave the marked lane'],bubble:['Bubble patches','step clear of the bubbles'],volley:['Arrow rows','leave the arrow row'],stones:['Falling stones','step out of the stone marks'],graves:['Rising bone rows','leave the bone row'],roots:['Root patches','step clear of the roots'],rubble:['Falling rubble','leave the rubble marks'],thorns:['Thorn rows','leave the thorn row'],wire:['Slowing tripwires','step clear of the wires'],spores:['Spore patches','step clear of the spores'],
 vents:['Vent rows','leave the glowing vent row'],hammers:['Hammer marks','step out of the hammer marks'],jets:['Fire jet rows','leave the fire jet row'],drill:['Drill volleys','leave the volley row'],banks:['Vent banks','move into the middle gap'],faults:['Glass fault rows','leave the glass row'],islands:['Lava pulses','stand on a safe side island'],gust:['Ash gust rows','leave the ash row'],
 tide:['Slowing tide rows','step clear of the tide rows'],lures:['Lure patches','step away from the lure'],echoes:['Echo marks','leave your marked spot'],stars:['Falling star marks','step clear of the star marks'],beats:['Choir marks','leave the choir marks'],portals:['Portal marks','step clear of the portal marks'],tentacles:['Tentacle marks','leave the tentacle marks'],pollen:['Pollen patches','step clear of the pollen']};
const plain=s=>s.replaceAll('-',' ');
const sentence=s=>plain(s.charAt(0).toUpperCase()+s.slice(1))+'.';
export function mechanicPreview(l,k){const r=encounterFor(l,k);if(!r){/* playtest ch2: a paced Normal boss (chapters 2-3) opens with and teaches its signature move, so the card names that one, not the first move in its list */const move=(k==='normal'&&NORMAL_SEQUENCES[l.id]?.[0])||ENEMY_TYPES[l.boss]?.attacks?.[0]?.name;return {changes:move?`Watch for the ${plain(move)}.`:'Meet the enemies and boss.',answer:'Move out of the warnings. Attack in the gaps.',goal:move?`watch for the ${plain(move)}`:'watch the boss warnings'};}
 const [name,answer]=HAZARDS[r.hazard.kind],moves=r.sequence?`${sentence(r.sequence.call)} Then ${plain(r.sequence.then)}.`:l.id==='e1'?'Grubnak calls guards.':"The Bog King jumps at you.";
 return {changes:`${name}. ${k==='legendary'?'Shorter warnings. ':''}${moves}`,answer:sentence(answer),goal:answer};}
const nextTier=(s,l)=>TIER_KEYS.find(k=>tierOpen(s,l.id,k)&&!tierDone(s,l.id,k));
/* oct25-phone2: the tactic for the tier NEXT GOAL names ("Tip: leave the arrow row."), or '' when the goal is not a tier clear; never part of the goal text */
export function ladderTip(s,l){if(!tiered(l)||starsShort(s,l.id)||!levelOpen(s,l.id))return '';const k=nextTier(s,l);return k?`Tip: ${mechanicPreview(l,k).goal}.`:'';}
export function ladderGoal(s,l){if(!tiered(l))return '';const g=starsShort(s,l.id);if(g){const pad=LEVELS.find(p=>tiered(p)&&levelOpen(s,p.id)&&TIER_KEYS.some(k=>tierOpen(s,p.id,k)&&starsOf(s,p.id,k)<3));return `${g.have}/${g.need} stars. ${pad?`Earn stars at ${pad.name}.`:'Earn stars on earlier levels.'}`;}
 if(!levelOpen(s,l.id)){const p=l.requires.map(id=>LEVELS.find(x=>x.id===id)).find(Boolean);return p?`Clear ${p.name}.`:'';}
 const next=nextTier(s,l);if(next)return `Beat ${l.name.replace(/^The /,"the ")} on ${TIERS[next].label}.`;/* oct25-phone2: NEXT GOAL is one goal; it used to read "Legendary open: leave the arrow row.", a goal glued to a tactic. The tactic is ladderTip, shown on its own line */
 const stars=TIER_KEYS.find(k=>starsOf(s,l.id,k)<3);if(stars)return `Earn 3 stars on ${TIERS[stars].label}.`;
 const grade=TIER_KEYS.find(k=>tierRecord(s,l.id,k)?.best?.grade!=='S+');return grade?`Try for grade S+ on ${TIERS[grade].label}.`:'All goals earned. Replay your favorite tier.';}
/* oct24-overlevel: the first-clear XP shown is what this hero would be paid (math.js overLevelXP against the tier card's level) */
export function rewardPreview(s,l,k){const done=tierDone(s,l.id,k),gold=levelReward(l,k),clearXP=overLevelXP(levelXPReward(l,k),s?.level||1,adviceLevel(l,k)),payout=done?`Replay: ${Math.round(gold/4)} gold. A win adds ${Math.round((XP_TUNE.win[tierKey(k)]||0)*100)}% bonus XP.`:`First clear: ${gold} gold + kill gold. ${clearXP} XP${clearXP<levelXPReward(l,k)?' (reduced: you are well above the recommended level)':''}.`,bosses=[l.boss,l.duo].filter(Boolean),materials=bosses.map(b=>{const m=bossMat(b),extra=s?.gear?.beat?.[b]?0:firstKillBonus(m);/* oct24-progress: an Elderwood or Emberkeep boss's first kill pays FIRST_KILL_BONUS more (gear.js rollGear) */return `${TIER_COUNT[k]+extra} ${MATS[m].name}${extra?' (first kill)':''}`;}).join(' + '),grants=k==='legendary'?bosses.map(b=>legendaryReward(s,b)).filter(Boolean):[];
 return {payout,materials,grants,first:grants.map(g=>g.item?ITEM[g.item].name:`${g.n} extra ${MATS[g.mat].name}`).join(' + ')};}
