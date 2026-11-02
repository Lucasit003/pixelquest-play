// The level graph (Castle Crashers shape): chapters of short levels, each ending in its own boss.
// Contract: docs/GAME_V2_PLAN.md §Levels. Owned by the levels agent; others read it.
// - id: stable, saved in save.levels[id] -- never rename a shipped id.
// - kind: 'level' (waves then a boss) | 'shop' | 'arena' | 'home' (Return Home pad).
// - requires: ids that must be done before this pad opens (any one of them: a branch opens from either side).
// - optional: a side pad off the main path; nothing on the main path requires it.
// - biome: the level's own look, a key into gfx/biomes (family = the part before the dash).
// - floor: the boss arena's own floor (improve20-r8d-nov1), one id per boss level; tools/bake-arena-floors.mjs lays the
//   ones it knows as an "Arena floor" layer in the level's TMX, the rest are the level's own painted ground.
// - boss: key into game/enemies.js ENEMY_TYPES; bossName is the name card. waves: see game/stage.js waveGroups().
// - tier: difficulty, 1..22 along the whole game; enemies scale with it. gap: walking room between arenas (x STAGE.gap).
// - par: a brisk clear time in seconds (score bonus only -- never a timer on anything).
// - gentle: Normal keeps its original numbers (game/tiers.js NORMAL_RAMP skips it): the prologue and Goblin Camp.
// - stars: a star gate -- the pad also needs that many stars in total, from any level and tier (see starGate).
// Map positions live in game/worldmap-layout.js (worldmap agent), keyed by these ids.
import {stageWidth} from './stage.js';
import {TIER_KEYS,tierOf,tierKey,tierPar,tierGold,tierXP,starsFor,STAR_PAR,STAR_CLEAN} from './tiers.js';
export const CHAPTERS=[
 {id:'elderwood',name:'Elderwood',biome:'forest',blurb:'Goblins, orcs and old things in the wood.',
  pool:['goblin','slime','orc','orc-rogue','skeleton'],elites:['goblin-king','orc-warlord','minotaur']},
 {id:'emberkeep',name:'Emberkeep',biome:'lava',blurb:'A castle built on a cooling volcano.',
  pool:['fire-skeleton','imp','magma-slime','forge-construct','ember-drake','obsidian-shard','ash-ghoul','ember-lobber','furnace-stoker','basalt-guard','slag-smith'],elites:['magma-brute','imp-warchief']},
 {id:'veilmoor',name:'The Veilmoor',biome:'mystic',blurb:'Violet mists where the rules bend.',
  pool:['wisp','cultist','shade','drowned-thrall','void-spawn','deep-one','moonmoth'],elites:['veil-seer','prism-sentinel','abyss-herald']}];
const E=(type)=>({type,elite:true});
/* oct24-ch3 (playtest ch3): the Veilmoor drew its Run Draft mini at random from three elites, so one could come on two levels in a
   row (v4 and v5, v6 and v7...) and none carried a name. Each Veilmoor level now names its mini as Emberkeep's do: on v3-v5 the
   level's own wave elite (one mini-boss per level), elsewhere one of the three that is on neither level next to it; v6 and v7
   keep their heavier Jailer and Hulk once, so no level's numbers grow. */
/* oct24-ember-finale (playtest ch2 E5): a chapter-2 level names its mini-boss (mini): its wave elite and its Run Draft mini, so
   none repeats on two levels in a row and each fits its stage. Earlier Emberkeep bosses return as minis with a chapter mini's
   numbers (enemies.js BOSS_AS_MINI); on Normal a mini is never a boss not reached yet (m3: m2's Forge Golem, m4: m1's
   Dungeon Master, m7: the Forge Golem guarding Moltar's throne). */
