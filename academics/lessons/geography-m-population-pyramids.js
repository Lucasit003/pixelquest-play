// Middle School topic (Grade 6, C3 D2.Geo.3.6-8): reading a population pyramid. Every country is fictional and every
// count is constructed here, in thousands of people, in five age groups (0–14, 15–29, 30–44, 45–64, 65 and over).
// Every answer is computed from the counts printed in its own question with the rules the lesson states: a group's
// percent is the group divided by the total times 100; the dependency ratio is (people aged 0–14 + people aged 65 and
// over) ÷ people aged 15–64 × 100, written out in the question; the older population is the one with the larger
// percent aged 65 and over; and a population is read as growing if more people are aged 0–14 than 15–29, shrinking if
// fewer. Those last two are simple rules for this topic, stated in each question. Nothing here is a fact asserted by a
// model. Counts are chosen so every percent and ratio is a whole number, and no answer is a number that appears in an
// age-group label. Each country keeps one set of counts everywhere it appears. Extends
// geography-e-population-density.
const BANDS=['0–14','15–29','30–44','45–64','65 and over'];
const fmt=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,',');
const sum=v=>v.reduce((a,b)=>a+b,0);
const counts=v=>BANDS.map((b,i)=>`${b}: ${fmt(v[i])}`).join(', ');
const pyramid=(name,v)=>({t:'setups',title:`Fictional ${name} (thousands of people)`,head:'Age group',rows:[4,3,2,1,0].map(i=>[BANDS[i],fmt(v[i])]),cols:['People']});
const pair=(X,Y)=>({t:'setups',title:'Two fictional countries (thousands of people)',head:'Age group',rows:[4,3,2,1,0].map(i=>[BANDS[i],fmt(X.c[i]),fmt(Y.c[i])]),cols:[X.name,Y.name]});
const FORMULA='dependency ratio = (people aged 0–14 + people aged 65 and over) ÷ people aged 15–64 × 100';
/* Countries for percents, growth and the older population: percents of the five groups, and a total in thousands
   that is a multiple of 100, so every group is a whole number of thousands and every percent is whole. */
const PCT=[['Corvane',500,[40,27,17,10,6]],['Belmora',1000,[12,17,22,27,22]],['Tavisk',400,[33,28,18,13,8]],['Merrowen',2000,[18,19,22,25,16]],
 ['Varnholt',800,[37,25,18,12,8]],['Lunnet',600,[22,24,21,21,12]],['Kellmar',1500,[26,23,21,18,12]],['Dravenne',300,[11,15,19,28,27]],
 ['Selmont',1200,[31,27,20,14,8]],['Harrowe',200,[20,22,23,22,13]],['Pellar',1000,[47,25,14,9,5]],['Quenby',500,[16,18,20,24,22]],
 ['Ruthmere',400,[28,24,20,17,11]],['Thornvale',800,[19,20,21,21,19]],['Ulverdon',600,[35,26,19,13,7]],['Wendrel',1500,[13,16,22,28,21]]]
 .map(([name,T,p])=>({name,T,p,c:p.map(x=>x*T/100)}));
/* Countries for the dependency ratio: people of working age W (thousands), a ratio R that makes the dependants
   D = R × W ÷ 100 whole, and how many of the dependants are aged 0–14. */
const DEP=[['Abrenne',500,60,240],['Brisca',400,75,210],['Corrow',800,50,280],['Dornmark',600,40,120],['Elsquith',250,80,150],
 ['Fenmoor',1000,52,260],['Gavrel',300,70,150],['Istrel',1200,55,300],['Jorvane',500,90,380],['Kalvette',400,48,112],
 ['Lorrimar',800,35,160],['Mondrel',2000,56,600],['Orlen',600,85,420],['Prasvia',900,62,300],['Qorrin',700,42,180],
 ['Rendale',1500,54,450],['Sorvenne',450,68,200],['Tamberlin',350,76,190],['Vexmoor',550,58,220],['Yarrowen',650,72,340]]
 .map(([name,W,R,y])=>{const D=R*W/100,a=Math.round(W*2/5),b=Math.round(W/3);return {name,W,R,D,c:[y,a,b,W-a-b,D-y]};});
