// Elementary topic: density is mass divided by volume, in grams per cubic centimetre. Water's density is
// about 1 g/cm3 (it is exactly 1 only near 4C; room-temperature water is close enough that it never falls
// between 0.95 and 1.05, the gap this topic avoids), so a solid floats when its own density is less than 1
// and sinks when it is more than 1. Computing density itself is beyond the grade-5 NGSS assessment
// boundary (5-PS1-3 excludes density), so this topic is flagged as an extension of that standard, closer
// to middle-school content (MS-PS1-2). Every density used here is a fixed, exact value from DENSITIES
// (never 1), and every mass is that density times a chosen volume, so mass divided by volume always comes
// back to the exact density the question was built from. Blocks are fictional; no real material is named
// or claimed.
const DENSITIES=[0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,0.95,1.05,1.2,1.3,1.5,2,2.5,3,4,5];
const VOLUMES=[20,40,60,80,100,120,140,160,180,200];
const round=n=>Math.round(n*1000)/1000;
export default {
id:"science-e-float-or-sink",
subject:"science",
level:3,
grade:5,
title:"Will it float",
goal:"Compute an object's density from its mass and volume, use it to predict whether the object floats or sinks in water, and match objects with the same density despite different sizes.",
standard:"NGSS 5-PS1-3 (extension: density, beyond the grade-5 assessment boundary; see MS-PS1-2)",
points:20,
skills:{"density":"Compute density","float":"Will it float","same":"Same density, different size"},
steps:[
{"skill":"density","say":"Density tells how much mass is packed into each cubic centimetre of a material. It is found by dividing an object's mass by its volume: density = mass ÷ volume, measured in grams per cubic centimetre.","pic":{"t":"setups","title":"A fictional block","rows":[["mass","40 g"],["volume","20 cm³"]],"cols":["Value"]}},
{"skill":"density","say":"For a block with a mass of 40 g and a volume of 20 cm³, the density is 40 ÷ 20, which is 2 grams per cubic centimetre.","pic":{"t":"setups","title":"A fictional block","rows":[["mass","40 g"],["volume","20 cm³"],["density","40 ÷ 20 = 2 g/cm³"]],"cols":["Value"]},"check":{"prompt":"A fictional block has a mass of 15 g and a volume of 50 cm³. What is its density in grams per cubic centimetre? Type just the number as a decimal, like 0.5.","answer":0.3,"options":[0.3,3,0.15],"hint":"Divide the mass by the volume.","pic":{"t":"setups","title":"A fictional block","rows":[["mass","15 g"],["volume","50 cm³"]],"cols":["Value"]}}},
{"skill":"float","say":"Water has a density of about 1 gram per cubic centimetre. A solid object floats in water when its own density is less than water's, and sinks when its density is greater than water's.","pic":{"t":"setups","title":"Compare with water","head":"Object density","rows":[["less than water","floats"],["greater than water","sinks"],["equal to water","stays suspended"]],"cols":["Prediction"]}},
{"skill":"float","say":"A block with a density of 2 g/cm³ is denser than water, which has a density of 1 g/cm³, so the block sinks. A block with a density of 0.5 g/cm³ is less dense than water, so it floats.","pic":{"t":"setups","title":"Two fictional blocks","rows":[["block density","2 g/cm³","0.5 g/cm³"],["water density","1 g/cm³","1 g/cm³"],["result","sinks","floats"]],"cols":["Block P","Block Q"]},"check":{"prompt":"A fictional block has a density of 0.85 g per cubic centimetre. Water has a density of 1 g per cubic centimetre. Will the block float in water: yes or no?","answer":"yes","options":["yes","no"],"hint":"Compare the block's density to water's: is it less than 1?","pic":{"t":"setups","title":"A fictional block","rows":[["block density","0.85 g/cm³"],["water density","1 g/cm³"]],"cols":["Value"]}}},
{"skill":"same","say":"Two solid blocks of the same uniform material have the same density under the same conditions, even when one block is bigger. Their mass and volume change together, so mass divided by volume stays the same.","pic":{"t":"setups","title":"Two fictional blocks, same material","rows":[["mass","20 g","40 g"],["volume","40 cm³","80 cm³"],["density","0.5 g/cm³","0.5 g/cm³"]],"cols":["Small block","Big block"]}},
{"skill":"same","say":"To find which block has the same density as another, divide each mass by its volume and compare. Matching densities do not prove that the materials are the same: different materials can have the same density.","pic":{"t":"setups","title":"Three fictional blocks","rows":[["mass","24 g","48 g","90 g"],["volume","40 cm³","80 cm³","60 cm³"]],"cols":["Block A","Block B","Block C"]},"check":{"prompt":"Block A has a mass of 27 g and a volume of 45 cm³. Block B has a mass of 54 g and a volume of 90 cm³. Block C has a mass of 105 g and a volume of 70 cm³. Which block has the same density as block A: B or C?","answer":"B","options":["B","C"],"hint":"Compute mass ÷ volume for each block and compare the numbers.","pic":{"t":"setups","title":"Three fictional blocks","rows":[["mass","27 g","54 g","105 g"],["volume","45 cm³","90 cm³","70 cm³"]],"cols":["Block A","Block B","Block C"]}}}],
progression:{"requires":["science-e-conservation-of-mass"],"operations":2,"demand":"Divide mass by volume to find density, compare that number to water's density of 1 to predict floating or sinking, and match equal densities across blocks of different sizes."},
items(add){
 DENSITIES.forEach((d,i)=>{for(let k=0;k<4;k++){
  const V=VOLUMES[(i*3+k*2+1)%VOLUMES.length],mass=round(d*V);
  add('density',`A fictional block has a mass of ${mass} g and a volume of ${V} cm³. What is its density in grams per cubic centimetre? Type just the number as a decimal, like 0.5.`,d,{t:'setups',title:'A fictional block',rows:[['mass',`${mass} g`],['volume',`${V} cm³`]],cols:['Value']},`Density is mass divided by volume: ${mass} ÷ ${V} = ${d} g per cubic centimetre.`);
 }});
 DENSITIES.forEach(d=>{
  const yn=d<1?'yes':'no';
  add('float',`A fictional block has a density of ${d} g per cubic centimetre. Water has a density of 1 g per cubic centimetre. Will the block float in water: yes or no?`,yn,{t:'setups',title:'A fictional block',rows:[['block density',`${d} g/cm³`],['water density','1 g/cm³']],cols:['Value']},d<1?`${d} is less than 1, so the block is less dense than water and floats.`:`${d} is more than 1, so the block is denser than water and sinks.`);
 });
 DENSITIES.forEach((d,i)=>{for(let k=0;k<2;k++){
  const V=VOLUMES[(i*5+k*3+2)%VOLUMES.length],mass=round(d*V),yn=d<1?'yes':'no';
  add('float',`A fictional block has a mass of ${mass} g and a volume of ${V} cm³. Will it float in water: yes or no?`,yn,{t:'setups',title:'A fictional block',rows:[['mass',`${mass} g`],['volume',`${V} cm³`]],cols:['Value']},`Density is ${mass} ÷ ${V} = ${d} g per cubic centimetre, which is ${d<1?'less':'more'} than water's 1 g per cubic centimetre, so it ${yn==='yes'?'floats':'sinks'}.`);
 }});
 for(let i=0;i<DENSITIES.length;i++){
  const dA=DENSITIES[i%DENSITIES.length],vA=VOLUMES[(i*3+1)%VOLUMES.length],mA=round(dA*vA);
  let vSame=VOLUMES[(i*7+3)%VOLUMES.length];if(vSame===vA)vSame=VOLUMES[(i*7+4)%VOLUMES.length];
  const mSame=round(dA*vSame);
  let dOther=DENSITIES[(i*11+5)%DENSITIES.length];if(dOther===dA)dOther=DENSITIES[(i*11+6)%DENSITIES.length];
  const vOther=VOLUMES[(i*5+2)%VOLUMES.length],mOther=round(dOther*vOther);
  const sameIsB=i%2===0,mB=sameIsB?mSame:mOther,vB=sameIsB?vSame:vOther,mC=sameIsB?mOther:mSame,vC=sameIsB?vOther:vSame,answer=sameIsB?'B':'C';
  add('same',`Block A has a mass of ${mA} g and a volume of ${vA} cm³. Block B has a mass of ${mB} g and a volume of ${vB} cm³. Block C has a mass of ${mC} g and a volume of ${vC} cm³. Which block has the same density as block A: B or C?`,answer,{t:'setups',title:'Three fictional blocks',rows:[['mass',`${mA} g`,`${mB} g`,`${mC} g`],['volume',`${vA} cm³`,`${vB} cm³`,`${vC} cm³`]],head:'Property',cols:['Block A','Block B','Block C']},`Block A's density is ${mA} ÷ ${vA} = ${dA} g per cm³, and block ${answer}'s density is also ${dA} g per cm³ even though its mass and volume differ, so they have the same density. This alone does not identify their materials.`,[`block ${answer}`]);
 }
}
};
