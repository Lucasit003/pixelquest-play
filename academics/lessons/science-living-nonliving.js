// Facts reviewed 3 Nov 2026 (improve20-r16c): 61 rows and the 3 Try-its checked against NGSS K-LS1-1 and Britannica (life: growth, needs, reproduction); 0 fixed.
// Limits: one reader, row by row, against those references as known to the reviewer; no page was fetched live. Generated sums are computed, not reviewed.
// Elementary topic: Living things grow, need food and water, and make more of themselves. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"science-e-living-nonliving",subject:"science",level:3,grade:2,standard:"NGSS K-LS1-1",
 title:"Living and non-living",goal:"Living things grow, need food and water, and make more of themselves.",points:20,
 skills:{"living":"Living things","nonliving":"Non-living things","tell":"Telling them apart"},
 steps:[
 {skill:"living",say:"Living things grow. They need food and water. They make more of themselves. Plants and animals are living.",pic:[{"t":"tiles","seq":["plant","animal","rock","book"]}],eq:"Plants and animals are living."},
 {skill:"nonliving",say:"Non-living things do not grow. They do not need food or water. They do not make more of themselves. Rocks and books are non-living.",pic:[{"t":"tiles","seq":["plant","animal","rock","book"]}],eq:"Rocks and books are non-living.",
  check:{"prompt":"Think about a metal spoon. Is it living or non-living?","answer":"non-living","options":["non-living","living"],"hint":"A spoon does not grow, does not need food or water, and does not make more spoons.","pic":{"t":"word","base":"a metal spoon"}}},
 {skill:"tell",say:"Is it living? Ask three questions. Does it grow? Does it need food and water? Does it make more of its kind?",pic:[{"t":"tiles","seq":["plant","animal","rock","book"]}],eq:"Plants grow, need water and sunlight, and make more plants. Rocks do not grow, do not need water or sunlight, and do not make more rocks."},
 {skill:"tell",say:"Plants are living. They grow taller. They need water and sunlight. Many plants make flowers and seeds.",pic:[{"t":"word","base":"plant","suffix":"ing","solve":true}],eq:"Plants are living.",
  check:{"prompt":"Think about a pet dog. Is it living or non-living?","answer":"living","options":["living","non-living"],"hint":"A dog grows, needs food and water, and can have puppies.","pic":{"t":"word","base":"a pet dog"}}},
 {skill:"tell",say:"Books are non-living. They do not grow. They do not need food or water. They do not make more books.",pic:[{"t":"word","base":"book","suffix":"ing","solve":true}],eq:"Books are non-living."},
 {skill:"tell",say:"Living things grow, need food and water, and make more of themselves. Non-living things do not.",pic:[{"t":"tiles","seq":["plant","animal","rock","book"]}],eq:"Living things grow, need food and water, and make more of themselves. Non-living things do not.",
  check:{"prompt":"Think about an oak tree. Is it living or non-living?","answer":"living","options":["living","non-living"],"hint":"A tree is a plant. It grows. It needs water and sunlight. An oak makes acorns, which hold its seeds.","pic":{"t":"word","base":"an oak tree"}}}],
 items(add){
  /* 28 Oct (elfact): every why in this topic started with a lower-case letter ("dog is living."); each now starts with a capital. */
  {const _a0=add;add=(s,p,a,pic,why,acc)=>_a0(s,p,a,pic,typeof why==="string"?why.charAt(0).toUpperCase()+why.slice(1):why,acc);}
  const _SKIP=new Set(["Is a rock living or non-living?","Is a plant living or non-living?","Is a book living or non-living?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["tell","living","nonliving"];let _q=0;/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["dog","living"],["car","non-living"],["tree","living"],["table","non-living"],["flower","living"],["chair","non-living"],["bird","living"],["house","non-living"],["fish","living"],["boat","non-living"],["cat","living"],["bicycle","non-living"],["pen","non-living"],["pencil","non-living"],["sun","non-living"],["moon","non-living"],["star","non-living"],["cloud","non-living"],["rain","non-living"],["snow","non-living"],["lightning","non-living"],["thunder","non-living"],["fire","non-living"],["water","non-living"],["soil","non-living"],["rock","non-living"],["sand","non-living"],["dirt","non-living"],["grass","living"],["butterfly","living"],["frog","living"],["elephant","living"],["giraffe","living"],["hippopotamus","living"],["rhinoceros","living"],["tiger","living"],["lion","living"],["cheetah","living"],["leopard","living"],["jaguar","living"],["lynx","living"],["mushroom","living"],["worm","living"],["ant","living"],["spider","living"],["whale","living"],["owl","living"],["rabbit","living"],["cactus","living"],["snail","living"],["duck","living"],["spoon","non-living"],["key","non-living"],["coin","non-living"],["brick","non-living"],["clock","non-living"],["lamp","non-living"],["ice","non-living"],["wind","non-living"],["scissors","non-living"],["plate","non-living"]],_A=[(x,r,labels)=>"Living or non-living: "+(x)+"?",(x,r,labels)=>"Sort this into living or non-living: "+(x)+"."],_W=[(x,r,labels)=>""+(x)+" is "+(r)+"."],labels="living or non-living";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add(_SK[_q++%_SK.length],_A[_j](x,r,labels),r,null,_W[_j%_W.length](x,r,labels),_V(r));}
 }};
