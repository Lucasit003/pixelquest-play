// Middle School topic (Grade 6, NGSS MS-LS2-3): energy in food chains. The lesson states the simplified model
// it uses, the 10% rule (about 10% of the energy at one level of a food chain passes to the next level up), and
// every answer is computed from its own question with that model: divide by 10 for each level up, and multiply
// by 10 for each level back down to the producers. The places and energy amounts are fictional; the chains are
// made of real kinds of organisms, and every link (each organism eats the one before it) and every role was
// checked by hand: grass is eaten by grasshoppers, grasshoppers by frogs, frogs by snakes, snakes by hawks;
// phytoplankton by krill, krill by penguins, penguins by leopard seals; oak leaves by caterpillars, caterpillars
// by blue tits, blue tits by sparrowhawks; algae by water fleas, water fleas by small fish, small fish by herons;
// phytoplankton by zooplankton, zooplankton by herring, herring by seals; kelp by sea urchins, sea urchins by
// sea otters; grass by zebras, zebras by lions; wheat by field mice, field mice by barn owls; clover by rabbits,
// rabbits by foxes; grass by elk, elk by wolves.
const CHAINS=[
 {where:'meadow',c:['grass','grasshopper','frog','snake','hawk']},
 {where:'Antarctic bay',c:['phytoplankton','krill','penguin','leopard seal']},
 {where:'oak wood',c:['oak tree','caterpillar','blue tit','sparrowhawk']},
 {where:'pond',c:['algae','water flea','small fish','heron']},
 {where:'coastal sea',c:['phytoplankton','zooplankton','herring','seal']},
 {where:'kelp forest',c:['kelp','sea urchin','sea otter']},
 {where:'savanna',c:['grass','zebra','lion']},
 {where:'wheat field',c:['wheat','field mouse','barn owl']},
 {where:'clover field',c:['clover','rabbit','fox']},
 {where:'mountain valley',c:['grass','elk','wolf']}];
