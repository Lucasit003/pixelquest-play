// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Read the digits after a decimal point, and say which of two decimals is bigger. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-decimals",subject:"math",level:3,grade:5,standard:"CCSS 5.NBT.A.3",
 title:"Reading and comparing decimals",goal:"Read the digits after a decimal point, and say which of two decimals is bigger.",points:20,
 skills:{"read":"Reading a decimal","compare":"Which is bigger","order":"Tenths and hundredths"},
 steps:[
 {skill:"read",say:"A decimal point separates whole ones from parts of one.  0. 4 is four tenths of a whole.",pic:[{"t":"bar","parts":10,"shade":4}],eq:"0.4 = 4 tenths"},
 {skill:"order",say:"The first digit after the point counts tenths, and the next one counts hundredths.",pic:[{"t":"bar","parts":100,"shade":45}],eq:"0.45 = 4 tenths and 5 hundredths",
  check:{prompt:"In 0.45, which digit is in the tenths place?",answer:4,options:[4,5,0,45],hint:"Tenths come straight after the point.",pic:{"t":"bar","parts":100,"shade":45}}},
 {skill:"compare",say:"Compare the whole-number parts first. If they are equal, compare tenths, then hundredths.",pic:[{"t":"bars","rows":[{"parts":10,"shade":7},{"parts":10,"shade":4}]}],eq:"0.7 > 0.4",
  check:{prompt:"Which is bigger: 0.7 or 0.4?",answer:"0.7",options:["0.7","0.4"],hint:"Compare the tenths.",pic:{"t":"bars","rows":[{"parts":10,"shade":7},{"parts":10,"shade":4}]}}},
 {skill:"compare",say:"If the whole-number parts and tenths are the same, look at the hundredths: 0. 45 is bigger than 0. 42.",pic:[{"t":"bars","rows":[{"parts":100,"shade":45},{"parts":100,"shade":42}]}],eq:"0.45 > 0.42"},
 {skill:"order",say:"0. 5 and 0. 50 are the same amount.  A nought on the end adds nothing.",pic:[{"t":"bars","rows":[{"parts":10,"shade":5},{"parts":100,"shade":50}]}],eq:"0.5 = 0.50",
  check:{"prompt":"Is 0.8 bigger than 0.80, smaller, or the same?","answer":"the same","options":["the same","bigger","smaller"],"hint":"A nought on the end adds nothing.","pic":{"t":"bars","rows":[{"parts":10,"shade":8},{"parts":100,"shade":80}]}}},
 {skill:"read",say:"Whole ones on the left, parts on the right.  1. 25 is one whole and twenty-five hundredths.",pic:[{"t":"bar","parts":100,"shade":25}],eq:"1.25"}],
 items(add){
  const _SKIP=new Set(["In 0.45, which digit is in the tenths place?","Which is bigger: 0.7 or 0.4?","Is 0.5 bigger than 0.50, smaller, or the same?","Which is bigger: 1.9 or 2.0?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _F=(n=>(n/10).toFixed(1)),_T=v=>String(v).includes('.')?String(v).replace(/0+$/,'').replace(/\.$/,''):String(v);const _P=[];for(let x=1;x<=20;x++)for(let y=1;y<=20;y++)if(x!==y)_P.push([x,y]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const _x=_P[_i][0],_y=_P[_i][1],a=_F(_x),b=_F(_y),r=(_x>_y?a:b),_acc=_T(r)===r?[]:[_T(r)];
add("compare","Which is bigger: "+(a)+" or "+(b)+"?",r,{"t":"word","base":""+(a)+" or "+(b)+""},""+(r)+" is the bigger of the two.",_acc);}}
{const _F=(n=>(n/100).toFixed(2)),_T=v=>String(v).includes('.')?String(v).replace(/0+$/,'').replace(/\.$/,''):String(v);const _P=[];for(let x=1;x<=200;x++)for(let y=1;y<=200;y++)if(x!==y)_P.push([x,y]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const _x=_P[_i][0],_y=_P[_i][1],a=_F(_x),b=_F(_y),r=(_x>_y?a:b),_acc=_T(r)===r?[]:[_T(r)];
add("order","Which is bigger: "+(a)+" or "+(b)+"?",r,{"t":"word","base":""+(a)+" or "+(b)+""},"Compare the whole-number parts first, then tenths and hundredths if needed: "+(r)+" is bigger.",_acc);}}
{const _P=[];for(let n=10;n<=99;n++)_P.push(n);
const _n=Math.min(_P.length,80),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const n=_P[_i],h=Math.floor(n/100)%10,t=Math.floor(n/10)%10,o=n%10,ten=t,one=o,hundred=h,r=n%10;
add("read","In the decimal 0."+(n)+", which digit is in the hundredths place?",r,{"t":"word","base":"0."+(n)+""},"0."+(n)+" is "+(t)+" tenths and "+(o)+" hundredths, so the hundredths digit is "+(r)+".");}}
{const _P=[];for(let n=10;n<=99;n++)_P.push(n);
const _n=Math.min(_P.length,80),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const n=_P[_i],h=Math.floor(n/100)%10,t=Math.floor(n/10)%10,o=n%10,ten=t,one=o,hundred=h,r=Math.floor(n/10)%10;
add("read","In the decimal 0."+(n)+", which digit is in the tenths place?",r,{"t":"word","base":"0."+(n)+""},"0."+(n)+" is "+(t)+" tenths and "+(o)+" hundredths, so the tenths digit is "+(r)+".");}}
 }};
