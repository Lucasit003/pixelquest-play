// Middle School topic (Grade 6, NGSS MS-PS3-1): kinetic energy, mass and speed. The lesson states the model it
// uses, KE = ½ × m × v² (mass in kilograms, speed in metres per second, energy in joules), and every answer is
// computed from the numbers in its own question with that model: a kinetic energy from a mass and a speed, the
// new energy after the mass or the speed is multiplied (energy scales with the mass and with the square of
// the speed), and which of two objects has more. Small whole numbers only; every object is fictional.
const OBJ=[{n:'cart',m:[2,4,6,8,10],v:[1,2,3,4,5,6]},{n:'wagon',m:[5,12,15,20],v:[1,2,3,4]},{n:'bowling ball',m:[4,5,6,7],v:[2,3,4,5]},{n:'skateboarder',m:[40,45,50,60],v:[1,2,3,4,5]}];
const KE=(m,v)=>m*v*v/2;
/* What happens to the mass and the speed, and the factor the model gives for the energy. */
const CH=[{say:'Its mass is doubled while its speed stays the same.',mass:'× 2',speed:'same',f:2,why:'Doubling the mass doubles the kinetic energy'},
 {say:'Its mass is tripled while its speed stays the same.',mass:'× 3',speed:'same',f:3,why:'Tripling the mass triples the kinetic energy'},
 {say:'Its speed is doubled while its mass stays the same.',mass:'same',speed:'× 2',f:4,why:'Doubling the speed multiplies the kinetic energy by 2 × 2 = 4'},
 {say:'Its speed is tripled while its mass stays the same.',mass:'same',speed:'× 3',f:9,why:'Tripling the speed multiplies the kinetic energy by 3 × 3 = 9'},
 {say:'Its mass and its speed are both doubled.',mass:'× 2',speed:'× 2',f:8,why:'Doubling the mass gives × 2 and doubling the speed gives × 4, so the kinetic energy is multiplied by 2 × 4 = 8'}];
