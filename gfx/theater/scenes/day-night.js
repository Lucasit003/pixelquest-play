/* Day and night in the Oakhaven market square, for science-e-day-night-seasons steps 1-3. A globe in the corner
   is seen from above the North Pole with the Sun to its left: the half facing the Sun is lit. As the globe
   turns once, the gold marker for Oakhaven goes from day to dusk to night to dawn, and the square follows it:
   evening light, lamps glowing in the dark (pixelfranek's light, added over the night grade), villagers going
   home and coming back out. Words on screen are the steps' own: daytime, nighttime, dawn, day, dusk, night,
   about 24 hours, sticker in light, turn globe, sticker in dark.

   Stage: art/tiled/theater-plaza.tmx. Camera at (150, 20): screen = stage - (150, 20).
   Parts: half, spin, model. */
const GLOW=[[390,22],[499,238],[557,238],[742,246],[598,200],[630,200],[662,200]].map(([x,y],i)=>({id:`g${i}`,atlas:'theater-glow',x,y,layer:'glow',fx:'add',shadow:false,hidden:true,tags:['lamp']}));
const V=(id,atlas,x,y,face)=>({id,atlas:`theater-villager-${atlas}`,x,y,face,tags:['folk'],head:52});

export default {
 id:'day-night',
 title:'Day and night in Oakhaven',
 stage:{map:'plaza',w:832,h:320},
 view:{x:150,y:20},
 alt:{
  default:'The Oakhaven market square with a globe in the corner showing day and night.',
  half:'Daytime in the market square. The globe in the corner shows the half of Earth facing the Sun lit and the other half dark, with Oakhaven on the lit side.',
  spin:'The globe turns once. Oakhaven moves through day, dusk, night and dawn: the square goes golden, then dark with its lamps glowing and the villagers indoors, then bright again.',
  model:'The globe works like a lamp and a turning ball: the marker, like a sticker, turns from the lit side into the dark side.'},
 globe:{x:14,y:14,w:150,h:118,title:'Earth from above'},
 cast:[...GLOW,V('a','f1',300,214,1),V('b','m2',420,236,-1),V('c','f3',520,206,1)],
 beats:[
  {at:0,do:'part',name:'half'},
  {at:0,do:'globe',show:true},
  {at:.4,do:'walk',who:'a',to:[380,214],dur:4},
  {at:1.4,do:'label',id:'face',text:'Facing the Sun: daytime.',x:180,y:138,point:[214,96]},
  {at:3.4,do:'label',id:'away',text:'Turned away: nighttime.',x:180,y:166},
  {at:5,do:'label',id:'half',text:'At any moment, about half of Earth faces the Sun.',x:630,y:12,align:'right',w:240,kind:'cause'},
  {at:6,do:'walk',who:'c',to:[600,226],dur:4},
  {at:13,do:'unlabel',id:'face'},{at:13,do:'unlabel',id:'away'},{at:13,do:'unlabel',id:'half'},

  {at:13,do:'part',name:'spin'},
  {at:13.2,do:'label',id:'t-day',text:'day',x:630,y:12,align:'right',kind:'cause',bold:true,until:15.4},
  {at:13.6,do:'set',id:'globe',turn:1,dur:12},
  {at:15.4,do:'set',id:'grade',warm:1,dur:1.6},
  {at:16,do:'label',id:'t-dusk',text:'dusk',x:630,y:12,align:'right',kind:'cause',bold:true,until:18.8},
  {at:16.4,do:'walk',who:['a','b','c'],to:[598,262],dur:2.6,stagger:.3},
  {at:17.4,do:'set',id:'grade',warm:0,night:1,dur:2},
  {at:17.6,do:'set',who:'#lamp',alpha:1,dur:1.6,stagger:.15},
  {at:19,do:'hide',who:['a','b','c'],dur:.6},
  {at:19.2,do:'label',id:'t-night',text:'night',x:630,y:12,align:'right',kind:'cause',bold:true,until:22.4},
  {at:22.2,do:'set',id:'grade',night:0,warm:.8,dur:2},
  {at:22.4,do:'label',id:'t-dawn',text:'dawn',x:630,y:12,align:'right',kind:'cause',bold:true,until:25.6},
  {at:22.6,do:'set',who:'#lamp',alpha:0,dur:1.6},
  {at:23.4,do:'spawn',who:['a','b','c'],dur:.6,stagger:.3},
  {at:23.6,do:'walk',who:'a',to:[340,214],dur:3},
  {at:23.9,do:'walk',who:'b',to:[430,236],dur:2.4},
  {at:24.2,do:'walk',who:'c',to:[520,206],dur:2.4},
  {at:24.4,do:'set',id:'grade',warm:0,dur:1.6},
  {at:25.6,do:'label',id:'t-spin',text:'One full spin takes about 24 hours.',x:630,y:12,align:'right',kind:'cause'},
  {at:28,do:'tryit'},
  {at:29,do:'unlabel',id:'t-spin'},

  {at:29,do:'part',name:'model'},
  {at:29,do:'set',id:'globe',turn:0,dur:0},
  {at:29.2,do:'strip',id:'sticker',items:['sticker in light','turn globe','sticker in dark'],x:400,y:240,n:1},
  {at:29.4,do:'label',id:'lamp',text:'The lamp is the Sun; the gold square is the sticker.',x:180,y:138,w:200},
  {at:31,do:'set',id:'globe',turn:.5,dur:4},
  {at:31.2,do:'reveal',id:'sticker',n:2},
  {at:33,do:'set',id:'grade',night:.8,dur:2},
  {at:33.2,do:'set',who:'#lamp',alpha:1,dur:1.4},
  {at:35,do:'reveal',id:'sticker',n:3},
  {at:39,do:'tryit'}],
 length:39
};
