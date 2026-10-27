// Middle School topic (Grade 7, CSTA 2-AP-10): selection sort and insertion sort, smallest first, beyond the
// Elementary topics' bubble sort. Every answer comes from running the sort on the list in its own question
// here, pass by pass. Selection sort: pass k finds the smallest item from index k - 1 to the end and swaps it
// into index k - 1, with no swap when it is already there. Insertion sort: pass k takes the item at index k
// and swaps it with its left neighbour for as long as that neighbour is bigger. Every list holds different
// numbers, so "which item" has one answer, and every prompt says that positions start at 0. The lists come
// from a fixed-seed number generator, so the pool is the same on every load. Each picture lists the sort.
const RULE='Positions start at 0 in this language.';
const SEL='Selection sort puts it in order, smallest first: pass 1 swaps the smallest item into index 0, pass 2 swaps the smallest of the rest into index 1, and so on, with no swap when that item is already in place.';
const INS='Insertion sort puts it in order, smallest first: pass 1 takes the item at index 1, pass 2 the item at index 2, and so on, and each pass swaps its item with the item to its left for as long as that item is bigger.';
const show=L=>L.join(', ');
const acc=L=>[L.join(','),L.join(' '),`[${L.join(', ')}]`];
/* Selection sort, pass by pass: the list after the pass, whether it swapped, and the two items that moved. */
const selection=L=>{const a=[...L],out=[];for(let k=0;k<a.length-1;k++){let m=k;for(let j=k+1;j<a.length;j++)if(a[j]<a[m])m=j;const rec={into:a[m],out:a[k],from:m,swap:m!==k};if(m!==k)[a[k],a[m]]=[a[m],a[k]];out.push({...rec,list:[...a]});}return out;};
/* Insertion sort, pass by pass: the item taken, its swaps, where it stops, and the list after the pass. */
const insertion=L=>{const a=[...L],out=[];for(let k=1;k<a.length;k++){const item=a[k];let j=k,s=0;while(j>0&&a[j-1]>a[j]){[a[j-1],a[j]]=[a[j],a[j-1]];j--;s++;}out.push({item,swaps:s,stop:j,list:[...a]});}return out;};
const selLines=(name,L)=>[`set ${name} to [${show(L)}]`,`for k from 0 to ${L.length-2}:`,'    set m to k',`    for j from k + 1 to ${L.length-1}:`,`        if ${name}[j] < ${name}[m]:`,'            set m to j','    if m ≠ k:',`        swap ${name}[k] and ${name}[m]`];
const insLines=(name,L)=>[`set ${name} to [${show(L)}]`,`for k from 1 to ${L.length-1}:`,'    set j to k',`    while j > 0 and ${name}[j - 1] > ${name}[j]:`,`        swap ${name}[j - 1] and ${name}[j]`,'        take 1 away from j'];
const prog=lines=>({t:'program',title:'Program',lines:lines.map((l,i)=>`${i+1}. ${l}`)});
const lead=(name,L,rule)=>`${RULE} ${name} is [${show(L)}]. ${rule}`;
const selTrace=(R,upto=R.length)=>R.slice(0,upto).map((r,i)=>`pass ${i+1}: ${r.swap?`${r.into} and ${r.out} swap`:`${r.into} is already in place`}, giving ${show(r.list)}`).join('; ');
const insTrace=(R,upto=R.length)=>R.slice(0,upto).map((r,i)=>`pass ${i+1}: ${r.item} makes ${r.swaps} swap${r.swaps===1?'':'s'}, giving ${show(r.list)}`).join('; ');
const NAMES=['nums','scores','cards','heights','times'];
/* The lesson's example and the three Try-its (their lists are not in the pool). */
const EX=[29,12,35,8,21],TA=[14,3,9,1,7],TB=[5,2,8,1,6],TC=[10,18,6,14,3];
const lc=s=>s[0].toLowerCase()+s.slice(1);
export default {
id:'cs-m-sorting-steps',subject:'cs',level:4,grade:7,standard:'CSTA 2-AP-10',
title:'Selection sort and insertion sort',
goal:'Trace selection sort and insertion sort pass by pass: give the list after a pass, count the swaps, and say which item moves.',
points:20,
skills:{after:'The list after a pass',swaps:'Counting swaps',moves:'Which item moves'},
steps:[
 {skill:'after',say:'Selection sort builds the sorted list from the front. Pass 1 finds the smallest item and swaps it into index 0. Pass 2 finds the smallest of the rest and swaps it into index 1, and so on, until every index is filled.',eq:'pass k fills index k - 1',pic:prog(selLines('nums',EX))},
 {skill:'after',say:'Trace [29, 12, 35, 8, 21]. Pass 1 swaps 8 and 29. On pass 2 the smallest of the rest is 12, which is already at index 1, so nothing moves. Pass 3 swaps 21 and 35. After pass k the first k items are the k smallest, in order.',eq:'8, 12, 35, 29, 21 after pass 1',pic:{t:'setups',title:'Selection sort on [29, 12, 35, 8, 21]',head:'after',rows:[['start','29','12','35','8','21'],['pass 1','8','12','35','29','21'],['pass 2','8','12','35','29','21'],['pass 3','8','12','21','29','35'],['pass 4','8','12','21','29','35']],cols:['0','1','2','3','4']},
  check:{prompt:`Try it: ${lc(lead('nums',TA,SEL))} What is nums after pass 2?`,answer:'1, 3, 9, 14, 7',options:['1, 3, 9, 14, 7','1, 3, 7, 9, 14','3, 1, 9, 14, 7'],hint:'Pass 1 swaps the smallest item, 1, into index 0. Then look at index 1: is the smallest of the rest already there.',pic:prog(selLines('nums',TA))}},
 {skill:'swaps',say:'Selection sort makes at most one swap on each pass, so a list of 5 items needs at most 4 swaps. Here passes 2 and 4 found their item already in place, so the whole sort made only 2 swaps.',eq:'2 swaps in 4 passes',pic:{t:'setups',title:'Swaps in selection sort',head:'pass',rows:[['1','8 and 29 swap'],['2','no swap'],['3','21 and 35 swap'],['4','no swap']],cols:['What happens']}},
 {skill:'after',say:'Insertion sort builds the sorted part from the left. Pass 1 takes the item at index 1 and swaps it left past every bigger item before it. Pass 2 does the same with the item at index 2, and so on. Each pass slots one more item into place among the items before it.',eq:'pass k takes the item at index k',pic:prog(insLines('nums',EX))},
 {skill:'swaps',say:'Count insertion sort\'s swaps pass by pass. In [29, 12, 35, 8, 21], pass 1 swaps 12 past 29, pass 2 makes none, pass 3 moves 8 past 35, 29 and 12, and pass 4 moves 21 past 35 and 29. That is 1 + 0 + 3 + 2 = 6 swaps. A list that is nearly sorted needs very few.',eq:'1 + 0 + 3 + 2 = 6',pic:{t:'setups',title:'Insertion sort on [29, 12, 35, 8, 21]',head:'after',rows:[['pass 1','12','29','35','8','21'],['pass 2','12','29','35','8','21'],['pass 3','8','12','29','35','21'],['pass 4','8','12','21','29','35']],cols:['0','1','2','3','4']},
  check:{prompt:`Try it: ${lc(lead('nums',TB,INS))} How many swaps does the whole sort make?`,answer:5,options:[5,4,3],hint:'Count pass by pass: 2 moves past 5, 8 stays, 1 moves past 8, 5 and 2, then 6 moves past 8.',pic:prog(insLines('nums',TB))}},
 {skill:'moves',say:'On a selection sort pass that swaps, two items move: the smallest of the rest moves forward into place, and the item that was there moves back to where the smallest came from. On pass 1, 8 moves into index 0 and 29 moves out to index 3.',eq:'8: index 3 to 0,  29: index 0 to 3',pic:prog(selLines('nums',EX))},
 {skill:'moves',say:'In insertion sort the item a pass takes moves left, and every bigger item it passes moves one place right. On pass 3, 8 moves from index 3 all the way to index 0, while 12, 29 and 35 each move one place right.',eq:'8: index 3 to 0',pic:prog(insLines('nums',EX)),
  check:{prompt:`Try it: ${lc(lead('nums',TC,INS))} Pass 3 takes 14. At which index is 14 when pass 3 ends?`,answer:2,options:[2,3,1],hint:'After pass 2 the list starts 6, 10, 18. 14 swaps past 18 and stops next to 10.',pic:prog(insLines('nums',TC))}}],
progression:{requires:['cs-e-sorting-swaps','cs-e-counting-swaps','cs-m-lists-indexing'],operations:3,demand:'Find the smallest of the unsorted part or slide an item left past bigger ones, keep the list exact after every swap, and count the swaps each pass makes.'},
items(add){
 const done=new Set(),A=(skill,p,answer,pic,why,accept)=>{if(done.has(p))throw new Error(`repeated prompt ${p}`);done.add(p);add(skill,p,answer,pic,why,accept);};
 /* Twenty lists of five or six different numbers, none already sorted, from Park-Miller with a fixed seed
    that restarts on every call: deterministic, and every product stays exact in a double. */
 let seed=20261008;const pick=n=>(seed=seed*48271%2147483647)%n,LISTS=[];
 while(LISTS.length<20){const n=5+(LISTS.length%2),L=[];while(L.length<n){const v=2+pick(58);if(!L.includes(v))L.push(v);}
  if(L.every((v,i)=>!i||L[i-1]<v))continue;if([EX,TA,TB,TC].some(T=>show(T)===show(L)))continue;LISTS.push(L);}
 LISTS.forEach((L,li)=>{const name=NAMES[li%5],n=L.length,S=selection(L),I=insertion(L),sel=lead(name,L,SEL),ins=lead(name,L,INS),sp=prog(selLines(name,L)),ip=prog(insLines(name,L));
  /* The list after a pass. */
  const ks=1+(li%(n-2)),ki=1+((li+1)%(n-2));
  A('after',`${sel} What is ${name} after pass ${ks}?`,show(S[ks-1].list),sp,`${selTrace(S,ks)}.`,acc(S[ks-1].list));
  A('after',`${ins} What is ${name} after pass ${ki}?`,show(I[ki-1].list),ip,`${insTrace(I,ki)}.`,acc(I[ki-1].list));
  /* Counting swaps: the whole sort, or some passes. */
  const selAll=S.filter(r=>r.swap).length,insAll=I.reduce((s,r)=>s+r.swaps,0);
  if(li%2){A('swaps',`${sel} How many swaps does the whole sort make?`,selAll,sp,`${selTrace(S)}. That is ${selAll} swap${selAll===1?'':'s'}.`);
   const k=2+(li%(n-2));A('swaps',`${ins} How many swaps does pass ${k} make?`,I[k-1].swaps,ip,`${insTrace(I,k)}. So pass ${k} makes ${I[k-1].swaps} swap${I[k-1].swaps===1?'':'s'}.`);}
  else{const k=2+(li%(n-3)),part=S.slice(0,k).filter(r=>r.swap).length;A('swaps',`${sel} How many swaps do passes 1 to ${k} make?`,part,sp,`${selTrace(S,k)}. That is ${part} swap${part===1?'':'s'}.`);
   A('swaps',`${ins} How many swaps does the whole sort make?`,insAll,ip,`${insTrace(I)}. That is ${I.map(r=>r.swaps).join(' + ')} = ${insAll} swaps.`);}
  /* Which item moves: into or out of place on a selection pass that swaps, and where an inserted item stops. */
  const swapPasses=S.map((r,i)=>i+1).filter(k=>S[k-1].swap),k1=swapPasses[(li*3)%swapPasses.length],r=S[k1-1];
  if(li%2)A('moves',`${sel} Which item does pass ${k1} swap into index ${k1-1}?`,r.into,sp,`${selTrace(S,k1)}. So pass ${k1} swaps ${r.into} into index ${k1-1}.`);
  else A('moves',`${sel} Which item does pass ${k1} swap out of index ${k1-1}?`,r.out,sp,`${selTrace(S,k1)}. So pass ${k1} swaps ${r.out} out of index ${k1-1}, to index ${r.from}.`);
  const moving=I.map((q,i)=>i+1).filter(k=>k>=2&&I[k-1].swaps>0),k2=moving.length?moving[(li*2)%moving.length]:n-1,q=I[k2-1];
  A('moves',`${ins} Pass ${k2} takes ${q.item}. At which index is ${q.item} when pass ${k2} ends?`,q.stop,ip,`${insTrace(I,k2)}. ${q.item} starts pass ${k2} at index ${k2}, moves left ${q.swaps} place${q.swaps===1?'':'s'}, and stops at index ${q.stop}.`);});
}
};
