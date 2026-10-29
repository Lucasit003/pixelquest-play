import {veilPrepare,veilMarkers,veilEnd,veilOverlay,veilSafe} from './veilmoor.js';
import {emberPrepare,emberMarkers,emberEnd} from './emberkeep.js';
import {woodEnd} from './elderwood.js';
import {softMarker,safeLane,escapeRoute} from './tier-fx.js';
import {applyMod,keepOf} from '../game/tiers.js';
import {canBeginThreat} from './encounter-budget.js';
import {echoCue} from './normal-pacing.js';
/* Enemy and boss behaviour for v2 sprite enemies (docs/GAME_V2_PLAN.md §Enemies). Owned by the enemies agent.

   INTERFACE (kept small so it survives combat.js being rebuilt around horizontal stages)
   combat calls, once per enemy per frame (dead ones too, so their death plays out):
       ENEMY_AI[enemy.ai](enemy, world, dt)
   enemy  an actor from game/enemies.js makeEnemy(key,x,y): the ENEMY_TYPES fields plus x, y (y = depth in the floor band),
          z, hp, maxHp, def, facing (1 right / -1 left), flash, inv, knock/kx/ky, status/statusTime. combat's hit() lowers hp,
          sets knock and calls kill(); this module notices the hp drop itself. It owns enemy.brain, enemy.state/stateT
          (the atlas state being shown and seconds in it) and the telegraph data drawn by drawEnemy/enemyLayer.
   world  needs only:
          player {x, y, z?, hp, hidden?, attack?}     the target
          enemies []                                 for spacing, the attacker cap and summons (pushed here)
          time                                       seconds
          hurt(base, from{x,y,kb})                   damage the player (applies defence via game/math.js damage())
          and optionally: bounds() -> {x0,x1,y0,y1}  the walkable rect (default: old encounter box, else STAGE band)
                          effect(type,x,y,extra), quake(kind), text(str,x,y,color), kill(enemy), events.toast(str), rng()
   Projectiles, hazards and beams live in world.enemyFx (created here) and update themselves once per frame.

   DRAWING (gfx/world.js): drawEnemy(c, enemy, t) for each sprite enemy (returns true when it handled the actor), and
   entities.push(...enemyLayer(c, state, t)) once per frame: it paints the ground telegraphs immediately (under actors)
   and returns depth-sorted entries for projectiles and hazards.

   Rules every attack follows (STYLE_GUIDE rule 4, 6): a red-orange ground marker plus a warm wind-up flash for the whole
   windup, then the atlas state plays and damage lands on its contact frame(s). Regular enemies hit during a windup are
   interrupted; bosses have armour while acting. At 50% HP bosses with phase2 change phase (invulnerable while it plays). */
import {ENEMY_TYPES,makeEnemy} from '../game/enemies.js';
import {makeEnemy as rosterEnemy} from '../game/roster.js';
import {STAGE} from '../game/stage.js';
import {flashHit,TELE_PULSE,FRAME} from '../game/feel.js';
import {VINE_SPRITE} from '../game/entrances.js';
import {loadSprite,spriteFrame,spriteImage,drawSprite} from '../gfx/actors/sprites.js';
import {sfx} from '../core/audio.js';
import {MOVE_KINDS,tellSound,panOf,tierAttacks,moveMarkers,moveInRange,beginMove,resolveMove,stepMove,echoAttack,pickOption,returnPass,afterHit,updateMoveFx,drawMoveFx,drawFall,darkLayer,drawLinks,perfectDodge} from './boss-moves.js';
const OWN=new Set(MOVE_KINDS);

const MAX_ATTACKERS=2;
const TELE={fill:'#ff5a1f',rim:'#ffa35a',flash:'#ff8a3a'};
/* A hit flash lasts two frames at 60 fps. */
export const FLASH=.03;
const rnd=w=>(w.rng?w.rng():Math.random());
const sgn=v=>v<0?-1:1;
const clampN=(v,a,b)=>v<a?a:v>b?b:v;

/* ---------- atlas timing ---------- */
function metaOf(id){if(!id)return null;const s=loadSprite(id);return s.meta||null;}
export function stateInfo(sprite,state){const m=metaOf(sprite),s=m?.states?.[state];
 if(!s)return {dur:.6,contacts:[.3],loop:true,has:!m};
 return {dur:s.frames/(s.fps||8),contacts:(s.contact||[]).map(i=>(i+.5)/(s.fps||8)),loop:s.loop!==false,has:true};}
const hasState=(e,s)=>{const m=metaOf(e.sprite);return !m||!!m.states?.[s];};
function setState(e,s){if(!hasState(e,s))s=hasState(e,'idle')?'idle':s;if(e.state!==s){e.state=s;e.stateT=0;}}

/* ---------- world helpers ---------- */
export function bounds(w){if(w.bounds)return w.bounds();
 if(typeof w.encounter==='function'&&w.zone!=='town'){const y=w.encounter().y;return {x0:50,x1:650,y0:y-100,y1:y+130};}
 return {x0:20,x1:(w.stageW||STAGE.segment*3)-20,y0:STAGE.floorTop+4,y1:STAGE.floorBottom-2};}
function fxList(w){return w.enemyFx||(w.enemyFx=[]);}
const living=w=>w.enemies.filter(o=>o.hp>0);
const isAttacking=o=>o.brain&&(o.brain.mode==='tele'||o.brain.mode==='act');

function brain(e,w){if(e.brain)return e.brain;const R=()=>rnd(w);
 const d=ENEMY_TYPES[e.key]||ENEMY_TYPES[e.standIn]||e;
 /* sprites only scale by whole numbers: an elite (roster scales it by .75) is drawn at the largest whole scale below,
    and its reaches shrink with it so no hit lands beyond the art */
 /* the boss's moves as its tier plays them (heroic/legendary overrides, tier-only moves; game/enemies.js) */
 if(e.attacks?.some(a=>a.heroic||a.legendary||a.tiers))e.attacks=tierAttacks(e.attacks,e.tierKey);
 const want=Math.max(1,Math.floor((e.scale||1)+1e-6)),k=want/(d.scale||want);if(Math.abs(k-1)>1e-6&&e.attacks)e.attacks=e.attacks.map(a=>({...a,range:a.range*k,...(a.radius?{radius:a.radius*k}:{}),...(a.len?{len:a.len*k}:{})}));e.scale=want;
 e.state=hasState(e,'appear')&&e.summoned?'appear':'idle';e.z=e.z||0;
 /* identical clones must not move in lockstep or stack: random animation phase, and a nudge off any twin within 6 px */
 e.stateT=R()*stateInfo(e.sprite,'idle').dur;
 for(const o of (w?.enemies||[]))if(o!==e&&o.hp>0&&o.sprite===e.sprite&&Math.abs(o.x-e.x)<6&&Math.abs(o.y-e.y)<6){e.x+=(R()<.5?-1:1)*(8+R()*6);e.y+=(R()<.5?-1:1)*(4+R()*4);}
 return e.brain={self:e,rate:.9+R()*.2,mode:e.state==='appear'?'trans':'move',t:0,transDur:e.state==='appear'?stateInfo(e.sprite,'appear').dur:0,cd:{},gcd:.8+R()*.6,phase:1,
  lastHp:e.hp,slot:(R()*2-1),side:0,markers:[],baseDef:e.baseDef??d.def,speedMul:1,cdMul:e.cdMul||1,dmgMul:1,hopT:R()*.6,bob:R()*6.28};}

/* ---------- telegraph geometry ---------- */
function bandOf(e,a){return a.band||e.band||9;}
function inRange(e,a,p){const dx=Math.abs(p.x-e.x),dy=Math.abs(p.y-e.y),k=e.scale||1,band=bandOf(e,a);
 if(OWN.has(a.kind))return moveInRange(e,a,p,{w:_world,minions:w_minions});
 switch(a.kind){
  case 'melee':return dx<=a.range*.9&&dy<=band;
  case 'aoe':return a.at==='self'?dx<=a.radius*.85&&dy<=a.radius*.5:a.at==='front'?dx<=a.range&&dy<=band*1.6:dx<=a.range;
  case 'projectile':case 'beam':case 'line':return dx<=a.range&&dx>=12*k&&dy<=band*2.2;
  case 'dash':return dx>=34&&dx<=a.range&&dy<=band*1.5;
  case 'leap':return dx<=a.range&&dx>=24;
  case 'summon':return w_minions(e,a.key)<(a.max||2);
  case 'buff':return true;}
 return false;}
