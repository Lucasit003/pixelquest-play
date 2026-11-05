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
import {LEVELS,CHAPTERS,levelById,levelDone,tiered,levelReward,tierOpen,tierDone} from './levels.js';
import {waveGroups} from './stage.js';
import {killGold,pickMod,tierGold,tierKey,TIER_KEYS} from './tiers.js';
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
export const riftOpen=s=>levelDone(s,RIFT_OPEN);
/* improve20-r9f-nov1 #3 (audit8 a14: a level-19 hero who had finished the game drew Goblin Camp on Normal, for +1 shard and +97 gold
   while holding 2,067): the pool is the NEWEST chapter the save has cleared a level in (its map levels cleared on Normal, in LEVELS
   order), and the run is on the highest tier the save has opened for the week's level (Heroic after its Normal clear, Legendary after
   its Heroic clear). Still picked from the calendar week alone. */
const chapterIx=id=>CHAPTERS.findIndex(c=>c.id===levelById(id)?.chapter);
export const riftPool=s=>{const done=LEVELS.filter(l=>tiered(l)&&levelDone(s,l.id));const top=Math.max(-1,...done.map(l=>chapterIx(l.id)));return done.filter(l=>chapterIx(l.id)===top).map(l=>l.id);};
/* improve20-r20e-nov4 #1 (audit14 #2: after m7 a Story kid drew a Heroic remix with Glass hero and Echo bosses and lost twice at boss 39%): the
   Story Rift. A save that has won no Heroic in the week's chapter plays the Rift on Normal numbers (the Settings assist, Story by default, as
   every Normal fight), with the same remixed map and the same modifier names; Glass hero and Echo bosses are scaled for it (RIFT_STORY). The
   first win pays the Normal tier's shard and gold (riftShards, riftGold), shown on the card before the run. Once a Heroic in that chapter is
   won, the Rift is on the top tier the level has open, as before. */
const chapterOfId=id=>levelById(id)?.chapter;
export const riftStory=(s,id)=>{const ch=chapterOfId(id);return !!ch&&!LEVELS.some(l=>l.chapter===ch&&tiered(l)&&tierDone(s,l.id,'heroic'));};
export const riftTierFor=(s,id)=>riftStory(s,id)?'normal':[...TIER_KEYS].reverse().find(k=>tierOpen(s,id,k))||'normal';
/* the Story Rift's numbers (balance-sim --rift-story, docs/playtest/improve20-r20e-nov4): Glass hero takes less extra damage; the Echo boss's
   extra move comes slower (cd) and hits softer (dmg); and every foe, boss included, has `foe` times its Normal health and damage, so the Rift
   is still a step up from a Normal replay (on Normal numbers the modifiers alone barely showed: the crude kid bot ended a Story Rift on the
   same health as a plain replay). Measured on Emberkeep m1-m7 x the 6 modifier pairs, post-m7 saves at hero level 12 (warrior, mage, ranger), clean
   wins: crude masher 98% on 30% health at worst (Heroic Rift 27%, plain Normal 100% on 48%; foe x1.5 84%, x1.7 74%), r3 masher (skill .5) 100% on 48%
   (Heroic 59%, plain 62%), kid bot 100% on 87% (plain 93%). Not frozen, like game/tiers.js TIERS, so the sim's --rift-story-foe can try a value for one run. */
