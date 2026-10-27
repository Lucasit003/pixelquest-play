// High School course unit (docs/design/COURSES.md, docs/design/COURSE_QUALITY.md): Math 2, Unit 5, Probability, written
// to the Common Core integrated pathway's Math II standards (S-CP.1 to S-CP.9; S-CP.8 and S-CP.9 are (+) standards, for going further); our own wording and questions. With equally
// likely outcomes, P(event) = favorable outcomes ÷ all outcomes; P(not A) = 1 - P(A); P(A or B) = P(A) + P(B) - P(A and B);
// A and B are independent when P(A and B) = P(A) × P(B); P(B given A) = P(A and B) ÷ P(A), so P(A and B) = P(A) × P(B given
// A); there are n! orders of n things, nPr = n! ÷ (n - r)! ordered choices and nCr = n! ÷ (r!(n - r)!) unordered ones.
// Every spinner, coin, card and bag is fictional and chosen so each probability is a terminating decimal; answers are
// given as decimals.
/* Figures for the lesson (gfx/lesson-figure.js). */
const rad=d=>d*Math.PI/180,polar=(p,len,deg)=>[p[0]+len*Math.cos(rad(deg)),p[1]+len*Math.sin(rad(deg))];
const fig=(title,o)=>({t:'figure',title,...o});
/* the 1-to-8 spinner: section k runs clockwise from 90 - 45(k - 1) degrees; S3 and S6 mark the edges of sections 3 and 6 */
const SPIN=(()=>{const O=[0,0],pts={O},segs=[],notes=[];for(let k=0;k<8;k++){pts['R'+k]=polar(O,3,90-45*k);segs.push({v:'OR'+k,col:3,w:1.5});notes.push({at:polar(O,2,90-45*(k+0.5)),text:String(k+1),col:[2,5].includes(k)?'#c8372d':undefined});}
 return {pts,dots:'',hide:Object.keys(pts).join(''),circles:[{c:'O',r:3,col:0}],segs,arcs:[{c:'O',from:'R3',to:'R2',col:4,w:6},{c:'O',from:'R6',to:'R5',col:4,w:6}],notes};})();
/* Venn diagram on the 1-to-8 spinner: A = even, B = greater than 5 */
const VENNP={U:[0,0],V:[12,0],W:[12,7],X:[0,7],P:[4.6,3.4],Q:[7.4,3.4]};
const VENN={pts:VENNP,dots:'',hide:'UVWXPQ',polys:[{v:'UVWX',col:3,fill:false}],circles:[{c:'P',r:2.6,col:0},{c:'Q',r:2.6,col:1}],
 notes:[{at:[3.3,4.2],text:'2'},{at:[3.5,2.6],text:'4'},{at:[6,4.1],text:'6'},{at:[6,2.7],text:'8'},{at:[8.7,3.4],text:'7'},{at:[1,6.2],text:'1'},{at:[11,6.2],text:'3'},{at:[11,0.8],text:'5'},{at:[3,6.4],text:'A',col:0},{at:[9,6.4],text:'B',col:1}]};
const VENN_A={...VENN,circles:[{c:'P',r:2.6,col:0,w:5},{c:'Q',r:2.6,col:1,w:1.5}],notes:[...VENN.notes,{at:[6,1.2],text:'2 of these 4',col:0}]};
/* tree diagrams: a coin then a 1-to-4 spinner, and two draws from 4 red and 2 blue */
const TREEP={O:[0,3],H:[4,5.2],T:[4,0.8],A:[8.4,6.3],B:[8.4,4.3],C:[8.4,1.8],D:[8.4,-0.2]};
const TREE1={pts:TREEP,dots:'OHTABCD',hide:'OHTABCD',segs:[{v:'OH',label:'0.5',col:0},{v:'OT',label:'0.5',col:0},{v:'HA',label:'0.25',col:1},{v:'HB',label:'0.75',col:1},{v:'TC',label:'0.25',col:1},{v:'TD',label:'0.75',col:1}],
 notes:[{at:[4,5.9],text:'heads'},{at:[4,0.1],text:'tails'},{at:[11,6.3],text:'H, 4: 0.125'},{at:[11,4.3],text:'H, not 4: 0.375'},{at:[11,1.8],text:'T, 4: 0.125'},{at:[11,-0.2],text:'T, not 4: 0.375'}],view:[-0.5,13.5,-0.8,7]};
