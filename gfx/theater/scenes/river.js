/* A river flows downhill, for geography-e-rivers-downhill step 1. A duck floats from the pool under the
   Oakhaven waterfall, high on the cliff terraces, down the east river to the stone bridge, and the camera
   follows it. Signposts along the bank carry the three towns and heights from the step's own table (Ashby
   120 m, Brill 85 m, Corran 40 m), so the highest town is nearest the source and the lowest nearest the mouth.

   Stage: art/tiled/theater-falls.tmx (640 x 1280, a tall carve: the waterfall at the top, the stone bridge
   at the bottom). The camera pans down from y 0 to y 1000. Part: downhill. */
export default {
 id:'river',
 title:'A river flows downhill from Oakhaven falls',
 stage:{map:'falls',w:640,h:1280},
 view:{x:0,y:0},
 alt:{
  default:'The waterfall and the river below it in Oakhaven.',
  downhill:'A duck floats from the waterfall pool on high ground down the river to the stone bridge on lower ground. Signposts along the river read Ashby 120 m near the source, Brill 85 m and Corran 40 m near the mouth.'},
 cast:[{id:'duck',atlas:'theater-duck',x:268,y:210,face:1,shadow:false,head:30}],
 beats:[
  {at:0,do:'part',name:'downhill'},
  {at:.4,do:'label',id:'source',text:'Source: higher ground',x:20,y:20,kind:'cause',point:[270,90]},
  {at:1,do:'label',id:'ashby',text:'Ashby 120 m',x:372,y:200,stage:true,kind:'cause'},
  {at:1.6,do:'walk',who:'duck',to:[300,420],dur:3.6},
  {at:1.8,do:'camera',x:0,y:330,dur:3.6},
  {at:2.4,do:'unlabel',id:'source'},
  {at:5.2,do:'walk',who:'duck',to:[350,640],dur:3.2},
  {at:5.4,do:'camera',x:0,y:560,dur:3.2},
  {at:5.6,do:'label',id:'down',text:'Water flows downhill, from higher ground to lower ground.',x:20,y:20,w:240,kind:'cause'},
  {at:5.6,do:'label',id:'brill',text:'Brill 85 m',x:440,y:600,stage:true,kind:'cause'},
  {at:8.4,do:'walk',who:'duck',to:[380,880],dur:3.2},
  {at:8.6,do:'camera',x:0,y:800,dur:3.2},
  {at:10.4,do:'label',id:'corran',text:'Corran 40 m',x:470,y:1046,stage:true,kind:'cause'},
  {at:11.6,do:'walk',who:'duck',to:[350,1100],dur:3},
  {at:11.8,do:'camera',x:0,y:1000,dur:3},
  {at:13.8,do:'unlabel',id:'down'},
  {at:13.8,do:'label',id:'mouth',text:'On toward the mouth: lower ground',x:20,y:20,kind:'cause'},
  {at:18,do:'tryit'}],
 length:18
};
