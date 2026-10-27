/* The Boss Meter (SKYBLOCK_DUNGEONS_PROGRESSION.md section 5.4): SkyBlock's RNG Meter made fully visible, a pity bar a
   child can read. One meter per level (shared by its tiers); the child picks a target from that boss's drops; every win
   fills it with the run's grade score x the tier factor (an S+ run twice). When it is full the target is paid on that
   win, and points past the requirement carry over. Points are never lost: a target that drops on its own just moves the
   meter to the next pick with its points kept (guardrail D4). It sits beside gear's hidden per-miss pity, never instead.
   No gambling: nothing is bought, the fill is the whole message, and the payout is certain. */
import {ITEM,ITEMS,bossPieces,familyOf,grantItem} from './gear.js';
import {BOSS_JEWEL,JEWEL} from './jewels.js';
import {levelById} from './levels.js';
export const REQ={piece:1200,jewel:1500,trick:2400};
export const TIER_FILL={normal:1,heroic:1.5,legendary:2};
const CAPSTONE={'thorn-king':1,'demon-slime':1};
/* The meter's possible targets on a level for this hero, missing ones only: set pieces, the capstone trick weapon of the
   hero's family, the boss's jewel. [{id, kind, name}] */
export function targetsFor(s,levelId,hero=s?.hero){const l=levelById(levelId);if(!l?.boss||l.kind!=='level'||l.hidden)return [];const out=[],owned=s?.gear?.owned||{};
 for(const b of [l.boss,l.duo].filter(Boolean)){/* oct24-veil-econ: a Veilmoor boss's own Dreamtide piece only (gear.js bossPieces) */for(const id of bossPieces(b))if(!owned[id])out.push({id,kind:'piece',name:ITEM[id].name});
  if(CAPSTONE[b]){const t=ITEMS.find(i=>i.trick&&i.boss===b&&i.family===familyOf(hero));if(t&&!owned[t.id])out.push({id:t.id,kind:'trick',name:t.name});}
  const j=BOSS_JEWEL[b];if(j&&!s?.jewels?.owned?.[j.id])out.push({id:j.id,kind:'jewel',name:j.name});}
 return out;}
const kindOf=id=>JEWEL[id]?'jewel':ITEM[id]?.trick?'trick':ITEM[id]?'piece':null;
const owns=(s,id)=>kindOf(id)==='jewel'?!!s?.jewels?.owned?.[id]:!!s?.gear?.owned?.[id];
/* {target, pts, need, kind, name, full, frac} for a level; target null when nothing is left to chase there. */
export function meterOf(s,levelId,hero=s?.hero){const m=s?.delve?.meters?.[levelId]||{},list=targetsFor(s,levelId,hero);
 const t=list.find(x=>x.id===m.target)||list[0]||null,pts=Math.max(0,m.pts|0),need=t?REQ[t.kind]:0;
 return {target:t?.id||null,kind:t?.kind||null,name:t?.name||'',pts,need,full:!!t&&pts>=need,frac:need?Math.min(1,pts/need):0,targets:list};}
const rec=(s,id)=>((s.delve??={}).meters??={})[id]??={target:null,pts:0};
/* Pick a target; the points stay. */
export function setTarget(s,levelId,id,hero=s?.hero){if(!targetsFor(s,levelId,hero).some(t=>t.id===id))return false;rec(s,levelId).target=id;return true;}
/* The points a win adds. */
export const fillFor=(total,tier,double=false)=>Math.max(0,Math.round((+total||0)*(TIER_FILL[tier]||1)*(double?2:1)));
/* A win: fill, then pay the target if the meter is full. Returns {added, paid:{id,kind,name}|null, meter}. Losses never
   call this (and never take points away). */
export function tickMeter(s,levelId,{total,tier='normal',double=false},hero=s?.hero){const m=meterOf(s,levelId,hero);const r=rec(s,levelId);
 if(!m.target){r.pts=m.pts;return {added:0,paid:null,meter:m};}
 r.target=m.target;const added=fillFor(total,tier,double);r.pts=m.pts+added;let paid=null;
 if(r.pts>=m.need){const id=m.target,k=m.kind;
  if(k==='jewel'){const J=(s.jewels??={owned:{},worn:{necklace:null,ring:null},pity:{}});J.owned??={};J.owned[id]=1;J.worn??={};if(!J.worn[JEWEL[id].slot])J.worn[JEWEL[id].slot]=id;}
  else grantItem(s,id);
  r.pts-=m.need;paid={id,kind:k,name:m.name};const next=targetsFor(s,levelId,hero)[0];r.target=next?.id||null;}
 return {added,paid,meter:meterOf(s,levelId,hero)};}
/* A target that dropped on its own: move on to the next one, points kept (called after any drop; harmless otherwise). */
export function settleMeter(s,levelId,hero=s?.hero){const r=s?.delve?.meters?.[levelId];if(!r?.target||!owns(s,r.target))return false;r.target=targetsFor(s,levelId,hero)[0]?.id||null;return true;}
