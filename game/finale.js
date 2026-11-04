/* The finale card's "What's next" (improve20-t-oct31 #17; docs/playtest/audit2-oct31/REPORT.md item 8). Beating the last boss used to end
   on an ordinary result card whose next goal was "Talk to Farmer Hob at his farm". The finale card (main.js finaleCard) names the
   save's own next goal (nextStep: after the ending, the newest chapter's Heroic levels lead, next-step.js postGame) and a short list of
   what else is left for this save, only the lines that apply: Heroic and Legendary, the Rift of the Week, topics still to master,
   stars still to win. Pure: reads the save, writes nothing. */
import {LEVELS,levelFogged,tierOpen,tierDone,totalStars,maxStars,gameFinale} from './levels.js';
import {TOPICS,mastered,topicOpen} from '../academics/lessons.js';
import {topicInSchoolMode} from '../academics/study-unlock.js';
import {riftOpen} from './rift.js';
import {hallLeft} from './hall.js';
import {trophyCount,TROPHY_TOTAL} from './trophies.js';
import {nextStep,nextPower} from './next-step.js';
import {lessonsToUnlock} from '../academics/study-unlock.js';
import {SUBJECTS} from './data.js';
import {runeWin,unplayedSide,runesText} from './card-lead.js';
const plural=(n,one,many)=>`${n} ${n===1?one:many}`;
export const FINALE_LEVEL=LEVELS.find(l=>gameFinale(l.id))?.id||null;
export function finaleNext(s){const lv=LEVELS.filter(l=>l.kind==='level'&&!l.hidden&&!levelFogged(l)),open=k=>lv.filter(l=>tierOpen(s,l.id,k)&&!tierDone(s,l.id,k)).length,more=[];
 /* improve20-r20d-nov4 #5 (audit14 minor: the Bandit Road sat unplayed after the ending; 12 runes waited): runes and side paths never played come before Heroic */
 {const rg=runeWin(s);if(rg)more.push(`Runes: ${runesText(rg).replace(/^P/,'p')}`);const sd=unplayedSide(s);if(sd.length)more.push(`Side paths: ${sd[0].name}${sd.length>1?` and ${sd.length-1} more`:''} ${sd.length>1?'wait':'waits'}, never played.`);}
 const h=open('heroic'),g=open('legendary');
 if(h||g)more.push(h?`Heroic: ${plural(h,'level waits','levels wait')}, with tougher foes. Each Heroic win opens Legendary${g?` (${g} open now)`:''}.`:`Legendary: ${plural(g,'level waits','levels wait')} for the bravest heroes.`);
 {const hl=hallLeft(s);if(hl)more.push(hl);}/* improve20-r9a-nov1: the Hall of Echoes, once the final boss is down */
 if(riftOpen(s))more.push('The Rift of the Week: one level remixed with two twists, a new one every week, on the world map.');
 const t=TOPICS.filter(x=>topicInSchoolMode(s,x)&&topicOpen(s,x)&&!mastered(s,x)).length;/* improve20-r11c-nov2 #2 (audit9 a9): learning wakes the powers, so the Library leads the list (it was 5th); the card's "Wake your next power" block sits above it (ui/wake-power.js) */{const np=nextPower(s),need=np?lessonsToUnlock(s,np).lessons|0:0;if(t)more.unshift(`The Library: ${plural(t,'topic','topics')} still to master.${np&&need?` ${plural(need,`more ${SUBJECTS[np.subject]?.name||np.subject} topic`,`more ${SUBJECTS[np.subject]?.name||np.subject} topics`)} wake${need===1?'s':''} ${np.name}.`:' Each one brings your next power closer.'}`);}
 const have=totalStars(s),max=maxStars();if(have<max)more.push(`Stars: ${have} of ${max} won. Win levels with better grades for more.`);
 return {goal:nextStep(s),more,trophies:trophyCount(s),bosses:TROPHY_TOTAL};}
/* improve20-r18a-nov3 #8 (audit13 #19, shot 24: a 6-bullet "What's next" under the power): the Champion card shows two lines under the power,
   the next power (the save's goal, nextStep) and ONE play goal (the first "more" line that is not the Library's, which the goal already
   covers); every other line folds behind More. -> {power, play, rest} */
/* improve20-r20d-nov4 #5 (audit14 minor, shot 22: the next power showed twice, in the Wake block and as WHAT'S NEXT): with the Wake block up (wake), a
   next-power goal is not repeated; the first two play lines lead instead */
export function finaleLines(m,{wake=false}={}){const more=m?.more||[],lib=more.filter(t=>/^The Library:/.test(t)),plays=more.filter(t=>!/^The Library:/.test(t));const g=String(m?.goal?.text||''),short=g.match(/^Next power: [^:]+: [^.]*\./)?.[0]/* the Wake block beside it names the first lesson */;
 if(wake&&/^Next power:/.test(g)&&plays.length){const [power,play='']=plays;return {power,play,rest:[...plays.slice(2),...lib]};}
 const play=plays[0]||'';return {power:short||g,play,rest:[...more.filter(t=>t!==play&&!lib.includes(t)),...lib]};}
