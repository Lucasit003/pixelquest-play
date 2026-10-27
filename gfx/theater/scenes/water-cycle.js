/* The water cycle at the Oakhaven lake, for science-e-water-cycle steps 2-6. Villagers on the sheep
   meadow watch the sun warm the lake, vapor rise, a cloud form, rain fall and gather, and the sun start
   the cycle again. Every label repeats what the step's caption says; the cycle diagram in the corner
   marks the current step.

   Stage: art/tiled/theater-lake.tmx (832 x 320, carved from Oakhaven): meadow and rocks at y 64-200,
   reeds along the shore near y 210, the lake from y 224 down, the pier at x 425-460, forest on the left.
   The camera sits at (96, 40), so screen = stage - (96, 40). Labels keep to the right-hand column,
   clouds form over the middle, the diagram takes the top-left corner above the forest.
   Parts: evaporation, condensation, precipitation, collection, again. */
const V=(id,atlas,x,y,face)=>({id,atlas:`theater-villager-${atlas}`,x,y,face,tags:['folk'],head:52,phase:(x%7)/7});
/* Vapor over the lake: ERW white puffs and thin campfire wisps, each looping on its own phase. */
const vapor=[[214,262],[286,284],[352,256],[396,292],[506,270],[560,296],[618,258],[676,288],[736,266]].map(([x,y],i)=>({id:`v${i}`,atlas:'theater-fx-vapor',x,y,layer:'sky',hidden:true,shadow:false,phase:i*.41,tags:['vapor']}))
 .concat([[250,300],[330,276],[470,300],[590,282],[700,302]].map(([x,y],i)=>({id:`w${i}`,atlas:'theater-fx-wisp',x,y,layer:'sky',hidden:true,shadow:false,phase:i*.29,tags:['vapor']})));
const cloud=(id,state,x,y)=>({id,atlas:'theater-cloud',state,x,y,layer:'sky',hidden:true,shadow:false,z:2,tags:['cloud']});
/* Labels sit flush right in the free column over the round tree; LX is their right edge on screen. */
const LX=632;

