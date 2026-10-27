// High School course unit (docs/design/COURSES.md, docs/design/COURSE_QUALITY.md): World Geography, Unit 2, Physical Systems of Earth.
// World Geography is not AP. It follows Geography for Life: National Geography Standards (2nd ed., 2012). This unit covers
// NGS 7 (the physical processes that shape the patterns of Earth's surface), NGS 8 (the characteristics and spatial distribution of
// ecosystems and biomes on Earth's surface) and NGS 15 (how physical systems affect human systems). Our own wording and questions.
// It stays geographic, not ecological (AP Environmental Science covers food webs, energy flow and populations): where things are,
// why the land has the shape it has, and what that means for where people live. Students meet the four spheres and the layers of
// the Earth, plate motion (rates are "a few centimeters per year" and every number is labelled fictional or rounded), the three
// boundary types and their landforms, earthquakes, volcanoes and the Ring of Fire, magnitude as a logarithmic scale, weathering,
// erosion and deposition by water, wind and ice, drainage basins and river gradients, named landforms and relief, the water cycle and
// a basin water budget, the world pattern of biomes with the fall of temperature with elevation, and how soils, rivers, coasts and
// hazards affect settlement. The unit test recomputes every number and re-derives every lettered answer from a rule table written
// separately.
const tab=(title,rows,cols=['Value'])=>({t:'setups',title,head:'',rows,cols});
/* Lesson figures use 640 x 280 screen positions (y down), converted to the figure renderer's upward y axis.
   Labels stay inside the 44..596 x 56..248 drawing window; shapes reveal in order. */
const scene=(title,draw)=>{const pts={},polys=[],segs=[],circles=[],notes=[];let i=0;const point=(x,y)=>{const k='P'+i++;pts[k]=[x,280-y];return k;};
 const pen={box:(x,y,w,h,col=0,lw)=>{const v=[[x,y],[x+w,y],[x+w,y+h],[x,y+h]].map(([a,b])=>point(a,b)).join('');polys.push(lw?{v,col,w:lw}:{v,col});},
  poly:(list,col=0,lw)=>{const v=list.map(([a,b])=>point(a,b)).join('');polys.push(lw?{v,col,w:lw}:{v,col});},
  line:(x,y,u,v,col=0,arrows=0,dash=false,w=2)=>segs.push({v:point(x,y)+point(u,v),col,arrows,dash,w}),
  circle:(x,y,r,col=0,dash=false)=>circles.push({c:point(x,y),r,col,dash}),
  note:(x,y,text,col=0)=>notes.push({at:[x,280-y],text,col})};
 draw(pen);return {t:'figure',title,view:[44,596,32,224],pts,hide:Object.keys(pts).join(''),dots:'',polys,segs,circles,notes};};
const board=(title,lines)=>({t:'board',title,lines,box:true});
const n=v=>v.toLocaleString('en-US');
const r4=v=>Math.round(v*1e4)/1e4;
/* Earth's layers in rounded kilometers: the picture is drawn at 1 px per 80 km */
const RADIUS=6371,CORE_MANTLE=2900,INNER_TOP=5150,PX_KM=80;
/* the fictional river's profile: elevation in m at km from the source, e(x) = 1200 (1 - x/400)^2 */
const riverElev=x=>1200*(1-x/400)**2;
/* Step pictures */
const spheresFig=()=>scene('Four connected spheres in one landscape',d=>{
 d.box(60,64,340,44,3);d.note(230,86,'Atmosphere: the gases of the air',3);
 d.poly([[60,232],[60,196],[120,156],[170,180],[400,180],[400,232]],0,2);d.note(150,214,'Lithosphere: rock and soil',0);
 d.box(250,180,150,18,1);d.note(325,189,'Hydrosphere: water',1);
 d.line(200,180,200,150,2,0,false,3);d.circle(200,142,9,2);d.note(200,128,'Biosphere: life',2);
 d.note(500,72,'They trade',4);d.note(500,88,'matter and energy:',4);d.note(500,126,'rain: air to rivers',3);d.note(500,150,'rivers cut rock',1);d.note(500,174,'roots grip soil',2);d.note(500,198,'plants add oxygen',2);});
const layersFig=()=>scene('Earth\'s layers drawn to scale (1 px = 80 km)',d=>{
 const cx=190,cy=150,R=km=>km/PX_KM;
 d.circle(cx,cy,R(RADIUS),0);d.circle(cx,cy,R(RADIUS-35),0);d.circle(cx,cy,R(RADIUS-CORE_MANTLE),3);d.circle(cx,cy,R(RADIUS-INNER_TOP),4);
 d.line(cx+79.6*Math.cos(0.8727),cy-79.6*Math.sin(0.8727),370,76,0,0,false,1);
 d.line(cx+61.3*Math.cos(0.3491),cy-61.3*Math.sin(0.3491),370,112,0,0,false,1);
 d.line(cx+29.3*Math.cos(0.1745),cy+29.3*Math.sin(0.1745),370,148,3,0,false,1);
 d.line(cx+10*Math.cos(0.6981),cy+10*Math.sin(0.6981),370,184,4,0,false,1);
 d.note(480,76,'Crust: 5 to 70 km thick',0);d.note(480,112,'Mantle: about 2,900 km',0);d.note(480,148,'Outer core: liquid',3);d.note(480,184,'Inner core: solid',4);
 d.note(190,246,'The crust is too thin to see',0);d.note(480,226,'Radius about 6,371 km',1);});
const motionBoard=()=>board('Fictional plate: rate times time',['Rate 4 cm per year; time 25 million years','Distance = 4 × 25,000,000 = 100,000,000 cm','100,000,000 ÷ 100,000 = 1,000 km','A slow rate adds up to a long distance']);
const divergentFig=()=>scene('Divergent boundary: plates move apart',d=>{
 d.poly([[60,150],[250,150],[290,175],[290,205],[60,205]],0,2);d.poly([[580,150],[390,150],[350,175],[350,205],[580,205]],0,2);
 d.poly([[290,175],[320,158],[350,175],[350,205],[290,205]],3,2);
 d.line(240,136,120,136,1,1,false,3);d.line(400,136,520,136,1,1,false,3);d.line(320,226,320,208,3,1,false,3);
 d.note(320,82,'Divergent: plates move apart',1);d.note(320,106,'New crust forms in the gap',3);
 d.note(160,176,'Plate',0);d.note(480,176,'Plate',0);d.note(320,240,'Hot mantle rock rises',3);
 d.note(120,232,'Mid-Atlantic Ridge',1);d.note(530,232,'East African Rift',1);});
const convergentFig=()=>scene('Convergent boundaries: three cases',d=>{
 d.note(140,66,'Ocean + continent',1);d.note(320,66,'Ocean + ocean',2);d.note(500,66,'Continent + continent',3);
 d.poly([[50,168],[110,168],[150,200],[205,232],[205,240],[145,212],[105,182],[50,182]],1,2);d.poly([[150,156],[220,156],[220,196],[150,196]],0,2);
 d.poly([[170,156],[188,128],[206,156]],4,2);d.note(80,152,'trench',1);d.note(130,246,'Andes',4);
 d.poly([[235,172],[290,172],[318,205],[352,236],[352,242],[312,214],[283,186],[235,186]],2,2);d.box(330,176,85,16,2,2);
 d.poly([[342,176],[352,152],[362,176]],4,2);d.poly([[380,176],[390,156],[400,176]],4,2);d.note(372,134,'island arc',4);d.note(260,152,'trench',2);
 d.box(415,176,70,34,3,2);d.box(515,176,70,34,3,2);d.poly([[485,176],[500,126],[515,176]],0,2);d.poly([[485,176],[500,146],[515,176]],4,2);
 d.line(420,160,470,160,3,1,false,3);d.line(580,160,530,160,3,1,false,3);d.note(500,110,'Himalayas',3);d.note(500,230,'folded, high mountains',3);});
