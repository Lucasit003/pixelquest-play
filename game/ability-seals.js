/* Ability seals (improve20-r20j-nov4, audit14 "Fun over many hours" item 6; docs/design/ABILITY_SEALS.md). A seal is a glowing rune
   barrier on a level map that closes a short pocket at the far verge, with a cache chest inside. It is class-agnostic: it breaks when the
   hero casts `cast` DIFFERENT woken abilities into it (never the basic attack, never a borrowed Echo), and only a hero with `awake` woken
   abilities can (the pilot keeps awake = cast). So every new ability opens more of the map; nothing but mastery and hero level wakes one.
   - Reward: fixed and shown before the seal breaks (gold and Essence; the chapter's keepsake title with its first seal). Never random.
   - Paid once: a seal broken stays broken for the save (every hero), and its cache pays once; later runs walk through an open pocket.
   - A hero who ignores a seal loses nothing: no grade part, secret count, star or gate reads it.
   Save (additive within v9, kept by core/save.js normalize via cleanSeals): s.abilitySeals = {broken:[id], looted:[id]} (looted is a
   subset of broken). Pure: callers pass the save; combat's side is scenes/ability-seal-fx.js. Nothing here unlocks, masters or answers. */
import {LEVELS,levelById,levelOpen,levelDone,awakeCount,CHAPTERS} from './levels.js';
import {ESSENCE} from './chests.js';
/* {id, level, cast (different woken abilities cast into it), awake (woken abilities the hero must have), x (the pocket's centre on the
   level map; the pocket sits on the far verge), gold, essence, chapter}. Placed on open floor between two fights (clear of every arena's lock, so no fight ever meets the pocket) and 70+ units from every secret and spot. */
export const SEALS=Object.freeze([
 Object.freeze({id:'bog-seal',level:'e2',cast:2,awake:2,x:920,gold:60,essence:2,chapter:'elderwood'}),
 /* improve23-r23s-nov4 #2 (the rollout, ABILITY_SEALS.md's table; slots from R20J's scan: outside every arena lock, 70+ from secrets, open verge, road open): e3 (2) and e7 (3, the lure toward m1's gate) */
 Object.freeze({id:'warcamp-seal',level:'e3',cast:2,awake:2,x:900,gold:60,essence:2,chapter:'elderwood'}),
 Object.freeze({id:'watch-seal',level:'e7',cast:3,awake:3,x:1715,gold:60,essence:2,chapter:'elderwood'}),
 Object.freeze({id:'bridge-seal',level:'m3',cast:3,awake:3,x:2255,gold:120,essence:3,chapter:'emberkeep'}),
 /* improve23-r23s-nov4 #2: m4 and m7 need 4 */
 Object.freeze({id:'barracks-seal',level:'m4',cast:4,awake:4,x:2080,gold:120,essence:3,chapter:'emberkeep'}),
 Object.freeze({id:'throne-seal',level:'m7',cast:4,awake:4,x:2965,gold:120,essence:3,chapter:'emberkeep'}),
 Object.freeze({id:'starfall-seal',level:'v4',cast:4,awake:4,x:2240,gold:180,essence:4,chapter:'veilmoor'}),
 /* improve23-r23s-nov4 #2: the hotbar holds four, so v5 and v6 keep cast 4 and raise awake to 5 and 6 */
 Object.freeze({id:'choir-seal',level:'v5',cast:4,awake:5,x:2080,gold:180,essence:4,chapter:'veilmoor'}),
 Object.freeze({id:'veilgate-seal',level:'v6',cast:4,awake:6,x:1500,gold:180,essence:4,chapter:'veilmoor'})]);
