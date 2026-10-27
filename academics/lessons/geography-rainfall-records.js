// Original geography lesson. Fictional maps; answers are calculated from their givens.
export default {
id:"geography-e-rainfall-records",
subject:"geography",
level:3,
grade:4,
title:"Reading rainfall records",
goal:"Read a chart, compare differences, and combine months without confusing a short record with climate.",
standard:"Geographic inquiry and map reasoning",
points:20,
skills:{"read":"Read a monthly value","compare":"Compare rainfall","total":"Combine three months"},
steps:[{"skill":"read","say":"This chart is a fictional rainfall record. The bars show millimeters of rain in April, May, and June. Read the month label and the numbered height together.","pic":{"t":"rainfall","values":[20,60,40]}},{"skill":"read","say":"April has 20 mm and May has 60 mm. Millimeters measure a depth of rainfall, not the number of rainy days.","pic":{"t":"rainfall","values":[20,60,40]},"check":{"prompt":"A rainfall chart gives April 20 mm, May 60 mm, June 40 mm. How many millimeters fell in June?","answer":40,"options":[40,20,60],"hint":"Read the June value, including its unit.","pic":{"t":"rainfall","values":[20,60,40]}}},{"skill":"compare","say":"The tallest bar is the wettest month in this record. To find how much wetter May was than April, subtract 20 from 60: 40 mm.","pic":{"t":"rainfall","values":[20,60,40]}},{"skill":"compare","say":"A difference is not a total. May minus April measures the gap, while adding their amounts gives their combined rainfall.","pic":{"t":"rainfall","values":[20,60,40]},"check":{"prompt":"April had 30 mm of rain and May had 80 mm. How many more millimeters fell in May?","answer":50,"options":[50,110,30],"hint":"Subtract the smaller amount from the larger.","pic":{"t":"rainfall","values":[30,80],"labels":["Apr","May"]}}},{"skill":"total","say":"To find all the rainfall for these three months, add every bar: 20 + 60 + 40 = 120 mm.","pic":{"t":"rainfall","values":[20,60,40]}},{"skill":"total","say":"One three-month record does not establish a place’s climate. Climate describes patterns across many years; a single wet month does not predict the next month.","pic":{"t":"rainfall","values":[20,60,40]},"check":{"prompt":"Three monthly rainfall totals are 10 mm, 30 mm, and 20 mm. What is their combined rainfall in millimeters?","answer":60,"options":[60,40,30],"hint":"Add all three monthly totals.","pic":{"t":"rainfall","values":[10,30,20]}}}],
progression:{"requires":[],"operations":2,"demand":"Read a chart, compare differences, and combine months without confusing a short record with climate."},
items(add){

for(let a=10;a<=80;a+=10)for(let b=10;b<=80;b+=10){const c=((a/10+2*b/10)%8+1)*10,values=[a,b,c],pic={t:'rainfall',values},record='Fictional record: April '+a+' mm, May '+b+' mm, June '+c+' mm. ';
 add('read',record+'What is the June rainfall in millimeters?',c,pic,'Match June to its bar and value.');
 add('compare',record+'What is the difference between the largest and smallest monthly rainfall, in millimeters?',Math.max(...values)-Math.min(...values),pic,'Choose the largest and smallest amounts, then subtract.');
 add('total',record+'How many millimeters fell across all three months?',a+b+c,pic,'Add the three monthly amounts, not just the tallest bar.');
}
}
};
