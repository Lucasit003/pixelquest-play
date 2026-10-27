/* Adventurer skills and the Adventurer Level (SKYBLOCK_DUNGEONS_PROGRESSION.md section 5.9): PixelQuest's SkyBlock Level.
   Five skills, 0-25 each (XP to the next = 30 + 10 x L), roll up into one account level with a task list that always
   names a next goal (game/next-step.js reads nextTask). Pure: reads the save; syncTasks is the only writer (s.adventurer).
   Most skill XP is read straight from what the save already records, so an older save sees its history count:
   - Combat: every foe defeated (bosses x20), from the Bestiary counts.
   - Delving: Delver XP / 5 (game/delve.js).
   - Scholarship: milestones only -- a lesson finished 5, a topic mastered 25, a Scholar's Seal broken 3. It READS lessons
     and never writes mastery; answering many questions does not move it (no grind, no timer, no streak, no decay).
   - Crafting: s.skills.crafting, paid by the smith (game/gear.js: craft 10, star n 5n, Finish 5, salvage 1).
   - Collecting: first finds -- secret spots 5, Bestiary pages 3, gear pieces 5, full sets 25, bosses beaten 15, furniture 3.
   The Adventurer Level is 100 XP a level: 10 per skill level, plus each finished task's XP. No stats come from any of this:
   identity (name colour every 10 levels, an emblem) and a map of what to do next. */
import {masteredTopics,SET_PIECES,ITEM,SETS} from './gear.js';
import {LEVELS,levelById,levelDone,tierDone,tierRecord,bestiaryPages,CHAPTERS} from './levels.js';
import {gradeRank} from './grade.js';
import {delverLevel} from './delve.js';
export const SKILLS=['combat','delving','scholarship','crafting','collecting'];
export const SKILL_NAMES={combat:'Combat',delving:'Delving',scholarship:'Scholarship',crafting:'Crafting',collecting:'Collecting'};
export const SKILL_TEXT={combat:'Defeat foes. Bosses count for more.',delving:'Finish level runs. Better grades pay more.',scholarship:'Finish lessons and master topics.',crafting:'Craft, star and finish gear at the smith.',collecting:'Find secrets, fill the Bestiary, own gear and sets.'};
export const SKILL_MAX=25,ADV_STEP=100;
export const skillStep=L=>30+10*L;
export function skillLevelFrom(xp){let L=0,left=Math.max(0,Math.floor(+xp||0));while(L<SKILL_MAX&&left>=skillStep(L)){left-=skillStep(L);L++;}return {level:L,into:L>=SKILL_MAX?0:left,need:L>=SKILL_MAX?0:skillStep(L),total:Math.floor(+xp||0)};}
const bossKeys=()=>new Set(LEVELS.filter(l=>l.boss).flatMap(l=>[l.boss,l.duo].filter(Boolean)));
export const secretsFound=s=>Object.values(s?.levels||{}).reduce((t,l)=>t+(Array.isArray(l?.secrets)?l.secrets.length:0),0);
export const pagesFilled=s=>bestiaryPages().filter(p=>(s?.bestiary?.[p.key]?.defeated|0)>0).length;
const gearPieces=s=>Object.keys(s?.gear?.owned||{}).filter(id=>ITEM[id]&&(ITEM[id].set||ITEM[id].trick)).length;
const fullSets=s=>Object.keys(SETS).filter(k=>SET_PIECES[k].length&&SET_PIECES[k].every(id=>s?.gear?.owned?.[id])).length;
/* oct24-progress (playtest r3 F15): the bosses of levels won on any tier. It used to read the Bestiary too, so a Run Draft
   mini-boss (e3's Minotaur) counted as a boss beaten, even in a run that was lost. */
const bossesBeaten=s=>new Set(LEVELS.filter(l=>l.boss&&levelDone(s,l.id)).flatMap(l=>[l.boss,l.duo].filter(Boolean))).size;
const furniture=s=>Object.keys(s?.house?.owned||{}).length;
/* Each skill's XP. */
export function skillXP(s){const B=bossKeys(),stored=s?.skills||{};
 const combat=Object.entries(s?.bestiary||{}).reduce((t,[k,v])=>t+(v?.defeated|0)*(B.has(k)?20:1),0);
 const delving=Math.floor((s?.delve?.xp|0)/5);
 const lessons=Object.values(s?.lessons||{}).filter(l=>l?.done).length;
 const scholarship=lessons*5+masteredTopics(s)*25+Object.keys(s?.delve?.seals||{}).length*3;
 const crafting=Math.max(0,stored.crafting|0);
 const collecting=secretsFound(s)*5+pagesFilled(s)*3+gearPieces(s)*5+fullSets(s)*25+bossesBeaten(s)*15+furniture(s)*3;
 return {combat,delving,scholarship,crafting,collecting};}
