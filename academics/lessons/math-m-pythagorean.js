// Middle School topic (Grade 8, CCSS 8.G.B.7-8): the Pythagorean theorem. Every right triangle is a whole-
// number triple (a² + b² = c², built from scaled Pythagorean triples), so every missing side is exact; the
// "is it a right triangle" questions test a² + b² against c² directly. Places are fictional.
const TRIPLES=[[3,4,5],[5,12,13],[8,15,17],[7,24,25],[20,21,29],[9,40,41]];
const SCALED=[];for(const [a,b,c] of TRIPLES)for(const k of [1,2,3])if(c*k<=60)SCALED.push([a*k,b*k,c*k]);
const tri=(a,b,c,label)=>({t:'setups',title:'A right triangle',head:'Side',rows:[['leg a',a],['leg b',b],['hypotenuse c',c]].map(([n,v])=>[n,v==null?'?':`${v}`]),cols:[label||'Length']});
export default {
id:'math-m-pythagorean',subject:'math',level:4,grade:8,standard:'CCSS 8.G.B.7, 8.G.B.8',
title:'The Pythagorean theorem',
goal:'Find a missing side of a right triangle with a² + b² = c², find the distance between two points, and test whether a triangle is right-angled.',
points:20,
skills:{hyp:'The longest side',leg:'A missing leg',check:'Is it a right triangle'},
steps:[
 {skill:'hyp',say:'In a right triangle the side opposite the right angle is the hypotenuse, c, the longest side. The other two sides are the legs, a and b, and a² + b² = c².',eq:'a² + b² = c²',pic:tri(3,4,5)},
 {skill:'hyp',say:'With legs 3 and 4: 3² + 4² = 9 + 16 = 25, and the square root of 25 is 5, so the hypotenuse is 5.',eq:'√(9 + 16) = √25 = 5',pic:tri(3,4,5),
  check:{prompt:'Try it: a right triangle has legs 6 and 8. How long is the hypotenuse?',answer:10,options:[10,14,100],hint:'6² + 8² = 36 + 64. Find the square root.',pic:tri(6,8,null)}},
 {skill:'leg',say:'To find a leg, take the known leg\'s square away from the hypotenuse\'s square. With hypotenuse 13 and leg 5: 13² - 5² = 169 - 25 = 144, and √144 = 12.',eq:'√(169 - 25) = 12',pic:tri(5,null,13)},
 {skill:'leg',say:'The distance between two points on a grid is a hypotenuse. From (1, 2) to (4, 6), the legs are 4 - 1 = 3 across and 6 - 2 = 4 up, so the distance is 5.',eq:'√(3² + 4²) = 5',pic:{t:'setups',title:'Two points on a grid',head:'',rows:[['x','1','4'],['y','2','6']],cols:['Point A','Point B']},
  check:{prompt:'Try it: a right triangle has a hypotenuse of 17 and one leg of 8. How long is the other leg?',answer:15,options:[15,9,25],hint:'17² - 8² = 289 - 64.',pic:tri(8,null,17)}},
 {skill:'check',say:'The theorem also works backwards: a triangle is right-angled exactly when the two shorter sides\' squares add up to the longest side\'s square. 9, 12 and 15: 81 + 144 = 225 = 15², so yes.',pic:tri(9,12,15,'Side')},
 {skill:'check',say:'If the squares do not match, there is no right angle. 4, 5 and 6: 16 + 25 = 41, but 6² is 36, so no.',pic:{t:'setups',title:'A triangle',head:'Side',rows:[['short','4'],['middle','5'],['longest','6']],cols:['Length']},
  check:{prompt:'Try it: a triangle has sides 7, 24 and 25. Is it a right triangle: yes or no?',answer:'yes',options:['yes','no'],hint:'Compare 7² + 24² with 25².',pic:{t:'setups',title:'A triangle',head:'Side',rows:[['short','7'],['middle','24'],['longest','25']],cols:['Length']}}}],
progression:{requires:['math-m-expressions-equations'],operations:3,demand:'Square, add or subtract, and take a square root; read grid distances as legs; test a² + b² against c².'},
items(add){
 const PLACES=['a ramp','a ladder against a wall','a kite string','a path across a field','a brace on a gate'];
 SCALED.forEach(([a,b,c],i)=>{
  add('hyp',`A right triangle has legs ${a} and ${b}. How long is the hypotenuse?`,c,tri(a,b,null),`${a}² + ${b}² = ${a*a} + ${b*b} = ${c*c}, and √${c*c} = ${c}.`);
  add('hyp',`A right triangle has legs ${b} and ${a}. What is the length of its longest side?`,c,tri(b,a,null),`${b}² + ${a}² = ${c*c}, and √${c*c} = ${c}.`);
  add('leg',`A right triangle has a hypotenuse of ${c} and one leg of ${a}. How long is the other leg?`,b,tri(a,null,c),`${c}² - ${a}² = ${c*c} - ${a*a} = ${b*b}, and √${b*b} = ${b}.`);
  add('leg',`A right triangle has a hypotenuse of ${c} and one leg of ${b}. How long is the other leg?`,a,tri(null,b,c),`${c}² - ${b}² = ${c*c-b*b}, and √${a*a} = ${a}.`);
  add('hyp',`For ${PLACES[i%PLACES.length]}, a fictional builder measures ${a} m across and ${b} m up at a right angle. How long is the slanted side, in metres?`,c,tri(a,b,null,'Metres'),`√(${a*a} + ${b*b}) = √${c*c} = ${c} m.`);});
 /* Grid distances: a triple's legs placed between two points. */
 SCALED.slice(0,12).forEach(([a,b,c],i)=>{const x1=(i*3)%7-2,y1=(i*5)%9-3,flip=i%2;
  const [p,q]=flip?[[x1,y1],[x1+b,y1+a]]:[[x1,y1],[x1+a,y1+b]];
  add('leg',`What is the distance between the points (${p[0]}, ${p[1]}) and (${q[0]}, ${q[1]})?`,c,{t:'setups',title:'Two points on a grid',head:'',rows:[['x',`${p[0]}`,`${q[0]}`],['y',`${p[1]}`,`${q[1]}`]],cols:['Point A','Point B'],hint:true},`The legs are ${Math.abs(q[0]-p[0])} across and ${Math.abs(q[1]-p[1])} up, so the distance is √(${(q[0]-p[0])**2} + ${(q[1]-p[1])**2}) = ${c}.`);});
 /* Right triangle or not: half are triples, half are near misses (the longest side 1 off). */
 SCALED.forEach(([a,b,c],i)=>{
  add('check',`A triangle has sides ${a}, ${b} and ${c}. Is it a right triangle: yes or no?`,'yes',{t:'setups',title:'A triangle',head:'Side',rows:[['short',`${Math.min(a,b)}`],['middle',`${Math.max(a,b)}`],['longest',`${c}`]],cols:['Length']},`${a}² + ${b}² = ${a*a+b*b} = ${c}², so it is a right triangle.`);
  const c2=c+(i%2?1:-1);
  add('check',`A triangle has sides ${a}, ${b} and ${c2}. Is it a right triangle: yes or no?`,'no',{t:'setups',title:'A triangle',head:'Side',rows:[['short',`${Math.min(a,b)}`],['middle',`${Math.max(a,b)}`],['longest',`${c2}`]],cols:['Length']},`${a}² + ${b}² = ${a*a+b*b}, but ${c2}² = ${c2*c2}, so it is not a right triangle.`);});
}
};
