// Original geography lesson. Fictional village grid; each direction is worked out from the two squares' columns and rows.
// Places are only paired when they sit on a straight line or an exact diagonal, so every answer is one of the eight directions.
const NAME={'-1,-1':'northwest','0,-1':'north','1,-1':'northeast','1,0':'east','1,1':'southeast','0,1':'south','-1,1':'southwest','-1,0':'west'};
const SHORT={northwest:'NW',north:'N',northeast:'NE',east:'E',southeast:'SE',south:'S',southwest:'SW',west:'W'};
const dirOf=(a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1];if(!dx&&!dy)return null;if(dx&&dy&&Math.abs(dx)!==Math.abs(dy))return null;return NAME[`${Math.sign(dx)},${Math.sign(dy)}`];};
const ref=a=>String.fromCharCode(65+a[0])+(a[1]+1);
const alsoFor=d=>[SHORT[d],d.replace(/^(north|south)(east|west)$/,'$1-$2'),d.replace(/^(north|south)(east|west)$/,'$1 $2')].filter(x=>x!==d);
const ASK8='north, northeast, east, southeast, south, southwest, west or northwest';
export default {
id:"geography-e-eight-directions",
subject:"geography",
level:3,
grade:3,
title:"Eight directions on a map",
goal:"Use northeast, southeast, southwest and northwest as well as north, east, south and west to describe where places are.",
standard:"Geographic skills: describe relative location with cardinal and intermediate directions",
points:20,
skills:{"direction":"Name the direction","opposite":"Reverse a direction","move":"Move diagonally"},
steps:[{"skill":"direction","say":"North, east, south and west are the four main directions. Halfway between them are four more: northeast, southeast, southwest and northwest. Northeast is between north and east.","pic":{"t":"compass"}},
{"skill":"direction","say":"On this map, north is at the top. The farm is one square up and one square right of the well, so the farm is northeast of the well.","pic":{"t":"gridmap","marks":[{"at":[1,3],"symbol":"triangle"},{"at":[2,2],"symbol":"circle"}],"key":[{"symbol":"triangle","name":"well"},{"symbol":"circle","name":"farm"}]},"check":{"prompt":"On a north-up map the school is one square down and one square left of the mill. Which direction is the school from the mill: northeast, southeast, southwest or northwest?","answer":"southwest","options":["southwest","northwest","southeast"],"hint":"Down is south; left is west.","pic":{"t":"compass"}}},
{"skill":"opposite","say":"Directions reverse. If the farm is northeast of the well, then the well is southwest of the farm. Each direction's opposite points the other way across the compass.","pic":{"t":"gridmap","marks":[{"at":[1,3],"symbol":"triangle"},{"at":[2,2],"symbol":"circle"}],"key":[{"symbol":"triangle","name":"well"},{"symbol":"circle","name":"farm"}]}},
{"skill":"opposite","say":"Opposites: north and south, east and west, northeast and southwest, northwest and southeast.","pic":{"t":"compass"},"check":{"prompt":"The mill is northwest of the bakery. In which direction is the bakery from the mill: southeast or southwest?","answer":"southeast","options":["southeast","southwest"],"hint":"Reverse both parts: north becomes south, west becomes east.","pic":{"t":"compass"}}},
{"skill":"move","say":"A diagonal move changes both the column and the row. One square northeast from C3 goes one column east to D and one row north to 2: D2.","pic":{"t":"gridmap","start":[2,2],"path":[[1,-1]]}},
{"skill":"move","say":"Places do not have to be next to each other. A place two squares up and two squares right is still exactly northeast, because the column and row change by the same amount.","pic":{"t":"gridmap","start":[1,3],"path":[[1,-1],[1,-1]]},"check":{"prompt":"On a north-up grid with rows numbered from the top, start at B4 and move one square southeast. Which square are you in?","answer":"C5","options":["C5","A5","C3"],"hint":"Southeast: one column east, one row south.","pic":{"t":"gridmap","start":[1,3]}}}],
progression:{"requires":["geography-e-compass","geography-e-map-grid"],"operations":2,"demand":"Combine a column change and a row change into one of eight directions, reverse it, and apply a diagonal move."},
items(add){
 const places=[['triangle','well'],['circle','farm'],['square','school']];
 const cells=[];for(let x=0;x<5;x++)for(let y=0;y<5;y++)cells.push([x,y]);
 let n=0;
 /* Twelve pairs for each of the eight directions, one or two squares apart, spread over the grid. */
 Object.entries(NAME).forEach(([k,d])=>{const [dx,dy]=k.split(',').map(Number),pairs=[];
  for(const a of cells)for(const s of [1,2]){const b=[a[0]+dx*s,a[1]+dy*s];if(b.every(v=>v>=0&&v<5))pairs.push([a,b]);}
  pairs.filter((x,i)=>i%Math.max(1,Math.floor(pairs.length/12))===0).slice(0,12).forEach(([a,b])=>{n++;
   const [sa,na]=places[n%3],[sb,nb]=places[(n+1)%3],pic={t:'gridmap',marks:[{at:a,symbol:sa},{at:b,symbol:sb}],key:[{symbol:sa,name:na},{symbol:sb,name:nb}]};
   const given=`North-up map, columns A-E, rows 1-5 from the top: the ${na} is in ${ref(a)} and the ${nb} is in ${ref(b)}. `;
   if(n%2)add('direction',given+`Which direction is the ${nb} from the ${na}: ${ASK8}?`,d,pic,`From ${ref(a)} to ${ref(b)}: ${d}.`,alsoFor(d));
   else add('opposite',given+`Which direction is the ${na} from the ${nb}: ${ASK8}?`,dirOf(b,a),pic,`The ${nb} is ${d} of the ${na}, so the ${na} is the opposite way: ${dirOf(b,a)}.`,alsoFor(dirOf(b,a)));});
 });
 cells.forEach(a=>Object.entries(NAME).forEach(([k,d])=>{const [dx,dy]=k.split(',').map(Number),b=[a[0]+dx,a[1]+dy];if(!dx||!dy||b[0]<0||b[0]>4||b[1]<0||b[1]>4)return;
  add('move',`On a north-up grid, columns A-E and rows 1-5 from the top, start at ${ref(a)} and move one square ${d}. Which square are you in?`,ref(b),{t:'gridmap',start:a},`${d[0].toUpperCase()+d.slice(1)} changes the column by ${dx>0?'+1 (east)':'-1 (west)'} and the row by ${dy>0?'+1 (south)':'-1 (north)'}.`,[ref(b).toLowerCase()]);}));
}
};