export const RIFT_STORY={glass:{taken:1.1,dealt:1.25},echo:{cd:1.5,dmg:.75},foe:{hp:1.3,atk:1.3}};
export const STORY_TEXT={glass:'You take 10% more damage and deal 25% more.',echo:'The boss uses one extra move from its own list all fight, a little slower and softer.'};
/* a modifier's line for the run: the Story wording where the Story Rift scales it */
export const riftModText=(key,story=false)=>story&&STORY_TEXT[key]||RIFT_MODS[key]?.text||'';
/* the storm modifier brings Heroic hazards to a Normal run; on Heroic or Legendary the level has its own, so the next modifier stands in */
export const riftModsAt=(week,k)=>{const m=riftModsFor(week);if(tierKey(k)==='normal'||!m.includes('storm'))return m;const alt=RIFT_ORDER.find(x=>x!=='storm'&&!m.includes(x));return m.map(x=>x==='storm'?alt:x);};
export const riftModsFor=week=>{const i=((week|0)*7)%RIFT_ORDER.length;return [RIFT_ORDER[i],RIFT_ORDER[(i+1)%RIFT_ORDER.length]];};
/* The pick for a week from the save's pool alone: week % pool.length, and modifiers (week*7) % 6 and the next one. Null with nothing cleared. */
export function riftPick(s,date=new Date()){const w=isoWeek(date),pool=riftPool(s);if(!pool.length)return null;const level=pool[w.week%pool.length],tier=riftTierFor(s,level);return {week:w.key,n:w.week,level,tier,mods:riftModsAt(w.week,tier),story:riftStory(s,level)};}
/* improve20-r20e-nov4 #4: `story` counts the weeks whose first win was a Story Rift (the Trophy Hall's Story row); additive, 0 for older saves */
export const emptyRift=()=>({week:null,level:null,best:null,shards:0,last:null,lastTime:null,story:0});
const cleanGrade=g=>GRADE_KEYS.includes(g)?g:null,cleanTime=t=>Number.isFinite(+t)&&+t>0&&+t<1e6?Math.round(+t*10)/10:null,weekKey=k=>/^\d{4}-W\d{2}$/.test(String(k||''))?String(k):null;
const cleanBest=b=>{if(!b||typeof b!=='object')return null;const time=cleanTime(b.time);return time==null?null:{grade:cleanGrade(b.grade),time};};
/* normalize(): a missing, broken or partial s.rift becomes a clean record; shards are a whole number, never negative. */
export function cleanRift(v){const r=emptyRift();if(!v||typeof v!=='object'||Array.isArray(v))return r;r.week=weekKey(v.week);r.level=r.week&&levelById(v.level)&&tiered(levelById(v.level))?v.level:null;r.best=r.week?cleanBest(v.best):null;
 r.shards=Math.max(0,Math.floor(Number(v.shards)||0));const l=v.last&&typeof v.last==='object'?v.last:null,lb=l&&cleanBest(l);r.last=l&&weekKey(l.week)&&lb&&levelById(l.level)?{week:l.week,level:l.level,grade:lb.grade,time:lb.time}:null;r.lastTime=cleanTime(v.lastTime);r.story=Math.max(0,Math.floor(Number(v.story)||0));/* improve20-r22f-nov4 #2 */const tw=cleanTower(v.tower);if(tw)r.tower=tw;return r;}
/* improve20-r22f-nov4 #2 (audit15 section 8, plan item 6): the Rift tower in the Trophy Hall. Every Story Rift win (Normal tier, any week,
   replays of the same week too) adds one floor: s.rift.tower = {'<ISO week>': floors won that week, early: floors from before the tower}
   (additive within save v9, cleaned here; absent until the first floor, so older saves keep their exact shape). A save from before the tower
   starts with its counted Story weeks (s.rift.story) as `early` floors, so nothing already won is lost. No cap, nothing counts missed weeks,
   nothing is lost for a week skipped; cosmetic only, no ability reads it. */
export function cleanTower(v){if(!v||typeof v!=='object'||Array.isArray(v))return null;const t={};for(const [k,n] of Object.entries(v)){const c=Math.floor(Number(n)||0);if(c>0&&(k==='early'||weekKey(k)))t[k]=c;}return Object.keys(t).length?t:null;}
/* the tower's floors grouped by week, oldest first: [{week (null for early floors), n}], and the total */
export function riftTower(s){const r=s?.rift,t=cleanTower(r?.tower),early=t?t.early|0:Math.max(0,r?.story|0),weeks=Object.keys(t||{}).filter(k=>k!=='early').sort();
 const rows=[...(early?[{week:null,n:early}]:[]),...weeks.map(w=>({week:w,n:t[w]}))];return {rows,floors:rows.reduce((a,x)=>a+x.n,0)};}