export const skillLevels=s=>{const x=skillXP(s);return Object.fromEntries(SKILLS.map(k=>[k,skillLevelFrom(x[k])]));};
/* ---- Adventurer tasks: grouped like SkyBlock's Leveling menu; each is a check on the save ------------------------ */
const bestGrade=(s,id,k)=>tierRecord(s,id,k)?.best?.grade||null;
const anyGrade=(s,min,pred=()=>true)=>LEVELS.some(l=>l.kind==='level'&&!l.hidden&&pred(l)&&['normal','heroic','legendary'].some(k=>gradeRank(bestGrade(s,l.id,k))>=gradeRank(min)));
const chapterOf=id=>CHAPTERS.find(c=>c.id===id);
const story=(id,name)=>({id:`story-${id}`,group:'Story',xp:30,text:`Beat ${name}.`,pad:id,done:s=>tierDone(s,id,'normal')});
export const TASKS=[
 story('e1','Goblin Camp'),story('e4','Minotaur Hollow'),story('e8','Thorn Keep'),story('m7','Moltar’s throne'),story('v7','the Abyss'),
 {id:'delve-grade-b',group:'Delving',xp:10,text:'Get a B grade or better on any level.',done:s=>anyGrade(s,'B')},
 {id:'delve-grade-a',group:'Delving',xp:20,text:'Get an A grade or better on any level.',done:s=>anyGrade(s,'A')},
 {id:'delve-grade-s',group:'Delving',xp:30,text:'Get an S grade on any level.',done:s=>anyGrade(s,'S')},
 {id:'delve-grade-splus',group:'Delving',xp:50,text:'Get an S+ grade on any level.',done:s=>anyGrade(s,'S+')},
 {id:'delve-heroic-e8',group:'Delving',xp:30,text:'Beat Thorn Keep on Heroic.',pad:'e8',done:s=>tierDone(s,'e8','heroic')},
 {id:'delve-s-ember',group:'Delving',xp:30,text:'Get S on any Emberkeep level.',done:s=>anyGrade(s,'S',l=>l.chapter==='emberkeep')},
 {id:'delve-legendary',group:'Delving',xp:40,text:'Beat any level on Legendary.',done:s=>LEVELS.some(l=>l.kind==='level'&&!l.hidden&&tierDone(s,l.id,'legendary'))},
 {id:'delve-level-10',group:'Delving',xp:30,text:'Reach Delver level 10.',done:s=>delverLevel(s).level>=10},
 {id:'learn-lesson',group:'Learning',xp:10,text:'Finish a lesson in the Library.',done:s=>Object.values(s?.lessons||{}).some(l=>l?.done)},
 {id:'learn-master-1',group:'Learning',xp:20,text:'Master a topic.',done:s=>masteredTopics(s)>=1},
 {id:'learn-master-3',group:'Learning',xp:30,text:'Master 3 topics.',done:s=>masteredTopics(s)>=3},
 {id:'learn-master-10',group:'Learning',xp:50,text:'Master 10 topics.',done:s=>masteredTopics(s)>=10},
 {id:'craft-first',group:'Crafting',xp:20,text:'Craft a piece at the smith.',done:s=>Object.keys(s?.gear?.owned||{}).some(id=>ITEM[id]?.set&&!ITEM[id]?.scholar&&!(ITEM[id]?.shop>0))||(s?.skills?.crafting|0)>=10},
 {id:'craft-star3',group:'Crafting',xp:30,text:'Star an item to ★3.',done:s=>Object.values(s?.gear?.owned||{}).some(o=>(o?.stars|0)>=3)},
 {id:'craft-finish',group:'Crafting',xp:20,text:'Put a Finish on an item.',done:s=>Object.values(s?.gear?.owned||{}).some(o=>o?.finish)},
 {id:'collect-secrets-5',group:'Collecting',xp:20,text:'Find 5 secret spots.',done:s=>secretsFound(s)>=5},
 {id:'collect-secrets-20',group:'Collecting',xp:40,text:'Find 20 secret spots.',done:s=>secretsFound(s)>=20},
 {id:'collect-pages-10',group:'Collecting',xp:20,text:'Fill 10 Bestiary pages.',done:s=>pagesFilled(s)>=10},
 {id:'collect-set',group:'Collecting',xp:40,text:'Own a full armour set.',done:s=>fullSets(s)>=1},
 {id:'collect-bosses-5',group:'Collecting',xp:30,text:'Beat 5 different bosses.',done:s=>bossesBeaten(s)>=5}];
export const TASK=Object.fromEntries(TASKS.map(t=>[t.id,t]));
/* Records every task the save now meets (a task once done stays done). Returns the ids newly done. */
export function syncTasks(s){const a=s.adventurer??={tasks:{}};a.tasks??={};const out=[];for(const t of TASKS)if(!a.tasks[t.id]&&t.done(s)){a.tasks[t.id]=1;out.push(t.id);}return out;}
export const taskDone=(s,id)=>!!s?.adventurer?.tasks?.[id]||!!TASK[id]?.done(s);
/* The next task to suggest: the first not done in list order. */
export const nextTask=s=>TASKS.find(t=>!taskDone(s,t.id))||null;
/* Adventurer XP and level. */
export function adventurerXP(s){const lv=skillLevels(s);return SKILLS.reduce((t,k)=>t+lv[k].level*10,0)+TASKS.filter(t=>s?.adventurer?.tasks?.[t.id]).reduce((t,x)=>t+x.xp,0);}
export function adventurerLevel(s){const xp=adventurerXP(s);return {level:Math.floor(xp/ADV_STEP),into:xp%ADV_STEP,need:ADV_STEP,total:xp};}
/* The name colour every 10 levels (SkyBlock's prefix colours): grey, green, blue, purple, gold, then rainbow at 60. */
export const NAME_COLORS=['#b8b2a7','#7fd36b','#6fb3ff','#c38bff','#ffb84a','#ff6fb1'];
export const nameColor=L=>NAME_COLORS[Math.min(NAME_COLORS.length-1,Math.floor(Math.max(0,L)/10))];
export {levelById};
