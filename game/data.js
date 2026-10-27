/* One display name per subject (25 Oct): every screen reads SUBJECTS[id].name; ids and save keys are unchanged. */
export const SUBJECTS={math:{name:'Math',color:'#6b9eff',stat:'Magic'},cs:{name:'Coding',color:'#74dba4',stat:'Strength'},science:{name:'Science',color:'#b28bec',stat:'Magic'},geography:{name:'Geography',color:'#67d6ce',stat:'Health'},history:{name:'History',color:'#eaae65',stat:'Defence'},language:{name:'English',color:'#e78ca9',stat:'Mana'},finance:{name:'Money',color:'#eed17e',stat:'Cooldown reduction'}};
export const LEVELS=['Middle School','High School','College'];
export const CLASSES={
warrior:{name:'Warrior',color:'#bacbdc',hp:140,mp:40,atk:22,def:14,mag:6,speed:62,crit:.06,resource:'Stamina',signature:'Momentum',mechanic:'momentum',blurb:'Stay close. Build Momentum with each hit, then spend it in a crushing blow.',weapon:'sword'},
mage:{name:'Mage',color:'#aa92ff',hp:125,mp:120,atk:9,def:12,mag:26,speed:66,crit:.06,resource:'Mana',signature:'Arcane Flow',mechanic:'flow',blurb:'Charge spells with Ember Dart. Spend Arcane Flow in a storm of fire.',weapon:'staff',ranged:true},
rogue:{name:'Rogue',color:'#ca84df',hp:100,mp:60,atk:20,def:8,mag:10,speed:78,crit:.16,resource:'Energy',signature:'Exposure',mechanic:'exposure',blurb:'Expose a target with Backstab. Strike fast, vanish, and finish the job.',weapon:'dagger'},
ranger:{name:'Ranger',color:'#7bd39b',hp:120,mp:70,atk:19,def:11,mag:12,speed:72,crit:.1,resource:'Focus',signature:'Hunter’s Mark',mechanic:'mark',blurb:'Fight at a distance. Control the field with traps and precise arrows.',weapon:'bow',ranged:true},
paladin:{name:'Paladin',color:'#f1cd72',hp:150,mp:80,atk:18,def:18,mag:16,speed:58,crit:.06,resource:'Mana',signature:'Divine Guard',mechanic:'guard',blurb:'Absorb damage in your shield. Return it as the light of dawn.',weapon:'hammer'},
berserker:{name:'Berserker',color:'#e88369',hp:130,mp:50,atk:26,def:10,mag:6,speed:70,crit:.08,resource:'Fury',signature:'Rage',mechanic:'rage',blurb:'Missing health fuels your power. Commit to the fight and embrace the risk.',weapon:'axe'},
summoner:{name:'Summoner',color:'#6ad7cc',hp:125,mp:100,atk:11,def:12,mag:23,speed:64,crit:.06,resource:'Mana',signature:'Totems',mechanic:'totems',blurb:'Plant spirit totems. Shape a battlefield where the ancestors fight with you.',weapon:'focus',ranged:true}};
// appearance and weapon are data, not inferred from the name. Renaming an enemy
// used to change how it was drawn, and 'Bone Archer' matched the Archer rule only
// by accident of wording. weakness drives elemental damage bonuses.
export const ENEMIES=[
 {name:'Goblin',hp:34,atk:8,def:2,speed:46,behavior:'chase',cd:1.4,windup:.7,color:'#99bd65',appearance:'goblin',weapon:'dagger'},
 {name:'Slime',hp:26,atk:6,def:0,speed:30,behavior:'hop',cd:1.8,windup:.8,color:'#69c297',appearance:'slime',weapon:null},
 {name:'Frost Slime',hp:40,atk:9,def:3,speed:26,behavior:'hop',cd:1.6,windup:.65,color:'#95d7eb',appearance:'slime',variant:'frost',weapon:null,weakness:'fire',weaknessMult:1.4},
 {name:'Skeleton',hp:30,atk:10,def:4,speed:40,behavior:'chase',cd:1.2,windup:.55,color:'#d6d2b9',appearance:'skeleton',weapon:'dagger'},
 {name:'Bone Archer',hp:24,atk:9,def:2,speed:34,behavior:'ranged',cd:2.2,windup:.8,color:'#c4c3b4',appearance:'skeleton',weapon:'bow'},
 {name:'Root Brute',hp:115,atk:22,def:9,speed:25,behavior:'chase',cd:2,windup:1.1,color:'#ac8961',scale:1.5,appearance:'brute',weapon:'axe'}];
