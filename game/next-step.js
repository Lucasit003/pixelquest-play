// The next-step marker (docs/review/v2/gamedesign/DIRECTION_REVIEW.md: "Never lost"): at every moment the game
// knows the one thing to do next, names it in one short line, and says where it is, so the hub can light the
// destination in the world and the HUD can show the line. Pure: reads the save, writes nothing.
//   nextStep(save) -> {id, text, target:{kind:'gate'|'library'|'guild'|'pad', id?}}
// kind 'gate' is Oakhaven's south gate (the prologue waits beyond it); 'pad' is a world-map pad (reach it through
// the south gate, then the world map).
//
// Study and play alternate (playtest S3: 11 minutes of study before Slime Bog was too long). Until the hero's first
// earned power, the order suggested is: prologue -> first lesson -> Goblin Camp -> practise 10 questions -> the mastery
// test once the topic is test-ready (a save's first topic is, at 10: follow6-oct29) -> otherwise Slime Bog -> finish
// practice and take the test. Only the SUGGESTED order changes: every gate in academics/lessons.js and
// game/math.js stays exactly as it is. The study steps name the subject of the hero's own next power, so a hero who
// switched class is pointed at their own lesson (S3-11). Step ids are read by game/npcs.js -- keep them stable.
import {LEVELS,CHAPTERS,levelById,levelDone,levelOpen,levelFogged,tierOpen,tierDone,starsOf,starsShort,gameFinale,ARENA_GOAL,tiered} from './levels.js';
import {ABILITIES} from './abilities.js';
import {SUBJECTS} from './data.js';
import {unlocked,abilityMastery,xpLevel} from './math.js';
import {TOPICS,testReady,mastered,topicOpen,PASS,QUIZ_SIZE} from '../academics/lessons.js';
import {topicInSchoolMode} from '../academics/study-unlock.js';
import {TIER_KEYS,TIERS} from './tiers.js';
import {nextTask} from './skills.js';
import {potionCount,potionKind,POTIONS} from './potions.js';
import {nextQuestStep,questLive,QUESTS} from './quests.js';
import {COMPANIONS,hireable} from './party.js';
import {starSource} from './ladder-guide.js';
import {nextShowpiece} from './furniture.js';
import {riftOpen,riftPick} from './rift.js';
import {gearAtCap,affordableUpgrade} from '../ui/gear-guidance.js';
import {ITEM} from './gear.js';
import {adviceLevel} from './tiers.js';
import {learningRoad,nextUnlockStep} from '../academics/learning-road.js';
import {startGrade,STAGE_FLOOR} from '../academics/placement.js';
import {gateShut,libraryOpening,nextPowerLine} from '../academics/starter-lesson.js';
import {starterOf,awakened} from '../academics/awakening.js';
/* How much practice to suggest before the next adventure. The test still needs practiceNeeded (lessons.js: 10 on a save's first topic, 25 after). */
export const PRACTICE_FIRST=10;
const lessonDone=save=>Object.values(save?.lessons||{}).some(l=>l?.done);
/* improve20-f-nov1 #9: the topic whose lesson is done but whose quiz has never been sat (lessons[id].sat, set when a quiz ends with at
   least one answer, even 0 right; or a score above 0; or passed), most recent first; null once any finished lesson's quiz was sat */
export const firstQuizDue=save=>{const ts=TOPICS.filter(t=>save?.lessons?.[t.id]?.done);if(!ts.length||ts.some(t=>save.lessons[t.id].sat===true||(save.lessons[t.id].quiz|0)>0||testReady(save,t).quiz))return null;return ts.sort((a,b)=>(save.lessons[b.id].at||0)-(save.lessons[a.id].at||0))[0];};
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
const tierPad0=(l,k)=>({...pad(l),id:`tier-${k}-${l.id}`,text:`Next adventure: ${l.name}. Select ${TIERS[k].label} on its map card.`,target:{kind:'pad',id:l.id,tier:k}});
/* improve20-x-nov1 #20d: an overlevelled hero's Heroic goal says why (same id and target) */
let goalSave=null;const tierPad=(l,k)=>{const n=tierPad0(l,k);return k==='heroic'&&goalSave&&overlevelled(goalSave,l.id)?{...n,text:`You are strong for ${l.name} now: select Heroic on its map card for a real fight.`}:n;};
/* oct24-endgame (playtest ch3 C5): once the last level is won the goal fell through to the first open tier in level order, so the
   game's ending pointed back to "Goblin Camp, Heroic". After the ending the newest chapter comes first: its Heroic levels, then its
   arena, then its Legendary levels, then the chapter before it the same way; 3-star tries after that, newest first too. */