let _world=null;
const w_minions=(e,key)=>_world?[..._world.enemies,...(_world.reinforcements||[])].filter(o=>o.summoner===e&&o.hp>0&&(!key||o.key===key||o.decoy&&key===e.key)).length:0;

function buildMarkers(e,a,w){const p=w.player,f=e.facing,b=bounds(w),band=bandOf(e,a),out=[];
 const circ=(x,y,r)=>out.push({shape:'circle',x:clampN(x,b.x0,b.x1),y:clampN(y,b.y0,b.y1),r});
 if(OWN.has(a.kind))return moveMarkers(e,a,w,{bounds});
 switch(a.kind){
  /* a tail whip (behind:true) sweeps round behind the boss, and is shown on the ground: standing behind it is the danger */
  case 'melee':out.push(a.behind?{shape:'box',x0:e.x+f*18,x1:e.x-f*a.range,y:e.y,band}:{shape:'box',x0:e.x-f*4,x1:e.x+f*a.range,y:e.y,band,hide:true});break;
  case 'beam':out.push({shape:'box',x0:e.x,x1:e.x+f*a.len,y:e.y,band});break;
  case 'dash':out.push({shape:'box',x0:e.x,x1:f>0?b.x1:b.x0,y:e.y,band});break;
  case 'projectile':out.push({shape:'box',x0:e.x+f*8,x1:e.x+f*34,y:e.y,band:4,hide:true});break;
  case 'leap':circ(p.x,p.y,a.radius);break;
  case 'line':for(let i=0;i<a.count;i++)circ(e.x+f*(a.gap*(i+1)),e.y+(p.y-e.y)*(i+1)/a.count,a.radius);break;
  /* summons come from the arena's own places: its two sides (pylons), its edges (a drill line marching in), or beside the boss */
  case 'summon':for(let i=0;i<(a.count||1);i++){if(a.spots==='ember-gate')circ((e.emberGate=((e.brain?.used?.[a.name]||0)%2))?Math.min(b.x1-80,(w.camX??b.x0)+STAGE.camW-80):Math.max(b.x0+80,(w.camX??b.x0)+80),(b.y0+b.y1)/2+(i%2?12:-12),12);else if(a.spots==='pilot-side')circ(clampN((w.camX??b.x0)+64,b.x0+64,b.x1-100)+i*24,(b.y0+b.y1)/2+(i%2?12:-12),12);else if(a.spots==='sides')circ(i%2?b.x1-64:b.x0+64,(b.y0+b.y1)/2+(i%2?10:-10),8);else if(a.spots==='edge')circ(i%2?b.x1-6:b.x0+6,clampN(p.y+(i%2?12:-12),b.y0,b.y1),8);else circ(e.x+f*(26+i*22)*(i%2?-1:1),e.y+(i%2?10:-10),8);}if(!a.visibleTell)out.forEach(m=>m.hide=true);break;
  case 'aoe':{const n=a.count||1,lead=a.lead||{dx:0,dy:0},cx=a.at==='self'?e.x:a.at==='front'?e.x+f*a.range*.6:p.x+(lead.dx||0)*40,cy=a.at==='player'?p.y+(lead.dy||0)*20:e.y;
   /* a cross of stars (the Void Knight's Star Cape): the centre and four around it, the gaps between them safe */
   if(a.pattern==='cross'){const s=a.spread||40;circ(cx,cy,a.radius);circ(cx-s,cy,a.radius);circ(cx+s,cy,a.radius);circ(cx,cy-s*.55,a.radius);circ(cx,cy+s*.55,a.radius);break;}
   for(let i=0;i<n;i++){const off=n===1?0:(i-(n-1)/2)*a.spread;circ(cx+off,cy+(n>1?(i%2?1:-1)*(a.spread*.25):0),a.radius);}break;}}
 return out;}
function inMarker(m,p){if(m.shape==='box'){const lo=Math.min(m.x0,m.x1)-2,hi=Math.max(m.x0,m.x1)+2;return p.x>=lo&&p.x<=hi&&Math.abs(p.y-m.y)<=m.band;}
 const dx=(p.x-m.x)/m.r,dy=(p.y-m.y)/(m.r*.55);return dx*dx+dy*dy<=1;}

/* what boss-moves.js may use of this module */
const K={bounds,fx:w=>fxList(w),puff:(...a)=>puff(...a),hurt:(...a)=>hurtPlayer(...a),inMarker:(m,p)=>inMarker(m,p),stateInfo:(...a)=>stateInfo(...a),setState:(e,s)=>setState(e,s),top:e=>enemyTop(e),
 marker:(...a)=>marker(...a),canvas:(w,h)=>makeCanvas(w,h),minions:(e,k)=>w_minions(e,k)};
/* ---------- impact effects: downloaded sheets played as non-damaging hazards ---------- */
function puff(w,fx,x,y,owner,hs){if(!fx)return;fxList(w).push({kind:'hazard',owner,a:{dmg:0},fx,x,y,r:0,t:0,hit:true,marker:null,hs});}
/* ---------- damage ---------- */
/* A roll through a boss's hit, started just before it lands, is PERFECT (boss-moves.js perfectDodge). push/pull/hold act on a
   hit that landed. */
function hurtPlayer(e,w,a,from,mult=1){const p=w.player;if(!p||p.hp<=0||(p.z||0)>14)return false;
 if(p.inv>0){perfectDodge(e,w,a);return true;}const hp0=p.hp,inv0=p.inv||0;
 w.hurt(e.atk*(a.dmg||1)*(e.brain?.dmgMul||1)*mult,{x:from.x,y:from.y,kb:e.boss?150:90,by:e,move:a.name,fireGround:(a.kind==='aoe'||a.kind==='line')&&/fire|flame|lava|magma|molten|ember|burn|scorch/i.test(`${a.fx||''} ${a.name||''}`)});
 afterHit(e,w,a,p.hp<hp0||(p.inv||0)>inv0);return true;}

/* ---------- attack lifecycle ---------- */
function pickAttack(e,w,b){if(!canBeginThreat(w,e))return null;const p=w.player;if(!p||p.hp<=0||p.hidden>0||b.gcd>0)return null;
 if(!e.boss&&living(w).filter(o=>o!==e&&!o.boss&&isAttacking(o)).length>=MAX_ATTACKERS)return null;
 /* forced moves (a riposte, a mash punish) only come when called; boss-only moves stay with the boss (not its elite echo or
    its shadow copies); `uses` caps a move per fight; a stance never comes twice in a row */
 const ok=(e.attacks||[]).filter(a=>(!a.dryOnly||!(w.flooded>0))&&(!a.phase||a.phase===b.phase)&&!a.forced&&!(a.bossOnly&&!e.boss)&&!(a.uses&&(b.used?.[a.name]||0)>=a.uses)&&!(a.kind==='stance'&&b.lastKind==='stance')&&!(b.cd[a.name]>0)&&inRange(e,a,p));
 if(!ok.length)return null;const tot=ok.reduce((t,a)=>t+(a.weight||1),0);let r=rnd(w)*tot;for(const a of ok){r-=a.weight||1;if(r<=0)return a;}return ok[ok.length-1];}