// The boss was defined inline inside spawnWave. Phase stats live together here.
/* Phase two's health is a share of that fight's phase-one health (tier, difficulty and level ramp included), not a flat number:
   a flat 570 fell in about 3 s on every tier (playtest oct24-late). Higher tiers retain 30%; Normal uses 45% for a roughly 15-second transformation (oct24-tune). */
export const PHASE2_SHARE=.3,NORMAL_PHASE2_SHARE=.45,phase2Hp=(p1,tier='normal')=>Math.max(1,Math.round((+p1||0)*(tier==='normal'?NORMAL_PHASE2_SHARE:PHASE2_SHARE)));
export const BOSS={name:'The Thorn King',hp:460,atk:26,def:15,speed:25,behavior:'chase',cd:2.5,windup:1.1,color:'#b6996d',scale:2,weapon:'axe',appearance:'king',boss:true,
 phase2:{speed:34,atk:30,windup:.85,cd:2,color:'#77b6a6'}};
export const CONTRACTS=[{name:'Whispers in the Wood',zone:'forest',description:'Learn the forest’s rhythm. Five waves, beginning with a single goblin.',waves:[[0],[0,1],[0,4,1],[5,2],[0,3,4,5]],reward:100},{name:'The Broken Gate',zone:'castle',description:'Cross the old fortifications. Skeletons guard the road to the throne.',waves:[[3,3,4],[2,3,4,4],[5,3,3],[5,4,3,2]],reward:180,requires:0},{name:'Roots Beneath the Crown',zone:'hall',description:'Follow the roots through the royal halls to face the Thorn King.',waves:[[3,4,5],[3,3,4,2],['boss']],reward:350,requires:1}];
/* Companions are downloaded sprites (gfx/actors/pet-sprites.js, atlases dist/assets/sprites/pet-<key>): Elthen's fox and LuizMelo's CC0 pet cats. No free owl, hare, turtle or wisp with walk and run frames was found, so those four became cats and were renamed to match; every key and bonus is unchanged. color = the sprite's main coat. */
export const PETS=[{name:'Ember Fox',bonus:'5% fire damage',key:'fire',color:'#d67941',sprite:'pet-fire'},{name:'Ink Cat',bonus:'5% ability damage',key:'study',color:'#2d3131',sprite:'pet-study'},{name:'Swift Tabby',bonus:'5% movement speed',key:'speed',color:'#a8a9a9',sprite:'pet-speed'},{name:'Stone Sphinx',bonus:'5% defence',key:'defence',color:'#ac8475',sprite:'pet-defence'},{name:'Lucky Cat',bonus:'5% bonus gold',key:'loot',color:'#e6e6e6',sprite:'pet-loot'}];
export const WEAPONS={sword:['Iron Longsword','Knight’s Blade','Emberbrand','Kingsbane'],staff:['Ash Staff','Runecaller','Starfire Rod','Astral Spire'],dagger:['Iron Daggers','Duskfangs','Venomfangs','Night’s End'],bow:['Hunting Bow','Elven Longbow','Thornstring','Celestial Arc'],hammer:['Iron Hammer','Sunward Mace','Dawnbringer','Light of Creation'],axe:['Woodcutter’s Axe','War Cleaver','Bloodreaver','Worldsplitter'],focus:['Carved Focus','Spirit Carving','Elder Relic','Ancestor’s Eye']};
// Armour tier names. The bible gives the Warrior its own set; other classes keep the
// generic ladder until they get the same treatment. See docs/reference/ARMOR_BIBLE.md.
export const ARMOR_NAMES={warrior:['Iron Vanguard',"Royal Knight",'Runebound Champion','Celestial Warden'],
 default:['Adventurer','Valiant','Mythic','Ascendant']};/* oct24-progress (playtest r3 F12): tier 1 read "Heroic Armour" next to the Heroic tier; the id keeps its number */
