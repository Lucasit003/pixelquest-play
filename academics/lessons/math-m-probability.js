// Middle School topic (Grade 7, CCSS 7.SP.C.5, 7.SP.C.7a, 7.SP.C.6): probability of simple events. Every
// probability is favourable outcomes ÷ equally likely outcomes, reduced by the greatest common divisor;
// the probability of "not" an event is 1 minus it; an expected count is the probability × the number of
// trials, chosen to come out whole. Bags, spinners and dice are fictional but fair, as stated.
const gcd=(a,b)=>b?gcd(b,a%b):a;
const ans=(n,d)=>{const g=gcd(n,d),a=n/g,b=d/g;if(b===1)return {a,acc:[]};const acc=[];if((a*1000)%b===0)acc.push(String(a*1000/b/1000));return {a:`${a}/${b}`,acc};};
const COLOURS=['red','blue','green','yellow','purple'];
const BAGS=[[3,5,2],[4,1,5],[2,6,4],[5,3,7],[1,4,3],[6,2,4],[3,3,6],[2,7,1],[4,4,2],[5,1,2],[3,6,3],[2,2,8],[7,3,2],[1,5,6],[4,6,5],[2,3,5]];
const bagPic=(b,hint)=>({t:'setups',title:'A fictional bag of marbles',head:'Colour',rows:b.map((n,i)=>[COLOURS[i],`${n}`]),cols:['Marbles'],...(hint?{hint:true}:{})});
export default {
id:'math-m-probability',subject:'math',level:4,grade:7,standard:'CCSS 7.SP.C.5, 7.SP.C.6, 7.SP.C.7a',
title:'Probability of simple events',
goal:'Find the probability of an event as a fraction, the probability that it does not happen, and how often to expect it over many trials.',
points:20,
skills:{simple:'Probability of an event',not:'The event not happening',expect:'Expected results'},
steps:[
 {skill:'simple',say:'Probability measures how likely an event is, from 0 (impossible) to 1 (certain). When all outcomes are equally likely, it is the favourable outcomes divided by all the outcomes.',eq:'P = favourable ÷ total',pic:{t:'setups',title:'A fictional bag of marbles',head:'Colour',rows:[['red','3'],['blue','5'],['green','2']],cols:['Marbles']}},
 {skill:'simple',say:'This bag holds 3 + 5 + 2 = 10 marbles and 5 are blue, so picking one at random gives P(blue) = 5/10 = 1/2. Write the fraction in lowest terms.',eq:'P(blue) = 5/10 = 1/2',pic:{t:'setups',title:'A fictional bag of marbles',head:'Colour',rows:[['red','3'],['blue','5'],['green','2'],['total','10']],cols:['Marbles']},
  check:{prompt:'Try it: a fair six-sided die is rolled once. What is the probability of rolling a number greater than 4? Give a fraction in lowest terms.',answer:'1/3',options:['1/3','1/2','4/6'],hint:'Greater than 4 means 5 or 6: two outcomes out of six.',pic:{t:'setups',title:'A fair die',head:'Outcomes',rows:[['faces','1, 2, 3, 4, 5, 6']],cols:['List']}}},
 {skill:'not',say:'An event either happens or does not, so the two probabilities add up to 1. P(not blue) = 1 - 1/2 = 1/2, the same as counting the 5 marbles that are not blue.',eq:'P(not A) = 1 - P(A)',pic:{t:'setups',title:'Blue or not blue',head:'',rows:[['blue','5 of 10'],['not blue','5 of 10']],cols:['Marbles']}},
 {skill:'not',say:'Counting what is left is a good check: a spinner with 8 equal parts, 3 of them gold, lands off gold with probability 5/8.',eq:'1 - 3/8 = 5/8',pic:{t:'setups',title:'A fair spinner',head:'',rows:[['gold parts','3'],['other parts','5'],['all parts','8']],cols:['Count']},
  check:{prompt:'Try it: a fair spinner has 10 equal parts, and 3 are green. What is the probability that it does not land on green? Give a fraction in lowest terms.',answer:'7/10',options:['7/10','3/10','1/7'],hint:'Count the parts that are not green, out of 10.',pic:{t:'setups',title:'A fair spinner',head:'',rows:[['green parts','3'],['all parts','10']],cols:['Count']}}},
 {skill:'expect',say:'Probability predicts results over many trials, not one. With P(gold) = 1/4, about 1/4 of 80 spins, which is 20, should land on gold. The real count will be close to that, rarely exactly it.',eq:'1/4 × 80 = 20',pic:{t:'setups',title:'Predicting 80 spins',head:'',rows:[['P(gold)','1/4'],['spins','80'],['expected gold','about 20']],cols:['Value']}},
 {skill:'expect',say:'To predict, multiply the probability by the number of trials. The answer is what to expect on average, so say "about".',pic:{t:'setups',title:'A fair die rolled 60 times',head:'',rows:[['P(six)','1/6'],['rolls','60']],cols:['Value']},
  check:{prompt:'Try it: a fair six-sided die is rolled 60 times. About how many times should it land on a six?',answer:10,options:[10,6,1],hint:'Multiply 1/6 by 60.',pic:{t:'setups',title:'A fair die rolled 60 times',head:'',rows:[['P(six)','1/6'],['rolls','60']],cols:['Value']}}}],
progression:{requires:['math-m-dividing-fractions'],operations:2,demand:'Count favourable and total outcomes, reduce the fraction, subtract from 1 for the complement, and multiply by the number of trials for an expected count.'},
items(add){
 /* Marbles: P(a colour) and P(not a colour). */
 BAGS.forEach((b,i)=>{const tot=b.reduce((x,y)=>x+y,0),list=b.map((n,k)=>`${n} ${COLOURS[k]}`).join(', ');
  for(let k=0;k<3;k++){const c=COLOURS[k],r=ans(b[k],tot),rn=ans(tot-b[k],tot);
   if((i+k)%3!==2)add('simple',`A fictional bag holds ${list} marbles. One marble is picked at random. What is the probability that it is ${c}? Give a fraction in lowest terms.`,r.a,bagPic(b),`${b[k]} of the ${tot} marbles are ${c}: ${b[k]}/${tot} = ${r.a}.`,r.acc);
   if((i+k)%3!==0)add('not',`A fictional bag holds ${list} marbles. One marble is picked at random. What is the probability that it is NOT ${c}? Give a fraction in lowest terms.`,rn.a,bagPic(b),`${tot-b[k]} of the ${tot} marbles are not ${c}: ${tot-b[k]}/${tot} = ${rn.a}.`,rn.acc);}});
 /* Dice: events on one fair six-sided die. */
 const DIE=[['an even number',[2,4,6]],['a number less than 3',[1,2]],['a 5',[5]],['a number greater than 2',[3,4,5,6]],['a multiple of 3',[3,6]],['an odd number',[1,3,5]],['a number less than 5',[1,2,3,4]],['a 1 or a 6',[1,6]]];
 for(const [ev,set] of DIE){const r=ans(set.length,6),rn=ans(6-set.length,6),pic={t:'setups',title:'A fair six-sided die',head:'Outcomes',rows:[['faces','1, 2, 3, 4, 5, 6']],cols:['List']};
  add('simple',`A fair six-sided die is rolled once. What is the probability of rolling ${ev}? Give a fraction in lowest terms.`,r.a,pic,`${set.join(', ')}: ${set.length} of 6 outcomes, so ${set.length}/6 = ${r.a}.`,r.acc);
  add('not',`A fair six-sided die is rolled once. What is the probability of NOT rolling ${ev}? Give a fraction in lowest terms.`,rn.a,pic,`${6-set.length} of the 6 outcomes are not ${ev}: ${6-set.length}/6 = ${rn.a}.`,rn.acc);}
 /* Spinners: P(not) and expected counts. */
 for(const [parts,gold] of [[4,1],[5,2],[6,1],[8,3],[10,3],[10,7],[12,5],[5,1],[8,1],[4,3]]){const r=ans(gold,parts),rn=ans(parts-gold,parts),pic={t:'setups',title:'A fair spinner',head:'',rows:[['gold parts',`${gold}`],['all parts',`${parts}`]],cols:['Count']};
  add('not',`A fair spinner has ${parts} equal parts, and ${gold} of them ${gold===1?'is':'are'} gold. What is the probability that it does not land on gold? Give a fraction in lowest terms.`,rn.a,pic,`${parts-gold} of the ${parts} parts are not gold: ${rn.a}.`,rn.acc);
  for(const spins of [parts*10,parts*15,parts*20,parts*30])add('expect',`A fair spinner has ${parts} equal parts, and ${gold} of them ${gold===1?'is':'are'} gold. It is spun ${spins} times. About how many times should it land on gold?`,gold*spins/parts,{...pic,rows:[...pic.rows,['spins',`${spins}`]]},`P(gold) = ${r.a}, and ${r.a} × ${spins} = ${gold*spins/parts}.`);}
 for(const [ev,set] of DIE.slice(0,6))for(const rolls of [30,60,120,300]){if((set.length*rolls)%6)continue;
  add('expect',`A fair six-sided die is rolled ${rolls} times. About how many times should it land on ${ev}?`,set.length*rolls/6,{t:'setups',title:'Many rolls of a fair die',head:'',rows:[['outcomes that count',`${set.join(', ')}`],['rolls',`${rolls}`]],cols:['Value']},`P = ${set.length}/6, and ${set.length}/6 × ${rolls} = ${set.length*rolls/6}.`);}
}
};
