// Original history lesson. Fictional Oakhaven villagers (name, birth year, death year) and fictional dated
// events are a small, fixed fact table -- the only facts asserted here -- and every answer (alive, age,
// overlap) is computed from those years, never asserted separately
// (C3 D2.His.1.3-5: create and use a chronological sequence of related events).
// Birth/death years and event years are deliberately uneven (not multiples of 5 or 20) so that ages and
// overlap counts do not fall into a spottable pattern, and no event year ever equals any villager's birth
// or death year, so "alive" (b<y<d) never has to decide a boundary case either way.
const VILLAGERS=[["Ada Brook",1703,1768],["Silas Vance",1721,1793],["Mira Holt",1739,1804],["Tomas Reed",1758,1826],["Nell Ashby",1777,1849],["Owen Kray",1796,1867],["Lena Wick",1814,1888],["Ivo Marsh",1833,1907]];
const EVENTS=[["a comet was sighted",1714],["the bridge opened",1731],["the mill burned down",1748],["the great flood struck",1763],["the fair was first held",1781],["the school was built",1799],["the canal was dug",1822],["the railway reached Oakhaven",1846],["the town hall was completed",1871]];
const personPic=(n,b,d,txt,y)=>({t:"passages",title:"Oakhaven record",texts:[`${n}: born ${b}, died ${d}.`,`${y}: ${txt}.`]});
const pairPic=(n1,b1,d1,n2,b2,d2)=>({t:"passages",title:"Oakhaven record",texts:[`${n1}: born ${b1}, died ${d1}.`,`${n2}: born ${b2}, died ${d2}.`]});
export default {
id:"history-e-lifespans",
subject:"history",
level:3,
grade:5,
title:"Lifespans and overlapping lives",
goal:"Work out whether a villager was alive for a dated event, how old they were, and whether two villagers' lives overlapped.",
standard:"C3 D2.His.1.3-5: create and use a chronological sequence of related events",
points:20,
skills:{"alive":"Alive for an event","age":"Age reached in a year","overlap":"Overlapping lives"},
steps:[
{"skill":"alive","say":"A person in these Oakhaven records was alive in the years between their birth and their death. Ada Brook was born in 1703 and died in 1768, so she was alive in 1731, when the bridge opened.","pic":personPic("Ada Brook",1703,1768,"the bridge opened",1731)},
{"skill":"alive","say":"A year before someone was born, or after they died, falls outside their life. (These records never ask about a birth or death year itself.) Silas Vance was born in 1721 and died in 1793, so 1799 falls after his life ended. Being alive then does not prove someone witnessed an event. A firsthand account describes their own experience; it may be told or written later.","pic":personPic("Silas Vance",1721,1793,"the school was built",1799),"check":{"prompt":"Beatrix Fenn was born in 1705 and died in 1775. In 1780, a great storm hit Oakhaven. Was Beatrix Fenn alive when the storm hit: yes or no?","answer":"no","options":["no","yes"],"hint":"Compare 1780 with Beatrix Fenn's life, 1705 to 1775.","pic":personPic("Beatrix Fenn",1705,1775,"a great storm hit Oakhaven",1780)}},
{"skill":"age","say":"The age someone turned in a year is that year minus their birth year. Mira Holt was born in 1739, so in 1763 she turned 24, because 1763 minus 1739 is 24.","pic":personPic("Mira Holt",1739,1804,"the great flood struck",1763)},
{"skill":"age","say":"Asking how many years after someone was born an event happened is the same subtraction, just asked a different way. Tomas Reed was born in 1758, so the canal being dug in 1822 happened 64 years after he was born.","pic":personPic("Tomas Reed",1758,1826,"the canal was dug",1822),"check":{"prompt":"Corin Vale was born in 1730 and died in 1795. In 1758, the harvest hall opened. How old did Corin Vale turn in 1758?","answer":28,"options":[38,28,18,48],"hint":"Subtract the birth year from the event year.","pic":personPic("Corin Vale",1730,1795,"the harvest hall opened",1758)}},
{"skill":"overlap","say":"Two people could have met only if some year falls in both of their lives. Nell Ashby lived from 1777 to 1849 and Owen Kray lived from 1796 to 1867, so both were alive between 1796 and 1849.","pic":pairPic("Nell Ashby",1777,1849,"Owen Kray",1796,1867)},
{"skill":"overlap","say":"To estimate how long two lives overlapped, subtract the later birth year from the earlier death year. For Nell and Owen, 1849 minus 1796 gives about 53 years. Exact dates would be needed for an exact duration.","pic":pairPic("Nell Ashby",1777,1849,"Owen Kray",1796,1867),"check":{"prompt":"Beatrix Fenn was born in 1705 and died in 1775. Corin Vale was born in 1730 and died in 1795. Could Beatrix Fenn and Corin Vale have met: yes or no?","answer":"yes","options":["no","yes"],"hint":"Find the later birth year and the earlier death year.","pic":pairPic("Beatrix Fenn",1705,1775,"Corin Vale",1730,1795)}}],
progression:{"requires":["history-e-decades-centuries","history-e-firsthand-accounts"],"operations":3,"demand":"Turn a birth and death year into a rule for which years someone was alive, subtract years to find an age, and compare two lifespans to find their overlap."},
items(add){
 VILLAGERS.forEach(([name,b,d])=>{
  EVENTS.forEach(([txt,y])=>{
   const alive=b<y&&y<d,pic=personPic(name,b,d,txt,y);
   add("alive",`${name} was born in ${b} and died in ${d}. In ${y}, ${txt}. Was ${name} alive when ${txt}: yes or no?`,alive?"yes":"no",pic,alive?`${name} was alive in ${y}, between being born in ${b} and dying in ${d}.`:`${y} falls outside ${name}'s life, which ran from ${b} to ${d}.`);
   if(alive){const age=y-b;
    add("age",`${name} was born in ${b} and died in ${d}. In ${y}, ${txt}. How old did ${name} turn in ${y}?`,age,pic,`${y} minus ${b} is ${age}.`,[`${age} years old`]);
    add("age",`${name} was born in ${b} and died in ${d}. In ${y}, ${txt}. How many years after ${name} was born did that happen?`,age,pic,`${y} minus ${b} is ${age}.`);
}});});
 for(let i=0;i<VILLAGERS.length;i++)for(let j=i+1;j<VILLAGERS.length;j++){
  const [n1,b1,d1]=VILLAGERS[i],[n2,b2,d2]=VILLAGERS[j],lo=Math.max(b1,b2),hi=Math.min(d1,d2),overlap=hi-lo,pic=pairPic(n1,b1,d1,n2,b2,d2);
  add("overlap",`${n1} was born in ${b1} and died in ${d1}. ${n2} was born in ${b2} and died in ${d2}. Could ${n1} and ${n2} have met: yes or no?`,overlap>0?"yes":"no",pic,overlap>0?`Both were alive between ${lo} and ${hi}.`:`${n1} and ${n2} were never alive in the same year.`);
  if(overlap>0)add("overlap",`${n1} was born in ${b1} and died in ${d1}. ${n2} was born in ${b2} and died in ${d2}. Using the years shown, about how many years did ${n1} and ${n2}'s lives overlap?`,overlap,pic,`${hi} minus ${lo} is ${overlap}, so the overlap was about ${overlap} years. The exact birth and death dates are not given.`);}
}
};
