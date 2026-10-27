// Middle School topic (Grade 8, C3 D2.Geo.2.6-8 and D2.Geo.5.6-8): climate zones from climate figures. Every answer
// is computed from the fictional figures in its own question with this topic's simplified rules, taken in order:
// (1) under 400 mm of rain a year is dry (B); (2) otherwise, a coldest month of 18°C or more is tropical (A);
// (3) a warmest month under 10°C is polar (E); (4) a coldest month above 0°C is temperate (C); (5) anything else is
// continental (D). The letters follow the Köppen system's main groups; its real limits are more detailed, and the
// lesson says so. Every place and figure is fictional.
const ZONE={A:'tropical',B:'dry',C:'temperate',D:'continental',E:'polar'};
const zone=(cold,warm,rain)=>rain<400?'B':cold>=18?'A':warm<10?'E':cold>0?'C':'D';
const why=(cold,warm,rain)=>rain<400?`${rain} mm is under 400 mm, so rule 1 makes it dry.`:cold>=18?`The coldest month, ${cold}°C, is 18°C or more, so rule 2 makes it tropical.`:warm<10?`The warmest month, ${warm}°C, is under 10°C, so rule 3 makes it polar.`:cold>0?`Not dry, not tropical, not polar, and the coldest month, ${cold}°C, is above 0°C: temperate.`:`Not dry, tropical or polar, and the coldest month, ${cold}°C, is not above 0°C: continental.`;
const deg=t=>`${t}°C`;
const PL=['Aldermoor','Brisa','Calloway','Dunrae','Ebonmere','Faro Vale','Glimmer','Hollin','Istmar','Jessop','Kelvane','Lorne'];
const RULES='Use this topic’s rules in order: under 400 mm of rain a year is dry (B); otherwise a coldest month of 18°C or more is tropical (A); a warmest month under 10°C is polar (E); a coldest month above 0°C is temperate (C); anything else is continental (D).';
const tab=(rows,hint)=>({t:'setups',title:'A fictional place',head:'',rows,cols:['Value'],...(hint?{hint:true}:{})});
/* Places: [coldest month, warmest month, yearly rain mm]. */
const P=[[24,28,2100],[2,21,780],[-12,19,620],[-25,6,300],[12,38,150],[19,27,1600],[-6,24,540],[5,17,950],[-30,4,420],[22,30,380],[-2,22,700],[8,26,1200],[1,15,450],[-18,8,520],[26,29,2600],[-8,30,260],[0,20,640],[18,25,900],[-4,9,480],[14,33,320]];
const SEAS=['winter','spring','summer','autumn'];
export default {
id:'geography-m-climate-zones',subject:'geography',level:4,grade:8,standard:'C3 D2.Geo.2.6-8, D2.Geo.5.6-8',
title:'Climate zones',
goal:'Read a place’s temperatures and rainfall, apply a set of climate rules in order, and name its climate zone.',
points:20,
skills:{read:'Reading climate figures',rules:'Applying the rules',zone:'Naming the zone'},
steps:[
 {skill:'read',say:'Climate is the usual weather of a place over many years. Geographers sort climates into zones using a few figures: the average temperature of the coldest and warmest months, and the rain or snow in a year, measured in millimetres.',pic:tab([['coldest month','2°C'],['warmest month','21°C'],['rain a year','780 mm']])},
 {skill:'read',say:'From seasonal averages, the coldest season is the lowest temperature and the warmest the highest; the range is the warmest minus the coldest. Seasons of 2°C, 11°C, 21°C and 12°C give a range of 21 - 2 = 19°C.',eq:'21 - 2 = 19',pic:{t:'setups',title:'A fictional town by season',head:'Season',rows:[['winter','2°C'],['spring','11°C'],['summer','21°C'],['autumn','12°C']],cols:['Average']},
  check:{prompt:'Try it: a fictional town averages 4°C in winter, 13°C in spring, 24°C in summer and 14°C in autumn. What is its temperature range, in °C?',answer:20,options:[20,24,10],hint:'Take the coldest season from the warmest.',pic:{t:'setups',title:'A fictional town by season',head:'Season',rows:[['winter','4°C'],['spring','13°C'],['summer','24°C'],['autumn','14°C']],cols:['Average']}}},
 {skill:'rules',say:'This topic uses simple rules in a fixed order. First, a place with under 400 mm of rain a year is dry (B), however hot or cold it is. Otherwise, a coldest month of 18°C or more is tropical (A), and a warmest month under 10°C is polar (E).',pic:tab([['1. under 400 mm rain','dry, B'],['2. coldest 18°C or more','tropical, A'],['3. warmest under 10°C','polar, E']])},
 {skill:'rules',say:'If none of those rules fit, look at the coldest month: above 0°C is temperate (C), and 0°C or below is continental (D), with cold, snowy winters. The real Köppen system uses the same letters with more detailed limits.',pic:tab([['4. coldest above 0°C','temperate, C'],['5. otherwise','continental, D']]),
  check:{prompt:'Try it: a fictional place has a coldest month of -25°C, a warmest month of 6°C and 300 mm of rain a year. Using the rules in order, which rule decides its zone first: rule 1 (dry) or rule 3 (polar)?',answer:'rule 1',options:['rule 1','rule 3'],hint:'Check rule 1 first: is the rain under 400 mm?',pic:tab([['coldest month','-25°C'],['warmest month','6°C'],['rain a year','300 mm']])}},
 {skill:'zone',say:'Go down the rules and stop at the first that fits. A place with a coldest month of 2°C, a warmest of 21°C and 780 mm of rain is not dry, not tropical and not polar, and its coldest month is above 0°C, so it is temperate (C).',pic:tab([['coldest month','2°C'],['warmest month','21°C'],['rain a year','780 mm'],['zone','temperate, C']])},
 {skill:'zone',say:'The order matters. A hot place with 150 mm of rain is dry, not tropical, because rule 1 comes first; a cold place with 300 mm can be dry too. Deserts can be hot or cold.',pic:tab([['38°C summers, 150 mm','dry, B'],['6°C summers, 300 mm','dry, B']]),
  check:{prompt:'Try it: a fictional place has a coldest month of -12°C, a warmest month of 19°C and 620 mm of rain a year. Using this topic’s rules, which zone is it: temperate or continental?',answer:'continental',options:['continental','temperate'],hint:'It is not dry, tropical or polar. Is the coldest month above 0°C?',pic:tab([['coldest month','-12°C'],['warmest month','19°C'],['rain a year','620 mm']])}}],
progression:{requires:['geography-m-climographs','geography-m-latitude-distance'],operations:2,demand:'Find the lowest and highest values and a range, then test a place against five rules in order and stop at the first that fits.'},
items(add){
 let i=0;const N=()=>PL[i++%PL.length];
 /* Reading seasonal figures: coldest, warmest, range and yearly rain. */
 for(const [w,sp,su,au,r1,r2,r3,r4] of [[2,11,21,12,200,180,150,250],[-8,6,19,7,60,80,120,90],[24,27,28,26,400,600,700,500],[10,15,23,16,90,40,10,60],[-20,-5,8,-3,30,40,60,50],[5,12,30,14,20,15,5,25],[-3,9,24,10,110,140,160,120],[14,18,26,19,250,200,100,300]]){const n=N(),T=[w,sp,su,au],R=[r1,r2,r3,r4],pic={t:'setups',title:`Fictional ${n} by season`,head:'Season',rows:SEAS.map((s,k)=>[s,deg(T[k]),`${R[k]} mm`]),cols:['Average','Rain']},said=`The fictional town of ${n} averages ${SEAS.map((s,k)=>`${deg(T[k])} in ${s}`).join(', ')}, with ${SEAS.map((s,k)=>`${R[k]} mm of rain in ${s}`).join(', ')}.`;
  add('read',`${said} What is its temperature range, in °C?`,Math.max(...T)-Math.min(...T),pic,`${Math.max(...T)} - ${Math.min(...T)} = ${Math.max(...T)-Math.min(...T)}°C.`);
  add('read',`${said} How many millimetres of rain does it get in a year?`,R.reduce((a,b)=>a+b,0),pic,`${R.join(' + ')} = ${R.reduce((a,b)=>a+b,0)} mm.`);
  add('read',`${said} Which season is the wettest?`,SEAS[R.indexOf(Math.max(...R))],pic,`The most rain, ${Math.max(...R)} mm, falls in ${SEAS[R.indexOf(Math.max(...R))]}.`);
  const tot=R.reduce((a,b)=>a+b,0),z=zone(Math.min(...T),Math.max(...T),tot);
  add('zone',`${said} Treating the coldest season as the coldest month and the warmest season as the warmest month, which zone does it fall in? ${RULES} Answer dry, tropical, polar, temperate or continental.`,ZONE[z],pic,why(Math.min(...T),Math.max(...T),tot),[z.toLowerCase()]);}
 /* The rules on single figures, and the first rule that decides. */
 for(const rain of [150,320,399,400,620,1800]){const n=N();add('rules',`A fictional place called ${n} gets ${rain} mm of rain a year. Under rule 1 of this topic, under 400 mm of rain a year is dry. Is ${n} dry: yes or no?`,rain<400?'yes':'no',tab([['rain a year',`${rain} mm`]]),rain<400?`${rain} mm is under 400 mm.`:`${rain} mm is not under 400 mm.`);}
 for(const c of [18,17,22,-2,0,1]){const n=N();add('rules',`A fictional place called ${n} gets 1,500 mm of rain a year, and its coldest month averages ${deg(c)}. Under rule 2 of this topic, a coldest month of 18°C or more is tropical. Is ${n} tropical: yes or no?`,c>=18?'yes':'no',tab([['rain a year','1,500 mm'],['coldest month',deg(c)]]),c>=18?`${c}°C is 18°C or more.`:`${c}°C is under 18°C.`);}
 for(const w of [9,10,4,12,-1,15]){const n=N();add('rules',`A fictional place called ${n} gets 800 mm of rain a year, its coldest month averages -15°C and its warmest month averages ${deg(w)}. Under rule 3 of this topic, a warmest month under 10°C is polar. Is ${n} polar: yes or no?`,w<10?'yes':'no',tab([['rain a year','800 mm'],['coldest month','-15°C'],['warmest month',deg(w)]]),w<10?`${w}°C is under 10°C.`:`${w}°C is not under 10°C.`);}
 P.forEach(([c,w,r],k)=>{const n=N(),z=zone(c,w,r),rule={B:1,A:2,E:3,C:4,D:5}[z];
  const lead=`A fictional place called ${n} has a coldest month of ${deg(c)}, a warmest month of ${deg(w)} and ${r.toLocaleString('en-US')} mm of rain a year.`,pic=tab([['coldest month',deg(c)],['warmest month',deg(w)],['rain a year',`${r.toLocaleString('en-US')} mm`]]);
  if(!(c===-12&&w===19))add('zone',`${lead} ${RULES} Which zone is it? Answer dry, tropical, polar, temperate or continental.`,ZONE[z],pic,why(c,w,r),[z.toLowerCase(),`${ZONE[z]} (${z})`]);
  if(!(c===-25&&w===6))add('rules',`${lead} ${RULES} Which numbered rule is the first that fits?`,rule,pic,why(c,w,r));
  if(k%2===0)add('zone',`${lead} ${RULES} Which letter is its zone: A, B, C, D or E?`,z,pic,why(c,w,r),[ZONE[z]]);});
 /* Changing one figure: what zone does the place become? */
 [[2,21,780,'rain',300],[19,27,1600,'cold',15],[-6,24,540,'cold',3],[-25,6,300,'rain',500],[8,26,1200,'warm',9],[22,30,380,'rain',900]].forEach(([c,w,r,what,v])=>{const n=N(),[c2,w2,r2]=what==='rain'?[c,w,v]:what==='cold'?[v,w,r]:[c,Math.max(v,c),r];
  add('zone',`A fictional place called ${n} has a coldest month of ${deg(c)}, a warmest month of ${deg(w)} and ${r} mm of rain a year. If its ${what==='rain'?`yearly rain became ${v} mm`:what==='cold'?`coldest month became ${deg(v)}`:`warmest month became ${deg(v)}`}, with the other figures the same, which zone would it be? ${RULES} Answer dry, tropical, polar, temperate or continental.`,ZONE[zone(c2,w2,r2)],tab([['coldest month',deg(c2)],['warmest month',deg(w2)],['rain a year',`${r2} mm`]],true),why(c2,w2,r2),[zone(c2,w2,r2).toLowerCase()]);});
}
};