function startTele(e,w,b,a){const p=w.player;emberPrepare(e,w,a);a=veilPrepare(e,w,a);
 /* an echo becomes the hero's last ability; a pick move takes its next option */
 const source=a;if(a.kind==='echo')a=echoAttack(e,w,a);else if(a.kind==='pick')a=pickOption(e,b,a);if(source.fullTell)a={...a,fullTell:true,windup:Math.max(source.windup,a.windup||0),recover:Math.max(source.recover||0,a.recover||0),...(source.then?{then:source.then}:{})};
 if(w.level?.encounter?.veilmoor&&source.kind==='echo')a={...a,label:source.label};else if(e.normalPacing&&source.kind==='echo')a={...a,label:echoCue(a,w.lastCast)};
 b.mode='tele';b.t=0;b.atk=a;b.hitDone={};e.facing=sgn(p.x-e.x);b.target={x:p.x,y:p.y};
 b.markers=veilMarkers(e,w,a,emberMarkers(e,w,a,buildMarkers(e,a,w)));if(a.fullTell)b.markers.forEach(m=>m.outline=true);b.teleDur=a.windup*(a.fullTell?1:b.phase===2?.85:1);if(a.feint&&!b.feinted){if(!a.fullTell)b.teleDur*=.5;b.feint=true;}
 if(w.level?.encounter?.emberkeep&&a.feint)b.atk={...a,label:b.feint?'Fake swing! Wait for the next glow!':'Swing! Step off the glowing row!'};
 b.safeLane=(e.normalPacing&&a.kind==='sweep'||w.level?.encounter?.readable)&&(a.veilBeat!=null||a.kind==='sweep'||(w.level.encounter.emberkeep||w.level.encounter.veilmoor)&&['dash','wave','zone'].includes(a.kind)&&b.markers[0]?.shape==='box')?escapeRoute(w,b.markers[0],b.teleDur):null;
 if(a.veilPush)b.safeLane=veilSafe(w,a,b.markers);
 if((e.normalPacing&&a.kind==='sweep'||w.level?.encounter?.emberkeep||w.level?.encounter?.veilmoor)&&(a.veilBeat!=null||['sweep','dash','wave','zone'].includes(a.kind))&&b.markers[0]?.shape==='box'&&!b.safeLane){b.mode='move';b.gcd=.4;b.markers=[];if(a.forced||a.returnPass)b.force=a.name;if(a.returnPass)b.forceAtk=a;return;}
 (b.used||(b.used={}))[a.name]=(b.used[a.name]||0)+1;tellSound(e,w,a);
 /* a boss names a signature move the first time it uses it in a fight, so a child can name the trick afterwards */
 if(e.boss&&a.label&&!(b.named||(b.named=new Set())).has(a.label)){b.named.add(a.label);if(!w.level?.encounter?.readable&&!e.normalPacing) w.text?.(a.label,e.x,enemyTop(e)-6,'#ffe2a8',true);}
 if(a.pose&&hasState(e,a.pose)){setState(e,a.pose);b.freeze=false;}
 else if(a.kind==='dash'||a.state==='walk'||a.state==='idle'||a.state==='fly'&&a.kind!=='leap'){setState(e,'idle');b.freeze=false;}
 else {setState(e,a.state);b.freeze=true;}}
function beginAct(e,w,b){const a=b.atk;b.mode='act';b.t=0;b.prevT=-1;b.freeze=false;setState(e,a.state);e.stateT=0;
 const info=stateInfo(e.sprite,a.state);b.info=info;b.hits=info.contacts.length?info.contacts.slice():[Math.min(.25,info.dur*.5)];
 if(OWN.has(a.kind)&&beginMove(e,w,b,a,K))return;
 if(a.kind==='dash')b.path=[{x:e.x,y:e.y}];
 if(a.kind==='dash'){b.dashLeft=Math.min(a.range,Math.abs((e.facing>0?bounds(w).x1-(a.edge||0):bounds(w).x0+(a.edge||0))-e.x));b.info={dur:b.dashLeft/a.speed+.05,contacts:[]};}
 if(a.kind==='leap'){b.from={x:e.x,y:e.y};b.to={...b.markers[0]};b.air=a.air||.7;b.info={dur:b.air+.25,contacts:[b.air]};b.hits=[b.air];}}
function resolveHit(e,w,b,k){const a=b.atk,p=w.player,fx=fxList(w),f=e.facing,k2=e.scale||1;
 switch(a.kind){
  case 'melee':if(!b.hitDone.m&&b.markers.some(m=>inMarker(m,p))){if(hurtPlayer(e,w,a,e)){b.hitDone.m=1;if(a.impact)puff(w,a.impact,p.x,p.y,e,a.impactState);}}
   w.quake?.(e.boss?'aoe':'light',e.boss?.6:.3);break;
  case 'beam':fx.push({kind:'beam',owner:e,fx:a.fx,x:e.x+f*(10*k2),y:e.y,h:Math.round((metaOf(e.sprite)?.height||40)*k2*.45),dir:f,len:a.len,t:0,dur:.5});
   if(b.markers.some(m=>inMarker(m,p)))hurtPlayer(e,w,a,e);w.quake?.('aoe',.8);break;
  case 'projectile':{const n=a.count||1,muz={x:e.x+f*14*k2,y:e.y};const h=Math.round((metaOf(e.sprite)?.height||30)*k2*.5);
   for(let i=0;i<n;i++){const off=n===1?0:(i-(n-1)/2)*(a.spread||12),ty=p.y+off,dx=Math.max(20,Math.abs(p.x-muz.x));
    fx.push({kind:'shot',owner:e,a,fx:a.fx,x:muz.x,y:muz.y,h,vx:f*a.speed,vy:clampN((ty-muz.y)*a.speed/dx,-45,45),life:(a.range+40)/a.speed,t:0,homing:a.homing||0});}break;}
  case 'aoe':case 'line':case 'leap':b.markers.forEach((m,i)=>{
   if(a.fx){fx.push({kind:'hazard',owner:e,a,fx:a.fx,x:m.x,y:m.y,r:m.r,t:-(a.delay||0)-(a.kind==='line'?i*.09:a.fall?i*.14:i*.05),marker:m,hit:false,dmgMult:1,hs:a.hs});}
   else{if(inMarker(m,p)&&!b.hitDone[i]){b.hitDone[i]=1;hurtPlayer(e,w,a,m);}puff(w,a.impact||'fx-dust',m.x,m.y,e,a.impactState);}});
   if(a.puddle&&a.kind==='leap'){w.enemyFx=w.enemyFx.filter(f=>!(f.pilotPuddle&&f.owner===e));w.enemyFx.push({kind:'zone',pilotPuddle:true,owner:e,a:{dmg:0,tint:'#82cc87',outline:true},x:b.to.x,y:b.to.y,r:30,t:0,dur:1.8,slow:.15,tick:.6});}
   if(!a.fx)w.quake?.('aoe',e.boss?.9:.4);b.markers=a.fx?[]:b.markers;break;
  case 'summon':b.markers.forEach((m,i)=>{if(w_minions(e,a.key)>=(a.max||2))return;let o;if(w.spawn){o=w.spawn({...applyMod(rosterEnemy(a.key,{tier:e.tier||1}),a.mods?.[i]),summoner:e,helper:!!a.link||!!a.pilotGuards},m.x,m.y)||w.enemies[w.enemies.length-1];}else{o=makeEnemy(a.key,m.x,m.y);w.enemies.push(o);}Object.assign(o,{summoned:true,summoner:e,entered:true,facing:e.facing});
   /* a lantern or pylon is linked to the boss (boss-moves.js linkShield); a prop takes hits, not damage; an orbiter circles it */
   if(a.link){o.linkTo=e;o.linkColor=a.linkColor;o.linkShare=a.linkShare??o.linkShare;}if(o.propHits||a.propHits)o.prop={hits:a.propHits||o.propHits};if(a.orbit){o.orbitOf=e;o.orbitA=i/(a.count||1)*Math.PI*2;}
   if(a.fx)fx.push({kind:'hazard',owner:e,a:{...a,dmg:0},fx:a.fx,x:m.x,y:m.y,r:0,t:0,hit:true,marker:null,hs:a.fxs});
   if(!a.fx)puff(w,'fx-portal',m.x,m.y,e);});b.markers=[];if(a.banner)w.text?.(a.banner,e.x,enemyTop(e)-4,'#ffe2a8');break;
  case 'buff':e.def=b.baseDef*(a.def||2);b.buffT=a.time||4;w.text?.('ARMOUR',e.x,e.y-(metaOf(e.sprite)?.height||40)*k2-6,'#c9d7e8');break;
  default:if(OWN.has(a.kind))resolveMove(e,w,b,a,K);}}
