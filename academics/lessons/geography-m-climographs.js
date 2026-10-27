// Middle School topic (Grade 6, C3 D2.Geo.3.6-8): reading a climograph. Every place is fictional, and its twelve
// monthly average temperatures and rainfall totals are built here from a fixed recipe (a smooth yearly curve plus a
// fixed wobble, then a few set adjustments), so nothing is a real climate record and nothing is a fact asserted by a
// model. Every answer is computed from the numbers printed in its own question with the rules the lesson states: the
// wettest and driest months are the largest and smallest rainfall, the annual temperature range is the warmest month
// minus the coldest, the yearly total is the sum of the twelve months, a season is the three months the question names,
// and the classifications ("dry", "wet month", "tropical") are simple rules stated in the question for this topic only,
// not the rules climate scientists use. Extends geography-e-rainfall-records (three months, one chart).
const MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
const SHORT=MONTHS.map(m=>m.slice(0,3));
const COS=[100,87,50,0,-50,-87,-100,-87,-50,0,50,87];
const WOB=[2,-1,3,0,-2,1,-3,2,0,-1,1,-2];
const deg=n=>n<0?`−${-n}`:`${n}`;
/* Each place: mean and swing of temperature, its warmest month (6 = July, 0 = January), and rainfall from a base, a
   wet-season bump around month `peak`, a wobble of size w, then fixed changes [month, mm]. `th` is the "wet month"
   threshold its question uses. A place whose warmest month is January takes its summer in December to February. */
const SPEC=[
 {name:'Mossbank',mean:27,amp:1,warm:6,base:160,wet:140,peak:4,w:6,th:250,fix:[[3,-16]]},
 {name:'Cinder Flats',mean:23,amp:9,warm:6,base:2,wet:14,peak:0,w:1,th:10,fix:[[5,5]]},
 {name:'Saltmarsh Key',mean:26,amp:2,warm:6,base:8,wet:40,peak:7,w:2,th:30},
 {name:'Greywater',mean:25,amp:3,warm:6,base:4,wet:230,peak:7,w:3,th:100,fix:[[3,3]]},
 {name:'Hollin Ridge',mean:22,amp:5,warm:6,base:60,wet:120,peak:9,w:4,th:100},
 {name:'Brackenford',mean:23,amp:5,warm:6,base:90,wet:160,peak:1,w:5,th:150},
 {name:'Dunmarrow',mean:25,amp:4,warm:0,base:6,wet:60,peak:0,w:2,th:20,fix:[[1,-7]]},
 {name:'Kettle Rock',mean:20,amp:6,warm:6,base:8,wet:55,peak:3,w:2,th:50,fix:[[4,4],[3,-9]]},
 {name:'Wren Hollow',mean:12,amp:10,warm:6,base:10,wet:40,peak:11,w:2,th:20,fix:[[8,4],[9,6]]},
 {name:'Frostmere',mean:5,amp:16,warm:6,base:20,wet:70,peak:6,w:3,th:80,fix:[[10,70],[5,-2]]},
 {name:'Pinecrag',mean:-4,amp:18,warm:6,base:8,wet:50,peak:9,w:2,th:30,fix:[[1,-1]]},
 {name:'Olive Strand',mean:16,amp:7,warm:6,base:3,wet:110,peak:0,w:2,th:50,fix:[[7,4]]},
 {name:'Southwick Bay',mean:12,amp:5,warm:0,base:60,wet:90,peak:6,w:4,th:130,fix:[[2,80],[5,-2]]},
 {name:'Rainmouth',mean:27,amp:4,warm:6,base:10,wet:450,peak:7,w:4,th:200,fix:[[10,6]]},
 {name:'Whitefell',mean:-15,amp:15,warm:6,base:4,wet:20,peak:7,w:1,th:10},
 {name:'Highcairn',mean:21,amp:2,warm:6,base:40,wet:120,peak:3,w:3,th:100,fix:[[9,150]]},
 {name:'Dustmere',mean:8,amp:14,warm:6,base:6,wet:40,peak:5,w:2,th:20},
 {name:'Ashgrove',mean:15,amp:8,warm:0,base:10,wet:45,peak:7,w:2,th:30,fix:[[7,-6]]},
 {name:'Sandreach',mean:28,amp:6,warm:6,base:3,wet:25,peak:8,w:1,th:10},
 {name:'Bramblewick',mean:10,amp:6,warm:6,base:70,wet:50,peak:11,w:4,th:100,fix:[[3,60]]},
 {name:'Flintwash',mean:13,amp:12,warm:6,base:8,wet:50,peak:3,w:2,th:30}];
