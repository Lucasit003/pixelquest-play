import {emptyHints,cleanHints,cleanSchoolGrade} from '../game/hints.js';
import {cleanEcho} from '../game/echo.js';
import {cleanRunes,owns} from '../game/runes.js';
import {DEFAULT_BINDINGS,normalizeBindings} from '../game/bindings.js';
import {cleanFieldMission} from '../game/field-mission.js';
import {cleanDaily,emptyDaily} from '../game/daily.js';
import {cleanRift,emptyRift} from '../game/rift.js';
import {cleanHall,emptyHall} from '../game/hall.js';
import {JEWEL} from '../game/jewels.js';
import {cleanHouse} from '../game/furniture.js';
import {LEGACY} from '../academics/bank.js';
import {bagMigrate} from '../game/potions.js';
/* lightload2-oct27: the answer-id corrections (academics/question-corrections.js, about 84 KB gzipped) are only needed to map ids a
   save already holds. A browser imports them before load() only when a stored save holds answers or tried checks
   (storedNeedsCorrections, main.js), and before an import; a new player never fetches them. Node and jsdom load them here.
   A save with no ids has nothing to rename, so normalize() gives the same result with or without them. */
let ANSWER_ID_RENAMES=new Map(),latestId=id=>id,fixesTask=null,fixesIn=false;
export const correctionsLoaded=()=>fixesIn;
export function loadCorrections(){return fixesTask??=import('../academics/question-corrections.js').then(m=>{ANSWER_ID_RENAMES=m.ANSWER_ID_RENAMES;latestId=m.latestId;fixesIn=true;}).catch(e=>{fixesTask=null;throw e;});}
if(typeof window==='undefined'||/jsdom/i.test(globalThis.navigator?.userAgent||''))await loadCorrections();
const holdsIds=v=>{if(!v||typeof v!=='object')return false;if(v.answers&&typeof v.answers==='object'&&Object.keys(v.answers).length)return true;
 return !!v.lessons&&typeof v.lessons==='object'&&Object.values(v.lessons).some(l=>Array.isArray(l?.tried)&&l.tried.length>0);};
/* true when normalize(value) could rename something and the corrections are not in yet */
export const correctionsNeeded=value=>!fixesIn&&holdsIds(value);
import {ABILITIES} from '../game/abilities.js';
import {mastery,unlocked,gainXP,XP} from '../game/math.js';
import {CONTRACT_LEVELS,LEVELS,CHAPTERS,levelById,levelParFor,levelDone,starGate,powerGate} from '../game/levels.js';
import {starsFor} from '../game/tiers.js';
import {awakenedOnLoad} from '../academics/awakening.js';
import {emptyGear,cleanGear,fromEquipment,syncScholar,ITEM} from '../game/gear.js';
import {GRADE_KEYS} from '../game/grade.js';
import {emptyDelve,backfillDelve} from '../game/delve.js';
import {syncTasks,TASK} from '../game/skills.js';
import {emptyPets,cleanPets,syncPets,petOwned,FREE_PET} from '../game/pets.js';
import {normalizeLook} from '../gfx/actors/hero-palette.js';
import {emptyParty,cleanParty} from '../game/party.js';
import {emptyQuests,cleanQuests} from '../game/quests.js';
import {cleanTravel} from '../game/fasttravel.js';
import {cleanTitles,earnTitles,TITLES} from '../game/titles.js';
import {grantDiaryKeepsakes} from '../game/hall-diary.js';/* improve25-r25f-nov5 #3 */
import {cleanGlow} from '../game/hero-glow.js';/* improve25-r25f-nov5 #4 */
import {cleanStudyLooks} from '../game/study-looks.js';/* improve25-r25t-nov5 #2 */
import {cleanPrizes,grantWinKeepsakes} from '../game/prizes.js';
/* improve20-r20j-nov4 #2: ability seals broken and caches paid (additive within v9) */
import {cleanSeals} from '../game/ability-seals.js';

// v7 writes a new key (v6 did the same). Older keys are never written again: they stay behind as rollback copies (a v5 build still finds
// its own save under V5_KEY), and load() still reads every one of them, newest first.
export const KEY='pixelquest.save.v9',V8_KEY='pixelquest.save.v8',V7_KEY='pixelquest.save.v7',V6_KEY='pixelquest.save.v6',V5_KEY='pixelquest.save.v5',V4_KEY='pixelquest.save.v4',PREVIOUS_KEY='pixelquest.save.v3',OLD_KEY='pixelquest.save.v1',BROKEN_KEY='pixelquest.save.broken';
/* v6 (14 Oct, the difficulty ladder): levels[id] gains stars (the Normal tier's best, 1-3) and tiers.{heroic,legendary}
   in the same shape as the Normal record; starPass lists star-gated pads a save had already reached before the gates. */
/* v7 (14 Oct, gear, game/gear.js): s.gear = {v,owned,worn,mats,pity,seen,beat,legend,scholarSeen}. A v1-v6 save's smith
   tiers (equipment[hero] = {weapon,armor}) become the matching shop items, worn, with stars on the chest until it gives at
   least the old defence, so no hero is weaker. s.equipment is kept as it was (read-only) for a rollback to v6. */
