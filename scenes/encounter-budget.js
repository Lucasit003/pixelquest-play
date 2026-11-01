import {loadSprite} from '../gfx/actors/sprites.js';
import {CHAPTERS} from '../game/levels.js';
import {makeEnemy} from '../game/roster.js';
/* Shared, transient budgets for authored encounters. Queue actors, never silently discard a wave or pay a queued kill. */
export const ENCOUNTER_CAPS=Object.freeze({normal:{live:6,affixed:0,major:1},heroic:{live:7,affixed:1,major:2},legendary:{live:8,affixed:2,major:2}});
const active=w=>!!w.level?.encounter;
const alive=w=>w.enemies.filter(e=>e.hp>0);
const reserved=e=>1+(e.split&&!e.splitChild&&!e.boss?1:0);
const helper=e=>!!(e.mini||e.echo||e.helper||e.linkTo||e.decoy);
/* exploit7-oct29: a prop that cannot attack (the Crystal Golem's Prism Pylons: atk 0, no moves) is no threat. It held a threat slot and,
   with a Veilmoor boss's waitHelpers, kept the boss from ever attacking while it stood: ignoring both pylons made Heroic v4 a
   zero-risk fight (the hero still hit the boss through the pylons' 40% shield). The boss now fights on while they stand. */
export const harmless=e=>!!e.prop&&!(e.atk>0)&&!(e.attacks?.length);
/* An effect that can still land holds its slot (f.back: a returning effect, kept for fixtures; a Legendary sweep now returns as its own told attack, boss-moves.js returnPass). */
export const liveThreatFx=f=>(!f.hit||f.back)&&(f.a?.dmg??1)>0;
const acting=e=>e.wind>0||['tele','act'].includes(e.brain?.mode)&&e.brain?.atk?.kind!=='summon';
export function threatCount(w,except=null){const owners=new Set(alive(w).filter(e=>e!==except&&(helper(e)&&!harmless(e)||acting(e))));for(const f of w.enemyFx||[])if(f.owner!==except&&liveThreatFx(f))owners.add(f.owner||f);for(const s of w.shots||[])if(s.hostile&&s.by!==except)owners.add(s.by||s);return owners.size+(w.tierFx?.current?(w.tierFx.current.markers?.length||1):0);}
export function canBeginThreat(w,e){if(!active(w))return true;if(e.woodDuo&&e.partner?.hp>0&&!e.empowered){if(w.woodDuoNext&&w.woodDuoNext.hp>0&&w.woodDuoNext!==e)return false;if(acting(e.partner)||e.partner.brain?.mode==='recover'&&e.partner.brain.t<e.partner.brain.recover||(w.enemyFx||[]).some(f=>f.owner===e.partner&&liveThreatFx(f)))return false;}if(e.waitHelpers&&alive(w).some(o=>o.summoner===e&&o.helper&&!harmless(o)))return false;if(w.tierFx?.current||w.tierFx?.want||(w.enemyFx||[]).some(f=>f.owner===e&&liveThreatFx(f)))return false;return threatCount(w,e)<ENCOUNTER_CAPS[w.tierKey].major;}
/* improve20-w-nov1 #12 (a7): on v5 Heroic 19 of 26 hits and both falls came from casters' bolts, not the boss. While a Heroic or Legendary
   boss is up, at most RANGED_CAP ranged foes (casters, or any regular with a shot) stand at once; a further one waits in the queue (never
   discarded; a boss's summon counts its queued ones against its own max) and comes in when one falls. */
export const RANGED_CAP=2;
export const rangedFoe=e=>!!e&&!e.boss&&!e.prop&&(e.ai==='caster'||(e.attacks||[]).some(a=>a.kind==='projectile'));
export const rangedCapped=(w,e)=>w.flow==='boss'&&['heroic','legendary'].includes(w.tierKey)&&rangedFoe(e)&&alive(w).filter(rangedFoe).length>=RANGED_CAP;
export function canAdmit(w,e){if(!active(w))return true;if(rangedCapped(w,e))return false;const es=alive(w),c=ENCOUNTER_CAPS[w.tierKey];return es.reduce((n,o)=>n+reserved(o),0)+reserved(e)<=c.live&&(!e.mod||es.filter(o=>o.mod).length<c.affixed)&&(!helper(e)||es.filter(helper).length<c.major&&threatCount(w)<c.major);}
/* improve20-r7b-nov1 #5 (audit6 #14): offline, a foe whose atlas was never cached was invisible and still hit. In a browser a regular foe
   whose picture is not ready waits in the queue (it neither acts nor can be hit, and the wave waits for it); if its picture failed to
   load (or is still not there after ART_WAIT s of play: offline, a loader's entry can wait for ever) it comes in as a regular from the chapter whose picture is loaded, or, with none, it is dropped. Never a drawn stand-in. Node (tests,
   the balance sim) has no Image, so nothing waits there. */
const browser=()=>typeof Image!=='undefined'&&!/jsdom/i.test(globalThis.navigator?.userAgent||''); /* jsdom (the tests) never loads a picture */
export const artPending=e=>browser()&&!!e?.sprite&&!e.boss&&!loadSprite(e.sprite).ready;
export function standIn(w,e){const ch=CHAPTERS.find(c=>c.id===w.level?.chapter)||CHAPTERS[0],seen=new Set(w.enemies.map(o=>o.key));
 const keys=[...new Set([...(ch.pool||[]).filter(k=>seen.has(k)),...(ch.pool||[]),...CHAPTERS.flatMap(c=>c.pool||[])])];
 for(const k of keys){const d=makeEnemy(k,{tier:w.level?.tier||1});if(d.sprite&&loadSprite(d.sprite).ready)return d;}return null;}
export const ART_WAIT=4;
function artHeld(w,e,q,i){const sh=loadSprite(e.sprite);if(sh.ready){e.artHold=false;return false;}
 e.artSince??=w.time||0;if(!sh.failed&&(w.time||0)-e.artSince<ART_WAIT)return true;q.splice(i,1);const d=standIn(w,e);if(d){const x=w.spawn?.(d,e.x,e.y);if(x)x.cool=Math.max(x.cool||0,1.2);}return 'gone';}
export function admitEnemy(w,e){if(artPending(e)){e.pending=true;e.artHold=true;(w.reinforcements??=[]).push(e);return e;}if(canAdmit(w,e)){e.pending=false;w.enemies.push(e);}else{e.pending=true;(w.reinforcements??=[]).push(e);}return e;}
export function pumpEnemies(w){if(w.paused||w.ended||w.deathPending||w.player?.hp<=0)return;const q=w.reinforcements??=[];for(let i=0;i<q.length;){const e=q[i];if(e.artHold){const h=artHeld(w,e,q,i);if(h==='gone')continue;if(h){i++;continue;}}if(e.summoner&&e.summoner.hp<=0){q.splice(i,1);continue;}if(!canAdmit(w,e)){i++;continue;}q.splice(i,1);e.pending=false;e.cool=Math.max(e.cool||0,1.2);w.enemies.push(e);}}
export function clearThreats(w){w.reinforcements=[];}
