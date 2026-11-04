/* The Hall of Echoes (improve20-r9a-nov1, IMPROVE20_ROUND9 lane R9A d6): a post-game boss gauntlet. It opens once the save has beaten
   the final story boss (levels.js gameFinale, the same level finale.js FINALE_LEVEL names). Each chapter has three rungs; a rung is that
   chapter's story bosses (main-path boss levels, no side paths, no prologue) fought back to back in their own boss arenas, at the hero's
   own power. Rung I plays them on Normal numbers ("Standard"), II on Heroic, III on Legendary (game/tiers.js, no new tables). Health
   carries over from one boss to the next with a fixed heal of hallHeal(rung) of max health between them; potions are allowed (each boss fight
   brings the one free potion a story attempt brings, ranged-nov2; the bag is carried). A fall ends the rung: nothing is lost and it can be tried
   again at once.
   Rewards: the FIRST clear of a rung pays a fixed amount of gold and Essence (the gear material, 'elite-shard'), shown before the
   fight; a repeat clear pays nothing. A fight in the Hall pays no kill gold, kill XP, drops, chests or level records (World.finish and
   World.kill skip them for a Hall run), so the Hall is never a farm.
   Keepsakes: clearing a rung without drinking a potion earns that rung's keepsake ("Elderwood Echo I"), cosmetic only: a row on the
   hero card and the Hall screen. Nothing random, no timers, no streaks; nothing here unlocks an ability (unlocked() never reads s.hall).
   Save (additive within v9, core/save.js normalize -> cleanHall): s.hall = {cleared:{'<chapter>:<rung>':true}, keepsakes:{...same keys}}.
   Pure: functions that write the save say so. */
import {LEVELS,CHAPTERS,levelDone,levelReward,tiered,gameFinale} from './levels.js';
import {FREE_POTIONS} from './potions.js';
export const HALL_HEAL=.35,RUNGS=[1,2,3],RUNG_TIER={1:'normal',2:'heroic',3:'legendary'},RUNG_LABEL={1:'Standard',2:'Heroic',3:'Legendary'},ROMAN=['I','II','III'];
export const HALL_FINAL=LEVELS.find(l=>gameFinale(l.id))?.id||null;
export const ESSENCE_KEY='elite-shard';
export const hallOpen=s=>!!HALL_FINAL&&levelDone(s,HALL_FINAL);
/* improve20-r20e-nov4 #2 (audit14 #2, plan item 2: the Hall opened only after the finale, so a Story kid after m7 had nothing at their tier):
   Rung I opens early, after HALL_EARLY (m7, Emberkeep's last boss), as "practise reading the boss": the bosses' own tells and banners on
   Normal numbers, for every chapter whose story bosses are all beaten. Rungs II and III stay shut until the finale (hallOpen). The first
   clear pays rungReward once, whenever it comes (s.hall.cleared is the one record), and the keepsake is the same; nothing changes the
   save shape. The door stands on the Emberkeep board until the finale (worldmap-layout.js HALL_PAD_EARLY), then on the Veilmoor board. */
/* Rung I's numbers were measured for this (balance-sim --hall=elderwood,emberkeep --rungs=1, post-m7 saves at hero level 12, warrior/mage/ranger,
   docs/playtest/improve20-r20e-nov4) and left as they are: the kid bot clears both rungs every run on about 90% health a boss, the crude masher
   (skill 0) every run on 3-12 potions, the good bot on about 96% with none. Each Hall-only lever that moved the good bot at all (boss health
   x1.25-1.5, hits x1.15-1.8, more free potions) cut the crude kid's clears to 17-67% (its wall is e6) and left the good bot at 90-94%: the gap is
   dodging, not numbers. The no-potion keepsake stays the skilled player's goal on Rung I; Rungs II-III are its challenge after the finale. */