export const gameCleared=save=>LEVELS.some(l=>gameFinale(l.id)&&levelDone(save,l.id));
const arenaPad=l=>({id:'arena-'+l.id,text:`Next adventure: the ${/arena$/i.test(l.name)?l.name:l.name+' arena'}. Survive ${ARENA_GOAL} waves.`,target:{kind:'pad',id:l.id}});
/* improve20-r8a-nov1 #2 (audit7 d5): after the ending the Champion card's NEXT GOAL was "buy the Purple hall banner (600 gold)" while four
   levels and Wil's quest were still open. Content first, in this order: a side level never cleared -> Wil's quest while it is open -> Heroic
   on the newest chapter's finale ("The Sleeper is back, and stronger") -> an arena not yet survived -> this week's Rift while it is unplayed -> the other Heroic levels, newest
   chapter first -> Legendary, newest chapter first -> 3-star tries -> a Showpiece last. */
const finaleOf=c=>{const ls=playable().filter(l=>l.chapter===c&&!l.optional&&l.boss);return ls.find(l=>gameFinale(l.id))||ls[ls.length-1]||null;};
const riftUnplayed=save=>{if(!riftOpen(save))return null;let p=null;try{p=riftPick(save);}catch{p=null;}if(!p||save.rift?.week===p.week&&save.rift?.best)return null;const l=levelById(save.rift?.week===p.week&&save.rift?.level||p.level);return l?{id:'rift-'+p.week,text:`This week's Rift is open: ${l.name} with two twists. Press Rift on the world map.`,target:{kind:'pad',id:l.id},rift:true}:null;};
function postGame(save,q=null){const ch=[...CHAPTERS].reverse().map(c=>c.id),of=c=>playable().filter(l=>l.chapter===c).sort((a,b)=>!!a.optional-!!b.optional);
 /* a quest already under way keeps its place ahead of everything (as before the ending) */if(q&&q.rank!=='open')return questStep(q);
 for(const c of ch)for(const l of of(c))if(l.optional&&levelOpen(save,l.id)&&!levelDone(save,l.id))return pad(l);
 if(q)return questStep(q);
 {const f=finaleOf(ch[0]);if(f&&tierOpen(save,f.id,'heroic')&&!tierDone(save,f.id,'heroic')){const who=(f.bossName||'The boss').split(',')[0];return {...tierPad(f,'heroic'),text:`${who} is back, and stronger: select Heroic on ${f.name}'s map card.`};}}
 for(const c of ch)for(const l of LEVELS.filter(l=>l.kind==='arena'&&l.chapter===c))if(levelOpen(save,l.id)&&!levelDone(save,l.id))return arenaPad(l);
 /* this week's Rift while unplayed comes before the long Heroic/Legendary grind (a week's twist, not 30 clears away) */{const r=riftUnplayed(save);if(r)return r;}
 for(const c of ch)for(const l of of(c))if(tierOpen(save,l.id,'heroic')&&!tierDone(save,l.id,'heroic'))return tierPad(l,'heroic');
 for(const c of ch)for(const l of of(c))if(tierOpen(save,l.id,'legendary')&&!tierDone(save,l.id,'legendary'))return tierPad(l,'legendary');
 /* endgame-oct29: a side path never cleared on Normal (vx1, mx1, ex1, ex2 are off the main road) was offered as "Try for 3 stars in Bandit Road on Normal"; it is a new adventure, so it says so */
 for(const c of ch)for(const k of TIER_KEYS)for(const l of of(c))if(tierOpen(save,l.id,k)&&starsOf(save,l.id,k)<3)return !tierDone(save,l.id,k)?(k==='normal'?pad(l):tierPad(l,k)):{...tierPad(l,k),text:`Try for 3 stars in ${l.name} on ${TIERS[k].label}: ${k==='legendary'?'beat its 3-star time with no fall':'beat its par time'} on the map card.`};
 return showpieceStep(save);}
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
/* improve20-x-nov1 #20a (audit4 #4): with the smithy's gear at the cap and SHOW_GOLD gold or more, the goal is the cheapest Showpiece not
   yet owned (game/furniture.js), bought at Home -> Decorate. It never outranks learning, the main road, a star gate or a quest under way;
   once it can be bought it comes before tier and star replays (the post-game road too: a quick stop at Home, then back to Heroic);
   "save up" only replaces the last fallbacks (Adventurer tasks, "every goal is complete"). Cosmetic only: it changes nothing in a fight. */
