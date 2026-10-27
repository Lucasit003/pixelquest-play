import {veilExit,veilPush} from './veilmoor.js';
import {tierLayer,safeLane} from './tier-fx.js';
/* Signature boss moves (docs/design/TRICKY_LEVELS_OPENING_STORY_SFX.md section 3 "new boss attack kinds" and section 4
   movesets). scenes/enemy-ai.js owns the attack lifecycle (pick, telegraph, act, recover); this module adds the kinds
   the ten most generic bosses needed and the readable cues every fight shares. Each kind keeps the house rules: a tell
   the child can see and hear (at least 0.6 s for a boss), one visible cause per hit, and an answer without abilities.
     wave     rings or a low wall moving out along the floor: jump them (or roll through)
     sweep    a beam that moves across the floor's depth: step past its end, get behind, or jump it (`back`: a second,
              separately warned pass from the other edge, returnPass)
     vanish   fade out, come back at a marked spot after `appear` s and strike there (decoys are drawn dimmer)
     stance   a guard held for `hold` s: hits from the front are parried and answered by `riposte`; strike from behind,
              wait for the opening, or stun/freeze/root to break it; `reflect` sends shots back
     echo     the boss repeats the shape of the hero's last ability (a projectile, an area or a swing)
     dark     the arena dims for `dur` s: the hero, the lanterns and every warning stay lit, the boss shows its eyes
     pillar   the boss becomes a slow chasing column for `dur` s, then is exhausted (a long opening)
     split    `count` shadow copies with no floor shadow join the fight; one hit pops a copy
     lure     a light drifts out and stops; a burst follows at that spot `fuse` s later
     zone     ground that slows (and may burn) for `dur` s: a flood, a trail, burning planks
     undertow a current pulls the hero toward the boss for `dur` s: walk against it
     pick     one of `options` in turn (the Sleeper's dream echoes of the other chapters' bosses)
   Shared attack fields read here: push/pull/hold (on any hit), fall (a hazard that drops from the sky), hs (the hazard
   sheet's state), bossOnly, uses, forced/onMash, then (a combo), feint (Heroic and up), heroic/legendary (overrides). */
import {sfx} from '../core/audio.js';
import {loadSprite,drawSprite} from '../gfx/actors/sprites.js';

const sgn=v=>v<0?-1:1,clampN=(v,a,b)=>v<a?a:v>b?b:v,rnd=w=>(w.rng?w.rng():Math.random());
export const MOVE_KINDS=['wave','sweep','vanish','stance','echo','dark','pillar','split','lure','zone','undertow','pick'];
/* ---------- sound: every wind-up is heard, panned toward the attacker (section 13.3 P1) ---------- */
const TELL={melee:'tell.melee',aoe:'tell.aoe',line:'tell.aoe',projectile:'tell.shot',beam:'tell.beam',sweep:'tell.beam',dash:'tell.dash',leap:'tell.leap',
 wave:'tell.wave',vanish:'tell.vanish',stance:'tell.stance',summon:'tell.summon',dark:'tell.dark',pillar:'tell.aoe',split:'tell.vanish',lure:'tell.shot',
 zone:'tell.wave',undertow:'tell.pull',echo:'tell.vanish',buff:'tell.stance'};
export function panOf(w,x){const cx=w.camX!=null?w.camX+240:(w.player?.x??x);return clampN((x-cx)/240*.6,-.6,.6);}
export function tellSound(e,w,a){if(w.silent)return;const big=e.boss||e.elite||e.mod;sfx(big?(a.sound||TELL[a.kind]||'tell.melee'):'tell.small',undefined,{pan:panOf(w,e.x)});}
/* ---------- the attack as this boss plays it on this tier ---------- */
/* heroic/legendary hold overrides for one attack ({count:2}, {then:'ember rush'}, {phase:0}); tiers lists the tiers an
   attack exists on. Applied once, when the boss's brain is made, to a copy: ENEMY_TYPES is never changed. */
export function tierAttacks(list,tk){const rank={heroic:1,legendary:2}[tk]||0;
 return (list||[]).filter(a=>!a.tiers||a.tiers.includes(tk||'normal')).map(a=>{let o=a;if(rank>=1&&a.heroic)o={...o,...a.heroic};if(rank>=2&&a.legendary)o={...o,...a.legendary};return o;});}