const transformFig=()=>scene('Transform boundary seen from above',d=>{
 d.box(60,96,520,64,0,2);d.box(60,160,520,64,1,2);
 d.line(130,128,250,128,0,1,false,3);d.line(510,192,390,192,1,1,false,3);
 d.line(200,96,200,160,3,0,false,2);d.line(200,160,240,160,3,0,false,2);d.line(240,160,240,224,3,0,false,2);
 d.note(320,82,'Plate A slides east',0);d.note(320,238,'Plate B slides west',1);d.note(440,128,'Fault: no crust made or lost',4);d.note(120,192,'Stream is offset',3);});
const ringFig=()=>{const ex=a=>[320+200*Math.cos(a*Math.PI/180),150+70*Math.sin(a*Math.PI/180)];
 return scene('The Ring of Fire around the Pacific (schematic)',d=>{
 const order=[[240,'Kamchatka'],[270,'Alaska, Aleutians'],[315,'Cascades'],[0,'Mexico'],[45,'Andes'],[135,'New Zealand'],[180,'Philippines'],[210,'Japan']];
 for(let k=0;k<order.length-1;k++){if(order[k][0]===45)continue;d.line(...ex(order[k][0]),...ex(order[k+1][0]),3,0,false,3);}
 for(const [a] of order)d.circle(...ex(a),5,3);
 d.note(220,72,'Kamchatka',0);d.note(320,62,'Alaska, Aleutians',0);d.note(470,84,'Cascades',0);d.note(556,150,'Mexico',0);d.note(470,218,'Andes',0);d.note(172,218,'New Zealand',0);d.note(78,150,'Philippines',0);d.note(100,98,'Japan',0);
 d.note(320,126,'Pacific Ocean',1);d.note(320,150,'about 90% of quakes',3);d.note(320,174,'roughly 3 in 4 active volcanoes',3);d.note(320,246,'Schematic: not a true map',2);});};
const magnitudeFig=()=>scene('Magnitude steps: each is ×10 in amplitude (fictional readings)',d=>{
 for(const [x,m,h] of [[150,5,1],[270,6,10],[390,7,100]]){d.box(x,214-h,60,h,m-4);d.note(x+30,232,`M ${m}`,m-4);}
 d.line(100,214,470,214,0,0,false,2);
 d.note(180,196,'1 unit',1);d.note(300,184,'10 units',2);d.note(420,100,'100 units',3);
 d.note(540,110,'×10 per step',4);d.note(540,134,'about ×32',4);d.note(540,150,'energy per step',4);});
const processFig=()=>scene('Weathering, then erosion, then deposition',d=>{
 const cols=[[60,'Weathering','breaks rock down','in place'],[245,'Erosion','removes and carries','the pieces'],[430,'Deposition','drops the load','where energy fades']];
 cols.forEach(([x,a,b,c],k)=>{d.box(x,96,150,76,k+1);d.note(x+75,118,a,k+1);d.note(x+75,142,b,0);d.note(x+75,160,c,0);});
 d.line(212,134,243,134,0,1,false,3);d.line(397,134,428,134,0,1,false,3);
 d.note(135,200,'frost, roots, acid rain',1);d.note(320,200,'water, wind, ice, gravity',2);d.note(505,200,'delta, dune, moraine',3);
 d.note(320,66,'Weathered rock that has not moved has not been eroded',4);d.note(320,236,'Physical weathering breaks it; chemical weathering changes it',4);});
const agentsFig=()=>scene('Water, wind and ice leave different shapes',d=>{
 d.note(130,70,'Water: V valley',1);d.note(320,70,'Wind: dune',2);d.note(510,70,'Ice: U valley',3);
 d.poly([[50,120],[100,120],[135,190],[170,120],[215,120],[215,214],[50,214]],1,2);
 d.poly([[235,214],[300,150],[340,214]],2,2);d.line(236,134,300,134,2,1,false,2);
 d.poly([[420,120],[455,120],[460,186],[480,194],[500,186],[505,120],[590,120],[590,214],[420,214]],3,2);
 d.note(130,236,'cuts a narrow notch',1);d.note(320,236,'carries and piles sand',2);d.note(505,236,'scours a wide trough',3);});
const basinFig=()=>scene('A drainage basin of 800,000 km² (fictional)',d=>{
 d.poly([[80,90],[200,70],[320,100],[330,180],[260,232],[140,230],[70,170]],0,2);
 d.line(200,86,200,150,1,0,false,3);d.line(200,150,190,226,1,0,false,3);d.line(96,112,150,138,2,0,false,3);d.line(150,138,200,150,2,0,false,3);d.line(304,116,250,138,3,0,false,3);d.line(250,138,200,150,3,0,false,3);
 d.note(110,100,'A',2);d.note(300,130,'B',3);d.note(222,76,'Source',0);d.note(190,242,'Mouth',0);d.note(70,200,'Divide',0);
 d.note(400,66,'Basin: 800,000 km²',0);d.note(400,84,'(fictional)',0);
 for(const [y,len,nm,pct,c] of [[110,60,'A','25%',2],[150,84,'B','35%',3],[190,96,'Main','40%',1]]){d.box(430,y,len,22,c);d.note(404,y+11,nm,c);d.note(430+len+28,y+11,pct,c);}
 d.note(500,236,'Shares add to 100%',4);});
const profileFig=()=>scene('River profile: 400 km long, falls 1,200 m (fictional)',d=>{
 const X=km=>90+1.1*km,Y=e=>220-0.12*e;
 d.line(90,220,540,220,0,0,false,2);d.line(90,220,90,70,0,0,false,2);
 for(let k=0;k<16;k++)d.line(X(25*k),Y(riverElev(25*k)),X(25*(k+1)),Y(riverElev(25*(k+1))),1,0,false,3);
 d.note(62,Y(1200),'1,200',0);d.note(62,Y(600),'600',0);d.note(62,220,'0',0);d.note(90,236,'0',0);d.note(310,236,'200',0);d.note(530,236,'400 km',0);
 d.note(330,100,'Steep upper course',1);d.note(330,116,'525 m in 100 km',1);d.note(470,170,'Gentle lower course',2);d.note(470,186,'75 m in 100 km',2);d.note(330,64,'Average: 1,200 ÷ 400 = 3 m per km',4);});
const landformsFig=()=>scene('A fictional cross-section (vertical scale: 1 px = 10 m)',d=>{
 d.poly([[60,220],[110,220],[130,208],[240,208],[262,88],[330,88],[342,172],[360,172],[372,88],[440,88],[452,208],[470,208],[472,88],[520,88],[524,208],[546,208],[548,88],[562,88],[565,208],[580,208],[580,236],[60,236]],0,2);
 d.note(84,206,'Sea level',1);d.note(185,194,'Plain',2);d.note(296,72,'Plateau',3);d.note(351,120,'Canyon',4);d.line(351,128,351,166,4,1,false,2);d.note(496,72,'Mesa',3);d.note(555,72,'Butte',3);
 d.note(185,222,'120 m',2);d.note(296,104,'1,320 m',3);d.note(351,194,'480 m',4);
 d.note(320,247,'Plateau 1,320 m - plain 120 m = 1,200 m of relief',0);});
const waterFig=()=>scene('The water cycle (the budget is fictional)',d=>{
 d.box(50,196,200,40,1);d.note(150,216,'Ocean',1);
 d.poly([[270,196],[450,130],[560,196]],0,2);
 d.circle(290,108,14,3);d.circle(312,100,16,3);d.circle(334,108,14,3);d.note(312,78,'Condensation',3);
 d.line(150,190,150,126,1,1,false,3);d.note(150,110,'Evaporation',1);
 d.line(360,122,396,156,2,1,false,3);d.note(414,104,'Precipitation',2);
 d.line(420,150,330,186,4,1,false,3);d.note(330,170,'Runoff',4);
 d.line(500,176,500,226,0,1,false,3);d.note(500,242,'Infiltration',0);
 d.line(560,176,560,146,2,1,false,3);d.note(548,130,'Transpiration',2);
 d.note(135,66,'P = ET + R',4);d.note(135,84,'1,000 = 640 + 360 mm',4);});
