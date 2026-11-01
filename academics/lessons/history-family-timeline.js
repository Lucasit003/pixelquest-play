// Original history lesson. A fictional Oakhaven family lists each member's birth year; every
// answer follows from those years alone (an earlier birth year always means older), never from
// a fact table (C3 D2.His.1.K-2: create a chronological sequence of events).
const FAMILIES=[['Nell','Eli','Priya'],
 ['Cole','Faye','Owen','Ivy'],
 ['Rosa','Miles','Tess'],
 ['Hugh','Dana','Kai','Zoe'],
 ['June','Otis','Nia'],
 ['Ray','Lila','Sam','Ada'],
 ['Vera','Curt','Ruth'],
 ['Dean','Iris','Tom','Ella']];
const GAPS3=[[25,28],[24,32],[23,26],[30,24],[27,22],[24,29]];
const GAPS4=[[26,24,3],[22,28,5],[25,23,4],[28,22,6],[24,27,2],[23,26,7]];
const PERM3=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
const PERM4=[[0,1,2,3],[1,0,3,2],[2,3,0,1],[3,2,1,0],[0,2,1,3],[1,3,0,2],[2,0,3,1],[3,1,2,0]];
const L='ABCD';
/* improve20-n-nov1 (audit4 a2): "how many years older" is asked with ages (Nell is 61, Eli is 34), a subtraction within 100
   (2.NBT.5), not with 4-digit birth years (1985 - 1959), which is past the Grade 2 standard. The ages come from the same
   birth-year gaps, so every answer is unchanged; the youngest is 4 to 9 years old. Oldest/youngest and birth order keep the years. */
