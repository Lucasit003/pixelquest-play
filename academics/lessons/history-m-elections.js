// Middle School topic (Grade 8, C3 D2.His.1.6-8 and D2.Civ.3.6-8): reading election results. Every answer is
// computed from the fictional results in its own question with the rules the lesson states: the winner has the
// most votes (a plurality), a majority means more than half of all votes cast, a candidate's share is their votes
// ÷ all votes cast × 100, turnout is votes cast ÷ people allowed to vote × 100, and a council shares its seats in
// proportion to the votes where a question says so. Every town, election and candidate is fictional.
const fmt=n=>n.toLocaleString('en-US');
const E=[
 {town:'Ashford',year:1832,eligible:5000,votes:[['Mara Hollis',1800],['Tobias Wren',1500],['Ida Crane',700]]},
 {town:'Brackley',year:1868,eligible:8000,votes:[['Silas Venn',3300],['Ruth Albery',2700]]},
 {town:'Corbridge',year:1885,eligible:12000,votes:[['Edwin Marsh',4200],['Clara Pyne',3600],['Josiah Lark',2400],['Nell Ashby',1800]]},
 {town:'Dunmore',year:1906,eligible:20000,votes:[['Agnes Fell',7500],['Walter Rook',6000],['Hal Penner',1500]]},
 {town:'Ellesmere',year:1918,eligible:30000,votes:[['Mabel Thorne',9100],['George Sefton',8400],['Ann Quill',3500]]},
 {town:'Farleigh',year:1929,eligible:16000,votes:[['Percy Gale',5000],['Lena Moss',6200],['Owen Brisk',800]]},
 {town:'Glenmore',year:1945,eligible:25000,votes:[['Iris Doyle',9000],['Frank Hale',9000],['Ruth Penn',2000]]},
 {town:'Hartwell',year:1951,eligible:10000,votes:[['Ned Carrow',4100],['June Ellis',3900]]},
 {town:'Ivybridge',year:1960,eligible:40000,votes:[['Carl Neame',14000],['Dora Fitch',12000],['Sid Rowe',6000]]},
 {town:'Jarrow Vale',year:1972,eligible:6000,votes:[['Eve Marlow',2900],['Ben Kight',1600]]},
 {town:'Kestrel Ford',year:1880,eligible:4000,votes:[['Amos Dray',1300],['Lily Harte',1100],['Tom Bale',600]]}];
