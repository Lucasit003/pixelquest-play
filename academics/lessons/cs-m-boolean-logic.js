// Middle School topic (Grade 6, CSTA 2-AP-12): compound conditions. Every answer is worked out here from the
// values in its own question, in the order this language uses: comparisons first, then not (which flips only
// the comparison right after it), then and, then or. The conditions come from a small fixed number generator
// (deterministic, so the pool is the same on every load). True and false answers are kept close to half each,
// and in a good share of the order questions a strict left-to-right reading gives the wrong answer, so the
// order rule is what is being tested. In "which value", exactly one of the two values makes the condition true.
const OPS={'>':(a,b)=>a>b,'<':(a,b)=>a<b,'=':(a,b)=>a===b,'≥':(a,b)=>a>=b,'≤':(a,b)=>a<=b};
const OPN=Object.keys(OPS);
/* Park-Miller with a fixed seed: deterministic, and every product stays exact in a double. */
let seed=20261007;const pick=n=>(seed=seed*48271%2147483647)%n;
/* A condition is a list of tokens: comparisons {v,op,n}, 'not', 'and', 'or'. */
const show=toks=>toks.map(t=>typeof t==='string'?t:`${t.v} ${t.op} ${t.n}`).join(' ');
const split=(a,w)=>a.reduce((g,t)=>(t===w?g.push([]):g[g.length-1].push(t),g),[[]]);
/* The language's order: or splits first (so it is worked out last), then and, then not on a single comparison. */
const truth=(toks,env)=>split(toks,'or').some(g=>split(g,'and').every(t=>t[0]==='not'?!OPS[t[1].op](env[t[1].v],t[1].n):OPS[t[0].op](env[t[0].v],t[0].n)));
/* The common slip: reading strictly left to right, with a not flipping everything after it. */
const slip=(toks,env)=>{const go=a=>{if(a[0]==='not')return !go(a.slice(1));let v=OPS[a[0].op](env[a[0].v],a[0].n);for(let i=1;i<a.length;i+=2){if(a[i+1]==='not'){const r=!go(a.slice(i+2));return a[i]==='and'?v&&r:v||r;}const r=OPS[a[i+1].op](env[a[i+1].v],a[i+1].n);v=a[i]==='and'?v&&r:v||r;}return v;};return go(toks);};
const ORDER='Work out comparisons first, then not, then and, then or.';
const C=(v,op,n)=>({v,op,n});
const given=env=>Object.entries(env).map(([k,v])=>`${k} is ${v}`).join(' and ');
const vars=(toks,env)=>({t:'setups',title:show(toks),head:'Variable',rows:Object.keys(env).filter(k=>toks.some(t=>t.v===k)).map(k=>[k,String(env[k])]),cols:['Value']});
const TF=b=>b?['true',['yes']]:['false',['no']];
/* The working shown in an explanation: each comparison's value, grouped the way the order rule groups them. */
const each=(toks,env)=>toks.filter(t=>typeof t!=='string').map(t=>`${show([t])} is ${OPS[t.op](env[t.v],t.n)}`).filter((s,i,a)=>a.indexOf(s)===i).join(', ');
const working=(toks,env)=>{const g=split(toks,'or').map(h=>split(h,'and').map(t=>t[0]==='not'?`not ${OPS[t[1].op](env[t[1].v],t[1].n)}`:String(OPS[t[0].op](env[t[0].v],t[0].n))));return g.map(h=>h.length>1&&g.length>1?`(${h.join(' and ')})`:h.join(' and ')).join(' or ');};
/* The lesson's examples and the Try-its; the Try-it questions are kept out of the pool. */
const TA=[[C('x','<',4),'and',C('y','>',6)],{x:2,y:9}],TB=[[C('x','>',6),'or',C('y','>',5),'and',C('x','<',4)],{x:9,y:2}],TC=[C('x','<',3),'or',C('x','>',8)];
const tfPrompt=(toks,env,order)=>`${given(env)}.${order?` ${ORDER}`:''} Is "${show(toks)}" true or false?`;
const whichPrompt=(toks,p,q)=>`Which value of x makes "${show(toks)}" true: ${p} or ${q}?`;
const SKIP=new Set([tfPrompt(...TA,false),tfPrompt(...TB,true),whichPrompt(TC,5,11)]);
export default {
id:'cs-m-boolean-logic',subject:'cs',level:4,grade:6,standard:'CSTA 2-AP-12',
title:'Combining conditions',
goal:'Decide whether comparisons joined by and, or and not are true, using the order not, then and, then or, and find which value makes a condition true.',
points:20,
skills:{combine:'And and or with comparisons',order:'Not, then and, then or',which:'Which value makes it true'},
steps:[
 {skill:'combine',say:'A comparison such as x > 5 is either true or false. When x is 7, x > 5 is true, x < 3 is false and x = 7 is true. Programs build their conditions out of comparisons like these.',pic:{t:'setups',title:'When x is 7',head:'Comparison',rows:[['x > 5','true'],['x < 3','false'],['x = 7','true']],cols:['Result']}},
 {skill:'combine',say:'and is true only when both sides are true; or is true when at least one side is. When x is 7 and y is 3, x > 5 and y > 4 is false because y > 4 is false, but x > 5 or y > 4 is true.',eq:'true and false = false,  true or false = true',pic:{t:'setups',title:'When x is 7 and y is 3',head:'Condition',rows:[['x > 5','true'],['y > 4','false'],['x > 5 and y > 4','false'],['x > 5 or y > 4','true']],cols:['Result']},
  check:{prompt:`Try it: ${tfPrompt(...TA,false)}`,answer:'true',options:['true','false'],hint:'Check each comparison on its own first: is 2 < 4, and is 9 > 6?',pic:vars(...TA)}},
 {skill:'order',say:'When a condition mixes them, this language works out comparisons first, then not, then and, then or, the way multiplication comes before addition. So x > 5 or y > 4 and x < 3 means x > 5 or (y > 4 and x < 3).',eq:'true or (false and false) = true',pic:{t:'setups',title:'x > 5 or y > 4 and x < 3, when x is 7 and y is 3',head:'Step',rows:[['comparisons','true or false and false'],['then and','true or false'],['then or','true']],cols:['Working']}},
 {skill:'order',say:'not flips only the comparison right after it, so not x > 5 and y < 4 means (not x > 5) and y < 4. Reading strictly from left to right instead often gives the wrong answer, so find the and parts before the or.',eq:'not x > 5 and y < 4 = (not x > 5) and (y < 4)',pic:{t:'setups',title:'not x > 5 and y < 4, when x is 7 and y is 3',head:'Step',rows:[['comparisons','not true and true'],['then not','false and true'],['then and','false']],cols:['Working']},
  check:{prompt:`Try it: ${tfPrompt(...TB,true)}`,answer:'true',options:['true','false'],hint:'Do the and first: y > 5 and x < 4. Then join that to x > 6 with or.',pic:vars(...TB)}},
 {skill:'which',say:'To find which value makes a condition true, test each value in turn. For x > 4 and x < 9, the value 3 fails x > 4, but 6 passes both comparisons, so 6 makes it true.',eq:'x = 6: true and true = true',pic:{t:'rule',cond:'x > 4 and x < 9',input:'x is 3 or 6',yes:'true',no:'false'}},
 {skill:'which',say:'With or, one passing comparison is enough. x < 2 or x > 10 is true for 12, but false for 5, which sits between the two. Watch the edges: x > 10 is false when x is exactly 10.',eq:'x = 12: false or true = true',pic:{t:'rule',cond:'x < 2 or x > 10',input:'x is 5 or 12',yes:'true',no:'false'},
  check:{prompt:`Try it: ${whichPrompt(TC,5,11).replace(/^W/,'w')}`,answer:11,options:[11,5],hint:'Test 5: is 5 < 3 or 5 > 8? Then test 11 the same way.',pic:{t:'rule',cond:show(TC),input:'x is 5 or 11',yes:'true',no:'false'}}}],
progression:{requires:['cs-e-and-or-not','cs-e-comparing-values'],operations:3,demand:'Evaluate each comparison, apply not, then and, then or, and test two candidate values against a compound condition, edges included.'},
items(add){
 const seen=new Set(SKIP);
 /* A comparison on variable v near its value, so equal values and edges come up often. */
 const cmp=(v,env)=>{const op=OPN[pick(OPN.length)],n=Math.max(0,env[v]+pick(7)-3);return C(v,op,n);};
 const VALS=[[7,3],[2,9],[5,5],[10,4],[1,6],[8,8],[12,0],[4,11],[6,2],[3,7],[9,1],[0,10]];
 /* Every shape of condition gets an equal share, and keeps true and false within one of each other (so the
    joining word never gives the answer away): a condition that would tip a shape's balance is skipped. */
 const pool=(skill,shapes,want,order)=>{const t=shapes.map(()=>0),f=shapes.map(()=>0),quota=Math.ceil(want/shapes.length);let got=0;
  for(let i=0;got<want&&i<20000;i++){const s=i%shapes.length,[x,y]=VALS[pick(VALS.length)],env={x,y},toks=shapes[s](()=>cmp('x',env),()=>cmp('y',env)),val=truth(toks,env),p=tfPrompt(toks,env,order);
   if(seen.has(p)||t[s]+f[s]>=quota||(val?t[s]-f[s]:f[s]-t[s])>=1)continue;seen.add(p);val?t[s]++:f[s]++;got++;
   const [a,acc]=TF(val),slipped=order&&slip(toks,env)!==val;
   add(skill,p,a,vars(toks,env),`${each(toks,env)}. `+(order?`Then not, then and, then or: ${working(toks,env)} = ${a}.${slipped?' Reading strictly left to right would give the wrong answer here.':''}`:`${toks.includes('and')?'and needs every part true':'or needs at least one part true'}: ${working(toks,env)} = ${a}.`),acc);}};
 /* And and or with two or three comparisons, all joined by the same word, so the order never matters. */
 pool('combine',[(X,Y)=>[X(),'and',Y()],(X,Y)=>[X(),'or',Y()],(X,Y)=>[X(),'and',Y(),'and',X()],(X,Y)=>[Y(),'or',X(),'or',Y()]],40,false);
 /* Mixed conditions: six shapes, each one a left-to-right reading can get wrong for some values. */
 pool('order',[(X,Y)=>[X(),'or',Y(),'and',X()],(X,Y)=>['not',X(),'and',Y()],(X,Y)=>['not',Y(),'or',X()],(X,Y)=>[Y(),'or','not',X(),'and',Y()],(X,Y)=>['not',X(),'and',Y(),'or',X()],(X,Y)=>[X(),'or',Y(),'and','not',X()]],40,true);
 /* Which value: one variable, two candidates, exactly one of which makes the condition true. */
 const SHAPES=[(a,b)=>[C('x','>',a),'and',C('x','<',b)],(a,b)=>[C('x','<',a),'or',C('x','>',b)],(a,b)=>[C('x','≥',a),'and','not',C('x','=',b)],(a,b)=>['not',C('x','<',a),'and',C('x','≤',b)],(a,b)=>[C('x','=',a),'or',C('x','>',b)]];
 let first=0;
 for(let i=0,got=0;got<40&&i<400;i++){const a=2+pick(8),b=a+2+pick(7),toks=SHAPES[i%SHAPES.length](a,b),xs=[...Array(21).keys()],yes=xs.filter(x=>truth(toks,{x})),no=xs.filter(x=>!truth(toks,{x}));
  if(!yes.length||!no.length)continue;
  /* The false value sits on or next to an edge of the condition half of the time. */
  const edge=no.filter(x=>[a,b,a-1,b+1].includes(x)),p=yes[pick(yes.length)],q=(i%2&&edge.length?edge:no)[pick((i%2&&edge.length?edge:no).length)];
  const [u,v]=first<=got/2?[p,q]:[q,p],prompt=whichPrompt(toks,u,v);if(seen.has(prompt))continue;seen.add(prompt);if(u===p)first++;got++;
  add('which',prompt,p,{t:'rule',cond:show(toks),input:`x is ${u} or ${v}`,yes:'true',no:'false'},`With x = ${p}: ${working(toks,{x:p})} = true. With x = ${q}: ${working(toks,{x:q})} = false.`);}
}
};
