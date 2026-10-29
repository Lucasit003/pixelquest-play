/* Separate instant healing from healing over time; inventory survives old saves. The level-start freePotion belongs
   only to the current player, is spent first, and is never added to saved inventory or carried back to town. */
export const POTIONS={health:{name:'Healing potion',price:15,heal:100,text:'Restore up to 100 health immediately.'},regen:{name:'Regeneration potion',price:20,rate:10,seconds:12,text:'Restore 10 health each second for 12 seconds.'}};
export const potionKind=s=>s.potionKind==='regen'?'regen':'health';
export const potionCount=(s,p)=>Math.max(0,Number(s[potionKind(s)==='regen'?'regenPotions':'potions'])||0)+(p?.freePotion||0);
/* oct24-balance2 (late playtest: unlimited 15-gold potions with no cooldown were a 3000-health buffer for a min-maxer): a
   short drink delay between potions, and at most POTION_CAP drunk in one level attempt (the free one counts). p.drunk is
   reset when a level starts; town and the menus pass no cap. */
export const POTION_WAIT=3,POTION_CAP=5;
/* owner 29 Oct: the free potion(s) every level attempt starts with, a fresh start and every retry ("Retry boss fight", "Try this
   wave again") alike. World.startLevel SETS p.freePotion to this, never adds, and it never reaches s.potions, so retries cannot farm it. */
export const FREE_POTIONS=1;
export const potionsLeftInLevel=p=>Math.max(0,POTION_CAP-(p?.drunk|0));
export function usePotion(s,p,{cap=0}={}){const free=p.freePotion>0,kind=free?'health':potionKind(s),a=POTIONS[kind],key=kind==='regen'?'regenPotions':'potions';
 if(p.hp<=0)return {ok:false,message:'You cannot drink a potion after falling.'};
 if(cap&&(p.drunk|0)>=cap)return {ok:false,capped:true,message:'No more potions this level.'};
 if(!potionCount(s,p))return {ok:false,message:`No ${a.name.toLowerCase()}s. Visit the Apothecary.`};
 if(p.hp>=p.maxHp)return {ok:false,message:'Your health is full.'};
 if(p.potionWait>0)return {ok:false,wait:true,message:'Wait a moment before the next potion.'};
 if(kind==='regen'&&p.potionRegen>0)return {ok:false,message:'Your regeneration potion is still working.'};
 if(free)p.freePotion--;else s[key]--;p.drunk=(p.drunk|0)+1;p.potionWait=POTION_WAIT;if(kind==='regen'){p.potionRegen=a.seconds;return {ok:true,message:'Regenerating'};}
 const healed=Math.min(a.heal,p.maxHp-p.hp);p.hp+=healed;return {ok:true,message:`+${Math.ceil(healed)}`};}
/* the drink delay counts real time (World.update, before hitstop and slow motion), so the slot's 3 s means 3 s */
export const tickPotionWait=(p,dt)=>{if(p.potionWait>0)p.potionWait=Math.max(0,p.potionWait-Math.max(0,dt));};
export function tickPotion(p,dt){if(!(p.potionRegen>0)||p.hp<=0)return;const step=Math.min(Math.max(0,dt),p.potionRegen);p.hp=Math.min(p.maxHp,p.hp+POTIONS.regen.rate*step);p.potionRegen=Math.max(0,p.potionRegen-step);}
/* ownerbal-oct29 (owner 29 Oct 2026, docs/reference/SPEC_DECISIONS.md "Potion bag"): the potions a hero carries are limited. Both
   kinds share one bag of BAG.cap; the level-start free potion is never in the bag. A potion found with the bag full (a first clear,
   a secret spot) is sold on the spot for BAG.overflow gold, and the loot line says so; the Apothecary will not sell past the cap.
   A save that already carried more is bought back once at the full shop price (bagMigrate, from core/save.js normalize), with a
   note the town shows once (s.bagNote). BAG is an object so tools/balance-sim.mjs --bag-cap can try other sizes. */
export const BAG={cap:6,overflow:8};
export const bagCount=s=>Math.max(0,Number(s?.potions)||0)+Math.max(0,Number(s?.regenPotions)||0);
export const bagRoom=s=>Math.max(0,BAG.cap-bagCount(s));
export const bagFull=s=>bagRoom(s)<=0;
/* Adds up to n potions of a kind; whatever does not fit becomes gold. Returns {added,sold,gold}. */
export function addPotions(s,n=1,kind='health'){n=Math.max(0,n|0);const key=kind==='regen'?'regenPotions':'potions',added=Math.min(n,bagRoom(s)),sold=n-added,gold=sold*BAG.overflow;
 s[key]=(Number(s[key])||0)+added;if(gold)s.gold=(Number(s.gold)||0)+gold;return {added,sold,gold};}
/* Buys one potion at the Apothecary: refused with the bag full or too little gold. */
export function buyPotion(s,kind='health'){const a=POTIONS[kind==='regen'?'regen':'health'];if(bagFull(s))return {ok:false,full:true,message:`Your potion bag is full (${BAG.cap} of ${BAG.cap}).`};
 if((Number(s.gold)||0)<a.price)return {ok:false,message:'Not enough gold.'};s.gold-=a.price;addPotions(s,1,kind);return {ok:true,message:`${a.name} packed (${bagCount(s)} of ${BAG.cap}).`};}
/* The one-time move to the bag: everything over the cap is bought back at the full shop price, the kind not on the potion key first. */
export function bagMigrate(s){let over=bagCount(s)-BAG.cap;if(over<=0)return null;const keep=potionKind(s),order=keep==='regen'?['health','regen']:['regen','health'];let sold=0,gold=0;
 for(const kind of order){const key=kind==='regen'?'regenPotions':'potions',n=Math.min(over,Math.max(0,Number(s[key])||0));if(!n)continue;s[key]-=n;over-=n;sold+=n;gold+=n*POTIONS[kind].price;}
 s.gold=(Number(s.gold)||0)+gold;return {sold,gold};}
export const bagNoteText=n=>n?.sold>0?`Potions now share one bag of ${BAG.cap}. The Apothecary bought back your ${n.sold} extra potion${n.sold>1?'s':''} for ${n.gold} gold.`:'';