/* v8 (14 Oct, the run layer, docs/design/research/SKYBLOCK_DUNGEONS_PROGRESSION.md): a tier record's best gains `grade`
   (D..S+, the best run grade, game/grade.js); s.delve = {xp, runs, meters:{[level]:{target,pts}}, classXP:{[hero]}, seals};
   s.skills = {crafting} (the other skills are read from the save, game/skills.js); s.adventurer = {tasks:{[id]:1}}.
   An older save starts with Delver XP back-filled at half of what its past clears would have paid, crafting XP from the
   stars already on its gear, and every Adventurer task it already meets recorded. Nothing else changes. */
/* v9 (24 Oct, companions for hire, docs/design/COMPANIONS_AND_OAKHAVEN.md §5.6): s.party = {with, crew:{[id]:{xp,runs,wins,
   trial,joined}}} (game/party.js), s.quests = {q:{[id]:{step,items,started,done}}, seen} (game/quests.js), s.town = {seen}
   (growth news already told). An older save starts all three empty: a quest whose opening rule already holds is open,
   never completed for it. Unknown companion and quest ids are dropped and numbers clamped. Nothing else changes. */
export const VERSION=9;
/* v2:gamedesign -- the ability ladder a save was last normalised under. 2 = the owner's re-curve of 8 Oct 2026 (abilities.js gate + lvl,
   docs/reference/SPEC_DECISIONS.md). An additive field, not a format change: a save without it is from before the re-curve.
   3 = the owner's Paladin swap of 29 Oct 2026 (rungs 3 and 4: Hammer of Light gate 3 / level 3, Divine Shield gate 6 / level 4).
   A save last normalised under ladder 2 keeps, once, every ability those moved rungs had opened under ladder 2 (LADDER2_RUNGS),
   so Divine Shield never re-locks for a Paladin who had it; Hammer of Light only gets easier. */
export const LADDER=3;
export const LADDER2_RUNGS={'divine-shield':{gate:3,lvl:3},'hammer-of-light':{gate:6,lvl:4}};

export function fresh(){return {version:VERSION,abilitySeals:{broken:[],looted:[]},hero:'warrior',delve:emptyDelve(),skills:{crafting:0},adventurer:{tasks:{}},heroNames:{},fieldMission:cleanFieldMission(),level:1,xp:0,gold:30,mastery:{},answers:{},loadouts:{},equipment:{},potions:3,regenPotions:0,potionKind:'health',pet:'study',jewels:{owned:{},worn:{necklace:null,ring:null},pity:{}},gear:emptyGear(),house:{owned:{},items:[]},petBond:{},cleared:[],bossPhase2:false,cinematicSeen:false,schoolMode:null,settings:{sound:true,music:true,motion:!globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches,bindings:{...DEFAULT_BINDINGS},freePotionSeen:false},started:false,lessons:{},kept:[],placement:{},levels:{},starPass:[],powerPass:[],bestiary:{},/* v2:hub */boons:{pending:[],bounty:null},hub:{seen:[]},party:emptyParty(),quests:emptyQuests(),town:{seen:[]},/* fast travel (25 Oct, additive within v9) */travel:{places:[],hinted:false},/* daily goals (herocard-oct27, additive within v9, no streaks) */daily:emptyDaily(),/* the Rift of the Week (improve20-r-oct31, additive within v9, no streaks) */rift:emptyRift(),hall:emptyHall(),/* titles (endfollow-oct29, additive within v9, cosmetic) */titles:[],/* kid-appeal help and the optional school grade (kidfix-a-oct31, additive within v9, game/hints.js) */hints:emptyHints(),runes:{},schoolGrade:null,/* improve20-z-nov1 #4: which goal the HUD suggests next after ability 2, 'learn' or 'fight' (additive within v9, game/next-step.js chargeStep) */goalTurn:null,questNudge:0,fightHold:0,winTally:0,/* libraryfirst-nov1: 'library' once a brand-new game begins on the Library-first opening, and the topic its starter lesson was cut from (additive within v9, academics/starter-lesson.js) */opening:null,starterLesson:null,/* earned pets (improve20-c-oct31, additive within v9, game/pets.js) */pets:emptyPets(),/* v2:edu */awakened:false,/* v2:gamedesign */ladder:LADDER};}

