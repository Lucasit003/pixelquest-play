/* improve20-r16a-nov3 #1/#2 (audit12 findings 1, 2 and 7): ONE lead per result card. The win and defeat cards took their NEXT GOAL line from
   nextStep/resultGoal and their red button from somewhere else (winLead, the two-loss power, the chapter's first stop), so the m7 card said
   "Next adventure: Drowned Shrine" over a red "Go to the Library", and the e3 Story card said "Try Orc Warcamp again" under a red Library
   button. Each card now asks this file once and draws both the line and the primary button from the answer, so they cannot disagree.
   - A power-gated pad is never promised: the line names the gate and the honest count from game/power-gate.js ("The Veilmoor needs
     Sundering Blow: 4 Coding topics"), the Library (on that subject) is the primary, and a "While you learn" line names one thing to
     play meanwhile (this week's Rift while unplayed, else the best Heroic replay for stars), picked deterministically.
   - The second loss on Story leads with the retry and its potions; the Library is a secondary with its honest size.
   Pure and read-only: it never opens a gate, unlocks, masters or writes. -> {text, primary:{kind,label,subject}, also, library} */
import {LEVELS,CHAPTERS,levelById,levelOpen,levelFogged,tierOpen,tierDone,starsOf,awakeCount,powerShort,tiered,levelDone} from './levels.js';
import {hallOpen,HALL_CHAPTERS,rungOpen,rungCleared,hallEarly,HALL_EARLY} from './hall.js';
import {riftOpen,riftPick} from './rift.js';
import {questLive,questState,currentStep} from './quests.js';
import {adviceLevel,TIERS} from './tiers.js';
import {SUBJECTS} from './data.js';
import {gateInfo,powerWants,powerStep,leadSubject} from './power-gate.js';/* improve24-r24m-nov5 #7 */import {nextPower as nextPowerOf} from './power-gate.js';import {TOPICS,mastered} from '../academics/lessons.js';
import {nextStep,resultGoal,retryStep,riftUnplayed,STEP_WORDS} from './next-step.js';/* improve24-r24m-nov5 #5 */import {handInLead} from './next-step.js';
import {gradeRank} from './grade.js';
import {nextPowerLine} from '../academics/starter-lesson.js';
import {runeDefeatLead} from './runes.js';
/* improve20-r21b-nov4 #4 */import {sealBackLine} from './ability-seals.js';
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
/* improve20-r20e-nov4 #5 (audit14 #2: "While you learn" pointed a Story kid after m7 at Heroic): a Story kid after m7 (m7 won, and this week's Rift
   is the Story Rift, game/rift.js riftStory: no Heroic won in its chapter) is pointed at the Story Rift and at Hall Rung I (open after m7,
   game/hall.js hallEarly), never at a Heroic replay. Same kinds, same order; only these entries' words and the Heroic skip are new. */
export const storyKid=save=>{if(!levelDone(save,HALL_EARLY)||!riftOpen(save))return false;let p=null;try{p=riftPick(save);}catch{p=null;}return !!p?.story;};
export const storyRiftText=l=>`While you learn: this week's Story Rift (${l?.name||'a remixed level'}), at your tier. Press Rift on the world map.`;
export const hallEarlyText=ch=>`While you learn: Hall of Echoes Rung I (${CHAPTERS.find(c=>c.id===ch)?.name||ch}): practise reading the bosses. Find the Hall on the Emberkeep map.`;
export function whileOptions(save){const out=[],r=riftUnplayed(save),sk=storyKid(save);if(r){const l=levelById(r.target.id);out.push({kind:'rift',id:l?.id||null,text:sk?storyRiftText(l):`While you learn: this week's Rift (${l?.name||'a remixed level'}). Press Rift on the world map.`});}
 const h=sk?null:heroicWhile(save);if(h)out.push(h);
 const early=hallEarly(save),ch=hallOpen(save)||early?HALL_CHAPTERS.find(c=>rungOpen(save,c,1)&&!rungCleared(save,c,1)):null;if(ch&&early)out.push({kind:'hall',id:ch,text:hallEarlyText(ch)});else if(ch)out.push({kind:'hall',id:ch,text:`While you learn: Hall of Echoes Rung I (${CHAPTERS.find(c=>c.id===ch)?.name||ch}). Find the Hall on the Veilmoor map.`});
 /* improve20-r22w-nov4 #3: Wil's first chain, then his second chapter once the first is done */
 const q=['hobs-purse','wils-shield','wils-mirror'/* improve25-r25q-nov5 #1 */].find(id=>questLive(id)&&questState(save,id)!=='done')||'hobs-purse',st=questLive(q)?questState(save,q):'locked',step=st==='open'||st==='active'?currentStep(save,q):null;if(step&&(step.kind!=='clear'||levelOpen(save,step.level)))out.push({kind:'wil',id:q,text:`While you learn: Wil's quest. ${step.text}`});
 return out;}
