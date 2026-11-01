/* The Rift of the Week (improve20-r-oct31; docs/playtest/kidappeal-oct31/REPORT.md idea E; SPEC_DECISIONS 31 Oct 2026, under the owner's
   delegation). One remixed level a week, picked from the calendar week alone (no network): this week's level comes from the levels the save
   has cleared on Normal, and two modifiers from a fixed list. Adventure only (VISION pillar 4): no streaks, no "you missed" lines, nothing
   counts missed weeks, and learning is never on a timer. Rewards are fixed and shown in advance: the first win of a week pays one Rift Shard
   and gold equal to a Normal replay of that level; every 4 shards is a Rift Walker title tier (cosmetic). No XP beyond the normal clear,
   nothing random, and nothing here unlocks an ability (game/math.js unlocked() never reads s.rift).
   Save: s.rift = {week, level, best:{grade,time}|null, shards, last:{week,level,grade,time}|null, lastTime} -- additive within save v9,
   cleaned by normalize() (cleanRift). `week` is the ISO week key ('2026-W44'), so a new year never matches an old week; `level` is the
   week's pick, settled the first time the week is seen, so clearing another level mid-week never swaps the Rift under the player.
   Pure: callers pass the save and the date. Combat side: scenes/rift-fx.js. */
import {LEVELS,levelById,levelDone,tiered,levelReward} from './levels.js';
import {waveGroups} from './stage.js';
import {killGold,pickMod} from './tiers.js';
import {ENEMY_TYPES} from './enemies.js';
import {gradeRank,GRADE_KEYS} from './grade.js';
/* Each modifier reuses an existing system and reads in one line. */
export const RIFT_MODS={
 swift:{key:'swift',label:'Swift foes',text:'Enemies move 15% faster.',speed:1.15},
 elite:{key:'elite',label:'Elite rush',text:'One extra elite in every wave, from this level’s own foes.'},
 storm:{key:'storm',label:'Hazard storm',text:'This land’s Heroic hazards fall here, at Normal damage.'},
 glass:{key:'glass',label:'Glass hero',text:'You take 25% more damage and deal 25% more.',taken:1.25,dealt:1.25},
 echo:{key:'echo',label:'Echo bosses',text:'The boss uses one extra move from its own list all fight.'},
 thrifty:{key:'thrifty',label:'Thrifty',text:'Potions heal half as much, and you start with 1 extra potion.',heal:.5,potions:1}};
export const RIFT_ORDER=['swift','elite','storm','glass','echo','thrifty'];
export const RIFT_OPEN='e8',SHARDS_PER_TIER=4;
/* The ISO 8601 week of the device's local date: weeks start on Monday, week 1 holds the year's first Thursday. */
export function isoWeek(date=new Date()){const d=new Date(date.getFullYear(),date.getMonth(),date.getDate()),day=(d.getDay()+6)%7;d.setDate(d.getDate()-day+3);const year=d.getFullYear(),jan4=new Date(year,0,4),week=1+Math.round(((d-jan4)/864e5-3+(jan4.getDay()+6)%7)/7);return {year,week,key:`${year}-W${String(week).padStart(2,'0')}`};}
export const weekNumber=key=>{const m=/^(\d{4})-W(\d{2})$/.exec(String(key||''));return m?+m[2]:0;};
export const riftOpen=s=>levelDone(s,RIFT_OPEN);
/* The pool: every map level (tiered: kind 'level', not hidden) cleared on Normal, in LEVELS order (a fixed ordering). */
export const riftPool=s=>LEVELS.filter(l=>tiered(l)&&levelDone(s,l.id)).map(l=>l.id);
export const riftModsFor=week=>{const i=((week|0)*7)%RIFT_ORDER.length;return [RIFT_ORDER[i],RIFT_ORDER[(i+1)%RIFT_ORDER.length]];};
/* The pick for a week from the save's pool alone: week % pool.length, and modifiers (week*7) % 6 and the next one. Null with nothing cleared. */
export function riftPick(s,date=new Date()){const w=isoWeek(date),pool=riftPool(s);if(!pool.length)return null;return {week:w.key,n:w.week,level:pool[w.week%pool.length],mods:riftModsFor(w.week)};}
export const emptyRift=()=>({week:null,level:null,best:null,shards:0,last:null,lastTime:null});
const cleanGrade=g=>GRADE_KEYS.includes(g)?g:null,cleanTime=t=>Number.isFinite(+t)&&+t>0&&+t<1e6?Math.round(+t*10)/10:null,weekKey=k=>/^\d{4}-W\d{2}$/.test(String(k||''))?String(k):null;
const cleanBest=b=>{if(!b||typeof b!=='object')return null;const time=cleanTime(b.time);return time==null?null:{grade:cleanGrade(b.grade),time};};
/* normalize(): a missing, broken or partial s.rift becomes a clean record; shards are a whole number, never negative. */
export function cleanRift(v){const r=emptyRift();if(!v||typeof v!=='object'||Array.isArray(v))return r;r.week=weekKey(v.week);r.level=r.week&&levelById(v.level)&&tiered(levelById(v.level))?v.level:null;r.best=r.week?cleanBest(v.best):null;
 r.shards=Math.max(0,Math.floor(Number(v.shards)||0));const l=v.last&&typeof v.last==='object'?v.last:null,lb=l&&cleanBest(l);r.last=l&&weekKey(l.week)&&lb&&levelById(l.level)?{week:l.week,level:l.level,grade:lb.grade,time:lb.time}:null;r.lastTime=cleanTime(v.lastTime);return r;}