const TREE2={pts:TREEP,dots:'OHTABCD',hide:'OHTABCD',segs:[{v:'OH',label:'4/6',col:4},{v:'OT',label:'2/6',col:0},{v:'HA',label:'3/5',col:4},{v:'HB',label:'2/5',col:0},{v:'TC',label:'4/5',col:4},{v:'TD',label:'1/5',col:0}],
 notes:[{at:[4,5.9],text:'red'},{at:[4,0.1],text:'blue'},{at:[11,6.3],text:'red, red: 12/30'},{at:[11,4.3],text:'red, blue: 8/30'},{at:[11,1.8],text:'blue, red: 8/30'},{at:[11,-0.2],text:'blue, blue: 2/30'}],view:[-0.5,13.5,-0.8,7]};
const tab=(title,rows,cols=['Value'])=>({t:'setups',title,head:'',rows,cols});
const num=v=>String(Math.round(v*1e6)/1e6);
/* a probability that does not end, like 2/3, is written as a fraction rather than a rounded decimal */
const frac=v=>{if(Math.abs(v*1e4-Math.round(v*1e4))<1e-9)return num(v);for(let q=2;q<=12;q++){const p=Math.round(v*q);if(Math.abs(p/q-v)<1e-9)return `${p}/${q}`;}return num(v);};
const fact=n=>n<=1?1:n*fact(n-1),P=(n,r)=>fact(n)/fact(n-r),Cn=(n,r)=>fact(n)/(fact(r)*fact(n-r));
const r6=v=>Math.round(v*1e6)/1e6;
/* lettered choices, the right one moved to position k */
const choose=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
const YN={yes:['y'],no:['n']};
/* The three Try-it questions in pool form; the generator skips them. */
const TRY=['A fictional spinner has 10 equal sections numbered 1 to 10. What is the probability, as a decimal, that it lands on an odd number or a number greater than 8?',
 'In a fictional class, the probability that a student plays a sport is 0.6, and the probability that a student plays a sport and an instrument is 0.24. What is the probability, as a decimal, that a student who plays a sport also plays an instrument?',
 'How many different committees of 2 can be chosen from 6 people?'];
