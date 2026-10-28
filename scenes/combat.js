import {normalLevel} from './normal-pacing.js';
import {heavyName} from '../game/bindings.js';
import {advanceControls} from '../game/controls-tutorial.js';
import {composeEncounter,encounterHp} from '../game/tier-encounters.js';
import {pilotBoss,pilotTick,pilotHitCap,pilotEnemy,pilotBlock} from './tier-pilot.js';
import {admitEnemy,pumpEnemies,clearThreats,canBeginThreat} from './encounter-budget.js';
import {clearHazards,tierTick,tierLayer,clearLabelLayer} from './tier-fx.js';
import {usePotion,tickPotion,tickPotionWait,POTION_CAP} from '../game/potions.js';
import {CLASSES,BOSS,PETS,phase2Hp} from '../game/data.js';
export const PHASE2_HEAL=.6;
import {ABILITIES} from '../game/abilities.js';
import {activeLoadout,asleep} from '../academics/awakening.js';
import {ABILITY_FX,FX_ELEMENT} from '../game/ability-fx.js';
import {entranceFor,ENTRANCE_TIME,TENT_SPRITE} from '../game/entrances.js';
import {clamp,damage,stats,unlocked,mastery,abilityPower,abilityGuard,overLevelXP} from '../game/math.js';
import {TOWN} from '../game/maps.js';
import {levelById,levelDone,recordLevel,levelScore,levelReward,levelXPReward,arenaWave,arenaTier,difficultyOf,resolveOf,tiered,tierDone} from '../game/levels.js';
import {TIER_KEYS,tierKey,tierOf,tierLevel,tierScale,applyBossTier,tierBossTrim,rallyPoints,vampHeal,checkEnrage,splitParts,MODS,killGold,adviceLevel,killXP,winXP,bossAtkTrim} from '../game/tiers.js';
import {STAGE,BEATS,REBIRTH,levelGeometry,camTopFor,waveGroups,waveSide,stageKey} from '../game/stage.js';
import {baseDef,makeEnemy,entryEnemy} from '../game/roster.js';
import {TRACKS} from '../gfx/actors/definitions.js';
import {equipmentAnchors} from '../gfx/actors/render.js';
import {gearMul,gearHit,gearBlock,gearTaken,gearHurt,gearKill,gearDodge,gearSpend,gearTotemEnd,gearPotion,gearTick,gearShotLook} from './gear-fx.js';
import {sfx} from '../core/audio.js';
import {DODGE_CD,HITSTOP,hitstopFor,killQuake,coinsFor,COIN,stepCoin,motionOn,flashHit,comboStep,KILL_POP,NUMBER} from '../game/feel.js';
import {rollJewel,JEWEL,RARITY,petPower} from '../game/jewels.js';
/* the Summoner's spirits: speed px/s, leash px around the totem, reach px, rate s between strikes, lock s an attack holds, contact s */
const SUMMONS={wolf:{sprite:'summon-wolf',name:'Spirit Wolf',speed:150,leash:170,reach:14,rate:1.1,lock:.5,contact:.22,kb:60,side:16},
 guardian:{sprite:'summon-guardian',name:'Stone Guardian',speed:55,leash:70,reach:12,rate:1.5,lock:.6,contact:.3,kb:120,side:18,dy:-6},
 ancestor:{sprite:'summon-ancestor',name:'Ancestor',still:true,life:1.4,dy:-4,state:'attack'}};
/* what a hero's shots look like in flight: the Ranger looses arrows, the Rogue throws knives, the Summoner's bolts are pale spirit light */
const SHOT_LOOK={ranger:{sprite:'fx-hr-arrow'},summoner:{element:'ice'},'precision-shot':{sprite:'fx-hr-arrow'},'quick-shot':{sprite:'fx-hr-arrow'},'throwing-knife':{sprite:'fx-hr-knife'},'poison-dagger':{sprite:'fx-hr-knife'},'spirit-bolt':{element:'ice'},'spirit-wisp':{element:'ice'}};
import {spriteMeta,loadSprite,stateDuration,frameStart} from '../gfx/actors/sprites.js';
import {heroArtKey} from '../gfx/actors/hero-directions.js';
import {biomeMap} from '../gfx/biomes/index.js';
import {partyStart,updateParty,partyFocus,partyHurt,oldTarget,hurtOn} from './party-ai.js';
import {runCarry,runStart,runTick,runInteract,runSecret,runKill,runLayer,runFinish,runStats} from './run-fx.js';
/* v2:enemies */ import {runEnemy,drawEnemy,enemyLayer,tickIdleEnemyFx} from './enemy-ai.js';
import {stanceBlock,propHit,linkShield,panOf} from './boss-moves.js';
/* v2:hub */ import {applyBoons} from '../game/shops.js';
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
/* An enemy's body half-width: its atlas's ground-shadow radius when the sprite is loaded, else by size. Hit tests
   reach the body, not the feet point, so a sword that overlaps Grubnak hits Grubnak (playtest M4). */
/* The resource refills 4 a second in a fight (was 3; combat balance 15 Oct, docs/design/BALANCE.md): the higher rungs cost
   more, and at 3 a hero with a full hotbar spent most of a fight waiting on it. */
export const MP_REGEN=4;
const bodyR=e=>{const m=e.sprite?spriteMeta(e.sprite):null;return Math.max(6,(m?.shadow?.[0]||(e.boss?26:e.elite?16:10))*Math.max(1,e.scale||1)*.8);};
// The player commits through startup and contact, then regains control during
// recovery so combos still flow. Without this the character slides while swinging
// and every attack reads as weightless.
const LOCK={light0:.19,light1:.19,light2:.22,heavy:.38,cast:.29};
/* An ability's own animation, when the hero atlas has one ('ab-<id>', docs/CHARACTER_PIPELINE.md): its length, the
   time of its contact frame (when the hit lands) and a movement lock that ends shortly after contact. Null when the
   atlas has none (or isn't loaded, as in node tests): the ability falls back to the shared light2/cast pose. */
export function abilityTrack(hero,id){const st=(spriteMeta('hero-'+heroArtKey(hero))||spriteMeta('hero-'+hero))?.states?.['ab-'+id];if(!st)return null;const duration=stateDuration(st),c=st.contact?.[0];
 const contact=Number.isInteger(c)?frameStart(st,c):duration*.45;return{pose:'ab-'+id,duration,contact,lock:Math.min(duration,contact+.16)};}
/* COMBAT_BIBLE hitstop targets (light 60ms, heavy 110ms, finisher 160-200ms) live in game/feel.js with the crit and kill freezes. */
export const LOCK_PAD=40,HERO_MARGIN=64;
/* What a guarded boss takes (see hit()). */
export const BOSS_GUARD=.4;
/* Basic-attack balance (owner, 15 Oct: "the regular attack is super OP -- I'm able to beat the boss with pretty much just
   that"). From Emberkeep on a boss wears armour: basic hits and gear tricks deal BOSS_ARMOUR of their damage until an ability
   hit cracks it, which lasts CRACK_TIME s. A child's starter (every class has one from the first lesson) keeps it cracked
   most of the time; a hero who never casts fights the whole boss at half damage. Elderwood bosses (prologue, e1-e8) wear none. */
export const BOSS_ARMOUR=.5,CRACK_TIME=4,CAST_BUFFER=.4;
export const armouredLevel=l=>!!l&&l.kind==='level'&&!!l.chapter&&l.chapter!=='elderwood';
/* How many enemies may be committed to an attack at once. Without a cap the whole
   wave winds up together and there is no counterplay - the player is simply hit.
   Everyone else keeps pressure by circling at their preferred spacing. */
const MAX_ATTACKERS=2;
/* Screen shake, as amplitude in pixels and a duration, per the numbers in the bible's
   game-feel table. It used to be one unitless value on a single decay rate, so a light
   hit and an area blast differed only in how long they rang, never in how hard. */
const QUAKE={light:[2,.08],crit:[3,.11],aoe:[6,.18],hurt:[4,.14],land:[3,.1],boss:[7,.3]};
// The bible describes each ability's effect, but nothing read it, so all 56 shared
// about six patterns keyed only off `kind`. vfxShape is generated from that prose.
// Shapes that sit on the floor render before actors; shells and motes render over them.
const SHAPE={shockwave:'shockwave',plume:'shockwave',column:'column',pillar:'column',beam:'column',
 dome:'dome',burst:'burst',orbit:'orbit',bolt:'line',chain:'line',
 arc:'slash',trail:'slash',cone:'slash',ring:'ring',nova:'ring',cloud:'ring',spiral:'ring',vortex:'ring'};
const GROUNDED={shockwave:1,column:1,ring:1};
// What an impact throws off, from the bible's own wording. Falls back to the
// ability's element colour when the description does not say.
const GRIT={debris:{n:1.6,col:'#9d8f76',spread:1.3,rise:-4,life:.55},
 shard:{n:1.3,col:'#d9ecf5',spread:1.5,rise:-2,life:.4},
 crystal:{n:1.3,col:'#bfe8f2',spread:1.4,rise:-3,life:.45},
 ember:{n:1.4,col:'#ff9f5c',spread:.8,rise:-18,life:.7},
 spark:{n:1.7,col:'#fff0bb',spread:1.8,rise:-6,life:.3},
 dust:{n:1.2,col:'#c6bfa4',spread:.7,rise:-3,life:.6},
 mote:{n:1.1,col:'#dff0d8',spread:.5,rise:-14,life:.8},
 leaf:{n:1.2,col:'#8fc46e',spread:.9,rise:-9,life:.75}};
