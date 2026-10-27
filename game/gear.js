/* Gear (owner, 14 Oct: "SkyBlock-style gear ... individual pieces with real stats, set bonuses, special weapons, upgrade
   stars, boss materials, and always having a next upgrade to chase"). Design: docs/design/research/GEAR_SYSTEM.md, batch 1
   (Elderwood and Emberkeep). Pure data and rules: callers supply the random number and hold the save.
   - Four slots here (weapon, helm, chest, boots); necklace and ring stay in game/jewels.js.
   - Stats are fixed per item and never rolled. At most three stat lines on an item, a Finish included.
   - Stars always succeed; a Finish is picked from a list; salvage gives materials back. No gambling, no paid currency.
   - Every boss pays its material on every kill, so crafting is a road that never needs luck; set-piece drops carry
     bad-luck protection, and the first Legendary clear of a set boss always gives a piece.
   - Gear never unlocks, lends or replaces an ability (game/math.js unlocked() never reads it). Scholar's Regalia reads
     how many topics are mastered and never writes anything outside save.gear.
   This module imports nothing from academics/ (guardrail G7). */
import {CLASSES,WEAPONS,armorName} from './data.js';
import {RARITY} from './jewels.js';
import {LEVELS,levelDone} from './levels.js';
export const SLOTS=['weapon','helm','chest','boots'];
export const SLOT_NAMES={weapon:'Weapon',helm:'Helm',chest:'Chest',boots:'Boots'};
export const RARITIES=['common','uncommon','rare','epic','legendary'];
export const rarityOf=r=>RARITY[r]||RARITY.common;
/* What a child reads on a line: flat numbers for power/def/hp, percentages for the rest. */
export const STAT_KEYS=['power','def','hp','speed','crit','cdr'];
/* oct24-balance2: one word per real stat everywhere (stat panel, smith cards, compare, tooltips): Attack = the basic
   swing (math.js basicStat), Strength = atk, Magic = mag, Defence, Health. Gear's power line adds to Strength AND Magic,
   so it says exactly that instead of a third word ("Power" is also the held Power Swing). */
export const GEAR_STAT={power:'Strength & Magic',def:'Defence',hp:'Health',speed:'Speed',crit:'Strong hit chance',cdr:'Ability wait time'};
export const PCT={speed:1,crit:1,cdr:1};
/* 25 Oct (first-hour playtest): whole numbers only on screen ("+2.5%" and "36.3" read as noise to a kid); the stats themselves keep their decimals */
export const wholePct=v=>{const n=Math.round(Math.abs(v)*100);return n||(v?1:0);};
export const statText=(k,v)=>PCT[k]?`${k==='cdr'?'-':'+'}${wholePct(v)}% ${GEAR_STAT[k]}`:`+${Math.round(v)} ${GEAR_STAT[k]}`;
export const CHAPTER_NAMES={1:'Elderwood',2:'Emberkeep',3:'Veilmoor'};
/* ---- materials ------------------------------------------------------------------------------------------------- */
export const MATS={
 /* oct24-progress (playtest r3 F14): orcs and bandits pay this too, so it is a Raider Fang (the id and icon stay) */
 'goblin-tooth':{name:'Raider Fang',chapter:1,look:'a yellowed goblin fang tooth'},
 'minotaur-horn':{name:'Minotaur Horn',chapter:1,look:'a curved brown minotaur horn'},
 'bog-jelly':{name:'Bog Jelly',chapter:1,look:'a wobbly blob of green swamp jelly'},
 'bone-dust':{name:'Bone Dust',chapter:1,look:'a small cloth pouch spilling white bone dust'},
 'thornheart':{name:'Thornheart',chapter:1,look:'a dark red heart-shaped seed wrapped in thorny vines'},
 'imp-horn':{name:'Imp Horn',chapter:2,look:'a small curled red imp horn'},
 'obsidian-chip':{name:'Obsidian Chip',chapter:2,look:'a sharp shard of black volcanic glass with purple shine'},
 'forge-slag':{name:'Forge Slag',chapter:2,look:'a lump of glowing orange forge slag metal'},
 'wyrm-scale':{name:'Wyrm Scale',chapter:2,look:'a large red dragon scale with an orange edge'},
 'magma-core':{name:'Magma Core',chapter:2,look:'a glowing orb of molten magma in black rock'},
 /* oct24-veil-econ (playtest ch3 C1): the Veilmoor's own materials. Every Veilmoor boss but the Sleeper pays Mist Pearls (the
    Dreamtide set); the Sleeper pays the Dreamer's Eye (its capstone weapons). */
 'mist-pearl':{name:'Mist Pearl',chapter:3,look:'a pale glowing pearl wrapped in swirling silver mist'},
 'dream-eye':{name:'Dreamer’s Eye',chapter:3,look:'a dark teal gem shaped like a closed sleeping eye with a violet glow'},
 'elite-shard':{name:'Essence',chapter:0,look:'a small glowing violet crystal shard'}};
export const MAT_KEYS=Object.keys(MATS);
/* The material each boss always pays: x1 Normal, x2 Heroic, x3 Legendary. oct24-veil-econ: the Veilmoor's bosses pay their
   own (they paid Essence until then); a boss with none listed still pays Essence. */
export const BOSS_MAT={bramblejaw:'goblin-tooth','goblin-king':'goblin-tooth','orc-warlord':'goblin-tooth','orc-shaman':'goblin-tooth','bandit-chief':'goblin-tooth',
 minotaur:'minotaur-horn','stone-golem':'minotaur-horn','mushroom-lord':'minotaur-horn','slime-king':'bog-jelly','skeleton-king':'bone-dust','thorn-king':'thornheart',
 'dungeon-master':'obsidian-chip','obsidian-sentinel':'obsidian-chip','flame-knight':'imp-horn','imp-lord':'imp-horn','cinder-wraith':'imp-horn',
 'forge-golem':'forge-slag','fire-wyrm':'wyrm-scale','demon-slime':'magma-core',
 'drowned-priest':'mist-pearl','wisp-mother':'mist-pearl','shadow-twin':'mist-pearl','crystal-golem':'mist-pearl','lich':'mist-pearl','void-knight':'mist-pearl','moth-queen':'mist-pearl','cthulhu':'dream-eye'};
export const bossMat=key=>BOSS_MAT[key]||'elite-shard';
export const TIER_COUNT={normal:1,heroic:2,legendary:3};
/* ---- sets ------------------------------------------------------------------------------------------------------- */
/* two: the 2-piece stat bonus. three: the 3-piece effect, read by scenes/gear-fx.js (key) and shown as text.
   elem: element bonus on abilities the hero already has, top: bonus on abilities of the best-mastered subject. */
export const SETS={
 wayfarer:{name:'Wayfarer’s',chapter:1,two:{hp:15},three:{key:'wayfarer',text:'Potions heal 25% more.'}},
 bog:{name:'Bog King’s',chapter:1,boss:'slime-king',bossName:'The Bog King',two:{hp:20},three:{key:'bog',text:'When you are hit, you leave a mud puddle that slows foes (every 6 s).'}},
 bone:{name:'Bone Crown',chapter:1,boss:'skeleton-king',bossName:'The Skeleton King',two:{crit:.03},three:{key:'bone',text:'Defeating a foe gives a bone ward that blocks the next hit (every 10 s).'}},
 thornwarden:{name:'Thornwarden',chapter:1,boss:'thorn-king',bossName:'The Thorn King',two:{power:2},three:{key:'thornwarden',elem:{nature:.15},text:'Foes that hit you up close take thorns (15% of the hit). Your Nature abilities deal +15%.'}},
 forgeplate:{name:'Forgeplate',chapter:2,boss:'forge-golem',bossName:'The Forge Golem',two:{def:3},three:{key:'forgeplate',text:'Every 5th hit you take is blocked completely.'}},
 scorchscale:{name:'Scorchscale',chapter:2,boss:'fire-wyrm',bossName:'Scorchtail the Wyrm',two:{power:3},three:{key:'scorchscale',elem:{fire:.15},text:'Fire ground attacks hurt you half as much. Your Fire abilities deal +15%.'}},
 magmaheart:{name:'Magma Heart',chapter:2,boss:'demon-slime',bossName:'Moltar, the Forge Ogre',two:{power:2},three:{key:'magmaheart',text:'Abilities that hit erupt a small magma splash (30% of a basic hit, every 1.5 s).'}},
 /* oct24-veil-econ: the Veilmoor's set, one piece per boss along the road (bosses: The Wisp Mother v2 the hood, The Crystal Golem
    v4 the mantle, The Void Knight v6 the treads). By the Veilmoor a hero's Defence and toughness already sit at the gear limit
    (math.js GEAR_SHARE_CAP; the Defence cap rises to 24 here, defCap), so its lines lean on what still has room: Strong hits, Strength and Magic, Speed and
    ability wait (power.js's 40% damage bound covers them). */
 dreamtide:{name:'Dreamtide',chapter:3,bosses:['wisp-mother','crystal-golem','void-knight'],bossName:'the Veilmoor bosses',two:{cdr:.04},three:{key:'dreamtide',text:'Dodging sends out a mist wave that hits foes around you (30% of a basic hit, every 3 s).'}},
 scholar:{name:'Scholar’s Regalia',chapter:1,scholar:true,two:{cdr:.05},three:{key:'scholar',top:.12,text:'Abilities of your best-mastered subject deal +12%.'}}};