export const LEVELS=[
 {id:'home',chapter:'elderwood',kind:'home',name:'Oakhaven',requires:[]},
 /* The prologue (slice beat 4): a 60-90 second skirmish at Oakhaven's south gate right after waking at Home, one
    action taught at a time. hidden: not a world-map pad; the hub starts it with startLevel('prologue'). No boss:
    clearing its one wave ends it. It plays on its own short strip, 'forest-gate' (art/tiled/levels/forest-gate.tmx): the road outside
    Oakhaven's south gate with the Thorn King's brambles creeping in. */
 {id:'prologue',chapter:'elderwood',kind:'level',hidden:true,name:'Thorns at the Gate',biome:'forest-gate',floor:'gate-trail',boss:'bramblejaw',bossName:'Bramblejaw, Gate Raider',requires:[],tier:1,gap:.5,gentle:true,
  blurb:'Goblin scouts at the south gate. The Thorn King is stirring.',story:'Goblin scouts at the gate! Show them Oakhaven has a hero.',
  waves:[{groups:[['goblin','goblin']]},{groups:[['goblin','rat','goblin'],['orc-rogue','goblin']]}],
  tutorial:[{id:'move',done:'moved'},{id:'attack',done:'attacked'},{id:'walk',done:'wave'},{id:'dodge',done:'dodged',when:'windup'},{id:'power',done:'cast',when:'ability'},{id:'finish',done:'cleared'}]},
 // --- Elderwood: eight boss levels, a trader, an arena and two side paths. Tiers 1-8.
 {id:'e1',chapter:'elderwood',kind:'level',name:'Goblin Camp',biome:'forest-camp',floor:'camp-trail',boss:'goblin-king',bossName:'Grubnak, Goblin Chief',requires:['home'],tier:1,gap:.6,gentle:true,
  blurb:'Fight through the camp, then beat Grubnak.',
  waves:[{groups:[['goblin','goblin','rat'],['goblin','goblin','orc-rogue','rat']]},{groups:[['goblin','goblin','rat','rat'],['orc-rogue','goblin','goblin'],['orc','goblin','goblin','orc-rogue','rat']],side:'both'},{groups:[['goblin','goblin','orc-rogue'],['orc','goblin','goblin','rat']],ambush:true}]},
 {id:'e2',chapter:'elderwood',kind:'level',name:'Slime Bog',biome:'forest-bog',floor:'bog-pond',boss:'slime-king',bossName:'The Bog King',requires:['e1'],tier:2,gap:1,
  blurb:'Slow, bouncing, and everywhere. Watch where they land.',
  waves:[{groups:[['slime','slime','rat'],['slime','slime','slime','rat']]},{groups:[['slime','flying-eye','slime'],['slime','slime','rat','flying-eye']],side:'both'},{groups:[['rat','slime','slime','rat'],['slime','slime','flying-eye','rat','slime']]},{groups:[['slime','slime','flying-eye'],['slime','slime','rat','rat']],ambush:true}],bossAdds:['slime','slime']},
 {id:'e3',chapter:'elderwood',kind:'level',name:'Orc Warcamp',biome:'forest-warcamp',floor:'camp-mud',boss:'orc-warlord',bossName:'Gorrak the Warlord',requires:['e2'],tier:3,gap:1.2,
  blurb:'Four fights through the stockade. Orcs hit hard; let them swing first.',
  waves:[{groups:[['orc','orc-rogue','goblin'],['orc-rogue','orc','goblin']]},{groups:[['orc','orc-rogue','goblin'],['orc','goblin','orc-rogue']]},{groups:[['orc-rogue','orc','goblin'],['orc','orc','goblin']],side:'both'},{groups:[['orc-rogue','orc-rogue','goblin'],['orc','orc-rogue','orc-rogue','goblin']]},{groups:[['orc','orc-rogue','goblin'],['orc-rogue','orc-rogue','goblin']],ambush:true}],bossAdds:['orc-rogue']},
 {id:'e4',chapter:'elderwood',kind:'level',name:'Minotaur Hollow',biome:'forest-hollow',floor:'hollow-earth',boss:'minotaur',bossName:'The Hollow Minotaur',requires:['e3'],tier:4,gap:.8,
  blurb:'A short walk into a deep hollow, and something huge at the bottom.',
  waves:[{groups:[['orc','goblin','flying-eye'],['orc','orc-rogue','goblin','goblin']]},{groups:[['orc-rogue','orc-rogue','flying-eye'],['orc-rogue','orc','goblin','flying-eye']],side:'left'},{groups:[['orc','orc','goblin','goblin'],['orc','orc-rogue','orc','goblin','goblin']],side:'both'},{groups:[['orc','orc-rogue','goblin'],['orc','orc','goblin','flying-eye']],ambush:true}]},
 {id:'shop1',chapter:'elderwood',kind:'shop',name:'Wandering Trader',requires:['e2']},
 {id:'e5',chapter:'elderwood',kind:'level',name:'Old Graveyard',biome:'forest-graveyard',floor:'grave-soil',boss:'skeleton-king',bossName:'The Skeleton King',requires:['e4'],tier:5,gap:1.4,
  blurb:'The longest walk in the wood. The dead rise in rows, from both sides.',
  waves:[{groups:[['skeleton','skeleton','executioner-spirit'],['skeleton','skeleton','skeleton','executioner-spirit']]},{groups:[['skeleton','skeleton','skeleton-mage'],['skeleton','skeleton-warrior','skeleton','executioner-spirit']],side:'both'},{groups:[['skeleton-warrior','skeleton-mage','skeleton'],['skeleton-warrior','skeleton-warrior','skeleton-mage','executioner-spirit']]},{groups:[['skeleton-warrior','skeleton','skeleton','skeleton-mage'],['skeleton-warrior','skeleton-warrior','skeleton-mage','skeleton','executioner-spirit']],side:'both'},{groups:[['skeleton','skeleton','skeleton-mage'],['skeleton-warrior','skeleton','skeleton','executioner-spirit']],ambush:true}],bossAdds:['skeleton','skeleton']},
 {id:'e6',chapter:'elderwood',kind:'level',name:'Shaman Grove',biome:'forest-grove',floor:'ritual-moss',boss:'orc-shaman',duo:'orc-warlord',bossName:'Mother Ruk & Gorrak',requires:['e5'],tier:6,gap:1,
  /* a duo fight (owner, 8 Oct): Gorrak came back from the Warcamp to stand beside his shaman */
  blurb:'The grove is warded. Gorrak came back to stand beside his shaman: two bosses at once.',
  waves:[{groups:[['orc','thornling','sporeling'],['orc','thornling','sporeling','sporeling']]},{groups:[['wisp','wisp','wisp','wisp'],['orc','orc','wisp','wisp']],side:'both'},{groups:[['orc','orc','thornling'],['orc','orc','thornling','sporeling','sporeling']]},{groups:[['orc','thornling','sporeling'],['thornling','thornling','sporeling','sporeling']]},{groups:[['orc','thornling','wisp'],['thornling','thornling','sporeling','sporeling']],ambush:true}],bossAdds:['orc','thornling']},
 {id:'arena1',biome:'forest-arena',chapter:'elderwood',kind:'arena',name:'Woodland Arena',requires:['e4']},
 {id:'e7',chapter:'elderwood',kind:'level',name:'Ruined Watch',biome:'forest-ruins',floor:'watch-flagstones',boss:'stone-golem',bossName:'The Watch Golem',requires:['e6'],tier:7,gap:1.3,
  blurb:'Bone guards on the walls, stone sentries in the yard, a golem in the tower.',
  waves:[{groups:[['pebble-golem','skeleton-warrior','skeleton'],['skeleton-warrior','pebble-golem','skeleton','skeleton']]},{groups:[['skeleton-mage','skeleton-mage','pebble-golem'],['skeleton-warrior','skeleton','pebble-golem','skeleton']]},{groups:[[E('skeleton-warrior'),'skeleton'],['skeleton','skeleton','skeleton']],side:'both'},{groups:[['skeleton-mage','skeleton-warrior','pebble-golem'],['skeleton-warrior','pebble-golem','skeleton-mage','skeleton','pebble-golem']]},{groups:[['skeleton-warrior','skeleton','pebble-golem'],['skeleton','skeleton-warrior','skeleton-mage','pebble-golem']],ambush:true}],bossAdds:['pebble-golem']},
 {id:'e8',chapter:'elderwood',kind:'level',name:'Thorn Keep',biome:'forest-keep',floor:'throne-carpet',boss:'thorn-king',bossName:'The Thorn King',requires:['e7'],tier:8,gap:1.5,
  blurb:'The end of the wood. Everything the forest has left, then its king.',
  waves:[{groups:[['thornling','thornling','sporeling'],['bramble-knight','thornling','pebble-golem','sporeling']]},{groups:[['bramble-knight','bandit-thug','thornling'],['skeleton-mage','skeleton-mage','bandit-thug','thornling']],side:'both'},{groups:[[E('skeleton-king'),'skeleton','skeleton'],['bramble-knight','skeleton','executioner-spirit']]},{groups:[['bramble-knight','thornling','skeleton-mage'],['pebble-golem','bramble-knight','skeleton-mage','bandit-thug','thornling']],side:'both'},{groups:[['thornling','thornling','bandit-thug'],['bramble-knight','skeleton-mage','pebble-golem','thornling']],ambush:true}],bossAdds:['thornling','thornling']},
 {id:'ex1',chapter:'elderwood',kind:'level',optional:true,name:'Bandit Road',biome:'forest-road',floor:'bandit-cobbles',boss:'bandit-chief',bossName:'Red Hand, Bandit Chief',requires:['e3'],tier:4,gap:1.6,
  blurb:'A side road with no shortcuts: bandits drop out of the trees, even behind you.',
  waves:[{groups:[['bandit-thug'],['bandit-thug','bandit-thug']],side:'left'},{groups:[['rat','bandit-thug'],['bandit-thug','bandit-thug','rat']],side:'both'}],bossAdds:['bandit-thug','bandit-thug']},
 {id:'ex2',chapter:'elderwood',kind:'level',optional:true,name:'Mushroom Mire',biome:'forest-mire',floor:'mire-pond',boss:'mushroom-lord',bossName:'The Mushroom Lord',requires:['e5'],tier:6,gap:.7,
  blurb:'A soft, quiet bog that is not quiet at all.',
  waves:[['sporeling','sporeling','slime'],{groups:[['sporeling','sporeling'],['slime','sporeling'],['wisp','wisp']],side:'both'},[E('slime-king'),'sporeling']],bossAdds:['sporeling','sporeling','sporeling']},
 // --- Emberkeep: seven boss levels, a trader, an arena and a side path. Tiers 9-15.
 {id:'m1',chapter:'emberkeep',kind:'level',name:'Ashen Gate',biome:'lava-gate',floor:'ash',boss:'dungeon-master',bossName:'The Dungeon Master',mini:'imp-warchief',requires:['e8'],tier:9,gap:1,stars:15,
  blurb:'The keep\'s front door, and the jailer who keeps it.',
  waves:[['skeleton-warrior','skeleton'],{groups:[['imp','imp'],['skeleton-warrior','ember-lobber']],side:'both'},['fire-skeleton','ember-lobber','skeleton']],bossAdds:['skeleton-warrior']},
 {id:'m2',chapter:'emberkeep',kind:'level',name:'Cinder Forge',biome:'lava-forge',floor:'forge-plates',boss:'forge-golem',bossName:'The Forge Golem',mini:'magma-brute',requires:['m1'],tier:10,gap:.8,
  blurb:'Anvils, bellows, and a golem still glowing from the mould.',
  waves:[['forge-construct','magma-slime'],{groups:[['forge-construct'],['forge-construct','magma-slime']]},[E('magma-brute')],['forge-construct','forge-construct','magma-slime','ember-drake']],bossAdds:['forge-construct','forge-construct']},
 {id:'shop2',chapter:'emberkeep',kind:'shop',name:'Ember Market',requires:['m2']},
 {id:'m3',chapter:'emberkeep',kind:'level',name:'Magma Bridges',biome:'lava-bridge',floor:'basalt-seams',boss:'fire-wyrm',bossName:'Scorchtail the Wyrm',plate:'Scorchtail',mini:'forge-golem',requires:['m2'],tier:11,gap:1.6,
  blurb:'Narrow crossings over the lava, held from both banks.',
  waves:[{groups:[['ember-drake','ember-drake'],['ember-drake','ember-drake']],side:'both'},['ember-drake','obsidian-shard','obsidian-shard'],{groups:[['ember-drake','ash-ghoul'],['ember-drake','obsidian-shard']],side:'left'}],bossAdds:['ember-drake','ember-drake']},
 {id:'m4',chapter:'emberkeep',kind:'level',name:'Ember Barracks',biome:'lava-barracks',floor:'barracks-dirt',boss:'flame-knight',bossName:'Sir Cinder, the Flame Knight',mini:'dungeon-master',requires:['m3'],tier:12,gap:1.1,
  blurb:'The garrison wakes up. Five drills, one champion.',
  waves:[['skeleton-warrior','skeleton-warrior'],['fire-skeleton','fire-skeleton','forge-construct'],{groups:[['fire-skeleton','fire-skeleton'],['skeleton-warrior','skeleton-warrior']]},[E('dungeon-master'),'fire-skeleton'],['skeleton-warrior','fire-skeleton','forge-construct','fire-skeleton','ember-drake']],bossAdds:['fire-skeleton','fire-skeleton']},
 {id:'arena2',biome:'lava-arena',chapter:'emberkeep',kind:'arena',name:'Cinder Pit',requires:['m4']},
 {id:'m5',chapter:'emberkeep',kind:'level',name:'Furnace Depths',biome:'lava-furnace',floor:'furnace-grates',boss:'imp-lord',bossName:'Vexx, Lord of Imps',mini:'flame-knight',requires:['m4'],tier:13,gap:.9,
  blurb:'Hot, cramped and crawling with imps.',
  waves:[{groups:[['imp','imp','imp'],['furnace-stoker','imp']],side:'both'},['magma-slime','furnace-stoker','magma-slime'],{groups:[['imp','imp'],['ash-ghoul','imp'],['furnace-stoker','imp']],side:'both'}],bossAdds:['imp','imp','imp']},
 {id:'m6',chapter:'emberkeep',kind:'level',name:'Obsidian Halls',biome:'lava-halls',floor:'obsidian-tiles',boss:'obsidian-sentinel',bossName:'The Obsidian Sentinel',plate:'The Sentinel',mini:'imp-lord',requires:['m5'],tier:14,gap:1.4,
  blurb:'Black glass halls where the king of bones once ruled.',
  waves:[['obsidian-shard','basalt-guard','skeleton'],[E('imp-lord'),'obsidian-shard'],{groups:[['obsidian-shard','ember-lobber'],['obsidian-shard','skeleton','ember-lobber']]},['basalt-guard','skeleton-warrior','skeleton','ember-lobber']],bossAdds:['obsidian-shard','obsidian-shard']},
 {id:'m7',chapter:'emberkeep',kind:'level',name:'Molten Throne',biome:'lava-throne',floor:'throne-dais',boss:'demon-slime',bossName:'Moltar, the Forge Ogre',plate:'Moltar',mini:'obsidian-sentinel',requires:['m6'],tier:15,gap:1.5,
  blurb:'At the heart of the volcano, the forge ogre guards his molten throne.',
  waves:[['magma-slime','slag-smith','imp'],{groups:[['fire-skeleton','fire-skeleton'],['imp','imp','imp']],side:'both'},[E('obsidian-sentinel'),'magma-slime'],['fire-skeleton','slag-smith','forge-construct','imp','magma-slime']],bossAdds:['magma-slime','magma-slime']},
 {id:'mx1',chapter:'emberkeep',kind:'level',optional:true,name:'Ash Wastes',biome:'lava-wastes',floor:'wastes-sand',boss:'cinder-wraith',bossName:'The Cinder Wraith',mini:'fire-wyrm',requires:['m3'],tier:12,gap:1.8,
  blurb:'Grey dunes outside the walls. Nothing grows; things still walk.',
  waves:[['ash-ghoul','skeleton','skeleton'],{groups:[['ash-ghoul'],['ash-ghoul','skeleton'],['ash-ghoul','skeleton']],side:'both'}],bossAdds:['ash-ghoul','ash-ghoul']},
 // --- The Veilmoor: seven boss levels, a trader, an arena and a side path. Tiers 16-22.
 {id:'v1',chapter:'veilmoor',kind:'level',name:'Drowned Shrine',biome:'mystic-shrine',floor:'shrine-pond',boss:'drowned-priest',bossName:'The Drowned Priest',mini:'prism-sentinel',requires:['m7'],tier:16,gap:1,stars:35,
  blurb:'Steps down into still violet water. Someone still keeps the shrine.',
  waves:[['drowned-thrall','slime'],{groups:[['drowned-thrall','wisp'],['drowned-thrall','wisp']],side:'both'},['cultist','drowned-thrall','drowned-thrall']],bossAdds:['drowned-thrall','drowned-thrall']},
 {id:'v2',chapter:'veilmoor',kind:'level',name:'Glimmer Fen',biome:'mystic-fen',floor:'fen-pond',boss:'wisp-mother',bossName:'The Wisp Mother',mini:'abyss-herald',requires:['v1'],tier:17,gap:1.3,
  blurb:'Lights over the marsh. Follow them and they bite.',
  waves:[['wisp','wisp','wisp'],{groups:[['slime','wisp'],['wisp','wisp','slime']]},['void-spawn','wisp','void-spawn']],bossAdds:['wisp','wisp','wisp']},
 {id:'shop3',chapter:'veilmoor',kind:'shop',name:'Moonlit Stall',requires:['v2']},
 {id:'v3',chapter:'veilmoor',kind:'level',name:'Mirror Woods',biome:'mystic-mirror',floor:'mirror-grass',boss:'shadow-twin',bossName:'Your Shadow',mini:'veil-seer',requires:['v2'],tier:18,gap:1,
  blurb:'The trees show you yourself. The shades come from behind.',
  waves:[{groups:[['shade'],['shade','shade']],side:'left'},{groups:[['shade','cultist'],['shade','shade']],side:'both'},[E('veil-seer'),'shade']],bossAdds:['shade','shade']},
 {id:'v4',chapter:'veilmoor',kind:'level',name:'Starfall Ruins',biome:'mystic-ruins',floor:'starfall-flagstones',boss:'crystal-golem',bossName:'The Crystal Golem',mini:'drowned-priest',requires:['v3'],tier:19,gap:1.5,
  blurb:'A fallen star broke this city. Its crystals still stand guard.',
  waves:[['moonmoth','deep-one','moonmoth'],{groups:[['wisp','wisp'],['void-spawn','void-spawn'],['deep-one']],side:'both'},[E('drowned-priest'),'wisp'],['deep-one','void-spawn','moonmoth','wisp']],bossAdds:['wisp','wisp']},
 {id:'arena3',biome:'mystic-arena',chapter:'veilmoor',kind:'arena',name:'Astral Ring',requires:['v4']},
 {id:'v5',chapter:'veilmoor',kind:'level',name:'Hollow Choir',biome:'mystic-choir',floor:'choir-runes',boss:'lich',bossName:'The Choir Lich',mini:'wisp-mother',requires:['v4'],tier:20,gap:1.1,
  blurb:'A cathedral of bone that sings. The lich conducts.',
  waves:[['cultist','skeleton','skeleton'],{groups:[['skeleton','skeleton','skeleton'],['skeleton-warrior','skeleton-warrior']],side:'both'},[E('wisp-mother'),'cultist'],['cultist','skeleton-warrior','skeleton','skeleton']],bossAdds:['skeleton','skeleton']},
 {id:'v6',chapter:'veilmoor',kind:'level',name:'Veil Gate',biome:'mystic-gate',floor:'veil-stone',boss:'void-knight',bossName:'The Void Knight',mini:'crystal-golem',requires:['v5'],tier:21,gap:1.4,
  blurb:'The last door before the deep. Its keeper never sleeps.',
  waves:[['void-spawn','shade','void-spawn'],[E('veil-jailer'),'shade'],{groups:[['void-spawn','moonmoth','moonmoth'],['void-spawn','drowned-thrall'],['void-spawn','shade']],side:'both'},['drowned-thrall','shade','moonmoth','drowned-thrall','shade']],bossAdds:['void-spawn','void-spawn']},
 {id:'v7',chapter:'veilmoor',kind:'level',name:'The Deep Below',biome:'mystic-abyss',floor:'deep-stone',boss:'cthulhu',bossName:'The Sleeper in the Deep',plate:'The Sleeper',mini:'lich',requires:['v6'],tier:22,gap:1.6,
  blurb:'The bottom of the world, where the old thing dreams.',
  waves:[['deep-one','shade','drowned-thrall'],{groups:[['deep-one','drowned-thrall'],['deep-one','shade','skeleton-warrior']],side:'both'},[E('trench-hulk')],['deep-one','shade','skeleton-warrior','drowned-thrall','shade']],bossAdds:['deep-one','deep-one']},
 {id:'vx1',chapter:'veilmoor',kind:'level',optional:true,name:'Moonlit Garden',biome:'mystic-garden',floor:'garden-grass',boss:'moth-queen',bossName:'The Moth Queen',mini:'shadow-twin',requires:['v3'],tier:19,gap:.8,
  blurb:'A walled garden that only opens at night.',
  waves:[{groups:[['moonmoth','slime'],['moonmoth','moonmoth','slime']],side:'both'},['slime','moonmoth','moonmoth']],bossAdds:['moonmoth','moonmoth']}];
