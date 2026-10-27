// World-map layout (Castle Crashers level select). Owned by the worldmap agent; read by scenes/worldmap.js and
// tools/bake-worldmap-tmx.mjs, which writes the Tiled maps (art/tiled/worldmap/<chapter>.tmx) from these numbers.
// Coordinates are native map pixels: the world map is a Tiled map at 1:1, 32 px tiles, like Oakhaven.
// - MAPS[chapter]: map size (px, whole tiles), the baked scene module, and gates: edge roads to the next chapter.
// - PADS[levelId]: pad centre on its chapter map; lm = landmark key the TMX generator dresses beside it
//   (unknown keys get a generic camp); lx/ly = landmark anchor offset from the pad.
// A chapter outside the vertical slice (levels.js SLICE / levelFogged) has a locked gate marked 'coming soon'.
// - BENDS['a>b']: optional [dx,dy] that bows the road from pad a to pad b (quadratic control point offset).
// Roads come from levels.js `requires` (pads in the same chapter) plus the gates. To add a pad: add it to levels.js,
// give it a PADS entry here, run `node tools/bake-worldmap-tmx.mjs <chapter>` then `node tools/bake-worldmap.mjs`.
import {LEVELS,CHAPTERS,levelById,levelOpen,levelDone,levelFogged} from './levels.js';
export const MAPS={
 /* Winding Elderwood (owner 16 Oct): native 480x270 PixelLab board. Keep every level's landmark and unlocks.
    Bandit Road's burnt tower is beside the main bend; Ruined Watch's stone tower is a mandatory spur.
    Shared junction stretches below preserve those assignments without adding prerequisites. */
 elderwood:{w:480,h:270,fit:true,view:[0,0,1],pad:[9,4],art:'elderwood-winding.png',scene:'elderwood',gates:[{id:'gate:elderwood>emberkeep',to:'emberkeep',x:430,y:65,label:'To Emberkeep'}]},
 emberkeep:{w:480,h:270,fit:true,view:[0,0,1],pad:[9,4],art:'emberkeep-endpoints.png',scene:'emberkeep',gates:[{id:'gate:emberkeep>elderwood',to:'elderwood',x:28,y:218,label:'To Elderwood'},{id:'gate:emberkeep>veilmoor',to:'veilmoor',x:412,y:83,label:'To the Veilmoor'}]},
 veilmoor:{w:480,h:270,fit:true,view:[0,0,1],pad:[9,4],art:'veilmoor-endpoints.png',scene:'veilmoor',gates:[{id:'gate:veilmoor>emberkeep',to:'emberkeep',x:24,y:218,label:'To Emberkeep'}]}};
export const PADS={
 home:{x:108,y:236},e1:{x:141,y:230},e2:{x:262,y:233},shop1:{x:301,y:221},e3:{x:383,y:221},ex1:{x:425,y:224},
 e4:{x:429,y:143},arena1:{x:360,y:165},e5:{x:285,y:151},e6:{x:220,y:176},ex2:{x:174,y:105},e7:{x:249,y:75},e8:{x:398,y:88},
 m1:{x:71,y:218},
 m2:{x:170,y:209},
 shop2:{x:264,y:229},
 m3:{x:370,y:185},
 mx1:{x:421,y:227},
 m4:{x:334,y:135},
 arena2:{x:280,y:173},
 m5:{x:215,y:135},
 m6:{x:163,y:76},
 m7:{x:382,y:80},
 v1:{x:71,y:218},
 v2:{x:166,y:209},
 shop3:{x:261,y:233},
 v3:{x:367,y:188},
 vx1:{x:421,y:233},
 v4:{x:338,y:135},
 arena3:{x:281,y:177},
 v5:{x:210,y:135},
 v6:{x:168,y:74},
 v7:{x:382,y:79}};
/* Painted chapters follow their traced waypoints below; later chapters use these quadratic bends. */
export const BENDS={'m1>m2':[0,30],'m2>shop2':[30,0],'m2>m3':[0,72],'m3>mx1':[30,0],'m3>m4':[0,72],'m4>arena2':[-30,0],'m4>m5':[60,-60],'m5>m6':[90,30],'m6>m7':[90,30],'v1>v2':[0,30],'v2>shop3':[30,0],'v2>v3':[0,72],'v3>vx1':[-30,0],'v3>v4':[0,60],'v4>arena3':[-42,0],'v4>v5':[60,-30],'v5>v6':[78,30],'v6>v7':[150,30]};
export const PAD_RX=36,PAD_RY=20;
/* A painted chapter's walkable road: [a,b,waypoints] links traced from its picture (map px between the two pads). The trader
   and the arena sit on the main road, so a requirement can run through another pad (e2 -> shop1 -> e3): pathPoints follows the
   road, neighbours() are the road links, and edges() stay the unlock graph from levels.js. */
