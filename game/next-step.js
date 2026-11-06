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
import {TOPICS,testReady,mastered,topicOpen,PASS,QUIZ_SIZE} from '../academics/lessons.js';/* improve24-r24k-nov5 #1 */import {testSumOn} from '../academics/lessons.js';
import {topicInSchoolMode,/* improve26-r26b-nov6 #3 */testDue} from '../academics/study-unlock.js';
import {TIER_KEYS,TIERS} from './tiers.js';
import {nextTask} from './skills.js';
import {potionCount,potionKind,POTIONS} from './potions.js';
import {nextQuestStep,questLive,QUESTS,/* improve20-r20n-nov4 #2 */currentStep as questCurrent,questState as questStateOf,stepTarget,QUEST_ITEMS} from './quests.js';
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
import {waitingGate,powerWants,powerStep,nextPower as nextPowerP,powerLine} from './power-gate.js';
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
/* improve20-r13b-nov2 #1: the shared pick (game/power-gate.js nextPower), no longer the lowest gate */
export const nextPower=save=>nextPowerP(save)?.a||null;
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
export const riftUnplayed=save=>{if(!riftOpen(save))return null;let p=null;try{p=riftPick(save);}catch{p=null;}if(!p||save.rift?.week===p.week&&save.rift?.best)return null;const l=levelById(save.rift?.week===p.week&&save.rift?.level||p.level);return l?{id:'rift-'+p.week,text:`This week's Rift is open: ${l.name} with two twists. Press Rift on the world map.`,target:{kind:'pad',id:l.id},rift:true}:null;};
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
 for(const c of ch)for(const k of TIER_KEYS)for(const l of of(c))if(tierOpen(save,l.id,k)&&starsOf(save,l.id,k)<3)return !tierDone(save,l.id,k)?(k==='normal'?pad(l):tierPad(l,k)):{...tierPad(l,k),text:`Try for 3 stars in ${l.name} on ${TIERS[k].label}: ${k==='legendary'?'an S grade, under its 3-star time with no fall':'win it with an S grade (few hits, the secret found)'}.`};
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
/* improve20-r15b-nov3 #1 (kidsim3 k2: the readers fought about 140 s in 18 minutes): an ability that wakes holds goalTurn on 'fight' for
   FIGHT_HOLD level clears before the next topic leads again (save.fightHold, additive within v9: set to FIGHT_HOLD by the mastery card
   that woke it, main.js; game/levels.js recordLevel counts a won level down). Only the suggestion: the Library stays open and a kid who
   goes there gets the normal lesson flow. */
export const FIGHT_HOLD=2;
export function chargeStep(save){if(save?.goalTurn!=='learn'||!earned(save)||gameCleared(save))return null;const road=learningRoad(save);
 if(!road||road.sleeping||!road.reachable||road.knowledge||road.remaining<1)return null;const a=road.ability,st=nextUnlockStep(save,road),sub=SUBJECTS[a.subject]?.name||a.subject,t=st?.topic&&TOPICS.find(x=>x.id===st.topic);
 const left=st?.kind==='practice'?st.need-st.have:0,what=st?.kind==='practice'&&t?`practise ${left} more question${left===1?'':'s'} in “${t.title}”`:st?.kind==='quiz'&&t?`pass the quiz on “${t.title}”`:st?.kind==='test'&&t?`take the mastery test on “${t.title}”`:`start ${/^[aeiou]/i.test(sub)?'an':'a'} ${sub} lesson`;
 return {id:'charge',text:`Charge ${a.name} (${road.done}/${road.total}): ${what} at the Library.`,target:{kind:'library'},charge:{ability:a.id,done:road.done,total:road.total}};}
/* improve20-r8a-nov1 #3 (audit7 d9): Wil, the only companion, was never suggested: adventure() returned the next main-road pad before it looked
   at quests. Once e5 is cleared, right after a win (goalTurn 'learn'), his quest is the goal on the first win counted (save.questNudge, additive
   within v9: wins since e5, game/levels.js recordLevel) and then on every third, until the quest is done; a hand-in already comes first. */
