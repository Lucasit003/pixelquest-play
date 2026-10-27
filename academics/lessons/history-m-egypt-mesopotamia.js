/* Middle School topic (Grade 6, C3 D2.His.1.6-8 and D2.His.14.6-8): Ancient Egypt and Mesopotamia, real history. Every
   question is built from FACTS below; each row was checked against the source listed under its id in
   docs/research/MHIST_OCT27.md (Britannica, the British Museum, the Met, the Louvre, the Penn Museum). Ancient dates are
   hedged with "about" where historians give a range; rows marked `about` are only compared with dates far enough away
   (F.gap years) that the uncertainty cannot change the order. Written in our own words; nothing is quoted from a source. */
export const FACTS={
 gap:150,maxPairs:44,maxTriples:14,
 sides:['Egypt','Mesopotamia'],areas:['Egypt','Mesopotamia'],froms:['Egypt','Mesopotamia'],
 events:[
  {id:'eg-e1',label:'Writing begins in Sumer',y:[-3200],about:true,when:'about 3200 BCE',note:'Sources place the first Mesopotamian writing between about 3300 and 3200 BCE.'},
  {id:'eg-e2',label:'Narmer unites Egypt',y:[-3100],about:true,when:'about 3100 BCE'},
  {id:'eg-e3',label:'The Great Pyramid is built for Khufu',y:[-2560],about:true,when:'about 2560 BCE',note:'Dates for Khufu vary by a few decades between sources.'},
  {id:'eg-e4',label:'Sargon founds the Akkadian empire',y:[-2334],about:true,when:'about 2334 BCE',note:'Sargon’s dates are uncertain; about 2334 BCE is the usual estimate.'},
  {id:'eg-e5',label:'Ur-Nammu builds the ziggurat of Ur',y:[-2100],about:true,when:'about 2100 BCE'},
  {id:'eg-e6',label:'Hammurabi rules Babylon',y:[-1792,-1750],about:true,when:'about 1792 to 1750 BCE'},
  {id:'eg-e7',label:'Hatshepsut rules Egypt',y:[-1479,-1458],about:true,when:'about 1479 to 1458 BCE',note:'She first ruled jointly with Thutmose III, then as king on her own.'},
  {id:'eg-e8',label:'Ramesses II rules Egypt',y:[-1279,-1213],about:true,when:'about 1279 to 1213 BCE'},
  {id:'eg-e9',label:'Ashurbanipal rules Assyria',y:[-668,-631],about:true,when:'about 668 to 631 BCE'},
  {id:'eg-e10',label:'Nineveh falls',y:[-612],when:'612 BCE'},
  {id:'eg-e11',label:'Cyrus of Persia takes Babylon',y:[-539],when:'539 BCE'},
  {id:'eg-e12',label:'Alexander the Great takes Egypt',y:[-332],when:'332 BCE'},
  {id:'eg-e13',label:'The Rosetta Stone decree is issued',y:[-196],when:'196 BCE'},
  {id:'eg-e14',label:'Egypt becomes a Roman province',y:[-30],when:'30 BCE'},
  {id:'eg-e15',label:'French soldiers find the Rosetta Stone',y:[1799],when:'1799 CE'},
  {id:'eg-e16',label:'Champollion reads the hieroglyphs',y:[1822],when:'1822 CE'},
  {id:'eg-e17',label:'Tutankhamun’s tomb is found',y:[1922],when:'1922 CE'}],
 people:[
  {id:'eg-p1',name:'Narmer',did:'is credited with uniting Egypt',side:'Egypt'},
  {id:'eg-p2',name:'Khufu',did:'had the Great Pyramid built',side:'Egypt'},
  {id:'eg-p3',name:'Imhotep',did:'designed the Step Pyramid for Djoser',side:'Egypt',note:'The Step Pyramid is older than the Great Pyramid.'},
  {id:'eg-p4',name:'Hatshepsut',did:'was a woman who ruled as pharaoh',side:'Egypt',also:['eg-p7']},
  {id:'eg-p5',name:'Akhenaten',did:'promoted worship of the sun disk Aten',side:'Egypt'},
  {id:'eg-p6',name:'Ramesses II',did:'built the great temples at Abu Simbel',side:'Egypt'},
  {id:'eg-p7',name:'Cleopatra VII',did:'was the last active Ptolemaic ruler',side:'Egypt'},
  {id:'eg-p8',name:'Sargon of Akkad',did:'founded the Akkadian empire',side:'Mesopotamia'},
  {id:'eg-p9',name:'Ur-Nammu',did:'built the great ziggurat at Ur',side:'Mesopotamia'},
  {id:'eg-p10',name:'Hammurabi',did:'issued a famous law code in Babylon',side:'Mesopotamia'},
  {id:'eg-p11',name:'Gilgamesh',did:'is the legendary king of Uruk',side:'Mesopotamia',note:'He is the hero of the Epic of Gilgamesh.'},
  {id:'eg-p12',name:'Ashurbanipal',did:'gathered a great library at Nineveh',side:'Mesopotamia'},
  {id:'eg-p13',name:'Nebuchadnezzar II',did:'rebuilt Babylon with its Ishtar Gate',side:'Mesopotamia'},
  {id:'eg-p14',name:'Cyrus the Great',did:'was the Persian king who took Babylon',side:'Persia'},
  {id:'eg-p15',name:'Champollion',did:'worked out how to read hieroglyphs',side:'France'},
  {id:'eg-p16',name:'Howard Carter',did:'found Tutankhamun’s tomb in 1922',side:'Britain'}],
 places:[
  {id:'eg-l1',name:'Memphis',area:'Egypt',what:'being the capital in the Old Kingdom'},
  {id:'eg-l2',name:'Thebes',area:'Egypt',what:'being the capital in the New Kingdom',also:['eg-l1','eg-l5']},
  {id:'eg-l3',name:'Giza',area:'Egypt',what:'the Great Pyramid of Khufu',also:['eg-l1']},
  {id:'eg-l4',name:'Abu Simbel',area:'Egypt',what:'the cliff temples of Ramesses II'},
  {id:'eg-l5',name:'the Valley of the Kings',area:'Egypt',what:'Tutankhamun’s tomb'},
  {id:'eg-l6',name:'Alexandria',area:'Egypt',what:'being founded by Alexander the Great'},
  {id:'eg-l7',name:'Ur',area:'Mesopotamia',what:'the ziggurat built by Ur-Nammu'},
  {id:'eg-l8',name:'Uruk',area:'Mesopotamia',what:'the legends of King Gilgamesh'},
  {id:'eg-l9',name:'Babylon',area:'Mesopotamia',what:'Hammurabi and the Ishtar Gate'},
  {id:'eg-l10',name:'Nineveh',area:'Mesopotamia',what:'Ashurbanipal’s library of clay tablets'}],
 things:[
  {id:'eg-t1',name:'cuneiform',from:'Mesopotamia',what:'wedge-shaped writing pressed into clay'},
  {id:'eg-t2',name:'hieroglyphs',from:'Egypt',what:'Egyptian writing with picture-shaped signs'},
  {id:'eg-t3',name:'papyrus',from:'Egypt',what:'writing sheets made from a Nile plant'},
  {id:'eg-t4',name:'a ziggurat',from:'Mesopotamia',what:'a stepped temple tower'},
  {id:'eg-t5',name:'mummification',from:'Egypt',what:'preserving a body for the afterlife'},
  {id:'eg-t6',name:'the civil calendar of 365 days',from:'Egypt',what:'twelve 30-day months plus five extra days'},
  {id:'eg-t7',name:'counting in sixties',from:'Mesopotamia',what:'a number system still used for minutes'},
  {id:'eg-t8',name:'the Code of Hammurabi',from:'Mesopotamia',what:'laws carved on a tall stone stele',note:'It lists about 282 laws. The best-known copy, found at Susa in 1901, is in the Louvre.'},
  {id:'eg-t9',name:'the Rosetta Stone',from:'Egypt',what:'one decree written in three scripts'},
  {id:'eg-t10',name:'the Epic of Gilgamesh',from:'Mesopotamia',what:'a long poem about an Uruk king'}],
 causes:[
  {id:'eg-c1',cause:'The Nile flooded every summer',effect:'Black silt was left on the fields',cy:null,ey:null,also:['eg-c2']},
  {id:'eg-c2',cause:'Farmers wanted to hold the flood water',effect:'Farmers built basins and canals',cy:null,ey:null},
  {id:'eg-c3',cause:'Alexander the Great took Egypt',effect:'His general Ptolemy later ruled Egypt',cy:-332,ey:-323,note:'Ptolemy took charge of Egypt in 323 BCE, and his family ruled it until Cleopatra.'},
  {id:'eg-c4',cause:'Ramesses II fought the Hittites',effect:'Egypt and the Hittites made peace',cy:-1275,ey:-1258,note:'The treaty is usually dated to about 1258 BCE.'},
  {id:'eg-c5',cause:'Nineveh was sacked in 612 BCE',effect:'Ashurbanipal’s library lay smashed and buried',cy:-612,ey:-612},
  {id:'eg-c6',cause:'Cyrus took Babylon in 539 BCE',effect:'The Neo-Babylonian empire ended',cy:-539,ey:-539},
  {id:'eg-c7',cause:'Cleopatra died in 30 BCE',effect:'Egypt became a Roman province',cy:-30,ey:-30},
  {id:'eg-c8',cause:'The Rosetta Stone also has Greek text',effect:'Scholars could decode the hieroglyphs',cy:-196,ey:1822}]
};
/* The question builder over FACTS. The same builder sits in all three real-history Middle topics (egypt-mesopotamia,
   silk-roads, american-revolution); only FACTS and the wording in ASK differ. Every answer is a row of FACTS, and every
   wrong choice is another row that cannot also be right: dates are compared only when they are far enough apart that
   "about" cannot swap them, a person or place listed in a row's `also` is never offered against it, and a wrong effect
   (or cause) is only drawn from a row whose effect came before the cause (or whose cause came after the effect). */
