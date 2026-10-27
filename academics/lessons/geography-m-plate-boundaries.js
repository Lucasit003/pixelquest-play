// Middle School topic (Grade 6, C3 D2.Geo.10.6-8): plate boundaries and what forms at them. SOURCED. Every fact about
// real plates, boundaries and places comes from the USGS book "This Dynamic Earth" (public domain), read from the pages
// themselves on 8 October 2026: https://pubs.usgs.gov/gip/dynamic/understanding.html and the pages it links to
// (ridge.html, fire.html, himalaya.html, Nazca.html, Vigil.html). SOURCES below lists each fact with its page and a
// quote of at most 25 words copied from that page. Only facts those pages state are used, and a real place is named
// only where USGS names it. Every sourced question's explanation quotes its SOURCES entries word for word, and every
// step lists the entries it uses (src).
// The "motion" questions are computed instead: the plates in them are fictional, and the answer comes from how the
// two plates move relative to each other, using the three USGS definitions (pull away from each other: divergent;
// move toward each other: convergent; slide horizontally past each other: transform). Plate speeds there are
// fictional too. The arithmetic of plate motion is a separate Grade 6 science topic (science-m-plate-motion) and is
// not repeated here.
const U='https://pubs.usgs.gov/gip/dynamic/understanding.html',UR='https://pubs.usgs.gov/gip/dynamic/ridge.html',UF='https://pubs.usgs.gov/gip/dynamic/fire.html',UH='https://pubs.usgs.gov/gip/dynamic/himalaya.html',UN='https://pubs.usgs.gov/gip/dynamic/Nazca.html',UV='https://pubs.usgs.gov/gip/dynamic/Vigil.html';
const SOURCES=[
 ['types','USGS lists four types of plate boundaries.',U,'There are four types of plate boundaries:'],
 ['div','At a divergent boundary new crust is generated as the plates pull away from each other.',U,'Divergent boundaries -- where new crust is generated as the plates pull away from each other.'],
 ['conv','At a convergent boundary crust is destroyed as one plate dives under another.',U,'Convergent boundaries -- where crust is destroyed as one plate dives under another.'],
 ['trans','At a transform boundary crust is neither produced nor destroyed, and the plates slide horizontally past each other.',U,'Transform boundaries -- where crust is neither produced nor destroyed as the plates slide horizontally past each other.'],
 ['zone','A plate-boundary zone is a broad belt where the boundaries are not well defined.',U,'Plate boundary zones -- broad belts in which boundaries are not well defined and the effects of plate interaction are unclear.'],
 ['spread','Divergent boundaries occur along spreading centers, where magma pushes up from the mantle.',U,'Divergent boundaries occur along spreading centers where plates are moving apart and new crust is created by magma pushing up from the mantle.'],
 ['mar','The Mid-Atlantic Ridge is a divergent boundary.',U,'Perhaps the best known of the divergent boundaries is the Mid-Atlantic Ridge.'],
 ['marRange','The Mid-Atlantic Ridge is a submerged mountain range.',U,'This submerged mountain range, which extends from the Arctic Ocean to beyond the southern tip of Africa,'],
 ['marSeg','The Mid-Atlantic Ridge is one segment of the global mid-ocean ridge system.',U,'is but one segment of the global mid-ocean ridge system that encircles the Earth.'],
 ['ridgeEx','The Mid-Atlantic Ridge is probably the best-known example of a divergent-plate boundary.',UR,'The Mid-Atlantic Ridge, which splits nearly the entire Atlantic Ocean north to south, is probably the best-known and most-studied example of a divergent-plate boundary.'],
 ['marPlates','Where it splits Iceland, the Mid-Atlantic Ridge separates the North American and Eurasian Plates.',U,'Map showing the Mid-Atlantic Ridge splitting Iceland and separating the North American and Eurasian Plates.'],
 ['iceland','Iceland is splitting along the spreading center between the North American and Eurasian Plates.',U,'Iceland is splitting along the spreading center between the North American and Eurasian Plates,'],
 ['icelandRidge','Iceland straddles the Mid-Atlantic Ridge.',U,'The volcanic country of Iceland, which straddles the Mid-Atlantic Ridge,'],
 ['redSea','Spreading tore Saudi Arabia away from the rest of Africa, forming the Red Sea.',U,'spreading processes have already torn Saudi Arabia away from the rest of the African continent, forming the Red Sea.'],
 ['redSeaPlates','The African and Arabian Plates meet where the Red Sea meets the Gulf of Aden.',U,'African Plate and the Arabian Plate meet in what geologists call a triple junction, where the Red Sea meets the Gulf of Aden.'],
 ['eafr','A new spreading center may be developing along the East African Rift Zone.',U,'A new spreading center may be developing under Africa along the East African Rift Zone.'],
 ['riftZone','The East African Rift Zone is an example of a continental rift zone.',UV,'East African Rift Zone is a good example of a continental rift zone.'],
 ['epr','The East Pacific Rise is a divergent boundary, joined to the San Andreas transform fault.',U,'This transform fault connects the East Pacific Rise, a divergent boundary to the south,'],
 ['jdf','North of the San Andreas fault zone is another divergent boundary.',U,'with the South Gorda -- Juan de Fuca -- Explorer Ridge, another divergent boundary to the north.'],
 ['convMove','At convergent boundaries plates move toward each other, and one may sink (be subducted) under another.',U,'convergent boundaries where plates are moving toward each other, and sometimes one plate sinks (is subducted) under another.'],
 ['subZone','The place where a plate sinks is called a subduction zone.',U,'The location where sinking of a plate occurs is called a subduction zone.'],
 ['kinds','Convergence can be oceanic-continental, oceanic-oceanic or continental-continental.',U,'Convergence can occur between an oceanic and a largely continental plate, or between two largely oceanic plates, or between two largely continental plates.'],
 ['trench','Trenches are the deepest parts of the ocean floor and are created by subduction.',U,'Trenches are the deepest parts of the ocean floor and are created by subduction.'],
 ['peru','Along the Peru-Chile trench the oceanic Nazca Plate is subducted under the continental South American Plate.',U,'along the Peru-Chile trench, the oceanic Nazca Plate is pushing into and being subducted under the continental part of the South American Plate.'],
 ['andes','The South American Plate is being lifted up, creating the Andes.',U,'the overriding South American Plate is being lifted up, creating the towering Andes mountains, the backbone of the continent.'],
 ['andesNazca','The convergence of the Nazca and South American Plates pushed up the peaks of the Andes.',UN,'The convergence of the Nazca and South American Plates has deformed and pushed up limestone strata to form towering peaks of the Andes,'],
 ['cascade','Oceanic-continental convergence sustains active volcanoes in the Andes and the Cascade Range.',U,'Oceanic-continental convergence also sustains many of the Earth\'s active volcanoes, such as those in the Andes and the Cascade Range in the Pacific Northwest.'],
 ['ocoTrench','When two oceanic plates converge, one is usually subducted under the other and a trench forms.',U,'when two oceanic plates converge, one is usually subducted under the other, and in the process a trench is formed.'],
 ['marianas','The Marianas Trench marks where the Pacific Plate converges against the Philippine Plate.',U,'The Marianas Trench (paralleling the Mariana Islands), for example, marks where the fast-moving Pacific Plate converges against the slower moving Philippine Plate.'],
 ['ocoVolc','Subduction in oceanic-oceanic convergence forms volcanoes.',U,'Subduction processes in oceanic-oceanic plate convergence also result in the formation of volcanoes.'],
 ['arcs','These volcanoes form chains called island arcs.',U,'Such volcanoes are typically strung out in chains called island arcs.'],
 ['arcShape','Volcanic island arcs closely parallel the trenches and are generally curved.',U,'volcanic island arcs, which closely parallel the trenches, are generally curved.'],
 ['arcsEx','The Marianas and the Aleutian Islands are island arcs formed at trenches.',U,'The trenches are the key to understanding how island arcs such as the Marianas and the Aleutian Islands have formed'],
 ['aleutian','The Aleutian Islands are the island arc of the Aleutian Trench.',UF,'the island arc associated with the Aleutian Trench is represented by the long chain of volcanoes that make up the Aleutian Islands.'],
 ['ccNoSub','When two continents meet head-on, neither is subducted.',U,'When two continents meet head-on, neither is subducted because the continental rocks are relatively light'],
 ['ccBuckle','When two continents meet head-on, the crust buckles and is pushed upward or sideways.',U,'Instead, the crust tends to buckle and be pushed upward or sideways.'],
 ['india','The collision of India into Asia made the Indian and Eurasian Plates crumple up.',U,'The collision of India into Asia 50 million years ago caused the Indian and Eurasian Plates to crumple up along the collision zone.'],
 ['himalaya','The convergence of the Indian and Eurasian Plates pushed up the Himalayas and the Tibetan Plateau.',U,'the slow continuous convergence of these two plates over millions of years pushed up the Himalayas and the Tibetan Plateau to their present heights.'],
 ['himNoSub','In the Himalayan collision neither plate could be subducted under the other.',UH,'Because both these continental landmasses have about the same rock density, one plate could not be subducted under the other.'],
 ['transDef','Plates sliding horizontally past one another meet at a transform boundary.',U,'The zone between two plates sliding horizontally past one another is called a transform-fault boundary, or simply a transform boundary.'],
 ['transOcean','Most transform faults are found on the ocean floor.',U,'Most transform faults are found on the ocean floor.'],
 ['transOffset','Transform faults commonly offset spreading ridges into zig-zags and are defined by shallow earthquakes.',U,'They commonly offset the active spreading ridges, producing zig-zag plate margins, and are generally defined by shallow earthquakes.'],
 ['saLand','The San Andreas is one of the few transform faults on land.',U,'The San Andreas is one of the few transform faults exposed on land.'],
 ['saPlates','Along the San Andreas fault zone the Pacific Plate grinds horizontally past the North American Plate.',U,'the Pacific Plate has been grinding horizontally past the North American Plate for 10 million years,'],
 ['fracture','The Blanco and Mendocino fracture zones are transform faults.',U,'The Blanco, Mendocino, Murray, and Molokai fracture zones are some of the many fracture zones (transform faults) that scar the ocean floor'],
 ['size','The size of the Earth has not changed significantly during the past 600 million years.',U,'The size of the Earth has not changed significantly during the past 600 million years,']]
 .map(([id,fact,url,quote])=>({id,fact,url,quote}));
