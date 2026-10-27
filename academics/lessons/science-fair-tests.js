// Original science lesson. Fictional experiments; every answer is worked out from which things the two setups change.
// A fair test changes only the thing being tested and keeps every other thing the same (NGSS 3-5-ETS1-3).
const TESTS=[
 {name:'bean plants',result:'how tall the plants grow',vars:[['water','50 mL a day','100 mL a day'],['light','sunny window','shady corner'],['soil','potting soil','sandy soil'],['pot','small pot','large pot']]},
 {name:'toy car ramps',result:'how far the car rolls',vars:[['height','low ramp','high ramp'],['surface','wood','carpet'],['car','red car','blue car'],['push','no push','a push']]},
 {name:'melting ice',result:'how fast the ice melts',vars:[['place','sunny sill','shady shelf'],['cup','metal cup','plastic cup'],['amount','one cube','three cubes'],['lid','no lid','a lid']]},
 {name:'paper towels',result:'how much water the towel soaks up',vars:[['brand','brand X','brand Y'],['temperature','warm water','cold water'],['size','small square','large square'],['time','10 seconds','30 seconds']]},
 {name:'bouncing balls',result:'how high the ball bounces',vars:[['ball','tennis ball','rubber ball'],['height','dropped from 1 m','dropped from 2 m'],['floor','wood floor','carpet floor'],['release','let go','thrown down']]}];
export default {
id:"science-e-fair-tests",
subject:"science",
level:3,
grade:4,
title:"Planning a fair test",
goal:"Find what changes between two setups, and keep every other thing the same so a test is fair.",
standard:"NGSS 3-5-ETS1-3: plan fair tests in which variables are controlled",
points:20,
skills:{"spot":"Find the thing that changed","fair":"Judge whether a test is fair","fix":"Find what must be kept the same"},
steps:[{"skill":"spot","say":"Scientists test one question at a time. Here the question is: does the amount of water change how tall bean plants grow? Setup A and setup B are two pots we will compare.","pic":{"t":"setups","title":"Bean plants: does water change growth?","rows":[["water","50 mL a day","100 mL a day"],["light","sunny window","sunny window"],["soil","potting soil","potting soil"],["pot","small pot","small pot"]]}},
{"skill":"spot","say":"Read the table row by row. Light, soil and pot are the same in both setups. Only the water is different, so water is the one thing that changed.","pic":{"t":"setups","title":"Bean plants: does water change growth?","rows":[["water","50 mL a day","100 mL a day"],["light","sunny window","sunny window"],["soil","potting soil","potting soil"],["pot","small pot","small pot"]],"mark":"water","solve":true},"check":{"prompt":"Setup A: low ramp, wood, red car, no push. Setup B: high ramp, wood, red car, no push. Which one thing is different: height, surface or car?","answer":"height","options":["height","surface","car"],"hint":"Compare each row. Only one row has two different values."}},
{"skill":"fair","say":"A fair test changes only the thing being tested and keeps everything else the same. Then, if the plants grow differently, the water is the only thing we changed, so it is the likely reason. Repeating the test checks that the difference was not just chance.","pic":{"t":"setups","title":"A fair test of water","rows":[["water","50 mL a day","100 mL a day"],["light","sunny window","sunny window"],["soil","potting soil","potting soil"],["pot","small pot","small pot"]],"mark":"water","solve":true}},
{"skill":"fair","say":"Here the water and the light both changed. If plant B grows taller, was it the extra water or the shade? We cannot tell, so this is not a fair test of water.","pic":{"t":"setups","title":"Two things changed","rows":[["water","50 mL a day","100 mL a day"],["light","sunny window","shady corner"],["soil","potting soil","potting soil"],["pot","small pot","small pot"]]},"check":{"prompt":"Setup A: 50 mL a day, sunny window, potting soil, small pot. Setup B: 100 mL a day, shady corner, potting soil, small pot. Is it a fair test of whether water changes plant growth: yes or no?","answer":"no","options":["no","yes"],"hint":"Count how many rows are different. A fair test changes only one.","pic":{"t":"setups","title":"Bean plants","rows":[["water","50 mL a day","100 mL a day"],["light","sunny window","shady corner"],["soil","potting soil","potting soil"],["pot","small pot","small pot"]]}}},
{"skill":"fix","say":"To make it fair, keep the tested thing changing and put every other thing back to the same value. Water stays different; the light must be kept the same.","pic":{"t":"setups","title":"Fix: keep the light the same","rows":[["water","50 mL a day","100 mL a day"],["light","sunny window","shady corner"],["soil","potting soil","potting soil"],["pot","small pot","small pot"]],"mark":"light","solve":true}},
{"skill":"fix","say":"A fair test still needs care: one plant can grow oddly by chance, so scientists repeat the test and compare the results. The next topic shows how to read repeated trials.","pic":{"t":"setups","title":"Melting ice: does the cup change melting?","rows":[["place","sunny sill","sunny sill"],["cup","metal cup","plastic cup"],["amount","one cube","three cubes"],["lid","no lid","no lid"]]},"check":{"prompt":"Setup A: sunny sill, metal cup, one cube, no lid. Setup B: sunny sill, plastic cup, three cubes, no lid. This test is about the cup, but another thing changed too. Which must be kept the same: place, amount or lid?","answer":"amount","options":["amount","place","lid"],"hint":"Find the row that changed but is not the cup.","pic":{"t":"setups","title":"Melting ice","rows":[["place","sunny sill","sunny sill"],["cup","metal cup","plastic cup"],["amount","one cube","three cubes"],["lid","no lid","no lid"]]}}}],
progression:{"requires":["science-e-push-pull","science-e-light-and-shadow"],"operations":2,"demand":"Compare two setups row by row, then decide whether only the tested thing changed."},
items(add){
 for(const T of TESTS){const names=T.vars.map(v=>v[0]),list=a=>a.slice(0,-1).join(', ')+' or '+a[a.length-1];
  const make=(changed,base)=>{const rows=T.vars.map(([n,x,y],i)=>{const a=(base>>i)&1?y:x,b=changed.includes(i)?((base>>i)&1?x:y):a;return [n,a,b];});
   return {rows,text:'Setup A: '+rows.map(r=>r[1]).join(', ')+'. Setup B: '+rows.map(r=>r[2]).join(', ')+'. ',pic:{t:'setups',title:T.name[0].toUpperCase()+T.name.slice(1),rows}};};
  /* One thing changed: which one, and a fair test of it. Four starting setups per changed thing. */
  for(let i=0;i<4;i++)for(const base of [0,5,10,15]){const s=make([i],base);
   add('spot',s.text+'Which one thing is different: '+list(names)+'?',names[i],s.pic,'Compare the setups row by row; only one row is different.');
   add('fair',s.text+`Is it a fair test of whether the ${names[i]} changes ${T.result}: yes or no?`,'yes',s.pic,`Only the ${names[i]} changed, so it is the one thing being compared.`);}
  /* Two things changed: not fair for either, and the other one has to be kept the same. */
  for(let i=0;i<4;i++)for(let j=i+1;j<4;j++)for(const base of [0,6]){const s=make([i,j],base);
   for(const [k,o] of [[i,j],[j,i]]){const others=names.filter((n,x)=>x!==k);
    add('fair',s.text+`Is it a fair test of whether the ${names[k]} changes ${T.result}: yes or no?`,'no',s.pic,`The ${names[o]} changed too, so a difference could come from either.`);
    add('fix',s.text+`To test the ${names[k]}, which other thing must be kept the same: ${list(others)}?`,names[o],s.pic,`The ${names[o]} also changed; put it back to the same value in both setups.`);}}
 }
}
};
