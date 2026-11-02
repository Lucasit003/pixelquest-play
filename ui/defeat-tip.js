/* improve20-r10a-nov2 (round 10 items 6 and 15; kid sims, docs/playtest/kidsim-nov2/REPORT.md findings 5, 7 and the polish list): the defeat card's
   big line read "Rest. Regroup. Return." and every kid skipped it. It is now ONE real lead, picked from what happened in the run:
   - after two losses in a row on the same level (save.levels[id].resolve, the defeats since its last win), the next power and the topic
     that wakes it, when learning is what stands between the hero and it (nextPowerLine has lessons to do); Retry stays the primary button;
   - else a tip the run shows was missed: a potion never drunk, abilities never used, or rolling away from big hits.
   Pure: the caller passes the facts. Nothing here changes a gate, a count or a reward. */
export const POWER_AFTER=2;
export function lossCount(save,id){return Math.max(0,save?.levels?.[id]?.resolve|0);}
/* np: academics/starter-lesson.js nextPowerLine(save); run: {drank, abilDamage}; potions: potions the hero could have drunk (the bag plus the free one);
   abilities: how many abilities sit on the bar; phone: touch controls; potionKey: the potion key's label */
export function defeatLead({losses=0,np=null,run={},potions=0,abilities=0,phone=false,potionKey='Q',arena=false,rift=false}={}){
 if(arena)return null;
 if(!rift&&losses>=POWER_AFTER&&np?.a&&(np.lessons|0)>0)return {kind:'power',head:`A new power can help: ${np.a.name}`,ability:np.a.id,subject:np.a.subject,topic:np.topic?.id||null};
 if(!run?.drank&&potions>0)return {kind:'potion',head:phone?'Tip: tap the potion when health is low':`Tip: drink a potion (${potionKey}) when health is low`};
 if(abilities>0&&!(run?.abilDamage>0))return {kind:'ability',head:phone?'Tip: tap your ability buttons, they hit harder':'Tip: use your abilities (1-4), they hit harder'};
 return {kind:'dodge',head:phone?'Tip: tap Dodge to roll away from big hits':'Tip: roll away (Shift) from big hits'};
}
/* "Start over" (back to wave 1) only from the second loss in a row on that level; the first defeat offers Retry and the map only */
export const showStartOver=(retryWave,losses)=>retryWave>0&&losses>=POWER_AFTER;