const goalQuest=save=>id=>questLive(id)&&(!!QUESTS[id]?.reward?.companion||questStateOf(save,id)!=='open');
export function wilNudge(save){if(save?.goalTurn!=='learn'||!levelDone(save,'e5')||gameCleared(save))return null;const n=save.questNudge|0;if(n<1||(n-1)%3)return null;
 const q=nextQuestStep(save,questLive);if(!q||q.rank==='handin'||QUESTS[q.quest]?.companion!=='wil'||/* improve20-r22w-nov4 #3: never for his later chapter (he has joined) */!QUESTS[q.quest]?.reward?.companion)return null;const qs=questStep(q);return {...qs,text:`${qs.text.replace(/[.!]\s*$/,'')}: Wil, a new companion, can join you.`,nudge:true};}
/* a goal after a fresh charge that is an adventure on the map: "Try your new skills" leads it */
/* improve20-r12a-nov2 (kid sims round 2 finding 1): the goal at a power gate names the pad, the power and the one step that wakes it
   (game/power-gate.js); a gate short only of the hero level points at XP (a won level again, or a lesson). Ids: 'power-<pad>'. */
export const STEP_WORDS={lesson:t=>`start “${t.title}”`,quiz:t=>`take the quiz on “${t.title}”`,practice:(t,st)=>`finish practice on “${t.title}” (${Math.max(0,st.needed-st.practice)} to go)`,test:t=>`take the mastery test on “${t.title}”`};
export function powerGoal(save){const g=waitingGate(save);if(!g?.a)return null;const w=powerWants(save,g.a),st=powerStep(save,g.a),name=g.level.name;
 if(w.topics<=0){const back=levelById(g.level.requires[0]);return {id:'power-'+g.level.id,text:`${name} needs ${g.a.name}: reach hero level ${w.lvl}. Win a level again or study for XP.`,target:back?{kind:'pad',id:back.id}:{kind:'library'},powerGate:g.level.id,power:g.a.id};}
 const how=st?.topic&&STEP_WORDS[st.stage]?STEP_WORDS[st.stage](st.topic,st):`master ${w.topics} ${w.subject} topic${w.topics===1?'':'s'}`;
 return {id:'power-'+g.level.id,text:`${name} needs ${g.a.name}. To wake it, ${how} at the Library.`,target:{kind:'library',subject:st?.subject||g.a.subject},powerGate:g.level.id,power:g.a.id};}
/* improve20-r13b-nov2 #2 (audit10 a6): once the story is done the HUD goal and the Journal led with a side level ("Next adventure: Moonlit
   Garden"). They now lead with the shared next ability (game/power-gate.js nextPower, the Champion card's "Wake your next power"), or the
   next topic when every ability is awake; the post-game adventure stays as `side`, a second line. Ids: 'post-power', 'post-topic'. */
export function postPower(save){const p=nextPowerP(save);
 if(p){if(p.topics<=0&&p.reachable)return null;const st=powerStep(save,p.a),how=st?.topic&&STEP_WORDS[st.stage]?STEP_WORDS[st.stage](st.topic,st):p.place?`find your level in ${p.subject}`:`study ${p.subject}`;
  const line=powerLine(p).replace(/ \(find your level in [^)]*\)$/,'');return {id:'post-power',line,text:`Next power: ${line}. ${how[0].toUpperCase()+how.slice(1)} at the Library.`,phone:`Wake ${p.a.name} at the Library.`,target:{kind:'library',subject:st?.subject||p.a.subject},power:p.a.id};}
 if((ABILITIES[save?.hero]||[]).some(a=>a.gate>0&&!unlocked(save,a)))return null;const t=openInMode(save).sort((a,b)=>!!save.lessons?.[b.id]?.done-!!save.lessons?.[a.id]?.done)[0];
 return t?{id:'post-topic',text:`Every power is awake. Master your next topic, “${t.title}”, at the Library.`,phone:'Master your next topic at the Library.',target:{kind:'library',subject:t.subject}}:null;}
