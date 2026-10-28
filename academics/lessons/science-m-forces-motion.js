// Middle School topic (Grade 7, NGSS MS-PS2-2): net force, balanced and unbalanced forces, and F = m × a. Every
// answer is computed from the numbers in its own question with the rules the lesson states: forces along one line
// in the same direction add, forces in opposite directions subtract, and the net force points the way of the
// bigger total; a net force of zero means balanced forces and no change in motion (Newton's first law); and
// a = F ÷ m, F = m × a, m = F ÷ a with force in newtons, mass in kilograms and acceleration in m/s² (Newton's
// second law). The standard asks for qualitative comparisons of force, mass and motion, so the whole-number
// F = m × a work is an extension of it. Every question lists all the forces along its line, and every object is
// fictional.
const OBJ=['crate','sled','cart','wagon','trolley','robot','box','go-kart'];
const S=[5,10,15,20,25,30,35,40,45,50,60];
const MASS=[2,3,4,5,6,8,10,12,15,20,25,40,50],ACC=[1,2,3,4,5,6];
const say=f=>f>0?`${f} N to the right`:`${-f} N to the left`;
const list=fs=>`${fs.slice(0,-1).map(say).join(', ')} and ${say(fs.at(-1))}`;
const sum=fs=>fs.reduce((a,b)=>a+b,0);
const turn=(fs,k)=>fs.map((_,i)=>fs[(i+k)%fs.length]);
const forces=(title,fs)=>({t:'setups',title,head:'Force',rows:fs.map((f,i)=>[`force ${"ABCDEF"[i]}`,`${Math.abs(f)} N`,f>0?'right':'left']),cols:['Size','Direction']});
const head=(o,fs)=>`These forces act on a fictional ${o} along a straight line, and there are no others: ${list(fs)}.`;
const sides=fs=>`${sum(fs.filter(f=>f>0))} N to the right and ${-sum(fs.filter(f=>f<0))} N to the left`;
export default {
id:'science-m-forces-motion',subject:'science',level:4,grade:7,standard:'NGSS MS-PS2-2 (F = m × a with numbers extends the standard’s qualitative comparisons)',
title:'Forces and motion',
goal:'Combine forces along a line into a net force, decide whether forces are balanced, and use F = m × a to link the net force, the mass and the acceleration.',
points:20,
skills:{net:'Finding the net force',balanced:'Balanced and unbalanced forces',fma:'Force, mass and acceleration'},
steps:[
 {skill:'net',say:'A force is a push or a pull, measured in newtons (N). Forces acting along one line combine into one net force. Forces in the same direction add: 20 N and 15 N, both to the right, give a net force of 35 N to the right.',eq:'20 N + 15 N = 35 N to the right',pic:forces('Two pushes on a fictional crate',[20,15])},
 {skill:'net',say:'Forces in opposite directions subtract, and the net force points the way of the bigger one. A pull of 30 N to the right and a pull of 12 N to the left give 30 − 12 = 18 N to the right.',eq:'30 N − 12 N = 18 N to the right',pic:{t:'setups',title:'A fictional tug of war',head:'Force',rows:[['to the right','30 N'],['to the left','12 N'],['net force','18 N to the right']],cols:['Size']},
  check:{prompt:'Try it: a fictional sled is pulled with 50 N to the right while friction pushes on it with 15 N to the left. There are no other forces along the line. What is the size of the net force, in newtons?',answer:35,options:[35,65,15],hint:'The forces point in opposite directions, so subtract: 50 − 15.',pic:forces('A fictional sled',[50,-15])}},
 {skill:'net',say:'With three or more forces, add up each direction first, then subtract. The biggest single force does not decide the direction: 25 N and 20 N to the right beat 40 N to the left, so the net force is 45 − 40 = 5 N to the right.',eq:'25 + 20 = 45 N right,  45 − 40 = 5 N to the right',pic:forces('Three forces on a fictional cart',[25,20,-40])},
 {skill:'balanced',say:'When the net force is zero, the forces are balanced and the motion does not change: an object at rest stays at rest, and a moving object keeps the same speed and direction. 25 N to the right and 25 N to the left are balanced.',eq:'25 N − 25 N = 0 N',pic:forces('Balanced forces on a fictional box',[25,-25])},
 {skill:'balanced',say:'When the net force is not zero, the forces are unbalanced and the motion changes: the object speeds up, slows down or changes direction. Count the newtons, not the number of forces: 10 N and 30 N to the right balance one force of 40 N to the left.',eq:'10 + 30 = 40 N right,  40 N left: balanced',pic:forces('A fictional wagon',[10,30,-40]),
  check:{prompt:'Try it: forces of 15 N to the right, 20 N to the right and 30 N to the left act on a fictional wagon along a straight line, and there are no others. Are the forces balanced or unbalanced?',answer:'unbalanced',options:['balanced','unbalanced'],hint:'Add the forces to the right and compare them with the force to the left.',pic:forces('A fictional wagon',[15,20,-30])}},
 {skill:'fma',say:'Newton’s second law links the net force, the mass and the acceleration: a = F ÷ m. Acceleration is how fast the velocity (the speed in a given direction) changes, in metres per second per second (m/s²). A net force of 12 N on a 4 kg cart gives a = 12 ÷ 4 = 3 m/s², so each second its speed along the line changes by 3 m/s.',eq:'a = F ÷ m = 12 ÷ 4 = 3 m/s²',pic:{t:'setups',title:'A fictional cart',head:'Quantity',rows:[['net force','12 N'],['mass','4 kg'],['acceleration','3 m/s²']],cols:['Value']}},
 {skill:'fma',say:'The same net force gives a smaller mass a bigger acceleration and a bigger mass a smaller one. Turn the law around as needed: F = m × a finds a force, and m = F ÷ a finds a mass.',eq:'F = m × a,  m = F ÷ a',pic:{t:'setups',title:'The same 12 N on two fictional carts',head:'Quantity',rows:[['mass','2 kg','6 kg'],['acceleration','6 m/s²','2 m/s²']],cols:['Light cart','Heavy cart']},
  check:{prompt:'Try it: a fictional 6 kg robot speeds up at 4 m/s². What net force acts on it, in newtons?',answer:24,options:[24,10,1.5],hint:'Multiply the mass by the acceleration: 6 × 4.',pic:{t:'setups',title:'A fictional robot',head:'Quantity',rows:[['mass','6 kg'],['acceleration','4 m/s²'],['net force','?']],cols:['Value']}}},
 {skill:'fma',say:'With several forces, find the net force first, then divide by the mass. 50 N to the right and 20 N to the left on a fictional 5 kg cart give a net force of 30 N, so a = 30 ÷ 5 = 6 m/s².',eq:'50 − 20 = 30 N,  30 ÷ 5 = 6 m/s²',pic:forces('A fictional 5 kg cart',[50,-20])}],
progression:{requires:['science-m-speed','science-e-push-pull'],operations:2,demand:'Add the forces on each side, subtract to get the size and direction of the net force, decide whether it is zero, and multiply or divide with F = m × a.'},
items(add){
 /* The size of the net force: two forces the same way, two opposite, and three in a mix. Every other run of four
    sets is mirrored, so the forces point left as often as right. */
 let n=0;
 for(let k=0;n<24&&k<60;k++){const sh=k%4,a=S[k%11],b=S[(k*3+2)%11],c=S[(k*5+4)%11];
  let fs=sh===0?[a,b]:sh===1?[S[(k+5)%11],-S[(k*2+1)%11]]:sh===2?[a,S[(k+3)%11],-c]:[S[(k+7)%11],-S[(k+1)%11],-S[(k*7+2)%11]];
  if((k>>2)%2)fs=fs.map(f=>-f);fs=turn(fs,k%fs.length);const F=sum(fs);if(F===0)continue;n++;
  add('net',`${head(OBJ[k%OBJ.length],fs)} What is the size of the net force, in newtons?`,Math.abs(F),forces(`Forces on a fictional ${OBJ[k%OBJ.length]}`,fs),`That is ${sides(fs)}, so the net force is ${Math.abs(F)} N to the ${F>0?'right':'left'}.`);}
 /* The direction of the net force. In the first sets two smaller forces beat one bigger force, so the biggest
    single force never answers it on its own; the rest point the way of their biggest force. */
 const TRAP=[[20,15,30],[25,10,30],[25,20,40],[30,15,40],[35,10,40],[30,20,45],[25,25,45],[35,15,45],[30,25,50],[35,20,50],[40,15,50],[35,30,60],[40,25,60],[45,20,60]].map(([a,b,c])=>[a,b,-c]);
 const PLAIN=[[40,-15],[35,-20],[50,-10],[25,-5],[45,-30],[60,-25],[50,-20,-15],[45,-10,-20],[60,-15,-25],[40,-10,-15],[55,-20,-30],[30,-5,-10]];
 const dirs=[];for(let i=0;i<Math.max(TRAP.length,PLAIN.length);i++){if(TRAP[i])dirs.push(TRAP[i]);if(PLAIN[i])dirs.push(PLAIN[i]);}
 dirs.forEach((s,i)=>{let fs=turn(s,i%s.length);if(i%4>=2)fs=fs.map(f=>-f);const F=sum(fs),o=OBJ[(i+3)%OBJ.length],way=F>0?'right':'left';
  add('net',`${head(o,fs)} Which way does the net force point: left or right?`,way,forces(`Forces on a fictional ${o}`,fs),`That is ${sides(fs)}, so the net force is ${Math.abs(F)} N to the ${way}.`,[`to the ${way}`]);});
 /* Balanced or unbalanced: half of each. Many balanced sets have more forces on one side, and many unbalanced
    sets have the same number on each side, so counting forces never answers it. */
 const BAL=[[10,-10],[25,-25],[40,-40],[10,30,-40],[15,20,-35],[25,20,-45],[5,35,-40],[20,30,-50],[15,15,-30],[20,30,-15,-35],[10,40,-25,-25],[35,15,-20,-30],[45,-20,-25],[60,-35,-25]];
 const UNB=[[30,-25],[40,-50],[20,-5],[50,-65],[10,30,-35],[15,20,-50],[25,20,-30],[20,30,-60],[20,30,-15,-30],[10,40,-25,-35],[35,15,-20,-10],[45,-20,-40],[60,-35,-5],[15,15,-35]];
 const mix=[];for(let i=0;i<BAL.length;i++)mix.push(BAL[i],UNB[i]);
 mix.forEach((s,i)=>{let fs=turn(s,(i>>1)%s.length);if(i%3===1)fs=fs.map(f=>-f);const F=sum(fs),o=OBJ[(i+5)%OBJ.length],ans=F===0?'balanced':'unbalanced';
  add('balanced',`${head(o,fs)} Are the forces balanced or unbalanced?`,ans,forces(`Forces on a fictional ${o}`,fs),F===0?`That is ${sides(fs)}: the totals are equal, so the net force is zero and the forces are balanced.`:`That is ${sides(fs)}: the totals differ, so the net force is ${Math.abs(F)} N and the forces are unbalanced.`);});
 /* One more force to balance an unbalanced set: it points the other way and matches the net force. */
 [...UNB,...PLAIN.slice(0,6)].forEach((s,i)=>{let fs=turn(s,(i+1)%s.length);if(i%2)fs=fs.map(f=>-f);const F=sum(fs),o=OBJ[(i+1)%OBJ.length],opp=F>0?'left':'right';
  add('balanced',`${head(o,fs)} One more force is added, pointing to the ${opp}. How many newtons must it be for the forces to be balanced?`,Math.abs(F),forces(`Forces on a fictional ${o}`,fs),`That is ${sides(fs)}, a net force of ${Math.abs(F)} N to the ${F>0?'right':'left'}. A force of ${Math.abs(F)} N to the ${opp} brings the net force to zero.`);});
 /* F = m × a three ways, then a net force from several forces divided by the mass. */
 MASS.forEach((m,i)=>{const a1=ACC[(i*2+1)%6],a2=ACC[(i*5+2)%6],a3=ACC[(i+4)%6],o=OBJ[i%OBJ.length],p=OBJ[(i+2)%OBJ.length],q=OBJ[(i+4)%OBJ.length];
  add('fma',`A net force of ${m*a1} N acts on a fictional ${m} kg ${o}. What is its acceleration, in m/s²?`,a1,{t:'setups',title:`A fictional ${o}`,head:'Quantity',rows:[['net force',`${m*a1} N`],['mass',`${m} kg`],['acceleration','?']],cols:['Value']},`a = F ÷ m = ${m*a1} ÷ ${m} = ${a1} m/s².`);
  add('fma',`What net force, in newtons, gives a fictional ${m} kg ${p} an acceleration of ${a2} m/s²?`,m*a2,{t:'setups',title:`A fictional ${p}`,head:'Quantity',rows:[['mass',`${m} kg`],['acceleration',`${a2} m/s²`],['net force','?']],cols:['Value']},`F = m × a = ${m} × ${a2} = ${m*a2} N.`);
  add('fma',`A net force of ${m*a3} N gives a fictional ${q} an acceleration of ${a3} m/s². What is its mass, in kg?`,m,{t:'setups',title:`A fictional ${q}`,head:'Quantity',rows:[['net force',`${m*a3} N`],['acceleration',`${a3} m/s²`],['mass','?']],cols:['Value']},`m = F ÷ a = ${m*a3} ÷ ${a3} = ${m} kg.`);});
 [[2,5,[15]],[3,4,[10]],[4,3,[20]],[5,2,[25]],[6,5,[10,15]],[8,2,[24]],[10,3,[20,15]],[12,2,[30]],[5,6,[20,5]],[4,5,[15,10]],[20,2,[35]],[10,4,[25,30]]].forEach(([m,a,back],i)=>{const F=m*a,push=F+sum(back);
  let fs=turn([push,...back.map(b=>-b)],i%(back.length+1));if(i%2)fs=fs.map(f=>-f);const o=OBJ[(i+6)%OBJ.length];
  add('fma',`These forces act on a fictional ${m} kg ${o} along a straight line, and there are no others: ${list(fs)}. What is its acceleration, in m/s²?`,a,forces(`Forces on a fictional ${m} kg ${o}`,fs),`That is ${sides(fs)}, a net force of ${F} N, so a = F ÷ m = ${F} ÷ ${m} = ${a} m/s².`);});
}
};
