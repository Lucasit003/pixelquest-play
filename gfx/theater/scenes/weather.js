/* Oakhaven's weather record, for science-e-weather-data step 1. Over two weeks the Archivist steps out each
   day, looks at the sky and adds one to the right row of the record: the square is sunny, rainy, cloudy or
   windy (pack rain, god rays, clouds and blowing leaves). The finished table is the step's own fictional
   record: Sunny 6, Rainy 3, Cloudy 4, Windy 1, 14 days in all. The order of the days is made up; only the
   counts are the lesson's. The worked reading is Rainy (3), which no Try-it asks for.

   Stage: art/tiled/theater-plaza.tmx, camera at (150, 20). Part: record. */
const DAYS='SSCRSCWSRCSCRS';
const ROW={S:0,R:1,C:2,W:3},WORD={S:'sunny',R:'rainy',C:'cloudy',W:'windy'};
const beats=[{at:0,do:'part',name:'record'},
 {at:.2,do:'table',id:'rec',title:'2-week weather record',cols:['Weather','Days'],rows:[['Sunny',0],['Rainy',0],['Cloudy',0],['Windy',0]],x:540,y:12,colW:[80,46]}];
const count={S:0,R:0,C:0,W:0};
[...DAYS].forEach((d,i)=>{const t=1.2+i*1.15;count[d]++;
 beats.push({at:t,do:'set',id:'rays',alpha:d==='S'?.9:0,dur:.3},{at:t,do:'set',id:'rain',alpha:d==='R'?1:0,dur:.3},{at:t,do:'set',id:'leaves',alpha:d==='W'?1:0,dur:.3},
  {at:t,do:'set',id:'grade',warm:d==='S'?.6:0,dark:d==='R'?.8:d==='C'?.45:0,dur:.3},{at:t,do:'set',who:'#cloud',alpha:d==='C'||d==='R'?1:0,dur:.3},
  {at:t,do:'label',id:`day${i}`,text:`Day ${i+1}: ${WORD[d]}`,x:16,y:12,kind:'cause',bold:true,until:t+1.15},
  {at:t+.5,do:'act',who:'arch',state:'cast',dur:.6},
  {at:t+.6,do:'cell',id:'rec',r:ROW[d],c:1,v:count[d]});});
const end=1.2+DAYS.length*1.15;
beats.push({at:end,do:'set',id:'rain',alpha:0,dur:.6},{at:end,do:'set',id:'leaves',alpha:0,dur:.6},{at:end,do:'set',id:'rays',alpha:.6,dur:.6},{at:end,do:'set',id:'grade',warm:.3,dark:0,dur:.6},{at:end,do:'set',who:'#cloud',alpha:0,dur:.6},
 {at:end+.4,do:'label',id:'read',text:'Find the weather word, then read its number of days.',x:16,y:12,w:300,kind:'cause'},
 {at:end+1.4,do:'cell',id:'rec',r:1,c:1,v:3},
 {at:end+1.6,do:'label',id:'eg',text:'Rainy: 3 days',x:350,y:64,align:'center',point:[606,95]});

export default {
 id:'weather',
 title:'Keeping the Oakhaven weather record',
 stage:{map:'plaza',w:832,h:320},
 view:{x:150,y:20},
 alt:{
  default:'The Archivist keeps a weather record in the Oakhaven square.',
  record:'Day by day the square is sunny, rainy, cloudy or windy, and the Archivist adds each day to a table. After 14 days it reads Sunny 6, Rainy 3, Cloudy 4 and Windy 1.'},
 cast:[{id:'arch',atlas:'theater-scholar',x:620,y:288,face:-1,head:60},
  {id:'k1',atlas:'theater-cloud',state:'c3',x:330,y:70,layer:'sky',hidden:true,shadow:false,z:2,tags:['cloud']},
  {id:'k2',atlas:'theater-cloud',state:'c4',x:520,y:96,layer:'sky',hidden:true,shadow:false,z:2,tags:['cloud']}],
 fx:[{id:'rays',atlas:'theater-fx-godrays',alpha:0},{id:'rain',atlas:'theater-fx-rain',alpha:0,layers:2},{id:'leaves',atlas:'theater-fx-leaves',alpha:0}],
 beats,
 length:end+6
};
