// Middle School topic (Grade 8, Jump$tart Investing, grade 8 benchmark): returns, spreading money out, and risk.
// Every answer is computed here in whole cents: a gain is the value now minus what was paid, a percent return is
// the gain ÷ what was paid, each part of a mixed investment grows by its own stated percent, and risk is read as
// the range of yearly returns (best minus worst) beside the average return. Every fund is fictional, and past
// returns are never presented as a promise.
const usd=c=>`$${(c/100).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
const pct=p=>`${p}%`;
const tab=(title,rows)=>({t:'setups',title,head:'',rows,cols:['Value']});
const NM=['Ada','Ben','Cleo','Dev','Esme','Finn','Gia','Hugo','Iris','Jonah','Kira','Leo'];
const FUND=['fund','share','index fund','stock'];
export default {
id:'finance-m-investing-risk',subject:'finance',level:4,grade:8,standard:'Jump$tart Investing, grade 8 benchmark',
title:'Investing, return and risk',
goal:'Work out an investment’s gain and percent return, find the value of money spread across two investments, and compare risk by the range of yearly returns.',
points:20,
skills:{gain:'Gains, losses and returns',mix:'Spreading money out',risk:'Risk and return'},
steps:[
 {skill:'gain',say:'An investment is money put into something you expect to grow, such as shares of a company or a fund that holds many shares. Its gain is the value now minus what you paid: a fictional $400.00 investment now worth $460.00 has gained $460.00 - $400.00 = $60.00.',pic:tab('A fictional fund',[['paid','$400.00'],['worth now','$460.00'],['gain','$60.00']])},
 {skill:'gain',say:'The percent return compares the gain with what you paid: $60.00 ÷ $400.00 = 0.15, a 15% return. Values can fall too: $400.00 falling to $340.00 is a loss of $60.00, a fall of 15%.',eq:'60 ÷ 400 = 0.15 = 15%',pic:tab('A fictional fund',[['paid','$400.00'],['gain','$60.00'],['return','15%']]),
  check:{prompt:'Try it: a fictional fund bought for $500.00 is now worth $560.00. What is the percent return?',answer:12,options:[12,60,112],hint:'The gain is $60.00. Divide it by the $500.00 paid.',pic:tab('A fictional fund',[['paid','$500.00'],['worth now','$560.00'],['return','?']])}},
 {skill:'mix',say:'Diversifying means spreading money across several investments, so one bad result hurts less. Each part grows or shrinks by its own percent. In a fictional plan, $600.00 in a fund that rises 10% becomes $660.00, and $400.00 in a fund that falls 5% becomes $380.00.',pic:tab('A fictional plan',[['fund A','$600.00, up 10%'],['fund B','$400.00, down 5%']])},
 {skill:'mix',say:'Add the parts for the new total: $660.00 + $380.00 = $1,040.00. The whole $1,000.00 gained $40.00, a 4% return, even though one part lost money.',eq:'660 + 380 = 1,040',pic:tab('A fictional plan after a year',[['fund A','$660.00'],['fund B','$380.00'],['total','$1,040.00']]),
  check:{prompt:'Try it: a fictional investor puts $300.00 in fund A, which rises 20%, and $700.00 in fund B, which falls 10%. What is the total value now, in dollars?',answer:990,options:[990,1100,1000],hint:'Fund A becomes $360.00 and fund B becomes $630.00. Add them.',pic:tab('A fictional plan',[['fund A','$300.00, up 20%'],['fund B','$700.00, down 10%'],['total now','?']])}},
 {skill:'risk',say:'Risk is how much results can swing. Investments that can earn more usually carry more risk, so in some years they lose money. Past returns never promise future ones, so every fund in this topic is fictional.',pic:tab('Risk and return',[['steady fund','small swings, smaller returns'],['risky fund','big swings, losses in some years']])},
 {skill:'risk',say:'One way to see risk is the range of yearly returns: the best year minus the worst. Fund A returned 5%, 6%, 4% and 5%, a range of 6 - 4 = 2 points. Fund B returned 20%, -10%, 15% and -5%, a range of 30 points, so fund B is riskier.',pic:{t:'setups',title:'Two fictional funds',head:'Year',rows:[['1','5%','20%'],['2','6%','-10%'],['3','4%','15%'],['4','5%','-5%']],cols:['Fund A','Fund B']}},
 {skill:'risk',say:'The average return adds the yearly returns and divides by the number of years. Fund A averages 20 ÷ 4 = 5%, and fund B’s returns also add to 20, so it averages 5% too, with far bigger swings on the way.',pic:{t:'setups',title:'Two fictional funds',head:'',rows:[['sum of returns','20','20'],['average','5%','5%'],['range','2 points','30 points']],cols:['Fund A','Fund B']},
  check:{prompt:'Try it: a fictional fund returned 8%, -4%, 12% and 8% in four years. What was its average yearly return, in percent?',answer:6,options:[6,24,8],hint:'Add the four returns, then divide by 4.',pic:{t:'setups',title:'A fictional fund',head:'Year',rows:[['1','8%'],['2','-4%'],['3','12%'],['4','8%']],cols:['Return']}}}],
progression:{requires:['finance-m-simple-compound','math-m-percent-change'],operations:3,demand:'Find a gain and divide it by the amount paid, grow two parts by their own percents and add them, and find a range and an average of signed returns.'},
items(add){
 let i=0;
 const who=()=>NM[i%NM.length];
 /* Gains, losses, percent changes and new values (the Try-it's $500.00 to $560.00 is left out). */
 for(const X of [400,500,800,1200,250,640])for(const p of [10,15,-20,25,-5,12,-30,8]){if(X===500&&p===12)continue;const c=X*100,y=c+c*p/100,g=Math.abs(y-c),f=FUND[i%FUND.length],k=i++%3,up=p>0;
  if(k===0)add('gain',`A fictional ${f} bought for ${usd(c)} is now worth ${usd(y)}. How much money has it ${up?'gained':'lost'}, in dollars?`,g/100,tab(`A fictional ${f}`,[['paid',usd(c)],['worth now',usd(y)],[up?'gain':'loss','?']]),`${up?`${usd(y)} - ${usd(c)}`:`${usd(c)} - ${usd(y)}`} = ${usd(g)}.`);
  else if(k===1)add('gain',`A fictional ${f} bought for ${usd(c)} is now worth ${usd(y)}. By what percent has its value ${up?'risen':'fallen'}?`,Math.abs(p),tab(`A fictional ${f}`,[['paid',usd(c)],['worth now',usd(y)],[up?'percent rise':'percent fall','?']]),`The ${up?'gain':'loss'} is ${usd(g)}, and ${usd(g)} ÷ ${usd(c)} = ${Math.abs(p)/100}, which is ${Math.abs(p)}%.`);
  else add('gain',`${who()} puts ${usd(c)} into a fictional ${f}, and its value ${up?'rises':'falls'} ${Math.abs(p)}%. What is it worth now, in dollars?`,y/100,tab(`A fictional ${f}`,[['paid',usd(c)],[up?'rise':'fall',pct(Math.abs(p))],['worth now','?']]),`${Math.abs(p)}% of ${usd(c)} is ${usd(g)}, so it is worth ${usd(c)} ${up?'+':'-'} ${usd(g)} = ${usd(y)}.`);}
 /* Money split between two funds (the Try-it's $300.00 at +20% and $700.00 at -10% is left out). */
 const PF=[[500,8,500,-4],[200,30,800,5],[700,6,300,-10],[400,25,600,-5],[900,10,100,-20],[250,12,750,4],[450,-10,550,20],[800,-5,200,40],[350,20,650,-2],[1500,6,500,-8],[1200,-3,800,9],[600,15,400,-25],[100,50,900,-5]];
 const mv=(a,p)=>p>0?`rises ${p}%`:`falls ${-p}%`;
 PF.forEach(([a,pa,b,pb])=>{const A=a*100,B=b*100,nA=A+A*pa/100,nB=B+B*pb/100,tot=nA+nB,g=tot-A-B,n=who();i++;
  const lead=`${n} puts ${usd(A)} in fictional fund A, which ${mv(a,pa)}, and ${usd(B)} in fictional fund B, which ${mv(b,pb)}.`,pic=tab(`${n}’s fictional plan`,[['fund A',`${usd(A)}, ${pa>0?'up':'down'} ${Math.abs(pa)}%`],['fund B',`${usd(B)}, ${pb>0?'up':'down'} ${Math.abs(pb)}%`]]);
  add('mix',`${lead} What is the total value now, in dollars?`,tot/100,pic,`Fund A becomes ${usd(nA)} and fund B becomes ${usd(nB)}, so the total is ${usd(tot)}.`);
  add('mix',`${lead} How much has the whole ${usd(A+B)} ${g>=0?'gained':'lost'}, in dollars?`,Math.abs(g)/100,pic,`The total is ${usd(nA)} + ${usd(nB)} = ${usd(tot)}, so the whole ${g>=0?'gained':'lost'} ${usd(Math.abs(g))}.`);
  if(Math.abs(g)*100%(A+B)===0&&g!==0)add('mix',`${lead} By what percent has the whole ${usd(A+B)} ${g>0?'risen':'fallen'}?`,Math.abs(g)*100/(A+B),pic,`The whole ${g>0?'gained':'lost'} ${usd(Math.abs(g))}, and ${usd(Math.abs(g))} ÷ ${usd(A+B)} is ${Math.abs(g)*100/(A+B)}%.`);});
 /* Risk: range and average of four yearly returns, and which of two funds is riskier or did better on average. */
 const FR=[[[5,6,4,5],[20,-10,15,-5]],[[3,4,5,4],[12,-6,18,-8]],[[7,8,6,7],[25,-15,30,-12]],[[2,3,2,1],[10,-2,6,2]],[[6,5,7,6],[-4,16,-8,24]],[[4,4,5,3],[15,-10,9,2]],[[8,7,9,8],[30,-20,10,4]],[[1,2,3,2],[9,-7,11,-1]],[[5,4,6,5],[18,-12,22,-4]],[[6,7,5,6],[-9,21,-3,15]]];
 const sum=a=>a.reduce((x,y)=>x+y,0),range=a=>Math.max(...a)-Math.min(...a),list=a=>`${a.slice(0,-1).map(pct).join(', ')} and ${pct(a.at(-1))}`;
 FR.forEach(([s,v],j)=>{const swap=j%2===1,[A,B]=swap?[v,s]:[s,v],lead=`Over four years, fictional fund A returned ${list(A)}, and fictional fund B returned ${list(B)}.`;
  const pic={t:'setups',title:'Two fictional funds',head:'Year',rows:[0,1,2,3].map(y=>[`${y+1}`,pct(A[y]),pct(B[y])]),cols:['Fund A','Fund B']};
  const one=j%2===0?['A',A]:['B',B],other=j%2===0?['B',B]:['A',A];
  add('risk',`${lead} What is the range of fund ${one[0]}’s yearly returns, in percentage points?`,range(one[1]),pic,`Best year ${pct(Math.max(...one[1]))} minus worst year ${pct(Math.min(...one[1]))} is ${range(one[1])} points.`);
  if(sum(other[1])%4===0)add('risk',`${lead} What was fund ${other[0]}’s average yearly return, in percent?`,sum(other[1])/4,pic,`The returns add to ${sum(other[1])}, and ${sum(other[1])} ÷ 4 = ${sum(other[1])/4}%.`);
  const risky=range(A)>range(B)?'A':'B';
  add('risk',`${lead} Judging risk by the range of yearly returns, which fund was riskier: A or B?`,risky,pic,`Fund A’s range is ${range(A)} points and fund B’s is ${range(B)} points, so fund ${risky} swung more.`,[`fund ${risky.toLowerCase()}`]);
  if(sum(A)!==sum(B)){const hi=sum(A)>sum(B)?'A':'B';add('risk',`${lead} Which fund had the higher average yearly return: A or B?`,hi,pic,`Fund A’s returns add to ${sum(A)} and fund B’s to ${sum(B)}, so over the same four years fund ${hi} averaged more.`,[`fund ${hi.toLowerCase()}`]);}});
}
};