const first=e=>e.y[0],last=e=>e.y[e.y.length-1];
const apart=(a,b,gap)=>last(a)+(a.about||b.about?gap:0)<first(b);
const order=(a,b,gap)=>apart(a,b,gap)?[a,b]:apart(b,a,gap)?[b,a]:null;
const listOf=o=>o.length===2?`${o[0]} or ${o[1]}`:`${o.slice(0,-1).join(', ')} or ${o[o.length-1]}`;
const rot=(o,k)=>o.map((_,i)=>o[(i+k)%o.length]);
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
const tbl=(title,head,cols,rows)=>({t:'setups',title,head,cols,rows,hint:true});
const ok=(a,b)=>a!==b&&!(a.also||[]).includes(b.id)&&!(b.also||[]).includes(a.id);
/* Two rows to set against `row`, drawn in a fixed order that starts at k; rows on the same side come first when asked. */
const foils=(rows,row,k,key,same)=>{const pool=rot(rows,k%rows.length).filter(r=>ok(r,row)&&r[key]&&r[key]!==row[key]);
 const pick=[];for(const r of same?[...pool.filter(r=>r.side===row.side),...pool.filter(r=>r.side!==row.side)]:pool)if(pick.length<2&&!pick.some(p=>p[key]===r[key]))pick.push(r);return pick;};
