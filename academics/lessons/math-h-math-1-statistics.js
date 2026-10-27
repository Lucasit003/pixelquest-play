// High School course unit (docs/design/COURSES.md, docs/design/COURSE_QUALITY.md): Math 1, Unit 7, Descriptive Statistics,
// written to the Common Core integrated pathway's Math I standards (S-ID.1, S-ID.2, S-ID.3, S-ID.5, S-ID.6 to S-ID.9); our
// own wording and questions. The mean is the sum ÷ the count and the median the middle value (the mean of the two middle
// values for an even count); quartiles are the medians of the lower and upper halves, leaving the median out of both
// halves when the count is odd (one common method, stated in the lesson); IQR = Q3 - Q1; a common rule calls a value an
// outlier when it lies more than 1.5 × IQR below Q1 or above Q3; the mean absolute deviation is the mean distance from
// the mean; standard deviation here divides by the number of values. Relative frequencies are counts ÷ a total. A
// residual is the actual value minus the predicted value. Every data set is fictional and chosen so answers terminate.
const tab=(title,rows,cols=['Value'])=>({t:'setups',title,head:'',rows,cols});
const num=v=>String(Math.round(v*1e6)/1e6);
const sum=a=>a.reduce((s,v)=>s+v,0),mean=a=>sum(a)/a.length,sorted=a=>[...a].sort((x,y)=>x-y);
const median=a=>{const s=sorted(a),k=s.length;return k%2?s[(k-1)/2]:(s[k/2-1]+s[k/2])/2;};
const quart=a=>{const s=sorted(a),k=s.length,lo=s.slice(0,Math.floor(k/2)),hi=s.slice(Math.ceil(k/2));return [median(lo),median(hi)];};
/* lettered choices, the right one moved to position k */
const choose=(right,wrong,k)=>{const o=[...wrong];o.splice(k%3,0,right);return {text:o.map((x,i)=>`${'ABC'[i]}: ${x}`).join(', '),letter:'ABC'[o.indexOf(right)]};};
const YN={yes:['y'],no:['n']};
/* Charts for the lesson (gfx/lesson-chart.js). SCORES lie near ŷ = 4x + 52 (least squares gives about 4x + 52.3);
   the three panels of R3 have r of about 0.997, -0.088 and -0.997. */
const SCORES=[[1,55],[2,61],[3,67],[4,66],[5,73],[6,75],[7,81]];
const R3=[{t:'chart',kind:'scatter',title:'r close to 1',area:[24,214],x:[0,8],y:[0,8],points:[[1,1.2],[2,1.9],[3,3.1],[4,3.8],[5,5.2],[6,5.9],[7,7.1]]},
 {t:'chart',kind:'scatter',title:'r close to 0',area:[224,414],x:[0,8],y:[0,8],points:[[1,4],[2,6.5],[3,2],[4,5.5],[5,2.5],[6,6],[7,3.5]]},
 {t:'chart',kind:'scatter',title:'r close to -1',area:[424,614],x:[0,8],y:[0,8],points:[[1,6.8],[2,6.1],[3,4.9],[4,4.2],[5,2.8],[6,2.1],[7,1.1]]}];
/* The three Try-it questions in pool form; the generator skips them. */
const TRY=['What is the median of 9, 4, 7, 12, 3, 10?',
 'In a fictional survey, 30 of 80 seventh graders and 52 of 80 eighth graders said yes. Of the eighth graders, what percent said yes?',
 'A fictional line of fit is ŷ = 1.5x + 12. What value does it predict when x = 10?'];