const BY=Object.fromEntries(SOURCES.map(s=>[s.id,s]));
/* USGS writes a dash as "--"; it is shown as a dash (the SOURCES entries stay word for word). */
const cite=(...ids)=>'USGS: '+ids.map(k=>`“${BY[k].quote.replace(/ -- /g,' – ')}”`).join(' and ');
const TYPES='divergent, convergent or transform';
const ACC={divergent:['a divergent boundary','divergent boundary'],convergent:['a convergent boundary','convergent boundary'],transform:['a transform boundary','transform boundary','transform fault']};
/* A table of the three USGS definitions. It helps with any sourced question, so it is shown only after a wrong answer. */
const DEF0={t:'setups',title:'Three main boundary types (USGS)',head:'Type',rows:[['divergent','plates pull away from each other'],['convergent','plates move toward each other'],['transform','plates slide past each other']],cols:['How the plates move']},DEF={...DEF0,hint:true};
/* Real examples USGS names. type: the boundary type and the quotes that show it; kind: the kind of convergence;
   plates: the two plates USGS names there; ask/yn: the wording of the type and yes-or-no questions. */
const EX=[
 {name:'the Mid-Atlantic Ridge',type:'divergent',q:['mar','ridgeEx'],
  ask:'what type of plate boundary is the Mid-Atlantic Ridge',yn:['the Mid-Atlantic Ridge is a submerged mountain range. Is it a convergent boundary','no',['marRange','mar']]},
 {name:'Iceland',type:'divergent',q:['iceland','icelandRidge','mar'],plates:['North American','Eurasian'],qp:['iceland','marPlates'],plate:g=>`Iceland is splitting along the spreading center between the ${g} Plate and which other plate`,
  ask:'what type of plate boundary is the ridge that Iceland straddles',yn:['is the plate boundary that runs through Iceland a divergent boundary','yes',['icelandRidge','mar']]},
 {name:'the East African Rift Zone',type:'divergent',q:['eafr','spread'],ask:'what type of plate boundary may be developing along the East African Rift Zone',yn:['may a new spreading center be developing along the East African Rift Zone','yes',['eafr']]},
 {name:'the Red Sea',type:'divergent',q:['redSea','spread'],plates:['African','Arabian'],qp:['redSeaPlates'],plate:g=>`where the Red Sea meets the Gulf of Aden, the ${g} Plate meets which other plate`,
  ask:'what type of plate boundary formed the Red Sea',yn:['was the Red Sea formed at a convergent boundary','no',['redSea','spread']]},
 {name:'the East Pacific Rise',type:'divergent',q:['epr'],ask:'what type of plate boundary is the East Pacific Rise',yn:['is the East Pacific Rise a transform boundary','no',['epr']]},
 {name:'the Peru-Chile trench',type:'convergent',q:['peru','convMove'],kind:'oceanic-continental',qk:['peru','trench'],plates:['Nazca','South American'],qp:['peru'],plate:g=>`along the Peru-Chile trench the ${g} Plate meets which other plate`,kindAsk:'formed the Peru-Chile trench',
  ask:'what type of plate boundary is the Peru-Chile trench',yn:['is the Peru-Chile trench a place where one plate is subducted under another','yes',['peru']]},
 {name:'the Andes',type:'convergent',q:['andesNazca','andes'],kind:'oceanic-continental',qk:['peru','andes'],plates:['Nazca','South American'],qp:['andesNazca'],plate:g=>`the Andes were pushed up by the convergence of the ${g} Plate and which other plate`,kindAsk:'pushed up the Andes',
  ask:'what type of plate boundary pushed up the Andes',yn:['were the Andes pushed up at a divergent boundary','no',['andesNazca']]},
 {name:'the Cascade Range',type:'convergent',q:['cascade'],kind:'oceanic-continental',qk:['cascade'],kindAsk:'sustains the active volcanoes of the Cascade Range',
  ask:'what type of plate boundary sustains the active volcanoes of the Cascade Range',yn:['are the active volcanoes of the Cascade Range sustained by convergence','yes',['cascade']]},
 {name:'the Marianas Trench',type:'convergent',q:['marianas','ocoTrench'],kind:'oceanic-oceanic',qk:['ocoTrench','marianas'],plates:['Pacific','Philippine'],qp:['marianas'],plate:g=>`the Marianas Trench marks where the ${g} Plate converges with which other plate`,kindAsk:'formed the Marianas Trench',
  ask:'what type of plate boundary does the Marianas Trench mark',yn:['does the Marianas Trench mark a transform boundary','no',['marianas']]},
 {name:'the Aleutian Islands',type:'convergent',q:['arcsEx','ocoVolc','aleutian'],kind:'oceanic-oceanic',qk:['ocoVolc','arcsEx'],kindAsk:'formed the island arc of the Aleutian Islands',
  ask:'what type of plate boundary formed the island arc of the Aleutian Islands',yn:['are the Aleutian Islands an island arc','yes',['arcsEx','aleutian']]},
 {name:'the Himalayas',type:'convergent',q:['himalaya','india'],kind:'continental-continental',qk:['ccNoSub','himalaya'],plates:['Indian','Eurasian'],qp:['india','himalaya'],plate:g=>`the Himalayas were pushed up by the collision of the ${g} Plate with which other plate`,kindAsk:'pushed up the Himalayas',
  ask:'what type of plate boundary pushed up the Himalayas',yn:['because the Indian and Eurasian landmasses that pushed up the Himalayas have about the same rock density, could one landmass sink under the other the way an ocean plate is subducted','no',['himNoSub','india','himalaya']]},
 {name:'the Tibetan Plateau',type:'convergent',q:['himalaya'],kind:'continental-continental',qk:['ccNoSub','himalaya'],plates:['Indian','Eurasian'],qp:['india','himalaya'],plate:g=>`the Tibetan Plateau was pushed up by the convergence of the ${g} Plate and which other plate`,kindAsk:'pushed up the Tibetan Plateau',
  ask:'what type of plate boundary pushed up the Tibetan Plateau',yn:['was the Tibetan Plateau pushed up where plates pull away from each other','no',['himalaya']]},
 {name:'the San Andreas fault zone',type:'transform',q:['saLand','epr'],plates:['Pacific','North American'],qp:['saLand','saPlates'],plate:g=>`along the San Andreas fault zone the ${g} Plate grinds past which other plate`,
  ask:'what type of plate boundary is the San Andreas fault zone',yn:['is the San Andreas fault zone one of the few transform faults on land','yes',['saLand']]},
 {name:'the Blanco fracture zone',type:'transform',q:['fracture'],ask:'the Blanco fracture zone is a fault of which type of plate boundary',yn:['is the Blanco fracture zone a transform fault','yes',['fracture']]},
 {name:'the Mendocino fracture zone',type:'transform',q:['fracture'],ask:'the Mendocino fracture zone is a fault of which type of plate boundary',yn:['is the Mendocino fracture zone a convergent boundary','no',['fracture']]}];
