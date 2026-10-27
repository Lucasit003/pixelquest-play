// Middle School topic (Grade 7, NGSS MS-LS2-1): how populations change. Every answer is computed from the numbers
// in its own question with the rules the lesson states: over a season, end = start + births + arrivals - deaths -
// departures; a population that doubles every fixed time is the start × 2 once for each doubling; and a table is
// read one season at a time with a running total (births - deaths is each season's change). Every place, count
// and survey is fictional. The doubling times are stated in each question; the one real fact used is that some
// bacteria can divide about every 20 minutes in ideal conditions. Real populations cannot keep doubling, and the
// lesson says why: limited food, water and space slow their growth.
const PLACES=[['meadow','rabbits'],['pond','frogs'],['forest','deer'],['marsh','ducks'],['island','seabirds'],['prairie','prairie dogs'],['reef','crabs'],['valley','foxes']];
const SEASONS=['spring','summer','autumn','winter'];
const STARTS=[120,150,180,200,240,250,300,360,400,450,500,600];
const ORG=[{n:'bacteria',T:20,u:'minutes'},{n:'bacteria',T:30,u:'minutes'},{n:'yeast cells',T:2,u:'hours'},{n:'duckweed plants',T:3,u:'days'},{n:'algae cells',T:2,u:'days'},{n:'aphids',T:7,u:'days'}];
const SEED=[5,10,20,25,30,40,50,60,75,100,120,150,200];
/* Each table's four seasonal changes (births - deaths), handed to the seasons in turn; one biggest rise, one biggest fall. */
const NETS=[[30,15,-10,-25],[40,10,-5,-20],[25,20,-15,-30],[35,5,-20,-10]];
const art=w=>/^[aeiou]/.test(w)?'an':'a';
const fmt=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,',');
const season=(title,rows)=>({t:'setups',title,head:'Quantity',rows,cols:['Count']});
export default {
id:'science-m-population-growth',subject:'science',level:4,grade:7,standard:'NGSS MS-LS2-1',
title:'Population growth',
goal:'Work out how a population changes from its births, deaths, arrivals and departures, follow a population that doubles, and read a fictional survey table season by season.',
points:20,
skills:{change:'Births, deaths and migration',doubling:'Doubling populations',table:'Reading a population table'},
steps:[
 {skill:'change',say:'A population is all the members of one species living in the same area. Births and arrivals from outside add members to it; deaths and departures take members away.',pic:{t:'setups',title:'What changes a population',head:'Change',rows:[['births','adds'],['arrivals','adds'],['deaths','takes away'],['departures','takes away']],cols:['Effect']}},
 {skill:'change',say:'For one season: end = start + births + arrivals − deaths − departures. A fictional meadow starts spring with 200 rabbits. 80 are born, 30 die, 10 arrive and 20 leave, so it ends spring with 200 + 80 + 10 − 30 − 20 = 240.',eq:'200 + 80 + 10 − 30 − 20 = 240',pic:season('Rabbits in a fictional meadow, spring',[['start','200'],['born','80'],['arrived','10'],['died','30'],['left','20'],['end','240']]),
  check:{prompt:'Try it: a fictional pond has 150 frogs at the start of summer. During summer 60 are born, 25 die, 5 arrive and 20 leave. How many frogs are there at the end of summer?',answer:170,options:[170,185,260],hint:'Add the births and arrivals to 150, then take away the deaths and departures.',pic:season('Frogs in a fictional pond, summer',[['start','150'],['born','60'],['died','25'],['arrived','5'],['left','20'],['end','?']])}},
 {skill:'change',say:'Look at all four numbers, not only the births and deaths. A population with more births than deaths can still shrink if many members leave, and one with more deaths than births can still grow if many arrive.',pic:season('A fictional island’s seabirds, one summer',[['born','40'],['died','25'],['arrived','5'],['left','30'],['change','10 fewer']])},
 {skill:'doubling',say:'With plenty of food and space, a population can double again and again. In ideal conditions some bacteria divide about every 20 minutes, so a fictional colony of 100 becomes 200, then 400, then 800 in one hour.',eq:'100 × 2 × 2 × 2 = 800',pic:{t:'tape',title:'A fictional colony, in hundreds',rows:[{label:'start',n:1},{label:'20 minutes',n:2},{label:'40 minutes',n:4},{label:'60 minutes',n:8}]}},
 {skill:'doubling',say:'Count the doublings first: divide the time by the doubling time. Then multiply the start by 2 once for each doubling. A fictional population of 50 that doubles every 3 days doubles 4 times in 12 days: 50 × 2 × 2 × 2 × 2 = 800.',eq:'12 ÷ 3 = 4 doublings,  50 × 2⁴ = 800',pic:season('A fictional population doubling every 3 days',[['day 0','50'],['day 3','100'],['day 6','200'],['day 9','400'],['day 12','800']]),
  check:{prompt:'Try it: a fictional population of 30 yeast cells doubles every 2 hours. How many cells are there after 8 hours?',answer:480,options:[480,240,120,960],hint:'8 ÷ 2 = 4 doublings. Multiply 30 by 2 four times.',pic:season('A fictional yeast population',[['start','30 cells'],['doubling time','2 hours'],['after 8 hours','?']])}},
 {skill:'doubling',say:'Real populations cannot keep doubling. As food, water and space run short, fewer young survive and more members die, so growth slows. Limited resources limit how large a population can grow.',pic:{t:'setups',title:'Resources and growth',head:'Resources',rows:[['plenty','fast growth'],['running short','growth slows'],['used up','no growth, or a fall']],cols:['Population']}},
 {skill:'table',say:'Scientists track a population by counting it over time and recording the counts in a table. Read the table one season at a time and keep a running total: add the births and take away the deaths.',pic:{t:'setups',title:'A fictional pond survey, starting with 100 frogs',head:'Season',rows:[['spring','40','10'],['summer','30','15'],['autumn','10','20'],['winter','0','25']],cols:['Born','Died']}},
 {skill:'table',say:'To find the season with the biggest change, work out births − deaths for each season and compare. In the pond survey, spring is +30, summer +15, autumn −10 and winter −25, so the frogs grew most in spring and fell most in winter.',eq:'40 − 10 = 30,  30 − 15 = 15,  10 − 20 = −10,  0 − 25 = −25',pic:{t:'setups',title:'A fictional pond survey, starting with 100 frogs',head:'Season',rows:[['spring','40','10','+30'],['summer','30','15','+15'],['autumn','10','20','−10'],['winter','0','25','−25']],cols:['Born','Died','Change']},
  check:{prompt:'Try it: a fictional herd has 80 deer at the start of spring, and no deer arrive or leave. Spring: 30 born, 10 died. Summer: 20 born, 5 died. How many deer are there at the end of summer?',answer:115,options:[115,100,135],hint:'Keep a running total: 80 + 30 − 10, then add the summer births and take away the summer deaths.',pic:{t:'setups',title:'A fictional herd, starting with 80 deer',head:'Season',rows:[['spring','30','10'],['summer','20','5']],cols:['Born','Died']}}}],
progression:{requires:['science-m-energy-pyramid','science-e-habitats'],operations:3,demand:'Add the gains and subtract the losses in one season, count doublings by dividing a time and multiply by 2 for each, and keep a running total through a table.'},
items(add){
 /* One season's end count from births, deaths, arrivals and departures. */
 for(let k=0;k<20;k++){const [pl,an]=PLACES[k%8],s=SEASONS[k%4],N=STARTS[(k*5)%12],b=20+5*((k*3)%17),d=10+5*((k*7)%11),i=5+5*((k*2)%7),e=5+5*((k*5+1)%8),E=N+b+i-d-e;
  add('change',`A fictional ${pl} has ${N} ${an} at the start of ${s}. During ${s}, ${b} are born, ${d} die, ${i} arrive from outside and ${e} leave. How many ${an} are there at the end of ${s}?`,E,season(`${an} in a fictional ${pl}`,[['start',`${N}`],['born',`${b}`],['died',`${d}`],['arrived',`${i}`],['left',`${e}`],['end','?']]),`end = ${N} + ${b} + ${i} - ${d} - ${e} = ${E}.`);}
 /* Grow or shrink: four kinds in turn. Half have births and deaths pointing one way while migration wins, so the
    births and deaths alone never answer it. */
 for(let k=0;k<28;k++){const cat=k%4,[pl,an]=PLACES[(k+3)%8],s=SEASONS[(k+1)%4],N=STARTS[(k*7+2)%12];let b,d,i,e;
  if(cat===0){b=30+5*(k%7);d=b-10-5*(k%3);i=5+5*(k%2);e=(b-d)+i+5+5*((k>>2)%4);}
  else if(cat===1){b=40+5*(k%6);d=b-15-5*((k>>2)%4);i=5+5*(k%3);e=5+5*(k%2);}
  else if(cat===2){d=30+5*(k%7);b=d-10-5*(k%3);e=5+5*(k%3);i=(d-b)+e+5+5*((k>>2)%4);}
  else{d=40+5*(k%6);b=d-15-5*((k>>2)%4);e=5+5*(k%2);i=5+5*(k%3);}
  const ch=b+i-d-e,ans=ch>0?'grow':'shrink';
  add('change',`A fictional ${pl} has ${N} ${an} at the start of ${s}. During ${s}, ${b} are born, ${d} die, ${i} arrive from outside and ${e} leave. Did the population grow or shrink during ${s}?`,ans,season(`${an} in a fictional ${pl}`,[['start',`${N}`],['born',`${b}`],['died',`${d}`],['arrived',`${i}`],['left',`${e}`]]),`The gains are ${b} + ${i} = ${b+i} and the losses are ${d} + ${e} = ${d+e}, so the population ${ch>0?`grew by ${ch}`:`shrank by ${-ch}`}.`,[ans==='grow'?'grew':'shrank']);}
 /* How many left: the start, the end, the births and deaths are known, and nobody arrived. */
 for(let k=0;k<12;k++){const [pl,an]=PLACES[(k+5)%8],s=SEASONS[(k+2)%4],N=STARTS[(k*5+3)%12],b=30+5*((k*3)%9),d=15+5*((k*2)%5),e=5+5*((k*7)%6),E=N+b-d-e;
  add('change',`A fictional ${pl} has ${N} ${an} at the start of ${s} and ${E} at the end. During ${s}, ${b} are born, ${d} die and none arrive. How many ${an} left the ${pl}?`,e,season(`${an} in a fictional ${pl}`,[['start',`${N}`],['end',`${E}`],['born',`${b}`],['died',`${d}`],['left','?']]),`Without departures there would be ${N} + ${b} - ${d} = ${N+b-d}. There are ${E}, so ${N+b-d} - ${E} = ${e} left.`);}
 /* Doubling: forwards (some over hours, from minutes), how long to reach a count, and the start from the end. */
 for(let k=0;k<18;k++){const o=ORG[k%ORG.length],N=SEED[(k*5)%SEED.length];
  if(o.u==='minutes'&&k%3===0){const h=1+Math.floor(k/6)%2,dbl=60*h/o.T,M=N*2**dbl;
   add('doubling',`A fictional population of ${N} ${o.n} doubles every ${o.T} minutes, with plenty of food and space. How many ${o.n} are there after ${h} hour${h>1?'s':''}?`,M,season(`A fictional population of ${o.n}`,[['start',`${N}`],['doubling time',`${o.T} minutes`],[`after ${h} hour${h>1?'s':''}`,'?']]),`${h} hour${h>1?'s':''} = ${60*h} minutes = ${dbl} doublings, so ${N} × 2${dbl>1?` ${dbl} times`:''} = ${fmt(M)}.`);}
  else{const dbl=1+(k%5),M=N*2**dbl;
   add('doubling',`A fictional population of ${N} ${o.n} doubles every ${o.T} ${o.u}, with plenty of food and space. How many ${o.n} are there after ${dbl*o.T} ${o.u}?`,M,season(`A fictional population of ${o.n}`,[['start',`${N}`],['doubling time',`${o.T} ${o.u}`],[`after ${dbl*o.T} ${o.u}`,'?']]),`${dbl*o.T} ÷ ${o.T} = ${dbl} doubling${dbl>1?'s':''}, so ${N} × ${2**dbl} = ${fmt(M)}.`);}}
 for(let k=0;k<12;k++){const o=ORG[(k+2)%ORG.length],N=SEED[(k*3+1)%SEED.length],dbl=2+(k%4),M=N*2**dbl;
  add('doubling',`A fictional population of ${N} ${o.n} doubles every ${o.T} ${o.u}, with plenty of food and space. How many ${o.u} does it take to reach ${fmt(M)}?`,dbl*o.T,season(`A fictional population of ${o.n}`,[['start',`${N}`],['doubling time',`${o.T} ${o.u}`],['target',`${fmt(M)}`],['time','?']]),`${N} doubles ${dbl} times to reach ${fmt(M)} (${N} × ${2**dbl}), and ${dbl} × ${o.T} = ${dbl*o.T} ${o.u}.`);}
 for(let k=0;k<12;k++){const o=ORG[(k+4)%ORG.length],N=SEED[(k*7+2)%SEED.length],dbl=1+((k+2)%5),M=N*2**dbl;
  add('doubling',`A fictional population of ${o.n} doubles every ${o.T} ${o.u}, with plenty of food and space. After ${dbl*o.T} ${o.u} there are ${fmt(M)}. How many were there at the start?`,N,season(`A fictional population of ${o.n}`,[['doubling time',`${o.T} ${o.u}`],[`after ${dbl*o.T} ${o.u}`,`${fmt(M)}`],['start','?']]),`${dbl*o.T} ÷ ${o.T} = ${dbl} doubling${dbl>1?'s':''}, so the start was ${fmt(M)} ÷ ${2**dbl} = ${N}.`);}
 /* A season-by-season survey table: the count at the end of a season, the season with the biggest rise, and the
    season with the biggest fall. The changes rotate, so every season gets each role. */
 for(let k=0;k<12;k++){const [pl,an]=PLACES[(k+1)%8],N=[60,80,100,120,150,200][k%6],v=NETS[Math.floor(k/4)%4],net=SEASONS.map((_,s)=>v[(s+k)%4]);
  const born=[],died=[];net.forEach((x,s)=>{if(x>=0){died[s]=5+5*((k+s)%4);born[s]=died[s]+x;}else{born[s]=5*((k+s)%4);died[s]=born[s]-x;}});
  const tbl=SEASONS.map((s,j)=>`${s[0].toUpperCase()+s.slice(1)}: ${born[j]} born, ${died[j]} died.`).join(' ');
  const head=`A fictional survey records the ${an} in ${art(pl)} ${pl}, and no ${an} arrive or leave. There are ${N} at the start of spring. ${tbl}`;
  const pic={t:'setups',title:`${an} in a fictional ${pl}, starting with ${N}`,head:'Season',rows:SEASONS.map((s,j)=>[s,`${born[j]}`,`${died[j]}`]),cols:['Born','Died']};
  const upTo=1+(k%3),end=N+net.slice(0,upTo+1).reduce((a,b)=>a+b,0),run=[N];net.slice(0,upTo+1).forEach(x=>run.push(run.at(-1)+x));
  add('table',`${head} How many ${an} are there at the end of ${SEASONS[upTo]}?`,end,pic,`Keep a running total: ${run.join(', ')}. At the end of ${SEASONS[upTo]} there are ${end}.`);
  const most=net.indexOf(Math.max(...net)),least=net.indexOf(Math.min(...net)),chg=net.map((x,s)=>`${SEASONS[s]} ${x>0?'+':''}${x}`).join(', ');
  add('table',`${head} In which season did the population grow the most: spring, summer, autumn or winter?`,SEASONS[most],pic,`births - deaths: ${chg}. The biggest rise is in ${SEASONS[most]}.`);
  add('table',`${head} In which season did the population fall the most: spring, summer, autumn or winter?`,SEASONS[least],pic,`births - deaths: ${chg}. The biggest fall is in ${SEASONS[least]}.`);}
}
};
