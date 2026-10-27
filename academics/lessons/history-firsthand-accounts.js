// Original history lesson. Fictional Oakhaven accounts; every answer is counted from the chain of tellers the account states.
// A firsthand account is written by someone who saw the event; a secondhand one reached the writer through other people (CCSS RI.4.6).
const EVENTS=['the mill fire','the runaway horse on Market Street','the bridge lamp going out','the great hailstorm','the first bus arriving in the square','the well running dry'];
const NAMES=['Mara','Tomas','Lena','Owen','Ruth','Ivo','Nell','Sami'];
/* people[0] saw it; each person told the next; the last one wrote it down. */
const SAW=[e=>`I saw ${e} with my own eyes.`,e=>`I was standing right there and saw ${e}.`,e=>`I watched ${e} myself.`];
const account=(people,e,v=0)=>{const writer=people[people.length-1],to=i=>people[i]===writer?'me':people[i];
 if(people.length===1)return `${writer} wrote: "${SAW[v](e)}"`;
 return `${writer} wrote: "`+[`${people[0]} saw ${e} and told ${to(1)}`,...people.slice(1,-1).map((p,i)=>`${p} told ${to(i+2)}`)].join(', then ')+'."';};
const RULE={t:'rule',cond:'Did the writer see it?',yes:'firsthand account',no:'secondhand account'};
export default {
id:"history-e-firsthand-accounts",
subject:"history",
level:3,
grade:4,
title:"Firsthand and secondhand accounts",
goal:"Tell who saw an event, count how many people passed the story on, and compare how close two accounts are to it.",
standard:"CCSS RI.4.6: compare firsthand and secondhand accounts of the same event",
points:20,
skills:{"kind":"Firsthand or secondhand","who":"Find who saw it","steps":"Count the tellers"},
steps:[{"skill":"kind","say":"An account tells what happened. In a firsthand account the writer saw it: \"I saw the mill fire with my own eyes.\" In a secondhand account the writer heard or read about it from someone else.","pic":{"t":"chain","people":["Mara"],"event":"the mill fire","solve":true}},
{"skill":"kind","say":"Look for who saw it. \"Owen saw the fire and told me,\" writes Lena. Lena did not see it herself, so her account is secondhand.","pic":{"t":"chain","people":["Owen","Lena"],"event":"the mill fire","solve":true},"check":{"prompt":"Ruth wrote: \"Ivo watched the hailstorm from the barn and described it to me.\" Is Ruth's account firsthand or secondhand?","answer":"secondhand","options":["secondhand","firsthand"],"hint":"Ruth heard about it from Ivo.","pic":RULE}},
{"skill":"who","say":"Stories can travel through several people. Here Nell saw it, told Sami, and Sami told Tomas, who wrote it down. Only Nell saw it.","pic":{"t":"chain","people":["Nell","Sami","Tomas"],"event":"the runaway horse","solve":true}},
{"skill":"steps","say":"Count the tellings: Nell told Sami, and Sami told Tomas. That is two people passing it on. Each telling is a chance for a detail to be lost or changed.","pic":{"t":"chain","people":["Nell","Sami","Tomas"],"event":"the runaway horse","solve":true},"check":{"prompt":"Ivo wrote: \"Mara saw the well run dry and told Owen, then Owen told Lena, then Lena told me.\" How many people passed the story on before Ivo wrote it?","answer":3,"options":[3,4,2],"hint":"Mara, Owen and Lena each told someone.","pic":RULE}},
{"skill":"steps","say":"To compare two accounts of the same event, find which writer is closer to it: fewer people between the writer and the person who saw it.","pic":{"t":"chain","people":["Owen","Lena"],"event":"the mill fire","solve":true}},
{"skill":"who","say":"Closer is not the same as correct. A firsthand writer may have seen only part of it, and a secondhand writer may have asked careful questions. Closeness tells you how many tellings to check.","pic":RULE,"check":{"prompt":"Account A is by Nell, who saw the bus arrive. Account B is by Sami, who heard about it from Nell. Which account is closer to the event: A or B?","answer":"A","options":["A","B"],"hint":"Nell saw it; Sami heard it from her.","pic":RULE}}],
progression:{"requires":["history-e-primary-secondary","history-e-change-and-continuity"],"operations":2,"demand":"Trace a story from the person who saw it to the writer, counting each telling, then compare two such chains."},
items(add){
 const chains=[];
 EVENTS.forEach((e,ei)=>{for(let k=0;k<4;k++)for(let r=0;r<3;r++){const people=[0,1,2,3].slice(0,k+1).map(j=>NAMES[(ei*3+r*5+j*3)%8]);chains.push({e,people,k});}});
 for(const {e,people,k} of chains){const text=account(people,e),writer=people[people.length-1];
  add('kind',text+` Is ${writer}'s account firsthand or secondhand?`,k?'secondhand':'firsthand',RULE,k?`${writer} heard it from someone else.`:`${writer} saw it.`,k?['second hand','second-hand','secondhand account','a secondhand account']:['first hand','first-hand','firsthand account','a firsthand account']);
  if(!k)for(const v of [1,2])add('kind',account(people,e,v)+` Is ${writer}'s account firsthand or secondhand?`,'firsthand',RULE,`${writer} saw it.`,['first hand','first-hand','firsthand account','a firsthand account']);
  if(k){const named=[...people].sort();add('who',text+` Who saw ${e}: ${named.slice(0,-1).join(', ')} or ${named[named.length-1]}?`,people[0],RULE,'Find the person the account says saw it; everyone after only heard about it.');
   add('steps',text+` How many people passed the story on before ${writer} wrote it?`,k,RULE,'Count each person who told someone.');}
 }
 let turn=0;EVENTS.forEach((e,ei)=>{const mine=chains.filter(c=>c.e===e);for(let i=0;i<mine.length;i+=2)for(let j=i+1;j<mine.length;j+=3){if(mine[i].k===mine[j].k||mine[i].people.at(-1)===mine[j].people.at(-1))continue;const [a,b]=turn++%2?[mine[i],mine[j]]:[mine[j],mine[i]];
  add('steps',`Two accounts of ${e}. A: ${account(a.people,e)} B: ${account(b.people,e)} Which account is closer to the event: A or B?`,a.k<b.k?'A':'B',RULE,'Fewer people between the writer and the person who saw it means closer.');}});
}
};
