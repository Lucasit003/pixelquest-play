/* One and more than one on the Oakhaven farm, for language-e-plurals steps 1, 2, 3, 5 and 7 (the Warrior's
   first lesson). One cat, then five cats; one box, then two boxes; one fox, then two foxes. The word sits at
   the top: the base word in cream, the ending that decides the plural underlined, the plural ending in gold.
   Words and endings are the steps' own (cat, cats, box, boxes, fox, foxes); the step-2 Try-it (frog) is never
   shown, and step 4 (bus, dish) and step 6 (ball, then the bench Try-it) keep their own pictures.

   Owner #41 (8 Oct): "cat and then multiple cats". The cats are PixelLab cats (theater-cat-orange, -grey, -black, -calico),
   big enough to read at zoom 2: one orange cat sits alone, then four more come running and sit beside it.

   Stage: art/tiled/theater-farm.tmx; the cats at zoom 2 on (300, 160), the boxes at zoom 3 (every art pixel 3 x 3) below
   the wheat field, the forest edge for the foxes. Parts: one, add-s, es, look, foxes. */
const CAT=(id,n,x,y,face,hidden=true)=>({id,atlas:`theater-cat-${n}`,x,y,face,state:'sit',head:34,hidden,shadow:false,tags:['cat']});

export default {
 id:'plurals',
 title:'One and more than one on the Oakhaven farm',
 stage:{map:'farm',w:832,h:320},
 view:{x:300,y:160,zoom:2},
 alt:{
  default:'Cats, boxes and foxes on the Oakhaven farm, with the word for them at the top.',
  one:'One cat sits on the farm meadow. The word at the top reads cat: one cat is singular.',
  'add-s':'Four more cats come running and sit beside the first. The word becomes cats, with the s added in gold: more than one is plural.',
  es:'A box stands by the barn, then a second one. The word becomes boxes: box ends in x, so it takes es.',
  look:'A fox steps out of the trees. The word fox is shown with its last letter, x, underlined.',
  foxes:'A second fox joins the first. The word becomes foxes, with es added after the x.'},
 cast:[CAT('c1','orange',462,264,1,false),CAT('c2','grey',660,268,-1),CAT('c3','black',680,282,-1),CAT('c4','calico',700,274,-1),CAT('c5','grey',720,288,-1),
  {id:'b1',atlas:'theater-crate',x:452,y:282,face:1,hidden:true},{id:'b2',atlas:'theater-crate',x:488,y:282,face:1,hidden:true},
  {id:'f1',atlas:'theater-fox',x:20,y:250,face:1,head:22,hidden:true},{id:'f2',atlas:'theater-fox',x:10,y:262,face:1,head:22,hidden:true}],
 beats:[
  {at:0,do:'part',name:'one'},
  {at:.4,do:'word',id:'w',base:'cat',x:320,y:10},
  {at:1.2,do:'act',who:'c1',state:'lick',dur:2.4,loop:true},
  {at:2,do:'label',id:'sing',text:'one cat: singular',follow:'c1',dy:-96,kind:'cause'},
  {at:4.4,do:'act',who:'c1',state:'meow',dur:.6},
  {at:8,do:'unlabel',id:'sing'},

  {at:8,do:'part',name:'add-s'},
  {at:8.2,do:'spawn',who:['c2','c3','c4','c5'],dur:.2},
  {at:8.2,do:'run',who:'c2',to:[528,262],dur:1.4},
  {at:8.4,do:'run',who:'c3',to:[386,280],dur:1.8},
  {at:8.6,do:'run',who:'c4',to:[566,280],dur:1.6},
  {at:8.8,do:'run',who:'c5',to:[464,298],dur:1.9},
  {at:10,do:'word',id:'w',base:'cat',suffix:'s',x:320,y:10},
  {at:10.4,do:'label',id:'plural',text:'more than one: plural, so add -s',x:320,y:66,align:'center',kind:'cause'},
  {at:10.8,do:'act',who:['c2','c3','c4','c5'],state:'sitdown',dur:.7},
  {at:11.2,do:'act',who:['c2','c3','c4','c5'],state:'sit',dur:4.8,loop:true},
  {at:11.2,do:'act',who:'c2',state:'meow',dur:.6},
  {at:14.9,do:'tryit'},
  {at:15,do:'unlabel',id:'plural'},

  {at:15,do:'part',name:'es'},
  {at:15,do:'hide',who:['c1','c2','c3','c4','c5'],dur:.4},
  {at:15,do:'camera',x:384,y:198,zoom:3,dur:0},
  {at:15.2,do:'spawn',who:'b1',dur:.4},
  {at:15.4,do:'word',id:'w',base:'box',mark:1,x:320,y:10},
  {at:16,do:'label',id:'one-box',text:'one box',follow:'b1',dy:-128},
  {at:18,do:'spawn',who:'b2',dur:.4},
  {at:18.4,do:'unlabel',id:'one-box'},
  {at:18.6,do:'word',id:'w',base:'box',suffix:'es',mark:1,x:320,y:10},
  {at:19,do:'label',id:'x',text:'box ends in x, so add -es: boxes',x:320,y:66,align:'center',kind:'cause'},
  {at:23,do:'unlabel',id:'x'},

  {at:23,do:'part',name:'look'},
  {at:23,do:'camera',x:40,y:196,zoom:3,dur:0},
  {at:23,do:'word',id:'w',base:'fox',mark:1,x:320,y:10},
  {at:23.2,do:'spawn',who:'f1',dur:.4},
  {at:23.2,do:'walk',who:'f1',to:[150,250],dur:2.4},
  {at:25.6,do:'act',who:'f1',state:'look',dur:5,loop:true},
  {at:26,do:'label',id:'end',text:'Look at the end. Is it s, x, z, sh or ch? Then add -es.',x:320,y:66,align:'center',w:420,kind:'cause'},
  {at:31,do:'unlabel',id:'end'},

  {at:31,do:'part',name:'foxes'},
  {at:31.2,do:'spawn',who:'f2',dur:.4},
  {at:31.2,do:'walk',who:'f2',to:[108,262],dur:2.4},
  {at:33.8,do:'word',id:'w',base:'fox',suffix:'es',mark:1,x:320,y:10},
  {at:34.2,do:'act',who:'f2',state:'idle',dur:4,loop:true},
  {at:34.4,do:'label',id:'rule',text:'Look at the end, then add -s or -es.',x:320,y:66,align:'center',kind:'cause'},
  {at:38.9,do:'act',who:'f1',state:'idle',dur:.1}],
 length:39
};