/* ---------- markers ---------- */
export function moveMarkers(e,a,w,K){const p=w.player,f=e.facing,b=K.bounds(w),out=[];
 switch(a.kind){
  case 'wave':if(a.shape==='front')out.push({shape:'box',x0:e.x+f*10,x1:e.x+f*Math.min(a.reach,120),y:e.y,band:a.band||14});else out.push({shape:'circle',x:e.x,y:e.y,r:a.r0||22});if(a.previewReach)out.push({shape:'circle',x:e.x,y:e.y,r:a.reach,dim:.3});break;
  case 'sweep':{const mid=(b.y0+b.y1)/2;out.push({shape:'box',x0:e.x+f*10,x1:e.x+f*a.len,y:mid,band:(b.y1-b.y0)/2});break;}
  case 'pillar':out.push({shape:'circle',x:e.x,y:e.y,r:a.radius||18});break;}
 return out;}
export function moveInRange(e,a,p,K){const dx=Math.abs(p.x-e.x),dy=Math.abs(p.y-e.y);
 switch(a.kind){
  case 'wave':return a.shape==='front'?dx<=(a.range||a.reach||200)&&dy<=(a.band||14)*2:dx<=(a.range||a.reach*.8);
  case 'sweep':return dx<=a.len*.9;
  case 'stance':return dx<=(a.range||90)&&dy<=30;
  case 'undertow':return K.w?.flooded>0&&dx>=40&&dx<=(a.range||260);
  case 'split':return K.minions(e,e.key)<(a.max||a.count||1);
  default:return dx<=(a.range||300);}}
/* ---------- acting ---------- */
/* Set up the act for a new kind. Returns true when this module times the act itself (stepMove ends it). */
export function beginMove(e,w,b,a,K){const info=K.stateInfo(e.sprite,a.state);
 switch(a.kind){
  case 'vanish':b.van={done:0};b.info={dur:(a.out||.3)+a.appear+.45,contacts:[]};b.hits=[];b.markers=[];return true;
  case 'stance':b.info={dur:a.hold,contacts:[]};b.hits=[];b.freeze=true;e.stateT=(info.contacts[0]||.3)*.6;e.stance={reflect:!!a.reflect,at:w.time};b.parried=false;b.broken=false;return true;
  case 'pillar':b.info={dur:a.dur,contacts:[]};b.hits=[];b.tick=.35;b.pHits=0;e.pillar=true;return true;
  case 'undertow':b.info={dur:a.dur,contacts:[]};b.hits=[];w.text?.('UNDERTOW!',e.x,K.top(e)-4,'#8fe4ff');return true;}
 return false;}
