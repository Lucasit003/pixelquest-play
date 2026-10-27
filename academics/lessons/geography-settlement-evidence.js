// Original geography lesson. Fictional maps; answers are calculated from their givens.
export default {
id:"geography-e-settlement-evidence",
subject:"geography",
level:3,
grade:5,
title:"Choosing a site with evidence",
goal:"Apply three geographic conditions, reject unsuitable sites, then compare the suitable choices.",
standard:"Geographic inquiry and map reasoning",
points:20,
skills:{"qualify":"Check all three conditions","compare":"Compare suitable sites","margin":"Calculate land remaining"},
steps:[{"skill":"qualify","say":"This fictional village survey compares two possible sites. Our rule needs a site outside the mapped flood zone, at most 4 km from a road, and with at least 4 hectares of farmland.","pic":{"t":"sites","a":{"flood":false,"road":3,"land":5},"b":{"flood":true,"road":1,"land":8},"criteria":{"road":4,"land":4}}},{"skill":"qualify","say":"Check every condition. A is outside the zone, 3 km from a road, and has 5 hectares, so it qualifies. B has more farmland but is in the mapped flood zone, so it fails our rule.","pic":{"t":"sites","a":{"flood":false,"road":3,"land":5},"b":{"flood":true,"road":1,"land":8},"criteria":{"road":4,"land":4}},"check":{"prompt":"A is outside the flood zone, road 3 km, farm 5 ha. B is inside, road 1 km, farm 8 ha. The rule needs outside, road at most 4 km, farm at least 4 ha. Which qualifies: A, B, both, or neither?","answer":"A","options":["A","B","both","neither"],"hint":"A meets all three; B fails the flood-zone condition.","pic":{"t":"sites","a":{"flood":false,"road":3,"land":5},"b":{"flood":true,"road":1,"land":8},"criteria":{"road":4,"land":4}}}},{"skill":"compare","say":"Only compare the suitable sites. If both pass all conditions, a separate rule such as shorter road distance can break the tie. Do not let one good feature hide a failed condition.","pic":{"t":"sites","a":{"flood":false,"road":2,"land":4},"b":{"flood":false,"road":4,"land":6},"criteria":{"road":4,"land":4}}},{"skill":"compare","say":"At most includes the limit itself, and at least includes it too. A site 4 km from the road with 4 hectares meets those two limits exactly.","pic":{"t":"sites","a":{"flood":false,"road":2,"land":4},"b":{"flood":false,"road":4,"land":6},"criteria":{"road":4,"land":4}},"check":{"prompt":"Two sites meet every condition. A is 2 km from a road and B is 4 km away. If the tie-break rule is shorter road distance, which site wins?","answer":"A","options":["A","B","same"],"hint":"After both qualify, compare their road distances.","pic":{"t":"sites","a":{"flood":false,"road":2,"land":4},"b":{"flood":false,"road":4,"land":6},"criteria":{"road":4,"land":4}}}},{"skill":"margin","say":"If 4 hectares are required and a suitable site has 7, subtract 4 from 7 to find 3 hectares beyond the requirement. Extra land does not cancel a failed safety condition.","pic":{"t":"sites","a":{"flood":false,"road":2,"land":7},"b":{"flood":true,"road":1,"land":8},"criteria":{"road":4,"land":4}}},{"skill":"margin","say":"These are model decisions using only the supplied survey. Outside a mapped flood zone is not a guarantee of safety; a real decision needs more evidence, such as water supply, ground conditions, and local advice.","pic":{"t":"sites","a":{"flood":false,"road":2,"land":7},"b":{"flood":true,"road":1,"land":8},"criteria":{"road":4,"land":4}},"check":{"prompt":"A suitable site has 7 hectares of farmland and the plan requires 4. How many hectares are beyond the requirement?","answer":3,"options":[3,11,4,7],"hint":"Subtract the required land from the available land.","pic":{"t":"sites","a":{"flood":false,"road":2,"land":7},"b":{"flood":true,"road":1,"land":8},"criteria":{"road":4,"land":4}}}}],
progression:{"requires":["geography-e-contour-lines","geography-e-rainfall-records"],"operations":3,"demand":"Apply three geographic conditions, reject unsuitable sites, then compare the suitable choices."},
items(add){

const label=(A,B)=>A&&B?'both':A?'A':B?'B':'neither';
for(let x=1;x<=6;x++)for(let y=1;y<=6;y++)if(x!==y)for(const fa of [false,true])for(const fb of [false,true]){
 const a={flood:fa,road:x,land:(x*2+y)%5+2},b={flood:fb,road:y,land:(y*2+x)%5+2},criteria={road:4,land:4},pic={t:'sites',a,b,criteria};
 const ok=s=>!s.flood&&s.road<=4&&s.land>=4,A=ok(a),B=ok(b);
 const given='Survey: A flood-zone '+(fa?'inside':'outside')+', road '+x+' km, farm '+a.land+' ha; B flood-zone '+(fb?'inside':'outside')+', road '+y+' km, farm '+b.land+' ha. Require outside the zone, road at most 4 km, farm at least 4 ha. ';
 add('qualify',given+'Which meets all conditions: A, B, both, or neither?',label(A,B),pic,'Check flood-zone status AND road distance AND farm area for each site.');
 if(A&&B)add('compare',given+'Both qualify. Which has the shorter road distance: A or B?',x<y?'A':'B',pic,'Both pass all conditions, so compare '+x+' km and '+y+' km.');
 if(A||B){const site=A?'A':'B',s=A?a:b;add('margin',given+'For suitable site '+site+', how many hectares exceed the 4 ha requirement?',s.land-4,pic,'The suitable site has '+s.land+' ha; subtract the 4 ha requirement.');}
}
}
};