export const armorName=(hero,tier)=>(ARMOR_NAMES[hero]||ARMOR_NAMES.default)[Math.max(0,Math.min(3,tier|0))];
// The transformation, as direction rather than a list of captions. Visual beats run
// on a timer; spoken lines are held until the player advances, so nothing anyone has
// to read ever expires. That is the hybrid recorded in SPEC_DECISIONS: the bible asks
// for ~40s of choreography, the takeover forbids timed reading anywhere.
// shot is a camera offset from the king; shake is screen shake at the beat's start.
/* oct24-progress (playtest r3 D4): the fourteen-card scene stopped the fight for about a minute right at the climax. Three
   cards now bridge into phase two (CINEMATIC) and the king's fall plays after the win (CINEMATIC_END, main.js levelEnd, on a
   first clear); the transformation cards (the sacrifice, binding, rise, slam, "Come.") were folded into the eye opening. */
export const CINEMATIC=[
 {id:'FAILED_RISE',text:'The roots refuse to let him fall.',pose:'knockback',still:['hurt',.11],dur:2.3,shot:[6,-10]},
 {id:'EYE_AWAKENING',text:'An eye opens beneath the crown.',pose:'cast',still:['special',.41],dur:2.4,shot:[0,-22],phase2:true,shake:.6},
 {id:'HERO_SHOT',text:'“You defeated a king. Now face his kingdom.”',pose:'idle',still:['special',.77],hold:true,shot:[0,-20]}];
export const CINEMATIC_END=[
 {id:'DEFEATED_KNEEL',text:'The king falls to his knees.',pose:'hurt',still:['special',.57],dur:2.1,shot:[0,-4]},
 {id:'SPEECH_01',text:'“So. Many came for this throne. All of them fell. You have brought a king to his knees.”',pose:'block',still:['special',.57],hold:true,shot:[10,-18]},
 {id:'CLEAVER_RECOGNITION',text:'His eyes find the Thorn Cleaver.',pose:'block',still:['special',.57],dur:1.8,shot:[-16,-14]},
 {id:'SPEECH_02',text:'“I held this forest too tightly. Let it grow free.”',pose:'block',still:['special',.57],hold:true,shot:[0,-16]},
 {id:'CLEAVER_LAID',text:'He lays the Cleaver down at your feet.',pose:'cast',still:['death',.06],dur:2.2,shot:[-8,-8]},
 {id:'ROOTS_LOOSEN',text:'The roots loosen. Light reaches the forest floor.',pose:'hurt',still:['death',.85,16],dur:2.6,shot:[0,-12],shake:.3},
 {id:'ROAD_EAST',text:'Beyond the forest, the gate to Emberkeep stands open.',pose:'hurt',still:['death',.85,16],hold:true,shot:[0,-20]}];
/* oct24-ember-finale (playtest ch2 E4): Emberkeep ended on one result line. Moltar's fall plays over the Molten Throne after the
   first Normal win, once per save (settings.finales), through the same cinematic as the Thorn King's (main.js levelEnd); his
   art's death row has a stagger at 0.18 s and lies flat from 0.75 s. Keyed by level id; the Thorn King keeps CINEMATIC_END. */
