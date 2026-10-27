// Middle School topic (Grade 7, CCSS 7.RP.A.2): proportional relationships. Every table is built here:
// a proportional table is y = k × x for a fixed k, and a non-proportional one breaks that rule on
// purpose (a fixed start-up amount, y = k × x + c, so y ÷ x changes). Answers are computed from the
// table: k = y ÷ x, "proportional" means every y ÷ x is equal, and a prediction is k × x or y ÷ k.
// Contexts are fictional.
const CTX=[
 {x:'hours worked',y:'dollars earned',xs:'hours',ys:'dollars',unit:'dollars per hour'},
 {x:'kilograms of apples',y:'cost in dollars',xs:'kilograms',ys:'dollars',unit:'dollars per kilogram'},
 {x:'minutes',y:'pages read',xs:'minutes',ys:'pages',unit:'pages per minute'},
 {x:'litres of fuel',y:'kilometres driven',xs:'litres',ys:'kilometres',unit:'kilometres per litre'},
 {x:'boxes',y:'pencils',xs:'boxes',ys:'pencils',unit:'pencils per box'}];
const table=(c,xs,ys,title)=>({t:'setups',title:title||`A fictional table: ${c.x} and ${c.y}`,head:'',rows:[[c.xs,...xs.map(String)],[c.ys,...ys.map(String)]],cols:xs.map((_,i)=>`Pair ${i+1}`)});
const XS=[[2,3,5],[1,4,6],[2,5,8],[3,4,7],[2,6,9],[1,3,8],[4,5,10],[3,6,11]];
/* "1 box", not "1 boxes" (Oct 14 playtest) */
const ONE=(n,w)=>n===1?(w==='boxes'?'box':w.replace(/s$/,'')):w;
export default {
id:'math-m-proportional',subject:'math',level:4,grade:7,standard:'CCSS 7.RP.A.2a-c',
title:'Proportional relationships',
goal:'Find the constant of proportionality in a table, decide whether a table is proportional, and use y = kx to predict.',
points:20,
skills:{constant:'The constant of proportionality',check:'Is it proportional',predict:'Predicting with y = kx'},
steps:[
 {skill:'constant',say:'Two amounts are proportional when one is always the same number times the other. That number is the constant of proportionality, k. In y = kx, k = y ÷ x for every pair.',eq:'k = y ÷ x',pic:{t:'setups',title:'A fictional job: hours and pay',head:'',rows:[['hours','2','3','5'],['dollars','24','36','60']],cols:['Pair 1','Pair 2','Pair 3']}},
 {skill:'constant',say:'In this table, 24 ÷ 2 = 12, 36 ÷ 3 = 12 and 60 ÷ 5 = 12. Every pair gives 12, so k = 12 dollars per hour, and y = 12x.',eq:'y = 12x',pic:{t:'setups',title:'A fictional job: hours and pay',head:'',rows:[['hours','2','3','5'],['dollars','24','36','60'],['y ÷ x','12','12','12']],cols:['Pair 1','Pair 2','Pair 3']},
  check:{prompt:'Try it: a fictional table shows 4 boxes holding 28 pencils and 6 boxes holding 42 pencils. What is the constant of proportionality, in pencils per box?',answer:7,options:[7,14,24],hint:'Divide the pencils by the boxes for one pair.',pic:{t:'setups',title:'Boxes and pencils',head:'',rows:[['boxes','4','6'],['pencils','28','42']],cols:['Pair 1','Pair 2']}}},
 {skill:'check',say:'A table is proportional only if y ÷ x is the same for every pair. One pair that gives a different number is enough to say no.',pic:{t:'setups',title:'Taxi fares',head:'',rows:[['kilometres','2','4','6'],['dollars','9','13','17'],['y ÷ x','4.5','3.25','2.83…']],cols:['Pair 1','Pair 2','Pair 3']}},
 {skill:'check',say:'A fare with a fixed start charge is not proportional: 9 ÷ 2 is 4.5 but 13 ÷ 4 is 3.25. Its graph is a straight line that does not pass through zero.',pic:{t:'setups',title:'Taxi fares',head:'',rows:[['kilometres','2','4','6'],['dollars','9','13','17']],cols:['Pair 1','Pair 2','Pair 3']},
  check:{prompt:'Try it: a fictional table pairs 2 hours with $30, 4 hours with $50 and 6 hours with $70. Is the table proportional: yes or no?',answer:'no',options:['no','yes'],hint:'Divide each y by its x and compare: 30 ÷ 2 and 50 ÷ 4.',pic:{t:'setups',title:'Hours and dollars',head:'',rows:[['hours','2','4','6'],['dollars','30','50','70']],cols:['Pair 1','Pair 2','Pair 3']}}},
 {skill:'predict',say:'Once you know k, the equation y = kx predicts any pair. With k = 12, 7 hours earn 12 × 7 = 84 dollars, and 96 dollars take 96 ÷ 12 = 8 hours.',eq:'y = 12 × 7 = 84',pic:{t:'setups',title:'A fictional job: y = 12x',head:'',rows:[['hours','2','7','?'],['dollars','24','?','96']],cols:['Known','Find y','Find x']}},
 {skill:'predict',say:'To find x from y, divide by k. To find y from x, multiply by k. Check that the new pair gives the same y ÷ x.',pic:{t:'setups',title:'Litres and kilometres',head:'',rows:[['litres','3','10'],['kilometres','45','?']],cols:['Known','Predict']},
  check:{prompt:'Try it: a fictional car drives 45 km on 3 litres of fuel, at a constant rate. How many kilometres does it drive on 10 litres?',answer:150,options:[150,52,135],hint:'Find k = 45 ÷ 3 first, then multiply by 10.',pic:{t:'setups',title:'Litres and kilometres',head:'',rows:[['litres','3','10'],['kilometres','45','?']],cols:['Known','Predict']}}}],
progression:{requires:['math-m-ratios'],operations:2,demand:'Divide each y by its x to find or test a constant, then multiply or divide by that constant to predict a missing value.'},
items(add){
 const KS=[3,4,6,7,8,9,12,15];
 /* The constant: from a three-pair table. */
 KS.forEach((k,i)=>{for(let j=0;j<4;j++){const c=CTX[(i+j)%CTX.length],xs=XS[(i*3+j)%XS.length],ys=xs.map(x=>k*x);
  add('constant',`A fictional table pairs ${c.x} with ${c.y}: ${xs.map((x,n)=>`${x} ${ONE(x,c.xs)} with ${ys[n]} ${ONE(ys[n],c.ys)}`).join(', ')}. The relationship is proportional. What is the constant of proportionality, in ${c.unit}?`,k,table(c,xs,ys),`${ys[0]} ÷ ${xs[0]} = ${k}, and every other pair gives ${k} too, so k = ${k}.`);}});
 /* Is it proportional: half the tables are y = kx, half y = kx + c with c > 0 (a start-up amount). */
 let n=0;
 for(const k of KS)for(const c0 of [0,0,2,5,0,6]){const c=CTX[n%CTX.length],xs=XS[n%XS.length],ys=xs.map(x=>k*x+c0),yes=c0===0;n++;
  add('check',`A fictional table pairs ${c.x} with ${c.y}: ${xs.map((x,i)=>`${x} ${ONE(x,c.xs)} with ${ys[i]} ${ONE(ys[i],c.ys)}`).join(', ')}. Is the relationship proportional: yes or no?`,yes?'yes':'no',table(c,xs,ys),yes?`Every y ÷ x is ${k}, so it is proportional.`:`${ys[0]} ÷ ${xs[0]} and ${ys[1]} ÷ ${xs[1]} are different, so it is not proportional.`);}
 /* Predicting with y = kx from one known pair, forwards and backwards. */
 let m=0;
 for(const k of KS)for(const [x0,x1] of [[2,7],[3,10],[4,9],[5,12],[6,11]]){const c=CTX[m++%CTX.length],y0=k*x0,y1=k*x1;
  if(m%2)add('predict',`In a fictional proportional relationship, ${x0} ${c.xs} go with ${y0} ${c.ys}. How many ${c.ys} go with ${x1} ${c.xs}?`,y1,{t:'setups',title:'A proportional relationship',head:'',rows:[[c.xs,`${x0}`,`${x1}`],[c.ys,`${y0}`,'?']],cols:['Known','Predict']},`k = ${y0} ÷ ${x0} = ${k}, so y = ${k} × ${x1} = ${y1}.`);
  else add('predict',`In a fictional proportional relationship, ${x0} ${c.xs} go with ${y0} ${c.ys}. How many ${c.xs} go with ${y1} ${c.ys}?`,x1,{t:'setups',title:'A proportional relationship',head:'',rows:[[c.xs,`${x0}`,'?'],[c.ys,`${y0}`,`${y1}`]],cols:['Known','Predict']},`k = ${y0} ÷ ${x0} = ${k}, so x = ${y1} ÷ ${k} = ${x1}.`);}
}
};
