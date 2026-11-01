import {sfx} from '../core/audio.js';
/* improve20-a-oct31 #4: Grubnak's guard stance (e1 boss, Normal). The kid-appeal playtest cleared e1 for 3 stars without one
   ability, so nothing early asked for the Library. Once, at about 60% health, the Chief stops, plants his club upright in front of
   him (his own 'shout' frame, held) and turns steel blue: GUARD UP! While guarded, basic attacks do GUARD.basic of their damage.
   One learned ability, or GUARD.heavies heavy attacks, breaks it at once: GUARD BROKEN! and a stagger. It drops by itself after
   GUARD.time s, so a hero with no ability can still win. The cue ("Library powers break guards!") is shown once, the first time
   the guard goes up (gfx/stage-view.js reads w.guardCue). Heroic and Legendary e1 already have the pilot armour (tier-pilot.js
   pilotBlock: heavy hits and abilities crack it), so the stance is Normal's. Spawn-local: the roster is never edited. */
/* improve20-u-nov1 #2 (audit6 #4: a phone kid mashing Attack): GUARD.basics basic hits crack it too, so mashing is slow but never zero, and
   the first guarded hit asks for the ability button at once (w.guardNudge, game/controls-tutorial.js tickAbilityNudge) */
export const GUARD={at:.6,time:6,basic:.2,heavies:3,basics:6,stagger:1.6,cue:3.2,tint:'#8fc4ff',pose:'shout',poseT:.12};
export const guardsUp=(w,e)=>w?.tierKey==='normal'&&w.level?.id==='e1'&&e?.key==='goblin-king'&&!e.helper&&!e.elite;
export function guardBoss(w,e){if(guardsUp(w,e))e.guardPlan=true;return e;}
/* a learned ability: not a basic swing, a gear trick, a companion, a summon or a totem tick */
export const breaksGuard=a=>!!a&&!a.basic&&!a.trick&&!a.ally&&!a.tick;
function startGuard(e,w){const b=e.brain;e.guardDone=true;e.guard={at:w.time,until:w.time+GUARD.time,heavy:0,basics:0,tint:e.tint||null,ringAt:w.time+.6};e.tint=GUARD.tint;
 b.mode='guard';b.t=0;b.markers=[];b.atk=null;b.freeze=true;e.state=GUARD.pose;e.stateT=GUARD.poseT;e.facing=Math.sign(w.player.x-e.x)||e.facing||1;
 w.text?.('GUARD UP!',e.x,e.y-70,'#bfe0ff',true);sfx('guard');w.effect?.('ring',e.x,e.y,{radius:34,color:GUARD.tint,ground:true,life:.5,max:.5});
 if(!w.guardCue)w.guardCue={at:w.run?.time??w.time};}
export function endGuard(e,w,broken){const g=e.guard;if(!g)return;e.guard=null;e.tint=g.tint;const b=e.brain;if(!b)return;b.freeze=false;
 if(broken){w.text?.('GUARD BROKEN!',e.x,e.y-70,'#ffe49a',true);sfx('armour.crack');w.burst?.(e.x,e.y-30,'#ffe49a',14,'shard');w.effect?.('ring',e.x,e.y,{radius:40,color:'#ffe49a',ground:true,life:.45,max:.45});w.quake?.('crit');
  /* the stagger: enemy-ai.js dizzy() through its hurt mode, and combat.js hit() adds half again while dizzyUntil holds */
  b.mode='hurt';b.t=0;b.hurtDur=GUARD.stagger;b.freeze=true;e.state='hurt';e.stateT=0;e.dizzyUntil=w.time+GUARD.stagger;w.text?.('STAGGERED!',e.x,e.y-56,'#fff2a8');}
 else{if(b.mode==='guard'){b.mode='move';b.t=0;}w.text?.('GUARD DOWN',e.x,e.y-70,'#c9d7e8');}}
/* every frame, before the boss's own AI (tier-pilot.js pilotTick) */
export function guardTick(e,w){if(!e.guardPlan)return;const b=e.brain,g=e.guard;if(!b)return;
 if(g){if(e.hp<=0||b.mode==='trans'||b.mode==='dead'){e.guard=null;e.tint=b.mode==='trans'?e.tint:g.tint;b.freeze=false;return;}if(w.time>=g.until){endGuard(e,w,false);return;}
  b.mode='guard';b.freeze=true;b.markers=[];e.state=GUARD.pose;e.stateT=GUARD.poseT;e.moving=false;
  if(!(w.time<g.ringAt)){g.ringAt=w.time+.6;w.effect?.('ring',e.x,e.y,{radius:26,color:GUARD.tint,ground:true,life:.4,max:.4});}return;}
 if(!e.guardDone&&e.hp>0&&e.hp<=e.maxHp*GUARD.at&&['move','recover'].includes(b.mode)&&!(e.statusTime>0))startGuard(e,w);}
/* combat.js hit(): the damage multiplier a guarded boss takes from this hit (1 when it is not guarding) */
export function guardHit(w,e,a){const g=e.guard;if(!g||e.hp<=0)return 1;
 if(breaksGuard(a)){endGuard(e,w,true);return 1;}
 if(a.heavy&&++g.heavy>=GUARD.heavies){endGuard(e,w,true);return 1;}
 if(a.basic&&!a.heavy){if(!w.guardNudge)w.guardNudge={at:w.time};if(++g.basics>=GUARD.basics){endGuard(e,w,true);return 1;}}
 if(a.heavy){w.text?.(`CRACK! ${GUARD.heavies-g.heavy} MORE`,e.x,e.y-70,'#ffe49a',true);sfx('armour.crack');}
 else if(!(w.time-(g.said??-9)<.7)){g.said=w.time;w.text?.('GUARDED',e.x,e.y-56,'#aab4c2');sfx('guard');}
 return GUARD.basic;}
