/* Read-only road to an ability. Gates are mastery points, not topic counts. The
   lesson planner simulates the remaining route with the real mastery rules. */
import {ABILITIES} from '../game/abilities.js';
import {abilityMastery,unlocked,xpLevel} from '../game/math.js';
import {TOPICS,mastered} from './lessons.js';
import {lessonsToUnlock,topicStage,topicMastery} from './study-unlock.js';
import {SUBJECTS} from '../game/data.js';
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
/* juice-oct27 ("N more to unlock", new-player playtest idea 5): the one concrete step that brings the next ability nearer, for
   the HUD card's pip. Read-only and rule-free: it names what learningRoad() and the topic gate (lessons.js testReady) already
   say, so the pip never promises more than the game checks. A topic already under way speaks first ("Practice 6 more
   questions"); otherwise the count of topics left. No timers, no streaks: the numbers only ever go down by doing work.
   Returns {kind,text,have,need} (have/need fill the pip's bar), or null when every ability is unlocked. */
export function nextUnlockStep(save,road=learningRoad(save)){
 if(!road)return null;const a=road.ability,lvNeed=road.levelNeed,lv=save.level||1,plural=(n,w)=>`${n} more ${w}${n===1?'':'s'}`,also=road.level?'':` + hero level ${lvNeed}`;
 if(road.sleeping)return {kind:'awaken',text:'Finish 1 Library lesson to awaken it',have:0,need:1};
 if(road.knowledge)return {kind:'level',text:`Reach hero level ${lvNeed}`,have:Math.min(lv,lvNeed),need:lvNeed};
 if(!road.reachable)return {kind:'study',text:`Keep studying ${SUBJECTS[a.subject]?.name||a.subject}${also}`,have:road.done,need:Math.max(1,road.total)};
 const t=road.topics.map(id=>TOPICS.find(x=>x.id===id)).find(t=>t&&topicStage(save,t).stage!=='lesson'),g=t&&topicStage(save,t);
 if(g?.stage==='practice')return {kind:'practice',topic:t.id,text:`Practice ${plural(g.needed-g.practice,'question')}${also}`,have:g.practice,need:g.needed};
 const m=t&&topicMastery(save,t),pc=m?Math.round(m.frac*100):0;
 if(g?.stage==='quiz')return {kind:'quiz',topic:t.id,text:`Pass the quiz in ${t.title}${also}`,have:pc,need:100};
 if(g?.stage==='test')return {kind:'test',topic:t.id,text:`Take the mastery test in ${t.title}${also}`,have:pc,need:100};
 return {kind:'topics',text:`${plural(road.remaining,'topic')} to unlock${also}`,have:road.done,need:Math.max(1,road.total)};
}
