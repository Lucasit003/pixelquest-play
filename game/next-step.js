// The next-step marker (docs/review/v2/gamedesign/DIRECTION_REVIEW.md: "Never lost"): at every moment the game
// knows the one thing to do next, names it in one short line, and says where it is, so the hub can light the
// destination in the world and the HUD can show the line. Pure: reads the save, writes nothing.
//   nextStep(save) -> {id, text, target:{kind:'gate'|'library'|'guild'|'pad', id?}}
// kind 'gate' is Oakhaven's south gate (the prologue waits beyond it); 'pad' is a world-map pad (reach it through
// the south gate, then the world map).
//
// Study and play alternate (playtest S3: 11 minutes of study before Slime Bog was too long). Until the hero's first
// earned power, the order suggested is: prologue -> first lesson -> Goblin Camp -> practise 10 questions -> Slime Bog ->
// finish practice and take the test. Only the SUGGESTED order changes: every gate in academics/lessons.js and
// game/math.js stays exactly as it is. The study steps name the subject of the hero's own next power, so a hero who
// switched class is pointed at their own lesson (S3-11). Step ids are read by game/npcs.js -- keep them stable.
import {LEVELS,CHAPTERS,levelById,levelDone,levelOpen,levelFogged,tierOpen,tierDone,starsOf,starsShort,gameFinale,ARENA_GOAL} from './levels.js';
import {ABILITIES} from './abilities.js';
import {SUBJECTS} from './data.js';
import {unlocked,abilityMastery,xpLevel} from './math.js';
import {TOPICS,testReady,mastered,topicOpen} from '../academics/lessons.js';
import {topicInSchoolMode} from '../academics/study-unlock.js';
import {TIER_KEYS,TIERS} from './tiers.js';
import {nextTask} from './skills.js';
import {potionCount,potionKind,POTIONS} from './potions.js';
import {nextQuestStep,questLive,QUESTS} from './quests.js';
import {COMPANIONS,hireable} from './party.js';
/* How much practice to suggest before the next adventure. The test still needs PRACTICE_NEEDED (lessons.js). */
export const PRACTICE_FIRST=10;
const lessonDone=save=>Object.values(save?.lessons||{}).some(l=>l?.done);
/* An ability the hero earned (gate above zero): the slice's payoff. */
const earned=save=>(ABILITIES[save?.hero]||[]).some(a=>a.gate>0&&unlocked(save,a));
/* The hero's next locked power, lowest gate first. */
export const nextPower=save=>(ABILITIES[save?.hero]||[]).filter(a=>a.gate>0&&!unlocked(save,a)).sort((a,b)=>a.gate-b.gate)[0]||null;
/* The topic of that subject the child is working through: lesson done, not yet mastered, most recent first. */
const inProgress=(save,subject)=>TOPICS.filter(t=>t.subject===subject&&save?.lessons?.[t.id]?.done&&!mastered(save,t))
 .sort((a,b)=>(save.lessons[b.id].at||0)-(save.lessons[a.id].at||0))[0]||null;
const nextLevel=save=>LEVELS.find(l=>l.kind==='level'&&!l.hidden&&!l.optional&&!levelFogged(l)&&levelOpen(save,l.id)&&!levelDone(save,l.id))||null;
const pad=l=>({id:'level-'+l.id,text:l.id==='e2'?'Take the south gate to Slime Bog.':`Next adventure: ${l.name}.`,target:{kind:'pad',id:l.id}});
/* Prefer the main road, then reachable stars, higher main-road tiers and side paths. */
const playable=()=>LEVELS.filter(l=>l.kind==='level'&&!l.hidden&&!levelFogged(l));
const tierPad=(l,k)=>({...pad(l),id:`tier-${k}-${l.id}`,text:`Next adventure: ${l.name}. Select ${TIERS[k].label} on its map card.`,target:{kind:'pad',id:l.id,tier:k}});
/* oct24-endgame (playtest ch3 C5): once the last level is won the goal fell through to the first open tier in level order, so the
   game's ending pointed back to "Goblin Camp, Heroic". After the ending the newest chapter comes first: its Heroic levels, then its
   arena, then its Legendary levels, then the chapter before it the same way; 3-star tries after that, newest first too. */