/* '2026-W45' -> 'Week 45, 2026' */
export const weekLabel=k=>{const m=/^(\d{4})-W(\d{2})$/.exec(String(k||''));return m?`Week ${+m[2]}, ${m[1]}`:'Before the tower';};
/* Rolls the save onto this week (mutates s.rift; returns this week's pick or null). A week played moves to `last`; a week not played
   leaves `last` as it was, and nothing at all counts the weeks between. The week's level is kept while it is still cleared. */
export function riftWeek(s,date=new Date()){const r=s.rift=cleanRift(s.rift),pick=riftPick(s,date);if(!pick)return null;
 if(r.week!==pick.week){if(r.week&&r.best&&r.level)r.last={week:r.week,level:r.level,grade:r.best.grade,time:r.best.time};r.week=pick.week;r.level=pick.level;r.best=null;}
 /* improve20-r9f-nov1 #3: a week settled on an older chapter (a save from before this change, or a new chapter reached mid-week) moves to
    the newest one until the week's Rift is won; once won, it stays */
 if(!r.level||!levelDone(s,r.level)||!r.best&&chapterIx(r.level)<chapterIx(pick.level))r.level=pick.level;const tier=riftTierFor(s,r.level);return {...pick,level:r.level,tier,mods:riftModsAt(pick.n,tier),story:riftStory(s,r.level)};}
/* improve20-r9f-nov1 #3: the first win of a week pays gold sized like the game's late rewards: half the level's first-clear gold on the
   Rift's tier plus half-rate kill gold for its roster and boss (as a replay pays), scaled by the tier's gold rate (Heroic 1.75x, Legendary 2.5x). The typical
   save after the Sleeper (level 19) gets several hundred on Heroic, about half a late smith item, where the old Normal-replay sum was
   +97. Fixed and shown in advance; nothing random. Shards: 1 on Normal, 2 on Heroic, 3 on Legendary (they only count toward the
   cosmetic Rift Walker title). */
export const RIFT_SHARDS={normal:1,heroic:2,legendary:3};
export const riftShards=k=>RIFT_SHARDS[tierKey(k)]||1;
export function riftGold(l,k='normal'){l=typeof l==='string'?levelById(l):l;if(!l||l.kind!=='level')return 0;let kills=0;
 for(const w of l.waves||[])for(const e of waveGroups(w).flat()){const d=typeof e==='string'?{}:e;kills+=killGold({elite:d.elite||d.mod},true);}if(l.boss)kills+=killGold({boss:true},true);return Math.round(levelReward(l,k)/2)+tierGold(kills,k);}
const ROMAN=['I','II','III','IV','V','VI','VII','VIII','IX','X'];
export const riftTier=shards=>Math.floor(Math.max(0,shards|0)/SHARDS_PER_TIER);
export const riftTitle=s=>{const t=riftTier(s?.rift?.shards);return t?`Rift Walker ${ROMAN[t-1]||t}`:null;};
export const shardsToNext=s=>SHARDS_PER_TIER-(Math.max(0,s?.rift?.shards|0)%SHARDS_PER_TIER);
/* A better run: a higher grade, or the same grade (or none) in less time. */
export const betterRift=(a,b)=>!b||gradeRank(a.grade)>gradeRank(b.grade)||gradeRank(a.grade)===gradeRank(b.grade)&&a.time<b.time;
/* A Rift run ends. Only a win of this week's level counts: it updates this week's best and, the first time in a week, pays one shard and
   riftGold (the caller banks the gold). A fall pays nothing extra and changes nothing here. Returns what the result card shows. */
