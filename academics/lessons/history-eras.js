// Original history lesson. A fictional Oakhaven history is divided into named eras that cover every
// year exactly once: each era's last year is one less than the next era's first year, so there are no
// gaps and no overlaps. Every answer is computed straight from ERAS (the era boundaries) and the year(s)
// a question names: which era a year falls in, which era is the chronological neighbour of another, and
// how many years an era spans when both its first and last year are counted. No fact here is invented
// per question; ERAS is the one small table this topic needs, and it is fixed and given in the file.
const ERAS=[["The Settler Years",1704,1751],["The Mill Years",1752,1808],["The Market Years",1809,1846],
 ["The Bridge Years",1847,1901],["The Railway Years",1902,1933],["The Library Years",1934,1999]];
const NAMES=ERAS.map(e=>e[0]);
const short=n=>n.replace(/^The /,'');
const bare=n=>short(n).replace(/ Years$/,'');
const eraIdxOf=y=>ERAS.findIndex(([,s,e])=>y>=s&&y<=e);
const listOf=arr=>arr.length>1?arr.slice(0,-1).join(', ')+' or '+arr[arr.length-1]:arr[0];
const span=([,s,e])=>e-s+1;
const PIC={t:'setups',title:'Oakhaven eras',rows:ERAS.map(([n,s,e])=>[n,s,e]),head:'Era',cols:['From','To']};
export default {
id:"history-e-eras",
subject:"history",
level:3,
grade:4,
title:"Eras on a timeline",
goal:"Use a table of named eras to say which era a year belongs to, which era comes next to another, and how many years an era spans.",
standard:"C3 D2.His.1.3-5: use periods (eras) to organize time",
points:20,
skills:{"which":"Which era a year is in","before":"Which era is next to another","span":"How many years an era covers"},
steps:[
{"skill":"which","say":"Historians often divide a long stretch of time into eras: named periods that come one after another. In Oakhaven's history, each era's last year comes right before the next era's first year, so every year belongs to exactly one era.","pic":PIC},
{"skill":"which","say":"To find a year's era, look down the table for the row whose From and To years the year falls between. A year that is exactly a row's From or To year still belongs to that row, since both ends are counted as part of the era.","pic":PIC,
 "check":{"prompt":"According to Oakhaven's timeline, in 1847, which era was it: The Market Years, The Bridge Years, The Railway Years or The Settler Years?","answer":"The Bridge Years","options":["The Market Years","The Bridge Years","The Railway Years","The Settler Years"],"hint":"Find the row in the era table whose From and To years hold 1847.","pic":PIC}},
{"skill":"before","say":"The eras in Oakhaven's history are listed in order, from earliest to latest. The era right above another in the table came just before it, and the era right below came just after.","pic":PIC},
{"skill":"before","say":"In our table, the Settler Years is the first era shown and the Library Years is the last. The table does not describe what happened before or after the years it covers.","pic":PIC,
 "check":{"prompt":"According to Oakhaven's timeline, which era came just after The Market Years: The Mill Years, The Bridge Years or The Railway Years?","answer":"The Bridge Years","options":["The Mill Years","The Bridge Years","The Railway Years"],"hint":"Find The Market Years in the table and read the row right after it.","pic":PIC}},
{"skill":"span","say":"To find how many years an era covers, take its first year away from its last year, then add one, since the first year itself is also counted. For example, an era running from 1820 to 1869 covers 1869 - 1820 + 1 = 50 years, counting both years.","pic":PIC},
{"skill":"span","say":"Counting both years matters: from 1820 to 1869 is 50 years, not 49, because 1820 is a year of the era too, not just a starting line.","pic":PIC,
 "check":{"prompt":"According to Oakhaven's timeline, counting both years, how many years does The Railway Years cover?","answer":32,"options":[30,31,32],"hint":"Take the From year away from the To year, then add one.","pic":PIC}}],
progression:{"requires":["history-e-years"],"operations":2,"demand":"Match a year to the era that contains it from a table of era boundaries, name the era right before or after another, and count an era's span inclusively."},
items(add){
 const _SKIP=new Set(["According to Oakhaven's timeline, in 1847, which era was it: The Market Years, The Bridge Years, The Railway Years or The Settler Years?",
  "According to Oakhaven's timeline, which era came just after The Market Years: The Mill Years, The Bridge Years or The Railway Years?",
  "According to Oakhaven's timeline, counting both years, how many years does The Railway Years cover?",
  `According to Oakhaven's timeline, in 1847, which era was it: ${listOf(NAMES)}?`,
  "According to Oakhaven's timeline, which era came just after The Market Years?"]),_add=add;
 add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
 const years=new Set();
 for(let y=1704;y<=1999;y+=6)years.add(y);
 for(const [,s,e] of ERAS){years.add(s);years.add(e);}
 for(const y of [...years].sort((a,b)=>a-b)){
  const i=eraIdxOf(y),[name,s,e]=ERAS[i];
  add('which',`According to Oakhaven's timeline, in ${y}, which era was it: ${listOf(NAMES)}?`,name,PIC,
   `${y} is from ${s} to ${e}, which is ${name}.`,[short(name),bare(name)]);
 }
 for(const [name,s,e] of ERAS){
  const anchors=new Set([s,s+Math.round((e-s)/3),s+Math.round(2*(e-s)/3),e]),i=eraIdxOf(s);
  for(const y of anchors){
   if(i>0){const [pn,ps,pe]=ERAS[i-1];
    add('before',`According to Oakhaven's timeline, which era came just before the era that includes the year ${y}?`,pn,PIC,
     `${y} is in ${name} (${s} to ${e}), and the era right before it is ${pn} (${ps} to ${pe}).`,[short(pn),bare(pn)]);}
   if(i<ERAS.length-1){const [nn,ns,ne]=ERAS[i+1];
    add('before',`According to Oakhaven's timeline, which era came just after the era that includes the year ${y}?`,nn,PIC,
     `${y} is in ${name} (${s} to ${e}), and the era right after it is ${nn} (${ns} to ${ne}).`,[short(nn),bare(nn)]);}
  }
  if(i>0){const [pn]=ERAS[i-1];add('before',`According to Oakhaven's timeline, which era came just before ${name}?`,pn,PIC,`${pn} comes right above ${name} in the era table, so it came just before.`,[short(pn),bare(pn)]);}
  if(i<ERAS.length-1){const [nn]=ERAS[i+1];add('before',`According to Oakhaven's timeline, which era came just after ${name}?`,nn,PIC,`${nn} comes right below ${name} in the era table, so it came just after.`,[short(nn),bare(nn)]);}
  const sp=span(ERAS[i]);
  for(const y of anchors)
   add('span',`According to Oakhaven's timeline, counting both years, how many years does the era that includes the year ${y} cover?`,sp,PIC,
    `${y} is in ${name}, which runs from ${s} to ${e}: ${e} - ${s} + 1 = ${sp} years, counting both years.`);
  add('span',`According to Oakhaven's timeline, counting both years, how many years does ${name} cover?`,sp,PIC,
   `${name} runs from ${s} to ${e}: ${e} - ${s} + 1 = ${sp} years, counting both years.`);
 }
}
};