const total=e=>e.votes.reduce((a,[,v])=>a+v,0);
const said=e=>`In a fictional ${e.year} election in ${e.town}, ${fmt(e.eligible)} people were allowed to vote. The results were: ${e.votes.map(([n,v])=>`${n} ${fmt(v)}`).join(', ')}.`;
const pic=(e,hint)=>({t:'setups',title:`Fictional ${e.town}, ${e.year}`,head:'Candidate',rows:e.votes.map(([n,v])=>[n,fmt(v)]),cols:['Votes'],...(hint?{hint:true}:{})});
const r1=x=>Math.round(x*10)/10;
export default {
id:'history-m-elections',subject:'history',level:4,grade:8,standard:'C3 D2.His.1.6-8, D2.Civ.3.6-8',
title:'Reading election results',
goal:'Count votes to find a winner and the margin, work out vote shares and turnout, and tell a plurality from a majority.',
points:20,
skills:{count:'Counting votes',share:'Shares and turnout',majority:'Majorities'},
steps:[
 {skill:'count',say:'Election results are a record historians use to see what people wanted. In a simple election the candidate with the most votes wins. In fictional Ashford in 1832, Mara Hollis had 1,800 votes, Tobias Wren 1,500 and Ida Crane 700, so Hollis won by 1,800 - 1,500 = 300 votes.',eq:'1,800 - 1,500 = 300',pic:pic(E[0])},
 {skill:'count',say:'Add every candidate’s votes for the total cast: 1,800 + 1,500 + 700 = 4,000. The margin is the winner’s votes minus the runner-up’s.',eq:'1,800 + 1,500 + 700 = 4,000',pic:pic(E[0]),
  check:{prompt:'Try it: in a fictional 1868 election in Brackley, the results were Silas Venn 3,300 and Ruth Albery 2,700. By how many votes did the winner win?',answer:600,options:[600,6000,3300],hint:'Take the runner-up’s votes from the winner’s.',pic:pic(E[1])}},
 {skill:'share',say:'A vote share is a candidate’s votes ÷ all votes cast × 100. Hollis’s 1,800 of 4,000 is 1,800 ÷ 4,000 × 100 = 45%.',eq:'1,800 ÷ 4,000 × 100 = 45',pic:pic(E[0])},
 {skill:'share',say:'Turnout is the votes cast ÷ the people allowed to vote × 100. In Ashford 4,000 of 5,000 voted: 4,000 ÷ 5,000 × 100 = 80%. Who was allowed to vote has changed over history, so turnout always compares with those allowed at the time.',eq:'4,000 ÷ 5,000 × 100 = 80',pic:{t:'setups',title:'Fictional Ashford, 1832',head:'',rows:[['allowed to vote','5,000'],['votes cast','4,000'],['turnout','80%']],cols:['People']},
  check:{prompt:'Try it: in a fictional 1906 election in Dunmore, 20,000 people were allowed to vote and 15,000 votes were cast. What was the turnout, in percent?',answer:75,options:[75,25,133],hint:'15,000 ÷ 20,000 × 100.',pic:{t:'setups',title:'Fictional Dunmore, 1906',head:'',rows:[['allowed to vote','20,000'],['votes cast','15,000'],['turnout','?']],cols:['People']}}},
 {skill:'majority',say:'Winning is not always a majority. A majority means more than half of all votes cast; the most votes is a plurality. Hollis won Ashford with 45%: a plurality, not a majority.',pic:pic(E[0])},
 {skill:'majority',say:'With only two candidates and no tie, the winner always has a majority. With three or more, check whether the winner’s votes are more than half the total: in Brackley, 3,300 of 6,000 is 55%, a majority.',pic:pic(E[1]),
  check:{prompt:'Try it: in a fictional 1918 election in Ellesmere, the results were Mabel Thorne 9,100, George Sefton 8,400 and Ann Quill 3,500. Did the winner get a majority of the votes cast: yes or no?',answer:'no',options:['yes','no'],hint:'The total is 21,000. Is 9,100 more than half of it?',pic:pic(E[4])}}],
progression:{requires:['history-m-sources','math-m-percent-change'],operations:3,demand:'Add votes, subtract for a margin, divide for a share or turnout, and compare the winner’s votes with half the total.'},
items(add){
 const yn=[];
 E.forEach((e,j)=>{const S=said(e),P=pic(e),T=total(e),sorted=[...e.votes].sort((a,b)=>b[1]-a[1]),tie=sorted[0][1]===sorted[1][1];
  /* Counting: total, winner, margin, a candidate's votes against another's (the Try-it's Brackley margin is left out). */
  add('count',`${S} How many votes were cast in all?`,T,pic(e,true),`${e.votes.map(([,v])=>fmt(v)).join(' + ')} = ${fmt(T)}.`);
  if(!tie){add('count',`${S} Who won the election?`,sorted[0][0],P,`${sorted[0][0]} had the most votes, ${fmt(sorted[0][1])}.`,[sorted[0][0].split(' ')[1]]);
   if(j!==1)add('count',`${S} By how many votes did the winner beat the runner-up?`,sorted[0][1]-sorted[1][1],P,`${fmt(sorted[0][1])} - ${fmt(sorted[1][1])} = ${fmt(sorted[0][1]-sorted[1][1])}.`);}
  else add('count',`${S} Which two candidates tied for the most votes? Give the first name listed.`,sorted[0][0],P,`${sorted[0][0]} and ${sorted[1][0]} both had ${fmt(sorted[0][1])}.`,[sorted[0][0].split(' ')[1]]);
  if(e.votes.length>2)add('count',`${S} How many more votes did ${e.votes[0][0]} get than ${e.votes[e.votes.length-1][0]}?`,Math.abs(e.votes[0][1]-e.votes.at(-1)[1]),P,`${fmt(e.votes[0][1])} and ${fmt(e.votes.at(-1)[1])} differ by ${fmt(Math.abs(e.votes[0][1]-e.votes.at(-1)[1]))}.`);
  add('count',`${S} How many people who were allowed to vote did not vote?`,e.eligible-T,pic(e,true),`${fmt(e.eligible)} - ${fmt(T)} = ${fmt(e.eligible-T)}.`);
  /* Shares and turnout, kept to one decimal place. */
  for(const [n,v] of e.votes.slice(0,3)){const sh=v*100/T;if(Math.abs(sh*10-Math.round(sh*10))>1e-9)continue;
   add('share',`${S} What percent of the votes cast did ${n} get?`,r1(sh),P,`${fmt(v)} ÷ ${fmt(T)} × 100 = ${r1(sh)}%.`);}
  const to=T*100/e.eligible;if(j!==3&&Math.abs(to*10-Math.round(to*10))<1e-9)add('share',`${S} What was the turnout, the percent of people allowed to vote who voted?`,r1(to),pic(e,true),`${fmt(T)} ÷ ${fmt(e.eligible)} × 100 = ${r1(to)}%.`);
  /* Majorities (the Try-it's Ellesmere is left out). */
  if(!tie&&j!==4){const maj=sorted[0][1]*2>T;add('majority',`${S} Did the winner get a majority of the votes cast: yes or no?`,maj?'yes':'no',P,maj?`${fmt(sorted[0][1])} is more than half of ${fmt(T)}.`:`${fmt(sorted[0][1])} is not more than half of ${fmt(T)}, so it is a plurality.`);yn.push(maj?'yes':'no');}
  add('majority',`${S} How many votes would a candidate have needed for a majority, the smallest number more than half of all votes cast?`,Math.floor(T/2)+1,pic(e,true),`Half of ${fmt(T)} is ${fmt(T/2)}, so a majority is ${fmt(Math.floor(T/2)+1)} or more.`);
  if(!tie){const need=Math.floor(T/2)+1-sorted[0][1];if(need>0)add('majority',`${S} How many more votes would the winner have needed for a majority?`,need,pic(e,true),`A majority is ${fmt(Math.floor(T/2)+1)}; ${fmt(Math.floor(T/2)+1)} - ${fmt(sorted[0][1])} = ${fmt(need)}.`);}});
 /* Seats shared in proportion to votes. */
 [[[60000,30000,10000],10],[[45000,30000,15000],6],[[24000,16000,8000],12],[[50000,25000,25000],8],[[36000,27000,9000],8],[[70000,20000,10000],10]].forEach(([vs,seats],k)=>{const T=vs.reduce((a,b)=>a+b,0),names=['the Harbour Party','the Hill Party','the River Party'],pick=k%3;
  const lead=`A fictional council has ${seats} seats, shared in proportion to the votes. The ${names.slice(0,3).map((n,i)=>`${n} got ${fmt(vs[i])} votes`).join(', ')}.`.replace('The the','The');
  add('share',`${lead} How many seats does ${names[pick]} win?`,vs[pick]*seats/T,{t:'setups',title:'A fictional council election',head:'Party',rows:names.map((n,i)=>[n,fmt(vs[i])]),cols:['Votes']},`${names[pick][0].toUpperCase()+names[pick].slice(1)}’s share is ${fmt(vs[pick])} ÷ ${fmt(T)} = ${vs[pick]/T}, and ${vs[pick]/T} × ${seats} = ${vs[pick]*seats/T} seats.`);
  const top=vs[0]*seats/T,maj=top*2>seats;
  add('majority',`${lead} Does the Harbour Party win a majority of the seats: yes or no?`,maj?'yes':'no',{t:'setups',title:'A fictional council election',head:'Party',rows:names.map((n,i)=>[n,fmt(vs[i])]),cols:['Votes']},`It wins ${top} of ${seats} seats, which is ${maj?'more':'not more'} than half.`);yn.push(maj?'yes':'no');});
}
};
