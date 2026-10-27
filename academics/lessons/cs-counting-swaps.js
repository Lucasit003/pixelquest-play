// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Count the swaps a pass makes, and see that a nearly sorted list costs less work. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"cs-e-counting-swaps",subject:"cs",level:3,grade:5,standard:"CSTA 1B-AP-11 (extends to 2-AP-11)",
 title:"Counting the work a sort does",goal:"Count the swaps a pass makes, and see that a nearly sorted list costs less work.",points:20,
 skills:{"count":"Counting the swaps","pass":"What the pass leaves","cost":"Which list costs more"},
 steps:[
 {skill:"count",say:"Sorting costs work, and the work can be counted.  One swap is one piece of work.",pic:[{"t":"tiles","seq":["7","3","5","1"]}]},
 {skill:"count",say:"Going along 7, 3, 5, 1 once: 7 and 3 swap, 7 and 5 swap, 7 and 1 swap.  That is 3 swaps.",pic:[{"t":"tiles","seq":["3","5","1","7"]}],eq:"3 swaps",
  check:{"prompt":"Go along 3, 1, 4, 2 once, swapping any pair that is the wrong way round. How many swaps?","answer":2,"options":[2,1,3,4],"hint":"Check each neighbouring pair in turn, left to right.","pic":{"t":"tiles","seq":["3","1","4","2"]}}},
 {skill:"pass",say:"After that pass the list is 3, 5, 1, 7.  The biggest number has reached the end.",pic:[{"t":"tiles","seq":["3","5","1","7"]}]},
 {skill:"cost",say:"A list that is nearly sorted costs less: 1, 2, 4, 3 needs only one swap.",pic:[{"t":"tiles","seq":["1","2","3","4"]}],eq:"1 swap",
  check:{"prompt":"Go along 2, 1, 3, 5 once. How many swaps?","answer":1,"options":[1,0,2,3],"hint":"Only one pair is the wrong way round.","pic":{"t":"tiles","seq":["2","1","3","5"]}}},
 {skill:"cost",say:"A list in exactly the wrong order costs the most, because every pair is wrong.",pic:[{"t":"tiles","seq":["4","3","2","1"]}],eq:"3 swaps in the first pass",
  check:{prompt:"Which costs more work to sort: a nearly sorted list, or one in exactly the wrong order?",answer:"the wrong order one",options:["the wrong order one","the nearly sorted one","they cost the same"],hint:"Count how many pairs are wrong in each.",pic:{"t":"tiles","seq":["4","3","2","1"]}}},
 {skill:"count",say:"Count the swaps and you know what the sort cost, before you ever run it.",pic:[{"t":"tiles","seq":["?","?","?"]}]}],
 items(add){
  const _SKIP=new Set(["Go along 7, 3, 5, 1 once, swapping any pair that is the wrong way round. How many swaps?","Go along 1, 2, 4, 3 once. How many swaps?","Which costs more work to sort: a nearly sorted list, or one in exactly the wrong order?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[],_SEEN=new Set();
for(let s=0;s<3000&&_P.length<150;s++){const _L=[];for(let i=0;i<4;i++)_L.push((s*7+i*13)%89+1);
 const _k=_L.join(',');
 if(new Set(_L).size===4&&!_SEEN.has(_k)){_SEEN.add(_k);_P.push(_L);}}
for(const _L of _P){const _a=_L.slice();let x=null,y=null;
 for(let i=0;i<_a.length-1;i++)if(_a[i]>_a[i+1]){if(x===null){x=_a[i];y=_a[i+1];}const _t=_a[i];_a[i]=_a[i+1];_a[i+1]=_t;}
 if(x===null)continue;const list=_L.join(', ');let _sw=0;{const _b=_L.slice();for(let i=0;i<_b.length-1;i++)if(_b[i]>_b[i+1]){_sw++;const _t=_b[i];_b[i]=_b[i+1];_b[i+1]=_t;}}
 const r=_sw;
 /* A typed list: accept it with or without the spaces after the commas. */
 add("count","Go along "+(list)+" once, swapping any pair where the left number is bigger. How many swaps do you make?",r,{"t":"tiles","seq":["?","?","?","?"]},"That pass makes "+(r)+" swaps.",[]);}}
{const _P=[],_SEEN=new Set();
for(let s=0;s<3000&&_P.length<150;s++){const _L=[];for(let i=0;i<5;i++)_L.push((s*7+i*13)%89+1);
 const _k=_L.join(',');
 if(new Set(_L).size===5&&!_SEEN.has(_k)){_SEEN.add(_k);_P.push(_L);}}
for(const _L of _P){const _a=_L.slice();let x=null,y=null;
 for(let i=0;i<_a.length-1;i++)if(_a[i]>_a[i+1]){if(x===null){x=_a[i];y=_a[i+1];}const _t=_a[i];_a[i]=_a[i+1];_a[i+1]=_t;}
 if(x===null)continue;const list=_L.join(', ');let _sw=0;{const _b=_L.slice();for(let i=0;i<_b.length-1;i++)if(_b[i]>_b[i+1]){_sw++;const _t=_b[i];_b[i]=_b[i+1];_b[i+1]=_t;}}
 const r=_sw;
 /* A typed list: accept it with or without the spaces after the commas. */
 add("cost","One pass along "+(list)+", swapping any pair where the left number is bigger. How many swaps?",r,{"t":"tiles","seq":["?","?","?","?","?"]},"That pass makes "+(r)+" swaps.",[]);}}
{const _P=[],_SEEN=new Set();
for(let s=0;s<3000&&_P.length<150;s++){const _L=[];for(let i=0;i<4;i++)_L.push((s*7+i*13)%89+1);
 const _k=_L.join(',');
 if(new Set(_L).size===4&&!_SEEN.has(_k)){_SEEN.add(_k);_P.push(_L);}}
for(const _L of _P){const _a=_L.slice();let x=null,y=null;
 for(let i=0;i<_a.length-1;i++)if(_a[i]>_a[i+1]){if(x===null){x=_a[i];y=_a[i+1];}const _t=_a[i];_a[i]=_a[i+1];_a[i+1]=_t;}
 if(x===null)continue;const list=_L.join(', ');let _sw=0;{const _b=_L.slice();for(let i=0;i<_b.length-1;i++)if(_b[i]>_b[i+1]){_sw++;const _t=_b[i];_b[i]=_b[i+1];_b[i+1]=_t;}}
 const r=_a.join(', ');
 /* A typed list: accept it with or without the spaces after the commas. */
 add("pass","After one pass along "+(list)+", swapping any pair where the left number is bigger, what is the list?",r,{"t":"tiles","seq":["?","?","?","?"]},"Each wrong pair swapped, which gives "+(r)+".",[r.replace(/, /g,','),r.replace(/, /g,' ')]);}}
 }};