/* TODO(enemies): keys used above that game/enemies.js does not have yet, each with the key that stands in
   until its art and AI land. Delete a row when ENEMY_TYPES gains the real one; the adapter already
   prefers ENEMY_TYPES. TODO_BOSSES lists the boss rows. */
export const STAND_INS={
 imp:'goblin','fire-skeleton':'skeleton-warrior','magma-slime':'slime',wisp:'slime',cultist:'skeleton-mage',shade:'orc-rogue',
 'bandit-chief':'orc-warlord','mushroom-lord':'slime-king',
 'forge-golem':'stone-golem','fire-wyrm':'minotaur','flame-knight':'skeleton-king','imp-lord':'orc-shaman','obsidian-sentinel':'stone-golem','cinder-wraith':'skeleton-king',
 'drowned-priest':'orc-shaman','wisp-mother':'slime-king','shadow-twin':'minotaur','crystal-golem':'stone-golem','lich':'skeleton-king','void-knight':'dungeon-master','moth-queen':'slime-king'};
export const TODO_BOSSES=LEVELS.filter(l=>l.boss&&STAND_INS[l.boss]).map(l=>l.boss);
export const levelById=id=>LEVELS.find(l=>l.id===id);
export const levelDone=(save,id)=>id==='home'||!!save?.levels?.[id]?.done;
/* A pad opens when any one requirement is done and, for a star-gated pad, the total stars reach its gate. A pad already
   won on any tier, or one a save had reached before star gates existed (save.starPass), never closes again. */