function build(add,F,ASK){
 const seen=new Set(),once=(skill,prompt,answer,pic,why)=>{if(seen.has(prompt))throw new Error('repeated prompt: '+prompt);seen.add(prompt);add(skill,prompt,answer,pic,cap(why));};
 const ev=F.events,when=e=>`${e.label}: ${e.when}`,sorted=[...ev].sort((a,b)=>first(a)-first(b)),timeRows=es=>[...es].sort((a,b)=>first(a)-first(b)).map(e=>[e.label,e.when]);
 /* time: which of two happened first or later */
 const pairs=[];ev.forEach((a,i)=>ev.forEach((b,j)=>{if(j>i&&order(a,b,F.gap))pairs.push([a,b]);}));
 const step=Math.max(1,Math.ceil(pairs.length/F.maxPairs));
 pairs.filter((_,i)=>i%step===0).forEach(([a,b],i)=>{const [e1,e2]=order(a,b,F.gap),word=i%2?'later':'first',x=i%4<2?[a,b]:[b,a],ans=word==='first'?e1:e2;
  once('time',`Which happened ${word}: ${x[0].label} or ${x[1].label}?`,ans.label,tbl('In time order','Event',['When'],timeRows([a,b])),`${when(e1)}. ${when(e2)}. So the ${word==='first'?'earlier':'later'} one is: ${ans.label}${e1.about||e2.about?', even allowing for the uncertainty in the dates':''}.`);});
 /* time: first or last of three */
 let n3=0;for(const d of [1,2,3])for(let i=0;i+2*d<sorted.length&&n3<F.maxTriples;i+=2){const t=[sorted[i],sorted[i+d],sorted[i+2*d]];if(!order(t[0],t[1],F.gap)||!order(t[1],t[2],F.gap))continue;
  const word=n3%2?'last':'first',ans=word==='first'?t[0]:t[2],shown=rot(t,n3%3);n3++;
  once('time',`Which of these happened ${word}: ${listOf(shown.map(e=>e.label))}?`,ans.label,tbl('In time order','Event',['When'],timeRows(t)),`In time order: ${t.map(when).join('; ')}.`);}
 /* time: when did it happen */
 ev.forEach((e,i)=>{const far=rot(ev,i+1).filter(o=>o!==e&&o.when!==e.when&&order(o,e,F.gap*2));const pick=[];for(const o of far)if(pick.length<2&&!pick.some(p=>p.when===o.when))pick.push(o);if(pick.length<2)return;
  const opts=rot([e,...pick],i%3).map(o=>o.when);
  once('time',`${e.label}. When was that: ${listOf(opts)}?`,e.when,tbl('Dates','Event',['When'],timeRows([e,...pick])),`${when(e)}.${e.note?' '+e.note:''}`);});
 /* people: who did it, what they did, which side, and one true-or-false statement each */
 F.people.forEach((p,i)=>{const f=foils(F.people,p,i+1,'did',true);if(f.length<2)return;
  const names=rot([p,...f],i%3).map(o=>o.name),dids=rot([p,...f],(i+1)%3).map(o=>o.did),rows=[p,...f].map(o=>[o.name,o.did]);
  once('people',`Who ${p.did}: ${listOf(names)}?`,p.name,tbl('Who did what','Person',['Known for'],rows),`${p.name} ${p.did}.${p.note?' '+p.note:''}`);
  once('people',`Which of these describes ${p.name}: ${listOf(dids)}?`,p.did,tbl('Who did what','Person',['Known for'],rows),`${p.name} ${p.did}. ${f[0].name} ${f[0].did}, and ${f[1].name} ${f[1].did}.`);
  if(ASK.side&&F.sides.includes(p.side)){const s=F.sides.length<=3?rot(F.sides,i%F.sides.length):rot([p.side,...F.sides.filter(x=>x!==p.side).slice(i%2,i%2+2)],i%3);
   once('people',`${ASK.side(p.name)}: ${listOf(s)}?`,p.side,tbl('Who did what','Person',[ASK.sideHead],[[p.name,p.side]]),`${p.name} ${p.did}: ${ASK.sideWhy(p)}.`);}
  const t=i%2===0,o=f[0];
  once('people',`True or false: ${p.name} ${t?p.did:o.did}.`,t?'true':'false',tbl('Who did what','Person',['Known for'],t?[[p.name,p.did]]:[[p.name,p.did],[o.name,o.did]]),t?`True: ${p.name} ${p.did}.`:`False: it was ${o.name} who ${o.did}. ${p.name} ${p.did}.`);});
 /* places: what each is known for, and where it is */
 F.places.forEach((p,i)=>{const f=foils(F.places,p,i+1,'what',false);if(f.length<2)return;
  once('people',`Which place is known for ${p.what}: ${listOf(rot([p,...f],i%3).map(o=>o.name))}?`,p.name,tbl('Places','Place',[ASK.areaHead,'Known for'],[p,...f].map(o=>[o.name,o.area,o.what])),`${p.name} (${p.area}) is known for ${p.what}.`);
  if(p.area&&F.areas.includes(p.area)){const a=[p.area,...rot(F.areas.filter(x=>x!==p.area),i).slice(0,F.areas.length>2?2:1)];
   once('people',`${ASK.area(p.name)}: ${listOf(rot(a,i%a.length))}?`,p.area,tbl('Places','Place',[ASK.areaHead],[[p.name,p.area]]),`${p.name} is in ${p.area}: it is known for ${p.what}.`);}});
 /* things: where each came from (or who made it), and what it was */
 F.things.forEach((x,i)=>{const f=foils(F.things,x,i+1,'what',false);if(f.length<2)return;
  once('why',`Which description fits ${x.name}: ${listOf(rot([x,...f],i%3).map(o=>o.what))}?`,x.what,tbl('Things and ideas','Thing',['What it was'],[x,...f].map(o=>[o.name,o.what])),`${x.name}: ${x.what}.${x.note?' '+x.note:''}`);
  if(x.from&&F.froms.includes(x.from)){const a=[x.from,...rot(F.froms.filter(y=>y!==x.from),i).slice(0,F.froms.length>2?2:1)];
   once('why',`${ASK.from(x.name)}: ${listOf(rot(a,i%a.length))}?`,x.from,tbl('Things and ideas','Thing',[ASK.fromHead],[[x.name,x.from]]),`${x.name} (${x.what}) ${ASK.fromWhy(x)}.`);}});
 /* causes and effects, both ways */
 const C=F.causes;
 C.forEach((c,i)=>{const fe=rot(C,i+1).filter(o=>ok(o,c)&&(c.cy==null||o.ey==null||o.ey<c.cy)).slice(0,2);
  if(fe.length===2)once('why',`${c.cause}. What did that lead to: ${listOf(rot([c,...fe],i%3).map(o=>o.effect))}?`,c.effect,tbl('Cause and effect','Cause',['Effect'],[[c.cause,c.effect]]),`${c.cause}. That led to this: ${c.effect}.${fe.some(o=>o.ey!=null)&&c.cy!=null?' The other choices happened before it.':''}${c.note?' '+c.note:''}`);
  const fc=rot(C,i+2).filter(o=>ok(o,c)&&(c.ey==null||o.cy==null||o.cy>c.ey)).slice(0,2);
  if(fc.length===2)once('why',`${c.effect}. What helped cause that: ${listOf(rot([c,...fc],(i+1)%3).map(o=>o.cause))}?`,c.cause,tbl('Cause and effect','Cause',['Effect'],[[c.cause,c.effect]]),`${c.cause}. That led to this: ${c.effect}.${fc.some(o=>o.cy!=null)&&c.ey!=null?' The other choices happened after it.':''}${c.note?' '+c.note:''}`);});
}
const ASK={side:n=>`Which civilisation is ${n} part of`,sideHead:'Civilisation',sideWhy:p=>`that is part of the history of ${p.side}`,
 area:n=>`Where was ${n}`,areaHead:'Land',from:n=>`Which civilisation gave us ${n}`,fromHead:'From',fromWhy:x=>`comes from ${x.from}`};
