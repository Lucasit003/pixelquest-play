/* Saving up for a toy at the Oakhaven market, for finance-e-saving-up steps 1-4. A boy finds a toy on the
   trader's carpet that costs $50, his goal; he has saved $20 in his chest. A bar shows saved against the goal.
   The step picture stays under each Try-it, and both Try-its (steps 2 and 4) have the answer $30, so the amount
   still needed is never written: step 3 marks it ?, step 4 outlines it as still needed (its caption says $30).

   Stage: art/tiled/theater-plaza.tmx, camera at (150, 40). Parts: goal, saved, subtract, reach. */
export default {
 id:'savings',
 title:'Saving up at the Oakhaven market',
 stage:{map:'plaza',w:832,h:320},
 view:{x:150,y:40},
 alt:{
  default:'A boy saving for a toy at the Oakhaven market.',
  goal:'A boy stops at the trader’s carpet and looks at a toy priced $50, his goal.',
  saved:'The boy opens his chest of savings. A bar shows $20 saved out of a $50 goal.',
  subtract:'The bar shows $20 saved and a goal of $50; the part still needed is marked with a question mark.',
  reach:'The gap between $20 saved and the $50 goal is outlined as still needed, and the boy smiles.'},
 cast:[{id:'trader',atlas:'theater-trader',x:330,y:176,face:1,head:56},
  {id:'boy',atlas:'theater-villager-m2',x:640,y:262,face:-1,head:52},
  {id:'chest',atlas:'theater-chest',x:402,y:198,face:1,hidden:true}],
 beats:[
  {at:0,do:'part',name:'goal'},
  {at:.2,do:'walk',who:'boy',to:[384,190],dur:3},
  {at:3.4,do:'face',who:'boy',face:-1},
  {at:3.6,do:'emote',who:'boy',icon:'love',dur:2},
  {at:4,do:'label',id:'toy',text:'The toy costs $50. That is the goal.',x:180,y:40,align:'center',point:[346,158],kind:'cause'},
  {at:4.6,do:'act',who:'trader',state:'wave',dur:1.6},
  {at:8,do:'unlabel',id:'toy'},

  {at:8,do:'part',name:'saved'},
  {at:8.2,do:'spawn',who:'chest',dur:.4},
  {at:8.6,do:'face',who:'boy',face:1},
  {at:8.8,do:'emote',who:'boy',icon:'happy',dur:1.6},
  {at:9,do:'bar',id:'bar',goal:50,saved:20,x:320,y:214,w:320},
  {at:9.4,do:'label',id:'so-far',text:'Saved so far: $20',follow:'chest',dy:-40,dx:56,kind:'cause'},
  {at:13.9,do:'tryit'},
  {at:14,do:'unlabel',id:'so-far'},

  {at:14,do:'part',name:'subtract'},
  {at:14,do:'bar',id:'bar',goal:50,saved:20,x:320,y:198,w:320,rest:'?'},
  {at:14.6,do:'emote',who:'boy',icon:'unsure',dur:1.8},
  {at:15,do:'label',id:'how',text:'How much more? Take what you saved away from the goal.',x:320,y:12,align:'center',w:420,kind:'cause'},
  {at:21,do:'unlabel',id:'how'},

  {at:21,do:'part',name:'reach'},
  {at:21,do:'bar',id:'bar',goal:50,saved:20,x:320,y:198,w:320,rest:'still needed'},
  {at:21.6,do:'label',id:'more',text:'This much more reaches the goal.',x:320,y:12,align:'center',kind:'cause'},
  {at:22.4,do:'emote',who:'boy',icon:'happy',dur:2},
  {at:26.9,do:'tryit'}],
 length:27
};