/* ---- weapon tricks (Rare and above): automatic, no button, never an ability (scenes/gear-fx.js) ------------------ */
export const TRICKS={
 thornwave:{text:'Every 4th hit sends a thorn wave forward (40% of the hit).',every:4,frac:.4,element:'nature'},
 thornsplit:{text:'Basic bolts split into 2 thorn shards on hit (25% each).',frac:.25,shards:2,element:'nature'},
 thornsting:{text:'Hits on an Exposed foe leave stinging thorns (3 ticks).',ticks:3,frac:.12,element:'nature'},
 pierce:{text:'Every 5th arrow also strikes the foe behind (full damage, 35% for the second).',every:5,frac:.35,element:'nature'},
 rootcrack:{text:'Power Swings crack the ground and slow foes nearby (not bosses).',slow:2,radius:46,element:'nature'},
 thornleech:{text:'Below half Health, your hits heal you a little (2% of your Health, every 1.5 s).',heal:.02,icd:1.5},
 sprout:{text:'Totems leave a healing sprout when they end (3% Health a second for 3 s).',heal:.03,life:3},
 magmapool:{text:'Spending Momentum leaves a magma pool for 2 s.',life:2,frac:.2,radius:30,element:'fire'},
 fireball:{text:'Every 5th bolt bursts in a small fire splash (40% of the hit).',every:5,frac:.4,radius:36,element:'fire'},
 firetrail:{text:'Dodging leaves a short fire trail.',life:1.5,frac:.2,radius:22,element:'fire'},
 critburst:{text:'Critical arrows burst in a small splash (35% of the hit).',frac:.35,radius:34,element:'fire'},
 guardburst:{text:'When you spend Divine Guard, it erupts around you (40% of a basic hit).',frac:.4,radius:50,element:'fire'},
 firearc:{text:'Every 3rd hit swings a fire arc (35% of the hit).',every:3,frac:.35,radius:40,element:'fire'},
 idolpulse:{text:'Your totems pulse small fire damage (20% of a basic hit, every 1.5 s).',frac:.2,icd:1.5,element:'fire'},
 /* oct24-veil-econ: the Sleeper's weapons. Each works like its family's Magma weapon (base: the same hook in scenes/gear-fx.js
    and the same proc in power.js) with dream magic instead of fire: violet, Arcane, a mist pool in place of magma. */
 tidepool:{base:'magmapool',label:'Tide pool',zone:'mist',text:'Spending Momentum leaves a tide pool for 2 s.',life:2,frac:.2,radius:30,element:'arcane'},
 voidbolt:{base:'fireball',label:'Void burst',text:'Every 5th bolt bursts in a small void splash (40% of the hit).',every:5,frac:.4,radius:36,element:'arcane'},
 misttrail:{base:'firetrail',label:'Mist',zone:'mist',text:'Dodging leaves a short mist trail.',life:1.5,frac:.2,radius:22,element:'arcane'},
 dreamburst:{base:'critburst',label:'Dream burst',text:'Critical arrows burst in a small dream splash (35% of the hit).',frac:.35,radius:34,element:'arcane'},
 tideburst:{base:'guardburst',label:'Tide burst',text:'When you spend Divine Guard, a tide wave bursts around you (40% of a basic hit).',frac:.4,radius:50,element:'arcane'},
 voidarc:{base:'firearc',label:'Void arc',color:'#b58cff',text:'Every 3rd hit swings a void arc (35% of the hit).',every:3,frac:.35,radius:40,element:'arcane'},
 dreampulse:{base:'idolpulse',label:'Dream pulse',text:'Your totems pulse small dream damage (20% of a basic hit, every 1.5 s).',frac:.2,icd:1.5,element:'arcane'}};
/* The tricks' internal cooldown floor and damage share cap (guardrail G6). */
export const TRICK_ICD=1.5,TRICK_CAP=.4;
/* ---- the item table ---------------------------------------------------------------------------------------------- */
const FAMILIES=['sword','staff','dagger','bow','hammer','axe','focus'];
export const familyOf=hero=>CLASSES[hero]?.weapon||'sword';
const HERO_OF=Object.fromEntries(Object.entries(CLASSES).map(([k,c])=>[c.weapon,k]));
const T=[];
/* the smith's weapon line: the existing names and icons. Prices raised 24 Oct (docs/playtest/oct24-polish/ECONOMY.md):
   Elderwood's line now takes about one level's first-clear gold per piece instead of all of it after e1. */
const W_RAR=['common','uncommon','rare','rare'],W_CH=[1,1,2,3],W_STATS=[{power:3},{power:5,crit:.02},{power:12,crit:.03},{power:17,crit:.03}],W_PRICE=[0,450,900,2000];
for(const f of FAMILIES)for(let t=0;t<4;t++)T.push({id:`${f}-shop-${t}`,name:WEAPONS[f][t],slot:'weapon',family:f,rarity:W_RAR[t],chapter:W_CH[t],stats:W_STATS[t],shop:W_PRICE[t],shopTier:t,icon:`${f}-${t}`});
/* the class chest line (chest only; each fits its own class) */
const C_STATS=[{def:2},{def:5,hp:10},{def:8,hp:20},{def:12,hp:30}],C_PRICE=[0,350,700,1700];
for(const h of Object.keys(CLASSES))for(let t=0;t<4;t++)T.push({id:`chest-${h}-shop-${t}`,name:`${armorName(h,t)} Armour`,slot:'chest',cls:h,rarity:W_RAR[t],chapter:W_CH[t],stats:C_STATS[t],shop:C_PRICE[t],shopTier:t,icon:`armor-${h}-${t}`});
/* trick weapons: Thorn King (Epic) and Moltar, the Forge Ogre (key demon-slime; Legendary) */
const TRICK_W=[
 ['sword','thornroot','Thornroot Blade','thornwave','a sword with a blade of twisted dark wood and green thorns','magmaheart','Magmaheart Greatsword','magmapool','a big greatsword with a black blade and glowing lava cracks'],
 ['staff','briarwood','Briarwood Staff','thornsplit','a wooden staff of tangled briars topped with a green thorn crystal','moltencore','Molten Core Staff','fireball','a black iron staff holding a glowing molten orange orb'],
 ['dagger','thornfang','Thornfang Daggers','thornsting','a pair of curved daggers with green thorny vine hilts','cinderfang','Cinderfang Daggers','firetrail','a pair of black daggers with ember-orange glowing edges'],
 ['bow','briarthorn','Briarthorn Longbow','pierce','a longbow of dark wood wrapped in thorny green vines','magmaarc','Magma Arc','critburst','a recurve bow of black obsidian with a glowing lava string'],
 ['hammer','rootbreaker','Rootbreaker Maul','rootcrack','a heavy maul with a head of gnarled root wood and stone','moltengavel','Molten Gavel','guardburst','a war hammer of black iron with a glowing molten head'],
 ['axe','thornreaver','Thornreaver','thornleech','a battle axe with a thorn-covered dark wood handle and a green tinted blade','magmacleaver','Magma Cleaver','firearc','a big cleaver axe with a blade of cracked glowing magma'],
 ['focus','heartwood','Heartwood Focus','sprout','a carved heartwood totem idol with a small green sprout on top','magmaidol','Magma Idol','idolpulse','a small black stone idol with glowing lava eyes and cracks']];