export function riftFinish(s,{won,level,tier='normal',grade=null,time,date=new Date(),story=false}){const pick=riftWeek(s,date),r=s.rift,prevTime=r.lastTime;if(!pick||level!==r.level)return null;
 const t=cleanTime(time),run={grade:cleanGrade(grade),time:t};if(t!=null)r.lastTime=t;if(!won||t==null)return {won:!!won,paid:false,gold:0,shards:r.shards,newBest:false,prevTime,best:r.best,week:r.week};
 const first=!r.best,newBest=!first&&betterRift(run,r.best),tierBefore=riftTier(r.shards);if(first||newBest)r.best=run;let gold=0;const won_=first?riftShards(tier):0;const early0=r.story|0;if(first){r.shards+=won_;gold=riftGold(level,tier);/* improve20-r20e-nov4 #4 */if(story&&tierKey(tier)==='normal')r.story=(r.story|0)+1;}/* improve20-r22f-nov4 #2: every Story Rift win adds a floor */if(story&&tierKey(tier)==='normal'){const tw=cleanTower(r.tower)||(early0>0?{early:early0}:{});tw[r.week]=(tw[r.week]|0)+1;r.tower=tw;}
 return {won:true,paid:first,gold,shardsWon:won_,tier:tierKey(tier),story:!!story&&tierKey(tier)==='normal',floors:riftTower(s).floors,shards:r.shards,newBest,first,prevTime,best:r.best,week:r.week,title:riftTier(r.shards)>tierBefore?riftTitle(s):null};}
/* improve20-r22p-nov4 #2: the win card's tower words for a riftFinish result: a Story win names the tower's floors, anything else says nothing */
export const riftFloorText=x=>x?.won&&x.story&&x.floors>0?` Rift tower: ${x.floors} floor${x.floors===1?'':'s'}.`:'';
/* improve24-r24m-nov5 #6: the same floor in kid words, for the first note on the win card: "Rift tower: 1st floor climbed" (the floor just climbed is
   the tower's total). An ordinal from 1 up; anything but a Story win with floors says nothing */
export const ordinal=n=>{const k=Math.max(0,n|0),t=k%100;return `${k}${t>=11&&t<=13?'th':['th','st','nd','rd'][k%10]||'th'}`;};
export const riftFloorKid=x=>x?.won&&x.story&&(x.floors|0)>0?`Rift tower: ${ordinal(x.floors)} floor climbed`:'';
/* The run's sanitised modifier set (World.startLevel): only this week's level, on the tier the pick names (opts.tier, Normal when
   absent: improve20-r9f-nov1 #3), with two known modifiers. */
export function riftRun(opts,id,k){if(!opts||opts.level!==id||tierKey(k)!==k||(opts.tier||'normal')!==k)return null;const mods=(Array.isArray(opts.mods)?opts.mods:[]).filter(m=>RIFT_MODS[m]).slice(0,2);return mods.length?{week:weekKey(opts.week),level:id,mods,...(k==='normal'?{}:{tier:k}),...(k==='normal'&&opts.story?{story:true}:{})/* improve20-r20e-nov4 #1: the Story Rift's scaling, Normal tier only */}:null;}
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
/* improve20-r20e-nov4 #1: on the Story Rift (story) a phased move is not freed from its phase: the boss keeps it as it is in its own phase
   and gains a phase-one copy at RIFT_STORY.echo (a slower cooldown, softer hits), listed last so a lookup by name finds the original. A
   limited move (no phase) gets its one extra use on every tier. */
export function riftBoss(e,story=false){const m=echoMove(e?.attacks);if(!m)return e;
 if(story&&m.phase){const c={...m,phase:1,echo:true};if(c.cd)c.cd*=RIFT_STORY.echo.cd;if(c.dmg)c.dmg*=RIFT_STORY.echo.dmg;if(c.trail?.dmg)c.trail={...c.trail,dmg:c.trail.dmg*RIFT_STORY.echo.dmg};e.attacks=[...e.attacks,c];e.echoMove=m.name;return e;}
 e.attacks=e.attacks.map(x=>{if(x!==m)return x;const {phase,...rest}=x;return x.phase?{...rest,echo:true}:{...x,uses:x.uses+1,echo:true};});e.echoMove=m.name;return e;}
