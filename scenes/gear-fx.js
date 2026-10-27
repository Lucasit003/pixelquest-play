/* Gear in a fight (game/gear.js): weapon tricks and 3-piece set effects. Everything here is automatic -- no button, no
   loadout slot -- and never an ability, so it can never stand in for one learned in the Library.
   Guardrail G6: a trick or set effect deals at most 40% of a basic hit (TRICK_CAP), its internal cooldowns are at least
   1.5 s (TRICK_ICD) where it can repeat quickly, and nothing here stuns; slows skip bosses.
   The World calls these hooks; each reads this.base.gear (stats() puts gearBonus there). Visuals reuse the World's own
   effects (ring, burst, nova, slash): no new art is drawn in code. */
import {TRICKS,TRICK_CAP,TRICK_ICD,bossMat,rollGear,ITEM,MATS,SETS,SET_PIECES,rarityOf} from '../game/gear.js';
import {sfx} from '../core/audio.js';
import {topSubject} from '../game/math.js';
const d2=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const G=w=>w.base?.gear||{effects:{},elem:{}};
/* oct24-veil-econ: a trick with a base (the Sleeper's weapons) runs its base's hook with its own label, element and colour */
const trick=w=>{const k=G(w).trick,T=TRICKS[k];return k&&T?{...T,key:T.base||k,id:k}:null;};
const fx=w=>w.player.gearCd??={};
/* the hit a trick or set effect makes: light, no knockback to speak of, never a status that stops a boss */
const hitOf=(name,element='nature')=>({name,trick:true,tick:true,kind:'melee',element,kb:20,damage:0,statusTime:0});
export const basicPower=w=>w.base.basic??Math.max(w.base.atk,w.base.ranged?w.base.mag:0);
/* share of a power, capped at TRICK_CAP of a basic hit (G6) */
const share=(w,power,frac)=>power*Math.min(frac,TRICK_CAP)*(G(w).offenseScale??1);
const ready=(w,key,cd)=>{const c=fx(w);if((c[key]||0)>w.time)return false;c[key]=w.time+Math.max(TRICK_ICD,cd||TRICK_ICD);return true;};
const splash=(w,x,y,radius,power,name,element,skip)=>{w.effect('nova',x,y,{element,radius,life:.45,max:.45});for(const e of w.enemies.filter(e=>e.hp>0&&e!==skip&&d2(e,{x,y})<radius))w.hit(e,hitOf(name,element),power);};
/* zones (magma pools, fire trails, mud puddles, healing sprouts) live in w.gearZones and tick in gearTick */
const zone=(w,z)=>{(w.gearZones??=[]).push({pulse:0,...z});if(w.gearZones.length>8)w.gearZones.shift();};
/* ---- damage multipliers on abilities (element sets, Scholar's Regalia) ---- */
export function gearMul(w,a){if(!a||a.basic||a.trick)return 1;const g=G(w);let m=1;
 if(a.element&&g.elem?.[a.element])m+=g.elem[a.element];
 if(g.top&&a.subject&&a.subject===(w.topSubj??=topSubject(w.save)))m+=g.top;
 return m;}
/* ---- after a hit lands on an enemy ---- */
export function gearHit(w,e,a,n,crit){if(!a||a.trick||a.tick&&!a.basic)return;const p=w.player,g=G(w),t=trick(w),c=fx(w);
 if(a.basic&&t){const power=basicPower(w)*(a.heavy?2:1);c.hits=(c.hits||0)+1;
  switch(t.key){
   case 'thornwave':if(c.hits%t.every===0){const x=p.x+p.facing*30;w.effect('slash',x,p.y,{radius:40,angle:p.facing===1?0:Math.PI,color:'#7fd36b',big:true,life:.3,max:.3});for(const o of w.enemies.filter(o=>o.hp>0&&(o.x-p.x)*p.facing>0&&Math.abs(o.x-p.x)<90&&Math.abs(o.y-p.y)<24))w.hit(o,hitOf('Thorn wave'),share(w,power,t.frac));}break;
   case 'thornsplit':{const near=w.enemies.filter(o=>o.hp>0&&o!==e&&d2(o,e)<70).sort((x,y)=>d2(x,e)-d2(y,e)).slice(0,t.shards);for(const o of near){w.effect('line',e.x,e.y,{tx:o.x,ty:o.y,color:'#7fd36b',life:.25,max:.25});w.hit(o,hitOf('Thorn shard'),share(w,power,t.frac));}break;}
   case 'thornsting':if(e.exposed>0&&e.hp>0){e.thorns={left:t.ticks,next:w.time+.5,power:share(w,power,t.frac)};}break;
   case 'pierce':if(c.hits%t.every===0){const o=w.enemies.filter(o=>o.hp>0&&o!==e&&Math.abs(o.y-e.y)<20&&(o.x-e.x)*Math.sign(e.x-p.x||1)>0&&d2(o,e)<120).sort((x,y)=>d2(x,e)-d2(y,e))[0];if(o){w.effect('line',e.x,e.y,{tx:o.x,ty:o.y,color:'#c9f29b',life:.25,max:.25});w.hit(o,hitOf('Piercing arrow'),share(w,power,t.frac));}}break;
   case 'rootcrack':if(a.heavy&&ready(w,'rootcrack')){w.effect('ring',e.x,e.y,{radius:t.radius,color:'#a98a5c',ground:true,life:.5,max:.5});for(const o of w.enemies)if(o.hp>0&&!o.boss&&d2(o,e)<t.radius){o.status='slow';o.statusTime=Math.max(o.statusTime||0,t.slow);}}break;
   case 'thornleech':if(p.hp<p.maxHp*.5&&ready(w,'thornleech',t.icd)){const h=Math.max(1,Math.round(p.maxHp*t.heal));p.hp=Math.min(p.maxHp,p.hp+h);w.text(`+${h}`,p.x,p.y-30,'#b6e6aa');}break;
   case 'fireball':if(c.hits%t.every===0)splash(w,e.x,e.y,t.radius,share(w,power,t.frac),t.label||'Fireball',t.element,e);break;
   case 'critburst':if(crit&&ready(w,'critburst'))splash(w,e.x,e.y,t.radius,share(w,power,t.frac),t.label||'Burst',t.element,e);break;
   case 'firearc':if(c.hits%t.every===0){w.effect('slash',p.x,p.y,{radius:t.radius,angle:p.facing===1?0:Math.PI,color:t.color||'#ff9b58',big:true,life:.3,max:.3});for(const o of w.enemies.filter(o=>o.hp>0&&o!==e&&d2(o,p)<t.radius+12))w.hit(o,hitOf(t.label||'Fire arc',t.element),share(w,power,t.frac));}break;}}
 /* Magma Heart: an ability that hits erupts a small splash */
 if(!a.basic&&g.effects?.magmaheart&&ready(w,'magmaheart',1.5))splash(w,e.x,e.y,34,share(w,basicPower(w),.3),'Magma splash','fire',e);}