/* improve20-r10a-nov2 #5: a mastery that opened no ability sets goalTurn 'go' (main.js): the adventure still comes next, without "Try your new skills" */
/* improve20-r15b-nov3 #1: on the second clear of a wake's hold (save.fightHold 1, see FIGHT_HOLD) the adventure keeps its own words */
const tryNew=(save,n)=>{if(save?.goalTurn!=='fight'||!earned(save)||n?.target?.kind!=='pad'||(save.fightHold|0)===1)return n;const l=levelById(n.target.id);
 return {...n,text:n.id==='level-'+n.target.id&&l?`Try your new skills at ${l.name}.`:`Try your new skills! ${n.text}`,tryNew:true};};
function adventure(save){
 const h=hireStep(save);if(h)return h;
 /* improve20-r22w-nov4 #3: a companion's later chapter that has not been taken yet never takes the adventure goal (main road, star wall or post-game);
    once accepted it leads through the quest lead (R20N) and, under way, keeps its place as any quest does */
 const q=nextQuestStep(save,goalQuest(save));if(q?.rank==='handin')return questStep(q);
 const road=nextLevel(save);if(road)return pad(road);
 /* improve20-r12a-nov2: a power gate holds the main road (game/levels.js powerGate): the goal is the learning step that wakes its power */
 {const pg=powerGoal(save);if(pg)return pg;}
 const gate=playable().find(l=>!l.optional&&starsShort(save,l.id));
 /* stargate-oct29 (midgame-oct29 finding 2): the quest step still comes first at a star wall (guide-oct26), but it now says the
    main road is held by stars, so a kid on 14 of 15 is not left wondering why the road stopped */
 /* improve20-t-oct31 #17 (audit2 #8): after the ending a quest nobody has taken yet ("Talk to Farmer Hob at his farm") no longer
    outranks the post-game road (Heroic, the arenas, Legendary, newest chapter first); the finale card and the Journal still name it.
    A quest already under way keeps its place. */
 /* improve20-r8a-nov1 #2: after the ending the post-game road decides, Wil's quest in its place there; a Showpiece never outranks content */
 if(gameCleared(save)){if(q&&q.rank!=='open')return questStep(q);const pg=postGame(save,q),pw=postPower(save);if(!pw)return pg;/* right after a mastery (goalTurn 'fight' or 'go') the adventure leads and the power is the second line, as before the ending */if(pg&&(save.goalTurn==='fight'||save.goalTurn==='go'))return {...pg,side:pw.text};return {...pw,side:pg?.text||'',then:pg||undefined};}
 if(q){const n=questStep(q);if(!gate)return n;const g=starsShort(save,gate.id);return {...n,text:`${n.text.replace(/[.!]\s*$/,'')} (${gate.name} needs ${g.need}★: ${g.need-g.have} more).`,starGate:gate.id};}
 if(gate){const g=starsShort(save,gate.id),src=starSource(save,gate.id);if(src){const l=src.level,k=src.tier,n=tierPad(l,k);return {...n,id:'stars-'+gate.id,text:`${gate.name} needs ${g.need} stars (you have ${g.have}). ${src.done?'Win a better grade in':'Clear'} ${l.name} on ${TIERS[k].label} for more.`};}}
 for(const optional of [false,true])for(const k of TIER_KEYS)for(const l of playable().filter(l=>!!l.optional===optional))if(tierOpen(save,l.id,k)&&!tierDone(save,l.id,k))return tierPad(l,k);
 for(const k of TIER_KEYS)for(const l of playable())if(tierOpen(save,l.id,k)&&starsOf(save,l.id,k)<3)return {...tierPad(l,k),text:`Try for 3 stars in ${l.name} on ${TIERS[k].label}: ${k==='legendary'?'an S grade, under its 3-star time with no fall':'win it with an S grade (few hits, the secret found)'}.`};
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
/* improve20-r12a-nov2: a power gate's goal is a learning step, so the first-upgrade nudge never covers it (kidsim: Mia's e3 card said "Visit the Weaponsmith" beside "Finish practice") */
/* improve20-r15b-nov3 #2 (kidsim3 k4: after the second mastery the HUD goal became "Visit the Weaponsmith", Theo, both runs): while a level
   (a map pad) or a topic step (the Library) is next, the first upgrade never takes the goal; it stays the win card's "next:" chip (main.js
   nextBuyName). It still leads a goal that is neither (a quest step, the end goals). */
/* improve20-r22b-nov4 #3 (R22W: with 300+ gold and no gear bought, "Visit the Weaponsmith" beat Wil's hand-in steps): an accepted quest's step (one under way)
   is never covered either; the nudge waits until no accepted quest step is next */
const upgradeFirst=(save,n)=>{const k=n?.target?.kind,u=n&&!n.powerGate&&k!=='pad'&&k!=='library'&&!(n.quest&&questStateOf(save,n.quest)==='active')&&firstUpgrade(save);return u?{id:'first-upgrade',text:u.craft?`Visit the Weaponsmith: craft your first upgrade, the ${u.name} (${u.cost} gold and your materials).`:`Visit the Weaponsmith: your first upgrade, the ${u.name} (${u.cost} gold).`,target:{kind:'smith'},item:u.id,craft:!!u.craft,then:n}:n;};
/* libraryfirst-nov1 (owner, 1 Nov: "start by bringing the character to the Library ... and have them learn an ability first"): a new game on the
   Library-first opening (academics/starter-lesson.js) is pointed at the Library until its starter power is awake; the south gate is shut till
   then. Then the prologue names the power to try, and after the prologue the first lesson step names the NEXT power and the topic that wakes
   it. Step ids: 'awaken' is new (npcs.js reads it); the rest keep theirs. An older save never sees any of this (no save.opening). */
const starterName=save=>starterOf(save?.hero)?.name||'your first power';
/* improve20-r11f-nov2 #1: phone is the phone strip's shorter wording (ui/controls-tutorial.js), used only when the whole text does not fit; the power name stays */
export function awakenStep(save,room){const n=starterName(save);return {id:'awaken',text:room==='library'?`Learn your first power, ${n}: start the short lesson.`:`Go to the Library: learn your first power, ${n}!`,...(room==='library'?{}:{phone:`Go to the Library: learn ${n}!`}),target:{kind:'library'}};}
/* improve20-r20n-nov4 #2 (R20L B: after talking to Hob the goal stayed "Next adventure: Ashen Gate"): accepting a quest sets save.questLead
   (additive within v9, core/save.js) to that quest's next step id; while that step is current the goal leads with it ("Quest: find Hob’s coin
   purse on Bandit Road."), once. It goes when the step is done, or when the kid picks another goal (main.js: another level, or a lesson).
   A learning step (a Library goal: a waiting wake, a quiz, practice, a test) is never covered: the quest is its `questThen`, the HUD's "Then:" line. */
/* improve20-r22p-nov4 #3 (R22P, Wil's second chapter played through: after the m2 win the HUD said only "Charge Sundering Blow", with the iron in
   hand and nothing pointing at Brannoc): every step a quest moves on to leads the same way, not only the first, so each hand-in, the m4 return
   and "Meet Wil" are the HUD's "Then:" line under a learning goal (or the goal itself otherwise). main.js also calls this on a level end. */
export function markQuestLead(save,moved){for(const m of moved||[]){if(!m||m.done||!questLive(m.questId))continue;const st=questCurrent(save,m.questId);if(st?.index>=1)save.questLead=`quest-${m.questId}-${st.index}`;}return save?.questLead||null;}
export function questLeadStep(save){const m=/^quest-(.+)-(\d+)$/.exec(typeof save?.questLead==='string'?save.questLead:'');if(!m||!questLive(m[1])||questStateOf(save,m[1])!=='active')return null;const st=questCurrent(save,m[1]);if(!st||st.index!==+m[2]||st.kind==='clear'&&!levelOpen(save,st.level))return null;
 const l=st.kind==='clear'&&levelById(st.level),text=l&&st.item&&QUEST_ITEMS[st.item]?`Quest: find ${QUEST_ITEMS[st.item].name} on ${l.name}.`:`Quest: ${st.text[0].toLowerCase()+st.text.slice(1)}`;
 return {id:save.questLead,text,target:stepTarget(m[1],st),quest:m[1],questLead:true};}
/* the lead goes when the kid picks another goal: a level other than the step's, or a lesson (level null) */
export function dropQuestLead(save,level=null){const q=questLeadStep(save);if(!save?.questLead)return false;if(q&&level&&q.target?.kind==='pad'&&q.target.id===level)return false;save.questLead=null;return true;}
/* improve24-r24l-nov5 #2 (audit16 #7): why Sam's Grade 4 path never fought. A kid who presses Continue on the wake card (not "Try it in a fight")
   leaves the prologue unplayed, and while it is unplayed baseStep's first answer is the 'prologue' step; the quiz card's fight lead only took the
   'goblin-camp' step, so every red stayed study. The Grade 2 desktop path had played the prologue (core/save.js normalize also marks it done on
   the next load once a lesson is done, so the gap showed only in one sitting). This is that lead for every path: Goblin Camp while no map level
   is won and it can start now (its gate open, the first power awake); otherwise null. The order of leads only: nothing unlocks here. */
export const firstFightStep=save=>{const e1=levelById('e1');if(!e1||gateShut(save)||!levelOpen(save,'e1')||LEVELS.some(l=>l.kind==='level'&&!l.hidden&&levelDone(save,l.id)))return null;return {id:'goblin-camp',text:`Next adventure: ${e1.name}.`,target:{kind:'pad',id:'e1'},first:true};};
const learningStep=n=>n?.target?.kind==='library'||!!n?.powerGate;
/* improve24-r24m-nov5 #5 (audit16 #9, shots 12 and 20: Hob's purse in hand, the HUD led with "Charge Ground Slam (2/10)" and the arrow to Hob
   was gone): while a quest step can be handed in (an accepted quest's current step is a talk or visit in town, a carried item's hand-in
   among them; quests.js nextQuestStep rank 'handin'), that step is the HUD lead and its target is the quest giver. Only a waiting first-topic
   test (testWaiting) outranks it. The learning step comes back as soon as the hand-in is done. */
export function handInLead(save){if(!save?.started||gateShut(save))return null;let h=null;try{h=nextQuestStep(save,goalQuest(save));}catch{h=null;}if(h?.rank!=='handin'||testWaiting(save))return null;const q=questLeadStep(save);return q?.id===h.id?q:{...questStep(h),handIn:true};}
export function nextStep(save,opts={}){const n=baseStep(save,opts),q=questLeadStep(save);{const h=handInLead(save);/* improve24-r24m-nov5 #5 */if(h)return n?.quest===h.quest&&n?.id===h.id?n:h;}if(!q||n?.quest===q.quest&&n?.id===q.id)return n;return learningStep(n)?{...n,questThen:q}:q;}
function baseStep(save,{room}={}){goalSave=save;
 if(gateShut(save))return awakenStep(save,room);
 /* newplayer-oct27: after a lost first fight the HUD no longer reads as if the child had never been to the gate; it offers the Library too, as the defeat card does */
 if(!levelDone(save,'prologue')&&/* improve24-r24l-nov5 #2: a kid who won Goblin Camp first is past the gate */!levelDone(save,'e1')){const lib=libraryOpening(save)&&awakened(save),n=starterName(save);return {id:'prologue',text:save?.levels?.prologue?.plays>0?(lib?`Goblins still hold the south gate. Try again, and use ${n}!`:'Goblins still hold the south gate. Try again, or awaken an ability at the Library first.'):lib?`Goblins at the south gate! Go and try ${n} on them.`:'Goblins at the south gate! Go and see.',target:{kind:'gate'}};}
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
 /* improve20-r10a-nov2 #5/#7 (kid sims: Theo's first real fight came at 13.6 minutes, Ava's never in 18; Zoe's card said "Try your new skills" with
    no new skill): on the Library-first opening the power is already awake and tried in the prologue, so after the first lesson the goal is
    Goblin Camp at once, in plain words; its quiz, practice and test follow after the fight (the order only; every gate is unchanged). An older
    save, whose first lesson wakes its first ability, keeps the quiz-then-fight order and its wording. */
 if(!levelDone(save,'e1')){const lib=libraryOpening(save),t=!lib&&!earned(save)&&firstQuizDue(save);if(t)return {id:'quiz',text:`Take the quiz on “${t.title}” at the Library, then try your new skills.`,target:{kind:'library'}};
  return {id:'goblin-camp',text:lib?`Next adventure: ${levelById('e1')?.name||'Goblin Camp'}.`:`Try your new skills: ${levelById('e1')?.name||'Goblin Camp'}.`,target:{kind:'pad',id:'e1'}};}
 if(!earned(save)&&a){
  /* improve26-r26b-nov6 #3: a topic whose mastery test is open, in any subject, is finished first (the nearest power may need a subject not yet begun) */const t=inProgress(save,a.subject)||testDue(save);
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
/* improve23-r23t-nov4 #2 (kidsim6 #1): the level a failed first-topic test leads to (the adventure goal's level, else Goblin Camp while it is unwon), or null */
/* improve24-r24k-nov5 #1 (kidsim7 #1: Mia's red after a 3/10 test sent her to Orc Warcamp, a boss she lost 4 times): the break is a level the kid
   has already won, the furthest won one on the road (Slime Bog after Goblin Camp and Slime Bog); only a kid who has won nothing yet gets the next level */
export const wonBreakLevel=save=>[...LEVELS].reverse().find(l=>tiered(l)&&l.id!=='prologue'&&levelDone(save,l.id)&&levelOpen(save,l.id)&&!levelFogged(l))||null;
export function testBreakStep(save){/* improve24-r24k-nov5 #1 */const w=wonBreakLevel(save);if(w)return {id:'level-'+w.id,text:`Next adventure: ${w.name}.`,target:{kind:'pad',id:w.id},won:true};const n=adventure(save);if(n?.target?.kind==='pad'&&levelById(n.target.id))return n;const e1=levelById('e1');return e1&&!levelDone(save,'e1')?pad(e1):null;}
/* improve24-r24k-nov5 #1: the first-topic mastery test that is waiting (the save's first topic, test-ready and not yet mastered; testSumOn), or null */
export const testWaiting=save=>TOPICS.find(t=>testSumOn(save,t)&&testReady(save,t).ready)||null;
export const nextStepLevel=save=>{const n=nextStep(save),t=(n.then||n).target;return t.kind==='pad'?levelById(t.id):null;};
/* improve20-r9f-nov1 #5 (audit8: after losing v3 or v7 the defeat card's NEXT GOAL read "Next adventure: The Deep Below"): after a loss the
   main next step is the level just lost, by name, on its tier (the Rift says so), unless the defeat flow has something that ranks higher:
   an offer the caller passes (opts.offer, e.g. a "Make fights easier?" step) or an empty potion bag (nextStep's 'potions' step).
   A win, or an arena run, keeps nextStep. Pure: reads the save, writes nothing. */
export function retryStep(save,{id,tier='normal',rift=false,boss=false}={}){const l=levelById(id);if(!l)return null;const k=TIERS[tier]?tier:'normal';
 const text=rift?`Try this week's Rift again: ${l.name}.`:boss?`Try ${l.name} again: the boss fight is waiting.`:`Try ${l.name} again${k!=='normal'?` on ${TIERS[k].label}`:''}.`;
 return {id:'retry-'+l.id,text,target:{kind:'pad',id:l.id,...(k!=='normal'?{tier:k}:{})},retry:true};}
export function resultGoal(save,{won,id,tier='normal',rift=false,boss=false,arena=false,offer=null}={}){const n=nextStep(save);if(won||arena)return n;if(offer?.text)return offer;if(n.id==='potions')return n;return retryStep(save,{id,tier,rift,boss})||n;}
