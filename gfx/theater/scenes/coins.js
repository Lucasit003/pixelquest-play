/* Counting coins at the Oakhaven market, for finance-e-counting-money steps 1, 2 and 5-8 (the Mage's first
   lesson). A villager comes to the trader's carpet with her purse; the coins land on a tray, get lined up
   biggest value first and are counted on. Every coin set and every running total is the step's own picture:
   n p; q d; p d n d (lined up: d d n p); the same counted 10, 20, 25, 26; q d n p counted 25, 35, 40, 41;
   q d d n p p counted 25, 35, 45, 50, 51, 52. Coins are our own PixelLab coin in silver or copper (lsprites-oct26), each with
   its value in writing, as in the lesson's own coin pictures. The step-2 picture stays under its Try-it (which
   coin is worth 10 cents?), so it names no coin; step 7's Try-it (a quarter and 2 dimes) is never counted on screen.

   Owner #40 (8 Oct): "show the problem itself: buy a potion with this many cents". In count-on, quarter and pile the
   camera moves in on the trader's stall, a potion stands on her chest with its price, the coins are counted on to
   exactly that price, and the potion goes to the buyer. Potions and price sign are PixelLab props (theater-potion-*).

   Stage: art/tiled/theater-plaza.tmx (the market square), camera at (150, 40); the buying shots at zoom 2 on
   (230, 90). Parts: values, more, line-up, count-on, quarter, pile. */
