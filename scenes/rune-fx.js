/* Ability Runes on the battlefield and the first-cast moment (kidfix-b-oct31, docs/playtest/kidfix-b-oct31/REPORT.md).
   Rune ranks change a cast visibly with code-drawn effects only (no new art; gfx/combat-fx.js draws the 'rune' type):
   rank I lays a rune-coloured glow over the cast and where it lands, rank II makes that glow bigger and brighter, rank III adds
   one extra flourish (a second ring and sparks). The power side lives in game/math.js (runeMul, runeCd) and World.cast.
   The first-cast moment: the first time the hero casts an ability in a level on this save (game/hints.js firstCast), a 0.35 s
   slow motion at 30% speed (never on Heroic or Legendary, never with Reduce motion), a low white flash (not with Reduce motion),
   a big number on what it hits or heals, and a one-line "<NAME>!" banner through the stage banner queue (gfx/stage-view.js). */
import {runeRank} from '../game/math.js';
import {RUNE_COLOR} from '../game/runes.js';
import {firstCastDue,markFirstCast} from '../game/hints.js';
export const FIRST_SLOW=.35,FIRST_SPEED=.3,FIRST_FLASH=.25,FIRST_FLASH_ALPHA=.3,FIRST_BANNER=1.4,FIRST_BIG=1.2;
const glow=(w,x,y,rank,o={})=>w.fx.push({type:'rune',x,y,rank,color:RUNE_COLOR,life:o.life??.6,max:o.life??.6,radius:(o.radius??18)*(rank>=2?1.4:1),ground:!!o.ground,lift:o.lift??18});
/* at the cast: around the hero */
export function runeCastFx(w,a,rank){if(!(rank>0)||!w?.player)return;const p=w.player;glow(w,p.x,p.y,rank,{radius:20,lift:20});}
/* where it lands: the target, the area's centre, or the hero for a buff, heal, totem or aura */
export function runeHitFx(w,a,rank,target){if(!(rank>0)||!w?.player)return;const p=w.player,o=a.kind==='aoe'&&w.aoeCentre?w.aoeCentre(a):target&&['melee','chain','mark','projectile'].includes(a.kind)?target:p;
 const r=a.kind==='aoe'?Math.max(18,Math.min(40,(a.radius||30)*.7)):20;glow(w,o.x,o.y,rank,{radius:r,lift:a.kind==='aoe'?6:18,life:.7});}
/* the first-cast moment; returns true when it fired */
export function firstCastMoment(w,a){const s=w?.save;if(!s||!w.level||!a?.id||!firstCastDue(s,a.id))return false;markFirstCast(s,a.id);
 const tier=w.tierKey||'normal',now=w.run?.time??w.time;w.firstCast={id:a.id,name:a.name,at:now,real:0};w.bigFor={id:a.id,until:w.time+FIRST_BIG};
 w.castSlow=tier==='normal'&&w.motion!==false?FIRST_SLOW:0;w.events?.persist?.();return true;}
/* the white flash's alpha this frame (real time since the cast), 0 when Reduce motion is on */
export const firstFlashAlpha=w=>w?.firstCast&&w.motion!==false&&w.firstCast.real<FIRST_FLASH?FIRST_FLASH_ALPHA*(1-w.firstCast.real/FIRST_FLASH):0;
export const bigNumber=(w,a)=>!!a?.id&&!a.basic&&!a.ally&&!!w?.bigFor&&w.bigFor.id===a.id&&w.time<w.bigFor.until;
/* main.js's frame loop (not World.update, which stays deterministic): counts the real time since the first cast and returns the
   dt to step the world by, FIRST_SPEED of it while the slow motion lasts */
export function slowCast(w,dt){if(w?.firstCast)w.firstCast.real+=dt;if(w?.castSlow>0){w.castSlow-=dt;return dt*FIRST_SPEED;}return dt;}
export const shotRune=(s,a)=>a&&!a.basic?runeRank(s,a.id):0;
