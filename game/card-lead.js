/* improve20-r16a-nov3 #1/#2 (audit12 findings 1, 2 and 7): ONE lead per result card. The win and defeat cards took their NEXT GOAL line from
   nextStep/resultGoal and their red button from somewhere else (winLead, the two-loss power, the chapter's first stop), so the m7 card said
   "Next adventure: Drowned Shrine" over a red "Go to the Library", and the e3 Story card said "Try Orc Warcamp again" under a red Library
   button. Each card now asks this file once and draws both the line and the primary button from the answer, so they cannot disagree.
   - A power-gated pad is never promised: the line names the gate and the honest count from game/power-gate.js ("The Veilmoor needs
     Sundering Blow: 4 Coding topics"), the Library (on that subject) is the primary, and a "While you learn" line names one thing to
     play meanwhile (this week's Rift while unplayed, else the best Heroic replay for stars), picked deterministically.
   - The second loss on Story leads with the retry and its potions; the Library is a secondary with its honest size.
   Pure and read-only: it never opens a gate, unlocks, masters or writes. -> {text, primary:{kind,label,subject}, also, library} */
import {LEVELS,levelById,levelFogged,tierOpen,tierDone,starsOf,awakeCount,powerShort,tiered} from './levels.js';
import {adviceLevel,TIERS} from './tiers.js';
import {SUBJECTS} from './data.js';
import {gateInfo,powerWants,powerStep,leadSubject} from './power-gate.js';
import {nextStep,resultGoal,retryStep,riftUnplayed,STEP_WORDS} from './next-step.js';
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
export function whileLearn(save){const r=riftUnplayed(save);if(r){const l=levelById(r.target.id);return {kind:'rift',id:l?.id||null,text:`While you learn: this week's Rift (${l?.name||'a remixed level'}). Press Rift on the world map.`};}
 const lv=save?.level|0,cand=LEVELS.map((l,i)=>({l,i})).filter(({l})=>l.kind==='level'&&!l.hidden&&!levelFogged(l)&&tiered(l)&&tierOpen(save,l.id,'heroic')&&starsOf(save,l.id,'heroic')<3);
 if(!cand.length)return null;cand.sort((x,y)=>((adviceLevel(x.l,'heroic')<=lv?0:1)-(adviceLevel(y.l,'heroic')<=lv?0:1))||((tierDone(save,x.l.id,'heroic')?1:0)-(tierDone(save,y.l.id,'heroic')?1:0))||y.i-x.i);
 const l=cand[0].l;return {kind:'heroic',id:l.id,text:`While you learn: replay ${l.name} on ${TIERS.heroic.label} for stars.`};}
/* the win card. learn: power-gate.js winLead(save) as main.js worked it out; heroic: ladder-guide.js heroicLead when it leads; chFirst/chName: a
   chapter clear's first stop and the new chapter's name; prologue/finale keep their own buttons (kind 'keep'). */
export function winCardLead(save,{learn=null,heroic=null,chFirst=null,chName='',prologue=false,finale=false}={}){const step=nextStep(save);
 if(prologue||finale)return {text:step.text,primary:{kind:'keep'},also:''};
 if(learn?.why==='gate'){const gl=gateLead(save,learn.gate,{place:chFirst&&chFirst.id===learn.gate&&chName?chName:null});if(gl)return {text:`${gl.text}.`,primary:{kind:'learn',label:learn.label,subject:learn.subject||gl.subject},also:whileLearn(save)?.text||'',gate:learn.gate};}
 if(learn?.a){const st=powerStep(save,learn.a),how=st?.topic&&STEP_WORDS[st.stage]?STEP_WORDS[st.stage](st.topic,st):'';return {text:how?`Wake ${learn.a.name}: ${how} at the Library.`:`Wake ${learn.a.name} at the Library.`,primary:{kind:'learn',label:learn.label,subject:learn.subject},also:''};}
 if(heroic?.lead)return {text:heroic.card||heroic.text,primary:{kind:'heroic',label:'Try Heroic'},also:''};
 if(chFirst)return {text:`Next adventure: ${chFirst.name}, the first stop in ${String(chName).replace(/^The /,'the ')}.`,primary:{kind:'map'},also:''};
 if(step?.target?.kind==='library')return {text:step.text,primary:{kind:'library',label:'Go to the Library',subject:step.target.subject||leadSubject(save)||null},also:''};
 return {text:step.text,primary:{kind:'map'},also:''};}
/* the defeat card. runes: game/runes.js runeDefeatLead (a one-tap step before the retry, so the line is still the retry); story: levels.js
   storyHelp (the second loss in a row on Story); power: the two-loss next power ({a}) or null; refill: the Apothecary refill offered on the card. */
export function defeatCardLead(save,{id,tier='normal',rift=false,boss=false,runes=null,story=false,power=null,refill=false}={}){const retry=retryStep(save,{id,tier,rift,boss}),retryText=retry?.text||'';
 if(story&&!rift){const lib=power?.a?{label:`Library · ${powerSize(save,power.a)}`,subject:powerStep(save,power.a)?.subject||power.a.subject}:null;return {text:retryText,primary:{kind:'retry'},also:'',library:lib};}
 if(runes)return {text:retryText,primary:{kind:'runes'},also:''};
 if(power?.a&&!rift){const w=powerWants(save,power.a),n=w?.topics|0;return {text:n>0?`Wake ${power.a.name} at the Library: ${n} more ${sname(power.a.subject)} ${topicsWord(n)}.`:`Wake ${power.a.name} at the Library.`,primary:{kind:'library',label:'Learn it at the Library',subject:power.a.subject},also:''};}
 const g=resultGoal(save,{won:false,id,tier,rift,boss});
 if(g?.id==='potions'&&refill)return {text:retryText||g.then?.text||g.text,primary:{kind:'retry'},also:''};
 return {text:g?.text||retryText,primary:{kind:'retry'},also:''};}
