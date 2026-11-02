import {waveGroups} from '../game/stage.js';
import {makeEnemy as rosterEnemy} from '../game/roster.js';
/* Normal chapters 2/3: teach a signature early, then repeat it with a fully warned follow-up below 65%.
   Spawn-local edits: higher tiers, roster masters and academic progression are unchanged. */
export const NORMAL_SEQUENCES={m1:['fire fan','firefall'],m2:['forge eruption','core laser'],m3:['dive under','fire-breath arc'],m4:['flame wall','ember rush'],m5:['imp swarm','fire rain'],m6:['glass spikes','void wave'],m7:['meteor rain','hellfire'],mx1:['pillar form','ash storm'],v1:['tide ring','undertow'],v2:['lantern brood','mist veil'],v3:['mirror split','echo'],v4:['starfall','crystal ram'],v5:['frost seeker','frost nova'],v6:['rift step','crystal blade'],v7:['tentacle grab','abyss wave'],vx1:['night wind','wing swoop']};
/* oct24-ember-econ (playtest ch2 E7: "FLAME WALL" named the move but never said where to go): what each taught move's Normal
   panel says, the move then the action that dodges it as Normal builds it (enemy-ai.js buildMarkers / boss-moves.js):
   circles (aoe, line, vanish) - leave them; a low wave - any jump clears it; a sweep - the green CLEAR lane; a beam or
   dash row - step off it; shots - a dodge roll's invulnerability; a close strike - back away; a pillar or an undertow -
   walk away; helpers - defeat them; ash - the warnings stay lit on the ground. tests/playtest-ch2.test.js checks each
   action against the move's kind. */
export const NORMAL_CUES={'fire fan':'Fire fan! Dodge through it!',firefall:'Firefall! Leave the circles!','forge eruption':'Eruption! Leave the circles!','core laser':'Core laser! Step off the glowing row!',
 'dive under':'Dive! Leave the circle!','fire-breath arc':'Fire breath! Move to the CLEAR lane!','flame wall':'Flame wall! Jump over it!','ember rush':'Ember rush! Step off the glowing row!',
 'imp swarm':'Imp swarm! Defeat the imps!','fire rain':'Fire rain! Leave the circles!','glass spikes':'Glass spikes! Leave the circles!','void wave':'Void wave! Jump over it!',
 'meteor rain':'Meteors! Leave the circles!',hellfire:'Hellfire! Dodge through it!','pillar form':'Fire pillar! Walk away from it!','ash storm':'Ash storm! Watch the glowing ground!',
 'tide ring':'Tide ring! Jump the ring!',undertow:'Undertow! Walk away from the Priest!','lantern brood':'Lanterns! Pop them!','mist veil':'Mist veil! Leave the circle!',
 'mirror split':'Mirror split! Hit the one with a shadow!',echo:'Echo! Watch what it copies!',starfall:'Starfall! Leave the circles!','crystal ram':'Crystal ram! Step off the glowing row!',
 'frost seeker':'Frost seeker! Dodge as it reaches you!','frost nova':'Frost nova! Back away from the Lich!','rift step':'Rift step! Leave the circle!','crystal blade':'Crystal blade! Leave the circles!',
 'tentacle grab':'Two tentacles! Leave the circles!','abyss wave':'Abyss wave! Move to the CLEAR lane!','night wind':'Night wind! Leave the circles!','wing swoop':'Wing swoop! Back away from her!'};
/* oct24-ch3 (playtest ch3: v1's phase two showed "HIGH TIDE" and nothing else): a paced Normal boss's other labelled moves say the
   action too, by the same rules (a stance - stop hitting until it drops; a lure light - walk away; a slow tide - the dry lane;
   the dark - the lanterns stay lit). Dream echoes are the moves of its options. */
