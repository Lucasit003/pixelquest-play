// Middle School topic (Grade 6, NGSS MS-ESS2-3): plate motion over time. Every answer is computed from the
// numbers in its own question with the rules the lesson states: distance = rate × time, time = distance ÷ rate,
// 100 cm = 1 m and 1 km = 100,000 cm. The plates and their names are fictional (no real plate is called Arden,
// Kestrel, Lumen, Tessa, Orrin or Bramble), each keeps a steady whole-number rate from 1 to 10 cm per year,
// which is inside the range real plates move, and every answer is a whole number.
const NAMES=['Arden','Kestrel','Lumen','Tessa','Orrin','Bramble'];
const YEARS=[5,10,20,25,30,40,50,75,100,200,250,500];
const fmt=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,',');
const UNIT={cm:1,m:100,km:100000},WORD={cm:'centimetres',m:'metres',km:'kilometres'};
const plate=(name,rows)=>({t:'setups',title:`The fictional ${name} Plate`,head:'Quantity',rows,cols:['Value']});
export default {
id:'science-m-plate-motion',subject:'science',level:4,grade:6,standard:'NGSS MS-ESS2-3',
title:'Plate motion over time',
goal:'Use a plate’s rate in centimetres per year to find how far it moves, change centimetres to metres and kilometres, and find how long a move takes.',
points:20,
skills:{distance:'How far a plate moves',convert:'Centimetres to metres and kilometres',time:'How long a move takes'},
steps:[
 {skill:'distance',say:'Earth’s outer shell is broken into huge pieces called tectonic plates. They move very slowly, usually a few centimetres a year, which is about as fast as fingernails grow.',pic:{t:'setups',title:'Three fictional plates',head:'Plate',rows:[['Arden Plate','2 cm per year'],['Kestrel Plate','5 cm per year'],['Lumen Plate','8 cm per year']],cols:['Rate']}},
 {skill:'distance',say:'The plates in this topic are fictional, and each keeps a steady rate. Then distance = rate × time: a plate moving 4 cm per year moves 4 × 5 = 20 cm in 5 years.',eq:'4 cm per year × 5 years = 20 cm',pic:{t:'line',max:20,hop:4,jumps:5,solve:true},
  check:{prompt:'Try it: a fictional plate moves 3 cm per year. How many centimetres does it move in 40 years?',answer:120,options:[120,43,1200],hint:'Multiply the rate by the number of years: 3 × 40.',pic:{t:'setups',title:'A fictional plate',head:'Quantity',rows:[['rate','3 cm per year'],['time','40 years'],['distance','? cm']],cols:['Value']}}},
 {skill:'convert',say:'Long distances need bigger units. 100 cm = 1 m and 1,000 m = 1 km, so 1 km = 1,000 × 100 = 100,000 cm. To change cm to m, divide by 100. To change cm to km, divide by 100,000.',eq:'1 km = 1,000 m = 100,000 cm',pic:{t:'setups',title:'Units of length',head:'Unit',rows:[['1 m','100 cm'],['1 km','1,000 m'],['1 km','100,000 cm']],cols:['Equals']}},
 {skill:'convert',say:'Small yearly moves add up. A fictional plate moving 5 cm per year moves 5 × 1,000 = 5,000 cm in 1,000 years, and 5,000 ÷ 100 = 50 m.',eq:'5,000 cm ÷ 100 = 50 m',pic:{t:'setups',title:'A plate moving 5 cm per year',head:'Time',rows:[['1 year','5 cm'],['1,000 years','5,000 cm = 50 m']],cols:['Distance']},
  check:{prompt:'Try it: a fictional plate moves 3 cm per year. How many kilometres does it move in 1,000,000 years?',answer:30,options:[30,3000,300000,3],hint:'3 × 1,000,000 gives the distance in cm. Divide by 100,000 to change it to km.',pic:{t:'setups',title:'A fictional plate',head:'Quantity',rows:[['rate','3 cm per year'],['time','1,000,000 years'],['distance','? km']],cols:['Value']}}},
 {skill:'convert',say:'Over millions of years, a few centimetres a year adds up to hundreds of kilometres. At 5 cm per year a plate moves 50 km in 1,000,000 years. Motion like this can open new oceans and carry continents apart.',eq:'5 × 1,000,000 = 5,000,000 cm = 50 km',pic:{t:'setups',title:'A plate moving 5 cm per year',head:'Time',rows:[['1 year','5 cm'],['1,000 years','50 m'],['1,000,000 years','50 km']],cols:['Distance']}},
 {skill:'time',say:'To find how long a move takes, divide the distance by the rate: time = distance ÷ rate. Change the distance to centimetres first. 2 m is 200 cm, so at 4 cm per year it takes 200 ÷ 4 = 50 years.',eq:'2 m = 200 cm,  200 ÷ 4 = 50 years',pic:{t:'setups',title:'A plate moving 4 cm per year',head:'Quantity',rows:[['rate','4 cm per year'],['distance','2 m = 200 cm'],['time','50 years']],cols:['Value']}},
 {skill:'time',say:'Check that the answer makes sense. A slower plate needs more years to cover the same distance, and every kilometre is 100,000 cm, so a move of even 1 km takes thousands of years.',pic:{t:'setups',title:'Same distance, different rates',head:'Rate',rows:[['1 cm per year','most years'],['10 cm per year','fewest years']],cols:['Time for 1 km']},
  check:{prompt:'Try it: a fictional plate moves 5 cm per year. How many years does it take to move 1 km?',answer:20000,options:[20000,2000,200000,500000],hint:'1 km is 100,000 cm. Divide by the rate: 100,000 ÷ 5.',pic:{t:'setups',title:'A fictional plate',head:'Quantity',rows:[['rate','5 cm per year'],['distance','1 km'],['time','? years']],cols:['Value']}}}],
progression:{requires:['science-e-rocks-and-soil','math-e-multiply-bigger','math-e-times-ten'],operations:2,demand:'Multiply a rate by a time, divide a distance by a rate, and change between centimetres, metres and kilometres by powers of ten.'},
items(add){
 /* How far, in centimetres: five spans of years for each rate from 1 to 10 cm per year. */
 for(let r=1;r<=10;r++)for(let j=0;j<5;j++){const y=YEARS[(r*3+j*5)%YEARS.length],name=NAMES[(r+j)%NAMES.length],d=r*y;
  add('distance',`The fictional ${name} Plate moves ${r} cm per year. How many centimetres does it move in ${fmt(y)} years?`,d,y<=10&&d<=100?{t:'line',max:Math.ceil((d+1)/10)*10,hop:r,jumps:y,hint:true}:plate(name,[['rate',`${r} cm per year`],['time',`${fmt(y)} years`],['distance','? cm']]),`distance = rate × time = ${r} × ${fmt(y)} = ${fmt(d)} cm.`);}
 /* Long spans in metres and kilometres, then plain conversions of a distance already moved. */
 const MY=[100,500,1000,2000,5000,10000,20000],KY=[100000,500000,1000000,2000000,5000000,10000000];
 for(let r=1;r<=10;r++)for(let j=0;j<2;j++){const name=NAMES[(r*2+j)%NAMES.length],ym=MY[(r+j*3)%MY.length],yk=KY[(r*5+j*2)%KY.length];
  add('convert',`The fictional ${name} Plate moves ${r} cm per year. How many metres does it move in ${fmt(ym)} years?`,r*ym/100,plate(name,[['rate',`${r} cm per year`],['time',`${fmt(ym)} years`],['distance','? m']]),`${r} × ${fmt(ym)} = ${fmt(r*ym)} cm, and ${fmt(r*ym)} ÷ 100 = ${fmt(r*ym/100)} m.`);
  add('convert',`The fictional ${name} Plate moves ${r} cm per year. How many kilometres does it move in ${fmt(yk)} years?`,r*yk/100000,plate(name,[['rate',`${r} cm per year`],['time',`${fmt(yk)} years`],['distance','? km']]),`${r} × ${fmt(yk)} = ${fmt(r*yk)} cm, and ${fmt(r*yk)} ÷ 100,000 = ${fmt(r*yk/100000)} km.`);}
 for(const [cm,u] of [[300,'m'],[1500,'m'],[4200,'m'],[25000,'m'],[60000,'m'],[180000,'m'],[200000,'km'],[700000,'km'],[1500000,'km'],[3600000,'km'],[9000000,'km'],[45000000,'km']])
  add('convert',`A fictional plate has moved ${fmt(cm)} cm. How many ${WORD[u]} is that?`,cm/UNIT[u],{t:'setups',title:'A fictional plate',head:'Distance',rows:[['in cm',`${fmt(cm)} cm`],[`in ${u}`,'?']],cols:['Value']},`${fmt(cm)} ÷ ${fmt(UNIT[u])} = ${fmt(cm/UNIT[u])} ${u}.`);
 /* How long: a distance in cm, m or km, changed to cm and divided by the rate, kept to whole years (two for each
    rate and unit). */
 const DIST={cm:[20,30,40,60,100,120,200,500],m:[1,2,3,5,10,50],km:[1,2,5,10,50,100]};
 for(let r=1;r<=10;r++)for(const u of ['cm','m','km']){const list=DIST[u];let n=0;
  for(let j=0;j<list.length&&n<2;j++){const D=list[(r+j)%list.length],cm=D*UNIT[u];if(cm%r||cm/r===D)continue;const name=NAMES[(r+j+u.length)%NAMES.length];n++;
   add('time',`The fictional ${name} Plate moves ${r} cm per year. How many years does it take to move ${fmt(D)} ${u}?`,cm/r,plate(name,[['rate',`${r} cm per year`],['distance',`${fmt(D)} ${u}`],['time','? years']]),`${u==='cm'?'':`${fmt(D)} ${u} = ${fmt(cm)} cm, and `}time = distance ÷ rate = ${fmt(cm)} ÷ ${r} = ${fmt(cm/r)} years.`);}}
}
};
