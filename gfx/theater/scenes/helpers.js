/* Oakhaven's helpers at work in the market square, for history-e-community-helpers steps 1 and 7. The
   blacksmith hammers at the anvil, the trader sells from his carpet, the fish seller minds his stall and the
   Archivist looks after the books. Then a villager with a broken hoe thinks about the job first and walks
   straight to the blacksmith. The step pictures were a "job / helper" pair; the labels keep that pairing.

   Stage: art/tiled/theater-plaza.tmx (832 x 320, the market square). Camera at (96, 20): screen = stage -
   (96, 20). Parts: jobs, ask. */
const H=(id,atlas,x,y,face,state='idle')=>({id,atlas:`theater-${atlas}`,x,y,face,state,tags:['helper'],head:56});

export default {
 id:'helpers',
 title:'Helpers at work in Oakhaven',
 stage:{map:'plaza',w:832,h:320},
 view:{x:96,y:20},
 alt:{
  default:'The Oakhaven market square with its helpers at work.',
  jobs:'In the market square the blacksmith hammers at his anvil, the trader sells from a carpet, the fish seller stands at his stall and the Archivist waits by the door. Each has a label naming the job.',
  ask:'A villager with a broken hoe stops to think about the job, then walks past the other helpers to the blacksmith, who mends tools.'},
 cast:[
  {id:'anvil',atlas:'theater-anvil',x:212,y:172,face:1,shadow:false},
  H('smith','smith',180,170,1,'work'),H('trader','trader',330,176,1),H('fish','fishmonger',470,250,-1),H('arch','scholar',650,288,-1),
  {id:'v1',atlas:'theater-villager-f2',x:880,y:214,face:-1,tags:['folk'],head:52},
  {id:'v2',atlas:'theater-villager-m1',x:430,y:200,face:-1,tags:['folk'],head:52,hidden:true}],
 beats:[
  {at:0,do:'part',name:'jobs'},
  {at:.2,do:'walk',who:'v1',to:[520,214],dur:5},
  {at:.6,do:'label',id:'l-smith',follow:'smith',text:'blacksmith: makes and mends tools',dy:-74,w:150},
  {at:2.2,do:'label',id:'l-trader',follow:'trader',text:'trader: sells goods',dy:-70,w:150},
  {at:3.8,do:'label',id:'l-fish',follow:'fish',text:'fish seller: sells fish',dy:-78,w:150},
  {at:5.4,do:'label',id:'l-arch',follow:'arch',text:'Archivist: keeps the books',dy:-80,w:150},
  {at:5.4,do:'act',who:'arch',state:'cast',dur:2.2},
  {at:5.6,do:'walk',who:'v1',to:[500,262],dur:1.4},
  {at:7,do:'face',who:'v1',face:-1},
  {at:7.2,do:'label',id:'each',text:'Each helper has a job that the others do not do.',x:320,y:12,align:'center',kind:'cause'},
  {at:11,do:'unlabel',id:'l-smith'},{at:11,do:'unlabel',id:'l-trader'},{at:11,do:'unlabel',id:'l-fish'},{at:11,do:'unlabel',id:'l-arch'},{at:11,do:'unlabel',id:'each'},

  {at:11,do:'part',name:'ask'},
  {at:11,do:'act',who:'smith',state:'idle',dur:5,loop:true},
  {at:11,do:'spawn',who:'v2',dur:.4},
  {at:11.4,do:'say',who:'v2',text:'My hoe is broken!',dur:2},
  {at:13.6,do:'emote',who:'v2',icon:'unsure',dur:1.8},
  {at:13.8,do:'label',id:'job',text:'Think about the job first: mending a tool.',x:320,y:12,align:'center',kind:'cause'},
  {at:15.6,do:'walk',who:'v2',to:[252,176],dur:3.2},
  {at:16,do:'act',who:'smith',state:'work',dur:4,loop:true},
  {at:18.8,do:'face',who:'v2',face:-1},
  {at:19,do:'label',id:'right',follow:'smith',text:'Mending tools is the blacksmith\'s job.',dy:-74,w:170,kind:'cause'},
  {at:19.4,do:'emote',who:'v2',icon:'happy',dur:2.2},
  {at:22,do:'tryit'}],
 length:22
};