export const SEAL=Object.freeze(Object.fromEntries(SEALS.map(z=>[z.id,z])));
/* the keepsake each chapter's first opened cache gives: an earned title (game/titles.js reads sealChapterDone) */
export const SEAL_TITLES=Object.freeze({elderwood:['rune-breaker','Rune Breaker'],emberkeep:['ember-seal-breaker','Ember Seal Breaker'],veilmoor:['veil-unsealer','Veil Unsealer']});
export const sealsIn=levelId=>SEALS.filter(z=>z.level===levelId);
export const cleanSeals=v=>{const ids=x=>Array.isArray(x)?[...new Set(x.filter(id=>typeof id==='string'&&SEAL[id]))]:[];const broken=ids(v?.broken),looted=ids(v?.looted).filter(id=>broken.includes(id));return {broken,looted};};
export const sealBroken=(s,id)=>!!s?.abilitySeals?.broken?.includes?.(id);
export const sealLooted=(s,id)=>!!s?.abilitySeals?.looted?.includes?.(id);
/* woken abilities: unlocked and not the sleeping starter (game/levels.js awakeCount, the same count the power gates read) */
export const wokenCount=s=>awakeCount(s);
export const rewardText=z=>`${z.gold} gold + ${z.essence} Essence`;
/* the seal's own words: "Needs 3 woken abilities: you have 2" while the hero is short, else what to do */
export function sealNeedText(s,z){const n=wokenCount(s);if(n<z.awake)return `Needs ${z.awake} woken abilities: you have ${n}`;return `Cast ${z.cast} different abilities into it`;}
/* breaking records the seal for the save; true when it was new */
export function breakSeal(s,id){if(!SEAL[id])return false;const r=s.abilitySeals=cleanSeals(s.abilitySeals);if(r.broken.includes(id))return false;r.broken.push(id);return true;}
/* the cache, paid once: gold and Essence; returns {gold, essence, title} or null (not broken, or already paid) */
export function lootSeal(s,id){const z=SEAL[id];if(!z)return null;const r=s.abilitySeals=cleanSeals(s.abilitySeals);if(!r.broken.includes(id)||r.looted.includes(id))return null;
 const first=!sealChapterDone(s,z.chapter);r.looted.push(id);s.gold=(s.gold|0)+z.gold;s.gear??={};(s.gear.mats??={})[ESSENCE]=(s.gear.mats[ESSENCE]|0)+z.essence;
 return {gold:z.gold,essence:z.essence,title:first?SEAL_TITLES[z.chapter]?.[1]||null:null};}
export const sealChapterDone=(s,ch)=>SEALS.some(z=>z.chapter===ch&&sealLooted(s,z.id));
const lvName=id=>levelById(id)?.name||id;
/* the level card's one line, or '' */
export function sealPadLine(s,levelId){const z=sealsIn(levelId)[0];if(!z)return '';if(sealLooted(s,z.id))return 'Rune seal: opened. Its cache is yours.';
 if(sealBroken(s,z.id))return `Rune seal: broken. Its cache waits inside (${rewardText(z)}).`;
 const n=wokenCount(s);return n>=z.awake?/* improve20-r21b-nov4 #6 (audit15 minor: "your 4 woken abilities can break it" read as "needs 4"): the seal's own count */`Rune seal: needs ${z.awake} woken abilities, you have ${n}. You can break it (${rewardText(z)}).`:`Rune seal: needs ${z.awake} woken abilities, you have ${n} (${rewardText(z)}).`;}
/* the seal the NEXT woken ability would open (its `awake` is one more than now), preferring a level the hero can play; {z, name} or null */
export function nextSeal(s){const n=wokenCount(s),xs=SEALS.filter(z=>!sealBroken(s,z.id)&&z.awake===n+1);if(!xs.length)return null;const z=xs.find(z=>levelOpen(s,z.level)||levelDone(s,z.level))||null;return z?{z,name:lvName(z.level)}:null;}
/* the Library's line: "Wake Volley to open the 3-seal in Bramble Hollow." (a = the shared next power, game/power-gate.js nextPower) */
export function sealNextLine(s,a){const x=nextSeal(s);if(!x||!a)return '';return /* improve20-r21b-nov4 #6: no "2-seal" jargon */`Wake ${a.name} to open a seal in ${x.name} that ${x.z.awake} woken abilities can break.`;}
/* the Trophy Hall row: one tile per seal -> [{id, name, text, won, chapter}] */
export function sealTrophies(s){return SEALS.map(z=>{const ch=CHAPTERS.find(c=>c.id===z.chapter)?.name?.replace(/^The /,'')||z.chapter,won=sealLooted(s,z.id);return {id:z.id,name:/* lead (4 Nov, R21B follow-up): "Elderwood: 2-seal" was jargon. improve23-r23q-nov4 #1: three tiles a chapter all read "<Chapter> rune seal", so each tile is named by its level and the chapter moves into the line */`${lvName(z.level)} seal`,text:won?`${ch}. Opened.`:sealBroken(s,z.id)?`${ch}. Broken; its cache waits.`:`${ch}. Needs ${z.awake} woken abilities.`,won,chapter:z.chapter};});}
/* every seal sits on a real level of its chapter (tests) */
export const sealLevelsOk=()=>SEALS.every(z=>{const l=LEVELS.find(x=>x.id===z.level);return !!l&&l.chapter===z.chapter&&l.kind==='level';});
/* improve20-r21b-nov4 #2 (audit15 #6): a seal the woken abilities can break now, unbroken, on a level the hero can play (chapter order), or null.
   The wake card (game/try-it.js tryItLevel) and the mastery card that follows lead there, so they point one way. */
