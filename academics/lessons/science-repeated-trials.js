// Original science lesson. Fictional results; every answer is calculated from the three trials in the question.
// The middle value of three trials is used rather than one lucky or unlucky trial (NGSS 3-5 practice: analyze and interpret data).
const TESTS=[
 {what:'Bounce height',unit:'cm',thing:'ball',more:'bounced higher'},
 {what:'Roll distance',unit:'cm',thing:'car',more:'rolled farther'},
 {what:'Seedling height',unit:'mm',thing:'tray',more:'grew taller'},
 {what:'Water soaked up',unit:'mL',thing:'towel',more:'soaked up more'}];
const middle=v=>[...v].sort((a,b)=>a-b)[1];
export default {
id:"science-e-repeated-trials",
subject:"science",
level:3,
grade:4,
title:"Repeating trials",
goal:"Read repeated trials, find the middle value, and compare results without trusting one lucky trial.",
standard:"NGSS 3-5 science practice: analyze and interpret data from repeated trials",
points:20,
skills:{"read":"Read one trial","middle":"Find the middle value","compare":"Compare using middle values"},
steps:[{"skill":"read","say":"One trial can go wrong: a ball can hit a crack, or a car can bump a shoe. So scientists run a fair test more than once. Each run is a trial. This chart shows three trials for ball A and three for ball B.","pic":{"t":"trials","what":"Bounce height","unit":"cm","names":["Ball A","Ball B"],"values":[[46,50,48],[60,38,42]]}},
{"skill":"read","say":"Read a trial by its group and its number. Ball A bounced 46 cm in trial 1. Ball B bounced 60 cm in trial 1 and 38 cm in trial 2.","pic":{"t":"trials","what":"Bounce height","unit":"cm","names":["Ball A","Ball B"],"values":[[46,50,48],[60,38,42]]},"check":{"prompt":"Ball A bounced 46, 50 and 48 cm. Ball B bounced 60, 38 and 42 cm. How many centimeters did ball B bounce in trial 3?","answer":42,"options":[42,38,48],"hint":"Find ball B, then its third bar.","pic":{"t":"trials","what":"Bounce height","unit":"cm","names":["Ball A","Ball B"],"values":[[46,50,48],[60,38,42]]}}},
{"skill":"middle","say":"To find the middle value, put the three trials in order and take the one in the middle. Ball A: 46, 48, 50, so the middle is 48. Ball B: 38, 42, 60, so the middle is 42.","pic":{"t":"trials","what":"Bounce height","unit":"cm","names":["Ball A","Ball B"],"values":[[46,50,48],[60,38,42]],"mid":true,"solve":true}},
{"skill":"middle","say":"The middle value does not move much when one trial goes oddly high or low. Ball B's 60 cm might have been a lucky bounce, but its middle value is still 42.","pic":{"t":"trials","what":"Bounce height","unit":"cm","names":["Ball A","Ball B"],"values":[[46,50,48],[60,38,42]],"mid":true,"solve":true},"check":{"prompt":"A toy car rolled 72, 64 and 90 cm in three trials. What is the middle value in centimeters?","answer":72,"options":[72,90,64],"hint":"Put them in order: 64, 72, 90. Take the one in the middle.","pic":{"t":"trials","what":"Roll distance","unit":"cm","names":["Car A","Car B"],"values":[[72,64,90],[55,61,58]]}}},
{"skill":"compare","say":"Compare the middle values, not the single biggest trial. Ball B has the tallest bar, but its middle is 42 and ball A's middle is 48. Using middle values, ball A bounced higher, by 6 cm.","pic":{"t":"trials","what":"Bounce height","unit":"cm","names":["Ball A","Ball B"],"values":[[46,50,48],[60,38,42]],"mid":true,"solve":true}},
{"skill":"compare","say":"Three trials are a small test, so the result is our best answer so far, not a proof. If the middles were very close, more trials would help decide.","pic":{"t":"trials","what":"Seedling height","unit":"mm","names":["Tray A","Tray B"],"values":[[34,31,33],[29,45,36]]},"check":{"prompt":"Tray A seedlings grew 34, 31 and 33 mm. Tray B seedlings grew 29, 45 and 36 mm. Using the middle values, which tray grew taller: A or B?","answer":"B","options":["B","A"],"hint":"Middle of A is 33; middle of B is 36.","pic":{"t":"trials","what":"Seedling height","unit":"mm","names":["Tray A","Tray B"],"values":[[34,31,33],[29,45,36]]}}}],
progression:{"requires":["science-e-fair-tests","math-e-place-value"],"operations":3,"demand":"Order each group's trials, take the middle values, then compare them instead of the single largest trial."},
items(add){
 TESTS.forEach((T,c)=>{const cap=T.thing[0].toUpperCase()+T.thing.slice(1);
  for(let i=0;i<12;i++){const tri=(m,k)=>[0,1,2].map(n=>24+((i*m+c*k+n*(m+5))%18)*4),A=tri(7,3),B=tri(5,11),mA=middle(A),mB=middle(B);
   if(mA===mB)continue;
   const pic={t:'trials',what:T.what,unit:T.unit,names:[cap+' A',cap+' B'],values:[A,B]},u=T.unit,
    data=`Fictional results. ${cap} A: ${A.join(', ')} ${u}. ${cap} B: ${B.join(', ')} ${u}. `,g=i%2,v=g?B:A,name=`${T.thing} ${g?'B':'A'}`,k=i%3;
   add('read',data+`What was ${name}'s result in trial ${k+1}, in ${u}?`,v[k],pic,`Find ${name}, then its trial ${k+1} bar.`);
   add('middle',data+`What is the middle value of ${name}'s three trials, in ${u}?`,middle(v),pic,`Put ${v.join(', ')} in order and take the middle one.`);
   add('compare',data+`Using the middle values, which ${T.thing} ${T.more}: A or B?`,mA>mB?'A':'B',pic,`The middle values are ${mA} and ${mB}; compare those, not the single biggest trial.`,[`${T.thing} ${mA>mB?'a':'b'}`]);
   add('compare',data+`How many ${u} apart are the two middle values?`,Math.abs(mA-mB),pic,`The middle values are ${mA} and ${mB}; subtract the smaller from the larger.`);}
 });
}
};
