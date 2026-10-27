/* Pure expected-damage arithmetic. Rates are events/second, powers are pre-defence damage.
   Crits add 80%; cooldown reduction increases casts/sec, not damage/cast. Proc chances and
   target counts are explicit so neither a periodic splash nor a fourth-hit trick is a free multiplier. */
import {TRICKS,TRICK_CAP,TRICK_ICD} from './gear.js';
export const DPS_SHARE_CAP=.4;
/* the Dreamtide mist wave's modelled targets (equipmentProcs) */
export const MIST_TARGETS=4;
export function expectedDPS({basic=0,basicRate=0,ability=0,abilityRate=0,cdr=0,crit=0,bonus=0,procs=[]}){const critical=1+.8*Math.max(0,Math.min(1,crit)),uptime=1/(1-Math.max(0,Math.min(.95,cdr)));return (basic*basicRate+ability*abilityRate*uptime)*(1+bonus)*critical+procs.reduce((n,p)=>n+p.power*p.rate*(p.chance??1)*(p.targets??1)*(p.critical===false?1:critical),0);}
/* One common ray for ALL offensive equipment gains. evaluate(0) is the unchanged hero
   with starter equipment and no jewellery; evaluate(1) is the uncapped loadout. */
export function boundDPS(evaluate,cap=DPS_SHARE_CAP){const base=evaluate(0),raw=evaluate(1),max=base/(1-cap);let scale=1;if(raw>max){let lo=0,hi=1;for(let i=0;i<48;i++){const m=(lo+hi)/2;if(evaluate(m)<=max)lo=m;else hi=m;}scale=lo;}const effective=evaluate(scale);return {scale,base,raw,effective,rawShare:raw>0?1-base/raw:0,share:effective>0?1-base/effective:0};}
/* Conservative reference envelope, NOT measured encounter DPS. One full-stat hit/sec;
   all direct damage gets the best element/subject bonus and full cooldown uptime. This
   overstates basic-hit growth and assumes no mana, animation or target downtime.
   Splash damage is per target, with one additional splash target per direct target;
   thornsplit explicitly counts BOTH shards. Periodic effects assume continuous contact,
   two live totems, and every possible trigger. Reflection assumes a 33%-HP hit each .8 s
   (Legendary boss cap/invulnerability). These assumptions are exposed for audits.
   Applying cooldown uptime to procs too deliberately overstates their fixed-rate growth. */
export function equipmentProcs(g,{power,hp,crit,scale=1}){const t=TRICKS[g.trick],out=[],add=(name,frac,rate,targets=1,chance=1)=>out.push({name,power:power*frac*scale,rate,targets,chance});if(t){const f=Math.min(TRICK_CAP,t.frac||0);/* oct24-veil-econ: the Sleeper's tricks count as their base */switch(t.base||g.trick){
 case 'thornwave':case 'pierce':case 'fireball':case 'firearc':add(g.trick,f,1/t.every);break;
 case 'thornsplit':add(g.trick,f,1,t.shards);break;
 case 'thornsting':add(g.trick,f,t.ticks);break;
 case 'magmapool':case 'firetrail':add(g.trick,f*.5,Math.ceil(t.life/.5)/TRICK_ICD);break;
 case 'critburst':add(g.trick,f,Math.min(1/TRICK_ICD,crit));break;
 case 'guardburst':add(g.trick,f,1/TRICK_ICD);break;
 case 'idolpulse':add(g.trick,f,2/t.icd);break;
 }}if(g.effects?.magmaheart)add('magmaheart',.3,1/TRICK_ICD);/* Dreamtide: a mist wave per dodge, at most every 3 s, round the hero. oct24-overlevel (exploit hunt D3): measured at 4.3 foes per
   wave in a crowd (tools/sim/oct24-exploit-b.mjs mist), so it is modelled at MIST_TARGETS, not 2, and the 40% bound holds strictly */if(g.effects?.dreamtide)add('dreamtide',.3,1/3,MIST_TARGETS);if(g.effects?.thornwarden)out.push({name:'thorns',power:hp*.33*.15*scale,rate:1/.8,critical:false});return out;}
export function equipmentDPS(x){const g=x.gear||{},power=Math.max(x.atk,x.ranged?x.mag:0),scale=g.offenseScale??1,procs=equipmentProcs(g,{power,hp:x.hp,crit:x.crit,scale}).map(p=>({...p,rate:p.rate/(1-x.cdr)}));return expectedDPS({ability:power,abilityRate:1,cdr:x.cdr,crit:x.crit,bonus:Math.max(0,...Object.values(g.elem||{}))+(g.top||0),procs});}
/* UI consumers can use this in addition to the existing core-stat clipping check. */
export const offenseLimited=x=>(x?.gear?.offenseScale??1)<1-1e-9;