/* oct24-veil-econ (playtest ch3 C1): the Sleeper's line, the Veilmoor's capstone like Moltar's Magma line: [family, id, name, trick, look].
   Each has its own PixelLab icon (oct24-weapon-icons, `look` was its prompt); the hero keeps the base weapon on the sprite. */
const TRICK_V=[
 ['sword','deepdream','Deepdream Greatsword','tidepool','a big greatsword with a dark teal blade and swirling violet mist runes'],
 ['staff','tidewhisper','Tidewhisper Staff','voidbolt','a pale driftwood staff holding a glowing violet pearl wrapped in mist'],
 ['dagger','voidfang','Voidfang Daggers','misttrail','a pair of curved dark violet daggers trailing silver mist'],
 ['bow','mistweaver','Mistweaver Bow','dreamburst','a pale silver longbow with a glowing violet string and mist curling off it'],
 ['hammer','abyssgavel','Abyssal Gavel','tideburst','a heavy war hammer with a dark teal head shaped like a crashing wave'],
 ['axe','riftcleaver','Riftcleaver','voidarc','a big axe with a black blade split by a glowing violet rift'],
 ['focus','dreamidol','Dreamer’s Idol','dreampulse','a small pale stone idol with closed sleeping eyes glowing violet']];
for(const [f,a,an,at,al] of TRICK_V)T.push({id:`${f}-${a}`,name:an,slot:'weapon',family:f,rarity:'legendary',chapter:3,stats:{power:20,crit:.04,cdr:.05},trick:at,boss:'cthulhu',icon:`${f}-${a}`,look:al});
for(const [f,a,an,at,al,b,bn,bt,bl] of TRICK_W){
 T.push({id:`${f}-${a}`,name:an,slot:'weapon',family:f,rarity:'epic',chapter:1,stats:{power:9,crit:.03,hp:10},trick:at,boss:'thorn-king',icon:`${f}-${a}`,look:al});
 T.push({id:`${f}-${b}`,name:bn,slot:'weapon',family:f,rarity:'legendary',chapter:2,stats:{power:16,crit:.04,cdr:.04},trick:bt,boss:'demon-slime',icon:`${f}-${b}`,look:bl});}
/* armour sets: [set, rarity per piece, [helm, chest, boots] as [id suffix, name, stats, look]]. oct24-balance2: within a slot and
   chapter a higher rarity is always worth more (tools/gear-audit.mjs; the Epic Scorchscale Helm had lost to a common hood),
   so 14 pieces were raised; none was lowered. */
const SET_T=[
 ['wayfarer',['common','uncommon','common'],[['hood','Wayfarer’s Hood',{def:1,hp:5},'a brown leather travel hood'],['coat','Wayfarer’s Coat',{def:1,hp:10},'a brown leather travel coat with a belt'],['boots','Wayfarer’s Boots',{def:1,speed:.03},'a pair of brown leather travel boots']],[120,240,120]],
 ['bog','rare',[['crown','Bog King’s Crown',{def:1,hp:10},'a gold crown dripping with green slime'],['mantle','Bog King’s Mantle',{def:4,hp:20},'a mossy green chest armour dripping with slime'],['waders','Bog King’s Waders',{def:2,hp:10},'a pair of tall green swamp wader boots with slime']]],
 ['bone','rare',[['helm','Bone Crown Helm',{def:2,hp:5,crit:.03},'a helmet made of a skull with a bone crown'],['ribcage','Bone Crown Ribcage',{def:4,hp:15},'a chest armour shaped like a white ribcage'],['greaves','Bone Crown Greaves',{def:2,hp:10},'a pair of boots made of white bones']]],
 ['thornwarden','epic',[['helm','Thornwarden Helm',{def:3,hp:10},'a dark green helmet crowned with sharp thorns'],['plate','Thornwarden Plate',{def:4,hp:15,power:2},'a dark green chest plate covered in thorny vines'],['treads','Thornwarden Treads',{def:3,hp:10},'a pair of dark green armoured boots with thorns']]],
 ['forgeplate','rare',[['visor','Forgeplate Visor',{def:3,hp:10},'a heavy iron visor helmet with glowing orange slits'],['cuirass','Forgeplate Cuirass',{def:5,hp:15},'a heavy riveted iron chest plate glowing orange at the seams'],['sabatons','Forgeplate Sabatons',{def:2,hp:5},'a pair of heavy riveted iron boots']]],
 ['scorchscale','epic',[['helm','Scorchscale Helm',{def:4,hp:10},'a red dragon scale helmet with small horns'],['hauberk','Scorchscale Hauberk',{def:4,hp:20,power:3},'a red dragon scale chest armour'],['boots','Scorchscale Boots',{def:3,hp:10},'a pair of red dragon scale boots']]],
 ['magmaheart','legendary',[['crown','Magma Heart Crown',{def:5,hp:15},'a black crown with glowing lava gems'],['core','Magma Heart Core',{def:5,hp:25,power:3},'a black chest armour with a glowing molten heart in the middle'],['stompers','Magma Heart Stompers',{def:3,hp:20},'a pair of heavy black boots with glowing lava cracks']]],
 ['dreamtide','legendary',[['hood','Dreamtide Hood',{def:5,hp:15,crit:.03},'a hooded silver-blue helm with a glowing violet pearl on the brow and wisps of mist'],['mantle','Dreamtide Mantle',{def:12,hp:30,power:4},'a flowing teal and silver chest armour with wave patterns and a violet pearl clasp'],['treads','Dreamtide Treads',{def:4,hp:15,speed:.04},'a pair of light silver-blue boots with mist curling round the ankles']]],
 ['scholar','epic',[['cap','Scholar’s Cap',{def:3,hp:10},'a blue square scholar cap with a gold tassel'],['robe','Scholar’s Robe',{def:3,hp:15,cdr:.05},'a long blue scholar robe with gold trim and a book emblem'],['slippers','Scholar’s Slippers',{def:2,hp:10},'a pair of soft blue slippers with gold trim']]]];
export const SCHOLAR_AT=[5,10,15];
SET_T.forEach(([set,rar,pieces,prices])=>pieces.forEach(([suf,name,stats,look],i)=>{const S=SETS[set],slot=['helm','chest','boots'][i],id=`${set}-${suf}`;
 T.push({id,name,slot,set,rarity:Array.isArray(rar)?rar[i]:rar,chapter:S.chapter,stats,look,icon:id,...(prices?{shop:prices[i]}:{}),...(S.boss||S.bosses?{boss:S.boss||S.bosses[i]}:{}),...(S.scholar?{scholar:SCHOLAR_AT[i]}:{})});}));
/* Elderwood's second smith line (oct24-progress, playtest r3 D1: from e4 to e8 the smith had nothing left to sell and 2,600
   gold sat idle). A weapon once The Hollow Minotaur (e4) falls and a chest once The Skeleton King (e5) falls, each a step
   between the chapter-1 line and Emberkeep's, priced at about one and a half levels' first-clear gold. Stats follow the
   shop line's own numbers (the weapon halfway from tier 1 to tier 2, the chest tier 1 plus a step under the Epic pieces), so a re-curve of W_STATS / C_STATS carries them along. Own icons since
   icons2-oct25 (wood-and-leaf recolours of the next tier's pictures) and no drawn art: the hero keeps the class's base weapon on the sprite. */