export const HALL_EARLY='m7';
export const hallEarly=s=>!hallOpen(s)&&levelDone(s,HALL_EARLY);
export const hallDoor=s=>hallOpen(s)||hallEarly(s);
/* a chapter's story bosses in play order: its main-path boss levels */
export const hallBosses=ch=>LEVELS.filter(l=>l.chapter===ch&&tiered(l)&&!l.optional&&l.boss).map(l=>l.id);
export const HALL_CHAPTERS=CHAPTERS.map(c=>c.id).filter(ch=>hallBosses(ch).length);
const key=(ch,r)=>`${ch}:${r}`,okKey=k=>{const [ch,r]=String(k).split(':');return HALL_CHAPTERS.includes(ch)&&RUNGS.includes(+r);};
export const emptyHall=()=>({cleared:{},keepsakes:{}});
export function cleanHall(v){const h=emptyHall();if(!v||typeof v!=='object'||Array.isArray(v))return h;for(const f of ['cleared','keepsakes']){const o=v[f];if(o&&typeof o==='object'&&!Array.isArray(o))for(const k of Object.keys(o))if(o[k]===true&&okKey(k))h[f][k]=true;}return h;}
const H=s=>s.hall&&typeof s.hall==='object'&&s.hall.cleared&&s.hall.keepsakes?s.hall:(s.hall=cleanHall(s.hall));
/* followups-nov2 (rungs timed in tools/balance-sim.mjs --hall): a Hall-only scale on boss health, per chapter and rung. Story levels never
   read it (combat.js applies it only to a Hall fight's bosses). Missing = 1. Part 3 made Hall fights boss-only (each starts at its boss
   arena), so this was re-tuned on boss-only rungs (4 classes x 4 reps, kid and good bots, typical-after-v7 save): Rung I kid >= 75%,
   Rung II kid 40-70% and good >= 70%, Rung III good 40-70%, good-bot rungs about 12 minutes or less (was elderwood:1 .6, elderwood:2 1.3). */
export const HALL_BOSS_HP=Object.freeze({'elderwood:2':1.3,'emberkeep:2':.7,'emberkeep:3':.8,'veilmoor:2':.75,'veilmoor:3':.7});
export const hallBossHp=(ch,r)=>HALL_BOSS_HP[key(ch,r)]??1;
export const rungCleared=(s,ch,r)=>!!s?.hall?.cleared?.[key(ch,r)];
export const hasKeepsake=(s,ch,r)=>!!s?.hall?.keepsakes?.[key(ch,r)];
/* a rung opens once the Hall is open and the rung below it in the same chapter is cleared */
export const rungOpen=(s,ch,r)=>HALL_CHAPTERS.includes(ch)&&RUNGS.includes(r)&&(r===1?hallOpen(s)||hallEarly(s)&&hallBosses(ch).every(id=>levelDone(s,id)):hallOpen(s)&&rungCleared(s,ch,r-1));
/* improve20-r20e-nov4 #2: why a rung is shut, in words (null when open) */
export const rungLockText=(s,ch,r)=>rungOpen(s,ch,r)?null:r>1&&!hallOpen(s)?'Rungs II and III open after you beat the final boss.':r===1?`Beat every ${chName(ch)} boss first.`:`Clear Rung ${ROMAN[r-2]} of ${chName(ch)} first.`;
export const rungState=(s,ch,r)=>hasKeepsake(s,ch,r)?'keepsake':rungCleared(s,ch,r)?'cleared':rungOpen(s,ch,r)?'open':'locked';
const chName=ch=>(CHAPTERS.find(c=>c.id===ch)?.name||ch).replace(/^The /,'');
export const keepsakeName=(ch,r)=>`${chName(ch)} Echo ${ROMAN[r-1]}`;
/* the first-clear reward, fixed and shown in advance: the gold of a first clear of the chapter's last story level on the rung's tier
   (Elderwood 200/350/500, Emberkeep 340/595/850, the Veilmoor 480/840/1200) and 2 Essence a rung step (2/4/6) */
export function rungReward(ch,r){const last=hallBosses(ch).at(-1),l=LEVELS.find(x=>x.id===last);return {gold:l?levelReward(l,RUNG_TIER[r]):0,essence:2*r};}
/* every keepsake this save holds, in chapter and rung order: [{chapter,rung,name}] */
export const keepsakes=s=>HALL_CHAPTERS.flatMap(ch=>RUNGS.filter(r=>hasKeepsake(s,ch,r)).map(r=>({chapter:ch,rung:r,name:keepsakeName(ch,r)})));
/* ---- one rung, as a run ---- */
/* -> the run state, or null when the rung is not open */
export function startRung(s,ch,r){if(!rungOpen(s,ch,r))return null;return {chapter:ch,rung:r,tier:RUNG_TIER[r],bosses:hallBosses(ch),i:0,hp:1,drunk:0,free:hallFree(r)};}
/* the health share the next boss starts with: what was left plus the rung's heal (hallHeal), never above full */
/* hallfair-nov2: the heal between bosses, per rung (missing = HALL_HEAL). No rung overrides it, by decision at merge. A Rung III heal of .15
   was tried: the good bot's Legendary class mean fell 88 -> 75 (16 reps), but only because the Rogue (54 -> 42), Ranger (83 -> 52) and
   Mage (92 -> 73) lost runs; Warrior and Paladin stayed at 100 and the kid-skill Rogue, Mage and Ranger fell to 0. That widens the class gap
   the re-tune was for. Every class clears Rung III at good skill with .35, and a shield or heal kit being strong in a chained boss gauntlet
   is class identity, not a bug. Boss HP and damage were worse levers (they cut the Rogue first). docs/playtest/hallfair-nov2/REPORT.md. */
