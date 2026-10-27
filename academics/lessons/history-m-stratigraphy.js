// Middle School topic (Grade 6, C3 D2.His.11.6-8): relative dating at a dig. Every answer is computed from the
// fictional dig written out in its own question, with the rules the lesson states. Superposition: in undisturbed
// ground a lower layer was laid down before a higher one. A find was buried when the layer it lies in was laid down,
// so the layer dates the find. Cross-cutting: a pit, well, ditch, drain or post hole is younger than every layer it
// cuts through, and a layer that lies over it was laid down after it. Every site, layer list and find is fictional.
// Extends history-e-order-from-clues (one order from before-and-after clues) and history-e-anachronisms (what a
// dated context allows) to the order of buried layers and the things found in them.
/* Layers are listed top first. A cut goes down through the listed layers (top first); `over` is the layer that
   seals it, if any. `up` lists the layers from the bottom up in the question. */
const SITES=[
 {name:'Hollin Field',layers:['topsoil','ash','clay','sand','gravel'],finds:{ash:'bead',clay:'coin',sand:'comb',gravel:'pot'},cut:{what:'pit',through:['clay','sand'],over:'ash'},up:false},
 {name:'Marsh End',layers:['peat','silt','shell','clay'],finds:{silt:'button',shell:'fish hook',clay:'axe head'},cut:{what:'post hole',through:['silt','shell'],over:'peat'},up:true},
 {name:'Castle Knoll',layers:['turf','rubble','charcoal','loam','chalk','gravel'],finds:{rubble:'key',charcoal:'nail',loam:'brooch',chalk:'arrowhead'},cut:{what:'well',through:['charcoal','loam','chalk'],over:'rubble'},up:false},
 {name:'Riverside Yard',layers:['topsoil','gravel','silt','clay'],finds:{gravel:'tile',silt:'lamp',clay:'needle'},cut:{what:'drain',through:['silt'],over:'gravel'},up:true},
 {name:'Old Mill',layers:['topsoil','rubble','ash','sand','clay'],finds:{rubble:'buckle',ash:'ring',sand:'bowl',clay:'flint'},cut:{what:'ditch',through:['ash','sand'],over:'rubble'},up:false},
 {name:'Barrow Hill',layers:['turf','chalk','loam','charcoal','sand'],finds:{chalk:'pin',loam:'cup',charcoal:'blade',sand:'bead'},cut:{what:'pit',through:['loam','charcoal'],over:'chalk'},up:true},
 {name:'Hartley Lane',layers:['topsoil','clay','ash','gravel'],finds:{clay:'coin',ash:'spoon',gravel:'pot'},cut:{what:'well',through:['topsoil','clay','ash'],over:null},up:false},
 {name:'Fen Gate',layers:['peat','sand','shell','silt','clay'],finds:{sand:'comb',shell:'hook',silt:'jar',clay:'axe'},cut:{what:'post hole',through:['shell','silt'],over:'sand'},up:true}];
const art=w=>/^[aeiou]/.test(w)?'an':'a';
const and=l=>l.length<2?l.join(''):`${l.slice(0,-1).join(', ')} and ${l[l.length-1]}`;
const cap=s=>s[0].toUpperCase()+s.slice(1);
const ORD=['first','second','third','fourth','fifth','sixth'];
/* Rank: 0 for the bottom layer (laid down first), counting up. A cut ranks just above the highest layer it cuts. */
const rank=(S,l)=>S.layers.length-1-S.layers.indexOf(l);
const cutRank=S=>rank(S,S.cut.through[0])+0.5;
const listed=S=>S.up?[...S.layers].reverse():S.layers;
const describeDig=(S,withCut)=>{const ls=listed(S),fs=ls.filter(l=>S.finds[l]).map(l=>`${art(S.finds[l])} ${S.finds[l]} in the ${l}`);
 return `At the fictional ${S.name} dig, the layers from the ${S.up?'bottom up':'top down'} are ${and(ls)}. Finds: ${and(fs)}.`+(withCut?` ${cap(art(S.cut.what))} ${S.cut.what} cuts down through ${and(S.cut.through.map(l=>`the ${l}`))}${S.cut.over?`, and the ${S.cut.over} lies over it`:', starting from the ground surface today'}.`:'');};