export const gameCleared=save=>LEVELS.some(l=>gameFinale(l.id)&&levelDone(save,l.id));
const arenaPad=l=>({id:'arena-'+l.id,text:`Next adventure: the ${l.name} arena. Survive ${ARENA_GOAL} waves.`,target:{kind:'pad',id:l.id}});
function postGame(save){const ch=[...CHAPTERS].reverse().map(c=>c.id),of=c=>playable().filter(l=>l.chapter===c).sort((a,b)=>!!a.optional-!!b.optional);
 for(const c of ch){for(const k of ['heroic','legendary']){for(const l of of(c))if(tierOpen(save,l.id,k)&&!tierDone(save,l.id,k))return tierPad(l,k);
  if(k==='heroic')for(const l of LEVELS.filter(l=>l.kind==='arena'&&l.chapter===c))if(levelOpen(save,l.id)&&!levelDone(save,l.id))return arenaPad(l);}}
 for(const c of ch)for(const k of TIER_KEYS)for(const l of of(c))if(tierOpen(save,l.id,k)&&starsOf(save,l.id,k)<3)return {...tierPad(l,k),text:`Try for 3 stars in ${l.name} on ${TIERS[k].label}: beat its par time on the map card.`};
 return null;}
/* Villager quests (docs/design/COMPANIONS_AND_OAKHAVEN.md §5.5), live chains only (today Wil's): a hand-in waiting in town comes
   before the next main-road pad; an active quest's clear step and then a newly opened quest come once the main road is done or
   held by a star gate, before stars and tiers. The learning steps above never see a quest. */
const questStep=q=>({id:q.id,text:q.text,target:q.target,quest:q.quest});
/* guide-oct26 (oct26-midgame proposal 7): a companion whose quest is done waits at the Barracks, but nothing said so after the
   one toast. Until the first companion is hired (none travels with you and none has run with you yet) the goal names the
   Barracks and its roster board, ranked like a hand-in. It goes once one is hired. Reads the save only. */
export function hireStep(save){const p=save?.party;if(!p?.crew||p.with)return null;
 const id=Object.keys(p.crew).find(k=>COMPANIONS[k]&&hireable(k));if(!id||Object.values(p.crew).some(m=>(m?.runs|0)>0))return null;
 const quest=Object.keys(QUESTS).find(q=>QUESTS[q].companion===id)||null,c=COMPANIONS[id];
 return {id:`quest-${quest||id}-hire`,text:`New companion: go to the Barracks and hire ${c.short} at the roster board.`,target:{kind:'building',id:'barracks',point:'roster'},quest};}