/* the contact frame of a move this module owns (wave, sweep, dark, split, lure, zone) */
export function resolveMove(e,w,b,a,K){const p=w.player,fx=K.fx(w),f=e.facing,B=K.bounds(w);
 switch(a.kind){
  case 'wave':{const n=a.count||1,cast={hit:false};/* rings from one tell share it: the cast hits the hero at most once */for(let i=0;i<n;i++)fx.push({kind:'wave',owner:e,a,cast,shape:a.shape||'ring',x:e.x+(a.shape==='front'?f*12:0),y:e.y,dir:f,t:-i*(a.gap||.5),r:a.r0||10,hit:false});w.quake?.('aoe',.5);break;}
  case 'sweep':{const far=B.y0+2,near=B.y1-2,from=a.from==='near'?near:far,to=a.from==='near'?far:near;
   fx.push({kind:'sweep',owner:e,a,x0:e.x+f*10,x1:e.x+f*a.len,dir:f,ya:from,yb:to,t:0,dur:a.dur||.9,hit:false});w.quake?.('aoe',.5);break;}
  case 'dark':w.dark={from:w.time,until:w.time+a.dur,owner:e,lights:(a.lights||[[.25,.5],[.75,.5]]).map(([u,v])=>({x:B.x0+(B.x1-B.x0)*u,y:B.y0+(B.y1-B.y0)*v}))};if(!(w.level?.encounter?.emberkeep||w.level?.encounter?.veilmoor))w.text?.(a.banner||'DARKNESS!',e.x,K.top(e)-4,'#c9b8ff');break;
  case 'split':{const n=a.count||1;for(let i=0;i<n;i++){const side=i%2?-1:1,x=clampN(e.x+side*(46+i*10),B.x0+20,B.x1-20),y=clampN(e.y+(i%2?14:-14),B.y0,B.y1);
    /* a copy pops on the first hit (prop: one hit), whatever the boss was doing when it split (a rally's guard, a stance) */
    const o={...e,brain:null,boss:false,elite:false,decoy:true,noShadow:true,summoned:true,summoner:e,entered:true,hp:100,maxHp:100,prop:{hits:1},shielded:false,ward:0,stance:null,pillar:false,dizzyUntil:0,crackUntil:0,partner:null,mod:null,
     attacks:(e.attacks||[]).filter(x=>x.kind==='melee').map(x=>({...x,dmg:(x.dmg||1)*(a.dmg||.55),cd:x.cd*1.4})),phaseShift:null,stance:null,fade:1,x,y,name:e.name,tint:null,inv:.4,cdMul:1.3};
    o.attacks.length||o.attacks.push({name:'mirror slash',state:'attack',kind:'melee',range:60,band:10,cd:2.4,windup:.7,dmg:.55});
    (w.admitEnemy?w.admitEnemy(o):w.enemies.push(o));K.puff(w,a.fx||'fx-col-shadow',x,y,e);}if(!w.level?.encounter?.veilmoor)w.text?.(a.banner||'WHICH ONE IS REAL?',e.x,K.top(e)-4,'#c9b8ff');break;}
  case 'lure':{const n=a.count||1;for(let i=0;i<n;i++){const ox=n>1?(i-(n-1)/2)*(a.spread||50):0;fx.push({kind:'lure',owner:e,a,x:e.x+f*16,y:e.y,sx:e.x+f*16,sy:e.y,tx:clampN(p.x+ox,B.x0+10,B.x1-10),ty:clampN(p.y+(i%2?8:-8)*(n>1?1:0),B.y0,B.y1),t:-i*.35});}break;}
  case 'zone':{const z=a.veilZone|| (a.area==='lower'?{x0:B.x0-30,x1:B.x1+30,y0:(B.y0+B.y1)/2+4,y1:B.y1+8}:a.area==='upper'?{x0:B.x0-30,x1:B.x1+30,y0:B.y0-8,y1:(B.y0+B.y1)/2-4}:null);
   fx.push({kind:'zone',owner:e,a,rect:z,x:p.x,y:p.y,r:a.radius||30,t:0,dur:a.dur,slow:a.slow||.35,tick:.6});if(a.flood)w.flooded=Math.max(w.flooded||0,a.dur);w.text?.(a.banner||'',e.x,K.top(e)-4,'#8fe4ff');break;}}}
