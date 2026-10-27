/* A strawberry plant grows on the Oakhaven farm, for history-e-timelines step 2 ("Read a timeline from left
   to right"). A farmer plants a seed, and as the plant sprouts, grows leaves, flowers and makes fruit, each
   event is added to the timeline at the top, left to right, earlier to later. The five events are the step's
   own timeline, word for word.

   Stage: art/tiled/theater-farm.tmx (832 x 320, the farm fields and the windmill). The first shot is wide at
   (96, 40); the growing plant is shown at zoom 2 on (170, 160), every art pixel 2 x 2. Part: grow. */
const EVENTS=['plant a seed','the seed sprouts','the plant grows leaves','the plant flowers','the plant makes fruit'];

export default {
 id:'garden',
 title:'A plant grows on the Oakhaven farm',
 stage:{map:'farm',w:832,h:320},
 view:{x:96,y:40},
 alt:{
  default:'A farmer and a strawberry plant on the Oakhaven farm.',
  grow:'A farmer plants a seed at the edge of the sunflower bed. The plant sprouts, grows leaves, flowers and makes strawberries, and each event joins the timeline at the top from left to right.'},
 cast:[
  {id:'farmer',atlas:'theater-villager-m3',x:700,y:300,face:-1,tags:['folk'],head:52},
  {id:'plant',atlas:'theater-strawberry',state:'seed',x:300,y:300,face:1,shadow:false,hidden:true}],
 beats:[
  {at:0,do:'part',name:'grow'},
  {at:0,do:'strip',id:'tl',items:EVENTS,x:320,y:8,wrap:92,pad:5,gap:12,from:'earlier',to:'later',n:0},
  {at:.2,do:'walk',who:'farmer',to:[326,300],dur:3},
  {at:3.2,do:'face',who:'farmer',face:-1},
  {at:3.4,do:'spawn',who:'plant',dur:.3},
  {at:3.6,do:'reveal',id:'tl',n:1},
  {at:3.6,do:'focus',id:'tl',i:0},
  {at:4.4,do:'camera',x:226,y:200,zoom:2,dur:0},
  {at:5.6,do:'set',id:'plant',state:'sprout'},
  {at:5.8,do:'reveal',id:'tl',n:2},{at:5.8,do:'focus',id:'tl',i:1},
  {at:7.6,do:'set',id:'plant',state:'small'},
  {at:8.6,do:'set',id:'plant',state:'leaves'},
  {at:8.8,do:'reveal',id:'tl',n:3},{at:8.8,do:'focus',id:'tl',i:2},
  {at:11,do:'set',id:'plant',state:'flowers'},
  {at:11.2,do:'reveal',id:'tl',n:4},{at:11.2,do:'focus',id:'tl',i:3},
  {at:13.4,do:'set',id:'plant',state:'fruit'},
  {at:13.6,do:'reveal',id:'tl',n:5},{at:13.6,do:'focus',id:'tl',i:4},
  {at:14,do:'emote',who:'farmer',icon:'happy',dur:2.4},
  {at:15,do:'label',id:'read',text:'The first thing is on the left.',x:320,y:236,align:'center',kind:'cause'},
  {at:18,do:'tryit'}],
 length:18
};