export const NORMAL_MORE_CUES={'tail whip':'Tail whip! Back away from the tail!','wing gust':'Wing gust! Leave the circle!','flame road':'Flame road! Leave the circles!',
 'mirror guard':'Mirror guard! Stop hitting until it drops!','shatter field':'Shatter field! Leave the circles!','ash ghouls rise':'Ash ghouls! Defeat the ghouls!',
 'high tide':'High tide! Walk to the dry lane!','call the wisps':'Wisps! Defeat the wisps!',"will-o'-lure":'Lure light! Walk away from it!','grasping lights':'Grasping lights! Leave the circles!',
 'shadow step':'Shadow step! Step off the glowing row!','shadow flame':'Shadow flame! Back away from your Shadow!','prism pylons':'Prism pylons! Break the pylons!','shard burst':'Shard burst! Leave the circle!',
 'void sweep':'Void sweep! Back away from the Knight!','star cape':'Star cape! Leave the circles!','gate guard':'Gate guard! Stop hitting until it drops!','ink darkness':'Darkness! Stay in the light!','en garde':'En garde! Stop hitting until it drops!','riposte lunge':'Riposte! Step off the glowing row!','drill call':'Drill call! Defeat the soldiers!',
 'DREAM ECHO: THORN LINE':'Dream echo: thorns! Leave the circles!','DREAM ECHO: METEORS':'Dream echo: meteors! Leave the circles!','DREAM ECHO: TIDE RING':'Dream echo: tide ring! Jump the ring!'};
const moreCue=a=>!a.label||/! [A-Z]/.test(a.label)?a:a.kind==='pick'?{...a,options:a.options.map(o=>({...o,label:NORMAL_MORE_CUES[o.label]||o.label}))}:{...a,label:NORMAL_MORE_CUES[a.name]||a.label};
/* The Shadow Twin's echo becomes a copy of the hero's last power when it fires (boss-moves.js echoAttack), so its action follows
   the copy: a shot, a circle on the hero, or a close strike. */
export function echoCue(a,cast){const act=a.kind==='projectile'?'Dodge through it!':a.kind==='aoe'?'Leave the circle!':'Back away!';return `${cast?.name?`Echo of ${cast.name}`:'Echo'}! ${act}`;}
export const pacedNormal=w=>w.tierKey==='normal'&&!!NORMAL_SEQUENCES[w.level?.id];
/* The Golem and King used 0.3 s openings and shortened phase-two tells despite long, two-life fights.
   Keep every move and both health pools; a missed tell must leave time to recover and answer with a learned attack. */
export function normalBoss(w,e){if(w.tierKey==='normal'&&['e7','e8'].includes(w.level?.id)&&e.key===w.level.boss){const moves=as=>as.map(a=>({...a,fullTell:true,windup:Math.max(1,a.windup||0),recover:Math.max(1.8,a.recover||0)}));e.recoveryGate=true;e.attacks=moves(e.attacks);if(w.level.id==='e8')thornFinale(e);if(e.rebirth)e.rebirth={...e.rebirth,attacks:moves(e.rebirth.attacks)};return e;}if(!pacedNormal(w)||e.key!==w.level.boss)return e;e.normalPacing=true;e.recoveryGate=true;e.phaseShift={...e.phaseShift,at:.65};
 e.attacks=e.attacks.map(a=>({...a,fullTell:true,windup:Math.max(.65,Math.min(1.1,a.windup||.8)),cd:a.cd*.75,recover:Math.max(.65,a.recover||0),...(a.kind==='summon'?{count:Math.min(2,a.count||1),max:2,visibleTell:true}:{})}));
 /* playtest ch2: the warning panel names a move only when it has a label; the Dungeon Master, Forge Golem, Vexx, the Demon Slime, the Lich and the Moth Queen had none, so their taught moves came with no panel at all. oct24-ember-econ: the label is the move and its action (NORMAL_CUES) */
 {const seq=NORMAL_SEQUENCES[w.level.id]||[];e.attacks=e.attacks.map(a=>seq.includes(a.name)?{...a,label:NORMAL_CUES[a.name]||a.label||a.name.toUpperCase()}:moreCue(a));if(e.rebirth?.attacks)e.rebirth={...e.rebirth,attacks:e.rebirth.attacks.map(moreCue)};}
 /* improve20-a-oct31 #5 (kid-appeal playtest: a 12-year-old never fell below 74% on the last boss): in phase two the Abyss Wave comes
    round a second time (its own full 1.8 s tell and the CLEAR lane again), one more telegraphed pattern; HP, attack and every warning
    time are unchanged. Sim (--only=v7 --isolated --recommended-level, 24 runs, seeds 1-3): --skill=good ends at 60% (was 63%), kid 0 deaths */
 if(w.level.id==='m7')forgeFinale(e);if(w.level.id==='v1')e.attacks=e.attacks.map(a=>a.name==='tide ring'?{...a,...TIDE_RING}:a);
 if(w.level.id==='v7')e.attacks=e.attacks.map(a=>a.name==='tentacle grab'?{...a,count:2,spread:50,hold:0,windup:1.2,recover:1.8,label:'Two tentacles! Leave the circles!'}:a.name==='abyss wave'?{...a,len:88,windup:1.8,dur:1.2,recover:2.4,label:'Abyss wave! Move to the CLEAR lane!',then:'abyss wave',thenPhase:2}:a.name==='ink darkness'?{...a,dur:3,banner:null}:a);
 return e;}
