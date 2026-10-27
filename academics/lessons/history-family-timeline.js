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
steps:[{"skill":"oldest","say":"In a family, an earlier birth year means someone is older, and a later birth year means someone is younger. Grandma Iris was born before Mom Dana, so Grandma Iris is older.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Grandma Iris was born in 1932.","Mom Dana was born in 1959.","Wren was born in 1985."]}},
{"skill":"oldest","say":"To find the oldest of a group, look for the earliest birth year. To find the youngest, look for the latest birth year.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Grandma Iris was born in 1932.","Mom Dana was born in 1959.","Wren was born in 1985."]},"check":{"prompt":"Grandma Iris was born in 1932, Mom Dana was born in 1959, and Wren was born in 1985. Who is the oldest: Grandma Iris, Mom Dana or Wren?","answer":"Grandma Iris","options":["Grandma Iris","Mom Dana","Wren"],"hint":"The oldest person has the earliest birth year.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Grandma Iris was born in 1932.","Mom Dana was born in 1959.","Wren was born in 1985."]}}},
{"skill":"older","say":"To find how many years older one person is than another, subtract the earlier birth year from the later one. 1959 minus 1932 is 27, so Mom Dana is 27 years younger than Grandma Iris.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Grandma Iris was born in 1932.","Mom Dana was born in 1959."]}},
{"skill":"older","say":"The subtraction works the same way for any two birth years in the family, as long as the earlier year is taken away from the later one.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Mom Dana was born in 1959.","Wren was born in 1985."]},"check":{"prompt":"Mom Dana was born in 1959 and Wren was born in 1985. How many years older is Mom Dana than Wren?","answer":26,"options":[26,53,21],"hint":"Subtract 1959 from 1985.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Mom Dana was born in 1959.","Wren was born in 1985."]}}},
{"skill":"order","say":"Lining up birth years from earliest to latest gives the order people were born in: first, second, third, and so on. It also shows who was born just before, or just after, anyone else in the line.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Grandma Iris was born in 1932.","Mom Dana was born in 1959.","Wren was born in 1985.","Cass was born in 1988."]}},
{"skill":"order","say":"The person born just before someone is the one with the next earliest birth year, not just anyone older.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Grandma Iris was born in 1932.","Mom Dana was born in 1959.","Wren was born in 1985.","Cass was born in 1988."]},"check":{"prompt":"In birth order, Grandma Iris (1932), Mom Dana (1959), Wren (1985) and Cass (1988). Who was born just before Wren?","answer":"Mom Dana","options":["Mom Dana","Grandma Iris","Cass"],"hint":"Find the birth year right before 1985.","pic":{"t":"passages","title":"Fictional Oakhaven family","texts":["Grandma Iris was born in 1932.","Mom Dana was born in 1959.","Wren was born in 1985.","Cass was born in 1988."]}}}],
progression:{"requires":["history-e-timelines"],"operations":2,"demand":"Compare birth years to tell who is older or younger, subtract two birth years to find how many years older someone is, and use birth-year order to tell who came second or who was born just before someone else."},
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
   for(const [a,b] of pairs){
    const diff=events[b].year-events[a].year;
    add('older',record+`How many years older is ${letterOf(events[a])} than ${letterOf(events[b])}?`,diff,pic,`${events[b].year} minus ${events[a].year} is ${diff}.`);
   }
   add('order',record+`Who was born second, counting from earliest to latest, among ${list}?`,letterOf(events[1]),pic,`${letterOf(events[0])} was born first, then ${letterOf(events[1])}.`,[events[1].name]);
   for(let i=1;i<n;i++)
    add('order',record+`Who was born just before ${letterOf(events[i])}?`,letterOf(events[i-1]),pic,`${letterOf(events[i-1])}, born in ${events[i-1].year}, comes right before ${letterOf(events[i])}, born in ${events[i].year}.`,[events[i-1].name]);
  }
 });
}
};