const column=(S,withCut)=>({t:'setups',title:`Fictional dig: ${S.name}`,head:`Layer (${S.up?'bottom':'top'} first)`,rows:listed(S).map(l=>[l,S.finds[l]||'—',...(withCut?[S.cut.through.includes(l)?'cut':l===S.cut.over?'lies over it':'']:[])]),cols:withCut?['Finds',cap(S.cut.what)]:['Finds']});
const bottomUp=S=>`From the bottom up the layers are ${and([...S.layers].reverse())}`;
const accL=l=>[`the ${l}`,`${l} layer`,`the ${l} layer`];
const accF=f=>[`the ${f}`];
/* The teaching dig (not in the question pool). */
const TARN={t:'setups',title:'Fictional dig: Tarn Hill',head:'Layer (top first)',rows:[['topsoil','—'],['rubble','coin'],['ash','—'],['clay','pot']],cols:['Finds']};
const TARN_CUT={t:'setups',title:'Fictional dig: Tarn Hill',head:'Layer (top first)',rows:[['topsoil','—',''],['rubble','coin','lies over it'],['ash','—','cut'],['clay','pot','']],cols:['Finds','Post hole']};
export default {
id:'history-m-stratigraphy',subject:'history',level:4,grade:6,standard:'C3 D2.His.11.6-8',
title:'Layers at a dig',
goal:'Use the law of superposition to put a dig’s layers in order, date the finds by the layer they lie in, and place a pit or well that cuts through the layers.',
points:20,
skills:{layers:'Order of the layers',finds:'Dating finds by their layer',cuts:'Pits and wells that cut layers'},
steps:[
 {skill:'layers',say:'Soil, ash, sand and rubble build up in layers, one on top of another. In ground that has not been disturbed, the lowest layer was laid down first and the top layer last. This is the law of superposition: lower is older.',pic:TARN},
 {skill:'layers',say:'A dig report may list the layers from the top down or from the bottom up. Check which way the list runs, then find the bottom layer: it is the oldest. The layer just above another was laid down just after it.',pic:TARN,
  check:{prompt:'Try it: at the fictional Tarn Hill dig, the layers from the bottom up are clay, ash, rubble and topsoil. Which layer was laid down first?',answer:'clay',options:['clay','topsoil','ash'],hint:'Lower is older, and a list from the bottom up starts with the bottom layer.',pic:{t:'setups',title:'Fictional dig: Tarn Hill',head:'Layer (bottom first)',rows:[['clay',''],['ash',''],['rubble',''],['topsoil','']],cols:['Finds']}}},
 {skill:'finds',say:'An object found in a layer was buried when that layer was laid down, so the layer dates the find. A find in a lower layer is older than a find in a higher layer. At Tarn Hill the pot in the clay is older than the coin in the rubble.',pic:TARN},
 {skill:'finds',say:'A find was buried after every layer below its own and before every layer above it. Its layer gives its place in the order, not an exact year.',pic:TARN,
  check:{prompt:'Try it: at the fictional Tarn Hill dig, a coin was found in the rubble and a pot in the clay, which lies below the rubble. Which was buried first: the coin or the pot?',answer:'the pot',options:['the pot','the coin'],hint:'The clay is lower, so it was laid down before the rubble.',pic:TARN}},
 {skill:'cuts',say:'A pit, a well, a ditch or a post hole is dug down into layers that are already there. So anything that cuts through layers is younger than every layer it cuts, and younger than the layers below them too. This is the rule of cross-cutting.',pic:TARN_CUT},
 {skill:'cuts',say:'A layer that lies over a pit was laid down after the pit was dug, so it is younger than the pit. A find in a layer the pit cuts through is older than the pit, and a find in the layer over it is younger.',pic:TARN_CUT,
  check:{prompt:'Try it: at the fictional Tarn Hill dig, a post hole cuts down through the ash, and the rubble lies over it. Was the post hole dug before or after the ash was laid down?',answer:'after',options:['after','before'],hint:'Something can only cut through a layer that is already there.',pic:TARN_CUT}}],
progression:{requires:['history-e-order-from-clues','history-e-anachronisms'],operations:2,demand:'Turn a listed column of layers so the bottom is first, give each find its layer’s place, and slot a cut in just above the highest layer it cuts.'},
items(add){
 const seen=new Set(),once=(skill,prompt,...rest)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,...rest);};
 let turn=0;
 const pair=(a,b)=>turn++%2?[b,a]:[a,b];
 SITES.forEach(S=>{const head=describeDig(S,false),pic=column(S,false),n=S.layers.length,top=S.layers,bu=bottomUp(S);
  /* The order of the layers. */
  once('layers',`${head} Which layer was laid down first?`,top[n-1],pic,`Lower is older. ${bu}, so the ${top[n-1]} was laid down first.`,accL(top[n-1]));
  once('layers',`${head} Which layer was laid down last?`,top[0],pic,`Lower is older. ${bu}, so the ${top[0]}, at the top, was laid down last.`,accL(top[0]));
  for(const [i,j] of [[1,n-1],[0,2]]){const [x,y]=pair(top[i],top[j]),old=rank(S,x)<rank(S,y)?x:y,yng=old===x?y:x;
   once('layers',`${head} Which layer is older: the ${x} or the ${y}?`,old,pic,`The ${old} lies below the ${yng}, and lower is older.`,accL(old));}
  once('layers',`${head} Which layer was laid down just after the ${top[2]}?`,top[1],pic,`${bu}. The layer just above the ${top[2]} is the ${top[1]}, so it came next.`,accL(top[1]));
  once('layers',`${head} Which layer was laid down just before the ${top[1]}?`,top[2],pic,`${bu}. The layer just below the ${top[1]} is the ${top[2]}, so it came just before.`,accL(top[2]));
  for(const k of [1,2])once('layers',`${head} Counting from the oldest, which layer was laid down ${ORD[k]}?`,top[n-1-k],pic,`${bu}, so the ${ORD[k]} layer laid down is the ${top[n-1-k]}.`,accL(top[n-1-k]));
  /* Dating the finds by their layers. F holds the finds top first. */
  const F=top.filter(l=>S.finds[l]).map(l=>({l,f:S.finds[l]})),m=F.length,the=f=>`the ${f}`;
  for(const [word,idx] of [['oldest',[0,1,m-1]],['youngest',[0,m-2,m-1]]]){const tri=idx.map(i=>F[i]),o=[tri[(turn)%3],tri[(turn+1)%3],tri[(turn+2)%3]];turn++;
   const ans=word==='oldest'?tri.reduce((a,b)=>rank(S,a.l)<rank(S,b.l)?a:b):tri.reduce((a,b)=>rank(S,a.l)>rank(S,b.l)?a:b);
   once('finds',`${head} Which of these finds is the ${word}: the ${o[0].f}, the ${o[1].f} or the ${o[2].f}?`,ans.f,pic,`Each find is as old as its layer. ${cap(tri.map(x=>`the ${x.f} is in the ${x.l}`).join('; '))}. The ${ans.l} is the ${word==='oldest'?'lowest':'highest'} of these layers, so the ${ans.f} is the ${word}.`,accF(ans.f));}
  for(const [i,j] of [[0,1],[1,m-1]]){const [x,y]=pair(F[i],F[j]),first=rank(S,x.l)<rank(S,y.l)?x:y,other=first===x?y:x;
   once('finds',`${head} Which was buried first: the ${x.f} or the ${y.f}?`,first.f,pic,`The ${first.f} lies in the ${first.l}, below the ${other.l} where the ${other.f} lies. Lower is older, so the ${first.f} was buried first.`,accF(first.f));}
  for(const [fi,li] of [[0,top.indexOf(F[0].l)+1],[m-1,top.indexOf(F[m-1].l)-1]]){const x=F[fi],l=top[li];if(!l||l===x.l)continue;const after=rank(S,l)<rank(S,x.l);
   once('finds',`${head} Was the ${x.f} buried before or after the ${l} was laid down?`,after?'after':'before',pic,`The ${x.f} was buried when the ${x.l} was laid down. The ${l} lies ${after?'below':'above'} the ${x.l}, so the ${x.f} was buried ${after?'after':'before'} it.`);}
  /* Cuts. The cut sits just above the highest layer it cuts and below the layer over it. */
  const C=S.cut,ch=describeDig(S,true),cp=column(S,true),cr=cutRank(S),hi=C.through[0],lo=C.through[C.through.length-1];
  const vs=[lo,C.over,top[top.indexOf(lo)+1],C.over&&top[top.indexOf(C.over)-1]].filter(Boolean);
  for(const l of vs){const after=rank(S,l)<cr;
   once('cuts',`${ch} Was the ${C.what} dug before or after the ${l} was laid down?`,after?'after':'before',cp,
    C.through.includes(l)?`The ${C.what} cuts through the ${l}, so the ${l} was already there: the ${C.what} was dug after it.`:l===C.over?`The ${l} lies over the ${C.what}, so it was laid down after the ${C.what} was dug: the ${C.what} came before it.`:after?`The ${l} lies below the ${lo}, which the ${C.what} cuts, so the ${l} was there first: the ${C.what} was dug after it.`:`The ${l} lies above the ${C.over}, which lies over the ${C.what}, so the ${C.what} was dug before it.`);}
  const olderF=F.filter(x=>rank(S,x.l)<cr),youngerF=F.filter(x=>rank(S,x.l)>cr);
  for(const x of [olderF[0],youngerF[youngerF.length-1]].filter(Boolean)){const [a,b]=pair(C.what,x.f),fOlder=rank(S,x.l)<cr,old=fOlder?x.f:C.what;
   once('cuts',`${ch} Which is older: the ${a} or the ${b}?`,old,cp,fOlder?`The ${x.f} lies in the ${x.l}, which ${C.through.includes(x.l)?`the ${C.what} cuts through`:`lies below the layers the ${C.what} cuts`}, so the ${x.f} was buried before the ${C.what} was dug.`:`The ${x.f} lies in the ${x.l}, which ${x.l===C.over?`lies over the ${C.what}`:`lies above the layer over the ${C.what}`}, so the ${C.what} is older.`,accF(old));}});
}
};
