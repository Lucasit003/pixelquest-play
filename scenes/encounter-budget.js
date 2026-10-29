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
export function canAdmit(w,e){if(!active(w))return true;const es=alive(w),c=ENCOUNTER_CAPS[w.tierKey];return es.reduce((n,o)=>n+reserved(o),0)+reserved(e)<=c.live&&(!e.mod||es.filter(o=>o.mod).length<c.affixed)&&(!helper(e)||es.filter(helper).length<c.major&&threatCount(w)<c.major);}
export function admitEnemy(w,e){if(canAdmit(w,e)){e.pending=false;w.enemies.push(e);}else{e.pending=true;(w.reinforcements??=[]).push(e);}return e;}
export function pumpEnemies(w){if(!active(w)||w.paused||w.ended||w.deathPending||w.player.hp<=0)return;const q=w.reinforcements??=[];for(let i=0;i<q.length;){const e=q[i];if(e.summoner&&e.summoner.hp<=0){q.splice(i,1);continue;}if(!canAdmit(w,e)){i++;continue;}q.splice(i,1);e.pending=false;e.cool=Math.max(e.cool||0,1.2);w.enemies.push(e);}}
export function clearThreats(w){w.reinforcements=[];}