const PLATES=['North American','Eurasian','African','Arabian','Nazca','South American','Pacific','Philippine','Indian'];
const KIND_ACC={'oceanic-continental':['oceanic continental','ocean-continent','oceanic and continental'],'oceanic-oceanic':['oceanic oceanic','ocean-ocean','two oceanic'],'continental-continental':['continental continental','continent-continent','two continental']};
/* Fictional plates for the motion questions. */
const NAMES=['Halden','Ressa','Torvin','Mireth','Sabel','Quillan'];
const ORI={ns:{run:'north to south',sides:['west','east'],par:['north','south']},ew:{run:'east to west',sides:['north','south'],par:['east','west']}};
const twoPlates=(P,Q,s1,m1,s2,m2)=>({t:'setups',title:'Two fictional plates',head:'Plate',rows:[[`${P} Plate`,s1,m1],[`${Q} Plate`,s2,m2]],cols:['Side','Moves']});
const WHY={divergent:`The gap between the plates grows: they pull away from each other. ${cite('div')}`,
 convergent:`The gap between the plates closes: they move toward each other. ${cite('convMove')}`,
 transform:`The plates move along the boundary, not toward or away from each other: they slide past each other. ${cite('transDef')}`};
export default {
id:'geography-m-plate-boundaries',subject:'geography',level:4,grade:6,standard:'C3 D2.Geo.10.6-8',
title:'Plate boundaries and landforms',
goal:'Name a plate boundary from how the two plates move, say what forms at divergent, convergent and transform boundaries, and match real examples named by USGS to their boundary type.',
points:20,
sources:SOURCES,
skills:{motion:'Name a boundary from the motion',landform:'What happens at each boundary',example:'Real examples named by USGS'},
steps:[
 {skill:'motion',say:'USGS lists four types of plate boundaries. For the three main types, USGS says how the plates move: at a divergent boundary they pull away from each other, at a convergent boundary they move toward each other, and at a transform boundary they slide horizontally past each other. The fourth, a plate-boundary zone, is a broad belt where the boundary is not well defined.',src:['types','div','convMove','trans','zone'],pic:DEF0},
 {skill:'motion',say:'To name a boundary, look at how the two plates move compared with each other. Two fictional plates meet along a line running north to south. If the west plate moves west and the east plate moves east, the gap between them grows, so the boundary is divergent.',src:['div'],pic:twoPlates('Halden','Ressa','west','west','east','east'),
  check:{prompt:'Try it: two fictional plates meet along a boundary that runs east to west. The plate on the north side moves north and the plate on the south side moves south. What type of boundary is this: divergent, convergent or transform?',answer:'divergent',options:['divergent','convergent','transform'],hint:'Each plate moves away from the boundary, so the gap between them grows.',pic:twoPlates('Torvin','Mireth','north','north','south','south')}},
 {skill:'landform',say:'At a divergent boundary new crust is generated. Divergent boundaries occur along spreading centers, where magma pushes up from the mantle. Perhaps the best known is the Mid-Atlantic Ridge, a submerged mountain range that is one segment of the global mid-ocean ridge system. On land, a new spreading center may be developing along the East African Rift Zone, a continental rift zone.',src:['div','spread','mar','marRange','marSeg','eafr','riftZone'],pic:{t:'setups',title:'Divergent boundaries (USGS)',head:'Feature',rows:[['spreading center','magma pushes up'],['crust','new crust is generated'],['example','Mid-Atlantic Ridge']],cols:['What happens']}},
 {skill:'landform',say:'At a convergent boundary crust is destroyed. Sometimes one plate sinks, or is subducted, under the other at a subduction zone, and trenches, the deepest parts of the ocean floor, are created by subduction. When two continents meet head-on neither is subducted: the crust buckles and is pushed upward or sideways.',src:['conv','convMove','subZone','trench','ccNoSub','ccBuckle'],pic:{t:'setups',title:'Convergent boundaries (USGS)',head:'Feature',rows:[['subduction zone','one plate sinks'],['trench','created by subduction'],['two continents','crust buckles upward']],cols:['What happens']},
  check:{prompt:'Try it: two fictional plates meet along a north-south boundary. The west plate moves east, the east plate moves west, and one sinks under the other. What type of boundary is this: divergent, convergent or transform?',answer:'convergent',options:['convergent','divergent','transform'],hint:'Both plates move toward the boundary, so the gap between them shrinks.',pic:twoPlates('Kessa','Dorn','west','east','east','west')}},
 {skill:'example',say:'Convergence can happen in three ways. Along the Peru-Chile trench the oceanic Nazca Plate is subducted under the continental part of the South American Plate, which is lifted up into the Andes. Where two oceanic plates converge, a trench forms, and volcanoes form chains called island arcs, such as the Aleutian Islands. And the convergence of the Indian and Eurasian Plates pushed up the Himalayas and the Tibetan Plateau.',src:['kinds','peru','andes','ocoTrench','ocoVolc','arcs','arcsEx','india','himalaya'],pic:{t:'setups',title:'Three kinds of convergence (USGS)',head:'Kind',rows:[['oceanic-continental','Andes'],['oceanic-oceanic','Aleutian Islands'],['continental-continental','Himalayas']],cols:['Example']}},
 {skill:'example',say:'At a transform boundary crust is neither produced nor destroyed. Most transform faults are on the ocean floor, where they commonly offset spreading ridges into zig-zags and are generally marked by shallow earthquakes. The San Andreas is one of the few on land: along it the Pacific Plate grinds horizontally past the North American Plate.',src:['trans','transOcean','transOffset','saLand','saPlates','epr','jdf'],pic:{t:'setups',title:'Transform boundaries (USGS)',head:'Feature',rows:[['crust','neither produced nor destroyed'],['most faults','on the ocean floor'],['on land','San Andreas']],cols:['What happens']},
  check:{prompt:'Try it: two fictional plates meet along a boundary that runs north to south. The plate on the west side moves north and the plate on the east side moves south. What type of boundary is this: divergent, convergent or transform?',answer:'transform',options:['transform','divergent','convergent'],hint:'Both plates move along the boundary, not toward it or away from it.',pic:twoPlates('Varn','Ulla','west','north','east','south')}},
 {skill:'example',say:'Name a boundary from how the plates move, not from the shape of the land. The Mid-Atlantic Ridge is a mountain range, but it is under the sea at a divergent boundary, while the Andes and the Himalayas rose where plates converge.',src:['marRange','mar','andesNazca','himalaya'],pic:{t:'setups',title:'Mountains at two kinds of boundary (USGS)',head:'Mountains',rows:[['Mid-Atlantic Ridge','plates pull apart'],['Andes','plates converge'],['Himalayas','plates converge']],cols:['How the plates move']}}],
progression:{requires:['science-e-rocks-and-soil','geography-e-rivers-and-mountains'],operations:2,demand:'Turn two plate motions into one relative motion (apart, together or past each other), match a landform to the boundary that makes it, and recall which real examples USGS gives for each type.'},
items(add){
 /* Motion (computed, fictional plates). 1: both plates move, toward, away from or along the boundary. */
 let k=0;const nm=()=>{const P=NAMES[k%6],Q=NAMES[(k%6+1+Math.floor(k/6)%5)%6];k++;return [P,Q];};
 const ask=`Using the USGS definitions, what type of boundary is this: ${TYPES}?`;
 for(const [o,O] of Object.entries(ORI)){const [s0,s1]=O.sides,away={[s0]:s0,[s1]:s1},toward={[s0]:s1,[s1]:s0};
  const combos=[['divergent',away[s0],away[s1]],['convergent',toward[s0],toward[s1]],['transform',O.par[0],O.par[1]],['transform',O.par[1],O.par[0]]];
  for(const [type,m0,m1] of combos)for(const first of [0,1]){const [P,Q]=nm(),[sa,ma,sb,mb]=first?[s1,m1,s0,m0]:[s0,m0,s1,m1];
   add('motion',`Two fictional plates meet along a boundary that runs ${O.run}. The ${P} Plate, on the ${sa} side, moves ${ma}. The ${Q} Plate, on the ${sb} side, moves ${mb}. ${ask}`,type,twoPlates(P,Q,sa,ma,sb,mb),WHY[type],ACC[type]);}
  /* 2: both move the same way across the boundary at different speeds: the gap grows if the plate in front is faster. */
  for(const dir of [s0,s1])for(const [i,[v0,v1]] of [[2,5],[6,3],[4,7],[8,5]].entries()){const [P,Q]=nm(),front=dir,back=dir===s0?s1:s0,v={[s0]:v0,[s1]:v1},type=v[front]>v[back]?'divergent':'convergent',[sa,sb]=i%2?[s1,s0]:[s0,s1];
   add('motion',`Two fictional plates meet along a boundary that runs ${O.run}. The ${P} Plate, on the ${sa} side, moves ${dir} at ${v[sa]} cm per year. The ${Q} Plate, on the ${sb} side, also moves ${dir}, at ${v[sb]} cm per year. ${ask}`,type,twoPlates(P,Q,sa,`${dir}, ${v[sa]} cm per year`,sb,`${dir}, ${v[sb]} cm per year`),`The plate on the ${front} side is in front. It moves at ${v[front]} cm per year and the other at ${v[back]}, so the gap ${type==='divergent'?'grows':'closes'} by ${Math.abs(v[front]-v[back])} cm a year. ${WHY[type]}`,ACC[type]);}
  /* 3: both move along the boundary the same way at different speeds: they still slide past each other. */
  for(const dir of O.par)for(const [v0,v1] of [[3,6],[7,2]]){const [P,Q]=nm();
   add('motion',`Two fictional plates meet along a boundary that runs ${O.run}. The ${P} Plate, on the ${s0} side, moves ${dir} at ${v0} cm per year. The ${Q} Plate, on the ${s1} side, also moves ${dir}, at ${v1} cm per year. ${ask}`,'transform',twoPlates(P,Q,s0,`${dir}, ${v0} cm per year`,s1,`${dir}, ${v1} cm per year`),`Both plates move along the boundary, one faster than the other, so the gap between them neither grows nor closes. ${WHY.transform}`,ACC.transform);}
  /* 4: what happens to crust at the boundary the motion makes. */
  for(const [type,m0,m1,first] of [[...combos[0],0],[...combos[0],1],[...combos[1],0],[...combos[1],1],[...combos[2],0],[...combos[3],1]]){const [P,Q]=nm(),[sa,ma,sb,mb]=first?[s1,m1,s0,m0]:[s0,m0,s1,m1],crust={divergent:'generated',convergent:'destroyed',transform:'neither'}[type];
   add('motion',`Two fictional plates meet along a boundary that runs ${O.run}. The ${P} Plate, on the ${sa} side, moves ${ma}. The ${Q} Plate, on the ${sb} side, moves ${mb}. Using the USGS definitions, is crust generated, destroyed or neither at this boundary?`,crust,twoPlates(P,Q,sa,ma,sb,mb),`The plates ${type==='divergent'?'pull away from each other':type==='convergent'?'move toward each other':'slide past each other'}, so this is a ${type} boundary. ${cite(type==='divergent'?'div':type==='convergent'?'conv':'trans')}`,{generated:['created','made','new crust is generated','crust is generated'],destroyed:['crust is destroyed','destroy'],neither:['neither generated nor destroyed','neither produced nor destroyed','neither created nor destroyed']}[crust]);}}
 /* Landforms (sourced): which boundary type each feature belongs to. */
 const LF=[['at which type of plate boundary is new crust generated','divergent',['div']],
  ['at which type of plate boundary is crust destroyed as one plate dives under another','convergent',['conv']],
  ['at which type of plate boundary is crust neither produced nor destroyed','transform',['trans']],
  ['which type of plate boundary occurs along spreading centers','divergent',['spread']],
  ['at which type of plate boundary is a subduction zone found','convergent',['subZone','convMove']],
  ['at which type of plate boundary do ocean trenches form','convergent',['trench','convMove']],
  ['at which type of plate boundary do volcanic island arcs form','convergent',['ocoVolc','arcs']],
  ['when two continents meet head-on and the crust buckles upward, which type of plate boundary is it','convergent',['ccBuckle','kinds']],
  ['which type of plate boundary has faults that commonly offset the active spreading ridges into zig-zags','transform',['transOffset','transOcean']],
  ['the many fracture zones that scar the ocean floor are faults of which type of plate boundary','transform',['fracture']],
  ['at which type of plate boundary do plates slide horizontally past one another','transform',['transDef']]];
 for(const [p,type,q] of LF)add('landform',`According to USGS, ${p}: ${TYPES}?`,type,DEF,cite(...q),ACC[type]);
 const YN=[['is new crust generated at a divergent boundary','yes',['div']],['is crust destroyed at a convergent boundary','yes',['conv']],
  ['is crust destroyed at a transform boundary','no',['trans']],['is crust produced at a transform boundary','no',['trans']],
  ['when two continents meet head-on, are the continental rocks relatively light','yes',['ccNoSub']],['when two oceanic plates converge, is one usually subducted under the other','yes',['ocoTrench']],
  ['are trenches the deepest parts of the ocean floor','yes',['trench']],['are most transform faults found on land','no',['transOcean']],
  ['has the size of the Earth changed significantly during the past 600 million years','no',['size']],['are the boundaries in a plate-boundary zone well defined','no',['zone']],
  ['do volcanic island arcs closely parallel the trenches','yes',['arcShape']],['are volcanic island arcs generally straight','no',['arcShape']],
  ['do transform faults commonly offset the active spreading ridges','yes',['transOffset','transOcean']],['are transform faults generally defined by deep earthquakes','no',['transOffset','transOcean']],
  ['does magma push up from the mantle at spreading centers','yes',['spread']],['does a plate sink at a subduction zone','yes',['subZone']]];
 for(const [p,a,q] of YN)add('landform',`According to USGS, ${p}: yes or no?`,a,DEF,cite(...q));
 /* Real examples (sourced): the boundary type, a yes-or-no check, the two plates, and the kind of convergence. */
 for(const e of EX){add('example',`According to USGS, ${e.ask}: ${TYPES}?`,e.type,DEF,cite(...e.q),ACC[e.type]);
  add('example',`According to USGS, ${e.yn[0]}: yes or no?`,e.yn[1],DEF,cite(...e.yn[2]));}
 let j=0;for(const e of EX.filter(x=>x.plates))for(const g of [0,1]){const given=e.plates[g],other=e.plates[1-g],wrong=PLATES.filter(p=>!e.plates.includes(p))[(j*4+g)%7],[o1,o2]=j%2?[wrong,other]:[other,wrong];j++;
  add('example',`According to USGS, ${e.plate(given)}: the ${o1} Plate or the ${o2} Plate?`,`${other} Plate`,{t:'setups',title:'A real example named by USGS',head:'Example',rows:[[e.name.replace(/^the /,''),`${given} Plate`,'?']],cols:['One plate','Other plate']},cite(...e.qp),[`the ${other} plate`,other.toLowerCase(),`the ${other.toLowerCase()}`]);}
 for(const e of EX.filter(x=>x.kind))add('example',`According to USGS, which kind of convergence ${e.kindAsk}: oceanic-continental, oceanic-oceanic or continental-continental?`,e.kind,DEF,cite(...e.qk),KIND_ACC[e.kind]);
}
};
