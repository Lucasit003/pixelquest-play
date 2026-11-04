/* improve20-r16a-nov3 #1/#2 (audit12 findings 1, 2 and 7): ONE lead per result card. The win and defeat cards took their NEXT GOAL line from
   nextStep/resultGoal and their red button from somewhere else (winLead, the two-loss power, the chapter's first stop), so the m7 card said
   "Next adventure: Drowned Shrine" over a red "Go to the Library", and the e3 Story card said "Try Orc Warcamp again" under a red Library
   button. Each card now asks this file once and draws both the line and the primary button from the answer, so they cannot disagree.
   - A power-gated pad is never promised: the line names the gate and the honest count from game/power-gate.js ("The Veilmoor needs
     Sundering Blow: 4 Coding topics"), the Library (on that subject) is the primary, and a "While you learn" line names one thing to
     play meanwhile (this week's Rift while unplayed, else the best Heroic replay for stars), picked deterministically.
   - The second loss on Story leads with the retry and its potions; the Library is a secondary with its honest size.
   Pure and read-only: it never opens a gate, unlocks, masters or writes. -> {text, primary:{kind,label,subject}, also, library} */
import {LEVELS,CHAPTERS,levelById,levelOpen,levelFogged,tierOpen,tierDone,starsOf,awakeCount,powerShort,tiered} from './levels.js';
import {hallOpen,HALL_CHAPTERS,rungOpen,rungCleared} from './hall.js';
import {questLive,questState,currentStep} from './quests.js';
import {adviceLevel,TIERS} from './tiers.js';
import {SUBJECTS} from './data.js';
import {gateInfo,powerWants,powerStep,leadSubject} from './power-gate.js';
import {nextStep,resultGoal,retryStep,riftUnplayed,STEP_WORDS} from './next-step.js';
import {gradeRank} from './grade.js';
import {nextPowerLine} from '../academics/starter-lesson.js';
const sname=id=>SUBJECTS[id]?.name||id;
const topicsWord=n=>`topic${n===1?'':'s'}`;
/* the honest size of a power: "Frost Nova: 3 Science topics" (and the hero level when it is still ahead) */
export function powerSize(save,a){if(!a)return '';const w=powerWants(save,a);if(!w)return a.name;const lv=w.lvlOk?'':` (hero level ${w.lvl})`;
 if(!w.reachable)return `${a.name}: keep training ${w.subject}${lv}`;if(w.topics>0)return `${a.name}: ${w.topics} ${w.subject} ${topicsWord(w.topics)}${lv}`;return w.lvlOk?`${a.name}: ready`:`${a.name}: reach hero level ${w.lvl}`;}
/* a held pad in words. place: what the line calls it ("The Veilmoor" on a chapter clear, else the pad's own name). -> {text, a, subject, level} or null */
export function gateLead(save,id,{place=null}={}){const gi=gateInfo(save,id),g=powerShort(save,id);if(!gi?.a||!g)return null;const who=place||gi.name,have=awakeCount(save),size=powerSize(save,gi.a);
 const text=g.need-have>1?`${who} needs ${g.need} powers awake (you have ${have}). First, ${size}`:`${who} needs ${size}`;
 return {text,a:gi.a,subject:gi.step?.subject||leadSubject(save)||gi.a.subject,level:id};}
/* one thing to play while the learning goes on: this week's Rift while unplayed, else the Heroic replay that fits the hero best (its advice level
   reached first, a Heroic not yet won before a star chase, then the newest level). Deterministic: the same save gives the same pick. */
/* improve20-r18a-nov3 #7 (audit13 #18, lead: the v1 gate size stays the owner's): the line rotates BY DAY (the local date's day number, never
   random) through what is open for this save, in this order: this week's Rift (while unplayed), a Heroic replay for stars, Hall of Echoes
   Rung I (a chapter's rung I open and not cleared), Wil's quest (open or under way, its step playable now). Same save and day, same line. */
export const dayNo=(now=Date.now())=>{const d=new Date(now);return Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/864e5);};
export const WHILE_KINDS=['rift','heroic','hall','wil'];
export function whileOptions(save){const out=[],r=riftUnplayed(save);if(r){const l=levelById(r.target.id);out.push({kind:'rift',id:l?.id||null,text:`While you learn: this week's Rift (${l?.name||'a remixed level'}). Press Rift on the world map.`});}
 const h=heroicWhile(save);if(h)out.push(h);
 const ch=hallOpen(save)?HALL_CHAPTERS.find(c=>rungOpen(save,c,1)&&!rungCleared(save,c,1)):null;if(ch)out.push({kind:'hall',id:ch,text:`While you learn: Hall of Echoes Rung I (${CHAPTERS.find(c=>c.id===ch)?.name||ch}). Find the Hall on the Veilmoor map.`});
 const q='hobs-purse',st=questLive(q)?questState(save,q):'locked',step=st==='open'||st==='active'?currentStep(save,q):null;if(step&&(step.kind!=='clear'||levelOpen(save,step.level)))out.push({kind:'wil',id:q,text:`While you learn: Wil's quest. ${step.text}`});
 return out;}
