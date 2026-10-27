// Original geography lesson. Fictional towns; population density (people divided by area, in square
// kilometres) is worked out from numbers chosen so the division is always exact. Each of the 48 pool
// towns has exactly one fixed population and area throughout the lesson (steps use four separate,
// reserved demo towns so no name ever shows two different populations). Compare questions never show
// either town's density in the picture or the prompt: the child must divide both before deciding, which
// is what lets the lesson set traps where the town with more people is the less crowded one. Roughly
// half of the compare items are such traps and half are cases where the more populous town is also the
// more crowded one, so guessing from population alone is no better than chance
// (Human geography: compare population density).
const TOWNS=["Millbrook","Thornfield","Oakhaven","Greywood","Hollowmere","Fenwick","Stonebridge","Larkspur","Cedarfall","Brightmoor","Ravencroft","Winterglen","Foxcombe","Ashcliff","Briarcross","Sunhill","Mapledale","Irongate","Silvershaw","Coppervale","Wrenacre","Owlside","Gorseford","Nettlebury","Featherheath","Applebrook","Rosefield","Thistlehaven","Hazelwood","Quailmere","Dovewick","Sparrowbridge","Bluespur","Redfall","Goldenmoor","Whitecroft","Blackglen","Greencombe","Yellowcliff","Ambercross","Cresthill","Farrowdale","Hartgate","Kestrelshaw","Longvale","Mooracre","Nightside","Pineford"];
const AREAS=[4,5,6,8,9,10,12,15,16,20,24,25];
const DENSITIES=[15,20,25,30,40,50,60,75,80,100,120,150];
const facts=[];
for(let i=0;i<AREAS.length;i++)for(let k=0;k<4;k++){const area=AREAS[i],dens=DENSITIES[(i+k*3)%12],town=TOWNS[i*4+k];facts.push({town,area,dens,pop:area*dens});}
const popAreaTable=(t,pop,area)=>({t:"setups",title:"Population and area",rows:[[t.town,`${pop} people`,`${area} km²`]],head:"Town",cols:["People","Area"]});
const densAreaTable=(t,dens,area)=>({t:"setups",title:"Density and area",rows:[[t.town,`${dens} people per km²`,`${area} km²`]],head:"Town",cols:["Density","Area"]});
const pairTable=(a,b)=>({t:"setups",title:"Two towns",rows:[[a.town,`${a.pop} people`,`${a.area} km²`],[b.town,`${b.pop} people`,`${b.area} km²`]],head:"Town",cols:["People","Area"]});
const demoElm={town:"Elmsworth",area:12,dens:70,pop:840},demoRiv={town:"Rivertown",area:30,dens:30,pop:900};
export default {
id:"geography-e-population-density",
subject:"geography",
level:3,
grade:5,
title:"How crowded is it",
goal:"Work out population density by dividing people by area, use it to find a missing population, and compare which of two towns has the higher average density.",
standard:"Human geography: compare population density",
points:20,
skills:{"density":"Compute the density","compare":"Which town is more crowded","people":"Given density and area, find the people"},
steps:[{"skill":"density","say":"Population density is the average number of people per square kilometre. Divide population by area to find it. People may cluster in one part of town: the average does not tell us how many live in each individual square kilometre.","pic":popAreaTable(demoElm,840,12)},
{"skill":"density","say":"Elmsworth has 840 people spread over 12 square kilometres. 840 divided by 12 is 70, so Elmsworth's density is 70 people per square kilometre.","pic":popAreaTable(demoElm,840,12),"check":{"prompt":"Try it: the fictional town of Ashford has 300 people living in 5 km². What is its population density, in people per square kilometre?","answer":60,"options":[60,295,305,1500],"hint":"Divide the people by the area.","pic":popAreaTable({town:"Ashford"},300,5)}},
{"skill":"compare","say":"In these questions, more crowded means a higher average population density. More people does not always mean higher density: a larger population can occupy a much larger area. Compare population divided by area for both towns.","pic":pairTable(demoElm,demoRiv)},
{"skill":"compare","say":"Elmsworth has 840 people in 12 km², a density of 70 per km². Rivertown has 900 people, more people than Elmsworth, but they are spread over 30 km², a density of only 30 per km². Elmsworth has the higher average density even though it has fewer people.","pic":pairTable(demoElm,demoRiv),"check":{"prompt":"Try it: the fictional town of Kelby has 400 people living in 20 km². Dunmore has 300 people living in 5 km². Which town is more crowded: Kelby or Dunmore?","answer":"Dunmore","options":["Kelby","Dunmore"],"hint":"Work out each town's density before deciding.","pic":{"t":"setups","title":"Two towns","rows":[["Kelby","400 people","20 km²"],["Dunmore","300 people","5 km²"]],"head":"Town","cols":["People","Area"]}}},
{"skill":"people","say":"Density and area can also be used the other way round, to find how many people live somewhere: multiply the density by the area.","pic":densAreaTable(demoElm,70,12)},
{"skill":"people","say":"A density of 70 people per square kilometre over 12 square kilometres gives 70 times 12, which is 840 people.","pic":densAreaTable(demoElm,70,12),"check":{"prompt":"Try it: the fictional town of Bramwell has a population density of 50 people per square kilometre and covers an area of 9 km². How many people live there?","answer":450,"options":[450,59,41,500],"hint":"Multiply the density by the area.","pic":densAreaTable({town:"Bramwell"},50,9)}}],
progression:{"requires":["geography-e-map-scale"],"operations":2,"demand":"Divide people by area to find a density, multiply density by area to find a population, and compare two towns' densities rather than their populations."},
items(add){
 facts.forEach(f=>{
  add("density",`The fictional town of ${f.town} has ${f.pop} people living in ${f.area} km². What is its population density, in people per square kilometre?`,f.dens,popAreaTable(f,f.pop,f.area),`${f.pop} people spread over ${f.area} km²: ${f.pop} ÷ ${f.area} = ${f.dens} people per km².`);
  add("people",`The fictional town of ${f.town} has a population density of ${f.dens} people per square kilometre and covers an area of ${f.area} km². How many people live there?`,f.pop,densAreaTable(f,f.dens,f.area),`${f.dens} people per km² across ${f.area} km²: ${f.dens} × ${f.area} = ${f.pop} people.`);
 });
 const trapPairs=[],agreePairs=[];
 for(let i=0;i<facts.length;i++)for(let j=i+1;j<facts.length;j++){
  const a=facts[i],b=facts[j];
  if(a.town===b.town)continue;
  if(a.dens===b.dens)continue;
  if(a.pop===b.pop)continue;
  const morePopIsI=a.pop>b.pop,higherDensIsI=a.dens>b.dens;
  if(morePopIsI===higherDensIsI)agreePairs.push([i,j]);else trapPairs.push([i,j]);
 }
 const perBucket=48,chosen=trapPairs.slice(0,perBucket).concat(agreePairs.slice(0,perBucket));
 let n=0;
 for(const [i,j] of chosen){
  let a=facts[i],b=facts[j];
  if(n%2===1){const t=a;a=b;b=t;}
  n++;
  const winner=a.dens>b.dens?a:b,loser=a.dens>b.dens?b:a;
  add("compare",`Fictional towns: ${a.town} has ${a.pop} people living in ${a.area} km², and ${b.town} has ${b.pop} people living in ${b.area} km². Which town is more crowded: ${a.town} or ${b.town}?`,winner.town,pairTable(a,b),`${a.town}: ${a.pop} ÷ ${a.area} = ${a.dens} people per km². ${b.town}: ${b.pop} ÷ ${b.area} = ${b.dens} people per km². ${winner.town} has the higher density${loser.pop>winner.pop?`, even though ${loser.town} has more people`:`, and it has more people too`}.`);
 }
}
};
