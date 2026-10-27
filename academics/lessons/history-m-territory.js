// Middle School topic (Grade 7, C3 D2.His.1.6-8 and D2.Geo.7.6-8): territory change in a historical atlas.
// Every answer is computed from the fictional atlas table in its own question: each row is a province with its
// area, each column a year, and a mark shows the kingdom held that province then. The area held is the sum of the
// marked provinces, a gain is a province held in the later year but not the earlier one (a loss the reverse), and
// the order of change follows the years. Every kingdom and province is fictional.
const A=[
 {k:'Ostmark',years:[1100,1150,1200,1250],prov:[['Hollin',120,[1,1,1,1]],['Vesk',80,[0,1,1,0]],['Darrow',150,[0,0,1,1]],['Mire',60,[1,1,0,0]],['Tallow',90,[0,0,0,1]]]},
 {k:'Seravel',years:[900,950,1000,1050],prov:[['Corve',200,[1,1,1,1]],['Bastel',70,[1,0,0,1]],['Fenric',110,[0,1,1,1]],['Lune',45,[0,0,1,0]],['Ostra',130,[1,1,0,0]]]},
 {k:'Kaldor',years:[1300,1325,1350,1375],prov:[['Grise',90,[1,1,1,1]],['Hesk',140,[0,1,1,1]],['Iver',55,[0,0,1,1]],['Jorra',100,[1,0,0,0]],['Kell',75,[0,1,1,0]]]},
 {k:'Marrow',years:[700,750,800,850],prov:[['Amber',160,[1,1,1,1]],['Brisk',95,[1,1,0,0]],['Cindral',65,[0,1,1,1]],['Drest',120,[0,0,1,1]],['Elbow',50,[1,0,0,1]]]},
 {k:'Tirnan',years:[1500,1550,1600,1650],prov:[['Orrin',85,[1,1,1,1]],['Pell',125,[0,1,1,0]],['Quarry',70,[1,1,0,0]],['Rhun',110,[0,0,1,1]],['Sallow',40,[0,1,0,1]]]}];