const biomeFig=()=>scene('Biomes by latitude on an idealized continent (not a map)',d=>{
 const X=lat=>70+lat*5.78,bands=[[0,10,'Rainforest',100,2],[10,25,'Savanna',182,3],[25,35,'Desert',100,4],[35,50,'Forest, grassland',182,2],[50,65,'Taiga',100,1],[65,90,'Tundra',182,0]];
 bands.forEach(([a,b,nm,y,c])=>{d.box(X(a),118,X(b)-X(a),32,c);d.note((X(a)+X(b))/2,y,nm,c);});
 for(const lat of [0,10,25,35,50,65,90])d.note(X(lat),164,`${lat}°`,0);
 d.note(320,66,'Warm and wet at the equator, hot deserts near 30°, cold toward the pole',4);d.note(320,238,'Rain, ocean and mountains bend this pattern',4);});
const settleFig=()=>scene('Landforms and where people settle (schematic)',d=>{
 d.poly([[50,236],[50,134],[100,92],[150,134],[190,172],[260,178],[330,180],[420,184],[480,190],[500,206],[500,236]],0,2);
 d.box(500,206,96,30,1);d.note(548,222,'Sea',1);
 for(const x of [280,320,360])d.box(x,168,12,10,4);
 d.line(190,172,500,206,1,0,false,3);
 d.note(100,76,'Mountains',0);d.note(100,92,'few people',0);d.note(320,140,'Floodplain: rich soil',2);d.note(320,156,'but flood risk',2);d.note(500,176,'Delta and port',3);d.note(130,212,'Barrier to travel',0);});
const chooseFig=()=>scene('Which idea answers which question',d=>{
 const cells=[['What is it made of?','spheres, layers',0],['Why does land move?','plate boundaries',1],['What wears it down?','weathering, erosion',2],['Where does water go?','basins, water cycle',3],['What lives where?','biomes, elevation',0],['Why live here?','soil, water, hazards',1]];
 cells.forEach(([q,t,c],k)=>{const x=60+(k%3)*175,y=76+Math.floor(k/3)*84;d.box(x,y,160,64,c);d.note(x+80,y+22,q,c);d.note(x+80,y+44,t,c);});
 d.note(320,238,'Check units: cm to km needs ÷ 100,000',4);});
/* The Try-it questions in pool form; the generator skips them. */
const TRY=['A fictional plate moves 6 cm per year. How many kilometers does it move in 5 million years?',
 'Fictional earthquake X has magnitude 7 and fictional earthquake Y has magnitude 4. How many times greater is the amplitude shown on a seismograph for X than for Y?',
 'A fictional drainage basin covers 360,000 square kilometers, and one sub-basin covers 108,000. What percent of the basin is that sub-basin?',
 'A fictional river falls 720 m over a length of 180 km. What is its average gradient in meters per kilometer?',
 'A fictional basin receives 950 mm of precipitation in a year and loses 620 mm to evapotranspiration. With no change in storage, how many millimeters of runoff leave the basin?',
 'A fictional village at 800 m has a temperature of 24 °C. Using a drop of 6.5 °C per 1,000 m, what is the temperature in °C at 3800 m?'];
