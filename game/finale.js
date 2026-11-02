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
import {nextStep} from './next-step.js';
const plural=(n,one,many)=>`${n} ${n===1?one:many}`;
export const FINALE_LEVEL=LEVELS.find(l=>gameFinale(l.id))?.id||null;
export function finaleNext(s){const lv=LEVELS.filter(l=>l.kind==='level'&&!l.hidden&&!levelFogged(l)),open=k=>lv.filter(l=>tierOpen(s,l.id,k)&&!tierDone(s,l.id,k)).length,more=[];
 const h=open('heroic'),g=open('legendary');
 if(h||g)more.push(h?`Heroic: ${plural(h,'level waits','levels wait')}, with tougher foes. Each Heroic win opens Legendary${g?` (${g} open now)`:''}.`:`Legendary: ${plural(g,'level waits','levels wait')} for the bravest heroes.`);
 {const hl=hallLeft(s);if(hl)more.push(hl);}/* improve20-r9a-nov1: the Hall of Echoes, once the final boss is down */
 if(riftOpen(s))more.push('The Rift of the Week: one level remixed with two twists, a new one every week, on the world map.');
 const t=TOPICS.filter(x=>topicInSchoolMode(s,x)&&topicOpen(s,x)&&!mastered(s,x)).length;if(t)more.push(`The Library: ${plural(t,'topic','topics')} still to master.`);
 const have=totalStars(s),max=maxStars();if(have<max)more.push(`Stars: ${have} of ${max} won. Beat the par times for more.`);
 return {goal:nextStep(s),more,trophies:trophyCount(s),bosses:TROPHY_TOTAL};}
