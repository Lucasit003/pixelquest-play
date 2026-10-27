// Enemy and boss types for v2 levels (contract: docs/GAME_V2_PLAN.md §Enemies). Owned by the enemies agent.
// ENEMY_TYPES[key] = {name, sprite, hp, atk, def, speed, scale, ai, band, attacks:[...], phaseShift?, weakness?, fact, intro?, defeat?}
// - sprite: atlas id in dist/assets/sprites (tools/bake-sprites.mjs). Every type ships a downloaded sprite (STYLE_GUIDE rule 0);
//   the Thorn King keeps the old procedural body only as a fallback while his atlas loads.
// - scale: always 1 (STYLE_GUIDE rule 1, art direction round 1): every enemy and boss is drawn at its native size.
// - stopgap: true marks a boss whose downloaded art is under the 90 px boss height; docs/review/v2/enemies/PAID_OPTIONS.md
//   lists the paid pack that would replace it.
// - ai: key into ENEMY_AI (scenes/enemy-ai.js). band: half-depth of the lane an attack reaches (belt-scroll depth).
// - attacks: {name, state, kind, range, cd, windup, dmg, ...}. dmg multiplies atk; damage goes through game/math.js damage().
//   kind: melee (box in front) | aoe (marker at player/self/front, optional hazard fx) | line (hazards marching forward)
//   | projectile (fx sprite flying down the lane) | beam (full lane strip) | dash (charge along the lane)
//   | leap (jump onto a marked spot) | summon (minions) | buff (armour up). phase: 1, 2 or omitted (both).
//   windup is the telegraph (wind-up flash, plus a ground marker of downloaded flames for area attacks) before the state
//   starts; the hit then lands on the atlas contact frame. tests/enemies.test.js checks every hit reads before it lands
//   (0.4 s at least for regulars, 0.6 s for bosses, per docs/GAME_DIRECTION.md).
// - half: the 50% line combat.js shows as a banner (same text as phaseShift.line).
// - recover (per attack): the opening a boss leaves after the move, in seconds.
// - phaseShift: {at, line, state, speed, cd, dmg, tint, title} -- the 50% phase change; line is what the boss says then. (Not `phase2`: roster.js keeps that name
//   for the Thorn King's cinematic and strips it from everyone else.)
// - fact: one true, kid-friendly fact tied to a school subject, for the Bestiary ({subject, text}); factCheck:true marks
//   any a human should verify. intro/defeat: a boss's name-card line and its last words.
import {BOSS} from './data.js';
const melee=(o)=>({name:'strike',state:'attack',kind:'melee',band:9,cd:1.6,windup:.45,dmg:1,...o});
const F=(subject,text,factCheck)=>({subject,text,...(factCheck?{factCheck:true}:{})});
export const ENEMY_TYPES={
 /* ---------- regular enemies ---------- */
 goblin:{name:'Goblin',sprite:'pl-goblin',hp:34,atk:7,def:2,speed:48,scale:1,ai:'chase',band:9,attacks:[melee({range:26})],
  fact:F('language','The word "goblin" probably comes from the old French word "gobelin", the name for a mischievous little spirit.')},
 slime:{name:'Slime',sprite:'pl-slime',hp:28,atk:6,def:0,speed:28,scale:1,ai:'hopper',band:8,weakness:'fire',attacks:[melee({name:'lunge',range:34,cd:2,windup:.45})],
  fact:F('science','Slime moulds have no brain, yet scientists have watched them find the shortest path through a maze to reach food.')},
 orc:{name:'Orc',sprite:'pl-orc',hp:72,atk:11,def:5,speed:36,scale:1,ai:'chase',band:10,attacks:[melee({name:'spear',range:52,cd:2,windup:.5})],
  fact:F('language','J.R.R. Tolkien made orcs famous in his books. He took the word from Old English, where "orc" meant a monster or demon.')},
 'orc-rogue':{name:'Orc Rogue',sprite:'pl-orc-rogue',hp:52,atk:10,def:3,speed:58,scale:1,ai:'strafe',band:9,attacks:[melee({name:'lunge',range:46,cd:1.5,windup:.45})],
  fact:F('science','Many ambush hunters, like leopards and tigers, have spotted or striped coats that break up their outline so prey cannot see them.')},
 skeleton:{name:'Skeleton',sprite:'pl-skeleton',hp:40,atk:9,def:4,speed:38,scale:1,ai:'chase',band:9,weakness:'holy',attacks:[melee({range:40,cd:1.5,windup:.45})],
  fact:F('science','An adult has 206 bones, but a newborn baby has around 300. Some of them fuse together as you grow.')},
 'skeleton-warrior':{name:'Blood Knight',sprite:'pl-skeleton-warrior',hp:64,atk:11,def:9,speed:34,scale:1,ai:'chase',band:9,weakness:'holy',block:{state:'block',chance:.35,time:.8},attacks:[melee({range:42,cd:1.7,windup:.45,dmg:1.1})],
  fact:F('science','Your thigh bone, the femur, is the longest and strongest bone in your body.')},
 'skeleton-mage':{name:'Grave Wraith',sprite:'pl-skeleton-mage',hp:38,atk:10,def:2,speed:34,scale:1,ai:'caster',band:9,weakness:'holy',keep:110,fly:4,attacks:[
  {name:'wail bolt',state:'attack',kind:'projectile',fx:'fx-dm-orb-blue',range:170,cd:2.6,windup:.5,dmg:1,speed:90},
  {name:'grave hand',state:'cast',kind:'aoe',at:'player',fx:'fx-dark-hand',radius:16,range:150,cd:4.5,windup:.55,dmg:1.2}],
  fact:F('science','Sound travels about four times faster through water than through air, which is why whales can hear each other from far away.')},
 imp:{name:'Imp',sprite:'pl-imp',hp:30,atk:10,def:1,speed:62,scale:1,ai:'strafe',band:9,weakness:'ice',attacks:[melee({name:'claw',range:30,cd:1.4,windup:.42})],
  fact:F('language','Long ago "impe" meant a young shoot grafted onto a plant. Only later did "imp" come to mean a little devil.')},
 'fire-skeleton':{name:'Ember Skeleton',sprite:'pl-fire-skeleton',hp:58,atk:15,def:6,speed:38,scale:1,ai:'chase',band:9,weakness:'ice',attacks:[melee({name:'burning blade',range:42,cd:1.6,windup:.45,dmg:1.1})],
  fact:F('science','Fire needs three things: heat, fuel and oxygen. Take any one away and the fire goes out. That is how fire blankets work.')},
 'magma-slime':{name:'Magma Slime',sprite:'pl-magma-slime',hp:44,atk:13,def:3,speed:28,scale:1,ai:'hopper',band:8,weakness:'ice',attacks:[melee({name:'molten lunge',range:34,cd:2,windup:.45,dmg:1.1})],
  fact:F('geography','Melted rock is called magma while it is underground, and lava once it reaches the surface.')},
 wisp:{name:'Wisp',sprite:'pl-wisp',hp:24,atk:11,def:0,speed:56,scale:1,ai:'flyer',band:9,fly:18,attacks:[melee({name:'spark',range:14,cd:1.6,windup:.42})],
  fact:F('science','Scientists think the floating "will-o\'-the-wisp" lights people saw over marshes may have come from swamp gases catching fire.')},
 cultist:{name:'Cultist',sprite:'pl-cultist',hp:46,atk:14,def:3,speed:34,scale:1,ai:'caster',band:9,keep:100,attacks:[
  {name:'hex bolt',state:'attack',kind:'projectile',fx:'fx-cultist-bolt',range:180,cd:2.6,windup:.5,dmg:1,speed:100},
  {name:'dark grasp',state:'cast',kind:'aoe',at:'player',fx:'fx-dark-hand',radius:16,range:160,cd:5,windup:.6,dmg:1.15}],
  fact:F('history','Before the printing press arrived in Europe in the 1450s, most books were copied out by hand, often by monks.')},
 shade:{name:'Shade',sprite:'pl-shade',hp:48,atk:14,def:2,speed:60,scale:1,ai:'strafe',band:9,weakness:'holy',attacks:[melee({name:'shadow strike',range:40,cd:1.5,windup:.45})],
  fact:F('science','A shadow forms because light travels in straight lines, so an object in the way blocks it from reaching the ground behind.')},
 'flying-eye':{name:'Watcher',sprite:'pl-flying-eye',hp:30,atk:9,def:1,speed:54,scale:1,ai:'flyer',band:10,fly:22,attacks:[melee({name:'bite',range:18,cd:1.6,windup:.42})],
  fact:F('science','The lens in your eye flips the picture upside down on the back of your eye, and your brain turns it the right way up.')},
 rat:{name:'Plague Rat',sprite:'pl-rat',hp:20,atk:6,def:0,speed:60,scale:1,ai:'chase',band:8,attacks:[melee({name:'bite',range:24,cd:1.3,windup:.4})],
  fact:F('science','Rats are so clever that giant pouched rats have been trained to sniff out old landmines so people can clear them safely.')},
 'bandit-thug':{name:'Bandit Thug',sprite:'bandit-thug',hp:46,atk:9,def:3,speed:50,scale:1,ai:'chase',band:9,attacks:[melee({name:'cudgel',range:34,cd:1.6,windup:.5})],
  fact:F('history','In 1285 an English law ordered the bushes beside main roads to be cleared for 200 feet on each side, so robbers had nowhere to hide.')},
 sporeling:{name:'Sporeling',sprite:'sporeling',hp:22,atk:7,def:0,speed:44,scale:1,ai:'chase',band:8,weakness:'fire',attacks:[melee({name:'spore puff',range:24,cd:1.8,windup:.5})],
  fact:F('science','A single mushroom can release billions of tiny spores, and each one is so light that the wind can carry it for kilometres.')},
 /* the run layer's Mimic (game/draft.js): a secret chest that bites back. Fair, not deadly (owner, 14 Oct): it wakes with a
    warning, moves slowly, winds up for 0.8 s and hits soft; it never appears on Normal. */
 mimic:{name:'Mimic',sprite:'mimic',hp:60,atk:8,def:4,speed:24,scale:1,ai:'chase',band:9,attacks:[melee({name:'chomp',range:30,cd:2.4,windup:.8,dmg:.9})],
  fact:F('science','Some harmless animals copy the look of dangerous ones. The scarlet kingsnake has red, black and yellow bands a bit like the venomous coral snake. This is called mimicry.')},
 'pebble-golem':{name:'Pebble Golem',sprite:'pebble-golem',hp:70,atk:11,def:10,speed:30,scale:1,ai:'chase',band:9,weakness:'storm',attacks:[melee({name:'rock punch',range:30,cd:1.9,windup:.55,dmg:1.15})],
  fact:F('science','Pebbles form when water and weather slowly break big rocks into small pieces and rub their sharp edges smooth.')},
 'bramble-knight':{name:'Bramble Knight',sprite:'bramble-knight',hp:72,atk:13,def:10,speed:36,scale:1,ai:'chase',band:9,block:{state:'block',chance:.35,time:.8},attacks:[melee({name:'thorn chop',range:40,cd:1.7,windup:.5,dmg:1.15})],
  fact:F('history','A full suit of plate armour in the 1400s weighed about 15 to 25 kilograms, and a knight could still run, climb and get up off the ground in it.')},
 thornling:{name:'Thornling',sprite:'thornling',hp:30,atk:10,def:1,speed:56,scale:1,ai:'strafe',band:9,weakness:'fire',attacks:[melee({name:'thorn lash',range:36,cd:1.5,windup:.45})],
  fact:F('science','Some plants grow thorns or spines so animals will not eat them. A cactus\'s spines are really leaves that changed shape.')},
 'forge-construct':{name:'Forge Construct',sprite:'forge-construct',hp:58,atk:15,def:6,speed:38,scale:1,ai:'chase',band:9,weakness:'ice',attacks:[melee({name:'hammer fist',range:42,cd:1.6,windup:.45})],
  fact:F('science','Iron is made from rock called iron ore, heated in a furnace until the metal melts and runs out.')},
 'ember-drake':{name:'Ember Drake',sprite:'ember-drake',hp:30,atk:10,def:1,speed:62,scale:1,ai:'strafe',band:9,weakness:'ice',attacks:[melee({name:'ember bite',range:30,cd:1.6,windup:.45})],
  fact:F('science','Komodo dragons are real lizards, the biggest alive today. They can grow about three metres long.')},
 'obsidian-shard':{name:'Obsidian Shard',sprite:'obsidian-shard',hp:58,atk:15,def:6,speed:38,scale:1,ai:'chase',band:9,weakness:'storm',attacks:[melee({name:'glass slash',range:42,cd:1.6,windup:.45})],
  fact:F('geography','Obsidian is natural volcanic glass. It forms when lava cools so fast that crystals have no time to grow.')},
 'ash-ghoul':{name:'Ash Ghoul',sprite:'ash-ghoul',hp:58,atk:15,def:6,speed:38,scale:1,ai:'chase',band:9,weakness:'ice',attacks:[melee({name:'ash claw',range:42,cd:1.6,windup:.45})],
  fact:F('geography','Volcanic ash is made of tiny bits of rock and glass, not soft ash like from a wood fire.')},
 'drowned-thrall':{name:'Drowned Thrall',sprite:'drowned-thrall',hp:40,atk:9,def:4,speed:38,scale:1,ai:'chase',band:9,weakness:'storm',attacks:[melee({name:'boat hook',range:40,cd:1.6,windup:.45})],
  fact:F('science','Seaweed is not a plant. It is algae, and it makes much of the oxygen we breathe.')},
 'void-spawn':{name:'Void Spawn',sprite:'void-spawn',hp:48,atk:14,def:2,speed:60,scale:1,ai:'strafe',band:9,weakness:'holy',attacks:[melee({name:'void claw',range:40,cd:1.6,windup:.45})],
  fact:F('science','Most of space is empty. Even between nearby stars there are huge distances with almost nothing in them.')},
 'deep-one':{name:'Deep One',sprite:'deep-one',hp:64,atk:11,def:9,speed:34,scale:1,ai:'chase',band:9,weakness:'storm',attacks:[melee({name:'coral spear',range:42,cd:1.6,windup:.45})],
  fact:F('science','Some deep-sea fish make their own light, called bioluminescence, to find food in the dark.')},
 'moonmoth':{name:'Moonmoth',sprite:'moonmoth',hp:24,atk:11,def:0,speed:56,scale:1,ai:'flyer',band:9,attacks:[melee({name:'dust swoop',range:14,cd:1.6,windup:.45})],
  fact:F('science','Many moths find their way at night using the moon and stars, which is why lamps can confuse them.')},
 'executioner-spirit':{name:'Lost Soul',sprite:'pl-executioner-spirit',hp:14,atk:8,def:0,speed:50,scale:1,ai:'flyer',band:9,fly:16,attacks:[melee({name:'touch',range:14,cd:1.6,windup:.42})],
  fact:F('science','Fireflies make light with a chemical reaction inside their bodies. Living things that glow are called bioluminescent.')},

 /* ---------- Elderwood bosses, easy to hard ---------- */
 'goblin-king':{name:'Grubnak, Goblin Chief',sprite:'grubnak',boss:true,hp:340,atk:11,def:4,speed:46,scale:1,ai:'boss',band:12,kbResist:.6,
  intro:'Grubnak\'s camp, Grubnak\'s rules! Bow to your chief!',defeat:'My big club... it was too heavy anyway!',
  fact:F('language','The word "chief" comes from the Latin word "caput", which means "head". A chief is the head of a group.'),
  half:'Grubnak is ANGRY now! Tribe, help your chief!',phaseShift:{at:.5,line:'Grubnak is ANGRY now! Tribe, help your chief!',speed:1.3,cd:.7,tint:'#ffd34a',title:'THE CHIEF CALLS HIS TRIBE'},attacks:[
  {name:'club smash',state:'attack',kind:'melee',range:68,band:14,cd:1.7,windup:.65,dmg:1.25},
  {name:'ground pound',state:'attack2',kind:'aoe',at:'self',radius:54,range:60,cd:3,windup:.65,dmg:1.1,impact:'fx-dust',recover:.8},
  {name:'goblin leap',state:'attack2',kind:'leap',radius:44,range:190,cd:4.4,windup:.7,dmg:1.25,air:.6,impact:'fx-dust',recover:.8},
  {name:'chief\'s charge',state:'run',kind:'dash',range:280,cd:5.6,windup:.8,dmg:1.2,speed:240,band:14},
  {name:'double leap',state:'attack2',kind:'leap',radius:40,range:200,cd:5.2,windup:.65,dmg:1.15,air:.55,repeat:2,phase:2,impact:'fx-dust',recover:.9},
  {name:'bomb toss',state:'throw',kind:'aoe',at:'player',fx:'fx-goblin-bomb',radius:26,range:240,cd:2.6,windup:.65,dmg:1.15},
  {name:'bomb barrage',state:'throw',kind:'aoe',at:'player',fx:'fx-goblin-bomb',radius:22,count:5,spread:56,range:240,cd:3.4,windup:.65,dmg:1,phase:2,recover:.8},
  {name:'call the tribe',state:'shout',kind:'summon',key:'goblin',count:3,max:4,range:400,cd:8,windup:.8,fx:'fx-portal',phase:2}]},
 'slime-king':{name:'The Bog King',sprite:'bogking',boss:true,wide:true,hp:300,atk:12,def:5,speed:26,scale:1,ai:'boss',band:12,kbResist:.8,keep:60,weakness:'fire',
  intro:'Croak! You have hopped right into my bog!',defeat:'Ribbit... back to the bottom of the pond.',
  fact:F('science','Frogs and toads drink through their skin instead of their mouths, soaking up water from damp ground.'),
  half:'Ribbit! Now I\'m REALLY hopping mad!',phaseShift:{at:.5,line:'Ribbit! Now I\'m REALLY hopping mad!',speed:1.25,cd:.7,tint:'#c48bff',title:'THE BOG BOILS'},attacks:[
  {name:'tongue lash',state:'attack',kind:'melee',range:70,band:12,cd:2.4,windup:.65,dmg:1.2},
  {name:'bog spit',state:'spit',kind:'melee',range:52,band:10,cd:3,windup:.65,dmg:1.15},
  {name:'belly flop',state:'walk',kind:'leap',radius:34,range:160,cd:3.8,windup:.75,dmg:1.3,air:.7,impact:'fx-dust',recover:.8},
  {name:'spawn slimes',state:'heal',kind:'summon',key:'slime',count:2,max:4,range:400,cd:8,windup:.8,fx:'fx-slime-spawn'},
  {name:'double flop',state:'walk',kind:'leap',radius:30,range:170,cd:2.8,windup:.65,dmg:1.1,air:.6,repeat:2,phase:2,impact:'fx-dust',recover:.8}]},
 'orc-warlord':{name:'Gorrak the Warlord',sprite:'gorrak',boss:true,hp:380,atk:15,def:8,speed:38,scale:1,ai:'boss',band:12,kbResist:.85,
  intro:'You knock on my gate? Then face the warlord!',defeat:'Hrrk... a worthy foe. The camp is yours.',
  fact:F('history','On the march, Roman legions built a brand-new fortified camp, with a ditch and a wall, almost every evening.'),
  half:'No more holding back! Warcamp, to me!',phaseShift:{at:.5,line:'No more holding back! Warcamp, to me!',speed:1.25,cd:.75,dmg:1.1,tint:'#ff4a2a',title:'THE WARLORD IS ANGRY'},
  /* in a duo with Mother Ruk (Shaman Grove): if she falls first, her spirits ride his axe */
  duoPower:{title:'Ruk\'s Spirits',line:'RUK! Spirits... make me STRONGER!',heal:.3,tint:'#7dff9a',element:'nature',speed:1.3,cd:.7,attacks:[
   {name:'spirit charge',state:'run',kind:'dash',range:300,cd:4,windup:.75,dmg:1.35,speed:260,band:14},
   {name:'spirit spikes',state:'shout',kind:'line',fx:'fx-spike',count:6,gap:24,radius:12,range:200,cd:4.5,windup:.75,dmg:1.1}]},
  attacks:[
  {name:'axe chop',state:'attack',kind:'melee',range:40,band:12,cd:2.2,windup:.65,dmg:1.25},
  {name:'axe sweep',state:'attack2',kind:'melee',range:42,band:12,cd:2.8,windup:.65,dmg:1.3},
  {name:'war charge',state:'run',kind:'dash',range:300,cd:6,windup:.85,dmg:1.3,speed:230,band:14,phase:2},
  {name:'war horn',state:'shout',kind:'summon',key:'orc-rogue',count:1,max:2,range:400,cd:12,windup:.65,fx:'fx-portal',phase:2}]},
 minotaur:{name:'The Minotaur',sprite:'pl-minotaur',boss:true,hp:440,atk:17,def:9,speed:36,scale:1,ai:'boss',band:12,kbResist:.85,
  intro:'Lost in my hollow? Nobody finds the way out!',defeat:'You found the way out... and you found me.',
  fact:F('history','The Minotaur myth comes from ancient Crete, where the huge palace of Knossos had so many rooms it may have inspired the labyrinth story.'),
  half:'RAAAH! The hollow shakes when I run!',phaseShift:{at:.5,line:'RAAAH! The hollow shakes when I run!',speed:1.3,cd:.7,tint:'#ff5530',title:'THE MINOTAUR RAGES'},attacks:[
  {name:'axe swing',state:'attack',kind:'melee',range:68,band:12,cd:2.4,windup:.65,dmg:1.25},
  {name:'bull rush',state:'walk',kind:'dash',range:300,cd:5.5,windup:.9,dmg:1.4,speed:240,band:14},
  {name:'axe quake',state:'attack2',kind:'aoe',at:'front',radius:40,range:90,cd:4.2,windup:.7,dmg:1.15,impact:'fx-dust'},
  {name:'stampede',state:'walk',kind:'dash',range:300,cd:3.6,windup:.7,dmg:1.3,speed:280,band:14,phase:2}]},
 /* a PixelLab body of his own (8 Oct): a crowned skeleton in plate and a purple cape; raise the dead tears graves open */
 'skeleton-king':{name:'The Skeleton King',sprite:'boneking',boss:true,hp:400,atk:18,def:10,speed:32,scale:1,ai:'boss',band:12,kbResist:.9,weakness:'holy',
  intro:'Rise, my bones! We have a visitor!',defeat:'Back to my nap... wake me in a hundred years.',
  fact:F('science','Your skull is made of 22 bones. Most of them are locked together by wiggly joins called sutures.'),
  half:'My bones remember how to fight!',phaseShift:{at:.5,line:'My bones remember how to fight!',speed:1.2,cd:.7,tint:'#7fd8ff',title:'THE BONES REMEMBER'},
  /* a second life (owner, 8 Oct, after Elden Ring): he falls, then rises as a floating lich in cold blue fire. Health 500 -> 400
     (balance sim on the real enemy AI, 15 Oct): with the second life he had twice e4's and e6's boss time and ran six of seven
     classes past six minutes on Heroic; 400 puts him level with the Watch Golem, the other second life */
  rebirth:{name:'The Lich King',title:'The King Who Would Not Die',sprite:'lichking',pose:'shout',element:'ice',tint:'#7fd8ff',hp:.75,atk:1.15,speed:1.2,keep:64,
   line:'Did you think death could hold a king? I AM death now!',half:'My crown burns cold!',
   phaseShift:{at:.4,line:'My crown burns cold!',speed:1.15,cd:.75,tint:'#c8f4ff',title:'THE COLD CROWN'},attacks:[
   {name:'soul claw',state:'attack',kind:'melee',range:46,band:12,cd:1.9,windup:.6,dmg:1.25},
   {name:'soul beam',state:'cast',kind:'beam',fx:'fx-golem-laser',len:170,band:10,range:180,cd:3.8,windup:.8,dmg:1.35},
   {name:'bone storm',state:'special',kind:'aoe',at:'self',radius:58,range:70,cd:5,windup:.7,dmg:1.3,impact:'fx-dust'},
   {name:'ice graves',state:'cast',kind:'aoe',at:'player',fx:'fx-ice-spike',radius:15,count:4,spread:40,range:280,cd:4.2,windup:.65,dmg:1.1},
   {name:'raise the dead',state:'shout',kind:'summon',key:'skeleton-mage',count:2,max:3,range:400,cd:11,windup:.8,fx:'fx-portal',phase:2}]},
  attacks:[
  {name:'bone claw',state:'attack',kind:'melee',range:30,band:10,cd:2.2,windup:.65,dmg:1.2},
  {name:'shadow thorns',state:'attack2',kind:'aoe',at:'self',radius:44,range:50,cd:4,windup:.7,dmg:1.3,impact:'fx-dust'},
  {name:'bone totems',state:'cast',kind:'aoe',at:'player',fx:'fx-bone-totem',radius:16,count:3,spread:34,range:260,cd:4.5,windup:.75,dmg:1},
  {name:'raise the dead',state:'summon',kind:'summon',key:'skeleton',count:2,max:3,range:400,cd:10,windup:.8,fx:'fx-portal'},
  {name:'grave hands',state:'cast',kind:'aoe',at:'player',fx:'fx-dark-hand',radius:16,count:3,spread:34,range:280,cd:4.5,windup:.65,dmg:1.1,phase:2}]},
 'orc-shaman':{name:'Mother Ruk',sprite:'mother-ruk',boss:true,hp:520,atk:19,def:9,speed:30,scale:1,ai:'boss',band:12,kbResist:.8,keep:60,
  intro:'The spirits whisper your name, little one.',defeat:'The spirits say... you win. Fine.',
  fact:F('science','Many medicines began as plants. Aspirin is related to a chemical people first found in willow bark.'),
  half:'Spirits, lend me your strength!',phaseShift:{at:.5,line:'Spirits, lend me your strength!',speed:1.15,cd:.7,tint:'#7dff9a',title:'THE SPIRITS ANSWER'},
  /* in a duo with Gorrak (Shaman Grove): if he falls first, his rage passes into her spells */
  duoPower:{title:'Gorrak\'s Wrath',line:'Gorrak! The spirits pour his rage into me!',heal:.3,tint:'#ff5a3a',element:'fire',speed:1.2,cd:.75,attacks:[
   {name:'war spikes',state:'special',kind:'line',fx:'fx-spike',count:9,gap:22,radius:13,range:240,cd:3.8,windup:.7,dmg:1.25},
   {name:'blood bolts',state:'cast',kind:'aoe',at:'player',fx:'fx-orc-bolt',radius:20,count:3,spread:40,range:260,cd:4,windup:.7,dmg:1.15}]},
  attacks:[
  {name:'staff sweep',state:'attack',kind:'melee',range:56,band:12,cd:2.6,windup:.65,dmg:1.1},
  {name:'spirit bolt',state:'cast',kind:'aoe',at:'player',fx:'fx-orc-bolt',radius:22,range:260,cd:3.4,windup:.65,dmg:1.15},
  {name:'earth spikes',state:'special',kind:'line',fx:'fx-spike',count:6,gap:24,radius:12,range:200,cd:4.5,windup:.7,dmg:1.1},
  {name:'war band',state:'shout',kind:'summon',key:'orc',count:1,max:2,range:400,cd:11,windup:.8,fx:'fx-portal',phase:2}]},
 /* hp 660 -> 440 (15 Oct, BALANCE.md "Heroic fairness"): with its second life it was the longest fight in Elderwood on every
    tier (e7 269 s on Normal against e8's 146 s) and the 6-minute clock beat five classes there on Heroic */
 'stone-golem':{name:'The Watch Golem',sprite:'watch-golem',boss:true,hp:440,atk:22,def:16,speed:24,scale:1,ai:'boss',band:14,kbResist:1,weakness:'storm',
  intro:'INTRUDER DETECTED. GUARD MODE: ON.',defeat:'POWER... LOW. GOOD... NIGHT.',
  fact:F('science','Igneous rock forms when lava or magma cools. Sedimentary rock forms from layers of sand and mud pressed together over a very long time.'),
  half:'GROUND... SHAKING... ROCKS... FALLING.',phaseShift:{at:.5,line:'GROUND... SHAKING... ROCKS... FALLING.',speed:1.2,cd:.75,tint:'#ffcf7a',title:'THE GROUND SHAKES'},
  /* a second life: the golem breaks apart, then its heart melts it back together as a colossus of lava and basalt */
  rebirth:{name:'The Magma Colossus',title:'The Mountain\'s Burning Heart',sprite:'magma-colossus',pose:'shout',element:'fire',tint:'#ff8a3a',hp:.8,atk:1.2,speed:1.15,def:-4,
   line:'CORE... OVERHEATING. ALL... SYSTEMS... BURN!',half:'MELTDOWN... IMMINENT!',
   phaseShift:{at:.4,line:'MELTDOWN... IMMINENT!',speed:1.2,cd:.7,tint:'#ffd27a',title:'MELTDOWN'},attacks:[
   {name:'magma slam',state:'attack',kind:'aoe',at:'front',radius:40,range:64,cd:2.4,windup:.7,dmg:1.3,impact:'fx-explosion',recover:.6},
   {name:'lava sweep',state:'attack2',kind:'melee',range:62,band:14,cd:2.8,windup:.7,dmg:1.35},
   {name:'molten boulder',state:'throw',kind:'projectile',fx:'fx-hellfire',range:260,cd:3.4,windup:.75,dmg:1.25,speed:110},
   {name:'eruption',state:'special',kind:'aoe',at:'player',fx:'fx-flame-pillar',radius:16,count:5,spread:46,range:280,cd:4.4,windup:.75,dmg:1.15},
   {name:'fire wave',state:'special',kind:'line',fx:'fx-fire-burst',count:7,gap:24,radius:13,range:220,cd:5,windup:.8,dmg:1.2,phase:2}]},
  attacks:[
  {name:'boulder slam',state:'attack',kind:'aoe',at:'front',radius:34,range:60,cd:2.6,windup:.7,dmg:1.25,impact:'fx-dust',recover:.7},
  {name:'rock sweep',state:'attack2',kind:'melee',range:60,band:12,cd:3,windup:.7,dmg:1.3},
  {name:'stone skin',state:'heal',kind:'buff',def:2,time:4,range:400,cd:12,windup:.6},
  {name:'falling rocks',state:'attack',kind:'aoe',at:'player',fx:'fx-molten-spear',radius:14,count:3,spread:36,range:260,cd:4.6,windup:.75,dmg:1.1,phase:2}]},
 /* The Thorn King keeps data.js BOSS (roster.js gives him the cinematic, whose second life is his phase change); his body is
    a PixelLab king in thorn-black plate with a thorned greatsword (8 Oct). The procedural king only shows while the atlas loads. */
 'thorn-king':{...BOSS,name:'The Thorn King',sprite:'thornking',ai:'boss',scale:1,band:12,kbResist:.9,hp:460,atk:23,def:15,speed:34,
  phaseLine:'You only cut my branches. My roots run deep!',intro:'The whole forest bends to my crown of thorns!',defeat:'The thorns wither... let the forest grow free.',
  fact:F('science','Roses do not really have thorns. Botanists call their sharp points prickles, because they grow from the stem\'s skin, not its wood.'),
  attacks:[
  {name:'thorn blade',state:'attack',kind:'melee',range:52,band:12,cd:2.2,windup:.65,dmg:1.2},
  {name:'royal thrust',state:'attack2',kind:'melee',range:56,band:10,cd:2.6,windup:.65,dmg:1.25},
  {name:'thorn line',state:'special',kind:'line',fx:'fx-earth-spike',count:6,gap:26,radius:13,range:220,cd:4.2,windup:.7,dmg:1.1},
  {name:'bramble field',state:'cast',kind:'aoe',at:'player',fx:'fx-earth-spike',radius:14,count:4,spread:40,range:260,cd:4.6,windup:.7,dmg:1.1,phase:2},
  {name:'thornlings rise',state:'cast',kind:'summon',key:'thornling',count:2,max:3,range:400,cd:11,windup:.8,fx:'fx-portal',phase:2}]},
 'bramblejaw':{name:'Bramblejaw',sprite:'bramblejaw',mini:true,boss:true,hp:230,atk:9,def:3,speed:40,scale:1,ai:'boss',band:10,kbResist:.5,intro:'Nobody gets past my gate! Not even a tiny hero!',defeat:'Ow ow ow! Fine, the gate is yours!',fact:F('science','Brambles like blackberry bushes use their hooked thorns to climb over other plants toward the sunlight.'),half:'Now you made me grumpy!',phaseShift:{at:.5,line:'Now you made me grumpy!',speed:1.15,cd:.85,tint:'#ff6a4a',title:'BRAMBLEJAW GETS GRUMPY'},attacks:[{name:'club smash',state:'attack',kind:'melee',range:70,band:12,cd:2.2,windup:.8,dmg:1.1},{name:'club sweep',state:'attack2',kind:'melee',range:74,band:14,cd:2.8,windup:.85,dmg:1}]},
  'bandit-chief':{name:'Red Hand',sprite:'redhand',boss:true,hp:380,atk:15,def:6,speed:52,scale:1,ai:'boss',band:10,kbResist:.6,
  intro:'Your gold or your... no, just your gold!',defeat:'Fine, fine! Keep your coins. I\'m going straight!',
  fact:F('history','Stories about Robin Hood, an outlaw who robbed the rich, were already being told in England more than 600 years ago.'),
  half:'Okay, okay, no more Mister Nice Bandit!',phaseShift:{at:.5,line:'Okay, okay, no more Mister Nice Bandit!',speed:1.25,cd:.7,tint:'#ff6a4a',title:'RED HAND GETS SERIOUS'},attacks:[
  {name:'quick cut',state:'attack',kind:'melee',range:60,band:10,cd:1.8,windup:.65,dmg:1.1},
  {name:'twin cut',state:'attack2',kind:'melee',range:64,band:10,cd:2.6,windup:.65,dmg:1.25},
  {name:'blade rush',state:'run',kind:'dash',range:260,cd:4.6,windup:.7,dmg:1.2,speed:260,band:12},
  {name:'call the gang',state:'shout',kind:'summon',key:'bandit-thug',count:1,max:2,range:400,cd:10,windup:.7,fx:'fx-portal',phase:2}]},
 'mushroom-lord':{name:'The Mushroom Lord',sprite:'mushlord',boss:true,hp:480,atk:17,def:8,speed:30,scale:1,ai:'boss',band:12,kbResist:.85,weakness:'fire',
  intro:'Shhh. The mire was sleeping. You woke it.',defeat:'Poof... I\'ll grow back after the next rain.',
  fact:F('science','The largest living thing on Earth may be a honey fungus in Oregon that spreads underground across nearly 10 square kilometres.'),
  half:'Spores everywhere! Hold your breath!',phaseShift:{at:.5,line:'Spores everywhere! Hold your breath!',speed:1.2,cd:.7,tint:'#b98aff',title:'THE MIRE BLOOMS'},attacks:[
  {name:'cap slam',state:'attack',kind:'melee',range:42,band:12,cd:2.4,windup:.65,dmg:1.25},
  {name:'spore volley',state:'cast',kind:'projectile',fx:'fx-spore',range:240,cd:3.2,windup:.65,dmg:1,speed:90,count:3,spread:16},
  {name:'spore cloud',state:'attack2',kind:'aoe',at:'self',radius:48,range:56,cd:4.4,windup:.7,dmg:1},
  {name:'sprout sporelings',state:'shout',kind:'summon',key:'sporeling',count:2,max:3,range:400,cd:9,windup:.8,fx:'fx-slime-spawn',phase:2}]},

 /* ---------- Emberkeep (lava) ---------- */
 'dungeon-master':{name:'The Dungeon Master',sprite:'pl-dungeon-master',boss:true,hp:800,atk:28,def:14,speed:40,scale:1,ai:'boss',band:12,kbResist:.85,keep:72,
  intro:'Welcome to my dungeon. Coming in is free. Leaving is not!',defeat:'My keys! Take them... the gate is open.',
  fact:F('history','The word dungeon comes from "donjon", the strong main tower of a castle, not just the prison underneath it.'),
  half:'You want the keys? Come and take them!',phaseShift:{at:.5,line:'You want the keys? Come and take them!',speed:1.2,cd:.7,tint:'#ff8a4a',title:'THE MASTER UNBOUND'},attacks:[
  {name:'flame lash',state:'attack',kind:'melee',range:100,band:12,cd:2.4,windup:.6,dmg:1.2},
  {name:'inferno arc',state:'attack2',kind:'melee',range:100,band:12,cd:3,windup:.65,dmg:1.35},
  {name:'fire fan',state:'attack',kind:'projectile',fx:'fx-fireball',range:260,cd:3.4,windup:.6,dmg:1,speed:115,count:3,spread:16},
  {name:'firefall',state:'special',kind:'aoe',at:'player',fx:'fx-fire-burst',radius:18,count:3,spread:40,range:280,cd:4.5,windup:.7,dmg:1,phase:2},
  {name:'summon guard',state:'cast',kind:'summon',key:'skeleton-warrior',count:1,max:2,range:400,cd:10,windup:.8,fx:'fx-portal',phase:2}]},
 'forge-golem':{name:'The Forge Golem',sprite:'pl-forge-golem',boss:true,hp:860,atk:29,def:17,speed:26,scale:1,ai:'boss',band:14,kbResist:1,weakness:'ice',
  intro:'CLANG! Freshly forged, and still red hot!',defeat:'Cooling... cooling... clunk.',
  fact:F('science','Blacksmiths judge how hot iron is by its glow, from dull red, to orange, to bright yellow, the hottest.'),
  phaseShift:{at:.5,speed:1.2,cd:.7,tint:'#ff8a2a',title:'THE FORGE ROARS'},attacks:[
  {name:'anvil fist',state:'attack',kind:'melee',range:40,band:12,cd:2.4,windup:.65,dmg:1.3},
  {name:'arm cannon',state:'special',kind:'projectile',fx:'fx-golem-arm',range:260,cd:3.4,windup:.6,dmg:1.1,speed:150},
  {name:'forge eruption',state:'cast',kind:'aoe',at:'player',fx:'fx-fire-burst',radius:16,count:3,spread:36,range:280,cd:4,windup:.75,dmg:1.15},
  {name:'core laser',state:'special',kind:'beam',fx:'fx-golem-laser',len:260,band:10,range:260,cd:5,windup:1,dmg:1.6,phase:2}]},
 'fire-wyrm':{name:'Scorchtail the Wyrm',sprite:'pl-scorchtail',boss:true,hp:900,atk:30,def:14,speed:30,scale:1,ai:'boss',band:12,kbResist:1,weakness:'ice',
  intro:'Hssss! These bridges are MY bridges!',defeat:'Hsss... I\'ll slither back under the lava.',
  fact:F('language','"Wyrm" is the Old English word for a serpent or dragon, and it is where our word "worm" comes from.'),
  /* moveset (TRICKY_LEVELS section 4, m3): a dragon over lava bridges. Tail Whip punishes standing behind him, the breath
     sweeps the bridge from far to near, he sinks into the lava and bursts up under a marked spot, and his wings blow the hero
     back. Heroic: the planks he bursts through burn for 4 s. Legendary: he surfaces twice, and the breath sweeps back. */
  half:'Hssss! The lava boils!',phaseShift:{at:.5,line:'Hssss! The lava boils!',speed:1.2,cd:.7,tint:'#ffb03a',title:'SCORCHTAIL BOILS OVER'},attacks:[
  {name:'tail whip',state:'attack',kind:'melee',behind:true,range:62,band:14,cd:2.6,windup:.65,dmg:1.15,label:'TAIL WHIP'},
  {name:'fire-breath arc',state:'special',kind:'sweep',len:150,dur:1,band:8,fx:'fx-col-fire',step:12,from:'far',cd:5,windup:.8,dmg:1.1,recover:.5,label:'FIRE-BREATH ARC',legendary:{back:true}},
  {name:'dive under',state:'cast',kind:'vanish',to:'player',appear:.95,radius:24,out:.35,puff:'fx-fire-burst',bubble:'fx-fire-burst',fx:'fx-molten-spear',range:320,cd:6.5,windup:.7,dmg:1.2,recover:.6,label:'DIVE UNDER',bossOnly:true,
   heroic:{after:{kind:'zone',burn:.35,every:1.2,dur:4,slow:.15,radius:24,tint:'#ff7a2a',fx:'fx-ember',fxs:'burn'}},legendary:{then:'dive under'}},
  {name:'wing gust',state:'attack2',kind:'aoe',at:'front',range:58,radius:40,impact:'fx-dust',push:70,cd:5,windup:.65,dmg:.7,label:'WING GUST'},
  {name:'flame road',state:'cast',kind:'line',fx:'fx-col-fire',count:8,gap:24,radius:13,range:240,cd:4.6,windup:.7,dmg:1.1,phase:2,weight:2,label:'FLAME ROAD'}]},
 'flame-knight':{name:'Sir Cinder',sprite:'pl-sir-cinder',boss:true,hp:850,atk:30,def:14,speed:44,scale:1,ai:'boss',band:10,kbResist:.7,weakness:'ice',
  intro:'En garde! The Flame Knight never retreats!',defeat:'A fair fight. My flame salutes you.',
  fact:F('history','A full suit of plate armour weighed about 15 to 25 kilograms, spread over the whole body, so knights could still run and climb.'),
  /* moveset (m4): a duelling knight in a training yard. En Garde holds a guard that answers a frontal hit with a lunge; a
     perfect roll through that lunge staggers him. Flame Wall runs along the floor (jump it); Drill Call marches two shield
     knights in from the yard's edges. Heroic: his Blazing Arc may feint (half a wind-up, then the full real tell).
     Legendary: Flame Wall chains into Ember Rush. */
  half:'Now my flame burns brightest!',phaseShift:{at:.5,line:'Now my flame burns brightest!',speed:1.25,cd:.7,tint:'#ffb03a',title:'SIR CINDER BLAZES'},attacks:[
  {name:'flame cut',state:'attack',kind:'melee',range:36,band:10,cd:1.9,windup:.6,dmg:1.15},
  {name:'blazing arc',state:'attack2',kind:'melee',range:64,band:14,cd:2.8,windup:.6,dmg:1.3,impact:'fx-slash-fire',impactState:'big',heroic:{feint:true}},
  {name:'en garde',state:'special',kind:'stance',hold:1.2,range:80,riposte:'riposte lunge',cd:8,windup:.6,recover:.8,label:'EN GARDE!',bossOnly:true},
  {name:'riposte lunge',state:'walk',kind:'dash',range:150,speed:270,cd:1,windup:.6,dmg:1.2,band:12,forced:true,stagger:1.4,label:'RIPOSTE!'},
  {name:'flame wall',state:'cast',kind:'wave',shape:'front',speed:115,reach:260,band:16,th:8,fx:'fx-col-fire',range:230,cd:6.5,windup:.7,dmg:1,label:'FLAME WALL',legendary:{then:'ember rush'}},
  {name:'drill call',state:'cast',kind:'summon',key:'skeleton-warrior',spots:'edge',count:2,max:2,range:400,cd:20,windup:.7,fx:'fx-dust',sound:'tell.summon',uses:2,label:'DRILL CALL!',bossOnly:true},
  {name:'ember rush',state:'walk',kind:'dash',range:260,cd:4.5,windup:.7,dmg:1.2,speed:260,band:12,phase:2,stagger:1.2,trail:{fx:'fx-fire-burst',delay:.7,radius:14,dmg:.6},label:'EMBER RUSH'}]},
 'imp-lord':{name:'Vexx, Lord of Imps',sprite:'pl-imp-lord',boss:true,hp:920,atk:31,def:14,speed:30,scale:1,ai:'boss',band:14,kbResist:1,fly:4,weakness:'ice',
  intro:'Vexx is the biggest imp of all! Get them, everyone!',defeat:'Ouch! Imps, run away!',
  fact:F('science','Chains are strong because each link spreads the pull around a loop, which is why bridges and anchors use them.',true),
  phaseShift:{at:.5,speed:1.2,cd:.7,tint:'#ff5a3a',title:'VEXX THROWS A TANTRUM'},attacks:[
  {name:'chain lash',state:'attack',kind:'melee',range:62,band:14,cd:2.6,windup:.7,dmg:1.25},
  {name:'hellfire breath',state:'special',kind:'melee',range:120,band:14,cd:3.6,windup:.75,dmg:1.4},
  {name:'imp swarm',state:'cast',kind:'summon',key:'imp',count:2,max:4,range:400,cd:7,windup:.7,fx:'fx-portal'},
  {name:'fire rain',state:'cast',kind:'aoe',at:'player',fx:'fx-fire-burst',radius:18,count:4,spread:44,range:300,cd:4.4,windup:.75,dmg:1.05,phase:2}]},
 'obsidian-sentinel':{name:'The Obsidian Sentinel',sprite:'pl-obsidian',boss:true,hp:940,atk:31,def:20,speed:30,scale:1,ai:'boss',band:12,kbResist:1,weakness:'storm',
  intro:'None shall pass the black glass halls.',defeat:'My glass is cracked. You may pass.',
  fact:F('science','Obsidian is volcanic glass. It forms when lava cools so fast that its atoms have no time to line up into crystals.'),
  /* moveset (m6): a glass knight. Void Wave is a slash that travels down the hall (jump it); Mirror Guard holds the sword up:
     hits from the front are parried and shots bounce back, so strike from behind or wait for the opening; glass spikes and,
     from half health, a field of shards. Heroic: a wider shard field. Legendary: Mirror Guard chains into Void Wave. */
  half:'The glass sings for me!',phaseShift:{at:.5,line:'The glass sings for me!',speed:1.2,cd:.7,tint:'#c07dff',title:'THE GLASS SINGS'},attacks:[
  {name:'glass blade',state:'attack',kind:'melee',range:56,band:12,cd:2.3,windup:.6,dmg:1.2},
  {name:'void wave',state:'attack2',kind:'wave',shape:'front',speed:150,reach:280,band:14,th:9,fx:'fx-slash-arcane',fxs:'big',range:240,cd:5,windup:.7,dmg:1.15,label:'VOID WAVE'},
  {name:'glass spikes',state:'cast',kind:'line',fx:'fx-glass-spike',count:7,gap:24,radius:13,range:220,cd:4.4,windup:.7,dmg:1.1},
  {name:'mirror guard',state:'special',kind:'stance',reflect:true,hold:1.3,range:200,riposte:'glass blade',cd:8,windup:.6,recover:.9,label:'MIRROR GUARD',bossOnly:true,legendary:{then:'void wave'}},
  {name:'shatter field',state:'attack',kind:'aoe',at:'player',fx:'fx-glass-spike',radius:14,count:4,spread:42,range:260,cd:4.8,windup:.75,dmg:1.1,phase:2,label:'SHATTER FIELD',heroic:{count:6,spread:38}}]},
 'demon-slime':{name:'Moltar, the Forge Ogre',sprite:'pl-demon-slime',boss:true,hp:980,atk:32,def:16,speed:30,scale:1,ai:'boss',band:14,kbResist:1,weakness:'ice',
  intro:'I am the heart of the volcano! Feel the heat!',defeat:'I cool... and crack... and crumble.',
  fact:F('geography','Basalt lava can be about 1,200 degrees Celsius, more than hot enough to melt aluminium.'),
  half:'The volcano answers me!',phaseShift:{at:.5,line:'The volcano answers me!',speed:1.25,cd:.7,dmg:1.1,tint:'#ff7a1a',title:'THE FORGE ERUPTS'},attacks:[
  {name:'cleaver',state:'attack',kind:'melee',range:100,band:14,cd:2.8,windup:.7,dmg:1.3,impact:'fx-dust'},
  {name:'firefall',state:'special',kind:'aoe',at:'player',fx:'fx-flame-pillar',radius:18,count:3,spread:40,range:300,cd:4,windup:.8,dmg:1},
  {name:'hellfire',state:'cast',kind:'projectile',fx:'fx-fireball',range:280,cd:3.2,windup:.65,dmg:1,speed:120,count:2,spread:18},
  {name:'meteor rain',state:'special',kind:'aoe',at:'player',fx:'fx-flame-pillar',radius:18,count:6,spread:70,range:300,cd:5,windup:.85,dmg:1,phase:2}]},
 'cinder-wraith':{name:'The Cinder Wraith',sprite:'pl-cinder-wraith',boss:true,hp:900,atk:30,def:14,speed:34,scale:1,ai:'boss',band:12,kbResist:.9,weakness:'ice',
  intro:'Nothing grows here. Nothing but ash... and me.',defeat:'Blown away... like smoke in the wind.',
  fact:F('geography','Volcanic ash is not soft like ash from a campfire. It is made of tiny, sharp pieces of rock and glass.'),
  /* moveset (mx1): a fire spirit of the ash wastes. Ash Storm darkens the dunes (the hero, two ember braziers and every
     warning stay lit; his ember eyes show where he is); Pillar Form turns him into a slow chasing column of fire, then he
     is exhausted (a long opening); ash ghouls claw up from the dunes. Heroic: a longer storm. Legendary: Pillar Form twice. */
  half:'The ash rises with me!',phaseShift:{at:.5,line:'The ash rises with me!',speed:1.2,cd:.7,tint:'#ff7a3a',title:'THE ASH STORM RISES'},attacks:[
  {name:'burning claws',state:'attack',kind:'melee',range:30,band:10,cd:2.2,windup:.6,dmg:1.2},
  {name:'ash storm',state:'cast',kind:'dark',dur:6,range:400,cd:17,windup:.8,label:'ASH STORM',banner:'THE ASH HIDES HIM!',bossOnly:true,heroic:{dur:8}},
  {name:'pillar form',state:'special',kind:'pillar',dur:3,speed:28,radius:18,every:1.6,maxHits:2,range:220,cd:9,windup:.8,dmg:.7,recover:2,label:'PILLAR FORM',bossOnly:true,legendary:{then:'pillar form',maxHits:1}},
  {name:'hellfire',state:'attack2',kind:'projectile',fx:'fx-hellfire',range:280,cd:3.2,windup:.6,dmg:1.05,speed:120,count:2,spread:14},
  {name:'ash ghouls rise',state:'cast',kind:'summon',key:'ash-ghoul',count:2,max:2,range:400,cd:13,windup:.7,fx:'fx-dust',phase:2,label:'ASH GHOULS RISE'}]},
 /* ---------- Veilmoor (mystic) ---------- */
 'drowned-priest':{name:'The Drowned Priest',sprite:'pl-drowned-priest',boss:true,hp:1000,atk:33,def:15,speed:32,scale:1,ai:'boss',band:12,kbResist:.85,keep:55,weakness:'storm',
  intro:'The tide rises for my shrine. You will sink!',defeat:'The water... goes still.',
  fact:F('geography','The deepest point in the ocean, the Challenger Deep, is nearly 11 kilometres below the surface.'),
  /* moveset (v1): a priestess of the drowned shrine. Tide Ring sends a ring of water out along the floor (jump it); a geyser
     line; from half health High Tide floods the near half of the shrine (slow), and while it is flooded her Undertow pulls
     the hero toward her (walk against it) before a Coral Sweep; wisps rise from the water. Heroic: two rings. Legendary: the
     tide is high from the start. */
  half:'The tide turns!',phaseShift:{at:.5,line:'The tide turns!',speed:1.2,cd:.7,tint:'#5fe8ff',title:'THE TIDE TURNS'},attacks:[
  {name:'coral sweep',state:'attack',kind:'melee',range:62,band:12,cd:2.6,windup:.65,dmg:1.25},
  {name:'tide ring',state:'special',kind:'wave',shape:'ring',speed:95,reach:190,th:8,fx:'fx-col-ice',range:200,cd:6.5,windup:.75,dmg:1,label:'TIDE RING',heroic:{count:2,gap:.8,dmg:.85}},
  {name:'geyser line',state:'attack2',kind:'line',fx:'fx-geyser',count:5,gap:28,radius:15,range:220,cd:5,windup:.7,dmg:1.05},
  {name:'high tide',state:'cast',kind:'zone',area:'lower',dur:12,slow:.35,flood:true,tint:'#3f9fe0',fx:'fx-spark-ice',range:400,cd:16,windup:.8,phase:2,label:'HIGH TIDE',banner:'THE TIDE RISES!',bossOnly:true,legendary:{phase:0}},
  {name:'undertow',state:'cast',kind:'undertow',dur:1.8,pull:34,range:260,cd:8,windup:.7,then:'coral sweep',label:'UNDERTOW',bossOnly:true},
  {name:'call the wisps',state:'cast',kind:'summon',key:'wisp',count:2,max:3,range:400,cd:10,windup:.7,fx:'fx-geyser',label:'CALL THE WISPS'}]},
 'wisp-mother':{name:'The Wisp Mother',sprite:'pl-wisp-mother',boss:true,hp:1020,atk:33,def:15,speed:36,scale:1,ai:'boss',band:10,kbResist:.85,weakness:'holy',
  intro:'My little lights led you here. How sweet.',defeat:'Fly free, my little lights...',
  fact:F('science','Fireflies make "cold light": their glow gives off almost no heat at all.'),
  /* moveset (v2): the fen's lying lights. Lantern Brood sets three lantern wisps circling her, each one shielding a part of
     every hit until it is popped; Mist Veil fades her out and back beside a lantern; Will-o'-Lure sends a light drifting out
     that bursts into marsh gas where it stops; Marsh Wind blows the hero back; from half health, grasping pale lights.
     Heroic: the brood comes back once. Legendary: two lures at once. */
  half:'Shine, my little lights!',phaseShift:{at:.5,line:'Shine, my little lights!',speed:1.2,cd:.7,tint:'#9ff4ff',title:'THE FEN LIGHTS UP'},attacks:[
  {name:'pale arc',state:'attack',kind:'melee',range:90,band:10,cd:2.2,windup:.6,dmg:1.2},
  {name:'lantern brood',state:'cast',kind:'summon',key:'lantern-wisp',count:3,max:3,link:true,orbit:true,linkColor:'#bff6ff',range:400,cd:14,windup:.75,fx:'fx-spark-holy',fxs:'twinkle',uses:1,label:'LANTERN BROOD',banner:'POP THE LANTERNS!',bossOnly:true,heroic:{uses:2}},
  {name:'mist veil',state:'special',kind:'vanish',to:'lantern',appear:.8,radius:24,out:.35,puff:'fx-aura-ice',fx:'fx-col-holy',range:320,cd:6.5,windup:.65,dmg:1.1,recover:.5,label:'MIST VEIL',bossOnly:true},
  {name:'marsh wind',state:'attack2',kind:'aoe',at:'player',fx:'fx-tornado',radius:18,range:300,cd:4.2,windup:.65,dmg:.9,push:60},
  {name:'will-o\'-lure',state:'cast',kind:'lure',drift:1.2,fuse:1,radius:20,fx:'fx-marsh-gas',lightFx:'fx-spark-holy',range:300,cd:5.5,windup:.6,dmg:1.15,label:'WILL-O\'-LURE',legendary:{count:2,spread:56}},
  {name:'grasping lights',state:'special',kind:'aoe',at:'player',fx:'fx-pale-light',radius:16,count:3,spread:36,range:300,cd:4.6,windup:.65,dmg:1.15,phase:2,label:'GRASPING LIGHTS'}]},
 'shadow-twin':{name:'Your Shadow',sprite:'pl-shadow-twin',boss:true,hp:1000,atk:34,def:15,speed:56,scale:1,ai:'boss',band:10,kbResist:.6,weakness:'holy',
  intro:'Every move you make, I make too.',defeat:'You beat... yourself?',
  fact:F('science','Your shadow is longest early in the morning and late in the evening, when the Sun is low in the sky.'),
  /* moveset (v3): the hero's dark mirror. Echo repeats the shape of the hero's last ability (the same one twice in a row makes
     it stronger: mix up your powers); Shadow Step dashes through the hero and its afterimages burst a moment later; from half
     health Mirror Split adds a copy that casts no floor shadow. Heroic: Echo aims where the hero last rolled. Legendary: two
     copies. */
  half:'Now there are more of me!',phaseShift:{at:.5,line:'Now there are more of me!',speed:1.25,cd:.7,tint:'#a07dff',title:'THE SHADOW GROWS'},attacks:[
  {name:'mirror slash',state:'attack',kind:'melee',range:70,band:10,cd:1.8,windup:.6,dmg:1.15},
  {name:'echo',state:'cast',kind:'echo',range:300,cd:6.5,windup:.9,dmg:1.05,recover:.9,label:'ECHO',heroic:{lead:true}},
  {name:'shadow step',state:'walk',kind:'dash',range:170,cd:6,windup:.65,dmg:1.1,speed:280,band:12,trail:{fx:'fx-col-shadow',delay:1,radius:16,dmg:.85},label:'SHADOW STEP'},
  {name:'shadow flame',state:'special',kind:'melee',range:64,band:14,impact:'fx-aura-shadow',cd:4.5,windup:.7,dmg:1.3,label:'SHADOW FLAME'},
  {name:'mirror split',state:'attack2',kind:'split',count:1,hp:.05,fx:'fx-aura-shadow',range:400,cd:18,windup:.8,phase:2,label:'MIRROR SPLIT',banner:'ONLY THE REAL ONE HAS A SHADOW!',bossOnly:true,legendary:{count:2,max:2}}]},
 'crystal-golem':{name:'The Crystal Golem',sprite:'pl-crystal-golem',boss:true,hp:1000,atk:33,def:21,speed:26,scale:1,ai:'boss',band:14,kbResist:1,weakness:'storm',
  intro:'A fallen star made me. I will shine forever!',defeat:'Shattered... into a thousand sparkles.',
  fact:F('science','Quartz is one of the most common minerals in Earth\'s crust. Most of the sand on beaches is made of tiny bits of it.'),
  /* moveset (v4): a golem of fallen-star crystal in the starfall ruins. Crystal Ram charges down the floor and gets stuck if it
     hits the arena wall (bait it); Starfall drops stars on marked spots; Prism Pylons rise at the arena's sides and shield him
     until they are shattered (3 plain hits or 1 ability each); a run of quick hits makes his crystals flare into a Shard
     Burst (stops button-mashing); from half health Star Form leaves crystal ground that slows behind him. Heroic: the pylons
     come back once. Legendary: Starfall chains into Crystal Ram. */
  half:'The stars answer me!',phaseShift:{at:.5,line:'The stars answer me!',speed:1.2,cd:.7,tint:'#d29fff',title:'THE STARLIGHT FLARES',trail:{every:.7,dur:3,slow:.3,radius:16,fx:'fx-spark-arcane',tint:'#c49bff'}},attacks:[
  {name:'crystal smash',state:'attack',kind:'melee',range:50,band:12,cd:2.4,windup:.6,dmg:1.25},
  {name:'crystal ram',state:'walk',kind:'dash',range:240,speed:230,cd:4.4,windup:.75,dmg:1.25,band:14,bonk:1.8,label:'CRYSTAL RAM'},
  {name:'crystal spikes',state:'attack2',kind:'line',fx:'fx-crystal-spike',count:6,gap:24,radius:12,range:200,cd:4,windup:.7,dmg:1.1},
  {name:'starfall',state:'cast',kind:'aoe',at:'player',fx:'fx-bolt-holy',hs:'blast',fall:true,fallFx:'fx-bolt-holy',delay:.6,count:3,spread:46,radius:16,range:300,cd:5,windup:.75,dmg:1.05,label:'STARFALL',legendary:{then:'crystal ram'}},
  {name:'prism pylons',state:'special',kind:'summon',key:'prism-pylon',spots:'sides',count:2,max:2,link:true,linkColor:'#e2c4ff',range:400,cd:20,windup:.8,fx:'fx-aura-arcane',uses:1,label:'PRISM PYLONS',banner:'BREAK THE PYLONS!',bossOnly:true,heroic:{uses:2},legendary:{uses:1}},
  {name:'shard burst',state:'cast',kind:'aoe',at:'self',radius:54,impact:'fx-aura-ice',cd:6,windup:.7,dmg:1.1,forced:true,onMash:{hits:6,window:2.2},label:'SHARD BURST'}]},
 lich:{name:'The Choir Lich',sprite:'pl-choir-lich',boss:true,hp:1080,atk:34,def:15,speed:30,scale:1,ai:'boss',band:12,kbResist:.85,keep:60,weakness:'fire',
  intro:'My choir needs one more voice. Yours!',defeat:'The song... is over.',
  fact:F('science','Sound is a vibration. A choir makes the air vibrate, and that makes your eardrums vibrate too, which is how you hear.'),
  phaseShift:{at:.5,speed:1.2,cd:.7,tint:'#8ff0ff',title:'THE CHOIR CRESCENDO'},attacks:[
  {name:'staff strike',state:'attack',kind:'melee',range:80,band:12,cd:2.6,windup:.6,dmg:1.15},
  {name:'frost nova',state:'attack',kind:'melee',range:84,band:12,cd:3.4,windup:.7,dmg:1.35},
  {name:'frost seeker',state:'special',kind:'projectile',fx:'fx-dm-orb-blue',range:260,cd:3.4,windup:.6,dmg:1.05,speed:80,homing:1.6},
  {name:'ice spikes',state:'cast',kind:'line',fx:'fx-ice-spike',count:6,gap:24,radius:12,range:200,cd:4.2,windup:.65,dmg:1.1},
  {name:'raise the choir',state:'cast',kind:'summon',key:'skeleton-mage',count:1,max:2,range:400,cd:11,windup:.8,fx:'fx-portal',phase:2}]},
 'void-knight':{name:'The Void Knight',sprite:'pl-void-knight',boss:true,hp:1000,atk:35,def:17,speed:34,scale:1,ai:'boss',band:12,kbResist:.95,weakness:'holy',
  intro:'Beyond this gate is the deep. I am its keeper.',defeat:'The gate... is yours to open.',
  fact:F('science','Space is almost empty, with no air to carry sound, so space is completely silent.'),
  /* moveset (v6): the gate's keeper. Rift Step goes into one portal and out of another behind the hero (Heroic: a second,
     dimmer exit; the brighter one is real); Star Cape drops stars in a cross (the gaps are safe); Gate Guard holds his sword
     across: a frontal hit is answered by a Void Sweep; from half health Crystal Blade slams a long line of arcane light, and
     shades come through the gate (the only boss that keeps portals: it is the Veil Gate). Legendary: Rift Step chains into
     Crystal Blade. */
  half:'The void opens!',phaseShift:{at:.5,line:'The void opens!',speed:1.2,cd:.7,tint:'#b46bff',title:'THE VOID OPENS'},attacks:[
  {name:'void cut',state:'attack',kind:'melee',range:74,band:12,cd:2.2,windup:.6,dmg:1.2},
  {name:'void sweep',state:'attack2',kind:'melee',range:82,band:14,cd:1,windup:.65,dmg:1.3,impact:'fx-slash-arcane',impactState:'big',forced:true,label:'VOID SWEEP'},
  {name:'rift step',state:'cast',kind:'vanish',to:'behind',offset:40,appear:.8,radius:26,out:.35,puff:'fx-portal',gate:'fx-portal',impact:'fx-aura-arcane',range:320,cd:7,windup:.65,dmg:1.2,recover:.5,label:'RIFT STEP',bossOnly:true,heroic:{decoys:1,cd:8.5},legendary:{then:'crystal blade'}},
  {name:'star cape',state:'special',kind:'aoe',at:'player',pattern:'cross',fx:'fx-bolt-arcane',hs:'blast',fall:true,fallFx:'fx-bolt-arcane',delay:.5,count:5,spread:42,radius:15,range:300,cd:5,windup:.75,dmg:1.05,label:'STAR CAPE'},
  {name:'gate guard',state:'idle',kind:'stance',hold:1.3,range:90,riposte:'void sweep',cd:9,windup:.6,recover:.8,label:'GATE GUARD',bossOnly:true},
  {name:'crystal blade',state:'special',kind:'line',fx:'fx-col-arcane',count:8,gap:22,radius:12,range:240,cd:4.6,windup:.75,dmg:1.2,phase:2,label:'CRYSTAL BLADE'},
  {name:'call the shades',state:'cast',kind:'summon',key:'shade',count:1,max:2,range:400,cd:10,windup:.7,fx:'fx-portal',phase:2}]},
 'moth-queen':{name:'The Moth Queen',sprite:'pl-moth-queen',boss:true,hp:1000,atk:33,def:14,speed:46,scale:1,ai:'boss',band:12,kbResist:.8,fly:24,weakness:'fire',
  intro:'Come into the moonlight, little hero...',defeat:'The moon... is setting...',
  fact:F('science','Adult luna moths have no mouths. They live for only about a week and never eat at all.'),
  phaseShift:{at:.5,speed:1.25,cd:.7,tint:'#e6b8ff',title:'THE QUEEN TAKES WING'},attacks:[
  {name:'wing swoop',state:'attack',kind:'melee',range:48,band:12,cd:2.2,windup:.6,dmg:1.2},
  {name:'moon dust',state:'attack',kind:'projectile',fx:'fx-eye-bolt',range:260,cd:3.2,windup:.6,dmg:1,speed:100,count:3,spread:16},
  {name:'night wind',state:'special',kind:'aoe',at:'player',fx:'fx-tornado',radius:16,count:2,spread:44,range:300,cd:4.4,windup:.7,dmg:1.15},
  {name:'little lights',state:'cast',kind:'summon',key:'wisp',count:2,max:3,range:400,cd:9,windup:.7,fx:'fx-portal',phase:2}]},
 cthulhu:{name:'The Sleeper in the Deep',sprite:'pl-sleeper',boss:true,hp:1200,atk:36,def:18,speed:30,scale:1,ai:'boss',band:14,kbResist:1,weakness:'holy',
  intro:'You woke me from a thousand-year dream.',defeat:'Back... to sleep... in the deep...',
  fact:F('science','The colossal squid has the biggest eyes of any known animal, each about the size of a football.'),
  /* moveset (v7, the final exam): Tentacle Grab bursts from a marked spot, drags the hero toward him and holds (roll out);
     Ink Darkness puts out the light but the hero's and two lanterns'; Abyss Wave sweeps a beam across the floor; from half
     health Deep Dive and the Dream Echoes: the signature moves of the other chapters' last bosses (the Thorn King's thorn
     line, the Demon's falling meteors, the Drowned Priest's tide ring) in turn. Heroic: grabs in pairs. Legendary: the wave
     sweeps back again. */
  half:'Now you will see me truly awake!',phaseShift:{at:.5,line:'Now you will see me truly awake!',state:'fly',speed:1.3,cd:.65,dmg:1.15,tint:'#6dff8a',title:'THE SLEEPER WAKES'},attacks:[
  {name:'tentacle lash',state:'attack',kind:'melee',range:90,band:12,cd:2.6,windup:.65,dmg:1.25},
  {name:'tentacle grab',state:'attack2',kind:'aoe',at:'player',fx:'fx-tentacle',radius:16,range:300,cd:5.2,windup:.75,dmg:.9,pull:40,hold:.8,label:'TENTACLE GRAB',heroic:{count:2,spread:50}},
  {name:'ink darkness',state:'cast',kind:'dark',dur:6,eye:'#7dff9a',range:400,cd:18,windup:.8,label:'INK DARKNESS',banner:'STAY IN THE LIGHT!',bossOnly:true},
  {name:'abyss wave',state:'special',kind:'sweep',len:200,dur:1,band:8,fx:'fx-abyss-beam',from:'far',cd:4.4,windup:.8,dmg:1.3,label:'ABYSS WAVE',legendary:{back:true}},
  {name:'deep dive',state:'cast',kind:'leap',radius:40,range:220,cd:5,windup:.85,dmg:1.3,air:.9,impact:'fx-explosion',phase:2},
  {name:'dream echoes',state:'attack2',kind:'pick',label:'DREAM ECHOES',range:300,cd:5,windup:.8,phase:2,options:[
   {kind:'line',state:'attack2',fx:'fx-earth-spike',count:7,gap:24,radius:13,range:240,windup:.8,dmg:1.15,label:'DREAM ECHO: THORN LINE'},
   {kind:'aoe',at:'player',state:'cast',fx:'fx-explosion',fall:true,fallFx:'fx-fireball',delay:.6,count:3,spread:50,radius:18,range:300,windup:.8,dmg:1.1,label:'DREAM ECHO: METEORS'},
   {kind:'wave',shape:'ring',state:'special',fx:'fx-col-ice',speed:95,reach:190,th:8,range:200,windup:.8,dmg:1.15,label:'DREAM ECHO: TIDE RING'}]}]},
 /* ---------- boss helpers (15 Oct, TRICKY_LEVELS section 4): raised by a boss, never placed in a wave ---------- */
 'lantern-wisp':{name:'Lantern Wisp',sprite:'pl-wisp',hp:30,atk:9,def:0,speed:60,scale:1,ai:'orbit',band:9,fly:22,linkShare:.2,helper:true,attacks:[melee({name:'flicker',range:26,cd:3,windup:.6,dmg:.5})],
  fact:F('science','A will-o\'-the-wisp is a faint light seen over marshes at night. Many scientists think burning marsh gas, such as methane, causes some of them.',true)},
 'prism-pylon':{name:'Prism Pylon',sprite:'pl-prism-pylon',hp:400,atk:0,def:0,speed:0,scale:1,ai:'still',band:9,kbResist:1,propHits:3,linkShare:.2,helper:true,prop:true,attacks:[],
  fact:F('science','A quartz crystal vibrates at a very steady rate when electricity passes through it, which is how quartz watches keep time.')},
 /* ---------- chapter mini-bosses (24 Oct): Emberkeep and the Veilmoor had Elderwood's bosses as their elites. Each new one keeps
    the stats and move pattern of the boss it replaces (balance unchanged) with art, names and moves of its own chapter. Drawn by
    PixelLab (art/enemies/<key>/pixellab.json); fought as elites and Run Draft mini-bosses, never as a level's boss. ---------- */
 'magma-brute':{name:'The Magma Brute',sprite:'magma-brute',boss:true,hp:440,atk:22,def:16,speed:24,scale:1,eliteDraw:0.78,ai:'boss',band:14,kbResist:1,weakness:'storm',drop:'obsidian-chip',
  intro:'The mountain made me. Now it sends me.',defeat:'Cooling... cracking... going dark.',
  fact:F('science','Obsidian is natural volcanic glass. It forms when lava cools so fast that its crystals have no time to grow.'),
  half:'The lava in me boils over!',phaseShift:{at:.5,line:'The lava in me boils over!',speed:1.2,cd:.75,tint:'#ff8a3a',title:'THE BRUTE BOILS OVER'},attacks:[
  {name:'hammer slam',state:'attack',kind:'aoe',at:'front',radius:34,range:60,cd:2.6,windup:.7,dmg:1.25,impact:'fx-dust',recover:.7},
  {name:'basalt sweep',state:'attack2',kind:'melee',range:60,band:12,cd:3,windup:.7,dmg:1.3},
  {name:'obsidian skin',state:'attack2',kind:'buff',def:2,time:4,range:400,cd:12,windup:.6},
  {name:'lava rain',state:'attack',kind:'aoe',at:'player',fx:'fx-molten-spear',radius:14,count:3,spread:36,range:260,cd:4.6,windup:.75,dmg:1.1,phase:2}]},
 'imp-warchief':{name:'The Imp Warchief',sprite:'imp-warchief',boss:true,hp:440,atk:17,def:9,speed:36,scale:1,eliteDraw:0.78,ai:'boss',band:12,kbResist:.85,drop:'imp-horn',
  intro:'Vexx sent me to teach you some manners!',defeat:'Tell Vexx... I want a day off.',
  fact:F('language','In Old English an "impa" was a young plant shoot. Centuries later "imp" came to mean a small, naughty demon.'),
  half:'Imps, watch your chief CHARGE!',phaseShift:{at:.5,line:'Imps, watch your chief CHARGE!',speed:1.3,cd:.7,tint:'#ff5530',title:'THE WARCHIEF CHARGES'},attacks:[
  {name:'fork thrust',state:'attack',kind:'melee',range:68,band:12,cd:2.4,windup:.65,dmg:1.25},
  {name:'imp rush',state:'walk',kind:'dash',range:300,cd:5.5,windup:.9,dmg:1.4,speed:240,band:14},
  {name:'fork quake',state:'attack2',kind:'aoe',at:'front',radius:40,range:90,cd:4.2,windup:.7,dmg:1.15,impact:'fx-dust'},
  {name:'war charge',state:'walk',kind:'dash',range:300,cd:3.6,windup:.7,dmg:1.3,speed:280,band:14,phase:2}]},
 'veil-seer':{name:'The Veil Seer',sprite:'veil-seer',boss:true,hp:520,atk:19,def:9,speed:30,scale:1,eliteDraw:0.81,ai:'boss',band:12,kbResist:.8,keep:60,
  intro:'My lantern saw you coming, little moth.',defeat:'The light... goes out...',
  fact:F('science','A 2024 study suggests moths circle lamps because they try to keep their backs toward the brightest light, which is usually the sky.'),
  half:'Faithful, come to the light!',phaseShift:{at:.5,line:'Faithful, come to the light!',speed:1.15,cd:.7,tint:'#c9a8ff',title:'THE LANTERN FLARES'},attacks:[
  {name:'lantern sweep',state:'attack',kind:'melee',range:56,band:12,cd:2.6,windup:.65,dmg:1.1},
  {name:'moonbeam',state:'attack2',kind:'aoe',at:'player',fx:'fx-pale-light',radius:22,range:260,cd:3.4,windup:.65,dmg:1.15},
  {name:'crystal path',state:'attack2',kind:'line',fx:'fx-crystal-spike',count:6,gap:24,radius:12,range:200,cd:4.5,windup:.7,dmg:1.1},
  {name:'call the faithful',state:'attack2',kind:'summon',key:'cultist',count:1,max:2,range:400,cd:11,windup:.8,fx:'fx-portal',phase:2}]},
 'prism-sentinel':{name:'The Prism Sentinel',sprite:'prism-sentinel',boss:true,hp:440,atk:22,def:16,speed:24,scale:1,eliteDraw:0.76,ai:'boss',band:14,kbResist:1,weakness:'storm',
  intro:'The star fell. I stayed. You go.',defeat:'Shattered... into... light.',
  fact:F('science','A prism splits white light into a rainbow, because each colour bends by a slightly different amount as it passes through.'),
  half:'My crystals sing! Hear them break!',phaseShift:{at:.5,line:'My crystals sing! Hear them break!',speed:1.2,cd:.75,tint:'#d9b8ff',title:'THE PRISM SINGS'},attacks:[
  {name:'crystal slam',state:'attack',kind:'aoe',at:'front',radius:34,range:60,cd:2.6,windup:.7,dmg:1.25,impact:'fx-dust',recover:.7},
  {name:'shard sweep',state:'attack2',kind:'melee',range:60,band:12,cd:3,windup:.7,dmg:1.3},
  {name:'prism skin',state:'attack2',kind:'buff',def:2,time:4,range:400,cd:12,windup:.6},
  {name:'falling shards',state:'attack',kind:'aoe',at:'player',fx:'fx-glass-spike',radius:14,count:3,spread:36,range:260,cd:4.6,windup:.75,dmg:1.1,phase:2}]},
 'abyss-herald':{name:'The Abyss Herald',sprite:'abyss-herald',boss:true,hp:400,atk:18,def:10,speed:32,scale:1,eliteDraw:0.85,ai:'boss',band:12,kbResist:.9,weakness:'holy',
  intro:'The Sleeper dreams of you. I came to wake you.',defeat:'Back... to the deep... with me.',
  fact:F('geography','The deepest known place in the ocean, the Challenger Deep in the Mariana Trench, is nearly 11 kilometres down.'),
  half:'The tide is turning, little one!',phaseShift:{at:.5,line:'The tide is turning, little one!',speed:1.2,cd:.7,tint:'#7dffd8',title:'THE DEEP RISES'},attacks:[
  {name:'abyss claw',state:'attack',kind:'melee',range:30,band:10,cd:2.2,windup:.65,dmg:1.2},
  {name:'undertow',state:'attack2',kind:'aoe',at:'self',radius:44,range:50,cd:4,windup:.7,dmg:1.3,impact:'fx-dust'},
  {name:'deep tentacles',state:'attack',kind:'aoe',at:'player',fx:'fx-tentacle',radius:16,count:3,spread:34,range:260,cd:4.5,windup:.75,dmg:1},
  {name:'raise the drowned',state:'attack2',kind:'summon',key:'drowned-thrall',count:2,max:3,range:400,cd:10,windup:.8,fx:'fx-portal'},
  {name:'grasping dark',state:'attack',kind:'aoe',at:'player',fx:'fx-dark-hand',radius:16,count:3,spread:34,range:280,cd:4.5,windup:.65,dmg:1.1,phase:2}]},
 /* round 2 (24 Oct): the Veil Gate (v6) and the Sleeper's shore (v7) fought Emberkeep's Dungeon Master and Demon of the Forge as
    elites. These two keep those bosses' numbers and move pattern exactly (balance unchanged); only the look, names and effects
    are the Veilmoor's. */
 'veil-jailer':{name:'The Veil Jailer',sprite:'veil-jailer',boss:true,hp:800,atk:28,def:14,speed:40,scale:1,eliteDraw:0.77,ai:'boss',band:12,kbResist:.85,keep:72,
  intro:'Nobody passes the Veil Gate. I hold every key.',defeat:'My keys... they slip... away...',
  fact:F('language','The word "jail" comes from an old French word for a cage, which grew out of the Latin "cavea", a cage or enclosure.'),
  half:'Prisoners! Out of your cells!',phaseShift:{at:.5,line:'Prisoners! Out of your cells!',speed:1.2,cd:.7,tint:'#8fd8ff',title:'THE GATE OPENS'},attacks:[
  {name:'chain lash',state:'attack',kind:'melee',range:100,band:12,cd:2.4,windup:.6,dmg:1.2},
  {name:'chain sweep',state:'attack2',kind:'melee',range:100,band:12,cd:3,windup:.65,dmg:1.35},
  {name:'soul fan',state:'attack',kind:'projectile',fx:'fx-cultist-bolt',range:260,cd:3.4,windup:.6,dmg:1,speed:115,count:3,spread:16},
  {name:'falling stars',state:'special',kind:'aoe',at:'player',fx:'fx-crystal-spike',radius:18,count:3,spread:40,range:280,cd:4.5,windup:.7,dmg:1,phase:2},
  {name:'free the prisoners',state:'cast',kind:'summon',key:'skeleton-warrior',count:1,max:2,range:400,cd:10,windup:.8,fx:'fx-portal',phase:2}]},
 'trench-hulk':{name:'The Trench Hulk',sprite:'trench-hulk',boss:true,hp:980,atk:32,def:16,speed:30,scale:1,eliteDraw:0.78,ai:'boss',band:14,kbResist:1,weakness:'ice',
  intro:'Up from the deep, and hungry. You will do.',defeat:'Back down... to the dark water...',
  fact:F('science','Many deep-sea anglerfish carry a glowing lure on their heads. In many of them the light is made by bacteria living inside the lure.'),
  half:'The deep comes with me!',phaseShift:{at:.5,line:'The deep comes with me!',speed:1.25,cd:.7,dmg:1.1,tint:'#5fe0d0',title:'THE TRENCH RISES'},attacks:[
  {name:'anchor smash',state:'attack',kind:'melee',range:100,band:14,cd:2.8,windup:.7,dmg:1.3,impact:'fx-dust'},
  {name:'geysers',state:'special',kind:'aoe',at:'player',fx:'fx-geyser',radius:18,count:3,spread:40,range:300,cd:4,windup:.8,dmg:1},
  {name:'abyss orbs',state:'cast',kind:'projectile',fx:'fx-dm-orb-blue',range:280,cd:3.2,windup:.65,dmg:1,speed:120,count:2,spread:18},
  {name:'tidal rain',state:'special',kind:'aoe',at:'player',fx:'fx-geyser',radius:18,count:6,spread:70,range:300,cd:5,windup:.85,dmg:1,phase:2}]}
};
/* Baked bosses no level uses yet, for later chapters. */
export const SPARE_BOSSES=[];
/* Every atlas an enemy type draws: its own sprite plus the fx its attacks fire. Levels can preload these at level start. */
export function enemyAtlases(key,seen=new Set()){const d=ENEMY_TYPES[key];if(!d||seen.has(key))return[];seen.add(key);const s=new Set(d.sprite?[d.sprite]:[]);
 for(const a of d.attacks||[]){if(a.fx)s.add(a.fx);if(a.kind==='summon')for(const id of enemyAtlases(a.key,seen))s.add(id);}return [...s];}
/* A fresh actor (tests and tools; the game spawns through game/roster.js makeEnemy and World.spawn). */
export function makeEnemy(key,x,y,extra={}){const d=ENEMY_TYPES[key];if(!d)throw new Error('unknown enemy '+key);
 return {...d,key,x,y,z:0,hp:d.hp,maxHp:d.hp,facing:-1,attack:0,flash:0,wind:0,cool:1,inv:0,statusTime:0,exposed:0,marked:0,animAge:0,walkAge:0,
  phase:d.sprite?0:1,attackCount:0,baseDef:d.def,entered:true,...extra};}
/* oct24-ember-finale (playtest ch2 E5): earlier Emberkeep bosses fought as a level's mini-boss (levels.js mini, wave elites and Run
   Draft minis, never Legendary echoes) take the health, attack and defence of the chapter mini whose slot they fill, so a
   returning boss is no tougher than the Magma Brute or the Imp Warchief it replaces (roster.js entryEnemy) */
export const BOSS_AS_MINI={'dungeon-master':'imp-warchief','forge-golem':'magma-brute'};