/* ---- a hit on the hero: blocked? how much? and what follows ---- */
export function gearBlock(w,from){const p=w.player,g=G(w),c=fx(w);
 if(g.effects?.bone&&c.boneWard){c.boneWard=false;w.text('BONE WARD',p.x,p.y-34,'#e8e2c8');w.effect('ring',p.x,p.y,{radius:18,color:'#e8e2c8',ground:true,life:.35,max:.35});p.inv=Math.max(p.inv,.5);return true;}
 if(g.effects?.forgeplate){c.taken=(c.taken||0)+1;if(c.taken%5===0){w.text('BLOCKED!',p.x,p.y-34,'#ffb35c');w.effect('ring',p.x,p.y,{radius:20,color:'#ffb35c',ground:true,life:.35,max:.35});p.inv=Math.max(p.inv,.5);return true;}}
 return false;}
export const gearTaken=(w,from)=>G(w).effects?.scorchscale&&from?.fireGround?.5:1;
export function gearHurt(w,n,from){const p=w.player,g=G(w);if(!(n>0))return;
 if(g.effects?.bog&&ready(w,'bog',6))zone(w,{kind:'mud',x:p.x,y:p.y,radius:34,life:3,color:'#7a8f4a'});
 const by=from?.by;if(g.effects?.thornwarden&&by&&by.hp>0&&d2(by,p)<60){const th=Math.max(1,Math.round(n*.15))*(g.offenseScale??1);by.hp-=th;w.text(Math.round(th),by.x,by.y-24,'#7fd36b');if(by.hp<=0)w.kill(by);}}
/* ---- a kill: gear drops (materials always from a boss), and the bone ward ---- */
export function gearKill(w,e){const g=G(w);if(g.effects?.bone&&ready(w,'bone',10))fx(w).boneWard=true;
 if(w.arena)return null;const got=rollGear(w.save,e,w.tierKey||'normal',Math.random);const names=[];if(got.guaranteed&&w.run)(w.run.guaranteed??=[]).push(got.guaranteed);
 /* the drop moment: a beam of sparks and a ring in the item's rarity colour, its name over the boss, the pickup chime,
    and a toast that says how far the set has come ("Bog King's set: 2 of 3") */
 got.items.forEach((id,i)=>{const it=ITEM[id],col=rarityOf(it.rarity).color,x=e.x+(i?18:0);names.push(it.name);if(w.run)(w.run.gear??=[]).push(id);
  w.effect('line',x,e.y+24,{tx:x,ty:e.y-70,element:'holy',life:.9,max:.9});w.effect('ring',x,e.y,{radius:30,color:col,ground:true,life:.7,max:.7});
  w.text(it.name,x,e.y-58-i*14,col,true);sfx('pickup');
  const own=it.set?SET_PIECES[it.set].filter(k=>w.save.gear.owned[k]).length:0;
  w.events.toast?.(`Found: ${it.name} (${rarityOf(it.rarity).name})!${it.set?` ${SETS[it.set].name} set: ${own} of 3.`:''} Wear it from your Inventory.`);});
 /* a boss's materials rise over it, so the steady road to crafting is visible too */
 if(e?.boss)Object.entries(got.mats).forEach(([m,k],i)=>w.text(`+${k} ${MATS[m].name}`,e.x,e.y-34+i*12,'#ffe39a'));
 if(w.run)for(const [m,k] of Object.entries(got.mats))w.run.mats=(w.run.mats||{}),w.run.mats[m]=(w.run.mats[m]||0)+k;
 if(got.items.length||Object.keys(got.mats).length)w.events.persist?.();return got;}
