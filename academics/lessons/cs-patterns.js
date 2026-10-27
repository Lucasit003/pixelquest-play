// Elementary topic: repeating patterns. Generated from pattern cores, so every "what comes next" is computed.
const COLORS=['red','blue','green','yellow'],SHAPES=['circle','square','triangle','star'];
const CORES={AB:[0,1],ABB:[0,1,1],AAB:[0,0,1],ABC:[0,1,2]};
const perms=(set,k)=>k===0?[[]]:set.flatMap(x=>perms(set.filter(y=>y!==x),k-1).map(r=>[x,...r]));
const repeat=(core,len)=>Array.from({length:len},(_,i)=>core[i%core.length]);
export default {
 id:'cs-e-patterns',subject:'cs',level:3,grade:1,standard:'CSTA 1A-AP-08; CCSS K.CC (sequence)',
 title:'Repeating patterns',goal:'Find the part that repeats, then say what comes next.',points:20,
 skills:{core:'The part that repeats',next:'What comes next',missing:'What is missing'},
 steps:[
  {skill:'core',say:'A pattern is a part that repeats again and again. Here the part is red, blue.',pic:[{t:'tiles',seq:['red','blue','red','blue','red','blue']}],eq:'red, blue | red, blue | red, blue'},
  {skill:'next',say:'To find what comes next, find the repeating part and keep going.',pic:[{t:'tiles',seq:['red','blue','red','blue','red',null],fill:'blue'}],
   check:{prompt:'Green, yellow, green, yellow, green. Which color comes next?',answer:'yellow',options:['yellow','green','red'],hint:'The part that repeats is green, yellow.'}},
  {skill:'core',say:'A repeating part can be longer. Here it is circle, square, square.',pic:[{t:'tiles',seq:['circle','square','square','circle','square','square']}],eq:'circle, square, square'},
  {skill:'next',say:'After circle, square, square, it starts again with a circle.',pic:[{t:'tiles',seq:['circle','square','square','circle','square','square',null],fill:'circle'}],
   check:{prompt:'Star, star, triangle, star, star, triangle, star. Which shape comes next?',answer:'star',options:['star','triangle','circle'],hint:'The part that repeats is star, star, triangle.'}},
  {skill:'core',say:'Some patterns have three different things: red, green, yellow, then red again.',pic:[{t:'tiles',seq:['red','green','yellow','red','green','yellow']}]},
  {skill:'missing',say:'A blank can be in the middle. Look at what comes before and after it.',pic:[{t:'tiles',seq:['red','green',null,'red','green','yellow'],fill:'yellow'}],
   check:{prompt:'Blue, red, blue, ___, blue, red. What color is missing?',answer:'red',options:['red','blue','green'],hint:'Blue and red take turns.'}},
  {skill:'next',say:'Find the repeating part, then use it to fill any gap.',pic:[{t:'tiles',seq:['circle','circle','star','circle','circle','star']}]}],
 items(add){
  for(const [set,noun] of [[COLORS,'color'],[SHAPES,'shape']])for(const [name,core] of Object.entries(CORES))for(const pick of perms(set,Math.max(...core)+1)){
   const unit=core.map(i=>pick[i]),len=unit.length*2+1,seq=repeat(unit,len),next=unit[len%unit.length],cap=w=>w[0].toUpperCase()+w.slice(1);
   add('next',`What comes next: ${seq.join(', ')}, ___?`,next,{t:'tiles',seq:[...seq,null],fill:next,hint:true},`The part that repeats is ${unit.join(', ')}. After ${seq.at(-1)} comes ${next}.`);
   const full=repeat(unit,unit.length*2),gap=unit.length+(name==='AB'?0:1),miss=full[gap];
   add('missing',`Which ${noun} is missing: ${full.map((w,i)=>i===gap?'___':w).join(', ')}?`,miss,{t:'tiles',seq:full.map((w,i)=>i===gap?null:w),fill:miss,hint:true},`The part that repeats is ${unit.join(', ')}, so the missing ${noun} is ${miss}.`);
   if(pick.length===2||name==='ABC')add('core',`${cap(full.join(', '))}. How many tiles are in the part that repeats?`,unit.length,{t:'tiles',seq:full,hint:true},`The part ${unit.join(', ')} repeats, and it is ${unit.length} tiles long.`);}}};
