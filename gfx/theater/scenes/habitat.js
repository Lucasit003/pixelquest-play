/* Needs and body features on the Oakhaven meadow and lake, for science-e-habitats steps 4 and 6. A rabbit
   grazing by the forest edge darts into the undergrowth when a fox comes by: its hiding place is shelter.
   Then a duck paddles across the lake (webbed feet push against water) while the fox, in its thick coat,
   watches from the bank. Labels use the steps' own words.

   Stage: art/tiled/theater-lake.tmx at zoom 2 (every art pixel 2 x 2). Parts: shelter, features. */
export default {
 id:'habitat',
 title:'Needs and features on the Oakhaven meadow',
 stage:{map:'lake',w:832,h:320},
 view:{x:180,y:104,zoom:2},
 alt:{
  default:'A rabbit, a fox and a duck by the Oakhaven lake.',
  shelter:'A rabbit grazes at the forest edge. A fox comes by and the rabbit darts into the undergrowth to hide; a label calls its hiding place shelter.',
  features:'A duck paddles across the lake while a fox watches from the bank. Labels point to the webbed feet of the duck, pushing against the water, and the thick fur of the fox.'},
 cast:[
  {id:'rabbit',atlas:'theater-bunny',x:300,y:186,face:-1,state:'eat',head:24},
  {id:'fox',atlas:'theater-fox',x:560,y:190,face:-1,head:22,hidden:true},
  {id:'duck',atlas:'theater-duck',x:640,y:290,face:-1,shadow:false,head:28,hidden:true}],
 beats:[
  {at:0,do:'part',name:'shelter'},
  {at:1,do:'spawn',who:'fox',dur:.4},
  {at:1,do:'walk',who:'fox',to:[420,190],dur:3},
  {at:3.4,do:'act',who:'rabbit',state:'idle',dur:.6},
  {at:3.6,do:'emote',who:'rabbit',icon:'surprised',dur:1},
  {at:4.2,do:'run',who:'rabbit',to:[214,196],dur:1},
  {at:5,do:'hide',who:'rabbit',dur:.5},
  {at:5.2,do:'act',who:'fox',state:'alert',dur:1},
  {at:5.6,do:'label',id:'shelter',text:'Shelter: the rabbit\'s hiding place keeps it safe from the fox.',x:620,y:16,align:'right',w:240,point:[214,170],kind:'cause'},
  {at:6.4,do:'act',who:'fox',state:'look',dur:4,loop:true},
  {at:11,do:'tryit'},
  {at:12,do:'unlabel',id:'shelter'},

  {at:12,do:'part',name:'features'},
  {at:12,do:'camera',x:300,y:168,zoom:2,dur:0},
  {at:12,do:'walk',who:'fox',x:380,y:204,dur:0},
  {at:12,do:'face',who:'fox',face:1},
  {at:12.2,do:'spawn',who:'duck',dur:.4},
  {at:12.4,do:'walk',who:'duck',to:[512,288],dur:7},
  {at:13.2,do:'label',id:'feet',follow:'duck',text:'webbed feet push against water',dy:-70,kind:'cause'},
  {at:15.2,do:'label',id:'fur',follow:'fox',text:'thick fur helps keep it warm',dy:-76},
  {at:17.4,do:'label',id:'features',text:'Body features help animals live in their habitats.',x:620,y:250,align:'right',kind:'cause'},
  {at:22,do:'tryit'}],
 length:22
};
