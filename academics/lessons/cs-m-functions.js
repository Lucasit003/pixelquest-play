// Middle School topic (Grade 6, CSTA 2-AP-14): functions with parameters and return values. Every answer
// comes from calling the function in its own question here: the inputs fill the parameters in order, and the
// return line is worked out with multiplication before addition and subtraction. In a call inside a call the
// inner call runs first. For "which input gives this output", the input is chosen first and the output is
// computed from it; every such function only ever grows, so that input is the only answer. All inputs and
// outputs are whole numbers above zero. Each prompt states the function, and its picture lists the same code.
const ONE=[
 {code:(a,b)=>`${a} × x + ${b}`,f:(a,b)=>x=>a*x+b,why:'multiplying before adding',undo:(a,b,y)=>`(${y} - ${b}) ÷ ${a}`},
 {code:(a,b)=>`${a} × x - ${b}`,f:(a,b)=>x=>a*x-b,why:'multiplying before taking away',undo:(a,b,y)=>`(${y} + ${b}) ÷ ${a}`},
 {code:(a,b)=>`${a} × (x + ${b})`,f:(a,b)=>x=>a*(x+b),why:'working out the brackets first',undo:(a,b,y)=>`${y} ÷ ${a} - ${b}`},
 {code:(a,b)=>`x × x + ${b}`,f:(a,b)=>x=>x*x+b,why:'multiplying before adding'}];
const INNER=[{code:c=>`x + ${c}`,f:c=>x=>x+c},{code:c=>`${c} × x`,f:c=>x=>c*x},{code:c=>`x - ${c}`,f:c=>x=>x-c}];
/* A one-parameter function {name, code, f}; its code lines start at line number `at`. */
const fn=(name,form,a,b)=>({name,code:form.code(a,b),f:form.f(a,b)});
const defLines=(F,at=1)=>[`${at}. function ${F.name}(x):`,`${at+1}.     return ${F.code}`];
const defWords=F=>`${F.name}(x): return ${F.code}`;
const put=(code,vals)=>code.replace(/[a-z]+/g,v=>v in vals?String(vals[v]):v);
/* Two-parameter functions, named for what they work out. */
const TWO=[
 {name:'area',ps:['w','h'],code:'w × h',f:(w,h)=>w*h},
 {name:'perimeter',ps:['w','h'],code:'2 × w + 2 × h',f:(w,h)=>2*w+2*h},
 {name:'cost',ps:['n','p'],code:'n × p + 4',f:(n,p)=>n*p+4},
 {name:'score',ps:['hits','misses'],code:'5 × hits - misses',f:(h,m)=>5*h-m},
 {name:'f',ps:['a','b'],code:'2 × a + b',f:(a,b)=>2*a+b},
 {name:'g',ps:['a','b'],code:'a × b - a',f:(a,b)=>a*b-a}];
