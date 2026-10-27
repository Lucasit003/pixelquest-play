// Middle School topic (Grade 8, CSTA 2-AP-14): tracing recursive functions. Every answer comes from running the
// function in its own question here, with a counter for the calls: a recursive function calls itself on a smaller
// input until it reaches its base case, and each waiting call finishes its own line once the call below returns.
// The questions ask what a call returns, how many calls are made in all, and what happens partway down the chain.
// Each prompt describes the function in words, and its picture lists the same function.
const num=L=>L.map((l,i)=>`${i+1}. ${l}`);
const pic=(F,call)=>({t:'program',title:'Function',lines:num([...F.lines,`print ${call}`])});
const FN=[
 {name:'total',say:'returns 0 when n = 0, and otherwise returns n + total(n - 1)',lines:['function total(n):','    if n = 0:','        return 0','    return n + total(n - 1)'],f:n=>n===0?0:n+FN[0].f(n-1),down:n=>n-1,base:n=>n===0,ns:[3,4,5,6,8,10]},
 {name:'grow',say:'returns 1 when n = 0, and otherwise returns 2 × grow(n - 1)',lines:['function grow(n):','    if n = 0:','        return 1','    return 2 × grow(n - 1)'],f:n=>n===0?1:2*FN[1].f(n-1),down:n=>n-1,base:n=>n===0,ns:[2,3,4,5,6,7]},
 {name:'fact',say:'returns 1 when n = 1, and otherwise returns n × fact(n - 1)',lines:['function fact(n):','    if n = 1:','        return 1','    return n × fact(n - 1)'],f:n=>n===1?1:n*FN[2].f(n-1),down:n=>n-1,base:n=>n===1,ns:[2,3,4,5,6]},
 {name:'halves',say:'returns 0 when n = 1, and otherwise returns 1 + halves(n ÷ 2)',lines:['function halves(n):','    if n = 1:','        return 0','    return 1 + halves(n ÷ 2)'],f:n=>n===1?0:1+FN[3].f(n/2),down:n=>n/2,base:n=>n===1,ns:[4,8,16,32,64,128]},
 {name:'digits',say:'returns n when n < 10, and otherwise returns the last digit of n + digits(n with its last digit removed)',lines:['function digits(n):','    if n < 10:','        return n','    return (last digit of n) + digits(n without its last digit)'],f:n=>n<10?n:n%10+FN[4].f(Math.floor(n/10)),down:n=>Math.floor(n/10),base:n=>n<10,ns:[47,352,908,1234,5061,77]},
 {name:'steps',say:'returns 0 when n = 0, and otherwise returns 1 + steps(n - 3); it is only ever called with a multiple of 3',lines:['function steps(n):','    if n = 0:','        return 0','    return 1 + steps(n - 3)'],f:n=>n===0?0:1+FN[5].f(n-3),down:n=>n-3,base:n=>n===0,ns:[6,9,12,15,21,30]}];