function stepAct(e,w,dt,b){const a=b.atk,prev=b.prevT;b.prevT=b.t;
 if(OWN.has(a.kind)&&['vanish','stance','pillar','undertow'].includes(a.kind)){const r=stepMove(e,w,dt,b,a,K);if(r==='riposte'){endAct(e,w,b);b.recover=0;b.gcd=0;return;}if(r==='broken'){endAct(e,w,b);dizzy(e,w,b,b.dizzy||1.6);return;}if(r)endAct(e,w,b);return;}
 /* prevT, not b.t-dt: a contact time on an exact multiple of dt must not fall between two float roundings */
 for(let i=0;i<b.hits.length;i++)if(prev<b.hits[i]&&b.t>=b.hits[i])resolveHit(e,w,b,i);
 if(a.kind==='dash'){const step=a.speed*dt*b.speedMul;e.x+=e.facing*step;b.dashLeft-=step;setState(e,hasState(e,'run')?'run':'walk');
  const p=w.player;if(!b.hitDone.d&&Math.abs(p.x-e.x)<=14*(e.scale||1)&&Math.abs(p.y-e.y)<=bandOf(e,a)){b.hitDone.d=1;hurtPlayer(e,w,a,e);}
  /* a perfect roll through a lunge (stagger) stops it dead */
  if(b.dizzy){const d=b.dizzy;b.dizzy=0;endAct(e,w,b);dizzy(e,w,b,d,'STAGGERED!');return;}
  if(b.dashLeft<=0){w.quake?.('land',.8);puff(w,'fx-dust',e.x,e.y,e);b.path?.push({x:e.x,y:e.y});
   /* an afterimage trail bursts along the dash's path a moment later (Your Shadow's Shadow Step) */
   if(a.trail&&b.path)for(let i=1;i<=3;i++){const k=i/4,q=b.path[0],r=b.path[1],x=q.x+(r.x-q.x)*k,y=q.y+(r.y-q.y)*k,m={shape:'circle',x,y,r:a.trail.radius||16};fxList(w).push({kind:'hazard',owner:e,a:{...a,...a.trail,kind:'aoe'},fx:a.trail.fx,x,y,r:m.r,t:-(a.trail.delay||1)-i*.08,marker:m,hit:false,dmgMult:1});}
   /* a charge that ends in the arena wall leaves the boss stuck (M9 wall bonk): a free opening */
   const B=bounds(w),wall=Math.min(Math.abs(e.x-B.x0-(a.edge||0)),Math.abs(e.x-B.x1+(a.edge||0)))<8;endAct(e,w,b);if(a.bonk&&wall)dizzy(e,w,b,a.bonk,'STUCK!');return;}return;}
 if(a.kind==='leap'){const k=Math.min(1,b.t/b.air);e.x=b.from.x+(b.to.x-b.from.x)*k;e.y=b.from.y+(b.to.y-b.from.y)*k;e.z=Math.sin(Math.PI*k)*(30+10*(e.scale||1));
  if(b.t>=b.air)e.z=0;}
 if(b.t>=b.info.dur){if((a.kind==='leap'||a.sequential)&&(b.repeat=(b.repeat||1))<(a.repeat||1)){b.repeat++;startTele(e,w,b,a);if(!a.fullTell)b.teleDur=.45;return;}endAct(e,w,b);}}
/* Dizzy: stars over the head and a long opening (a broken guard, a wall bonk, a staggered lunge). */
function dizzy(e,w,b,time,label='DIZZY!'){b.mode='hurt';b.t=0;b.hurtDur=time;setState(e,hasState(e,'hurt')?'hurt':'idle');b.freeze=true;e.stateT=0;e.dizzyUntil=w.time+time;
 w.text?.(label,e.x,enemyTop(e)-6,'#ffe066',true);sfx('dizzy',undefined,{pan:panOf(w,e.x)});}
function endAct(e,w,b){const a=b.atk;woodEnd(e,w,b);b.repeat=0;b.lastKind=a.kind;e.fade=1;e.pillar=false;e.stance=null;b.freeze=false;b.decoys=null;
 /* a combo: the next move follows with its own full tell (once) */
 const back=e.hp>0&&returnPass(a);if(back){b.force=a.name;b.forceAtk=back;}else if(a.then&&(!a.thenPhase||b.phase===a.thenPhase)&&!b.chained&&e.hp>0&&!b.force){b.force=a.then;b.chained=true;}else b.chained=false;if(e.boss&&(e.attacks||[]).some(x=>['dash','projectile','beam','line','leap'].includes(x.kind)&&(!x.phase||x.phase===b.phase))&&rnd(w)<.4)b.spacing=100+rnd(w)*50;b.cd[a.name]=a.cd*b.cdMul;b.gcd=e.boss?.55:.9;b.mode='recover';b.t=0;b.recover=(back?a.backGap:null)??a.recover??(e.boss?.3:.4);b.markers=[];e.z=e.fly?e.z:0;setState(e,'idle');emberEnd(e,w,b);veilEnd(e,w,b);}

/* A called move (a riposte, a combo's second half, a mash punish) starts now, whatever its cooldown or phase. */
function forced(e,w,b){if(!canBeginThreat(w,e))return false;if(b.forceAtk?.name===b.force&&(w.enemyFx||[]).some(f=>f.owner===e&&f.kind==='sweep'))return false;const name=b.force;b.force=null;const a=b.forceAtk?.name===name?b.forceAtk:(e.attacks||[]).find(x=>x.name===name);b.forceAtk=null;if(!a||!w.player||w.player.hp<=0||w.level?.encounter?.veilmoor&&!a.returnPass&&a.uses&&(b.used?.[a.name]||0)>=a.uses)return false;startTele(e,w,b,a);return true;}
/* ---------- reactions ---------- */
function onDamaged(e,w,b){flashHit(e,w.time||0);const d=ENEMY_TYPES[e.key]||{};
 /* a boss that punishes button-mashing (onMash: the Crystal Golem's Shard Burst) answers a run of quick hits with a burst */
 const mash=e.boss&&(e.attacks||[]).find(a=>a.onMash);if(mash&&!b.force&&!(b.cd[mash.name]>0)&&(!mash.phase||mash.phase===b.phase)){const now=w.time||0;b.mash=(b.mash||[]).filter(t=>now-t<mash.onMash.window);b.mash.push(now);if(b.mash.length>=mash.onMash.hits&&b.mode!=='act'&&b.mode!=='tele'&&b.mode!=='trans'&&!(b.mode==='hurt'&&b.hurtDur>.5)){b.mash=[];b.force=mash.name;if(b.mode==='hurt'){b.mode='move';b.freeze=false;}}}
 if(e.boss){if(b.mode==='move'&&hasState(e,'hurt')&&(b.hurtCount=(b.hurtCount||0)+1)%4===0){b.mode='hurt';b.t=0;setState(e,'hurt');b.hurtDur=Math.min(.4,stateInfo(e.sprite,'hurt').dur);}return;}
 if(e.pilotPoise&&e.pilotLight)return;
 if(b.mode==='tele'){b.cd[b.atk.name]=b.atk.cd*.5;b.markers=[];}
 if(b.mode!=='act'){b.mode='hurt';b.t=0;setState(e,'hurt');b.hurtDur=Math.min(.38,stateInfo(e.sprite,'hurt').dur);b.freeze=false;}}
function enterPhase2(e,w,b){const ph=e.phaseShift;b.phase=2;b.mode='trans';b.t=0;b.markers=[];b.freeze=false;
 const st=ph.state&&hasState(e,ph.state)?ph.state:'idle';setState(e,st);b.transDur=Math.max(1,ph.state?stateInfo(e.sprite,st).dur:1);
 e.inv=.95;e.flash=.3;b.speedMul=ph.speed||1.2;b.cdMul=(ph.cd||.75)*(e.cdMul||1);b.dmgMul=ph.dmg||1;e.tint=ph.tint||null;b.cd={};b.gcd=0;
 w.quake?.('boss');puff(w,'fx-explosion',e.x,e.y,e);sfx('boss',undefined,{pan:panOf(w,e.x)});}

