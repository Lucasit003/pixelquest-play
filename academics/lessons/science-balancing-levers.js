// Original science lesson. A seesaw is a lever: every answer follows from multiplying blocks by
// spaces from the middle on each side and comparing the two totals (NGSS 3-5-ETS1-1/2: forces and balance).
const cap=s=>s[0].toUpperCase()+s.slice(1);
const table=(L,dL,R,dR)=>({t:'setups',title:'Seesaw',head:'Side',cols:['Blocks','Spaces'],rows:[['Left',L,dL],['Right',R,dR]]});
const line=(L,dL,R,dR)=>`On a seesaw, the left side holds ${L} block${L===1?'':'s'} at ${dL} space${dL===1?'':'s'} from the middle. The right side holds ${R} block${R===1?'':'s'} at ${dR} space${dR===1?'':'s'} from the middle. `;
export default {
id:"science-e-balancing-levers",
subject:"science",
level:3,
grade:4,
title:"Balancing a seesaw",
goal:"Compare weight and distance from the middle on each side of a seesaw, and find the exact spaces or blocks that make it balance.",
standard:"Forces and balance: a lever balances when weight × distance is equal on both sides",
points:20,
skills:{"tip":"Which side goes down","balance":"Find the balancing distance","weight":"Find the balancing blocks"},
steps:[
{skill:"tip",say:"A seesaw is a lever. Each side pulls down with a turning force that depends on two things together: how many blocks sit on that side, and how many spaces from the middle they sit. To compare the two sides, multiply each side's blocks by its spaces from the middle; the side with the bigger number goes down.",pic:table(3,2,2,3)},
{skill:"tip",say:"Sitting farther from the middle turns the seesaw more, even with fewer blocks. A side with fewer blocks can still go down if it sits far enough out, and a side with more blocks can go up if it sits close to the middle. Count the blocks and the spaces together, not the blocks alone.",pic:table(2,4,5,1),check:{prompt:line(2,4,4,1)+"Which side goes down: left, right or neither?",answer:"left",options:["left","right","neither"],hint:"Multiply blocks by spaces on each side, then compare.",pic:table(2,4,4,1)}},
{skill:"balance",say:"A seesaw can also be balanced without adding or removing any blocks, just by sliding a side nearer or farther from the middle. Moving a side farther out gives it more turning force without changing its blocks.",pic:table(4,3,6,2)},
{skill:"balance",say:"To find the exact balancing spot, remember that blocks times spaces must come out the same on both sides. If one side's total and the other side's blocks are known, dividing the total by those blocks gives the spaces the other side needs.",pic:table(4,3,6,'?'),check:{prompt:"On a seesaw, the left side holds 6 blocks at 2 spaces from the middle. The right side holds 4 blocks. How many spaces from the middle must the right side's blocks go to balance the seesaw?",answer:3,options:[4,3,2],hint:"Multiply the left side's blocks by its spaces, then divide by the right side's blocks.",pic:table(6,2,4,'?')}},
{skill:"weight",say:"The same idea finds how many blocks are needed instead of how far. If one side's total and the other side's spaces from the middle are known, dividing the total by those spaces gives the blocks needed there.",pic:table(4,3,'?',2)},
{skill:"weight",say:"This works whichever side is missing its blocks or its spaces, because it is always the same rule: blocks times spaces must match on both sides of the middle.",pic:table(5,4,'?',5),check:{prompt:"On a seesaw, the right side holds 3 blocks at 6 spaces from the middle. The left side sits at 2 spaces from the middle. How many blocks on the left side balance the seesaw?",answer:9,options:[9,6,3],hint:"Multiply the right side's blocks by its spaces, then divide by the left side's spaces.",pic:table('?',2,3,6)}}],
progression:{"requires":["science-e-push-pull","science-e-fair-tests"],"operations":2,"demand":"Multiply blocks by spaces on each side to compare turning force, then divide a known total by a known blocks or spaces count to find the missing value."},
items(add){
 const seen=new Set(['t2.4.4.1']),cap25=(bucket,v,max)=>{bucket[v]=(bucket[v]||0)+1;return bucket[v]<=max;};
 /* t2.4.4.1 above is the Try-it check's own left-2@4-vs-right-4@1 example; excluded so the pool never repeats it. */
 const tipCount={},balCount={},wgtCount={};
 let swapNeither=0;
 const tip=(L,dL,R,dR)=>{const k=`t${L}.${dL}.${R}.${dR}`;if(seen.has(k))return false;
  const tl=L*dL,tr=R*dR,ans=tl>tr?'left':tl<tr?'right':'neither';
  /* A 'neither' item whose (right,dR) is the exact reverse of (dL,left) teaches the shortcut 'same
   two numbers swapped means neither' instead of comparing products, so only a few get through. */
  if(ans==='neither'&&R===dL&&dR===L){if(swapNeither>=3)return false;swapNeither++;}
  if(!cap25(tipCount,ans,22))return false;seen.add(k);
  add('tip',line(L,dL,R,dR)+"Which side goes down: left, right or neither?",ans,table(L,dL,R,dR),
   ans==='neither'?`Both sides give the same total (${tl}), so the seesaw stays level.`:`The left side gives ${L}×${dL} = ${tl} and the right side gives ${R}×${dR} = ${tr}; the bigger total goes down.`,
   ans==='left'?['the left','left side','the left side']:ans==='right'?['the right','right side','the right side']:['neither side','level','stays level','balanced','it balances','balances','equal']);
  return true;};
 /* Dedicated traps first, so their share of the per-answer cap is claimed before the general loops:
  the heavier side goes UP because it sits closer to the middle. */
 let trapLeft=0,trapRight=0;
 for(let L=1;L<=6;L++)for(let dL=1;dL<=4;dL++)for(let R=1;R<=6;R++)for(let dR=1;dR<=4;dR++){
  if(L>R&&dL<dR&&R*dR>L*dL&&trapRight<10){if(tip(L,dL,R,dR))trapRight++;}
  else if(R>L&&dR<dL&&L*dL>R*dR&&trapLeft<10){if(tip(L,dL,R,dR))trapLeft++;}
 }
 for(let L=1;L<=6;L++)for(let dL=1;dL<=4;dL++){
  const vs=[[((L+1)%6)+1,((dL+2)%4)+1],[((L+3)%6)+1,((dL+1)%4)+1]];
  vs.forEach(([R,dR])=>tip(L,dL,R,dR));
 }
 /* Divisor-pair 'neither' items: prefer a non-swap (R,dR) over the exact reverse of (dL,L); tip()
  itself caps how many swap pairs get through overall. */
 for(let L=1;L<=6;L++)for(let dL=1;dL<=4;dL++){const p=L*dL;
  let nonSwap=null,swap=null;
  for(let R=1;R<=6;R++){if(p%R)continue;const dR=p/R;if(dR<1||dR>4)continue;if(R===L&&dR===dL)continue;
   if(R===dL&&dR===L){if(!swap)swap=[R,dR];}else if(!nonSwap)nonSwap=[R,dR];}
  if(nonSwap)tip(L,dL,nonSwap[0],nonSwap[1]);
  else if(swap)tip(L,dL,swap[0],swap[1]);
 }
 const balL=(L,dL,R)=>{if(R===L)return;const tl=L*dL;if(tl%R)return;const dR=tl/R;if(dR<1||dR>6)return;const k=`bR${L}.${dL}.${R}`;if(seen.has(k))return;if(!cap25(balCount,dR,15))return;seen.add(k);
  add('balance',`On a seesaw, the left side holds ${L} block${L===1?'':'s'} at ${dL} space${dL===1?'':'s'} from the middle. The right side holds ${R} block${R===1?'':'s'}. How many spaces from the middle must the right side's blocks go to balance the seesaw?`,
   dR,table(L,dL,R,'?'),`The left side gives ${L}×${dL} = ${tl}; dividing by the right side's ${R} block${R===1?'':'s'} gives ${dR} space${dR===1?'':'s'}.`);};
 const balR=(R,dR,L)=>{if(L===R)return;const tr=R*dR;if(tr%L)return;const dL=tr/L;if(dL<1||dL>6)return;const k=`bL${R}.${dR}.${L}`;if(seen.has(k))return;if(!cap25(balCount,dL,15))return;seen.add(k);
  add('balance',`On a seesaw, the right side holds ${R} block${R===1?'':'s'} at ${dR} space${dR===1?'':'s'} from the middle. The left side holds ${L} block${L===1?'':'s'}. How many spaces from the middle must the left side's blocks go to balance the seesaw?`,
   dL,table(L,'?',R,dR),`The right side gives ${R}×${dR} = ${tr}; dividing by the left side's ${L} block${L===1?'':'s'} gives ${dL} space${dL===1?'':'s'}.`);};
 for(let L=1;L<=5;L++)for(let dL=1;dL<=4;dL++)for(let R=2;R<=6;R++)balL(L,dL,R);
 for(let R=1;R<=5;R++)for(let dR=1;dR<=4;dR++)for(let L=2;L<=6;L++)balR(R,dR,L);
 const wgtR=(L,dL,dR)=>{if(dR===dL)return;const tl=L*dL;if(tl%dR)return;const R=tl/dR;if(R<1||R>10)return;const k=`wR${L}.${dL}.${dR}`;if(seen.has(k))return;if(!cap25(wgtCount,R,15))return;seen.add(k);
  add('weight',`On a seesaw, the left side holds ${L} block${L===1?'':'s'} at ${dL} space${dL===1?'':'s'} from the middle. The right side sits at ${dR} space${dR===1?'':'s'} from the middle. How many blocks on the right side balance the seesaw?`,
   R,table(L,dL,'?',dR),`The left side gives ${L}×${dL} = ${tl}; dividing by the right side's ${dR} space${dR===1?'':'s'} gives ${R} block${R===1?'':'s'}.`);};
 const wgtL=(R,dR,dL)=>{if(dL===dR)return;const tr=R*dR;if(tr%dL)return;const L=tr/dL;if(L<1||L>10)return;const k=`wL${R}.${dR}.${dL}`;if(seen.has(k))return;if(!cap25(wgtCount,L,15))return;seen.add(k);
  add('weight',`On a seesaw, the right side holds ${R} block${R===1?'':'s'} at ${dR} space${dR===1?'':'s'} from the middle. The left side sits at ${dL} space${dL===1?'':'s'} from the middle. How many blocks on the left side balance the seesaw?`,
   L,table('?',dL,R,dR),`The right side gives ${R}×${dR} = ${tr}; dividing by the left side's ${dL} space${dL===1?'':'s'} gives ${L} block${L===1?'':'s'}.`);};
 for(let L=1;L<=5;L++)for(let dL=1;dL<=4;dL++)for(let dR=1;dR<=4;dR++)wgtR(L,dL,dR);
 for(let R=1;R<=5;R++)for(let dR=1;dR<=4;dR++)for(let dL=1;dL<=4;dL++)wgtL(R,dR,dL);
}
};
