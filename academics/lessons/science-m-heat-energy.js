// Middle School topic (Grade 7, NGSS MS-PS3-4): thermal energy, mass, kind of matter and temperature change. The
// lesson states the model it uses, Q = m × c × ΔT (mass m in grams, specific heat capacity c in J/g°C, temperature
// change ΔT in °C, energy Q in joules), with nothing melting, freezing or boiling and no energy lost to the
// surroundings. Every answer is computed from the numbers in its own question with that model: the energy for a
// temperature change, the temperature change (and final temperature) from an energy, and which of two samples
// warms more or needs more energy. Water's c is about 4.2 J/g°C (4.18 rounded), and the topic uses 4.2; every
// other material is fictional and its c is stated in the question. The standard does not ask students to
// calculate the energy transferred, so the arithmetic is an extension of it.
const CW=4.2;
const WM=[50,100,150,200,250,300,400,500],DT=[5,10,15,20,25,30,40],T0=[10,15,20,25];
const MAT=[{n:'metal block',c:0.5},{n:'alloy bar',c:0.4},{n:'stone',c:0.8},{n:'brick',c:0.9},{n:'liquid sample',c:2},{n:'gel pack',c:3}];
const MM=[50,100,200,250,400,500];
/* Samples for the comparisons: water, or a fictional material with a stated c. Every m × c is a whole number. */
const KIND=[['water',4.2,[50,100,200,300]],['metal',0.5,[200,400,800,1000]],['alloy',0.4,[500,1000]],['stone',0.8,[250,500,750]],['liquid',2,[100,300,400]],['gel',3,[100,200,300]]];
const SAMPLES=KIND.flatMap(([k,c,ms])=>ms.map(m=>({k,c,m,mc:Math.round(m*c)})));
const r3=x=>Math.round(x*1000)/1000;
const fmt=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,',');
const MODEL='Using Q = m × c × ΔT';
const sample=(title,rows)=>({t:'setups',title,head:'Quantity',rows,cols:['Value']});
const desc=s=>s.k==='water'?`${fmt(s.m)} g of water, with c = 4.2 J/g°C`:`${fmt(s.m)} g of a fictional ${s.k}, with c = ${s.c} J/g°C`;
export default {
id:'science-m-heat-energy',subject:'science',level:4,grade:7,standard:'NGSS MS-PS3-4 (extension: calculating the energy with Q = m × c × ΔT)',
title:'Thermal energy and temperature',
goal:'Use the model Q = m × c × ΔT to find the energy that warms or cools a sample, the temperature change an energy causes, and which of two samples warms more.',
points:20,
skills:{energy:'Energy for a temperature change',change:'Temperature change from an energy',compare:'Comparing two samples'},
steps:[
 {skill:'energy',say:'The particles that make up matter are always moving. Temperature measures their average kinetic energy: the faster the particles move, the higher the temperature. Heating a sample transfers energy to it, and its particles speed up.',pic:{t:'setups',title:'The same water, cold and hot',head:'Water',rows:[['cold','slower','lower'],['hot','faster','higher']],cols:['Particles','Temperature']}},
 {skill:'energy',say:'The energy needed to warm a sample depends on its mass, the kind of matter and the temperature change. This topic uses the model Q = m × c × ΔT, with m the mass in grams, ΔT the temperature change in °C, and c the specific heat capacity in J/g°C: the joules that warm 1 g of the material by 1°C.',eq:'Q = m × c × ΔT',pic:{t:'setups',title:'The model Q = m × c × ΔT',head:'Letter',rows:[['Q','energy','J'],['m','mass','g'],['c','specific heat capacity','J/g°C'],['ΔT','temperature change','°C']],cols:['Meaning','Unit']}},
 {skill:'energy',say:'Water’s specific heat capacity is about 4.2 J/g°C, and this topic uses 4.2. Warming 100 g of water from 20°C to 30°C is a change of 10°C, so it takes 100 × 4.2 × 10 = 4,200 J.',eq:'Q = 100 × 4.2 × 10 = 4,200 J',pic:sample('Warming a fictional beaker of water',[['mass','100 g'],['c','4.2 J/g°C'],['start','20°C'],['end','30°C'],['energy','4,200 J']]),
  check:{prompt:'Try it: using Q = m × c × ΔT with c = 4.2 J/g°C, how many joules does it take to warm 50 g of water by 10°C?',answer:2100,options:[2100,500,21000],hint:'Multiply all three: 50 × 4.2 × 10.',pic:sample('A fictional beaker of water',[['mass','50 g'],['c','4.2 J/g°C'],['temperature change','10°C'],['energy','?']])}},
 {skill:'change',say:'Turn the model around to find a temperature change: ΔT = Q ÷ (m × c). If 200 g of water takes in 8,400 J, its temperature rises 8,400 ÷ (200 × 4.2) = 8,400 ÷ 840 = 10°C. Add the rise to the starting temperature to get the final one.',eq:'ΔT = 8,400 ÷ 840 = 10°C',pic:sample('A fictional beaker of water',[['mass','200 g'],['c','4.2 J/g°C'],['energy taken in','8,400 J'],['rise','10°C']])},
 {skill:'change',say:'A sample that cools gives out energy by the same rule, so subtract its fall from the starting temperature. In this model nothing melts, freezes or boils, and no energy escapes to the surroundings.',pic:sample('A fictional cooling block',[['mass','100 g'],['c','0.5 J/g°C'],['energy given out','1,500 J'],['fall','30°C']]),
  check:{prompt:'Try it: a fictional 100 g metal block with c = 0.5 J/g°C takes in 1,000 J. It starts at 20°C. Using Q = m × c × ΔT, what is its final temperature in °C?',answer:40,options:[40,20,30],hint:'The rise is 1,000 ÷ (100 × 0.5). Add it to 20°C.',pic:sample('A fictional metal block',[['mass','100 g'],['c','0.5 J/g°C'],['energy taken in','1,000 J'],['start','20°C'],['final','?']])}},
 {skill:'compare',say:'Water’s specific heat capacity is much higher than that of metals such as iron or copper, which are both below 0.5 J/g°C. The same energy warms a gram of water far less than a gram of either metal.',pic:{t:'setups',title:'Joules to warm 1 g by 1°C',head:'Material',rows:[['water','about 4.2 J'],['iron','under 0.5 J'],['copper','under 0.5 J']],cols:['Energy']}},
 {skill:'compare',say:'To compare two samples, work out m × c for each: the joules each needs for every 1°C. The same energy warms the sample with the smaller m × c more, so a heavier sample can still warm more. Warming both by the same ΔT takes more energy for the bigger m × c.',eq:'100 × 4.2 = 420 J per °C,  400 × 0.5 = 200 J per °C',pic:{t:'setups',title:'Two fictional samples',head:'Quantity',rows:[['mass','100 g','400 g'],['c','4.2 J/g°C','0.5 J/g°C']],cols:['Water P','Metal Q']},
  check:{prompt:'Try it: sample P is 100 g of water, with c = 4.2 J/g°C. Sample Q is 400 g of a fictional metal, with c = 0.5 J/g°C. Both take in 4,200 J. Which sample’s temperature rises more: P or Q?',answer:'Q',options:['P','Q'],hint:'Work out m × c for each. The smaller m × c rises more.',pic:{t:'setups',title:'Two fictional samples',head:'Quantity',rows:[['mass','100 g','400 g'],['c','4.2 J/g°C','0.5 J/g°C'],['energy taken in','4,200 J','4,200 J']],cols:['Sample P','Sample Q']}}}],
progression:{requires:['science-m-kinetic-energy','science-e-thermometers'],operations:3,demand:'Multiply three quantities, find a temperature change by dividing by m × c, add or subtract it from a starting temperature, and compare two samples by m × c.'},
items(add){
 /* Energy: water warming and cooling between two temperatures, and fictional materials warmed by a change or
    cooled between two temperatures. */
 for(let i=0;i<12;i++){const m=WM[i%8],dT=DT[(i*3+1)%7],t0=T0[i%4],Q=r3(m*CW*dT);
  add('energy',`${MODEL} with c = 4.2 J/g°C for water, how many joules does it take to warm ${m} g of water in a fictional beaker from ${t0}°C to ${t0+dT}°C?`,Q,sample('A fictional beaker of water',[['mass',`${m} g`],['start',`${t0}°C`],['end',`${t0+dT}°C`],['energy','?']]),`ΔT = ${t0+dT} - ${t0} = ${dT}°C, so Q = ${m} × 4.2 × ${dT} = ${fmt(Q)} J.`);}
 for(let i=0;i<8;i++){const m=WM[(i+3)%8],dT=DT[(i*2)%7],t1=T0[(i+1)%4],t0=t1+dT,Q=r3(m*CW*dT);
  add('energy',`${MODEL} with c = 4.2 J/g°C for water, how many joules do ${m} g of water in a fictional beaker give out as they cool from ${t0}°C to ${t1}°C?`,Q,sample('A fictional beaker of water',[['mass',`${m} g`],['start',`${t0}°C`],['end',`${t1}°C`],['energy given out','?']]),`ΔT = ${t0} - ${t1} = ${dT}°C, so Q = ${m} × 4.2 × ${dT} = ${fmt(Q)} J.`);}
 MAT.forEach((x,i)=>{for(let j=0;j<3;j++){const m=MM[(i+j*2)%MM.length],dT=DT[(i*2+j*3)%7],Q=r3(m*x.c*dT);
  if(j<2)add('energy',`A fictional ${m} g ${x.n} has a specific heat capacity of ${x.c} J/g°C. ${MODEL}, how many joules does it take to raise its temperature by ${dT}°C?`,Q,sample(`A fictional ${x.n}`,[['mass',`${m} g`],['c',`${x.c} J/g°C`],['temperature change',`${dT}°C`],['energy','?']]),`Q = ${m} × ${x.c} × ${dT} = ${fmt(Q)} J.`);
  else{const t1=[20,25,30][i%3],t0=t1+dT;add('energy',`A fictional ${m} g ${x.n} with a specific heat capacity of ${x.c} J/g°C cools from ${t0}°C to ${t1}°C. ${MODEL}, how many joules of thermal energy does it give out?`,Q,sample(`A fictional ${x.n}`,[['mass',`${m} g`],['c',`${x.c} J/g°C`],['start',`${t0}°C`],['end',`${t1}°C`],['energy given out','?']]),`ΔT = ${t0} - ${t1} = ${dT}°C, so Q = ${m} × ${x.c} × ${dT} = ${fmt(Q)} J.`);}}});
 /* Temperature change: the rise of a fictional material, the final temperature of warmed water, and the final
    temperature of a cooling material. Every change is a whole number of degrees and water stays below 100°C. */
 MAT.forEach((x,i)=>{for(let j=0;j<2;j++){const m=MM[(i*3+j+1)%MM.length],dT=DT[(i+j*4)%7],Q=r3(m*x.c*dT);
  add('change',`A fictional ${m} g ${x.n} with a specific heat capacity of ${x.c} J/g°C takes in ${fmt(Q)} J. ${MODEL}, by how many °C does its temperature rise?`,dT,sample(`A fictional ${x.n}`,[['mass',`${m} g`],['c',`${x.c} J/g°C`],['energy taken in',`${fmt(Q)} J`],['rise','?']]),`ΔT = Q ÷ (m × c) = ${fmt(Q)} ÷ (${m} × ${x.c}) = ${fmt(Q)} ÷ ${r3(m*x.c)} = ${dT}°C.`);}});
 for(let i=0;i<10;i++){const m=WM[(i*3+2)%8],dT=DT[(i+2)%7],t0=T0[(i+3)%4],Q=r3(m*CW*dT);
  add('change',`A fictional beaker holds ${m} g of water at ${t0}°C. The water takes in ${fmt(Q)} J. ${MODEL} with c = 4.2 J/g°C, what is the final temperature of the water, in °C?`,t0+dT,sample('A fictional beaker of water',[['mass',`${m} g`],['start',`${t0}°C`],['energy taken in',`${fmt(Q)} J`],['final','?']]),`ΔT = ${fmt(Q)} ÷ (${m} × 4.2) = ${fmt(Q)} ÷ ${r3(m*CW)} = ${dT}°C, so the water ends at ${t0} + ${dT} = ${t0+dT}°C.`);}
 for(let i=0;i<8;i++){const x=MAT[i%MAT.length],m=MM[(i+4)%MM.length],dT=DT[(i*3+2)%7],t0=[60,70,80,90][i%4],Q=r3(m*x.c*dT);
  add('change',`A fictional ${m} g ${x.n} with a specific heat capacity of ${x.c} J/g°C starts at ${t0}°C and gives out ${fmt(Q)} J as it cools. ${MODEL}, what is its final temperature, in °C?`,t0-dT,sample(`A fictional ${x.n}`,[['mass',`${m} g`],['c',`${x.c} J/g°C`],['start',`${t0}°C`],['energy given out',`${fmt(Q)} J`],['final','?']]),`ΔT = ${fmt(Q)} ÷ (${m} × ${x.c}) = ${fmt(Q)} ÷ ${r3(m*x.c)} = ${dT}°C, so it ends at ${t0} - ${dT} = ${t0-dT}°C.`);}
 /* Two samples with different masses and different m × c. In half the pairs the heavier sample has the smaller
    m × c, so it warms more and needs less energy: mass alone never answers it. Which letter wins alternates, and a
    third of the pairs ask how many joules more. */
 const trap=[],plain=[];
 for(let i=0;i<SAMPLES.length;i++)for(let j=i+1;j<SAMPLES.length;j++){const a=SAMPLES[i],b=SAMPLES[j];if(a.k===b.k||a.m===b.m||a.mc===b.mc)continue;
  const hi=Math.max(a.mc,b.mc),lo=Math.min(a.mc,b.mc);if(hi>5*lo)continue;const heavy=a.m>b.m?a:b,light=heavy===a?b:a;(heavy.mc<light.mc?trap:plain).push([a,b]);}
 const pairs=[];for(let i=0;pairs.length<48&&i<Math.max(trap.length,plain.length);i++){if(trap[i*3])pairs.push(trap[i*3]);if(plain[i*3])pairs.push(plain[i*3]);}
 pairs.forEach(([x,y],i)=>{const [A,B]=i%4<2?[x,y]:[y,x],head=`Sample A is ${desc(A)}. Sample B is ${desc(B)}.`;
  const pic={t:'setups',title:'Two fictional samples',head:'Quantity',rows:[['material',A.k,B.k],['mass',`${fmt(A.m)} g`,`${fmt(B.m)} g`],['c',`${A.c} J/g°C`,`${B.c} J/g°C`]],cols:['Sample A','Sample B']};
  const why=`m × c is ${A.m} × ${A.c} = ${A.mc} J per °C for A and ${B.m} × ${B.c} = ${B.mc} J per °C for B`;
  if(i%3===0){const Q=Math.max(A.mc,B.mc)*10,win=A.mc<B.mc?'A':'B';
   add('compare',`${head} Both take in ${fmt(Q)} J. ${MODEL}, which sample's temperature rises more: A or B?`,win,pic,`${why}. The same energy warms the smaller m × c more, so ${win} rises more (A by ${r3(Q/A.mc)}°C, B by ${r3(Q/B.mc)}°C).`,[`sample ${win.toLowerCase()}`]);}
  else{const dT=DT[i%4];
   if(i%3===1){const win=A.mc>B.mc?'A':'B';add('compare',`${head} Both are warmed by ${dT}°C. ${MODEL}, which sample needs more thermal energy: A or B?`,win,pic,`${why}, so ${win} needs more (A needs ${fmt(A.mc*dT)} J, B needs ${fmt(B.mc*dT)} J).`,[`sample ${win.toLowerCase()}`]);}
   else add('compare',`${head} Both are warmed by ${dT}°C. ${MODEL}, how many more joules does the sample that needs more energy take in?`,Math.abs(A.mc-B.mc)*dT,pic,`${why}. A needs ${fmt(A.mc*dT)} J and B needs ${fmt(B.mc*dT)} J, a difference of ${fmt(Math.abs(A.mc-B.mc)*dT)} J.`);}});
}
};