export const ROADS={veilmoor:[['gate:veilmoor>emberkeep','v1',[[45,219]]],['v1','v2',[[95,214],[119,209],[143,207]]],['v2','v3',[[190,213],[212,213],[236,207],[258,201],[283,196],[313,191],[341,188]]],['v2','shop3',[[190,213],[212,213],[228,210],[234,221],[246,229]]],['v3','vx1',[[377,203],[388,216],[403,226]]],['v3','v4',[[394,187],[418,183],[440,175],[450,165],[451,156],[445,146],[431,139],[411,136],[383,136],[359,136]]],['v4','arena3',[[315,138],[302,142],[309,154],[302,167],[291,173]]],['v4','v5',[[315,138],[288,143],[267,144],[244,140],[226,136]]],['v5','v6',[[185,137],[164,140],[144,140],[125,135],[114,125],[110,114],[112,103],[120,91],[134,82],[150,77]]],['v6','v7',[[190,75],[213,80],[236,86],[259,91],[280,93],[303,90],[325,84],[345,79],[365,78]]]],emberkeep:[['gate:emberkeep>elderwood','m1',[[45,218]]],['m1','m2',[[95,220],[115,215],[140,208]]],['m2','m3',[[194,214],[214,213],[234,207],[258,200],[285,194],[315,189],[344,185]]],['m2','shop2',[[194,214],[214,213],[234,207],[244,223],[254,228]]],['m3','mx1',[[383,201],[399,217],[410,224]]],['m3','m4',[[397,188],[425,184],[445,173],[450,160],[443,148],[426,140],[400,136],[368,137]]],['m4','arena2',[[315,139],[300,143],[301,155],[295,167]]],['m4','m5',[[315,139],[300,143],[280,144],[256,139],[235,135]]],['m5','m6',[[191,140],[166,143],[140,139],[121,131],[113,119],[112,108],[119,94],[136,83]]],['m6','m7',[[187,75],[208,79],[231,85],[257,91],[281,92],[305,87],[328,80],[352,78]]],['m7','gate:emberkeep>veilmoor',[[399,84],[406,84]]]],elderwood:[['home','e1',[[122,231]]],['e1','e2',[[162,234],[183,241],[201,244],[220,244],[242,242]]],['e2','shop1',[[280,225]]],['shop1','e3',[[323,220],[344,223],[364,224]]],['e3','e4',[[404,218],[420,209],[432,197],[434,187],[429,174],[424,165],[428,153]]],['e4','arena1',[[428,154],[420,165],[400,167],[380,168]]],['arena1','e5',[[340,164],[322,158],[305,155]]],['e5','e6',[[278,163],[263,172],[243,177]]],['e6','e7',[[198,175],[177,170],[164,163],[162,155],[168,146],[183,135],[199,127],[220,124],[237,113],[249,102],[255,91],[254,83]]],['e7','e8',[[254,83],[255,91],[249,102],[265,97],[286,93],[307,89],[326,86],[339,81],[356,87],[375,92],[392,90]]],['e8','gate:elderwood>emberkeep',[[410,80],[420,75],[427,70]]],['e3','ex1',[[404,218],[420,220]]],['e6','ex2',[[198,175],[177,170],[164,163],[162,155],[168,146],[183,135],[188,128],[185,117]]]]};
/* pad half-size per map: the painted board's pads are small ovals */
export const padSize=ch=>MAPS[ch]?.pad||[PAD_RX,PAD_RY];
const chapterOf=id=>id.startsWith('gate:')?id.slice(5).split('>')[0]:levelById(id)?.chapter;
export const isGate=id=>id.startsWith('gate:');
export const gateById=id=>{for(const m of Object.values(MAPS))for(const g of m.gates)if(g.id===id)return g;return null;};
/* Pads and gates of one chapter, as {id,x,y,kind,name}. */
export function nodes(chapter){const out=LEVELS.filter(l=>l.chapter===chapter&&PADS[l.id]).map(l=>({id:l.id,x:PADS[l.id].x,y:PADS[l.id].y,kind:l.kind,name:l.name,level:l}));
 for(const g of MAPS[chapter]?.gates||[])out.push({id:g.id,x:g.x,y:g.y,kind:'gate',name:g.label,gate:g});return out;}
export const nodeById=(chapter,id)=>nodes(chapter).find(n=>n.id===id);
/* The level in `from` that a level in chapter `to` requires (or the reverse): where a gate path joins the pads. */
function gateLink(g,from){const into=LEVELS.filter(l=>l.chapter===g.to&&l.requires.some(r=>chapterOf(r)===from));
 if(into.length)return into[0].requires.find(r=>chapterOf(r)===from);
 const back=LEVELS.find(l=>l.chapter===from&&l.requires.some(r=>chapterOf(r)===g.to));return back?.id||null;}
