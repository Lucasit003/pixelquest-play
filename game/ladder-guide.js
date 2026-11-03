/* Short player-facing previews from the shipped encounter rules. Reads progress, never writes it. */
import {LEVELS,tiered,tierOpen,tierDone,tierRecord,starsOf,levelOpen,starsShort,levelReward,levelById,CHAPTERS,levelXPReward} from './levels.js';
import {TIER_KEYS,TIERS,adviceLevel,XP_TUNE,tierKey} from './tiers.js';
import {gradeRank} from './grade.js';
import {overLevelXP} from './math.js';
import {MAPS,PADS} from './worldmap-layout.js';
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
 return {changes:`${name}. ${k==='legendary'?'Shorter warnings. Enemies grow to match your level. ':''}${moves}`,answer:sentence(answer),goal:answer};}
/* stargate-oct29 (midgame-oct29 finding 2): where to earn the stars a star gate still needs. An uncleared open tier (up to 3 new
   stars) comes before a replay for par; then the most stars still available, the easier tier, and the pad nearest the gate: the
   nearest chapter, then the shortest map distance to that chapter's road toward the gate (its edge gate, or the gate pad itself).
   -> {level,tier,done,gain} or null. Reads the save only. */
export function starSource(s,gateId){const gl=levelById(gateId);if(!gl)return null;const ci=id=>CHAPTERS.findIndex(c=>c.id===id),gc=ci(gl.chapter),c=[];
 const anchor=ch=>{if(ch===gl.chapter)return PADS[gateId]||null;const to=CHAPTERS[ci(ch)+(gc>ci(ch)?1:-1)]?.id;return MAPS[ch]?.gates?.find(g=>g.to===to)||null;};
 for(const l of LEVELS){if(!tiered(l)||l.id===gateId)continue;const a=anchor(l.chapter),p=PADS[l.id],far=Math.abs(gc-ci(l.chapter))*1e4+(a&&p?Math.hypot(a.x-p.x,a.y-p.y):5e3);
  TIER_KEYS.forEach((k,ti)=>{if(!tierOpen(s,l.id,k))return;const have=starsOf(s,l.id,k);if(have>=3)return;const done=tierDone(s,l.id,k);c.push({level:l,tier:k,done,gain:done?3-have:3,ti,far});});}
 c.sort((a,b)=>a.done-b.done||b.gain-a.gain||a.ti-b.ti||a.far-b.far);const b=c[0];return b?{level:b.level,tier:b.tier,done:b.done,gain:b.gain}:null;}
const nextTier=(s,l)=>TIER_KEYS.find(k=>tierOpen(s,l.id,k)&&!tierDone(s,l.id,k));
/* oct25-phone2: the tactic for the tier NEXT GOAL names ("Tip: leave the arrow row."), or '' when the goal is not a tier clear; never part of the goal text */
export function ladderTip(s,l){if(!tiered(l)||starsShort(s,l.id)||!levelOpen(s,l.id))return '';const k=nextTier(s,l);return k?`Tip: ${mechanicPreview(l,k).goal}.`:'';}
export function ladderGoal(s,l){if(!tiered(l))return '';const g=starsShort(s,l.id);if(g){const src=starSource(s,l.id)/* stargate-oct29: an uncleared pad before a replay for par */;return `${g.have}/${g.need} stars. ${src?`Earn stars at ${src.level.name}${src.tier==='normal'?'':` on ${TIERS[src.tier].label}`}.`:'Earn stars on earlier levels.'}`;}
 if(!levelOpen(s,l.id)){const p=l.requires.map(id=>LEVELS.find(x=>x.id===id)).find(Boolean);return p?`Clear ${p.name}.`:'';}
 const next=nextTier(s,l);/* polish4-oct27 (new-player playtest): "Beat Goblin Camp on Normal." read oddly (a place is cleared, not beaten, and Normal is the default); it is now "Clear Goblin Camp.", then "Clear Goblin Camp on Heroic." */if(next)return `Clear ${l.name.replace(/^The /,"the ")}${next==='normal'?'':` on ${TIERS[next].label}`}.`;/* oct25-phone2: NEXT GOAL is one goal; it used to read "Legendary open: leave the arrow row.", a goal glued to a tactic. The tactic is ladderTip, shown on its own line */
 const stars=TIER_KEYS.find(k=>starsOf(s,l.id,k)<3);if(stars)return `Earn 3 stars on ${TIERS[stars].label}.`;
 const grade=TIER_KEYS.find(k=>tierRecord(s,l.id,k)?.best?.grade!=='S+');return grade?`Try for grade S+ on ${TIERS[grade].label}.`:'All goals earned. Replay your favorite tier.';}
