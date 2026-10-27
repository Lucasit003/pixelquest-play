import {normalBoss,normalTick,normalEnemy,pacedNormal} from './normal-pacing.js';
import {veilBoss,veilTick} from './veilmoor.js';
import {emberBoss,emberTick} from './emberkeep.js';
import {woodBoss,woodTick} from './elderwood.js';
import {sfx} from '../core/audio.js';
import {tierAttacks} from './boss-moves.js';
/* Main-road signature remixes. Changes belong to this spawned boss only, never the roster; Normal has its own spawn-local pacing. */
export function pilotBoss(w,e){if(!w.level?.encounter)return normalBoss(w,e);e.recoveryGate=true;if(w.level.encounter.sequence)return elderBoss(w,e);if(!['e1','e2'].includes(w.level.id))return e;const legendary=w.tierKey==='legendary';e.pilot=true;e.phaseShift={...e.phaseShift,at:.5};
 e.attacks=e.attacks.filter(a=>!['bomb barrage','double leap'].includes(a.name)).map(a=>({...a,fullTell:true,windup:Math.max(legendary?.8:1,Math.min(1.3,a.windup)),cd:a.cd*.55,dmg:(a.dmg||1)*1.5,recover:1.1}));
 if(w.level.id==='e1'){e.pilotCall='call the tribe';e.attacks=e.attacks.map(a=>a.name==='call the tribe'?{...a,count:2,max:2,label:'WATCH THE MARKED SIDE!',forced:true,uses:1,spots:'pilot-side',visibleTell:true,pilotGuards:true,mods:legendary?[null,'swift']:[],windup:1.4,recover:1.2,then:'camp sweep'}:a);
  e.attacks.push({name:'camp sweep',label:'STEP PAST THE CLUB!',state:'attack2',kind:'sweep',range:260,len:96,band:12,dur:1.1,windup:1.4,fullTell:true,dmg:1,cd:8,forced:true,fx:'fx-dust',fxs:'rise',recover:1.2});
 }else{e.attacks=e.attacks.map(a=>w.level.id==='e2'&&a.kind==='leap'?{...a,repeat:1,puddle:true,windup:1.3,...(legendary&&a.name==='double flop'?{then:'bog ripple'}:{})}:a.name==='spawn slimes'?{...a,count:2,max:2,cd:10,visibleTell:true}:a);
  e.attacks.push({name:'bog ripple',label:'STEP BACK FROM THE RIPPLE!',state:'attack2',kind:'wave',shape:'ring',previewReach:true,range:180,reach:90,r0:12,speed:75,band:8,windup:1.4,fullTell:true,dmg:.9,cd:8,forced:true,fx:'fx-slime-spawn',fxs:'rise',recover:1.2});}
 e.attacks=e.attacks.map(a=>['club smash','ground pound'].includes(a.name)?{...a,then:'camp sweep'}:w.level.id==='e2'&&a.kind==='leap'?{...a,then:'bog ripple'}:a);e.attacks=e.attacks.map(a=>({...a,recover:Math.max(legendary?3:3.8,a.recover||0)}));return e;}
/* After the phase animation, a single marked call introduces the Chief's new rule. */
export function pilotTick(e,w){normalTick(w,e);if(w?.level?.encounter?.veilmoor)veilTick(e,w);if(w?.level?.encounter?.emberkeep)emberTick(e,w);if(w?.level?.encounter?.elderwood)woodTick(e,w);if(e.pilotGuard&&w&&!(e.pilotTurn>w.time)){e.pilotFacing=e.facing;e.pilotTurn=w.time+.7;}if(e.pilotCall&&!e.pilotCalled&&e.brain?.phase===2&&['move','recover'].includes(e.brain.mode)){e.pilotCalled=true;e.brain.force=e.pilotCall;}}
/* Roots and the drill are supporting hazards, not a second boss hit: keep the full warning and cadence. */
export const pilotHitCap=(w,from)=>w.level?.encounter&&['e6','m4'].includes(w.level.id)&&from?.arenaHazard?w.player.maxHp*.15:!w.level?.encounter?(w.tierKey==='normal'&&['e7','e8'].includes(w.level?.id)&&(from?.by?.boss||from?.boss)?w.player.maxHp*.25:pacedNormal(w)?w.player.maxHp*((from?.by?.boss||from?.boss)? .20 : .15):Infinity):w.player.maxHp*(from?.by?.boss||from?.boss?(w.tierKey==='legendary'?.33:.28):(w.tierKey==='legendary'?.25:.20));

/* Only spawned pilot actors receive guard/poise. No roster or ability edits. Heavy and learned hits open a three-second
   window; ordinary shields can also be flanked. Boss armour must be cracked, then the entire kit can punish it. */
