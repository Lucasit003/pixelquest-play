/* The difficulty ladder (docs/design/ROADMAP_OCT14.md section 1). Every map level (kind 'level', not hidden) is played on
   three tiers: Normal, then Heroic once Normal is cleared, then Legendary once Heroic is cleared. Each tier keeps its own
   three stars, best time and score, and pays its own first-clear reward. Pure data and arithmetic: no state.
   - hp/atk multiply what enemies have and deal on that tier (on top of the Settings assist, game/levels.js DIFFICULTY).
   - gold/xp scale the first-clear reward; par stretches the star clock because every fight lasts longer.
   - rec: hero levels above the Normal recommendation. mods: how many modified elites a wave brings (see tierWaves).
   - boss: cd and speed multiply a boss's attack cooldowns and walking speed (a faster pattern); rally adds a third
     guard-call phase at that share of health; phaseAt moves a boss's phase change earlier.
   XP never unlocks an ability on its own (game/math.js unlocked() needs mastery), so a bigger XP reward cannot either. */
import {waveGroups} from './stage.js';
/* Tuning (14 Oct, tools/balance-sim.mjs --tier=..., 7 classes, bot skill .5, deaths per level Elderwood / Emberkeep / Veilmoor):
   Normal 0.3 / 1.5 / 2.3, Heroic 1.0 / 4.7 / 6.1, Legendary 2.7 / 7.9 / 8.4. The brief's starting point (Heroic 1.6x / 1.4x,
   Legendary 2.4x / 1.8x) lost a fifth of Heroic runs and nearly two thirds of Legendary ones, so both were eased a step:
   Heroic is a real step up for a child who finished Normal, Legendary is for heroes who have studied for more abilities.
   Browser check (14 Oct, later): a Legendary Veilmoor boss took 40% of a level-25 Mage's health a hit, so both tiers were
   eased again (Heroic 1.4 x 1.22, boss 10% faster; Legendary 1.85 x 1.38, boss 15% faster): Heroic 0.9 / 3.7 / 4.9 deaths,
   8 of 182 runs lost; Legendary 1.3 / 5.8 / 6.6, 62 lost (34 of them the sim's 6-minute clock).
   Combat balance (15 Oct, docs/design/BALANCE.md): abilities now carry about half of a hero's damage (game/math.js abilityPower,
   the ladder's rung power in generate_data.py), so enemy health went up to keep the deaths per level in the bands: Normal's
   e2+ ramp 1.15 -> 1.4 health, Heroic 1.4 -> 2.2, Legendary 1.85 -> 3.4 health and 1.38 -> 1.6 damage. A hero with fewer
   abilities now feels each missing one; the prologue and e1 are unchanged.
   Real enemy AI (15 Oct, docs/design/BALANCE.md "The sim on the real enemy AI"): the sim had been running combat.js's old AI;
   on the game's own (scenes/enemy-ai.js), with a bot that reads its telegraphs like a child (notices one in 0.25-0.4 s, gets
   out of 70%), fights ran a third longer and the child took far fewer hits, so health came down and damage went up: Heroic
   2.2 x 1.22 -> 2 x 1.8, Legendary 3.4 x 1.6 -> 3 x 1.9. Damage stops where the 14 Oct browser check put fairness (a boss hit
   of about a third of a Mage's health on Legendary); Heroic sits at the lower edge of its 14 Oct band and Legendary under
   its band, which only hits of 40-50% of health would reach. Normal is unchanged.
   Basic-attack balance (15 Oct, docs/design/BALANCE.md "Basic attacks"): swings now grow at half the stat's rate and armoured
   bosses (Emberkeep on) take half from them until an ability cracks the armour, so every hero lost some damage, the one who
   casts least the most. Health came down a step so a child who uses abilities fights as long as before: Heroic 2 -> 1.8,
   Legendary 3 -> 2.7. Damage is unchanged (the owner kept Legendary's fair hits). */
