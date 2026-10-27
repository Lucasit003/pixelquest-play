// Second Elementary topic: counting coins. Questions are generated here, so every total is computed,
// never written by hand - the local model's draft of this topic got five of six mixed totals wrong.
const V={q:25,d:10,n:5,p:1},NAME={q:'quarter',d:'dime',n:'nickel',p:'penny'},PLURAL={q:'quarters',d:'dimes',n:'nickels',p:'pennies'};
const many=(k,n)=>`${n} ${n===1?NAME[k]:PLURAL[k]}`;
const list=(parts)=>parts.length>1?`${parts.slice(0,-1).join(', ')} and ${parts.at(-1)}`:parts[0];
const coinsOf=m=>Object.entries(m).flatMap(([k,n])=>Array(n).fill(k));
const countOn=cs=>{let run=0;return [...cs].sort((a,b)=>V[b]-V[a]).map(k=>run+=V[k]);};
export default {
 id:'finance-e-counting-money',subject:'finance',level:3,grade:2,standard:'CCSS 2.MD.C.8',
 title:'Counting coins',goal:'Name each coin, then count any pile by starting with the biggest.',points:20,
 skills:{values:'Coin values',same:'Counting one kind',biggest:'Biggest first',mixed:'Counting on'},
 steps:[
  {skill:'values',say:'Every coin has a value. A penny is worth 1 cent. A nickel is worth 5 cents.',pic:[{"t":"theater","scene":"coins","part":"values"}]},
  {skill:'values',say:'A dime is worth 10 cents and a quarter is worth 25 cents. The dime is small, but it is worth more than a nickel.',pic:[{"t":"theater","scene":"coins","part":"more"}],
   check:{"prompt":"Ben swaps 1 dime for nickels of the same value. How many nickels does he get?","answer":2,"options":[2,5,10],"hint":"A nickel is worth 5 cents and a dime is worth 10. Count by fives: 5, 10.","pic":{"t":"pair","a":"1 dime = 10¢","b":"1 nickel = 5¢"}}},
  {skill:'same',say:'To count coins of one kind, count by their value. Nickels count by fives: 5, 10, 15.',pic:[{t:'coins',coins:['n','n','n'],count:true}],eq:'5, 10, 15'},
  {skill:'same',say:'Dimes count by tens: 10, 20, 30, 40.',pic:[{t:'coins',coins:['d','d','d','d'],count:true}],eq:'10, 20, 30, 40',
   check:{prompt:'Leo has 6 dimes. How many cents is that?',answer:60,options:[60,6,16],hint:'Count by tens: 10, 20, 30, and keep going.',pic:{t:'coins',coins:['d','d','d','d','d','d']}}},
  {skill:'biggest',say:'When the coins are mixed, line them up with the biggest value first.',pic:[{"t":"theater","scene":"coins","part":"line-up"}]},
  {skill:'mixed',say:'Then count on. Start at 10, then 20. Add 5 to make 25. Add 1 to make 26.',pic:[{"t":"theater","scene":"coins","part":"count-on"}],eq:'10, 20, 25, 26 cents'},
  {skill:'mixed',say:'With a quarter, start at 25 and keep counting: 25, 35, 40, 41.',pic:[{"t":"theater","scene":"coins","part":"quarter"}],eq:'41 cents',
   check:{prompt:'Mia has 1 quarter and 2 dimes. How many cents does she have?',answer:45,options:[45,27,35],hint:'Start at 25, then count on by tens: 35, 45.',pic:{t:'coins',coins:['q','d','d']}}},
  {skill:'mixed',say:'Biggest coin first, then count on. That is how you count any pile of coins.',pic:[{"t":"theater","scene":"coins","part":"pile"}],eq:'52 cents'}],
 items(add){
  for(const k of ['q','d','n','p'])add('values',`How many cents is one ${NAME[k]} worth?`,V[k],{t:'coins',coins:[k],hint:true},`A ${NAME[k]} is worth ${V[k]} ${V[k]===1?'cent':'cents'}.`);
  for(const [k,top] of [['p',9],['n',9],['d',9],['q',3]])for(let n=2;n<=top;n++)
   add('same',`How many cents are ${many(k,n)}?`,n*V[k],{t:'coins',coins:Array(n).fill(k),hint:true},`Count by ${V[k]}s: ${Array.from({length:n},(_,i)=>(i+1)*V[k]).join(', ')}. That is ${n*V[k]} cents.`);
  /* Mixed piles of two to four kinds, at most eight coins, under a dollar. The prompt lists the
     coins smallest first, so the player has to put the biggest first themselves. */
  for(let q=0;q<=2;q++)for(let d=0;d<=4;d++)for(let n=0;n<=3;n++)for(let p=0;p<=4;p++){
   const m={q,d,n,p},kinds=Object.values(m).filter(Boolean).length,count=q+d+n+p,total=25*q+10*d+5*n+p;
   if(kinds<2||count>8||total>=100)continue;
   const cs=coinsOf(m),words=list(['p','n','d','q'].filter(k=>m[k]).map(k=>many(k,m[k]))),steps=countOn(cs);
   add('mixed',`How many cents are ${words}?`,total,{t:'coins',coins:cs,hint:true},`Biggest first, then count on: ${steps.join(', ')}. That is ${total} cents.`);
   if(kinds>=3&&count<=6){const big=['q','d','n','p'].find(k=>m[k]);
    add('biggest',`You have ${words}. Which coin do you count first? Give its value in cents.`,V[big],{t:'coins',coins:cs,hint:true},`The ${NAME[big]} is worth the most, so you start with it: ${V[big]} cents.`);}}}};