const tryIt=s=>`Try it: ${s[0].toLowerCase()+s.slice(1)}`;
export default {
id:'math-h-math-2-probability',subject:'math',level:5,grade:9,standard:'CCSS S-CP.1 to S-CP.9',
title:'Probability',
goal:'Describe events with sample spaces, unions, intersections and complements, use the addition and multiplication rules, decide whether events are independent, find conditional probabilities from numbers and two-way tables, and count with permutations and combinations.',
points:20,
skills:{events:'Sample spaces and events',addition:'The addition rule',independent:'Independent events',conditional:'Conditional probability',multiplication:'The multiplication rule',counting:'Permutations and combinations'},
outline:[['S-CP.1','Describe events with sample spaces, unions, intersections and complements',['events']],['S-CP.7','Use the addition rule for "or"',['addition']],['S-CP.2','Recognize independent events',['independent']],
 ['S-CP.3 to S-CP.6','Find conditional probabilities, including from two-way tables',['conditional']],['S-CP.8','Use the multiplication rule for "and"',['multiplication']],['S-CP.9','Count with permutations and combinations',['counting']]],
steps:[
 {skill:'events',say:'The sample space is every possible outcome. A fictional spinner with 8 equal sections numbered 1 to 8 has 8 outcomes. With equally likely outcomes, P(event) = favourable outcomes ÷ all outcomes, so P(a multiple of 3) = 2 ÷ 8 = 0.25, from 3 and 6. The complement, "not A", is everything outside A, so P(not a multiple of 3) = 1 - 0.25 = 0.75.',eq:'P(not A) = 1 - P(A)',
  pic:fig('8 equal sections: 3 and 6 are multiples of 3',SPIN)},
 {skill:'events',say:'A Venn diagram sorts the outcomes. On the 1-to-8 spinner, let A be "even" (2, 4, 6, 8) and B be "greater than 5" (6, 7, 8). "A and B", the intersection, is the overlap: 6 and 8. "A or B", the union, is everything in either circle: 2, 4, 6, 7, 8. Outside both are 1, 3 and 5.',
  pic:fig('A: even    B: greater than 5',VENN)},
 {skill:'addition',say:'For "or", add the probabilities, then take away the overlap so it is not counted twice: P(A or B) = P(A) + P(B) - P(A and B). Here 4/8 + 3/8 - 2/8 = 5/8 = 0.625, the five numbers in the circles. If A and B cannot happen together (mutually exclusive), the overlap is 0, so just add.',eq:'P(A or B) = P(A) + P(B) - P(A and B)',
  pic:{t:'board',title:'P(even or greater than 5)',lines:['P(A or B) = P(A) + P(B) - P(A and B)','= 4/8 + 3/8 - 2/8','= 5/8 = 0.625'],why:['','6 and 8 would count twice','2, 4, 6, 7, 8'],box:true},
  check:{prompt:tryIt(TRY[0]),answer:0.6,options:[0.6,0.7,0.5],hint:'Odd: 5 numbers. Greater than 8: 9 and 10. 9 is in both.',pic:tab('Spinner 1 to 10',[['odd','1, 3, 5, 7, 9'],['greater than 8','9, 10']],['Numbers'])}},
 {skill:'independent',say:'Two events are independent when one happening does not change the chance of the other, like a coin toss and a separate spin. Then P(A and B) = P(A) × P(B): heads, then a 4 on a 1-to-4 spinner, is 0.5 × 0.25 = 0.125. A tree diagram shows every path, and the four path probabilities add to 1.',eq:'independent: P(A and B) = P(A) × P(B)',
  pic:fig('A coin, then a 1-to-4 spinner',TREE1)},
 {skill:'independent',say:'To test whether two events are independent, check whether P(A and B) equals P(A) × P(B). If P(A) = 0.5, P(B) = 0.3 and P(A and B) = 0.15, then 0.5 × 0.3 = 0.15, so they are independent. Drawing two cards without putting the first back is not independent: the first draw changes the second.',
  pic:{t:'board',title:'Are A and B independent?',lines:['P(A) × P(B) = 0.5 × 0.3 = 0.15','P(A and B) = 0.15','equal, so A and B are independent'],why:['','given',''],box:true}},
 {skill:'conditional',say:'A conditional probability, P(B given A), is the chance of B once you know A happened, so only the outcomes in A count. On the spinner, given an even number, 2 of the 4 even outcomes (6 and 8) are greater than 5, so P(B given A) = 2 ÷ 4 = 0.5. The formula agrees: P(A and B) ÷ P(A) = 0.25 ÷ 0.5 = 0.5.',eq:'P(B given A) = P(A and B) ÷ P(A)',
  pic:fig('Given A: only the even numbers count',VENN_A),
  check:{prompt:tryIt(TRY[1]),answer:0.4,options:[0.4,0.144,0.36],hint:'Divide 0.24 by 0.6.',pic:tab('A fictional class',[['P(sport)','0.6'],['P(sport and instrument)','0.24']])}},
 {skill:'conditional',say:'In a two-way table, a condition picks out one row or column, and you divide by its total. In a fictional club, 18 of the 30 seniors play chess, so P(chess given senior) = 18 ÷ 30 = 0.6, while P(chess given junior) = 30 ÷ 50 = 0.6 as well: here grade and chess are independent.',
  pic:tab('A fictional chess club',[['juniors','30','20','50'],['seniors','18','12','30'],['total','48','32','80']],['chess','no chess','total'])},
 {skill:'multiplication',say:'For "and", multiply along a path: P(A and B) = P(A) × P(B given A). A fictional bag holds 4 red and 2 blue marbles. Drawing two without putting the first back, P(red, then red) = 4/6 × 3/5 = 12/30 = 0.4, because after one red is taken, 3 of the 5 left are red. With the first put back, it would be 4/6 × 4/6 instead.',eq:'P(A and B) = P(A) × P(B given A)',
  pic:fig('4 red, 2 blue: two draws, no putting back',TREE2)},
 {skill:'counting',say:'Counting helps when outcomes are many. There are n! = n × (n - 1) × ... × 1 orders of n things, so 4 runners can finish in 4! = 24 orders. If order matters, as for first, second and third, use permutations: 9P3 = 9 × 8 × 7 = 504. If order does not matter, as for a pair of people, use combinations: 9C2 = (9 × 8) ÷ 2 = 36.',eq:'nPr = n! ÷ (n - r)!,  nCr = n! ÷ (r!(n - r)!)',
  pic:{t:'board',title:'Orders, permutations, combinations',lines:['4! = 4 × 3 × 2 × 1 = 24','9P3 = 9 × 8 × 7 = 504','9C2 = (9 × 8) ÷ (2 × 1) = 36'],why:['orders of 4 runners','order matters','order does not matter']},
  check:{prompt:tryIt(TRY[2]),answer:15,options:[15,30,12],hint:'Order does not matter: 6 × 5 ÷ 2.',pic:tab('A committee',[['people','6'],['choose','2']])}},
 {skill:'counting',summary:true,say:'Putting Unit 5 together: list the sample space and count; "not" is 1 minus; "or" adds and takes away the overlap; "and" multiplies, by P(B given A), which is just P(B) for independent events; a conditional probability divides by the probability of the condition; and permutations count ordered choices while combinations count unordered ones. Traps: counting the overlap twice, forgetting to reduce the second draw when nothing is put back, and using a permutation when order does not matter.',pic:tab('Unit 5 at a glance',[['not A','1 - P(A)'],['A or B','P(A) + P(B) - P(A and B)'],['A and B','P(A) × P(B given A)'],['B given A','P(A and B) ÷ P(A)'],['order / no order','nPr / nCr']],['Rule'])}],
progression:{requires:['math-m-probability','math-h-math-1-descriptive-statistics'],operations:3,demand:'Count outcomes, add and multiply probabilities with the right correction, divide by the condition, and count arrangements and selections.'},
items(add){
 const seen=new Set(TRY);
 const put=(skill,prompt,answer,pic,explanation,accept)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,explanation,accept);};
 const SP='A fictional spinner has 10 equal sections numbered 1 to 10.';
 /* events: spinners, coins and two four-sided dice */
 for(const [what,set] of [['an even number',[2,4,6,8,10]],['a prime number',[2,3,5,7]],['a number that is not a multiple of 3',[1,2,4,5,7,8,10]],['an even number greater than 5',[6,8,10]],['a number less than 4',[1,2,3]]])
  put('events',`${SP} What is the probability, as a decimal, that it lands on ${what}?`,set.length/10,tab('Spinner 1 to 10',[['favorable',set.join(', ')]],['Outcomes']),`${set.length} of the 10 equal sections: ${set.length} ÷ 10 = ${num(set.length/10)}.`);
 for(const [what,v,how] of [['exactly one head',0.375,'HTT, THT and TTH: 3 of 8'],['at least one head',0.875,'every outcome except TTT: 7 of 8'],['no heads',0.125,'only TTT: 1 of 8'],['the same face all three times',0.25,'HHH and TTT: 2 of 8']])
  put('events',`A fair coin is tossed three times. What is the probability, as a decimal, of ${what}?`,v,tab('Three tosses',[['outcomes','8']]),`${how}, so ${num(v)}.`);
 put('events','A fair coin is tossed three times. How many outcomes are in the sample space?',8,tab('Three tosses',[['each toss','H or T']]),'Each toss has 2 outcomes: 2 × 2 × 2 = 8.');
 for(const [what,v,how] of [['the sum is 5',0.25,'(1, 4), (2, 3), (3, 2) and (4, 1): 4 of 16'],['the sum is at least 7',0.1875,'(3, 4), (4, 3) and (4, 4): 3 of 16'],['both dice show the same number',0.25,'4 doubles of 16']])
  put('events',`Two fair four-sided dice, numbered 1 to 4, are rolled. What is the probability, as a decimal, that ${what}?`,v,tab('Two four-sided dice',[['outcomes','4 × 4 = 16']]),`${how}: ${num(v)}.`);
 put('events','Two fair four-sided dice, numbered 1 to 4, are rolled. How many outcomes are in the sample space?',16,tab('Two four-sided dice',[['each die','4 outcomes']]),'4 × 4 = 16 ordered outcomes.');
 for(const p of [0.35,0.08])put('events',`The probability of rain tomorrow in a fictional town is ${p}. What is the probability, as a decimal, that it does not rain?`,r6(1-p),tab('Complement',[['P(rain)',`${p}`]]),`P(not A) = 1 - P(A) = 1 - ${p} = ${num(1-p)}.`);
 [['What does "A or B" (the union) contain?','the outcomes in A, in B, or in both',['only the outcomes in both A and B','only the outcomes in neither'],'The union, A or B, holds every outcome in A, in B, or in both. Only the outcomes in both make up the intersection, A and B.'],
  ['What does "A and B" (the intersection) contain?','the outcomes in both A and B',['the outcomes in A or B','the outcomes in neither'],'The intersection, A and B, holds only the outcomes that are in both A and B at once. A or B is the union, which is larger.'],
  ['What is the complement of an event A?','every outcome that is not in A',['every outcome in A','the outcomes in A and B'],'The complement of A is every outcome not in A, so P(not A) = 1 - P(A).']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k);
  put('events',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Events',[['A or B','union'],['A and B','intersection'],['not A','complement']],['Name']),why||`The answer is ${right}.`,[right]);});
 /* addition: or, with and without overlap */
 for(const [a,b,ab] of [[0.4,0.3,0.1],[0.55,0.25,0.15],[0.6,0.5,0.35],[0.2,0.45,0],[0.7,0.4,0.3],[0.35,0.35,0.2]])
  put('addition',`In a fictional survey, P(A) = ${a}, P(B) = ${b} and P(A and B) = ${ab}. What is P(A or B), as a decimal?`,r6(a+b-ab),tab('Given',[['P(A)',`${a}`],['P(B)',`${b}`],['P(A and B)',`${ab}`]]),`P(A or B) = ${a} + ${b} - ${ab} = ${num(a+b-ab)}.${ab===0?' (They cannot happen together, so nothing is taken away.)':''}`);
 for(const [what,A,B] of [['an even number or a number greater than 6',[2,4,6,8,10],[7,8,9,10]],['a prime number or an odd number',[2,3,5,7],[1,3,5,7,9]],['a number less than 3 or a number greater than 8',[1,2],[9,10]],['a multiple of 3 or a multiple of 4',[3,6,9],[4,8]],['an odd number or a number less than 5',[1,3,5,7,9],[1,2,3,4]]]){
  const both=A.filter(x=>B.includes(x)),u=new Set([...A,...B]).size;
  put('addition',`${SP} What is the probability, as a decimal, that it lands on ${what}?`,u/10,tab('Spinner 1 to 10',[['first event',A.join(', ')],['second event',B.join(', ')]],['Numbers']),`${A.length} ÷ 10 + ${B.length} ÷ 10 - ${both.length} ÷ 10 (in both: ${both.length?both.join(', '):'none'}) = ${num(u/10)}.`);}
 put('addition','From 20 fictional cards numbered 1 to 20, one is drawn at random. What is the probability, as a decimal, that it is a multiple of 3 or a multiple of 5?',0.45,tab('Cards 1 to 20',[['multiples of 3','6 cards'],['multiples of 5','4 cards'],['both (15)','1 card']]),'(6 + 4 - 1) ÷ 20 = 9 ÷ 20 = 0.45.');
 put('addition','From 20 fictional cards numbered 1 to 20, one is drawn at random. What is the probability, as a decimal, that it is even or a multiple of 5?',0.6,tab('Cards 1 to 20',[['even','10 cards'],['multiples of 5','4 cards'],['both','2 cards']]),'(10 + 4 - 2) ÷ 20 = 12 ÷ 20 = 0.6.');
 [['When can you find P(A or B) by simply adding P(A) and P(B)?','when A and B cannot both happen (they are mutually exclusive)',['always','when A and B are independent'],'P(A or B) = P(A) + P(B) - P(A and B). If A and B cannot both happen, P(A and B) = 0, so you just add. Independent events can still overlap.'],
  ['Why do you take away P(A and B) in the addition rule?','the overlap was counted once in P(A) and again in P(B)',['to make the answer smaller than 1 every time','because "or" means both must happen'],'Outcomes in both A and B are counted once in P(A) and again in P(B). Taking away P(A and B) once makes each outcome count only once.'],
  ['Can P(A or B) ever be less than P(A)?','no, because A or B includes all of A',['yes, when B is unlikely','yes, when A and B overlap'],'Every outcome in A is also in A or B, so P(A or B) is at least P(A). Adding B can only keep the probability the same or raise it.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+1);
  put('addition',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('The addition rule',[['P(A or B)','P(A) + P(B) - P(A and B)']],['']),why||`The answer is ${right}.`,[right]);});
 /* independent: products, tests of independence, and which events are independent */
 for(const [what,a,b] of [['heads on a fair coin and a 3 or a 9 on the spinner',0.5,0.2],['an even number on the spinner and heads on a fair coin',0.5,0.5],['a 4 on a fair four-sided die and tails on a fair coin',0.25,0.5],['heads on three separate tosses of a fair coin',0.5,0.25]])
  put('independent',`${SP} The events are independent. What is the probability, as a decimal, of ${what}?`,r6(a*b),tab('Independent events',[['first',`${a}`],['second',`${b}`]]),`Independent, so multiply: ${a} × ${b} = ${num(a*b)}.${/three separate/.test(what)?' (The last two tosses together have probability 0.25.)':''}`);
 for(const [a,b,ab] of [[0.5,0.4,0.2],[0.5,0.4,0.25],[0.3,0.6,0.18],[0.8,0.5,0.35],[0.25,0.2,0.05],[0.6,0.6,0.3]]){const ok=Math.abs(a*b-ab)<1e-9;
  put('independent',`P(A) = ${a}, P(B) = ${b} and P(A and B) = ${ab}. Are A and B independent? Answer yes or no.`,ok?'yes':'no',tab('Given',[['P(A)',`${a}`],['P(B)',`${b}`],['P(A and B)',`${ab}`]]),`P(A) × P(B) = ${num(a*b)}, which ${ok?'equals':'does not equal'} P(A and B) = ${ab}: ${ok?'yes':'no'}.`,YN[ok?'yes':'no']);}
 [['Which pair of events is independent?','getting heads on one coin toss and heads on the next',['drawing a red card, then another red card without putting the first back','a cloudy morning and rain that afternoon'],'A coin has no memory: the first toss does not change the chance of heads on the next, so they are independent. Drawing without replacement changes what is left.'],
  ['Two cards are drawn from a deck without the first being put back. Are the draws independent?','no, because the first draw changes what is left',['yes, a deck is always fair','yes, because each card is equally likely'],'Without replacement the deck changes: after a red card, only 25 of the 51 cards left are red, so the second draw depends on the first.'],
  ['If A and B are independent, what is P(B given A)?','P(B)',['P(A)','P(A) × P(B)'],'Independent means knowing A happened does not change the chance of B, so P(B given A) = P(B).'],
  ['Events A and B are independent, with P(A) = 0.3. What is P(A given B)?','0.3',['0.7','0.09'],'For independent events, knowing B does not change A: P(A given B) = P(A) = 0.3. The 0.09 mixes it up with a product of probabilities, and 0.7 is P(not A).'],
  ['A fair coin lands heads five times in a row. What is the chance of heads on the next toss?','0.5, because the tosses are independent',['less than 0.5, because tails is due','more than 0.5, because heads is on a streak'],'Each toss is independent, so past results do not change the next: P(heads) is still 0.5. Thinking tails is due is the gambler\'s fallacy.'],
  ['How can a two-way table show that two events are independent?','the conditional percents are the same for every group',['the table has more than two rows','the totals are equal'],'If the conditional percents are the same for every group, say 30% in each row, then knowing the group does not change the chance: the events are independent.'],
  ['Are mutually exclusive events with positive probabilities independent?','no, because if one happens the other cannot',['yes, always','only when they have the same probability'],'If A happens, B cannot, so P(B given A) = 0, while P(B) > 0. Knowing A changed the chance of B, so they are not independent.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+2);
  put('independent',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Independence',[['test','P(A and B) = P(A) × P(B)'],['same as','P(B given A) = P(B)']],['']),why||`The answer is ${right}.`,[right]);});
 /* conditional: from probabilities, from a spinner, and from two-way tables */
 for(const [a,ab] of [[0.5,0.1],[0.8,0.2],[0.4,0.3],[0.25,0.05],[0.6,0.45]])
  put('conditional',`P(A) = ${a} and P(A and B) = ${ab}. What is P(B given A), as a decimal?`,r6(ab/a),tab('Given',[['P(A)',`${a}`],['P(A and B)',`${ab}`]]),`P(B given A) = P(A and B) ÷ P(A) = ${ab} ÷ ${a} = ${num(ab/a)}.`);
 for(const [what,cond,B] of [['a 4 or a 6, given that it landed on an even number',[2,4,6,8,10],[4,6]],['an even number, given that it landed on a number greater than 6',[7,8,9,10],[8,10]],['a prime, given that it landed on an odd number',[1,3,5,7,9],[3,5,7]],['a number less than 3, given that it landed on a number less than 5',[1,2,3,4],[1,2]]]){
  const both=cond.filter(x=>B.includes(x));
  put('conditional',`${SP} What is the probability, as a decimal, that it landed on ${what}?`,both.length/cond.length,tab('Spinner 1 to 10',[['given',cond.join(', ')],['favorable',both.join(', ')]],['Numbers']),`Only the ${cond.length} given numbers count, and ${both.length} of them qualify: ${both.length} ÷ ${cond.length} = ${num(both.length/cond.length)}.`);}
 const T='In a fictional school, 200 students were asked about pets: of 120 ninth graders, 48 have a dog; of 80 tenth graders, 40 have a dog.';
 for(const [q,v,how] of [['What is the probability, as a decimal, that a ninth grader has a dog?',0.4,'48 ÷ 120'],['What is the probability, as a decimal, that a tenth grader has a dog?',0.5,'40 ÷ 80'],
  ['What is the probability, as a decimal, that a randomly chosen student is a ninth grader with a dog?',0.24,'48 ÷ 200'],['What is the probability, as a decimal, that a randomly chosen student has a dog?',0.44,'(48 + 40) ÷ 200']])
  put('conditional',`${T} ${q}`,v,tab('Two-way table',[['grade 9','48 dog, 72 no dog'],['grade 10','40 dog, 40 no dog']],['Counts']),`${how} = ${num(v)}.`);
 [['What does P(B given A) mean?','the probability of B once you know A happened',['the probability of A and B both happening','the probability of B before anything is known'],'P(B given A) is the chance of B when you already know A happened, so only outcomes in A count: P(B given A) = P(A and B) ÷ P(A).'],
  ['To find a conditional probability from a two-way table, what do you divide by?','the total of the row or column for the condition',['the grand total','the largest cell'],'Given the condition, only its row or column counts, so divide the cell by that row or column total, not by the grand total.'],
  ['Is P(B given A) always the same as P(A given B)?','no, they divide by different totals',['yes, always','only when A and B are independent'],'P(B given A) = P(A and B) ÷ P(A), but P(A given B) = P(A and B) ÷ P(B). Same top, different bottoms, so they are usually different.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k);
  put('conditional',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Conditional probability',[['P(B given A)','P(A and B) ÷ P(A)']],['']),why||`The answer is ${right}.`,[right]);});
 /* multiplication: draws with and without replacement, and P(A) × P(B given A) */
 for(const [r,b,what,rep] of [[2,3,'red then red',false],[3,2,'blue then blue',false],[3,2,'red then blue',false],[4,1,'red then red',false],[3,1,'red then red',false],[3,1,'red then blue',false],[2,3,'red then red',true],[1,4,'blue then blue',true]]){
  const n=r+b,[f,s]=what.split(' then '),p1=(f==='red'?r:b)/n,left2=rep?(s==='red'?r:b):(s==='red'?r-(f==='red'?1:0):b-(f==='blue'?1:0)),p2=left2/(rep?n:n-1);
  put('multiplication',`A fictional bag holds ${r} red and ${b} blue marbles. Two are drawn ${rep?'with the first put back':'without putting the first back'}. What is the probability, as a decimal, of ${what}?`,r6(p1*p2),tab('The bag',[['red',`${r}`],['blue',`${b}`],['first put back',rep?'yes':'no']]),`${frac(p1)} for the first draw, then ${left2} of the ${rep?n:n-1} marbles left: ${frac(p1)} × ${frac(p2)} = ${num(p1*p2)}.`);}
 for(const [a,bga] of [[0.6,0.5],[0.4,0.25],[0.75,0.8],[0.5,0.3],[0.9,0.5],[0.2,0.6]])
  put('multiplication',`P(A) = ${a} and P(B given A) = ${bga}. What is P(A and B), as a decimal?`,r6(a*bga),tab('Given',[['P(A)',`${a}`],['P(B given A)',`${bga}`]]),`P(A and B) = P(A) × P(B given A) = ${a} × ${bga} = ${num(a*bga)}.`);
 [['When marbles are drawn without putting the first back, what changes for the second draw?','the number of marbles left, and so its probability',['nothing at all','only the colors of the marbles'],'Without putting it back there is one marble fewer, so the second probability changes: with 3 red of 5, after a red the chance is 2 red of 4.'],
  ['P(A and B) = P(A) × P(B). When is this true?','when A and B are independent',['always','when A and B are mutually exclusive'],'In general P(A and B) = P(A) × P(B given A). For independent events P(B given A) = P(B), so it becomes P(A) × P(B).'],
  ['Why is P(A and B) never more than P(A)?','multiplying by P(B given A), which is at most 1, cannot make it bigger',['because P(B) is always small','because "and" means add'],'P(A and B) = P(A) × P(B given A), and P(B given A) is at most 1. Multiplying by a number no bigger than 1 cannot make P(A) bigger.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+1);
  put('multiplication',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('The multiplication rule',[['P(A and B)','P(A) × P(B given A)']],['']),why||`The answer is ${right}.`,[right]);});
 /* counting: factorials, permutations, combinations, and probabilities from them */
 for(const [q,v,how] of [['In how many different orders can 3 fictional runners finish a race?',6,'3! = 3 × 2 × 1 = 6'],['What is 5!?',120,'5 × 4 × 3 × 2 × 1 = 120'],
  ['In how many ways can a president and a vice president be chosen from 6 fictional club members?',30,'order matters: 6P2 = 6 × 5 = 30'],['In how many ways can gold, silver and bronze be awarded among 7 fictional runners?',210,'order matters: 7P3 = 7 × 6 × 5 = 210'],
  ['In how many ways can 3 of 6 fictional books be arranged in a row on a shelf?',120,'order matters: 6P3 = 6 × 5 × 4 = 120'],['How many different groups of 2 can be chosen from 5 fictional people?',10,'order does not matter: 5C2 = 5 × 4 ÷ 2 = 10'],
  ['How many different groups of 3 can be chosen from 10 fictional students?',120,'10C3 = 10 × 9 × 8 ÷ 6 = 120'],['How many different committees of 3 can be chosen from 9 fictional people?',84,'9C3 = 9 × 8 × 7 ÷ 6 = 84'],
  ['How many different sets of 4 toppings can be chosen from 7 fictional toppings?',35,'7C4 = 7 × 6 × 5 × 4 ÷ 24 = 35'],['How many 3-letter codes can be made from the letters A to E if no letter repeats?',60,'order matters: 5P3 = 5 × 4 × 3 = 60'],
  ['Two of 5 fictional people, one of them Ana, are chosen at random. What is the probability, as a decimal, that Ana is chosen?',0.4,'groups with Ana: 4 of the 10 possible pairs, so 4 ÷ 10 = 0.4'],
  ['A fictional lock code is 2 different digits from 1 to 5 in some order. What is the probability, as a decimal, of guessing it in one try?',0.05,'there are 5P2 = 20 codes, so 1 ÷ 20 = 0.05']])
  put('counting',q,v,tab('Counting',[['order matters','permutations'],['order does not matter','combinations']],['Use']),`${how[0].toUpperCase()+how.slice(1)}.`);
 [['Choosing a captain and a co-captain from a team: does order matter?','yes, so use permutations',['no, so use combinations','it does not matter which you use'],'Ann as captain with Ben as co-captain is different from Ben as captain with Ann as co-captain, so order matters: use permutations.'],
  ['Choosing 3 friends to invite to a movie: does order matter?','no, so use combinations',['yes, so use permutations','only if the friends are siblings'],'Inviting Ann, Ben and Cal is the same group in any order, so order does not matter: use combinations.'],
  ['Which is larger for the same n and r, with r at least 2: nPr or nCr?','nPr, because each group can be ordered in r! ways',['nCr, because groups are bigger','they are always equal'],'nPr = nCr × r!, because each group of r can be put in r! orders. With r at least 2, r! is at least 2, so nPr is larger: 5P2 = 20 but 5C2 = 10.'],
  ['What is 0!?','1',['0','undefined'],'0! is defined as 1: there is exactly one way to arrange nothing, and it keeps n! = n × (n - 1)! true for n = 1, since 1! = 1 × 0!.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+1);
  put('counting',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Counting',[['n!','orders of n things'],['nPr','ordered choices'],['nCr','unordered choices']],['Counts']),why||`The answer is ${right}.`,[right]);});
}};