const tryIt=s=>`Try it: ${s[0].toLowerCase()+s.slice(1)}`;
/* lettered choices, the right one moved to position k */
const choose=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
export default {
id:'geography-h-world-geography-physical-systems-of-earth',subject:'geography',level:5,grade:9,standard:'National Geography Standards (Geography for Life, 2nd ed., 2012): Standards 7, 8 and 15, Physical Systems',
title:'Physical systems of Earth',
goal:'Name the four spheres and the layers of the Earth, explain plate motion and the landforms of each boundary type, describe earthquakes, volcanoes and the Ring of Fire, tell weathering from erosion and deposition, read drainage basins and river gradients, name landforms and compute relief, follow the water cycle, describe where the biomes lie, and explain how physical systems affect where people live.',
points:20,
skills:{spheres:'The four spheres',layers:'Earth\'s layers',plates:'Plate tectonics and boundaries',hazards:'Earthquakes, volcanoes and the Ring of Fire',weather:'Weathering, erosion and deposition',agents:'Water, wind and ice',rivers:'Rivers and drainage basins',landforms:'Landforms and relief',water:'The water cycle',biomes:'Biomes and elevation',settle:'Physical systems and human systems'},
outline:[['NGS 7','The physical processes that shape the patterns of Earth\'s surface',['spheres','layers','plates','hazards','weather','agents','rivers','landforms','water']],['NGS 8','The characteristics and spatial distribution of ecosystems and biomes on Earth\'s surface',['biomes']],['NGS 15','How physical systems affect human systems',['settle']]],
steps:[
 {skill:"spheres",say:"Geographers describe Earth's surface systems as four connected spheres. The lithosphere is the rock, soil and landforms of the solid Earth. The hydrosphere is all the water: oceans, rivers, lakes, groundwater and ice. The atmosphere is the envelope of gases around the planet. The biosphere is all living things and the places where they live. The spheres overlap and trade matter and energy constantly: rain from the atmosphere fills a river in the hydrosphere, which cuts into the lithosphere and waters the forests of the biosphere.",pic:spheresFig()},
 {skill:"layers",say:"Earth is built in layers. The crust is the thin outer skin, roughly 5 to 10 km thick under the oceans and often 30 to 50 km (up to about 70 km) under continents. The mantle is hot rock about 2,900 km thick that is solid yet flows very slowly. The outer core is liquid metal and the inner core is solid metal, held solid by enormous pressure. The lithosphere, the crust plus the rigid top of the mantle, rides on the softer asthenosphere. In rounded numbers the outer core begins 2,900 km down and the inner core 5,150 km down, on a planet of radius about 6,371 km, so the outer core is 5,150 - 2,900 = 2,250 km thick and the inner core has a radius of 6,371 - 5,150 = 1,221 km.",eq:"thickness = deeper depth - shallower depth",pic:layersFig()},
 {skill:"plates",say:"The lithosphere is broken into about a dozen large plates and several smaller ones. They move a few centimeters per year, commonly quoted as between roughly 2 and 10 cm, driven by heat moving through the mantle and by cold plates sinking. Small rates add up over geologic time. To turn a rate and a time into a distance, multiply, then change centimeters to kilometers by dividing by 100,000. In this fictional example a plate moving 4 cm per year for 25 million years travels 1,000 km.",eq:"distance = rate × time; 100,000 cm = 1 km",pic:motionBoard(),
  check:{prompt:tryIt(TRY[0]),answer:300,options:[300,3000,30],hint:'Multiply 6 by 5,000,000 to get centimeters, then divide by 100,000.',pic:tab('A plate',[['rate','6 cm per year'],['time','5 million years']])}},
 {skill:"plates",say:"At a divergent boundary two plates move apart. Hot mantle rock rises, partly melts and fills the gap with new crust. On the ocean floor this builds a mid-ocean ridge, such as the Mid-Atlantic Ridge, where plates spread apart at a few centimeters a year. On land the crust stretches and sinks into a rift valley, as in the East African Rift. Iceland sits on the Mid-Atlantic Ridge and has many volcanoes and earthquakes.",pic:divergentFig()},
 {skill:"plates",say:"At a convergent boundary two plates move toward each other, and the result depends on the crust involved. When an oceanic plate meets a continental plate, the denser oceanic plate sinks beneath it (subduction), making a deep-ocean trench offshore and a line of volcanic mountains on land, such as the Andes. When two oceanic plates meet, one subducts and a curved chain of volcanic islands, an island arc, rises, as in the Aleutian Islands. When two continental plates meet, neither sinks easily, so the crust crumples and folds into high mountains, as the Himalayas did where the Indian plate meets Asia.",pic:convergentFig()},
 {skill:"plates",say:"At a transform boundary two plates slide past each other horizontally. Crust is neither made nor destroyed, but the plates catch and then slip, so earthquakes are common and streams, fences and roads can be sheared sideways. California's San Andreas Fault is the best-known example, mostly a transform boundary between the Pacific and North American plates. Volcanoes are rare at transform boundaries because there is no spreading and no subduction.",pic:transformFig()},
 {skill:"hazards",say:"Most earthquakes and many volcanoes lie along plate boundaries, where rock is stressed and magma can reach the surface. The Ring of Fire is a horseshoe of subduction zones and volcanoes, commonly given as about 40,000 km long, around the Pacific Ocean from Chile and Mexico through Alaska and Japan to the Philippines and New Zealand. Roughly 90 percent of the world's earthquakes and about three quarters of its active volcanoes are commonly said to lie along it. A few volcanoes, such as Hawaii's, sit far from any boundary over a hot spot, a plume of hot rock under a moving plate. Large undersea earthquakes can also set off tsunamis.",pic:ringFig()},
 {skill:"hazards",say:"An earthquake begins at the focus, a point underground; the epicenter is the point on the surface directly above it. Magnitude is a logarithmic scale: each whole-number step up means about 10 times the ground-motion amplitude on a seismograph and about 32 times the energy released. So a magnitude 7 earthquake has an amplitude 10 × 10 = 100 times that of a magnitude 5 and releases about 32 × 32 = 1,024 times the energy. Actual damage also depends on depth, distance, ground type and how well buildings are made.",eq:"amplitude ratio = 10^(difference); energy ratio ≈ 32^(difference)",pic:magnitudeFig(),
  check:{prompt:tryIt(TRY[1]),answer:1000,options:[1000,30,100],hint:'The difference is 3 steps; each step is 10 times.',pic:tab('Two earthquakes',[['X','magnitude 7'],['Y','magnitude 4']])}},
 {skill:"weather",say:"Three processes work in order on the land. Weathering breaks rock into pieces, or changes it chemically, where it sits. Physical weathering includes frost wedging, where water freezes in cracks and expands, and roots prying rock apart. Chemical weathering changes the minerals, as when slightly acidic rainwater dissolves limestone or oxygen rusts iron-bearing rock. Erosion is the removal and transport of the material by water, wind, ice or gravity. Deposition happens where the moving agent slows or melts and drops its load. Weathered rock that has not moved has not been eroded.",pic:processFig()},
 {skill:"agents",say:"Each agent leaves its own landforms. Running water cuts V-shaped valleys and canyons, bends into meanders (a cut-off bend becomes an oxbow lake), and builds floodplains and deltas where it slows and drops silt. Wind removes loose dry soil where plants are sparse and piles sand into dunes; fine windblown dust can settle as loess. Glaciers, which are slowly moving ice, scour wide U-shaped valleys and leave ridges of rock and gravel called moraines; where the sea floods a glacial valley it becomes a fjord. Ice sheets shaped much of the high-latitude landscape in the last ice age.",pic:agentsFig()},
 {skill:"rivers",say:"A river system is a main stream plus its tributaries, the smaller streams that join it. The land that drains into it is its drainage basin, or watershed, and a ridge or high ground called a divide separates one basin from the next. Basins range from a few square kilometers to millions; the Amazon's is commonly given as roughly 6 to 7 million km². Sub-basins can be compared by their share of the whole. In this fictional basin of 800,000 km², tributary A drains 200,000 km² (200,000 ÷ 800,000 = 25%), tributary B 280,000 km² (35%) and the main stem's own land 320,000 km² (40%); the shares add to 100%.",eq:"share = sub-basin area ÷ whole basin × 100",pic:basinFig(),
  check:{prompt:tryIt(TRY[2]),answer:30,options:[30,108,70],hint:'Divide 108,000 by 360,000 and multiply by 100.',pic:tab('The basin',[['whole basin','360,000 km²'],['sub-basin','108,000 km²']])}},
 {skill:"rivers",say:"Rivers flow downhill, and the gradient is the drop in elevation per kilometer of river length. Most rivers have a concave profile: steep near the source, where they cut downward and carry coarse rock, and gentle near the mouth, where they meander over a floodplain and drop fine silt. This fictional river is 400 km long and falls 1,200 m, an average gradient of 1,200 ÷ 400 = 3 m per km. Its first 100 km fall from 1,200 m to 675 m, which is 525 m in 100 km (5.25 m per km), while its last 100 km fall only 75 m (0.75 m per km).",eq:"gradient = drop in elevation ÷ river length",pic:profileFig(),
  check:{prompt:tryIt(TRY[3]),answer:4,options:[4,0.25,540],hint:'Divide the fall in meters by the length in kilometers.',pic:tab('The river',[['fall','720 m'],['length','180 km']])}},
 {skill:"landforms",say:"Landforms are named by shape, height and origin. Relief is the highest elevation minus the lowest in an area. A plain is broad, low and fairly flat; a plateau is high and mostly flat with at least one steep side. Erosion cutting into a plateau can leave a mesa, a flat-topped hill wider than it is tall, and a butte, a narrower and smaller remnant; rivers can cut canyons. Coasts have their own forms: a delta where a river drops sediment, a fjord where the sea fills a glacial valley, a peninsula nearly surrounded by water, an isthmus joining two larger lands, and an atoll, a ring of coral around a lagoon. In this fictional section a plateau top at 1,320 m above a plain at 120 m gives a relief of 1,200 m.",eq:"relief = highest elevation - lowest elevation",pic:landformsFig()},
 {skill:"water",say:"The water cycle moves water among the spheres, powered by the sun and gravity. Evaporation turns liquid water into vapor, and transpiration is vapor released by plants; together they are evapotranspiration. Rising air cools, the vapor condenses into cloud droplets, and precipitation falls as rain or snow. On the ground water infiltrates into soil and rock as groundwater or runs off into streams. About 97 percent of Earth's water is salt water in the oceans, and most fresh water is held as ice in glaciers and ice sheets. Over a year, with storage unchanged, precipitation equals evapotranspiration plus runoff: in this fictional basin 1,000 mm = 640 mm + 360 mm, so runoff is 36 percent of precipitation.",eq:"precipitation = evapotranspiration + runoff",pic:waterFig(),
  check:{prompt:tryIt(TRY[4]),answer:330,options:[330,1570,0.65],hint:'Runoff is precipitation minus evapotranspiration.',pic:tab('A basin year',[['precipitation','950 mm'],['evapotranspiration','620 mm']])}},
 {skill:"biomes",say:"A biome is a large region with similar climate, vegetation and animals, such as tropical rainforest, savanna, desert, temperate forest and grassland, taiga and tundra. Their pattern follows climate: warm and wet near the equator, hot deserts clustered near 30° N and S where air sinks and rain is scarce, cooler temperate lands poleward, then taiga and tundra. Rain, distance from the ocean and mountains bend this pattern; a rain shadow desert lies on the dry side of a range. Temperature also falls with elevation, on average about 6.5 °C per 1,000 m, so a mountain has climate zones stacked like latitude zones. A fictional place at sea level is 28 °C, so at 3,000 m it is about 28 - 3 × 6.5 = 8.5 °C.",eq:"temperature at height = sea-level temperature - 6.5 °C × (height in km)",pic:biomeFig(),
  check:{prompt:tryIt(TRY[5]),answer:4.5,options:[4.5,19.5,43.5],hint:'The new point is 3,000 m higher: that is 3 steps of 6.5 °C.',pic:tab('Two heights',[['village','800 m, 24 °C'],['higher point','3800 m']])}},
 {skill:"settle",say:"Physical systems shape where and how people live. River valleys and floodplains give water, flat land and fertile silt, which is why early civilizations grew along rivers, but they also flood. Deltas have rich soil and ports. Weathered volcanic rock often makes fertile soil, so people farm near volcanoes despite the risk. Mountains and deserts can be barriers to travel and settlement, and sheltered harbors invite ports. Hazards can be planned for with earthquake-resistant buildings, flood maps and warning systems. Geographers compare places with numbers such as population density: a fictional delta with 4,500,000 people on 15,000 km² has 4,500,000 ÷ 15,000 = 300 people per km².",eq:"density = people ÷ area",pic:settleFig()},
 {skill:"settle",summary:true,say:"To study a physical system, ask what it is made of (spheres and layers), why the land moves (plate boundaries and their landforms), what wears it down (weathering, erosion and deposition by water, wind and ice), where water goes (basins, gradients and the water cycle), what lives where (biomes follow temperature, rain and elevation) and how people respond (soil, water and hazards). Common mistakes are mixing up weathering and erosion, mixing up convergent and divergent boundaries, converting centimeters to kilometers with the wrong power of ten, using the whole river length when only a stretch is asked about, and treating a hedged \"a few centimeters per year\" as an exact number.",pic:chooseFig()}],
progression:{requires:['geography-h-world-geography-maps-and-geospatial-tools'],operations:2,demand:'Turn rates and times into distances, compare magnitudes and basin shares, compute gradients, relief, water budgets and temperature changes with elevation, and match a boundary, process, landform or biome to its definition.'},
items(add){
 const seen=new Set(TRY);
 const put=(skill,prompt,answer,pic,explanation,accept)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,explanation,accept);};
 const letters=(skill,title,rows,list,shift=0)=>list.forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+shift);put(skill,`${q} ${c.text}. Answer A, B or C.`,c.letter,tab(title,rows,['Note']),why||`The answer is ${right}.`,[right]);});
 /* spheres */
 for(const [s,k] of [['A granite mountain','lithosphere'],['A glacier of ice','hydrosphere'],['The oxygen and nitrogen of the air','atmosphere'],['The living corals of a reef','biosphere'],['A desert sand dune','lithosphere'],['The wind blowing across a wheat field','atmosphere']])
  put('spheres',`Which of Earth's four spheres fits this best: ${s}? Choose lithosphere, hydrosphere, atmosphere or biosphere.`,k,tab('The four spheres',[['example',s]],['']),`That belongs to the ${k}.`);
 letters('spheres','The four spheres',[['lithosphere','rock, soil, landforms'],['hydrosphere','all the water']],[
  ['Which sphere is made of the rocks and landforms of the solid Earth?','the lithosphere',['the hydrosphere','the atmosphere'],'The lithosphere is the solid, rocky outer part of Earth, including landforms. The hydrosphere is water, and the atmosphere is air.'],
  ['The hydrosphere includes which of these?','oceans, rivers, lakes, ice and groundwater',['only the oceans','only rain clouds'],'The hydrosphere is all of Earth\'s water: oceans, rivers, lakes, ice, groundwater and water vapor. It is not just the oceans.'],
  ['The biosphere is best described as','all living things and the places where they live',['the layer of ice at the poles','the gases that surround Earth'],'The biosphere is all living things, plants, animals and microbes, plus the parts of land, water and air where they live.'],
  ['A river carries soil from a hillside and drops it on a plain. Which two spheres interact most directly here?','the hydrosphere and the lithosphere',['the atmosphere and the biosphere only','the biosphere and the atmosphere only'],'Moving water (hydrosphere) carries soil and rock (lithosphere) and drops it on the plain, so those two spheres interact most directly.'],
  ['Which sphere is the envelope of gases around the planet?','the atmosphere',['the biosphere','the lithosphere'],'The atmosphere is the layer of gases, mostly nitrogen and oxygen, held around Earth by gravity.']]);
 /* layers */
 for(const [a,b] of [[1800,3900],[2000,4600]])put('layers',`A fictional planet has an outer core that starts ${n(a)} km below the surface and an inner core that starts ${n(b)} km below. How many kilometers thick is the outer core?`,b-a,tab('The planet',[['outer core starts',`${n(a)} km down`],['inner core starts',`${n(b)} km down`]]),`${n(b)} - ${n(a)} = ${n(b-a)} km.`);
 for(const [R,d] of [[5000,3800],[8000,6300]])put('layers',`A fictional planet has a radius of ${n(R)} km and its inner core begins ${n(d)} km below the surface. What is the radius of the inner core in kilometers?`,R-d,tab('The planet',[['radius',`${n(R)} km`],['inner core begins',`${n(d)} km down`]]),`${n(R)} - ${n(d)} = ${n(R-d)} km.`);
 for(const [R,d] of [[5000,1500],[8000,2000]])put('layers',`On a fictional planet of radius ${n(R)} km, the core begins ${n(d)} km below the surface. What percent of the radius is that depth?`,r4(d/R*100),tab('The planet',[['radius',`${n(R)} km`],['depth',`${n(d)} km`]]),`${n(d)} ÷ ${n(R)} × 100 = ${r4(d/R*100)}%.`);
 letters('layers','Earth\'s layers',[['liquid layer','outer core'],['thinnest layer','crust']],[
  ['Which layer of Earth is liquid?','the outer core',['the mantle','the inner core'],'The outer core is liquid iron and nickel. Its flow produces Earth\'s magnetic field. The mantle is solid but slowly flows.'],
  ['Which layer of Earth is the thinnest?','the crust',['the mantle','the outer core'],'The crust is the thinnest layer, only about 5 to 70 km thick. The mantle is nearly 2,900 km thick.'],
  ['The lithosphere consists of','the crust and the rigid uppermost mantle',['the crust only','the entire mantle'],'The lithosphere is the crust plus the rigid uppermost mantle. It is broken into the tectonic plates that ride on the softer asthenosphere.'],
  ['Why is the inner core solid even though it is extremely hot?','the pressure there is enormous',['it is cooler than the crust','it is made of the same rock as the crust'],'The inner core is hotter than the outer core, but the enormous pressure there keeps its iron and nickel solid.'],
  ['Which layer makes up most of Earth\'s volume?','the mantle',['the crust','the core'],'The mantle is about 2,900 km thick and makes up about 84 percent of Earth\'s volume, far more than the crust or core.'],
  ['Compared with continental crust, oceanic crust is generally','thinner and denser',['thicker and lighter','the same thickness and density'],'Oceanic crust is made of dense basalt and is only about 5 to 10 km thick. Continental crust is thicker and lighter.']],1);
 /* plates */
 for(const [r,t] of [[3,2],[4,50],[7,3]])put('plates',`A fictional plate moves ${r} cm per year. How many kilometers does it move in ${t} million years?`,r4(r*t*1e6/1e5),tab('A plate',[['rate',`${r} cm per year`],['time',`${t} million years`]]),`${r} × ${n(t*1e6)} = ${n(r*t*1e6)} cm; ÷ 100,000 = ${r4(r*t*10)} km.`);
 put('plates','Two fictional plates separate at a combined 2.5 cm per year. How many kilometers wider is the gap after 10 million years?',250,tab('Two plates',[['combined rate','2.5 cm per year'],['time','10 million years']]),'2.5 × 10,000,000 = 25,000,000 cm; ÷ 100,000 = 250 km.');
 put('plates','A fictional island rides a plate at 8 cm per year. How many years does it take to move 40 km?',500000,tab('An island',[['rate','8 cm per year'],['distance','40 km']]),'40 km = 4,000,000 cm; ÷ 8 = 500,000 years.');
 for(const [s,k] of [['Two plates move toward each other.','convergent'],['Two plates move away from each other.','divergent'],['Two plates slide horizontally past each other.','transform'],['New oceanic crust forms along a mid-ocean ridge.','divergent'],['A deep ocean trench marks where one plate sinks beneath another.','convergent']])
  put('plates',`Which type of plate boundary fits this: ${s} Choose divergent, convergent or transform.`,k,tab('A boundary',[['case',s]],['']),`That is a ${k} boundary.`);
 letters('plates','Boundaries and landforms',[['divergent','plates apart'],['convergent','plates together'],['transform','plates slide']],[
  ['An oceanic plate subducts beneath a continental plate. What forms?','a deep trench offshore and a line of volcanic mountains on land',['a mid-ocean ridge and a rift valley','a long fault with offset streams'],'The denser oceanic plate sinks into the mantle, making a trench. Melting above it feeds volcanoes on land, like the Andes.'],
  ['Where two continental plates collide, what usually forms?','a high fold-mountain range such as the Himalayas',['a deep-ocean trench','a mid-ocean ridge'],'Continental crust is too light to sink, so when two continents collide the crust crumples and folds upward into high mountains like the Himalayas.'],
  ['The East African Rift is a place where the land is','being pulled apart at a divergent boundary',['being squeezed at a collision zone','sliding sideways along a transform boundary'],'In the East African Rift, plates are moving apart at a divergent boundary, so the land stretches and drops into rift valleys.'],
  ['Two oceanic plates converge. What forms?','a trench and a curved chain of volcanic islands',['a long straight rift valley','a plateau of folded rock'],'One oceanic plate sinks under the other, making a trench. Magma rises and builds a curved chain of volcanic islands, like Japan or the Aleutians.']],2);
 /* hazards */
 letters('hazards','Earthquakes and volcanoes',[['Ring of Fire','Pacific'],['epicenter','surface point']],[
  ['The Ring of Fire is a belt of volcanoes and earthquakes around which ocean?','the Pacific Ocean',['the Atlantic Ocean','the Indian Ocean'],'The Ring of Fire is a horseshoe-shaped belt of volcanoes and earthquakes around the edges of the Pacific Ocean.'],
  ['About what share of the world\'s earthquakes occur along the Ring of Fire?','roughly 90 percent',['roughly 10 percent','about half'],'The USGS estimates that about 90 percent of all earthquakes, and about 81 percent of the largest, happen along the Ring of Fire around the Pacific\'s edges.'],
  ['The epicenter of an earthquake is','the point on the surface directly above where the rock first slips',['the deepest point of the quake','the center of the nearest city'],'The epicenter is the spot on the surface directly above the focus, where the rock first slipped underground.'],
  ['The focus of an earthquake is','the underground point where the rock first slips',['the point on the surface closest to the focus','the line of the nearest fault on a map'],'The focus, or hypocenter, is the point underground where the rock first breaks and slips. The epicenter is the point above it on the surface.'],
  ['Most large tsunamis are caused by','sudden movement of the sea floor, often in an undersea earthquake',['strong winds blowing over the ocean','the daily tides alone'],'Most large tsunamis start when an undersea earthquake suddenly lifts or drops the sea floor, pushing up the whole water column. Wind makes ordinary waves.'],
  ['Why are most earthquakes and volcanoes found along plate boundaries?','that is where plates push, pull and slide, so rock is stressed and magma can rise',['plate interiors are always hotter','oceans make the rock thinner there'],'At plate boundaries plates collide, pull apart or slide past each other, so rock is stressed and breaks, and magma can rise.'],
  ['The Hawaiian volcanoes are far from any plate edge. They are usually explained by','a hot spot, a plume of hot rock rising under the moving plate',['a transform fault under the islands','a deep trench beside the islands'],'Hawaii sits over a hot spot, a plume of hot rock rising from deep in the mantle. As the Pacific Plate moves, new volcanoes form in a chain.']]);
 for(const [a,b] of [[8,5],[7,6],[9,7]])put('hazards',`Fictional earthquake X has magnitude ${a} and fictional earthquake Y has magnitude ${b}. How many times greater is the amplitude shown on a seismograph for X than for Y?`,10**(a-b),tab('Two earthquakes',[['X',`magnitude ${a}`],['Y',`magnitude ${b}`]]),`The difference is ${a-b} step${a-b>1?'s':''}, so 10^${a-b} = ${n(10**(a-b))}.`);
 for(const [a,b] of [[8,6],[5,4]])put('hazards',`Fictional earthquake X has magnitude ${a} and fictional earthquake Y has magnitude ${b}. How many times more energy does X release than Y, using exactly 32 times more energy per whole magnitude step?`,32**(a-b),tab('Two earthquakes',[['X',`magnitude ${a}`],['Y',`magnitude ${b}`]]),`One step is 32 times, so 32^${a-b} = ${n(32**(a-b))}.`);
 /* weather */
 for(const [s,k] of [['Frost cracks a boulder into smaller pieces where it sits.','weathering'],['A river carries sand downstream.','erosion'],['A river slows and drops its sand at its mouth.','deposition'],['Rainwater slowly dissolves limestone.','weathering'],['Wind lifts dry soil and blows it away.','erosion'],['A melting glacier leaves a ridge of rock and gravel.','deposition']])
  put('weather',`Is this weathering, erosion or deposition? ${s}`,k,tab('A process',[['case',s]],['']),`That is ${k}.`);
 for(const [s,k] of [['Water freezes in a crack and widens it.','physical'],['Oxygen and water turn the iron in a rock to rust.','chemical'],['Roots grow into a crack and split a rock.','physical']])
  put('weather',`Is this physical or chemical weathering? ${s}`,k,tab('Weathering',[['case',s]],['']),`That is ${k} weathering.`);
 letters('weather','Three processes',[['weathering','breaks down in place'],['erosion','moves material']],[
  ['Weathering differs from erosion because weathering','breaks rock down in place, while erosion moves the material away',['moves rock away, while erosion breaks it in place','builds new rock, while erosion destroys it'],'Weathering breaks rock into smaller pieces where it sits. Erosion is the moving of that material by water, wind or ice.'],
  ['Which is true of deposition?','it happens when moving water, wind or ice loses energy and drops its load',['it happens only on mountaintops','it makes the load move faster'],'When water, wind or ice slows and loses energy, it can no longer carry its load, so it drops sediment. That is deposition.']]);
 /* agents */
 for(const [s,k] of [['a U-shaped valley with a lake at its head','ice'],['a line of sand dunes in a dry desert','wind'],['an oxbow lake cut off from a river','water'],['a deep V-shaped gorge','water'],['a ridge of gravel left where a glacier ended','ice']])
  put('agents',`Which agent most likely shaped this landform: ${s}? Choose water, wind or ice.`,k,tab('A landform',[['landform',s]],['']),`That landform is shaped by ${k}.`);
 letters('agents','Shaping the land',[['water','V valleys, deltas'],['wind','dunes, loess'],['ice','U valleys, moraines']],[
  ['Compared with a river valley, a glacier-carved valley is usually','wide with a U-shaped cross-section',['narrow with a V-shaped cross-section','completely flat-bottomed and dry'],'A glacier fills and scrapes its whole valley, carving a wide U shape. A river cuts down mainly at its bed, making a V shape.'],
  ['A delta forms where','a river slows as it enters a larger body of water and drops its sediment',['a glacier melts on a mountaintop','wind blows sand over a ridge'],'When a river enters a sea or lake it slows down, loses energy and drops its sediment, building up a delta.'],
  ['A moraine is','a ridge of rock and gravel dropped by a glacier',['a lake cut off from a river bend','a dune of windblown sand'],'A moraine is a ridge of rock, gravel and soil pushed or dropped by a glacier. A lake cut off from a river bend is an oxbow lake.'],
  ['A floodplain gains new fertile soil when','a river overflows and leaves a layer of silt',['a glacier freezes over it','wind carries salt across it'],'When a river floods, the water spreads out, slows and leaves a layer of silt, adding fresh fertile soil to the floodplain.'],
  ['Wind erosion matters most where','the ground is dry and has little plant cover',['thick forest covers the ground','rivers run all year'],'Wind can lift dust and sand easily only where the ground is dry and bare. Plants and moisture hold soil in place.']],1);
 for(const [r,t] of [[30,200],[15,400]])put('agents',`A fictional glacier moves ${r} meters per year. How many kilometers does the ice move in ${t} years?`,r4(r*t/1000),tab('A glacier',[['speed',`${r} m per year`],['time',`${t} years`]]),`${r} × ${t} = ${n(r*t)} m = ${r4(r*t/1000)} km.`);
 /* rivers */
 for(const [A,a] of [[600000,150000],[750000,300000]])put('rivers',`A fictional drainage basin covers ${n(A)} square kilometers, and one sub-basin covers ${n(a)}. What percent of the basin is that sub-basin?`,r4(a/A*100),tab('The basin',[['whole basin',`${n(A)} km²`],['sub-basin',`${n(a)} km²`]]),`${n(a)} ÷ ${n(A)} × 100 = ${r4(a/A*100)}%.`);
 put('rivers','A fictional sub-basin of 90,000 square kilometers is 30 percent of its whole drainage basin. How many square kilometers does the whole basin cover?',300000,tab('The basin',[['sub-basin','90,000 km²'],['share','30%']]),'90,000 ÷ 0.30 = 300,000 km².');
 put('rivers','Fictional sub-basins A and B drain 45 percent and 30 percent of a basin. What percent is left for the rest of the basin?',25,tab('The basin',[['A','45%'],['B','30%']]),'100 - 45 - 30 = 25%.');
 for(const [d,L] of [[900,300],[420,120]])put('rivers',`A fictional river falls ${d} m over a length of ${L} km. What is its average gradient in meters per kilometer?`,r4(d/L),tab('The river',[['fall',`${d} m`],['length',`${L} km`]]),`${d} ÷ ${L} = ${r4(d/L)} m per km.`);
 put('rivers','A fictional river has an average gradient of 2 meters per kilometer and falls 240 m in total. How many kilometers long is it?',120,tab('The river',[['gradient','2 m per km'],['fall','240 m']]),'240 ÷ 2 = 120 km.');
 letters('rivers','River systems',[['drainage basin','land that drains to one river'],['divide','boundary between basins']],[
  ['A drainage basin (watershed) is','all the land that drains into one river and its tributaries',['the deepest part of a river channel','the lake at the mouth of a river'],'A drainage basin, or watershed, is all the land whose water drains into one river and its tributaries.'],
  ['A divide is','the high ground that separates one drainage basin from the next',['the point where two rivers join','the place where a river meets the sea'],'A divide is high ground, such as a ridge, that separates one drainage basin from another. Rain on each side flows to a different river.'],
  ['A tributary is','a smaller stream that flows into a larger river',['a river that flows out of a lake','the sediment a river carries'],'A tributary is a smaller stream or river that flows into a larger one, adding its water.'],
  ['The mouth of a river is','the place where it enters a sea, lake or larger river',['the highest point of its basin','the point where it begins'],'A river\'s mouth is where it ends, flowing into a sea, lake or larger river. Its source is where it begins.']]);
 /* landforms */
 letters('landforms','Landforms',[['plateau','high and flat'],['delta','sediment at a mouth']],[
  ['Which landform is this: a broad, high, mostly flat area with at least one steep side?','a plateau',['a delta','a peninsula'],'A plateau is a large, high area of fairly flat land with at least one steep side, like the Colorado Plateau.'],
  ['Which landform is this: a flat-topped, steep-sided hill wider than it is tall, left when erosion removes the surrounding rock?','a mesa',['a delta','a fjord'],'A mesa is a flat-topped hill with steep sides that is wider than it is tall, left when erosion strips away softer rock around it.'],
  ['Which landform is this: a narrow, steep-sided remnant of rock, smaller than a mesa?','a butte',['a plain','a basin'],'A butte is like a mesa but smaller and narrower, often taller than it is wide. It is what remains as a mesa wears down further.'],
  ['Which landform is this: a low fan- or triangle-shaped deposit where a river meets the sea?','a delta',['a fjord','a plateau'],'A delta is a low, fan- or triangle-shaped deposit of sediment where a river enters the sea, like the Nile Delta.'],
  ['Which landform is this: a long, deep sea inlet between steep cliffs, carved by a glacier?','a fjord',['a delta','a mesa'],'A fjord is a long, deep, narrow sea inlet with steep sides, carved by a glacier and later flooded by the sea, as in Norway.'],
  ['Which landform is this: land nearly surrounded by water but joined to a larger land mass?','a peninsula',['an isthmus','an atoll'],'A peninsula is land nearly surrounded by water but attached to a larger land mass, like Florida or Italy.'],
  ['Which landform is this: a narrow strip of land joining two larger land areas?','an isthmus',['a peninsula','a strait'],'An isthmus is a narrow strip of land that joins two larger land areas, like the Isthmus of Panama. A strait is a narrow strip of water.'],
  ['Which landform is this: a deep, narrow valley with steep sides cut by a river?','a canyon',['a delta','a mesa'],'A canyon is a deep, narrow valley with steep sides, cut by a river over a long time, like the Grand Canyon.']],1);
 put('landforms','A fictional plateau top is 1,450 m above sea level and the plain at its foot is 320 m. How many meters higher is the plateau top than the plain?',1130,tab('The land',[['plateau top','1,450 m'],['plain','320 m']]),'1,450 - 320 = 1,130 m.');
 put('landforms','A fictional canyon has a rim at 1,800 m and its river at the floor at 620 m. How deep is the canyon in meters?',1180,tab('The canyon',[['rim','1,800 m'],['floor','620 m']]),'1,800 - 620 = 1,180 m.');
 put('landforms','In a fictional region the highest ridge is 1,900 m above sea level and the lowest basin floor is 85 m below sea level. What is the relief in meters?',1985,tab('The region',[['ridge','+1,900 m'],['basin floor','-85 m']]),'1,900 - (-85) = 1,985 m.');
 /* water */
 letters('water','The water cycle',[['evaporation','liquid to vapor'],['condensation','vapor to droplets']],[
  ['Evaporation is','liquid water changing to water vapor, mostly powered by the sun\'s heat',['water vapor changing to liquid droplets','rain soaking into the ground'],'Evaporation is liquid water turning into water vapor, powered mostly by the sun\'s heat. Vapor turning to droplets is condensation.'],
  ['Transpiration is','water vapor released from the leaves of plants',['water falling as snow','water flowing over land into streams'],'Transpiration is water vapor given off by plants, mainly through tiny pores in their leaves.'],
  ['Condensation is','water vapor cooling and changing into droplets, forming clouds',['liquid water turning to vapor','water freezing on the ground'],'Condensation is water vapor cooling and turning into tiny liquid droplets, which form clouds and dew.'],
  ['Infiltration is','water soaking down into soil and rock',['water flowing over the surface into a stream','water rising from the ocean as vapor'],'Infiltration is water soaking down into the soil and rock, where it can become groundwater.'],
  ['Runoff is','water flowing over land into streams and rivers',['water vapor rising from leaves','water soaking into the soil'],'Runoff is water that flows over the land surface into streams and rivers instead of soaking in.'],
  ['Roughly how much of Earth\'s water is salt water in the oceans?','about 97 percent',['about 50 percent','about 10 percent'],'About 97 percent of Earth\'s water is salty ocean water. Only about 3 percent is fresh water.'],
  ['Most of Earth\'s fresh water is stored as','ice, mostly in glaciers and ice sheets',['water in rivers and lakes','vapor in clouds'],'Roughly two-thirds of Earth\'s fresh water is frozen in glaciers and ice sheets. Rivers and lakes hold only a tiny share.'],
  ['What mainly drives the water cycle?','energy from the sun, with gravity moving the water',['earthquakes under the ocean','the Moon\'s magnetic field'],'The sun\'s energy evaporates water and drives the cycle, and gravity brings water back down as precipitation and runoff.']],2);
 put('water','A fictional basin receives 1,100 mm of precipitation in a year and loses 700 mm to evapotranspiration. With no change in storage, how many millimeters of runoff leave the basin?',400,tab('A basin year',[['precipitation','1,100 mm'],['evapotranspiration','700 mm']]),'1,100 - 700 = 400 mm.');
 put('water','A fictional basin receives 800 mm of precipitation and has 250 mm of runoff in a year, with no change in storage. How many millimeters are lost to evapotranspiration?',550,tab('A basin year',[['precipitation','800 mm'],['runoff','250 mm']]),'800 - 250 = 550 mm.');
 put('water','A fictional basin has 900 mm of precipitation and 270 mm of runoff in a year. What percent of the precipitation becomes runoff?',30,tab('A basin year',[['precipitation','900 mm'],['runoff','270 mm']]),'270 ÷ 900 × 100 = 30%.');
 put('water','A fictional storm drops 80 mm of rain evenly over a town of 15 square kilometers. How many million cubic meters of water is that? (1 mm of rain over 1 km² is 1,000 m³.)',1.2,tab('A storm',[['rain','80 mm'],['area','15 km²']]),'80 × 15 × 1,000 = 1,200,000 m³ = 1.2 million m³.');
 /* biomes */
 letters('biomes','Biomes',[['rainforest','warm and wet'],['tundra','cold, treeless']],[
  ['Which biome is warm and wet all year and found near the equator?','tropical rainforest',['tundra','temperate grassland'],'Tropical rainforests lie near the equator, where it is warm and wet all year. Tundra is cold, and grasslands are drier.'],
  ['Which biome has frozen subsoil, few trees, and lies in the far north?','tundra',['savanna','desert'],'Tundra lies in the far north, with permafrost (frozen subsoil), a short summer and too little warmth for most trees.'],
  ['Why are many great hot deserts near 30° N and 30° S?','dry air sinks there, so clouds and rain are scarce',['those latitudes are farthest from every sea','the sun is directly overhead there all year'],'Air that rose at the equator sinks near 30° N and S. Sinking air warms and dries, so clouds and rain are rare there.'],
  ['A rain shadow desert forms when','air loses its moisture crossing a mountain range and arrives dry on the far side',['a river carries sand to the sea','the ocean is warmer than the land'],'Air rises over mountains and drops its moisture as rain on the windward side, then sinks dry on the far side, making a rain shadow desert.'],
  ['The taiga (boreal forest) is mostly','evergreen forest in cold, high-latitude lands',['grass with scattered trees near the equator','bare sand in hot lands'],'Taiga, or boreal forest, is mostly evergreen conifers like spruce and fir, growing in cold lands at high latitudes.'],
  ['Why can a tall mountain near the equator have snow on its peak?','air temperature falls with elevation',['the equator is the coldest latitude','mountains make their own cold'],'Air temperature usually drops with elevation, so a high peak can be cold enough for snow even near the equator, like Kilimanjaro.'],
  ['Two places at the same latitude have different biomes. Which could explain it?','different rainfall, elevation or distance from the ocean',['different clock times','different country names'],'Latitude is only one control on climate. Rainfall, elevation and distance from the ocean can give two places very different biomes.'],
  ['Moving from the equator toward the poles, biomes generally shift','from rainforest through forests and grassland toward taiga and tundra',['from tundra toward rainforest','from desert straight to ocean'],'As temperatures drop toward the poles, biomes generally shift from tropical rainforest to temperate forests and grasslands, then taiga and tundra.']],1);
 for(const [t,h] of [[26,2000],[30,1500]])put('biomes',`A fictional town at sea level is ${t} °C. Using a drop of 6.5 °C per 1,000 m, what is the temperature in °C at an elevation of ${n(h)} m?`,r4(t-6.5*h/1000),tab('A mountain',[['sea level',`${t} °C`],['elevation',`${n(h)} m`]]),`${n(h)} m is ${h/1000} km; ${h/1000} × 6.5 = ${r4(6.5*h/1000)}; ${t} - ${r4(6.5*h/1000)} = ${r4(t-6.5*h/1000)} °C.`);
 put('biomes','A fictional village at 500 m has a temperature of 21 °C. Using a drop of 6.5 °C per 1,000 m, what is the temperature in °C at 3500 m?',1.5,tab('Two heights',[['village','500 m, 21 °C'],['higher point','3500 m']]),'The rise is 3,000 m, a drop of 3 × 6.5 = 19.5 °C; 21 - 19.5 = 1.5 °C.');
 put('biomes','A fictional mountain base at sea level is 19.5 °C. Using a drop of 6.5 °C per 1,000 m, at what elevation in meters does the air temperature reach 0 °C?',3000,tab('A mountain',[['sea level','19.5 °C']]),'19.5 ÷ 6.5 = 3 thousand meters = 3,000 m.');
 /* settle */
 letters('settle','Physical and human systems',[['floodplain','fertile but floods'],['mountains','barrier']],[
  ['Why have many early civilizations grown up along river valleys?','floods leave fertile soil and rivers supply water and transport',['rivers never flood','valleys contain the highest mountains'],'River floods left fertile soil, and rivers gave water for crops and routes for transport, so early civilizations grew in river valleys.'],
  ['Why is delta farmland often very productive?','the river drops fertile silt there',['the sea washes it with salt each day','deltas are always the driest land'],'Rivers drop fertile silt as they slow at a delta, building rich, flat farmland, like the Nile and Ganges deltas.'],
  ['Why do people farm on the slopes of some volcanoes despite the risk?','weathered volcanic rock and ash often make fertile soil',['volcanoes never erupt again','lava is used as fertilizer when it is hot'],'Volcanic rock and ash weather into soils rich in minerals, so farmland on volcanic slopes can be very fertile.'],
  ['Why do many large cities stand on natural harbors?','sheltered deep water suits ships and trade',['harbors have no storms','harbors are far from the sea'],'Natural harbors have sheltered, deep water where ships can dock safely, which draws trade and helps cities grow.'],
  ['How can high mountain ranges affect human systems?','they can act as barriers to travel, trade and the spread of cultures',['they make travel faster','they remove the need for roads'],'High mountains are hard to cross, so they can slow travel and trade and keep cultures and languages apart.'],
  ['Which is a sensible response to living in an earthquake zone?','earthquake-resistant building codes and drills',['building on loose fill and ignoring faults','removing all warning systems'],'Earthquake-resistant building codes and regular drills reduce damage and save lives when a quake strikes.'],
  ['Why do few people live in true deserts?','water is scarce, so farming and large settlements are hard',['deserts have too much rain','deserts are below the ocean'],'In true deserts water is scarce, so farming and large settlements are hard. People cluster near oases and rivers.'],
  ['Living on a floodplain brings which trade-off?','fertile, flat land but a risk of flooding',['steep land and no water','no risk and no benefit'],'Floodplains have flat, fertile land good for farming and building, but the river can flood it.']],2);
 for(const [p,a] of [[2400000,12000],[900000,6000]])put('settle',`A fictional river valley has ${n(p)} people on ${n(a)} square kilometers. What is its population density in people per square kilometer?`,r4(p/a),tab('The valley',[['people',n(p)],['area',`${n(a)} km²`]]),`${n(p)} ÷ ${n(a)} = ${r4(p/a)} people per km².`);
 put('settle','A fictional country has 8,000,000 people, and 6,400,000 of them live within 100 km of the coast. What percent live near the coast?',80,tab('The country',[['people','8,000,000'],['near coast','6,400,000']]),'6,400,000 ÷ 8,000,000 × 100 = 80%.');
 put('settle','A fictional province covers 20,000 square kilometers, of which 3,000 square kilometers are floodplain. What percent is floodplain?',15,tab('The province',[['area','20,000 km²'],['floodplain','3,000 km²']]),'3,000 ÷ 20,000 × 100 = 15%.');
 put('settle','On a fictional coastal plain the land rises 2 meters for every 5 kilometers inland. With an even slope, a sea-level rise of 1 meter would push the shoreline how many kilometers inland?',2.5,tab('The plain',[['rise','2 m per 5 km'],['sea level','+1 m']]),'1 m is half of 2 m, so half of 5 km: 2.5 km.');
}};
