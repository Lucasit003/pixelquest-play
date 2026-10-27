/* The Battle of the Bridge: a made-up story from long ago at the Oakhaven stone bridge, for
   history-e-causes-consequences. It teaches a chain of causes: each consequence becomes the cause of the
   next. Simplified and kid-safe: soldiers clash and fall back, nobody is hurt for long, and the story ends
   with the two lords agreeing to share the bridge. A narrow crossing that lets only a few attackers through
   at a time is a real pattern in history (Stirling Bridge, 1297, is the famous case), told here as fiction.

   Stage: art/tiled/theater-bridge.tmx (832 x 320, carved from Oakhaven). Actors stand on the road band,
   feet y 190-240; the stone deck runs from x 305 to x 525 with its walking line near y 205.
   Parts: approach (step 5), cross (step 6), peace (step 7). */
const K=(id,side,x,y,face,tags=[])=>({id,atlas:`theater-knight-${side}`,x,y,face,tags:[side,...tags],head:44,phase:(x*7%10)/10});
const blue=[K('b0','blue',150,206,1,['lord']),K('b1','blue',282,200,1,['front']),K('b2','blue',288,222,1,['front']),K('b3','blue',248,192,1),K('b4','blue',252,212,1),K('b5','blue',246,232,1),K('b6','blue',214,202,1),K('b7','blue',218,224,1)];
/* The Red army waits off stage to the east and marches in. */
const red=[K('r0','red',900,214,-1,['lord']),K('r1','red',880,206,-1,['front']),K('r2','red',905,222,-1,['front']),K('r3','red',930,206,-1,['front']),
 K('r4','red',955,222,-1),K('r5','red',980,206,-1),K('r6','red',1005,222,-1),K('r7','red',1030,214,-1)];
const flags=[{id:'fb',atlas:'theater-flag-blue',x:178,y:190,face:1,shadow:false,tags:['flag']},{id:'fr',atlas:'theater-flag-red',x:790,y:226,face:-1,shadow:false,hidden:true,tags:['flag']}];

export default {
 id:'bridge',
 title:'The Battle of the Bridge (a made-up story)',
 stage:{map:'bridge',w:832,h:320},
 view:{x:96,y:24},
 alt:{
  default:'A made-up battle at the Oakhaven stone bridge.',
  approach:'The Oakhaven stone bridge over a deep river. The Blue army waits on the west bank; the Red army marches up the east road. A map in the corner shows the river, the one bridge and both armies.',
  cross:'Red soldiers cross the narrow bridge three at a time and the Blue line stops them at its west end. The map shows the Red arrow reaching the bridge.',
  peace:'The Red army marches back east, the Blue army cheers, and the two lords meet on the bridge and agree to share it. A numbered list shows the chain of causes.'},
 cast:[...flags,...blue,...red],
 /* Top-down diagram in the corner: the river runs north to south, the bridge crosses it, blocks show each army. */
 inset:{x:478,y:16,w:146,h:74,title:'Map',ground:'#5d8c44',field:[0,832],
  features:[{t:'rect',x:57,y:0,w:28,h:74,colour:'#3f8bc0'},{t:'rect',x:52,y:24,w:38,h:10,colour:'#9a958a',label:'bridge',lx:50,ly:35}],
  units:[{tag:'blue',team:'blue',w:16,h:8,y:25},{tag:'red',team:'red',w:16,h:8,y:25}]},
 beats:[
  {at:0,do:'part',name:'approach'},
  {at:0,do:'inset',show:true},
  {at:.4,do:'chain',id:'chain',x:8,y:8,w:376},
  {at:.8,do:'line',id:'chain',text:'The river was deep, so the bridge was the only way across.'},
  {at:1,do:'camera',x:192,y:24,dur:2.2},
  {at:1.2,do:'walk',who:'#red',by:[-250,0],dur:4.6,stagger:.12},
  {at:2.6,do:'spawn',who:'fr'},
  {at:5.4,do:'camera',x:110,y:24,dur:2.2},
  {at:6,do:'emote',who:'b1',icon:'surprised',dur:1.6},
  {at:6.4,do:'say',who:'r0',text:'Across the bridge!',dur:2.2},
  {at:7.4,do:'label',id:'one-way',text:'one narrow way across',x:415,y:118,align:'center',point:[415,186]},
  {at:10.5,do:'unlabel',id:'one-way'},

  {at:11,do:'part',name:'cross'},
  {at:11,do:'run',who:'r1',to:[326,206],dur:2.6},
  {at:11.2,do:'walk',who:['r4','r5','r6'],by:[-110,0],dur:3,stagger:.3},
  {at:11.4,do:'arrow',id:'charge',team:'red',from:[118,29],to:[84,29],dur:1.6},
  {at:11.5,do:'run',who:'r3',to:[356,206],dur:2.5},
  {at:12,do:'run',who:'r2',to:[386,206],dur:2.4},
  {at:12.2,do:'line',id:'chain',text:'So the Red army could cross only a few at a time.'},
  {at:12.4,do:'label',id:'few',text:'only three fit on the bridge',x:415,y:118,align:'center',point:[420,190],solve:true},
  {at:13.6,do:'walk',who:['b1','b2'],by:[16,0],dur:.6},
  {at:14.3,do:'attack',who:'r1',times:3},
  {at:14.5,do:'attack2',who:['b1','b2'],times:2,stagger:.2},
  {at:15.5,do:'hurt',who:'r1'},
  {at:15.9,do:'attack',who:'r3',times:2},
  {at:16.2,do:'attack',who:'b1',times:2},
  {at:16.6,do:'hurt',who:'r3'},
  {at:17.2,do:'line',id:'chain',text:'So the Blue army stopped them at the bridge.'},
  {at:18,do:'walk',who:['r1','r3','r2'],by:[40,0],dur:1.2,keepFace:true},
  {at:19.2,do:'emote',who:'r1',icon:'dizzy',dur:1.8},
  {at:19.6,do:'emote',who:'b2',icon:'calm',dur:1.4},
  {at:21,do:'tryit'},

  {at:22,do:'part',name:'peace'},
  {at:22,do:'unlabel',id:'few'},
  {at:22.2,do:'walk',who:['r1','r2','r3','r4','r5','r6','r7'],by:[290,8],dur:4.4,stagger:.15},
  {at:22.4,do:'arrow',id:'back',team:'red',from:[88,58],to:[128,58],dur:1.6,dashed:true},
  {at:23.2,do:'line',id:'chain',text:'So the Red army turned back.'},
  {at:24.4,do:'cheer',who:['b1','b2','b3','b4','b5'],state:'jump',times:3,dur:1.8,stagger:.1},
  {at:26.4,do:'walk',who:'b0',to:[388,206],dur:3.2},
  {at:26.4,do:'walk',who:'r0',to:[438,206],dur:2.8},
  {at:29.8,do:'face',who:'r0',face:-1},
  {at:30,do:'say',who:'r0',text:'Let us share the bridge.',dur:2.4},
  {at:32.6,do:'say',who:'b0',text:'Agreed!',dur:1.8},
  {at:33,do:'line',id:'chain',text:'So the two lords agreed to share the bridge.'},
  {at:34.6,do:'emote',who:['b0','r0'],icon:'happy',dur:2.4,stagger:.2},
  {at:35,do:'label',id:'moral',text:'Each consequence became the cause of the next.',x:320,y:240,w:440,align:'center',kind:'title',bold:true},
  {at:38,do:'tryit'}],
 length:38
};