export const levelOpen=(save,id)=>{const l=levelById(id);return !!l&&(l.requires.length===0||l.requires.some(r=>levelDone(save,r)))&&starGateMet(save,l);};
/* ---- the difficulty ladder (game/tiers.js): per-tier records, stars and star gates ---------------------------------
   save.levels[id] is the Normal record ({done,best,plays,stars}); save.levels[id].tiers[heroic|legendary] hold the
   others in the same shape. Only map levels are tiered: not the hidden prologue, the shops or the arenas. */
export const tiered=l=>!!l&&l.kind==='level'&&!l.hidden;
export const tierRecord=(save,id,k)=>{const r=save?.levels?.[id];return tierKey(k)==='normal'?r||null:r?.tiers?.[tierKey(k)]||null;};
export const tierDone=(save,id,k)=>tierKey(k)==='normal'?levelDone(save,id):!!tierRecord(save,id,k)?.done;
/* Heroic opens after the Normal clear and Legendary after the Heroic clear (and never on a pad that is not open). */
export const tierOpen=(save,id,k)=>{const l=levelById(id),i=TIER_KEYS.indexOf(tierKey(k));if(!l||!levelOpen(save,id))return false;if(i===0)return true;return tiered(l)&&tierDone(save,id,TIER_KEYS[i-1]);};
export const starsOf=(save,id,k)=>{const r=tierRecord(save,id,k);return r?.done?Math.max(1,Math.min(3,r.stars|0)):0;};
/* Earned identity reads old and new clear records; no claim ledger or stat bonus. */
export const tierCrests=(save,id)=>tiered(levelById(id))?['heroic','legendary'].filter(k=>tierDone(save,id,k)):[];
export const chapterBorder=(save,chapter)=>{const levels=LEVELS.filter(l=>tiered(l)&&l.chapter===chapter);return levels.length>0&&levels.every(l=>tierDone(save,l.id,'legendary'));};
export const levelStars=(save,id)=>TIER_KEYS.reduce((t,k)=>t+starsOf(save,id,k),0);
export const STAR_LEVELS=()=>LEVELS.filter(tiered);
export const totalStars=save=>STAR_LEVELS().reduce((t,l)=>t+levelStars(save,l.id),0);
export const maxStars=()=>STAR_LEVELS().length*9;
export const starGate=l=>l?.stars|0;
export function starGateMet(save,l){const need=starGate(l);if(!need)return true;if(TIER_KEYS.some(k=>tierDone(save,l.id,k))||save?.starPass?.includes?.(l.id))return true;return totalStars(save)>=need;}
/* {need,have} when the pad's requirements are done but its star gate is not; else null. */
export function starsShort(save,id){const l=levelById(id);if(!l||!starGate(l)||starGateMet(save,l))return null;if(!(l.requires.length===0||l.requires.some(r=>levelDone(save,r))))return null;return {need:starGate(l),have:totalStars(save)};}
export const starGateText=g=>g?`Needs ${g.need}★ — you have ${g.have}★. Replay earlier levels on Heroic or Legendary, or beat their par times, for more stars.`:'';
/* The last level on the main road of the last chapter: winning it finishes the adventure (playtest oct14: beating the
   final boss used to end on an ordinary result card). Side paths never count. */
