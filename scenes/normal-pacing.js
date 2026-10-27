import {waveGroups} from '../game/stage.js';
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
 'dive under':'Dive! Leave the circle!','fire-breath arc':'Fire breath! Move to the green lane!','flame wall':'Flame wall! Jump over it!','ember rush':'Ember rush! Step off the glowing row!',
 'imp swarm':'Imp swarm! Defeat the imps!','fire rain':'Fire rain! Leave the circles!','glass spikes':'Glass spikes! Leave the circles!','void wave':'Void wave! Jump over it!',
 'meteor rain':'Meteors! Leave the circles!',hellfire:'Hellfire! Dodge through it!','pillar form':'Fire pillar! Walk away from it!','ash storm':'Ash storm! Watch the glowing ground!',
 'tide ring':'Tide ring! Jump the ring!',undertow:'Undertow! Walk away from the Priest!','lantern brood':'Lanterns! Pop them!','mist veil':'Mist veil! Leave the circle!',
 'mirror split':'Mirror split! Hit the one with a shadow!',echo:'Echo! Watch what it copies!',starfall:'Starfall! Leave the circles!','crystal ram':'Crystal ram! Step off the glowing row!',
 'frost seeker':'Frost seeker! Dodge as it reaches you!','frost nova':'Frost nova! Back away from the Lich!','rift step':'Rift step! Leave the circle!','crystal blade':'Crystal blade! Leave the circles!',
 'tentacle grab':'Two tentacles! Leave the circles!','abyss wave':'Abyss wave! Move to the green lane!','night wind':'Night wind! Leave the circles!','wing swoop':'Wing swoop! Back away from her!'};
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
export function normalBoss(w,e){if(w.tierKey==='normal'&&['e7','e8'].includes(w.level?.id)&&e.key===w.level.boss){const moves=as=>as.map(a=>({...a,fullTell:true,windup:Math.max(1,a.windup||0),recover:Math.max(1.8,a.recover||0)}));e.recoveryGate=true;e.attacks=moves(e.attacks);if(e.rebirth)e.rebirth={...e.rebirth,attacks:moves(e.rebirth.attacks)};return e;}if(!pacedNormal(w)||e.key!==w.level.boss)return e;e.normalPacing=true;e.recoveryGate=true;e.phaseShift={...e.phaseShift,at:.65};
 e.attacks=e.attacks.map(a=>({...a,fullTell:true,windup:Math.max(.65,Math.min(1.1,a.windup||.8)),cd:a.cd*.75,recover:Math.max(.65,a.recover||0),...(a.kind==='summon'?{count:Math.min(2,a.count||1),max:2,visibleTell:true}:{})}));
 /* playtest ch2: the warning panel names a move only when it has a label; the Dungeon Master, Forge Golem, Vexx, the Demon Slime, the Lich and the Moth Queen had none, so their taught moves came with no panel at all. oct24-ember-econ: the label is the move and its action (NORMAL_CUES) */
 {const seq=NORMAL_SEQUENCES[w.level.id]||[];e.attacks=e.attacks.map(a=>seq.includes(a.name)?{...a,label:NORMAL_CUES[a.name]||a.label||a.name.toUpperCase()}:moreCue(a));if(e.rebirth?.attacks)e.rebirth={...e.rebirth,attacks:e.rebirth.attacks.map(moreCue)};}
 if(w.level.id==='v7')e.attacks=e.attacks.map(a=>a.name==='tentacle grab'?{...a,count:2,spread:50,hold:0,windup:1.2,recover:1.8,label:'Two tentacles! Leave the circles!'}:a.name==='abyss wave'?{...a,len:88,windup:1.8,dur:1.2,recover:2.4,label:'Abyss wave! Move to the green lane!'}:a.name==='ink darkness'?{...a,dur:3,banner:null}:a);
 return e;}
export function normalTick(w,e){if(!e.normalPacing||!e.brain)return;const b=e.brain,phase=b.phase||1;if(e.normalPhase===phase||!['move','recover'].includes(b.mode))return;e.normalPhase=phase;const [call,then]=NORMAL_SEQUENCES[w.level.id];b.force=call;if(phase===2)e.attacks=e.attacks.map(a=>a.name===call?{...a,then}:a);}

export function normalEnemy(w,e){if(!pacedNormal(w)||e.boss)return e;e.attacks=(e.attacks||[]).map(a=>({...a,fullTell:true,windup:Math.max(.55,(a.windup||.7)*.9),cd:a.cd*.8}));return e;}

/* One faster ranged foe replaces a regular slot; no extra wave or concurrent enemy is added. */
/* oct24-ember-finale (playtest ch2: "a Swift Grave Wraith is on every level"): on every other Emberkeep level the slot's own foe
   is the swift one (a Swift Imp, a Swift Ember Skeleton...), so the Grave Wraith comes on m1, m3, m5 and m7 only */
export const OWN_SWIFT=new Set(['m2','m4','m6','mx1']);
export function normalLevel(l,k){if(k!=='normal'||!NORMAL_SEQUENCES[l?.id])return l;const type=l.chapter==='emberkeep'?'skeleton-mage':'cultist',own=OWN_SWIFT.has(l.id);return {...l,waves:l.waves.map(w=>{const groups=waveGroups(w).map(g=>g.map(e=>typeof e==='string'?e:{...e})),g=groups.at(-1),pick=g.findIndex(e=>typeof e==='string'&&e!=='skeleton-mage'),i=own&&pick>=0?pick:g.findIndex(e=>typeof e==='string');if(i>=0)g[i]={type:own?g[i]:type,mod:'swift'};return {...(Array.isArray(w)?{}:w),groups};})};}