const BUY={x:230,y:90,zoom:2,dur:.6},WIDE={x:150,y:40,zoom:1,dur:0},SHELF=[362,166],HANDS=[404,182];
export default {
 id:'coins',
 title:'Counting coins at the Oakhaven market',
 stage:{map:'plaza',w:832,h:320},
 view:{x:150,y:40},
 alt:{
  default:'A villager counts coins at the trader’s carpet in the Oakhaven market.',
  values:'A villager walks up to the trader. Her tray shows a nickel marked 5 cents and a penny marked 1 cent.',
  more:'The tray shows two coins, one marked 25 cents and one marked 10 cents.',
  'line-up':'Four mixed coins, a penny, a dime, a nickel and a dime, slide into a line with the biggest values first: dime, dime, nickel, penny.',
  'count-on':'The lined-up coins are counted on, one at a time: 10, 20, 25, 26.',
  quarter:'A quarter, a dime, a nickel and a penny are counted on: 25, 35, 40, 41.',
  pile:'A bigger pile, a quarter, two dimes, a nickel and two pennies, is counted biggest first: 25, 35, 45, 50, 51, 52. The trader waves.'},
 cast:[{id:'trader',atlas:'theater-trader',x:330,y:176,face:1,head:56},
  {id:'buyer',atlas:'theater-villager-f1',x:640,y:262,face:-1,head:52},
  {id:'sign',atlas:'theater-price-sign',x:306,y:184,face:1,hidden:true,shadow:false},
  {id:'small',atlas:'theater-potion-red',x:SHELF[0],y:SHELF[1],face:1,hidden:true,shadow:false},
  {id:'mana',atlas:'theater-potion-blue',x:SHELF[0],y:SHELF[1],face:1,hidden:true,shadow:false},
  {id:'big',atlas:'theater-potion-big',x:SHELF[0],y:SHELF[1],face:1,hidden:true,shadow:false}],
 beats:[
  {at:0,do:'part',name:'values'},
  {at:0,do:'camera',...WIDE},
  {at:.2,do:'walk',who:'buyer',to:[384,186],dur:3},
  {at:1,do:'coins',id:'tray',coins:['n','p'],x:320,y:186},
  {at:1.8,do:'label',id:'n',text:'nickel: 5 cents',x:150,y:206,align:'center',point:[447,250]},
  {at:2.6,do:'label',id:'p',text:'penny: 1 cent',x:490,y:206,align:'center',point:[493,250]},
  {at:3.2,do:'face',who:'buyer',face:-1},
  {at:4,do:'act',who:'trader',state:'wave',dur:1.6},
  {at:8,do:'unlabel',id:'n'},{at:8,do:'unlabel',id:'p'},

  {at:8,do:'part',name:'more'},
  {at:8,do:'camera',...WIDE},
  {at:8.2,do:'coins',id:'tray',coins:['q','d'],x:320,y:186},
  {at:9.4,do:'act',who:'trader',state:'wave',dur:1.6},
  {at:15.9,do:'tryit'},

  {at:16,do:'part',name:'line-up'},
  {at:16,do:'camera',...WIDE},{at:16,do:'hide',who:['sign','small','mana','big'],dur:0},
  {at:16.2,do:'coins',id:'tray',coins:['p','d','n','d'],x:320,y:186},
  {at:17.4,do:'label',id:'mixed',text:'Mixed coins: line them up, biggest value first.',x:320,y:12,align:'center',w:420,kind:'cause'},
  {at:18.6,do:'sort',id:'tray',dur:1.8},
  {at:23,do:'unlabel',id:'mixed'},

  {at:23,do:'part',name:'count-on'},
  {at:23,do:'camera',...BUY},{at:23,do:'walk',who:'buyer',x:384,y:186,dur:0},{at:23,do:'face',who:'buyer',face:-1},
  {at:23,do:'spawn',who:['sign','small'],dur:.4},
  {at:23,do:'coins',id:'tray',coins:['p','d','n','d'],x:320,y:186},
  {at:23,do:'sort',id:'tray',dur:.01},
  {at:23.2,do:'label',id:'price',text:'Small potion: 26¢',x:250,y:40,align:'center',point:[362,140],kind:'title'},
  {at:23.6,do:'count',id:'tray',n:1},
  {at:24.8,do:'count',id:'tray',n:2},
  {at:26,do:'count',id:'tray',n:3},
  {at:27.2,do:'count',id:'tray',n:4},
  {at:27.8,do:'label',id:'on',text:'Count on: 10, 20, 25, 26.',x:320,y:12,align:'center',kind:'cause'},
  {at:28.4,do:'unlabel',id:'price'},{at:28.4,do:'set',who:'small',x:HANDS[0],y:HANDS[1],dur:.7},{at:28.6,do:'label',id:'paid',text:'26 cents: the potion is hers!',x:470,y:56,align:'center'},{at:29,do:'emote',who:'buyer',icon:'happy',dur:1.8},
  {at:31,do:'unlabel',id:'on'},{at:31,do:'unlabel',id:'paid'},{at:31,do:'hide',who:'small',dur:.2},

  {at:31,do:'part',name:'quarter'},
  {at:31,do:'camera',...BUY},{at:31,do:'walk',who:'buyer',x:384,y:186,dur:0},{at:31,do:'face',who:'buyer',face:-1},{at:31,do:'set',who:'mana',x:SHELF[0],y:SHELF[1],dur:0},
  {at:31,do:'spawn',who:['sign','mana'],dur:.4},
  {at:31,do:'coins',id:'tray',coins:['q','d','n','p'],x:320,y:186},
  {at:31,do:'sort',id:'tray',dur:.01},
  {at:31.2,do:'label',id:'price',text:'Mana potion: 41¢',x:250,y:40,align:'center',point:[362,140],kind:'title'},
  {at:31.8,do:'count',id:'tray',n:1},
  {at:33,do:'count',id:'tray',n:2},
  {at:34.2,do:'count',id:'tray',n:3},
  {at:35.4,do:'count',id:'tray',n:4},
  {at:36,do:'label',id:'q25',text:'Start at 25 and keep counting: 25, 35, 40, 41.',x:320,y:12,align:'center',w:420,kind:'cause'},
  {at:36.6,do:'unlabel',id:'price'},{at:36.6,do:'set',who:'mana',x:HANDS[0],y:HANDS[1],dur:.7},{at:36.8,do:'label',id:'paid',text:'41 cents: just right!',x:470,y:56,align:'center'},{at:37.2,do:'emote',who:'buyer',icon:'happy',dur:1.8},
  {at:39.9,do:'tryit'},
  {at:40,do:'unlabel',id:'q25'},{at:40,do:'unlabel',id:'paid'},{at:40,do:'hide',who:'mana',dur:.2},

  {at:40,do:'part',name:'pile'},
  {at:40,do:'camera',...BUY},{at:40,do:'walk',who:'buyer',x:384,y:186,dur:0},{at:40,do:'face',who:'buyer',face:-1},{at:40,do:'set',who:'big',x:SHELF[0],y:SHELF[1],dur:0},
  {at:40,do:'spawn',who:['sign','big'],dur:.4},
  {at:40,do:'coins',id:'tray',coins:['q','d','d','n','p','p'],x:320,y:186},
  {at:40,do:'sort',id:'tray',dur:.01},
  {at:40.2,do:'label',id:'price',text:'Big potion: 52¢',x:250,y:40,align:'center',point:[362,134],kind:'title'},
  {at:40.8,do:'count',id:'tray',n:1},
  {at:41.8,do:'count',id:'tray',n:2},
  {at:42.8,do:'count',id:'tray',n:3},
  {at:43.8,do:'count',id:'tray',n:4},
  {at:44.8,do:'count',id:'tray',n:5},
  {at:45.8,do:'count',id:'tray',n:6},
  {at:46.4,do:'label',id:'any',text:'Biggest coin first, then count on.',x:320,y:12,align:'center',kind:'cause'},
  {at:46.8,do:'act',who:'trader',state:'wave',dur:1.6},
  {at:46.8,do:'unlabel',id:'price'},{at:46.8,do:'set',who:'big',x:HANDS[0],y:HANDS[1]-4,dur:.7},{at:47,do:'label',id:'paid',text:'52 cents buys the big potion!',x:470,y:56,align:'center'},
  {at:47,do:'emote',who:'buyer',icon:'happy',dur:2},
  {at:47.4,do:'act',who:'trader',state:'idle',dur:.1}],
 length:50
};
