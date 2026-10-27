/* What each ability does to the world around it (owner, 8 Oct: "more affect on the world"). combat.js worldFx() spawns
   these; gfx/combat-fx.js draws them from PixelLab sprites (fx-wr-*, tools/bake-fx-pixellab.mjs).
   when: 'cast' as the ability starts, 'hit' on its contact frame. at: 'self' (the hero's feet), 'ahead' (px in front
   of the hero), 'target'. fx: 'mark' (a ground mark that spreads from its centre over `reveal` s to `upto` of its size,
   then fades), 'debris' (rocks thrown up), 'aura' (worn at the feet), 'plates' (orbiting barrier).
   life: seconds, 'buff' (the ability's duration) or 'contact' (until the hit lands). quake: an extra screen shake.
   Marks are temporary and capped (worldFx), so the arena never clutters and nothing changes where you can walk. */
export const ABILITY_FX={
 'heavy-strike':[
  {when:'hit',fx:'wave',sprite:'fx-wr-crescent',at:'ahead',ahead:12,dist:72,life:.32},
  {when:'hit',fx:'mark',sprite:'fx-wr-crack',at:'ahead',ahead:26,life:2,reveal:.12,upto:.55},
  {when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'ahead',ahead:26,life:.6}],
 'rallying-cry':[
  {when:'hit',fx:'mark',sprite:'fx-wr-rally',at:'self',life:.9,reveal:.3,upto:1,follow:true}],
 'shield-bash':[
  {when:'hit',fx:'pop',sprite:'fx-wr-bash',at:'ahead',ahead:22,life:.32},
  {when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'ahead',ahead:20,life:.5}],
 'sundering-blow':[
  {when:'hit',fx:'rupture',sprite:'fx-wr-rupture',at:'ahead',ahead:4,life:1.8,reveal:.16},
  {when:'hit',fx:'mark',sprite:'fx-wr-crack',at:'target',life:1.4,reveal:.1,upto:.45},
  {when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'target',life:.55}],
 'ground-slam':[
  {when:'hit',fx:'mark',sprite:'fx-wr-crack',at:'ahead',ahead:10,life:3,reveal:.2,upto:1},
  {when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'ahead',ahead:10,life:.6}],
 'iron-bulwark':[
  {when:'hit',fx:'plates',sprite:'fx-wr-plate',at:'self',life:'buff',follow:true}],
 'berserker-rage':[
  {when:'hit',fx:'aura',sprite:'fx-wr-rage',at:'self',life:'buff',follow:true}],
 /* the Mage (8 Oct): each spell leaves its own mark on the world. The bolts and beams are drawn by combat itself; these are
    what lands around them. Sprites are the element atlases (fx-ice-spike, fx-col-storm, fx-aura-arcane...). */
 'fireball':[{when:'hit',fx:'ring-of',sprite:'fx-fire-burst',at:'target',n:5,r:14,life:.5,stagger:.04}],
 'ember-dart':[{when:'hit',fx:'ring-of',sprite:'fx-fire-burst',at:'target',n:3,r:8,life:.35,stagger:.03}],
 'frost-nova':[{when:'hit',fx:'ring-of',sprite:'fx-ice-spike',at:'self',n:10,r:40,life:1.1,stagger:.02},{when:'hit',fx:'ring-of',sprite:'fx-ice-spike',at:'self',n:6,r:22,life:1,stagger:.05}],
 'ice-lance':[{when:'hit',fx:'ring-of',sprite:'fx-ice-spike',at:'target',n:4,r:12,life:.8,stagger:.04}],
 'chain-lightning':[{when:'cast',fx:'ring-of',sprite:'fx-spark-storm',at:'self',n:3,r:14,life:.4,stagger:.05}],
 'static-field':[{when:'hit',fx:'ring-of',sprite:'fx-col-storm',at:'self',n:8,r:44,life:1,stagger:.05,spin:.6},{when:'hit',quake:'aoe'}],
 'arcane-shield':[{when:'hit',fx:'orbit-of',sprite:'fx-aura-arcane',at:'self',n:3,life:'buff',follow:true}],
 'arcane-barrage':[{when:'cast',fx:'ring-of',sprite:'fx-spark-arcane',at:'self',n:4,r:18,life:.6,stagger:.08,spin:3}],
 'earthshatter':[
  {when:'cast',fx:'mark',sprite:'fx-wr-gloom',at:'ahead',ahead:10,life:'contact',reveal:'contact',upto:1},
  {when:'hit',fx:'mark',sprite:'fx-wr-fissure',at:'ahead',ahead:10,life:4,reveal:.22,upto:1},
  {when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'ahead',ahead:10,life:.6},
  {when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'ahead',ahead:-30,life:.6},
  {when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'ahead',ahead:50,life:.6},
  {when:'hit',quake:'boss'}],
 /* The five later heroes (9 Oct), each with its own PixelLab marks (fx-hr-*, art/fx/heroes) and the element atlases. */
 /* the Rogue: shadow sparks, a venom cloud and a smoke burst that swallows the hero */
 'backstab':[{when:'hit',fx:'ring-of',sprite:'fx-spark-shadow',at:'target',n:3,r:8,life:.4,stagger:.03}],
 'throwing-knife':[{when:'hit',fx:'ring-of',sprite:'fx-spark-physical',at:'target',n:2,r:6,life:.3}],
 'poison-dagger':[{when:'hit',fx:'ring-of',sprite:'fx-spark-poison',at:'target',n:4,r:10,life:.6,stagger:.04}],
 'venom-cloud':[{when:'hit',fx:'mark',sprite:'fx-hr-venom',at:'target',life:3,reveal:.3,upto:1,alpha:.8}],
 'smoke-bomb':[{when:'hit',fx:'pop',sprite:'fx-hr-smoke',at:'self',life:1.2},{when:'hit',fx:'ring-of',sprite:'fx-dust',at:'self',n:4,r:18,life:.6,stagger:.03}],
 'vanish':[{when:'cast',fx:'ring-of',sprite:'fx-spark-shadow',at:'self',n:6,r:16,life:.6,stagger:.04}],
 'shadow-rush':[{when:'hit',fx:'aura',sprite:'fx-aura-shadow',at:'self',life:'buff',follow:true}],
 'assassinate':[{when:'hit',fx:'ring-of',sprite:'fx-hit-shadow',at:'target',n:1,r:0,life:.5},{when:'hit',fx:'mark',sprite:'fx-wr-crack',at:'target',life:1.2,reveal:.1,upto:.4},{when:'hit',quake:'aoe'}],
 /* the Ranger: green sparks where arrows land, vines that hold, a rain that peppers the ground */
 'precision-shot':[{when:'hit',fx:'ring-of',sprite:'fx-spark-nature',at:'target',n:3,r:8,life:.4,stagger:.03}],
 'quick-shot':[{when:'hit',fx:'ring-of',sprite:'fx-spark-physical',at:'target',n:2,r:5,life:.3}],
 'volley':[{when:'cast',fx:'ring-of',sprite:'fx-spark-nature',at:'self',n:3,r:12,life:.4,stagger:.08}],
 'bear-trap':[{when:'hit',fx:'ring-of',sprite:'fx-dust',at:'self',n:2,r:10,life:.4}],
 'snare-trap':[{when:'hit',fx:'mark',sprite:'fx-hr-vines',at:'target',life:3,reveal:.2,upto:1}],
 'thornvine':[{when:'hit',fx:'ring-of',sprite:'fx-hit-nature',at:'target',n:1,r:0,life:.5}],
 'hunter-s-mark':[{when:'hit',fx:'ring-of',sprite:'fx-spark-nature',at:'target',n:4,r:12,life:.6,spin:2}],
 'rain-of-arrows':[{when:'hit',fx:'ring-of',sprite:'fx-spark-physical',at:'target',n:8,r:36,life:.6,stagger:.04},{when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'target',life:.5},{when:'hit',quake:'aoe'}],
 /* the Paladin: gold runes, a sanctuary circle, pillars of light */
 'holy-strike':[{when:'hit',fx:'ring-of',sprite:'fx-spark-holy',at:'ahead',ahead:24,n:4,r:12,life:.45,stagger:.03}],
 'lay-on-hands':[{when:'hit',fx:'ring-of',sprite:'fx-col-holy',at:'self',n:6,r:20,life:.8,stagger:.05},{when:'hit',fx:'aura',sprite:'fx-aura-holy',at:'self',life:1,follow:true}],
 'divine-shield':[{when:'hit',fx:'orbit-of',sprite:'fx-aura-holy',at:'self',n:3,life:'buff',follow:true}],
 'hammer-of-light':[{when:'hit',fx:'ring-of',sprite:'fx-hit-holy',at:'target',n:1,r:0,life:.5},{when:'hit',fx:'mark',sprite:'fx-wr-crack',at:'target',life:1.2,reveal:.1,upto:.4}],
 'consecration':[{when:'hit',fx:'mark',sprite:'fx-hr-runes',at:'self',life:3,reveal:.15,upto:1}],
 'sanctuary':[{when:'hit',fx:'ring-of',sprite:'fx-spark-holy',at:'self',n:6,r:30,life:.8,spin:.5}],
 'judgement':[{when:'hit',fx:'ring-of',sprite:'fx-col-holy',at:'target',n:3,r:6,life:.7,stagger:.05},{when:'hit',quake:'aoe'}],
 'wrath-of-dawn':[
  {when:'cast',fx:'mark',sprite:'fx-hr-sanctum',at:'ahead',ahead:10,life:'contact',reveal:'contact',upto:1},
  {when:'hit',fx:'mark',sprite:'fx-hr-runes',at:'ahead',ahead:10,life:3,reveal:.2,upto:1},
  {when:'hit',fx:'ring-of',sprite:'fx-col-holy',at:'ahead',ahead:10,n:10,r:48,life:1,stagger:.03},
  {when:'hit',quake:'boss'}],
 /* the Berserker: dust and steel, a whirl ring, blood-red rage */
 'reckless-swing':[{when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'ahead',ahead:22,life:.5}],
 'cleave':[{when:'hit',fx:'wave',sprite:'fx-wr-crescent',at:'ahead',ahead:12,dist:80,life:.32},{when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'ahead',ahead:30,life:.5}],
 'blood-frenzy':[{when:'hit',fx:'orbit-of',sprite:'fx-spark-fire',at:'self',n:4,life:'buff',follow:true}],
 'bloodletting':[{when:'hit',fx:'ring-of',sprite:'fx-hit-fire',at:'self',n:1,r:0,life:.4}],
 'whirling-axes':[{when:'hit',fx:'mark',sprite:'fx-hr-whirl',at:'self',life:.8,reveal:.1,upto:1,follow:true},{when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'self',life:.5}],
 'rampage':[{when:'cast',fx:'ring-of',sprite:'fx-dust',at:'self',n:3,r:10,life:.5,stagger:.06},{when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'ahead',ahead:10,life:.5}],
 'execute':[{when:'hit',fx:'mark',sprite:'fx-wr-crack',at:'target',life:1.6,reveal:.08,upto:.5},{when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'target',life:.55},{when:'hit',quake:'aoe'}],
 'undying-wrath':[{when:'hit',fx:'aura',sprite:'fx-wr-rage',at:'self',life:'buff',follow:true},{when:'hit',fx:'ring-of',sprite:'fx-aura-fire',at:'self',n:6,r:22,life:1,stagger:.05}],
 /* the Summoner: teal spirit light, totems (drawn by gfx/world.js), a thorn grove */
 'spirit-bolt':[{when:'hit',fx:'ring-of',sprite:'fx-spark-ice',at:'target',n:3,r:8,life:.4,stagger:.03}],
 'spirit-wisp':[{when:'hit',fx:'ring-of',sprite:'fx-spark-arcane',at:'target',n:2,r:6,life:.4}],
 'wolf-totem':[{when:'hit',fx:'ring-of',sprite:'fx-dust',at:'ahead',ahead:15,n:2,r:10,life:.4}],
 'stone-totem':[{when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'ahead',ahead:15,life:.5}],
 'chain-spirits':[{when:'hit',fx:'ring-of',sprite:'fx-spark-ice',at:'target',n:3,r:10,life:.5,stagger:.04}],
 'thorn-grove':[{when:'hit',fx:'mark',sprite:'fx-hr-thorns',at:'target',life:3,reveal:.2,upto:1},{when:'hit',fx:'debris',sprite:'fx-wr-rocks',at:'target',life:.5}],
 'wild-growth':[{when:'hit',fx:'aura',sprite:'fx-aura-nature',at:'self',life:'buff',follow:true}],
 'ancestral-chorus':[{when:'hit',fx:'ring-of',sprite:'fx-col-ice',at:'self',n:8,r:44,life:1.1,stagger:.05,spin:.4},{when:'hit',quake:'aoe'}],
};
/* The look (not the damage element) of an ability's slash, ring and burst: the Warrior's earth-shaking moves read as
   dust and steel (the bible's "warm white", "dust plume"), not the arcane purple their data element would draw. */