/* improve20-r20d-nov4 #5 (audit14 plan 7, minor notes on v3 and the Bandit Road): runes waiting (worth RUNE_CARD_MIN or more) and a side path never
   played come before the rotation's Heroic, Hall and Rift suggestions. runeWin: the runes' worth, read on a copy ({n, pct} or null). */
export function runeWin(save){try{return runeDefeatLead(save,{loud:true});}catch{return null;}}
export const unplayedSide=save=>LEVELS.filter(l=>l.optional&&l.kind==='level'&&!l.hidden&&!levelFogged(l)&&levelOpen(save,l.id)&&!levelDone(save,l.id));
export const runesText=g=>`Place your ${g.n} ${g.n===1?'rune':'runes'} at Home → Abilities: +${g.pct}% ability power.`;
export function whileFirst(save){const g=runeWin(save);if(g)return {kind:'runes',id:null,text:`While you learn: ${runesText(g).replace(/^P/,'p')}`};const l=unplayedSide(save)[0];return l?{kind:'side',id:l.id,text:`While you learn: ${l.name}, a side path you have not played yet.`}:null;}
export function whileLearn(save,{now=Date.now()}={}){{const f=whileFirst(save);if(f)return f;}const o=whileOptions(save);return o.length?o[((dayNo(now)%o.length)+o.length)%o.length]:null;}
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
/* improve20-r21b-nov4 #4 (audit15 #16: a seal walked past had nothing pointing back to it): a win card with no "While" line names a seal the hero
   can break now on a level already won (not this one, whose card says so itself), under NEXT GOAL; the red button stays the card's own */
