// Middle School topic (Grade 6, C3 D2.His.1.6-8 and D2.His.4.6-8): generations and family trees. Every answer is
// computed from the numbers in its own question with the rules the lesson states: in this topic a generation is
// 25 years (real families vary); the generations between two years are the years between ÷ 25; and a family tree
// doubles each generation back, so n generations back there are 2 × 2 × ... (n times) ancestors, and the whole tree
// back to that generation holds 2 + 4 + ... of them. Every family and person is fictional.
const NM=['Ada','Ben','Cleo','Dev','Esme','Finn','Gia','Hugo','Iris','Jonah','Kira','Leo','Mira','Nell','Otto','Pia'];
const pow=n=>2**n;
const tab=(title,rows,hint)=>({t:'setups',title,head:'',rows,cols:['Value'],...(hint?{hint:true}:{})});
const NAMES_UP=['parents','grandparents','great-grandparents','great-great-grandparents'];
export default {
id:'history-m-generations',subject:'history',level:4,grade:6,standard:'C3 D2.His.1.6-8, D2.His.4.6-8',
title:'Generations and family trees',
goal:'Count the generations between two years, turn generations back into years, and work out how many ancestors a family tree holds.',
points:20,
skills:{count:'Counting generations',years:'Years from generations',tree:'Ancestors in a family tree'},
steps:[
 {skill:'count',say:'A generation is the time from a parent’s birth to their child’s birth. Real families vary, so historians use a round number, and this topic uses 25 years. From 1900 to 2000 is 100 years, which is 100 ÷ 25 = 4 generations.',eq:'100 ÷ 25 = 4',pic:tab('Generations',[['1900 to 2000','100 years'],['one generation','25 years'],['generations','4']])},
 {skill:'count',say:'Counting generations makes the past feel closer: a child born in 2000 is only about 8 generations after someone born in 1800, because 200 ÷ 25 = 8.',eq:'200 ÷ 25 = 8',pic:tab('From 1800 to 2000',[['years','200'],['generations','8']]),
  check:{prompt:'Try it: in this topic a generation is 25 years. How many generations are there between a fictional ancestor born in 1825 and a child born in 2000?',answer:7,options:[7,175,8],hint:'2000 - 1825 = 175. Divide by 25.',pic:tab('A fictional family',[['ancestor born','1825'],['child born','2000'],['generations','?']])}},
 {skill:'years',say:'Going back works the other way: multiply the generations by 25 and subtract. Someone 6 generations before a child born in 2010 was born about 2010 - 6 × 25 = 1860.',eq:'2010 - 6 × 25 = 1860',pic:tab('Six generations back',[['child born','2010'],['6 × 25','150 years'],['ancestor born','about 1860']])},
 {skill:'years',say:'The same rule finds a descendant’s birth year: a fictional girl born in 1750 might have a great-grandchild, 3 generations later, born about 1750 + 3 × 25 = 1825.',eq:'1750 + 3 × 25 = 1825',pic:tab('Three generations on',[['born','1750'],['3 × 25','75 years'],['great-grandchild born','about 1825']]),
  check:{prompt:'Try it: in this topic a generation is 25 years. A fictional boy was born in 2012. About what year was his ancestor 4 generations back born?',answer:1912,options:[1912,2112,1987],hint:'4 × 25 = 100. Take 100 from 2012.',pic:tab('A fictional family',[['born','2012'],['generations back','4'],['ancestor born','?']])}},
 {skill:'tree',say:'Everyone has 2 parents, 4 grandparents and 8 great-grandparents: each generation back, the number doubles. So 5 generations back there are 2 × 2 × 2 × 2 × 2 = 32 ancestors.',eq:'2 × 2 × 2 × 2 × 2 = 32',pic:tab('Ancestors each generation back',[['parents','2'],['grandparents','4'],['great-grandparents','8']])},
 {skill:'tree',say:'To count a whole family tree, add every generation: back to the great-grandparents that is 2 + 4 + 8 = 14 ancestors. Real trees can have fewer, because cousins sometimes married and share ancestors.',eq:'2 + 4 + 8 = 14',pic:tab('A tree back 3 generations',[['generation 1','2'],['generation 2','4'],['generation 3','8'],['all together','14']]),
  check:{prompt:'Try it: following the doubling rule, how many ancestors does a fictional child have 6 generations back?',answer:64,options:[64,12,36],hint:'Double 2 five more times: 4, 8, 16, 32, 64.',pic:tab('A fictional family tree',[['generations back','6'],['ancestors','?']])}}],
progression:{requires:['history-m-bce-ce','history-e-family-timeline'],operations:2,demand:'Divide years by 25, multiply generations by 25 and add or subtract, and double a number again and again or add the doublings.'},
items(add){
 let k=0;const N=()=>NM[k++%NM.length];
 /* Generations between two years (the Try-it's 1825 to 2000 is left out). */
 for(const [a,b] of [[1900,2000],[1800,2000],[1750,1900],[1850,2025],[1600,1800],[1725,1850],[1950,2025],[1500,1700],[1675,1900],[1925,2000],[1700,2000],[1575,1825],[1625,1750],[1550,1650],[1875,2025],[1650,1950],[1775,1975],[1450,1650]]){const n=N();
  add('count',`In this topic a generation is 25 years. How many generations are there between a fictional ancestor of ${n}’s born in ${a} and ${n}, born in ${b}?`,(b-a)/25,tab(`${n}’s fictional family`,[['ancestor born',`${a}`],[`${n} born`,`${b}`],['generations','?']]),`${b} - ${a} = ${b-a} years, and ${b-a} ÷ 25 = ${(b-a)/25} generations.`);}
 for(const g of [2,3,5,6,8,10,12,16]){const n=N();
  add('count',`In this topic a generation is 25 years. How many years do ${g} generations cover in ${n}’s fictional family?`,g*25,tab(`${n}’s fictional family`,[['generations',`${g}`],['one generation','25 years'],['years','?']]),`${g} × 25 = ${g*25} years.`);}
 for(const yrs of [50,125,175,250,300,400,75,225,350,500]){const n=N();
  add('count',`In this topic a generation is 25 years. ${n}’s fictional family has kept the same farm for ${yrs} years. How many generations is that?`,yrs/25,tab(`${n}’s fictional farm`,[['years',`${yrs}`],['generations','?']]),`${yrs} ÷ 25 = ${yrs/25} generations.`);}
 /* Birth years back and forward (the Try-it's 2012 and 4 generations back is left out). */
 for(const [b,g] of [[2010,6],[2000,3],[2015,5],[1990,4],[2005,8],[2020,2],[1975,7],[2008,10],[2016,9],[1995,11],[2022,12],[1980,3],[2003,5],[1960,6]]){const n=N();
  add('years',`In this topic a generation is 25 years. ${n} was born in ${b} in a fictional family. About what year was ${n}’s ancestor ${g} generations back born?`,b-g*25,tab(`${n}’s fictional family`,[['born',`${b}`],['generations back',`${g}`],['ancestor born','?']]),`${g} × 25 = ${g*25}, and ${b} - ${g*25} = ${b-g*25}.`);}
 for(const [b,g] of [[1750,3],[1600,4],[1820,2],[1700,6],[1850,5],[1500,8],[1660,7],[1900,3],[1525,9],[1775,4],[1625,10],[1880,2],[1550,6],[1725,5]]){const n=N();
  add('years',`In this topic a generation is 25 years. A fictional ancestor named ${n} was born in ${b}. About what year would a descendant ${g} generations later be born?`,b+g*25,tab(`${n}’s fictional family`,[['born',`${b}`],['generations later',`${g}`],['descendant born','?']]),`${g} × 25 = ${g*25}, and ${b} + ${g*25} = ${b+g*25}.`);}
 for(const [b,rel,g] of [[2000,'grandparents',2],[2010,'great-grandparents',3],[1990,'great-great-grandparents',4],[2016,'parents',1],[1985,'grandparents',2],[2004,'great-grandparents',3]]){const n=N();
  add('years',`In this topic a generation is 25 years. ${n} was born in ${b} in a fictional family. About what year were ${n}’s ${rel} born?`,b-g*25,tab(`${n}’s fictional family`,[['born',`${b}`],[rel,`${g} generation${g>1?'s':''} back`],['born','?']]),`${cap(rel)} are ${g} generation${g>1?'s':''} back: ${b} - ${g} × 25 = ${b-g*25}.`);}
 /* Ancestors in a tree (the Try-it's 6 generations back is left out). */
 for(const g of [1,2,3,4,5,7,8,9,10]){const n=N();
  add('tree',`Following the doubling rule, how many ancestors does ${n}, a fictional child, have ${g} generation${g>1?'s':''} back?`,pow(g),tab(`${n}’s fictional family tree`,[['generations back',`${g}`],['ancestors','?']]),`Doubling ${g} time${g>1?'s':''}: ${Array.from({length:g},(_,i)=>pow(i+1)).join(', ')}.`);}
 for(const g of [2,3,4,5,6,7]){const n=N(),tot=pow(g+1)-2;
  add('tree',`Following the doubling rule, how many ancestors are in ${n}’s fictional family tree altogether, counting every generation from the parents back to ${g} generations?`,tot,tab(`${n}’s fictional family tree`,[['generations',`1 to ${g}`],['ancestors in all','?']]),`${Array.from({length:g},(_,i)=>pow(i+1)).join(' + ')} = ${tot}.`);}
 NAMES_UP.forEach((rel,i)=>{const n=N();add('tree',`Following the doubling rule, how many ${rel} does ${n}, a fictional child, have?`,pow(i+1),tab(`${n}’s fictional family tree`,[[rel,'?']]),`${cap(rel)} are ${i+1} generation${i?'s':''} back: ${pow(i+1)}.`);});
 for(const g of [3,4,5,6,7,8,9,10]){const n=N();
  add('tree',`Following the doubling rule, how many generations back does ${n}, a fictional child, have ${pow(g)} ancestors?`,g,tab(`${n}’s fictional family tree`,[['ancestors',`${pow(g)}`],['generations back','?']]),`Doubling from 2: ${Array.from({length:g},(_,i)=>pow(i+1)).join(', ')}. ${pow(g)} comes after ${g} doublings.`);}
 for(const [g,y] of [[4,1900],[5,1875],[3,1925],[6,1850],[8,1800]]){const n=N();
  add('tree',`In this topic a generation is 25 years. ${n} was born in 2000 in a fictional family. Following the doubling rule, how many of ${n}’s ancestors were born about ${y}, ${g} generations back?`,pow(g),tab(`${n}’s fictional family tree`,[['born','2000'],['looking back to',`${y}`],['ancestors then','?']]),`2000 - ${y} = ${2000-y} years = ${g} generations, and doubling ${g} times gives ${pow(g)}.`);}
}
};
const cap=s=>s[0].toUpperCase()+s.slice(1);