export const FX_ELEMENT={'heavy-strike':'physical','shield-bash':'physical','sundering-blow':'physical','ground-slam':'physical','earthshatter':'physical',
 /* the later heroes' arcane-by-default moves wear their class's look: Rogue shadow, Ranger steel and leaf, Paladin gold,
    Berserker blood-red fire, Summoner pale spirit light */
 ...Object.fromEntries(['backstab','throwing-knife','smoke-bomb','vanish','shadow-rush','assassinate'].map(k=>[k,'shadow'])),
 ...Object.fromEntries(['precision-shot','quick-shot','volley','bear-trap','hunter-s-mark','rain-of-arrows'].map(k=>[k,'nature'])),
 ...Object.fromEntries(['lay-on-hands','divine-shield','sanctuary'].map(k=>[k,'holy'])),
 ...Object.fromEntries(['reckless-swing','cleave','blood-frenzy','bloodletting','whirling-axes','rampage','execute','undying-wrath'].map(k=>[k,'fire'])),
 ...Object.fromEntries(['spirit-bolt','spirit-wisp','wolf-totem','stone-totem','chain-spirits','ancestral-chorus'].map(k=>[k,'ice']))};
/* Every ability glows in its own colour while it plays, so it never reads as a normal attack (owner, 8 Oct). */
export const ABILITY_GLOW={'fireball':'#ff8a3a','ember-dart':'#ffb24a','frost-nova':'#9fe4ff','ice-lance':'#bfeeff','chain-lightning':'#fff27a','static-field':'#e8f06a','arcane-shield':'#c79bff','arcane-barrage':'#b67bff','heavy-strike':'#ffd36a','rallying-cry':'#ffe9a0','shield-bash':'#9fd8ff','sundering-blow':'#ff8a3a','ground-slam':'#e8b878','iron-bulwark':'#a8d8ff','berserker-rage':'#ff3b24','earthshatter':'#ff6a2a',
 'backstab':'#c58bff','throwing-knife':'#d9d9e8','poison-dagger':'#8be36a','venom-cloud':'#7fe05a','smoke-bomb':'#a99bc8','vanish':'#b48cff','shadow-rush':'#9a6bff','assassinate':'#e070ff',
 'precision-shot':'#c8f59a','quick-shot':'#e8f5c8','volley':'#a8e88a','bear-trap':'#d8c49a','snare-trap':'#6fd36a','thornvine':'#5fcf6f','hunter-s-mark':'#b3e6a4','rain-of-arrows':'#f0e6a8',
 'holy-strike':'#ffd86a','lay-on-hands':'#fff0a8','divine-shield':'#ffe78a','hammer-of-light':'#fff2b0','consecration':'#ffcf5a','sanctuary':'#ffeaa0','judgement':'#fffbd0','wrath-of-dawn':'#ffb84a',
 'reckless-swing':'#ff7a5a','cleave':'#ffa07a','blood-frenzy':'#ff3b3b','bloodletting':'#d81f2a','whirling-axes':'#ff6a4a','rampage':'#e8a070','execute':'#ff2a2a','undying-wrath':'#ff4020',
 'spirit-bolt':'#7ff0e0','spirit-wisp':'#a8fff0','wolf-totem':'#6ad7cc','stone-totem':'#9ad8cf','chain-spirits':'#7fe8ff','thorn-grove':'#6fcf7a','wild-growth':'#8be89a','ancestral-chorus':'#b8fff4'};
export const ABILITY_FX_SPRITES=[...new Set([...Object.values(ABILITY_FX).flat().map(e=>e.sprite).filter(Boolean),'prop-camp-tent-a','prop-camp-tent-b','fx-vine','fx-hr-trap','fx-hr-wolf-totem','fx-hr-stone-totem','fx-hr-sanctum','fx-hr-arrow','fx-hr-knife','summon-wolf','summon-guardian','summon-ancestor'])];
