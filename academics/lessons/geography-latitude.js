// Original geography lesson. Fictional towns on a simplified globe grid; every answer is calculated from their stated latitudes.
// South latitudes are handled as negative numbers here and written with S; the equator is 0°.
const TOWNS=['Ashby','Brill','Corran','Dunmore','Elden','Fairholt','Glenn','Haverly'];
const deg=d=>`${Math.abs(d)}°${d>0?'N':'S'}`;
export default {
id:"geography-e-latitude",
subject:"geography",
level:3,
grade:4,
title:"Latitude and hemispheres",
goal:"Read latitude north and south of the equator, name a hemisphere, and compare how far north, south or from the equator places are.",
standard:"Geographic skills: use latitude to describe and compare absolute location",
points:20,
skills:{"hemisphere":"Name the hemisphere","compare":"Compare latitudes","distance":"Degrees apart"},
steps:[{"skill":"hemisphere","say":"Lines of latitude run east to west around the globe. The equator is 0°. Places north of it are in the northern hemisphere and are written with N; places south of it are in the southern hemisphere, written with S.","pic":{"t":"lines","axis":"lat","places":[{"name":"Ashby","deg":40},{"name":"Brill","deg":-30}]}},
{"skill":"hemisphere","say":"Latitude counts up from the equator in both directions, up to 90° at each pole. Ashby at 40°N is in the northern hemisphere; Brill at 30°S is in the southern hemisphere.","pic":{"t":"lines","axis":"lat","places":[{"name":"Ashby","deg":40},{"name":"Brill","deg":-30}]},"check":{"prompt":"A town is at 25°S. Is it in the northern or the southern hemisphere?","answer":"southern","options":["southern","northern"],"hint":"S means south of the equator.","pic":{"t":"lines","axis":"lat","places":[{"name":"Town","deg":-25}]}}},
{"skill":"compare","say":"To find which place is farther north, remember that every N latitude is north of every S latitude. Between two N latitudes, the bigger number is farther north; between two S latitudes, the bigger number is farther south.","pic":{"t":"lines","axis":"lat","places":[{"name":"Corran","deg":20},{"name":"Dunmore","deg":50},{"name":"Elden","deg":-10}]}},
{"skill":"compare","say":"Closeness to the equator only depends on the number of degrees. 10°S is closer to the equator than 20°N, even though it is in the other hemisphere.","pic":{"t":"lines","axis":"lat","places":[{"name":"Corran","deg":20},{"name":"Elden","deg":-10}]},"check":{"prompt":"Town A is at 50°N and town B is at 60°N. Which town is farther north: A or B?","answer":"B","options":["B","A"],"hint":"Both are north of the equator; the bigger number is farther north.","pic":{"t":"lines","axis":"lat","places":[{"name":"A","deg":50},{"name":"B","deg":60}]}}},
{"skill":"distance","say":"To find how many degrees apart two places are in the same hemisphere, subtract: 50°N and 20°N are 30° apart.","pic":{"t":"lines","axis":"lat","places":[{"name":"Corran","deg":20},{"name":"Dunmore","deg":50}]}},
{"skill":"distance","say":"Across the equator, add the two distances to the equator: 20°N and 10°S are 20 + 10 = 30° apart.","pic":{"t":"lines","axis":"lat","places":[{"name":"Corran","deg":20},{"name":"Elden","deg":-10}]},"check":{"prompt":"How many degrees of latitude apart are 40°N and 20°S?","answer":60,"options":[60,20,40],"hint":"They are on opposite sides of the equator: add 40 and 20.","pic":{"t":"lines","axis":"lat","places":[{"name":"A","deg":40},{"name":"B","deg":-20}]}}}],
progression:{"requires":["geography-e-contour-lines","geography-e-map-grid"],"operations":2,"demand":"Turn N and S latitudes into positions on one line, then compare or measure across the equator."},
items(add){
 const L=[-70,-60,-50,-40,-30,-20,-10,10,20,30,40,50,60,70];
 L.forEach((d,i)=>add('hemisphere',`A town is at ${deg(d)}. Is it in the northern or the southern hemisphere?`,d>0?'northern':'southern',{t:'lines',axis:'lat',places:[{name:'Town',deg:d}]},`${d>0?'N':'S'} means ${d>0?'north':'south'} of the equator.`,[d>0?'north':'south',d>0?'northern hemisphere':'southern hemisphere']));
 let n=0;
 L.forEach((a,i)=>L.forEach((b,j)=>{if(j<=i)return;n++;const [x,y]=n%2?[a,b]:[b,a],A=TOWNS[n%8],B=TOWNS[(n+3)%8],pic={t:'lines',axis:'lat',places:[{name:A,deg:x},{name:B,deg:y}]},given=`${A} is at ${deg(x)} and ${B} is at ${deg(y)}. `;
  if(n%3===0)add('compare',given+`Which is farther north: ${A} or ${B}?`,x>y?A:B,pic,'Place both on one line: N latitudes are above the equator, S below.');
  else if(n%3===1&&Math.abs(x)!==Math.abs(y))add('compare',given+`Which is closer to the equator: ${A} or ${B}?`,Math.abs(x)<Math.abs(y)?A:B,pic,'Compare only the number of degrees from 0°, whichever hemisphere.');
  else add('distance',given+`How many degrees of latitude apart are they?`,Math.abs(x-y),pic,(x>0)===(y>0)?'Same hemisphere: subtract.':'Opposite hemispheres: add both distances to the equator.');
 }));
}
};