export default {
id:"history-e-family-timeline",
subject:"history",
level:3,
grade:2,
title:"A family timeline",
goal:"Use a family's birth years to tell who is older or younger, how many years apart they are, and who was born just before someone else.",
standard:"C3 D2.His.1.K-2: create a chronological sequence of events",
points:20,
skills:{"oldest":"Oldest and youngest","older":"How many years older","order":"Birth order"},
steps:[{"skill":"oldest","say":"An earlier birth year means older. A later birth year means younger. Grandma Iris was born before Mom Dana. So Grandma Iris is older.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Grandma Iris was born in 1932.","Mom Dana was born in 1959.","Wren was born in 1985."]}},
{"skill":"oldest","say":"The oldest has the earliest birth year. The youngest has the latest birth year.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Grandma Iris was born in 1932.","Mom Dana was born in 1959.","Wren was born in 1985."]},"check":{"prompt":"Grandma Iris was born in 1932, Mom Dana was born in 1959, and Wren was born in 1985. Who is the oldest: Grandma Iris, Mom Dana or Wren?","answer":"Grandma Iris","options":["Grandma Iris","Mom Dana","Wren"],"hint":"The oldest person has the earliest birth year.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Grandma Iris was born in 1932.","Mom Dana was born in 1959.","Wren was born in 1985."]}}},
{"skill":"older","say":"Ages show how much older someone is. Grandpa Leo is 70. Dad Max is 40. 70 minus 40 is 30. So Grandpa Leo is 30 years older.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Grandpa Leo is 70.","Dad Max is 40.","70 minus 40 is 30."]}},
{"skill":"older","say":"Take the smaller age from the bigger age. The answer is how many years older.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Dad Max is 40.","Tia is 8."]},"check":{"prompt":"Dad Max is 40 and Tia is 8. How many years older is Dad Max than Tia?","answer":32,"options":[32,48,30],"hint":"Subtract: 40 minus 8.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Dad Max is 40.","Tia is 8."]}}},
{"skill":"order","say":"Line up the birth years from earliest to latest. That is the order they were born: first, second, third.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Grandma Iris was born in 1932.","Mom Dana was born in 1959.","Wren was born in 1985.","Cass was born in 1988."]}},
{"skill":"order","say":"Born just before means the next year back in the line. It is not just anyone older.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Grandma Iris was born in 1932.","Mom Dana was born in 1959.","Wren was born in 1985.","Cass was born in 1988."]},"check":{"prompt":"In birth order, Grandma Iris (1932), Mom Dana (1959), Wren (1985) and Cass (1988). Who was born just before Wren?","answer":"Mom Dana","options":["Mom Dana","Grandma Iris","Cass"],"hint":"Find the birth year right before 1985.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Grandma Iris was born in 1932.","Mom Dana was born in 1959.","Wren was born in 1985.","Cass was born in 1988."]}}}],
progression:{"requires":["history-e-timelines"],"operations":2,"demand":"Compare birth years to tell who is older or younger, subtract two ages within 100 to find how many years older someone is, and use birth-year order to tell who came second or who was born just before someone else."},
items(add){
 FAMILIES.forEach((members,fi)=>{
  const n=members.length;
  for(let k=0;k<3;k++){
   const gaps=n===3?GAPS3[(fi*3+k)%GAPS3.length]:GAPS4[(fi*3+k)%GAPS4.length];
   const base=1860+fi*7+k*15,years=[base];
   for(const g of gaps)years.push(years[years.length-1]+g);
   const events=members.map((name,i)=>({name,year:years[i]}));
   const perm=n===3?PERM3[(fi+k)%PERM3.length]:PERM4[(fi+k)%PERM4.length];
   const display=perm.map(i=>events[i]),letterOf=e=>L[display.indexOf(e)];
   const lines=display.map((e,idx)=>`${L[idx]}: ${e.name} was born in ${e.year}`);
   const record='Fictional Oakhaven family. '+lines.map(l=>l+'.').join(' ')+' ';
   const pic={t:'passages',title:'Fictional Oakhaven family',texts:display.map(e=>`${e.name} was born in ${e.year}.`)};
   const allLetters=display.map((e,idx)=>L[idx]),list=allLetters.slice(0,-1).join(', ')+' or '+allLetters[allLetters.length-1];
   add('oldest',record+`Who was born first, and so is the oldest, among ${list}?`,letterOf(events[0]),pic,`${letterOf(events[0])} has the earliest birth year, ${events[0].year}.`,[events[0].name]);
   add('oldest',record+`Who was born last, and so is the youngest, among ${list}?`,letterOf(events[n-1]),pic,`${letterOf(events[n-1])} has the latest birth year, ${events[n-1].year}.`,[events[n-1].name]);
   const pairs=n===3?[[0,1],[1,2],[0,2]]:[[0,1],[1,2],[2,3],[0,3]];
   const young=4+(fi+k)%6,age=e=>young+events[n-1].year-e.year;
   const ageRecord='Fictional Oakhaven family. '+display.map((e,idx)=>`${L[idx]}: ${e.name} is ${age(e)}.`).join(' ')+' ';
   const agePic={t:'passages',title:'Fictional Oakhaven family',texts:display.map(e=>`${e.name} is ${age(e)}.`)};
   for(const [a,b] of pairs){
    const diff=age(events[a])-age(events[b]);
    add('older',ageRecord+`How many years older is ${letterOf(events[a])} than ${letterOf(events[b])}?`,diff,agePic,`${age(events[a])} minus ${age(events[b])} is ${diff}.`);
   }
   add('order',record+`Who was born second, counting from earliest to latest, among ${list}?`,letterOf(events[1]),pic,`${letterOf(events[0])} was born first, then ${letterOf(events[1])}.`,[events[1].name]);
   for(let i=1;i<n;i++)
    add('order',record+`Who was born just before ${letterOf(events[i])}?`,letterOf(events[i-1]),pic,`${letterOf(events[i-1])}, born in ${events[i-1].year}, comes right before ${letterOf(events[i])}, born in ${events[i].year}.`,[events[i-1].name]);
  }
 });
}
};
