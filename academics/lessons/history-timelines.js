// Elementary topic: timelines - putting events in order, earlier to later. Questions are generated from
// checked sequences, so every "first", "next" and "which came first" is read off the list, not written.
const SEQ={
 day:{name:'a school day',events:['wake up','eat breakfast','go to school','eat lunch','go home','eat dinner','go to bed']},
 plant:{name:'how a plant grows',events:['plant a seed','the seed sprouts','the plant grows leaves','the plant flowers','the plant makes fruit']},
 life:{name:'how a person grows up',events:['a baby','a child','a teenager','a grown-up']},
 seasons:{name:'the seasons, starting in spring',events:['spring','summer','fall','winter']},
 travel:{name:'how people traveled over time',events:['people walked or rode horses','the first trains were built','the first cars were built','the first airplanes flew']},
 talk:{name:'how people sent messages over time',events:['people wrote letters by hand','the telephone was invented','television was invented','the internet was invented']}};
export default {
 id:'history-e-timelines',subject:'history',level:3,grade:2,standard:'C3 D2.His.1.K-2, D2.His.2.K-2',
 title:'Timelines',goal:'Put events in order from earlier to later, and read a timeline.',points:20,
 skills:{order:'Earlier and later',read:'Reading a timeline',past:'Long ago and today'},
 steps:[
  {skill:'order',say:'A timeline shows things in the order they happen, from earlier to later.',pic:[{t:'timeline',events:['wake up','eat breakfast','go to school']}],eq:'earlier to later'},
  {skill:'read',say:'Read a timeline from left to right. The first thing is on the left.',pic:[{"t":"theater","scene":"garden","part":"grow"}],
   check:{prompt:'Jo plants a seed on Monday and it sprouts on Friday. Which happened first?',answer:'the seed was planted',options:['the seed was planted','the seed sprouted'],hint:'A seed has to be planted before it can sprout.'}},
  {skill:'read',say:'A blank on a timeline can be filled by looking at what comes before and after it.',pic:[{t:'timeline',events:['a baby',null,'a teenager','a grown-up'],fill:'a child'}]},
  {skill:'past',say:'Timelines can show long ago, too. Long ago people walked or rode horses.',pic:[{t:'timeline',events:SEQ.travel.events.slice(0,1)}]},
  {skill:'past',say:'Then trains were built, then cars, and later airplanes.',pic:[{t:'timeline',events:SEQ.travel.events}],
   check:{prompt:'Grandpa says the first cars came before the first airplanes. Is that true or false?',answer:'true',options:['true','false'],hint:'On the timeline, cars come before airplanes.'}},
  {skill:'past',say:'How people send messages changed too: letters, then telephones, television and the internet.',pic:[{t:'timeline',events:SEQ.talk.events}]},
  {skill:'order',say:'Our timelines run from earlier on the left to later on the right. Other timelines can run vertically; read their labels to find the direction of time.',pic:[{t:'timeline',events:SEQ.seasons.events}],
   check:{prompt:'Starting in spring, which season comes right after summer?',answer:'fall',options:['fall','winter','spring'],hint:'Spring, summer, fall, winter.',pic:{t:'timeline',events:['spring','summer',null,'winter'],fill:'fall'}}}],
 items(add){
  for(const [key,{name,events:ev}] of Object.entries(SEQ)){const skill=key==='travel'||key==='talk'?'past':key==='day'||key==='plant'?'read':'order',pic=x=>({t:'timeline',events:ev,...x,hint:true});
   add(skill,`On a timeline of ${name}, what comes first: ${[...ev].sort().join(', ')}?`,ev[0],pic({}),`The order is ${ev.join(', then ')}. First is ${ev[0]}.`);
   add(skill,`On a timeline of ${name}, what comes last: ${[...ev].sort().join(', ')}?`,ev.at(-1),pic({}),`The order is ${ev.join(', then ')}. Last is ${ev.at(-1)}.`);
   ev.forEach((e,i)=>{
    if(i<ev.length-1)add(skill,`On a timeline of ${name}, what comes right after "${e}"?`,ev[i+1],pic({}),`${e}, then ${ev[i+1]}.`);
    if(i>0)add(skill,`On a timeline of ${name}, what comes right before "${e}"?`,ev[i-1],pic({}),`${ev[i-1]}, then ${e}.`);
    for(let j=i+1;j<ev.length;j++)add(skill,`On a timeline of ${name}, which comes first: "${ev[j]}" or "${e}"?`,e,pic({}),`"${e}" comes before "${ev[j]}".`);});}}};