export const gameFinale=id=>{const last=CHAPTERS[CHAPTERS.length-1]?.id,l=levelById(id);return !!l&&l.kind==='level'&&!l.optional&&!l.hidden&&l.chapter===last&&!LEVELS.some(o=>o.chapter===last&&o.kind==='level'&&!o.optional&&o.requires.includes(id));};
/* oct24-progress (playtest r3 D4): the main-road level whose win opens the next chapter -> {chapter, next}, else null (the
   result screen's "Chapter clear!" line; the last chapter has gameFinale instead) */
export const chapterClear=id=>{const l=levelById(id);if(!l||l.kind!=='level'||l.optional||l.hidden)return null;const i=CHAPTERS.findIndex(c=>c.id===l.chapter),next=CHAPTERS[i+1];return next&&LEVELS.some(o=>o.chapter===next.id&&o.requires?.includes(id))?{chapter:CHAPTERS[i],next}:null;};
export const chapterOf=l=>CHAPTERS.find(c=>c.id===l?.chapter)||CHAPTERS[0];
/* Rewards. Gold is paid in full on the first clear and a quarter on replays, so replaying is for fun and
   records, not a grind. Clear XP is first-clear only. Neither ever unlocks an ability. */
/* par: the walk at a steady pace (62 units/s), about 30s a wave and 50s for the boss. */
export const levelPar=l=>l.par??Math.round(stageWidth(l)/62+(l.waves?.length||0)*30+(l.boss?50:0));
/* A tier's par: longer on the higher tiers, where every fight lasts longer (game/tiers.js). */
export const levelParFor=(l,k)=>tiered(l)?tierPar(levelPar(l),k,l.id):levelPar(l);
/* First-clear rewards per tier: Heroic pays 1.75x gold and 1.5x XP, Legendary 2.5x and 2x. */
export const levelReward=(l,k)=>l.kind==='level'?tierGold(40+l.tier*20,tiered(l)?k:'normal'):0;
export const levelXPReward=(l,k)=>l.kind==='level'?tierXP(30+l.tier*10,tiered(l)?k:'normal'):0;
/* ownerbal-oct29: the 3-star time (Legendary's is tighter than its par, game/tiers.js STAR_PAR) and whether a fall caps the run at 2 */
export const levelStarPar=(l,k)=>tiered(l)?Math.round(levelParFor(l,k)*(STAR_PAR[tierKey(k)]??1)):levelParFor(l,k);
export const cleanStars=(l,k)=>tiered(l)&&!!STAR_CLEAN[tierKey(k)];
export const levelStarsFor=(l,k,time)=>starsFor(time,levelStarPar(l,k));
/* Points for a run: kills and damage, plus a bonus for beating par, minus a little per hit taken. */
export const levelScore=(l,{kills=0,damage=0,taken=0,time=0,won=true,waves=0,tier='normal'})=>l.kind==='arena'?waves:
 Math.max(0,Math.round(kills*100+damage+(won?Math.max(0,levelParFor(l,tier)-time)*20:0)-taken*2));