const MUL={name:'times',lines:['function times(a, b):','    if b = 0:','        return 0','    return a + times(a, b - 1)']};
/* The chain of inputs from the first call down to the base case. */
const chain=(F,n)=>{const out=[n];while(!F.base(out.at(-1)))out.push(F.down(out.at(-1)));return out;};
const intro=F=>`A function ${F.name}(n) ${F.say}.`;
export default {
id:'cs-m-recursion-trace',subject:'cs',level:4,grade:8,standard:'CSTA 2-AP-14',
title:'Tracing recursion',
goal:'Trace a recursive function: find what a call returns, count how many calls it makes, and follow the chain of calls down to the base case and back.',
points:20,
skills:{value:'What a call returns',calls:'Counting calls',chain:'Following the chain'},
steps:[
 {skill:'value',say:'A recursive function calls itself on a smaller input. It needs a base case, an input it answers straight away, or it would call itself forever. total(n) answers 0 when n = 0; for any other n it adds n to total(n - 1).',pic:pic(FN[0],'total(3)')},
 {skill:'value',say:'Trace total(3) down the chain: total(3) waits for total(2), which waits for total(1), which waits for total(0). total(0) returns 0, then total(1) returns 1 + 0 = 1, total(2) returns 2 + 1 = 3 and total(3) returns 3 + 3 = 6.',eq:'3 + 2 + 1 + 0 = 6',pic:{t:'setups',title:'Coming back up the chain',head:'Call',rows:[['total(0)','0'],['total(1)','1 + 0 = 1'],['total(2)','2 + 1 = 3'],['total(3)','3 + 3 = 6']],cols:['Returns']},
  check:{prompt:'Try it: a function grow(n) returns 1 when n = 0, and otherwise returns 2 × grow(n - 1). What does grow(3) return?',answer:8,options:[8,6,4],hint:'grow(0) is 1. Each call up the chain doubles the answer.',pic:pic(FN[1],'grow(3)')}},
 {skill:'calls',say:'Count every call, the first one included. total(3) calls total(2), total(1) and total(0), so 4 calls run in all: one for each input from 3 down to 0.',pic:{t:'setups',title:'The calls made by total(3)',head:'Call',rows:[['1st','total(3)'],['2nd','total(2)'],['3rd','total(1)'],['4th','total(0), the base case']],cols:['Input']}},
 {skill:'calls',say:'When the input shrinks by more than 1, count the inputs in the chain. halves(n) calls halves(n ÷ 2) until n = 1, so halves(8) runs on 8, 4, 2 and 1: 4 calls, and it returns 3, the number of halvings.',pic:pic(FN[3],'halves(8)'),
  check:{prompt:'Try it: a function steps(n) returns 0 when n = 0, and otherwise returns 1 + steps(n - 3); it is only ever called with a multiple of 3. How many times is steps called in all when steps(12) runs, counting the first call?',answer:5,options:[5,4,12],hint:'List the inputs: 12, 9, and so on down to 0.',pic:pic(FN[5],'steps(12)')}},
 {skill:'chain',say:'While the base case runs, every call above it is still waiting for its answer. When total(3) reaches total(0), three calls are waiting: total(3), total(2) and total(1). They finish in the opposite order to the way they started.',pic:{t:'setups',title:'Waiting calls',head:'',rows:[['started first','total(3)'],['then','total(2)'],['then','total(1)'],['answers first','total(0)']],cols:['Call']}},
 {skill:'chain',say:'Each call in the chain returns its own answer. In fact(4) = 4 × fact(3), the call fact(3) returns 3 × 2 × 1 = 6 on its own, before fact(4) uses it to return 4 × 6 = 24.',eq:'4 × 6 = 24',pic:pic(FN[2],'fact(4)'),
  check:{prompt:'Try it: a function total(n) returns 0 when n = 0, and otherwise returns n + total(n - 1). When total(5) runs, it calls total(4) along the way. What does that call to total(4) return?',answer:10,options:[10,15,4],hint:'total(4) is 4 + 3 + 2 + 1 + 0, whoever calls it.',pic:pic(FN[0],'total(5)')}}],
progression:{requires:['cs-m-functions','cs-m-while-loops'],operations:3,demand:'Follow a chain of calls down to the base case, combine each answer on the way back up, and count the calls or the waiting calls.'},
items(add){
 FN.forEach((F,j)=>{const I=intro(F);
  F.ns.forEach((n,k)=>{const c=chain(F,n),call=`${F.name}(${n})`;
   /* What the first call returns (the Try-it's grow(3) is left out). */
   if(!(j===1&&n===3))add('value',`${I} What does ${call} return?`,F.f(n),pic(F,call),`The calls run on ${c.join(', ')}. Coming back up, they return ${c.slice().reverse().map(F.f).join(', ')}, so ${call} returns ${F.f(n)}.`);
   /* Calls in all, or calls waiting when the base case runs (the Try-it's steps(12) is left out). */
   if(k%2===0&&!(j===5&&n===12))add('calls',`${I} How many times is ${F.name} called in all when ${call} runs, counting the first call?`,c.length,pic(F,call),`The inputs are ${c.join(', ')}: ${c.length} calls.`);
   else if(k%2===1)add('calls',`${I} When ${call} runs, how many calls are still waiting for an answer at the moment the base case returns?`,c.length-1,pic(F,call),`The inputs are ${c.join(', ')}. All but the last, ${c.length-1} calls, are waiting when ${F.name}(${c.at(-1)}) returns.`);
   /* A call partway down the chain (the Try-it's total(3) inside total(5) is left out). */
   if(c.length>=3){const mid=c[Math.floor(c.length/2)];if(!(j===0&&n===5))add('chain',`${I} When ${call} runs, it calls ${F.name}(${mid}) along the way. What does that call to ${F.name}(${mid}) return?`,F.f(mid),pic(F,call),`${F.name}(${mid}) works out its own answer, whoever calls it: ${F.f(mid)}.`);}
   /* The input of the base case reached. */
   if(j===4||k%3===0)add('chain',`${I} When ${call} runs, what is the input of the last call to start, the one that reaches the base case?`,c.at(-1),pic(F,call),`The inputs go ${c.join(', ')}, so the last call is ${F.name}(${c.at(-1)}).`);});});
 /* times(a, b) adds a to itself b times. */
 for(const [a,b] of [[3,4],[5,2],[7,3],[2,6],[4,5],[6,1],[9,2],[8,3]]){const call=`times(${a}, ${b})`,I='A function times(a, b) returns 0 when b = 0, and otherwise returns a + times(a, b - 1).',P={t:'program',title:'Function',lines:num([...MUL.lines,`print ${call}`])};
  add('value',`${I} What does ${call} return?`,a*b,P,`It adds ${a} once for each of the ${b} calls before the base case: ${Array(b).fill(a).join(' + ')} + 0 = ${a*b}.`);
  add('calls',`${I} How many times is times called in all when ${call} runs, counting the first call?`,b+1,P,`b goes ${Array.from({length:b+1},(_,x)=>b-x).join(', ')}: ${b+1} calls.`);}
}
};