/* improve20-r8b-nov1 #1 (audit7 d2: the same kid brain ended e7 at 12% health and the Thorn King at 51%, m6/mx1 at 37%/29% and Moltar at
   61%, then v1 at 27% with 5 potions, where the Tide Ring alone took 72% of max health). Each chapter's finale gets one more signature
   move in its second phase, the same kind of ring the Veilmoor opens with, so a kid has jumped two rings before the Drowned Priest's:
   the Thorn King's ring of thorns and his thornlings come sooner; Moltar's lava ring and one call for his smiths. v1's ring is softer:
   it stops at a ring drawn on the floor from the tell (step past it, or jump it), comes less often and hits for less. */
export const THORN_RING={name:'thorn ring',state:'special',kind:'wave',shape:'ring',previewReach:true,range:240,reach:84,r0:10,speed:70,band:6,th:7,fx:'fx-earth-spike',windup:1.4,fullTell:true,dmg:1,cd:7,recover:1.8,phase:2,label:'Thorn ring! Jump the ring!'};
export const LAVA_RING={name:'lava ring',state:'cast',kind:'wave',shape:'ring',previewReach:true,range:280,reach:92,r0:10,speed:80,band:6,th:7,fx:'fx-flame-pillar',windup:1.2,fullTell:true,dmg:1,cd:6.5,recover:1.2,phase:2,label:'Lava ring! Jump the ring!'};
export const FORGE_CALL={name:'call the smiths',state:'cast',kind:'summon',key:'slag-smith',count:3,max:3,uses:2,range:400,cd:11,windup:.9,fullTell:true,visibleTell:true,recover:1.2,fx:'fx-portal',label:'Smiths! Defeat the smiths!'};
export const TIDE_RING={reach:120,range:150,previewReach:true,speed:80,th:6,dmg:.8,cd:9};
export const FINALE_P2={speed:1.35,cd:.62},FORGE_P2={hp:1.35,dmg:1.25,atk:1.15,at:.65,cd:.55,speed:1.3};
export function thornFinale(e){e.p2Speed=FINALE_P2.speed;e.p2Cd=FINALE_P2.cd;e.attacks=[...e.attacks.map(a=>a.name==='thornlings rise'?{...a,cd:8,label:'Thornlings! Defeat the thornlings!'}:a),{...THORN_RING}];}
export function forgeFinale(e){e.maxHp=e.hp=Math.round(e.maxHp*FORGE_P2.hp);e.atk=Math.round(e.atk*FORGE_P2.atk);e.speed=Math.round(e.speed*FORGE_P2.speed);e.phaseShift={...(e.phaseShift||{}),at:FORGE_P2.at,speed:FINALE_P2.speed,cd:FORGE_P2.cd,dmg:FORGE_P2.dmg};e.attacks=[...e.attacks,{...LAVA_RING},{...FORGE_CALL}];}
/* improve20-l-oct31 (5): the Normal final boss was still gentle for a good player (sim --skill=good ended v7 near 60% health). In phase
   two each Abyss Wave's tell also calls one of the level's own boss adds (levels.js bossAdds: a Deep One) from the far side, at most
   two alive, so the wave's lane and a foe on the ground have to be watched together. No boss turn is spent, no warning is shorter,
   no HP or attack changes; they pay no XP or gold (combat.js kill), so a long phase two is never a farm. Sim (--only=v7 --isolated --recommended-level --gear=plain, 24 runs, seeds 1-3): good damage taken 49 > 59%
   (with --potions=never it ends at 54% health, was 58%); kid 0 deaths with the game's potions. */
