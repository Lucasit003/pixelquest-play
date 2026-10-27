// Middle School topic (Grade 6, CCSS 6.EE.A.2c, 6.EE.B.7): expressions and one-step equations. Every
// expression is evaluated here with the same order of operations the lesson teaches (powers, then
// multiplication and division, then addition and subtraction), and every equation is built from its
// solution, so the answer is known before the question is written. Every number stays a whole number.
// People and objects in the story problems are fictional.
const NAMES=['Mia','Leo','Ava','Omar','Zoe','Ravi','Ines','Kofi','Lena','Theo','Nadia','Sam'];
export default {
id:'math-m-expressions-equations',subject:'math',level:4,grade:6,standard:'CCSS 6.EE.A.2c, 6.EE.B.7',
title:'Expressions and one-step equations',
goal:'Evaluate an expression for a given value, solve a one-step equation by undoing what was done, and turn a story into an equation.',
points:20,
skills:{evaluate:'Evaluating expressions',solve:'Solving one-step equations',story:'Equations from stories'},
steps:[
 {skill:'evaluate',say:'An expression with a letter is a rule waiting for a number. To evaluate 3x + 5 when x = 4, put 4 where x is: 3 × 4 + 5.',eq:'3 × 4 + 5 = 17',pic:{t:'setups',title:'Evaluate 3x + 5 when x = 4',head:'Step',rows:[['put in x = 4','3 × 4 + 5'],['multiply first','12 + 5'],['then add','17']],cols:['Working']}},
 {skill:'evaluate',say:'The order of operations still holds: powers first, then multiplication, then addition. 2x² when x = 3 is 2 × 9 = 18, not 6² = 36.',eq:'2 × 3² = 2 × 9 = 18',pic:{t:'setups',title:'Evaluate 2x² when x = 3',head:'Step',rows:[['put in x = 3','2 × 3²'],['power first','2 × 9'],['then multiply','18']],cols:['Working']},
  check:{prompt:'Try it: what is the value of 4x + 3 when x = 5?',answer:23,options:[23,47,12],hint:'Multiply 4 by 5 first, then add 3.',pic:{t:'setups',title:'Evaluate 4x + 3 when x = 5',head:'Step',rows:[['put in x = 5','4 × 5 + 3']],cols:['Working']}}},
 {skill:'solve',say:'An equation says two sides are equal, like a level balance. To find n in n + 7 = 19, take 7 away from both sides. The balance stays level, and n = 12.',eq:'n + 7 = 19, so n = 19 - 7 = 12',pic:{t:'balance',left:'n + 7',right:'19',step:'take 7 from both sides',result:'n = 12',solve:true}},
 {skill:'solve',say:'Undo whatever was done to the letter. Multiplying is undone by dividing: 6m = 42 gives m = 42 ÷ 6 = 7. Check by putting it back: 6 × 7 = 42.',eq:'6m = 42, so m = 7',pic:{t:'balance',left:'6m',right:'42',step:'divide both sides by 6',result:'m = 7',solve:true},
  check:{prompt:'Try it: what value of y makes y - 9 = 14 true?',answer:23,options:[23,5,126],hint:'Undo taking away 9 by adding 9 to both sides.',pic:{t:'balance',left:'y - 9',right:'14'}}},
 {skill:'story',say:'A story becomes an equation when the unknown amount gets a letter. "Mia had some stickers, was given 8 more, and now has 23" is s + 8 = 23, so s = 15.',eq:'s + 8 = 23, so s = 15',pic:{t:'balance',left:'s + 8',right:'23',step:'take 8 from both sides',result:'s = 15',solve:true}},
 {skill:'story',say:'Read what happened to the unknown amount, write it as an equation, then undo it. Check the answer in the story, not only in the equation.',pic:{t:'balance',left:'5r',right:'40'},
  check:{prompt:'Try it: a fictional baker puts the same number of rolls on each of 5 trays and uses 40 rolls in all. How many rolls are on each tray?',answer:8,options:[8,35,200],hint:'5 trays times the rolls on each tray is 40: solve 5r = 40.',pic:{t:'balance',left:'5r',right:'40'}}}],
progression:{requires:['math-e-order-of-operations'],operations:2,demand:'Substitute a value and respect the order of operations, then reverse one operation to solve an equation, including one written from a story.'},
items(add){
 /* Evaluating: five expression shapes, each computed with the taught order of operations. */
 const SHAPES=[
  [(p,q)=>`${p}x + ${q}`,(p,q,x)=>p*x+q],
  [(p,q)=>`${p}(x + ${q})`,(p,q,x)=>p*(x+q)],
  [(p,q)=>`${p}x²`,(p,q,x)=>p*x*x],
  [(p,q)=>`x² + ${q}`,(p,q,x)=>x*x+q],
  [(p,q)=>`${p}x - ${q}`,(p,q,x)=>p*x-q]];
 const seen=new Set();
 SHAPES.forEach(([show,val],s)=>{for(const p of [2,3,4,5,6,7])for(const x of [2,3,4,5,6]){const q=((p*3+x*5+s*7)%11)+1;const e=show(p,q),v=val(p,q,x);if(v<=0||seen.has(e+x))continue;seen.add(e+x);
  if((p+x+s)%2)continue;
  add('evaluate',`What is the value of ${e} when x = ${x}?`,v,{t:'setups',title:'Evaluate the expression',head:'Given',rows:[['expression',e],['x',`${x}`]],cols:['Value']},`Put ${x} in place of x: ${e.replace(/x/g,`(${x})`)} = ${v}, doing powers first, then multiplication, then addition and subtraction.`);}});
 /* Solving: x + p = q, x - p = q, px = q and x/p = q, each built from its solution. */
 const VARS=['n','m','y','k','a','w'];let i=0;
 for(const sol of [4,7,9,12,15,18,23,31])for(const p of [3,5,6,8,11,14]){const v=VARS[i++%VARS.length],form=(sol+p)%4;
  if(form===0)add('solve',`What value of ${v} makes ${v} + ${p} = ${sol+p} true?`,sol,{t:'balance',left:`${v} + ${p}`,right:`${sol+p}`},`Take ${p} from both sides: ${v} = ${sol+p} - ${p} = ${sol}.`);
  else if(form===1)add('solve',`What value of ${v} makes ${v} - ${p} = ${sol} true?`,sol+p,{t:'balance',left:`${v} - ${p}`,right:`${sol}`},`Add ${p} to both sides: ${v} = ${sol} + ${p} = ${sol+p}.`);
  else if(form===2)add('solve',`What value of ${v} makes ${p}${v} = ${p*sol} true?`,sol,{t:'balance',left:`${p}${v}`,right:`${p*sol}`},`Divide both sides by ${p}: ${v} = ${p*sol} ÷ ${p} = ${sol}.`);
  else add('solve',`What value of ${v} makes ${v} ÷ ${p} = ${sol} true?`,sol*p,{t:'balance',left:`${v} ÷ ${p}`,right:`${sol}`},`Multiply both sides by ${p}: ${v} = ${sol} × ${p} = ${sol*p}.`);}
 /* Story equations: four kinds of change to an unknown starting amount. */
 let j=0;
 for(const start of [6,9,14,17,22,28,35,41,48,56,63,75])for(const p of [3,4,7,12]){const who=NAMES[j%NAMES.length],kind=j++%4;
  if(kind===0)add('story',`${who} had some stickers. A friend gave ${who} ${p} more, and now ${who} has ${start+p}. How many stickers did ${who} have at first?`,start,{t:'balance',left:`s + ${p}`,right:`${start+p}`,hint:true},`s + ${p} = ${start+p}, so s = ${start+p} - ${p} = ${start}.`);
  else if(kind===1)add('story',`After spending $${p}, ${who} has $${start} left. How many dollars did ${who} have before spending?`,start+p,{t:'balance',left:`d - ${p}`,right:`${start}`,hint:true},`d - ${p} = ${start}, so d = ${start} + ${p} = ${start+p}.`);
  else if(kind===2)add('story',`${who} packs the same number of marbles into each of ${p} bags and uses ${start*p} marbles in all. How many marbles are in each bag?`,start,{t:'balance',left:`${p}b`,right:`${start*p}`,hint:true},`${p}b = ${start*p}, so b = ${start*p} ÷ ${p} = ${start}.`);
  else add('story',`${who} cuts a fictional rope into ${p} equal pieces, and each piece is ${start} cm long. How long was the rope, in centimetres?`,start*p,{t:'balance',left:`r ÷ ${p}`,right:`${start}`,hint:true},`r ÷ ${p} = ${start}, so r = ${start} × ${p} = ${start*p} cm.`);}
}
};