/* Arrival node when stepping through gate g: the matching gate on the other map. */
export function gateArrival(g){const from=chapterOf(g.id);return MAPS[g.to]?.gates.find(x=>x.to===from)||null;}
/* Undirected edges of a chapter's path graph: [a,b] pairs, a = the required (earlier) node. */
export function edges(chapter){const out=[];for(const l of LEVELS){if(l.chapter!==chapter||!PADS[l.id])continue;for(const r of l.requires)if(chapterOf(r)===chapter&&PADS[r])out.push([r,l.id]);}
 for(const g of MAPS[chapter]?.gates||[]){const link=gateLink(g,chapter);if(link&&PADS[link])out.push([link,g.id]);}
 return out;}
const pos=(chapter,id)=>{const n=nodeById(chapter,id);return n?[n.x,n.y]:null;};
function samplePath(chapter,a,b){let key=a+'>'+b,flip=false;if(!BENDS[key]&&BENDS[b+'>'+a]){key=b+'>'+a;flip=true;}
 const [p0,p1]=flip?[pos(chapter,b),pos(chapter,a)]:[pos(chapter,a),pos(chapter,b)];if(!p0||!p1)return[];
 const bend=BENDS[key]||[0,0],cx=(p0[0]+p1[0])/2+bend[0],cy=(p0[1]+p1[1])/2+bend[1];const len=Math.hypot(p1[0]-p0[0],p1[1]-p0[1])+Math.hypot(bend[0],bend[1]);
 const n=Math.max(2,Math.ceil(len/3)),pts=[];for(let i=0;i<=n;i++){const t=i/n,u=1-t;pts.push([u*u*p0[0]+2*u*t*cx+t*t*p1[0],u*u*p0[1]+2*u*t*cy+t*t*p1[1]]);}
 return flip?pts.reverse():pts;}
/* a painted road link a->b: a Catmull-Rom curve through its traced waypoints, sampled every ~3 map px */
function linkPath(chapter,a,b){const L=ROADS[chapter].find(r=>(r[0]===a&&r[1]===b)||(r[0]===b&&r[1]===a));if(!L)return[];const p0=pos(chapter,L[0]),p1=pos(chapter,L[1]);if(!p0||!p1)return[];
 const K=[p0,...L[2],p1],C=[K[0],...K,K[K.length-1]],pts=[];for(let i=1;i<C.length-2;i++){const [q0,q1,q2,q3]=[C[i-1],C[i],C[i+1],C[i+2]],n=Math.max(2,Math.ceil(Math.hypot(q2[0]-q1[0],q2[1]-q1[1])/3));
  for(let k=i===1?0:1;k<=n;k++){const t=k/n,t2=t*t,t3=t2*t;pts.push([0,1].map(j=>.5*(2*q1[j]+(-q0[j]+q2[j])*t+(2*q0[j]-5*q1[j]+4*q2[j]-q3[j])*t2+(-q0[j]+3*q1[j]-3*q2[j]+q3[j])*t3)));}}
 return L[0]===a?pts:pts.reverse();}
const roadLinks=(chapter,id)=>ROADS[chapter].flatMap(r=>r[0]===id?[r[1]]:r[1]===id?[r[0]]:[]);
/* the road route between two pads of a painted chapter (breadth-first over its links) */
export function roadRoute(chapter,a,b){const prev={[a]:null},q=[a];while(q.length){const c=q.shift();if(c===b)break;for(const n of roadLinks(chapter,c))if(!(n in prev)){prev[n]=c;q.push(n);}}
 if(!(b in prev))return null;const out=[];for(let c=b;c!==null;c=prev[c])out.unshift(c);return out;}
/* Path polyline from node a to node b (either direction), sampled every ~3 map px. The hero token walks these points; on a
   painted chapter they follow the painted road through any pads in between. */
export function pathPoints(chapter,a,b){if(!ROADS[chapter])return samplePath(chapter,a,b);const r=roadRoute(chapter,a,b);if(!r||r.length<2)return[];
 const out=[];for(let i=1;i<r.length;i++){const seg=linkPath(chapter,r[i-1],r[i]);out.push(...(i>1?seg.slice(1):seg));}return out;}
export const neighbours=(chapter,id)=>ROADS[chapter]?roadLinks(chapter,id):edges(chapter).flatMap(([a,b])=>a===id?[b]:b===id?[a]:[]);
/* Pad state for drawing: 'done' | 'open' | 'locked'. Gates are open when the far chapter has an open level. */
export const chapterFogged=ch=>levelFogged({chapter:ch});
export function nodeState(save,id){if(!isGate(id)&&levelFogged(levelById(id)))return 'soon';if(isGate(id)){const g=gateById(id);if(chapterFogged(g.to))return 'soon';return LEVELS.some(l=>l.chapter===g.to&&levelOpen(save,l.id))?'open':'locked';}
 return levelDone(save,id)&&levelById(id)?.kind!=='shop'?'done':levelOpen(save,id)?'open':'locked';}
export const canEnter=(save,id)=>!['locked','soon'].includes(nodeState(save,id));
export const playableChapter=ch=>!!MAPS[ch]&&!chapterFogged(ch);
export {CHAPTERS};
