/* A food chain on the Oakhaven sheep meadow, for science-e-food-chains steps 1-4 and 6. Sunlight falls on
   the grass, a rabbit hops in to eat it, a fox comes out of the trees and hunts it. The rabbit gets away:
   the scene shows who eats whom with the arrows of the chain at the bottom, never an animal being eaten.
   Every word in the chain comes from the step it belongs to (sun, grass, rabbit, fox; producer, consumer,
   predator, prey; plant, animal, bigger animal).

   Stage: art/tiled/theater-lake.tmx (the water-cycle meadow). The wide shots (producer, energy) sit at (40, 24):
   the forest edge, the meadow and the sheep pen. The animal shots cut in at zoom 2 on (230, 110), every art
   pixel 2 x 2, so the small animals read; screen = (stage - camera) x zoom.
   Owner #42 (8 Oct): show the fox attacking the rabbit. The fox and rabbit are PixelLab animals, big enough to read: the
   fox stalks closer, then leaps at the rabbit, which springs away just in time and runs, the fox chasing. Still no
   animal is ever caught or eaten.
   Parts: producer, consumer, chain, hunt, energy. */
const CHAIN=['sunlight','grass','rabbit','fox'];

export default {
 id:'food-chain',
 title:'A food chain on the Oakhaven meadow',
 stage:{map:'lake',w:832,h:320},
 view:{x:40,y:24},
 alt:{
  default:'A rabbit and a fox on the Oakhaven meadow, with the food chain drawn below them.',
  producer:'Sunlight falls on the meadow grass. A label names the grass a producer, and the chain at the bottom shows sunlight, then grass.',
  consumer:'A rabbit hops onto the meadow and eats the grass. The label names it a consumer; the chain now reads sunlight, grass, rabbit.',
  chain:'A fox steps out of the trees and watches the rabbit. The chain reads grass, rabbit, fox, with arrows pointing the way the food goes.',
  hunt:'The fox crouches and chases the rabbit, which runs off safely. Labels name the fox the predator and the rabbit its prey.',
  energy:'Sunlight on the meadow again, and the chain from sunlight to grass to rabbit to fox lights up one step at a time.'},
 cast:[
  {id:'rabbit',atlas:'theater-rabbit-pl',x:600,y:200,face:-1,tags:['animal'],head:30,hidden:true},
  {id:'fox',atlas:'theater-fox-pl',x:226,y:206,face:1,tags:['animal'],head:30,hidden:true}],
 fx:[{id:'rays',atlas:'theater-fx-godrays',alpha:0}],
 beats:[
  {at:0,do:'part',name:'producer'},
  {at:0,do:'set',id:'grade',warm:1,dur:1.6},
  {at:0,do:'set',id:'rays',alpha:1,dur:1.6},
  {at:.6,do:'strip',id:'chain',items:['sunlight','grass'],x:320,y:246,n:1},
  {at:2.2,do:'reveal',id:'chain',n:2},
  {at:2.6,do:'label',id:'producer',text:'Producer: the grass makes its own food from sunlight.',x:620,y:118,align:'right',w:230,point:[470,214],kind:'cause'},
  {at:9,do:'unlabel',id:'producer'},

  {at:9,do:'part',name:'consumer'},
  {at:9,do:'camera',x:230,y:110,zoom:2,dur:0},
  {at:9,do:'set',id:'rays',alpha:.35,dur:1.2},
  {at:9,do:'strip',id:'chain',items:['sunlight','grass','rabbit'],x:320,y:246,n:2},
  {at:9.2,do:'spawn',who:'rabbit',dur:.3},
  {at:9.2,do:'walk',who:'rabbit',x:600,y:200,dur:0},
  {at:9.3,do:'walk',who:'rabbit',to:[432,184],dur:2.4},
  {at:11.8,do:'act',who:'rabbit',state:'eat',dur:5,loop:true},
  {at:12.2,do:'reveal',id:'chain',n:3},
  {at:12.4,do:'label',id:'consumer',text:'Consumer: the rabbit cannot make food, so it eats the grass.',x:620,y:16,align:'right',w:230,point:[434,164],kind:'cause'},
  {at:16.8,do:'act',who:'rabbit',state:'eat',dur:1.2,loop:true},
  {at:18,do:'unlabel',id:'consumer'},

  {at:18,do:'part',name:'chain'},
  {at:18,do:'strip',id:'chain',items:['grass','rabbit','fox'],x:320,y:246,n:2},
  {at:18,do:'act',who:'rabbit',state:'eat',dur:9,loop:true},
  {at:18.4,do:'walk',who:'fox',x:226,y:194,dur:0},
  {at:18.4,do:'spawn',who:'fox',dur:.5},
  {at:18.6,do:'walk',who:'fox',to:[318,192],dur:2.6},
  {at:21.4,do:'walk',who:'fox',to:[352,192],dur:3,state:'sneak'},
  {at:21.6,do:'reveal',id:'chain',n:3},
  {at:22.2,do:'label',id:'arrow',text:'The arrow points the way the food goes.',x:320,y:218,w:420,align:'center',kind:'cause'},
  {at:24.4,do:'act',who:'fox',state:'sneak',dur:2.6,loop:true},
  {at:27,do:'unlabel',id:'arrow'},

  {at:27,do:'part',name:'hunt'},
  {at:27,do:'strip',id:'chain',items:['grass','rabbit','fox'],x:320,y:246,n:3},
  {at:27,do:'walk',who:'fox',x:352,y:192,dur:0},
  {at:27.1,do:'act',who:'fox',state:'pounce',dur:.75},
  {at:27.2,do:'emote',who:'rabbit',icon:'surprised',dur:1.2},
  {at:27.4,do:'set',who:'fox',x:424,y:188,dur:.45},
  {at:27.45,do:'act',who:'rabbit',state:'hop',dur:.6},
  {at:27.45,do:'set',who:'rabbit',x:486,y:176,dur:.45},
  {at:27.6,do:'label',id:'predator',follow:'fox',text:'predator',dy:-80,kind:'cause',bold:true},
  {at:27.6,do:'label',id:'prey',follow:'rabbit',text:'prey',dy:-90,bold:true},
  {at:28,do:'run',who:'rabbit',to:[620,172],dur:1.4},
  {at:28.3,do:'run',who:'fox',to:[520,186],dur:1.6},
  {at:30,do:'act',who:'fox',state:'idle',dur:1,loop:true},
  {at:31.2,do:'label',id:'hunts',text:'The fox hunts the rabbit: predator and prey.',x:320,y:218,w:420,align:'center'},
  {at:31.4,do:'act',who:'fox',state:'idle',dur:3,loop:true},
  {at:35,do:'unlabel',id:'predator'},{at:35,do:'unlabel',id:'prey'},{at:35,do:'unlabel',id:'hunts'},

  {at:35,do:'part',name:'energy'},
  {at:35,do:'camera',x:40,y:24,zoom:1,dur:0},
  {at:35,do:'set',id:'rays',alpha:1,dur:1.4},
  {at:35,do:'hide',who:'fox',dur:.6},
  {at:35,do:'strip',id:'chain',items:['sunlight','grass: plant','rabbit: animal','fox: bigger animal'],x:320,y:246,n:4},
  {at:35.4,do:'focus',id:'chain',i:0},
  {at:36,do:'label',id:'energy',text:'Follow the arrows: the energy came from sunlight, caught by the grass.',x:620,y:118,align:'right',w:240,kind:'cause'},
  {at:37,do:'focus',id:'chain',i:1},
  {at:38.6,do:'focus',id:'chain',i:2},
  {at:40.2,do:'focus',id:'chain',i:3},
  {at:44,do:'tryit'}],
 length:44
};
