// Middle School topic (Grade 8, CCSS 8.EE.B.5-6, 8.F.B.4): slope and the equation of a line. Every line
// here is built from a whole-number slope m and intercept b; slope = rise ÷ run between two of its points,
// the intercept is y where x = 0, and y = mx + b gives any point. Contexts are fictional.
const P=(m,b,x)=>[x,m*x+b];
const pts=(a,c)=>`(${a[0]}, ${a[1]}) and (${c[0]}, ${c[1]})`;
export default {
id:'math-m-slope-lines',subject:'math',level:4,grade:8,standard:'CCSS 8.EE.B.5, 8.EE.B.6, 8.F.B.4',
title:'Slope and the equation of a line',
goal:'Find the slope of a line from two points, read the y-intercept from a table, and use y = mx + b to find points.',
points:20,
skills:{slope:'Slope from two points',intercept:'The y-intercept',equation:'Using y = mx + b'},
steps:[
 {skill:'slope',say:'Slope measures how steep a line is: how far it goes up (the rise) for each step across (the run). Slope = rise ÷ run = (change in y) ÷ (change in x).',eq:'slope = rise ÷ run',pic:{t:'setups',title:'Two points on a line',head:'',rows:[['x','1','4'],['y','3','9']],cols:['Point A','Point B']}},
 {skill:'slope',say:'From (1, 3) to (4, 9), y rises 9 - 3 = 6 while x runs 4 - 1 = 3. The slope is 6 ÷ 3 = 2. A line that falls from left to right has a negative slope.',eq:'(9 - 3) ÷ (4 - 1) = 2',pic:{t:'setups',title:'Two points on a line',head:'',rows:[['x','1','4'],['y','3','9'],['change','3 across','6 up']],cols:['Point A','Point B']},
  check:{prompt:'Try it: what is the slope of the line through (2, 5) and (6, 25)?',answer:5,options:[5,4,20],hint:'Change in y is 20, change in x is 4.',pic:{t:'setups',title:'Two points',head:'',rows:[['x','2','6'],['y','5','25']],cols:['Point A','Point B']}}},
 {skill:'intercept',say:'The y-intercept is where the line crosses the y-axis, the value of y when x = 0. In a table, look for x = 0, or step back to it using the slope.',pic:{t:'setups',title:'A line in a table',head:'',rows:[['x','0','1','2','3'],['y','4','7','10','13']],cols:['','','','']}},
 {skill:'intercept',say:'In this table y goes up 3 each time x goes up 1, so the slope is 3, and when x = 0, y = 4: the intercept is 4. The equation is y = 3x + 4.',eq:'y = 3x + 4',pic:{t:'setups',title:'A line in a table',head:'',rows:[['x','0','1','2','3'],['y','4','7','10','13']],cols:['','','','']},
  check:{prompt:'Try it: a fictional table pairs x = 1 with y = 9, x = 2 with y = 11 and x = 3 with y = 13. What is the y-intercept?',answer:7,options:[7,9,2],hint:'y goes up 2 for each 1 of x. Step back from x = 1 to x = 0.',pic:{t:'setups',title:'A line in a table',head:'',rows:[['x','1','2','3'],['y','9','11','13']],cols:['','','']}}},
 {skill:'equation',say:'In y = mx + b, m is the slope and b is the intercept. To find a point, put x in: for y = 2x + 5 and x = 6, y = 2 × 6 + 5 = 17.',eq:'y = 2 × 6 + 5 = 17',pic:{t:'setups',title:'y = 2x + 5',head:'',rows:[['x','0','6'],['y','5','17']],cols:['Start','Point']}},
 {skill:'equation',say:'A fictional taxi charging $3 to start and $2 a kilometre follows y = 2x + 3: the slope is the cost per kilometre and the intercept is the starting fee.',pic:{t:'setups',title:'A fictional taxi: y = 2x + 3',head:'',rows:[['kilometres','0','5'],['dollars','3','?']],cols:['Start','After 5 km']},
  check:{prompt:'Try it: a fictional line is y = 4x - 3. What is y when x = 5?',answer:17,options:[17,23,12],hint:'Multiply 4 by 5, then take away 3.',pic:{t:'setups',title:'y = 4x - 3',head:'',rows:[['x','5'],['y','?']],cols:['Point']}}}],
progression:{requires:['math-m-proportional','math-m-two-step-equations'],operations:2,demand:'Divide the change in y by the change in x, step back to x = 0 for the intercept, and substitute into y = mx + b.'},
items(add){
 /* Slope from two points, positive and negative, never a vertical line. */
 const seen=new Set();
 for(const m of [-4,-3,-2,-1,1,2,3,4,5])for(const b of [-5,-1,2,6])for(const [x1,x2] of [[1,4],[2,5],[-1,3]]){const a=P(m,b,x1),c=P(m,b,x2),k=pts(a,c);if(seen.has(k))continue;seen.add(k);
  if((m+b+x1)%3===0)continue;
  add('slope',`What is the slope of the line through ${k}?`,m,{t:'setups',title:'Two points',head:'',rows:[['x',`${a[0]}`,`${c[0]}`],['y',`${a[1]}`,`${c[1]}`]],cols:['Point A','Point B']},`Change in y: ${c[1]} - ${a[1]} = ${c[1]-a[1]}. Change in x: ${c[0]} - ${a[0]} = ${c[0]-a[0]}. Slope: ${c[1]-a[1]} ÷ ${c[0]-a[0]} = ${m}.`);}
 /* The y-intercept from three consecutive table values that do not include x = 0. */
 for(const m of [2,3,4,5,-2,-3])for(const b of [1,4,7,10,-2,-6])for(const x0 of [1,2]){const xs=[x0,x0+1,x0+2],ys=xs.map(x=>m*x+b);
  if((m*7+b+x0)%2)continue;
  add('intercept',`A fictional table pairs x = ${xs[0]} with y = ${ys[0]}, x = ${xs[1]} with y = ${ys[1]} and x = ${xs[2]} with y = ${ys[2]}. The points lie on a line. What is the y-intercept?`,b,{t:'setups',title:'A line in a table',head:'',rows:[['x',...xs.map(String)],['y',...ys.map(String)]],cols:['','',''],hint:true},`y changes by ${m} for each 1 of x, so step back ${x0} from x = ${x0}: ${ys[0]} - ${m} × ${x0} = ${b}.`);}
 /* Evaluate y = mx + b, and the x that gives a stated y. */
 let i=0;
 for(const m of [2,3,4,5,6,-2,-3])for(const b of [-4,1,3,8])for(const x of [2,5,7]){const y=m*x+b,eq=`y = ${m}x ${b<0?`- ${-b}`:`+ ${b}`}`,f=i++%2;
  if(f===0)add('equation',`A fictional line is ${eq}. What is y when x = ${x}?`,y,{t:'setups',title:eq,head:'',rows:[['x',`${x}`],['y','?']],cols:['Point']},`${m} × ${x} ${b<0?`- ${-b}`:`+ ${b}`} = ${y}.`);
  else add('equation',`A fictional line is ${eq}. What is x when y = ${y}?`,x,{t:'setups',title:eq,head:'',rows:[['x','?'],['y',`${y}`]],cols:['Point']},`${y} = ${m}x ${b<0?`- ${-b}`:`+ ${b}`}, so ${m}x = ${y-b} and x = ${x}.`);}
}
};