export const MID_LINE={weapon:{after:'e4',price:600},chest:{after:'e5',price:450}};
const MID_W={sword:'Elderwood Blade',staff:'Elderwood Staff',dagger:'Elderwood Fangs',bow:'Elderwood Recurve',hammer:'Elderwood Mace',axe:'Elderwood Cleaver',focus:'Elderwood Carving'};
for(const f of FAMILIES)T.push({id:`${f}-elder`,name:MID_W[f],slot:'weapon',family:f,rarity:'rare',chapter:1,stats:{power:Math.round((W_STATS[1].power+W_STATS[2].power)/2),crit:W_STATS[2].crit},shop:MID_LINE.weapon.price,shopTier:1,opens:MID_LINE.weapon.after,icon:`${f}-elder`});
for(const h of Object.keys(CLASSES))T.push({id:`chest-${h}-elder`,name:'Elderwood Guard Armour',slot:'chest',cls:h,rarity:'rare',chapter:1,stats:{def:C_STATS[1].def+2,hp:C_STATS[1].hp+2},shop:MID_LINE.chest.price,shopTier:1,opens:MID_LINE.chest.after,icon:`armor-${h}-elder`});
/* Emberkeep's second smith line (oct24-ember-econ, playtest ch2 E1: 3,744 gold earned in the chapter and 1,150 spent; nothing
   new at the smith from m1 to Veilmoor). The same shape as Elderwood's: a weapon once Scorchtail (m3) falls, halfway from
   the Emberkeep line to Veilmoor's, and a class chest once Vexx (m5) falls. The chest is Epic and one step above the
   Runebound/Mythic line: gear-audit R1/R2 keep a chest of Emberkeep's under the Legendary Magma Heart Core (23) and a rare
   one under the Epic Scorchscale Hauberk (21), so the only honest step past the shop chest (20) is an Epic 22. Prices are
   about two levels' first-clear gold (m3-m6 pay 260-320 plus 150-250 from the fight). The weapons have their own
   PixelLab icons (oct24-weapon-icons; the chest has its own iron-and-ember recolour of Veilmoor's picture since icons2-oct25), no drawn art; the runtime caps (math.js GEAR_SHARE_CAP, power.js DPS_SHARE_CAP) still bound what they add. */
export const MID_LINE2={weapon:{after:'m3',price:1100},chest:{after:'m5',price:800}};
const MID_W2={sword:'Forgefire Blade',staff:'Forgefire Staff',dagger:'Forgefire Daggers',bow:'Forgefire Longbow',hammer:'Forgefire Mace',axe:'Forgefire Cleaver',focus:'Forgefire Brazier'};
for(const f of FAMILIES)T.push({id:`${f}-forge`,name:MID_W2[f],slot:'weapon',family:f,rarity:'rare',chapter:2,stats:{power:Math.round((W_STATS[2].power+W_STATS[3].power)/2),crit:W_STATS[3].crit},shop:MID_LINE2.weapon.price,shopTier:2,opens:MID_LINE2.weapon.after,icon:`${f}-forge`});
for(const h of Object.keys(CLASSES))T.push({id:`chest-${h}-forge`,name:'Forgefire Guard Armour',slot:'chest',cls:h,rarity:'epic',chapter:2,stats:{def:C_STATS[2].def+1,hp:C_STATS[2].hp+2},shop:MID_LINE2.chest.price,shopTier:2,opens:MID_LINE2.chest.after,icon:`armor-${h}-forge`});
/* Drawn weapons (owner, 14 Oct: every weapon is drawn into its hero's animations; weapon-runtime 15 Oct): item id -> the
   art its hero holds, baked as hero-<class>[-<body>]--<art> (tools/bake-hero-armor.mjs). Several items may share one art;
   an item without one (or whose art is not drawn for a body yet) shows the class's base weapon. A new drawn weapon only
   needs its line here and its baked atlas (gfx/actors/hero-looks.js). Stars and Finishes never change the art. */
/* drawn weapons (one atlas per item, named after it): the pilot's three swords, then the batch's 3 per class (docs/design/research/DRAWN_WEAPONS_BATCH.md) */
export const WEAPON_ART=Object.fromEntries(['sword-thornroot','sword-magmaheart','sword-shop-3','staff-briarwood','staff-moltencore','staff-shop-3','bow-briarthorn','bow-magmaarc','bow-shop-3','dagger-thornfang','dagger-cinderfang','dagger-shop-3','hammer-rootbreaker','hammer-moltengavel','hammer-shop-3','axe-thornreaver','axe-magmacleaver','axe-shop-3','focus-heartwood','focus-magmaidol','focus-shop-3'].map(id=>[id,id]));
/* the basic bolt's colour for a drawn staff or focus (weapons-wiring, 14 Oct: the Molten Core staff fired the Mage's
   purple arcane blob). Look only: the hit still uses the basic attack's own element (scenes/combat.js projectile). */
export const WEAPON_SHOT={'staff-briarwood':'nature','staff-moltencore':'fire','staff-shop-3':'holy','focus-heartwood':'nature','focus-magmaidol':'fire','focus-shop-3':'arcane'};
for(const it of T){if(WEAPON_ART[it.id])it.art=WEAPON_ART[it.id];if(WEAPON_SHOT[it.id])it.shot=WEAPON_SHOT[it.id];}
export const ITEMS=T;
export const ITEM=Object.fromEntries(T.map(i=>[i.id,i]));
export const SET_PIECES=Object.fromEntries(Object.keys(SETS).map(k=>[k,T.filter(i=>i.set===k).map(i=>i.id)]));
/* The items new in batch 1 (the shop lines already existed): 14 trick weapons and 24 set pieces, plus the 21 shop
   items they sit beside in the doc's table of 59. */
export const NEW_ITEMS=T.filter(i=>i.trick||i.set);
/* ---- recipes and costs ------------------------------------------------------------------------------------------- */
const CH_GOLD={1:250,2:450,3:900},TRICK_GOLD={1:600,2:1500,3:1800};
/* oct24-progress (playtest r3 D1): a set piece took 5 of its boss's material at one a kill, so the first craft waited four
   replays; an Elderwood boss's first kill now pays FIRST_KILL_BONUS more (rollGear) and an Elderwood piece costs SET_MATS[1], so the first
   piece is ready after the first clear and the next two take a replay or two each. A trick weapon takes TRICK_MATS of the
   capstone's. oct24-ember-econ (playtest ch2 E1: an Emberkeep craft took 5 at one a first kill): Emberkeep now matches,
   3 a piece, 6 for the Demon Slime's weapon, and its bosses' first kills pay the bonus too. oct24-veil-econ: the Veilmoor's
   bosses pay their own materials now, with the same first-kill bonus (FIRST_KILL_CHAPTERS), and the same counts. */
export const SET_MATS={1:3,2:3,3:3},TRICK_MATS={1:6,2:6,3:5},FIRST_KILL_BONUS=2,FIRST_KILL_CHAPTERS=[1,2,3];
/* oct24-veil-econ (playtest ch3 C1: the kid ended the Veilmoor with 136 Essence and nothing to spend it on): a Veilmoor recipe
   also takes Essence, the run layer's own reward (chests, elites, seals), so no new currency. A Sleeper weapon takes 5 Dreamer's
   Eyes: the first Normal clear pays 3 and a Heroic clear 2, so it is the reward for beating the Sleeper on Heroic. */
export const RECIPE_ESS={3:{set:20,trick:30}};
/* The extra a boss's material pays on that boss's first kill (rollGear, the tier preview, the result's boss loot line). */
export const firstKillBonus=m=>FIRST_KILL_CHAPTERS.includes(MATS[m]?.chapter)?FIRST_KILL_BONUS:0;
const CHAPTER_MATS={1:['bog-jelly','bone-dust','goblin-tooth','minotaur-horn'],2:['forge-slag','wyrm-scale','imp-horn','obsidian-chip'],3:['mist-pearl']};
/* What crafting costs at the smith: a set piece is SET_MATS[chapter] of its boss's material plus gold; a trick weapon is TRICK_MATS of the
   capstone's material, 2 of each other chapter material, plus gold. Shop items and Scholar's pieces have no recipe. */