/* One frame of a move this module times. Returns true when the act has ended. */
export function stepMove(e,w,dt,b,a,K){const p=w.player,B=K.bounds(w);
 switch(a.kind){
  case 'vanish':{const out=a.out||.3,t=b.t,V=b.van;
   if(t<out){e.fade=1-t/out;e.inv=Math.max(e.inv||0,.1);return false;}
   if(!V.done){V.done=1;e.fade=0;K.puff(w,a.puff||'fx-dust',e.x,e.y,e);const d=vanishSpot(e,w,a,B);e.x=d.x;e.y=d.y;e.facing=sgn(p.x-e.x);
    b.markers=[{shape:'circle',x:d.x,y:d.y,r:a.radius||26}];b.decoys=(d.decoys||[]).map(q=>({shape:'circle',x:q.x,y:q.y,r:a.radius||26,dim:.38}));b.bubbleT=0;}
   if(t<out+a.appear){e.inv=Math.max(e.inv||0,.1);e.fade=0;if((b.bubbleT-=dt)<=0){b.bubbleT=.28;const m=b.markers[0];if(m&&a.bubble)K.puff(w,a.bubble,m.x+(rnd(w)-.5)*m.r,m.y+(rnd(w)-.5)*m.r*.4,e);for(const q of b.decoys||[])if(a.bubble&&rnd(w)<.5)K.puff(w,a.bubble,q.x,q.y,e);}return false;}
   if(V.done===1){V.done=2;e.fade=1;e.flash=.06;K.setState(e,a.state);e.stateT=0;const m=b.markers[0];
    if(m){if(a.fx)K.fx(w).push({kind:'hazard',owner:e,a,fx:a.fx,x:m.x,y:m.y,r:m.r,t:0,marker:m,hit:false,dmgMult:1,hs:a.hs});else{if(K.inMarker(m,p))K.hurt(e,w,a,m);K.puff(w,a.impact||'fx-dust',m.x,m.y,e,a.impactState);}
     /* Heroic Scorchtail: the planks he bursts through burn for a while (after: a zone at the spot) */
     if(a.after)K.fx(w).push({kind:'zone',owner:e,a:a.after,x:m.x,y:m.y,r:a.after.radius||24,t:0,dur:a.after.dur||4,slow:a.after.slow||0,tick:.5});}
    for(const q of b.decoys||[])K.puff(w,a.decoyFx||'fx-dust',q.x,q.y,e);b.decoys=null;b.markers=[];w.quake?.('aoe',.6);}
   e.fade=1;return t>=b.info.dur;}
  case 'stance':{if(b.parried){e.stance=null;b.force=a.riposte;return 'riposte';}
   if(b.broken||(e.statusTime>0&&['stun','freeze','root'].includes(e.status))){e.stance=null;w.text?.('GUARD BROKEN!',e.x,K.top(e)-4,'#ffd27a');sfx('armour.crack',undefined,{pan:panOf(w,e.x)});b.dizzy=a.dizzy||1.6;return 'broken';}
   if(b.t>=a.hold){e.stance=null;w.text?.('OPEN!',e.x,K.top(e)-4,'#ffd27a');return true;}return false;}
  case 'pillar':{const dx=p.x-e.x,dy=p.y-e.y,d=Math.hypot(dx,dy*1.4)||1,sp=(a.speed||50)*(b.speedMul||1);if(d>4){e.x+=dx/d*sp*dt;e.y+=dy/d*sp*.7*dt;}
   e.x=clampN(e.x,B.x0,B.x1);e.y=clampN(e.y,B.y0,B.y1);e.facing=sgn(dx);b.markers=[{shape:'circle',x:e.x,y:e.y,r:a.radius||18}];
   if((b.tick-=dt)<=0&&K.inMarker(b.markers[0],p)&&(b.pHits||0)<(a.maxHits||2)){K.hurt(e,w,a,e);b.tick=a.every||.8;b.pHits=(b.pHits||0)+1;}
   if(b.t>=a.dur){e.pillar=false;b.markers=[];w.text?.('EXHAUSTED!',e.x,K.top(e)-4,'#ffd27a');K.puff(w,'fx-dust',e.x,e.y,e);return true;}return false;}
  case 'undertow':{if(!(p.dodge>0)&&p.hp>0){const dx=e.x-p.x;if(Math.abs(dx)>30){p.drift={x:sgn(dx)*(a.pull||32),y:(e.y-p.y)*.6};}}
   if((b.bubbleT=(b.bubbleT||0)-dt)<=0){b.bubbleT=.16;K.puff(w,a.bubble||'fx-spark-ice',p.x+sgn(e.x-p.x)*(8+rnd(w)*20),p.y+(rnd(w)-.5)*10,e,'twinkle');}
   return b.t>=a.dur;}}
 return b.t>=b.info.dur;}
function vanishSpot(e,w,a,B){const p=w.player,cl=(x,y)=>({x:clampN(x,B.x0+16,B.x1-16),y:clampN(y,B.y0,B.y1)});let d;
 if(a.to==='behind')d=cl(p.x-(p.facing||1)*(a.offset||34),p.y);
 else if(a.to==='lantern'){const ls=w.enemies.filter(o=>o.linkTo===e&&o.hp>0);const l=ls.sort((x,y)=>Math.hypot(x.x-p.x,x.y-p.y)-Math.hypot(y.x-p.x,y.y-p.y))[0];d=l?cl(l.x+sgn(p.x-l.x)*16,l.y):cl(p.x+(rnd(w)<.5?-1:1)*40,p.y);}
 else if(a.to==='far')d=cl(p.x<(B.x0+B.x1)/2?B.x1-50:B.x0+50,p.y);
 else d=cl(p.x+(a.offset?(rnd(w)<.5?-1:1)*a.offset:0),p.y);
 if(w.level?.encounter?.veilmoor&&a.kind==='vanish')d=veilExit(e,w,a,B,d);
 const n=a.decoys||0;d.decoys=[];for(let i=0;i<n;i++){const s=i%2?-1:1;d.decoys.push(cl(d.x+s*(70+i*18),clampN(d.y+(i%2?16:-16),B.y0,B.y1)));}
 return d;}
