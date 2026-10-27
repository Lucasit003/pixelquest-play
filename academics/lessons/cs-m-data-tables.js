// Middle School topic (Grade 8, CSTA 2-DA-08): working with a data table. Every answer is computed here from the
// fictional table in its own question: a filter keeps the rows that pass a test (and needs both tests, or only
// one, as it says), a summary adds, averages or finds the largest or smallest value in a column, and a sort puts
// the rows in order by one column (no column used for sorting has two equal values). Each prompt lists its table
// in words, and its picture shows the same table.
const T=[
 {name:'players',lead:'A fictional club table lists each player’s name, team and points',key:'name',cat:'team',val:'points',unit:'',rows:[['Ana','Red',24],['Bo','Blue',18],['Cy','Red',31],['Dee','Green',12],['Eli','Blue',27],['Fay','Green',20],['Gus','Red',15],['Hal','Blue',9]],cuts:[15,20,25]},
 {name:'weather',lead:'A fictional weather table lists each day, its sky and its rain in millimetres',key:'day',cat:'sky',val:'rain',unit:' mm',rows:[['Mon','cloudy',2],['Tue','rainy',14],['Wed','cloudy',5],['Thu','rainy',21],['Fri','sunny',0],['Sat','rainy',9],['Sun','sunny',1]],cuts:[4,8,10]},
 {name:'books',lead:'A fictional library table lists each book’s title, genre and pages',key:'title',cat:'genre',val:'pages',unit:'',rows:[['Moon Maze','mystery',220],['Iron Kite','adventure',310],['Quiet Fox','mystery',180],['Red Comet','science',260],['Sea Glass','adventure',140],['Tin Owl','science',330],['Zigzag','mystery',275],['Paper Sun','adventure',205]],cuts:[200,250,300]},
 {name:'stock',lead:'A fictional shop table lists each item, its aisle and how many are in stock',key:'item',cat:'aisle',val:'stock',unit:'',rows:[['apples','A',40],['bread','B',12],['cheese','C',25],['dates','A',8],['eggs','C',36],['flour','B',19],['grapes','A',31],['honey','B',6]],cuts:[10,20,30]},
 {name:'race',lead:'A fictional race table lists each runner, their school and their time in seconds',key:'runner',cat:'school',val:'time',unit:' s',rows:[['Ivy','North',62],['Jon','South',58],['Kim','North',71],['Lou','East',55],['Max','South',66],['Nia','East',60],['Oz','North',69],['Pia','South',64]],cuts:[60,63,68]}];
