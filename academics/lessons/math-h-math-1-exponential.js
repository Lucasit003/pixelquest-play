// High School course unit (docs/design/COURSES.md, docs/design/COURSE_QUALITY.md): Math 1, Unit 6, Exponential Functions,
// written to the Common Core integrated pathway's Math I standards (F-LE.1, F-LE.2, F-IF.2, F-LE.5, F-BF.2, F-IF.7e); our
// own wording and questions. Linear functions change by equal differences over equal intervals, exponential functions by
// equal factors; f(x) = a·b^x has initial value a and growth factor b (growth when b > 1, decay when 0 < b < 1), and a
// rate r gives b = 1 + r; an arithmetic sequence adds a common difference d (a(n) = a(1) + (n - 1)d) and a geometric
// sequence multiplies by a common ratio r (a(n) = a(1)·r^(n - 1)); the graph of a·b^x crosses the y-axis at a and gets
// ever closer to the x-axis on one side without touching it. Powers are written with ^ (2^x). Every answer here is a
// whole number or a terminating decimal; the stories and their numbers are fictional.
const tab=(title,rows,cols=['Value'])=>({t:'setups',title,head:'',rows,cols});
const num=v=>String(Math.round(v*1e6)/1e6);
const n=v=>(Math.round(v*1e6)/1e6).toLocaleString('en-US',{maximumFractionDigits:6});
/* a ratio that does not end, like 2/3, is written as a fraction rather than a rounded decimal */
/* points along a function, for drawing its graph as a smooth path (gfx/lesson-high.js plot) */
const curve=(f,x0,x1,n=60)=>Array.from({length:n+1},(_,i)=>{const x=x0+(x1-x0)*i/n;return [x,f(x)];});
const frac=v=>{if(Math.abs(v*1e4-Math.round(v*1e4))<1e-9)return num(v);for(let q=2;q<=12;q++){const p=Math.round(v*q);if(Math.abs(p/q-v)<1e-9)return `${p}/${q}`;}return num(v);};
/* lettered choices, the right one moved to position k */
const choose=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
/* The three Try-it questions in pool form; the generator skips them. */
const TRY=['A table gives x = 0, 1, 2, 3 and y = 4, 12, 36, 108. Does it show linear change, exponential change, or neither?',
 'A fictional town of 5,000 people grows by 10% each year. How many people live there after 2 years?',
 'What is the 6th term of the geometric sequence 3, 6, 12, ...?'];
