// Turns a levels.js enemy key into a fightable definition for scenes/combat.js.
// Order: game/enemies.js ENEMY_TYPES[key] (the enemies agent's sprite enemies) -> ENEMY_TYPES of its
// stand-in (levels.js STAND_INS, for keys still to come) -> the legacy procedural roster in game/data.js.
// The legacy rows exist so every level is playable before enemies.js lands; delete them when it has.
import {ENEMIES,BOSS} from './data.js';
import {STAND_INS} from './levels.js';
import {applyMod} from './tiers.js';
/* enemies.js may not exist yet on this branch, so it is loaded softly: a missing module leaves {} here. */
let TYPES={},AS_MINI={};
try{const m=await import('./enemies.js');TYPES=m.ENEMY_TYPES||{};AS_MINI=m.BOSS_AS_MINI||{};}catch{}
export const ENEMY_TYPES_LOADED=()=>TYPES;
const G=ENEMIES[0],SL=ENEMIES[1],SK=ENEMIES[3],AR=ENEMIES[4],BR=ENEMIES[5];
/* Legacy stand-ins: the old procedural bodies, recoloured and resized so each key reads differently. */
const LEGACY={
 goblin:{...G},slime:{...SL},'frost-slime':{...ENEMIES[2]},skeleton:{...SK},
 'skeleton-mage':{...AR,name:'Skeleton Mage',weapon:'staff',color:'#b9a6d8'},
 'skeleton-archer':{...AR},
 'skeleton-warrior':{...SK,name:'Skeleton Warrior',hp:46,atk:12,def:6,weapon:'sword',scale:1.1,color:'#e0dac2'},
 orc:{...BR,name:'Orc',hp:60,atk:14,def:5,speed:34,scale:1.2,cd:1.7,windup:.85,color:'#7fa35a'},
 'orc-rogue':{...G,name:'Orc Rogue',hp:40,atk:11,def:3,speed:58,scale:1.1,cd:1.1,windup:.5,color:'#6f9a52'},
 'goblin-king':{...G,name:'Grubnak, Goblin Chief',hp:220,atk:14,def:4,speed:40,scale:1.9,cd:2,windup:1,weapon:'axe',color:'#a7c460',boss:true},
 'slime-king':{...SL,name:'The Bog King',hp:260,atk:15,def:3,speed:30,scale:2.2,cd:2.1,windup:1,color:'#57b98a',boss:true},
 'orc-warlord':{...BR,name:'Orc Warlord',hp:300,atk:18,def:9,speed:30,scale:1.8,color:'#86a35c',boss:true},
 minotaur:{...BR,name:'Minotaur',hp:380,atk:22,def:10,speed:34,scale:2.1,cd:2.2,windup:1.15,color:'#9a6b4f',boss:true},
 'skeleton-king':{...SK,name:'Skeleton King',hp:340,atk:20,def:10,speed:32,scale:2,cd:2,windup:.95,weapon:'sword',color:'#e2dcc0',boss:true},
 'orc-shaman':{...AR,name:'Orc Shaman',appearance:'goblin',hp:300,atk:17,def:6,speed:30,scale:1.7,cd:2,windup:.9,weapon:'staff',color:'#7d9e63',boss:true},
 'stone-golem':{...BR,name:'Stone Golem',hp:460,atk:24,def:14,speed:22,scale:2.2,cd:2.6,windup:1.25,color:'#8e9196',weapon:null,boss:true},
 'thorn-king':{...BOSS,cinematic:true},
 'dungeon-master':{...BOSS,name:'Dungeon Master',hp:520,atk:26,def:14,speed:28,color:'#8a5a6a',phase2:undefined,boss:true},
 'demon-slime':{...SL,name:'Moltar',hp:600,atk:28,def:10,speed:30,scale:2.4,cd:2,windup:.9,color:'#d9573b',boss:true},
 cthulhu:{...BR,name:'Cthulhu',hp:760,atk:30,def:16,speed:24,scale:2.4,cd:2.3,windup:1.1,color:'#6a5fa8',weapon:null,boss:true}};
/* Placeholder tints for keys that are still TODO, so a lava imp is not just a green goblin. */
const TINT={imp:'#d9603b','fire-skeleton':'#e09a6a','magma-slime':'#e0653a',wisp:'#b8a6f0',cultist:'#8f6bc4',shade:'#5a4f7a'};
const title=k=>k.split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ');
/* An ENEMY_TYPES row carries {name,sprite,hp,atk,def,speed,scale,ai,boss,attacks,weakness}. The old AI also
   reads behavior/cd/windup/appearance, so those are filled from the first attack when it has no ai. */
