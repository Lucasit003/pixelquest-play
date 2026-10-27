// Middle School topic (Grade 7, CCSS 7.EE.B.4a): two-step equations. Every equation is built from its
// whole-number solution (px + q = r with r = p × solution + q, and so on), so the answer is known before
// the question is written; story problems are built the same way. People and prices are fictional.
const NAMES=['Mia','Leo','Ava','Omar','Zoe','Ravi','Ines','Kofi','Lena','Theo','Nadia','Sam'];
export default {
id:'math-m-two-step-equations',subject:'math',level:4,grade:7,standard:'CCSS 7.EE.B.4a',
title:'Two-step equations',
goal:'Solve equations like 3x + 5 = 26 and 4(x - 2) = 20 by undoing two steps in reverse order, and solve story problems that need two steps.',
points:20,
skills:{solve:'px + q = r',brackets:'Equations with brackets',story:'Two-step stories'},
steps:[
 {skill:'solve',say:'A two-step equation did two things to x: multiply, then add. Undo them in reverse order. For 3x + 5 = 26, first take away 5 from both sides: 3x = 21.',eq:'3x + 5 = 26  →  3x = 21',pic:{t:'balance',left:'3x + 5',right:'26',step:'take 5 from both sides',result:'3x = 21',solve:true}},
 {skill:'solve',say:'Then undo the multiplying: divide both sides by 3, so x = 7. Check: 3 × 7 + 5 = 26.',eq:'3x = 21  →  x = 7',pic:{t:'balance',left:'3x',right:'21',step:'divide both sides by 3',result:'x = 7',solve:true},
  check:{prompt:'Try it: what value of n makes 4n + 6 = 38 true?',answer:8,options:[8,11,176],hint:'Take 6 from both sides first, then divide by 4.',pic:{t:'balance',left:'4n + 6',right:'38'}}},
 {skill:'brackets',say:'With brackets, the multiplying happened last, so undo it first. For 4(x - 2) = 20, divide both sides by 4: x - 2 = 5.',eq:'4(x - 2) = 20  →  x - 2 = 5',pic:{t:'balance',left:'4(x - 2)',right:'20',step:'divide both sides by 4',result:'x - 2 = 5',solve:true}},
 {skill:'brackets',say:'Then add 2 to both sides: x = 7. Check: 4 × (7 - 2) = 4 × 5 = 20.',eq:'x - 2 = 5  →  x = 7',pic:{t:'balance',left:'x - 2',right:'5',step:'add 2 to both sides',result:'x = 7',solve:true},
  check:{prompt:'Try it: what value of y makes 3(y + 4) = 36 true?',answer:8,options:[8,12,32],hint:'Divide both sides by 3, then take away 4.',pic:{t:'balance',left:'3(y + 4)',right:'36'}}},
 {skill:'story',say:'Many stories are a fixed amount plus a rate. A gym charges $15 to join and $8 a visit; Sam paid $63, so 8v + 15 = 63, 8v = 48 and v = 6 visits.',eq:'8v + 15 = 63, so v = 6',pic:{t:'balance',left:'8v + 15',right:'63',step:'take 15, then divide by 8',result:'v = 6',solve:true}},
 {skill:'story',say:'Write what happened to the unknown in order, then undo it backwards. Check the answer in the story itself.',pic:{t:'balance',left:'5t + 12',right:'47'},
  check:{prompt:'Try it: a fictional taxi charges $12 plus $5 for each kilometre. A ride cost $47. How many kilometres long was the ride?',answer:7,options:[7,9,59],hint:'5k + 12 = 47: take away 12, then divide by 5.',pic:{t:'balance',left:'5k + 12',right:'47'}}}],
progression:{requires:['math-m-expressions-equations','math-m-integer-operations'],operations:3,demand:'Undo two operations in reverse order (or the bracket\'s multiplier first), keeping the balance level, and check by substitution.'},
items(add){
 const V=['x','n','y','m','k','a','w','b'];let i=0;
 /* px + q = r, px - q = r and x/p + q = r. */
 for(const sol of [3,4,6,7,9,11,12,15])for(const [p,q] of [[2,5],[3,8],[4,7],[5,9],[6,4],[7,10]]){const v=V[i%V.length],f=i++%3;
  if(f===0)add('solve',`What value of ${v} makes ${p}${v} + ${q} = ${p*sol+q} true?`,sol,{t:'balance',left:`${p}${v} + ${q}`,right:`${p*sol+q}`},`Take ${q} from both sides: ${p}${v} = ${p*sol}. Divide by ${p}: ${v} = ${sol}.`);
  else if(f===1)add('solve',`What value of ${v} makes ${p}${v} - ${q} = ${p*sol-q} true?`,sol,{t:'balance',left:`${p}${v} - ${q}`,right:`${p*sol-q}`},`Add ${q} to both sides: ${p}${v} = ${p*sol}. Divide by ${p}: ${v} = ${sol}.`);
  else add('solve',`What value of ${v} makes ${v} ÷ ${p} + ${q} = ${sol+q} true?`,sol*p,{t:'balance',left:`${v} ÷ ${p} + ${q}`,right:`${sol+q}`},`Take ${q} from both sides: ${v} ÷ ${p} = ${sol}. Multiply by ${p}: ${v} = ${sol*p}.`);}
 /* p(x + q) = r and p(x - q) = r. */
 let j=0;
 for(const sol of [5,6,8,9,10,13])for(const [p,q] of [[2,3],[3,4],[4,2],[5,6],[6,1],[3,7]]){const v=V[j%V.length],plus=j++%2===0;if(!plus&&sol<=q)continue;
  const inner=plus?sol+q:sol-q;
  add('brackets',`What value of ${v} makes ${p}(${v} ${plus?'+':'-'} ${q}) = ${p*inner} true?`,sol,{t:'balance',left:`${p}(${v} ${plus?'+':'-'} ${q})`,right:`${p*inner}`},`Divide both sides by ${p}: ${v} ${plus?'+':'-'} ${q} = ${inner}. Then ${plus?'take away':'add'} ${q}: ${v} = ${sol}.`);}
 /* Stories: a fixed amount plus a rate, built from the answer. */
 const S=[
  (w,f,r,n)=>[`A fictional gym charges $${f} to join and $${r} for each visit. ${w} paid $${f+r*n} in all. How many visits did ${w} make?`,`${r}v + ${f}`],
  (w,f,r,n)=>[`A fictional taxi charges $${f} plus $${r} for each kilometre. ${w}'s ride cost $${f+r*n}. How many kilometres long was it?`,`${r}k + ${f}`],
  (w,f,r,n)=>[`${w} already has ${f} stamps and buys packs of ${r} stamps. Now ${w} has ${f+r*n} stamps. How many packs did ${w} buy?`,`${r}p + ${f}`],
  (w,f,r,n)=>[`A fictional plant is ${f} cm tall and grows ${r} cm each week. How many weeks until it is ${f+r*n} cm tall?`,`${r}w + ${f}`]];
 let k=0;
 for(const n of [3,4,5,6,7,8,9,12])for(const [f,r] of [[10,4],[15,8],[12,5],[20,3],[6,9],[25,7]]){const w=NAMES[k%NAMES.length],[prompt,lhs]=S[k++%S.length](w,f,r,n);
  add('story',prompt,n,{t:'balance',left:lhs,right:`${f+r*n}`,hint:true},`${lhs} = ${f+r*n}: take away ${f} to get ${r*n}, then divide by ${r} to get ${n}.`);}
}
};