export default {
 id:'water-cycle',
 title:'The water cycle at the Oakhaven lake',
 stage:{map:'lake',w:832,h:320},
 view:{x:96,y:40},
 alt:{
  default:'Villagers by the Oakhaven lake watch the water cycle.',
  evaporation:'Sunlight warms the lake and wisps of water vapor rise from it. The cycle diagram in the corner marks evaporation.',
  condensation:'High above the meadow small puffs of tiny drops join into one big cloud. The diagram marks condensation.',
  precipitation:'The sky darkens and rain falls on the meadow and the lake; two villagers hurry to the trees. The diagram marks precipitation.',
  collection:'The rain stops and the water has gathered in the lake and the ground. The diagram marks collection.',
  again:'The sun warms the lake again and vapor rises once more. The diagram is back at evaporation.'},
 cast:[V('m1','m1',344,190,1),V('f1','f1',376,195,-1),V('f3','f3',470,184,-1),V('m2','m2',282,204,1),
  {id:'bf',atlas:'theater-fx-butterfly',x:420,y:150,layer:'sky',shadow:false,z:1,tags:['life']},
  ...vapor,cloud('cA','c1',430,80),cloud('cB','c2',590,74),cloud('cC','c3',505,86),cloud('cD','c5',500,92)],
 fx:[{id:'rays',atlas:'theater-fx-godrays',alpha:0},{id:'rain',atlas:'theater-fx-rain',alpha:0,layers:2},{id:'splash',atlas:'theater-fx-splash',alpha:0,y:100},{id:'birds',atlas:'theater-fx-birds',alpha:0}],
 ring:{x:16,y:14,w:232,h:92,stages:['evaporation','condensation','precipitation','collection']},
 beats:[
  {at:0,do:'part',name:'evaporation'},
  {at:0,do:'ring',mark:'evaporation',turn:true},
  {at:0,do:'set',id:'grade',warm:1,dur:1.6},
  {at:0,do:'set',id:'rays',alpha:1,dur:1.6},
  {at:.6,do:'label',id:'sun',text:'The sun warms the lake.',x:LX,y:122,align:'right'},
  {at:1.2,do:'set',who:'#vapor',alpha:.95,dur:1.2,stagger:.3},
  {at:3,do:'label',id:'vapor',text:'The water turns into water vapor and rises.',x:LX,y:150,align:'right',w:230,point:[612,262],kind:'cause'},
  {at:4.4,do:'emote',who:'f1',icon:'happy',dur:2},
  {at:8.2,do:'unlabel',id:'sun'},{at:8.2,do:'unlabel',id:'vapor'},

  {at:8.2,do:'part',name:'condensation'},
  {at:8.2,do:'ring',mark:'condensation',turn:true},
  {at:8.2,do:'set',id:'rays',alpha:0,dur:1.4},
  {at:8.2,do:'set',id:'grade',warm:.3,dur:1.4},
  {at:8.6,do:'spawn',who:['cA','cB'],stagger:.5,dur:1.2},
  {at:9.6,do:'label',id:'cool',text:'High in the sky, the vapor cools into tiny drops.',x:LX,y:122,align:'right',w:230,point:[590,96]},
  {at:11.2,do:'spawn',who:'cC',dur:1.2},
  {at:11.6,do:'hide',who:['cA','cB'],dur:1.2},
  {at:12.6,do:'spawn',who:'cD',dur:1.4},
  {at:13.2,do:'hide',who:'cC',dur:1},
  {at:13.4,do:'unlabel',id:'cool'},
  {at:13.4,do:'label',id:'cloud',text:'The drops make a cloud.',x:LX,y:132,align:'right',point:[560,124],kind:'cause'},
  {at:13.8,do:'emote',who:'m1',icon:'surprised',dur:1.8},
  {at:14.2,do:'walk',who:'f1',by:[-12,0],dur:.8,keepFace:true},
  {at:16,do:'tryit'},
  {at:17,do:'unlabel',id:'cloud'},

  {at:17,do:'part',name:'precipitation'},
  {at:17,do:'ring',mark:'precipitation',turn:true},
  {at:17,do:'set',id:'grade',warm:0,dark:1,dur:1.4},
  {at:17,do:'set',who:'#vapor',alpha:0,dur:1},
  {at:17.8,do:'set',id:'rain',alpha:1,dur:1.2},
  {at:18,do:'set',id:'splash',alpha:.9,dur:1.2},
  {at:18,do:'hide',who:'bf',dur:.6},
  {at:18.6,do:'label',id:'rain',text:'The drops grow big and heavy and fall as rain.',x:LX,y:122,align:'right',w:230,point:[520,150],kind:'cause'},
  {at:19.4,do:'run',who:['m1','f1'],to:[236,198],dur:1.6,stagger:.3},
  {at:19.6,do:'emote',who:'f3',icon:'happy',dur:2.2},
  {at:21.4,do:'face',who:['m1','f1'],face:1},
  {at:25.5,do:'unlabel',id:'rain'},

  {at:25.5,do:'part',name:'collection'},
  {at:25.5,do:'ring',mark:'collection',turn:true},
  {at:25.5,do:'set',id:'rain',alpha:0,dur:1.6},
  {at:25.5,do:'set',id:'splash',alpha:0,dur:1.8},
  {at:25.5,do:'set',id:'grade',dark:.25,dur:1.6},
  {at:26.2,do:'label',id:'gather',text:'The rain gathers in the lake and in the ground.',x:LX,y:150,align:'right',w:230,point:[560,284],kind:'cause'},
  {at:26.8,do:'set',id:'cD',x:640,alpha:.25,dur:4.6},
  {at:28,do:'walk',who:'m1',to:[330,192],dur:2},
  {at:28.3,do:'walk',who:'f1',to:[366,198],dur:2},
  {at:31.5,do:'unlabel',id:'gather'},

  {at:31.5,do:'part',name:'again'},
  {at:31.5,do:'ring',mark:'evaporation',turn:true},
  {at:31.5,do:'set',id:'grade',dark:0,warm:1,dur:1.4},
  {at:31.5,do:'set',id:'rays',alpha:1,dur:1.4},
  {at:31.5,do:'set',id:'cD',alpha:0,dur:1},
  {at:31.8,do:'spawn',who:'bf',dur:.6},
  {at:32,do:'set',who:'#vapor',alpha:.95,dur:1,stagger:.25},
  {at:32.4,do:'label',id:'again',text:'The sun warms the lake again, and the cycle starts over.',x:LX,y:132,align:'right',w:230,point:[612,262],kind:'cause'},
  {at:33,do:'set',id:'birds',alpha:.7,dur:1},
  {at:35.5,do:'set',id:'birds',alpha:0,dur:1.5},
  {at:36.5,do:'tryit'}],
 length:37.5
};
