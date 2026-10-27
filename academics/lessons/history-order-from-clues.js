// Original history lesson. No dates are ever given: every order is fixed by clue sentences that say
// one fictional Oakhaven event came before or after another. A straight chain of before/after clues
// covering every consecutive pair of the chosen events pins down exactly one order, so the generator
// never has to guess -- it builds the chain, then reads first/next/count straight off it
// (C3 D2.His.1.3-5: create and use a chronological sequence).
const EVENTS=['the mill','the stone bridge','the school','the well','the market hall','the chapel','the granary','the pond wall','the clock tower','the orchard','the henhouse','the cottage','the bakehouse','the cart shed','the toll gate'];
const ACCEPT={'the mill':['mill'],'the stone bridge':['stone bridge','bridge','the bridge','stonebridge'],'the school':['school','the schoolhouse','schoolhouse'],'the well':['well'],'the market hall':['market hall','the market','market','markethall'],'the chapel':['chapel'],'the granary':['granary'],'the pond wall':['pond wall','the pond','pond','pondwall'],'the clock tower':['clock tower','the clock','clock','clocktower','the clocktower'],'the orchard':['orchard'],'the henhouse':['henhouse','hen house','the hen house'],'the cottage':['cottage'],'the bakehouse':['bakehouse','bake house','the bake house'],'the cart shed':['cart shed','the cart','cart','cartshed'],'the toll gate':['toll gate','tollgate','the toll','toll']};
const cap=s=>s[0].toUpperCase()+s.slice(1);
const listStr=a=>a.length===1?a[0]:a.slice(0,-1).join(', ')+' or '+a[a.length-1];
const rot=(arr,k)=>{const n=arr.length,j=((k%n)+n)%n;return arr.slice(j).concat(arr.slice(0,j));};
const N=EVENTS.length;
const idx4=(start,step,size)=>{const out=[];for(let k=0;k<size;k++)out.push((start+k*step)%N);return out;};
const SEEN_TUPLES=new Set();
const buildTuples=(steps,sizeOf)=>{const out=[];steps.forEach(({start,step})=>{const size=sizeOf(start);const ix=idx4(start,step,size);if(new Set(ix).size!==size)return;const tup=ix.map(i=>EVENTS[i]),key=tup.join('|');if(SEEN_TUPLES.has(key))return;SEEN_TUPLES.add(key);out.push(tup);});return out;};
const FAMILY_A=buildTuples(Array.from({length:N},(_,start)=>({start,step:(start%3)+1})),start=>start%2===0?3:4);
const FAMILY_B=buildTuples(Array.from({length:8},(_,k)=>({start:k*2,step:2})),start=>start%4<2?4:3);
export default {
id:"history-e-order-from-clues",
subject:"history",
level:3,
grade:3,
title:"Putting events in order from clues",
goal:"Use before-and-after clues, with no dates given, to work out the one order the events must have happened in.",
standard:"C3 D2.His.1.3-5: create and use a chronological sequence",
points:20,
skills:{"first":"Which event came first or last","next":"What came straight after an event","count":"How many events came before an event"},
steps:[{"skill":"first","say":"A record does not need dates to show order. If it says one event came before another, that alone tells us which happened first. In this fictional Oakhaven record, the mill came before the bridge, so the mill was earlier.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":["The mill was built before the bridge.","The school came after the bridge."]}},
{"skill":"first","say":"Reading every clue together builds one whole order. Here the mill came before the bridge, and the bridge came before the school, so the order is mill, then bridge, then school. When the clues fix one complete order, the event with nothing before it is first. If the clues leave gaps, more than one order may be possible.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":["The mill was built before the bridge.","The school came after the bridge."]},"check":{"prompt":"In another record, the well was dug before the barn, and the shop came after the barn. Which event came last: the well, the barn or the shop?","answer":"the shop","options":["the shop","the well","the barn"],"hint":"Follow the before-and-after clues to the far end of the order.","pic":{"t":"passages","title":"Another fictional record","texts":["The well was dug before the barn.","The shop came after the barn."]}}},
{"skill":"next","say":"Once the whole order is known, we can say what came straight after any one event. In this record the event right after the mill is the bridge, because the clue joins those two directly.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":["The mill was built before the bridge.","The school came after the bridge."]}},
{"skill":"next","say":"Straight after means the very next event in the order, not just any later one. The school came after the bridge in the order, and nothing else sits between them.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":["The mill was built before the bridge.","The school came after the bridge."]},"check":{"prompt":"In that other record, the well was dug before the barn, and the shop came after the barn. What came straight after the well: the barn or the shop?","answer":"the barn","options":["the barn","the shop"],"hint":"The clue joins the well and the barn directly.","pic":{"t":"passages","title":"Another fictional record","texts":["The well was dug before the barn.","The shop came after the barn."]}}},
{"skill":"count","say":"We can also count how many events the clues place before a given event. Two events, the mill and the bridge, came before the school in this record.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":["The mill was built before the bridge.","The school came after the bridge."]}},
{"skill":"count","say":"Counting only works once the clues have fixed the whole order; a clue about one pair of events says nothing about how a third one fits in until it is joined to the chain too.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":["The mill was built before the bridge.","The school came after the bridge."]},"check":{"prompt":"In this record, the mill was built before the bridge, and the school came after the bridge. How many events came before the bridge?","answer":1,"options":[1,0,2],"hint":"Only one event in the order comes earlier than the bridge.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":["The mill was built before the bridge.","The school came after the bridge."]}}}],
progression:{"requires":["history-e-timelines"],"operations":2,"demand":"Join two or three before/after clues into a single chain, then read off which event is first or last, what follows a given event, and how many come before it."},
items(add){
 const SKIP=new Set(["In this record, the mill was built before the bridge, and the school came after the bridge. Which event came last: the mill, the bridge or the school?","In this record, the mill was built before the bridge, and the school came after the bridge. What came straight after the bridge: the mill or the school?","In this record, the mill was built before the bridge, and the school came after the bridge. How many events came before the bridge?"]);
 const _add=add;add=(s,p,a,pc,e,ac)=>{if(!SKIP.has(p))_add(s,p,a,pc,e,ac);};
 const gen=tuples=>tuples.forEach((order,ti)=>{
  const n=order.length,rawClues=[];
  for(let i=0;i<n-1;i++)rawClues.push((i+ti)%2===0?`${cap(order[i])} came before ${order[i+1]}.`:`${cap(order[i+1])} came after ${order[i]}.`);
  /* The clue sentences convey the same chain regardless of the order they are printed in, so we
     print them scrambled: otherwise the first clue always names order[0] and the last always
     names order[n-1], letting a child answer 'first'/'last' by reading position instead of
     reasoning about the clues. */
  const clues=ti%2===0?rot(rawClues,ti+1):rawClues.slice().reverse();
  const record='Fictional Oakhaven record. '+clues.join(' ')+' ',pic={t:'passages',title:'Fictional Oakhaven record',texts:clues};
  const allScrambled=rot(order,ti*2+1);
  add('first',record+`Which of these Oakhaven events came first: ${listStr(allScrambled)}?`,order[0],pic,'It has no clue placing anything before it.',ACCEPT[order[0]]);
  add('first',record+`Which of these Oakhaven events came last: ${listStr(allScrambled)}?`,order[n-1],pic,'Every other event is placed before it by the clues.',ACCEPT[order[n-1]]);
  for(let i=0;i<n-1;i++){
   const rest=order.filter((e,k)=>k!==i),restScrambled=rot(rest,i+ti);
   add('next',record+`According to the record, what came straight after ${order[i]}: ${listStr(restScrambled)}?`,order[i+1],pic,`The clues place ${order[i+1]} right after ${order[i]}.`,ACCEPT[order[i+1]]);
  }
  for(let i=0;i<n;i++)
   add('count',record+`How many of these events came before ${order[i]}?`,i,pic,`The clues place ${i} event${i===1?'':'s'} earlier than ${order[i]} in the order.`);
 });
 gen(FAMILY_A);gen(FAMILY_B);
}
};