/* ---------- movement archetypes ---------- */
function moveTo(e,w,dt,tx,ty,speed){const dx=tx-e.x,dy=ty-e.y,d=Math.hypot(dx,dy*1.4);if(d<3){return false;}
 let vx=dx/d,vy=dy/d;for(const o of w.enemies){if(o===e||o.hp<=0||o.boss&&!e.boss)continue;const ox=e.x-o.x,oy=e.y-o.y,od=Math.hypot(ox,oy*2);const near=12*((e.scale||1)+(o.scale||1));
  if(od>0&&od<near){vx+=ox/od*.8;vy+=oy/od*.5;}}
 const l=Math.hypot(vx,vy)||1,slow=e.status==='slow'&&e.statusTime>0?.5:1;e.x+=vx/l*speed*dt*slow;e.y+=vy/l*speed*.7*dt*slow;return true;}
function sideOf(e,p){return e.brain.side||(e.brain.side=sgn(e.x-p.x));}
function approach(e,w,dt,b,dist){const p=w.player;if(Math.abs(p.x-e.x)>dist*2.5)b.side=sgn(e.x-p.x);const side=sideOf(e,p);
 const tx=p.x+side*dist,ty=p.y+b.slot*(e.band||9)*.6;const moved=moveTo(e,w,dt,tx,ty,e.speed*b.speedMul);
 setState(e,moved?'walk':'idle');if(!moved||Math.abs(p.x-e.x)<dist*1.4)e.facing=sgn(p.x-e.x);else e.facing=sgn(tx-e.x);}
const meleeRange=e=>Math.min(...(e.attacks||[]).filter(a=>a.kind==='melee'||a.kind==='aoe'&&a.at==='self').map(a=>a.kind==='melee'?a.range:a.radius*.85).concat([40]));
const MOVERS={
 chase(e,w,dt,b){const cap=living(w).filter(o=>o!==e&&!o.boss&&isAttacking(o)).length>=MAX_ATTACKERS;approach(e,w,dt,b,cap?meleeRange(e)+34:meleeRange(e)*.6);
  const d=ENEMY_TYPES[e.key];if(d?.block&&w.player.attack>0&&Math.abs(w.player.x-e.x)<60&&b.mode==='move'&&!(b.blockCd>0)&&rnd(w)<d.block.chance){b.mode='block';b.t=0;b.blockCd=2.5;setState(e,d.block.state);e.def=b.baseDef*4;}},
 strafe(e,w,dt,b){b.orbit=(b.orbit||0)+dt;const dive=Math.sin(b.orbit*1.6+b.bob)>.2;const keep=dive?meleeRange(e)*.55:meleeRange(e)+18;b.slot=dive?0:Math.sin(b.orbit*.9+b.bob)*1.4;approach(e,w,dt,b,keep);},
 ranged(e,w,dt,b){const p=w.player,keep=keepOf(e,w.tierKey);b.slot=0;if(Math.abs(p.x-e.x)<keep*.55)b.side=sgn(e.x-p.x);approach(e,w,dt,b,keep);},
 caster(e,w,dt,b){MOVERS.ranged(e,w,dt,b);},
 hopper(e,w,dt,b){b.hopT-=dt;if(b.hop){b.hop.t+=dt;const k=Math.min(1,b.hop.t/.45);e.x=b.hop.x0+(b.hop.x1-b.hop.x0)*k;e.y=b.hop.y0+(b.hop.y1-b.hop.y0)*k;e.z=Math.sin(Math.PI*k)*8;setState(e,'walk');
   if(k>=1){b.hop=null;e.z=0;b.hopT=.5+rnd(w)*.4;}return;}
  setState(e,'idle');e.facing=sgn(w.player.x-e.x);if(b.hopT<=0){const p=w.player,side=sideOf(e,p),tx=p.x+side*meleeRange(e)*.7,ty=p.y+b.slot*6;const dx=tx-e.x,dy=ty-e.y,d=Math.hypot(dx,dy)||1,s=Math.min(d,e.speed*.9);
   b.hop={t:0,x0:e.x,y0:e.y,x1:e.x+dx/d*s,y1:e.y+dy/d*s};}},
 flyer(e,w,dt,b){b.bob+=dt*3;e.z=(e.fly||20)+Math.sin(b.bob)*3;b.slot*=.98;approach(e,w,dt,b,meleeRange(e)*.5);},
 /* a lantern circling its mother, a pylon standing where it was raised */
 orbit(e,w,dt,b){const o=e.orbitOf;if(!o||o.hp<=0){MOVERS.flyer(e,w,dt,b);return;}e.orbitA=(e.orbitA||0)+dt*1.1;const tx=o.x+Math.cos(e.orbitA)*44,ty=o.y+Math.sin(e.orbitA)*16;moveTo(e,w,dt,tx,ty,Math.max(60,o.speed*2));b.bob+=dt*3;e.z=(e.fly||20)+Math.sin(b.bob)*3;setState(e,'walk');e.facing=sgn(w.player.x-e.x);},
 still(e,w,dt,b){setState(e,'idle');},
 boss(e,w,dt,b){const keep=e.keep||meleeRange(e)*.6;
  /* bosses with gap closers or ranged attacks sometimes back off after an attack, so those attacks get their distance */
  if(b.spacing&&Math.abs(Math.abs(w.player.x-e.x)-b.spacing)<12)b.spacing=0;approach(e,w,dt,b,b.spacing||keep);}};

