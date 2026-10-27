// UNVERIFIED: 57 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: Tell a river from a mountain, and say which continent each famous one is on. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"geography-e-rivers-and-mountains",subject:"geography",level:3,grade:4,standard:"NCSS Theme 3",
 title:"Rivers and mountains",goal:"Tell a river from a mountain, and say which continent each famous one is on.",points:20,
 skills:{"which":"River or mountain","where":"Which continent it is on","famous":"Famous ones by name"},
 steps:[
 {skill:"which",say:"A river is water that flows across the land.  A mountain is land that rises high above it.",pic:[{"t":"pair","a":"river","b":"mountain"}]},
 {skill:"which",say:"The Nile and the Amazon are rivers.  Everest and Kilimanjaro are mountains.",pic:[{"t":"pair","a":"the Nile","b":"Everest"}],eq:"rivers: Nile, Amazon",
  check:{prompt:"Is the Amazon a river or a mountain?",answer:"a river",options:["a river","a mountain"],hint:"Boats travel along it.",pic:{"t":"pair","a":"the Amazon","b":null}}},
 {skill:"where",say:"Every one of them sits on a continent.  The Nile flows through Africa.",pic:[{"t":"world","mark":"Africa"}],eq:"the Nile: Africa"},
 {skill:"where",say:"The Amazon is in South America, and the Mississippi is in North America.",pic:[{"t":"world","mark":"South America"}],eq:"the Amazon: South America",
  check:{"prompt":"Which continent does the Nile flow through?","answer":"Africa","options":["Africa","South America","Asia"],"hint":"Look back one step: the Nile and its continent.","pic":{"t":"world"}}},
 {skill:"famous",say:"Mount Everest is the highest mountain on Earth, and it is in Asia.",pic:[{"t":"world","mark":"Asia"}],eq:"Everest: Asia"},
 {skill:"famous",say:"The Alps are in Europe, and Kilimanjaro is in Africa.  Name it, then place it.",pic:[{"t":"world","blank":"Europe"}],eq:"the Alps: Europe",
  check:{prompt:"Which continent is Mount Everest on?",answer:"Asia",options:["Asia","Europe","Africa"],hint:"It is in the Himalayas, between Nepal and Tibet.",pic:{"t":"world","mark":"Asia"}}}],
 items(add){
  const _SKIP=new Set(["Is the Amazon a river or a mountain?","Which continent is the Amazon on?","Which continent is Mount Everest on?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["where","famous"];let _q=0;const _T=[["the Nile","Africa"],["the Congo River","Africa"],["the Niger River","Africa"],["the Zambezi","Africa"],["Mount Kilimanjaro","Africa"],["the Atlas Mountains","Africa"],["Mount Kenya","Africa"],["the Amazon","South America"],["the Orinoco","South America"],["the Parana River","South America"],["the Andes","South America"],["Aconcagua","South America"],["the Mississippi","North America"],["the Missouri River","North America"],["the Colorado River","North America"],["the Yukon River","North America"],["the Rocky Mountains","North America"],["Mount Denali","North America"],["the Appalachian Mountains","North America"],["the Yangtze","Asia"],["the Ganges","Asia"],["the Mekong","Asia"],["the Indus","Asia"],["Mount Everest","Asia"],["K2","Asia"],["Mount Fuji","Asia"],["the Himalayas","Asia"],["the Danube","Europe"],["the Rhine","Europe"],["the Thames","Europe"],["the Volga","Europe"],["the Seine","Europe"],["the Alps","Europe"],["the Pyrenees","Europe"],["Mont Blanc","Europe"],["the Murray River","Australia"],["the Great Dividing Range","Australia"]],_X={},_A=[(k,r)=>"Which continent is "+(k)+" on?",(k,r)=>"On which continent would you find "+(k)+"?",(k,r)=>""+(k)+" is on which continent?"],_W=[(k,r)=>""+(k)+" is on "+(r)+"."];
for(let _j=0;_j<_A.length;_j++)for(const [k,r] of _T)
add(_SK[_q++%_SK.length],_A[_j](k,r),r,{"t":"world","blank":r},_W[_j%_W.length](k,r),_X[k]);}
{/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);if(/^[0-9]+ /.test(r))v.add(r.split(' ')[0]);if(/^(a|an|the) /i.test(r))v.add(r.replace(/^(a|an|the) /i,''));v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["the Nile","a river"],["the Amazon","a river"],["the Mississippi","a river"],["the Yangtze","a river"],["the Ganges","a river"],["the Danube","a river"],["the Rhine","a river"],["the Thames","a river"],["the Mekong","a river"],["the Congo River","a river"],["the Volga","a river"],["the Murray River","a river"],["Mount Everest","a mountain"],["K2","a mountain"],["Mount Fuji","a mountain"],["Mount Kilimanjaro","a mountain"],["Mont Blanc","a mountain"],["Aconcagua","a mountain"],["Mount Denali","a mountain"],["Mount Kenya","a mountain"]],_A=[(x,r,labels)=>"Is "+(x)+" a river or a mountain?",(x,r,labels)=>"River or mountain: "+(x)+"?"],_W=[(x,r,labels)=>""+(x)+" is "+(r)+"."],labels="a river or a mountain";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add("which",_A[_j](x,r,labels),r,{"t":"pair","a":x,"b":null},_W[_j%_W.length](x,r,labels),_V(r));}
 }};