export const TIER_KEYS=['normal','heroic','legendary'];
export const TIERS={
 normal:{key:'normal',label:'Normal',rank:0,hp:1,atk:1,gold:1,xp:1,par:1,rec:0,mods:0},
 heroic:{key:'heroic',label:'Heroic',rank:1,hp:1.8,atk:1.8,gold:1.75,xp:1.5,par:1.25,rec:3,mods:1,boss:{cd:.9,speed:1.05}},
 legendary:{key:'legendary',label:'Legendary',rank:2,hp:2.7,atk:1.9,gold:2.5,xp:2,par:1.5,rec:6,mods:2,extraWave:true,boss:{cd:.85,speed:1.1,rally:.75,phaseAt:.6}}};
export const tierOf=k=>TIERS[k]||TIERS.normal;
export const tierKey=k=>TIERS[k]?k:'normal';
/* Normal itself is tougher from e2 on; the prologue and Goblin Camp (levels.js gentle:true) stay as they were, so a new
   child's first quarter hour is unchanged. Health takes +40% (15% before the 15 Oct combat balance, which made abilities hit
   harder), damage 10%: longer fights, not sudden deaths. */
export const NORMAL_RAMP={hp:1.4,atk:1.1};
/* Normal boss health (owner 16 Oct: "still easy, just super long"). The kid bot (balance-sim --bot=smart, all classes) spent
   55/64/75/130/224/181/243/154 s on the e1-e8 bosses after the e1-e3 trim; these bring every Elderwood boss to 1-2 minutes,
   the chapter's last one a little longer. Later main-road trims use the same smart seed-1 audit (report, 17 Oct).
   This table affects Normal boss actors only, including mini-bosses; regulars and higher tiers are unchanged. */
/* oct25-followups2: e5 .55 -> .45 (with one fewer group in its second wave, game/levels.js). The balance sim had the Old Graveyard harder than Shaman Grove for weaker play (skill .3: 1.52 deaths and 486 damage a run against 1.04 and 403); now 1.11 and 426 against 1.27 and 421, e4 0.61. Normal only; rewards unchanged. */
export const NORMAL_BOSS_HP={e1:.62,e2:.62,e3:.62,e4:.75,e5:.45,e6:.65,e7:.55,e8:.8,m1:.33,m2:.31,m3:.37,m4:.26,m5:.31,m6:.26,m7:.26,v1:.32,v2:.33,v3:.28,v4:.31,v5:.21,v6:.31,v7:.55,mx1:.65,vx1:.65};
/* balance-oct26 (owner: Chapter 2 is a wall for a crude player): a kid who walks and mashes attack at the recommended level lost
   the Bandit Road, Mushroom Mire and Emberkeep boss races (tools/balance-sim.mjs --bot=masher --skill=0 --abilities=3 --gear=plain
   --retry=checkpoint). Normal boss health there takes CH2_BOSS_HP on top of the table above; Heroic and Legendary are untouched. */
export const CH2_BOSS_HP={ex1:.7,ex2:.7,m1:.7,m2:.7,m3:.7,m4:.55,m5:.7,m6:.6,m7:.6,mx1:.55};
/* The same crude kid takes about a fifth of its health a boss hit there and never dodges, so the race was lost at 40-50% boss
   health even with the trim; on Normal those bosses also hit for CH2_BOSS_ATK (their own blows and shots only). */
export const CH2_BOSS_ATK={ex1:.75,ex2:.75,m1:.75,m2:.75,m3:.75,m4:.6,m5:.75,m6:.65,m7:.65,mx1:.6};
/* hook-oct27 (lead: the first fight must be winnable): a new player who mashes attack, never dodges, has no ability yet and does
   not know the potion key lost the prologue to Bramblejaw (tools/balance-sim.mjs --only=prologue --bot=masher --skill=0
   --abilities=0 --gear=starter --controls-seen --potions=never: 8 of 56 first tries won). The prologue (always Normal) takes
   FIRST_FIGHT: the boss's health and blows, and the scouts' blows. After it the same kid wins 279 of 280 first tries and ends on
   about half its health (25-60% was the target: still a fight). Nothing else changes. tests/hook-oct27.test.js. */