export function winCardLead(save,o={}){const c=winCardLead0(save,o);if(c&&!c.also&&!o.prologue&&!o.finale&&c.primary?.kind!=='runes'/* a rune-led card keeps its own two lines (R20D #5) */){const b=sealBackLine(save,o.id);if(b)c.also=b;}return c;}
function winCardLead0(save,{learn=null,heroic=null,chFirst=null,chName='',prologue=false,finale=false,id=null,legend=null}={}){const step=nextStep(save);
 /* improve24-r24m-nov5 #4 (audit16 #8, shot 07: "NEXT GOAL: Next adventure: Goblin Camp" over a red "Go to the Library"): the prologue's red comes
    from the same step as its line, at every size: a pad goal is "Go to <pad>" (kind 'pad'), anything else keeps the card's own Library red */
 if(prologue){const l=step?.target?.kind==='pad'&&levelById(step.target.id);return {text:prologueText(save,step.text),primary:l?{kind:'pad',id:l.id,label:`Go to ${l.name}`}:{kind:'keep'},also:''};}
 /* improve26-r26c-nov6 #2 (audit17 #9): the finale's red comes from the same step as its line, as the prologue's does (R24M #4): a Library goal leads to
    the Library, a pad goal is "Go to <pad>"; a town step keeps the card's own Return (whose second line then names only that step, ui/friends2.js redReason) */
 if(finale){const l=step?.target?.kind==='pad'&&levelById(step.target.id);return {text:step.text,primary:step?.target?.kind==='library'?{kind:'library',label:'Go to the Library',subject:step.target.subject||leadSubject(save)||null}:l?{kind:'pad',id:l.id,label:`Go to ${l.name}`}:{kind:'keep'},also:''};}
 /* improve24-r24m-nov5 #5 (audit16 #9, shot 12: "Found: Hob's coin purse! Take it back..." over a red "Place 12 runes" and 5 buttons): while a quest
    step can be handed in (next-step.js handInLead: only a waiting first-topic test outranks it) that step is the line and its red is Return to
    Oakhaven (kind 'keep': the card's own Return); runes worth placing ride as one plain line under it, and Heroic stays a plain button */
 {const h=handInLead(save);if(h){const g=runeWin(save);return {text:h.text,primary:{kind:'keep'},also:g?runesText(g):'',quest:h.quest,handIn:true,heroic2:!!heroic?.lead};}}
 if(learn?.why==='gate'){const gl=gateLead(save,learn.gate,{place:chFirst&&chFirst.id===learn.gate&&chName?chName:null});if(gl)return {text:`${gl.text}.`,primary:{kind:'learn',label:learn.label,subject:learn.subject||gl.subject},also:whileLearn(save)?.text||'',gate:learn.gate};}
 if(learn?.a){const st=powerStep(save,learn.a),how=st?.topic&&STEP_WORDS[st.stage]?STEP_WORDS[st.stage](st.topic,st):'';return {text:how?`Wake ${learn.a.name}: ${how} at the Library.`:`Wake ${learn.a.name} at the Library.`,primary:{kind:'learn',label:learn.label,subject:learn.subject},also:''};}
 if(holdUp(save,step,id)){const l=levelById(step.target.id),pad=chFirst||l;return {text:chFirst?`Next adventure: ${chFirst.name}, the first stop in ${String(chName).replace(/^The /,'the ')}.`:l?`Try your new skills at ${l.name}.`:step.text,primary:pad?{kind:'pad',id:pad.id,label:`Go to ${pad.name}`}/* improve20-r18a-nov3 #4 (audit13 #7): the goal names a pad, so the red button goes there (the map, focused on it), not to town */:{kind:'map'},also:'',hold:true,heroic2:!!heroic?.lead};}
 /* improve20-r20d-nov4 #5 (audit14 shot 23: after v3 "Talk to Farmer Hob" led while 12 runes waited): runes worth placing lead before a Heroic,
    Legendary, Rift, quest, Showpiece or star-chase step (never before a new adventure, a learning step or a chapter's first stop); the step
    they displaced stays as the line under it. Red: "Place N runes" (the rune screen; leaving it goes on to the map). */
 {const later=heroic?.lead||!!step&&(step.nudge||step.quest||!!step.target?.tier||/^(tier-|stars-|showpiece-|task-|rift-|replay)/.test(String(step.id||'')));const g=later&&!chFirst?runeWin(save):null;if(g)return {text:runesText(g),primary:{kind:'runes',label:`Place ${g.n} ${g.n===1?'rune':'runes'}`},also:heroic?.lead?'':`Then: ${step.text}`,runes:g,legendary:legendLead(save,id,legend)};}
 /* improve20-r22b-nov4 #4 (R22W: after m4, with Wil's chain on "Meet Wil at the Barracks", the card said "Try it on Heroic"): the HUD's order
    (next-step.js nextStep): learning first (above), then an accepted quest's step, then Heroic or the next level. The quest step leads with its
    one red (its pad, or Return to Oakhaven for a town step); Heroic stays a plain button beside it */
 if(heroic?.lead&&step?.quest&&questState(save,step.quest)==='active'){const l=step.target?.kind==='pad'&&levelById(step.target.id);return {text:step.text,primary:l?{kind:'pad',id:l.id,label:`Go to ${l.name}`}:{kind:'keep'},also:'',heroic2:true,quest:step.quest};}
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
/* improve20-r20d-nov4 #1 (audit14 #1, #3): the Rift, Heroic, Legendary and the Hall use this helper too, in one order: the runes (from the second
   loss in a row, RUNE_CARD_MIN), then a refill when the bag is out of potions (refillLead {n,cost}: one tap buys them and retries), then the retry.
   The NEXT GOAL line always says what the red button does: the potions step's "Out of potions: buy some..." never sits over a Retry. again(): the
   retry in words for each mode (hall: {name} of the rung). */
export const REFILL_HEAD='Stock up, then try again';
export const refillRetryLabel=o=>`Refill ${o.n|0} ${(o.n|0)===1?'potion':'potions'}, then retry`;
const again=(id,{rift=false,hall=null}={})=>hall?`try ${hall.name||'the rung'} again`:rift?"try this week's Rift again":`try ${levelById(id)?.name||'it'} again`;
function runesOut(save,id,runes,o={}){return {head:RUNES_HEAD,text:`Place your runes, then ${again(id,o)}.`,primary:{kind:'runes',label:runeRetryLabel(runes?.n|0)},also:'',library:null};}
/* improve24-r24k-nov5 #1 */export const TEST_LEAD_AFTER=2,TEST_LEAD_LABEL='Try the test again',TEST_HEAD='Take a break from this fight';
/* improve24-r24m-nov5 #7 (queued from R24K, Mia's run): while no topic is mastered, the 2nd defeat in a row in any level (not the prologue, the Rift
   or the Hall) leads to the first topic's next step, from the same helper the Library and the win card use (power-gate.js powerStep for the
   next power): its lesson, quiz or practice, in kid words ("Practise Counting coins (4 of 10), then come back"). A waiting first-topic test
   keeps R24K's "Try the test again" (it comes first); Retry stays a plain button with its Story help and first-defeat potion. -> {topic,
   stage, words, practice, needed} or null */
export const STUDY_WORDS={lesson:t=>`Start ${t.title}`,quiz:t=>`Take the quiz on ${t.title}`,practice:(t,g)=>`Practise ${t.title} (${g.practice|0} of ${g.needed|0})`,test:t=>`Take the test on ${t.title}`};
export function firstTopicStep(save){if(!save||TOPICS.some(t=>mastered(save,t)))return null;let p=null;try{p=nextPowerOf(save);}catch{p=null;}const st=p?.a?powerStep(save,p.a):null;if(!st?.topic||!STUDY_WORDS[st.stage])return null;return {topic:st.topic,stage:st.stage,practice:st.practice,needed:st.needed,words:STUDY_WORDS[st.stage](st.topic,st)};}
export const studyLabel=f=>`${f.words}, then come back`;
export function defeatCardLead(save,{id,tier='normal',rift=false,boss=false,runes=null,story=false,power=null,refill=false,losses=RUNE_LEAD_AFTER,gate=null,tip=null,refillLead=null,hall=null,test=null,first=null}={}){const out=defeatCore(save,{id,tier,rift,boss,runes,story,power,refill,losses,refillLead,hall,test,first});
 out.head??=(out.primary.kind==='library'&&tip?.kind==='power'?tip.head:out.primary.kind==='retry'&&tip&&tip.kind!=='power'?tip.head:REST_HEAD);
 const l=levelById(id),gl=!rift&&l?.optional&&gate?.why==='gate'&&gate.a?levelById(gate.gate):null;if(gl&&gl.id!==id)out.gateLine=sideGateText(gate.a,gl);return out;}
function defeatCore(save,{id,tier,rift,boss,runes,story,power,refill,losses,refillLead=null,hall=null,test=null,first=null}){const retry=hall?{text:`${again(id,{hall}).replace(/^t/,'T')}.`}:retryStep(save,{id,tier,rift,boss}),retryText=retry?.text||'',mo={rift,hall};
 /* improve24-r24k-nov5 #1 (kidsim7 #1: Mia lost Orc Warcamp's boss 4 times in a row with her first test waiting, and every red was Retry): while the first-topic
    test waits (test: game/next-step.js testWaiting), the 2nd defeat in a row in a level leads back to it; Retry stays a plain button, and its Story help and potion still apply */
 if(test?.id&&!rift&&!hall&&(losses|0)>=TEST_LEAD_AFTER)return {head:TEST_HEAD,text:`Try the mastery test on “${test.title}” again, then come back to ${levelById(id)?.name||'this fight'}.`,primary:{kind:'test',label:TEST_LEAD_LABEL,topic:test.id,subject:test.subject},also:'',runes2:!!runes};
 /* improve24-r24m-nov5 #7 */if(first?.topic&&!rift&&!hall&&id!=='prologue'&&(losses|0)>=TEST_LEAD_AFTER)return {head:TEST_HEAD,text:`${first.words} at the Library, then come back to ${levelById(id)?.name||'this fight'}.`,primary:{kind:'study',label:studyLabel(first),topic:first.topic.id,subject:first.topic.subject,stage:first.stage},also:'',runes2:!!runes};
 if(story&&!rift&&!hall){const lib=power?.a?{label:`Library · ${powerSize(save,power.a)}`,subject:powerStep(save,power.a)?.subject||power.a.subject}:null;if(runes&&(losses|0)>=RUNE_LEAD_AFTER)return runesOut(save,id,runes);return {head:STORY_HEAD,text:retryText,primary:{kind:'retry'},also:'',library:lib};}
 if(runes&&(losses|0)>=RUNE_LEAD_AFTER)return runesOut(save,id,runes,mo);
 /* improve20-r20d-nov4 #1: out of potions with the gold for some: the refill leads, and its one tap also retries */if(refillLead?.n>0)return {head:REFILL_HEAD,text:`Refill your potions (${refillLead.cost|0} gold), then ${again(id,mo)}.`,primary:{kind:'refill',label:refillRetryLabel(refillLead)},also:'',runes2:!!runes};
 if(hall)return {text:retryText,primary:{kind:'retry'},also:'',runes2:!!runes};
 if(runes&&!(power?.a&&!rift)){const g=resultGoal(save,{won:false,id,tier,rift,boss});return {text:/* improve20-r20d-nov4 #1: the line under a red Retry is the retry */retryText||g?.text,primary:{kind:'retry'},also:'',runes2:true};}
 if(power?.a&&!rift){const w=powerWants(save,power.a),n=w?.topics|0;return {text:n>0?`Wake ${power.a.name} at the Library: ${n} more ${sname(power.a.subject)} ${topicsWord(n)}.`:`Wake ${power.a.name} at the Library.`,primary:{kind:'library',label:'Learn it at the Library',subject:power.a.subject},also:''};}
 const g=resultGoal(save,{won:false,id,tier,rift,boss});
 /* improve20-r20d-nov4 #1 (audit14 #1, shot 01: "Out of potions: buy some at the Apothecary" over a red "Retry boss fight"): a red Retry's line is the retry */
 return {text:retryText||g?.text||'',primary:{kind:'retry'},also:''};}