export const SHOW_GOLD=600;
export function showpieceStep(save){const g=save?.gold|0;if(g<SHOW_GOLD)return null;const f=nextShowpiece(save);if(!f||!gearAtCap(save))return null;
 return {id:'showpiece-'+f.id,text:g>=f.price?`Your gear is at its limit: buy a Showpiece at Home, the ${f.name} (${f.price} gold).`:`Save up for a Showpiece at Home: the ${f.name} costs ${f.price} gold (you have ${g}).`,target:{kind:'building',id:'home'},showpiece:f.id,buy:g>=f.price};}
/* improve20-x-nov1 #20d (audit4 #18): a hero OVER_BAND or more levels above a level's Normal band (tiers.js adviceLevel) breezes through it;
   when Heroic is open there and not yet won, Heroic is the replay to suggest. */
export const OVER_BAND=4;
export const overlevelled=(save,id)=>{const l=levelById(id);return !!l&&tiered(l)&&(save?.level|0)>=adviceLevel(l,'normal')+OVER_BAND&&tierOpen(save,id,'heroic')&&!tierDone(save,id,'heroic');};
/* improve20-z-nov1 #1 (audit6 #1): a Middle or High School save has no open topic until a lesson or the check opens one, so the first-lesson
   step was skipped and the goal went straight to Goblin Camp. While the stage is not Elementary, nothing in it is open and no subject is
   placed in it, the goal is the Library, where the first visit starts a lesson (ui/first-library.js firstStart). Same id as the
   Elementary step, so the town's lines about the Library follow it. */
const openInMode=save=>TOPICS.filter(t=>!mastered(save,t)&&topicInSchoolMode(save,t)&&topicOpen(save,t));
export const unplacedStage=save=>{const f=STAGE_FLOOR[save?.schoolMode];return !!f&&!Object.values(save?.placement||{}).some(g=>(+g||0)>=f)&&!openInMode(save).length;};
function firstLibrary(save,room){if(room!=='library')return {id:'first-lesson',text:'Visit the Library: pick your first lesson.',target:{kind:'library'}};
 const g=save.schoolMode==='middle'?(startGrade({...save},'math','middle')??6):null;
 return {id:'first-lesson',text:g?`Pick your first lesson: press “Start a Grade ${g} lesson now”.`:'Pick your first lesson: press “Start a High School lesson now”.',target:{kind:'library'}};}
/* improve20-z-nov1 #4 (audit6 #2): after ability 2 the next power is about three topics away and the goal only ever named adventures.
   save.goalTurn (additive within v9, core/save.js) alternates the suggestion: a topic's first mastery sets 'fight' (main.js), and the next
   goal that is an adventure says "Try your new skills"; a level won sets 'learn', and the next goal is the next charge toward the next
   ability ("Charge Volley (1/3): ..."), read from the same road the HUD card shows (learning-road.js). After the ending the post-game road
   keeps the goal (the HUD card still shows the charges). Only the suggestion changes: the gates,
   the practice counts and the test are untouched, and nothing here unlocks anything. Every class's ladder reads the same road. */