const ROLE=['producer','primary consumer','secondary consumer','tertiary consumer','quaternary consumer'];
/* Producer energies in kJ; a level's energy is the producer energy divided by 10 once for each level up. */
const BASE=[10000,20000,30000,40000,50000,60000,80000,90000,25000,45000,15000,70000];
const fmt=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,',');
const arrow=c=>c.join(' → ');
const WORD=['zero','one','two','three','four'],TIMES=['','once','twice','three times','four times'];
const pyramid=(ch,known,E,asked)=>({t:'setups',title:`A fictional ${ch.where}`,head:'Role',rows:ch.c.map((o,i)=>[ROLE[i],o,i===known?`${fmt(E)} kJ`:i===asked?'?':'']),cols:['Organism','Energy']});
const MEADOW={where:'meadow',c:['grass','grasshopper','frog','snake','hawk']};
const solved=(ch,vals)=>({t:'setups',title:`A fictional ${ch.where}`,head:'Role',rows:ch.c.map((o,i)=>[ROLE[i],o,vals[i]==null?'':`${fmt(vals[i])} kJ`]),cols:['Organism','Energy']});
export default {
id:'science-m-energy-pyramid',subject:'science',level:4,grade:6,standard:'NGSS MS-LS2-3',
title:'Energy in food chains',
goal:'Use the 10% rule to find the energy that reaches the next level of a food chain, two or three levels up, and how much the producers needed.',
points:20,
skills:{next:'Energy at the next level',up:'Two or three levels up',producers:'What the producers needed'},
steps:[
 {skill:'next',say:'A food chain starts with a producer, such as a plant or an alga, which captures energy from sunlight. Primary consumers eat the producer, secondary consumers eat them, and so on up the chain.',eq:'grass → grasshopper → frog → snake → hawk',pic:{t:'setups',title:'A fictional meadow',head:'Role',rows:MEADOW.c.map((o,i)=>[ROLE[i],o]),cols:['Organism']}},
 {skill:'next',say:'This topic uses a simplified model, the 10% rule: about 10% of the energy at one level passes to the next level up. To find 10%, divide by 10. If the grass in a fictional meadow holds 20,000 kJ, the grasshoppers get 20,000 ÷ 10 = 2,000 kJ.',eq:'10% of 20,000 kJ = 20,000 ÷ 10 = 2,000 kJ',pic:solved(MEADOW,[20000,2000])},
 {skill:'next',say:'The other 90% does not reach the next level. Most of it is used for living, such as moving and keeping warm, and leaves as heat. Some is in parts that are not eaten, like roots and bones, or passes out as waste.',pic:{t:'setups',title:'Energy at the grasshopper level',head:'Where it goes',rows:[['passed to the frogs','about 10%'],['used for living, lost as heat','most of the rest'],['not eaten, or passed out as waste','some']],cols:['Share']},
  check:{prompt:'Try it: in a fictional field the food chain is clover → rabbit → fox. The clover level holds 8,000 kJ. Using the 10% rule, how many kJ reach the rabbit level?',answer:800,options:[800,80,7200],hint:'10% of 8,000 is 8,000 ÷ 10.',pic:pyramid({where:'field',c:['clover','rabbit','fox']},0,8000,1)}},
 {skill:'up',say:'The energy shrinks at every step. Two levels up, divide by 10 twice, which is dividing by 100. Three levels up, divide by 10 three times, which is dividing by 1,000.',eq:'20,000 → 2,000 → 200 → 20 → 2',pic:solved(MEADOW,[20000,2000,200,20,2])},
 {skill:'up',say:'This is why an energy pyramid gets narrower at each level, and one reason food chains rarely have more than four or five levels: too little energy is left at the top to support another level.',pic:solved(MEADOW,[20000,2000,200,20,2]),
  check:{prompt:'Try it: a fictional food chain is grass → grasshopper → frog → snake. The grass level holds 50,000 kJ. Using the 10% rule, how many kJ reach the snake level?',answer:50,options:[50,500,5,5000],hint:'The snakes are three levels above the grass: divide by 10 three times.',pic:pyramid({where:'grassland',c:['grass','grasshopper','frog','snake']},0,50000,3)}},
 {skill:'producers',say:'Work backwards to find what the producers needed: each step down the chain multiplies by 10. If the hawks get 2 kJ, the snakes needed 20 kJ, the frogs 200 kJ, the grasshoppers 2,000 kJ and the grass 20,000 kJ.',eq:'2 × 10 × 10 × 10 × 10 = 20,000 kJ',pic:solved(MEADOW,[20000,2000,200,20,2])},
 {skill:'producers',say:'Count the steps from the consumer down to the producer, then multiply by 10 once for each step. Three steps down is × 1,000, and four steps down is × 10,000.',pic:{t:'setups',title:'Steps down to the producer',head:'Steps down',rows:[['1','× 10'],['2','× 100'],['3','× 1,000'],['4','× 10,000']],cols:['Multiply by']},
  check:{prompt:'Try it: in a fictional pond the food chain is algae → water flea → small fish → heron. The heron level gets 3 kJ. Using the 10% rule, how many kJ did the algae level need to hold?',answer:3000,options:[3000,300,30000,30],hint:'The algae are three steps below the herons: multiply by 10 three times.',pic:pyramid({where:'pond',c:['algae','water flea','small fish','heron']},3,3,0)}}],
progression:{requires:['science-e-food-chains','math-e-times-ten'],operations:2,demand:'Place each organism at its level in the chain, count the levels between two of them, and divide or multiply by 10 once for each level.'},
items(add){
 const seen=new Set(),once=(skill,prompt,...rest)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,...rest);};
 CHAINS.forEach((ch,ci)=>{const L=ch.c.length,head=`In a fictional ${ch.where} the food chain is ${arrow(ch.c)}.`;
  for(let k=0;k<2;k++){
   /* Going up: from level i to level i + d. d = 1 is the next level; d = 2 or 3 is two or three levels up. */
   for(let i=0;i<L-1;i++)for(let d=1;d<=3&&i+d<L;d++){const base=BASE[(ci*5+i*3+d*4+k*7)%BASE.length],E=base/10**i,r=E/10**d;
    if(!Number.isInteger(E)||!Number.isInteger(r)||r<1)continue;
    once(d===1?'next':'up',`${head} The ${ch.c[i]} level holds ${fmt(E)} kJ of energy. Using the 10% rule, how many kJ reach the ${ch.c[i+d]} level?`,r,pyramid(ch,i,E,i+d),`The ${ch.c[i+d]} level is ${WORD[d]} level${d>1?'s':''} above the ${ch.c[i]} level, so divide by 10${d>1?` ${TIMES[d]}`:''}: ${fmt(E)} ÷ ${fmt(10**d)} = ${fmt(r)} kJ.`);}
   /* Going down: from a consumer at level j back to the producer at level 0. */
   for(let j=1;j<L;j++){const base=BASE[(ci*7+j*5+k*3)%BASE.length],E=base/10**j;if(!Number.isInteger(E)||E<1)continue;
    once('producers',`${head} The ${ch.c[j]} level gets ${fmt(E)} kJ of energy. Using the 10% rule, how many kJ did the ${ch.c[0]} level need to hold?`,base,pyramid(ch,j,E,0),`The ${ch.c[0]} level is ${WORD[j]} step${j>1?'s':''} below the ${ch.c[j]} level, so multiply by 10${j>1?` ${TIMES[j]}`:''}: ${fmt(E)} × ${fmt(10**j)} = ${fmt(base)} kJ.`);}}});
}
};