/* Death: the atlas death animation plays out and the body stays drawn until it ends (combat.js decrements deathTime). */
function die(e,b){if(b.mode==='dead')return false;b.mode='dead';b.markers=[];b.freeze=false;setState(e,'death');e.stateT=0;e.deathTime=stateInfo(e.sprite,'death').dur+.7;e.tint=null;e.flash=0;return true;}
/* ---------- the per-frame step ---------- */
function step(e,w,dt,mover){_world=w;const b=brain(e,w);
 if(w._enemyFxT!==w.time){w._enemyFxT=w.time;updateFx(w,dt);}
 /* combat.js's World (it has the enemyAI seam) already ticks these timers, knockback and poison before calling in */
 const ext=typeof w.enemyAI==='function';
 if(!ext)for(const k of ['flash','inv','statusTime','exposed','marked','ccGuard'])e[k]=Math.max(0,(e[k]||0)-dt);
 e.stateT=(e.stateT||0)+(b.freeze?0:dt*(b.mode==='move'||b.mode==='recover'?b.rate||1:1));b.t+=dt;
 /* a shadow copy pops when its maker falls */
 if(e.decoy&&e.hp>0&&!(e.summoner?.hp>0))e.hp=0;
 if(e.hp<=0){if(e.decoy&&b.mode!=='dead'){puff(w,'fx-aura-shadow',e.x,e.y,e);e.deathTime=.01;}die(e,b);if(e.decoy)e.deathTime=Math.min(e.deathTime,.3);if(e.z>0)e.z=Math.max(0,e.z-dt*60);return;}
 if(e.hp<b.lastHp)onDamaged(e,w,b);b.lastHp=e.hp;
 b.gcd=Math.max(0,b.gcd-dt);b.blockCd=Math.max(0,(b.blockCd||0)-dt);for(const n in b.cd)b.cd[n]=Math.max(0,b.cd[n]-dt);
 if(b.buffT>0&&(b.buffT-=dt)<=0)e.def=b.baseDef;
 if(!ext&&e.knock>0){e.knock-=dt;const k=1-(e.kbResist||0);e.x+=(e.kx||0)*dt*k;e.y+=(e.ky||0)*dt*k;e.kx*=.87;e.ky*=.87;}
 if(!ext&&e.status==='poison'&&e.statusTime>0){e.poisonTick=(e.poisonTick||1)-dt;if(e.poisonTick<=0){e.poisonTick=1;e.hp-=7;w.text?.(7,e.x,e.y-26,'#b5e490');if(e.hp<=0){w.kill?.(e);return;}}}
 if(e.boss&&e.phaseShift&&b.phase===1&&e.hp<=e.maxHp*(e.phaseShift.at||.5)&&b.mode!=='act')enterPhase2(e,w,b);
 /* the Thorn King's phase change is roster.js's cinematic (a second life): follow it into phase two */
 if(e.cinematic&&e.phase===2&&b.phase===1){b.phase=2;b.speedMul=1.2;b.cdMul=.75*(e.cdMul||1);b.cd={};b.markers=[];b.mode='move';e.tint='#9dff7a';puff(w,'fx-explosion',e.x,e.y,e);if(e.phaseLine&&!w.quote)w.quote={text:e.phaseLine,at:w.run?.time||0};}
 const stunned=e.statusTime>0&&['stun','freeze','root'].includes(e.status);
 const p=w.player;
 switch(b.mode){
  case 'trans':if(b.t>=b.transDur){b.mode='move';setState(e,'idle');}else if(b.phase===2&&b.t<b.transDur-.05)e.inv=Math.max(e.inv,.6);break;
  case 'hurt':if(b.t>=b.hurtDur){b.mode='move';b.freeze=false;setState(e,'idle');}break;
  case 'block':if(b.t>=.8){b.mode='move';e.def=b.baseDef;setState(e,'idle');}break;
  case 'recover':if(b.force&&(!e.recoveryGate||b.t>=b.recover)&&!stunned&&forced(e,w,b))break;if(b.t>=b.recover)b.mode='move';else setState(e,'idle');break;
  /* a feint (Heroic and up): half a wind-up, a break, then the full real tell */
  case 'tele':if(stunned){b.mode='move';b.markers=[];b.feint=false;break;}if(b.t>=b.teleDur){if(b.feint){b.feint=false;b.feinted=true;w.text?.('FEINT!',e.x,enemyTop(e)-6,'#c9d7e8');const a=b.atk;startTele(e,w,b,a);b.used[a.name]--;b.feinted=false;break;}beginAct(e,w,b);}break;
  case 'act':stepAct(e,w,dt,b);break;
  default:if(stunned){setState(e,'idle');break;}
   if(b.force&&forced(e,w,b))break;const a=pickAttack(e,w,b);if(a){startTele(e,w,b,a);break;}
   if(p.hidden>0||p.hp<=0){setState(e,'idle');break;}
   mover(e,w,dt,b);
   /* Star Form (phaseShift.trail): a boss in its second phase leaves ground that slows behind it as it walks */
   const tr=b.phase===2&&e.phaseShift?.trail;if(tr&&e.state==='walk'&&(b.trailT=(b.trailT||0)-dt)<=0){b.trailT=tr.every||.7;fxList(w).push({kind:'zone',owner:e,a:tr,x:e.x,y:e.y,r:tr.radius||16,t:0,dur:tr.dur||3,slow:tr.slow||.3,tick:.6});}}
 const B=bounds(w);e.x=clampN(e.x,B.x0,B.x1);e.y=clampN(e.y,B.y0,B.y1);
 /* On a belt-scroll stage the camera shows y from viewTop down. A tall boss walking to the far edge of the floor would lose
    its head off the top of the view, so tall actors keep to the near part of the band (their own top stays on screen). */
 if(w.viewTop!==undefined||typeof w.encounter!=='function'){const top=w.viewTop??(STAGE.height-STAGE.viewH),h=(metaOf(e.sprite)?.height||40)*(e.scale||1)+(e.z||0);e.y=Math.max(e.y,Math.min(B.y1,top+h*.92));}}
export const ENEMY_AI=Object.fromEntries(Object.entries(MOVERS).map(([k,m])=>[k,(e,w,dt)=>step(e,w,dt,m)]));
/* combat.js's World.enemyAI seam: drive a sprite enemy once its atlas has loaded (until then, and in node tests without
   atlases, the built-in AI keeps it moving). Returns true when this module handled the enemy. */
export function runEnemy(e,w,dt){const f=ENEMY_AI[e.ai];if(!f||!e.sprite||!(e.brain||metaOf(e.sprite)))return false;f(e,w,dt);return true;}

/* ---------- projectiles, hazards, beams ---------- */
export function tickIdleEnemyFx(w,dt){if(w._enemyFxT===w.time)return;w._enemyFxT=w.time;updateFx(w,dt);}
function updateFx(w,dt){const fx=fxList(w),p=w.player,B=bounds(w);if(w.flooded>0)w.flooded=Math.max(0,w.flooded-dt);
 const gone=new Set();for(const f of [...fx]){f.t+=dt;const own=updateMoveFx(f,w,dt,K);if(own!==null){if(!own)gone.add(f);continue;}
  if(f.kind==='shot'){if(f.homing&&p&&p.hp>0){const want=Math.atan2(p.y-f.y,p.x-f.x),cur=Math.atan2(f.vy,f.vx),sp=Math.hypot(f.vx,f.vy);let d=want-cur;d=Math.atan2(Math.sin(d),Math.cos(d));const nc=cur+clampN(d,-f.homing*dt,f.homing*dt);f.vx=Math.cos(nc)*sp;f.vy=Math.sin(nc)*sp;}
   f.x+=f.vx*dt;f.y+=f.vy*dt;f.life-=dt;
   if(p&&p.hp>0&&Math.abs(p.x-f.x)<9&&Math.abs(p.y-f.y)<8&&(p.z||0)<18){hurtPlayer(f.owner,w,f.a,{x:f.x-f.vx*.05,y:f.y});f.life=0;}
   if(f.x<B.x0-40||f.x>B.x1+40)f.life=0;
   if(f.life<=0){f.kind='blast';f.t=0;f.dur=stateInfo(f.fx,'blast').has&&metaOf(f.fx)?.states?.blast?stateInfo(f.fx,'blast').dur:.01;}}
  else if(f.kind==='hazard'){if(f.t<0)continue;const info=stateInfo(f.fx,f.hs||'rise');const hitAt=info.contacts[0]??Math.min(.2,info.dur*.4);f.dur=f.dur||info.dur+(metaOf(f.fx)?.states?.break?stateInfo(f.fx,'break').dur+.3:0);
   if(!f.hit&&f.t>=hitAt){f.hit=true;if(p&&inMarker({shape:'circle',x:f.x,y:f.y,r:f.r},p))hurtPlayer(f.owner,w,f.a,f,f.dmgMult);}}}
 w.enemyFx=w.enemyFx.filter(f=>!gone.has(f)&&(OWN.has(f.kind)||f.kind==='shot'||f.t<0||f.t<(f.dur||.5)));}

/* ---------- drawing ---------- */
/* Top of an enemy's head in world units (for hp bars and labels): from its atlas height, scale and flight height. */
/* A chapter mini-boss fought as an elite draws at its own eliteDraw (game/enemies.js, about 1.4x the hero's height); the
   picture only, never its reach or body (bodyR and the move ranges read e.scale and the data). */
export const enemyRenderScale=e=>e.boss||e.decoy?Math.max(1,Math.floor((e.scale||1)+1e-6)):e.elite&&e.eliteDraw?e.eliteDraw:Math.max(.65,Math.round((e.scale||1)*.68*100)/100);
export function enemyTop(e){const m=metaOf(e.sprite);return e.y-(e.z||0)-(m?m.height*enemyRenderScale(e):46*enemyRenderScale(e));}
/* The old procedural enemies' wind-up (no ENEMY_AI yet, or atlas still loading): the same downloaded red-orange marker. */
export function legacyTelegraph(c,e,t){const r=e.boss?44:e.behavior==='hop'?20:24,hop=e.behavior==='hop'||e.boss&&e.phase===2;
 marker(c,{shape:'circle',x:hop?e.targetX:e.x,y:hop?e.targetY:e.y,r},Math.min(1,1-(e.wind||0)/Math.max(.1,e.windup||.6)),t||0);}
let makeCanvas=(w,h)=>{if(typeof OffscreenCanvas!=='undefined')return new OffscreenCanvas(w,h);if(typeof document!=='undefined'){const c=document.createElement('canvas');c.width=w;c.height=h;return c;}return null;};
/* node tools can supply a canvas factory (e.g. @napi-rs/canvas createCanvas) for review renders */
export function setCanvasFactory(fn){makeCanvas=fn;}
const silCache=new Map();
function silhouette(id,img,color){const key=id+color;if(silCache.has(key))return silCache.get(key);const c=makeCanvas(img.width,img.height);if(!c)return null;const x=c.getContext('2d');
 x.drawImage(img,0,0);x.globalCompositeOperation='source-in';x.fillStyle=color;x.fillRect(0,0,img.width,img.height);silCache.set(key,c);return c;}