function fromType(t,key){const a=t.attacks?.[0]||{};const leg=LEGACY[key]||LEGACY[STAND_INS[key]]||LEGACY.goblin;
 return {...leg,...t,behavior:t.behavior||(a.kind==='projectile'?'ranged':leg.behavior||'chase'),cd:t.cd??a.cd??leg.cd,windup:t.windup??a.windup??leg.windup,
  appearance:t.appearance||leg.appearance,weapon:'weapon' in t?t.weapon:leg.weapon,color:t.color||leg.color,cinematic:key==='thorn-king'};}
export function baseDef(key){
 if(TYPES[key])return {key,...fromType(TYPES[key],key)};
 const sub=STAND_INS[key];
 if(sub&&TYPES[sub])return {key,...fromType(TYPES[sub],sub),name:title(key),standIn:sub};
 const leg=LEGACY[key]||LEGACY[sub]||LEGACY.goblin;
 return {key,...leg,name:LEGACY[key]?leg.name:title(key),color:TINT[key]||leg.color,standIn:LEGACY[key]?null:(sub||'goblin')};}
/* Difficulty: hit points grow 10% a tier and damage 6%, so a tier-8 orc has 1.7x the health of a tier-1 one. */
export const BOSS_HP=7;
/* A mini-boss (ENEMY_TYPES mini:true -- Bramblejaw, the prologue's gate raider) is the very first boss a new player meets,
   before any ability: at 7x it took a non-stop attacker 45 s and left them on 3 HP even with 30% Resolve (playtest 14 Oct).
   3x makes it a 20-30 s fight that still has both backup rallies. */
export const MINI_BOSS_HP=3;
/* per tier: +5% health, +3% attack, +.25 defence (was +10%/+6%/+.5 until the 9 Oct balance sim, which had Veilmoor's
   tier-16..22 enemies at 2-3x the hero a child reaches there: 8-9 deaths a level) */
export const tierScale=tier=>({hp:1+.05*(Math.max(1,tier)-1),atk:1+.03*(Math.max(1,tier)-1),def:.25*(Math.max(1,tier)-1)});
/* A spawnable definition. elite: a boss type fought as a tougher regular (half health, no boss bar, no cinematic). */
/* a boss's own stats already climb chapter by chapter (800 health at m1, 1200 at v7), so bosses take 60% of the tier slope (balance sim, 9 Oct) */
export function makeEnemy(key,{tier=1,elite=false,name,boss}={}){const d=baseDef(key),k=tierScale(boss&&!elite?1+(Math.max(1,tier)-1)*.6:tier);
 const e={...d,hp:Math.round(d.hp*k.hp),atk:Math.round(d.atk*k.atk),def:Math.round((d.def||0)+k.def),tier};
 if(elite){Object.assign(e,{hp:Math.round(e.hp*.5),atk:Math.round(e.atk*.8),scale:(d.scale||1)*.75,boss:false,elite:true,cinematic:false,name:'Elite '+String(d.name).replace(/^The /,'').split(',')[0]});}
 else if(boss){e.boss=true;if(name)e.name=name;
  /* A boss is a fight, not a speed bump (playtest M6: Grubnak fell in 12 s; target 60-120 s). Its health is BOSS_HP (7)
     times its ENEMY_TYPES base; Easy then trims 15%. The enemies agent's phases and attacks do the rest. */
  e.hp=Math.round(e.hp*(d.mini?MINI_BOSS_HP:BOSS_HP));}
 else if(d.boss&&!elite){e.boss=false;}
 if(e.phase2&&e.cinematic)e.phase2={...e.phase2};else delete e.phase2;
 /* Telegraphs stay readable (docs/GAME_DIRECTION.md feel targets): every wind-up is at least 0.4 s, 0.6 s for a
    boss-sized enemy, whatever a definition says. */
 const floor=d.boss?.6:.4;e.windup=Math.max(floor,+e.windup||0);if(Array.isArray(e.attacks))e.attacks=e.attacks.map(a=>({...a,windup:Math.max(floor,+a.windup||0)}));
 return e;}
/* Entries in a wave are a key or {type,elite,mod}: mod is a difficulty-ladder modifier (game/tiers.js MODS). */
/* oct24-ember-finale (E5): an earlier boss fought as a level's mini-boss (a wave elite or Run Draft mini, not an echo) takes its
   chapter mini's health, attack and defence (enemies.js BOSS_AS_MINI) */
const asMini=(e,entry,tier)=>{const m=entry.elite&&!entry.echo&&AS_MINI[entry.type];if(!m)return e;const x=makeEnemy(m,{tier,elite:true});return Object.assign(e,{hp:x.hp,atk:x.atk,def:x.def});};
export const entryEnemy=(entry,tier)=>typeof entry==='string'?makeEnemy(entry,{tier}):Object.assign(applyMod(asMini(makeEnemy(entry.type,{tier,elite:!!entry.elite}),entry,tier),entry.mod),{mini:!!entry.mini,echo:!!entry.echo});
