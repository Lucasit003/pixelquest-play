// Middle School topic (Grade 6, C3 D2.His.1.6-8): dating across BCE and CE. Every answer is computed from the
// dates in its own question with the rules the lesson states: BCE years count down to 1 BCE, CE years count up
// from 1 CE, and 1 CE follows 1 BCE straight away, because there is no year 0. So a span within one era is a
// subtraction, a span from BCE into CE is the two numbers added minus 1, and the Nth century runs from year
// (N-1)*100 + 1 to year N*100 (in BCE, from N*100 BCE down to (N-1)*100 + 1 BCE). The towns, walls and people are
// fictional; nothing here is a fact asserted by a model. Extends history-e-decades-centuries (BC years) and
// history-e-lifespans (ages and spans).
const D=(n,e)=>`${n} ${e}`;
/* Position on one unbroken count of years: 1 CE is 1, 1 BCE is 0, 2 BCE is -1. Only used to compare and subtract. */
const pos=(n,e)=>e==='CE'?n:1-n;
const ORD=n=>{const t=n%100,u=n%10;return n+(t>=11&&t<=13?'th':u===1?'st':u===2?'nd':u===3?'rd':'th');};
const cent=n=>Math.ceil(n/100);
const tl=(events,hint)=>({t:'timeline',events,...(hint?{hint:true}:{})});
/* A timeline of the two dates with the year-one crossing between them when they straddle it. */
const across=(a,ea,b,eb)=>ea===eb?[D(a,ea),D(b,eb)]:[D(a,ea),'1 BCE','1 CE',D(b,eb)].filter((x,i,l)=>l.indexOf(x)===i);
const accDate=(n,e,other)=>{const out=[`${n}${e}`.toLowerCase(),`${n} ${e==='BCE'?'B.C.E.':'C.E.'}`];if(e==='BCE')out.push(`${n} BC`,`${n}BC`);else out.push(`AD ${n}`,`${n} AD`);if(other!==n)out.push(String(n));return out;};
const spanWhy=(a,ea,b,eb)=>{const r=pos(b,eb)-pos(a,ea);
 if(ea==='BCE'&&eb==='CE')return `${a>1?`From ${D(a,ea)} to 1 BCE is ${a-1} year${a-1===1?'':'s'}, one`:'From 1 BCE, one'} more year reaches 1 CE${b>1?`, and ${b-1} more ${b-1===1?'reaches':'reach'} ${D(b,eb)}`:''}: ${a} + ${b} − 1 = ${r}. There is no year 0.`;
 if(ea==='BCE')return `Both years are BCE and count down, so subtract: ${a} − ${b} = ${r}.`;
 return `Both years are CE and count up, so subtract: ${b} − ${a} = ${r}.`;};