function adventure(save){
 const h=hireStep(save);if(h)return h;
 const q=nextQuestStep(save,questLive);if(q?.rank==='handin')return questStep(q);
 const road=nextLevel(save);if(road)return pad(road);
 if(q)return questStep(q);
 if(gameCleared(save))return postGame(save);
 const gate=playable().find(l=>!l.optional&&starsShort(save,l.id));
 if(gate){const g=starsShort(save,gate.id);for(const k of TIER_KEYS)for(const l of playable())if(tierOpen(save,l.id,k)&&starsOf(save,l.id,k)<3){const n=tierPad(l,k);return {...n,id:'stars-'+gate.id,text:`${gate.name} needs ${g.need} stars (you have ${g.have}). ${tierDone(save,l.id,k)?'Beat the 3-star time in':'Clear'} ${l.name} on ${TIERS[k].label} for more.`};}}
 for(const optional of [false,true])for(const k of TIER_KEYS)for(const l of playable().filter(l=>!!l.optional===optional))if(tierOpen(save,l.id,k)&&!tierDone(save,l.id,k))return tierPad(l,k);
 for(const k of TIER_KEYS)for(const l of playable())if(tierOpen(save,l.id,k)&&starsOf(save,l.id,k)<3)return {...tierPad(l,k),text:`Try for 3 stars in ${l.name} on ${TIERS[k].label}: beat its par time on the map card.`};
 return null;
}
export function nextStep(save,{room}={}){
 /* newplayer-oct27: after a lost first fight the HUD no longer reads as if the child had never been to the gate; it offers the Library too, as the defeat card does */
 if(!levelDone(save,'prologue'))return {id:'prologue',text:save?.levels?.prologue?.plays>0?'Goblins still hold the south gate. Try again, or awaken an ability at the Library first.':'Goblins at the south gate! Go and see.',target:{kind:'gate'}};
 /* 25 Oct (first-hour playtest): after a defeat with an empty bag the goal points at the Alchemist first, when the hero can afford a
    potion. It clears as soon as one is bought, or once that level is won (levels[id].resolve counts defeats since the last win).
    oct26-midgame: it names the Apothecary, the shop's name on its door, the map and fast travel. */
 const lost=Object.values(save?.levels||{}).some(r=>(r?.resolve|0)>0),price=POTIONS[potionKind(save||{})].price;
 if(lost&&!potionCount(save||{})&&(save?.gold|0)>=price){const n=nextStep({...save,levels:Object.fromEntries(Object.entries(save.levels).map(([k,v])=>[k,{...v,resolve:0}]))},{room});return {id:'potions',text:`Out of potions: buy some at the Apothecary (${price} gold each).`,target:{kind:'alchemist'},then:n};}
 const a=nextPower(save),subject=SUBJECTS[a?.subject]?.name;
 if(a&&abilityMastery(save,a.subject)+1e-8>=a.gate){const n=adventure(save)||pad(levelById('e1'));return {...n,id:'level-up',text:`Fight foes and finish adventures to earn XP toward hero level ${xpLevel(a)} for ${a.name}. ${n.text}`};}
 if(levelDone(save,'e3')||!TOPICS.some(t=>!mastered(save,t)&&topicInSchoolMode(save,t)&&topicOpen(save,t)))return adventure(save)||endGoal(save);
 if(!lessonDone(save)&&!earned(save))return {id:'first-lesson',text:room==='library'?(subject?`Start your first ${subject} lesson.`:'Choose a study area to start your first lesson.'):(subject?`Visit the Library for your first ${subject} lesson.`:'Visit the Library for your first lesson.'),target:{kind:'library'}};
 if(!levelDone(save,'e1'))return {id:'goblin-camp',text:'Take the south gate to Goblin Camp.',target:{kind:'pad',id:'e1'}};
 if(!earned(save)&&a){
  const t=inProgress(save,a.subject);
  if(!t)return {id:'start-lesson',text:`Start a ${subject} lesson at the Library.`,target:{kind:'library'}};
  const r=testReady(save,t);
  if(!r.quiz)return {id:'quiz',text:`Take the quiz on “${t.title}” at the Library.`,target:{kind:'library'}};
  if(r.practice<PRACTICE_FIRST)return {id:'practice',text:(n=>`Practice ${n} more question${n===1?'':'s'} at the Library, then try the next level.`)(PRACTICE_FIRST-r.practice)/* first-hour playtest 24 Oct: "(8/25). After 10" read as two goals */,target:{kind:'library'}};
  const e2=levelById('e2');if(e2&&!levelDone(save,'e2')&&levelOpen(save,'e2')&&!levelFogged(e2))return pad(e2);
  return {id:'earn-power',text:'Finish practice and take the test at the Library.',target:{kind:'library'}};}
 const n=adventure(save);if(n)return n;
 return endGoal(save);}
function endGoal(save){
 /* the run layer's Adventurer tasks (game/skills.js): once the road is walked, the next task is the next goal */
 const t=nextTask(save);if(t)return {id:'task-'+t.id,text:`Adventurer task: ${t.text}`,target:t.group==='Learning'?{kind:'library'}:t.pad&&levelOpen(save,t.pad)?{kind:'pad',id:t.pad}:{kind:'guild'}};
 /* oct24-endgame: the last word points at the last level, not back to the first */const last=LEVELS.find(l=>gameFinale(l.id))||levelById('e1');
 return {id:'replay',text:`Every adventure goal is complete! Replay ${last.name} on Legendary with a different loadout whenever you like.`,target:{kind:'pad',id:last.id,tier:'legendary'}};}
export const nextStepLevel=save=>{const n=nextStep(save),t=(n.then||n).target;return t.kind==='pad'?levelById(t.id):null;};