const twoLines=T=>[`1. function ${T.name}(${T.ps.join(', ')}):`,`2.     return ${T.code}`];
const twoWords=T=>`${T.name}(${T.ps.join(', ')}): return ${T.code}`;
/* A function with an if-statement inside: if x > k return x - s, otherwise return m × x. */
const ifLines=([k,s,m])=>['1. function g(x):',`2.     if x > ${k}:`,`3.         return x - ${s}`,'4.     otherwise:',`5.         return ${m} × x`];
const ifWords=([k,s,m])=>`g(x): if x > ${k}, return x - ${s}; otherwise return ${m} × x`;
const prog=lines=>({t:'program',title:'Program',lines});
/* The lesson's examples and the Try-its (none of the Try-it functions is in the pool). */
const F3=fn('f',ONE[1],3,2),G5=fn('g',INNER[0],5);
const TA={name:'cost',ps:['n','p'],code:'n × p + 3'},TB=[fn('f',ONE[0],2,1),fn('g',INNER[2],3)],TC=fn('h',ONE[2],4,1);
const AREA={name:'area',ps:['w','h'],code:'w × h'};
export default {
id:'cs-m-functions',subject:'cs',level:4,grade:6,standard:'CSTA 2-AP-14',
title:'Functions with inputs and outputs',
goal:'Call a function with parameters and use what it returns, follow a call inside another call, and work back from an output to the input that gave it.',
points:20,
skills:{call:'Calling a function',nested:'A call inside a call',inverse:'Working back to the input'},
steps:[
 {skill:'call',say:'A function is a named set of steps. Its parameter, here x, is a box that holds whatever input the call passes in, and return sends one value back. Calling f(4) runs f with x = 4: 3 × 4 - 2 = 10.',eq:'f(4) = 3 × 4 - 2 = 10',pic:prog(defLines(F3))},
 {skill:'call',say:'A function can take more than one parameter. The inputs fill the parameters in order, so area(6, 4) puts 6 in w and 4 in h and returns 6 × 4 = 24. Swapping the inputs can change the answer when the two parameters do different jobs.',eq:'area(6, 4): w = 6, h = 4, return 24',pic:prog(twoLines(AREA)),
  check:{prompt:`Try it: a function is defined as ${twoWords(TA)}. What does cost(4, 5) return?`,answer:23,options:[23,32,27],hint:'n gets 4 and p gets 5, then multiply before adding: 4 × 5 + 3.',pic:prog(twoLines(TA))}},
 {skill:'nested',say:'In f(g(2)) the inner call runs first. g(2) returns 2 + 5 = 7, and that 7 becomes the input to f, which returns 3 × 7 - 2 = 19.',eq:'g(2) = 7, then f(7) = 19',pic:prog([...defLines(F3),...defLines(G5,3)])},
 {skill:'nested',say:'Order matters: g(f(2)) runs f first, giving 4, and then g(4) = 9, not 19. Always work from the innermost brackets outwards, one call at a time.',eq:'f(2) = 4, then g(4) = 9',pic:prog([...defLines(F3),...defLines(G5,3)]),
  check:{prompt:`Try it: two functions are defined: ${defWords(TB[0])}, and ${defWords(TB[1])}. What does g(f(5)) return?`,answer:8,options:[8,5,11],hint:'f(5) runs first and returns 11. Then g gets 11 as its input.',pic:prog([...defLines(TB[0]),...defLines(TB[1],3)])}},
 {skill:'inverse',say:'To find the input that gives an output, undo the steps in reverse order. f multiplies by 3 and then takes away 2, so to get back from 19, add 2 to make 21, then divide by 3: x = 7.',eq:'(19 + 2) ÷ 3 = 7',pic:prog(defLines(F3))},
 {skill:'inverse',say:'Always check by calling the function with the answer. f(7) = 3 × 7 - 2 = 19, so 7 is right. Brackets are undone last because they were worked out first.',eq:'f(7) = 19',pic:prog(defLines(F3)),
  check:{prompt:`Try it: a function is defined as ${defWords(TC)}. What input x makes h(x) return 36?`,answer:8,options:[8,9,35],hint:'Undo the multiply first: 36 ÷ 4 = 9. Then undo the + 1.',pic:prog(defLines(TC))}}],
progression:{requires:['cs-e-rule-machine','cs-e-tracing-variables'],operations:3,demand:'Bind inputs to parameters in order, evaluate a return line with the order of operations, chain an inner call into an outer one, and invert a two-step rule.'},
items(add){
 const seen=new Set(),A=(skill,p,...r)=>{if(seen.has(p))return;seen.add(p);add(skill,p,...r);};
 const NAMES=['f','g','h','t'];
 /* Calling a one-parameter function. */
 ONE.forEach((form,fi)=>{for(let j=0;j<3;j++){const a=2+((fi+j)%4),b=1+((fi*3+j*4)%9),F=fn(NAMES[(fi+j)%4],form,a,b);
  for(const x of [2+j+(fi%2),5+2*j]){const y=F.f(x);if(y<=0)continue;
   A('call',`A function is defined as ${defWords(F)}. What does ${F.name}(${x}) return?`,y,prog(defLines(F)),`x gets ${x}: ${put(F.code,{x})} = ${y}, ${form.why}.`);}}});
 /* Calling a two-parameter function: the inputs fill the parameters in order. */
 TWO.forEach(T=>{for(const [u,v] of [[6,4],[3,7],[9,2],[5,8]]){const y=T.f(u,v);if(y<=0)continue;
  A('call',`A function is defined as ${twoWords(T)}. What does ${T.name}(${u}, ${v}) return?`,y,prog(twoLines(T)),`${T.ps[0]} gets ${u} and ${T.ps[1]} gets ${v}: ${put(T.code,{[T.ps[0]]:u,[T.ps[1]]:v})} = ${y}.`);}});
 /* Calling a function that holds an if-statement, including the input that sits exactly on the test. */
 for(const G of [[10,10,2],[8,3,3],[12,5,2],[6,2,4],[15,7,2]]){const [k,s,m]=G;
  for(const x of [k-3,k,k+4]){const big=x>k,y=big?x-s:m*x;
   A('call',`A function is defined as ${ifWords(G)}. What does g(${x}) return?`,y,prog(ifLines(G)),`${x} > ${k} is ${big}, so g returns ${big?`${x} - ${s}`:`${m} × ${x}`} = ${y}.`);}}
 /* A call inside a call: the inner call runs first. */
 const pairs=[];for(let i=0;i<12;i++){const fi=i%3,a=2+(i%4),b=1+((i*5)%7),gi=(i+Math.floor(i/3))%3,c=2+((i*3)%5);pairs.push([fn('f',ONE[fi],a,b),fn('g',INNER[gi],c)]);}
 pairs.forEach(([F,G],i)=>{const n=2+(i%5),calls=[['f','g'],['g','f'],i%2?['f','f']:['g','g']];
  for(const [o,inn] of calls){const O=o==='f'?F:G,I=inn==='f'?F:G,mid=I.f(n),y=O.f(mid);if(mid<=0||y<=0||y>200)continue;
   A('nested',`Two functions are defined: ${defWords(F)}, and ${defWords(G)}. What does ${o}(${inn}(${n})) return?`,y,prog([...defLines(F),...defLines(G,3)]),`The inner call runs first: ${inn}(${n}) = ${put(I.code,{x:n})} = ${mid}. Then ${o}(${mid}) = ${put(O.code,{x:mid})} = ${y}.`);}});
 /* Working back: the input x is chosen first, and the output is computed from it. */
 ONE.slice(0,3).forEach((form,fi)=>{for(let j=0;j<10;j++){const a=2+((j+fi)%5),b=1+((j*3+fi*2)%8),x=2+((j*7+fi*3)%12),F=fn(NAMES[(j+fi)%4],form,a,b),y=F.f(x);if(y<=0)continue;
  A('inverse',`A function is defined as ${defWords(F)}. What input x makes ${F.name}(x) return ${y}?`,x,prog(defLines(F)),`Undo the steps in reverse: ${form.undo(a,b,y)} = ${x}. Check: ${F.name}(${x}) = ${put(F.code,{x})} = ${y}.`);}});
 /* Working back with two parameters: the second input is given, the first is found. */
 TWO.slice(0,4).forEach((T,ti)=>{for(const [u,v] of [[7,3],[4,6]]){const known=v+ti,y=T.f(u,known);
  A('inverse',`A function is defined as ${twoWords(T)}. The call ${T.name}(${T.ps[0]}, ${known}) returns ${y}. What is ${T.ps[0]}?`,u,prog(twoLines(T)),`${T.ps[1]} is ${known}, so ${put(T.code,{[T.ps[1]]:known})} = ${y}. ${T.ps[0]} = ${u} works: ${put(T.code,{[T.ps[0]]:u,[T.ps[1]]:known})} = ${y}.`);}});
}
};