const tryIt=s=>`Try it: ${s[0].toLowerCase()+s.slice(1)}`;
export default {
id:'math-h-math-1-descriptive-statistics',subject:'math',level:5,grade:9,standard:'CCSS S-ID.1, S-ID.2, S-ID.3, S-ID.5, S-ID.6, S-ID.7, S-ID.8, S-ID.9',
title:'Descriptive statistics',
goal:'Read dot plots, histograms and box plots, find and compare center and spread, describe shape and spot outliers, use two-way tables, and fit and interpret lines and correlation on scatter plots.',
points:20,
skills:{plots:'Data displays',center:'Center',spread:'Spread',shape:'Shape and outliers',twoway:'Two-way tables',scatter:'Scatter plots and correlation'},
outline:[['S-ID.1','Show data with dot plots, histograms and box plots',['plots']],['S-ID.2','Compare center and spread',['center','spread']],['S-ID.3','Interpret shape and the effect of outliers',['shape']],
 ['S-ID.5','Summarize categorical data in two-way tables',['twoway']],['S-ID.6 to S-ID.9','Fit lines to scatter plots, read slope, intercept and correlation, and tell correlation from causation',['scatter']]],
steps:[
 {skill:'plots',say:'A dot plot puts one dot above a number line for each value, so clusters, gaps and shape show at a glance. These twelve fictional quiz scores pile up at 7 and 8, with a single low score of 3 sitting apart from the rest.',
  pic:{t:'dots',values:[3,6,7,7,7,8,8,8,8,9,9,10],min:0,max:10,title:'Twelve fictional quiz scores'}},
 {skill:'plots',say:'A histogram groups values into equal intervals and draws a bar for how many values fall in each one, so it suits large data sets. In these fictional heights the intervals are 5 cm wide, and the tallest bar, 160 to 165 cm, holds 7 people.',
  pic:{t:'chart',kind:'hist',title:'Twenty fictional heights',bins:[[150,155,2],[155,160,5],[160,165,7],[165,170,4],[170,175,2]],xlabel:'height (cm)'}},
 {skill:'plots',say:'A box plot shows the five-number summary: the minimum, the first quartile Q1, the median, the third quartile Q3 and the maximum. The box holds the middle half of the data, and each whisker holds about a quarter. Here the middle half lies between 18 and 31.',
  pic:{t:'chart',kind:'box',title:'A fictional box plot',axis:[10,45],five:[12,18,25,31,40]}},
 {skill:'center',say:'The centre tells you a typical value. The mean is the sum divided by the count: for 3, 5, 6, 10 and 11 the sum is 35, so the mean is 35 ÷ 5 = 7. The mean is the balance point of the dot plot; the median, the middle value, is 6.',eq:'mean = sum ÷ count',
  pic:{t:'dots',values:[3,5,6,10,11],min:0,max:12,title:'3, 5, 6, 10, 11',mean:7,median:6,solve:true}},
 {skill:'center',say:'The median is the middle value once the data are in order. With an even count it is the mean of the two middle values: 13, 9, 16, 10, 21, 12 in order is 9, 10, 12, 13, 16, 21, so the median is (12 + 13) ÷ 2 = 12.5.',eq:'even count: median = mean of the middle two',
  pic:{t:'dots',values:[9,10,12,13,16,21],min:8,max:22,title:'9, 10, 12, 13, 16, 21',median:12.5,solve:true},
  check:{prompt:tryIt(TRY[0]),answer:8,options:[8,7,7.5],hint:'Put the six values in order and take the mean of the middle two.',pic:{t:'dots',values:[9,4,7,12,3,10],min:0,max:14,title:'9, 4, 7, 12, 3, 10'}}},
 {skill:'spread',say:'Spread tells how far apart the values are. The range is the maximum minus the minimum. Q1 is the median of the lower half and Q3 the median of the upper half: for 2, 5, 6, 9, 11, 14, 15, 18 they are 5.5 and 14.5, so the interquartile range is IQR = 14.5 - 5.5 = 9.',eq:'IQR = Q3 - Q1',
  pic:{t:'chart',kind:'box',title:'2, 5, 6, 9, 11, 14, 15, 18',axis:[0,20],five:[2,5.5,10,14.5,18],values:[2,5,6,9,11,14,15,18]}},
 {skill:'spread',say:'The mean absolute deviation (MAD) is the mean distance of the values from their mean. For 3, 5, 9 and 11 the mean is 7, the distances are 4, 2, 2 and 4, so the MAD is 12 ÷ 4 = 3. The standard deviation is a similar measure of spread about the mean.',eq:'MAD = mean distance from the mean',
  pic:{t:'dots',values:[3,5,9,11],min:0,max:14,title:'3, 5, 9, 11: distances 4, 2, 2, 4',mean:7,solve:true}},
 {skill:'shape',say:'Shape matters. A symmetric distribution looks about the same on both sides of its centre. One skewed right has a long tail toward large values, as incomes often do, and one skewed left has a long tail toward small values.',
  pic:[{t:'chart',kind:'hist',title:'Symmetric',area:[30,310],bins:[[0,2,1],[2,4,3],[4,6,6],[6,8,3],[8,10,1]]},{t:'chart',kind:'hist',title:'Skewed right',area:[330,610],bins:[[0,2,6],[2,4,5],[4,6,3],[6,8,1],[8,10,1]]}]},
 {skill:'shape',say:'An outlier pulls the mean toward it but barely moves the median, so with outliers or skew the median and IQR describe the data better. A common rule calls a value an outlier if it is more than 1.5 × IQR beyond a quartile: with Q1 = 22 and Q3 = 30, the fences are 10 and 42, so 49 is an outlier.',eq:'fences: Q1 - 1.5 × IQR and Q3 + 1.5 × IQR',
  pic:{t:'chart',kind:'box',title:'Q1 = 22, Q3 = 30, IQR = 8',axis:[0,55],five:[14,22,26,30,40],outliers:[49],fences:[10,42]}},
 {skill:'twoway',say:'A two-way table counts data in two categories at once. Divide by the grand total for a joint or marginal relative frequency, and by a row or column total for a conditional one. If 54 of 90 fictional ninth graders and 36 of 90 tenth graders like a sport, that is 60% against 40%, which suggests an association between grade and liking the sport.',eq:'conditional = cell ÷ its row (or column) total',
  pic:tab('A fictional survey',[['grade 9','54','36','90'],['grade 10','36','54','90'],['total','90','90','180']],['yes','no','total']),
  check:{prompt:tryIt(TRY[1]),answer:65,options:[65,52,37.5],hint:'Divide the eighth graders who said yes by all 80 eighth graders.',pic:tab('A fictional survey',[['seventh grade','30 of 80 yes'],['eighth grade','52 of 80 yes']],['Counts'])}},
 {skill:'scatter',say:'A scatter plot shows two numerical variables at once. A line of fit ŷ = mx + b sums up the trend: for these fictional students, ŷ = 4x + 52, where x is hours studied, predicts a score 4 points higher for each extra hour, and a score of 52 for no study at all.',eq:'ŷ = mx + b',
  pic:{t:'chart',kind:'scatter',title:'Fictional study hours and scores',x:[0,8],y:[50,90],points:SCORES,line:{m:4,b:52,label:'line of fit'},xlabel:'hours studied'},
  check:{prompt:tryIt(TRY[2]),answer:27,options:[27,25,22],hint:'Put 10 in for x: 1.5 × 10 + 12.',pic:{t:'plot',title:'A fictional line of fit',x:[0,12],y:[0,30],lines:[{m:1.5,b:12,label:'1.5x + 12'}]}}},
 {skill:'scatter',say:'A residual is the actual value minus the predicted value. The student who studied 3 hours scored 67, and the line predicts 4 × 3 + 52 = 64, so the residual is 67 - 64 = 3: the point sits 3 above the line. A good line leaves residuals with no pattern.',eq:'residual = actual - predicted',
  pic:{t:'chart',kind:'scatter',title:'One residual',x:[0,8],y:[50,90],points:SCORES,line:{m:4,b:52,label:'line of fit'},residuals:[[3,67]],xlabel:'hours studied'}},
 {skill:'scatter',say:'The correlation coefficient r runs from -1 to 1. Its sign gives the direction, and a value near 1 or -1 means the points lie close to a line, while a value near 0 means no linear association. Correlation alone never proves that one variable causes the other.',eq:'-1 ≤ r ≤ 1',
  pic:R3},
 {skill:'scatter',summary:true,say:'Putting Unit 7 together: choose a display that fits the data; find the center with the mean or median and the spread with the range, IQR, mean absolute deviation or standard deviation; describe shape, and prefer the median and IQR when outliers or skew are present; read two-way tables with the right total; and use a line of fit to predict, judging it with residuals and r. Traps: put data in order before finding a median, divide by the right total, and remember that correlation does not show causation.',pic:tab('Unit 7 at a glance',[['center','mean, median'],['spread','range, IQR, MAD, SD'],['outliers','1.5 × IQR rule'],['tables','joint, marginal, conditional'],['scatter','line of fit, residual, r']],['Key idea'])}],
progression:{requires:['math-m-mean-median-range','math-h-linear-functions'],operations:3,demand:'Order data and find medians and quartiles, add and divide for means and deviations, divide counts by the right total, and use a line to predict and to judge residuals.'},
items(add){
 const seen=new Set(TRY);
 const put=(skill,prompt,answer,pic,explanation,accept)=>{if(seen.has(prompt))return;seen.add(prompt);add(skill,prompt,answer,pic,explanation,accept);};
 const show=a=>a.map(num).join(', ');
 /* center: mean and median */
 for(const a of [[4,8,6,10,7],[12,15,11,18,14,20],[3,3,5,9,10],[21,25,19,30,25,24,24],[2.5,4,3.5,6,4],[100,85,90,95,80,90],[7,1,9,3,5,11,6,2],[40,42,38,45,60],[6,9,3,12,15,9],[1.5,2,3.5,5]]){const pic=tab('The data',[['values',show(a)]],['']);
  put('center',`What is the mean of ${show(a)}?`,Math.round(mean(a)*1e6)/1e6,pic,`Add them: ${num(sum(a))}. Divide by the count, ${a.length}: ${num(mean(a))}.`);
  put('center',`What is the median of ${show(a)}?`,median(a),pic,`In order: ${show(sorted(a))}. ${a.length%2?`The middle value is ${num(median(a))}.`:`The two middle values average to ${num(median(a))}.`}`);}
 /* spread: range, quartiles and IQR, mean absolute deviation, standard deviation */
 for(const a of [[1,3,4,6,8,9,11,12],[5,7,8,10,12,13,15],[2,4,6,8,10,12,14,16,18,20],[20,22,25,27,30,31,35,40,42]]){const [q1,q3]=quart(a),s=sorted(a),pic=tab('The data',[['values',show(a)]],['']);
  put('spread',`What is the range of ${show(a)}?`,s.at(-1)-s[0],pic,`Maximum - minimum = ${num(s.at(-1))} - ${num(s[0])} = ${num(s.at(-1)-s[0])}.`);
  put('spread',`Using the medians of the lower and upper halves (leaving out the median if the count is odd), what is the interquartile range of ${show(a)}?`,q3-q1,pic,`Q1 = ${num(q1)} and Q3 = ${num(q3)}, so IQR = ${num(q3)} - ${num(q1)} = ${num(q3-q1)}.`);
  put('spread',`Using the medians of the lower and upper halves (leaving out the median if the count is odd), what is the first quartile of ${show(a)}?`,q1,pic,`The lower half is ${show(s.slice(0,Math.floor(s.length/2)))}; its median is ${num(q1)}.`);}
 for(const a of [[2,4,6,8],[10,12,14,16,18],[5,5,9,13,13],[1,7,7,9]]){const m=mean(a),d=a.map(v=>Math.abs(v-m)),mad=mean(d);
  put('spread',`What is the mean absolute deviation of ${show(a)}?`,Math.round(mad*1e6)/1e6,tab('The data',[['values',show(a)],['mean',num(m)]]),`The mean is ${num(m)}. The distances from it are ${show(d)}, and their mean is ${num(mad)}.`);}
 for(const a of [[2,4,4,4,5,5,7,9],[0,0,6,6],[10,10,20,20]]){const m=mean(a),sd=Math.sqrt(mean(a.map(v=>(v-m)**2)));
  put('spread',`Dividing by the number of values, what is the standard deviation of ${show(a)}?`,Math.round(sd*1e6)/1e6,tab('The data',[['values',show(a)],['mean',num(m)]]),`The mean is ${num(m)}; the squared distances average ${num(sd*sd)}; the square root is ${num(sd)}.`);}
 [['Which measure of spread is barely affected by one extreme value?','the interquartile range',['the range','the standard deviation'],'The IQR = Q3 - Q1 uses only the middle half of the data, so one extreme value barely moves it. The range and standard deviation both use the extremes.'],
  ['Two fictional classes have the same mean score, but class A\'s standard deviation is much larger. What does that mean?','class A\'s scores are more spread out',['class A did better','class A has more students'],'Standard deviation measures how far scores typically sit from the mean. With the same mean, a larger SD means class A\'s scores are more spread out, not higher.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k);
  put('spread',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Spread',[['range','max - min'],['IQR','Q3 - Q1'],['SD','spread around the mean']],['Measure']),why||`The answer is ${right}.`,[right]);});
 /* shape: skew, the effect of outliers, and the 1.5 × IQR rule */
 [['Adding one very large value to a data set changes which more: the mean or the median?','the mean',['the median','neither'],'The mean uses every value, so one huge value pulls it far. For 1, 2, 3 then 1, 2, 3, 100, the median moves from 2 to 2.5 but the mean from 2 to 26.5.'],
  ['For data skewed to the right, how do the mean and median usually compare?','the mean is greater than the median',['the median is greater than the mean','they are always equal'],'In right-skewed data the few large values in the long tail pull the mean up, while the median stays near the middle. So the mean is usually greater.'],
  ['Which measure of center describes skewed data with outliers better?','the median',['the mean','the range'],'The median depends only on the middle value, so outliers and a long tail barely move it, while the mean is pulled toward them. The range measures spread.'],
  ['A histogram has a long tail toward the large values. What is its shape?','skewed right',['skewed left','symmetric'],'Skew is named after the tail: a long tail toward the large values, on the right, means the data are skewed right.'],
  ['A histogram has a long tail toward the small values. What is its shape?','skewed left',['skewed right','symmetric'],'Skew is named after the tail: a long tail toward the small values, on the left, means the data are skewed left.'],
  ['A histogram rises to one peak in the middle, and its two sides mirror each other. What is its shape?','symmetric',['skewed left','skewed right'],'When the two sides of the middle peak mirror each other, the shape is symmetric. A skewed shape has one long tail.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+1);
  put('shape',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Shape',[['skewed right','tail to the large values'],['skewed left','tail to the small values'],['symmetric','both sides alike']],['Looks like']),why||`The answer is ${right}.`,[right]);});
 for(const [q1,q3,v] of [[20,30,50],[12,18,2],[40,52,65],[5,9,15]]){const iqr=q3-q1,lo=q1-1.5*iqr,hi=q3+1.5*iqr,out=v<lo||v>hi;
  put('shape',`A fictional data set has Q1 = ${q1} and Q3 = ${q3}. What is the upper fence, Q3 + 1.5 × IQR?`,hi,tab('Quartiles',[['Q1',`${q1}`],['Q3',`${q3}`]]),`IQR = ${iqr}, so the upper fence is ${q3} + 1.5 × ${iqr} = ${num(hi)}.`);
  put('shape',`A fictional data set has Q1 = ${q1} and Q3 = ${q3}. By the 1.5 × IQR rule, is ${v} an outlier? Answer yes or no.`,out?'yes':'no',tab('Quartiles',[['Q1',`${q1}`],['Q3',`${q3}`],['value',`${v}`]]),`IQR = ${iqr}; the fences are ${num(lo)} and ${num(hi)}. ${v} is ${out?'outside':'inside'} them: ${out?'yes':'no'}.`,YN[out?'yes':'no']);}
 /* plots: box plots, histograms and dot plots */
 for(const [mn,q1,md,q3,mx] of [[12,18,25,31,40],[50,62,70,75,95],[3,4.5,6,8,11]]){const lead=`A fictional box plot shows a minimum of ${mn}, a first quartile of ${q1}, a median of ${md}, a third quartile of ${q3} and a maximum of ${mx}.`,pic=tab('Five-number summary',[['min',`${mn}`],['Q1',`${q1}`],['median',`${md}`],['Q3',`${q3}`],['max',`${mx}`]]);
  put('plots',`${lead} What is the interquartile range?`,q3-q1,pic,`IQR = Q3 - Q1 = ${q3} - ${q1} = ${num(q3-q1)}.`);
  put('plots',`${lead} What is the range?`,mx-mn,pic,`Range = max - min = ${mx} - ${mn} = ${num(mx-mn)}.`);
  put('plots',`${lead} About what percent of the data lies between ${q1} and ${q3}?`,50,pic,'The box runs from Q1 to Q3 and holds the middle half of the data: about 50%.');}
 put('plots','A fictional box plot has a median of 70 and a maximum of 95. About what percent of the data lies between 70 and 95?',50,tab('Box plot',[['median','70'],['max','95']]),'From the median to the maximum is the upper half: about 50%.');
 for(const [h,ask] of [[[3,7,6,4],'count'],[[5,9,4,2],'below'],[[2,8,8,2],'count'],[[6,4,7,3],'below']]){const total=sum(h),lead=`A fictional histogram has bars for 0-10, 10-20, 20-30 and 30-40 with heights ${h.join(', ')}.`;
  put('plots',ask==='count'?`${lead} How many values does it show?`:`${lead} What percent of the values are below 20?`,ask==='count'?total:Math.round((h[0]+h[1])/total*100*1e6)/1e6,tab('Histogram',[['0-10',`${h[0]}`],['10-20',`${h[1]}`],['20-30',`${h[2]}`],['30-40',`${h[3]}`]],['Count']),ask==='count'?`Add the bar heights: ${h.join(' + ')} = ${total}.`:`${h[0]} + ${h[1]} = ${h[0]+h[1]} of ${total} values: ${num((h[0]+h[1])/total*100)}%.`);}
 for(const [counts,ask] of [[[2,4,3,1],'mean'],[[2,4,3,1],'median'],[[1,3,5,1],'mean'],[[4,1,1,2],'median']]){const vals=counts.flatMap((c,i)=>Array(c).fill(i+1)),lead=`A fictional dot plot shows ${counts.map((c,i)=>`${c} dot${c>1?'s':''} at ${i+1}`).join(', ').replace(/, ([^,]*)$/,' and $1')}.`,v=ask==='mean'?mean(vals):median(vals);
  put('plots',`${lead} What is the ${ask}?`,Math.round(v*1e6)/1e6,tab('Dot plot',counts.map((c,i)=>[`${i+1}`,`${c} dots`]),['Count']),ask==='mean'?`The values add to ${sum(vals)} over ${vals.length} dots: ${num(v)}.`:`In order the ${vals.length} values are ${vals.join(', ')}; the median is ${num(v)}.`);}
 [['Which display shows the five-number summary?','a box plot',['a dot plot','a scatter plot'],'A box plot is drawn from the five-number summary: minimum, Q1, median, Q3 and maximum. A dot plot shows each value; a scatter plot shows pairs.'],
  ['Which display best shows how two numerical variables are related?','a scatter plot',['a histogram','a box plot'],'A scatter plot puts one numerical variable on each axis, so each point is a pair (x, y) and you can see how the two move together.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+2);
  put('plots',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Displays',[['dot plot','each value'],['histogram','counts in intervals'],['box plot','five-number summary'],['scatter plot','two variables']],['Shows']),why||`The answer is ${right}.`,[right]);});
 /* twoway: joint, marginal and conditional relative frequencies, and association */
 const T1='In a fictional survey of 200 students, 60 of the 100 ninth graders and 40 of the 100 tenth graders said they like soccer.';
 const T2='In a fictional survey of 80 adults, 18 of the 40 city dwellers and 30 of the 40 rural dwellers own a dog, and the rest own a cat.';
 for(const [lead,q,v,why] of [[T1,'What percent of all the students are ninth graders who like soccer?',30,'60 ÷ 200 = 30%'],[T1,'What percent of all the students like soccer?',50,'(60 + 40) ÷ 200 = 50%'],
  [T1,'Of the tenth graders, what percent like soccer?',40,'40 ÷ 100 = 40%'],[T1,'Of the students who like soccer, what percent are ninth graders?',60,'60 ÷ (60 + 40) = 60%'],[T1,'How many tenth graders do not like soccer?',60,'100 - 40 = 60'],[T1,'What percent of all the students are tenth graders who do not like soccer?',30,'60 ÷ 200 = 30%'],
  [T2,'What percent of all the adults are rural dwellers who own a dog?',37.5,'30 ÷ 80 = 37.5%'],[T2,'What percent of all the adults own a cat?',40,'(22 + 10) ÷ 80 = 40%'],
  [T2,'Of the rural dwellers, what percent own a dog?',75,'30 ÷ 40 = 75%'],[T2,'Of the cat owners, what percent live in the city?',68.75,'22 ÷ (22 + 10) = 68.75%'],[T2,'How many city dwellers own a cat?',22,'40 - 18 = 22'],[T2,'Of the dog owners, what percent live in rural areas?',62.5,'30 ÷ (18 + 30) = 62.5%']])
  put('twoway',`${lead} ${q}`,v,tab('Two-way table',lead===T1?[['grade 9','yes 60, no 40'],['grade 10','yes 40, no 60']]:[['city','dog 18, cat 22'],['rural','dog 30, cat 10']],['Counts']),`${why}.`);
 [[`${T1} Is there an association between grade and liking soccer?`,'yes, because 60% of ninth graders but only 40% of tenth graders like it',['no, because both grades had 100 students','no, because 200 students were asked'],'Compare conditional percents: 60 ÷ 100 = 60% of ninth graders but 40 ÷ 100 = 40% of tenth graders like soccer. The percents differ, so there is an association.'],
  [`${T2} Is there an association between where people live and owning a dog?`,'yes, because 75% of rural dwellers but 45% of city dwellers own a dog',['no, because both groups had 40 people','no, because more people own dogs'],'Compare conditional percents: 30 ÷ 40 = 75% of rural dwellers but 18 ÷ 40 = 45% of city dwellers own a dog. They differ, so there is an association.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k);
  put('twoway',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Association',[['compare','conditional percents']],['']),why||`The answer is ${right}: different conditional percents mean an association.`,[right]);});
 /* scatter: predictions, residuals, slope and intercept, correlation and causation */
 for(const [m,b,x] of [[2.5,10,8],[-1.2,50,15],[0.75,3,20],[4,-7,3.5]]){const v=m*x+b;
  put('scatter',`A fictional line of fit is ŷ = ${m}x ${b<0?'-':'+'} ${Math.abs(b)}. What value does it predict when x = ${x}?`,Math.round(v*1e6)/1e6,tab('The line',[['ŷ',`${m}x ${b<0?'-':'+'} ${Math.abs(b)}`],['x',`${x}`]]),`${m} × ${x} ${b<0?'-':'+'} ${Math.abs(b)} = ${num(v)}.`);}
 for(const [m,b,x,y] of [[2,5,10,28],[-3,60,8,30],[0.5,4,12,9.5]]){const p=m*x+b,r=y-p;
  put('scatter',`A fictional line of fit is ŷ = ${m}x ${b<0?'-':'+'} ${Math.abs(b)}. A data point is (${x}, ${y}). What is its residual?`,Math.round(r*1e6)/1e6,tab('The line and a point',[['ŷ',`${m}x ${b<0?'-':'+'} ${Math.abs(b)}`],['point',`(${x}, ${y})`]]),`Predicted: ${num(p)}. Residual = actual - predicted = ${y} - ${num(p)} = ${num(r)}.`);}
 [['A fictional line of fit is ŷ = 3.2x + 15, where x is hours studied and ŷ is the test score. What does 3.2 mean?','the predicted score rises 3.2 points for each extra hour',['the score for 0 hours','students study 3.2 hours'],'3.2 is the slope of ŷ = 3.2x + 15, so each extra hour of study raises the predicted score by 3.2 points.'],
  ['A fictional line of fit is ŷ = 3.2x + 15, where x is hours studied and ŷ is the test score. What does 15 mean?','the predicted score for 0 hours of study',['the score rises 15 points an hour','the highest score'],'At x = 0, ŷ = 3.2 × 0 + 15 = 15, so 15 is the y-intercept: the predicted score for 0 hours of study.'],
  ['What does a correlation coefficient of r = -0.92 describe?','a strong negative linear association',['a weak negative linear association','a strong positive linear association'],'The sign of r gives the direction, so -0.92 is negative. Its size, 0.92, is close to 1, so the linear association is strong.'],
  ['What does a correlation coefficient of r = 0.15 describe?','a weak positive linear association',['a strong positive linear association','a weak negative linear association'],'r = 0.15 is positive, so the direction is positive, but 0.15 is close to 0, so the linear association is weak.'],
  ['Which correlation coefficient shows the strongest linear association: -0.9, 0.6 or 0.1?','-0.9',['0.6','0.1'],'Strength depends on how close r is to 1 or -1, not on the sign. -0.9 is 0.9 away from 0, more than 0.6 or 0.1, so it is the strongest.'],
  ['Ice cream sales and drownings rise and fall together. Does eating ice cream cause drowning?','no: both rise in hot weather, and correlation does not show causation',['yes, because they are correlated','yes, because r is positive'],'Both go up in hot weather, a lurking variable. Correlation shows that two things move together, not that one causes the other.'],
  ['What does a residual of 0 mean for a data point?','the point lies exactly on the line of fit',['the line has slope 0','the point is an outlier'],'Residual = actual - predicted. A residual of 0 means the actual value equals the predicted one, so the point lies exactly on the line of fit.'],
  ['A residual plot shows points scattered randomly around 0. What does that suggest?','a linear model is appropriate',['the data have no pattern at all','the line should be steeper'],'If the residuals scatter randomly around 0 with no curve or pattern, the line has caught the trend, so a linear model is appropriate.']].forEach(([q,right,wrong,why],k)=>{const c=choose(right,wrong,k+1);
  put('scatter',`${q} ${c.text}. Answer A, B or C.`,c.letter,tab('Scatter plots',[['slope','change in ŷ per unit of x'],['intercept','ŷ when x = 0'],['r','direction and strength'],['residual','actual - predicted']],['Means']),why||`The answer is ${right}.`,[right]);});
}};