function overlay(c,id,meta,state,t,x,y,facing,k,color,alpha){const img=spriteImage(id);if(!img||alpha<=0)return;const sil=silhouette(id,img,color);if(!sil)return;
 const {st,i}=spriteFrame(meta,state,t);if(!st)return;const [w,h]=meta.cell,[ax,ay]=meta.anchor,flip=(meta.faces==='left'?-1:1)*facing<0;
 c.save();c.globalAlpha*=Math.min(1,alpha);c.translate(Math.round(x),Math.round(y));if(flip)c.scale(-1,1);c.imageSmoothingEnabled=false;c.drawImage(sil,i*w,st.row*h,w,h,-ax*k,-ay*k,w*k,h*k);c.restore();}
/* Ground shadow: the dark-graded Foozle puddle sheet (fx-shadow), tiled across the actor's footprint. */
function shadow(c,x,y,rx,ry,a=.55){const s=loadSprite('fx-shadow');if(!s.ready)return;const w=s.meta.cell[0]-4,n=Math.max(1,Math.round(rx*2/w)),state=rx>9?'mid':'small';
 for(let i=0;i<n;i++)drawSprite(c,'fx-shadow',state,0,Math.round(x+(i-(n-1)/2)*w*.8),Math.round(y)+1,{alpha:a});}
/* One sprite enemy: ground shadow, the atlas frame, then the hit flash (white), the wind-up flash (warm) or the phase tint. */
export function drawEnemy(c,e,t){if(!e.sprite)return false;const s=loadSprite(e.sprite);if(!s.ready)return true;const m=s.meta,b=e.brain;
 /* Regular enemies were reading almost as large as heroes because their 56–58px
    atlases were drawn at full size. Keep their native artwork intact, but give
    regulars and elites a consistent smaller screen footprint. Bosses stay 1:1. */
 const k=enemyRenderScale(e);
 /* world.js passes a snapped copy; dead enemies are no longer stepped by combat, so their death starts here on the real actor */
 if(e.hp<=0&&b){const real=b.self||e;if(die(real,b))b.deathAt=t;if(b.deathAt===undefined)b.deathAt=t;e={...e,state:'death',stateT:Math.max(0,t-b.deathAt),deathTime:real.deathTime};}
 /* oct24-ember-finale: a cinematic still can rest a frame whose art sits above the feet (Moltar's last death frame lies 21 px
    over his anchor) down onto its shadow: stillDrop, art pixels, set by World.cinematicBeat from a beat's still[2] */
 const state=e.state&&m.states[e.state]?e.state:'idle',st=e.stateT||0,z=Math.round(e.z||0)-Math.round((e.stillDrop||0)*k);
 /* fade: a boss vanishing (boss-moves.js vanish) or turned to a fire column (pillar) */
 const alpha=(e.hp>0?1:Math.max(0,Math.min(1,(e.deathTime||0)/.4)))*(e.fade??1)*(e.pillar?.35:1);
 const rx=Math.max(m.shadow[0],m.height*.2)*k*(1-Math.min(.45,Math.max(0,z)/90)),ry=Math.max(m.shadow[1],rx*.3/k)*k*(1-Math.min(.45,Math.max(0,z)/90));
 /* a shadow copy casts no floor shadow: that is how a child tells the real one */
 if(!e.noShadow)shadow(c,e.x,e.y,rx,Math.min(ry,rx*.4),.3*alpha);
 /* entrances (game/entrances.js): claw up out of the ground, drop from the treetops, hop out of a tent, shimmer in */
 if(e.entering>0&&e.enterMax){const p=1-e.entering/e.enterMax,kind=e.entrance;
  if(kind==='rise'){const below=Math.round((1-Math.min(1,p*1.15))*m.height*k);c.save();c.beginPath();c.rect(e.x-400,e.y-600,800,600+1);c.clip();drawSprite(c,e.sprite,'idle',0,e.x+Math.round(Math.sin(p*40)*(1-p)*1.5),e.y+below,{facing:e.facing||1,scale:k,alpha});c.restore();return true;}
  if(kind==='drop'){const dz=Math.round((1-p)*(1-p)*150);drawSprite(c,e.sprite,'idle',0,e.x,e.y-z-dz,{facing:e.facing||1,scale:k,alpha});return true;}
  if(kind==='vine'){const side=e.vine?.side||1,L=186,H=Math.round(m.height*k*.95),rel=.15*side,th=p<.72?(-1.2+1.35*p/.72)*side:rel,px=e.x-6*side-L*Math.sin(rel),py=e.y-18-H-L*Math.cos(rel);
   /* swung in on a vine (owner, 9 Oct): the PixelLab vine pivots out of the treetops (rotated, never redrawn) with the
      goblin hanging from its tip by the hands; it lets go near the bottom of the arc and lands where its shadow waits,
      and the vine swings back and fades. A body with a 'special' move plays its hanging frames on the vine and lands standing. */
   const back=p<.72?th:rel-(p-.72)/.28*.5*side;c.save();c.translate(Math.round(px),Math.round(py));c.rotate(-back);drawSprite(c,VINE_SPRITE,'idle',0,0,0,{alpha:p<.72?1:Math.max(0,1-(p-.72)/.28)});c.restore();
   const hx=px+L*Math.sin(th),hy=py+L*Math.cos(th)+H,q=p<.72?0:(p-.72)/.28,fx=hx+(e.x-hx)*q,fy=hy+(e.y-hy)*q-Math.round(Math.sin(q*Math.PI)*8);
   const sp=m.states.special,F=sp?.frames||1,fps=sp?.fps||11,pose=p>=.72?'idle':sp?'special':'walk',ft=p>=.72?0:sp?F*(.22+.45*p/.72)/fps:p;
   drawSprite(c,e.sprite,pose,ft,Math.round(fx),Math.round(fy),{facing:side,scale:k,alpha});return true;}
  if(kind==='tent'){const hop=Math.round(Math.sin(Math.min(1,p*1.3)*Math.PI)*12);drawSprite(c,e.sprite,'walk',p,e.x,e.y-z-hop,{facing:e.facing||1,scale:k,alpha:alpha*Math.min(1,p*3)});return true;}
  drawSprite(c,e.sprite,'idle',0,e.x,e.y-z,{facing:e.facing||1,scale:k,alpha:alpha*p*(.75+.25*Math.sin(p*30))});return true;}
 if(alpha<=0)return true;if(e.hp>0&&(e.pilotArmour||e.pilotGuard)&&!(e.pilotOpen>t)){c.save();c.strokeStyle='#b8dfff';c.lineWidth=2;c.beginPath();const a=(e.pilotFacing||e.facing)===-1?Math.PI:0;c.ellipse(e.x,e.y-12,18,24,0,a-1.2,a+1.2);c.stroke();c.restore();}
 drawSprite(c,e.sprite,state,st,e.x,e.y-z,{facing:e.facing||1,scale:k,alpha});
 /* a fire column over a boss in Pillar Form; a cold glint on a boss holding a guard; stars over a dizzy one */
 if(e.pillar&&e.hp>0){const H=m.height*k;for(let y=0;y<H;y+=20)drawSprite(c,'fx-col-fire','rise',((t||0)*1.3+y*.01)%.5,e.x+Math.round(Math.sin((t||0)*9+y)*2),e.y-y,{alpha:.9});}
 if(e.stance&&e.hp>0)overlay(c,e.sprite,m,state,st,e.x,e.y-z,e.facing||1,k,'#9fd8ff',.16+.12*Math.sin((t||0)*14));
 if(b?.mode==='hurt'&&b.hurtDur>.5&&e.hp>0){const top=e.y-z-m.height*k-4;for(let i=0;i<3;i++){const a=(t||0)*4+i*2.09;drawSprite(c,'fx-spark-holy','twinkle',((t||0)*.8+i*.3)%.5,Math.round(e.x+Math.cos(a)*12),Math.round(top+Math.sin(a)*3),{alpha:.85});}}
 /* Hit flash (art director round 3): the sprite's own pixels brightened (drawn over itself with 'lighter') at 0.6 for two
    frames -- never a flat cream silhouette, and never re-triggered while it shows, so a boss stays readable through combos. */
 if(e.hp>0){if(e.flash>0){if(e.flashWhite>0)overlay(c,e.sprite,m,state,st,e.x,e.y-z,e.facing||1,k,'#ffffff',alpha);else{c.save();c.globalCompositeOperation='lighter';drawSprite(c,e.sprite,state,st,e.x,e.y-z,{facing:e.facing||1,scale:k,alpha:.6*alpha});c.restore();}}
  else if(b?.mode==='tele'){const left=b.teleDur-b.t;if(left<.15){c.save();c.globalCompositeOperation='lighter';drawSprite(c,e.sprite,state,st,e.x,e.y-z,{facing:e.facing||1,scale:k,alpha:.55});c.restore();}
   else{const pulse=.5+.5*Math.sin((t||0)*TELE_PULSE);overlay(c,e.sprite,m,state,st,e.x,e.y-z,e.facing||1,k,TELE.flash,.1+.24*pulse*Math.min(1,b.t/Math.max(.01,b.teleDur)+.25));}}
  else if(e.tint)overlay(c,e.sprite,m,state,st,e.x,e.y-z,e.facing||1,k,e.tint,.1+.06*Math.sin((t||0)*4));
}
 /* the killing blow lights the body up for a few frames before it falls (combat.js deathFx) */
 else if(e.deathFlash>.12-FRAME)overlay(c,e.sprite,m,state,st,e.x,e.y-z,e.facing||1,k,'#ffffff',1);
 else if(e.deathFlash>0){c.save();c.globalCompositeOperation='lighter';drawSprite(c,e.sprite,state,st,e.x,e.y-z,{facing:e.facing||1,scale:k,alpha:Math.min(1,e.deathFlash/.12)*.85});c.restore();}
 return true;}