export const FIRST_FIGHT={bossHp:.65,bossAtk:.35,foeAtk:.4};
export const bossAtkTrim=(id,k,from)=>tierKey(k)!=='normal'?1:id==='prologue'?((from?.by?.boss||from?.boss)?FIRST_FIGHT.bossAtk:FIRST_FIGHT.foeAtk):(from?.by?.boss||from?.boss)?CH2_BOSS_ATK[id]||1:1;
/* A Grave Wraith keeps 110 px from the hero, so a kid who only walks and swings chased it round the arena (oct26-midgame). On
   Normal it holds NORMAL_KEEP instead, close enough for a swing to reach it after a few steps; Heroic and Legendary keep 110. */
export const NORMAL_KEEP={'skeleton-mage':70};
export const keepOf=(e,k)=>tierKey(k)==='normal'&&NORMAL_KEEP[e?.key]||e?.keep||110;
export const bossTrim=(id,k,boss)=>boss&&tierKey(k)==='normal'?(NORMAL_BOSS_HP[id]||1)*(CH2_BOSS_HP[id]||1)*(id==='prologue'?FIRST_FIGHT.bossHp:1):1;
/* 17 Oct, three-seed pacing audit: ease m4's isolated spike; fill Heroic v6's boss-time trough. Normal is untouched. */
/* oct25-tiers: with the tier step (game/tier-encounters.js READABLE_STEP) the Starfall Ruins pylon fight ran about 1.6x the
   chapter's other boss times on both tiers, and Legendary Shaman Grove and Furnace Depths about 1.3x; trim those bosses only. */
/* ownerbal-oct29: with Heroic's shorter boss rest (game/tier-encounters.js READABLE_RULES) the Starfall Ruins golem raises its prism
   pylons more often and a recommended-level Mage's boss fight went 142 -> 245 s (others 0-15 s longer); v4 .7 -> .5 brings it back. */
export const HEROIC_BOSS_HP={m4:.8,v6:1.3,v4:.5};
/* ownerbal-oct29: with the 6-potion bag (game/potions.js BAG) a post-game Mage at its own level (tests/lategame-oct27.test.js 4) could no
   longer drink through the Shadow Twin and Cthulhu Legendary fights (mana-starved boss fights of 4-13 minutes, 9-15 potions, 2-5 falls,
   against 2-3 minutes for the chapter's other bosses); v3 and v7 .75 bring them to 2-4 minutes (Warrior 70 and 94 s). */
export const LEGENDARY_BOSS_HP={m4:.8,v4:.7,e6:.8,m5:.85,v3:.75,v7:.75};
export const tierBossTrim=(id,k,boss)=>!boss?1:tierKey(k)==='normal'?bossTrim(id,k,boss):(tierKey(k)==='heroic'?HEROIC_BOSS_HP:LEGENDARY_BOSS_HP)[id]||1;
export const rampOf=l=>l&&l.kind==='level'&&!l.gentle?NORMAL_RAMP:{hp:1,atk:1};
/* What a level's enemies carry on a tier, before the Settings assist: {hp, atk}. Arenas and towns are never tiered. */
/* owner decision 31 Oct (GAME_READINESS_OCT30 #12, Legendary soft when over-levelled): on Legendary, foes grow with a hero above the
   level's advice level by more than `grace`, +5% health and +4% damage a level, up to 10 levels. The grace is the band the game already
   calls "near the recommended level" (tests/lategame-oct27.test.js: the post-game Veilmoor route sits up to 4 above; with grace 0 or 2
   a smart Mage fell 4 times on Legendary v2 or v5 there), so only a hero who has clearly outgrown a level (an Elderwood revisit at 20+)
   meets bigger foes. Rewards and kill XP keep the level's own
   tier, so an over-levelled replay pays no more. */