/* ---------- echo: the hero's last ability, as this boss's attack ---------- */
export function echoAttack(e,w,a){const L=w.lastCast,base={name:a.name,state:a.state,windup:a.windup,cd:a.cd,dmg:a.dmg||1,recover:a.recover,echo:true};
 if(!L||w.time-L.t>30)return {...base,kind:'melee',range:70,band:12,label:'ECHO'};
 const twice=L.twice?1.2:1,lead=a.lead&&w.player.lastDodge&&w.time-w.player.lastDodge.t<3?w.player.lastDodge:null;
 let o;if(L.kind==='projectile'||L.kind==='chain'||L.kind==='mark')o={kind:'projectile',fx:a.shotFx||'fx-bolt-shadow',range:300,speed:120,count:L.kind==='chain'?2:1,spread:16};
 else if(['aoe','totem','aura','heal','buff'].includes(L.kind)&&L.kind!=='buff')o={kind:'aoe',at:'player',fx:a.areaFx||'fx-col-shadow',radius:clampN((L.radius||30)*.75,16,34),count:1,range:300,lead};
 else o={kind:'melee',range:76,band:12,impact:'fx-hit-shadow'};
 return {...base,...o,dmg:base.dmg*twice,label:`ECHO: ${L.name||'your power'}${L.twice?' x2':''}`};}
/* the next of a pick move's options, in turn */
export function pickOption(e,b,a){const i=(b.pickI=(b.pickI??-1)+1)%a.options.length;return {...a.options[i],name:a.name,cd:a.cd,label:a.options[i].label};}
/* A sweep with `back` (Legendary) returns as its own pass: one beam hits at most once, and the return is a second attack
   from the other edge with its own full tell (same marker, CLEAR lane and sound, the same wind-up) after a protected
   recovery (`backGap`, else the move's recover). enemy-ai.js endAct queues it; damage is the move's own. */
export function returnPass(a){if(a.kind!=='sweep'||!a.back||a.returnPass)return null;return {...a,back:false,returnPass:true,from:a.from==='near'?'far':'near',label:a.returnLabel||a.label};}
/* ---------- shared hit extras: push, pull and hold ---------- */
export function afterHit(e,w,a,landed){if(!landed)return;const p=w.player;
 if(a.push||a.pull){const dx=p.x-e.x,dy=p.y-e.y,d=Math.hypot(dx,dy)||1,mag=(a.push||-a.pull)/.0885;p.kx=dx/d*mag;p.ky=dy/d*mag*.5;p.knock=.15;}
 if(w.level?.encounter?.veilmoor)veilPush(e,w,a);
 if(a.hold){p.moveLock=Math.max(p.moveLock||0,a.hold);w.text?.('GRABBED! ROLL OUT!',p.x,p.y-40,'#ffd27a');}}
/* ---------- the fx this module adds to world.enemyFx ---------- */
export function updateMoveFx(f,w,dt,K){const p=w.player;
 if(f.kind==='wave'){if(f.t<0)return true;const a=f.a;f.r+=(a.speed||110)*dt;
  if(!f.hit&&p&&p.hp>0){let on;if(f.shape==='front'){const x=f.x+f.dir*f.r;on=Math.abs(p.x-x)<(a.th||8)&&Math.abs(p.y-f.y)<=(a.band||14);}else{const rp=Math.hypot(p.x-f.x,(p.y-f.y)/.55);on=Math.abs(rp-f.r)<(a.th||8);}
   /* low ground waves: any jump clears them */
   if(on&&f.cast?.hit)f.hit=true;else if(on&&(p.z||0)<=6&&!(p.inv>0)){f.hit=true;if(f.cast)f.cast.hit=true;K.hurt(f.owner,w,a,{x:f.shape==='front'?f.x+f.dir*(f.r-20):f.x,y:f.y});}}
  return f.r<(a.reach||160);}
 if(f.kind==='sweep'){const a=f.a,k=f.t/f.dur;if(k>1)return false;f.y=f.ya+(f.yb-f.ya)*k;
  if(!f.hit&&p&&p.hp>0&&(p.z||0)<=6&&Math.abs(p.y-f.y)<(a.band||7)&&p.x>=Math.min(f.x0,f.x1)-4&&p.x<=Math.max(f.x0,f.x1)+4&&!(p.inv>0)){f.hit=true;K.hurt(f.owner,w,a,{x:f.x0,y:f.y});}return true;}
 if(f.kind==='lure'){if(f.t<0)return true;const a=f.a,k=Math.min(1,f.t/(a.drift||1.2)),ease=1-(1-k)*(1-k);f.x=f.sx+(f.tx-f.sx)*ease;f.y=f.sy+(f.ty-f.sy)*ease;
  if(k>=1){const m={shape:'circle',x:f.x,y:f.y,r:a.radius||20};K.fx(w).push({kind:'hazard',owner:f.owner,a,fx:a.fx,x:f.x,y:f.y,r:m.r,t:-(a.fuse||1),marker:m,hit:false,dmgMult:1,hs:a.hs,glow:a.lightFx||'fx-spark-holy'});return false;}return true;}
 if(f.kind==='zone'){if(f.t>f.dur)return false;if(p&&inZone(f,p)&&(p.z||0)<=14){p.slowZ=Math.min(p.slowZ??1,1-f.slow);if(f.a.burn&&(f.tick-=dt)<=0&&!(p.inv>0)){f.tick=f.a.every||1.2;K.hurt(f.owner,w,{...f.a,dmg:f.a.burn},{x:f.x,y:f.y+20});}}return true;}
 return null;}
