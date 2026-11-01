/* The Rift of the Week, combat side (game/rift.js owns the rules). World.startLevel calls riftStart with opts.rift; each hook below changes
   only what its modifier says, and is a no-op outside a Rift run. Hazard storm reuses the level's own Heroic hazard row (game/tier-encounters.js)
   through scenes/tier-fx.js; the damage goes through World.hurt on the Normal tier's scaling, so it lands at Normal damage. */
import {RIFT_MODS,riftRun,riftWaves,riftBoss,hasMod,riftFinish} from '../game/rift.js';
import {ENCOUNTERS,stepEncounter} from '../game/tier-encounters.js';
/* the run's storm: the Heroic row's hazard and its land flags, nothing else (no health, damage or roster steps) */
export function riftStorm(id){const r=ENCOUNTERS[id]?.heroic;if(!r)return null;const e=stepEncounter(r,'heroic');return {readable:!!e.readable,elderwood:!!e.elderwood,emberkeep:!!e.emberkeep,veilmoor:!!e.veilmoor,hazard:{...e.hazard},rift:true};}
export function riftStart(w,opts,id,k){w.rift=riftRun(opts,id,k);w.riftStorm=null;if(!w.rift)return;if(hasMod(w,'elite'))w.level=riftWaves(w.level);if(hasMod(w,'storm'))w.riftStorm=riftStorm(id);}
export const riftEnemy=(w,e)=>{if(hasMod(w,'swift')&&e)e.speed=(e.speed||40)*RIFT_MODS.swift.speed;return e;};
export const riftBossFx=(w,e)=>hasMod(w,'echo')&&e?riftBoss(e):e;
export const riftTaken=w=>hasMod(w,'glass')?RIFT_MODS.glass.taken:1;
/* the hero's own hits only: a companion's (a.ally) are unchanged */
export const riftDealt=(w,a)=>hasMod(w,'glass')&&!a?.ally?RIFT_MODS.glass.dealt:1;
export const riftPotions=w=>hasMod(w,'thrifty')?RIFT_MODS.thrifty.potions:0;
/* Thrifty: what the potion just healed (instantly, or the regeneration still to come) is halved */
export function riftPotion(w,hp0,r){if(!hasMod(w,'thrifty')||!r?.ok)return r;const p=w.player,k=RIFT_MODS.thrifty.heal;p.hp=hp0+(p.hp-hp0)*k;if(p.potionRegen>0)p.potionRegen*=k;r.message=`${r.message} · Thrifty: half healing`;return r;}
export function riftEnd(w,won,runR,time){if(!w.rift||!w.level)return null;return riftFinish(w.save,{won,level:w.level.id,grade:runR?.grade||null,time});}
