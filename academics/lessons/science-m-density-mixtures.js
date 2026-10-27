// Middle School topic (Grade 7, NGSS MS-PS1-2): density as a characteristic property, and layered mixtures. Every
// answer is computed from the numbers in its own question with the rules the lesson states: density = mass ÷
// volume, 1 mL = 1 cm³, a liquid's mass is the full cylinder minus the empty one, a sinking solid's volume is the
// rise in the water level, mass = density × volume and volume = mass ÷ density. Liquids that do not mix settle
// with the densest at the bottom, and a solid dropped into such a column sinks through every layer less dense than
// itself and comes to rest on top of the first layer that is denser. This goes past the Elementary float-or-sink
// topic (one block against water): two-step measurements, the order of three layers, and masses from densities.
// Every liquid, object and density is fictional; the one real example is cooking oil floating on water (about
// 0.92 g/mL against about 1.00 g/mL).
const LIQ=[0.6,0.7,0.75,0.8,0.85,0.9,1.1,1.2,1.25,1.3,1.4,1.5,1.6,1.8];
const SOL=[1.2,1.5,2,2.5,3,4,5,6,7,8];
const VOL=[20,40,50,80,100,120,150,200,250];
const CYL=[40,55,60,72,85,90,110,125];
const RISE=[4,5,6,8,10,12,15,20,25,30],START=[20,30,40,50,60];
const OBJ=['toy figure','ring','key','button','charm','bead','bolt','pebble'];
const JAR=[35,50,64,80,95,120,150];
const LET=['P','Q','R'],POS=['top','middle','bottom'];
/* The six ways to hand three densities (sorted low to high) to the letters P, Q and R. */
const PERMS=[[0,1,2],[1,2,0],[2,0,1],[0,2,1],[2,1,0],[1,0,2]];
/* The answer letter takes turns (P, Q, R), and the other two letters swap every other round. */
const permFor=(rank,c)=>PERMS.filter(p=>p[c%3]===rank)[Math.floor(c/3)%2];
const r3=x=>Math.round(x*1000)/1000;
const whole=x=>Math.abs(x-Math.round(x))<1e-9;
const three=(title,rows)=>({t:'setups',title,head:'Quantity',rows,cols:['Liquid P','Liquid Q','Liquid R']});
const one=(title,rows)=>({t:'setups',title,head:'Quantity',rows,cols:['Value']});
const ofThree=(ds,u='g/mL')=>`Liquid P has a density of ${ds[0]} ${u}, liquid Q has a density of ${ds[1]} ${u} and liquid R has a density of ${ds[2]} ${u}.`;
export default {
id:'science-m-density-mixtures',subject:'science',level:4,grade:7,standard:'NGSS MS-PS1-2',
title:'Density and layered liquids',
goal:'Measure a density in two steps, predict the order of three liquid layers and where a solid comes to rest in them, and find a mass or a volume from a density.',
points:20,
skills:{measure:'Measuring a density',layers:'Predicting the layers',mass:'Mass and volume from density'},
steps:[
 {skill:'measure',say:'Density is the mass in each unit of volume: density = mass ÷ volume. Each pure substance has its own density at a given temperature, so density helps identify it. Liquids are measured in millilitres, and 1 mL = 1 cm³, so 1 g/mL is the same as 1 g/cm³.',eq:'density = mass ÷ volume,  1 mL = 1 cm³',pic:{t:'setups',title:'Units of density',head:'Measuring',rows:[['a solid','g/cm³'],['a liquid','g/mL'],['1 mL','1 cm³']],cols:['Written as']}},
 {skill:'measure',say:'To measure a liquid, weigh an empty measuring cylinder, pour in the liquid and weigh it again. The difference is the mass of the liquid. A fictional 60 g cylinder weighs 140 g with 100 mL of liquid in it, so the liquid has 80 g and a density of 80 ÷ 100 = 0.8 g/mL.',eq:'140 g − 60 g = 80 g,  80 ÷ 100 = 0.8 g/mL',pic:one('A fictional measuring cylinder',[['empty cylinder','60 g'],['cylinder with liquid','140 g'],['liquid volume','100 mL'],['liquid mass','80 g'],['density','0.8 g/mL']])},
 {skill:'measure',say:'A solid that sinks pushes aside its own volume of water, so the water level rises by the volume of the solid. A fictional 60 g stone raises the level from 50 mL to 70 mL, so its volume is 20 cm³ and its density is 60 ÷ 20 = 3 g/cm³.',eq:'70 mL − 50 mL = 20 cm³,  60 ÷ 20 = 3 g/cm³',pic:one('A fictional stone in water',[['mass','60 g'],['water level before','50 mL'],['water level after','70 mL'],['volume','20 cm³'],['density','3 g/cm³']]),
  check:{prompt:'Try it: a fictional bolt with a mass of 48 g sinks in a measuring cylinder and raises the water level from 30 mL to 36 mL. What is the bolt’s density in g/cm³?',answer:8,options:[8,1.6,6],hint:'The volume is the rise in the water level, 36 − 30. Then divide the mass by that volume.',pic:one('A fictional bolt in water',[['mass','48 g'],['water level before','30 mL'],['water level after','36 mL'],['density','?']])}},
 {skill:'layers',say:'Liquids that do not mix settle into layers, with the densest liquid at the bottom and the least dense at the top. Cooking oil and water do not mix, and the oil floats on top because it is less dense than water.',pic:{t:'setups',title:'Oil and water in a jar',head:'Layer',rows:[['top','cooking oil','less dense'],['bottom','water','more dense']],cols:['Liquid','Density']}},
 {skill:'layers',say:'To predict a column of three liquids, put their densities in order. In a fictional column, liquid P is 1.4 g/mL, Q is 0.8 g/mL and R is 1.1 g/mL. Q is the least dense, so it is on top, R is in the middle and P is at the bottom.',eq:'0.8 < 1.1 < 1.4: Q on top, R in the middle, P at the bottom',pic:{t:'numline',title:'Densities in g/mL',min:0,max:2,marks:[{v:0.8,label:'Q'},{v:1.1,label:'R'},{v:1.4,label:'P'}]},
  check:{prompt:'Try it: three fictional liquids that do not mix are poured into one column. Liquid A has a density of 1.2 g/mL, liquid B 0.7 g/mL and liquid C 1.6 g/mL. Which liquid forms the middle layer: A, B or C?',answer:'A',options:['A','B','C'],hint:'Put the densities in order from least to most dense. The least dense is on top.',pic:{t:'setups',title:'Three fictional liquids',head:'Quantity',rows:[['density','1.2 g/mL','0.7 g/mL','1.6 g/mL']],cols:['Liquid A','Liquid B','Liquid C']}}},
 {skill:'layers',say:'Compare densities, never masses: a big, heavy sample can still be the least dense. A solid dropped into the column sinks through every layer less dense than itself and comes to rest on top of the first layer that is denser. A 1.2 g/cm³ bead sinks through Q and R and rests on top of P.',pic:{t:'setups',title:'A 1.2 g/cm³ bead in the fictional column',head:'Layer',rows:[['top','liquid Q','0.8 g/mL'],['middle','liquid R','1.1 g/mL'],['bottom','liquid P','1.4 g/mL']],cols:['Liquid','Density']}},
 {skill:'mass',say:'Turn the rule around to find a mass: mass = density × volume. A fictional syrup has a density of 1.4 g/mL, so 250 mL of it has a mass of 1.4 × 250 = 350 g.',eq:'mass = density × volume = 1.4 × 250 = 350 g',pic:one('A fictional syrup',[['density','1.4 g/mL'],['volume','250 mL'],['mass','350 g']]),
  check:{prompt:'Try it: a fictional oil has a density of 0.9 g/mL. What is the mass of 300 mL of the oil, in grams?',answer:270,options:[270,2700,333],hint:'Multiply the density by the volume: 0.9 × 300.',pic:one('A fictional oil',[['density','0.9 g/mL'],['volume','300 mL'],['mass','?']])}},
 {skill:'mass',say:'To find a volume, divide: volume = mass ÷ density. 64 g of a fictional liquid with a density of 0.8 g/mL fills 64 ÷ 0.8 = 80 mL. Density does not depend on the amount: half the sample has half the mass and half the volume.',eq:'volume = mass ÷ density = 64 ÷ 0.8 = 80 mL',pic:one('A fictional liquid',[['density','0.8 g/mL'],['mass','64 g'],['volume','80 mL']])}],
progression:{requires:['science-e-float-or-sink','math-m-ratios'],operations:2,demand:'Subtract to get a liquid’s mass or a solid’s volume before dividing, order three densities to place three layers and a solid among them, and multiply or divide by a density to find a mass or a volume.'},
items(add){
 /* Measuring a liquid: the empty and full cylinder masses, two volumes for each density. */
 LIQ.forEach((d,i)=>{let n=0;for(let j=0;j<VOL.length&&n<2;j++){const V=VOL[(i*2+j*5)%VOL.length],m=r3(d*V);if(!whole(m))continue;const C=CYL[(i+n*3)%CYL.length];n++;
  add('measure',`An empty measuring cylinder has a mass of ${C} g. With ${V} mL of a fictional liquid poured in, it has a mass of ${C+m} g. What is the liquid's density in g/mL?`,d,one('A fictional measuring cylinder',[['empty cylinder',`${C} g`],['cylinder with liquid',`${C+m} g`],['liquid volume',`${V} mL`],['density','?']]),`The liquid's mass is ${C+m} - ${C} = ${m} g, so its density is ${m} ÷ ${V} = ${d} g/mL.`);}});
 /* Measuring a sinking solid by displacement: three rises in the water level for each density (all above 1, so it sinks). */
 SOL.forEach((d,i)=>{let n=0;for(let j=0;j<RISE.length&&n<3;j++){const dv=RISE[(i*3+j)%RISE.length],m=r3(d*dv);if(!whole(m))continue;const L0=START[(i+n*2)%START.length],o=OBJ[(i+n)%OBJ.length];n++;
  add('measure',`A fictional ${o} has a mass of ${m} g. It sinks in a measuring cylinder of water, and the water level rises from ${L0} mL to ${L0+dv} mL. What is its density in g/cm³?`,d,one(`A fictional ${o} in water`,[['mass',`${m} g`],['water level before',`${L0} mL`],['water level after',`${L0+dv} mL`],['density','?']]),`The volume is the rise in the water level, ${L0+dv} - ${L0} = ${dv} cm³, so the density is ${m} ÷ ${dv} = ${d} g/cm³.`);}});
 /* Three layers from three densities: two positions asked for each set, and the letters shuffled so P, Q and R
    each answer about a third of the time. */
 const sets=[];for(let i=0;i<LIQ.length;i++)sets.push([LIQ[i],LIQ[(i+4)%LIQ.length],LIQ[(i+9)%LIQ.length]].sort((a,b)=>a-b));
 let c=0;
 sets.forEach((s,i)=>{for(let t=0;t<2;t++){const pos=(i+t*2)%3,perm=permFor(pos,c++),ds=perm.map(r=>s[r]),win=LET[perm.indexOf(pos)];
  add('layers',`A fictional column holds three liquids that do not mix. ${ofThree(ds)} Which liquid forms the ${POS[pos]} layer: P, Q or R?`,win,three('A fictional column of three liquids',[['density',...ds.map(x=>`${x} g/mL`)]]),`From least to most dense: ${s.join(' g/mL, ')} g/mL. The least dense is on top and the densest at the bottom, so liquid ${win} (${s[pos]} g/mL) forms the ${POS[pos]} layer.`,[`liquid ${win.toLowerCase()}`]);}});
 /* Three layers from masses and volumes. In half the sets the densest liquid has the smallest sample, so the
    biggest mass never answers it on its own. */
 for(let i=0;i<20;i++){const s=[LIQ[(i+1)%LIQ.length],LIQ[(i+5)%LIQ.length],LIQ[(i+10)%LIQ.length]].sort((a,b)=>a-b),trap=i%2===0;
  const vol=trap?[[200,240][i%4<2?0:1],[80,100,120][i%3],[20,40][i%4<2?1:0]]:[[20,40,60][i%3],[80,100,120][(i+1)%3],[160,200,240][(i+2)%3]];
  const pos=i%4<2?2:0,perm=permFor(pos,i+1),ds=perm.map(r=>s[r]),vs=perm.map(r=>vol[r]),ms=ds.map((d,k)=>r3(d*vs[k])),win=LET[perm.indexOf(pos)];
  const sample=k=>`a sample of liquid ${LET[k]} has a mass of ${ms[k]} g and a volume of ${vs[k]} mL`;
  add('layers',`Three fictional liquids that do not mix are poured into one column. ${sample(0)[0].toUpperCase()+sample(0).slice(1)}, ${sample(1)} and ${sample(2)}. Which liquid forms the ${POS[pos]} layer: P, Q or R?`,win,three('Three fictional liquid samples',[['mass',...ms.map(m=>`${m} g`)],['volume',...vs.map(v=>`${v} mL`)]]),`The densities are P ${ms[0]} ÷ ${vs[0]} = ${ds[0]}, Q ${ms[1]} ÷ ${vs[1]} = ${ds[1]} and R ${ms[2]} ÷ ${vs[2]} = ${ds[2]} g/mL, so liquid ${win} is the ${pos===2?'densest and sinks to the bottom':'least dense and floats on top'}.`,[`liquid ${win.toLowerCase()}`]);}
 /* A solid bead dropped into a column: below every liquid, between the lowest two, or between the top two. */
 for(let i=0;i<21;i++){const s=[LIQ[(i+2)%LIQ.length],LIQ[(i+7)%LIQ.length],LIQ[(i+12)%LIQ.length]].sort((a,b)=>a-b),slot=i%3;
  const b=slot===0?r3(s[0]-0.1):r3(Math.round((s[slot-1]+s[slot])*50)/100),perm=permFor(slot,i+2),ds=perm.map(r=>s[r]),win=LET[perm.indexOf(slot)];
  add('layers',`A fictional column holds three liquids that do not mix. ${ofThree(ds)} A fictional bead with a density of ${b} g/cm³ is dropped in. On top of which liquid does the bead come to rest: P, Q or R?`,win,three(`A fictional column and a ${b} g/cm³ bead`,[['density',...ds.map(x=>`${x} g/mL`)]]),`The bead sinks through every layer less dense than ${b} g/cm³ and stops on the first denser one. The least dense liquid denser than the bead is liquid ${win}, at ${s[slot]} g/mL.`,[`liquid ${win.toLowerCase()}`]);}
 /* Mass from density × volume, volume from mass ÷ density, a solid's mass, and a filled jar. */
 LIQ.forEach((d,i)=>{const pick=o=>{for(let j=0;j<VOL.length;j++){const V=VOL[(i+o+j)%VOL.length];if(whole(r3(d*V)))return V;}},V1=pick(0),V2=pick(4),V3=pick(7);
  add('mass',`A fictional liquid has a density of ${d} g/mL. What is the mass of ${V1} mL of it, in grams?`,r3(d*V1),one('A fictional liquid',[['density',`${d} g/mL`],['volume',`${V1} mL`],['mass','?']]),`mass = density × volume = ${d} × ${V1} = ${r3(d*V1)} g.`);
  add('mass',`A fictional liquid has a density of ${d} g/mL. What volume of it, in mL, has a mass of ${r3(d*V2)} g?`,V2,one('A fictional liquid',[['density',`${d} g/mL`],['mass',`${r3(d*V2)} g`],['volume','?']]),`volume = mass ÷ density = ${r3(d*V2)} ÷ ${d} = ${V2} mL.`);
  const C=JAR[i%JAR.length];
  add('mass',`An empty fictional jar has a mass of ${C} g. It is filled with ${V3} mL of a fictional liquid with a density of ${d} g/mL. What is the total mass of the jar and the liquid, in grams?`,C+r3(d*V3),one('A fictional jar of liquid',[['empty jar',`${C} g`],['liquid density',`${d} g/mL`],['liquid volume',`${V3} mL`],['total mass','?']]),`The liquid's mass is ${d} × ${V3} = ${r3(d*V3)} g, so the total is ${C} + ${r3(d*V3)} = ${C+r3(d*V3)} g.`);});
 SOL.forEach((d,i)=>{const o=OBJ[(i+3)%OBJ.length],V=[6,8,10,12,15,20,24,30][(i*3)%8];
  add('mass',`A fictional ${o} has a density of ${d} g/cm³ and a volume of ${V} cm³. What is its mass in grams?`,r3(d*V),one(`A fictional ${o}`,[['density',`${d} g/cm³`],['volume',`${V} cm³`],['mass','?']]),`mass = density × volume = ${d} × ${V} = ${r3(d*V)} g.`);});
}
};
