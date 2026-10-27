// Elementary topic: if-then rules. Generated from rule cores, so every "what do you do" is computed.
const COLORS=['red','blue','green','yellow'],SHAPES=['circle','square','triangle','star'];
const ACTS=[['clap','clapped'],['jump','jumped'],['wave','waved'],['sit','sat'],['hop','hopped'],['spin','spun']];

export default {
 id:'cs-e-if-then',subject:'cs',level:3,grade:3,standard:'CSTA 1B-AP-10',
 title:'If-then rules',goal:'Check the "if" part of a rule, then do the "then" part or the "otherwise" part.',points:20,
 skills:{then:'When the if part is true',otherwise:'Otherwise',back:'Working backward'},
 steps:[
  {skill:'then',say:'An if-then rule tells you what to do when something is true. If the light is red, then stop.',pic:[{t:'rule',cond:'red light?',yes:'stop',no:'go'}],eq:'if red, then stop'},
  {skill:'then',say:'Check the "if" part first. The light is red, so the "if" part is true and you stop.',pic:[{t:'rule',cond:'red light?',yes:'stop',no:'go',input:'the light is red',pick:'yes',solve:true}],eq:'red? yes, so stop',
   check:{prompt:'Rule: if it is raining, take an umbrella; otherwise, take a hat. It is raining. What do you take?',answer:'an umbrella',options:['an umbrella','a hat'],hint:'The "if" part is true, so do the "then" part.',pic:{t:'rule',cond:'raining?',yes:'umbrella',no:'hat',input:'it is raining',pick:'yes'}}},
  {skill:'otherwise',say:'Otherwise tells you what to do when the "if" part is false. The light is green, not red, so you go.',pic:[{t:'rule',cond:'red light?',yes:'stop',no:'go',input:'the light is green',pick:'no',solve:true}],eq:'red? no, so go'},
  {skill:'otherwise',say:'Rules can check numbers too. If the number is greater than 5, clap. Otherwise, stomp. 3 is not greater than 5.',pic:[{t:'rule',cond:'greater than 5?',yes:'clap',no:'stomp',input:'3',pick:'no',solve:true}],eq:'3 > 5? no, so stomp',
   check:{prompt:'Rule: if the number is greater than 8, jump; otherwise, sit. The number is 6. What do you do?',answer:'sit',options:['sit','jump'],hint:'6 is not greater than 8, so do the "otherwise" part.',pic:{t:'rule',cond:'greater than 8?',yes:'jump',no:'sit',input:'6',pick:'no'}}},
  {skill:'then',say:'A computer follows a rule the same way every time. Rule: if the number is even, add 10; otherwise, add 1. 4 is even, so it adds 10.',pic:[{t:'rule',cond:'even?',yes:'add 10',no:'add 1',input:'4',pick:'yes',solve:true}],eq:'4 + 10 = 14'},
  {skill:'back',say:'You can also work backward. Rule: if the light is red, stop; otherwise, go. Someone followed the rule and stopped, so the light was red.',pic:[{t:'rule',cond:'red light?',yes:'stop',no:'go',pick:'yes',solve:true}],eq:'stopped, so the light was red'},
  {skill:'back',say:'What was done tells you if the "if" part was true. Rule: if the tile is green, clap; otherwise, wave. Someone waved, so the tile was not green.',pic:[{t:'rule',cond:'green?',yes:'clap',no:'wave',pick:'no',solve:true}],eq:'waved, so not green',
   check:{prompt:'Rule: if the tile is orange, hop; otherwise, spin. Sam followed the rule and spun. Was the tile orange?',answer:'no',options:['no','yes'],hint:'Spinning is the "otherwise" part, so the "if" part was false.',pic:{t:'rule',cond:'orange?',yes:'hop',no:'spin',pick:'no'}}}
 ],
 items(add){
  for(const k of [5,10,15])for(let n=k-4;n<=k+4;n++)if(n!==k)add(n>k?'then':'otherwise',`Rule: if the number is greater than ${k}, clap; otherwise, stomp. The number is ${n}. What do you do?`,n>k?'clap':'stomp',{t:'rule',cond:`greater than ${k}?`,yes:'clap',no:'stomp',input:String(n),pick:n>k?'yes':'no',hint:true},`${n} ${n>k?'is':'is not'} greater than ${k}, so you ${n>k?'clap':'stomp'}.`);
  for(const c of COLORS)for(const d of COLORS)add(d===c?'then':'otherwise',`Rule: if the tile is ${c}, jump; otherwise, sit. The tile is ${d}. What do you do?`,d===c?'jump':'sit',{t:'rule',cond:`${c}?`,yes:'jump',no:'sit',input:`the tile is ${d}`,pick:d===c?'yes':'no',hint:true},`The tile ${d===c?'is':'is not'} ${c}, so you ${d===c?'jump':'sit'}.`);
  for(const s of SHAPES)for(const d of SHAPES)add(d===s?'then':'otherwise',`Rule: if the shape is a ${s}, say yes; otherwise, say no. The shape is a ${d}. What do you say?`,d===s?'yes':'no',{t:'rule',cond:`a ${s}?`,yes:'say yes',no:'say no',input:`a ${d}`,pick:d===s?'yes':'no',hint:true},`The shape ${d===s?'is':'is not'} a ${s}, so you say ${d===s?'yes':'no'}.`);
  for(let n=1;n<=20;n++)add(n%2===0?'then':'otherwise',`Rule: if the number is even, add 10; otherwise, add 1. The number is ${n}. What number do you get?`,n%2===0?n+10:n+1,{t:'rule',cond:'even?',yes:'add 10',no:'add 1',input:String(n),pick:n%2===0?'yes':'no',hint:true},`${n} is ${n%2===0?'even':'odd'}, so ${n%2===0?`${n} + 10`:`${n} + 1`} = ${n%2===0?n+10:n+1}.`);
  for(const c of COLORS)for(const i of [0,2,4]){const [x,xd]=ACTS[i],[y,yd]=ACTS[i+1];for(const did of [true,false])add('back',`Rule: if the tile is ${c}, ${x}; otherwise, ${y}. You followed the rule and ${did?xd:yd}. Was the tile ${c}?`,did?'yes':'no',{t:'rule',cond:`${c}?`,yes:x,no:y,pick:did?'yes':'no',hint:true},`You ${did?xd:yd}. That is the ${did?'"then"':'"otherwise"'} part, so the tile ${did?'was':'was not'} ${c}.`);}
  for(const k of [5,10,15])for(const did of [true,false])add('back',`Rule: if the number is greater than ${k}, clap; otherwise, stomp. You followed the rule and ${did?'clapped':'stomped'}. Is the number greater than ${k}?`,did?'yes':'no',{t:'rule',cond:`greater than ${k}?`,yes:'clap',no:'stomp',pick:did?'yes':'no',hint:true},`You ${did?'clapped':'stomped'}, the ${did?'"then"':'"otherwise"'} part, so the number ${did?'is':'is not'} greater than ${k}.`);
 }
};
