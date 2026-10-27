// Middle School topic (Grade 7, C3 D2.His.14.6-8 with D2.Geo.7.6-8): how far and how fast people travelled before
// engines. Every answer is computed from the numbers in its own question with the speeds the lesson states for this
// topic (real speeds varied with roads, weather and loads): on foot 30 km a day, by wagon 25 km a day, on horseback
// 60 km a day, and by sailing ship 150 km a day. Days = distance ÷ speed, rounded up to whole days where a question
// says so; a journey in stages adds the days of each stage. Every route and traveller is fictional.
const SPEED={'on foot':30,'by wagon':25,'on horseback':60,'by sailing ship':150};
const MODES=Object.keys(SPEED);
const RULE='In this topic, travellers cover 30 km a day on foot, 25 km a day by wagon, 60 km a day on horseback and 150 km a day by sailing ship.';
const fmt=n=>n.toLocaleString('en-US');
const ceil=(a,b)=>Math.ceil(a/b);
const PL=['Ardon','Bellport','Cragmoor','Dunwick','Elsby','Farhaven','Greywater','Holtby','Ironbridge','Jessamy','Kingsreach','Lowmarsh'];
const tab=(title,rows,hint)=>({t:'setups',title,head:'',rows,cols:['Value'],...(hint?{hint:true}:{})});
const speeds=()=>({t:'setups',title:'Travel speeds in this topic',head:'Way to travel',rows:MODES.map(m=>[m,`${SPEED[m]} km a day`]),cols:['Distance']});
export default {
id:'history-m-journeys',subject:'history',level:4,grade:7,standard:'C3 D2.His.14.6-8, D2.Geo.7.6-8',
title:'Journeys before engines',
goal:'Work out how many days a journey took before engines, compare ways of travelling, and add up journeys made in stages.',
points:20,
skills:{days:'Days for a journey',compare:'Comparing ways to travel',stages:'Journeys in stages'},
steps:[
 {skill:'days',say:'Before engines, distance meant days. Roads, weather and loads changed every trip, so this topic uses round speeds: 30 km a day on foot, 25 km by wagon, 60 km on horseback and 150 km by sailing ship.',pic:speeds()},
 {skill:'days',say:'Days = distance ÷ speed. A fictional pilgrim walking 240 km at 30 km a day needs 240 ÷ 30 = 8 days. When the division is not whole, the last part still takes a day, so round up: 250 km on foot is 8.33, so 9 days.',eq:'240 ÷ 30 = 8',pic:tab('A fictional pilgrimage on foot',[['distance','240 km'],['speed','30 km a day'],['days','8']]),
  check:{prompt:'Try it: in this topic a horse rider covers 60 km a day. How many days does a fictional rider need to carry a letter 420 km?',answer:7,options:[7,6,360],hint:'420 ÷ 60.',pic:tab('A fictional letter by horse',[['distance','420 km'],['speed','60 km a day'],['days','?']])}},
 {skill:'compare',say:'The way you travel changes everything. The same 600 km takes 20 days on foot, 10 days on horseback and only 4 days by sailing ship, if the trip can go by sea.',pic:tab('600 km',[['on foot','20 days'],['on horseback','10 days'],['by sailing ship','4 days']])},
 {skill:'compare',say:'To compare, work out the days for each way, then subtract. A 300 km road takes 300 ÷ 25 = 12 days by wagon and 300 ÷ 60 = 5 days on horseback: the rider saves 7 days.',eq:'12 - 5 = 7',pic:tab('300 km of road',[['by wagon','12 days'],['on horseback','5 days'],['saved','7 days']]),
  check:{prompt:'Try it: in this topic travellers cover 30 km a day on foot and 150 km a day by sailing ship. A fictional trader must go 600 km along a coast. How many days sooner does the ship arrive than walking would?',answer:16,options:[16,20,4],hint:'On foot 600 ÷ 30 = 20 days; by ship 600 ÷ 150 = 4 days.',pic:tab('600 km of coast',[['on foot','? days'],['by sailing ship','? days']])}},
 {skill:'stages',say:'Long journeys came in stages: a road to the port, a voyage, then a walk inland. Work out each stage’s days and add them. 90 km by wagon (4 days, rounded up) plus 600 km by ship (4 days) is 8 days.',eq:'4 + 4 = 8',pic:tab('A fictional journey in stages',[['by wagon','90 km'],['by sailing ship','600 km']])},
 {skill:'stages',say:'Turn the rule around to find how far someone got: distance = speed × days. A fictional messenger who rode for 3 days and then walked for 2 covered 3 × 60 + 2 × 30 = 240 km.',eq:'3 × 60 + 2 × 30 = 240',pic:tab('A fictional messenger',[['rode','3 days'],['walked','2 days'],['distance','240 km']]),
  check:{prompt:'Try it: in this topic travellers cover 25 km a day by wagon and 150 km a day by sailing ship. A fictional family goes 100 km by wagon to a port, then 750 km by ship. How many days does the whole journey take?',answer:9,options:[9,34,5],hint:'Wagon: 100 ÷ 25 = 4 days. Ship: 750 ÷ 150 = 5 days.',pic:tab('A fictional family’s journey',[['by wagon','100 km'],['by sailing ship','750 km'],['days','?']])}}],
progression:{requires:['history-m-dating-clues','math-m-ratios'],operations:3,demand:'Divide a distance by a daily speed and round up, compare two journeys by subtracting days, and add the days or distances of several stages.'},
items(add){
 let i=0;const P=()=>PL[i++%PL.length];
 /* Days for one journey, whole and rounded up (the Try-it's 420 km on horseback is left out). */
 for(const m of MODES)for(const d of [60,180,240,300,450,600,750,900]){const v=SPEED[m];if(d%v)continue;if(m==='on horseback'&&d===420)continue;const a=P(),b=P();
  add('days',`${RULE} How many days does a fictional journey of ${fmt(d)} km from ${a} to ${b} take ${m}?`,d/v,speeds(),`${fmt(d)} ÷ ${v} = ${d/v} days.`);}
 for(const [m,d] of [['on foot',250],['by wagon',110],['on horseback',130],['by sailing ship',700],['on foot',95],['by wagon',340],['on horseback',500],['by sailing ship',1000],['on foot',410],['by wagon',60]]){const v=SPEED[m],a=P(),b=P();
  add('days',`${RULE} A fictional traveller goes ${fmt(d)} km from ${a} to ${b} ${m}. Counting any part of a day as a whole day, how many days does the journey take?`,ceil(d,v),speeds(),`${fmt(d)} ÷ ${v} = ${+(d/v).toFixed(2)}, which rounds up to ${ceil(d,v)} days.`);}
 /* Comparing ways to travel (the Try-it's 450 km of coast is left out). */
 for(const [d,m1,m2] of [[300,'by wagon','on horseback'],[600,'on foot','by sailing ship'],[900,'on horseback','by sailing ship'],[150,'by wagon','on foot'],[1200,'on foot','on horseback'],[750,'by wagon','by sailing ship'],[180,'on foot','on horseback'],[1500,'on horseback','by sailing ship'],[240,'on horseback','on foot'],[1050,'by sailing ship','by wagon'],[360,'by wagon','on foot'],[480,'on foot','on horseback'],[1350,'by sailing ship','on horseback'],[200,'on foot','by wagon'],[2100,'on horseback','by sailing ship']]){const t1=ceil(d,SPEED[m1]),t2=ceil(d,SPEED[m2]),a=P();
  const [fa,sl]=t1<t2?[m1,m2]:[m2,m1];
  add('compare',`${RULE} How many days sooner does a fictional traveller cover ${fmt(d)} km ${fa} than ${sl}?`,Math.abs(t1-t2),speeds(),`${m1[0].toUpperCase()+m1.slice(1)}: ${t1} days. ${m2[0].toUpperCase()+m2.slice(1)}: ${t2} days. ${Math.abs(t1-t2)} days sooner.`);
  const sw=(i%4)<2,[o1,o2]=sw?[m2,m1]:[m1,m2];
  add('compare',`${RULE} A fictional merchant in ${a} can send goods ${fmt(d)} km ${o1} or ${o2}. Which way is faster: ${o1} or ${o2}?`,t1<t2?m1:m2,speeds(),`${t1} days ${m1} against ${t2} days ${m2}.`,[(t1<t2?m1:m2).replace(/^(on|by) /,'')]);}
 for(const [m1,m2] of [['on horseback','on foot'],['by sailing ship','on horseback'],['by sailing ship','by wagon'],['on foot','by wagon'],['by sailing ship','on foot'],['on horseback','by wagon']]){
  add('compare',`${RULE} How many times as far does a fictional traveller get in one day ${m1} as ${m2}?`,SPEED[m1]/SPEED[m2],speeds(),`${SPEED[m1]} ÷ ${SPEED[m2]} = ${SPEED[m1]/SPEED[m2]}.`);}
 /* Journeys in stages (the Try-it's wagon and ship family is left out). */
 for(const [s1,d1,s2,d2] of [['by wagon',90,'by sailing ship',600],['on foot',120,'by sailing ship',900],['on horseback',180,'on foot',60],['by wagon',50,'by sailing ship',1050],['on foot',75,'on horseback',240],['by sailing ship',450,'by wagon',125],['on horseback',300,'by sailing ship',1200],['on foot',200,'by wagon',80],['by wagon',140,'on foot',45],['by sailing ship',1500,'on horseback',150],['on foot',33,'by sailing ship',300],['on horseback',420,'by wagon',30],['by sailing ship',800,'on foot',100],['by wagon',75,'on horseback',360]]){const t=ceil(d1,SPEED[s1])+ceil(d2,SPEED[s2]),a=P(),b=P();
  add('stages',`${RULE} A fictional traveller goes from ${a} to ${b}: ${fmt(d1)} km ${s1}, then ${fmt(d2)} km ${s2}. Counting any part of a day as a whole day for each stage, how many days does the whole journey take?`,t,speeds(),`${s1}: ${ceil(d1,SPEED[s1])} days; ${s2}: ${ceil(d2,SPEED[s2])} days; ${t} days in all.`);}
 for(const [m1,n1,m2,n2] of [['on horseback',3,'on foot',2],['on foot',4,'by wagon',2],['by sailing ship',5,'on foot',3],['on horseback',2,'by sailing ship',4],['by wagon',6,'on horseback',1],['on foot',5,'on horseback',3],['by sailing ship',3,'by wagon',4],['on horseback',4,'on foot',4]]){const d=n1*SPEED[m1]+n2*SPEED[m2],a=P();
  add('stages',`${RULE} A fictional messenger from ${a} travels ${n1} days ${m1} and then ${n2} days ${m2}. How many kilometres does the messenger cover?`,d,speeds(),`${n1} × ${SPEED[m1]} + ${n2} × ${SPEED[m2]} = ${fmt(d)} km.`);}
 for(const [m,days] of [['on foot',6],['by wagon',8],['on horseback',5],['by sailing ship',7],['on foot',11],['on horseback',9],['by wagon',3],['by sailing ship',12],['on foot',14],['on horseback',2]]){const a=P();
  add('stages',`${RULE} How far can a fictional traveller from ${a} get in ${days} days ${m}, in kilometres?`,days*SPEED[m],speeds(),`${days} × ${SPEED[m]} = ${fmt(days*SPEED[m])} km.`);}
}
};