export const DEEP_CALL={max:2};
export function deepCall(w,e){const b=e.brain;if(w.level?.id!=='v7'||!e.boss||!e.normalPacing||!b||(b.phase||1)!==2||b.mode!=='tele'||b.atk?.name!=='abyss wave'||e.deepFor===b.atk)return;e.deepFor=b.atk;
 const key=(w.level.bossAdds||['deep-one'])[0],alive=w.enemies.filter(o=>o.summoner===e&&o.deepCall&&o.hp>0).length;if(alive>=DEEP_CALL.max||!w.spawn)return;
 const B=w.bounds(),x=w.player.x<(B.x0+B.x1)/2?Math.min(B.x1-20,w.player.x+180):Math.max(B.x0+20,w.player.x-180);const o=w.spawn({...rosterEnemy(key,{tier:e.tier||1}),summoner:e},x,w.player.y)||w.enemies[w.enemies.length-1];Object.assign(o,{summoned:true,deepCall:true,noReward:true,entered:true});}
export function normalTick(w,e){if(!e.normalPacing||!e.brain)return;deepCall(w,e);const b=e.brain,phase=b.phase||1;if(e.normalPhase===phase||!['move','recover'].includes(b.mode))return;e.normalPhase=phase;const [call,then]=NORMAL_SEQUENCES[w.level.id];b.force=call;if(phase===2)e.attacks=e.attacks.map(a=>a.name===call?{...a,then}:a);}

export function normalEnemy(w,e){if(!pacedNormal(w)||e.boss)return e;e.attacks=(e.attacks||[]).map(a=>({...a,fullTell:true,windup:Math.max(.55,(a.windup||.7)*.9),cd:a.cd*.8}));return e;}

/* One faster ranged foe replaces a regular slot; no extra wave or concurrent enemy is added. */
/* oct24-ember-finale (playtest ch2: "a Swift Grave Wraith is on every level"): on every other Emberkeep level the slot's own foe
   is the swift one (a Swift Imp, a Swift Ember Skeleton...), so the Grave Wraith comes on m1, m3, m5 and m7 only */
/* improve20-w-nov1 #12 (a7): the Grave Wraith left Emberkeep, so every Emberkeep level's swift foe is its own (m1, m3, m5 and m7 too); a Veilmoor level
   gets its swift Cultist only where Cultists already belong (v1, v3, v5), else its own foe is the swift one */
/* improve20-e-nov1 #1: a caster is never the swift one (a fast lobber would only run away faster); the pick skips it */
export const SWIFT_SKIP=new Set(['skeleton-mage','ember-lobber']);
export const OWN_SWIFT=new Set(['m1','m2','m3','m4','m5','m6','m7','mx1']);
export function normalLevel(l,k){if(k!=='normal'||!NORMAL_SEQUENCES[l?.id])return l;const type=l.chapter==='emberkeep'?'skeleton-mage':'cultist',own=OWN_SWIFT.has(l.id)||!l.waves.some(w=>waveGroups(w).flat().includes(type));return {...l,waves:l.waves.map(w=>{const groups=waveGroups(w).map(g=>g.map(e=>typeof e==='string'?e:{...e})),g=groups.at(-1),pick=g.findIndex(e=>typeof e==='string'&&!SWIFT_SKIP.has(e)),i=own?pick:g.findIndex(e=>typeof e==='string');if(i>=0)g[i]={type:own?g[i]:type,mod:'swift'};return {...(Array.isArray(w)?{}:w),groups};})};}