export function chargeStep(save){if(save?.goalTurn!=='learn'||!earned(save)||gameCleared(save))return null;const road=learningRoad(save);
 if(!road||road.sleeping||!road.reachable||road.knowledge||road.remaining<1)return null;const a=road.ability,st=nextUnlockStep(save,road),sub=SUBJECTS[a.subject]?.name||a.subject,t=st?.topic&&TOPICS.find(x=>x.id===st.topic);
 const left=st?.kind==='practice'?st.need-st.have:0,what=st?.kind==='practice'&&t?`practise ${left} more question${left===1?'':'s'} in “${t.title}”`:st?.kind==='quiz'&&t?`pass the quiz on “${t.title}”`:st?.kind==='test'&&t?`take the mastery test on “${t.title}”`:`start ${/^[aeiou]/i.test(sub)?'an':'a'} ${sub} lesson`;
 return {id:'charge',text:`Charge ${a.name} (${road.done}/${road.total}): ${what} at the Library.`,target:{kind:'library'},charge:{ability:a.id,done:road.done,total:road.total}};}
/* improve20-r8a-nov1 #3 (audit7 d9): Wil, the only companion, was never suggested: adventure() returned the next main-road pad before it looked
   at quests. Once e5 is cleared, right after a win (goalTurn 'learn'), his quest is the goal on the first win counted (save.questNudge, additive
   within v9: wins since e5, game/levels.js recordLevel) and then on every third, until the quest is done; a hand-in already comes first. */
export function wilNudge(save){if(save?.goalTurn!=='learn'||!levelDone(save,'e5')||gameCleared(save))return null;const n=save.questNudge|0;if(n<1||(n-1)%3)return null;
 const q=nextQuestStep(save,questLive);if(!q||q.rank==='handin'||QUESTS[q.quest]?.companion!=='wil')return null;const qs=questStep(q);return {...qs,text:`${qs.text.replace(/[.!]\s*$/,'')}: Wil, a new companion, can join you.`,nudge:true};}
/* a goal after a fresh charge that is an adventure on the map: "Try your new skills" leads it */
const tryNew=(save,n)=>{if(save?.goalTurn!=='fight'||!earned(save)||n?.target?.kind!=='pad')return n;const l=levelById(n.target.id);
 return {...n,text:n.id==='level-'+n.target.id&&l?`Try your new skills at ${l.name}.`:`Try your new skills! ${n.text}`,tryNew:true};};
function adventure(save){
 const h=hireStep(save);if(h)return h;
 const q=nextQuestStep(save,questLive);if(q?.rank==='handin')return questStep(q);
 const road=nextLevel(save);if(road)return pad(road);
 const gate=playable().find(l=>!l.optional&&starsShort(save,l.id));
 /* stargate-oct29 (midgame-oct29 finding 2): the quest step still comes first at a star wall (guide-oct26), but it now says the
    main road is held by stars, so a kid on 14 of 15 is not left wondering why the road stopped */
 /* improve20-t-oct31 #17 (audit2 #8): after the ending a quest nobody has taken yet ("Talk to Farmer Hob at his farm") no longer
    outranks the post-game road (Heroic, the arenas, Legendary, newest chapter first); the finale card and the Journal still name it.
    A quest already under way keeps its place. */
 /* improve20-r8a-nov1 #2: after the ending the post-game road decides, Wil's quest in its place there; a Showpiece never outranks content */
 if(gameCleared(save))return postGame(save,q);
 if(q){const n=questStep(q);if(!gate)return n;const g=starsShort(save,gate.id);return {...n,text:`${n.text.replace(/[.!]\s*$/,'')} (${gate.name} needs ${g.need}★: ${g.need-g.have} more).`,starGate:gate.id};}
 if(gate){const g=starsShort(save,gate.id),src=starSource(save,gate.id);if(src){const l=src.level,k=src.tier,n=tierPad(l,k);return {...n,id:'stars-'+gate.id,text:`${gate.name} needs ${g.need} stars (you have ${g.have}). ${src.done?'Beat the 3-star time in':'Clear'} ${l.name} on ${TIERS[k].label} for more.`};}}
 for(const optional of [false,true])for(const k of TIER_KEYS)for(const l of playable().filter(l=>!!l.optional===optional))if(tierOpen(save,l.id,k)&&!tierDone(save,l.id,k))return tierPad(l,k);
 for(const k of TIER_KEYS)for(const l of playable())if(tierOpen(save,l.id,k)&&starsOf(save,l.id,k)<3)return {...tierPad(l,k),text:`Try for 3 stars in ${l.name} on ${TIERS[k].label}: ${k==='legendary'?'beat its 3-star time with no fall':'beat its par time'} on the map card.`};
 return null;
}
/* improve20-r7a-nov1 #11 (audit6 #19: 1,036 gold by minute 40 with nothing pointing at what to buy): once a boss has fallen and the hero holds
   FIRST_UPGRADE_GOLD or more but has never owned a piece bought at the smithy (the starting pieces cost 0), the adventure goal is led by "Visit the Weaponsmith:
   your first upgrade" (the piece NEXT UPGRADE would pick, its price), with the adventure kept as `then`. It goes once any upgrade is owned
   or once the smithy has been opened while it showed (s.settings.upgradeVisit; settings keeps unknown keys), so it never holds the goal.
   It never comes before a learning step (it sits where the adventure goal would), and gold still unlocks nothing. */