export const EPILOGUES={m7:[
 {id:'OGRE_KNEEL',text:'Moltar staggers. The fire in his cracks burns low.',pose:'hurt',still:['death',.18],dur:2.2,shot:[0,-6]},
 {id:'OGRE_SPEECH_01',text:'“Hah... a small hero with a big heart. Nobody has ever beaten me at my own forge.”',pose:'hurt',still:['death',.18],hold:true,shot:[10,-18]},
 {id:'OGRE_SPEECH_02',text:'“Go on, then. Past the mountain the violet mist is rising, and something in the deep is dreaming... of you.”',pose:'hurt',still:['death',.18],hold:true,shot:[0,-16]},
 {id:'OGRE_FALLS',text:'He topples, and the whole throne room shakes.',pose:'hurt',still:['death',.85,21],dur:2,shot:[0,-8],shake:.5},
 {id:'FORGES_QUIET',text:'The lava slows and darkens. All across Emberkeep, the forges fall quiet.',pose:'hurt',still:['death',.85,21],dur:2.6,shot:[-12,-14]},
 {id:'ROAD_MIST',text:'Beyond the volcano, a road winds down into violet mist: the Veilmoor.',pose:'hurt',still:['death',.85,21],hold:true,shot:[0,-20]}],
/* oct24-endgame (playtest ch3 C4): the game ended on one result line. The Sleeper's fall pays off Moltar's "something in the deep is
   dreaming... of you" (its intro: "You woke me from a thousand-year dream"), then the hero looks back over the freed kingdom on
   the world map (view: a chapter's board, centred on its last pad; no new art), then the closing card (FINALE_CARD). Its art's
   death row slumps at 0.5-0.75 s and lies flat from 0.875 s, on its shadow (no drop needed). fade: [from,to] over the beat. */
 v7:[
 {id:'SLEEPER_SWAYS',text:'The Sleeper sways. Its great eyes grow heavy again.',pose:'hurt',still:['death',.5],dur:2.4,shot:[0,-10]},
 {id:'SLEEPER_SPEECH_01',text:'“A thousand years I dreamed down here... and lately, I dreamed of you. A small hero who kept learning, and kept coming.”',pose:'hurt',still:['death',.5],hold:true,shot:[10,-22]},
 {id:'SLEEPER_SPEECH_02',text:'“You win, little one. Let me sleep again. This time I will dream kinder dreams.”',pose:'hurt',still:['death',.65],hold:true,shot:[0,-18]},
 {id:'SLEEPER_SINKS',text:'It sinks back into the deep, and its violet glow fades away.',pose:'hurt',still:['death',1],fade:[1,0],dur:3,shot:[0,-12],shake:.3},
 {id:'DEEP_QUIET',text:'For the first time in a thousand years, the deep is quiet.',pose:'hurt',still:['death',1],fade:[0,0],dur:2.6,shot:[0,-20]},
 {id:'LOOK_ELDERWOOD',view:'elderwood',at:'e8',text:'In the Elderwood, the roads are safe and the forest is bright.',dur:3.6},
 {id:'LOOK_EMBERKEEP',view:'emberkeep',at:'m7',text:'In Emberkeep, the lava has cooled and the forges rest.',dur:3.6},
 {id:'LOOK_VEILMOOR',view:'veilmoor',at:'v7',text:'And over the Veilmoor, the violet mist lifts at last.',dur:3.6}]};
/* the card that closes the whole adventure (after the last level's epilogue), held over the Veilmoor's board */
export const FINALE_CARD={id:'KINGDOM_FREE',card:'THE END',text:'The Thorn Kingdom is free!',sub:'Elderwood, Emberkeep and the Veilmoor are safe, thanks to you.',view:'veilmoor',at:'v7',hold:true};
/* the chapter-clear card that closes a chapter's epilogue (e8, m7): held, so the child reads it before the result */
export const chapterCard=(ch,next)=>({id:'CHAPTER_CLEAR',card:'CHAPTER CLEAR',text:`${ch.name} is free!`,sub:`The road to ${String(next.name).replace(/^The /,'the ')} is open.`,hold:true,shot:[0,-24]});
