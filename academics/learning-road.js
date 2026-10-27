/* Read-only road to an ability. Gates are mastery points, not topic counts. The
   lesson planner simulates the remaining route with the real mastery rules. */
import {ABILITIES} from '../game/abilities.js';
import {abilityMastery,unlocked,xpLevel} from '../game/math.js';
import {TOPICS,mastered} from './lessons.js';
import {lessonsToUnlock} from './study-unlock.js';
import {asleep} from './awakening.js';
export const scholarBadges=save=>Object.values(save.lessons||{}).filter(l=>l?.pts>0).length;
export function learningRoad(save,subject){
 const own=[...(ABILITIES[save.hero]||[])].sort((a,b)=>a.gate-b.gate),sleeping=own.find(a=>asleep(save,a)),locked=own.filter(a=>!unlocked(save,a));
 const waiting=locked.find(a=>abilityMastery(save,a.subject)+1e-8>=a.gate);
 const ability=sleeping||waiting||locked.find(a=>!subject||a.subject===subject)||locked[0];
 if(!ability)return null;
 const route=lessonsToUnlock(save,ability),done=TOPICS.filter(t=>t.subject===ability.subject&&mastered(save,t)).length,total=done+route.lessons;
 return {ability,done,total,remaining:route.lessons,reachable:route.reachable,topics:route.topics,sleeping:!!sleeping,knowledge:route.reachable&&route.lessons===0,level:(save.level||1)>=xpLevel(ability),levelNeed:xpLevel(ability),percent:total?Math.round(done/total*100):route.reachable?100:0};
}
