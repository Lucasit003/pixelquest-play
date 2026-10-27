// Middle School topic (Grade 7, CCSS 7.NS.A.1, 7.NS.A.2): adding, subtracting, multiplying and dividing
// positive and negative integers. Every answer is computed with ordinary integer arithmetic from the
// numbers in the question; divisions are built from their quotient so they always come out whole.
// Temperatures, depths and accounts are fictional.
const show=n=>n<0?`(${n})`:`${n}`;
/* Deterministic spread of signed pairs: every sign combination appears, no zeros. */
const PAIRS=[];for(let i=0;i<64;i++){const a=((i*7)%17)+2,b=((i*5)%13)+2,sa=(i&1)?-1:1,sb=(i&2)?-1:1;PAIRS.push([sa*a,sb*b]);}
export default {
id:'math-m-integer-operations',subject:'math',level:4,grade:7,standard:'CCSS 7.NS.A.1, 7.NS.A.2',
title:'Adding, subtracting, multiplying and dividing integers',
goal:'Add and subtract negative numbers on a number line, multiply and divide them with the sign rules, and use them for temperatures, depths and money.',
points:20,
skills:{addsub:'Adding and subtracting',muldiv:'Multiplying and dividing',context:'Integers in real situations'},
steps:[
 {skill:'addsub',say:'Adding a positive number moves right on the number line; adding a negative number moves left. -3 + 7 starts at -3 and moves 7 right, to 4.',eq:'-3 + 7 = 4',pic:{t:'numline',min:-8,max:8,marks:[{v:-3,label:'start -3'},{v:4,label:'end 4'}],span:[-3,4]}},
 {skill:'addsub',say:'Subtracting a number is the same as adding its opposite. 5 - (-8) = 5 + 8 = 13: taking away a debt of 8 leaves you 8 better off.',eq:'5 - (-8) = 5 + 8 = 13',pic:{t:'numline',min:-2,max:15,marks:[{v:5,label:'start 5'},{v:13,label:'end 13'}],span:[5,13]},
  check:{prompt:'Try it: what is -6 - 9?',answer:-15,options:[-15,3,15],hint:'Subtracting 9 moves 9 to the left of -6.',pic:{t:'numline',min:-18,max:2,marks:[{v:-6}]}}},
 {skill:'muldiv',say:'When you multiply or divide two numbers, matching signs give a positive answer and different signs give a negative answer. -6 × 4 = -24, and -6 × -4 = 24.',eq:'(-6) × (-4) = 24',pic:{t:'setups',title:'Sign rules',head:'Signs',rows:[['+ and +','positive'],['- and -','positive'],['+ and -','negative'],['- and +','negative']],cols:['Product or quotient']}},
 {skill:'muldiv',say:'Division follows the same rule because it undoes multiplication: -48 ÷ 6 = -8, since 6 × -8 = -48.',eq:'(-48) ÷ 6 = -8',pic:{t:'setups',title:'Check by multiplying back',head:'',rows:[['-48 ÷ 6','-8'],['check: 6 × (-8)','-48']],cols:['Value']},
  check:{prompt:'Try it: what is (-7) × (-5)?',answer:35,options:[35,-35,-12],hint:'Two negatives give a positive product.',pic:{t:'setups',title:'Sign rules',head:'Signs',rows:[['- and -','?']],cols:['Product']}}},
 {skill:'context',say:'Real situations turn into integer sums. A diver at -12 m who goes down 7 m more is at -12 + (-7) = -19 m.',eq:'-12 - 7 = -19',pic:{t:'numline',title:'Height above sea level (m)',min:-25,max:5,marks:[{v:-12,label:'-12 m'},{v:-19,label:'-19 m'}],span:[-19,-12]}},
 {skill:'context',say:'A change can cross zero. An account at -$15 that gets a $40 deposit holds -15 + 40 = $25.',eq:'-15 + 40 = 25',pic:{t:'numline',title:'Account balance ($)',min:-20,max:30,marks:[{v:-15,label:'-$15'},{v:25,label:'$25'}]},
  check:{prompt:'Try it: the temperature in a fictional town was 4°C and then fell by 11 degrees. What is the new temperature, in degrees Celsius?',answer:-7,options:[-7,7,15],hint:'Start at 4 and move 11 to the left.',pic:{t:'numline',title:'Temperatures (°C)',min:-10,max:6,marks:[{v:4,label:'4°'}]}}}],
progression:{requires:['math-m-negative-numbers'],operations:2,demand:'Move along the number line for sums and differences (subtracting means adding the opposite), and apply the sign rules for products and quotients.'},
items(add){
 const seen=new Set(),once=(p,...r)=>{if(seen.has(p))return;seen.add(p);add(...r.slice(0,1),p,...r.slice(1));};
 /* Adding and subtracting. */
 PAIRS.forEach(([a,b],i)=>{if(a>0&&b>0)return;
  if(i%2===0)once(`What is ${a} + ${show(b)}?`,'addsub',a+b,{t:'numline',min:Math.min(0,a,a+b)-2,max:Math.max(0,a,a+b)+2,marks:[{v:a}],hint:true},`Start at ${a} and move ${Math.abs(b)} to the ${b>0?'right':'left'}: ${a} + ${show(b)} = ${a+b}.`);
  else once(`What is ${a} - ${show(b)}?`,'addsub',a-b,{t:'numline',min:Math.min(0,a,a-b)-2,max:Math.max(0,a,a-b)+2,marks:[{v:a}],hint:true},`Subtracting ${show(b)} is adding ${-b}: ${a} + ${show(-b)} = ${a-b}.`);});
 /* Multiplying and dividing (divisions built from their quotient). */
 PAIRS.forEach(([a,b],i)=>{const x=((a%10)||3),y=((b%9)||2);if(x>0&&y>0)return;
  if(i%2===0)once(`What is ${show(x)} × ${show(y)}?`,'muldiv',x*y,{t:'setups',title:'Multiply',head:'',rows:[['first number',`${x}`],['second number',`${y}`]],cols:['Value']},`${Math.abs(x)} × ${Math.abs(y)} = ${Math.abs(x*y)}; the signs ${(x<0)===(y<0)?'match, so it is positive':'differ, so it is negative'}: ${x*y}.`);
  else once(`What is ${show(x*y)} ÷ ${show(y)}?`,'muldiv',x,{t:'setups',title:'Divide',head:'',rows:[['number',`${x*y}`],['divide by',`${y}`]],cols:['Value']},`${Math.abs(x*y)} ÷ ${Math.abs(y)} = ${Math.abs(x)}; the signs ${(x*y<0)===(y<0)?'match, so it is positive':'differ, so it is negative'}: ${x}. Check: ${show(y)} × ${show(x)} = ${x*y}.`);});
 /* Real situations: temperatures, depths and money, crossing zero in about half of them. */
 const T=[[4,-11],[-3,8],[-6,-5],[2,-9],[-12,15],[7,-13],[-1,-8],[-9,4],[5,-5],[-15,20],[3,-10],[-4,-6]];
 T.forEach(([a,b],i)=>{
  once(`The temperature in a fictional town was ${a}°C and then ${b>0?'rose':'fell'} by ${Math.abs(b)} degrees. What is the new temperature, in degrees Celsius?`,'context',a+b,{t:'numline',title:'Temperatures (°C)',min:Math.min(0,a,a+b)-3,max:Math.max(0,a,a+b)+3,marks:[{v:a,label:`${a}°`}],hint:true},`${a} ${b>0?'+':'-'} ${Math.abs(b)} = ${a+b}°C.`);
  once(`A fictional diver is at ${-Math.abs(a)-3} m (below sea level) and ${b>0?'rises':'dives'} ${Math.abs(b)} m. At what height is the diver now, in metres?`,'context',-Math.abs(a)-3+b,{t:'numline',title:'Height above sea level (m)',min:Math.min(0,-Math.abs(a)-3,-Math.abs(a)-3+b)-3,max:Math.max(0,-Math.abs(a)-3+b)+3,marks:[{v:-Math.abs(a)-3}],hint:true},`${-Math.abs(a)-3} ${b>0?'+':'-'} ${Math.abs(b)} = ${-Math.abs(a)-3+b} m.`);
  const bal=a*5,ch=b*5;
  once(`A fictional savings account shows a balance of ${bal<0?`-$${-bal}`:`$${bal}`}. Then ${ch>0?`$${ch} is paid in`:`$${-ch} is taken out`}. What is the new balance, in dollars?`,'context',bal+ch,{t:'numline',title:'Account balance ($)',min:Math.min(0,bal,bal+ch)-10,max:Math.max(0,bal,bal+ch)+10,marks:[{v:bal}],hint:true},`${bal} ${ch>0?'+':'-'} ${Math.abs(ch)} = ${bal+ch} dollars.`);});
 for(const [days,drop] of [[3,-4],[5,-2],[4,-3],[6,-5],[2,-7],[7,-3],[8,-2],[3,-6]])
  once(`A fictional lake's water level fell by the same amount, ${-drop} cm, on each of ${days} days. What was the total change in the water level, in centimetres?`,'context',days*drop,{t:'setups',title:'A falling lake',head:'',rows:[['change each day',`${drop} cm`],['days',`${days}`]],cols:['Value']},`${days} × (${drop}) = ${days*drop} cm: a fall of ${-days*drop} cm.`);
}
};