/* ---- other moments ---- */
export function gearDodge(w){const t=trick(w),p=w.player;if(t?.key==='firetrail'&&ready(w,'firetrail'))zone(w,{kind:t.zone||'fire',x:p.x,y:p.y,radius:t.radius,life:t.life,power:share(w,basicPower(w),t.frac),element:t.element});
 /* oct24-veil-econ: Dreamtide (3 pieces): a dodge sends a mist wave round the hero, every 3 s */
 if(G(w).effects?.dreamtide&&ready(w,'dreamtide',3))splash(w,p.x,p.y,48,share(w,basicPower(w),.3),'Mist wave','arcane');}
/* Momentum spent (warrior) or Divine Guard spent (paladin) */
export function gearSpend(w){const t=trick(w),p=w.player;if(!t)return;
 if(t.key==='magmapool'&&ready(w,'magmapool'))zone(w,{kind:t.zone||'fire',x:p.x+p.facing*20,y:p.y,radius:t.radius,life:t.life,power:share(w,basicPower(w),t.frac),element:t.element});
 if(t.key==='guardburst'&&ready(w,'guardburst'))splash(w,p.x,p.y,t.radius,share(w,basicPower(w),t.frac),t.label||'Guard burst',t.element);}
export function gearTotemEnd(w,tot){const t=trick(w);if(t?.key==='sprout'&&!tot.trap)zone(w,{kind:'sprout',x:tot.x,y:tot.y,radius:40,life:t.life,heal:t.heal});}
/* Wayfarer's: potions heal a quarter more (the instant potion here; the regeneration potion in gearTick). */
export function gearPotion(w,before){const p=w.player;if(!G(w).effects?.wayfarer)return;const healed=p.hp-before;if(healed>0){const x=Math.min(p.maxHp-p.hp,Math.round(healed*.25));if(x>0){p.hp+=x;w.text(`+${x}`,p.x,p.y-40,'#cfe7a8');}}}
export function gearTick(w,dt){const p=w.player,g=G(w),t=trick(w);if(!p)return;
 if(g.effects?.wayfarer&&p.potionRegen>0&&p.hp>0)p.hp=Math.min(p.maxHp,p.hp+10*.25*dt);
 /* stinging thorns: three small ticks */
 for(const e of w.enemies){const th=e.thorns;if(!th||e.hp<=0)continue;if(w.time>=th.next){th.next=w.time+.6;th.left--;w.hit(e,hitOf('Stinging thorns'),th.power);if(th.left<=0)e.thorns=null;}}
 /* Magma Idol: totems pulse fire */
 if(t?.key==='idolpulse')for(const tot of w.totems)if(!tot.trap&&(tot.idol=(tot.idol??t.icd)-dt)<=0){tot.idol=t.icd;splash(w,tot.x,tot.y,38,share(w,basicPower(w),t.frac),t.label||'Idol pulse',t.element);}
 if(!w.gearZones?.length)return;
 for(const z of w.gearZones){z.life-=dt;z.pulse-=dt;if(z.pulse>0)continue;z.pulse=.5;
  if(z.kind==='mud'){w.effect('ring',z.x,z.y,{radius:z.radius,color:z.color,ground:true,life:.5,max:.5});for(const e of w.enemies)if(e.hp>0&&!e.boss&&d2(e,z)<z.radius){e.status='slow';e.statusTime=Math.max(e.statusTime||0,1);}}
  else if(z.kind==='fire'){w.effect('ring',z.x,z.y,{radius:z.radius,color:'#ff9b58',ground:true,life:.5,max:.5});for(const e of w.enemies.filter(e=>e.hp>0&&d2(e,z)<z.radius))w.hit(e,hitOf('Magma','fire'),z.power*.5);}
  else if(z.kind==='mist'){w.effect('ring',z.x,z.y,{radius:z.radius,color:'#b58cff',ground:true,life:.5,max:.5});for(const e of w.enemies.filter(e=>e.hp>0&&d2(e,z)<z.radius))w.hit(e,hitOf('Mist','arcane'),z.power*.5);}
  else if(z.kind==='sprout'){w.effect('ring',z.x,z.y,{radius:z.radius,color:'#9be28f',ground:true,life:.5,max:.5});if(d2(p,z)<z.radius&&p.hp>0){const h=Math.max(1,Math.round(p.maxHp*z.heal*.5));p.hp=Math.min(p.maxHp,p.hp+h);}}}
 w.gearZones=w.gearZones.filter(z=>z.life>0);}
/* the worn weapon's basic-bolt look ({element}), or {} (game/gear.js WEAPON_SHOT) */
export const gearShotLook=w=>{const id=w.save?.gear?.worn?.[w.save?.hero]?.weapon,el=ITEM[id]?.shot;return el?{element:el}:{};};
export const matName=k=>MATS[k]?.name||k;
export {bossMat};
