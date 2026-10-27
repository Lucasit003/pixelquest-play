// Middle School topic (Grade 6, C3 D2.Geo.1.6-8): ratio scales such as 1:50,000. Every answer is computed from the
// numbers in its own question with the rules the lesson states: on a 1:N map one centimetre stands for N centimetres
// on the ground, 100 cm = 1 m and 1 km = 100,000 cm, so map cm × N ÷ 100,000 = real km and real km × 100,000 ÷ N =
// map cm. Of two maps printed the same size, the one with the smaller N has the larger scale: it shows more detail and
// less land. Every map, trail and town is fictional; nothing here is a fact asserted by a model. Every answer is a whole
// number or has at most two decimal places. Extends geography-e-map-scale ("1 cm = N km").
const fmt=n=>{const [i,d]=String(n).split('.');return i.replace(/\B(?=(\d{3})+(?!\d))/g,',')+(d?'.'+d:'');};
const R=N=>`1:${fmt(N)}`;
const r2=x=>Math.round(x*100)/100;
const MAPS=[['hiking map','trail'],['road atlas','road'],['park map','path'],['river chart','river'],['county map','railway'],['island map','coast road']];
const card=(N,rows,title='A fictional map')=>({t:'setups',title,head:'Quantity',rows:[['scale',R(N)],...rows],cols:['Value']});
export default {
id:'geography-m-ratio-scale',subject:'geography',level:4,grade:6,standard:'C3 D2.Geo.1.6-8',
title:'Ratio scales on maps',
goal:'Use a ratio scale such as 1:50,000 to turn map centimetres into real kilometres or metres and back, and compare two maps’ scales to tell which shows more detail.',
points:20,
skills:{toreal:'Map to real distance',tomap:'Real distance to map',compare:'Comparing two scales'},
steps:[
 {skill:'toreal',say:'A ratio scale such as 1:50,000 means that 1 unit on the map stands for 50,000 of the same unit on the ground. So 1 cm on the map is 50,000 cm of real ground. A ratio has no units: it works in centimetres, inches or any other unit.',eq:'1:50,000 means 1 cm = 50,000 cm',pic:card(50000,[['1 cm on the map','50,000 cm on the ground']],'A fictional hiking map')},
 {skill:'toreal',say:'To change map centimetres to real kilometres, multiply by the scale number, then divide by 100,000, because 1 km = 1,000 m = 100,000 cm. On a fictional 1:50,000 map, 6 cm is 6 × 50,000 = 300,000 cm of ground, and 300,000 ÷ 100,000 = 3 km.',eq:'6 × 50,000 = 300,000 cm = 3 km',pic:card(50000,[['on the map','6 cm'],['on the ground','300,000 cm = 3 km']],'A fictional hiking map'),
  check:{prompt:'Try it: a fictional park map has a scale of 1:25,000. A path measures 8 cm on it. How long is the real path, in kilometres?',answer:2,options:[2,200,20,0.2],hint:'8 × 25,000 = 200,000 cm. Divide by 100,000 to get kilometres.',pic:card(25000,[['on the map','8 cm'],['on the ground','? km']],'A fictional park map')}},
 {skill:'toreal',say:'For short distances, stop at metres: divide the real centimetres by 100. On a fictional 1:2,500 town plan, 4 cm is 4 × 2,500 = 10,000 cm of ground, and 10,000 ÷ 100 = 100 m.',eq:'4 × 2,500 = 10,000 cm = 100 m',pic:card(2500,[['on the map','4 cm'],['on the ground','10,000 cm = 100 m']],'A fictional town plan')},
 {skill:'tomap',say:'To go the other way, change the real distance to centimetres and divide by the scale number. At 1:50,000, a real 7 km is 7 × 100,000 = 700,000 cm, and 700,000 ÷ 50,000 = 14 cm on the map.',eq:'700,000 ÷ 50,000 = 14 cm',pic:card(50000,[['on the ground','7 km = 700,000 cm'],['on the map','14 cm']],'A fictional hiking map'),
  check:{prompt:'Try it: on a fictional road map with a scale of 1:200,000, how many centimetres long is a real road of 30 km?',answer:15,options:[15,6,150,60],hint:'30 km is 3,000,000 cm. Divide by 200,000.',pic:card(200000,[['on the ground','30 km'],['on the map','? cm']],'A fictional road map')}},
 {skill:'compare',say:'A larger scale shows more detail. 1:10,000 is a larger scale than 1:100,000, because one ten-thousandth is a bigger fraction than one hundred-thousandth: everything is drawn ten times bigger. On the same size of paper, the 1:100,000 map shows more land with less detail.',pic:{t:'setups',title:'Two fictional maps, same size of paper',head:'Map',rows:[['scale','1:10,000','1:100,000'],['1 cm stands for','0.1 km','1 km']],cols:['Map A','Map B']}},
 {skill:'compare',say:'The bigger the number after the colon, the more ground each centimetre stands for. On a fictional 1:250,000 map 1 cm is 2.5 km, but on a 1:25,000 map 1 cm is 0.25 km, so the same road is drawn 250,000 ÷ 25,000 = 10 times longer on the 1:25,000 map.',eq:'250,000 ÷ 25,000 = 10',pic:{t:'setups',title:'Two fictional maps',head:'Map',rows:[['scale','1:250,000','1:25,000'],['1 cm stands for','2.5 km','0.25 km']],cols:['Map A','Map B']},
  check:{prompt:'Try it: fictional map P has a scale of 1:200,000 and fictional map Q has a scale of 1:20,000. They are printed the same size. Which map shows more detail: P or Q?',answer:'Q',options:['Q','P'],hint:'The smaller number after the colon is the larger scale, which shows more detail.',pic:{t:'setups',title:'Two fictional maps',head:'Map',rows:[['scale','1:200,000','1:20,000']],cols:['Map P','Map Q']}}}],
progression:{requires:['geography-e-map-scale','math-e-times-ten'],operations:3,demand:'Multiply by a ratio scale and change centimetres to kilometres by dividing by 100,000, reverse it, and judge a scale by the size of the fraction 1/N rather than the size of N.'},
items(add){
 /* Map cm to real km (and to metres on large-scale plans), then what 1 cm stands for. */
 const KM={20000:[5,10,15,8,12],25000:[4,6,10,14,9],50000:[3,6,9,11,16],100000:[4,7,12,15],200000:[3,5,8,13],250000:[2,4,6,9],500000:[3,5,7],1000000:[2,4,9]};
 let n=0;for(const [N,cms] of Object.entries(KM))for(const cm of cms){const [map,thing]=MAPS[n++%MAPS.length],km=r2(cm*N/100000);
  add('toreal',`A fictional ${map} has a scale of ${R(+N)}. A ${thing} measures ${cm} cm on the map. How long is the real ${thing}, in kilometres?`,km,card(+N,[['on the map',`${cm} cm`],['on the ground','? km']],`A fictional ${map}`),`${cm} × ${fmt(+N)} = ${fmt(cm*N)} cm, and ${fmt(cm*N)} ÷ 100,000 = ${fmt(km)} km.`);}
 const M={1000:[5,8,12],2000:[3,7,9],2500:[4,6,10],5000:[3,7,11],10000:[2,5,9]};
 for(const [N,cms] of Object.entries(M))for(const cm of cms){const m=cm*N/100;
  add('toreal',`A fictional town plan has a scale of ${R(+N)}. A street measures ${cm} cm on the plan. How long is the real street, in metres?`,m,card(+N,[['on the plan',`${cm} cm`],['on the ground','? m']],'A fictional town plan'),`${cm} × ${fmt(+N)} = ${fmt(cm*N)} cm, and ${fmt(cm*N)} ÷ 100 = ${fmt(m)} m.`);}
 for(const N of [10000,20000,25000,50000,100000,200000,250000,500000,1000000,2000000])
  add('toreal',`A fictional map has a scale of ${R(N)}. How many kilometres on the ground does 1 cm on this map stand for?`,N/100000,card(N,[['1 cm on the map','? km']]),`1 cm stands for ${fmt(N)} cm, and ${fmt(N)} ÷ 100,000 = ${fmt(N/100000)} km.`);
 /* Real km to map cm, and real metres to map cm on town plans; every answer is whole or a tenth. */
 const BACK={25000:[1,2,3,5],50000:[2,4,5,7,8],100000:[3,6,9,11],200000:[10,16,30,44],250000:[5,15,20,35],500000:[25,40,60,90],1000000:[20,50,80,120]};
 n=0;for(const [N,kms] of Object.entries(BACK))for(const km of kms){const [map,thing]=MAPS[(n++*5)%MAPS.length],cm=r2(km*100000/N);
  add('tomap',`A fictional ${map} has a scale of ${R(+N)}. A real ${thing} is ${km} km long. How long is it on the map, in centimetres?`,cm,card(+N,[['on the ground',`${km} km`],['on the map','? cm']],`A fictional ${map}`),`${km} km = ${fmt(km*100000)} cm, and ${fmt(km*100000)} ÷ ${fmt(+N)} = ${fmt(cm)} cm.`);}
 for(const [N,ms] of Object.entries({1000:[50,120,200],2500:[100,250,400],5000:[150,300,450]}))for(const m of ms){const cm=r2(m*100/N);
  add('tomap',`A fictional town plan has a scale of ${R(+N)}. A real street is ${m} m long. How long is it on the plan, in centimetres?`,cm,card(+N,[['on the ground',`${m} m`],['on the plan','? cm']],'A fictional town plan'),`${m} m = ${fmt(m*100)} cm, and ${fmt(m*100)} ÷ ${fmt(+N)} = ${fmt(cm)} cm.`);}
 /* Two maps printed the same size: which shows more detail or more land (answers alternate A and B), how many times
    as much ground 1 cm stands for, and how long one road is when it is redrawn at the other scale. */
 const PAIRS=[[10000,50000],[25000,250000],[200000,20000],[50000,25000],[100000,1000000],[500000,50000],[20000,100000],[250000,50000],[10000,100000],[1000000,200000],[25000,100000],[500000,250000]];
 PAIRS.forEach(([A,B],i)=>{const detail=i%2===0,want=i%4<2?'A':'B';let a=A,b=B;const win=(x,y)=>detail?(x<y?'A':'B'):(x>y?'A':'B');if(win(a,b)!==want)[a,b]=[b,a];
  const pic={t:'setups',title:'Two fictional maps, same size of paper',head:'Map',rows:[['scale',R(a),R(b)]],cols:['Map A','Map B']};
  add('compare',`Fictional map A has a scale of ${R(a)} and fictional map B has a scale of ${R(b)}. They are printed on the same size of paper. Which map shows ${detail?'more detail':'a larger area of land'}: A or B?`,want,pic,`${want==='A'?R(a):R(b)} has the ${detail?'smaller':'larger'} number after the colon, so it is the ${detail?'larger':'smaller'} scale and shows ${detail?'more detail':'more land'}.`,[`map ${want.toLowerCase()}`]);
  const big=Math.max(a,b),small=Math.min(a,b),X=big===a?'A':'B',Y=X==='A'?'B':'A';
  add('compare',`Fictional map A has a scale of ${R(a)} and fictional map B has a scale of ${R(b)}. One centimetre on map ${X} stands for how many times as much real distance as one centimetre on map ${Y}?`,big/small,{...pic,title:'Two fictional maps'},`${fmt(big)} ÷ ${fmt(small)} = ${fmt(big/small)}.`);});
 const REDRAW=[[50000,25000,6],[25000,50000,10],[100000,25000,3],[250000,50000,4],[20000,100000,15],[200000,50000,5],[10000,50000,12],[500000,100000,2],[50000,200000,14],[25000,10000,6],[1000000,250000,3],[100000,20000,7]];
 REDRAW.forEach(([A,B,c],i)=>{const [,thing]=MAPS[i%MAPS.length],out=r2(c*A/B);
  add('compare',`A ${thing} is ${c} cm long on a fictional map with a scale of ${R(A)}. How long is the same ${thing} on a fictional map of the same area with a scale of ${R(B)}, in centimetres?`,out,{t:'setups',title:'Two fictional maps',head:'Map',rows:[['scale',R(A),R(B)],[thing,`${c} cm`,'? cm']],cols:['First map','Second map']},`${c} × ${fmt(A)} = ${fmt(c*A)} cm of ground, and ${fmt(c*A)} ÷ ${fmt(B)} = ${fmt(out)} cm on the second map.`);});
}
};