/* Rolls the save onto this week (mutates s.rift; returns this week's pick or null). A week played moves to `last`; a week not played
   leaves `last` as it was, and nothing at all counts the weeks between. The week's level is kept while it is still cleared. */
export function riftWeek(s,date=new Date()){const r=s.rift=cleanRift(s.rift),pick=riftPick(s,date);if(!pick)return null;
 if(r.week!==pick.week){if(r.week&&r.best&&r.level)r.last={week:r.week,level:r.level,grade:r.best.grade,time:r.best.time};r.week=pick.week;r.level=pick.level;r.best=null;}
 if(!r.level||!levelDone(s,r.level))r.level=pick.level;return {...pick,level:r.level};}
/* Gold equal to a Normal replay of the level: the replay's quarter clear reward plus half-rate kill gold for its Normal roster and boss. Fixed. */
export function riftGold(l){l=typeof l==='string'?levelById(l):l;if(!l||l.kind!=='level')return 0;let g=Math.round(levelReward(l,'normal')/4);
 for(const w of l.waves||[])for(const e of waveGroups(w).flat()){const d=typeof e==='string'?{}:e;g+=killGold({elite:d.elite||d.mod},true);}if(l.boss)g+=killGold({boss:true},true);return g;}
const ROMAN=['I','II','III','IV','V','VI','VII','VIII','IX','X'];
export const riftTier=shards=>Math.floor(Math.max(0,shards|0)/SHARDS_PER_TIER);
export const riftTitle=s=>{const t=riftTier(s?.rift?.shards);return t?`Rift Walker ${ROMAN[t-1]||t}`:null;};
export const shardsToNext=s=>SHARDS_PER_TIER-(Math.max(0,s?.rift?.shards|0)%SHARDS_PER_TIER);
/* A better run: a higher grade, or the same grade (or none) in less time. */
export const betterRift=(a,b)=>!b||gradeRank(a.grade)>gradeRank(b.grade)||gradeRank(a.grade)===gradeRank(b.grade)&&a.time<b.time;
/* A Rift run ends. Only a win of this week's level counts: it updates this week's best and, the first time in a week, pays one shard and
   riftGold (the caller banks the gold). A fall pays nothing extra and changes nothing here. Returns what the result card shows. */
export function riftFinish(s,{won,level,grade=null,time,date=new Date()}){const pick=riftWeek(s,date),r=s.rift,prevTime=r.lastTime;if(!pick||level!==r.level)return null;
 const t=cleanTime(time),run={grade:cleanGrade(grade),time:t};if(t!=null)r.lastTime=t;if(!won||t==null)return {won:!!won,paid:false,gold:0,shards:r.shards,newBest:false,prevTime,best:r.best,week:r.week};
 const first=!r.best,newBest=!first&&betterRift(run,r.best),tierBefore=riftTier(r.shards);if(first||newBest)r.best=run;let gold=0;if(first){r.shards++;gold=riftGold(level);}
 return {won:true,paid:first,gold,shards:r.shards,newBest,first,prevTime,best:r.best,week:r.week,title:riftTier(r.shards)>tierBefore?riftTitle(s):null};}
/* The run's sanitised modifier set (World.startLevel): only this week's level, on Normal, with two known modifiers. */
export function riftRun(opts,id,k){if(!opts||k!=='normal'||opts.level!==id)return null;const mods=(Array.isArray(opts.mods)?opts.mods:[]).filter(m=>RIFT_MODS[m]).slice(0,2);return mods.length?{week:weekKey(opts.week),level:id,mods}:null;}
export const hasMod=(w,key)=>!!w?.rift?.mods?.includes(key);
/* ---- the modifiers, each on its own existing system ---- */
/* Elite rush: each wave's last group gains one modified elite of the wave's first regular type, or (a wave of only a mini-boss) the level's
   first regular type: always the level's own roster. */
const regular=e=>{const t=typeof e==='string'?e:e?.type;return ENEMY_TYPES[t]&&!ENEMY_TYPES[t].boss?t:null;};
export function riftWaves(l){if(!l?.waves)return l;const first=l.waves.flatMap(w=>waveGroups(w).flat()).map(regular).find(Boolean);return {...l,waves:l.waves.map((w,wi)=>{const gs=waveGroups(w).map(g=>g.map(e=>typeof e==='string'?e:{...e})),type=gs.flat().map(regular).find(Boolean)||first;
 if(type&&gs.length)gs[gs.length-1].push({type,mod:pickMod(`${l.id}:rift:${wi}`),rift:true});return {...(Array.isArray(w)?{}:w),groups:gs};})};}
/* Echo bosses: one move from the boss's own list joins the fight: its first phase-two move (not a summon) is used in both phases, else its
   first phase-one move, else its phase-two summon; a boss with no phased move gets one more use of a limited move (the Crystal Golem's pylons). */
export function echoMove(attacks){const a=attacks||[];return a.find(x=>x.phase===2&&x.kind!=='summon')||a.find(x=>x.phase===1&&x.kind!=='summon')||a.find(x=>x.phase===2)||a.find(x=>x.uses>0&&!x.forced)||null;}
export function riftBoss(e){const m=echoMove(e?.attacks);if(!m)return e;e.attacks=e.attacks.map(x=>{if(x!==m)return x;const {phase,...rest}=x;return x.phase?{...rest,echo:true}:{...x,uses:x.uses+1,echo:true};});e.echoMove=m.name;return e;}
