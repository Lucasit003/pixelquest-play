/* A plant's life cycle on the Oakhaven farm, for science-e-life-cycles step 6. A strawberry plant grows from a
   seed to a seedling, a plant and a flower, and the cycle at the top fills in that order (the step's own
   stages: seed, seedling, plant, flower). The pack has no crop that flowers without fruit, so the flowering
   strawberry (white blossoms, first berries) is the flower stage, and a pointer marks a blossom. A farmer minds the bed; the seed is labelled the start.

   Stage: art/tiled/theater-farm.tmx at zoom 3 on (236, 212). Part: cycle. */
export default {
 id:'plant-cycle',
 title:'A plant’s life cycle on the Oakhaven farm',
 stage:{map:'farm',w:832,h:320},
 view:{x:236,y:212,zoom:3},
 alt:{
  default:'A strawberry plant on the Oakhaven farm.',
  cycle:'A strawberry seed in the soil grows into a seedling, then a leafy plant, then a flowering plant with white blossoms, and each stage joins the row at the top in order. The seed is labelled the start.'},
 cast:[{id:'farmer',atlas:'theater-villager-m3',x:338,y:290,face:-1,head:52},
  {id:'plant',atlas:'theater-strawberry',state:'seed',x:300,y:292,face:1,shadow:false}],
 beats:[
  {at:0,do:'part',name:'cycle'},
  {at:0,do:'strip',id:'c',items:['seed','seedling','plant','flower'],x:320,y:10,n:1},
  {at:.2,do:'focus',id:'c',i:0},
  {at:.6,do:'label',id:'start',text:'The start: a seed',follow:'plant',dy:-60,kind:'cause',until:3.6},
  {at:3.6,do:'set',id:'plant',state:'sprout'},{at:3.8,do:'reveal',id:'c',n:2},{at:3.8,do:'focus',id:'c',i:1},
  {at:6.4,do:'set',id:'plant',state:'leaves'},{at:6.6,do:'reveal',id:'c',n:3},{at:6.6,do:'focus',id:'c',i:2},
  {at:9.2,do:'set',id:'plant',state:'flowers'},{at:9.4,do:'reveal',id:'c',n:4},{at:9.4,do:'focus',id:'c',i:3},
  {at:9.6,do:'label',id:'bloom',text:'flower',x:90,y:120,align:'center',point:[299,275]},
  {at:10,do:'emote',who:'farmer',icon:'happy',dur:2},
  {at:11,do:'label',id:'order',text:'Find the start, then follow the order.',x:320,y:56,align:'center',kind:'cause'},
  {at:14.9,do:'tryit'}],
 length:15
};
