/* Needs and wants at the Oakhaven market, for finance-e-needs-and-wants steps 1 and 3. A villager with no
   food in the house buys fish for today at the fish stall, then looks at the toy on the trader's carpet and
   lets it wait. The labels are the steps' own pictures (basic need, optional extra; food today, extra toy). Step 4
   (lunch or toy?) keeps its own picture, since the step picture stays under its Try-it.

   Stage: art/tiled/theater-plaza.tmx, camera at (150, 40). Parts: need-want, can-wait. */
export default {
 id:'needs',
 title:'Needs and wants at the Oakhaven market',
 stage:{map:'plaza',w:832,h:320},
 view:{x:150,y:40},
 alt:{
  default:'A villager choosing between food and a toy at the Oakhaven market.',
  'need-want':'At the market the fish stall is labelled basic need and the toy on the trader’s carpet optional extra. A villager stops to think.',
  'can-wait':'The villager buys fish for today first, then looks happily at the toy and walks on: the toy can wait.'},
 cast:[{id:'trader',atlas:'theater-trader',x:330,y:176,face:1,head:56},{id:'fish',atlas:'theater-fishmonger',x:470,y:250,face:-1,head:56},
  {id:'v',atlas:'theater-villager-f3',x:690,y:262,face:-1,head:52}],
 beats:[
  {at:0,do:'part',name:'need-want'},
  {at:.4,do:'label',id:'need',text:'Basic need',follow:'fish',dy:-78,kind:'cause'},
  {at:1.6,do:'label',id:'want',text:'Optional extra',follow:'trader',dy:-70},
  {at:2.4,do:'walk',who:'v',to:[566,258],dur:2.4},
  {at:5,do:'emote',who:'v',icon:'unsure',dur:2},
  {at:5.4,do:'label',id:'read',text:'Read the situation before deciding.',x:320,y:12,align:'center',kind:'cause'},
  {at:10,do:'unlabel',id:'need'},{at:10,do:'unlabel',id:'want'},{at:10,do:'unlabel',id:'read'},

  {at:10,do:'part',name:'can-wait'},
  {at:10.2,do:'walk',who:'v',to:[508,262],dur:1.4},
  {at:11.8,do:'face',who:'v',face:-1},
  {at:12,do:'label',id:'food',text:'Food today',follow:'v',dy:-100,kind:'cause'},
  {at:12.4,do:'emote',who:'v',icon:'happy',dur:1.6},
  {at:14.6,do:'unlabel',id:'food'},
  {at:14.6,do:'walk',who:'v',to:[396,252],dur:1.6},
  {at:16.2,do:'walk',who:'v',to:[384,190],dur:1},
  {at:17.2,do:'emote',who:'v',icon:'love',dur:1.8},
  {at:17.4,do:'label',id:'wait',text:'Extra toy: it can wait',follow:'trader',dy:-96},
  {at:19.6,do:'walk',who:'v',to:[396,252],dur:1},
  {at:20.6,do:'walk',who:'v',to:[690,262],dur:2.8},
  {at:23.9,do:'face',who:'v',face:1}],
 length:24
};