export function recipe(id){const it=ITEM[id];if(!it||it.scholar||it.shop!==undefined)return null;
 const ess=RECIPE_ESS[it.chapter]?.[it.trick?'trick':'set'];
 if(it.trick){const mats={[bossMat(it.boss)]:TRICK_MATS[it.chapter]};for(const m of CHAPTER_MATS[it.chapter])mats[m]=2;if(ess)mats['elite-shard']=ess;return {mats,gold:TRICK_GOLD[it.chapter]};}
 return {mats:{[bossMat(it.boss)]:SET_MATS[it.chapter],...(ess?{'elite-shard':ess}:{})},gold:CH_GOLD[it.chapter]};}
/* The material a star asks for: a boss item its boss's material, a smith item its chapter's first material (late playtest
   24 Oct: Emberkeep stars asked for Imp Horn, which no boss pays before m4, so the smith's next upgrade read "Need 1 more Imp
   Horn" from e8 to m6 with 1700 gold banked. Emberkeep weapons now take Obsidian Chip (m1, m6) and its armour Imp Horn (m4, m5,
   mx1), so each half of the chapter feeds one of them). */
export const starMat=it=>it.boss?bossMat(it.boss):it.chapter===1?'goblin-tooth':it.chapter===2?(it.slot==='weapon'?'obsidian-chip':'imp-horn'):null;
const STAR_BASE={1:80,2:150,3:300};
export const MAX_STARS=5,STAR_STEP=.06;
/* Star n (1-5): n x base gold, n of the item's material, n Elite Shards (2n when the item has no material yet). Stars 3-5
   take twice the Elite Shards (15 Oct, BALANCE.md "Essence sink"): the chests pay plenty early, so Essence paces the late stars. */
const STAR_ESS={1:1,2:1,3:2,4:2,5:2};
export function starCost(id,n){const it=ITEM[id];if(!it||it.scholar||n<1||n>MAX_STARS)return null;const m=starMat(it),mats={};
 if(m)mats[m]=n;mats['elite-shard']=(mats['elite-shard']||0)+(m?n:2*n)*STAR_ESS[n];return {gold:n*STAR_BASE[it.chapter],mats};}
export const FINISHES={
 sharp:{name:'Sharp',stat:'crit',v:.02},sturdy:{name:'Sturdy',stat:'def',v:1},hearty:{name:'Hearty',stat:'hp',v:10},
 swift:{name:'Swift',stat:'speed',v:.03},wise:{name:'Wise',stat:'cdr',v:.03},mighty:{name:'Mighty',stat:'power',v:1,weapon:true}};
const FIN_COST={1:{shards:3,gold:50},2:{shards:5,gold:120},3:{shards:8,gold:250}};
export const finishCost=id=>{const it=ITEM[id];if(!it||it.scholar)return null;const c=FIN_COST[it.chapter];return {gold:c.gold,mats:{'elite-shard':c.shards}};};
/* A Finish may go on an item when it adds to a stat line the item already has, or when the item has a free line. */
export function finishFits(id,f){const it=ITEM[id],F=FINISHES[f];if(!it||!F||it.scholar)return false;if(F.weapon&&it.slot!=='weapon')return false;
 const keys=Object.keys(it.stats);return keys.includes(F.stat)||keys.length<3;}
/* ---- a fresh gear record and its cleaner ------------------------------------------------------------------------- */
const HEROES=Object.keys(CLASSES);
export const starterWeapon=hero=>`${familyOf(hero)}-shop-0`;
export const starterChest=hero=>`chest-${hero}-shop-0`;
export const emptyWorn=hero=>({weapon:starterWeapon(hero),helm:null,chest:starterChest(hero),boots:null});
export function emptyGear(){const owned={},worn={};for(const h of HEROES){owned[starterWeapon(h)]={stars:0,finish:null};owned[starterChest(h)]={stars:0,finish:null};worn[h]=emptyWorn(h);}
 return {v:1,owned,worn,mats:{},pity:{},seen:{},beat:{},legend:{},scholarSeen:0};}
/* Can this hero wear this item in this slot? Weapons fit their family, class chests their class, set pieces anyone. */
export const fits=(hero,id,slot)=>{const it=ITEM[id];if(!it||(slot&&it.slot!==slot))return false;if(it.slot==='weapon')return it.family===familyOf(hero);if(it.cls)return it.cls===hero;return true;};
const int=(v,a,b)=>Math.max(a,Math.min(b,Math.floor(Number(v)||0)));
const obj=v=>v&&typeof v==='object'&&!Array.isArray(v);
/* Keeps what is known and valid; never invents progress. Starter items are always owned. */
export function cleanGear(v){const g=emptyGear();if(!obj(v))return g;
 if(obj(v.owned))for(const [id,o] of Object.entries(v.owned)){if(!ITEM[id])continue;const it=ITEM[id],fin=obj(o)&&typeof o.finish==='string'&&finishFits(id,o.finish)?o.finish:null;
  g.owned[id]={stars:it.scholar?0:int(o?.stars,0,MAX_STARS),finish:fin,...(o?.new?{new:true}:{})};}
 if(obj(v.worn))for(const h of HEROES){const w=v.worn[h];if(!obj(w))continue;for(const slot of SLOTS){const id=w[slot];if(id===null&&slot!=='weapon')g.worn[h][slot]=null;else if(typeof id==='string'&&g.owned[id]&&fits(h,id,slot))g.worn[h][slot]=id;}}
 if(obj(v.mats))for(const [k,n] of Object.entries(v.mats))if(MATS[k])g.mats[k]=int(n,0,99999);
 for(const key of ['pity','seen','beat','legend'])if(obj(v[key]))for(const [k,n] of Object.entries(v[key]))if(typeof k==='string'&&k.length<=60)g[key][k]=int(n,0,1e6);
 g.scholarSeen=int(v.scholarSeen,0,1e6);return g;}
/* ---- migration from the v6 smith tiers (save v7) ---------------------------------------------------------------- */
/* The old forge: weapon tier t added 5t attack, armour tier a added 5a defence. Each hero gets the matching shop items,
   worn, and the chest gets stars until it gives at least the old defence, so no hero is ever weaker. */
export const OLD={atk:t=>(t|0)*5,def:a=>(a|0)*5};
export function fromEquipment(equipment,base=emptyGear()){const g=base;
 for(const [h,eq] of Object.entries(obj(equipment)?equipment:{})){if(!CLASSES[h])continue;const t=int(eq?.weapon,0,3),a=int(eq?.armor,0,3),w=`${familyOf(h)}-shop-${t}`,c=`chest-${h}-shop-${a}`;
  g.owned[w]??={stars:0,finish:null};let stars=g.owned[c]?.stars||0;const want=OLD.def(a);while(stars<MAX_STARS&&starred(ITEM[c].stats.def,stars)<want)stars++;
  g.owned[c]={stars:Math.max(stars,g.owned[c]?.stars||0),finish:g.owned[c]?.finish||null};g.worn[h]={...emptyWorn(h),...g.worn[h],weapon:w,chest:c};}
 return g;}
/* ---- stats ------------------------------------------------------------------------------------------------------- */
const round3=v=>Math.round(v*1000)/1000;
export const starred=(v,stars,k='def')=>PCT[k]?round3(v*(1+STAT_STEP(stars))):Math.round(v*(1+STAT_STEP(stars)));
const STAT_STEP=n=>STAR_STEP*int(n,0,MAX_STARS);
/* An item's own stats with its stars and Finish: {power, def, ...}. Stars round on the item total. */
export function itemStats(id,stars=0,finish=null){const it=ITEM[id];if(!it)return {};const out={};
 for(const [k,v] of Object.entries(it.stats))out[k]=starred(v,stars,k);
 const F=FINISHES[finish];if(F&&finishFits(id,finish))out[F.stat]=PCT[F.stat]?round3((out[F.stat]||0)+F.v):(out[F.stat]||0)+F.v;
 return out;}
export const statLines=(id,stars=0,finish=null)=>Object.entries(itemStats(id,stars,finish)).map(([k,v])=>statText(k,v));
/* Does the next star change a number the child can see? Small items round away a 6% step (3 Power stays 3 at one
   star), so the hint never suggests paying for a star that shows nothing; firstVisibleStar says where it starts to. */
