// UNVERIFIED: 36 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: Some features are shapes of land, others are bodies of water. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"geography-e-land-and-water",subject:"geography",level:3,grade:2,standard:"NCSS III",
 title:"Land and water",goal:"Some features are shapes of land, others are bodies of water.",points:20,
 skills:{"land":"Shapes of land","water":"Bodies of water","tell":"Telling them apart"},
 steps:[
 {skill:"land",say:"Mountains are tall landforms.",pic:[{"t":"tiles","seq":["mountain","mountain","mountain"]}],eq:"Mountains are land.",
  check:{prompt:"Land or water: mountain?",answer:"land",options:["land","water"],hint:"Mountains are tall landforms.",pic:{"t":"tiles","seq":["mountain","mountain","mountain"]}}},
 {skill:"land",say:"Plains are flat landforms.",pic:[{"t":"tiles","seq":["plain","plain","plain"]}],eq:"Plains are land."},
 {skill:"water",say:"Oceans are large bodies of water.",pic:[{"t":"tiles","seq":["ocean","ocean","ocean"]}],eq:"Oceans are water.",
  check:{"prompt":"Look back: are plains land or water?","answer":"land","options":["land","water"],"hint":"Plains are flat landforms.","pic":{"t":"pair","a":"plains","b":"?"}}},
 {skill:"water",say:"Rivers are flowing bodies of water.",pic:[{"t":"tiles","seq":["river","river","river"]}],eq:"Rivers are water."},
 {skill:"tell",say:"Mountains are land, but oceans are water.",pic:[{"t":"tiles","seq":["mountain","ocean","mountain","ocean"]}],eq:"Mountains are land, oceans are water.",
  check:{prompt:"Land or water: river?",answer:"water",options:["water","land"],hint:"Rivers are flowing bodies of water.",pic:{"t":"tiles","seq":["river","river","river"]}}},
 {skill:"tell",say:"Plains are land, but rivers are water.",pic:[{"t":"tiles","seq":["plain","river","plain","river"]}],eq:"Plains are land, rivers are water."}],
 items(add){
  const _SKIP=new Set(["Land or water: mountain?","Land or water: ocean?","Land or water: river?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["tell","land","water"];let _q=0;/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);if(/^[0-9]+ /.test(r))v.add(r.split(' ')[0]);if(/^(a|an|the) /i.test(r))v.add(r.replace(/^(a|an|the) /i,''));v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["mountain","land"],["plain","land"],["ocean","water"],["river","water"],["hill","land"],["valley","land"],["lake","water"],["stream","water"],["forest","land"],["desert","land"],["sea","water"],["pond","water"],["canyon","land"],["gulf","water"],["bay","water"],["plateau","land"],["volcano","land"],["creek","water"],["delta","land"],["estuary","water"],["fjord","water"],["dune","land"],["tundra","land"],["cave","land"],["lagoon","water"],["savannah","land"],["brook","water"],["island","land"],["peninsula","land"],["cliff","land"],["mesa","land"],["prairie","land"],["waterfall","water"],["strait","water"],["harbor","water"],["puddle","water"]],_A=[(x,r,labels)=>"Land or water: "+(x)+"?",(x,r,labels)=>"Is this land or water: "+(x)+"?",(x,r,labels)=>"Sort "+(x)+" into land or water."],_W=[(x,r,labels)=>""+(x)+" is "+(r)+"."],labels="land or water";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add(_SK[_q++%_SK.length],_A[_j](x,r,labels),r,null,_W[_j%_W.length](x,r,labels),_V(r));}
 }};