const inZone=(f,p)=>f.rect?p.x>=f.rect.x0&&p.x<=f.rect.x1&&p.y>=f.rect.y0&&p.y<=f.rect.y1:((p.x-f.x)/f.r)**2+((p.y-f.y)/(f.r*.55))**2<=1;
/* ---------- drawing ---------- */
const frameT=(id,st,k)=>{const m=loadSprite(id).meta?.states?.[st];return m?k*m.frames/(m.fps||8):0;};
export function drawMoveFx(c,f,t,out,K){const a=f.a;
 if(f.kind==='wave'){if(f.t<0)return;const fx=a.fx||'fx-col-arcane',st=a.fxs||'rise',fade=Math.max(.55,1-f.r/(a.reach||160)*.6),tt=frameT(fx,st,.35+.3*((t*3)%1));
  if(f.shape==='front'){const x=f.x+f.dir*f.r,band=a.band||14;for(let y=f.y-band;y<=f.y+band;y+=8)out.push({y,draw:()=>drawSprite(c,fx,st,tt,Math.round(x),Math.round(y),{facing:f.dir,alpha:fade})});return;}
  const rx=f.r,ry=f.r*.55,per=Math.PI*(3*(rx+ry)-Math.sqrt((3*rx+ry)*(rx+3*ry))),n=Math.max(8,Math.ceil(per/(a.step||15)));
  for(let i=0;i<n;i++){const an=i/n*Math.PI*2,x=f.x+Math.cos(an)*rx,y=f.y+Math.sin(an)*ry;out.push({y,draw:()=>drawSprite(c,fx,st,tt,Math.round(x),Math.round(y),{alpha:fade})});}return;}
 if(f.kind==='sweep'){const fx=a.fx||'fx-flame-pillar',m=loadSprite(fx).meta,y=f.y;
  if(m?.states?.beam){const len=Math.abs(f.x1-f.x0),cw=m.cell[0],lo=Math.min(f.x0,f.x1)-4,hi=Math.max(f.x0,f.x1)+4;out.push({y,draw:()=>{c.save();/* a beam cell (270 px) is longer than a remixed sweep (len 88): draw only the span that hurts, so it never crosses the CLEAR lane */c.beginPath();c.rect(Math.round(lo),Math.round(y)-60,Math.round(hi-lo),120);c.clip();for(let x=0;x<len;x+=cw-8)drawSprite(c,fx,'beam',f.t,Math.round(f.x0+f.dir*x),Math.round(y),{facing:f.dir,alpha:.95});c.restore();}});return;}
  const st=a.fxs||'rise',lo=Math.min(f.x0,f.x1),hi=Math.max(f.x0,f.x1);for(let x=lo;x<=hi;x+=a.step||13){const xx=x,tt=frameT(fx,st,.3+.4*(((xx*7+f.t*60)|0)%10)/10);out.push({y,draw:()=>drawSprite(c,fx,st,tt,Math.round(xx),Math.round(y)+8)});}return;}
 if(f.kind==='lure'){if(f.t<0)return;if(a.veilTell)K.marker(c,{shape:'circle',x:f.tx,y:f.ty,r:a.radius||20,soft:true},Math.min(1,f.t/(a.drift||1.2)),t);const fx=a.lightFx||'fx-spark-holy';out.push({y:f.y,draw:()=>{drawSprite(c,fx,'twinkle',t,Math.round(f.x),Math.round(f.y-14),{alpha:.95});}});return;}
 if(f.kind==='zone'){const fade=Math.min(1,f.t/.4,Math.max(0,(f.dur-f.t)/.6));c.save();c.globalAlpha=.32*fade;c.fillStyle=a.tint||'#4fb6ff';
  if(f.rect){c.fillRect(f.rect.x0,f.rect.y0,f.rect.x1-f.rect.x0,f.rect.y1-f.rect.y0);}else{c.beginPath();c.ellipse(f.x,f.y,f.r,f.r*.55,0,0,Math.PI*2);c.fill();}if(a.outline&&!f.rect){c.globalAlpha=.85*fade;c.strokeStyle='#c0ffd9';c.lineWidth=2;c.beginPath();c.ellipse(f.x,f.y,f.r,f.r*.55,0,0,Math.PI*2);c.stroke();}c.restore();
  const fx=a.fx;if(fx){const r=f.rect,pts=f.pts||(f.pts=r?Array.from({length:Math.round((r.x1-r.x0)/26)},(_,i)=>[r.x0+i*26+((i*37)%13),r.y0+6+((i*53)%Math.max(6,r.y1-r.y0-10))]):[[f.x-f.r*.5,f.y],[f.x+f.r*.4,f.y+3],[f.x,f.y-4]]);
   for(const [x,y] of pts)out.push({y,draw:()=>drawSprite(c,fx,a.fxs||'twinkle',(t+x*.013)%1,Math.round(x),Math.round(y),{alpha:.8*fade})});}return;}}
