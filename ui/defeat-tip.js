/* improve20-r10a-nov2 (round 10 items 6 and 15; kid sims, docs/playtest/kidsim-nov2/REPORT.md findings 5, 7 and the polish list): the defeat card's
   big line read "Rest. Regroup. Return." and every kid skipped it. It is now ONE real lead, picked from what happened in the run:
   - after two losses in a row on the same level (save.levels[id].resolve, the defeats since its last win), the next power and the topic
     that wakes it, when learning is what stands between the hero and it (nextPowerLine has lessons to do); Retry stays the primary button;
   - else a tip the run shows was missed: a potion never drunk, abilities never used, or rolling away from big hits.
   Pure: the caller passes the facts. Nothing here changes a gate, a count or a reward. */
export const POWER_AFTER=2,ABIL_LOW=.25;
export function lossCount(save,id){return Math.max(0,save?.levels?.[id]?.resolve|0);}
/* np: academics/starter-lesson.js nextPowerLine(save); run: {drank, abilDamage}; potions: potions the hero could have drunk (the bag plus the free one);
   abilities: how many abilities sit on the bar; phone: touch controls; potionKey: the potion key's label */
/* improve20-r20i-nov4 #6 (kidsim5 #12: Mia, with one power, read "use your abilities (1-4)"): the ability tip names what is on the bar. bar: [{name,key}]
   in slot order. One power: "press 1 for Spirit Bolt" (a phone: "tap the Spirit Bolt button"); more: their own keys ("(1, 2)"); no bar given: the old words */
export function abilityTip({bar=null,phone=false}={}){const b=Array.isArray(bar)?bar.filter(x=>x&&x.name):[];
 if(b.length===1)return phone?`Tip: tap the ${b[0].name} button, it hits harder`:`Tip: press ${b[0].key||'1'} for ${b[0].name}, it hits harder`;
 if(phone)return 'Tip: tap your ability buttons, they hit harder';
 const keys=b.map(x=>x.key).filter(Boolean);return `Tip: use your abilities (${keys.length>1?keys.join(', '):'1-4'}), they hit harder`;}
export function defeatLead({losses=0,np=null,run={},potions=0,abilities=0,phone=false,potionKey='Q',arena=false,rift=false,bar=null}={}){
 if(arena)return null;
 if(!rift&&losses>=POWER_AFTER&&np?.a&&(np.lessons|0)>0)return {kind:'power',head:`A new power can help: ${np.a.name}`,ability:np.a.id,subject:np.a.subject,topic:np.topic?.id||null};
 /* improve20-r14b-nov3 #1 (measured on m1 with the typical-ember saves, docs/playtest/improve20-r14b-nov3): a kid who uses the hotbar clears m1 in
    one try even with no rolls at all, while one who only swings and never rolls loses to the Dungeon Master in all three melee classes, potions or
    not. So when abilities sat on the bar but did under ABIL_LOW of the run's damage, using them is the tip, ahead of the potion */
 if(abilities>0&&run?.damage>0&&(run.abilDamage||0)/run.damage<ABIL_LOW)return {kind:'ability',head:abilityTip({bar,phone})/* improve20-r20i-nov4 #6 */};
 if(!run?.drank&&potions>0)return {kind:'potion',head:phone?'Tip: tap the potion when health is low':`Tip: drink a potion (${potionKey}) when health is low`};
 if(abilities>0&&!(run?.abilDamage>0))return {kind:'ability',head:abilityTip({bar,phone})/* improve20-r20i-nov4 #6 */};
 return {kind:'dodge',head:phone?'Tip: tap Dodge to roll away from big hits':'Tip: roll away (Shift) from big hits'};
}
/* "Start over" (back to wave 1) only from the second loss in a row on that level; the first defeat offers Retry and the map only */
export const showStartOver=(retryWave,losses)=>retryWave>0&&losses>=POWER_AFTER;
/* improve20-r14b-nov3 #2 (audit11 #17, shot 21: a dead gap on the defeat card and nothing about progress): how far the run got, true for every
   level shape. waves: the level's wave arenas; wave: waves cleared (World.wave); boss: the level has a boss arena after them (or is only a boss);
   hp/max: the boss's health left when the hero fell (its whole bar, both bosses of a pair together). -> text or null */
export function defeatProgress({waves=0,wave=0,boss=false,hp=0,max=0}={}){
 if(boss&&wave>=waves&&!(max>0))return 'Reached the boss';
 if(boss&&wave>=waves&&max>0){const pct=Math.max(1,Math.min(100,Math.ceil(hp/max*100)));return pct>=100?'Reached the boss':`Boss at ${pct}% health`;}
 if(waves>0)return `Furthest: wave ${Math.max(1,Math.min(waves,(wave|0)+1))} of ${waves}${boss?', then the boss':''}`;
 return null;}
/* the facts for defeatProgress from a World at its end (r: World.lastResult) */
export function progressFacts(w,r){const n=w?.layout?.arenas?.length|0,bs=(w?.enemies||[]).filter(e=>e.boss&&!e.decoy&&!e.ally),one=r?.boss;const list=bs.length?bs:one?[one]:[];
 return {waves:n,wave:Math.min(n,w?.wave|0),boss:!!(w?.layout?.boss||one),hp:list.reduce((t,e)=>t+Math.max(0,e.hp||0),0),max:list.reduce((t,e)=>t+(e.maxHp||0),0)};}