const said=t=>`${t.lead}: ${t.rows.map(r=>r.join(', ')).join('; ')}.`;
const pic=t=>({t:'setups',title:`A fictional ${t.name} table`,head:cap(t.key),rows:t.rows.map(([k,c,v])=>[k,c,`${v}`]),cols:[cap(t.cat),cap(t.val)]});
const cap=s=>s[0].toUpperCase()+s.slice(1);
const cats=t=>[...new Set(t.rows.map(r=>r[1]))];
const sum=a=>a.reduce((x,y)=>x+y,0);
const ORD=['first','second','third','fourth','fifth','sixth','seventh','eighth'];
export default {
id:'cs-m-data-tables',subject:'cs',level:4,grade:8,standard:'CSTA 2-DA-08',
title:'Working with data tables',
goal:'Filter the rows of a data table with one or two tests, summarise a column with a total, an average, a largest or a smallest value, and sort the rows by a column.',
points:20,
skills:{filter:'Filtering rows',summary:'Summarising a column',sort:'Sorting rows'},
steps:[
 {skill:'filter',say:'A data table stores one record in each row and one kind of value in each column. Programs answer questions about the data by filtering, summarising and sorting. This fictional club table has a row for each player, with columns for name, team and points.',pic:pic(T[0])},
 {skill:'filter',say:'A filter keeps only the rows that pass a test. team = Red keeps Ana, Cy and Gus: 3 rows. With "and", a row must pass both tests: team = Red and points > 20 keeps Ana and Cy. With "or", passing either test is enough.',pic:{t:'setups',title:'team = Red and points > 20',head:'Name',rows:[['Ana','Red','24','kept'],['Cy','Red','31','kept'],['Gus','Red','15','not kept']],cols:['Team','Points','Filter']},
  check:{prompt:'Try it: in the fictional club table (Ana, Red, 24; Bo, Blue, 18; Cy, Red, 31; Dee, Green, 12; Eli, Blue, 27; Fay, Green, 20; Gus, Red, 15; Hal, Blue, 9), how many rows have points of at least 20?',answer:4,options:[4,3,5],hint:'At least 20 includes 20 itself. Check each row’s points.',pic:pic(T[0])}},
 {skill:'summary',say:'A summary turns a column into one number. The total of the Red team’s points is 24 + 31 + 15 = 70. The average adds the values and divides by how many there are: the Blue team’s average is (18 + 27 + 9) ÷ 3 = 18.',eq:'24 + 31 + 15 = 70',pic:{t:'setups',title:'Summaries by team',head:'Team',rows:[['Red','70','3'],['Blue','54','3'],['Green','32','2']],cols:['Total points','Rows']}},
 {skill:'summary',say:'The largest and smallest values are found by scanning the column once, like the running high and low variables from Grade 7. The highest points in the table are Cy’s 31 and the lowest are Hal’s 9, so the range is 31 - 9 = 22.',eq:'31 - 9 = 22',pic:{t:'setups',title:'Points column',head:'',rows:[['highest','31, Cy'],['lowest','9, Hal'],['range','22']],cols:['Value']},
  check:{prompt:'Try it: in the fictional club table (Ana, Red, 24; Bo, Blue, 18; Cy, Red, 31; Dee, Green, 12; Eli, Blue, 27; Fay, Green, 20; Gus, Red, 15; Hal, Blue, 9), what is the total of the Green team’s points?',answer:32,options:[32,20,12],hint:'Add the points of every row whose team is Green.',pic:pic(T[0])}},
 {skill:'sort',say:'Sorting puts the rows in order by one column. Sorted by points from highest to lowest, the club table starts Cy 31, Eli 27, Ana 24, Fay 20, and ends with Hal 9. Every column moves with its row: Cy’s team stays Red.',pic:{t:'setups',title:'Sorted by points, highest first',head:'Row',rows:[['1','Cy','31'],['2','Eli','27'],['3','Ana','24'],['4','Fay','20']],cols:['Name','Points']}},
 {skill:'sort',say:'Read a sorted position by counting. Sorted from lowest to highest, the points go 9, 12, 15, 18, 20, 24, 27, 31, so the third row holds 15, which is Gus.',pic:{t:'setups',title:'Sorted by points, lowest first',head:'Row',rows:[['1','Hal','9'],['2','Dee','12'],['3','Gus','15']],cols:['Name','Points']},
  check:{prompt:'Try it: the fictional club table (Ana, Red, 24; Bo, Blue, 18; Cy, Red, 31; Dee, Green, 12; Eli, Blue, 27; Fay, Green, 20; Gus, Red, 15; Hal, Blue, 9) is sorted by points from highest to lowest. Whose row comes second?',answer:'Eli',options:['Eli','Bo','Cy'],hint:'Find the largest points, then the next largest.',pic:pic(T[0])}}],
progression:{requires:['cs-m-list-algorithms','cs-m-boolean-logic'],operations:3,demand:'Test each row against one or two conditions, add or average a column over the kept rows, and order the rows by one column.'},
items(add){
 T.forEach((t,j)=>{const S=said(t),P=pic(t),vals=t.rows.map(r=>r[2]),C=cats(t),[c1,c2,c3]=t.cuts,V=t.val,u=t.unit;
  const count=f=>t.rows.filter(f).length,names=f=>t.rows.filter(f).map(r=>r[0]);
  /* Filters: one test, then two with "and" or "or" (the Try-it's points of at least 20 is left out). */
  C.forEach(c=>add('filter',`${S} How many rows have ${t.cat} = ${c}?`,count(r=>r[1]===c),P,`The rows with ${t.cat} ${c} are ${names(r=>r[1]===c).join(', ')}.`));
  [[`greater than ${c1}`,r=>r[2]>c1],[`at least ${c2}`,r=>r[2]>=c2],[`less than ${c3}`,r=>r[2]<c3]].forEach(([w,f])=>{if(j===0&&w==='at least 20')return;
   add('filter',`${S} How many rows have ${V} ${w}?`,count(f),P,`The rows with ${V} ${w} are ${names(f).join(', ')||'none'}: ${count(f)}.`);});
  add('filter',`${S} How many rows have ${t.cat} = ${C[0]} and ${V} greater than ${c1}?`,count(r=>r[1]===C[0]&&r[2]>c1),P,`Both tests must pass: ${names(r=>r[1]===C[0]&&r[2]>c1).join(', ')||'no rows'}.`);
  add('filter',`${S} How many rows have ${t.cat} = ${C[1]} or ${V} greater than ${c3}?`,count(r=>r[1]===C[1]||r[2]>c3),P,`Either test is enough: ${names(r=>r[1]===C[1]||r[2]>c3).join(', ')}.`);
  /* Summaries: totals by category (the Try-it's Green total is left out), averages that come out whole, highest, lowest and range. */
  C.forEach(c=>{if(j===0&&c==='Green')return;const v=t.rows.filter(r=>r[1]===c).map(r=>r[2]);add('summary',`${S} What is the total ${V} for ${t.cat} ${c}?`,sum(v),P,`${v.join(' + ')} = ${sum(v)}${u}.`);});
  C.forEach(c=>{const v=t.rows.filter(r=>r[1]===c).map(r=>r[2]);if(v.length>1&&sum(v)%v.length===0)add('summary',`${S} What is the average ${V} for ${t.cat} ${c}?`,sum(v)/v.length,P,`(${v.join(' + ')}) ÷ ${v.length} = ${sum(v)/v.length}${u}.`);});
  if(sum(vals)%vals.length===0)add('summary',`${S} What is the average ${V} over all the rows?`,sum(vals)/vals.length,P,`The ${V} values add to ${sum(vals)}, and ${sum(vals)} ÷ ${vals.length} = ${sum(vals)/vals.length}${u}.`);
  const top=t.rows.filter(r=>r[1]===C[1]).map(r=>r[2]);
  add('summary',`${S} What is the highest ${V} for ${t.cat} ${C[1]}?`,Math.max(...top),P,`The ${C[1]} rows have ${top.join(', ')}; the highest is ${Math.max(...top)}${u}.`);
  add('summary',`${S} What is the lowest ${V} in the whole table?`,Math.min(...vals),P,`Scanning the column, the lowest is ${Math.min(...vals)}${u}.`);
  add('summary',`${S} What is the range of the ${V} column, the highest minus the lowest?`,Math.max(...vals)-Math.min(...vals),P,`${Math.max(...vals)} - ${Math.min(...vals)} = ${Math.max(...vals)-Math.min(...vals)}${u}.`);
  /* Sorting (the Try-it's second row, highest first, is left out). */
  const down=t.rows.slice().sort((a,b)=>b[2]-a[2]),up=down.slice().reverse();
  [[down,'from highest to lowest',0],[down,'from highest to lowest',2],[up,'from lowest to highest',0],[up,'from lowest to highest',1],[down,'from highest to lowest',down.length-1]].forEach(([o,w,k])=>{
   add('sort',`${S} The table is sorted by ${V} ${w}. Whose row comes ${k===o.length-1?'last':ORD[k]}?`.replace('Whose row',t.key==='name'||t.key==='runner'?'Whose row':`Which ${t.key}’s row`),o[k][0],P,`Sorted ${w}, the ${V} values go ${o.map(r=>r[2]).join(', ')}, so row ${k+1} is ${o[k][0]}.`,[o[k][0].toLowerCase()]);});
  const who=t.rows[(j+3)%t.rows.length][0],pos=down.findIndex(r=>r[0]===who)+1;
  add('sort',`${S} The table is sorted by ${V} from highest to lowest. In which row does ${who} end up? Answer with the row number, counting from 1.`,pos,P,`Sorted from highest to lowest, the ${V} values go ${down.map(r=>r[2]).join(', ')}, and ${who}’s ${t.rows.find(r=>r[0]===who)[2]} is row ${pos}.`);
  add('sort',`${S} The table is sorted by ${V} from lowest to highest. What ${V} value is in row 4, counting from 1?`,up[3][2],P,`Sorted from lowest to highest: ${up.map(r=>r[2]).join(', ')}. Row 4 holds ${up[3][2]}${u}.`);});
}
};