/* oct24-overlevel: the first-clear XP shown is what this hero would be paid (math.js overLevelXP against the tier card's level) */
export function rewardPreview(s,l,k){const done=tierDone(s,l.id,k),gold=levelReward(l,k),clearXP=overLevelXP(levelXPReward(l,k),s?.level||1,adviceLevel(l,k)),payout=done?`Replay: ${Math.round(gold/4)} gold. A win adds ${Math.round((XP_TUNE.win[tierKey(k)]||0)*100)}% bonus XP.`:`First clear: ${gold} gold + kill gold. ${clearXP} XP${clearXP<levelXPReward(l,k)?' (reduced: you are well above the recommended level)':''}.`,bosses=[l.boss,l.duo].filter(Boolean),materials=bosses.map(b=>{const m=bossMat(b),extra=s?.gear?.beat?.[b]?0:firstKillBonus(m);/* oct24-progress: an Elderwood or Emberkeep boss's first kill pays FIRST_KILL_BONUS more (gear.js rollGear) */return `${TIER_COUNT[k]+extra} ${MATS[m].name}${extra?' (first kill)':''}`;}).join(' + '),grants=k==='legendary'?bosses.map(b=>legendaryReward(s,b)).filter(Boolean):[];
 return {payout,materials,grants,first:grants.map(g=>g.item?ITEM[g.item].name:`${g.n} extra ${MATS[g.mat].name}`).join(' + ')};}
/* improve20-r10c-nov2 #19 (kidsim-nov2 #18: mid and late saves made 16 Normal clears with 0 deaths): before the run, on the map card and the
   tier picker, Heroic is offered when it is open here and not yet won and either every Normal star is earned ("All stars earned: try
   Heroic.") or the hero is HEROIC_LEAD_OVER or more levels above the level's Normal band (tiers.js adviceLevel). Only the overlevelled case
   (lead:true) also makes Heroic the picker's first choice: a hero near the band keeps Normal first. The result card's own nudge
   (next-step.js overlevelled) is unchanged. */
/* improve20-r12c-nov2 #2 (kidsim2 #5: mid and late saves won 26 of 26 with 0 deaths, and the lead never fired on a mid save): the lead now comes
   from HEROIC_LEAD_OVER = 5 levels over the band (it was 8), or on a level's second Normal clear (`again`: Normal won and played at least
   twice, so the run being offered or the one just won is at least the second time through). The win card's "Try Heroic" primary reads
   this same rule (main.js heroicNudge); a learning lead on the card (round 12 lane A) still comes first there. Pure. */
export const HEROIC_LEAD_OVER=5;
export const secondClear=(s,id)=>{const r=s?.levels?.[id];return !!r?.done&&(r.plays|0)>=2;};
/* improve20-r15b-nov3 #6 (kidsim3 k13: Nia, a typical mid save, won 6 of 6 with 0 deaths at grades A/S+): from a level's first S grade on Normal
   (its best grade S or S+, sGrade) Heroic leads too ("Grade S on <level>! Try it on Heroic for a real fight."). A learning lead on the win card
   still comes first, and a visit with a loss shows no Heroic at all (main.js levelEnd). */
export const sGrade=(s,id)=>gradeRank(s?.levels?.[id]?.best?.grade)>=gradeRank('S');
export function heroicLead(s,id){const l=levelById(id);if(!l||!tiered(l)||!levelOpen(s,id)||!tierOpen(s,id,'heroic')||tierDone(s,id,'heroic'))return null;const over=(s?.level|0)-adviceLevel(l,'normal'),high=over>=HEROIC_LEAD_OVER,again=secondClear(s,id),sg=sGrade(s,id),lead=high||again||sg,card=high?`You are ${over} levels above ${l.name}. Try it on Heroic for a real fight.`:sg?`Grade ${s.levels[id].best.grade} on ${l.name}! Try it on Heroic for a real fight.`:again?`You have cleared ${l.name}. Try it on Heroic for a real fight.`:null/* the win card's line */;
 if(starsOf(s,id,'normal')>=3)return {kind:'stars',over,lead,text:'All stars earned: try Heroic.',card};
 return high?{kind:'over',over,lead,text:`You are ${over} levels above ${l.name}. Try Heroic for a real fight.`,card}:again?{kind:'again',over,lead,text:`You have cleared ${l.name}. Try Heroic for a real fight.`,card}:sg?{kind:'grade',over,lead,text:`Grade ${s.levels[id].best.grade} here: try Heroic for a real fight.`,card}:null;}
