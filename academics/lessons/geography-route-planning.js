// Original geography lesson. Fictional maps; answers are calculated from their givens.
export default {
id:"geography-e-route-planning",
subject:"geography",
level:3,
grade:5,
title:"Comparing scaled routes",
goal:"Add route legs, convert with a scale, and compare total distances before choosing a route.",
standard:"Geographic inquiry and map reasoning",
points:20,
skills:{"total":"Combine legs and scale","choose":"Compare complete routes","saving":"Find a distance saving"},
steps:[{"skill":"total","say":"Each map unit here represents 4 km. Route A has legs of 3 and 2 units. Add the legs first: 5 map units in all.","pic":{"t":"routes","a":[3,2],"b":[2,5],"scale":4}},{"skill":"total","say":"Now convert the whole route: 5 units times 4 km is 20 km. Multiplying only one leg would leave out part of the journey.","pic":{"t":"routes","a":[3,2],"b":[2,5],"scale":4},"check":{"prompt":"A route has legs of 2 and 3 map units. Each unit is 6 km. How many kilometers is the full route?","answer":30,"options":[30,11,18,36],"hint":"Add 2 + 3, then multiply the total by 6.","pic":{"t":"routes","a":[2,3],"b":[2,3],"scale":6}}},{"skill":"choose","say":"Route B has 2 and 5 units, which totals 7 units or 28 km. Route A is 20 km, so it is shorter. The shorter first leg alone did not make B shorter.","pic":{"t":"routes","a":[3,2],"b":[2,5],"scale":4}},{"skill":"choose","say":"Compare whole routes with the same units. This model compares distance only; safety, closed roads, and travel time would need more information.","pic":{"t":"routes","a":[3,2],"b":[2,5],"scale":4},"check":{"prompt":"At 2 km per map unit, route A has legs 4 and 1; route B has legs 2 and 2. Which full route is shorter: A or B?","answer":"B","options":["B","A","same"],"hint":"A totals 5 units; B totals 4. Apply the same scale to both.","pic":{"t":"routes","a":[4,1],"b":[2,2],"scale":2}}},{"skill":"saving","say":"Find how much shorter A is by subtracting complete distances: 28 minus 20 is 8 km. You can also subtract unit totals first, then apply the shared scale.","pic":{"t":"routes","a":[3,2],"b":[2,5],"scale":4}},{"skill":"saving","say":"Write the unit with every stage: leg units, total units, then kilometers. Choose a route only after all its legs are included.","pic":{"t":"routes","a":[2,2],"b":[4,1],"scale":3},"check":{"prompt":"Route A totals 4 map units; route B totals 5. Each unit is 3 km. How many kilometers are saved by taking A?","answer":3,"options":[3,1,9,15],"hint":"The routes differ by 1 unit, which represents 3 km.","pic":{"t":"routes","a":[2,2],"b":[4,1],"scale":3}}}],
progression:{"requires":["geography-e-grid-routes","geography-e-map-scale"],"operations":3,"demand":"Add route legs, convert with a scale, and compare total distances before choosing a route."},
items(add){

for(let a=2;a<=5;a++)for(let b=1;b<=3;b++)for(let c=1;c<=4;c++)for(const scale of [2,3,5]){
 const d=(a+c)%4+1,A=a+b,B=c+d;if(A===B)continue;const pic={t:'routes',a:[a,b],b:[c,d],scale},given='Map scale: each unit = '+scale+' km. Route A legs: '+a+' and '+b+' units. Route B legs: '+c+' and '+d+' units. ';
 add('total',given+'How many kilometers is route A?',A*scale,pic,'Add the two A legs, then multiply by the scale: '+A+' x '+scale+'.');
 add('choose',given+'Which complete route is shorter: A or B?',A<B?'A':'B',pic,'A totals '+A+' units and B '+B+' units; compare after including both legs.');
 add('saving',given+'How many kilometers shorter is the shorter route?',Math.abs(A-B)*scale,pic,'Subtract the route totals and multiply the difference by '+scale+' km per unit.');
}
}
};