/* Ground telegraph: red-orange graded Foozle ground cracks (fx-marker), tiled over the danger area, brightening as the
   hit approaches. Authored pilot tells add a static code outline, also visible before the effect atlas loads. */
function marker(c,m,prog,t){if(m.hide)return;if(m.soft){softMarker(c,m,prog);return;}if(m.outline){c.save();c.strokeStyle='#ffe49a';c.lineWidth=1.5;c.setLineDash([4,3]);if(m.shape==='box')c.strokeRect(Math.min(m.x0,m.x1),m.y-m.band,Math.abs(m.x1-m.x0),m.band*2);else{c.beginPath();c.ellipse(m.x,m.y,m.r,m.r*.55,0,0,Math.PI*2);c.stroke();}c.restore();}const s=loadSprite('fx-marker');if(!s.ready)return;const pulse=.5+.5*Math.sin(t*14),alpha=Math.min(1,(.35+.6*prog)*(.8+.2*pulse))*(m.dim||1);
 const put=(x,y)=>drawSprite(c,'fx-marker','glow',0,Math.round(x),Math.round(y),{alpha});const gx=14,gy=6;
 if(m.shape==='box'){const lo=Math.min(m.x0,m.x1),hi=Math.max(m.x0,m.x1);for(let y=m.y-m.band+gy/2,r=0;y<=m.y+m.band;y+=gy,r++)for(let x=lo+(r%2?gx/2:0);x<=hi;x+=gx)put(x,y);return;}
 /* fill the ellipse with cracks on a staggered grid, so the whole danger area glows red-orange */
 const rx=m.r,ry=m.r*.55;for(let y=-ry+gy/2,r=0;y<=ry;y+=gy,r++)for(let x=-rx+(r%2?gx/2:0);x<=rx;x+=gx)if((x*x)/(rx*rx)+(y*y)/(ry*ry)<=.7)put(m.x+x,m.y+y);
 /* the edge: cracks around the full perimeter at 12 px or closer, so the boundary of the danger area reads */
 const per=Math.PI*(3*(rx+ry)-Math.sqrt((3*rx+ry)*(rx+3*ry))),n=Math.max(8,Math.ceil(per/12));for(let i=0;i<n;i++){const a=i/n*Math.PI*2;put(m.x+Math.cos(a)*rx,m.y+Math.sin(a)*ry);}}
/* Telegraph markers (painted now, under the actors) plus depth-sorted entries for enemy projectiles, hazards and beams. */
export function enemyLayer(c,w,t){const out=w.level?.encounter?.readable?[{y:1e9,draw:()=>veilOverlay(c,w)}]:[];if(!w.enemies?.some(e=>e.brain)){if(w.enemyFx)w.enemyFx.length=0;return out;}
 for(const e of w.enemies){const b=e.brain;if(!b||e.hp<=0||!b.markers?.length)continue;
  if(e.normalPacing||w.level?.encounter?.readable)safeLane(c,b.safeLane,!w.level?.encounter?.veilmoor,w);
  const prog=b.mode==='tele'?Math.min(1,b.t/Math.max(.01,b.teleDur)):1;for(const m of b.markers)marker(c,e.normalPacing||w.level?.encounter?{...m,soft:true,lane:(e.normalPacing||w.level.encounter.readable)&&m.shape==='box'}:m,prog,t);}
 /* a vanished boss's decoy exits, drawn dimmer than the real one (Heroic and up) */
 for(const e of w.enemies){const b=e.brain;if(!b||e.hp<=0||b.mode!=='act'||b.atk?.kind!=='vanish')continue;if(!w.level?.encounter?.veilmoor)for(const m of b.decoys||[])marker(c,m,1,t);
  const gate=b.atk.gate;if(gate&&!e.fade)for(const m of [...(b.markers||[]),...(b.decoys||[])])out.push({y:m.y-1,draw:()=>drawSprite(c,gate,'rise',Math.min(.45,b.t*.6),m.x,m.y,{alpha:m.dim?.45:1})});}
 drawLinks(c,w,t,out);
 for(const f of w.enemyFx||[]){
  if(OWN.has(f.kind)){drawMoveFx(c,f,t,out,K);continue;}
  if(f.kind==='hazard'){if(f.marker&&!f.hit)marker(c,w.level?.encounter?{...f.marker,soft:true,lane:w.level.encounter.readable&&f.marker.shape==='box'}:f.marker,1,t);if(f.t<0){if(f.a?.fall)out.push({y:f.y,draw:()=>drawFall(c,f,t)});if(f.glow)out.push({y:f.y,draw:()=>drawSprite(c,f.glow,'twinkle',t,f.x,f.y-12)});continue;}
   out.push({y:f.y,draw:()=>{const hs=f.hs||'rise',rise=stateInfo(f.fx,hs),brk=metaOf(f.fx)?.states?.break;if(brk&&f.t>rise.dur)drawSprite(c,f.fx,'break',f.t-rise.dur,f.x,f.y);else drawSprite(c,f.fx,hs,f.t,f.x,f.y);}});}
  else if(f.kind==='shot'){out.push({y:f.y,draw:()=>{shadow(c,f.x,f.y,4,1.5,.22);drawSprite(c,f.fx,'fly',f.t,f.x,f.y-f.h,{facing:sgn(f.vx)});}});}
  else if(f.kind==='blast'){out.push({y:f.y,draw:()=>drawSprite(c,f.fx,'blast',f.t,f.x,f.y-f.h,{facing:sgn(f.vx)})});}
  else if(f.kind==='beam'&&f.fx){out.push({y:f.y+1,draw:()=>{const a=f.t<.08?'charge':'beam';drawSprite(c,f.fx,'beam',f.t,f.x,f.y-f.h,{facing:f.dir,alpha:Math.max(0,1-f.t/f.dur)});}});}}
 {const d=darkLayer(c,w,t,K);if(d)out.push(d);}
 return out;}
/* (additive, 24 Oct, scenes/party-ai.js) run this frame's projectiles and hazards against the hero before an enemy that is
   chasing a companion takes its step, so a hostile shot never resolves against the companion by accident of order */
export function enemyFxTick(w,dt){if(w._enemyFxT!==w.time){w._enemyFxT=w.time;updateFx(w,dt);}}