const obj=v=>!!v&&typeof v==='object'&&!Array.isArray(v);
const HEROES=['warrior','mage','rogue','ranger','paladin','berserker','summoner'];
export function normalize(value){
 if(!value||![1,2,3,4,5,6,7,8,VERSION].includes(value.version))throw Error('This is not a PixelQuest save.');
 const s=fresh();
 const from=value.version;
 value=JSON.parse(JSON.stringify(value));

 // v1 keyed retirement by a question's position in the bank. v2 keys it by the
 // question's own text, so remap before the answers are validated below. Duplicate
 // v1 entries collapse onto the surviving question, keeping the higher count.
 if(from===1&&value.answers&&typeof value.answers==='object'&&!Array.isArray(value.answers)){
  const migrated={};
  for(const [k,v] of Object.entries(value.answers)){const id=LEGACY.get(k);if(!id)continue;
   migrated[id]=Math.max(migrated[id]||0,Number(v)||0);}
  value={...value,answers:migrated};}

 /* Corrected wording retains the larger earned count under its new identity.
    Keep the old key too, so this content-only migration never erases progress. */
 if(value.answers&&typeof value.answers==='object'&&!Array.isArray(value.answers))for(const [oldId,newId] of ANSWER_ID_RENAMES)if(Object.hasOwn(value.answers,oldId))value.answers[newId]=Math.max(Number(value.answers[newId])||0,Number(value.answers[oldId])||0);

 for(const k of ['hero','level','xp','gold','potions','pet','cleared','bossPhase2','cinematicSeen','started'])if(value[k]!==undefined)s[k]=value[k];
 /* additive (14 Oct): the body each class is drawn with, {warrior:'f'}; a missing class keeps the original art */
 if(value.heroBody&&typeof value.heroBody==='object'&&!Array.isArray(value.heroBody))s.heroBody=Object.fromEntries(Object.entries(value.heroBody).filter(([k,v])=>['warrior','mage','rogue','ranger','paladin','berserker','summoner'].includes(k)&&/^[a-z]$/.test(v)));
 /* additive (15 Oct, the character creator): each class's colours, {warrior:{hair:'blonde',skin:'tone3',eyes:'blue'}};
    unknown ids drop to null (the art's own colours) and a class with nothing chosen is left out (gfx/actors/hero-palette.js) */
 if(value.heroLook&&typeof value.heroLook==='object'&&!Array.isArray(value.heroLook))s.heroLook=Object.fromEntries(Object.entries(value.heroLook).filter(([k,v])=>HEROES.includes(k)&&v&&typeof v==='object').map(([k,v])=>[k,normalizeLook(v)]).filter(([,v])=>v.hair||v.skin||v.eyes));
 if(value.heroNames&&typeof value.heroNames==='object'&&!Array.isArray(value.heroNames))s.heroNames=Object.fromEntries(Object.entries(value.heroNames).filter(([k,v])=>['warrior','mage','rogue','ranger','paladin','berserker','summoner'].includes(k)&&typeof v==='string').map(([k,v])=>[k,v.trim().slice(0,20)]));
 s.regenPotions=Math.max(0,Math.min(999,Math.floor(Number(value.regenPotions)||0)));s.potionKind=value.potionKind==='regen'?'regen':'health';
 if(['elementary','middle','high'].includes(value.schoolMode))s.schoolMode=value.schoolMode;
 for(const k of ['mastery','answers','loadouts','equipment','lessons'])if(value[k]&&typeof value[k]==='object'&&!Array.isArray(value[k]))s[k]=value[k];
 /* jewellery and companion bonds (9 Oct): additive, so an older save simply starts with none; anything not in the table is dropped */
 for(const k of ['jewels','petBond'])if(value[k]&&typeof value[k]==='object'&&!Array.isArray(value[k]))s[k]=value[k];
 {const J=s.jewels;J.owned=Object.fromEntries(Object.keys(J.owned&&typeof J.owned==='object'?J.owned:{}).filter(id=>JEWEL[id]).map(id=>[id,1]));J.worn={necklace:null,ring:null,...(J.worn||{})};for(const slot of ['necklace','ring'])if(!(J.owned[J.worn[slot]]&&JEWEL[J.worn[slot]]?.slot===slot))J.worn[slot]=null;J.pity=J.pity&&typeof J.pity==='object'?J.pity:{};s.petBond=Object.fromEntries(Object.entries(s.petBond).map(([k,v])=>[k,Math.max(0,Math.floor(Number(v)||0))]));}
 /* the furnished house (9 Oct): additive like the jewellery, cleaned of unknown or over-placed items */
 s.house=cleanHouse(value.house);
 s.fieldMission=cleanFieldMission(value.fieldMission);
 s.settings={...s.settings,...value.settings,bindings:normalizeBindings(value.settings?.bindings)};
 /* improve20-v-nov1 #15: the tier last chosen at each level, so the picker opens on it (additive within v9; anything else is dropped) */
 if(obj(value.tierPick)){const p=Object.entries(value.tierPick).filter(([id,k])=>levelById(id)&&['normal','heroic','legendary'].includes(k)).slice(0,100);if(p.length)s.tierPick=Object.fromEntries(p);}

 if(!['warrior','mage','rogue','ranger','paladin','berserker','summoner'].includes(s.hero))s.hero='warrior';
 for(const k of ['level','xp','gold','potions'])s[k]=Math.max(k==='level'?1:0,Number(s[k])||0);
 /* ownerbal-oct29: the potion bag (game/potions.js BAG). Potions over the cap are bought back once at the full shop price; the town shows
    s.bagNote once and clears it (additive within v9). */
 s.potions=Math.floor(s.potions);{const was=obj(value.bagNote)&&Number(value.bagNote.sold)>0?{sold:Math.min(1e6,Math.floor(+value.bagNote.sold)),gold:Math.max(0,Math.min(1e8,Math.floor(+value.bagNote.gold||0)))}:null,b=bagMigrate(s);if(b||was)s.bagNote={sold:(was?.sold||0)+(b?.sold||0),gold:(was?.gold||0)+(b?.gold||0)};}
 if(!Array.isArray(s.cleared))s.cleared=[];
 s.cleared=s.cleared.filter(n=>Number.isInteger(n)&&n>=0&&n<3);

 for(const [key,v] of Object.entries(s.mastery))s.mastery[key]=[0,1,2].map(i=>Math.max(0,Math.min(100,Number(v?.[i])||0)));
 for(const [key,v] of Object.entries(s.answers))s.answers[key]=Math.max(0,Math.min(2,Number(v)||0));
 for(const [key,v] of Object.entries(s.loadouts))s.loadouts[key]=Array.isArray(v)?v.slice(0,4).map(x=>typeof x==='string'?x:null):[];
 for(const [key,v] of Object.entries(s.equipment))s.equipment[key]={weapon:Math.max(0,Math.min(3,Math.floor(Number(v?.weapon)||0))),armor:Math.max(0,Math.min(3,Math.floor(Number(v?.armor)||0)))};

 /* v7 gear: a v7 save's record is cleaned (unknown items dropped, starters kept); an older save's smith tiers become items */
 s.gear=from>=7?cleanGear(value.gear):fromEquipment(s.equipment,cleanGear(value.gear));

 for(const [k,v]of Object.entries(s.settings.bindings))if(typeof v!=='string'||v.length>16)s.settings.bindings[k]=fresh().settings.bindings[k];

 // A huge imported level would slow the display loops; lessons keep unknown topic ids so nothing is thrown away.
 s.level=Math.max(1,Math.min(999,Math.floor(s.level)));
 const n=(v,a,b)=>Math.max(a,Math.min(b,Math.floor(Number(v)||0)))
/* Elementary points are a share of their grade's 25, so they are not whole numbers: a grade of
   thirteen topics is 25/13 each. Flooring them would leave every grade short, and rounding them
   would stop a finished grade adding up to exactly 25, so they are kept as they are. */
const frac=(v,a,b)=>Math.max(a,Math.min(b,Number(v)||0));
 /* One tier's record: {done,best:{time,score},plays,stars}. A cleared record always has 1-3 stars: a v5 save's are worked
    out once from its best time against that level's par (no recorded time, e.g. a migrated contract: 1 star). */
 const tierRec=(id,l,k)=>{const t=Number(l.best?.time),time=Number.isFinite(t)&&t>0?Math.round(t*10)/10:null,done=l.done===true,lv=levelById(id),star=lv?.kind==='level'&&!lv.hidden;
  const stars=!done||!star?0:from>=6&&Number(l.stars)>=1?n(l.stars,1,3):time!=null?starsFor(time,levelParFor(lv,k)):1;
  const grade=GRADE_KEYS.includes(l.best?.grade)?l.best.grade:null;
  /* improve20-r8a-nov1 #4: best.tip (additive) is the part the best grade's run should improve next, for the world-map card */const tip=grade&&['explore','skill','speed'].includes(l.best?.tip)?l.best.tip:null;
  return {done,best:{time,score:n(l.best?.score,0,1e9),...(grade?{grade}:{}),...(tip?{tip}:{})},plays:n(l.plays,0,1e6),...(star&&done?{stars}:{}),/* improve27-r27a-nov6 #2: the Legendary boss signature has been seen (scenes/legend-moves.js) */...(k==='legendary'&&l.seenMove===true?{seenMove:true}:{})};};
 for(const [id,l] of Object.entries(s.lessons)){if(!l||typeof l!=='object'||Array.isArray(l)){delete s.lessons[id];continue;}/* v2:edu `reached` (additive): the furthest step ever shown; an older save starts it at its cursor. */const reached=Math.max(n(l.reached,0,1e6),n(l.at,0,1e6));s.lessons[id]={at:n(l.at,0,1e6),...(reached>0?{reached}:{}),done:l.done===true,...(Array.isArray(l.tried)?{tried:[...new Set(l.tried.filter(x=>typeof x==='string').map(latestId))]}:{}),quiz:n(l.quiz,0,99),test:n(l.test,0,99),pts:frac(l.pts,0,100),...(l.first===true?{first:true}:{}),...(l.sat===true?{sat:true}:{}),/* improve20-r15a-nov3 #1: the first topic's summed quiz pass (lessons.js recordQuiz): distinct right quiz ids, the latched pass, missed quizzes in a row */...(Array.isArray(l.qright)?(q=>q.length?{qright:q}:{})([...new Set(l.qright.filter(x=>typeof x==='string').map(latestId))].slice(0,10)):{}),...(l.qsum===true?{qsum:true}:{}),/* improve20-r20k-nov4 #4: the half's break came on this topic (main.js halfBreak) */...(l.half===true?{half:true}:{}),/* improve20-r17a-nov3 #1: the first topic's first-try Try-it rights (lessons.js recordTryRight) */...(Array.isArray(l.tright)?(q=>q.length?{tright:q}:{})([...new Set(l.tright.filter(x=>typeof x==='string').map(latestId))].slice(0,20)):{}),...(n(l.qmiss,0,99)>0?{qmiss:n(l.qmiss,0,99)}:{}),/* improve23-r23t-nov4 #1: the first topic's summed test, distinct right test ids (lessons.js finishTest) */...(Array.isArray(l.testright)?(q=>q.length?{testright:q}:{})([...new Set(l.testright.filter(x=>typeof x==='string').map(latestId))].slice(0,20)):{})/* improve20-f-nov1 #9: the quiz was sat (any score, even 0), so the first fight is offered (game/next-step.js firstQuizDue) *//* owner 29 Oct: the first topic's lower practice count (lessons.js settleFirst) */,miss:Array.isArray(l.miss)?l.miss.filter(x=>typeof x==='string').map(latestId).slice(0,10):[]};}
 /* follow6-oct29: a `first` on a topic that is not mastered is honoured only while no topic is mastered yet (lessons.js firstTopic); a save from before keeps it on its mastered topic(s) only */
 if(Object.values(s.lessons).some(l=>l.pts>0))for(const l of Object.values(s.lessons))if(l.first&&!(l.pts>0))delete l.first;

 // A placement is a grade a child has already shown they are past, so it is only ever read back,
 // never inferred for an older save: everyone who played before starts where they left off.
 if(from>=4&&value.placement&&typeof value.placement==='object'&&!Array.isArray(value.placement))s.placement=Object.fromEntries(Object.entries(value.placement).filter(([,g])=>Number.isInteger(g)&&g>0));

 // v5 levels: {[id]:{done,best:{time,score},plays}}. A save from before levels existed keeps the ground its
 // contracts won: each cleared contract marks its stretch of Elderwood done, and every stretch before it
 // (the contracts were one road, so clearing the third means the first two were walked).
 if(from>=5&&value.levels&&typeof value.levels==='object'&&!Array.isArray(value.levels)){
  for(const [id,l] of Object.entries(value.levels)){if(!l||typeof l!=='object'||Array.isArray(l)||typeof id!=='string'||id.length>40)continue;
   s.levels[id]=tierRec(id,l,'normal');
   /* v6 tiers: Heroic and Legendary records, same shape; anything else under tiers is dropped */
   if(from>=6&&l.tiers&&typeof l.tiers==='object'&&!Array.isArray(l.tiers)){const tiers={};for(const k of ['heroic','legendary'])if(l.tiers[k]&&typeof l.tiers[k]==='object'&&!Array.isArray(l.tiers[k]))tiers[k]=tierRec(id,l.tiers[k],k);if(Object.keys(tiers).length)s.levels[id].tiers=tiers;}
   if(Array.isArray(l.secrets))s.levels[id].secrets=[...new Set(l.secrets.filter(x=>typeof x==='string'&&x.length<=40))].slice(0,200);}}
 else if(from<5){const far=Math.max(-1,...s.cleared);for(let c=0;c<=far;c++)for(const id of CONTRACT_LEVELS[c])s.levels[id]={done:true,best:{time:null,score:0},plays:0,stars:1};}
 /* v6 star gates never close ground a save had reached before them: a gated pad whose road was already open stays open.
    Later saves keep the list as written (unknown ids dropped). */
 if(from>=6&&Array.isArray(value.starPass))s.starPass=[...new Set(value.starPass.filter(id=>typeof id==='string'&&starGate(levelById(id))))];
 else if(from<6)s.starPass=LEVELS.filter(l=>starGate(l)&&l.requires.some(r=>levelDone(s,r))).map(l=>l.id);
 /* improve20-r12a-nov2: power gates (game/levels.js powerGate) a save already passed (additive in v9). As starPass did for the star gates, a
    save from before the field keeps every gated pad it had already reached (its road walked), so the gates never shut ground a save stood
    at; a new save (fresh() writes []) meets them. Pads won, or with a pad after them won, stay open from the levels alone (powerPassed). */
 {const kept=Array.isArray(value.powerPass)?value.powerPass.filter(id=>typeof id==='string'&&powerGate(levelById(id))):[],reached=from<9||!Array.isArray(value.powerPass)?LEVELS.filter(l=>powerGate(l)&&l.requires.some(r=>levelDone(s,r))).map(l=>l.id):[];s.powerPass=[...new Set([...kept,...reached])];}
 // Kind-failure settings (8 Oct): Easy unless Heroic was chosen; Hero's Resolve on unless switched off.
 if(!['easy','heroic'].includes(s.settings.difficulty))s.settings.difficulty='easy';s.settings.resolve=s.settings.resolve!==false;/* ambience-nov2: the ambient beds, on unless switched off (additive, v9) */s.settings.ambience=s.settings.ambience!==false;/* improve20-j-nov1 #4: the free potion was explained once (additive, v9) */s.settings.freePotionSeen=s.settings.freePotionSeen===true;/* improve20-r12a-nov2 #5: the placement re-offer was shown once (additive, v9) */s.settings.placeReoffer=s.settings.placeReoffer===true;/* improve20-r11c-nov2 #1: the full-screen chapter-clear cards a save has seen (ui/chapter-clear.js), known chapter ids only (additive, v9) */s.settings.chapterCards=Array.isArray(s.settings.chapterCards)?[...new Set(s.settings.chapterCards.filter(x=>typeof x==='string'&&CHAPTERS.some(c=>c.id===x)))]:[];/* improve20-r9d-nov1 #4: the one "Make fights easier?" answer (additive, v9) */if(!['taken','declined'].includes(s.settings.easierOffer))delete s.settings.easierOffer;
 for(const l of Object.values(s.levels))if(l.resolve!==undefined)l.resolve=n(l.resolve,0,99);
 if(value.levels)for(const [id,l] of Object.entries(value.levels))if(s.levels[id]&&Number.isFinite(+l?.resolve))s.levels[id].resolve=n(l.resolve,0,99);
 // The prologue arrived on 8 Oct: anyone who had already played on (a cleared contract or level, or a lesson)
 // does not have to sit it before the next-step marker moves on.
 if(!s.levels.prologue&&(s.cleared.length||Object.values(s.levels).some(l=>l.done)||Object.values(s.lessons).some(l=>l.done)))s.levels.prologue={done:true,best:{time:null,score:0},plays:0};
 // Additive within v5 (8 Oct), so no version bump: bestiary[enemyKey]={seen,defeated} counts, and
 // levels[id].secrets, the secret ids already paid. Saves without them load with empty defaults.
 if(value.bestiary&&typeof value.bestiary==='object'&&!Array.isArray(value.bestiary))for(const [k,b] of Object.entries(value.bestiary)){if(k.length>40||!b||typeof b!=='object'||Array.isArray(b))continue;s.bestiary[k]={seen:n(b.seen,0,1e9),defeated:n(b.defeated,0,1e9)};if(s.bestiary[k].defeated>s.bestiary[k].seen)s.bestiary[k].seen=s.bestiary[k].defeated;}

 // Retroactive XP for study done before XP existed: once, at migration, 4 XP per recorded correct answer.
 if(from<3)gainXP(s,XP.correct*Object.values(s.answers).reduce((t,c)=>t+c,0));

 // Old saves keep every ability the mastery-only rule unlocked; every load also records anything the current rule unlocks, so nothing ever re-locks.
 const gated=Object.values(ABILITIES).flat().filter(a=>a.gate>0);
 s.kept=from<3?gated.filter(a=>mastery(s,a.subject)+1e-8>=(a.legacyGate??a.gate)).map(a=>a.id):Array.isArray(value.kept)?[...new Set(value.kept.filter(x=>typeof x==='string'))]:[];
 for(const a of gated)if(!s.kept.includes(a.id)&&unlocked(s,a))s.kept.push(a.id);
 /* v2:gamedesign -- the re-curve lowered every gate but raised the hero level of the last four slots. A save from before it keeps,
    once, every ability the old ladder unlocked (the bible's gate, kept as legacyGate, and the old level formula), even if an
    unlock was never recorded in kept; a save normalised since carries ladder 2 and is judged by the new ladder only. */
 /* oct25 R3: the pass is for genuinely old saves only. Every build since the re-curve (8 Oct) writes ladder, and v6 (14 Oct) came after
    it, so a v6+ save without ladder was hand-edited. A save is judged old only when it has no ladder, claims v5 or older AND carries none
    of the marks v6+ builds write (a level's stars, Heroic/Legendary tiers or run grade, a star-gate pass list): deleting ladder, or also
    lowering the version on a newer save, brings back nothing. Unlocks already recorded in kept stay either way. */
 const later=Object.values(obj(value.levels)?value.levels:{}).some(l=>obj(l)&&(l.stars!==undefined||l.tiers!==undefined||obj(l.best)&&l.best.grade!==undefined))||Array.isArray(value.starPass)&&value.starPass.length>0;
 if(!(Number(value.ladder)>=2)&&from<6&&!later)for(const a of gated)if(!s.kept.includes(a.id)&&unlocked(s,{...a,gate:a.legacyGate??a.gate,lvl:undefined}))s.kept.push(a.id);
 /* ownerbal-oct29: a save from before ladder 3 keeps whatever the moved rungs opened under ladder 2 (and so does a pre-re-curve save, which the pass above already judged by the bible's gates). */
 if(!(Number(value.ladder)>=LADDER))for(const a of gated)if(LADDER2_RUNGS[a.id]&&!s.kept.includes(a.id)&&unlocked(s,{...a,...LADDER2_RUNGS[a.id]}))s.kept.push(a.id);
 s.ladder=LADDER;

 /* v2:hub -- additive v5 fields with defaults: boons packed for the next level (game/shops.js) and the
    hub's story beats already seen (game/npcs.js). Neither touches mastery, XP or abilities. */
 if(value.boons&&typeof value.boons==='object'&&!Array.isArray(value.boons))s.boons={pending:Array.isArray(value.boons.pending)?value.boons.pending.filter(x=>typeof x==='string').slice(0,8):[],bounty:typeof value.boons.bounty==='string'?value.boons.bounty:null};
 if(value.hub&&typeof value.hub==='object'&&Array.isArray(value.hub.seen))s.hub={seen:[...new Set(value.hub.seen.filter(x=>typeof x==='string'))].slice(0,64)};
 /* v2:edu Additive: the starter sleeps until the first lesson on a new save; older saves with any progress load awake (academics/awakening.js). */
 s.awakened=awakenedOnLoad(value,s);
 /* v8 run layer: Delver record, crafting XP and Adventurer tasks; an older save is back-filled once (see VERSION) */
 {const D=obj(value.delve)?value.delve:{},d=emptyDelve();
  if(from>=8){d.xp=n(D.xp,0,1e9);d.runs=n(D.runs,0,1e9);
   if(obj(D.meters))for(const [id,m] of Object.entries(D.meters))if(levelById(id)&&obj(m))d.meters[id]={target:typeof m.target==='string'&&m.target.length<=40?m.target:null,pts:n(m.pts,0,1e9)};
   if(obj(D.classXP))for(const h of HEROES)if(D.classXP[h]!=null)d.classXP[h]=n(D.classXP[h],0,1e9);
   if(obj(D.seals))for(const id of Object.keys(D.seals))if(levelById(id))d.seals[id]=1;}
  else d.xp=backfillDelve(s.levels,levelById);
  s.delve=d;
  s.skills={crafting:from>=8?n(value.skills?.crafting,0,1e9):Object.entries(s.gear.owned||{}).reduce((t,[id,o])=>t+(ITEM[id]&&!ITEM[id].scholar?5*(o.stars|0)*((o.stars|0)+1)/2:0),0)};
  s.adventurer={tasks:{}};if(from>=8&&obj(value.adventurer?.tasks))for(const id of Object.keys(value.adventurer.tasks))if(TASK[id])s.adventurer.tasks[id]=1;}
 /* Scholar's Regalia pieces a save's mastered topics have already earned (reads lessons, writes only s.gear) */
 syncScholar(s);
 /* v9 companions: hired crew, villager quests and town news; an older save starts them empty */
 if(from>=9){s.party=cleanParty(value.party);s.quests=cleanQuests(value.quests);s.town={seen:Array.isArray(value.town?.seen)?[...new Set(value.town.seen.filter(x=>typeof x==='string'&&x.length<=40))].slice(0,64):[]};}

 /* fast travel (25 Oct, game/fasttravel.js): additive within v9, so no version bump; a save without it counts every place it clearly reached */
 s.travel=cleanTravel(value.travel,s);

 /* daily goals (herocard-oct27, game/daily.js): additive within v9; a save without them starts empty, and nothing counts days */
 s.daily=cleanDaily(value.daily);
 /* the Rift of the Week (improve20-r-oct31, game/rift.js): additive within v9; a missing or broken record starts clean, and no field counts missed weeks */
 s.rift=cleanRift(value.rift);
 /* improve20-r9a-nov1: the Hall of Echoes (game/hall.js): cleared rungs and keepsakes; an older save starts with none */s.hall=cleanHall(value.hall);

 /* titles (endfollow-oct29, game/titles.js): cosmetic keepsakes, additive within v9; unknown ids drop, and a save that already
    won what a title asks (e.g. the last level, from before titles existed) has it back, since it was earned by play */
 /* exploit7-oct29: a title the save does not meet is dropped (a hand-edited or hand-made save code carrying "thorn-hero" with v7 unbeaten);
    every rule reads a record that never goes back (a won level), so an earned title can never be lost this way */
 /* improve20-r20j-nov4 #2 (game/ability-seals.js): the seals broken and the caches paid; additive within v9, unknown ids drop, an older save starts with none (read by the seal titles below) */
 s.abilitySeals=cleanSeals(value.abilitySeals);
 s.titles=cleanTitles(value.titles).filter(id=>TITLES[id].earned(s));earnTitles(s);/* improve25-r25f-nov5 #3: a chapter's Hall diary already full has its bookcase at Home (given once, never taken) */grantDiaryKeepsakes(s);/* improve25-r25f-nov5 #4: the next power's glow count (game/hero-glow.js), additive within v9 */{const g=cleanGlow(value.glow);if(g)s.glow=g;else delete s.glow;}/* improve25-r25t-nov5 #2: study looks (game/study-looks.js), additive within v9: what is worn (an earned look only) and the looks already told; an older save starts with none told, so town says them in one line */s.studyLooks=cleanStudyLooks(value.studyLooks,s);
 /* improve20-r7a-nov1 #8 (game/prizes.js): the daily keepsakes (titles, trails, hero-card backdrops) and what is worn; additive within v9, a save
    without it starts empty; a worn title may be an earned one (s.titles) or 'none'. Cosmetic only. s.dayHello: the last day the "New day!" banner
    showed (game/tomorrow.js newDayDue), a date or absent */
 s.prizes=cleanPrizes(value.prizes,id=>!!TITLES[id]&&s.titles.includes(id));/* improve20-r8a-nov1 #7: a chapter or the ending already won has its keepsake (back-filled once, never taken) */grantWinKeepsakes(s);if(typeof value.dayHello==='string'&&/^\d{4}-\d\d-\d\d$/.test(value.dayHello))s.dayHello=value.dayHello;else delete s.dayHello;

 /* kid-appeal help (kidfix-a-oct31, game/hints.js): additive within v9; a save without it starts empty, and the school grade is a hint only */
 s.hints=cleanHints(value.hints);s.schoolGrade=cleanSchoolGrade(value.schoolGrade);s.goalTurn=value.goalTurn==='learn'||value.goalTurn==='fight'||/* improve20-r10a-nov2 #5: a mastery with no new ability */value.goalTurn==='go'?value.goalTurn:null;/* improve20-r12c-nov2 #1: the last level won and its tier, for the returning player's recap (game/recap.js; additive, a known level only) */if(value.lastClear&&levelById(value.lastClear.id)?.kind==='level')s.lastClear={id:value.lastClear.id,tier:['normal','heroic','legendary'].includes(value.lastClear.tier)?value.lastClear.tier:'normal'};/* improve20-r8a-nov1 #3: wins since e5 (additive) */s.questNudge=Math.max(0,Math.min(1e6,Math.floor(+value.questNudge||0)));/* improve20-r20n-nov4 #2 (additive): the quest step the goal leads with once, after a quest is accepted (game/next-step.js questLeadStep) */s.questLead=typeof value.questLead==='string'&&/^quest-[a-z-]+-\d+$/.test(value.questLead)?value.questLead:null;/* improve20-r15b-nov3 #1/#7 (additive): a wake's clears still held on 'fight' (0-2, only while goalTurn is 'fight'), and level wins counted */s.fightHold=s.goalTurn==='fight'?Math.max(0,Math.min(2,Math.floor(+value.fightHold||0))):0;s.winTally=Math.max(0,Math.min(1e6,Math.floor(+value.winTally||0)));/* improve23-r23t-nov4 #7: the star chase in a row (main.js starChase): level id, tier, won replays short of 3 stars, abilities woken then */{const c=value.starTry;if(c&&typeof c==='object'&&typeof c.id==='string'&&typeof c.tier==='string')s.starTry={id:c.id.slice(0,40),tier:c.tier.slice(0,20),n:Math.max(0,Math.min(99,Math.floor(+c.n||0))),w:Math.max(0,Math.min(99,Math.floor(+c.w||0)))};}
 /* libraryfirst-nov1 (academics/starter-lesson.js): additive within v9. Only a stored 'library' keeps the Library-first opening; an older save loads
    without it and plays as before. starterLesson is a topic id (kept like lesson records keep unknown topic ids) or null */
 s.opening=value.opening==='library'?'library':null;/* improve20-r8c-nov1 #3: the one-level Echo of the next power (game/echo.js); never read by unlocked() */s.echo=cleanEcho(value.echo);s.starterLesson=typeof value.starterLesson==='string'&&value.starterLesson.length<=120?value.starterLesson:null;
 /* kidfix-b-oct31 (game/runes.js, game/hints.js): Ability Runes are additive within v9. A save without s.runes has every rune
    point it earned (one per mastered topic) ready to place; bad or over-spent placements are clamped. A save from before the
    first-cast moment lists every ability it already owns, so only an ability unlocked from now on gets the moment. */
 s.runes=cleanRunes(value.runes,s);
 if(!Array.isArray(value.hints?.firstCast))s.hints.firstCast=Object.values(ABILITIES).flat().filter(a=>owns(s,a)).map(a=>a.id);
 /* improve20-c-oct31 (game/pets.js): earned pets are additive within v9. A save without s.pets was written before pets had to be earned,
    so it keeps all five (decided 31 Oct 2026 under the owner's delegation); a met source is latched, and a pet not owned falls back to the cat */
 s.pets=cleanPets(value.pets,value.pets===undefined);syncPets(s);if(!petOwned(s,s.pet))s.pet=FREE_PET;
 syncTasks(s);
 s.version=VERSION;
 return s;
}

