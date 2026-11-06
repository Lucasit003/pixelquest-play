/* improve26-r26e-nov6 #3 (audit17 #11, shots 132, 123 and 108: Wil's chapters 2 and 3 opened and nothing led there; an accepted quest showed only as
   a "Then:" line under "Charge Ground Slam"). The HUD's one compact quest line, under NEXT STEP: a live chain (questLive; today only Wil's) whose
   chapter is open and not started, or started with its next step known ("Wil’s quest: talk to Captain Garrick at the Barracks."). The learning
   goal stays NEXT STEP and stays first: this is only the line under it, never the goal and never the red. '' when the goal itself is that quest.
   questWaitsOn(save, key): a live chain waits on talking to this person now (the town's "!" marker over them, scenes/town.js). Read only. */
import {QUEST_IDS,QUESTS,questLive,questState,currentStep,stepTarget} from './quests.js';
import {COMPANIONS} from './party.js';
import {levelById,levelOpen,levelDone} from './levels.js';
const low=t=>String(t||'').replace(/^./,c=>c.toLowerCase());
/* a step the kid can act on now: talk and visit steps are in town; a clear step needs its level open (or won before) */
const known=(save,st)=>!!st&&(st.kind!=='clear'||!!levelById(st.level)&&(levelOpen(save,st.level)||levelDone(save,st.level)));
export const questWho=id=>COMPANIONS[QUESTS[id]?.companion]?.short||'Wil';
/* the step's own authored words ("Find ember iron in the Cinder Forge."), first letter lowered */
export const questStepWords=(id,st)=>low(String(st?.text||'').replace(/[.!]\s*$/,''));
/* step: the HUD's nextStep (game/next-step.js); its own quest (step.quest) is never repeated under it */
export function questHudLine(save,step=null){if(!save?.started)return null;
 for(const id of QUEST_IDS){if(!questLive(id))continue;const st=questState(save,id);if(st!=='open'&&st!=='active')continue;const cur=currentStep(save,id);if(!known(save,cur))continue;
  if(step?.quest===id&&!step.questThen)return null;return {id:`quest-${id}-${cur.index}`,quest:id,state:st,target:stepTarget(id,cur),text:`${questWho(id)}’s quest: ${questStepWords(id,cur)}.`};}
 return null;}
/* the person a live chain waits on: an open chain's giver (its first step) or a current talk step, its item in hand when it takes one */
export function questWaitsOn(save,key){if(!save||!key)return false;for(const id of QUEST_IDS){if(!questLive(id))continue;const st=questState(save,id);if(st!=='open'&&st!=='active')continue;const cur=currentStep(save,id);
 if(cur?.kind==='talk'&&cur.who===key&&(st==='open'||!cur.take||!!save.quests?.q?.[id]?.items?.includes(cur.take)))return true;}return false;}