export const OVER_LEVEL={legendary:{hp:.05,atk:.04,grace:4,cap:10}};
export const overLevels=(l,k,hero)=>{const o=OVER_LEVEL[tierKey(k)];return o&&l?.kind==='level'?Math.min(o.cap,Math.max(0,(hero|0)-adviceLevel(l,k)-o.grace)):0;};
export const tierScale=(l,k,hero=0)=>{if(!l||l.kind!=='level')return {hp:1,atk:1};const t=tierOf(k),r=rampOf(l),o=OVER_LEVEL[tierKey(k)],d=overLevels(l,k,hero);return {hp:r.hp*t.hp*(1+(o?.hp||0)*d),atk:r.atk*t.atk*(1+(o?.atk||0)*d)};};
/* ---- modifiers: one per elite, shown by a tinted aura and a name prefix ("Swift Goblin") ---------------------------- */
export const MODS={
 shielded:{key:'shielded',label:'Shielded',color:'#7fc4ff',wards:2,text:'The first hits are absorbed.'},
 swift:{key:'swift',label:'Swift',color:'#ffe066',speed:1.35,cd:.7,text:'Moves and attacks faster.'},
 vampiric:{key:'vampiric',label:'Vampiric',color:'#e0476a',heal:.15,text:'Heals when it hits you.'},
 splitting:{key:'splitting',label:'Splitting',color:'#8fe07a',parts:2,partHp:.4,partScale:.8,text:'Splits in two when it falls.'},
 enraged:{key:'enraged',label:'Enraged',color:'#ff7a2e',below:.4,cd:.55,speed:1.2,text:'Attacks faster below 40% health.'}};
