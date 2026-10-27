// Middle School topic (Grade 8, NGSS MS-PS2-4): gravity, mass and weight. Every answer is computed from the
// numbers in its own question with weight = mass × g, where g is the gravitational field strength each question
// states (Earth questions say they use 9.8 N/kg). Mass never changes from one world to another; only the weight
// does. Planets, moons and objects are fictional, and every value is exact.
const r2=x=>Math.round(x*100)/100;
const tab=(title,rows)=>({t:'setups',title,head:'',rows,cols:['Value']});
const OBJ=['crate','rover','backpack','drill','probe','tent','toolbox','water tank','robot','sled'];
const PL=['Vell','Orra','Tesk','Mirin','Kald','Brennic','Pallo','Quent'];
export default {
id:'science-m-gravity-weight',subject:'science',level:4,grade:8,standard:'NGSS MS-PS2-4',
title:'Gravity, mass and weight',
goal:'Tell mass from weight, find a weight with weight = mass × g, find a mass from a weight, and work out a weight on another world.',
points:20,
skills:{weight:'Weight from mass',mass:'Mass from weight',worlds:'Weight on other worlds'},
steps:[
 {skill:'weight',say:'Mass is the amount of matter in an object, measured in kilograms (kg). Weight is the force of gravity pulling on the object, measured in newtons (N). An object’s mass is the same everywhere, but its weight depends on how strongly gravity pulls where it is.',pic:tab('Mass and weight',[['mass','kilograms, the same everywhere'],['weight','newtons, the pull of gravity']])},
 {skill:'weight',say:'Weight = mass × g, where g is the gravitational field strength in newtons for every kilogram. Near Earth’s surface g is about 9.8 N/kg, so a 10 kg bag weighs about 10 × 9.8 = 98 N.',eq:'W = m × g = 10 × 9.8 = 98 N',pic:tab('A 10 kg bag on Earth',[['mass','10 kg'],['g','9.8 N/kg'],['weight','98 N']]),
  check:{prompt:'Try it: on a fictional planet g = 4 N/kg. What does a fictional 15 kg rover weigh there, in newtons?',answer:60,options:[60,19,3.75],hint:'Multiply the mass by g: 15 × 4.',pic:tab('A fictional rover',[['mass','15 kg'],['g','4 N/kg'],['weight','?']])}},
 {skill:'mass',say:'Turn the rule around to find a mass: mass = weight ÷ g. A fictional crate that weighs 120 N where g = 6 N/kg has a mass of 120 ÷ 6 = 20 kg.',eq:'m = W ÷ g = 120 ÷ 6 = 20 kg',pic:tab('A fictional crate',[['weight','120 N'],['g','6 N/kg'],['mass','20 kg']])},
 {skill:'mass',say:'Taking an object to another world changes its weight but not its mass. The 20 kg crate is still 20 kg on the Moon, where g is about 1.6 N/kg, so it weighs only about 20 × 1.6 = 32 N there.',pic:tab('The same crate on the Moon',[['mass','20 kg'],['g','1.6 N/kg'],['weight','32 N']]),
  check:{prompt:'Try it: a fictional probe weighs 90 N on a fictional planet where g = 3 N/kg. What is its mass, in kilograms?',answer:30,options:[30,270,87],hint:'Divide the weight by g: 90 ÷ 3.',pic:tab('A fictional probe',[['weight','90 N'],['g','3 N/kg'],['mass','?']])}},
 {skill:'worlds',say:'Every object with mass pulls on every other object with mass. The pull is stronger between bigger masses and weaker when they are farther apart, so planets and moons of different sizes have different values of g.',pic:tab('Gravity is stronger',[['bigger masses','stronger pull'],['farther apart','weaker pull']])},
 {skill:'worlds',say:'To find a weight on another world, find the mass first, then multiply by the new g. A fictional rock that weighs 40 N where g = 8 N/kg has a mass of 40 ÷ 8 = 5 kg, so on a world where g = 2 N/kg it weighs 5 × 2 = 10 N.',eq:'40 ÷ 8 = 5 kg, then 5 × 2 = 10 N',pic:tab('A fictional rock',[['weight on world 1','40 N'],['g on world 1','8 N/kg'],['g on world 2','2 N/kg'],['weight on world 2','10 N']]),
  check:{prompt:'Try it: a fictional robot weighs 300 N on a fictional planet where g = 10 N/kg. What does it weigh on a fictional moon where g = 2 N/kg, in newtons?',answer:60,options:[60,600,30],hint:'Find the mass first: 300 ÷ 10. Then multiply by 2.',pic:tab('A fictional robot',[['weight on the planet','300 N'],['g on the planet','10 N/kg'],['g on the moon','2 N/kg'],['weight on the moon','?']])}},
 {skill:'worlds',say:'Compare weights by working each one out, not by the mass alone: a 30 kg box where g = 4 N/kg weighs 30 × 4 = 120 N, less than a 10 kg box where g = 15 N/kg, which weighs 10 × 15 = 150 N.',pic:tab('Two fictional boxes',[['box A','30 kg, g = 4 N/kg'],['box B','10 kg, g = 15 N/kg']])}],
progression:{requires:['science-m-forces-motion','math-m-ratios'],operations:2,demand:'Multiply a mass by g or divide a weight by g, keep the mass the same between worlds, and compare two products.'},
items(add){
 let i=0;
 const O=()=>OBJ[i++%OBJ.length];
 /* Weight from mass on fictional worlds (the Try-it's 15 kg at 4 N/kg is left out). */
 for(const g of [2,3,4,6,12,25])for(const m of [5,8,15,20,40]){if(g===4&&m===15)continue;const o=O(),p=PL[i%PL.length];
  add('weight',`On the fictional planet ${p}, g = ${g} N/kg. What does a fictional ${m} kg ${o} weigh there, in newtons?`,m*g,tab(`A fictional ${o} on ${p}`,[['mass',`${m} kg`],['g',`${g} N/kg`],['weight','?']]),`weight = ${m} × ${g} = ${m*g} N.`);}
 /* Weight on Earth, at the stated 9.8 N/kg. */
 for(const m of [2,3,5,6,12,25,30,50]){const o=O();
  add('weight',`Using g = 9.8 N/kg for Earth, what does a fictional ${m} kg ${o} weigh on Earth, in newtons?`,r2(m*9.8),tab(`A fictional ${o} on Earth`,[['mass',`${m} kg`],['g','9.8 N/kg'],['weight','?']]),`weight = ${m} × 9.8 = ${r2(m*9.8)} N.`);}
 /* Mass from weight (the Try-it's 90 N at 3 N/kg is left out). */
 for(const g of [2,3,5,8,10,20])for(const m of [4,12,25,30,60]){if(g===3&&m===30)continue;const o=O(),p=PL[i%PL.length];
  add('mass',`A fictional ${o} weighs ${m*g} N on the fictional planet ${p}, where g = ${g} N/kg. What is its mass, in kilograms?`,m,tab(`A fictional ${o} on ${p}`,[['weight',`${m*g} N`],['g',`${g} N/kg`],['mass','?']]),`mass = ${m*g} ÷ ${g} = ${m} kg.`);}
 /* The mass does not change when an object moves to another world. */
 for(const [m,g1,g2] of [[12,5,20],[30,2,8],[7,10,3],[45,4,1],[18,6,12],[9,25,5],[60,3,9],[24,8,2]]){const o=O();
  add('mass',`A fictional ${m} kg ${o} is flown from a fictional planet where g = ${g1} N/kg to a fictional moon where g = ${g2} N/kg. What is its mass on the moon, in kilograms?`,m,tab(`A fictional ${o}`,[['mass at the start',`${m} kg`],['g on the planet',`${g1} N/kg`],['g on the moon',`${g2} N/kg`],['mass on the moon','?']]),`Mass does not change from one world to another, so it is still ${m} kg; only its weight changes, from ${m*g1} N to ${m*g2} N.`);}
 /* A weight on a second world, through the mass (the Try-it's 200 N at 10 then 2 N/kg is left out). */
 for(const [m,g1,g2] of [[5,8,2],[20,10,4],[6,3,12],[15,2,6],[8,25,5],[40,5,3],[12,4,10],[25,6,2],[30,2,9],[16,5,20],[9,10,3],[50,4,8]]){const o=O();
  add('worlds',`A fictional ${o} weighs ${m*g1} N on a fictional planet where g = ${g1} N/kg. What does it weigh on a fictional moon where g = ${g2} N/kg, in newtons?`,m*g2,tab(`A fictional ${o}`,[['weight on the planet',`${m*g1} N`],['g on the planet',`${g1} N/kg`],['g on the moon',`${g2} N/kg`],['weight on the moon','?']]),`The mass is ${m*g1} ÷ ${g1} = ${m} kg, so on the moon it weighs ${m} × ${g2} = ${m*g2} N.`);
  add('worlds',`A fictional ${o} weighs ${m*g1} N on a fictional planet where g = ${g1} N/kg and ${m*g2} N on a fictional moon. What is g on the moon, in N/kg?`,g2,tab(`A fictional ${o}`,[['weight on the planet',`${m*g1} N`],['g on the planet',`${g1} N/kg`],['weight on the moon',`${m*g2} N`],['g on the moon','?']]),`The mass is ${m*g1} ÷ ${g1} = ${m} kg, so g on the moon is ${m*g2} ÷ ${m} = ${g2} N/kg.`);}
 /* Which of two objects weighs more where it is: answers balanced between A and B, never a tie. */
 [[36,4,12,15],[8,20,40,3],[12,5,6,9],[9,10,50,2],[25,3,5,12],[6,15,20,4],[18,2,4,10],[15,8,40,6],[7,12,28,2],[16,5,10,9],[45,2,20,4],[9,8,30,3]].forEach(([ma,ga,mb,gb])=>{const wa=ma*ga,wb=mb*gb,big=wa>wb?'A':'B';
  add('worlds',`Box A is a fictional ${ma} kg box on a planet where g = ${ga} N/kg. Box B is a fictional ${mb} kg box on a moon where g = ${gb} N/kg. Which box weighs more where it is: A or B?`,big,tab('Two fictional boxes',[['box A',`${ma} kg, g = ${ga} N/kg`],['box B',`${mb} kg, g = ${gb} N/kg`]]),`Box A weighs ${ma} × ${ga} = ${wa} N and box B weighs ${mb} × ${gb} = ${wb} N, so box ${big} weighs more.`,[`box ${big.toLowerCase()}`]);});
}
};