const shapeOf=(a,fallback)=>SHAPE[a.vfxShape]||fallback;
const colors={fire:'#ff9b58',ice:'#a5e3f5',storm:'#dae5ff',poison:'#b1db79',holy:'#ffe4a0',nature:'#8bd8a0',shadow:'#cd9eea',arcane:'#bdb2fa'};
/* Chapter -> the zone key that audio and the atmosphere grade already know. */
const ZONE={elderwood:'forest',emberkeep:'castle',veilmoor:'hall'};
export class World{
 constructor(save,events){this.save=save;this.events=events;this.zone='town';this.level=null;this.layout=null;this.lock=null;this.flow='town';this.flowT=0;this.camX=0;this.camFloor=0;this.enemies=[];this.shots=[];this.fx=[];this.totems=[];this.allies=[];this.time=0;this.shake=0;this.hitstop=0;this.paused=false;this.wave=0;this.group=0;this.buffer=0;this.charge=0;this.actions=[];this.trails=[];this.coins=[];this.resetPlayer();}
 /* new jewellery mid-level: recompute the stats, keep the hero where they are at the same share of health */
 refreshStats(){this.base=stats(this.save,CLASSES[this.save.hero]);runStats(this);const p=this.player;if(p&&p.maxHp){const f=p.hp/p.maxHp;p.maxHp=this.base.hp;p.hp=Math.max(1,Math.round(p.maxHp*f));}}
 resetPlayer(){this.blockHint=null;this.buffer=0;this.charge=0;this.attackHeld=false;this.controlsTutorial=null;this.base=stats(this.save,CLASSES[this.save.hero]);this.player={...this.base,x:TOWN.spawn.x,y:TOWN.spawn.y,appearance:this.save.hero,armor:this.save.equipment[this.save.hero]?.armor||0,anim:null,animAge:0,walkAge:0,direction:"down",facing:1,hp:this.base.hp,mp:this.base.mp,maxHp:this.base.hp,maxMp:this.base.mp,z:0,vz:0,inv:0,dodge:0,dodgeCd:0,attack:0,lightCd:0,combo:0,comboTime:0,stacks:0,stackTime:0,bank:0,shield:0,buffTime:0,attackBuff:1,speedBuff:1,cooldowns:{},flash:0,moving:false,tier:this.save.equipment[this.save.hero]?.weapon||0,gearCd:{}};this.gearZones=[];this.topSubj=null;this.pet=PETS.find(x=>x.key===this.save.pet);this.motion=motionOn(this.save);}
 town(){this.woodDuoNext=null;this.afterEpilogue=false;clearThreats(this);clearHazards(this);this.zone='town';this.level=null;this.tierKey='normal';this.tierMul={hp:1,atk:1};this.layout=null;this.lock=null;this.arena=false;this.flow='town';this.flowT=0;this.camX=0;this.camTop=0;this.camFloor=0;this.cinematicShot=null;this.actions=[];this.trails=[];this.coins=[];this.enemies=[];this.shots=[];this.fx=[];this.totems=[];this.allies=[];this.deathPending=false;this.ended=false;this.dark=null;this.flooded=0;this.lastCast=null;this.enemyFx=[];this.resetPlayer();}
 /* Starts a fight pad from game/levels.js: kind 'level' (waves, then the boss) or 'arena' (endless waves).
    Returns false for pads that are not fights (home, shop) -- main.js handles those. */
 /* opts.fromWave: a kind retry starts at that wave (the boss arena when it is past the last wave). */
 startLevel(id,opts={}){const l=levelById(id);if(!l||(l.kind!=='level'&&l.kind!=='arena'))return false;
  const learned=Number.isInteger(opts.fromWave)&&this.level?.id===id&&this.tut?{done:new Set(this.tut.done),moved:this.tut.moved}:null;
  /* the run layer (scenes/run-fx.js): a wave retry carries the run it retries, so a retried win is graded as one run */
  const prevRun=runCarry(this,id,opts),controls=this.controlsTutorial,thornRetry=id==='e8'&&this.level?.id===id&&this.level.encounter?.elderwood&&Number.isInteger(opts.fromWave)&&(!opts.tier||opts.tier===this.tierKey)&&this.boss?.phase===2;
  /* the difficulty ladder (game/tiers.js): opts.tier picks Normal, Heroic or Legendary; a wave retry keeps the tier it
     retries, and a tier whose tier below is not cleared yet plays as Normal */
  let k=tiered(l)?tierKey(opts.tier??(Number.isInteger(opts.fromWave)&&this.level?.id===id?this.tierKey:'normal')):'normal';const ki=TIER_KEYS.indexOf(k);if(ki>0&&!tierDone(this.save,id,TIER_KEYS[ki-1]))k='normal';
  this.town();this.tierKey=k;this.tierMul=tierScale(l,k);this.level=normalLevel(composeEncounter(l,k,tierLevel(l,k)),k);if(this.level.encounter){this.tierMul.hp*=this.level.encounter.hp/tierOf(k).hp;if(this.level.encounter.atk)this.tierMul.atk*=this.level.encounter.atk/tierOf(k).atk;else if(this.level.encounter.atkStep)this.tierMul.atk*=this.level.encounter.atkStep;}this.layout=levelGeometry(this.level);this.found=new Set(this.save.levels?.[id]?.secrets||[]);this.zone=ZONE[l.chapter]||'forest';this.arena=l.kind==='arena';
  /* a replay of a cleared tier, or the arena, pays half kill gold (game/tiers.js killGold) */
  this.replayGold=this.arena||tierDone(this.save,id,k);
  this.runGold=0;this.kills=0;this.wave=0;this.group=0;this.addsSpawned=false;this.run={time:0,damage:0,taken:0,xp:0,waves:0,bestiary:[],secrets:[],rec:l.kind==='level'?adviceLevel(l,k):0,hero:this.save.level||1};this.lastResult=null;this.rally=null;this.rallies=0;this.resolve=resolveOf(this.save,id);this.halfSaid=false;this.potHint=null;this.quote=null;
  runStart(this,l,k,prevRun);
  this.tut=l.tutorial?(learned||{done:new Set(),moved:0}):null;this.controlsTutorial=controls;if(this.controlsTutorial)this.events.persist?.();
  for(const key of new Set([...(this.level.waves||[]).flatMap(w=>waveGroups(w).flat().map(e=>typeof e==='string'?e:e.type)),l.boss].filter(Boolean))){const sp=baseDef(key).sprite;if(sp)loadSprite(sp);}
  const p=this.player;p.freePotion=1;p.drunk=0;p.potionWait=0;p.x=this.layout.spawn.x;p.y=this.layout.spawn.y;p.facing=1;this.camTop=camTopFor(this.layout,p.y);this.setFlow('intro');
  if(this.arena){this.lockTo(this.layout.arena);this.camX=this.camFloor=this.layout.arena.x0;}
  /* The Thorn King's phase-two checkpoint: until Thorn Keep is won, a retry starts at the transformed king. */
  else if(thornRetry||this.save.bossPhase2&&baseDef(l.boss).cinematic&&!levelDone(this.save,id)){const a=this.layout.boss;this.wave=this.layout.arenas.length;p.x=a.x0+60;this.camX=this.camFloor=a.x0;this.lockTo(a);const resumed=this.spawnBoss(a.x1-70);resumed.entered=true;if(thornRetry)this.boss=resumed;this.phase2();this.setFlow('boss');}
  else if(opts.fromWave>0){const L=this.layout,n=Math.min(opts.fromWave,L.arenas.length),a=n<L.arenas.length?L.arenas[n]:L.boss;if(a){this.wave=n;p.x=Math.max(L.spawn.x,a.x0-40);this.camX=this.camFloor=Math.max(0,Math.min(a.x0,p.x-STAGE.viewW*.4));this.retried=n;}}
  /* v2:hub */applyBoons(this);partyStart(this);
  /* oct25-phone2: phones get the short form, so it fits under the fight without covering a name or the boss (main.js toast places it) */
  if(this.level.encounter)this.events.toast?.(globalThis.document?.documentElement?.classList?.contains('m-mode')?`Break blue guards with a ${heavyName(this.save)}. Dodge, then punish.`+(this.save.settings.difficulty==='heroic'?' Potions heal 1/4.':''):`Break blue guards with a ${heavyName(this.save)} or ability; flank shielded foes. Dodge the combo, then punish.`+(this.save.settings.difficulty==='heroic'?' Potions heal one quarter; no between-wave heal.':''));this.events.wave?.();return true;}
 /* ---- the prologue's one-action-at-a-time teaching (levels.js tutorial). Each step is done by its event, even
    before it is shown; the prompt shown is the first step not done whose condition holds. */
 teach(ev){this.controlsTutorial=advanceControls(this.controlsTutorial,{moved:'move',attacked:'attack',dodged:'dodge',heavy:'heavy',cast:'ability',interact:'interact'}[ev]);if(!this.tut)return;this.tut.done.add(ev);}
 /* A boss's guards: the level's own bossAdds, else 3-4 of the regulars from its own waves. */
 rallyAdds(){const l=this.level;if(l.bossAdds?.length)return l.bossAdds;const keys=[...new Set((l.waves||[]).flatMap(w=>waveGroups(w).flat()).filter(e=>typeof e==='string'))];
  const n=(l.tier||1)>3?4:3;return Array.from({length:n},(_,i)=>keys[i%Math.max(1,keys.length)]||'goblin');}
 /* An ambush opens from behind the hero, then closes in from both sides; other waves keep their own side. */
 sideOf(w,g){if(w?.ambush)return g===0?(this.player.facing>=0?'left':'right'):'both';return waveSide(w);}
 /* A soft push keeps every two enemies at least 12 px apart (more for big bodies), so a wave never stacks into one blob. */
 separate(e,dt,b){for(const o of this.enemies){if(o===e||o.hp<=0||!o.entered)continue;const dx=e.x-o.x,dy=(e.y-o.y)*1.6,d=Math.hypot(dx,dy),min=Math.max(12,(bodyR(e)+bodyR(o))*.55);
  if(d<min){const k=Math.min(1,dt*6)*(min-d)/(d||1),nx=e.x+(d?dx:Math.random()-.5)*k*.5,ny=e.y+(d?dy/1.6:0)*k*.5;if(!this.layout?.blocked(nx,ny)){e.x=b?clamp(nx,b.x0,b.x1):nx;e.y=b?clamp(ny,b.y0,b.y1):ny;}}}}
 /* The hero never stands inside a big body: out of any boss's or large enemy's foot ellipse, sideways first (a dodge passes through). */
 pushOut(pb,pm){const p=this.player;if(p.dodge>0)return;for(const e of this.enemies){if(e.hp<=0||!e.entered)continue;const r=bodyR(e);if(!e.boss&&r<14)continue;
  const rx=r*.9,ry=Math.max(5,rx*.35),dx=p.x-e.x,dy=p.y-e.y,q=(dx/rx)**2+(dy/ry)**2;if(q>=1)continue;
  const side=dx>=0?1:-1,nx=e.x+side*(rx*Math.sqrt(Math.max(0,1-(dy/ry)**2))+1);
  if(nx>=pb.x0+pm&&nx<=pb.x1-pm&&!this.layout.blocked(nx,p.y))p.x=nx;else p.y=clamp(e.y+(dy>=0?1:-1)*(ry+1),pb.y0,pb.y1);}}
 /* A boss's mark keeps 24 px clear of the map's in-band props (lamp posts, steps, statues) and collision: slide left from the
    intended spot until it is clear, never out of its arena. */
 clearSpot(x,y,a){const D=biomeMap(stageKey(this.level)),L=this.layout,R=24,ft=L.floorTop,fb=L.floorBottom;
  const props=(D?.sprites||[]).filter(s=>s[5]>ft-4&&s[5]<=fb+4);
  const clear=cx=>!props.some(s=>cx>s[1]-R&&cx<s[1]+s[3]+R&&Math.abs(s[5]-y)<R)&&![-R,0,R].some(o=>L.blocked(cx+o,y)||L.blocked(cx,y+o*.5));
  for(let dx=0;dx<=200;dx+=8){if(x-dx>a.x0+60&&clear(x-dx))return x-dx;}return x;}
 /* A boss's spoken line (its phase change, its half-health taunt) shows as a stage banner for 2.5 s. */
 say(text){if(text&&this.run)this.quote={text,at:this.run.time};}
 tutorialStep(){const t=this.tut;if(!t||!this.level?.tutorial)return null;const ids=activeLoadout(this.save),ready=ABILITIES[this.save.hero]?.some(a=>ids.includes(a.id)&&unlocked(this.save,a));
  for(const s of this.level.tutorial){if(t.done.has(s.done))continue;if(s.when==='ability'&&!ready)continue;if(s.when==='windup'&&!t.done.has('windup'))continue;return s.id;}return null;}
 setFlow(f){if(!['wave','boss'].includes(f))clearHazards(this);this.flow=f;this.flowT=0;}
 /* A wave's camera box is the arena plus LOCK_PAD on each side: the camera follows the hero inside it and the hero keeps
    HERO_MARGIN from its edges, so the hero is never pinned to the screen edge mid-fight (art director round 3). */
 lockTo(a){const W=this.layout?.width??a.x1;this.lock={x0:Math.max(0,a.x0-LOCK_PAD),x1:Math.min(W,a.x1+LOCK_PAD)};}
 /* The next fight to the right: an arena, else the boss arena. */
 nextArena(){const L=this.layout;if(!L)return null;if(this.arena)return null;return this.wave<L.arenas.length?L.arenas[this.wave]:this.flow==='boss'||this.flow==='bossintro'||this.flow==='rebirth'||this.flow==='victory'?null:L.boss;}
 /* Where actors may stand right now: the locked arena, or the stage from the camera's left edge on.
    In town (no stage) it is the old 700-wide map. */
 bounds(){const L=this.layout;if(!L)return {x0:35,x1:665,y0:70,y1:TOWN.height-25};
  const x0=this.lock?this.lock.x0:this.camFloor,x1=this.lock?this.lock.x1:L.width;return {x0:x0+10,x1:x1-10,y0:L.floorTop+4,y1:L.floorBottom-2};}
 admitEnemy(e){pilotEnemy(this,e);return admitEnemy(this,e);}
 waveDef(){return this.arena?arenaWave(this.level,this.wave):this.level?.waves[this.wave];}
 tier(){return this.arena?arenaTier(this.level,this.wave):this.level?.tier||1;}
 /* Skips the walk: puts the player on the next trigger and starts that fight now (tests, the playtest
    driver). skipIntro also ends a boss intro at once. */
 engage(skipIntro=false){const a=this.nextArena();if(!a)return false;if(this.flow==='intro')this.setFlow('walk');this.player.x=a.trigger;this.camX=this.camFloor=a.x0;this.stageFlow(0);if(skipIntro&&this.flow==='bossintro'){this.flowT=BEATS.bossIntro;this.stageFlow(0);}return true;}
 startWave(){const a=this.arena?this.layout.arena:this.layout.arenas[this.wave];this.lockTo(a);this.teach('wave');this.group=0;this.setFlow('wave');const w=this.waveDef();this.spawnGroup(waveGroups(w)[0],this.sideOf(w,0),0);this.events.wave?.();}
 /* A group arrives from just off-screen and walks in. side 'both' alternates edges. */
 /* A group arrives from just off-screen and walks in. side 'both' alternates edges. Rows of arrival come from
    the map's lanes when it has them, else an even spread across the floor band in a centre-out order, with a
    little stagger in x, so a group reads as a group rather than a diagonal queue. */
 spawnGroup(list,side='right',g=0){const L=this.layout,b=this.lock||{x0:this.camX,x1:this.camX+STAGE.viewW},tier=this.tier(),n=(list||[]).length;
  const top=L.floorTop+10,bot=Math.min(L.floorBottom-6,(this.camTop||0)+STAGE.viewH-STAGE.hudBottom-12),ORDER=[.5,.15,.85,.33,.67,0,1],rowY=k=>top+Math.round((bot-top)*ORDER[k%ORDER.length]);
  (list||[]).forEach((entry,i)=>{const lanesFor=sd=>L.lanes.filter(l=>!l.side||l.side===sd),left=side==='left'||(side==='both'&&i%2===1),sd=left?'left':'right',lanes=lanesFor(sd);
   const k=side==='both'?i>>1:i,y=lanes.length?lanes[(k+g)%lanes.length].y:rowY(k+g),dx=16+(k%3)*14+(k>2?20:0);
   const j=()=>(Math.random()<.5?-1:1)*(10+Math.random()*6),def=entryEnemy(entry,tier),kind=this.showEntrances()?entranceFor(def.key,this.level?.biome,i):null;
   /* an entrance (game/entrances.js): appear inside the arena, away from the hero, instead of walking in from the edge.
      Tents stand along the back of the path at three sites, shared by whoever comes out of them (review round 2: one per
      goblin, dropped mid-path, piled up), and the goblin steps out in front of its tent. */
   if(kind==='tent'){const sites=[.2,.5,.8].map(f=>b.x0+60+(b.x1-b.x0-120)*f).filter(x=>Math.abs(x-this.player.x)>=70),x=(sites.length?sites:[b.x0+60])[(k+g)%(sites.length||1)];this.enter(this.spawn(def,x+18+j()*.4,top+8+Math.abs(j())*.4),kind,i*.12,false,{x,y:top});}
   else if(kind){const span=Math.max(1,b.x1-b.x0-100);let x=b.x0+50+Math.random()*span;for(let t=0;t<6&&Math.abs(x-this.player.x)<80;t++)x=b.x0+50+Math.random()*span;this.enter(this.spawn(def,x,clamp(y+j()*.6,top,bot)),kind,i*.12);}
   else this.spawn(def,(left?b.x0-dx:b.x1+dx)+j()*.5,clamp(y+j()*.6,top,bot));});}
 /* Entrances play in a browser (they are a show); node tests opt in with world.entrances=true. */
 showEntrances(){return this.entrances??(typeof Image!=='undefined');}
 /* The enemy shows itself before it fights: for its entrance time it neither acts nor can be hit (owner, 8 Oct). */
 enter(e,kind,delay=0,boss=false,site=null){if(!e)return e;const T=ENTRANCE_TIME[kind]*(boss?1.4:1)+delay;e.entrance=kind;e.entering=e.enterMax=T;e.entered=true;e.facing=this.player.x>=e.x?1:-1;
  if(kind==='rise'){this.fx.push({type:'mark',sprite:'fx-wr-crack',x:e.x,y:e.y,life:T+1.6,max:T+1.6,ground:true,reveal:.25,upto:boss?.8:.45,flip:1});this.schedule(delay,()=>this.fx.push({type:'debris',sprite:'fx-wr-rocks',x:e.x,y:e.y,life:.6,max:.6,flip:1}),()=>true);}
  else if(kind==='tent'){const at=site||{x:e.x,y:e.y-2},had=this.fx.find(f=>f.type==='prop'&&f.tent&&Math.abs(f.x-at.x)<30&&Math.abs(f.y-at.y)<30);
   if(had)had.life=had.max=Math.max(had.life,40);else this.fx.push({type:'prop',tent:true,scale:['e1','e3'].includes(this.level?.id)?0.5:1,sprite:TENT_SPRITE(boss,this.fx.filter(f=>f.tent).length),x:at.x,y:at.y,life:40,max:40,flip:1});}
  /* a vine swing (owner, 9 Oct): from behind, on the side away from the hero, out of the treeline; it lets go near the
     bottom of the arc and lands where its shadow already waits (enemy-ai.js draws the swing) */
  else if(kind==='vine'){e.vine={side:e.facing};this.schedule(T*.86,()=>{this.fx.push({type:'debris',sprite:'fx-dust',x:e.x,y:e.y,life:.5,max:.5,flip:e.facing});sfx('land');},()=>e.hp>0);}
  else if(kind==='drop')this.schedule(T,()=>this.effect('ring',e.x,e.y,{radius:13,ground:true,color:'#dbe3bd'}),()=>e.hp>0);
  return e;}
/* Every enemy that appears is seen in the Bestiary; kill() counts the defeats. */
 note(key,field){if(!key)return false;const b=this.save.bestiary??={};const r=b[key]??={seen:0,defeated:0};const first=!r[field];r[field]=(r[field]|0)+1;return first;}
 /* No two arrivals on one spot or one frame: a body already within 8 px moves this one 10-16 px, and every enemy starts
    its animation at a random phase (summons included). */
 spawn(def,x,y){this.note(def.key,'seen');for(let i=0;i<4&&this.enemies.some(o=>o.hp>0&&Math.abs(o.x-x)<8&&Math.abs(o.y-y)<8);i++){x+=(Math.random()<.5?-1:1)*(10+Math.random()*6);if(this.layout)y=clamp(y+(Math.random()<.5?-1:1)*(10+Math.random()*6),this.layout.floorTop+6,this.layout.floorBottom-4);}if(this.level){const D=difficultyOf(this.save);def={...def,hp:Math.max(1,Math.round(def.hp*D.hp*(this.tierMul?.hp||1)*tierBossTrim(this.level.id,this.tierKey,def.boss)*encounterHp(this.level.encounter,def.boss)))};}const e={...def,animAge:0,walkAge:0,x,y,hp:def.hp,maxHp:def.hp,facing:x>this.player.x?-1:1,attack:0,flash:0,wind:0,cool:1+this.enemies.filter(o=>o.hp>0).length*.25,inv:0,statusTime:0,exposed:0,marked:0,phase:1,attackCount:0,animAge:Math.random()*2,walkAge:Math.random()*2,stateT:Math.random()*.6,entered:!this.lock||(x>=this.lock.x0&&x<=this.lock.x1)};pilotEnemy(this,e);return admitEnemy(this,e);}
 spawnBoss(x,key=this.level.boss,name=this.level.duo?null:this.level.bossName){const l=this.level,e=this.spawn(makeEnemy(key,{tier:l.tier,boss:true,name}),x,Math.round((this.layout.floorTop+this.layout.floorBottom)/2)),kind=this.showEntrances()?entranceFor(key,l.biome):null;
  /* a second form's body loads while the first one fights, so the rebirth never shows an empty frame */
  if(e.rebirth?.sprite)loadSprite(e.rebirth.sprite);
  /* two bosses at once each bring a little under three quarters of their health, so the fight is longer but not double */
  if(l.duo){e.hp=e.maxHp=Math.round(e.maxHp*.72);}
  /* Heroic and Legendary: the boss's own attacks on a faster pattern, an earlier phase change on Legendary (game/tiers.js) */
  applyBossTier(e,this.tierKey);pilotBoss(this,e);return kind?this.enter(e,kind,0,true):e;}
 /* The boss arena locks, the boss walks on under its name card, and only then does the fight start. */
 bossIntro(){const a=this.layout.boss;this.lockTo(a);this.enemies=this.enemies.filter(e=>e.hp>0);const e=this.spawnBoss(a.x1+30);const mk=this.layout.bossMark;if(mk&&mk.x>a.x0+60&&mk.x<a.x1-40)e.y=mk.y;e.introFrom=e.x;e.introTo=mk&&mk.x>a.x0+60&&mk.x<a.x1-40?mk.x:this.clearSpot(a.x1-Math.max(110,Math.round(bodyR(e)*2.4+48)),e.y,a);e.facing=-1;this.boss=e;this.partner=null;
  /* A duo stage (owner, 8 Oct, after Ornstein & Smough: "stages that have 2 similar bosses that fight against u"): the second boss
     walks on beside the first, and the two share the fight; when one falls the other takes its power (kill, duoPower). */
  if(this.level.duo){const d=this.spawnBoss(a.x1+80,this.level.duo);d.y=Math.round(e.y+(e.y>(this.layout.floorTop+this.layout.floorBottom)/2?-26:26));d.introFrom=d.x;d.introTo=this.clearSpot(Math.max(a.x0+90,e.introTo-96),d.y,a);d.facing=-1;e.partner=d;d.partner=e;this.partner=d;}
  this.setFlow('bossintro');this.events.wave?.();}
 waveCleared(){const p=this.player;this.wave++;this.run.waves++;p.hp=Math.min(p.maxHp,p.hp+p.maxHp*(this.level.encounter&&this.save.settings.difficulty==='heroic'?0:.18));p.mp=p.maxMp;this.totems=[];this.allies=[];this.enemies=[];this.shots=this.shots.filter(s=>!s.hostile);
  this.teach('cleared');if(this.arena)this.setFlow('arenabreak');else if(this.wave>=this.layout.arenas.length&&!this.layout.boss){this.slowmo=.4;this.setFlow('victory');}else if(this.wave<this.layout.arenas.length&&this.layout.arenas[this.wave]===this.layout.arenas[this.wave-1])this.setFlow('regroup');else{this.lock=null;this.setFlow('go');}this.events.wave?.();}
 /* The level's state machine: intro -> walk -> wave (locked) -> go (unlocked, GO ->) -> ... -> bossintro -> boss -> victory.
    An arena runs intro -> wave -> arenabreak -> wave ... until the player falls. */
 stageFlow(dt){if(!this.layout||this.ended)return;const p=this.player;this.flowT+=dt;const f=this.flow;
  if(f!=='intro'&&f!=='victory')this.run.time+=dt;
  runTick(this,dt);
  if(f==='intro'){if(this.flowT>=BEATS.fade){if(this.arena)this.startWave();else this.setFlow('walk');}return;}
  if(f==='walk'||f==='go'){const a=this.nextArena();if(a&&p.x>=a.trigger){if(a===this.layout.boss)this.bossIntro();else this.startWave();}return;}
  if(f==='arenabreak'||f==='regroup'){if(this.flowT>=BEATS.arenaBreak)this.startWave();return;}
  if(f==='wave'){if(this.reinforcements?.length)return;if(this.enemies.some(e=>e.hp>0||e.deathTime>0))return;const groups=waveGroups(this.waveDef());
   /* the prologue never ends before every lesson has had its moment: while a prompt (dodge, power) is still waiting,
      two more scouts come in (at most four times) so the child gets to try it */
   if(this.tut&&!this.save.settings.controlsSeen&&this.group+1>=groups.length&&this.wave+1>=this.level.waves.length){const st=this.tutorialStep();if(st&&st!=='finish'&&(this.tut.extra||0)<4){this.tut.extra=(this.tut.extra||0)+1;this.spawnGroup(['goblin','goblin'],'both',this.group+this.tut.extra);return;}}
   if(this.group+1<groups.length){this.group++;this.spawnGroup(groups[this.group],this.sideOf(this.waveDef(),this.group),this.group);this.events.wave?.();}else this.waveCleared();return;}
  if(f==='bossintro'){for(const e of [this.boss,this.partner])if(e){const k=Math.min(1,this.flowT/(BEATS.bossIntro*.6));e.x=e.introFrom+(e.introTo-e.introFrom)*(1-(1-k)*(1-k));e.moving=k<1;e.facing=-1;if(e.moving)e.walkAge=(e.walkAge||0)+dt;}
   if(this.flowT>=BEATS.bossIntro){for(const e of [this.boss,this.partner])if(e){e.x=e.introTo;e.entered=true;e.moving=false;}this.setFlow('boss');}return;}
  /* the second life plays out here (rebirth/reform): fall, rise changed, a new name card and a refilling bar */
  if(f==='rebirth'){const e=this.boss,rb=e?.rebirth;if(!e||!rb){this.setFlow('boss');return;}e.stateT=(e.stateT||0)+dt;
   if(e.reborn==='dying'&&this.flowT>=REBIRTH.fall)this.reform(e);
   if(e.reborn==='rising')e.hp=Math.max(1,Math.round(e.maxHp*Math.min(1,(this.flowT-REBIRTH.fall)/(REBIRTH.card-REBIRTH.fall-.5))));
   if(this.flowT>=REBIRTH.card){e.hp=e.maxHp;e.inv=0;e.reborn=true;e.cool=1.2;e.lastHit=null;this.setFlow('boss');}return;}
  if(f==='boss'){const bosses=this.enemies.filter(e=>e.boss),boss=bosses.find(e=>e.hp>0);
   /* Phase-two rally (playtest S3: bosses fell in 36-43 s): at half health a boss raises its guard and calls its own guards.
      It takes no damage until they fall (or 20 s pass), then it is open again -- length from a pattern, not from health. */
   /* twice: at half health, and a last stand at a fifth */
   const rallyAt=this.level.encounter?null:rallyPoints(this.tierKey)[this.rallies|0];if(boss&&!boss.partner&&rallyAt&&(!this.rally||this.rally.ended!=null)&&!boss.cinematic&&boss.hp<boss.maxHp*rallyAt&&boss.inv<1){this.rallies=(this.rallies|0)+1;this.rally={at:this.run.time,ended:null};boss.shielded=true;this.text('DEFEAT THE GUARDS!',boss.x,boss.y-72,'#ffd27a',true);sfx('blocked',undefined,{pan:panOf(this,boss.x)});this.spawnGroup(this.rallyAdds(),'both',this.rallies);}
   if(this.rally&&!this.rally.ended&&boss){const guards=[...this.enemies,...(this.reinforcements||[])].some(e=>!e.boss&&!e.decoy&&!e.helper&&(e.hp>0||e.deathTime>0)),t=this.run.time-this.rally.at;if((!guards&&t>1.5)||t>20){boss.shielded=false;this.rally.ended=this.run.time;}}
   /* the boss's line at half health (ENEMY_TYPES `half`), shown for 2.5 s */
   if(boss&&!this.halfSaid&&boss.half&&boss.hp<boss.maxHp*.5){this.halfSaid=true;this.quote={text:boss.half,at:this.run.time};}
   if(bosses.length&&!boss){clearThreats(this);for(const e of this.enemies)if(e.hp>0){e.hp=0;this.animate(e,'death');e.deathTime=.7;}this.shots=[];this.slowmo=.6;this.quake('boss');this.setFlow('victory');}return;}
  /* v2:enemies -- let the boss's death animation finish (hold and fade) before the results, at most 4 s */
  if(f==='victory'&&this.flowT>=BEATS.victory&&(this.flowT>=4||!this.enemies.some(e=>e.boss&&e.deathTime>0)))this.finish(true);}
 /* The camera eases to a locked arena, otherwise leads the player; it never scrolls back (Castle Crashers). */
 follow(dt){const L=this.layout;if(!L)return;const W=/* v2:ui-mobile */STAGE.camW;this.camTop=camTopFor(L,this.player.y);const lo=this.lock?this.lock.x0:0,hi=this.lock?Math.max(this.lock.x0,this.lock.x1-W):Math.max(0,L.width-W);let target=clamp(this.player.x-W*(this.lock?.5:.4),lo,hi);if(!this.lock)target=Math.max(target,this.camFloor);
  /* 25 Oct (phone): the touch controls cover the screen's sides (joystick ghost left, action arc right; ui/mobile.js measures them into STAGE.padL/padR, 0 on desktop). At an arena edge the camera may look past the edge by that much, so the hero never stands under a button. Hero bounds are unchanged. */
  let pr=STAGE.padR||0,pl=0;
  /* camface-oct28 (phone safe zone): the hero stood under the top-left hero panel at the top of the floor band. While his head (46 px above his feet on the ground; a jump does not move the camera) is level with a top HUD obstacle, keep him that far from its side, faded in over 12 px of height so the camera eases and never steps. Desktop has none (ui/mobile.js measurePads) */
  {const head=this.player.y-this.camTop-46,k=b=>Math.max(0,Math.min(1,(b+14-head)/12));for(const [n,b] of STAGE.hudTL||[])pl=Math.max(pl,n*k(b));for(const [n,b] of STAGE.hudTR||[])pr=Math.max(pr,n*k(b));
  /* campad-oct28 (joystick pad fade): the joystick ghost's pad used to switch on when his feet passed padLTop, below the panel's pad, so walking down the left edge the camera eased one way as the panel pad faded out and back as the joystick pad switched on. It now fades in over 12 px the same way, and is full by the height where the panel pad starts to fall below it (feet = panel bottom + 48), so the left pad only ever narrows or widens one way down the band. In a boss fight (a live boss in the locked arena) the camera is the camface-oct28 one: the old on/off joystick pad, and the top pads held to the old 35% cap. The fade and the wider panel pad held the hero further right and pushed the boss off screen for longer (lead review 28 Oct: 603 of 885 frames at 740 against 451); a rule letting the panel pad yield only when the boss would leave the view still lost frames to easing and the fight-centring, so a boss fight keeps the old pads exactly */
  const J=STAGE.padL||0,bo=J&&this.lock?(this.enemies||[]).find(e=>e.boss&&e.hp>0&&!e.decoy):null;if(bo){pl=0;pr=STAGE.padR||0;const cap=W*.35;for(const [n,b] of STAGE.hudTL||[])pl=Math.max(pl,Math.min(cap,n)*k(b));for(const [n,b] of STAGE.hudTR||[])pr=Math.max(pr,Math.min(cap,n)*k(b));pl=Math.max(pl,head+46>(STAGE.padLTop||0)?J:0);}else if(J){const TL=STAGE.hudTL||[],m=Math.min(J,Math.max(0,...TL.map(e=>e[0]))),Y=Math.min(STAGE.padLTop||0,...TL.filter(e=>e[0]>=m).map(e=>e[1]+48));pl=Math.max(pl,J*Math.max(0,Math.min(1,(head+46-Y+12)/12)));}}
  if(pl||pr){const x=this.player.x;/* oct25-phone2: in a locked fight the camera centres the hero and the live foes (boss included) in the band the controls leave free, so a foe at the arena's right edge is not stood behind the ability column. When they do not all fit, the hero keeps a margin inside the band and the view shows as many foes as it can. The hero rules below still win. */if(this.lock){let a=x,b=x;for(const e of this.enemies||[])if(e.hp>0&&!e.decoy&&!e.helper){a=Math.min(a,e.x);b=Math.max(b,e.x);}if(a<b){const M=Math.min(40,(W-pr-pl)/4);target=clamp((a+b)/2-(pl+(W-pr-pl)/2),x-(W-pr-M),x-(pl+M));}}if(x-target>W-pr)target=x-(W-pr);if(x-target<pl)target=x-pl;target=clamp(target,Math.min(lo,(this.lock?lo:this.camFloor)-pl),hi+pr);}
  this.camX+=(target-this.camX)*Math.min(1,dt*5);if(Math.abs(target-this.camX)<.5)this.camX=target;if(!this.lock)this.camFloor=Math.max(this.camFloor,this.camX);}
 /* Ends the run: writes save.levels, banks gold and loot, and hands the result to main.js. A win pays the
    run's gold plus the level reward (a quarter on replays); a fall banks every coin earned so far, and
    never touches XP, mastery or unlocks. An arena always ends in a fall and pays its run gold in full. */
 finish(won){if(this.ended||!this.level)return null;this.ended=true;clearThreats(this);clearHazards(this);const l=this.level,time=Math.round(this.run.time*10)/10;
  const k=this.tierKey||'normal',score=levelScore(l,{kills:this.kills,damage:this.run.damage,taken:this.run.taken,time,won,waves:this.run.waves,tier:k});
  const rec=recordLevel(this.save,l.id,{won,time:Math.round((this.run.time+(this.run.carry||0))*10)/10,score,tier:k,knockouts:this.run.knockouts|0});if(won)this.save.petBond[this.save.pet]=((this.save.petBond??={})[this.save.pet]||0)+1;
  /* Kind failure (owner, 8 Oct): a fall keeps every coin earned so far. */
  let gold=this.arena||!won?this.runGold:this.runGold+(rec.first?levelReward(l,k):Math.round(levelReward(l,k)/4));
  if(!this.arena){const lv=this.save.levels[l.id];lv.resolve=won?0:(lv.resolve|0)+1;}
  if(this.save.pet==='loot')gold=Math.round(gold*(1+petPower(this.save)));this.save.gold+=gold;
  /* the run layer: grade, best grade, Delver XP, Victory Chests, the Boss Meter (scenes/run-fx.js); null on arenas and the prologue */
  const runR=this.arena?null:runFinish(this,won,{time,gold});
  /* balance-oct26: the victory bonus (game/tiers.js winXP), a share of the run's kill XP, only on a win; a fall keeps what it earned */
  let winBonus=0;if(won&&!this.arena&&l.kind==='level'){winBonus=winXP((this.run.killXP||0)+(this.run.killCarry||0),k);if(winBonus){this.run.xp+=winBonus;this.events.xp?.(winBonus);}}
  const loot=[];let clearXP=0;if(rec.first){this.save.potions++;loot.push('Health potion');const x=clearXP=this.runXP(levelXPReward(l,k));if(x){this.run.xp+=x;this.events.xp?.(x);}}
  this.events.persist?.();
  const top=this.save.levels[l.id],r=k==='normal'?top:top.tiers[k];this.lastResult={id:l.id,won,tier:k,tierLabel:tierOf(k).label,boss:l.boss?this.enemies.find(e=>e.boss)||null:null,stats:{levelUp:this.run.levelUp||null,reducedXP:this.run.damped?this.run.rec:0,clearXP,winXP:winBonus,retryWave:won?null:Math.min(this.wave,this.layout.arenas.length),resolve:resolveOf(this.save,l.id),bestiary:[...this.run.bestiary],secrets:[...this.run.secrets],gear:[...(this.run.gear||[])],mats:{...(this.run.mats||{})},/* late playtest 24 Oct: after "Retry boss fight" the result showed only the retry (0:13) beside stars and a record
   worked out on the whole run (4:52); it shows the whole run now */time:Math.round((time+(this.run.carry||0))*10)/10,/* lategame-oct27: this attempt alone (game/party.js lossXP) */attempt:time,damage:Math.round(this.run.damage),taken:Math.round(this.run.taken),kills:this.kills,gold,xp:this.run.xp,loot,score,waves:this.run.waves,first:rec.first,recordTime:rec.recordTime,recordScore:rec.recordScore,stars:rec.stars,newStars:rec.newStars,best:{...r.best},plays:r.plays,run:runR}};
  this.events.levelEnd?.(this.lastResult);return this.lastResult;}
 /* v2:enemies -- seam. Return true when ENEMY_AI[e.ai] (scenes/enemy-ai.js) drove this enemy this frame;
    the built-in AI below then skips it. Helpers an AI can use: this.player, this.bounds(), this.hurt(base,from),
    this.schedule(delay,fn,guard), this.spawn(makeEnemy(key,{tier}),x,y), this.effect(), this.shots, this.animate(). */
 enemyAI(e,dt){pilotTick(e,this);return partyFocus(this,e,dt,()=>runEnemy(e,this,dt));}
 /* v2:enemies -- seam. Return true after drawing e yourself (drawSprite when e.sprite is set). gfx/world.js
    calls this first and falls back to the procedural body. c is in world units; snap x/y to whole units. */
 drawEnemy(c,e,t){return drawEnemy(c,e,t);}
 /* v2:enemies -- telegraph markers (painted now, under actors) plus depth-sorted enemy projectiles and hazards. */
 enemyLayer(c,t){const labels=clearLabelLayer(this,c);tierLayer(this,c);return [...enemyLayer(c,this,t),...runLayer(this,c,t),labels];}
 /* Secrets marked on the level map (props.secret, props.loot). Walking onto one, or pressing interact beside it,
    pays its loot once per level: the id goes into save.levels[id].secrets and is never paid again. */
 nearSecret(r=26){const p=this.player;return (this.layout?.secrets||[]).find(s=>!this.found.has(s.id)&&Math.hypot(s.x-p.x,s.y-p.y)<r)||null;}
 checkSecrets(pressed){const s=this.nearSecret(pressed?30:14);if(s)this.collectSecret(s);return s;}
 interact(){this.teach('interact');return runInteract(this)||!!this.checkSecrets(true);}
 /* Run layer: a spot's first find pays its loot (once ever); on a drafted level every later find pays Essence and counts
    for the grade (scenes/run-fx.js runSecret). */
 collectSecret(s){const loot=runSecret(this,s);if(!loot)return null;
  this.text(`+${loot.label}`,s.x,s.y-20,'#f3d98a',true);sfx('potion');this.events.secret?.(s,loot);this.events.persist?.();return loot;}
 animate(a,name){a.anim=name;a.animAge=0;}
 // Every scheduled hit carries a guard. A stale guard means the action that queued it
 // was superseded - a new attack, a dodge, or death - so the hit simply never lands.
 schedule(delay,fn,guard){this.actions.push({delay,fn,guard});}
 // One owner at a time. Bumping the token invalidates whatever the previous action queued.
 claim(name,duration,lock=0){const p=this.player;p.token=(p.token||0)+1;p.attack=duration;p.moveLock=lock;this.animate(p,name);return p.token;}
 busy(){const p=this.player;return p.attack>0||p.dodge>0||p.z>1;}
 owned(token){return()=>this.player.token===token&&this.player.hp>0&&this.player.dodge<=0;}
 // Frame the shot on the king plus a per-beat offset.
 cinematicBeat(beat){const king=this.enemies.find(e=>e.boss);if(!king)return;
  const [dx,dy]=beat.shot||[0,-16];
  this.cinematicTarget={x:king.x+dx,y:king.y+dy};
  if(!this.cinematicShot)this.cinematicShot={...this.cinematicTarget};
  /* latechap-oct27: the epilogue freezes everyone where the fight ended, and Wil stood on the hero (m7, Moltar's kneel); he steps a pace back first, never into a wall */
  {const p=this.player,c=this.party?.[0];if(c&&p&&Math.hypot(c.x-p.x,c.y-p.y)<30){const side=king.x>=p.x?-1:1;for(const [ox,oy] of [[36*side,6],[36*side,-6],[26*side,14]]){const x=p.x+ox,y=p.y+oy;if(!this.layout?.blocked?.(x,y)){c.x=x;c.y=y;c.facing=-side;break;}}}}
  if(beat.pose)this.animate(king,beat.pose);
  /* oct24-polish2: the king's atlas is drawn from state/stateT (scenes/enemy-ai.js drawEnemy), so `pose` alone never showed and
     "The king falls to his knees" played over a frozen lunge; a beat's still holds one frame of his own art while the world is paused */
  if(beat.still){king.state=beat.still[0];king.stateT=beat.still[1];king.stillDrop=beat.still[2]||0;}/* oct24-endgame: the Sleeper fades into the deep (main.js cineUpdate eases it on) */if(beat.fade)king.fade=beat.fade[0];
  if(beat.shake&&this.motion)this.quake('boss',beat.shake);
  if(beat.phase2)king.phase=2;}
 phase2(){const e=this.enemies.find(e=>e.boss);if(!e)return;this.zone='throne';const p1=e.p1Max||(e.p1Max=e.maxHp||e.hp),hp=phase2Hp(p1,this.tierKey);Object.assign(e,{phase:2,inv:0,wind:0,cool:2,...(e.phase2||BOSS.phase2),hp,maxHp:hp});/* oct24-progress (playtest r3 D4): phase two lifts the hero to PHASE2_HEAL of max health, never a full refill, so the kingdom's fight carries the first phase's wounds */this.player.hp=Math.max(this.player.hp,Math.round(this.player.maxHp*PHASE2_HEAL));this.player.mp=this.player.maxMp;this.shots=[];this.events.toast?.('THE THORN KING · THE KINGDOM AWAKENS');}
 quake(kind,scale=1){const [px,secs]=QUAKE[kind]||QUAKE.light;
  if(!this.motion){this.shake=0;this.shakeTime=0;return;}
  const amp=px*scale;
  if(amp>=(this.shake||0)||!(this.shakeTime>0)){this.shake=amp;this.shakeTime=secs;this.shakeMax=secs;}}
 effect(type,x,y,extra={}){this.fx.push({type,x,y,life:.4,max:.4,color:this.player.color,...extra});}
 /* On a stage at 1x, numbers are drawn 12 px (16 px for a crit) so they read; the UI agent's pixel font replaces the face. */
 /* playtest 24 Oct: a tall boss's named attack (big, at its head) and GUARD (at y-56) drew on top of each other; one label
    per enemy now covers bosses up to 220 tall, and a small word never replaces a named attack */
 text(txt,x,y,color='#e8e6c9',big=false){const owner=this.enemies.find(e=>Math.abs(e.x-x)<1&&y<e.y&&e.y-y<=220),word=!/^[-+]?\d/.test(String(txt));if(owner){const old=this.fx.find(f=>f.type==='text'&&f.enemy===owner&&f.life>0);if(old?.word&&!word||old?.big&&!big)return;this.fx=this.fx.filter(f=>f.type!=='text'||f.enemy!==owner);owner.labelUntil=this.time+.75;}this.effect('text',x,y,{text:String(txt),color,big,enemy:owner,word,life:.75,max:.75,size:this.level?(big?16:12):undefined});}
 /* v2:enemies -- a hit is one downloaded hit-star sheet in the element's colour (gfx/combat-fx.js), not code-drawn particles */
 burst(x,y,color,n=8,grit){const g=GRIT[grit];this.effect('burst',x,y+2,{color:g?.col||color,grit,big:n>=12,life:g?.life||.36,max:g?.life||.36});}
 nearest(origin=this.player,range=500){return this.enemies.filter(e=>e.hp>0&&dist(e,origin)<=range).sort((a,b)=>dist(a,origin)-dist(b,origin))[0];}
 attack(heavy=false){const p=this.player;if(this.busy()||!heavy&&p.lightCd>0)return false;if(!heavy){p.combo=p.comboTime>0?(p.combo+1)%3:0;p.lightCd=TRACKS['light'+p.combo].duration+(p.combo===2?.42:.08);p.comboTime=p.lightCd+.45;}// Ranged classes reused the melee swing poses, which rotate the held weapon through
  // a slashing arc - a bow's tip dipped below the actor's feet, and heavy's contact
  // frame landed exactly there, so arrows launched from underground. Pose and timing
  // are separate: ranged draws with the cast pose but keeps its own cadence.
  const track=heavy?'heavy':'light'+p.combo,action=this.base.ranged?'cast':track;const token=this.claim(action,TRACKS[track].duration,LOCK[track]);const target=this.nearest(p,this.base.ranged?260:45);if(target)p.facing=target.x>=p.x?1:-1;/* camface-oct28: the basic swing and Power Swing keep facing through their wind-up like an ability (faceLock): a stick held away turned the hero round, so a melee swing missed and a bolt flew from his back. A dodge still clears it */p.faceLock=TRACKS[track].contact+.05;/* a caster's staff jab and totem bolt are magic: they hit with magic when it is the stronger stat (balance sim, 9 Oct) *//* basic-attack balance (15 Oct): a swing grows at half the rate of the stat (game/math.js basicStat) */const power=(this.base.basic??Math.max(this.base.atk,this.base.ranged?this.base.mag:0))*(heavy?2:[.88,1.1,1.65][p.combo])*p.attackBuff;const a={damage:power,kind:this.base.ranged?'projectile':'melee',range:this.base.ranged?240:32,kb:heavy?170:90,element:'arcane',speed:230,statusTime:0,name:'Basic attack',basic:true,heavy,stop:heavy?HITSTOP.heavy:p.combo===2?HITSTOP.finisher:HITSTOP.light};this.schedule(TRACKS[track].contact,()=>{/* a sword's arc for melee only: a bow or a staff bolt drew a slash in the air (playtest oct14) */if(a.kind!=='projectile')this.effect('slash',p.x,p.y,{radius:heavy?34:27,angle:p.facing===1?0:Math.PI,big:heavy,color:this.base.color,life:.23,max:.23});if(a.kind==='projectile')this.projectile(a,p,target,power);else this.enemies.filter(e=>e.hp>0&&dist(e,p)<30+bodyR(e)&&(e.x-p.x)*p.facing>-12-bodyR(e)*.5).forEach(e=>this.hit(e,a,power));sfx('swing',heavy?2:p.combo);},this.owned(token));this.teach(heavy?'heavy':'attacked');return true;}
 dodge(dx,dy){const p=this.player;if(p.dodgeCd>0)return false;const len=Math.hypot(dx,dy)||1;p.dx=dx?dx/len:p.facing*(dy?0:1);p.dy=dy/len;p.lastDodge={dx:p.dx,dy:p.dy,t:this.time};p.dodge=.32;p.inv=.34;p.faceLock=0;p.dodgeCd=DODGE_CD;p.moveLock=0;this.claim('dodge',0);p.attack=0;p.lightCd=0;this.buffer=0;p.stackTime=2.5;this.effect('ring',p.x,p.y,{radius:13,color:'#dbe3bd',ground:true});gearDodge(this);sfx('dodge');this.teach('dodged');return true;}
 potion(){const hp0=this.player.hp,r=usePotion(this.save,this.player,{cap:this.level?POTION_CAP:0});if(r.ok){gearPotion(this,hp0);if(this.level?.encounter&&this.save.settings.difficulty==='heroic'){this.player.hp=hp0+(this.player.hp-hp0)*.25;if(this.save.potionKind==='regen'&&this.player.potionRegen>0)this.player.potionRegen*=.25;r.message='Potion · quarter healing on this tier';}}if(!r.ok){this.events.toast?.(r.message);return;}if(this.run){this.run.drank=true;this.run.potionHeal=(this.run.potionHeal||0)+Math.max(0,this.player.hp-hp0);}this.text(r.message,this.player.x,this.player.y-28,'#abe2a4');this.events.persist?.();this.events.hud?.();sfx('potion');}
 cast(slot){const ids=activeLoadout(this.save);const a=ABILITIES[this.save.hero].find(a=>a.id===ids[slot]);if(!a||!unlocked(this.save,a)){this.events.toast('Study at the Library to unlock and equip abilities.');return;}const p=this.player;/* a press during a swing or a roll is held for CAST_BUFFER s and fires when it ends (basic-attack balance, 15 Oct: a child
   mashing attack had nearly every ability press dropped, so plain swings were all that ever came out) */if(this.busy()){if((p.cooldowns[a.id]||0)<=CAST_BUFFER&&p.mp>=a.cost)this.castBuf={slot,t:CAST_BUFFER};return;}this.castBuf=null;if((p.cooldowns[a.id]||0)>0)return;if(p.mp<a.cost){this.events.toast(`Not enough ${this.base.resource.toLowerCase()}.`);return;}const target=this.enemies.filter(e=>e.hp>0&&dist(e,p)<=a.range+bodyR(e)).sort((x,y)=>dist(x,p)-dist(y,p))[0];if(['melee','projectile','chain','mark'].includes(a.kind)&&!target){this.events.toast('Move closer to a target.');return;}p.mp-=a.cost;p.cooldowns[a.id]=a.cd*(1-this.base.cdr);/* Your Shadow's Echo repeats the shape of the last ability (scenes/boss-moves.js echoAttack) */this.lastCast={id:a.id,name:a.name,kind:a.kind,radius:a.radius,t:this.time,twice:this.lastCast?.id===a.id};const own=abilityTrack(this.save.hero,a.id),fxCol=colors[FX_ELEMENT[a.id]||a.element];const token=own?this.claim(own.pose,own.duration,own.lock):this.claim(a.kind==='melee'?'light2':'cast',TRACKS.cast.duration,a.kind==='melee'?LOCK.light2:LOCK.cast);if(target)p.facing=target.x>=p.x?1:-1;p.faceLock=(own?own.contact:a.kind==='melee'?TRACKS.light2.contact:TRACKS.cast.contact)+.05;/* an ability scales with the same stat as the hero's basic hit: the stronger of attack and, for a ranged hero, magic (the Ranger's bow is attack) */let power=abilityPower(a.damage,Math.max(this.base.atk,this.base.ranged?this.base.mag:0))*p.attackBuff;
 // Signature mechanics read generated fields. They used to regex the English
 // notes at cast time, so rewording a description changed gameplay silently.
 const mechanics={momentum:()=>{if(a.spendStacks){power*=1+p.stacks*a.stackBonus;p.stacks=0;}},
  flow:()=>{if(a.spendStacks){power*=1+p.stacks*a.stackBonus;p.stacks=0;}if(a.buildStacks){p.stacks=Math.min(3,p.stacks+a.buildStacks);p.stackTime=6;}},
  guard:()=>{if(a.guardSpend){const spend=p.bank*a.guardSpend;power+=spend*.8;p.bank-=spend;}},
  rage:()=>{if(a.selfHpCost)p.hp*=1-a.selfHpCost;}};{const st0=p.stacks,bk0=p.bank;mechanics[this.base.mechanic]?.();if((this.base.mechanic==='momentum'&&p.stacks<st0)||(this.base.mechanic==='guard'&&p.bank<bk0))gearSpend(this);}
 /* classes-oct28: Venom Cloud, Snare Trap, Thorn Grove and Rain of Arrows drew their cloud, vines, thorns and arrows on the nearest
    foe up to 100 px away while the hit landed in a 46-60 px circle at the hero (or the stated distance ahead): a foe under the
    cloud was never touched. Their marks now sit where the hit lands (aoeCentre, shared with the aoe resolver). */
 const resolvers={melee:()=>{this.effect('slash',p.x,p.y,{radius:a.range,angle:p.facing===1?0:Math.PI,color:fxCol,big:true});this.enemies.filter(e=>e.hp>0&&dist(e,p)<=a.range+2+bodyR(e)&&(e.x-p.x)*p.facing>-12-bodyR(e)*.5).forEach(e=>this.hit(e,a,power));},projectile:()=>this.projectile(a,p,target,power),chain:()=>{const origins=a.fromTotems&&this.totems.length?this.totems:[p];if(a.fromTotems)for(const t of this.totems)this.summon('ancestor',t);for(const origin of origins){let from=origin;const used=new Set();for(let n=0;n<a.count;n++){const e=this.enemies.filter(e=>e.hp>0&&!used.has(e)&&dist(e,from)<(n?90:a.range)).sort((a,b)=>dist(a,from)-dist(b,from))[0];if(!e)break;used.add(e);this.effect('line',from.x,from.y,{tx:e.x,ty:e.y,color:fxCol,life:.5,max:.5});this.hit(e,a,power*.8**n);from=e;}}},aoe:()=>{const origin=this.aoeCentre(a);/* classes-oct28: Rampage carried the hero 44 px straight through rocks, fences and walls inside the arena (e2, ex2, m1, m3, m7...); he now stops at the last open step */if(a.name==='Rampage'){const bl=(x,y)=>!!this.layout?.blocked?.(x,y),st=Math.sign(origin.x-p.x)*4;let x=p.x;while(st&&Math.abs(origin.x-x)>4&&!bl(x+st,p.y))x+=st;p.x=Math.abs(origin.x-x)<=4&&!bl(origin.x,p.y)?origin.x:x;}if(a.name==='Smoke Bomb'){p.inv=1.2;p.speedBuff=1.5;p.buffTime=2.5;}if(a.trap){this.totems.push({...origin,life:8,radius:a.radius,trap:true,pulse:.1,a,power});}else{const shape=shapeOf(a,'ring');this.effect(shape,origin.x,origin.y,{radius:a.radius,color:fxCol,ground:!!GROUNDED[shape],life:.7,max:.7});this.enemies.filter(e=>e.hp>0&&dist(e,origin)<a.radius).forEach(e=>this.hit(e,a,power));this.quake('aoe');}},buff:()=>{p.shield=Math.max(p.shield,abilityGuard(a.shield,p.maxHp,CLASSES[this.save.hero]?.hp));p.buffTime=a.duration;p.attackBuff=a.attackBuff;p.speedBuff=a.speedBuff;if(a.name==='Vanish'){p.hidden=a.duration;p.hiddenPrime=!!a.primesExposed;}/* an ability with its own world effects (game/ability-fx.js) skips the generic buff swirl (owner: no purple on the shield) */if(!ABILITY_FX[a.id])this.effect(shapeOf(a,'ring'),p.x,p.y,{radius:a.vfxShape==='dome'?34:28,color:fxCol,life:.6,max:.6});},heal:()=>{const hl=Math.round(abilityGuard(a.heal,p.maxHp,CLASSES[this.save.hero]?.hp));p.hp=Math.min(p.maxHp,p.hp+hl);this.text(`+${hl}`,p.x,p.y-30,'#b6e6aa');this.burst(p.x,p.y,'#f9dfab');},mark:()=>{target.marked=a.duration;this.text('MARKED',target.x,target.y-34,'#8febaa');},totem:()=>{if(this.totems.filter(t=>!t.trap).length>=2)this.totems.splice(this.totems.findIndex(t=>!t.trap),1);this.totems.push({x:p.x+p.facing*15,y:p.y,life:a.life,radius:a.radius,protect:!a.damage,pulse:1.6,a,power});{const T=this.totems[this.totems.length-1];if(a.id==='wolf-totem'){T.ally=true;this.summon('wolf',T);}else if(a.id==='stone-totem')this.summon('guardian',T);}this.effect('ring',p.x,p.y,{radius:30,color:'#98eadb',ground:true});},aura:()=>this.totems.push({x:p.x,y:p.y,life:a.duration,radius:60,protect:true,a,pulse:99,power:0})};this.worldFx(a,'cast',target,own);this.schedule(own?own.contact:a.kind==='melee'?TRACKS.light2.contact:TRACKS.cast.contact,()=>{resolvers[a.kind]?.();this.worldFx(a,'hit',target,own);},this.owned(token));sfx('cast',a.element);this.teach('cast');this.events.hud?.();}
 /* An ability's mark on the world (game/ability-fx.js): cracks, a fissure, thrown rocks, an aura, orbiting plates.
    Ground marks are capped at 12 so a long fight never piles them up. */
 aoeCentre(a){const p=this.player,bb=this.bounds();return {x:clamp(p.x+p.facing*(a.aheadUnits||0),bb.x0,bb.x1),y:p.y};}
 worldFx(a,when,target,own){const p=this.player;for(const e of ABILITY_FX[a.id]||[]){if(e.when!==when)continue;if(e.quake){this.quake(e.quake);continue;}
  const life=e.life==='buff'?a.duration:e.life==='contact'?(own?.contact??.3)+.15:e.life,o=e.at==='target'&&a.kind==='aoe'?this.aoeCentre(a):e.at==='target'&&target?target:p,x=o.x+(e.at==='ahead'?p.facing*(e.ahead||0):0);
  const f={type:e.fx,sprite:e.sprite,x,y:o.y,life,max:life,ground:['mark','aura','rupture'].includes(e.fx),follow:!!e.follow,reveal:e.reveal==='contact'?(own?.contact??.3):e.reveal,upto:e.upto,dist:e.dist,flip:p.facing,n:e.n,r:e.r,stagger:e.stagger,spin:e.spin,rate:e.rate,alpha:e.alpha};
  if(e.fx==='plates'||e.fx==='orbit-of'){this.fx.push({...f,half:'back'},{...f,half:'front'});}else this.fx.push(f);}
  const marks=this.fx.filter(f=>f.type==='mark');while(marks.length>12)this.fx.splice(this.fx.indexOf(marks.shift()),1);}
 projectile(a,origin,target,power){const ang=target?Math.atan2(target.y-origin.y,target.x-origin.x):(this.player.facing===1?0:Math.PI);const anchor=equipmentAnchors(origin,this.time);const hero=this.save.hero,look=SHOT_LOOK[a.id]||(a.basic?{...SHOT_LOOK[hero],...gearShotLook(this)}:null)||{};this.shots.push({x:anchor.tip.x,y:origin.y,h:anchor.height,vx:Math.cos(ang)*a.speed,vy:Math.sin(ang)*a.speed,life:a.range/a.speed,color:colors[look.element||a.element],element:look.element,sprite:look.sprite,a,power,hostile:false,homing:!!a.homing,target});}
 hit(e,a,power){if(e.hp<=0||e.inv>0||e.entering>0)return;
  /* classes-oct28: Vanish hid the hero for all 6 s while he kept attacking, so no foe or boss swung at him for 43% of a fight
     (m3: damage taken halved). The hero's own strike ends the hiding, and that strike leaves the foe Exposed (the bible's
     "primes Exposed", the generated primesExposed field that nothing read). Allies, totem ticks and gear tricks never reveal him. */
  let primed=false;if(!a.ally&&!a.tick&&!a.trick&&this.player.hidden>0){primed=!!this.player.hiddenPrime;this.player.hidden=0;this.player.hiddenPrime=false;}
  /* a pylon takes hits, not damage; a boss holding a guard parries what comes from the front (scenes/boss-moves.js) */
  {const ph=propHit(this,e,a);if(ph){if(ph==='dead')this.kill(e);return;}}if(stanceBlock(this,e,a)||pilotBlock(this,e,a))return;
  /* a rallying boss shrugs hits off while its guards stand */
  if(e.shielded){if(!(this.time-(e.guardAt||0)<.4)){this.text('BLOCKED!',e.x,e.y-30,'#a9c9e0');e.guardAt=this.time;sfx('blocked',undefined,{pan:panOf(this,e.x)});}return;}
  /* a Shielded elite's wards each soak one whole hit, then it is open (game/tiers.js MODS.shielded) */
  if(e.ward>0){e.ward--;flashHit(e,this.time);this.text(e.ward?'WARD':'WARD BROKEN',e.x,e.y-30,MODS.shielded.color);this.effect('ring',e.x,e.y,{radius:16,color:MODS.shielded.color,ground:true,life:.3,max:.3});sfx(e.ward?'ward':'armour.crack',undefined,{pan:panOf(this,e.x)});return;}const p=this.player;/* A boss guards while it walks and full damage lands only while it telegraphs, swings, recovers or reels:
    dodge the tell, then punish (playtest S2-2: fights were won by standing and mashing). */
  let multiplier=e.pilotArmour&&['tele','act'].includes(e.brain?.mode)?.35:1;const guarded=e.boss&&e.brain&&!['tele','act','recover','hurt','trans'].includes(e.brain.mode);if(guarded){multiplier*=BOSS_GUARD;if(!(this.time-(e.guardSaid??-9)<.7)){e.guardSaid=this.time;this.text('GUARD',e.x,e.y-56,'#aab4c2');sfx('guard',undefined,{pan:panOf(this,e.x)});}}{const ls=linkShield(e,this);if(ls<1){multiplier*=ls;if(!(this.time-(e.linkSaid??-9)<.8)){e.linkSaid=this.time;this.text('SHIELDED',e.x,e.y-56,'#bff6ff');sfx('ward',undefined,{pan:panOf(this,e.x)});}}}if(this.base.mechanic==='rage')multiplier*=1+Math.min(.8,1-p.hp/p.maxHp);if(e.marked>0&&(a.benefitsFromMark||a.branch==='Precision'))multiplier*=1.5;if(a.consumesExposed&&e.exposed>0){multiplier*=a.consumesExposed;e.exposed=0;}if(a.executeBelow&&e.hp/e.maxHp<a.executeBelow)multiplier*=2;/* a dizzy or staggered boss (a wall bonk, a broken guard, a perfect roll through a lunge) takes half again */if(e.dizzyUntil>this.time)multiplier*=1.5;if(e.weakness&&a.element===e.weakness)multiplier*=e.weaknessMult||1.4;if(a.element==='fire'&&this.save.pet==='fire')multiplier*=1+petPower(this.save);if(!a.basic&&!a.trick&&this.save.pet==='study')multiplier*=1+petPower(this.save);multiplier*=gearMul(this,a);/* Armoured bosses (from Emberkeep): plain swings and gear tricks glance off (BOSS_ARMOUR) until a learned ability cracks the armour for CRACK_TIME s */let glance=false;if(e.boss&&armouredLevel(this.level)){if(a.basic||a.trick){if(!(e.crackUntil>this.time)){multiplier*=BOSS_ARMOUR;glance=true;if(!(this.time-(e.glanceAt??-9)<.45)){e.glanceAt=this.time;sfx('guard',undefined,{pan:panOf(this,e.x)});}if(!e.armourSaid){e.armourSaid=true;this.text('ARMOURED',e.x,e.y-44,'#a9c9e0',true);/* oct24-ember-econ (playtest ch2): the tip once per save, not on every armoured boss; the ARMOURED word still shows */const st=this.save.settings??={};if(!st.armourTip){st.armourTip=1;this.events.toast?.('Plain hits glance off this boss\'s armour. A learned ability cracks it open!');}}}}else{if(!(e.crackUntil>this.time)){this.text('ARMOUR CRACKED!',e.x,e.y-44,'#ffd27a',true);sfx('armour.crack',undefined,{pan:panOf(this,e.x)});}e.crackUntil=this.time+CRACK_TIME;}}const crit=Math.random()<this.base.crit+(e.exposed>0?.35:0);let n=damage({base:power,defence:e.def,multiplier,critical:crit,variance:.94+Math.random()*.12});/* classes-oct28: a capstone at full stacks did 50-240% of a boss's health in one cast, so a boss with a second phase
    (phaseShift at 50%) could die from above half health and skip its whole phase two. In phase one such a boss now keeps at least
    half of its phase-two share (25% of its health with at:.5); ordinary hits never cross that much, so they are untouched. */if(e.boss&&e.phaseShift&&e.brain&&e.brain.phase===1){const floor=Math.ceil(e.maxHp*(e.phaseShift.at||.5)*.5);if(e.hp>floor&&e.hp-n<floor)n=e.hp-floor;}if(this.run){const d=Math.min(n,Math.max(0,e.hp));this.run.damage+=d;/* the run grade's S+ asks that learned abilities do a share of the damage */if(!a.basic&&a.id&&ABILITIES[this.save.hero]?.some(x=>x.id===a.id))this.run.abilDamage=(this.run.abilDamage||0)+d;}e.hp-=n;e.pilotLight=!!a.basic&&!a.heavy;/* juice-oct27: a white first frame on heavy hits, crits and kills; never more than 3 flashes a second (game/feel.js flashHit) */flashHit(e,this.time,!!(a.heavy||a.finisher||crit||e.hp<=0));if(!a.ally&&!a.tick)this.hitChain=comboStep(this.hitChain,this.time);this.animate(e,a.kb>=100?'knockback':'hurt');const dx=e.x-p.x,dy=e.y-p.y,d=Math.hypot(dx,dy)||1;const res=1-(e.kbResist??(e.boss?.7:e.elite?.4:0));e.kx=dx/d*a.kb*res;e.ky=dy/d*a.kb*res*.6;e.knock=.18;e.lastEl=a.element;sfx(crit?'hit.crit':a.heavy?'hit.heavy':'hit.light');this.text(n,e.x,e.y-24,guarded||glance?'#b9b5a8':crit?NUMBER.critColor:colors[a.element],crit);this.burst(e.x,e.y,colors[a.element],crit?12:6,a.vfxGrit);/* Hitstop: light basic hits 60 ms, heavy hits and abilities 110 ms, finishers their own; totem and trap ticks stay light.
    Shake only on heavy and finishing blows (playtest M11, M12). */
 const dead=e.hp<=0,kq=dead&&killQuake(e);if(a.heavy||a.finisher)this.quake(a.finisher?'aoe':'crit');else if(kq)this.quake(kq);this.hitstop=Math.max(this.hitstop>0?this.hitstop:0,hitstopFor(a,{crit,kill:dead,elite:e.elite,motion:this.motion}));if(a.status){e.status=a.status;e.statusTime=a.statusTime||4;e.poisonTick=1;}if(a.appliesExposed||primed)e.exposed=5;if(this.base.mechanic==='momentum'){p.stacks=Math.min(5,p.stacks+(a.heavy?2:a.momentumGain||1));p.stackTime=2.5;}if(e.hp<=0)this.kill(e);else if(checkEnrage(e)){this.text('ENRAGED!',e.x,e.y-34,MODS.enraged.color,true);this.effect('ring',e.x,e.y,{radius:20,color:MODS.enraged.color,ground:true,life:.5,max:.5});}gearHit(this,e,a,n,crit);}
 /* A second life (owner, 8 Oct: "second life animations similar to Elden Ring ... come back in a different form"). Like
    Godrick, Rennala or Malenia, the boss falls, the arena goes still, then it rises changed: a new body, name, full health bar
    and moveset (ENEMY_TYPES `rebirth`). Nothing can hurt anyone while it happens; its guards fall with it. */
/* Summons (owner, 9 Oct: "make sure the summoner stuff actually summons things"). The Wolf Totem's spirit wolf hunts and
   bites in the totem's place, the Stone Totem's guardian holds the ground by its totem and punches, and the Ancestral
   Chorus raises an ancestor at each totem as its chains fire. Spirits cannot be hurt, and each lasts as long as its totem. */
 summon(kind,t){const S=SUMMONS[kind],f=this.player.facing,life=S.life??t.life;/* classes-oct28: the Stone Totem stands 15 px ahead and its guardian stood 16 px behind it, on the hero (8 of 134 samples on top of him, and he hid the hero in every frame); the guardian now waits beyond its totem, and each spirit keeps the side it was summoned on instead of swapping round the totem (through the hero) whenever the hero turns */const al={...S,kind,home:t,sideX:(S.side||0)*f,x:t.x+(S.side||0)*f,y:t.y+(S.dy||0),life,max:life,cd:.35,state:S.state||'idle',stateT:0,facing:f,
  dmg:kind==='wolf'?(t.power||t.a?.damage||18):Math.round((this.base.mag||12)*.7)};this.allies.push(al);if(!S.still)this.effect('ring',al.x,al.y,{radius:18,color:'#8fe8ff',ground:true});return al;}
 updateCoins(dt){if(!this.coins?.length)return;const p=this.player;this.coins=this.coins.filter(c=>{if(c.age<0){c.age+=dt;return true;}if(!stepCoin(c,p,dt))return true;sfx('coin');return false;});}
 updateAllies(dt){for(const al of this.allies){al.life-=dt;al.stateT+=dt;al.cd-=dt;if(al.home&&!this.totems.includes(al.home))al.life=Math.min(al.life,.25);if(al.still)continue;
  if(al.state==='attack'&&al.stateT<al.lock)continue;
  const e=this.enemies.filter(e=>e.hp>0&&!e.entering&&dist(e,al.home||al)<al.leash).sort((a,b)=>dist(a,al)-dist(b,al))[0];
  if(e){const d=dist(e,al),reach=al.reach+bodyR(e);al.facing=e.x>=al.x?1:-1;
   if(d>reach){const k=Math.min(1,al.speed*dt/d);al.x+=(e.x-al.x)*k;al.y+=(e.y-al.y)*k;al.state='walk';}
   else if(al.cd<=0){al.state='attack';al.stateT=0;al.cd=al.rate;this.schedule(al.contact,()=>{if(e.hp>0&&dist(e,al)<=reach+6)this.hit(e,{damage:al.dmg,kb:al.kb,element:'ice',name:al.name,ally:true},al.dmg);});}
   else al.state='idle';}
  else{const h=al.home||al,hx=h.x+(al.sideX??(al.side||0)*this.player.facing),hy=h.y+(al.dy||0),d=Math.hypot(hx-al.x,hy-al.y);if(d>6){const k=Math.min(1,al.speed*.6*dt/d);al.x+=(hx-al.x)*k;al.y+=(hy-al.y)*k;al.state='walk';al.facing=hx>=al.x?1:-1;}else al.state='idle';}}
  this.allies=this.allies.filter(al=>al.life>0);}
 /* a jewel drops (game/jewels.js): a ring of its rarity's colour where the enemy fell, a toast, and the results card */
 jewelFound(e,jw){const j=JEWEL[jw.id];this.effect('ring',e.x,e.y,{radius:24,color:RARITY[j.rarity].color,ground:true});this.effect('burst',e.x,e.y-20,{radius:16,color:RARITY[j.rarity].color});
  if(jw.gold){this.save.gold+=jw.gold;this.events.toast(`${j.name} again: +${jw.gold} gold`);}else{this.events.toast(`Found: ${j.name} (${RARITY[j.rarity].name})! Wear it at Home.`);if(this.run)(this.run.jewels??=[]).push(j.id);}sfx('coin');this.events.persist?.();}
 rebirth(e){e.hp=1;e.inv=999;e.reborn='dying';e.tint=null;e.state='death';e.stateT=0;e.z=0;this.shots=this.shots.filter(s=>!s.hostile);this.totems=[];this.allies=[];this.rally=null;
  for(const o of this.enemies)if(o!==e&&!o.boss&&o.hp>0){o.hp=0;this.animate(o,'death');o.deathTime=.7;}
  this.slowmo=.7;this.quake('boss');this.boss=e;this.effect('dome',e.x,e.y,{element:'shadow',life:REBIRTH.fall,max:REBIRTH.fall});this.setFlow('rebirth');}
 reform(e){const rb=e.rebirth,el=rb.element||'arcane';Object.assign(e,{sprite:rb.sprite||e.sprite,name:rb.name||e.name,scale:rb.scale||e.scale,attacks:rb.attacks||e.attacks,phaseShift:rb.phaseShift||null,half:rb.half||null,
   maxHp:Math.round(e.maxHp*(rb.hp||1)),atk:Math.round(e.atk*(rb.atk||1)),speed:Math.round(e.speed*(rb.speed||1)),kbResist:rb.kbResist??e.kbResist,fly:rb.fly??e.fly,keep:rb.keep??e.keep,tint:rb.tint||null});
  e.baseDef=e.def=Math.round((e.baseDef??e.def)+(rb.def||0));e.brain=null;e.hp=1;e.reborn='rising';e.deathTime=0;e.state=rb.pose||'idle';e.stateT=0;
  this.rallies=0;this.halfSaid=false;this.slowmo=0;this.quake('boss',1.5);this.rebornAt=this.time;
  this.effect('nova',e.x,e.y,{element:el,radius:70,life:1,max:1});this.effect('dome',e.x,e.y,{element:el,life:1.6,max:1.6});this.burst(e.x,e.y-30,rb.tint||'#ffffff',14);
  this.events.wave?.();}
 /* Duo bosses: when one falls the survivor takes its power, like Ornstein or Smough (ENEMY_TYPES `duoPower`): it heals a
    part of its health, glows, quickens, and learns the fallen one's signature moves. */
 absorb(e,fallen){const dp=e.duoPower||{},b=e.brain;e.hp=Math.min(e.maxHp,Math.round(e.hp+e.maxHp*(dp.heal??.3)));e.tint=dp.tint||'#ffd34a';e.flash=.3;e.inv=Math.max(e.inv||0,.9);
  if(dp.attacks)e.attacks=[...(e.attacks||[]),...dp.attacks];if(dp.name)e.name=dp.name;e.empowered=true;if(b){b.speedMul=(b.speedMul||1)*(dp.speed||1.25);b.cdMul=(b.cdMul||1)*(dp.cd||.8);b.dmgMul=(b.dmgMul||1)*(dp.dmg||1.1);b.cd={};}
  this.quake('boss');this.effect('nova',e.x,e.y,{element:dp.element||'fire',radius:56,life:.9,max:.9});this.quote={text:dp.line||`${String(fallen.name).split(',')[0]}... You will pay for that!`,at:this.run?.time||0};}
 /* A fall reads at a glance (14 Oct polish): a white flash on the body, an impact star and motes rising in the killing
    blow's element, and coins that pop out, bounce once and fly to the hero. The gold itself was paid on the kill. */
 deathFx(e){e.deathFlash=.12;/* juice-oct27 kill pop: the body squashes (game/feel.js killSquash) and sparks of the blow's element fly off */if(this.motion)e.killPop=KILL_POP;this.effect('killpop',e.x,e.y,{element:e.lastEl||'physical',n:e.boss?10:e.elite?8:6,spin:(e.x*.37+e.y*.11)%6,life:.42,max:.42});const jelly={'slime':'#b5e722','slime-king':'#739f45','magma-slime':'#e36a29','demon-slime':'#bd3428','frost-slime':'#95d7eb'}[e.key];this.effect(jelly?'slime-splash':'death',e.x,e.y,{element:e.lastEl||'physical',color:jelly,life:jelly?.65:.9,max:jelly?.65:.9});const n=coinsFor(e);
  for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,s=45+Math.random()*55;this.coins.push({x:e.x,y:e.y,z:6,vx:Math.cos(a)*s,vy:Math.sin(a)*s*.5,vz:COIN.pop*(.75+Math.random()*.45),age:-i*.03});}}
 /* Run XP (kills and the first-clear reward) after over-level damping (game/math.js overLevelXP) against the recommended hero
    level the tier card shows, for the hero level the run started at (a level-up mid-run never cuts the rest of that run); the run
    remembers that it was reduced so the result can say so. */
 runXP(x){const rec=this.level&&this.run?.rec;if(!rec||!(x>0))return x;const y=overLevelXP(x,this.run.hero||1,rec);if(y<x)this.run.damped=true;return y;}
 /* A defeated boss pays once across checkpoint retries; a fresh full run gets a fresh reward ledger. */
 kill(e){this.animate(e,'death');e.deathTime=.7;if(e.boss&&e.rebirth&&!e.reborn&&!e.elite){e.deathTime=0;this.rebirth(e);return;}
  if(e.boss&&e.partner&&e.partner.hp>0)this.absorb(e.partner,e);if(e.boss&&e.phase===1&&e.cinematic){if(this.level?.encounter?.elderwood)clearHazards(this);e.hp=1;e.inv=999;this.shots=[];/* oct24-polish2: his ground effects froze through the three cards, then fired at a player who could not see them start */if(this.enemyFx)this.enemyFx=this.enemyFx.filter(f=>f.owner!==e);/* oct24-polish3: a tell he was winding up (the thorn line's ground markers live on his brain, not in enemyFx) stayed drawn through the cards; he starts phase two from a plain step */if(e.brain)Object.assign(e.brain,{mode:'move',t:0,markers:[],decoys:null,safeLane:null,freeze:false});this.events.cinematic?.();return;}if(e.boss&&!e.elite&&this.run){const paid=this.run.bossPaid??=[];if(paid.includes(e.key)){this.deathFx(e);return;}paid.push(e.key);if(!this.save.gear?.beat?.[e.key])(this.run.bossFirst??=[]).push(e.key);}this.runGold+=killGold(e,this.replayGold);if(e.split)this.splitEnemy(e);this.kills++;runKill(this,e);this.deathFx(e);{const jw=rollJewel(this.save,e,Math.random);if(jw)this.jewelFound(e,jw);}gearKill(this,e);if(this.note(e.key,'defeated')&&this.run)this.run.bestiary.push(e.key);
 /* Arena kills pay gold only: the arena never feeds XP, so it can never be the step that completes an unlock. */
 if(!this.arena){/* kill XP grows 12% a tier, so hero levels keep pace into Veilmoor (balance sim, 9 Oct); scaled per tier in game/tiers.js killXP (balance-oct26) */const x=this.runXP(killXP(e,this.tierKey));if(this.run){this.run.xp+=x;this.run.killXP=(this.run.killXP||0)+x;}this.events.xp?.(x);}this.player.mp=Math.min(this.player.maxMp,this.player.mp+4);sfx('kill');}
 /* Vampiric (game/tiers.js MODS): a hit that lands heals the biter. */
 vampire(e){const h=Math.min(vampHeal(e),e.maxHp-e.hp);if(h<=0)return 0;e.hp+=h;this.text(`+${h}`,e.x,e.y-30,MODS.vampiric.color);this.effect('burst',e.x,e.y-14,{color:MODS.vampiric.color,life:.36,max:.36});return h;}
 /* Splitting: the fallen elite leaves two smaller plain copies beside it, already in the fight. */
 splitEnemy(e){const out=[];for(const [i,d] of splitParts(e,key=>makeEnemy(key,{tier:e.tier||this.tier()})).entries()){const c=this.spawn(d,e.x+(i%2?14:-14),e.y+(i%2?6:-6));c.entered=true;c.cool=.8;out.push(c);}if(out.length)this.effect('ring',e.x,e.y,{radius:22,color:MODS.splitting.color,ground:true,life:.4,max:.4});return out;}
 hurt(base,from){if(this.player.ally)return partyHurt(this,this.player,base,from);const p=this.player;
 /* Nothing lands while a boss walks on or after it falls: the intro and the victory beat are not fights. */
 if(p.inv>0||p.hp<=0||this.flow==='bossintro'||this.flow==='rebirth'||this.flow==='victory')return;const protect=this.totems.some(t=>t.protect&&dist(t,p)<t.radius);/* Easy/Heroic scale what enemies deal; Hero's Resolve takes its share off after defeats on this level. */
  if(gearBlock(this,from))return;const kind=this.level?difficultyOf(this.save).atk*(this.tierMul?.atk||1)*bossAtkTrim(this.level.id,this.tierKey,from)*(1-(this.resolve||0)):1;let n=damage({base,defence:this.base.def,multiplier:(protect?.6:1)*kind*gearTaken(this,from)});n=Math.min(n,Math.floor(pilotHitCap(this,from)*(1-(this.resolve||0))));const absorbed=Math.min(p.shield,n);p.shield-=absorbed;n-=absorbed;if(this.base.mechanic==='guard')p.bank=Math.min(120,p.bank+absorbed);if(this.run)this.run.taken+=n;p.hp=Math.max(0,p.hp-n);if(n>0)this.hitChain=null;gearHurt(this,n,from);if(n>0&&from?.by?.vamp&&from.by.hp>0)this.vampire(from.by);p.inv=this.level?.8:.35;p.flash=.09;this.hurtFlash=this.motion?.3:0;this.animate(p,'hurt');
  // Getting hit has to move you. Without this a hit is a number and a flash.
  if(from){const dx=p.x-from.x,dy=p.y-from.y,d=Math.hypot(dx,dy)||1,kb=from.kb||96;
   p.kx=dx/d*kb;p.ky=dy/d*kb;p.knock=.15;p.moveLock=Math.max(p.moveLock||0,.17);}if(n)this.text(`−${n}`,p.x,p.y-32,'#f3ab92');if(from?.boss||(from?.kb||0)>=140||n>=p.maxHp*.15){this.quake('hurt');if(this.motion)this.hitstop=Math.max(this.hitstop||0,HITSTOP.hurt);}sfx('hurt');if(p.hp<=0){clearThreats(this);clearHazards(this);sfx('death');this.slowmo=.5;p.dead=1.3;p.token=(p.token||0)+1;p.knock=0;this.animate(p,'death');this.deathPending=true;}}
 update(dt,input){this.time+=dt;this.fx=this.fx.filter(f=>(f.life-=dt)>0);/* entrances run on their own clock, so a boss's plays out during his intro card */for(const e of this.enemies)if(e.entering>0)e.entering=Math.max(0,e.entering-dt);for(const f of this.fx)if(f.follow){f.x=this.player.x;f.y=this.player.y;}this.shakeTime=Math.max(0,(this.shakeTime||0)-dt);this.hurtFlash=Math.max(0,(this.hurtFlash||0)-dt);if(this.trails.length)this.trails=this.trails.filter(g=>(g.life-=dt)>0);for(const e of this.enemies){if(e.deathFlash>0)e.deathFlash=Math.max(0,e.deathFlash-dt);if(e.killPop>0)e.killPop=Math.max(0,e.killPop-dt);}if(!this.shakeTime)this.shake=0;if(this.paused){if(this.cinematicShot){
   // The camera keeps living while the world is paused: the king animates, the shot
   // eases toward the beat's framing, and shake decays. A cut per beat reads as a
   // slideshow; easing reads as a camera.
   const king=this.enemies.find(e=>e.boss);if(king)king.animAge=(king.animAge||0)+dt;
   this.fx=this.fx.filter(f=>(f.life-=dt)>0);
   const tgt=this.cinematicTarget;
   if(tgt){const k=Math.min(1,dt*2.6);this.cinematicShot.x+=(tgt.x-this.cinematicShot.x)*k;this.cinematicShot.y+=(tgt.y-this.cinematicShot.y)*k;}
  }return;}const p=this.player;if(this.flow==='bossintro'||this.flow==='rebirth'||this.flow==='victory')input={};/* The hit flash keeps real time through hitstop: two frames, not the whole freeze. */
  tickPotionWait(p,dt);if(this.hitstop>0){this.hitstop-=dt;for(const e of this.enemies){if(e.flash>0)e.flash=Math.max(0,e.flash-dt);if(e.flashWhite>0)e.flashWhite=Math.max(0,e.flashWhite-dt);}return;}this.slowmo=Math.max(0,(this.slowmo||0)-dt);
  const ts=this.slowmo>0?.3:1;{const h0=p.hp;tickPotion(p,dt*ts);if(this.run&&p.hp>h0)this.run.potionHeal=(this.run.potionHeal||0)+p.hp-h0;}
  for(const a of [p,...this.enemies]){a.animAge=(a.animAge||0)+dt*ts;if(a.moving)a.walkAge=(a.walkAge||0)+dt*ts;if(a.deathTime>0)a.deathTime-=dt*ts;}if(this.deathPending){p.dead-=dt;if(p.dead<=0){this.deathPending=false;this.finish(false);}return;}for(const action of this.actions)action.delay-=dt;const ready=this.actions.filter(a=>a.delay<=0);this.actions=this.actions.filter(a=>a.delay>0);for(const action of ready)if(!action.guard||action.guard())action.fn();for(const k of ['inv','dodge','dodgeCd','attack','lightCd','comboTime','stackTime','buffTime','flash','hidden','moveLock','knock','faceLock'])p[k]=Math.max(0,(p[k]||0)-dt);for(const k in p.cooldowns)p.cooldowns[k]=Math.max(0,p.cooldowns[k]-dt);if(!p.stackTime&&!(p.shield>0&&p.buffTime>0))p.stacks=0;if(!p.buffTime){p.shield=0;p.attackBuff=1;p.speedBuff=1;}if(p.attackBuff>1&&p.buffTime>0&&(p.emberT=(p.emberT||0)-dt)<=0){p.emberT=.12;this.effect('burst',p.x+(Math.random()-.5)*18,p.y-8-Math.random()*34,{color:colors.fire,life:.3,max:.3});}p.mp=Math.min(p.maxMp,p.mp+dt*(this.zone==='town'?15:MP_REGEN));if(p.z>0||p.vz>0){const fall=p.vz;p.vz-=dt*500;p.z=Math.max(0,p.z+p.vz*dt);
   if(p.z===0){// Landing needs weight: dust, a short settle and a touch of shake.
    if(fall<-40){this.effect('ring',p.x,p.y,{radius:11,color:'#d8d3b4',ground:true,life:.3,max:.3});
     for(let i=0;i<4;i++)this.effect('particle',p.x+(i-1.5)*4,p.y,{vx:(i-1.5)*13,vy:-5,color:'#cfc9a8',life:.3,max:.3});
     this.quake('land',Math.min(1,-fall/300));p.moveLock=Math.max(p.moveLock||0,.07);sfx('land');}
    p.vz=0;}}
 let dx=(input.right?1:0)-(input.left?1:0),dy=(input.down?1:0)-(input.up?1:0);const len=Math.hypot(dx,dy);p.moving=!!len;if(len)this.controlsTutorial=advanceControls(this.controlsTutorial,'move');if(this.tut&&len){this.tut.moved+=dt;if(this.tut.moved>.5)this.teach('moved');}p.running=!!input.run;if(len&&p.running)this.controlsTutorial=advanceControls(this.controlsTutorial,'run');p.direction=Math.abs(dy)>Math.abs(dx)?(dy<0?'up':'down'):'side';if(!len)p.direction=p.lastDirection||'down';else p.lastDirection=p.direction;/* classes-oct28: holding the stick during an ability's wind-up turned the hero round, so a melee swing, Rampage, a trap or Rain of Arrows landed behind him (no damage, mana and cooldown spent) and a bolt flew one way while he faced the other; a phone player always holds the stick. The hero keeps facing his target until the ability lands (faceLock) */if(dx&&!(p.faceLock>0))p.facing=dx>0?1:-1;if(input.dodge){if(!this.dodgeHeld){this.dodgeBuffer=.1;this.dodgeHeld=true;}}else this.dodgeHeld=false;
   if(this.dodgeBuffer>0){this.dodgeBuffer=Math.max(0,this.dodgeBuffer-dt);if(this.dodge(dx,dy))this.dodgeBuffer=0;}if(input.jump&&p.z===0){p.vz=145;this.controlsTutorial=advanceControls(this.controlsTutorial,'jump');}if(input.attack){this.charge+=dt;if(!this.attackHeld){this.buffer=Math.max(.15,(p.lightCd||0)+.1,p.attack+.1);this.attackHeld=true;}}else if(this.attackHeld){if(this.charge>.5){this.buffer=0;this.attack(true);}this.charge=0;this.attackHeld=false;}if(this.castBuf){this.castBuf.t-=dt;if(this.castBuf.t<=0)this.castBuf=null;else if(!this.busy()){const k=this.castBuf.slot;this.castBuf=null;this.cast(k);}}if(this.buffer>0){this.buffer-=dt;if(this.attack(false))this.buffer=0;}const old={x:p.x,y:p.y};
  if(p.dodge>0){p.x+=p.dx*220*dt;p.y+=p.dy*220*dt;if(this.motion&&(this.trailT=(this.trailT||0)-dt)<=0){this.trailT=.04;this.trails.push({...p,flash:0,inv:0,hidden:0,attackBuff:1,statusTime:0,noShadow:true,life:.22,max:.22});}if(Math.random()<.5)this.effect('particle',p.x,p.y,{color:p.color,vx:-p.dx*15,vy:-p.dy*15});}
  else if(p.knock>0){p.x+=p.kx*dt;p.y+=p.ky*dt;p.kx*=.86;p.ky*=.86;}
  else if(len&&!(p.moveLock>0)){const zs=p.slowZ??1;p.x+=dx/len*this.base.speed*p.speedBuff*(p.running?1.5:1)*zs*dt;p.y+=dy/len*this.base.speed*p.speedBuff*(p.running?1.5:1)*zs*dt;}/* slowing ground and a boss's undertow (scenes/boss-moves.js zones), set by the enemies' step each frame */if(p.drift&&!(p.dodge>0)){p.x+=p.drift.x*dt;p.y+=p.drift.y*dt;}p.drift=null;p.slowZ=1;const pb=this.bounds(),pm=this.lock?HERO_MARGIN-10:10;p.x=clamp(p.x,pb.x0+pm,pb.x1-pm);p.y=clamp(p.y,pb.y0,pb.y1);if(this.layout?.blocked(p.x,p.y)){if(!this.layout.blocked(p.x,old.y))p.y=old.y;else if(!this.layout.blocked(old.x,p.y))p.x=old.x;else{p.x=old.x;p.y=old.y;}}if(this.layout){this.pushOut(pb,pm);this.checkSecrets(false);}if(!this.layout){for(const b of input.buildings||[])if(p.x>b.x-b.w*.37&&p.x<b.x+b.w*.37&&p.y>b.y-36&&p.y<b.y-2){p.x=old.x;p.y=old.y;}return;}
 pumpEnemies(this);this.follow(dt);this.stageFlow(dt);tierTick(this,dt);if(this.level?.encounter&&!this.enemies.some(e=>e.hp>0))tickIdleEnemyFx(this,dt);if(this.flow==='intro'||this.flow==='bossintro'||this.ended)return;
 const b=this.bounds(),em=this.lock?HERO_MARGIN-28:0,inX=(e,v)=>e.entered?clamp(v,b.x0+em,b.x1-em):v,inY=v=>clamp(v,b.y0,b.y1);let committed=this.enemies.filter(e=>e.hp>0&&e.wind>0).length;
  for(const e of this.enemies){if(e.hp<=0)continue;for(const k of ['flash','flashWhite','attack','inv','statusTime','exposed','marked','cool'])e[k]=Math.max(0,(e[k]||0)-dt);if(e.inv>1)continue;if(e.hop>0){e.hop=Math.max(0,e.hop-dt);const k=1-e.hop/e.hopMax;
    e.x=e.hopFrom.x+(e.hopTo.x-e.hopFrom.x)*k;e.y=e.hopFrom.y+(e.hopTo.y-e.hopFrom.y)*k;e.z=Math.sin(k*Math.PI)*16;}
   else e.z=0;
   if(e.knock>0){e.knock-=dt;e.x=inX(e,e.x+e.kx*dt);e.y=inY(e.y+e.ky*dt);
    e.kx*=.9;e.ky*=.9;
    if(this.motion&&Math.hypot(e.kx,e.ky)>26)this.effect('particle',e.x,e.y,{vx:-e.kx*.06,vy:-e.ky*.06,color:'#b9b294',life:.22,max:.22});}if(e.status==='poison'&&e.statusTime>0){e.poisonTick-=dt;if(e.poisonTick<=0){e.poisonTick=1;e.hp-=7;this.text(7,e.x,e.y-26,'#b5e490');if(e.hp<=0)this.kill(e);}}if(e.entering>0&&e.hp>0)continue;if(e.hp<=0||e.statusTime>0&&['stun','freeze','root'].includes(e.status))continue;
   /* Off-screen arrivals walk straight in before they think: nobody fights from outside the arena. */
   if(!e.entered&&e.x>=b.x0&&e.x<=b.x1)e.entered=true;
   if(!e.entered){const dir=Math.sign((b.x0+b.x1)/2-e.x)||1;e.x+=dir*Math.max(e.speed,32)*dt;e.facing=dir;e.direction='side';e.moving=true;continue;}
   /* v2:enemies -- seam: a def with `ai` is driven by ENEMY_AI through enemyAI(); everything else uses the AI below. An AI enemy is
      held 18 px past the hero's arena limit too (inX), or a caster backs into the strip no melee hero can reach (balance sim, 15 Oct). */
   if(e.ai&&this.enemyAI(e,dt)){if(e.brain?.mode==='tele')this.teach('windup');this.separate(e,dt,b);e.x=inX(e,e.x);continue;}{/* (24 Oct) the built-in AI (an atlas not loaded yet) chases the target partyFocus chose too: the hero, or a companion */const p=oldTarget(this,e,this.player);const d=dist(e,p),ex=(p.x-e.x)/(d||1),ey=(p.y-e.y)/(d||1);e.facing=ex>0?1:-1;e.direction=Math.abs(ey)>Math.abs(ex)?(ey<0?'up':'down'):'side';e.moving=false;if(e.wind>0){e.wind-=dt;if(e.wind<=0){
   // Enemies resolve damage on their pose's contact frame, exactly as the player
   // does. Previously the hit landed the instant windup ended, so the tell and the
   // damage disagreed and enemy attacks could not be read.
   const pose=e.boss?'light2':'light0';e.attack=.28;this.animate(e,pose);e.cool=e.cd;e.attackCount++;
   const tx=e.targetX,ty=e.targetY,alive=()=>e.hp>0;
   if(e.behavior==='hop'){e.hopFrom={x:e.x,y:e.y};e.hopTo={x:clamp(tx,b.x0,b.x1),y:inY(ty)};e.hop=TRACKS[pose].contact;e.hopMax=TRACKS[pose].contact;}
   this.schedule(TRACKS[pose].contact,()=>{
    if(e.behavior==='ranged'){const a=Math.atan2(p.y-e.y,p.x-e.x);const bow=equipmentAnchors(e,this.time);this.shots.push({x:bow.tip.x,y:e.y,h:bow.height,vx:Math.cos(a)*110,vy:Math.sin(a)*110,life:3,color:'#f1bd85',hostile:true,power:e.atk,kb:70,by:e});}
    else if(e.behavior==='hop'){e.x=e.hopTo.x;e.y=e.hopTo.y;e.hop=0;this.effect('ring',e.x,e.y,{radius:20,color:e.color,ground:true});if(dist(e,p)<23&&p.z<5)hurtOn(this,p,e.atk,{x:e.x,y:e.y,kb:104,by:e});}
    else if(e.boss&&e.phase===2){this.effect('ring',tx,ty,{radius:48,color:'#8de3c9',ground:true,life:.7,max:.7});
     if(Math.hypot(p.x-tx,p.y-ty)<48&&p.z<5)hurtOn(this,p,e.atk,{x:tx,y:ty,kb:150,by:e});
     if(e.attackCount%3===0&&this.enemies.filter(x=>x.hp>0).length<7){this.spawn(makeEnemy('goblin',{tier:this.tier()}),e.x+50,inY(e.y+30)).cool=1;}}
    else{this.effect('slash',e.x,e.y,{radius:e.boss?55:24,angle:Math.atan2(p.y-e.y,p.x-e.x),color:'#e4bc87',big:e.boss});
     if(dist(e,p)<(e.boss?54:26))hurtOn(this,p,e.atk,{x:e.x,y:e.y,kb:e.boss?165:88,by:e});}},alive);}continue;}const reach=e.boss&&e.phase===2?220:e.behavior==='ranged'?180:e.behavior==='hop'?72:e.boss?48:23;
   const mayAttack=canBeginThreat(this,e)&&(e.boss||committed<MAX_ATTACKERS);
   if(d<=reach&&e.cool<=0&&mayAttack&&!(p.hidden>0)){e.wind=e.windup;committed++;this.teach('windup');this.animate(e,e.boss?'heavy':'block');e.targetX=p.x;e.targetY=p.y;}
   else if(!(p.hidden>0)){
    const slow=e.status==='slow'&&e.statusTime>0?.5:1;
    let vx=0,vy=0;
    if(d>reach*.85){vx=ex;vy=ey;}
    else if(e.behavior==='ranged'&&d<85){vx=-ex;vy=-ey;}
    else if(!e.boss){
     // Already in range but not cleared to attack: circle rather than stand still,
     // so waiting enemies keep pressure instead of freezing in place.
     e.orbit=e.orbit||((Math.floor(e.x+e.y)%2?1:-1));
     vx=-ey*e.orbit*.7;vy=ex*e.orbit*.7;}
    // Separation. Enemies used to converge on one point and overlap into a single
    // unreadable mass; this spreads a wave around the player.
    for(const o of this.enemies){if(o===e||o.hp<=0)continue;
     const dx=e.x-o.x,dy=e.y-o.y,dd=Math.hypot(dx,dy);
     if(dd<22&&dd>0){vx+=dx/dd*.9;vy+=dy/dd*.9;}}
    const len=Math.hypot(vx,vy);
    const ox=e.x,oy=e.y;if(len>.01){e.x=inX(e,e.x+vx/len*e.speed*dt*slow);
     e.y=inY(e.y+vy/len*e.speed*dt*slow);e.moving=true;}if(e.entered&&this.layout.blocked(e.x,e.y)){if(!this.layout.blocked(e.x,oy))e.y=oy;else if(!this.layout.blocked(ox,e.y))e.x=ox;else{e.x=ox;e.y=oy;}}if(!e.entered&&e.x>=b.x0&&e.x<=b.x1)e.entered=true;}}}
 for(const s of this.shots){s.life-=dt;if(s.homing&&s.target?.hp>0){const a=Math.atan2(s.target.y-s.y,s.target.x-s.x);s.vx=Math.cos(a)*s.a.speed;s.vy=Math.sin(a)*s.a.speed;}s.x+=s.vx*dt;s.y+=s.vy*dt;if(s.hostile){if(dist(s,p)<9){this.hurt(s.power,{x:s.x-s.vx*.05,y:s.y-s.vy*.05,kb:s.kb||70,by:s.by});s.life=0;}}else{const e=this.enemies.find(e=>e.hp>0&&dist(e,s)<4+bodyR(e));if(e){if(!stanceBlock(this,e,s.a,s))this.hit(e,s.a,s.power);s.life=0;}}}this.shots=this.shots.filter(s=>s.life>0);
 for(const t of this.totems){t.life-=dt;t.pulse-=dt;if(t.pulse<=0&&!t.protect&&!t.ally){const near=this.enemies.filter(e=>e.hp>0&&dist(e,t)<t.radius);if(!t.trap||near.length){near.forEach(e=>this.hit(e,{...t.a,tick:true},t.power));this.effect('ring',t.x,t.y,{radius:t.radius,color:'#8de2c8',ground:true});t.pulse=1.6;if(t.trap)t.life=0;}}}for(const t of this.totems)if(t.life<=0)gearTotemEnd(this,t);this.totems=this.totems.filter(t=>t.life>0);gearTick(this,dt);this.updateAllies(dt);updateParty(this,dt);this.updateCoins(dt);}
}