export function whileLearn(save,{now=Date.now()}={}){const o=whileOptions(save);return o.length?o[((dayNo(now)%o.length)+o.length)%o.length]:null;}
function heroicWhile(save){const lv=save?.level|0,cand=LEVELS.map((l,i)=>({l,i})).filter(({l})=>l.kind==='level'&&!l.hidden&&!levelFogged(l)&&tiered(l)&&tierOpen(save,l.id,'heroic')&&starsOf(save,l.id,'heroic')<3);
 if(!cand.length)return null;cand.sort((x,y)=>((adviceLevel(x.l,'heroic')<=lv?0:1)-(adviceLevel(y.l,'heroic')<=lv?0:1))||((tierDone(save,x.l.id,'heroic')?1:0)-(tierDone(save,y.l.id,'heroic')?1:0))||y.i-x.i);
 const l=cand[0].l;return {kind:'heroic',id:l.id,text:`While you learn: replay ${l.name} on ${TIERS.heroic.label} for stars.`};}
/* the win card. learn: power-gate.js winLead(save) as main.js worked it out; heroic: ladder-guide.js heroicLead when it leads; chFirst/chName: a
   chapter clear's first stop and the new chapter's name; prologue/finale keep their own buttons (kind 'keep'). */
/* improve20-r17b-nov3 #1 (kidsim4 k6, Leo shot 11: "Try Heroic" led inside the wake hold): while the hold is up (save.fightHold>0 on goalTurn 'fight')
   and the next goal is a new pad, that pad leads ("Try your new skills at <pad>", Return to map primary); a Heroic lead is only a secondary
   button (heroic2). id: the level just won (a pad that is this level is no new ground). */
export const holdUp=(save,step,id=null)=>save?.goalTurn==='fight'&&(save.fightHold|0)>0&&step?.target?.kind==='pad'&&step.target.id!==id;
/* improve20-r17b-nov3 #6 (kidsim4 k14: mid saves never lose; Nia won m1 Heroic at B with no fall): a Heroic win at grade B or better with no
   fall adds a secondary "Try it on Legendary", when Legendary is open and not won, no learning lead applies and the hold is not up.
   legend: {tier, grade, falls} of the run. */
export const LEGEND_GRADE='B';
export function legendLead(save,id,legend,{learn=false,hold=false}={}){if(!legend||legend.tier!=='heroic'||learn||hold||(legend.falls|0)>0||gradeRank(legend.grade)<gradeRank(LEGEND_GRADE))return null;
 const l=levelById(id);if(!l||!tiered(l)||!tierOpen(save,id,'legendary')||tierDone(save,id,'legendary'))return null;return {label:`Try it on ${TIERS.legendary.label}`};}
/* improve20-r17b-nov3 #9 (kidsim4 k18: Mia, a Math starter, was sent to an English lesson with no word why): the prologue card's "Next power: X."
   says where X is learned ("Next power: Spirit Wisp, learned in English.") */
export function prologueText(save,text){const np=nextPowerLine(save),sub=np?.a&&SUBJECTS[np.a.subject]?.name;if(!sub||typeof text!=='string')return text;const head=`Next power: ${np.a.name}.`;return text.startsWith(head)?`Next power: ${np.a.name}, learned in ${sub}.${text.slice(head.length)}`:text;}
export function winCardLead(save,{learn=null,heroic=null,chFirst=null,chName='',prologue=false,finale=false,id=null,legend=null}={}){const step=nextStep(save);
 if(prologue)return {text:prologueText(save,step.text),primary:{kind:'keep'},also:''};
 if(finale)return {text:step.text,primary:{kind:'keep'},also:''};
 if(learn?.why==='gate'){const gl=gateLead(save,learn.gate,{place:chFirst&&chFirst.id===learn.gate&&chName?chName:null});if(gl)return {text:`${gl.text}.`,primary:{kind:'learn',label:learn.label,subject:learn.subject||gl.subject},also:whileLearn(save)?.text||'',gate:learn.gate};}
 if(learn?.a){const st=powerStep(save,learn.a),how=st?.topic&&STEP_WORDS[st.stage]?STEP_WORDS[st.stage](st.topic,st):'';return {text:how?`Wake ${learn.a.name}: ${how} at the Library.`:`Wake ${learn.a.name} at the Library.`,primary:{kind:'learn',label:learn.label,subject:learn.subject},also:''};}
 if(holdUp(save,step,id)){const l=levelById(step.target.id),pad=chFirst||l;return {text:chFirst?`Next adventure: ${chFirst.name}, the first stop in ${String(chName).replace(/^The /,'the ')}.`:l?`Try your new skills at ${l.name}.`:step.text,primary:pad?{kind:'pad',id:pad.id,label:`Go to ${pad.name}`}/* improve20-r18a-nov3 #4 (audit13 #7): the goal names a pad, so the red button goes there (the map, focused on it), not to town */:{kind:'map'},also:'',hold:true,heroic2:!!heroic?.lead};}
 if(heroic?.lead)return {text:heroic.card||heroic.text,primary:{kind:'heroic',label:'Try Heroic'},also:''};
 if(chFirst)return {text:`Next adventure: ${chFirst.name}, the first stop in ${String(chName).replace(/^The /,'the ')}.`,primary:{kind:'map'},also:'',legendary:legendLead(save,id,legend)};
 if(step?.target?.kind==='library')return {text:step.text,primary:{kind:'library',label:'Go to the Library',subject:step.target.subject||leadSubject(save)||null},also:''};
 return {text:step.text,primary:{kind:'map'},also:'',legendary:legendLead(save,id,legend)};}
