// Middle School topic (Grade 7, C3 D2.His.1.6-8): reigns, overlaps and succession. Every answer is computed from
// the fictional dates in its own question with the rules the lesson states: a reign's length is its last year
// minus its first year; two reigns overlap from the later start to the earlier end, and the overlap's length is
// that end minus that start; and the ruler in a given year is the one whose reign includes it. No question asks
// about a year where one reign ends and the next begins. Every kingdom and ruler is fictional.
const K=[
 {land:'Arvel',title:'queen',list:[['Maren',1204,1231],['Osric',1231,1249],['Ida',1249,1262],['Corin',1262,1290],['Tamsin',1290,1301]]},
 {land:'Bryth',title:'king',list:[['Aldo',1188,1215],['Wenna',1215,1240],['Hob',1240,1244],['Lisle',1244,1276],['Perrin',1276,1309]]},
 {land:'Cael',title:'prince',list:[['Eamon',1196,1222],['Rhosyn',1222,1259],['Garet',1259,1265],['Ffion',1265,1283],['Bran',1283,1312]]},
 {land:'Dunmar',title:'duke',list:[['Ulric',1210,1226],['Sela',1226,1251],['Tobin',1251,1274],['Hesper',1274,1280],['Mabyn',1280,1302]]}];
const who=(k,y)=>k.list.find(([,a,b])=>y>a&&y<b);
const listSaid=k=>`The fictional rulers of ${k.land}, in order, were ${k.list.map(([n,a,b])=>`${n} (${a}–${b})`).join(', ')}.`;
const pic=(k,hint)=>({t:'setups',title:`Fictional rulers of ${k.land}`,head:'Ruler',rows:k.list.map(([n,a,b])=>[n,`${a}`,`${b}`]),cols:['From','To'],...(hint?{hint:true}:{})});
const two=(p,q)=>({t:'setups',title:'Two fictional reigns',head:'Ruler',rows:[[p[0],`${p[1]}`,`${p[2]}`],[q[0],`${q[1]}`,`${q[2]}`]],cols:['From','To']});
const ov=(p,q)=>Math.min(p[2],q[2])-Math.max(p[1],q[1]);
export default {
id:'history-m-reigns',subject:'history',level:4,grade:7,standard:'C3 D2.His.1.6-8',
title:'Reigns, overlaps and succession',
goal:'Work out how long a reign lasted, whether and for how long two reigns overlapped, and who was ruling in a given year.',
points:20,
skills:{length:'Reign lengths',overlap:'Overlapping reigns',when:'Who ruled when'},
steps:[
 {skill:'length',say:'A reign is the time a ruler holds power, written as two years: 1204–1231 means from 1204 to 1231. In this topic a reign’s length is the last year minus the first year, so the fictional Queen Maren of Arvel reigned 1231 - 1204 = 27 years.',eq:'1231 - 1204 = 27',pic:pic(K[0])},
 {skill:'length',say:'When one ruler follows another, the first reign’s last year is the next reign’s first year. Adding the lengths of reigns in a row gives the time from the first start to the last end: Maren’s 27 years and Osric’s 18 years make 45 years, from 1204 to 1249.',eq:'27 + 18 = 45',pic:pic(K[0]),
  check:{prompt:'Try it: the fictional King Lisle of Bryth reigned from 1244 to 1276. How many years did his reign last?',answer:32,options:[32,33,1276],hint:'Take the first year from the last year.',pic:two(['Lisle',1244,1276],['Perrin',1276,1309])}},
 {skill:'overlap',say:'Rulers of different lands can reign at the same time. Two reigns overlap from the later of their starts to the earlier of their ends. Maren of Arvel (1204–1231) and Aldo of Bryth (1188–1215) overlap from 1204 to 1215, which is 1215 - 1204 = 11 years.',eq:'1215 - 1204 = 11',pic:two(['Maren',1204,1231],['Aldo',1188,1215])},
 {skill:'overlap',say:'If one reign ends before the other begins, there is no overlap at all. Osric of Arvel (1231–1249) and Aldo of Bryth (1188–1215) never ruled at the same time: Aldo’s reign was over 16 years before Osric’s began.',eq:'1231 - 1215 = 16',pic:two(['Osric',1231,1249],['Aldo',1188,1215]),
  check:{prompt:'Try it: the fictional Prince Eamon of Cael reigned from 1196 to 1222, and the fictional Duke Ulric of Dunmar from 1210 to 1226. For how many years did their reigns overlap?',answer:12,options:[12,16,26],hint:'The overlap runs from the later start, 1210, to the earlier end, 1222.',pic:two(['Eamon',1196,1222],['Ulric',1210,1226])}},
 {skill:'when',say:'To find who was ruling in a year, look for the reign whose years include it. In Arvel, 1240 falls between 1231 and 1249, so Osric was ruling. A year when one reign ends and the next begins needs more evidence than this list, so this topic avoids those years.',pic:pic(K[0])},
 {skill:'when',say:'A list of rulers also lets you compare lands at one moment. In 1270, Corin ruled Arvel and Lisle ruled Bryth. Count how many rulers a land had across a span by counting the reigns that touch it.',pic:{t:'setups',title:'Who ruled in 1270',head:'Land',rows:[['Arvel','Corin'],['Bryth','Lisle']],cols:['Ruler']},
  check:{prompt:'Try it: the fictional rulers of Cael, in order, were Eamon (1196–1222), Rhosyn (1222–1259), Garet (1259–1265), Ffion (1265–1283) and Bran (1283–1312). Who was ruling Cael in 1262?',answer:'Garet',options:['Garet','Rhosyn','Ffion'],hint:'Find the reign whose years include 1262.',pic:pic(K[2])}}],
progression:{requires:['history-m-bce-ce','history-e-lifespans'],operations:2,demand:'Subtract a first year from a last year, find the later start and earlier end of two reigns, and place a year inside the right reign.'},
items(add){
 K.forEach((k,j)=>{const L=listSaid(k);
  /* Reign lengths, and the time across several reigns in a row (the Try-it's Lisle is left out). */
  k.list.forEach(([n,a,b],i)=>{if(j===1&&i===3)return;
   add('length',`The fictional ${k.title} ${n} of ${k.land} reigned from ${a} to ${b}. How many years did the reign last?`,b-a,two([n,a,b],k.list[(i+1)%5]),`${b} - ${a} = ${b-a} years.`);});
  [[0,2],[1,3],[2,4],[0,4]].forEach(([p,q])=>add('length',`${L} How many years passed from the start of ${k.list[p][0]}’s reign to the end of ${k.list[q][0]}’s?`,k.list[q][2]-k.list[p][1],pic(k,true),`${k.list[q][2]} - ${k.list[p][1]} = ${k.list[q][2]-k.list[p][1]} years.`));
  const longest=k.list.reduce((m,r)=>r[2]-r[1]>m[2]-m[1]?r:m),shortest=k.list.reduce((m,r)=>r[2]-r[1]<m[2]-m[1]?r:m);
  add('length',`${L} Who reigned the longest?`,longest[0],pic(k),`The lengths are ${k.list.map(([n,a,b])=>`${n} ${b-a}`).join(', ')}, so ${longest[0]} reigned longest.`,[`${k.title} ${longest[0].toLowerCase()}`]);
  add('length',`${L} How many years long was the shortest reign?`,shortest[2]-shortest[1],pic(k,true),`The lengths are ${k.list.map(([n,a,b])=>`${n} ${b-a}`).join(', ')}, so the shortest was ${shortest[2]-shortest[1]} years.`);
  /* Who ruled in a year (the Try-it's Cael in 1262 is left out). */
  for(const y of [k.list[0][1]+5,k.list[1][1]+3,k.list[2][1]+2,k.list[3][1]+7,k.list[4][1]+4,k.list[1][2]-1]){if(j===2&&y===1262)continue;const r=who(k,y);
   add('when',`${L} Who was ruling ${k.land} in ${y}?`,r[0],pic(k),`${y} falls between ${r[1]} and ${r[2]}, the years of ${r[0]}’s reign.`,[`${k.title} ${r[0].toLowerCase()}`]);}
  add('when',`${L} How many different rulers did ${k.land} have from ${k.list[1][1]+1} to ${k.list[3][1]+1}?`,3,pic(k),`${k.list[1][0]}, ${k.list[2][0]} and ${k.list[3][0]} each ruled during those years: 3 rulers.`);});
 /* Overlaps between rulers of two lands (the Try-it's Eamon and Ulric are left out). */
 const pairs=[];for(let a=0;a<4;a++)for(let b=a+1;b<4;b++)for(let i=0;i<5;i++)for(let m=0;m<5;m++)pairs.push([K[a],K[a].list[i],K[b],K[b].list[m]]);
 let yes=0,no=0;
 pairs.forEach(([ka,p,kb,q],z)=>{if(p[0]==='Eamon'&&q[0]==='Ulric')return;const o=ov(p,q);if(z%5!==0&&!(o<0&&z%5===3))return;
  const lead=`The fictional ${ka.title} ${p[0]} of ${ka.land} reigned from ${p[1]} to ${p[2]}, and the fictional ${kb.title} ${q[0]} of ${kb.land} from ${q[1]} to ${q[2]}.`;
  if(o>0)add('overlap',`${lead} For how many years did their reigns overlap?`,o,two(p,q),`The overlap runs from ${Math.max(p[1],q[1])} to ${Math.min(p[2],q[2])}: ${Math.min(p[2],q[2])} - ${Math.max(p[1],q[1])} = ${o} years.`);
  if(o!==0&&((o>0&&yes<=no)||(o<0&&no<yes+2))){o>0?yes++:no++;
   add('overlap',`${lead} Did their reigns overlap: yes or no?`,o>0?'yes':'no',two(p,q),o>0?`Both were ruling from ${Math.max(p[1],q[1])} to ${Math.min(p[2],q[2])}.`:`One reign ended in ${Math.min(p[2],q[2])}, before the other began in ${Math.max(p[1],q[1])}.`);}
  if(o>0&&z%2===0)add('overlap',`${lead} In which year did the overlap begin?`,Math.max(p[1],q[1]),two(p,q),`The overlap begins at the later start: ${Math.max(p[1],q[1])}.`);});
}
};