export const FIRST_UPGRADE_GOLD=300;
export function firstUpgrade(save){if((save?.gold|0)<FIRST_UPGRADE_GOLD||!save?.gear?.owned||save.settings?.upgradeVisit)return null;if(!LEVELS.some(l=>l.kind==='level'&&levelDone(save,l.id)))return null;
 if(Object.keys(save.gear.owned).some(id=>ITEM[id]&&!ITEM[id].scholar&&ITEM[id].shop>0))return null;
 let u=null;try{u=affordableUpgrade(save);}catch{u=null;}if(!u||!ITEM[u.id])return null;return {id:u.id,name:ITEM[u.id].name,cost:u.cost,craft:u.kind==='craft'};}
/* improve20-r8a-nov1 #1: the one judge may pick a craft whose materials are in hand; the goal then says "craft" */
const upgradeFirst=(save,n)=>{const u=n&&firstUpgrade(save);return u?{id:'first-upgrade',text:u.craft?`Visit the Weaponsmith: craft your first upgrade, the ${u.name} (${u.cost} gold and your materials).`:`Visit the Weaponsmith: your first upgrade, the ${u.name} (${u.cost} gold).`,target:{kind:'smith'},item:u.id,craft:!!u.craft,then:n}:n;};
/* libraryfirst-nov1 (owner, 1 Nov: "start by bringing the character to the Library ... and have them learn an ability first"): a new game on the
   Library-first opening (academics/starter-lesson.js) is pointed at the Library until its starter power is awake; the south gate is shut till
   then. Then the prologue names the power to try, and after the prologue the first lesson step names the NEXT power and the topic that wakes
   it. Step ids: 'awaken' is new (npcs.js reads it); the rest keep theirs. An older save never sees any of this (no save.opening). */