export const starShows=(id,n,finish=null)=>n<MAX_STARS&&statLines(id,n+1,finish).join()!==statLines(id,n,finish).join();
export const firstVisibleStar=(id,n,finish=null)=>{for(let k=n+1;k<=MAX_STARS;k++)if(statLines(id,k,finish).join()!==statLines(id,n,finish).join())return k;return 0;};
/* Scholar's pieces gain a star for every 5 topics mastered past 15, up to 5 (they are never upgraded with gold). */
export const scholarStars=topics=>Math.max(0,Math.min(MAX_STARS,Math.floor((Math.max(0,topics|0)-15)/5)));
const own=(g,id)=>g?.owned?.[id];
export const starsOf=(g,id,topics=0)=>ITEM[id]?.scholar?scholarStars(topics):own(g,id)?.stars||0;
/* Mastered topics, read straight from the save's lesson records (academics/lessons.js mastered(): pts > 0). */
export const masteredTopics=s=>Object.values(s?.lessons||{}).filter(l=>l&&(+l.pts||0)>0).length;
/* Guardrail G5 caps on gear plus jewels. */
export const CAPS={crit:.25,cdr:.25,speed:.2,elem:.3,def:16};
/* oct24-veil-econ review (playtest ch3 C1): the flat Defence cap (16) was full by Emberkeep, so a Legendary Veilmoor chest
   showed "Defence 27 -> 26.2" in red. The cap now rises with the furthest chapter the save has opened (chapterReached: the
   Thorn King beaten opens Emberkeep, Moltar the Veilmoor): 16 / 20 / 24. CAPS.def stays the Elderwood number. The 35%
   toughness and 40% damage limits (math.js, power.js) are unchanged and still bound what the extra Defence is worth. */
export const DEF_CAP={1:16,2:20,3:24};
export const defCap=s=>chapterReached(s,3)?DEF_CAP[3]:chapterReached(s,2)?DEF_CAP[2]:DEF_CAP[1];
/* What a hero's worn gear adds, already clamped (G5): {power,def,hp,speed,crit,cdr,elem:{fire:.15},top,effects:{bog:1},
   trick, sets:{bog:2}}. jewel: the jewels' own fractions, so the caps cover gear plus jewels. */
export function gearBonus(s,hero=s?.hero,jewel={}){const g=s?.gear,out={power:0,def:0,hp:0,speed:0,crit:0,cdr:0,elem:{},top:0,effects:{},trick:null,sets:{}};
 const worn=wornOf(s,hero),topics=masteredTopics(s);
 for(const slot of SLOTS){const id=worn[slot];if(!id)continue;const it=ITEM[id];
  for(const [k,v] of Object.entries(itemStats(id,starsOf(g,id,topics),own(g,id)?.finish)))out[k]+=v;
  if(it.trick)out.trick=it.trick;if(it.set)out.sets[it.set]=(out.sets[it.set]||0)+1;}
 /* at most two sets count; with 2+1 only the pair does */
 for(const [k,n] of Object.entries(out.sets)){const S=SETS[k];if(n>=2)for(const [st,v] of Object.entries(S.two))out[st]+=v;
  if(n>=3){out.effects[S.three.key]=1;for(const [el,v] of Object.entries(S.three.elem||{}))out.elem[el]=(out.elem[el]||0)+v;if(S.three.top)out.top+=S.three.top;}}
 for(const el in out.elem)out.elem[el]=Math.min(CAPS.elem,out.elem[el]);out.top=Math.min(CAPS.elem,out.top);
 for(const k of ['crit','cdr','speed'])out[k]=round3(Math.max(0,Math.min(CAPS[k]-(jewel[k]||0),out[k])));
 out.def=Math.min(defCap(s),out.def);return out;}
/* The items a hero has on (starter weapon when the save has none). */
export function wornOf(s,hero=s?.hero){const w=s?.gear?.worn?.[hero];return w?{...emptyWorn(hero),...w,weapon:w.weapon||starterWeapon(hero)}:emptyWorn(hero);}
/* What the hero's sprite shows (gfx/actors/hero-looks.js): the worn weapon's drawn art and the worn chest's set, whose
   palette recolours the armour (the chest decides: hero-armor.js tintForChest). Pure; reads only s.gear.worn. */
export function heroLook(s,hero=s?.hero){const w=wornOf(s,hero);return {art:ITEM[w.weapon]?.art||null,set:ITEM[w.chest]?.set||null};}
/* A rough "Gear Score" (advice only): the sum of the worn items' stat value. */
export function gearScore(s,hero=s?.hero){const b=gearBonus(s,hero);return Math.round(b.power*2+b.def*2+b.hp/5+(b.crit+b.cdr+b.speed)*100);}
/* An item's score on its own, for the compare tooltip and the next-upgrade hint. */
export const itemScore=(id,stars=0,finish=null)=>{const st=itemStats(id,stars,finish);return Math.round((st.power||0)*2+(st.def||0)*2+(st.hp||0)/5+((st.crit||0)+(st.cdr||0)+(st.speed||0))*100);};
/* Compare: every stat line of `id` against what is worn in that slot. [{k, now, then, d}] with d>0 a gain. */
export function compare(s,hero,id){const it=ITEM[id],g=s.gear,topics=masteredTopics(s);if(!it)return [];const cur=wornOf(s,hero)[it.slot];
 const a=itemStats(id,starsOf(g,id,topics),own(g,id)?.finish),b=cur?itemStats(cur,starsOf(g,cur,topics),own(g,cur)?.finish):{};
 return STAT_KEYS.filter(k=>a[k]||b[k]).map(k=>({k,now:b[k]||0,then:a[k]||0,d:round3((a[k]||0)-(b[k]||0))}));}
/* ---- sets: progress for the tracker ------------------------------------------------------------------------------ */
export function setProgress(s,hero=s?.hero){const worn=wornOf(s,hero),out=[];
 for(const [k,S] of Object.entries(SETS)){const pieces=SET_PIECES[k],on=pieces.filter(id=>Object.values(worn).includes(id)).length,owned=pieces.filter(id=>s?.gear?.owned?.[id]).length;
  if(on||owned)out.push({key:k,name:S.name,on,owned,total:3,two:S.two,three:S.three,missing:pieces.filter(id=>!Object.values(worn).includes(id))});}
 return out;}
/* Where an item comes from, in words. */
export function sourceText(id){const it=ITEM[id];if(!it)return '';if(it.scholar)return `Earned by mastering ${it.scholar} topics in the Library`;
 const r=recipe(id),boss=it.boss&&(LEVELS.find(l=>l.boss===it.boss)?.bossName||it.boss);
 if(it.shop!==undefined)return it.shop?`The Weaponsmith, ◆ ${it.shop}`:'Every hero starts with this';
 return `${boss}, any tier · or craft: ${Object.entries(r.mats).map(([m,n])=>`${n} ${MATS[m].name}`).join(' + ')} + ◆ ${r.gold}`;}