/* lightload2-oct27: whether any stored save (every key load() can fall back to) holds ids to rename; unreadable text counts as yes */
export function storedNeedsCorrections(){if(fixesIn)return false;for(const key of [KEY,V8_KEY,V7_KEY,V6_KEY,V5_KEY,V4_KEY,PREVIOUS_KEY,OLD_KEY]){let raw;try{raw=localStorage.getItem(key);}catch{return false;}
 if(raw==null)continue;try{if(holdsIds(JSON.parse(raw)))return true;}catch{return true;}}return false;}
export function load(){
 // A value that fails to load is copied to BROKEN_KEY first, so a bug can never silently wipe progress.
 // A v2 build still wrote the v1 key, so there is no v2 key to read; v2 payloads arrive through OLD_KEY.
 for(const key of [KEY,V8_KEY,V7_KEY,V6_KEY,V5_KEY,V4_KEY,PREVIOUS_KEY,OLD_KEY]){
  let raw;try{raw=localStorage.getItem(key);}catch{return fresh();}
  if(raw==null)continue;
  // Quarantined per source key, so a broken v6 save is never overwritten by a broken v1 found after it.
  try{return normalize(JSON.parse(raw));}catch{try{localStorage.setItem(`${BROKEN_KEY}.${key}`,raw);}catch{}}}
 return fresh();}

/* oct25 R3: the text an exported backup holds; it always names the current version and ladder, so an import is never mistaken for a pre-re-curve save. */
export function exportJSON(s){return JSON.stringify({...s,version:VERSION,ladder:LADDER},null,2);}
/* accounts-nov1: one listener (ui/account-sync.js) hears every successful save, to upload it to the cloud when a grown-up is signed in. */
let saveHook=null;export const setSaveHook=fn=>{saveHook=typeof fn==='function'?fn:null;};
export function save(s){try{localStorage.setItem(KEY,JSON.stringify(s));}catch{return false;}try{saveHook?.(s);}catch{}return true;}