export const HALL_HEAL_RUNG=Object.freeze({});
export const hallHeal=r=>HALL_HEAL_RUNG[r]??HALL_HEAL;
/* hall4-nov2: two Hall-only levers, per rung, both empty (no rung uses them): HALL_HIT_RUNG scales every hit the hero takes in a Hall fight
   (the boss, its summons and its arena; missing = 1) and HALL_FREE_RUNG is the free potion each Hall boss brings (missing = FREE_POTIONS).
   Trialled on Rung III after classsustain-nov2 (every class ~99-100%); declined at review, Rung III keeps its old rules: the best
   class-blind mix (boss HP x.8, hits x1.6, no free potion) left the good bot at 99% and the kid Berserker-to-Warrior gap at 46 points, and
   cutting ability heals and shields would make every ability card wrong on that rung. docs/playtest/hall4-nov2/REPORT.md. */
export const HALL_HIT_RUNG=Object.freeze({}),HALL_FREE_RUNG=Object.freeze({});
export const hallHit=r=>HALL_HIT_RUNG[r]??1;
export const hallFree=r=>HALL_FREE_RUNG[r]??FREE_POTIONS;
/* hall5-nov3: Rung III's new boss patterns (scenes/hall-patterns.js): a skill test made of telegraphed patterns, not bigger numbers (hall3 and
   hall4 showed class-blind numbers wall a kid-skill class before they trouble a skilled player). Rungs I-II list none. docs/playtest/hall5-nov3. */
export const HALL_PATTERN_RUNG=Object.freeze({3:Object.freeze(['echo rows','echo ring','echo storm','echo pylon'])});
export const hallPatterns=r=>HALL_PATTERN_RUNG[r]||[];
export const hallCarry=(hp,r)=>Math.min(1,Math.max(0,+hp||0)+hallHeal(r));
/* ranged-nov2: the free potion comes back at every boss, as it does at every story attempt (it came once a rung). A chained boss-only rung
   with no regeneration decided by kit: Warrior and Paladin open with a shield or a heal and won every kid-bot run, while the Mage, Ranger,
   Summoner and Rogue, with neither in their first four abilities, won about one in four (balance-sim --hall=all --rungs=2,3
   --hall-abilities=4, kid). One free potion a boss is the heal every class gets alike; the kits that already heal never needed it.
   docs/playtest/ranged-nov2/REPORT.md. */
/* One boss fight of the run ended. fight = {won, hp (share of max health left), drunk (potions drunk in it), free (free potions left)}.
   Mutates the run; -> 'next' (another boss waits), 'won' (the rung is cleared) or 'lost'. */
export function hallStep(run,{won,hp=0,drunk=0,free=0}={}){if(!run||run.done)return run?.done||'lost';run.drunk+=Math.max(0,drunk|0);run.free=Math.max(0,free|0);
 if(!won){run.done='lost';return 'lost';}run.i++;if(run.i>=run.bosses.length){run.done='won';return 'won';}run.hp=hallCarry(hp,run.rung);run.free=Math.max(run.free,hallFree(run.rung));return 'next';}
/* A cleared rung: records it, pays the first clear (writes s.gold and s.gear.mats) and grants the keepsake for a clear with no potions.
   -> {first, gold, essence, keepsake (a name when this clear had no potions), keepsakeNew}. A lost run changes nothing. */
export function hallFinish(s,run){if(!run||run.done!=='won')return null;const h=H(s),k=key(run.chapter,run.rung),first=!h.cleared[k];h.cleared[k]=true;let gold=0,essence=0;
 if(first){const rw=rungReward(run.chapter,run.rung);gold=rw.gold;essence=rw.essence;s.gold=(s.gold|0)+gold;s.gear??={};s.gear.mats??={};s.gear.mats[ESSENCE_KEY]=(s.gear.mats[ESSENCE_KEY]|0)+essence;}
 const clean=run.drunk===0,keepsakeNew=clean&&!h.keepsakes[k];if(clean)h.keepsakes[k]=true;
 return {first,gold,essence,keepsake:clean?keepsakeName(run.chapter,run.rung):null,keepsakeNew};}
/* the finale card's line (finale.js finaleNext) */
export function hallLeft(s){if(!hallOpen(s))return null;const all=HALL_CHAPTERS.length*RUNGS.length,done=HALL_CHAPTERS.reduce((t,ch)=>t+RUNGS.filter(r=>rungCleared(s,ch,r)).length,0);
 return done>=all?null:`The Hall of Echoes: every chapter's bosses back to back, three rungs each (${done} of ${all} cleared). Its door is on the Veilmoor map.`;}