const DEMO={name:'Fennick',c:[280,260,200,160,100]},DEMO2={name:'Gallow',c:[300,200,180,120,100]};
export default {
id:'geography-m-population-pyramids',subject:'geography',level:4,grade:6,standard:'C3 D2.Geo.3.6-8',
title:'Population pyramids',
goal:'Read a population pyramid: find the percent of people in an age group, work out the dependency ratio from its formula, and compare two countries or read growth with a stated rule.',
points:20,
skills:{percent:'Percent in an age group',dependency:'Dependency ratio',compare:'Older, growing or shrinking'},
steps:[
 {skill:'percent',say:'A population pyramid shows how many people are in each age group: one bar for each group, with the youngest at the bottom and the oldest at the top. In this topic the bars are given as a table, and every country is fictional.',pic:pyramid(DEMO.name,DEMO.c)},
 {skill:'percent',say:'To find what percent of the people are in a group, add every group to get the total, then divide the group by the total and multiply by 100. Fennick has 280 + 260 + 200 + 160 + 100 = 1,000 thousand people, so 280 ÷ 1,000 × 100 = 28% of them are aged 0–14.',eq:'280 ÷ 1,000 × 100 = 28%',pic:pyramid(DEMO.name,DEMO.c),
  check:{prompt:'Try it: a fictional country has 48 thousand people aged 65 and over out of 400 thousand people in all. What percent of its people are aged 65 and over?',answer:12,options:[12,48,8,88],hint:'Divide the group by the total, then multiply by 100: 48 ÷ 400 × 100.',pic:{t:'setups',title:'A fictional country',head:'Group',rows:[['65 and over','48 thousand'],['everyone','400 thousand']],cols:['People']}}},
 {skill:'dependency',say:'People aged 0–14 and people aged 65 and over are counted as dependants, and people aged 15–64 as working age. In this topic the dependency ratio is (people aged 0–14 + people aged 65 and over) ÷ people aged 15–64 × 100: the number of dependants for every 100 people of working age.',eq:'(0–14 and 65 and over) ÷ (15–64) × 100',pic:pyramid(DEMO2.name,DEMO2.c)},
 {skill:'dependency',say:'Fictional Gallow has 300 + 100 = 400 thousand dependants and 200 + 180 + 120 = 500 thousand people of working age. Its dependency ratio is 400 ÷ 500 × 100 = 80: 80 dependants for every 100 people of working age.',eq:'400 ÷ 500 × 100 = 80',pic:pyramid(DEMO2.name,DEMO2.c),
  check:{prompt:'Try it: a fictional country has 150 thousand people aged 0–14, 400 thousand aged 15–64 and 50 thousand aged 65 and over. What is its dependency ratio?',answer:50,options:[50,200,25,33],hint:'Add the two dependant groups, divide by the working-age group, then multiply by 100.',pic:{t:'setups',title:'A fictional country',head:'Group',rows:[['65 and over','50 thousand'],['15–64','400 thousand'],['0–14','150 thousand']],cols:['People']}}},
 {skill:'compare',say:'Which country has the older population is a question about shares, not head counts. In this topic the country with the larger percent of its people aged 65 and over has the older population, even when a bigger country has more older people.',pic:{t:'setups',title:'Two fictional countries',head:'Group',rows:[['65 and over','60 thousand','90 thousand'],['everyone','300 thousand','900 thousand']],cols:['Country P','Country Q']},
  check:{prompt:'Try it: fictional country P has 60 thousand people aged 65 and over out of 300 thousand. Fictional country Q has 90 thousand aged 65 and over out of 900 thousand. Which has the older population: P or Q?',answer:'P',options:['P','Q'],hint:'Find each percent: 60 ÷ 300 × 100 and 90 ÷ 900 × 100. Q has more older people, but a smaller share.',pic:{t:'setups',title:'Two fictional countries',head:'Group',rows:[['65 and over','60 thousand','90 thousand'],['everyone','300 thousand','900 thousand']],cols:['Country P','Country Q']}}},
 {skill:'compare',say:'A pyramid’s base also hints at what comes next, because today’s children become the next young adults (leaving out people who move in or out). In this topic a population is read as growing if more people are aged 0–14 than 15–29, and as shrinking if fewer are.',pic:pyramid(DEMO.name,DEMO.c)}],
progression:{requires:['geography-e-population-density','math-e-divide-remainder'],operations:3,demand:'Add five age groups, turn a group into a percent of the total, apply a stated ratio formula, and compare shares rather than counts.'},
items(add){
 const L=c=>`Fictional ${c.name} has these numbers of people, in thousands: ${counts(c.c)}.`;
 /* Percents: the share aged 0–14, aged 65 and over, and of working age. */
 for(const c of PCT){const T=sum(c.c),pic=pyramid(c.name,c.c),work=c.c[1]+c.c[2]+c.c[3],tot=`${c.c.map(fmt).join(' + ')} = ${fmt(T)} thousand in all`;
  add('percent',`${L(c)} What percent of its people are aged 0–14?`,c.p[0],pic,`${tot}. ${fmt(c.c[0])} ÷ ${fmt(T)} × 100 = ${c.p[0]}%.`);
  add('percent',`${L(c)} What percent of its people are aged 65 and over?`,c.p[4],pic,`${tot}. ${fmt(c.c[4])} ÷ ${fmt(T)} × 100 = ${c.p[4]}%.`);
  add('percent',`${L(c)} What percent of its people are of working age (15–64)?`,c.p[1]+c.p[2]+c.p[3],pic,`${tot}. Working age is ${fmt(c.c[1])} + ${fmt(c.c[2])} + ${fmt(c.c[3])} = ${fmt(work)}, and ${fmt(work)} ÷ ${fmt(T)} × 100 = ${c.p[1]+c.p[2]+c.p[3]}%.`);}
 /* Dependency ratio from the counts, and the dependants from a ratio. */
 for(const c of DEP)add('dependency',`${L(c)} Using ${FORMULA}, what is its dependency ratio?`,c.R,pyramid(c.name,c.c),`Dependants: ${fmt(c.c[0])} + ${fmt(c.c[4])} = ${fmt(c.D)}. Working age: ${fmt(c.c[1])} + ${fmt(c.c[2])} + ${fmt(c.c[3])} = ${fmt(c.W)}. ${fmt(c.D)} ÷ ${fmt(c.W)} × 100 = ${c.R}.`);
 for(const c of DEP.filter((_,i)=>i%5!==4))add('dependency',`Fictional ${c.name} has a dependency ratio of ${c.R}, with ${fmt(c.W)} thousand people aged 15–64. Using ${FORMULA}, how many thousand people are aged 0–14 or 65 and over?`,c.D,{t:'setups',title:`Fictional ${c.name}`,head:'Quantity',rows:[['dependency ratio',`${c.R}`],['aged 15–64',`${fmt(c.W)} thousand`],['aged 0–14 or 65 and over','? thousand']],cols:['Value']},`The ratio is dependants for every 100 of working age, so dependants = ${c.R} × ${fmt(c.W)} ÷ 100 = ${fmt(c.D)} thousand.`);
 /* Growing or shrinking, by the stated rule. */
 for(const c of PCT){const g=c.c[0]>c.c[1]?'growing':'shrinking';
  add('compare',`${L(c)} In this topic, a population is read as growing if more people are aged 0–14 than 15–29, and as shrinking if fewer are. Is fictional ${c.name}’s population growing or shrinking?`,g,pyramid(c.name,c.c),`${fmt(c.c[0])} thousand are aged 0–14 and ${fmt(c.c[1])} thousand are aged 15–29. That is ${g==='growing'?'more':'fewer'} children than young adults, so it is read as ${g}.`,[g==='growing'?'grow':'shrink',`it is ${g}`]);}
 /* The older population: twelve pairs where the country with the larger share has fewer older people (a head count
    misleads) and twelve where it has more. No country is named the older one more than three times, and the answer is the
    first-named country in half of them. */
 const chosen=[],won={},quota={trap:12,plain:12};
 for(let s=0;s<PCT.length*PCT.length&&chosen.length<24;s++){const i=(s*7)%PCT.length,j=(s*5+Math.floor(s/PCT.length)+1)%PCT.length,a=PCT[i],b=PCT[j];
  if(i>=j||a.p[4]===b.p[4]||a.c[4]===b.c[4]||chosen.some(([x,y])=>x===a&&y===b))continue;
  const old=a.p[4]>b.p[4]?a:b,kind=old.c[4]<(old===a?b:a).c[4]?'trap':'plain';if(!quota[kind]||(won[old.name]||0)>=3)continue;
  quota[kind]--;won[old.name]=(won[old.name]||0)+1;chosen.push([a,b]);}
 chosen.forEach(([a,b],n)=>{let X=a,Y=b;const old=a.p[4]>b.p[4]?a:b;if((n%2===0)!==(old===X))[X,Y]=[Y,X];
  add('compare',`Two fictional countries, in thousands of people. ${X.name}: ${counts(X.c)}. ${Y.name}: ${counts(Y.c)}. In this topic, the country with the larger percent of its people aged 65 and over has the older population. Which has the older population: ${X.name} or ${Y.name}?`,old.name,pair(X,Y),`${X.name}: ${fmt(X.c[4])} ÷ ${fmt(sum(X.c))} × 100 = ${X.p[4]}% aged 65 and over. ${Y.name}: ${fmt(Y.c[4])} ÷ ${fmt(sum(Y.c))} × 100 = ${Y.p[4]}%. ${old.name} has the larger share${old.c[4]<(old===X?Y:X).c[4]?', even though it has fewer older people':''}.`,[`fictional ${old.name.toLowerCase()}`]);});
}
};