/* An arena counts as done once this many waves are survived (a badge on the map; it gates nothing). */
export const ARENA_GOAL=5;
/* Arena wave n (0-based): the chapter's own regulars (CHAPTERS pool: no foe from another chapter), more of them as it goes, a
   chapter mini every fifth wave up to wave 10. Deterministic, so a record means the same thing every time. improve20-r8b-nov1 #3
   (audit7 d16: at level 11 the Cinder Pit reached wave 18 at 80% health): after wave 10 it grows steeper, up to ARENA_MAX foes, an
   elite regular every fifth wave and a chapter mini every tenth, and the tier climbs one every two waves instead of every three. */
export const ARENA_MAX=8,ARENA_STEEP=10;
export const arenaCount=n=>n<ARENA_STEEP?Math.min(6,2+Math.floor(n/2)):Math.min(ARENA_MAX,6+Math.floor((n-ARENA_STEEP+2)/3));
export function arenaWave(level,n){const ch=chapterOf(level),pool=ch.pool,count=arenaCount(n),out=[];
 /* the step between picks is never a multiple of the pool's size (a wave of eight Imps at wave 16 otherwise) */
 const step=((7+n)%pool.length)||3;for(let i=0;i<count;i++)out.push(pool[(n*3+i*step)%pool.length]);
 const mini=()=>({type:ch.elites[Math.floor(n/5)%ch.elites.length],elite:true});
 if(n%5===4){if(n<ARENA_STEEP||n%10===9){out[0]=mini();if(n>=ARENA_STEEP)out[1]={type:out[1],elite:true};}else out[0]={type:out[0],elite:true};}
 const half=Math.ceil(out.length/2);return {groups:[out.slice(0,half),out.slice(half)],side:n%2?'both':'right'};}
