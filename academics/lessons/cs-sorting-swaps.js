// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Put a list in order by comparing two at a time and swapping the pair that is the wrong way round. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"cs-e-sorting-swaps",subject:"cs",level:3,grade:4,standard:"CSTA 1B-AP-11",
 title:"Sorting by swapping",goal:"Put a list in order by comparing two at a time and swapping the pair that is the wrong way round.",points:20,
 skills:{"compare":"Comparing two","pass":"One pass through","order":"Going until it is sorted"},
 steps:[
 {skill:"compare",say:"In this sorting method, compare neighboring numbers two at a time and swap a pair if it is out of order. Computers can use other sorting methods too.",pic:[{"t":"tiles","seq":["7","3","5","1"]}],eq:"7, 3, 5, 1"},
 {skill:"compare",say:"Sorting smallest first, the smaller of the two belongs in front.  Of 7 and 3, the 3 goes in front.",pic:[{"t":"tiles","seq":["7","3"]}],eq:"7, 3 becomes 3, 7",
  check:{prompt:"You are sorting smallest first. You compare 8 and 4. Which one goes in front?",answer:4,options:[4,8],hint:"Smallest first means the smaller number goes in front.",pic:{"t":"word","base":"8, 4"}}},
 {skill:"pass",say:"Go along the list.  At each step, compare the two numbers you are on, and swap them if the left one is bigger.",pic:[{"t":"tiles","seq":["3","7","5","1"]}],eq:"3, 7, 5, 1"},
 {skill:"pass",say:"Next pair: 7 and 5.  The left one is bigger, so they swap.  The list is now 3, 5, 7, 1.",pic:[{"t":"tiles","seq":["3","5","7","1"]}],eq:"3, 5, 7, 1",
  check:{prompt:"You are on the pair 9 and 2, sorting smallest first. Do they swap?",answer:"yes",options:["yes","no"],hint:"The left one is bigger than the right one.",pic:{"t":"word","base":"9, 2"}}},
 {skill:"pass",say:"Last pair: 7 and 1.  They swap too.  One pass is finished and the list is 3, 5, 1, 7.",pic:[{"t":"tiles","seq":["3","5","1","7"]}],eq:"3, 5, 1, 7"},
 {skill:"order",say:"One pass does not always finish the job.  The 1 is still out of place, so you go along again.",pic:[{"t":"tiles","seq":["3","5","1","7"]}],
  check:{prompt:"A whole pass along the list makes no swaps at all. What does that tell you?",answer:"the list is sorted",options:["the list is sorted","the list is empty","you must start again"],hint:"Nothing was in the wrong order anywhere.",pic:{"t":"word","base":"sorted"}}},
 {skill:"order",say:"Keep going along the list until a whole pass makes no swaps.  Then the list is sorted.",pic:[{"t":"tiles","seq":["1","3","5","7"]}],eq:"1, 3, 5, 7"}],
 items(add){
  const _SKIP=new Set(["You are sorting smallest first. You compare 8 and 4. Which one goes in front?","You are on the pair 9 and 2, sorting smallest first. Do they swap?","A whole pass along the list makes no swaps at all. What does that tell you?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=1;a<=40;a++)for(let b=1;b<=40;b++)if(a!==b)_P.push([a,b]);
const _n=Math.min(_P.length,120),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],sym=a>b?'>':a<b?'<':'=',ta=Math.floor(a/10)%10,tb=Math.floor(b/10)%10,oa=a%10,ob=b%10,ha=Math.floor(a/100),hb=Math.floor(b/100),r=String(Math.min(a,b));
add("compare","Sorting smallest first, you compare "+(a)+" and "+(b)+". Which one goes in front?",r,{"t":"word","base":""+(a)+", "+(b)+""},"Smallest first, so the smaller of "+(a)+" and "+(b)+" goes in front.");}}
{const _P=[],_SEEN=new Set();
for(let s=0;s<2400&&_P.length<120;s++){const _L=[];for(let i=0;i<4;i++)_L.push((s*7+i*13)%89+1);
 const _k=_L.join(',');
 if(new Set(_L).size===4&&!_SEEN.has(_k)){_SEEN.add(_k);_P.push(_L);}}
for(const _L of _P){const _a=_L.slice();let x=null,y=null;
 for(let i=0;i<_a.length-1;i++)if(_a[i]>_a[i+1]){if(x===null){x=_a[i];y=_a[i+1];}const _t=_a[i];_a[i]=_a[i+1];_a[i+1]=_t;}
 if(x===null)continue;const list=_L.join(', '),r=_a.join(', ');
 /* A typed list: accept it with or without the spaces after the commas. */
 add("pass","Go along this list once, swapping any pair where the left number is bigger: "+(list)+". What is the list after that pass?",r,{"t":"word","base":list},"Each pair that was the wrong way round swapped, which gives "+(r)+".",[r.replace(/, /g,','),r.replace(/, /g,' ')]);}}
{const _P=[],_SEEN=new Set();
for(let s=0;s<2400&&_P.length<120;s++){const _L=[];for(let i=0;i<5;i++)_L.push((s*7+i*13)%89+1);
 const _k=_L.join(',');
 if(new Set(_L).size===5&&!_SEEN.has(_k)){_SEEN.add(_k);_P.push(_L);}}
for(const _L of _P){const _a=_L.slice();let x=null,y=null;
 for(let i=0;i<_a.length-1;i++)if(_a[i]>_a[i+1]){if(x===null){x=_a[i];y=_a[i+1];}const _t=_a[i];_a[i]=_a[i+1];_a[i+1]=_t;}
 if(x===null)continue;const list=_L.join(', '),r=_a.join(', ');
 /* A typed list: accept it with or without the spaces after the commas. */
 add("order","Here is a list part way through sorting: "+(list)+". Do one more pass, swapping any pair where the left number is bigger. What does the list look like now?",r,{"t":"word","base":list},"After one more pass it is "+(r)+". Keep going until a pass makes no swaps at all.",[r.replace(/, /g,','),r.replace(/, /g,' ')]);}}
 }};
