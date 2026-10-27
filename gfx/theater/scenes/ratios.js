/* Mixing green paint at the Oakhaven market, for math-m-ratios steps 1 and 2 (Middle School in the theater's style,
   owner #44, 8 Oct). A painter walks up to his bucket; the board below shows one batch, 2 cans of blue and 3 of yellow,
   making one bucket of green. Then four batches side by side: 8 blue and 12 yellow, four buckets of the very same green.
   The cans and buckets are PixelLab props (theater-paint-blue, -yellow, theater-bucket-green). Every number on screen is
   the caption's own; the step-2 Try-it (lemons and water) is never shown.

   Stage: art/tiled/theater-plaza.tmx (the market square), camera at (150, 40). Parts: batch, batches. */
const MIX=[{label:'blue',atlas:'theater-paint-blue',n:2},{label:'yellow',atlas:'theater-paint-yellow',n:3}],GREEN={atlas:'theater-bucket-green',label:'green'};

export default {
 id:'ratios',
 title:'Mixing green paint at the Oakhaven market',
 stage:{map:'plaza',w:832,h:320},
 view:{x:150,y:40},
 alt:{
  default:'A painter at the Oakhaven market mixes blue and yellow paint into green, with the cans shown in rows below.',
  batch:'A painter walks up to his bucket. Below him, one batch: 2 cans of blue paint and 3 cans of yellow make one bucket of green. The ratio of blue to yellow is 2 to 3.',
  batches:'Four batches stand side by side: 8 cans of blue and 12 cans of yellow, making four buckets of the same green. 8 to 12 is the same ratio as 2 to 3.'},
 cast:[{id:'painter',atlas:'theater-villager-m2',x:60,y:166,face:1,head:52},
  {id:'bucket',atlas:'theater-bucket-green',x:336,y:166,face:1,hidden:true}],
 beats:[
  {at:0,do:'part',name:'batch'},
  {at:.2,do:'walk',who:'painter',to:[300,164],dur:2.4},
  {at:1.2,do:'items',id:'mix',rows:MIX,groups:1,result:GREEN,x:320,y:136},
  {at:2.8,do:'spawn',who:'bucket',dur:.4},
  {at:3,do:'emote',who:'painter',icon:'happy',dur:1.6},
  {at:3.6,do:'label',id:'ratio',text:'blue : yellow = 2 : 3',x:470,y:40,align:'center',kind:'cause'},
  {at:9,do:'unlabel',id:'ratio'},

  {at:9,do:'part',name:'batches'},
  {at:9,do:'walk',who:'painter',x:300,y:164,dur:0},
  {at:9,do:'spawn',who:'bucket',dur:0},
  {at:9.2,do:'items',id:'mix',rows:MIX,groups:4,from:1,totals:true,result:GREEN,x:320,y:136},
  {at:11.6,do:'label',id:'four',text:'Four batches: 8 blue and 12 yellow.',x:470,y:24,align:'center',w:300},
  {at:13,do:'label',id:'same',text:'2 : 3 = 8 : 12, the same green.',x:470,y:58,align:'center',kind:'cause'},
  {at:13.4,do:'emote',who:'painter',icon:'happy',dur:1.6}],
 length:20
};