/* ---- unlocks: recipes and shop stock ----------------------------------------------------------------------------- */
/* A boss counts as beaten once its level is cleared on any tier, or a kill was recorded. */
export const bossBeaten=(s,boss)=>!!s?.gear?.beat?.[boss]||LEVELS.some(l=>l.boss===boss&&levelDone(s,l.id));
/* The smith's stock opens chapter by chapter: Emberkeep once the Thorn King falls, Veilmoor once Moltar (the demon-slime key) does. */
export const chapterReached=(s,ch)=>ch<=1||(ch===2?bossBeaten(s,'thorn-king'):ch===3?bossBeaten(s,'demon-slime'):false);
export const recipeOpen=(s,id)=>{const it=ITEM[id];return !!recipe(id)&&bossBeaten(s,it.boss);};
/* opens: a level that must be cleared first (the mid-chapter lines, MID_LINE and MID_LINE2). */
export const shopOpen=(s,id)=>{const it=ITEM[id];return !!it&&it.shop>0&&chapterReached(s,it.chapter)&&(!it.opens||levelDone(s,it.opens));};
/* Why a smith item is not on sale yet, in words for its locked card; '' once it is. */
export const shopLock=(s,id)=>{const it=ITEM[id];if(!it||shopOpen(s,id))return '';if(!chapterReached(s,it.chapter))return `Reach ${CHAPTER_NAMES[it.chapter]}`;const l=LEVELS.find(l=>l.id===it.opens);return `Beat ${l?.bossName||it.opens}`;};
/* ---- actions (each returns {ok, why}) ----------------------------------------------------------------------------- */
const have=(s,mats)=>Object.entries(mats||{}).every(([m,n])=>(s.gear.mats[m]||0)>=n);
const pay=(s,{gold=0,mats={}})=>{s.gold-=gold;for(const [m,n] of Object.entries(mats))s.gear.mats[m]=(s.gear.mats[m]||0)-n;};
const shortText=(s,{gold=0,mats={}})=>{const need=Object.entries(mats).filter(([m,n])=>(s.gear.mats[m]||0)<n).map(([m,n])=>`${n-(s.gear.mats[m]||0)} more ${MATS[m].name}`);if((s.gold||0)<gold)need.push(`${gold-(s.gold||0)} more gold`);return need.length?`Need ${need.join(', ')}`:'';};
export const canAfford=(s,cost)=>!!cost&&(s.gold||0)>=(cost.gold||0)&&have(s,cost.mats);
export const costWhy=(s,cost)=>shortText(s,cost);
const gain=(s,id)=>{s.gear.owned[id]??={stars:0,finish:null,new:true};s.gear.seen[id]=1;};
/* Crafting skill XP (game/skills.js, save v8 s.skills.crafting): craft 10, star n 5n, Finish 5, salvage 1. */
const craftXP=(s,n)=>{(s.skills??={}).crafting=(s.skills.crafting|0)+n;};
/* An item paid by the Boss Meter (game/meter.js): owned like a drop. */
export const grantItem=(s,id)=>{if(!ITEM[id])return false;s.gear??=emptyGear();gain(s,id);return true;};
export function buy(s,id){const it=ITEM[id];if(!it||!shopOpen(s,id))return {ok:false,why:'Not sold here yet'};if(s.gear.owned[id])return {ok:false,why:'Already yours'};
 if((s.gold||0)<it.shop)return {ok:false,why:`Need ${it.shop-(s.gold||0)} more gold`};s.gold-=it.shop;gain(s,id);return {ok:true};}
export function craft(s,id){const r=recipe(id);if(!r||!recipeOpen(s,id))return {ok:false,why:'Defeat its boss to learn this recipe'};if(s.gear.owned[id])return {ok:false,why:'Already yours'};
 if(!canAfford(s,r))return {ok:false,why:shortText(s,r)};pay(s,r);gain(s,id);craftXP(s,10);return {ok:true};}
export function addStar(s,id){const o=s.gear.owned[id],it=ITEM[id];if(!o||!it)return {ok:false,why:'You do not own this'};if(it.scholar)return {ok:false,why:'Scholar’s pieces grow as you master topics'};
 if(o.stars>=MAX_STARS)return {ok:false,why:'Fully upgraded'};const c=starCost(id,o.stars+1);if(!canAfford(s,c))return {ok:false,why:shortText(s,c)};pay(s,c);o.stars++;craftXP(s,5*o.stars);return {ok:true};}
export function setFinish(s,id,f){const o=s.gear.owned[id];if(!o)return {ok:false,why:'You do not own this'};if(!finishFits(id,f))return {ok:false,why:'That Finish does not fit this item'};
 if(o.finish===f)return {ok:false,why:'Already has that Finish'};const c=finishCost(id);if(!canAfford(s,c))return {ok:false,why:shortText(s,c)};pay(s,c);o.finish=f;craftXP(s,5);return {ok:true};}
/* What salvaging gives back: half the recipe's materials (or half the gold for a smith item), and every star's material. */
export function salvageValue(s,id){const it=ITEM[id],o=s.gear?.owned?.[id];if(!it||!o)return null;const r=recipe(id),mats={};let gold=0;
 if(r){for(const [m,n] of Object.entries(r.mats))mats[m]=(mats[m]||0)+Math.floor(n/2);gold+=Math.floor(r.gold/2);}else if(it.shop)gold+=Math.floor(it.shop/2);
 for(let n=1;n<=o.stars;n++){const c=starCost(id,n);if(!c)continue;for(const [m,k] of Object.entries(c.mats))mats[m]=(mats[m]||0)+k;}
 for(const m in mats)if(!mats[m])delete mats[m];return {gold,mats};}
export const wornBy=(s,id)=>Object.entries(s.gear?.worn||{}).filter(([,w])=>Object.values(w).includes(id)).map(([h])=>h);
export function salvage(s,id){const it=ITEM[id];if(!it||!s.gear.owned[id])return {ok:false,why:'You do not own this'};if(it.scholar)return {ok:false,why:'Scholar’s pieces cannot be salvaged'};
 if(it.shopTier===0)return {ok:false,why:'Starting gear cannot be salvaged'};if(wornBy(s,id).length)return {ok:false,why:'Take it off first'};
 const v=salvageValue(s,id);s.gold=(s.gold||0)+v.gold;for(const [m,n] of Object.entries(v.mats))s.gear.mats[m]=(s.gear.mats[m]||0)+n;delete s.gear.owned[id];craftXP(s,1);return {ok:true,value:v};}
export function equip(s,hero,id){const it=ITEM[id];if(!it||!s.gear.owned[id])return {ok:false,why:'You do not own this'};if(!fits(hero,id,it.slot))return {ok:false,why:it.slot==='weapon'?'Another hero’s weapon':'Made for another hero'};
 const w=s.gear.worn[hero]??=emptyWorn(hero);w[it.slot]=id;delete s.gear.owned[id].new;return {ok:true};}
export function unequip(s,hero,slot){if(slot==='weapon')return {ok:false,why:'A hero always carries a weapon'};const w=s.gear.worn[hero]??=emptyWorn(hero);w[slot]=null;return {ok:true};}
/* Scholar's Regalia: grants each piece once its topic count is reached. Returns the ids newly earned. Reads lessons only. */
export function syncScholar(s){const n=masteredTopics(s),out=[];for(const id of SET_PIECES.scholar){const it=ITEM[id];if(n>=it.scholar&&!s.gear.owned[id]){gain(s,id);out.push(id);}}return out;}
/* ---- drops -------------------------------------------------------------------------------------------------------- */
/* Set piece chance per tier and the bad-luck step per miss; trick weapons from the capstones. */
export const SET_DROP={normal:[.3,.15],heroic:[.45,.2],legendary:[.6,.25]};
export const TRICK_DROP={normal:[.15,.1],heroic:[.25,.1],legendary:[.4,.1]};
export const ELITE_SHARDS={normal:1,heroic:1,legendary:2};
const CAPSTONE={'thorn-king':1,'demon-slime':2,cthulhu:3};
export const setOfBoss=boss=>Object.keys(SETS).find(k=>SETS[k].boss===boss||SETS[k].bosses?.includes(boss))||null;
/* The pieces of its set a boss drops: all three for a one-boss set, its own piece for the Veilmoor's Dreamtide. */
export const bossPieces=boss=>{const k=setOfBoss(boss);return k?SET_PIECES[k].filter(id=>ITEM[id].boss===boss):[];};
export const dropChance=(s,boss,tier)=>{const [b,st]=SET_DROP[tier]||SET_DROP.normal;return Math.min(1,Math.round((b+st*(s.gear?.pity?.[`${boss}:${tier}`]||0))*1000)/1000);};
export const firstLegendary=(s,boss)=>!s.gear?.legend?.[boss]&&!!setOfBoss(boss);
/* The first Legendary boss grant follows the selected missing piece, then the displayed set order.
   Read the level's raw target so another boss in a duo cannot redirect this boss's grant. No meter points are spent. */
export function legendaryReward(s,boss){if(!firstLegendary(s,boss))return null;const missing=bossPieces(boss).filter(id=>!s.gear?.owned?.[id]),l=LEVELS.find(l=>!l.hidden&&(l.boss===boss||l.duo===boss)),target=s.delve?.meters?.[l?.id]?.target;
 return missing.length?{item:missing.includes(target)?target:missing[0]}:{mat:bossMat(boss),n:TIER_COUNT.legendary};}