/* the defeat card. runes: game/runes.js runeDefeatLead (a one-tap step before the retry, so the line is still the retry); story: levels.js
   storyHelp (the second loss in a row on Story); power: the two-loss next power ({a}) or null; refill: the Apothecary refill offered on the card. */
/* improve20-r17b-nov3 #2 (kidsim4 k9, Theo long shot 10: his first boss loss led with "Place 1 rune"): a first loss in a row leads with the retry and
   the rune offer is a visible secondary (runes2); from the second loss in a row (losses, ui/defeat-tip.js lossCount after this loss) the runes
   lead, as R14B measured on m1. #3 (kidsim4 k10): an optional level held by a power gate (ex1 after e3) carries the gate line on its defeat
   card too, as on its win card (gateLine; gate: power-gate.js winLead(save) when why==='gate'). */
export const RUNE_LEAD_AFTER=2;
export const sideGateText=(a,gl)=>`Wake ${a.name} to open ${gl.name}.`;
/* improve20-r18a-nov3 #1 (audit13 #1, shot 01: m1's second Story loss said "Try again with Story help" / "Try Ashen Gate again." over a red
   "Place 6 runes"): the helper gives the HEADLINE too (head; tip: ui/defeat-tip.js defeatLead, whose head was the card's own), so headline, NEXT
   GOAL and red button are one answer. When the runes lead (second loss in a row with runes waiting, Story or not) all three say it: "Get
   stronger, then try again" / "Place your runes, then try Ashen Gate again." / "Place 6 runes, then retry" (kind 'runes': rune placement,
   whose done or back restarts the same level on the same tier). The Library secondary is dropped there (one row of at most 4 buttons). */
export const RUNES_HEAD='Get stronger, then try again',STORY_HEAD='Try again with Story help',REST_HEAD='Regroup and try again';
export const runeRetryLabel=n=>`Place ${n} ${n===1?'rune':'runes'}, then retry`;
function runesOut(save,id,runes){const l=levelById(id);return {head:RUNES_HEAD,text:`Place your runes, then try ${l?.name||'it'} again.`,primary:{kind:'runes',label:runeRetryLabel(runes?.n|0)},also:'',library:null};}
export function defeatCardLead(save,{id,tier='normal',rift=false,boss=false,runes=null,story=false,power=null,refill=false,losses=RUNE_LEAD_AFTER,gate=null,tip=null}={}){const out=defeatCore(save,{id,tier,rift,boss,runes,story,power,refill,losses});
 out.head??=(out.primary.kind==='library'&&tip?.kind==='power'?tip.head:out.primary.kind==='retry'&&tip&&tip.kind!=='power'?tip.head:REST_HEAD);
 const l=levelById(id),gl=!rift&&l?.optional&&gate?.why==='gate'&&gate.a?levelById(gate.gate):null;if(gl&&gl.id!==id)out.gateLine=sideGateText(gate.a,gl);return out;}
function defeatCore(save,{id,tier,rift,boss,runes,story,power,refill,losses}){const retry=retryStep(save,{id,tier,rift,boss}),retryText=retry?.text||'';
 if(story&&!rift){const lib=power?.a?{label:`Library · ${powerSize(save,power.a)}`,subject:powerStep(save,power.a)?.subject||power.a.subject}:null;if(runes&&(losses|0)>=RUNE_LEAD_AFTER)return runesOut(save,id,runes);return {head:STORY_HEAD,text:retryText,primary:{kind:'retry'},also:'',library:lib};}
 if(runes&&(losses|0)>=RUNE_LEAD_AFTER)return runesOut(save,id,runes);
 if(runes&&!(power?.a&&!rift)){const g=resultGoal(save,{won:false,id,tier,rift,boss});return {text:g?.id==='potions'&&refill?retryText||g.then?.text||g.text:g?.text||retryText,primary:{kind:'retry'},also:'',runes2:true};}
 if(power?.a&&!rift){const w=powerWants(save,power.a),n=w?.topics|0;return {text:n>0?`Wake ${power.a.name} at the Library: ${n} more ${sname(power.a.subject)} ${topicsWord(n)}.`:`Wake ${power.a.name} at the Library.`,primary:{kind:'library',label:'Learn it at the Library',subject:power.a.subject},also:''};}
 const g=resultGoal(save,{won:false,id,tier,rift,boss});
 if(g?.id==='potions'&&refill)return {text:retryText||g.then?.text||g.text,primary:{kind:'retry'},also:''};
 return {text:g?.text||retryText,primary:{kind:'retry'},also:''};}
