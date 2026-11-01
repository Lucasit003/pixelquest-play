/* improve20-f-nov1 #10 (audit5 #2): "what tomorrow brings", shown on the way out (the title screen after a session, and the line when the
   day's last goal is done). Three plain facts, never a warning: new daily goals (and the Home piece one of them pays, game/daily.js), the
   next ability's lesson, and "A new Rift opens Monday" when tomorrow starts a new Rift week and the Rift is open (game/rift.js).
   VISION pillar 4: no streaks, no days counted, nothing lost by staying away. Pure: callers pass the save and the time. */
import {dayKey,goalsFor,prizeFor,PRIZE_KIND,dailyView} from './daily.js';
import {riftOpen,isoWeek} from './rift.js';
import {nextLesson} from '../academics/study-unlock.js';
import {learningRoad} from '../academics/learning-road.js';
export const tomorrowOf=(now=Date.now())=>{const d=new Date(now);d.setDate(d.getDate()+1);d.setHours(12,0,0,0);return d;};
export function tomorrowLines(s,now=Date.now()){const t=tomorrowOf(now),day=dayKey(t.getTime()),out=[];
 const g=goalsFor(day).find(x=>x.kind===PRIZE_KIND),f=g&&prizeFor(s,day);
 out.push({id:'goals',text:f?`New daily goals: “${g.text}” wins a ${f.name} for your Home.`:'Three new daily goals.'});
 let n=null;try{n=nextLesson(s);}catch{n=null;}
 /* improve20-z-nov1 #4 (audit6 #2): the line names the charge when the next lesson leads to the HUD card's next ability ("1 more topic charges Volley") */
 let r=null;try{r=learningRoad(s);}catch{r=null;}
 if(n?.topic&&n.ability&&r&&r.ability.id===n.ability.id&&r.reachable&&!r.sleeping&&!r.knowledge&&r.remaining>0&&r.total>0)out.push({id:'lesson',text:`${r.remaining} more topic${r.remaining===1?' charges':'s charge'} ${n.ability.name} (${r.done}/${r.total} charged). Next lesson: “${n.topic.title}”.`});
 else if(n?.topic&&n.ability)out.push({id:'lesson',text:`Your next lesson, “${n.topic.title}”, leads to ${n.ability.name}.`});else if(n?.topic)out.push({id:'lesson',text:`Your next lesson: “${n.topic.title}”.`});
 if(riftOpen(s)&&isoWeek(t).key!==isoWeek(new Date(now)).key)out.push({id:'rift',text:`A new Rift opens ${t.toLocaleDateString('en-US',{weekday:'long'})}.`});
 return out;}
/* the day's three goals are all done */
export const dayDone=(s,now=Date.now())=>dailyView(s,now).every(g=>g.done);