const starterName=save=>starterOf(save?.hero)?.name||'your first power';
export function awakenStep(save,room){const n=starterName(save);return {id:'awaken',text:room==='library'?`Learn your first power, ${n}: start the short lesson.`:`Go to the Library: learn your first power, ${n}!`,target:{kind:'library'}};}
export function nextStep(save,{room}={}){goalSave=save;
 if(gateShut(save))return awakenStep(save,room);
 /* newplayer-oct27: after a lost first fight the HUD no longer reads as if the child had never been to the gate; it offers the Library too, as the defeat card does */
 if(!levelDone(save,'prologue')){const lib=libraryOpening(save)&&awakened(save),n=starterName(save);return {id:'prologue',text:save?.levels?.prologue?.plays>0?(lib?`Goblins still hold the south gate. Try again, and use ${n}!`:'Goblins still hold the south gate. Try again, or awaken an ability at the Library first.'):lib?`Goblins at the south gate! Go and try ${n} on them.`:'Goblins at the south gate! Go and see.',target:{kind:'gate'}};}
 /* 25 Oct (first-hour playtest): after a defeat with an empty bag the goal points at the Alchemist first, when the hero can afford a
    potion. It clears as soon as one is bought, or once that level is won (levels[id].resolve counts defeats since the last win).
    oct26-midgame: it names the Apothecary, the shop's name on its door, the map and fast travel. */
 const lost=Object.values(save?.levels||{}).some(r=>(r?.resolve|0)>0),price=POTIONS[potionKind(save||{})].price;
 if(lost&&!potionCount(save||{})&&(save?.gold|0)>=price){const n=nextStep({...save,levels:Object.fromEntries(Object.entries(save.levels).map(([k,v])=>[k,{...v,resolve:0}]))},{room});return {id:'potions',text:`Out of potions: buy some at the Apothecary (${price} gold each).`,target:{kind:'alchemist'},then:n};}
 const a=nextPower(save),subject=SUBJECTS[a?.subject]?.name;
 if(a&&abilityMastery(save,a.subject)+1e-8>=a.gate){const n=adventure(save)||pad(levelById('e1'));return {...n,id:'level-up',text:`Fight foes and finish adventures to earn XP toward hero level ${xpLevel(a)} for ${a.name}. ${n.text}`};}
 if(unplacedStage(save))return firstLibrary(save,room);
 {const w=wilNudge(save);if(w)return w;}
 {const c=chargeStep(save);if(c)return c;}
 if(levelDone(save,'e3')||!openInMode(save).length)return upgradeFirst(save,tryNew(save,adventure(save))||endGoal(save));
 /* improve20-z-nov1 #1: the first lesson names a subject that has an open lesson (a placed Middle School learner may have opened another subject than the next power's) */
 const fsub=(o=>o.some(t=>t.subject===a?.subject)?subject:SUBJECTS[(o.find(t=>save.lessons?.[t.id]?.reached>0)||o[0])?.subject]?.name||subject)(openInMode(save));
 if(!lessonDone(save)&&!earned(save)){
  /* libraryfirst-nov1: after the prologue a Library-first save is told what its next power is and which topic wakes it (the victory card says the same) */
  const np=libraryOpening(save)&&nextPowerLine(save);if(np)return {id:'first-lesson',text:np.topic?(room==='library'?`Next power: ${np.a.name}. Start “${np.topic.title}”.`:`Next power: ${np.a.name}. Learn “${np.topic.title}” at the Library.`):`Next power: ${np.a.name}. Start ${/^[aeiou]/i.test(SUBJECTS[np.a.subject]?.name||'')?'an':'a'} ${SUBJECTS[np.a.subject]?.name||np.a.subject} lesson at the Library.`,target:{kind:'library'},power:np.a.id};
  return {id:'first-lesson',text:room==='library'?(fsub?`Start your first ${fsub} lesson.`:'Choose a study area to start your first lesson.'):(fsub?`Visit the Library for your first ${fsub} lesson.`:'Visit the Library for your first lesson.'),target:{kind:'library'}};}
 /* improve20-f-nov1 #9 (audit5 #1): a fight comes right after the first lesson AND its quiz (it came after the lesson alone, and the quiz
    card then pointed at practice, so a new kid met about 30 answers before a second fight). Until the first quiz is sat the goal is that
    quiz; then Goblin Camp; then practice (the practice step names the power it awakens). Only the suggested order changes: mastery, the
    10-practice rule and the test are untouched, and nothing here unlocks anything. */
 if(!levelDone(save,'e1')){const t=!earned(save)&&firstQuizDue(save);if(t)return {id:'quiz',text:`Take the quiz on “${t.title}” at the Library, then try your new skills.`,target:{kind:'library'}};
  return {id:'goblin-camp',text:`Try your new skills: ${levelById('e1')?.name||'Goblin Camp'}.`,target:{kind:'pad',id:'e1'}};}
 if(!earned(save)&&a){
  const t=inProgress(save,a.subject);
  if(!t)return {id:'start-lesson',text:`Start ${/^[aeiou]/i.test(subject||'')?'an':'a'} ${subject} lesson at the Library.`/* exploit4-oct27: it read "Start a English lesson" */,target:{kind:'library'}};
  const r=testReady(save,t);
  /* polish-oct29 (#10): once a quiz was sat but not passed the goal says what passing takes (it kept saying "Take the quiz") */
  if(!r.quiz){const best=save.lessons?.[t.id]?.quiz|0,need=Math.ceil(PASS*QUIZ_SIZE-1e-9);return {id:'quiz',text:best>0?`Pass the quiz on “${t.title}” at the Library (${need} of ${QUIZ_SIZE} right).`:`Take the quiz on “${t.title}” at the Library.`,target:{kind:'library'}};}
  /* improve20-f-nov1 #9: the practice goal names the power it leads to and one count, "(n/10)" (first-hour playtest 24 Oct: "(8/25). After 10"
     read as two goals, so it is the one count toward PRACTICE_FIRST); the result card and the Library say what comes after (the test on a first topic, follow6-oct29) */
  if(r.practice<PRACTICE_FIRST)return {id:'practice',text:`Practise to awaken ${a.name} at the Library (${r.practice}/${PRACTICE_FIRST}).`,target:{kind:'library'}};
  /* follow6-oct29 (lead, under the owner's 26 Oct delegation and 29 Oct "first topic only"): once the topic is test-ready the
     goal is the mastery test (ability 2 is the big reward), before Slime Bog; the result card already said so */
  if(r.ready)return {id:'earn-power',text:`Take the mastery test on “${t.title}” at the Library.`,target:{kind:'library'}};
  const e2=levelById('e2');if(e2&&!levelDone(save,'e2')&&levelOpen(save,'e2')&&!levelFogged(e2))return pad(e2);
  return {id:'earn-power',text:'Finish practice and take the test at the Library.',target:{kind:'library'}};}
 const n=tryNew(save,adventure(save));if(n)return upgradeFirst(save,n);
 return upgradeFirst(save,endGoal(save));}