/* the arena's HUD chip (main.js arenaChip): the wave being fought and the record, which the run in progress can beat (waves survived) */
export const arenaChipText=(wave,best)=>`Wave ${(wave|0)+1} · best ${Math.max(best|0,wave|0)}`;
export const arenaTier=(level,n)=>(level.chapter==='emberkeep'?9:level.chapter==='veilmoor'?16:1)+(n<ARENA_STEEP?Math.floor(n/3):Math.floor((ARENA_STEEP-1)/3)+Math.floor((n-ARENA_STEEP+2)/2));
/* Writes save.levels[id] for a finished run and says what changed. A win marks it done; a loss only counts
   the play. best.time is the fastest win, best.score the highest score (an arena's is waves survived, and its
   best.time how long that record run lasted). */
/* tier: which of the level's tiers was played (Normal unless given). A win also keeps the best stars for that tier.
   time includes the time spent before any wave retry, and a run with a knockout (a retried wave) earns at most 2 stars. */
/* A Rift of the Week run (game/rift.js; round 2 review) counts as a play but leaves the Normal record alone: its modifiers change the
   level's difficulty, so its time, stars, score and grade live in s.rift only. */
export function recordLevel(save,id,{won,time,score,tier,knockouts=0,rift=false}){const l=levelById(id),k=tiered(l)?tierKey(tier):'normal';save.levels??={};
 const top=save.levels[id]??={done:false,best:{time:null,score:0},plays:0};
 const r=k==='normal'?top:((top.tiers??={})[k]??={done:false,best:{time:null,score:0},plays:0,stars:0});r.best??={time:null,score:0};
 r.plays=(r.plays|0)+1;/* improve20-z-nov1 #4: a won level turns the suggested goal back to learning (game/next-step.js chargeStep) */if(won&&l?.kind==='level')save.goalTurn='learn';/* improve20-r8a-nov1 #3: wins since e5, for the Wil nudge (next-step.js wilNudge) */if(won&&l?.kind==='level'&&(id==='e5'||save.levels.e5?.done))save.questNudge=(save.questNudge|0)+1;if(rift)return {first:false,recordTime:false,recordScore:false,stars:won&&l?.kind==='level'?Math.min(knockouts>0?2:3,levelStarsFor(l,k,time)):0,newStars:0,tier:k,rift:true};const first=won&&!r.done&&l?.kind==='level';
 const stars=won&&l?.kind==='level'?Math.min(knockouts>0?2:3,levelStarsFor(l,k,time)):0,newStars=stars>(r.stars|0)?stars-(r.stars|0):0;if(newStars)r.stars=stars;
 const recordTime=won&&l?.kind==='level'&&(r.best.time==null||time<r.best.time);if(recordTime)r.best.time=Math.round(time*10)/10;
 const recordScore=score>(r.best.score|0);if(recordScore){r.best.score=score;if(l?.kind==='arena')r.best.time=Math.round(time*10)/10;}
 if(l?.kind==='arena'?r.best.score>=ARENA_GOAL:won)r.done=true;
 return {first,recordTime,recordScore,stars,newStars,tier:k};}