export default {
id:'history-m-bce-ce',subject:'history',level:4,grade:6,standard:'C3 D2.His.1.6-8',
title:'Dating across BCE and CE',
goal:'Tell which of two dates is earlier, count the years between dates on both sides of year 1 (there is no year 0), and name the century a year belongs to.',
points:20,
skills:{order:'Which date is earlier',span:'Years between dates and ages',century:'Centuries BCE and CE'},
steps:[
 {skill:'order',say:'Years before year 1 are written BCE, before the Common Era, and they count down: 300 BCE, 200 BCE, 100 BCE. Years from 1 on are written CE and count up. 1 CE comes straight after 1 BCE: there is no year 0.',eq:'… 2 BCE, 1 BCE, 1 CE, 2 CE …',pic:tl(['300 BCE','100 BCE','1 BCE','1 CE','100 CE','300 CE'])},
 {skill:'order',say:'Three rules put dates in order. Every BCE year is earlier than every CE year. Between two BCE years, the bigger number is earlier. Between two CE years, the smaller number is earlier.',eq:'450 BCE → 120 BCE → 45 CE → 300 CE',pic:tl(['450 BCE','120 BCE','1 BCE','1 CE','45 CE','300 CE']),
  check:{prompt:'Try it: which year is earlier, 60 CE or 110 BCE?',answer:'110 BCE',options:['110 BCE','60 CE'],hint:'Every BCE year comes before every CE year, whatever the numbers.',pic:tl(['60 CE','110 BCE'])}},
 {skill:'span',say:'When both dates are BCE, subtract the smaller number from the bigger. From 300 BCE to 120 BCE is 300 − 120 = 180 years, because BCE years count down.',eq:'300 − 120 = 180 years',pic:tl(['300 BCE','120 BCE'])},
 {skill:'span',say:'When the dates are on both sides of year 1, add the two numbers and take away 1, because there is no year 0. From 50 BCE to 1 BCE is 49 years, one more year reaches 1 CE, and 49 more reach 50 CE: 99 years.',eq:'50 + 50 − 1 = 99 years',pic:tl(['50 BCE','1 BCE','1 CE','50 CE']),
  check:{prompt:'Try it: a fictional bridge was built in 20 BCE and swept away in 20 CE. For how many years did it stand?',answer:39,options:[39,40,41,0],hint:'Add the two numbers, then take away 1 for the missing year 0.',pic:tl(['20 BCE','1 BCE','1 CE','20 CE'])}},
 {skill:'span',say:'Ages work the same way. Someone born in 70 BCE turned 40 in 30 BCE, because the years count down: 70 − 30 = 40. Someone born in 40 BCE turned 59 in 20 CE: 40 + 20 − 1 = 59.',eq:'70 − 30 = 40     40 + 20 − 1 = 59',pic:tl(['70 BCE','40 BCE','30 BCE','1 BCE','1 CE','20 CE'])},
 {skill:'century',say:'A century is 100 years. The 1st century CE is 1 to 100 CE and the 2nd century CE is 101 to 200 CE. Counting back, the 1st century BCE is 100 to 1 BCE, and the 3rd century BCE is 300 to 201 BCE.',pic:{t:'setups',title:'Centuries on both sides of year 1',head:'Century',rows:[['3rd century BCE','300 BCE','201 BCE'],['2nd century BCE','200 BCE','101 BCE'],['1st century BCE','100 BCE','1 BCE'],['1st century CE','1 CE','100 CE'],['2nd century CE','101 CE','200 CE']],cols:['Starts','Ends']}},
 {skill:'century',say:'To find a year’s century, divide its number by 100 and round up. 250 BCE is in the 3rd century BCE, and so is 300 BCE, but 301 BCE is in the 4th. The same rule works for CE years.',eq:'250 ÷ 100 = 2.5, round up: 3rd century',pic:tl(['400 BCE','301 BCE','300 BCE','250 BCE','201 BCE','200 BCE']),
  check:{prompt:'Try it: in which century BCE is the year 520 BCE? Type the number.',answer:6,options:[6,5,52],hint:'Divide 520 by 100 and round up.',pic:tl(['600 BCE','520 BCE','501 BCE'])}}],
progression:{requires:['history-e-decades-centuries','history-e-lifespans'],operations:2,demand:'Place a date on one count that crosses year 1 without a year 0, then compare, subtract (or add and take away 1), and turn a year into its century by dividing by 100 and rounding up.'},
items(add){
 const seen=new Set(),once=(skill,prompt,...rest)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,...rest);};
 /* Which is earlier or later. Each pair is [first number, first era, second number, second era]; the listed
    order alternates so the earlier date comes first about half the time. */
 const PAIRS=[[450,'BCE',120,'BCE'],[300,'BCE',250,'BCE'],[1200,'BCE',950,'BCE'],[75,'BCE',40,'BCE'],[2100,'BCE',1800,'BCE'],[612,'BCE',539,'BCE'],[331,'BCE',323,'BCE'],[90,'BCE',15,'BCE'],[1500,'BCE',1450,'BCE'],[800,'BCE',776,'BCE'],
  [90,'BCE',40,'CE'],[200,'BCE',150,'CE'],[30,'BCE',30,'CE'],[500,'BCE',1200,'CE'],[5,'BCE',5,'CE'],[44,'BCE',14,'CE'],[120,'BCE',79,'CE'],[350,'BCE',100,'CE'],[1,'BCE',1,'CE'],[63,'BCE',800,'CE'],[700,'BCE',65,'CE'],[16,'BCE',9,'CE'],
  [410,'CE',476,'CE'],[800,'CE',1066,'CE'],[64,'CE',79,'CE'],[301,'CE',312,'CE'],[1204,'CE',1453,'CE']];
 PAIRS.forEach(([a,ea,b,eb],i)=>{const first=pos(a,ea)<pos(b,eb)?[a,ea]:[b,eb],last=first[0]===a&&first[1]===ea?[b,eb]:[a,ea];
  for(const [k,word] of [[0,'earlier'],[1,'later']]){const flip=(i+k)%2===1,x=flip?[b,eb]:[a,ea],y=flip?[a,ea]:[b,eb],ans=word==='earlier'?first:last;
   once('order',`Which year is ${word}: ${D(...x)} or ${D(...y)}?`,D(...ans),tl([D(...first),D(...last)],true),
    first[1]!==last[1]?`Every BCE year is earlier than every CE year, so ${D(...first)} is earlier and ${D(...last)} is later.`:first[1]==='BCE'?`BCE years count down, so the bigger number, ${D(...first)}, is earlier and ${D(...last)} is later.`:`CE years count up, so the smaller number, ${D(...first)}, is earlier and ${D(...last)} is later.`,
    accDate(ans[0],ans[1],(ans===first?last:first)[0]));}});
 /* Earliest or latest of three. */
 const TRIPLES=[[[120,'BCE'],[45,'CE'],[300,'BCE']],[[10,'CE'],[10,'BCE'],[100,'BCE']],[[650,'BCE'],[560,'BCE'],[600,'BCE']],[[33,'CE'],[44,'BCE'],[4,'BCE']],[[1,'CE'],[1,'BCE'],[2,'BCE']],[[250,'CE'],[250,'BCE'],[25,'CE']],
  [[480,'BCE'],[490,'BCE'],[431,'BCE']],[[14,'CE'],[27,'BCE'],[37,'CE']],[[1000,'BCE'],[100,'CE'],[10,'BCE']],[[218,'BCE'],[202,'BCE'],[146,'BCE']],[[70,'CE'],[7,'BCE'],[700,'BCE']],[[399,'BCE'],[323,'BCE'],[347,'BCE']]];
 TRIPLES.forEach((t,i)=>{const s=[...t].sort((p,q)=>pos(...p)-pos(...q)),list=`${D(...t[0])}, ${D(...t[1])} or ${D(...t[2])}`;
  for(const [word,ans] of [['earliest',s[0]],['latest',s[2]]])
   once('order',`Which of these years is the ${word}: ${list}?`,D(...ans),tl(s.map(p=>D(...p)),true),`In order from earliest to latest: ${s.map(p=>D(...p)).join(', ')}.`,accDate(ans[0],ans[1],t.find(p=>p!==ans&&p[0]===ans[0])?ans[0]:-1));});
 /* Spans between two dates, in a few fictional settings. The earlier date always comes first. */
 const SPANS=[[50,'BCE',50,'CE'],[1,'BCE',1,'CE'],[10,'BCE',10,'CE'],[100,'BCE',100,'CE'],[44,'BCE',14,'CE'],[63,'BCE',79,'CE'],[27,'BCE',14,'CE'],[4,'BCE',30,'CE'],[200,'BCE',150,'CE'],[150,'BCE',200,'CE'],
  [120,'BCE',45,'CE'],[75,'BCE',130,'CE'],[12,'BCE',9,'CE'],[300,'BCE',200,'CE'],[65,'BCE',8,'CE'],[480,'BCE',20,'CE'],[90,'BCE',10,'CE'],[25,'BCE',25,'CE'],[333,'BCE',67,'CE'],[5,'BCE',6,'CE'],[19,'BCE',81,'CE'],[250,'BCE',250,'CE'],[146,'BCE',117,'CE'],[31,'BCE',69,'CE'],[2,'BCE',2,'CE'],
  [300,'BCE',120,'BCE'],[480,'BCE',323,'BCE'],[753,'BCE',509,'BCE'],[1200,'BCE',1050,'BCE'],[612,'BCE',539,'BCE'],[221,'BCE',206,'BCE'],[509,'BCE',27,'BCE'],[2600,'BCE',2500,'BCE'],[1550,'BCE',1070,'BCE'],[776,'BCE',490,'BCE'],[100,'BCE',1,'BCE'],[60,'BCE',6,'BCE'],
  [79,'CE',410,'CE'],[476,'CE',1453,'CE'],[14,'CE',117,'CE']];
 const SET=[(a,b)=>`A fictional city wall was begun in ${a} and finished in ${b}. How many years did the building take?`,
  (a,b)=>`The fictional harbour town of Saltmere was founded in ${a} and abandoned in ${b}. For how many years did the town stand?`,
  (a,b)=>`A fictional temple was dedicated in ${a} and closed in ${b}. For how many years was it in use?`,
  (a,b)=>`How many years passed from ${a} to ${b}?`];
 SPANS.forEach(([a,ea,b,eb],i)=>{const r=pos(b,eb)-pos(a,ea);
  once('span',SET[i%SET.length](D(a,ea),D(b,eb)),r,tl(across(a,ea,b,eb)),spanWhy(a,ea,b,eb),[`${r} years`]);
  if(ea!==eb&&i%3===0)once('span',SET[(i+2)%SET.length](D(a,ea),D(b,eb)),r,tl(across(a,ea,b,eb)),spanWhy(a,ea,b,eb),[`${r} years`]);});
 /* Ages: born in a BCE year, the age turned in a later BCE or CE year. */
 const AGES=[[70,'BCE',30,'BCE'],[95,'BCE',40,'BCE'],[63,'BCE',14,'BCE'],[84,'BCE',21,'BCE'],[52,'BCE',3,'BCE'],[40,'BCE',20,'CE'],[20,'BCE',40,'CE'],[15,'BCE',45,'CE'],[6,'BCE',30,'CE'],[30,'BCE',6,'CE'],[60,'BCE',10,'CE'],[10,'BCE',60,'CE'],
  [3,'BCE',70,'CE'],[25,'BCE',25,'CE'],[45,'BCE',12,'CE'],[18,'BCE',50,'CE'],[50,'BCE',18,'CE'],[2,'BCE',2,'CE'],[35,'BCE',35,'CE'],[9,'BCE',47,'CE'],[47,'BCE',9,'CE'],[1,'BCE',33,'CE']];
 const WHO=[['poet','she'],['general','he'],['potter','she'],['astronomer','he'],['queen','she'],['scribe','he']];
 AGES.forEach(([a,ea,b,eb],i)=>{const [role,pr]=WHO[i%WHO.length],r=pos(b,eb)-pos(a,ea);
  once('span',`A fictional ${role} was born in ${D(a,ea)}. How old did ${pr} turn in ${D(b,eb)}?`,r,tl(across(a,ea,b,eb)),spanWhy(a,ea,b,eb).replace(/=( \d+)\./,`=$1, so ${pr} turned$1.`),[`${r} years old`]);});
 /* Centuries: which century a year is in, and where a century starts or ends. */
 for(const y of [450,250,201,300,99,100,101,1,750,1001,1250,599,600,801,330,44,2500,1999])
  once('century',`In which century BCE is the year ${y} BCE? Type the number.`,cent(y),tl([`${cent(y)*100} BCE`,`${y} BCE`,`${(cent(y)-1)*100+1} BCE`],true),`${y} ÷ 100 rounded up is ${cent(y)}, so ${y} BCE is in the ${ORD(cent(y))} century BCE, which runs from ${cent(y)*100} BCE to ${(cent(y)-1)*100+1} BCE.`);
 for(const y of [1,100,101,476,800,1066,1200,1453,1901,2000,2026,33,250,999,1000,1001])
  once('century',`In which century CE is the year ${y} CE? Type the number.`,cent(y),tl([`${(cent(y)-1)*100+1} CE`,`${y} CE`,`${cent(y)*100} CE`],true),`${y} ÷ 100 rounded up is ${cent(y)}, so ${y} CE is in the ${ORD(cent(y))} century CE, which runs from ${(cent(y)-1)*100+1} CE to ${cent(y)*100} CE.`);
 for(const n of [1,2,3,4,5,6,7,8,10,12,15,20])
  once('century',`The ${ORD(n)} century BCE runs from ${n*100} BCE down to which year BCE? Type the number.`,(n-1)*100+1,tl([`${n*100} BCE`,null]),`BCE years count down, so the ${ORD(n)} century BCE starts at ${n*100} BCE and ends at ${(n-1)*100+1} BCE; ${(n-1)*100} BCE already belongs to the next century.`);
 for(const n of [1,2,3,4,5,6,8,9,11,13,14,16,19,21])
  once('century',`The ${ORD(n)} century CE runs from which year CE up to ${n*100} CE? Type the number.`,(n-1)*100+1,tl([null,`${n*100} CE`]),`There is no year 0, so the 1st century CE starts at 1 CE; the ${ORD(n)} century CE starts at ${(n-1)*100+1} CE and ends at ${n*100} CE.`);
 /* Is this year in that century: the boundary years make the yes/no questions balanced. */
 const IN=[[300,3],[300,4],[301,4],[201,3],[200,3],[200,2],[101,2],[100,1],[100,2],[1,1],[450,5],[450,4],[1000,10],[1001,10],[999,9],[550,5],[650,7],[650,6],[99,1],[399,3]];
 IN.forEach(([y,n],i)=>{const era=i%2===0?'BCE':'CE',yes=cent(y)===n;
  once('century',`Is the year ${y} ${era} in the ${ORD(n)} century ${era}: yes or no?`,yes?'yes':'no',tl(era==='BCE'?[`${n*100} BCE`,`${(n-1)*100+1} BCE`]:[`${(n-1)*100+1} CE`,`${n*100} CE`],true),`The ${ORD(n)} century ${era} runs from ${era==='BCE'?`${n*100} BCE to ${(n-1)*100+1} BCE`:`${(n-1)*100+1} CE to ${n*100} CE`}, so ${y} ${era} is ${yes?'':'not '}in it.`);});
}
};