/* A falling hazard (starfall, meteors): the shot sheet drops from the sky onto its marker until it lands. */
export function drawFall(c,f,t){const a=f.a,fx=a.fallFx||'fx-bolt-holy',lead=-(f.t);if(!(lead>0)||lead>(a.fallTime||.8))return false;
 const k=lead/(a.fallTime||.8),z=k*150;c.save();c.translate(Math.round(f.x+k*30),Math.round(f.y-z));c.rotate(Math.PI/2+.2);drawSprite(c,fx,'fly',t,0,0,{alpha:Math.min(1,(1-k)*3)});c.restore();return true;}
/* ---------- darkness (Ash Storm, Ink Darkness) ---------- */
let darkCv=null;
export function darkLayer(c,w,t,K){const D=w.dark;if(!D)return null;if(w.time>D.until||!(D.owner?.hp>0)){w.dark=null;return null;}
 const k=Math.min(1,(w.time-D.from)/.6,(D.until-w.time)/.6),A=((w.level?.encounter?.emberkeep||w.level?.encounter?.veilmoor)&&w.level.id==='mx1'?.45:.84)*k;
 return {y:1e7,draw:()=>{const W=480,H=270,x0=Math.round(w.camX||0),y0=Math.round(w.camTop||0);
  if(!darkCv)darkCv=K.canvas(W,H);if(!darkCv)return;const g=darkCv.getContext('2d');g.globalCompositeOperation='copy';g.fillStyle=`rgba(8,6,16,${A})`;g.fillRect(0,0,W,H);g.globalCompositeOperation='destination-out';
  const hole=(x,y,r)=>{const gr=g.createRadialGradient(x-x0,y-y0,r*.35,x-x0,y-y0,r);gr.addColorStop(0,'rgba(0,0,0,1)');gr.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gr;g.beginPath();g.arc(x-x0,y-y0,r,0,Math.PI*2);g.fill();};
  const p=w.player;hole(p.x,p.y-20,62);if((w.level?.encounter?.emberkeep||w.level?.encounter?.veilmoor)){hole(x0+35,p.y,70);hole(x0+W-35,p.y,70);}for(const l of D.lights)hole(l.x,l.y-14,48);g.globalCompositeOperation='source-over';
  c.drawImage(darkCv,x0,y0);
  /* lanterns: a warm glow where the light is */
  for(const l of D.lights){c.save();c.globalAlpha=.5*k;drawSprite(c,'fx-spark-fire','twinkle',(t*.7)%1,Math.round(l.x),Math.round(l.y-10));c.restore();}
  /* every warning stays readable on top of the dark (the Bed of Chaos rule) */
  for(const e of w.enemies){const b=e.brain;if(!b||e.hp<=0)continue;for(const m of b.markers||[])K.marker(c,(w.level?.encounter?.emberkeep||w.level?.encounter?.veilmoor)?{...m,soft:true,lane:m.shape==='box'}:m,b.mode==='tele'?Math.min(1,b.t/Math.max(.01,b.teleDur)):1,t);}
  for(const f of w.enemyFx||[])if(f.kind==='hazard'&&f.marker&&!f.hit)K.marker(c,f.marker,1,t);
  if((w.level?.encounter?.emberkeep||w.level?.encounter?.veilmoor)){tierLayer(w,c);for(const e of w.enemies)safeLane(c,e.brain?.safeLane,!w.level?.encounter?.readable,w);}
  /* the boss's ember eyes */
  const e=D.owner,top=K.top(e)+(e.eyeY||14),ex=e.x+(e.facing||1)*(e.eyeX||2),pulse=.7+.3*Math.sin(t*6);
  c.save();c.globalAlpha=k*pulse;c.fillStyle=D.eye||'#ffb347';c.fillRect(Math.round(ex-4),Math.round(top),2,2);c.fillRect(Math.round(ex+2),Math.round(top),2,2);c.globalAlpha=k*.35*pulse;c.fillRect(Math.round(ex-5),Math.round(top-1),10,4);c.restore();}};}