const tryIt=s=>`Try it: ${s[0].toLowerCase()+s.slice(1)}`;
export default {
id:'math-h-math-1-exponential-functions',subject:'math',level:5,grade:9,standard:'CCSS F-LE.1, F-LE.2, F-IF.2, F-LE.5, F-BF.2, F-IF.7e',
title:'Exponential functions',
goal:'Tell linear change from exponential change, build exponential functions from tables and descriptions, work out growth and decay, read what each part of a model means, write arithmetic and geometric sequences, and describe exponential graphs.',
points:20,
skills:{compare:'Linear or exponential',build:'Building exponential functions',evaluate:'Growth and decay',interpret:'Reading a model',sequences:'Arithmetic and geometric sequences',graph:'Exponential graphs'},
outline:[['F-LE.1','Tell linear from exponential change',['compare']],['F-LE.2','Build exponential functions from tables, two points or descriptions',['build']],['F-IF.2','Evaluate exponential growth and decay',['evaluate']],
 ['F-LE.5','Interpret the parameters of an exponential model',['interpret']],['F-BF.2','Write arithmetic and geometric sequences',['sequences']],['F-IF.7e','Graph exponential functions and read their key features',['graph']]],
steps:[
 {skill:'compare',say:'Linear and exponential change look different in a table and on a graph. 1, 4, 7, 10 adds 3 each step, so it is linear and its graph is a straight line. 2, 4, 8, 16 doubles each step, so it is exponential and its graph curves upward. Check the differences first; if they are not equal, check the ratios.',
  pic:{t:'plot',title:'Adds 3 against doubles',x:[0,4],y:[0,34],lines:[{m:3,b:1,label:'1, 4, 7, 10'}],paths:[{pts:curve(x=>2*2**x,0,4),label:'2, 4, 8, 16'}],points:[0,1,2,3].flatMap(x=>[{x,y:3*x+1},{x,y:2*2**x}])},
  check:{prompt:tryIt(TRY[0]),answer:'exponential',options:['exponential','linear','neither'],hint:'Divide each y by the one before it.',pic:tab('The table',[['x','0, 1, 2, 3'],['y','4, 12, 36, 108']],[''])}},
 {skill:'compare',say:'Exponential growth always overtakes linear growth in the end. Here 10x starts well ahead of 2^x: at x = 5 it is 50 against 32. But 2^x catches up between x = 5 and x = 6, and after that the gap only widens, because it keeps doubling.',
  pic:{t:'plot',title:'10x against 2^x',x:[0,7],y:[0,130],lines:[{m:10,b:0,label:'10x'}],paths:[{pts:curve(x=>2**x,0,7),label:'2^x'}],points:[{x:5,y:50,label:'(5, 50)'},{x:5,y:32,label:'(5, 32)'}]}},
 {skill:'build',say:'An exponential function has the form f(x) = a·b^x. The initial value a is f(0), and the factor b is what f is multiplied by each step, f(1) ÷ f(0). If f(0) = 4 and f(1) = 12, then a = 4 and b = 3, so f(x) = 4·3^x and f(3) = 4 × 27 = 108.',eq:'f(x) = a·b^x,  a = f(0),  b = f(1) ÷ f(0)',
  pic:{t:'board',title:'Build f from f(0) = 4 and f(1) = 12',lines:['a = f(0) = 4','b = 12 ÷ 4 = 3','f(x) = 4·3^x','f(3) = 4 × 27 = 108'],why:['the starting value','the factor each step','',''],box:true}},
 {skill:'build',say:'A description builds the same model. A fictional culture of 200 yeast cells doubles every hour, so after h hours it has 200·2^h cells: 400 after one hour, 800 after two, and 200 × 16 = 3,200 after four.',eq:'cells = 200·2^h',
  pic:{t:'plot',title:'200 cells, doubling each hour',x:[0,5],y:[0,7000],paths:[{pts:curve(x=>200*2**x,0,5),label:'200·2^h'}],points:[0,1,2,3,4].map(h=>({x:h,y:200*2**h,label:h>=3?`(${h}, ${(200*2**h).toLocaleString('en-US')})`:''}))}},
 {skill:'evaluate',say:'Growth by a percent r each period multiplies by 1 + r. A fictional $2,000 earning 5% a year is multiplied by 1.05 each year: $2,100 after one year and 2,100 × 1.05 = $2,205 after two. The second year earns more than the first, because it earns on the first year\'s gain too.',eq:'amount = start × (1 + r)^t',
  pic:{t:'board',title:'$2,000 growing 5% a year',lines:['year 1: 2,000 × 1.05 = 2,100','year 2: 2,100 × 1.05 = 2,205','or at once: 2,000 × 1.05² = 2,205'],why:['+ $100','+ $105',''],box:true},
  check:{prompt:tryIt(TRY[1]),answer:6050,options:[6050,6000,5500],hint:'Multiply 5,000 by 1.1, then by 1.1 again.',pic:tab('A fictional town',[['start','5,000'],['growth','10% a year'],['years','2']])}},
 {skill:'evaluate',say:'Decay by a percent r multiplies by 1 - r each period, so losing 20% a year keeps 0.8 of the value. Half-life is decay by halves: a fictional 64-gram sample with a half-life of 3 years has 32 grams after 3 years, 16 after 6 and 8 after 9.',eq:'decay: × (1 - r) each period',
  pic:{t:'plot',title:'64 grams, half-life 3 years',x:[0,12],y:[0,70],paths:[{pts:curve(t=>64*0.5**(t/3),0,12),label:'64(0.5)^(t/3)'}],points:[0,3,6,9].map(t=>({x:t,y:64*0.5**(t/3),label:`${64*0.5**(t/3)} g`}))}},
 {skill:'interpret',say:'Each part of a model has a meaning. In P(t) = 4,500(1.03)^t for a fictional town, 4,500 is the population when t = 0, and 1.03 = 1 + 0.03 means it grows 3% a year. In V(t) = 12,000(0.9)^t, the value starts at $12,000 and falls 10% a year. A factor above 1 is growth; between 0 and 1 is decay.',
  pic:{t:'board',title:'Reading a model',lines:['P(t) = 4,500(1.03)^t','V(t) = 12,000(0.9)^t'],why:['starts at 4,500; × 1.03 is +3% a year','starts at $12,000; × 0.9 is -10% a year']}},
 {skill:'sequences',say:'A sequence is a list of numbers in order. An arithmetic sequence adds a common difference d: 6, 11, 16, ... has d = 5, its nth term is a(n) = 6 + 5(n - 1), and its 15th term is 6 + 70 = 76. Plotted against n, its terms lie on a straight line: arithmetic sequences are linear.',eq:'a(n) = a(1) + (n - 1)d',
  pic:{t:'plot',title:'6, 11, 16, ... adds 5',x:[0,7],y:[0,40],lines:[{m:5,b:1,label:'a(n) = 6 + 5(n - 1)'}],points:[1,2,3,4,5,6].map(n=>({x:n,y:5*n+1}))}},
 {skill:'sequences',say:'A geometric sequence multiplies by a common ratio r: 5, 15, 45, ... has r = 3, its nth term is a(n) = 5·3^(n - 1), and its 5th term is 5 × 81 = 405. Plotted against n, its terms curve upward: geometric sequences are exponential.',eq:'a(n) = a(1)·r^(n - 1)',
  pic:{t:'plot',title:'5, 15, 45, ... multiplies by 3',x:[0,6],y:[0,450],paths:[{pts:curve(n=>5*3**(n-1),1,5),label:'a(n) = 5·3^(n - 1)'}],points:[1,2,3,4,5].map(n=>({x:n,y:5*3**(n-1),label:n===5?'(5, 405)':''}))},
  check:{prompt:tryIt(TRY[2]),answer:96,options:[96,192,18],hint:'The ratio is 2. The 6th term is 3·2^5.',pic:tab('The sequence',[['terms','3, 6, 12, ...']],[''])}},
 {skill:'graph',say:'The graph of f(x) = a·b^x with a > 0 crosses the y-axis at a. It rises from left to right when b > 1 and falls when 0 < b < 1. Here 2·3^x and 2·(1/3)^x both cross at (0, 2), one rising and one falling, and both stay above the x-axis: the range is all positive numbers.',
  pic:{t:'plot',title:'Growth and decay through (0, 2)',x:[-3,3],y:[0,12],paths:[{pts:curve(x=>2*3**x,-3,1.6),label:'2·3^x'},{pts:curve(x=>2*(1/3)**x,-1.6,3),label:'2·(1/3)^x'}],points:[{x:0,y:2,label:'(0, 2)'}]}},
 {skill:'graph',say:'On one side an exponential graph gets closer and closer to a horizontal line without touching it: a horizontal asymptote. For a·b^x it is the x-axis, y = 0. Subtracting 2, as in 2^x - 2, moves the graph and its asymptote down to y = -2, and the range becomes all numbers greater than -2.',
  pic:{t:'plot',title:'2^x - 2 and its asymptote',x:[-5,3],y:[-4,7],lines:[{m:0,b:-2,label:'y = -2',dash:true}],paths:[{pts:curve(x=>2**x-2,-5,3),label:'2^x - 2'}]}},
 {skill:'graph',summary:true,say:'Putting Unit 6 together: equal differences mean linear, equal ratios mean exponential; f(x) = a·b^x starts at a and multiplies by b each step; growth by r% multiplies by 1 + r, decay by 1 - r; arithmetic sequences add, geometric sequences multiply; and exponential graphs cross the y-axis at a and hug an asymptote. Traps: 5% growth is a factor of 1.05, not 0.05 or 5; and a decay factor of 0.85 is a 15% loss, not 85%.',pic:tab('Unit 6 at a glance',[['table','differences or ratios'],['model','a·b^x'],['growth r','× (1 + r)'],['decay r','× (1 - r)'],['sequences','add d or multiply by r']],['Key idea'])}],
progression:{requires:['math-h-exponent-rules','math-h-linear-functions'],operations:3,demand:'Compare differences and ratios, multiply repeatedly by a factor, turn percents into factors and back, and find terms of sequences.'},
items(add){
 const seen=new Set(TRY);
 const put=(skill,prompt,answer,pic,explanation,accept)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,explanation,accept);};
 /* compare: classify a table, the factor of an exponential table, and the idea */
 const kind=ys=>{const d=ys.slice(1).map((y,i)=>y-ys[i]),r=ys.slice(1).map((y,i)=>y/ys[i]);return d.every(v=>Math.abs(v-d[0])<1e-9)?'linear':r.every(v=>Math.abs(v-r[0])<1e-9)?'exponential':'neither';};
 for(const ys of [[2,5,8,11],[20,16,12,8],[-3,-1,1,3],[7,7.5,8,8.5],[3,6,12,24],[80,40,20,10],[2,6,18,54],[1000,1100,1210,1331],[64,48,36,27],[1,2,4,7],[0,1,4,9],[5,10,20,35]]){const k=kind(ys),list=ys.map(n).join(', ');
  put('compare',`A table gives x = 0, 1, 2, 3 and y = ${list}. Does it show linear change, exponential change, or neither?`,k,tab('The table',[['x','0, 1, 2, 3'],['y',list]],['']),k==='linear'?`The y values go up by the same amount each step (${num(ys[1]-ys[0])}), so the change is linear.`:k==='exponential'?`Each y is ${num(ys[1]/ys[0])} times the one before, so the change is exponential.`:'The differences are not equal and neither are the ratios, so it is neither.');}
 for(const ys of [[3,6,12,24],[80,40,20,10],[64,48,36,27],[1000,1100,1210,1331],[2,6,18,54],[5,7.5,11.25,16.875]]){const list=ys.map(n).join(', '),b=ys[1]/ys[0];
  put('compare',`The table y = ${list} (for x = 0, 1, 2, 3) is exponential. What is its growth factor, the number y is multiplied by each step?`,Math.round(b*1e6)/1e6,tab('The table',[['y',list]],['']),`Divide any y by the one before: ${n(ys[1])} ÷ ${n(ys[0])} = ${num(b)}.${b<1?' A factor below 1 means decay.':''}`);}
 [['Over equal steps, a linear function changes by equal differences. How does an exponential function change?','by equal factors',['by equal differences','by a factor that grows each step'],'An exponential function multiplies by the same factor over equal steps: in 2^x, each step of 1 multiplies by 2. A linear one adds the same amount.'],
  ['Which eventually becomes larger as x grows: 100x or 2^x?','2^x',['100x','they stay equal forever'],'Exponential growth overtakes linear: at x = 10, 2^x = 1,024 while 100x = 1,000. After that 2^x doubles each step, but 100x only adds 100.'],
  ['A fictional savings jar gains $5 every week. Is that linear or exponential growth?','linear',['exponential','neither'],'Adding the same amount, $5, every week is a constant difference, so the growth is linear. Exponential growth multiplies by a factor.'],
  ['A fictional account gains 5% of its value every year. Is that linear or exponential growth?','exponential',['linear','neither'],'Gaining 5% of the current value means multiplying by 1.05 every year, the same factor each step, so the growth is exponential.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k);
  put('compare',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Linear or exponential',[['linear','adds the same amount'],['exponential','multiplies by the same factor']],['Each step']),why||`The answer is ${right}.`,[right]);});
 /* build: from f(0) and f(1), and from descriptions */
 for(const [a,f1,x] of [[5,15,3],[200,100,4],[2,8,3],[81,54,2],[10,12,3],[64,16,3]]){const b=f1/a,v=a*b**x;
  put('build',`An exponential function has f(0) = ${a} and f(1) = ${f1}. What is f(${x})?`,Math.round(v*1e6)/1e6,tab('Two values',[['f(0)',`${a}`],['f(1)',`${f1}`]]),`a = f(0) = ${a} and b = ${f1} ÷ ${a} = ${frac(b)}, so f(x) = ${a}·(${frac(b)})^x and f(${x}) = ${a} × (${frac(b)})^${x} = ${n(v)}.`);}
 for(const [q,v,how] of [
  ['A fictional colony starts with 50 bacteria and triples every hour. How many bacteria are there after 4 hours?',4050,'50 × 3^4 = 50 × 81 = 4,050'],
  ['A fictional car is worth $24,000 and loses 15% of its value each year. What is it worth after 2 years, in dollars?',17340,'24,000 × 0.85 × 0.85 = 17,340'],
  ['A fictional town of 8,000 people grows 5% each year. How many people live there after 2 years?',8820,'8,000 × 1.05 × 1.05 = 8,820'],
  ['A fictional ball dropped from 2 meters bounces back to 80% of its height each time. How high does it rise after the 3rd bounce, in meters?',1.024,'2 × 0.8^3 = 2 × 0.512 = 1.024'],
  ['A fictional deposit of $1,500 earns 4% interest each year, added once a year. What is it worth after 2 years, in dollars?',1622.4,'1,500 × 1.04 × 1.04 = 1,622.40'],
  ['A fictional patient takes 400 mg of a medicine, and the body removes 25% of what is left each hour. How many milligrams remain after 3 hours?',168.75,'400 × 0.75^3 = 400 × 0.421875 = 168.75']])
  put('build',q,v,tab('Growth or decay',[['model','start × factor ^ time']],['']),`${how}.`);
 [['Which function starts at 300 and grows 4% each year?','f(t) = 300(1.04)^t',['f(t) = 300(0.04)^t','f(t) = 300 + 4t'],'Growing 4% keeps 100% and adds 4%, so multiply by 1 + 0.04 = 1.04 each year: f(t) = 300(1.04)^t. A factor of 0.04 would shrink it.'],
  ['Which function starts at 60 and halves every step?','f(t) = 60(0.5)^t',['f(t) = 60 - 0.5t','f(t) = 0.5(60)^t'],'Halving means multiplying by 0.5 each step, starting at 60: f(t) = 60(0.5)^t. Taking away 0.5t is linear, not halving.'],
  ['Which function starts at 1,200 and loses 10% each year?','f(t) = 1,200(0.9)^t',['f(t) = 1,200(0.1)^t','f(t) = 1,200(1.1)^t'],'Losing 10% leaves 100% - 10% = 90%, so multiply by 0.9 each year: f(t) = 1,200(0.9)^t. A factor of 0.1 would keep only 10%.'],
  ['Which function starts at 7 and triples every step?','f(t) = 7(3)^t',['f(t) = 3(7)^t','f(t) = 7 + 3t'],'In a·b^t, a = 7 is the start and b = 3 the factor, so f(t) = 7(3)^t. Check: f(0) = 7 and f(1) = 21. 3(7)^t swaps them.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+1);
  put('build',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('f(t) = a·b^t',[['a','where it starts'],['b','the factor each step']],['Means']),why||`The answer is ${right}.`,[right]);});
 /* evaluate: growth, decay, half-lives and doubling */
 for(const [p,r,t] of [[1000,10,2],[500,-20,3],[2500,4,2],[800,-25,2],[6000,5,3],[1200,-10,3],[50,20,2],[4000,-5,2]]){const v=p*(1+r/100)**t;
  put('evaluate',`A fictional amount of ${n(p)} ${r>0?'grows':'shrinks'} by ${Math.abs(r)}% each year. What is it after ${t} years?`,Math.round(v*1e6)/1e6,tab('The amount',[['start',n(p)],['change',`${r>0?'+':'-'}${Math.abs(r)}% a year`],['years',`${t}`]]),`Each year multiply by ${num(1+r/100)}: ${n(p)} × ${num(1+r/100)}^${t} = ${n(v)}.`);}
 for(const [a,h,t,u] of [[80,5,15,'years'],[640,3,12,'days'],[96,2,10,'hours'],[1000,8,24,'years']]){const v=a*0.5**(t/h);
  put('evaluate',`A fictional sample of ${a} grams has a half-life of ${h} ${u}. How many grams are left after ${t} ${u}?`,Math.round(v*1e6)/1e6,tab('Half-life',[['start',`${a} g`],['half-life',`${h} ${u}`],['time',`${t} ${u}`]]),`${t} ÷ ${h} = ${t/h} half-lives, so halve ${t/h} times: ${a} × 0.5^${t/h} = ${n(v)} grams.`);}
 for(const [a,d,t,u,unit] of [[300,20,120,'minutes','cells'],[25,3,12,'years','rabbits'],[1,1,10,'days','bacteria']]){const v=a*2**(t/d);
  put('evaluate',`A fictional population of ${a} ${unit} doubles every ${d} ${d===1?u.replace(/s$/,''):u}. How many are there after ${t} ${u}?`,v,tab('Doubling',[['start',`${a}`],['doubles every',`${d} ${u}`],['time',`${t} ${u}`]]),`${t} ÷ ${d} = ${t/d} doublings: ${a} × 2^${t/d} = ${n(v)}.`);}
 put('evaluate','A fictional $1,000 earns simple interest of 5% a year: $50 each year, never on earlier interest. How many dollars of interest does it earn in 3 years?',150,tab('Simple interest',[['each year','$50'],['years','3']]),'Simple interest grows linearly: 50 × 3 = $150.');
 put('evaluate','A fictional $1,000 earns 5% interest compounded once a year. How many dollars of interest does it earn in 3 years, to the nearest cent?',157.63,tab('Compound interest',[['factor','1.05 a year'],['years','3']]),'Compound interest grows exponentially: 1,000 × 1.05^3 = 1,157.625, which rounds to $1,157.63, so the interest is $157.63, more than simple interest\'s $150.');
 /* interpret: percent rates from factors, starting values, and meanings */
 for(const [a,b] of [[250,1.06],[900,0.92],[40,1.15],[5000,0.7],[1200,1.025],[300,0.995]]){const r=Math.round(Math.abs(b-1)*100*1e6)/1e6;
  put('interpret',`In f(t) = ${n(a)}(${b})^t, by what percent does f ${b>1?'grow':'shrink'} each period?`,r,tab('The model',[['f(t)',`${n(a)}(${b})^t`]],['']),`${b} = 1 ${b>1?'+':'-'} ${num(Math.abs(b-1))}, so f ${b>1?'grows':'shrinks'} by ${r}% each period.`);}
 for(const [a,b] of [[18000,0.85],[3200,1.02],[75,1.3]])put('interpret',`For V(t) = ${n(a)}(${b})^t, what is V(0)?`,a,tab('The model',[['V(t)',`${n(a)}(${b})^t`]],['']),`Any nonzero number to the power 0 is 1, so V(0) = ${n(a)}: the starting amount.`);
 [['In P(t) = 3,200(1.02)^t for a fictional town, what does 3,200 stand for?','the population at t = 0',['the yearly increase','the population after 2 years'],'In a·b^t, a is the value at t = 0: P(0) = 3,200 × 1.02⁰ = 3,200 × 1 = 3,200. So it is the starting population.'],
  ['In P(t) = 3,200(1.02)^t for a fictional town, what does 1.02 show?','the population grows 2% each year',['the population grows by 1.02 people each year','the population doubles each year'],'1.02 = 1 + 0.02, so each year the population is multiplied by 1.02, which adds 2% of itself.'],
  ['In V(t) = 18,000(0.85)^t for a fictional car\'s value, what does 0.85 show?','the value falls 15% each year',['the value falls 85% each year','the value falls $0.85 each year'],'0.85 = 1 - 0.15, so each year the value keeps 85% and loses 15%. The 0.85 is a factor, not a dollar amount.'],
  ['Is f(t) = 40(0.6)^t exponential growth or decay?','decay, because 0.6 is between 0 and 1',['growth, because 40 is more than 1','growth, because t is positive'],'The factor b = 0.6 is between 0 and 1, so each step keeps only 60%: decay. The starting value 40 does not decide growth or decay.'],
  ['Is g(t) = 0.5(1.8)^t exponential growth or decay?','growth, because 1.8 is more than 1',['decay, because 0.5 is less than 1','decay, because 1.8 is less than 2'],'The factor b = 1.8 is more than 1, so each step multiplies by 1.8, which is growth. The start value 0.5 only sets where it begins.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+2);
  put('interpret',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Reading a·b^t',[['a','the value at t = 0'],['b > 1','growth of (b - 1) × 100%'],['0 < b < 1','decay of (1 - b) × 100%']],['Means']),why||`The answer is ${right}.`,[right]);});
 /* sequences: terms of arithmetic and geometric sequences, the next term, and the kind */
 for(const [a,d,k] of [[3,4,20],[50,-6,10],[-2,3.5,9],[12,0.5,25],[100,-15,8]]){const v=a+(k-1)*d,list=[a,a+d,a+2*d].map(n).join(', ');
  put('sequences',`What is the ${k}th term of the arithmetic sequence ${list}, ...?`,Math.round(v*1e6)/1e6,tab('The sequence',[['terms',`${list}, ...`],['difference',num(d)]]),`a(${k}) = ${n(a)} + (${k} - 1) × ${num(d)} = ${n(v)}.`);}
 for(const [a,r,k] of [[2,3,6],[64,0.5,7],[5,2,8],[1000,0.5,5],[3,-2,5],[0.5,4,4]]){const v=a*r**(k-1),list=[a,a*r,a*r*r].map(n).join(', ');
  put('sequences',`What is the ${k}th term of the geometric sequence ${list}, ...?`,Math.round(v*1e6)/1e6,tab('The sequence',[['terms',`${list}, ...`],['ratio',frac(r)]]),`a(${k}) = ${n(a)} × (${frac(r)})^${k-1} = ${n(v)}.`);}
 for(const ys of [[4,9,14,19],[4,8,16,32],[1,4,9,16],[90,30,10,10/3],[10,7,4,1],[2,-4,8,-16]]){const k=kind(ys),list=ys.slice(0,ys[3]%1?3:4).map(n).join(', '),name=k==='linear'?'arithmetic':k==='exponential'?'geometric':'neither';
  put('sequences',`Is the sequence ${list}, ... arithmetic, geometric, or neither?`,name,tab('The sequence',[['terms',`${list}, ...`]],['']),name==='arithmetic'?`It adds ${num(ys[1]-ys[0])} each time: arithmetic.`:name==='geometric'?`It multiplies by ${frac(ys[1]/ys[0])} each time: geometric.`:'It neither adds nor multiplies by the same number each time: neither.');}
 [['Which rule gives the nth term of 5, 8, 11, 14, ...?','a(n) = 5 + 3(n - 1)',['a(n) = 5·3^(n - 1)','a(n) = 3 + 5(n - 1)'],'The terms go up by 3, so it is arithmetic with a(1) = 5 and d = 3: a(n) = 5 + 3(n - 1). Check: a(2) = 5 + 3 = 8.'],
  ['Which rule gives the nth term of 4, 12, 36, 108, ...?','a(n) = 4·3^(n - 1)',['a(n) = 4 + 8(n - 1)','a(n) = 3·4^(n - 1)'],'Each term is 3 times the last (12 ÷ 4 = 3), so it is geometric with a(1) = 4 and r = 3: a(n) = 4·3^(n - 1). Check: a(3) = 4 × 9 = 36.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k);
  put('sequences',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Sequence rules',[['arithmetic','a(1) + (n - 1)d'],['geometric','a(1)·r^(n - 1)']],['nth term']),why||`The answer is ${right}: check it gives the first terms.`,[right]);});
 /* graph: intercepts, values, asymptotes and shape */
 for(const [a,b,x] of [[3,2,0],[4,0.5,-2],[5,3,2],[2,10,-1],[6,1.5,2],[8,0.25,-1]]){const v=a*b**x;
  put('graph',`What is the value of f(x) = ${a}·(${b})^x at x = ${x}?`,Math.round(v*1e6)/1e6,tab('The function',[['f(x)',`${a}·(${b})^x`],['x',`${x}`]]),`${a} × ${b}^${x} = ${n(v)}.${x===0?' This is the y-intercept, a.':''}`);}
 for(const [k,fx] of [[3,'2^x + 3'],[-1,'5(0.5)^x - 1'],[0,'7·3^x']])put('graph',`The graph of f(x) = ${fx} has a horizontal asymptote y = c. What is c?`,k,tab('The function',[['f(x)',fx]],['']),`b^x gets closer and closer to 0 on one side, so f(x) gets closer and closer to ${k}: the asymptote is y = ${k}.`);
 [['Does f(x) = 9(0.8)^x rise or fall from left to right?','it falls, because 0.8 is between 0 and 1',['it rises, because 9 is positive','it stays level'],'The factor 0.8 is between 0 and 1, so each step to the right multiplies the value by 0.8 and the graph falls. The 9 is just the y-intercept.'],
  ['Does f(x) = 0.2(4)^x rise or fall from left to right?','it rises, because 4 is more than 1',['it falls, because 0.2 is less than 1','it stays level'],'The factor 4 is more than 1, so each step to the right multiplies the value by 4 and the graph rises. The 0.2 is just the y-intercept.'],
  ['What is the range of f(x) = 5·2^x?','all positive numbers',['all real numbers','all numbers greater than 5'],'2^x is positive for every x, and 5 times a positive number is positive. It gets close to 0 but never reaches it, so the range is all positive numbers.'],
  ['Where does the graph of f(x) = a·b^x cross the y-axis?','at (0, a)',['at (0, b)','at (a, 0)'],'On the y-axis x = 0, and b⁰ = 1, so f(0) = a × 1 = a. The graph crosses at (0, a).'],
  ['Does the graph of f(x) = 3·2^x ever touch the x-axis?','no, it only gets closer and closer to it',['yes, at x = 0','yes, at x = -3'],'3·2^x halves with each step to the left but is always positive, so it gets closer to y = 0 without touching it. At x = 0 it is 3.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+1);
  put('graph',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Exponential graphs',[['y-intercept','a'],['b > 1','rises'],['0 < b < 1','falls'],['asymptote','y = 0, or y = k if k is added']],['Feature']),why||`The answer is ${right}.`,[right]);});
}};