/* v4 contracts were three legs of one road; their levels, so an old save keeps the ground it won. */
export const CONTRACT_LEVELS=[['e1','e2'],['e3','e4','e5'],['e6','e7','e8']];
/* The Bestiary's pages, in the order the game meets them: every regular in a wave and every boss, once each.
   {key, boss, level} -- level is where it is first met (a boss's own level). Entries come from save.bestiary. */
export function bestiaryPages(){const seen=new Set(),out=[],bosses=new Map(LEVELS.filter(l=>l.boss).map(l=>[l.boss,l]));const add=(key,_,level)=>{if(seen.has(key))return;seen.add(key);const own=bosses.get(key);out.push({key,boss:!!own,level:(own||level).id});};
 for(const l of LEVELS.filter(l=>l.kind==='level')){for(const w of l.waves||[])for(const g of (Array.isArray(w)?[w]:w.groups||[]))for(const e of g)add(typeof e==='string'?e:e.type,false,l);/* improve20-r8b-nov1 #2: a level's named mini-boss (fought every run) has its page too */if(l.mini)add(l.mini,false,l);if(l.boss)add(l.boss,true,l);}
 return out;}
/* ---- Chapter 1 vertical slice (owner, 8 Oct) -----------------------------------------------------------------
   Emberkeep and the Veilmoor stay fogged ("coming soon") until Chapter 1 passes its playtests. The world map shows
   them fogged; startLevel() refuses them politely. Flip SLICE to null to open everything. */
export const SLICE=null;
export const levelFogged=l=>!!l&&!!SLICE&&!SLICE.includes(l.chapter);
/* ---- kind failure (docs/review/v2/gamedesign/DIRECTION_REVIEW.md change 6) -------------------------------------
   Easy is the default; Heroic is opt-in (save.settings.difficulty). Hero's Resolve: every defeat on a level adds
   10% damage resistance there, up to 50%, until that level is won (save.levels[id].resolve counts the defeats;
   save.settings.resolve===false switches it off). */
/* atk scales what enemies deal (playtest S2-2: Easy hits of 5-6 on 156 HP never asked for a dodge; a goblin now lands
   about 6% of a starting hero's health and Grubnak's swings 10-14%, while Resolve and the wave retry stay the net). */
/* Since the difficulty ladder (14 Oct) this is an assist, separate from the per-level tiers and multiplied on top of
   them: Story is the gentler default, Standard the original Heroic numbers. The saved keys stay 'easy' and 'heroic'. */
export const DIFFICULTY={easy:{hp:.9,atk:1.8,label:'Story',hint:'easier'},heroic:{hp:1.25,atk:2.6,label:'Standard',hint:'the full challenge'}};
export const difficultyOf=save=>DIFFICULTY[save?.settings?.difficulty]||DIFFICULTY.easy;
export const RESOLVE_STEP=.1,RESOLVE_MAX=.5;
export const resolveOf=(save,id)=>save?.settings?.resolve===false?0:Math.min(RESOLVE_MAX,RESOLVE_STEP*Math.max(0,save?.levels?.[id]?.resolve|0));