/* ---------- links: lanterns and pylons that feed a boss's shield ---------- */
/* The share of a hit a boss takes while its links stand: Wisp Mother's lanterns (each 20%), the Crystal Golem's pylons. */
export function linkShield(e,w){if(!e.boss)return 1;const ls=w.enemies.filter(o=>o.linkTo===e&&o.hp>0);if(!ls.length)return 1;return Math.max(.3,1-ls.reduce((s,o)=>s+(o.linkShare||.2),0));}
export function drawLinks(c,w,t,out){for(const o of w.enemies){if(!o.linkTo||o.hp<=0||!(o.linkTo.hp>0))continue;const e=o.linkTo,col=o.linkColor||'#9ff4ff';
 out.push({y:Math.min(o.y,e.y)-1,draw:()=>{c.save();c.globalAlpha=.45+.25*Math.sin(t*9+o.x);c.strokeStyle=col;c.lineWidth=1;c.beginPath();c.moveTo(Math.round(o.x),Math.round(o.y-(o.linkY||16)));c.lineTo(Math.round(e.x),Math.round(e.y-40));c.stroke();c.restore();}});}}
/* ---------- stance, perfect dodge and props (called from combat.js hit and enemy-ai.js) ---------- */
/* A hit on a boss in a stance: from the front it is parried (shots reflected when the stance reflects), from behind it lands.
   Returns true when the hit was parried. */
export const REFLECT=.45;
export function stanceBlock(w,e,a,src){const st=e.stance;if(!st||e.hp<=0)return false;if(a.status&&['stun','freeze','root'].includes(a.status)){if(e.brain)e.brain.broken=true;return false;}
 const from=src||w.player,front=sgn(from.x-e.x)===(e.facing||1);if(!front)return false;
 if(!(w.time-(st.said||-1)<.35)){st.said=w.time;w.text?.(st.reflect&&src?'REFLECTED!':'PARRIED!',e.x,e.y-60,'#9fd8ff',true);sfx('blocked',undefined,{pan:panOf(w,e.x)});}
 if(st.reflect&&src&&w.shots)w.shots.push({x:e.x+(e.facing||1)*14,y:e.y,h:30,vx:(e.facing||1)*150,vy:0,life:2.2,color:'#c07dff',hostile:true,power:e.atk*REFLECT,kb:70,by:e});
 else if(e.brain)e.brain.parried=true;return true;}
/* A roll that starts within 0.2 s before a hit would land is PERFECT: the boss is Exposed for 2 s, the world slows for a
   moment (off when motion is reduced), and a boss mid-lunge (stagger:true) staggers. */
export function perfectDodge(e,w,a){const p=w.player;if(!p||!(p.dodge>0)||!e.boss&&!e.elite)return false;const since=.32-p.dodge;if(since>.2)return false;
 if(w.perfectAt&&w.time-w.perfectAt<.6)return true;w.perfectAt=w.time;e.exposed=Math.max(e.exposed||0,2);w.text?.('PERFECT!',p.x,p.y-44,'#fff2a8',true);sfx('perfect');if(w.motion!==false)w.slowmo=Math.max(w.slowmo||0,.12);
 if(a?.stagger&&e.brain){e.brain.dizzy=a.stagger;}return true;}
/* An interactable prop (a pylon): basic hits and gear tricks chip one, any learned ability three. */
export function propHit(w,e,a){if(!e.prop)return false;e.prop.hits-=(a.basic||a.trick||a.ally||a.tick)?1:3;e.flash=.05;sfx('ward',undefined,{pan:panOf(w,e.x)});
 if(e.prop.hits<=0){e.hp=0;w.text?.(e.decoy?'FAKE!':'SHATTERED!',e.x,e.y-40,'#d9b8ff',true);sfx('armour.crack',undefined,{pan:panOf(w,e.x)});return 'dead';}
 w.text?.('●'.repeat(Math.max(0,e.prop.hits)),e.x,e.y-44,'#d9b8ff');return true;}