const area=(a,c)=>a.prov.reduce((s,p)=>s+(p[2][c]?p[1]:0),0);
const held=(a,c)=>a.prov.filter(p=>p[2][c]).map(p=>p[0]);
const and=l=>l.length<2?l.join(''):`${l.slice(0,-1).join(', ')} and ${l.at(-1)}`;
const said=a=>`In a fictional atlas, the kingdom of ${a.k} held these provinces: ${a.years.map((y,c)=>`in ${y}, ${and(held(a,c))}`).join('; ')}. The areas, in thousands of square kilometres, are ${a.prov.map(p=>`${p[0]} ${p[1]}`).join(', ')}.`;
const pic=a=>({t:'setups',title:`Fictional ${a.k}: provinces held`,head:'Province',rows:a.prov.map(p=>[`${p[0]} (${p[1]})`,...p[2].map(h=>h?'held':'-')]),cols:a.years.map(String)});
export default {
id:'history-m-territory',subject:'history',level:4,grade:7,standard:'C3 D2.His.1.6-8, D2.Geo.7.6-8',
title:'Territory change on a historical map',
goal:'Read a historical atlas to work out the area a kingdom held in a year, which provinces it gained or lost between two years, and the order in which its borders changed.',
points:20,
skills:{area:'Area held',change:'Gains and losses',order:'Order of change'},
steps:[
 {skill:'area',say:'A historical atlas shows the same land at different dates, so you can see borders move. This fictional atlas table lists the provinces of Ostmark with their areas, in thousands of square kilometres, and marks the years each one was held.',pic:pic(A[0])},
 {skill:'area',say:'The area a kingdom held in a year is the sum of the provinces held then. In 1150 Ostmark held Hollin, Vesk and Mire: 120 + 80 + 60 = 260 thousand square kilometres.',eq:'120 + 80 + 60 = 260',pic:pic(A[0]),
  check:{prompt:'Try it: in the fictional atlas, Ostmark held Hollin (120), Vesk (80) and Darrow (150) in 1200, with areas in thousands of square kilometres. What area did it hold in 1200, in thousands of square kilometres?',answer:350,options:[350,260,200],hint:'Add the areas of the three provinces held in 1200.',pic:pic(A[0])}},
 {skill:'change',say:'A gain is a province held in the later year but not in the earlier one; a loss is the reverse. Between 1150 and 1200 Ostmark gained Darrow and lost Mire, so its area changed by 150 - 60 = 90.',eq:'150 - 60 = 90',pic:pic(A[0])},
 {skill:'change',say:'A kingdom can gain and lose at once, so compare whole lists, not only the totals. Between 1200 and 1250 Ostmark lost Vesk but gained Tallow: its area rose from 350 to 360, even though it gave up land.',pic:pic(A[0]),
  check:{prompt:'Try it: in the fictional atlas, Seravel held Corve, Bastel and Ostra in 900, and Corve, Fenric and Ostra in 950. Which province did it lose between 900 and 950?',answer:'Bastel',options:['Bastel','Fenric','Corve'],hint:'Find the province in the 900 list that is missing from the 950 list.',pic:pic(A[1])}},
 {skill:'order',say:'To put changes in order, read the columns from earliest to latest. Ostmark gained Vesk by 1150, Darrow by 1200 and Tallow by 1250, so Vesk was gained first and Tallow last.',pic:pic(A[0])},
 {skill:'order',say:'A province held the longest appears in the most columns. Hollin is held in all four years, Vesk in two. An atlas only shows the dates it has, so a province marked in 1150 and 1200 may have been taken at any time after 1100.',pic:pic(A[0]),
  check:{prompt:'Try it: in the fictional atlas, Ostmark held Mire in 1100 and 1150 but not in 1200 or 1250. Between which two atlas years did Ostmark lose Mire? Give the earlier year.',answer:1150,options:[1150,1100,1200],hint:'Find the last year Mire is held, and the next atlas year.',pic:pic(A[0])}}],
progression:{requires:['history-m-bce-ce','geography-e-map-scale'],operations:2,demand:'Add the areas of held provinces, compare two years’ lists for gains and losses, and read the columns in date order.'},
items(add){
 const gs={grow:0,shrink:0};
 A.forEach((a,j)=>{const S=said(a),P=pic(a),Y=a.years;
  /* Area held in each year, and the year with the most land (the Try-it's Ostmark in 1200 is left out). */
  Y.forEach((y,c)=>{if(j===0&&c===2)return;add('area',`${S} What area did ${a.k} hold in ${y}, in thousands of square kilometres?`,area(a,c),P,`In ${y} it held ${and(held(a,c))}: ${a.prov.filter(p=>p[2][c]).map(p=>p[1]).join(' + ')} = ${area(a,c)}.`);});
  const best=Y.map((_,c)=>area(a,c)),top=best.indexOf(Math.max(...best));
  if(best.filter(v=>v===best[top]).length===1)add('area',`${S} In which atlas year did ${a.k} hold the most land?`,Y[top],P,`The areas are ${Y.map((y,c)=>`${y}: ${best[c]}`).join(', ')}, so the most was in ${Y[top]}.`);
  if(best[3]!==best[0])add('area',`${S} How much ${best[3]>best[0]?'more':'less'} land did ${a.k} hold in ${Y[3]} than in ${Y[0]}, in thousands of square kilometres?`,Math.abs(best[3]-best[0]),P,`${Y[3]}: ${best[3]}; ${Y[0]}: ${best[0]}; the difference is ${Math.abs(best[3]-best[0])}.`);
  /* Gains and losses between neighbouring years (the Try-it's Seravel loss 900–950 is left out). */
  for(let c=0;c<3;c++){const g=a.prov.filter(p=>!p[2][c]&&p[2][c+1]).map(p=>p[0]),l=a.prov.filter(p=>p[2][c]&&!p[2][c+1]).map(p=>p[0]),d=area(a,c+1)-area(a,c);
   add('change',`${S} How many provinces did ${a.k} gain between ${Y[c]} and ${Y[c+1]}?`,g.length,P,g.length?`Held in ${Y[c+1]} but not ${Y[c]}: ${and(g)}.`:`Every province held in ${Y[c+1]} was already held in ${Y[c]}.`);
   if(!(j===1&&c===0)&&l.length===1)add('change',`${S} Which province did ${a.k} lose between ${Y[c]} and ${Y[c+1]}?`,l[0],P,`${l[0]} was held in ${Y[c]} but not in ${Y[c+1]}.`);
   if(g.length===1)add('change',`${S} Which province did ${a.k} gain between ${Y[c]} and ${Y[c+1]}?`,g[0],P,`${g[0]} was held in ${Y[c+1]} but not in ${Y[c]}.`);
   if(d<0||(d>0&&gs.grow<=gs.shrink)){gs[d>0?'grow':'shrink']++;add('change',`${S} Between ${Y[c]} and ${Y[c+1]}, did ${a.k}’s area grow or shrink?`,d>0?'grow':'shrink',P,`It went from ${area(a,c)} to ${area(a,c+1)}, so it ${d>0?'grew':'shrank'} by ${Math.abs(d)}.`,[d>0?'grew':'shrank']);}
   add('change',`${S} By how much did ${a.k}’s area change between ${Y[c]} and ${Y[c+1]}, in thousands of square kilometres?`,Math.abs(d),P,`From ${area(a,c)} to ${area(a,c+1)}: a change of ${Math.abs(d)}.`);}
  /* Order: the first year each province appears, the province held longest, and when one was lost (the Try-it's Mire is left out). */
  const span=a.prov.map(p=>p[2].reduce((s,h)=>s+h,0)),firstHeld=p=>p[2].indexOf(1);
  a.prov.forEach((p,i)=>{if(firstHeld(p)>0)add('order',`${S} In which atlas year does ${p[0]} first appear as held by ${a.k}?`,Y[firstHeld(p)],P,`${p[0]} is first marked in ${Y[firstHeld(p)]}.`);
   add('order',`${S} In how many of the four atlas years did ${a.k} hold ${p[0]}?`,span[i],P,`${p[0]} is marked in ${span[i]} of the four years.`);
   const lastHeld=p[2].lastIndexOf(1);if(lastHeld<3&&lastHeld>=0&&p[2].slice(lastHeld+1).every(h=>!h)&&!(j===0&&p[0]==='Mire'))add('order',`${S} ${a.k} held ${p[0]} in ${Y[lastHeld]} but not in any later atlas year. Between which two atlas years did it lose ${p[0]}? Give the earlier year.`,Y[lastHeld],P,`${p[0]} is last marked in ${Y[lastHeld]}, and not in ${Y[lastHeld+1]}.`);});
  const g2=a.prov.filter(p=>firstHeld(p)>0).sort((x,y)=>firstHeld(x)-firstHeld(y));
  if(g2.length>=2&&firstHeld(g2[0])!==firstHeld(g2[1]))add('order',`${S} Of the provinces ${a.k} gained after ${Y[0]}, which did it gain first?`,g2[0][0],P,`${g2.map(p=>`${p[0]} by ${Y[firstHeld(p)]}`).join(', ')}, so ${g2[0][0]} came first.`);});
}
};
