// UNVERIFIED: 53 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: A city sits inside a country, which sits on a continent. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"geography-e-cities-and-countries",subject:"geography",level:3,grade:2,standard:"NCSS III",
 title:"Cities and countries",goal:"A city sits inside a country, which sits on a continent.",points:20,
 skills:{"city":"Cities","country":"Countries","inside":"What is inside what"},
 steps:[
 {skill:"city",say:"A city is a big place where lots of people live and work.  It often has tall buildings and busy streets.",pic:[{"t":"passages","title":"City","texts":["Lots of people live and work there.","Often tall buildings and busy streets."]}],eq:"City example: New York",
  check:{prompt:"Tokyo has tall buildings, busy streets, and millions of people who live and work there. What kind of place is Tokyo?",answer:"a city",options:["a city","a farm","a forest"],hint:"A big place where lots of people live and work, with tall buildings and busy streets, is a city."}},
 {skill:"country",say:"A country is an area of land with its own government and people.  It is usually much bigger than a city and can have many cities inside it.",pic:[{"t":"passages","title":"Country","texts":["An area of land with its own government and people.","Usually much bigger than a city; it can have many cities inside it."]}],eq:"Country example: United States"},
 {skill:"inside",say:"A city is inside a country.  For example, New York is inside the United States.",pic:[{"t":"passages","title":"City and country","texts":["New York is a city.","The United States is a country."]}],eq:"New York is inside the United States",
  check:{"prompt":"Is New York inside the United States?","answer":"yes","options":["yes","no"],"hint":"Remember, a city is inside a country"}},
 {skill:"city",say:"Another city is London.  It is also inside a country.",pic:[{"t":"passages","title":"Another city","texts":["London is a city."]}],eq:"London is inside the United Kingdom"},
 {skill:"country",say:"The United Kingdom is a country.  It has many cities inside it, like London.",pic:[{"t":"passages","title":"The United Kingdom","texts":["The United Kingdom has many cities.","London is one of them."]}],eq:"United Kingdom example",
  check:{"prompt":"What is the United Kingdom?","answer":"A country with many cities inside it","options":["A country with many cities inside it","A city","A continent"],"hint":"Think of a big area with its own government"}},
 {skill:"inside",say:"So, a city is inside a country.  London is inside the United Kingdom.",pic:[{"t":"passages","title":"A city is inside a country","texts":["London is inside the United Kingdom.","New York is inside the United States."]}],eq:"London is inside the United Kingdom"}],
 items(add){
  const _SKIP=new Set(["What is a city?","Is New York inside the United States?","What is the United Kingdom?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["city","country"];let _q=0;/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);if(/^[0-9]+ /.test(r))v.add(r.split(' ')[0]);if(/^(a|an|the) /i.test(r))v.add(r.replace(/^(a|an|the) /i,''));v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["New York","a city"],["United States","a country"],["London","a city"],["United Kingdom","a country"],["Tokyo","a city"],["Japan","a country"],["Paris","a city"],["France","a country"],["Sydney","a city"],["Australia","a country"],["Berlin","a city"],["Germany","a country"],["Rome","a city"],["Italy","a country"],["Madrid","a city"],["Spain","a country"],["Toronto","a city"],["Beijing","a city"],["Cairo","a city"],["Mexico City","a city"],["Canada","a country"],["China","a country"],["Egypt","a country"],["Mexico","a country"]],_A=[(x,r,labels)=>"Is "+(x)+" a city or a country?",(x,r,labels)=>"City or country: "+(x)+"?"],_W=[(x,r,labels)=>""+(/^United /.test(x)?"The ":"")+(x)+" is "+(r)+"."],labels="a city or a country";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add(_SK[_q++%_SK.length],_A[_j](x,r,labels),r,{"t":"word","base":x},_W[_j%_W.length](x,r,labels),_V(r));}
{const _T=[["New York","United States"],["London","United Kingdom"],["Tokyo","Japan"],["Paris","France"],["Sydney","Australia"],["Berlin","Germany"],["Rome","Italy"],["Madrid","Spain"],["Vienna","Austria"],["Oslo","Norway"],["Cairo","Egypt"],["Lisbon","Portugal"],["Barcelona","Spain"],["Amsterdam","Netherlands"],["Dublin","Ireland"],["Zurich","Switzerland"],["Hamburg","Germany"],["Stockholm","Sweden"],["Milan","Italy"],["Geneva","Switzerland"],["Melbourne","Australia"],["Toronto","Canada"],["Beijing","China"],["Mexico City","Mexico"],["Mumbai","India"],["Rio de Janeiro","Brazil"],["Nairobi","Kenya"],["Moscow","Russia"],["Seoul","South Korea"]],_X={"New York":["USA","US","the United States","United States of America","America"],"London":["UK","the United Kingdom","England","Britain","Great Britain"]},_A=[(k,r)=>"What country is "+(k)+" in?",(k,r)=>"Which country is the city of "+(k)+" in?"],_W=[(k,r)=>""+(k)+" is inside "+(/^United |^Netherlands$/.test(r)?"the ":"")+(r)+"."];
for(let _j=0;_j<_A.length;_j++)for(const [k,r] of _T)
add("inside",_A[_j](k,r),r,{"t":"word","base":k},_W[_j%_W.length](k,r),_X[k]);}
 }};