const LOADS=['cart','wagon','toy truck','go-kart','trolley','sled'];
/* Mass (kg) and speed (m/s) pairs for the comparisons, each giving a whole number of joules. */
const MV=[[1,4],[1,6],[1,8],[2,3],[2,5],[2,6],[3,2],[3,4],[4,1],[4,3],[4,5],[5,2],[6,1],[6,3],[8,1],[8,2],[10,1],[10,2],[12,1]];
const PAIR_OBJ=['cart','sled','robot','wagon'];
const cap=s=>s[0].toUpperCase()+s.slice(1);
export default {
id:'science-m-kinetic-energy',subject:'science',level:4,grade:6,standard:'NGSS MS-PS3-1',
title:'Kinetic energy, mass and speed',
goal:'Work out kinetic energy with the model KE = ½ × m × v², say how it changes when the mass or the speed changes, and compare two moving objects.',
points:20,
skills:{energy:'Working out kinetic energy',change:'Changing the mass or the speed',compare:'Comparing two moving objects'},
steps:[
 {skill:'energy',say:'Kinetic energy is the energy an object has because it is moving. A rolling ball has kinetic energy, and the same ball at rest has none. Energy is measured in joules, written J.',pic:{t:'setups',title:'Moving or at rest',head:'Object',rows:[['rolling ball','yes'],['ball at rest','none']],cols:['Kinetic energy']}},
 {skill:'energy',say:'This topic uses the model KE = ½ × m × v², with the mass m in kilograms and the speed v in metres per second, which gives the energy in joules. A fictional 4 kg cart at 3 m/s has ½ × 4 × 3 × 3 = 18 J.',eq:'KE = ½ × 4 × 3² = ½ × 4 × 9 = 18 J',pic:{t:'setups',title:'A fictional cart',head:'Quantity',rows:[['mass','4 kg'],['speed','3 m/s'],['speed × speed','9'],['kinetic energy','18 J']],cols:['The cart']},
  check:{prompt:'Try it: a fictional 6 kg ball rolls at 2 m/s. Using KE = ½ × m × v², what is its kinetic energy in joules?',answer:12,options:[12,6,24,72],hint:'Square the speed first: 2 × 2 = 4. Then work out ½ × 6 × 4.',pic:{t:'setups',title:'A fictional ball',head:'Quantity',rows:[['mass','6 kg'],['speed','2 m/s'],['kinetic energy','?']],cols:['The ball']}}},
 {skill:'change',say:'In the model, kinetic energy grows in step with mass. At the same speed, twice the mass gives twice the kinetic energy, and three times the mass gives three times the energy.',eq:'½ × 2 × 3² = 9 J,  ½ × 4 × 3² = 18 J',pic:{t:'setups',title:'Same speed, double the mass',head:'Quantity',rows:[['mass','2 kg','4 kg'],['speed','3 m/s','3 m/s'],['kinetic energy','9 J','18 J']],cols:['Cart 1','Cart 2']}},
 {skill:'change',say:'Speed counts twice, because it is squared. Doubling the speed makes the kinetic energy 2 × 2 = 4 times as big, and tripling the speed makes it 3 × 3 = 9 times as big. A 2 kg cart has 9 J at 3 m/s and 36 J at 6 m/s.',eq:'½ × 2 × 3² = 9 J,  ½ × 2 × 6² = 36 J',pic:{t:'tape',title:'Kinetic energy of a 2 kg cart',rows:[{label:'at 3 m/s',n:1},{label:'at 6 m/s',n:4}],groups:1},
  check:{prompt:'Try it: a fictional skateboard has 25 J of kinetic energy. Its speed doubles and its mass stays the same. How many joules of kinetic energy does it have now?',answer:100,options:[100,50,625],hint:'Doubling the speed multiplies the kinetic energy by 2 × 2 = 4.',pic:{t:'setups',title:'A fictional skateboard',head:'Quantity',rows:[['kinetic energy before','25 J'],['mass','same'],['speed','× 2'],['kinetic energy after','?']],cols:['The skateboard']}}},
 {skill:'change',say:'Changes multiply together. Doubling the mass gives × 2 and doubling the speed gives × 4, so doubling both gives 2 × 4 = 8 times the kinetic energy.',eq:'2 × 4 = 8',pic:{t:'setups',title:'Double the mass and the speed',head:'Change',rows:[['mass × 2','energy × 2'],['speed × 2','energy × 4'],['both','energy × 8']],cols:['Kinetic energy']}},
 {skill:'compare',say:'To compare two objects, work out each kinetic energy. A fictional 8 kg cart at 2 m/s has 16 J, but a 2 kg ball at 6 m/s has 36 J. The lighter, faster ball has more.',eq:'½ × 8 × 2² = 16 J,  ½ × 2 × 6² = 36 J',pic:{t:'setups',title:'Heavy and slow, light and fast',head:'Quantity',rows:[['mass','8 kg','2 kg'],['speed','2 m/s','6 m/s'],['kinetic energy','16 J','36 J']],cols:['Cart','Ball']}},
 {skill:'compare',say:'Because the speed is squared, a light, fast object can have more kinetic energy than a heavy, slow one. Work out both energies before you decide.',pic:{t:'setups',title:'Two fictional carts',head:'Quantity',rows:[['mass','1 kg','4 kg'],['speed','8 m/s','3 m/s']],cols:['Cart P','Cart Q']},
  check:{prompt:'Try it: cart P has a mass of 1 kg and moves at 8 m/s. Cart Q has a mass of 4 kg and moves at 3 m/s. Which has more kinetic energy: P or Q?',answer:'P',options:['P','Q'],hint:'P has ½ × 1 × 8 × 8 and Q has ½ × 4 × 3 × 3.',pic:{t:'setups',title:'Two fictional carts',head:'Quantity',rows:[['mass','1 kg','4 kg'],['speed','8 m/s','3 m/s']],cols:['Cart P','Cart Q']}}}],
progression:{requires:['science-e-push-pull','math-e-multiply-bigger','math-e-order-of-operations'],operations:3,demand:'Square the speed before multiplying, halve the product, scale an energy by the mass factor and the square of the speed factor, and compare two computed energies.'},
items(add){
 /* Kinetic energy from a mass and a speed: every second combination that gives whole joules. */
 let k=0;
 for(const o of OBJ)for(const m of o.m)for(const v of o.v){if((m*v*v)%2)continue;if(k++%2)continue;
  add('energy',`A fictional ${m} kg ${o.n} moves at ${v} m/s. Using KE = ½ × m × v², how many joules of kinetic energy does the ${o.n} have?`,KE(m,v),{t:'setups',title:`A fictional ${o.n}`,head:'Quantity',rows:[['mass',`${m} kg`],['speed',`${v} m/s`],['kinetic energy','?']],cols:[`The ${o.n}`]},`KE = ½ × ${m} × ${v}² = ½ × ${m} × ${v*v} = ${KE(m,v)} J.`);}
 /* A change to the mass or the speed: three different changes for each starting energy. */
 [6,8,10,12,15,16,20,24,25,30,36,40,45,50,60].forEach((E,i)=>{for(let j=0;j<3;j++){const ch=CH[(i*3+j)%CH.length],o=LOADS[(i+j)%LOADS.length];
  add('change',`A fictional ${o} has ${E} J of kinetic energy. ${ch.say} How many joules of kinetic energy does it have now?`,E*ch.f,{t:'setups',title:`A fictional ${o}`,head:'Quantity',rows:[['kinetic energy before',`${E} J`],['mass',ch.mass],['speed',ch.speed],['kinetic energy after','?']],cols:[`The ${o}`]},`${ch.why}: ${E} × ${ch.f} = ${E*ch.f} J.`);}});
 /* Two objects: different masses and different energies. Half the pairs have the heavier one holding less
    energy, so mass alone never answers it; which letter wins alternates. A third ask how many joules more. */
 const trap=[],plain=[];
 for(let i=0;i<MV.length;i++)for(let j=i+1;j<MV.length;j++){const [a,b]=[MV[i],MV[j]];if(a[0]===b[0]||KE(...a)===KE(...b))continue;const heavy=a[0]>b[0]?a:b;(KE(...heavy)<KE(...(heavy===a?b:a))?trap:plain).push([a,b]);}
 const pairs=[];for(let i=0;pairs.length<60&&i<Math.max(trap.length,plain.length);i++){if(trap[i*2])pairs.push(trap[i*2]);if(plain[i*2])pairs.push(plain[i*2]);}
 pairs.forEach(([x,y],i)=>{const [A,B]=i%4<2?[x,y]:[y,x],ka=KE(...A),kb=KE(...B),win=ka>kb?'A':'B',o=PAIR_OBJ[i%PAIR_OBJ.length],O=cap(o);
  const head=`Two fictional ${o}s are moving. ${O} A has a mass of ${A[0]} kg and moves at ${A[1]} m/s. ${O} B has a mass of ${B[0]} kg and moves at ${B[1]} m/s.`;
  const pic={t:'setups',title:`Two fictional ${o}s`,head:'Quantity',rows:[['mass',`${A[0]} kg`,`${B[0]} kg`],['speed',`${A[1]} m/s`,`${B[1]} m/s`]],cols:[`${O} A`,`${O} B`]};
  const why=`A has ½ × ${A[0]} × ${A[1]}² = ${ka} J and B has ½ × ${B[0]} × ${B[1]}² = ${kb} J`;
  if(i%3===2)add('compare',`${head} How many more joules of kinetic energy does the ${o} with more kinetic energy have?`,Math.abs(ka-kb),pic,`${why}, so the difference is ${Math.max(ka,kb)} - ${Math.min(ka,kb)} = ${Math.abs(ka-kb)} J.`);
  else add('compare',`${head} Which ${o} has more kinetic energy: A or B?`,win,pic,`${why}, so ${win} has more.`,[`${o} ${win.toLowerCase()}`]);});
}
};