const PLACES=SPEC.map((p,i)=>{const temp=[],rain=[];
 for(let m=0;m<12;m++){temp.push(p.mean+Math.round(p.amp*COS[(m-p.warm+12)%12]/100));const c=Math.max(0,COS[(m-p.peak+12)%12]);rain.push(Math.max(0,p.base+Math.round(p.wet*c*c/10000)+p.w*WOB[(m+i)%12]));}
 for(const [m,d] of p.fix||[])rain[m]+=d;return {...p,temp,rain};});
const NORTH=[['winter',[11,0,1]],['spring',[2,3,4]],['summer',[5,6,7]],['autumn',[8,9,10]]],SOUTH=[['summer',[11,0,1]],['autumn',[2,3,4]],['winter',[5,6,7]],['spring',[8,9,10]]];
const seasonsOf=p=>p.warm===0?SOUTH:NORTH;
const seasonText=p=>seasonsOf(p).map(([s,ms],i)=>`${i===3?'and ':''}${s} is ${MONTHS[ms[0]]}, ${MONTHS[ms[1]]} and ${MONTHS[ms[2]]}`).join(', ');
const list=v=>MONTHS.map((m,i)=>`${m} ${deg(v[i])}`).join(', ');
const sum=v=>v.reduce((a,b)=>a+b,0);
/* The table: six rows of two months, so every value is one cell. */
const table=(title,unit,v)=>({t:'setups',title,head:'Month',rows:[0,1,2,3,4,5].map(i=>[SHORT[i],deg(v[i]),SHORT[i+6],deg(v[i+6])]),cols:[unit,'Month',unit]});
const rainPic=p=>table(`Fictional ${p.name}: rainfall`,'mm',p.rain),tempPic=p=>table(`Fictional ${p.name}: temperature`,'°C',p.temp);
const RAIN=p=>`Monthly rainfall at fictional ${p.name}, in mm: ${list(p.rain)}.`,TEMP=p=>`Monthly average temperatures at fictional ${p.name}, in °C: ${list(p.temp)}.`;
/* The demonstration place in the steps is not in the question pool. */
const DEMO={name:'Tarn Vale',temp:[-9,-7,-1,6,12,17,21,19,13,6,-1,-6],rain:[38,30,35,48,62,85,96,88,60,52,47,41]};
const both=d=>({t:'setups',title:`Fictional ${d.name}`,head:'Month',rows:[0,1,2,3,4,5].map(i=>[SHORT[i],`${deg(d.temp[i])} °C, ${d.rain[i]} mm`,SHORT[i+6],`${deg(d.temp[i+6])} °C, ${d.rain[i+6]} mm`]),cols:['Average','Month','Average']});
export default {
id:'geography-m-climographs',subject:'geography',level:4,grade:6,standard:'C3 D2.Geo.3.6-8',
title:'Climate graphs (climographs)',
goal:'Read a place’s monthly temperature and rainfall: find the wettest and driest months and the annual temperature range, add up the year and the seasons, and classify the place with a stated rule.',
points:20,
skills:{read:'Wettest, driest and range',totals:'Yearly and seasonal rain',classify:'Classify with a rule'},
steps:[
 {skill:'read',say:'A climograph sums up a place’s climate in one chart: a bar for each month’s average rainfall and a line for each month’s average temperature. In this topic every place is fictional, and its chart is given as a table of the twelve months.',pic:both(DEMO)},
 {skill:'read',say:'The wettest month has the largest rainfall and the driest month has the smallest. Read all twelve months before you choose. At fictional Tarn Vale the wettest month is July, with 96 mm, and the driest is February, with 30 mm.',pic:table('Fictional Tarn Vale: rainfall','mm',DEMO.rain)},
 {skill:'read',say:'The annual temperature range is the warmest month minus the coldest month. When the coldest month is below zero, taking away a negative number adds it. Tarn Vale’s warmest month is 21 °C and its coldest is −9 °C, so its range is 21 + 9 = 30 °C.',eq:'21 − (−9) = 21 + 9 = 30 °C',pic:table('Fictional Tarn Vale: temperature','°C',DEMO.temp),
  check:{prompt:'Try it: a fictional place’s warmest month averages 16 °C and its coldest month averages −4 °C. What is its annual temperature range, in °C?',answer:20,options:[20,12,16,4],hint:'Taking away −4 is the same as adding 4: 16 + 4.',pic:{t:'setups',title:'A fictional place',head:'Month',rows:[['warmest','16 °C'],['coldest','−4 °C']],cols:['Average']}}},
 {skill:'totals',say:'The yearly rainfall is all twelve months added together. Add in groups to keep track: Tarn Vale’s first six months give 38 + 30 + 35 + 48 + 62 + 85 = 298 mm, the last six give 96 + 88 + 60 + 52 + 47 + 41 = 384 mm, and the year is 298 + 384 = 682 mm.',eq:'298 + 384 = 682 mm',pic:table('Fictional Tarn Vale: rainfall','mm',DEMO.rain)},
 {skill:'totals',say:'A season is three months, and each question says which months make each season. Add each season’s three months, then compare the four sums. The single wettest month is not always in the wettest season.',pic:{t:'rainfall',values:[85,96,88],labels:['Jun','Jul','Aug'],title:'Fictional Tarn Vale: summer rainfall (mm)'},
  check:{prompt:'Try it: at a fictional place, December, January and February each get 20 mm of rain, and June, July and August get 50 mm, 2 mm and 3 mm. Which three months get more rain in all: December to February or June to August?',answer:'December to February',options:['December to February','June to August'],hint:'Add each group: 20 + 20 + 20 and 50 + 2 + 3. June is the wettest single month, but its group is not the wettest.',pic:{t:'rainfall',values:[50,2,3],labels:['Jun','Jul','Aug'],title:'A fictional place: June to August (mm)'}}},
 {skill:'classify',say:'A classification is a rule applied to the numbers. In this topic a place is called dry if its yearly rainfall is under 250 mm, so a year of 240 mm is dry and a year of 250 mm is not. These are simple rules for this topic, not the full rules climate scientists use.',pic:{t:'setups',title:'A rule for this topic',head:'Yearly rainfall',rows:[['240 mm','dry'],['250 mm','not dry'],['682 mm','not dry']],cols:['Called']}},
 {skill:'classify',say:'Read every word of a rule. "At least 100 mm" includes 100 mm itself, "under 250 mm" leaves 250 out, and "every month 18 °C or more" fails if even one month is 17 °C.',pic:{t:'setups',title:'Reading a rule',head:'Rule',rows:[['at least 100 mm','100 counts'],['under 250 mm','250 does not count'],['every month 18 °C or more','one month at 17 °C fails']],cols:['So']},
  check:{prompt:'Try it: in this topic a month is called wet if it gets at least 100 mm of rain. Four months at a fictional town get 100 mm, 99 mm, 130 mm and 85 mm. How many of these four months are wet?',answer:2,options:[2,1,3,4],hint:'100 mm counts, because the rule says at least 100 mm. 99 mm does not.',pic:{t:'rainfall',values:[100,99,130,85],labels:['W','X','Y','Z'],title:'Four fictional months (mm)'}}}],
progression:{requires:['geography-e-rainfall-records','science-e-weather-data'],operations:3,demand:'Scan twelve values for the largest and smallest, subtract across zero, add twelve months and three-month seasons, and apply a stated rule exactly at its boundary.'},
items(add){
 PLACES.forEach((p,i)=>{
  const rp=rainPic(p),tp=tempPic(p),R=RAIN(p),T=TEMP(p),total=sum(p.rain),hi=Math.max(...p.temp),lo=Math.min(...p.temp);
  /* Wettest or driest month (alternating), and the annual temperature range. */
  const wet=i%2===0,v=wet?Math.max(...p.rain):Math.min(...p.rain),mi=p.rain.indexOf(v);
  if(p.rain.filter(x=>x===v).length===1)add('read',`${R} Which month is the ${wet?'wettest':'driest'}?`,MONTHS[mi],rp,`${MONTHS[mi]} has ${v} mm, the ${wet?'most':'least'} of all twelve months.`,[SHORT[mi].toLowerCase()]);
  const v2=wet?Math.min(...p.rain):Math.max(...p.rain),m2=p.rain.indexOf(v2);
  if(p.rain.filter(x=>x===v2).length===1)add('read',`${R} In which month does the ${wet?'least':'most'} rain fall?`,MONTHS[m2],rp,`${MONTHS[m2]} has ${v2} mm, the ${wet?'least':'most'} of all twelve months.`,[SHORT[m2].toLowerCase()]);
  add('read',`${T} What is the annual temperature range, in °C?`,hi-lo,tp,`The warmest month is ${deg(hi)} °C and the coldest is ${deg(lo)} °C: ${lo<0?`${hi} − (−${-lo}) = ${hi} + ${-lo}`:`${hi} − ${lo}`} = ${hi-lo} °C.`);
  /* The yearly total and the wettest season, with the seasons named in the question. */
  add('totals',`${R} What is the total rainfall for the year, in mm?`,total,rp,`First six months: ${sum(p.rain.slice(0,6))} mm. Last six months: ${sum(p.rain.slice(6))} mm. ${sum(p.rain.slice(0,6))} + ${sum(p.rain.slice(6))} = ${total} mm.`);
  const ss=seasonsOf(p).map(([s,ms])=>[s,sum(ms.map(m=>p.rain[m]))]),top=Math.max(...ss.map(x=>x[1]));
  if(ss.filter(x=>x[1]===top).length===1){const best=ss.find(x=>x[1]===top)[0];
   add('totals',`${R} Here ${seasonText(p)}. Which season gets the most rain?`,best,rp,`Season totals: ${ss.map(([s,t])=>`${s} ${t} mm`).join(', ')}. ${best[0].toUpperCase()+best.slice(1)} gets the most.`,[`${best} season`,`in ${best}`,...(best==='autumn'?['fall']:[])]);}
  /* Stated rules: dry under 250 mm a year, wet months at least a threshold, tropical if every month is 18 °C or more. */
  add('classify',`${R} In this topic, a place is called dry if its yearly rainfall total is under 250 mm. Is fictional ${p.name} dry by this rule: yes or no?`,total<250?'yes':'no',rp,`The year adds up to ${total} mm, which is ${total<250?'under':total===250?'exactly, not under,':'not under'} 250 mm, so the answer is ${total<250?'yes':'no'}.`);
  const k=p.rain.filter(x=>x>=p.th).length;
  add('classify',`${R} In this topic, a month is called wet if it gets at least ${p.th} mm of rain. How many wet months does fictional ${p.name} have?`,k,rp,`The months with ${p.th} mm or more are ${MONTHS.filter((_,m)=>p.rain[m]>=p.th).join(', ')||'none'}: ${k} in all.`);
  add('classify',`${T} In this topic, a place is called tropical if every month averages 18 °C or more. Is fictional ${p.name} tropical by this rule: yes or no?`,lo>=18?'yes':'no',tp,`The coldest month averages ${deg(lo)} °C, which is ${lo>=18?'18 °C or more, so every month is too: yes':'below 18 °C, so not every month reaches it: no'}.`);
 });
}
};