export function pilotEnemy(w,e){if(!w.level?.encounter)return normalEnemy(w,e);e.pilotPoise=true;e.pilotArmour=!!e.boss;e.pilotGuard=!e.boss&&!!e.mod;e.atk*=w.level.encounter.readable?1:w.tierKey==='legendary'?3.5:3;e.speed*=1.15;
 if(w.level.id==='ex1'&&e.key==='bandit-thug'&&!e.mod&&!e.helper){e.ai='still';e.attacks=[{name:'road dart',state:'attack',kind:'projectile',fx:'fx-hr-arrow',range:320,cd:2,windup:1.2,dmg:1,speed:115}];}if(e.key==='flying-eye'){e.ai='ranged';e.keep=105;e.attacks=[{name:'watcher bolt',state:'attack',kind:'projectile',fx:'fx-dm-orb-green',range:260,cd:1.4,windup:1,dmg:1,speed:125}];}if(e.key==='goblin'&&!e.mod&&!e.helper){e.ai='ranged';e.keep=100;e.attacks=[{name:'camp bolt',state:'attack',kind:'projectile',fx:'fx-goblin-king-orb',range:260,cd:1.5,windup:1,dmg:1,speed:125}];}
 e.attacks=(e.attacks||[]).map(a=>({...a,fullTell:true,windup:Math.max(w.tierKey==='legendary'?.8:1,a.windup),cd:a.cd*.65,recover:.35}));return e;}
export function pilotBlock(w,e,a){if(!w.level?.encounter||!(e.pilotArmour||e.pilotGuard))return false;
 if(a.heavy||!a.basic&&!a.trick){if(!(e.pilotOpen>w.time)){w.text(e.pilotArmour?'ARMOUR BROKEN!':'GUARD BROKEN!',e.x,e.y-34,'#ffe49a');w.burst(e.x,e.y,'#ffe49a',12,'shard');sfx('armour.crack');w.effect('ring',e.x,e.y,{radius:22,color:'#ffe49a',ground:true,life:.4,max:.4});}e.pilotOpen=w.time+3;e.ward=0;return false;}
 if(e.pilotOpen>w.time)return false;if(!e.pilotArmour&&Math.sign(w.player.x-e.x)!==(e.pilotFacing||e.facing||1))return false;
 if(w.time-(e.pilotSaid??-9)>.3){e.pilotSaid=w.time;w.text('Blocked!',e.x,e.y-34,'#b8dfff');w.burst(e.x,e.y,'#d9ecf5',8,'spark');sfx('blocked');}if(a.basic&&!a.heavy)blockedHint(w);return true;}

/* Count contacts, not targets in one swing. Transient per fight; no save or combat changes. */
export function blockedHint(w){const t=w.time,h=w.blockHint??={hits:[],next:-Infinity};h.hits=h.hits.filter(at=>t-at<=4);if(h.hits.at(-1)!==t)h.hits.push(t);if(h.hits.length<3||t<h.next)return false;h.hits=[];h.next=t+30;w.events.armourHint?.();return true;}

/* Resolve tier overrides before the authored contract, so they cannot replace its one-time call or warning floor.
   Keep transformed bodies and inherited duo moves on that same contract; never mutate nested roster data. */
function elderBoss(w,e){const r=w.level.encounter,l=w.tierKey==='legendary',floor=l?1:1.1;
 const moves=as=>tierAttacks(as,w.tierKey).map(({heroic,legendary,tiers,...a})=>({...a,fullTell:true,windup:Math.max(floor,a.windup||0),recover:Math.max(l?3:3.8,a.recover||0),...(a.kind==='summon'?{count:Math.min(2,a.count||1),max:2,visibleTell:true,spots:'pilot-side',pilotGuards:true}:{})}));
 e.pilot=true;e.attacks=moves(e.attacks);if(e.phaseShift)e.phaseShift={...e.phaseShift,at:r.phaseAt,...(e.phaseShift.trail&&!e.phaseShift.trail.burn&&!e.phaseShift.trail.dmg?{trail:{...e.phaseShift.trail,dmg:0}}:{})};
 if(e.key===r.boss){e.pilotCall=r.sequence.call;e.attacks=e.attacks.map(a=>a.name===r.sequence.call?{...a,forced:true,uses:1,windup:Math.max(1.4,a.windup),then:r.sequence.then,...(r.sequence.count?{count:r.sequence.count,max:r.sequence.count}:{})}:a);}
 if(e.rebirth)e.rebirth={...e.rebirth,attacks:moves(e.rebirth.attacks)};if(e.duoPower)e.duoPower={...e.duoPower,attacks:moves(e.duoPower.attacks)};const tuned=r.veilmoor?veilBoss(w,e):r.emberkeep?emberBoss(w,e):r.elderwood?woodBoss(w,e):e;tuned.attacks=tuned.attacks.map(a=>({...a,recover:Math.max(l?3:3.8,a.recover||0)}));return tuned;}