/* improve20-r21b-nov4: prune2 removed the exported sealOpenable; this lane needs it, so it is back as a local helper */
const sealOpenable=(s,z)=>!!z&&wokenCount(s)>=z.awake;
export function sealToBreak(s){const z=SEALS.find(z=>!sealBroken(s,z.id)&&sealOpenable(s,z)&&levelOpen(s,z.level));return z?{z,id:z.level,name:lvName(z.level)}:null;}
/* improve20-r21b-nov4 #4 (audit15 #16): the seal moments on a win card. note: scenes/ability-seal-fx.js sealRunNote(world) for the run just won
   ({id, level, broke, got, passed, openable}); one line, or '' */
export function sealRunLine(note){if(!note)return '';const z=SEAL[note.id];if(!z)return '';
 if(note.broke)return note.got?`Rune seal broken! Its cache gave ${note.got.gold} gold and ${note.got.essence} Essence${note.got.title?`, and the title ${note.got.title}`:''}.`:'Rune seal broken! Its cache waits inside: walk in next time.';
 if(note.passed&&note.openable&&!note.broken)return `You passed a rune seal you can break. Next time, cast ${z.cast} different abilities into it (${rewardText(z)}).`;return '';}
/* the lead back to a seal walked past: a won level's seal the hero can break now (not the level just played, whose card says it); '' when none */
export function sealBackLine(s,exceptId=null){const z=SEALS.find(z=>z.level!==exceptId&&!sealBroken(s,z.id)&&sealOpenable(s,z)&&levelDone(s,z.level));return z?`A rune seal you can break waits in ${lvName(z.level)}.`:'';}
/* improve23-r23s-nov4 #1 (kidsim6 #2: a kid short of a seal walked past it; its words were up 2-11 s and no card named it): one plain line where
   a short kid already reads (the level's win and defeat cards, the quiz and practice summaries beside "Your next ability"). z = the seal;
   p = the next power's wants (game/power-gate.js nextPower: {topics, subject, lvl, lvlOk, reachable}); o.topic = the topic this card is about
   when it is that power's step (then "finish this topic"), o.stepTitle = the step's topic title otherwise; o.here = the card's own level.
   '' when the kid is not short, the seal is broken, or there is no next power. The count is the seal's own, as on the map card. */
const ORD=n=>n+(n%100>=11&&n%100<=13?'th':['th','st','nd','rd'][n%10]||'th');
export function sealShortLine(s,z,p,o={}){if(!z||sealBroken(s,z.id))return '';const n=wokenCount(s);if(n>=z.awake||!p?.a)return '';
 const t=p.topics|0,lv=p.lvlOk?'':`reach hero level ${p.lvl}`,more=(k,sub)=>`master ${k} more ${sub} topic${k===1?'':'s'}`;
 const learn=!p.reachable?`keep training ${p.subject}`:t<=0?'':o.topic?(t===1?'finish this topic':`finish this topic and ${more(t-1,p.subject)}`):t===1&&o.stepTitle?`finish "${o.stepTitle}"`:more(t,p.subject);
 const step=[learn,lv].filter(Boolean).join(' and ');if(!step)return '';
 return `A rune seal ${o.here?'here':`in ${lvName(z.level)}`} needs ${z.awake} abilities${z.awake>n+1?`, you have ${n}`:''}: ${step} to wake your ${ORD(n+1)}.`;}
/* the seal a short kid is told about on a lesson card: unbroken, its count one more than now (the next wake opens it), in a level the kid can
   play or has played, else the first such seal in a chapter the kid has reached; or null */
export function sealShortFor(s){const n=wokenCount(s),xs=SEALS.filter(z=>!sealBroken(s,z.id)&&z.awake===n+1);if(!xs.length)return null;
 const here=xs.find(z=>levelOpen(s,z.level)||levelDone(s,z.level));if(here)return here;const chs=new Set(LEVELS.filter(l=>l.kind==='level'&&(levelOpen(s,l.id)||levelDone(s,l.id))).map(l=>l.chapter));return xs.find(z=>chs.has(z.chapter))||null;}
