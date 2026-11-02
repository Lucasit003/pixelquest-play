/* improve20-r12c-nov2 #3 (kidsim2 #6: after a Heroic win Theo and Leo replayed Heroic Bandit Road 3 times each; "Return to map" left the
   cursor on the level and the tier picker's first card was "Play again"). Pure: reads the save, writes nothing.
   - afterWinAt: where the map opens after a run. A first Normal clear keeps its road reveal and walk (scenes/worldmap.js); any other win
     (a Heroic or Legendary win, or a replay) opens on the next goal's pad (nextStep, the HUD's goal), else on the level itself.
   - pickerTier: the tier the picker leads with. A tier already won here gives way to the next open tier not yet won. */
import {nextStep} from './next-step.js';
import {levelById,tierOpen,tierDone,levelOpen} from './levels.js';
import {TIER_KEYS} from './tiers.js';
export function afterWinAt(save,r,wasDone){const id=r?.id;if(!r?.won||!levelById(id))return id;if((r.tier||'normal')==='normal'&&!wasDone)return id;
 let n=null;try{n=nextStep(save);}catch{n=null;}const t=(n?.then||n)?.target;return t?.kind==='pad'&&levelById(t.id)&&levelOpen(save,t.id)?t.id:id;}
export function pickerTier(save,id,picked='normal'){if(!tierDone(save,id,picked))return picked;const i=TIER_KEYS.indexOf(picked);return TIER_KEYS.slice(i+1).find(k=>tierOpen(save,id,k)&&!tierDone(save,id,k))||picked;}
