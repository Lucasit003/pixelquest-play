// Middle School topic (Grade 8, CCSS 8.EE.C.7): linear equations with the unknown on both sides, with
// brackets, and with negative solutions. Every equation is built from its integer solution, so the answer
// is known before the question is written; the test substitutes it back. Stories are fictional.
const NAMES=['Mia','Leo','Ava','Omar','Zoe','Ravi','Ines','Kofi','Lena','Theo','Nadia','Sam'];
const sgn=n=>n<0?`- ${-n}`:`+ ${n}`;
export default {
id:'math-m-linear-equations',subject:'math',level:4,grade:8,standard:'CCSS 8.EE.C.7a-b',
title:'Equations with the unknown on both sides',
goal:'Solve equations like 5x + 3 = 2x + 18 by gathering the unknowns on one side, including equations with brackets and negative answers.',
points:20,
skills:{both:'Unknowns on both sides',brackets:'Brackets first',story:'Two plans that meet'},
steps:[
 {skill:'both',say:'When the unknown is on both sides, take the smaller amount of it away from both sides. In 5x + 3 = 2x + 18, take 2x from both sides: 3x + 3 = 18.',eq:'5x + 3 = 2x + 18  →  3x + 3 = 18',pic:{t:'balance',left:'5x + 3',right:'2x + 18',step:'take 2x from both sides',result:'3x + 3 = 18',solve:true}},
 {skill:'both',say:'Now it is a two-step equation: take 3 from both sides to get 3x = 15, then divide by 3, so x = 5. Check both sides: 5 × 5 + 3 = 28 and 2 × 5 + 18 = 28.',eq:'x = 5',pic:{t:'balance',left:'3x + 3',right:'18',step:'take 3, then divide by 3',result:'x = 5',solve:true},
  check:{prompt:'Try it: what value of n makes 4n + 1 = n + 13 true?',answer:4,options:[4,3,14],hint:'Take n from both sides first: 3n + 1 = 13.',pic:{t:'balance',left:'4n + 1',right:'n + 13'}}},
 {skill:'brackets',say:'Clear brackets first by multiplying out: 3(x + 4) = 2x + 15 becomes 3x + 12 = 2x + 15. Then gather the x terms: x + 12 = 15, so x = 3.',eq:'3(x + 4) = 2x + 15  →  x = 3',pic:{t:'balance',left:'3(x + 4)',right:'2x + 15',step:'multiply out, then take 2x',result:'x = 3',solve:true}},
 {skill:'brackets',say:'Answers can be negative. 2(y + 7) = 6 gives 2y + 14 = 6, so 2y = -8 and y = -4. Check: 2 × (-4 + 7) = 2 × 3 = 6.',eq:'y = -4',pic:{t:'balance',left:'2(y + 7)',right:'6',step:'multiply out, take 14, divide by 2',result:'y = -4',solve:true},
  check:{prompt:'Try it: what value of k makes 5(k - 2) = 3k + 4 true?',answer:7,options:[7,3,-7],hint:'Multiply out: 5k - 10 = 3k + 4. Then take 3k from both sides.',pic:{t:'balance',left:'5(k - 2)',right:'3k + 4'}}},
 {skill:'story',say:'Two plans cost the same when their totals are equal. A fictional gym charges $30 to join and $4 a visit; another charges nothing to join and $6 a visit.',pic:{t:'setups',title:'Two fictional plans',head:'',rows:[['to join','$30','$0'],['each visit','$4','$6']],cols:['Plan A','Plan B']}},
 {skill:'story',say:'Write each plan as an expression, set them equal, and solve. Plan A: 30 + 4v. Plan B: 6v. 30 + 4v = 6v gives 30 = 2v, so the plans cost the same after 15 visits.',eq:'30 + 4v = 6v  →  v = 15',pic:{t:'balance',left:'30 + 4v',right:'6v',step:'take 4v, then divide by 2',result:'v = 15',solve:true},
  check:{prompt:'Try it: a fictional plant is 12 cm tall and grows 3 cm a week; another is 4 cm tall and grows 5 cm a week. After how many weeks are they the same height?',answer:4,options:[4,8,2],hint:'12 + 3w = 4 + 5w. Take 3w and 4 from both sides.',pic:{t:'balance',left:'12 + 3w',right:'4 + 5w'}}}],
progression:{requires:['math-m-two-step-equations','math-m-integer-operations'],operations:3,demand:'Gather the unknown on one side, clear brackets by multiplying out, and solve, including negative answers, then check by substituting.'},
items(add){
 const V=['x','n','y','m','k','a','w','b'];let i=0;
 /* ax + b = cx + d with a > c, built from the solution (which may be negative). */
 for(const sol of [-6,-3,-2,2,3,4,5,7,9,12])for(const [a,c] of [[5,2],[7,3],[4,1],[6,4],[9,5]]){const v=V[i%V.length],b=((i*7)%13)+1,d=a*sol+b-c*sol;i++;
  add('both',`What value of ${v} makes ${a}${v} ${sgn(b)} = ${c===1?'':c}${v} ${sgn(d)} true?`,sol,{t:'balance',left:`${a}${v} ${sgn(b)}`,right:`${c===1?'':c}${v} ${sgn(d)}`},`Take ${c===1?'':c}${v} from both sides: ${a-c}${v} ${sgn(b)} = ${d}. Then ${a-c}${v} = ${d-b}, so ${v} = ${sol}.`);}
 /* p(x + q) = rx + s and p(x - q) = r, built from the solution. */
 let j=0;
 for(const sol of [-5,-4,-1,3,6,8,10,11])for(const [p,q,r] of [[3,4,1],[4,2,2],[5,3,2],[2,6,0],[6,1,3]]){const v=V[j%V.length],minus=j++%2===1,inner=minus?sol-q:sol+q,s=p*inner-r*sol;
  const lhs=`${p}(${v} ${minus?'-':'+'} ${q})`,rhs=r===0?`${s}`:`${r===1?'':r}${v} ${sgn(s)}`;
  add('brackets',`What value of ${v} makes ${lhs} = ${rhs} true?`,sol,{t:'balance',left:lhs,right:rhs},`Multiply out: ${p}${v} ${minus?'-':'+'} ${p*q} = ${rhs}.${r?` Take ${r===1?'':r}${v} from both sides.`:''} Solving gives ${v} = ${sol}. Check: ${p} × (${sol} ${minus?'-':'+'} ${q}) = ${p*inner}.`);}
 /* Two plans or two growing things meet: start1 + rate1·n = start2 + rate2·n at a whole n. */
 let k=0;
 for(const n of [2,3,4,5,6,8,10,12])for(const [r,s] of [[3,5],[4,7],[2,6],[5,8],[6,9],[1,4]]){const w=NAMES[k%NAMES.length],b=((k*3)%9)+2,a=b+(s-r)*n,kind=k++%2;
  if(kind===0)add('story',`A fictional gym charges $${a} to join and $${r} a visit. Another charges $${b} to join and $${s} a visit. After how many visits do both cost the same?`,n,{t:'setups',title:'Two fictional plans',head:'',rows:[['to join',`$${a}`,`$${b}`],['each visit',`$${r}`,`$${s}`]],cols:['Plan A','Plan B'],hint:true},`${a} + ${r}v = ${b} + ${s}v, so ${a-b} = ${s-r}v and v = ${n}.`);
  else add('story',`${w} has $${a} and saves $${r} a week. A friend has $${b} and saves $${s} a week. After how many weeks will they have the same amount?`,n,{t:'setups',title:'Two fictional savers',head:'',rows:[['now',`$${a}`,`$${b}`],['each week',`+$${r}`,`+$${s}`]],cols:[w,'Friend'],hint:true},`${a} + ${r}w = ${b} + ${s}w, so ${a-b} = ${s-r}w and w = ${n}.`);}
}
};