function endGoal(save){
 /* improve20-x-nov1 #20a: saving up for a Showpiece is the goal once nothing else is left */
 const sp=showpieceStep(save);if(sp)return sp;
 /* the run layer's Adventurer tasks (game/skills.js): once the road is walked, the next task is the next goal */
 const t=nextTask(save);if(t)return {id:'task-'+t.id,text:`Adventurer task: ${t.text}`,target:t.group==='Learning'?{kind:'library'}:t.pad&&levelOpen(save,t.pad)?{kind:'pad',id:t.pad}:{kind:'guild'}};
 /* oct24-endgame: the last word points at the last level, not back to the first */const last=LEVELS.find(l=>gameFinale(l.id))||levelById('e1');
 return {id:'replay',text:`Every adventure goal is complete! Replay ${last.name} on Legendary with a different loadout whenever you like.`,target:{kind:'pad',id:last.id,tier:'legendary'}};}
export const nextStepLevel=save=>{const n=nextStep(save),t=(n.then||n).target;return t.kind==='pad'?levelById(t.id):null;};
/* improve20-r9f-nov1 #5 (audit8: after losing v3 or v7 the defeat card's NEXT GOAL read "Next adventure: The Deep Below"): after a loss the
   main next step is the level just lost, by name, on its tier (the Rift says so), unless the defeat flow has something that ranks higher:
   an offer the caller passes (opts.offer, e.g. a "Make fights easier?" step) or an empty potion bag (nextStep's 'potions' step).
   A win, or an arena run, keeps nextStep. Pure: reads the save, writes nothing. */
export function retryStep(save,{id,tier='normal',rift=false,boss=false}={}){const l=levelById(id);if(!l)return null;const k=TIERS[tier]?tier:'normal';
 const text=rift?`Try this week's Rift again: ${l.name}.`:boss?`Try ${l.name} again: the boss fight is waiting.`:`Try ${l.name} again${k!=='normal'?` on ${TIERS[k].label}`:''}.`;
 return {id:'retry-'+l.id,text,target:{kind:'pad',id:l.id,...(k!=='normal'?{tier:k}:{})},retry:true};}
export function resultGoal(save,{won,id,tier='normal',rift=false,boss=false,arena=false,offer=null}={}){const n=nextStep(save);if(won||arena)return n;if(offer?.text)return offer;if(n.id==='potions')return n;return retryStep(save,{id,tier,rift,boss})||n;}
