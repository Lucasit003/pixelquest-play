// Middle School topic (Grade 8, NGSS MS-ESS1-3): the scale of a planetary system. Every answer is computed from
// the numbers in its own question: model distance = real distance × the model's scale, real distance = model
// distance ÷ the scale, 1 AU = 150 million km where a question says so, and travel time = distance ÷ speed.
// Real distances in the captions are rounded and say "about"; every question uses a fictional star system.
const r2=x=>Math.round(x*100)/100;
const tab=(title,rows)=>({t:'setups',title,head:'',rows,cols:['Value']});
const SYS=['Kesh','Varo','Lumen','Ardent','Tamsin','Okari'];
const PL=['Iru','Bex','Coro','Dannet','Elm','Fyra','Gost','Hale','Ivo','Juno Minor','Kett','Lark'];
export default {
id:'science-m-solar-system-scale',subject:'science',level:4,grade:8,standard:'NGSS MS-ESS1-3',
title:'The scale of a solar system',
goal:'Use astronomical units to build and read a scale model of a planetary system, change AU to kilometres, and work out travel times across it.',
points:20,
skills:{model:'Building a scale model',real:'Reading a scale model',travel:'Travel across space'},
steps:[
 {skill:'model',say:'Distances in space are huge, so astronomers measure them in astronomical units (AU). 1 AU is the average distance from Earth to the Sun, about 150 million km. Earth is 1 AU from the Sun, Jupiter about 5.2 AU and Neptune about 30 AU.',pic:tab('Distances from the Sun',[['Earth','1 AU'],['Jupiter','about 5.2 AU'],['Neptune','about 30 AU']])},
 {skill:'model',say:'A scale model shrinks every distance by the same rule. With 10 cm for every 1 AU, Jupiter at 5.2 AU sits 5.2 × 10 = 52 cm from the model Sun, and Neptune at 30 AU sits 30 × 10 = 300 cm, which is 3 m, away.',eq:'model distance = AU × cm for each AU',pic:tab('A model at 10 cm for each AU',[['Earth','10 cm'],['Jupiter','52 cm'],['Neptune','300 cm']]),
  check:{prompt:'Try it: a fictional model uses 4 cm for every 1 AU. A fictional planet orbits 7 AU from its star. How far from the model star should the planet be, in centimetres?',answer:28,options:[28,11,3],hint:'Multiply the AU by the centimetres for each AU: 7 × 4.',pic:tab('A fictional model',[['scale','4 cm for each AU'],['real distance','7 AU'],['model distance','?']])}},
 {skill:'real',say:'Read a model backwards by dividing: real distance = model distance ÷ the scale. A fictional model with 5 cm for every 1 AU puts a planet 45 cm from its star, so the planet is really 45 ÷ 5 = 9 AU from the star.',eq:'AU = model distance ÷ cm for each AU',pic:tab('A fictional model',[['scale','5 cm for each AU'],['model distance','45 cm'],['real distance','9 AU']])},
 {skill:'real',say:'To change AU to kilometres, multiply by 150 million, because 1 AU is about 150 million km. A planet 4 AU from its star is about 4 × 150 = 600 million km away.',eq:'4 AU = 600 million km',pic:tab('AU to kilometres',[['1 AU','150 million km'],['4 AU','600 million km']]),
  check:{prompt:'Try it: a fictional model uses 3 cm for every 1 AU and puts a fictional planet 36 cm from its star. How many AU is the planet from its star?',answer:12,options:[12,108,39],hint:'Divide the model distance by the centimetres for each AU: 36 ÷ 3.',pic:tab('A fictional model',[['scale','3 cm for each AU'],['model distance','36 cm'],['real distance','?']])}},
 {skill:'travel',say:'Light is the fastest thing there is, and sunlight still takes a little over 8 minutes to cross the 1 AU to Earth. Light from the Sun takes hours to reach Neptune, so a spacecraft, far slower than light, takes years to get there.',pic:tab('Sunlight takes',[['to Earth, 1 AU','a little over 8 minutes'],['to Neptune, about 30 AU','about 4 hours']])},
 {skill:'travel',say:'Travel time = distance ÷ speed. A fictional probe that covers 3 AU each year needs 18 ÷ 3 = 6 years to cross 18 AU. If it starts 2 AU from its star, after 4 years it is 2 + 4 × 3 = 14 AU out.',eq:'time = 18 ÷ 3 = 6 years',pic:tab('A fictional probe',[['speed','3 AU each year'],['distance','18 AU'],['time','6 years']]),
  check:{prompt:'Try it: a fictional probe travels 2 AU each year. How many years does it take to go from 3 AU to 19 AU from its star?',answer:8,options:[8,9.5,32],hint:'The trip is 19 - 3 = 16 AU long. Divide by 2.',pic:tab('A fictional probe',[['speed','2 AU each year'],['start','3 AU'],['end','19 AU'],['time','?']])}},
 {skill:'travel',say:'Compare distances by dividing. A fictional planet 24 AU from its star is 24 ÷ 6 = 4 times as far out as a planet 6 AU from it, so in a scale model it sits 4 times as far from the model star too.',pic:tab('Two fictional planets',[['outer planet','24 AU'],['inner planet','6 AU']])}],
progression:{requires:['science-e-solar-system','math-m-proportional'],operations:2,demand:'Multiply or divide by a scale, change AU to millions of kilometres, and divide a distance by a speed.'},
items(add){
 let i=0;
 const nm=()=>{const s=SYS[i%SYS.length],p=PL[i%PL.length];i++;return [s,p];};
 /* Model distance from real distance (the Try-it's 4 cm and 7 AU are left out). */
 for(const s of [2,4,5,10,20])for(const d of [0.5,3,7,12,25]){if(s===4&&d===7)continue;const [S,P]=nm();
  add('model',`A fictional model of the ${S} system uses ${s} cm for every 1 AU. Planet ${P} orbits ${d} AU from its star. How far from the model star should planet ${P} be, in centimetres?`,r2(s*d),tab(`A fictional model of ${S}`,[['scale',`${s} cm for each AU`],['real distance',`${d} AU`],['model distance','?']]),`${d} × ${s} = ${r2(s*d)} cm.`);}
 /* The same in metres, for a model on a playing field. */
 for(const [s,d] of [[50,6],[25,8],[50,9],[10,40],[20,35],[25,12],[50,14],[10,85]]){const [S,P]=nm();
  add('model',`A fictional model of the ${S} system, laid out on a field, uses ${s} cm for every 1 AU. Planet ${P} orbits ${d} AU from its star. How far from the model star should planet ${P} be, in metres?`,r2(s*d/100),tab(`A fictional model of ${S}`,[['scale',`${s} cm for each AU`],['real distance',`${d} AU`],['model distance','? m']]),`${d} × ${s} = ${s*d} cm, and 100 cm = 1 m, so ${s*d} ÷ 100 = ${r2(s*d/100)} m.`);}
 /* Real distance from a model (the Try-it's 3 cm and 36 cm are left out). */
 for(const s of [2,3,5,8,10])for(const d of [4,9,12,16,30]){if(s===3&&d===12)continue;const [S,P]=nm();
  add('real',`A fictional model of the ${S} system uses ${s} cm for every 1 AU and puts planet ${P} ${s*d} cm from its star. How many AU is planet ${P} really from its star?`,d,tab(`A fictional model of ${S}`,[['scale',`${s} cm for each AU`],['model distance',`${s*d} cm`],['real distance','?']]),`${s*d} ÷ ${s} = ${d} AU.`);}
 /* AU and kilometres, at the stated 150 million km. */
 for(const d of [2,3,6,0.5,8,12,20,1.5]){const [S,P]=nm();
  add('real',`Using 1 AU = 150 million km, planet ${P} of the fictional ${S} system orbits ${d} AU from its star. How many million km is that?`,r2(d*150),tab(`Planet ${P}`,[['distance',`${d} AU`],['1 AU','150 million km'],['distance in km','? million']]),`${d} × 150 = ${r2(d*150)} million km.`);}
 for(const d of [4,5,7,10,0.5,16]){const [S,P]=nm();
  add('real',`Using 1 AU = 150 million km, planet ${P} of the fictional ${S} system orbits ${r2(d*150)} million km from its star. How many AU is that?`,d,tab(`Planet ${P}`,[['distance',`${r2(d*150)} million km`],['1 AU','150 million km'],['distance in AU','?']]),`${r2(d*150)} ÷ 150 = ${d} AU.`);}
 /* Travel times, trips between two distances, and where a probe is after some years
    (the Try-it's 2 AU a year from 3 AU to 15 AU is left out). */
 for(const v of [2,3,4,5])for(const [a,b] of [[1,9],[3,15],[5,25],[2,38]]){if((b-a)%v||(v===2&&a===3))continue;const [S]=nm();
  add('travel',`A fictional probe in the ${S} system travels ${v} AU each year. How many years does it take to go from ${a} AU to ${b} AU from its star?`,(b-a)/v,tab('A fictional probe',[['speed',`${v} AU each year`],['start',`${a} AU`],['end',`${b} AU`],['time','?']]),`The trip is ${b} - ${a} = ${b-a} AU, and ${b-a} ÷ ${v} = ${(b-a)/v} years.`);}
 for(const [v,a,t] of [[3,2,5],[4,1,6],[2,5,9],[5,3,4],[6,1,3],[1.5,2,8],[2.5,4,6],[3,10,7]]){const [S]=nm();
  add('travel',`A fictional probe in the ${S} system starts ${a} AU from its star and travels outwards at ${v} AU each year. How many AU from its star is it after ${t} years?`,r2(a+v*t),tab('A fictional probe',[['start',`${a} AU`],['speed',`${v} AU each year`],['time',`${t} years`],['distance','?']]),`${a} + ${t} × ${v} = ${r2(a+v*t)} AU.`);}
 /* Light at a stated 8 minutes for each AU. */
 for(const d of [3,5,9,12,0.5,20]){const [S,P]=nm();
  add('travel',`In this question light takes 8 minutes to cross 1 AU. Planet ${P} of the fictional ${S} system orbits ${d} AU from its star. How many minutes does the star’s light take to reach it?`,r2(8*d),tab(`Planet ${P}`,[['distance',`${d} AU`],['light',`8 minutes for each AU`],['time','?']]),`${d} × 8 = ${r2(8*d)} minutes.`);}
 /* How many times as far. */
 for(const [a,b] of [[24,6],[30,5],[18,3],[40,8],[45,9],[12,1.5],[36,4],[50,2.5]]){const [S,P]=nm(),Q=PL[(i+5)%PL.length];
  add('travel',`In the fictional ${S} system, planet ${P} orbits ${a} AU from its star and planet ${Q} orbits ${b} AU from it. How many times as far from the star is planet ${P}?`,a/b,tab(`The fictional ${S} system`,[[`planet ${P}`,`${a} AU`],[`planet ${Q}`,`${b} AU`]]),`${a} ÷ ${b} = ${a/b}, so planet ${P} is ${a/b} times as far out.`);}
}
};