/* One kill's gear. Returns {mats:{}, items:[]} (possibly empty). Bosses: their material always, then a set piece roll
   with bad-luck protection (always a piece still missing; extra material once all three are owned), then for a
   capstone a trick weapon of the current hero's family. Elites and modified foes: Elite Shards. */
/* oct24-exploit-b: a boss drops a piece only if the save never had it (gear.seen, written by every gain). A dropped Dreamtide piece
   salvaged for 450 gold + 10 Essence + a Mist Pearl came back on the next kills (drop, salvage, replay: about 200 gold and 4 Essence
   a Normal Wisp Mother kill on top of the run). Once had, its drop pays the boss's material like a duplicate; crafting still makes it. */
export function rollGear(s,enemy,tier='normal',r=Math.random,hero=s?.hero){const g=s.gear??=emptyGear(),out={mats:{},items:[]};tier=TIER_COUNT[tier]?tier:'normal';
 const add=(m,n)=>{g.mats[m]=(g.mats[m]||0)+n;out.mats[m]=(out.mats[m]||0)+n;};
 if(enemy?.boss&&!enemy.elite){const key=enemy.key,n=TIER_COUNT[tier];add(bossMat(key),n+(g.beat[key]?0:firstKillBonus(bossMat(key))));g.beat[key]=1;
  const set=setOfBoss(key);if(set){const pk=`${key}:${tier}`,missing=bossPieces(key).filter(id=>!g.owned[id]&&!g.seen[id]),sure=tier==='legendary'&&!g.legend[key],guaranteed=sure?legendaryReward(s,key):null;
   if(guaranteed)out.guaranteed=guaranteed;
   if(tier==='legendary')g.legend[key]=1;
   if(sure||r()<dropChance(s,key,tier)){g.pity[pk]=0;if(missing.length){const id=sure?guaranteed.item:missing[Math.floor(r()*missing.length)%missing.length];gain(s,id);out.items.push(id);}else add(bossMat(key),n);}
   else g.pity[pk]=(g.pity[pk]||0)+1;}
  if(CAPSTONE[key]){const id=ITEMS.find(i=>i.trick&&i.boss===key&&i.family===familyOf(hero))?.id,pk=`${key}:${tier}:weapon`,[b,st]=TRICK_DROP[tier];
   if(id&&r()<Math.min(1,b+st*(g.pity[pk]||0))){g.pity[pk]=0;if(!g.owned[id]&&!g.seen[id]){gain(s,id);out.items.push(id);}else add(bossMat(key),n);}else if(id)g.pity[pk]=(g.pity[pk]||0)+1;}}
 else if(enemy&&(enemy.elite||enemy.mod)){add('elite-shard',ELITE_SHARDS[tier]);/* a chapter mini-boss (game/enemies.js drop) also leaves one of its chapter's materials */if(enemy.elite&&MATS[enemy.drop])add(enemy.drop,1);}
 return out;}
/* ---- the next upgrade (always something to chase) ----------------------------------------------------------------- */
/* The closest improvement for this hero, cheapest first among those that raise the slot's score: something affordable
   now (buy, craft or a star), else the nearest one with what is still missing. {kind, id, slot, text, ready} or null. */
/* A worn set's value for the hint: its 2-piece stats (in gearScore) plus a little for each 3-piece effect switched on,
   so finishing a set is suggested before a loose piece with slightly bigger numbers. */
const SET_EFFECT_SCORE=8;
const wornScore=(s,hero,slot,id)=>{const w={...wornOf(s,hero)};if(slot)w[slot]=id;const t={...s,gear:{...s.gear,worn:{...s.gear.worn,[hero]:w}}},b=gearBonus(t,hero);return gearScore(t,hero)+SET_EFFECT_SCORE*Object.keys(b.effects).length;};
/* A Finish for a worn piece without one, offered only when Essence is plentiful: affordable now with at least as much
   Essence again left over, so it never takes the Essence a star is waiting for (15 Oct, the Essence sink). */
const finishOffer=(s,id,stars)=>{const c=finishCost(id);if(!c)return null;const have=s.gear.mats['elite-shard']||0,need=c.mats['elite-shard'];
 if(have<2*need||(s.gold||0)<c.gold)return null;let best=null;for(const f of Object.keys(FINISHES)){if(!finishFits(id,f))continue;const gain=itemScore(id,stars,f)-itemScore(id,stars);if(gain>0&&(!best||gain>best.gain))best={kind:'finish',id,slot:ITEM[id].slot,finish:f,cost:c,gain};}return best;};
export function nextUpgrade(s,hero=s?.hero){const g=s.gear,topics=masteredTopics(s),worn=wornOf(s,hero),opts=[],now=wornScore(s,hero);
 const score=id=>id?itemScore(id,starsOf(g,id,topics),own(g,id)?.finish):0;
 for(const it of ITEMS){if(!fits(hero,it.id,it.slot)||it.scholar)continue;const cur=score(worn[it.slot]),mine=g.owned[it.id];
  if(mine){const gain=worn[it.slot]!==it.id?wornScore(s,hero,it.slot,it.id)-now:0;if(gain>0)opts.push({kind:'equip',id:it.id,slot:it.slot,cost:{gold:0,mats:{}},gain});
   else if(worn[it.slot]===it.id&&mine.stars<MAX_STARS&&starShows(it.id,mine.stars,mine.finish)){const c=starCost(it.id,mine.stars+1);opts.push({kind:'star',id:it.id,slot:it.slot,cost:c,gain:itemScore(it.id,mine.stars+1,mine.finish)-score(it.id)});}
   if(worn[it.slot]===it.id&&!mine.finish){const f=finishOffer(s,it.id,mine.stars);if(f)opts.push(f);}continue;}
  const sc=itemScore(it.id);if(sc<=cur)continue;const gain=wornScore(s,hero,it.slot,it.id)-now;if(gain<=0)continue;
  if(shopOpen(s,it.id))opts.push({kind:'buy',id:it.id,slot:it.slot,cost:{gold:it.shop,mats:{}},gain});
  else if(recipeOpen(s,it.id))opts.push({kind:'craft',id:it.id,slot:it.slot,cost:recipe(it.id),gain});}
 if(!opts.length)return null;
 const weight=o=>(o.cost.gold||0)+Object.entries(o.cost.mats||{}).reduce((t,[m,n])=>t+Math.max(0,n-(g.mats[m]||0))*120,0);
 for(const o of opts)o.ready=o.kind==='equip'||canAfford(s,o.cost);
 opts.sort((a,b)=>(b.ready-a.ready)||(weight(a)/Math.max(1,a.gain))-(weight(b)/Math.max(1,b.gain))||(b.gain-a.gain));const o=opts[0],it=ITEM[o.id];
 o.text=o.kind==='equip'?`Wear ${it.name}`:o.kind==='star'?`Add ★${(g.owned[o.id].stars||0)+1} to ${it.name}`:o.kind==='finish'?`Add the ${FINISHES[o.finish].name} Finish to ${it.name}`:o.kind==='buy'?`Buy ${it.name}`:`Craft ${it.name}`;
 o.why=o.ready?'':shortText(s,o.cost);return o;}
/* ---- validation (tests) -------------------------------------------------------------------------------------------- */
export function validate(){const errs=[];for(const it of ITEMS){if('grantsAbility' in it||'ability' in it)errs.push(`${it.id} grants an ability`);
 if(!SLOTS.includes(it.slot))errs.push(`${it.id} bad slot`);if(!RARITIES.includes(it.rarity))errs.push(`${it.id} bad rarity`);
 if(Object.keys(it.stats).length>3)errs.push(`${it.id} has more than 3 stat lines`);
 if(it.trick&&!TRICKS[it.trick])errs.push(`${it.id} unknown trick`);if(it.set&&!SETS[it.set])errs.push(`${it.id} unknown set`);
 if(it.trick&&RARITIES.indexOf(it.rarity)<2)errs.push(`${it.id} trick below Rare`);if(it.art&&it.slot!=='weapon')errs.push(`${it.id} has weapon art but is not a weapon`);}
 return errs;}
export const HERO_FOR_FAMILY=HERO_OF;