export const MOD_KEYS=Object.keys(MODS);
/* a modified regular is a small champion: a quarter more health, elite gold and XP on the kill */
export const MOD_HP=1.25;
/* A stable small hash, so the same level, wave and slot always bring the same modifier (records stay comparable). */
export const seedOf=str=>{let h=2166136261;for(const ch of String(str)){h^=ch.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;};
export const pickMod=seed=>MOD_KEYS[seedOf(seed)%MOD_KEYS.length];
/* Gives a spawnable definition its modifier (returns the same object). Wards, healing, splitting and the rage are read by
   scenes/combat.js (hit, hurt, kill); speed and cooldowns change here. */
export function applyMod(e,key){const m=MODS[key];if(!e||!m)return e;
 e.mod=key;e.modColor=m.color;e.tint=m.color;e.name=`${m.label} ${String(e.name||'').replace(/^Elite /,'')}`.trim();
 if(!e.elite)e.hp=Math.max(1,Math.round(e.hp*MOD_HP));
 if(key==='shielded')e.ward=m.wards;
 if(key==='swift'){e.speed=(e.speed||40)*m.speed;e.cd=(e.cd||1.5)*m.cd;e.cdMul=(e.cdMul||1)*m.cd;}
 if(key==='vampiric')e.vamp=m.heal;
 if(key==='splitting')e.split=m.parts;
 if(key==='enraged')e.enrage=m.below;
 return e;}
/* How much a vampiric enemy heals from one hit that landed. */
export const vampHeal=e=>e?.vamp?Math.max(1,Math.round((e.maxHp||e.hp||0)*e.vamp)):0;
/* The rage: below its threshold an enraged enemy attacks faster (cooldowns x cd) and moves faster. Returns true when it
   just flipped, so the caller can show it once. */
export function checkEnrage(e){if(!e?.enrage||e.enraged||!(e.hp>0)||e.hp>=e.maxHp*e.enrage)return false;const m=MODS.enraged;e.enraged=true;
 e.cd=(e.cd||1.5)*m.cd;e.speed=(e.speed||40)*m.speed;e.cool=Math.min(e.cool||0,.3);e.tint='#ff3b1f';
 if(e.brain){e.brain.cdMul=(e.brain.cdMul||1)*m.cd;e.brain.speedMul=(e.brain.speedMul||1)*m.speed;e.brain.gcd=Math.min(e.brain.gcd||0,.2);for(const n in e.brain.cd)e.brain.cd[n]*=m.cd;}
 return true;}
/* The two small copies a splitting enemy leaves: plain (no modifier), smaller, with partHp of the parent's base health. */
export function splitParts(e,makeDef){const m=MODS.splitting,out=[];if(!e?.split||e.boss||e.splitChild)return out;
 for(let i=0;i<e.split;i++){const d=makeDef(e.key);if(!d)continue;d.hp=Math.max(1,Math.round(d.hp*m.partHp));d.scale=(d.scale||1)*m.partScale;d.name=`Little ${String(d.name).replace(/^Elite /,'')}`;d.splitChild=true;out.push(d);}
 return out;}
/* ---- waves -------------------------------------------------------------------------------------------------------- */
const asEntry=x=>typeof x==='string'?{type:x}:{...x};
const groupsOf=waveGroups;
/* The level's waves on a tier. Normal: unchanged (the same objects). Heroic: every wave's last group leads with a modified
   elite, and every elite the designers placed gets a modifier. Legendary: every group leads with one, and an extra
   reinforcement wave (the level's own regulars, from both sides, in the last arena) comes before the boss. */
export function tierWaves(l,k){const t=tierOf(k),waves=l?.waves||[];if(!t.mods)return waves;
 const out=waves.map((w,wi)=>{const gs=groupsOf(w).map(g=>g.map(asEntry));
  gs.forEach((g,gi)=>{const lead=t.mods>=2||gi===gs.length-1;g.forEach((e,i)=>{if(e.elite||(lead&&i===0))e.mod=pickMod(`${l.id}:${k}:${wi}:${gi}:${i}`);});});
  return {...(Array.isArray(w)?{}:w),groups:gs};});
 if(t.extraWave&&waves.length){const keys=[...new Set(waves.flatMap(w=>groupsOf(w).flat()).filter(e=>typeof e==='string'))];const n=keys.length||1,at=i=>({type:keys[i%n]||'goblin'});
  const g1=[0,1,2].map(at),g2=[1,2,3,4].map(at);g1[0].mod=pickMod(`${l.id}:${k}:extra:0`);g2[0].mod=pickMod(`${l.id}:${k}:extra:1`);
  out.push({groups:[g1,g2],side:'both',ambush:true,extra:true});}
 return out;}
/* The level as a tier plays it: its waves on that tier, the tier key, and the boss's tier pattern. Normal is the level itself. */
export function tierLevel(l,k){k=tierKey(k);if(!l||l.kind!=='level'||k==='normal'||l.hidden)return l;return {...l,waves:tierWaves(l,k),tierKey:k};}
/* A boss on a tier: a faster pattern on Heroic, and on Legendary a faster one again, an earlier phase change and a third
   guard-call. Reuses the boss's own attacks; nothing new is drawn. */
export function applyBossTier(e,k){const b=tierOf(k).boss;if(!e||!b)return e;e.tierKey=tierKey(k);e.cd=(e.cd||2)*b.cd;e.speed=(e.speed||30)*b.speed;e.cdMul=(e.cdMul||1)*b.cd;
 if(b.phaseAt&&e.phaseShift)e.phaseShift={...e.phaseShift,at:Math.max(e.phaseShift.at||.5,b.phaseAt)};return e;}
/* Rally thresholds for a boss fight on a tier (a guard-call at each share of health). */
export const rallyPoints=k=>{const b=tierOf(k).boss;return b?.rally?[b.rally,.5,.2]:[.5,.2];};
/* ---- stars, par and rewards --------------------------------------------------------------------------------------- */
/* Stars against the tier's par: 3 at or under par, 2 within half again, else 1 for any clear. */
export const starsFor=(time,par)=>!(par>0)||!Number.isFinite(time)?1:time<=par?3:time<=par*1.5?2:1;
/* Oct24 certification: [Normal, Heroic, Legendary] seconds. Measured practiced clears include 15 s per secret;
   retain every previous par, allow all classes three stars, and a clean learned-ability S+ on both assists. */
export const AUTHORED_PARS={e1:[270,224,299],e2:[300,278,363],e3:[360,331,428],e4:[345,275,360],e5:[450,335,432],e6:[345,329,425],e7:[360,333,429],e8:[390,336,434],ex1:[270,195,248],ex2:[300,225,300],m1:[225,228,303],m2:[220,275,360],m3:[240,234,311],m4:[315,330,426],m5:[255,226,302],m6:[255,283,369],m7:[240,284,371],mx1:[360,195,249],v1:[225,228,303],v2:[210,230,306],v3:[182,228,303],v4:[255,285,371],v5:[255,279,365],v6:[270,283,369],v7:[285,285,372],vx1:[210,180,242]};
/* ownerbal-oct29 (owner 29 Oct 2026: Legendary 3 stars should mean mastery). Before, the endgame playtest earned Legendary's 3 stars
   at 64-67% of par (that run's fall was the play tool standing the hero up in place, which the game never does). Now the 3-star time
   on a tier is its par x STAR_PAR (Legendary .65, so that playtest's runs sit on the line and the kid bot with the capstone set
   earns it on 99 / 75 / 57% of its clean Elderwood / Emberkeep / Veilmoor runs, from 99 / 84 / 86%; the run grade and score keep the
   full par). No fall: a fall ends the attempt, and any
   retry of it ("Try this wave again", "Retry boss fight") carries the knockout, so game/levels.js recordLevel gives it 2 stars at most
   (on every tier, as before); STAR_CLEAN marks the tiers whose card and result say so. Stars already earned are never taken away
   (recordLevel only ever raises them). */
export const STAR_PAR={normal:1,heroic:1,legendary:.65};
export const STAR_CLEAN={legendary:true};
export const tierPar=(basePar,k,id)=>AUTHORED_PARS[id]?.[tierOf(k).rank]??Math.round(basePar*tierOf(k).par+(tierOf(k).extraWave?30:0));
export const tierGold=(base,k)=>Math.round(base*tierOf(k).gold);
/* Kill gold (24 Oct economy retune, docs/playtest/oct24-polish/ECONOMY.md): the Oct 24 playtest banked about 1300 gold
   in four runs and could buy all of Elderwood's gear after e1. A first clear still pays well (boss 60, elite or modified
   foe 12, ordinary foe 4), a replay of a tier already cleared pays half, and the arena pays replay rates. A fall still
   banks everything earned so far. */
export const KILL_GOLD={boss:60,elite:12,foe:4};
export const killGold=(e,replay)=>{const g=e?.boss?KILL_GOLD.boss:e?.elite||e?.mod?KILL_GOLD.elite:KILL_GOLD.foe;return replay?Math.max(1,Math.round(g/2)):g;};
export const tierXP=(base,k)=>Math.round(base*tierOf(k).xp);
/* Level XP (balance-oct26, owner: "make xp less if its too much"; deliberate death must never out-earn winning). The one place
   the kill XP and the win bonus are tuned (scenes/combat.js reads these; Library and lesson XP never pass through here):
   - KILL_XP: what a kill pays before scaling (boss, elite or modified foe, ordinary foe), growing `growth` per level tier,
     compounding (the hero's next level costs more each level, game/math.js xpFor). Before 26 Oct it grew 12% a tier, linear.
   - XP_TUNE.scale: every kill on every tier. kill[tier]: a tier's share of that. win[tier]: the victory bonus, a share of the
     kill XP the run earned (a wave retry counts the kills before it), paid only on a win, first clear or replay. A fall keeps
     every point already earned; it simply never gets the bonus. */
export const KILL_XP={boss:100,elite:40,foe:12,growth:.15};
/* Tuned 26 Oct with tools/balance-sim.mjs --library=200 (a once-through Normal campaign plus one mastered topic per 1.25 levels):
   the hero now ends each level about at the next level's recommended hero level (e4 7, e8 9, m4 12, m7 14, v7 20; it was 9, 12,
   14, 16 and 21). With tools/sim/oct26-exploit3-xp.mjs (--suicide), falling at the boss on purpose pays at most 0.87x the XP a
   minute of winning on Normal, 0.90x on Heroic and 0.58x on Legendary (it was up to 1.2x, 1.8x and 1.7x). tests/balance-oct26.test.js. */
export const XP_TUNE={scale:.25,kill:{normal:.75,heroic:.5,legendary:.35},win:{normal:.4,heroic:1,legendary:2}};
/* lategame-oct27 (lead brief: a late Legendary win may pay at most 1.15x its pre-26-Oct amount): on Heroic and Legendary the kill
   XP stops growing at level tier GROWTH_CAP (Veilmoor's Veil Gate is 21 and The Deep Below 22). A late win there paid 1.20-1.40x the
   pre-26-Oct kill XP; at tier 20 it is 1.08x on Heroic and 1.14x on Legendary. Normal (the level curve) is unchanged, and the
   victory bonus and a fall scale the same way, so the fall/win ratio does not move. tests/lategame-oct27.test.js. */
export const GROWTH_CAP={heroic:20,legendary:20};
export const killXP=(e,k)=>Math.round((e?.boss?KILL_XP.boss:e?.elite||e?.mod?KILL_XP.elite:KILL_XP.foe)*Math.pow(1+KILL_XP.growth,Math.min(Math.max(1,e?.tier||1),GROWTH_CAP[tierKey(k)]||99)-1)*XP_TUNE.scale*(XP_TUNE.kill[tierKey(k)]??1));
export const winXP=(kills,k)=>Math.round(Math.max(0,+kills||0)*(XP_TUNE.win[tierKey(k)]||0));
/* The hero level a tier is tuned for: about one hero level per level tier on Normal (the balance sim reaches 19 by the
   Veilmoor's end), +3 on Heroic, +6 on Legendary. Advice only -- nothing is gated on it. */
export const recLevel=(l,k)=>Math.max(1,Math.round(1+(Math.max(1,l?.tier||1)-1)*.85)+tierOf(k).rec);
/* The hero level the tier card shows (oct24-polish2, playtest r3 D5: e3/e5 said "hero level 3/4" and the r3 kid lost there).
   recLevel stays the sims' tuning anchor (Heroic/Legendary certification levels the hero to it); the card shows at least the
   Normal level at which the r3 kid profile clears with about one fall in ten runs or fewer, measured with
   node tools/balance-sim.mjs --only=<id> --level=N --bot=masher --skill=.5 --find=0 --reps=2..4 (abilities on the Library schedule):
   e4 0.1 falls at 3, 0 at 5; e5 0.3-0.4 at 3-5, 0.1 at 7 (seed 1; seed 5 stays 0.3 from 7 to 10, so the boss, not the level, is
   the rest); e6 0.4 at 3-5, 0 at 7; ex1/ex2 0.1-0.2 at 5, 0-0.1 at 7. A higher tier adds its own `rec` on top. Encounters are untouched. */
/* oct24-overlevel: e2 and e3 said hero level 2 and 3, but every class leaves the prologue at 3 and e1 at 5 (balance sim, r3 kid,
   7 classes), so no child arrives that low; over-level XP damping (math.js overLevelXP) would have cut a brand-new kid's XP in e2.
   They now recommend the level a child really has there, less the two levels of headroom: e2 3, e3 4. */
export const REC_NORMAL={e2:3,e3:4,e4:5,e5:7,e6:7,e7:7,e8:8,ex1:6,ex2:6,mx1:12};
export const adviceLevel=(l,k)=>Math.max(recLevel(l,k),(REC_NORMAL[l?.id]||0)+tierOf(k).rec);
/* The abilities a hero of that level could have opened (the ladder's hero levels 1/2/3/4/6/8/10/12), as advice. */
export const LADDER_LEVELS=[1,2,3,4,6,8,10,12];
export const recAbilities=lvl=>LADDER_LEVELS.filter(x=>x<=lvl).length;