const tl=events=>({t:'timeline',events});
export default {
id:'history-m-egypt-mesopotamia',subject:'history',level:4,grade:6,standard:'C3 D2.His.1.6-8, D2.His.14.6-8',
title:'Ancient Egypt and Mesopotamia',
goal:'Place the river civilisations of Egypt and Mesopotamia in time, match their rulers, places and inventions, and explain how the rivers and their writing shaped them.',
points:20,
skills:{time:'Dates and order',people:'People and places',why:'Inventions, causes and effects'},
steps:[
 {skill:'people',say:'Two of the first civilisations grew up beside rivers. Egypt lay along the Nile in northeast Africa. Mesopotamia, a Greek name meaning "between rivers", lay between the Tigris and the Euphrates, mostly in today’s Iraq.',pic:{t:'setups',title:'Two river civilisations',head:'',cols:['Egypt','Mesopotamia'],rows:[['River','Nile','Tigris and Euphrates'],['Where today','Egypt','mostly Iraq'],['Famous cities','Memphis, Thebes','Uruk, Ur, Babylon'],['Famous buildings','pyramids','ziggurats']]}},
 {skill:'why',say:'Each summer the Nile flooded and left dark, rich silt on the land beside it. Farmers built basins and canals to hold the water, then planted wheat and barley in the wet soil. Away from the river was dry desert.',eq:'flood → silt → crops',pic:{t:'setups',title:'The Nile’s year, simplified',head:'',cols:['What happened'],rows:[['Summer flood','water and silt cover the fields'],['After the flood','farmers plant in the wet silt'],['Harvest','wheat and barley are gathered'],['Beyond the river','dry desert']]}},
 {skill:'why',say:'Writing began in Sumer, in southern Mesopotamia, by about 3200 BCE. Scribes pressed a cut reed into wet clay, making wedge-shaped marks called cuneiform. Most early tablets are records of goods. Egyptians wrote hieroglyphs, often on papyrus.',pic:{t:'setups',title:'Two ways of writing',head:'',cols:['Egypt','Mesopotamia'],rows:[['Writing','hieroglyphs','cuneiform'],['Written on','papyrus, stone','clay tablets']]}},
 {skill:'time',say:'Ancient dates are often given with "about", because historians work them out from king lists and finds. Egypt was united around 3100 BCE, the Great Pyramid was built around 2560 BCE, and Hammurabi ruled Babylon from about 1792 to 1750 BCE.',pic:tl(['c. 3200 BCE writing','c. 3100 BCE Egypt united','c. 2560 BCE Great Pyramid','c. 1792 BCE Hammurabi','539 BCE Persians','30 BCE Rome']),
  check:{prompt:'Try it: which writing was pressed into wet clay with a reed: hieroglyphs or cuneiform?',answer:'cuneiform',options:['hieroglyphs','cuneiform'],hint:'Think about what Mesopotamian scribes wrote on, and the shape a reed leaves when it is pressed in.',pic:{t:'setups',title:'What each land wrote on',head:'',cols:['Egypt','Mesopotamia'],rows:[['Usual surface','papyrus sheets','clay tablets']]}}},
 {skill:'time',say:'With BCE dates the bigger number is earlier. Sargon of Akkad founded an empire about 2334 BCE, over 500 years before Hammurabi; Ramesses II ruled Egypt from about 1279 BCE. When two dates are only a few decades apart, "about" can blur which came first.',eq:'2334 BCE → 1792 BCE → 1279 BCE',pic:tl(['c. 2334 BCE','c. 1792 BCE','c. 1279 BCE']),
  check:{prompt:'Try it: which came first, Sargon’s Akkadian empire or Hammurabi’s reign in Babylon?',answer:'Sargon’s empire',options:['Sargon’s empire','Hammurabi’s reign'],hint:'Put both on the BCE count: the bigger BCE number is the earlier year.',pic:{t:'setups',title:'Two rulers of Mesopotamia',head:'Ruler',cols:['City'],rows:[['Sargon','Akkad'],['Hammurabi','Babylon']]}}},
 {skill:'people',say:'Rulers left their names on great works. Khufu had the Great Pyramid built at Giza. Hatshepsut ruled as pharaoh, and Ramesses II built the temples at Abu Simbel. In Mesopotamia, Hammurabi issued his law code and Nebuchadnezzar II rebuilt Babylon.',pic:{t:'setups',title:'Some famous rulers',head:'Ruler',cols:['Known for'],rows:[['Khufu','the Great Pyramid'],['Hatshepsut','a woman ruling as pharaoh'],['Ramesses II','Abu Simbel'],['Hammurabi','a law code'],['Nebuchadnezzar II','the Ishtar Gate']]},
  check:{prompt:'Try it: Khufu, Hatshepsut and Ramesses II all ruled the same land. Which one?',answer:'Egypt',options:['Egypt','Mesopotamia','Persia'],hint:'Pyramids and Abu Simbel stand beside the Nile.',pic:{t:'setups',title:'Three rulers',head:'Ruler',cols:['Known for'],rows:[['Khufu','the Great Pyramid'],['Hatshepsut','a temple at Deir el-Bahri'],['Ramesses II','the temples at Abu Simbel']]}}},
 {skill:'why',say:'The Rosetta Stone, set up in 196 BCE, repeats one decree in hieroglyphs, Demotic and Greek. French soldiers found it in 1799. Scholars could already read the Greek, so they compared it with the other scripts, and Champollion announced how to read hieroglyphs in 1822.',eq:'196 BCE decree → 1799 found → 1822 read',pic:{t:'setups',title:'The Rosetta Stone',head:'Part of the stone',cols:['Script'],rows:[['top','hieroglyphs'],['middle','Demotic'],['bottom','Greek']]}}],
progression:{requires:['history-m-bce-ce','history-e-decades-centuries'],operations:2,demand:'Compare BCE dates while allowing for "about", match rulers, places and inventions to Egypt or Mesopotamia, and link a cause to its effect.'},
items(add){build(add,FACTS,ASK);}
};
