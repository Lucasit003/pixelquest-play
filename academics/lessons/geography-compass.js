// Elementary topic: the four compass directions. Every answer comes from one rule: clockwise is
// north, east, south, west, and a right turn is one step clockwise. The local model's draft got
// its turning questions wrong, so none of them are written by hand.
const D=['north','east','south','west'],at=i=>D[(i%4+4)%4];
const PLACES=[['the well','the barn'],['the bakery','the school'],['the pond','the tree'],['the gate','the tower'],['the shop','the park'],['the bridge','the mill'],['the church','the market'],['the farm','the river'],['the inn','the library'],['the camp','the lake']];
const SIDE={north:'above',south:'below',east:'to the right of',west:'to the left of'};
export default {
 id:'geography-e-compass',subject:'geography',level:3,grade:2,standard:'C3 D2.Geo.1.K-2; CCSS-aligned map skills',
 title:'The four directions',goal:'Name north, east, south and west, and use them to turn and to read a map.',points:20,
 skills:{rose:'The compass rose',turn:'Turning',map:'Directions on a map'},
 steps:[
  {skill:'rose',say:'A compass rose shows four directions: north, east, south and west.',pic:[{t:'compass'}],eq:'N, E, S, W'},
  {skill:'rose',say:'Going around clockwise, the order is north, east, south, west. Opposites face each other.',pic:[{t:'compass',mark:'south',face:'north'}],eq:'north and south are opposite',
   check:{prompt:'East is on one side of the compass rose. Which direction is straight across from it?',answer:'west',options:['west','north','south'],hint:'East and west face each other across the compass.'}},
  {skill:'turn',say:'If you face north and turn right, you face east. A right turn goes one step clockwise.',pic:[{t:'compass',face:'north',turn:'right'}],eq:'north, turn right, east'},
  {skill:'turn',say:'A left turn goes one step the other way. Facing north, turn left and you face west.',pic:[{t:'compass',face:'north',turn:'left'}],eq:'north, turn left, west',
   check:{prompt:'Mo faces east and turns right. Which way does Mo face now?',answer:'south',options:['south','north','west'],hint:'A right turn goes one step clockwise: north, east, south, west.'}},
  {skill:'turn',say:'Turning around is a half turn. You end up facing the opposite way.',pic:[{t:'compass',face:'east',turn:'around'}],eq:'east, turn around, west'},
  {skill:'map',say:'On most maps, north is at the top. Up is north, down is south, right is east and left is west.',pic:[{t:'compass',from:'the well',to:'the barn',dir:'north'}]},
  {skill:'map',say:'The barn is above the well, so the barn is north of the well.',pic:[{t:'compass',from:'the well',to:'the barn',dir:'north',solve:true}],
   check:{prompt:'On a map with north at the top, the pond is below the tree. Which direction is the pond from the tree?',answer:'south',options:['south','north','east'],hint:'Down on the map is south.'}}],
 items(add){
  D.forEach((d,i)=>{add('rose',`Which direction is opposite ${d}?`,at(i+2),{t:'compass',mark:at(i+2),hint:true},`${d} and ${at(i+2)} face each other.`);
   add('rose',`Going clockwise around a compass, which direction comes after ${d}?`,at(i+1),{t:'compass',mark:at(i+1),hint:true},`Clockwise: north, east, south, west. After ${d} comes ${at(i+1)}.`);
   for(const [turn,k,how] of [['right',1,'Turn right'],['left',-1,'Turn left'],['around',2,'Turn around']])
    add('turn',`You face ${d}. ${how}. Which way do you face now?`,at(i+k),{t:'compass',face:d,turn,hint:true},turn==='around'?`Turning around faces the opposite way: ${at(i+2)}.`:`A ${turn} turn goes one step ${turn==='right'?'clockwise':'the other way'}: ${d} to ${at(i+k)}.`);});
  for(const [a,b] of PLACES)for(const d of D){
   add('map',`On a map with north at the top, ${b} is ${SIDE[d]} ${a}. Which direction is ${b} from ${a}?`,d,{t:'compass',from:a,to:b,dir:d,solve:true,hint:true},`${SIDE[d][0].toUpperCase()+SIDE[d].slice(1)} on a map with north at the top is ${d}.`);
   add('map',`On a map with north at the top, ${b} is ${SIDE[d]} ${a}. Which direction is ${a} from ${b}?`,at(D.indexOf(d)+2),{t:'compass',from:b,to:a,dir:at(D.indexOf(d)+2),solve:true,hint:true},`If ${b} is ${d} of ${a}, then ${a} is the opposite way from ${b}: ${at(D.indexOf(d)+2)}.`);}}};
