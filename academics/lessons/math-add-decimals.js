// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Line up the decimal points, then add or take away as usual. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-add-decimals",subject:"math",level:3,grade:5,standard:"CCSS 5.NBT.B.7",
 title:"Adding and subtracting decimals",goal:"Line up the decimal points, then add or take away as usual.",points:20,
 skills:{"add":"Adding decimals","take":"Taking decimals away","line":"Lining up the point"},
 steps:[
 {skill:"line",say:"Write one decimal above the other with the points lined up, so tenths sit under tenths.",pic:[{"t":"word","base":"0.4 + 0.3"}],eq:"0.4 + 0.3"},
 {skill:"add",say:"Then add as usual.  4 tenths and 3 tenths make 7 tenths, which is 0. 7.",pic:[{"t":"bars","rows":[{"parts":10,"shade":4},{"parts":10,"shade":3}]}],eq:"0.4 + 0.3 = 0.7",
  check:{prompt:"What is 0.4 + 0.3?",answer:"0.7",options:["0.7","0.07","7","0.1"],hint:"Four tenths and three tenths.",pic:{"t":"bars","rows":[{"parts":10,"shade":4},{"parts":10,"shade":3}]}}},
 {skill:"add",say:"Ten tenths make one whole, so 0. 6 and 0. 5 make 1. 1, not 0. 11.",pic:[{"t":"bar","parts":10,"shade":10}],eq:"0.6 + 0.5 = 1.1",
  check:{prompt:"What is 0.6 + 0.5?",answer:"1.1",options:["1.1","0.11","1.0","11"],hint:"Ten tenths make a whole one.",pic:{"t":"bar","parts":10,"shade":10}}},
 {skill:"take",say:"Taking away works the same way: 0. 9 take away 0. 4 leaves 0. 5.",pic:[{"t":"bar","parts":10,"shade":5}],eq:"0.9 - 0.4 = 0.5",
  check:{prompt:"What is 0.9 - 0.4?",answer:"0.5",options:["0.5","0.13","5","1.3"],hint:"Nine tenths take away four tenths.",pic:{"t":"bar","parts":10,"shade":5}}},
 {skill:"line",say:"With hundredths, keep the columns straight: 1. 25 and 0. 30 have the point in the same place.",pic:[{"t":"word","base":"1.25 + 0.30"}],eq:"1.25 + 0.30 = 1.55"},
 {skill:"add",say:"Line up the points, add or take away, and put the point straight down into the answer.",pic:[{"t":"word","base":"1.55"}]}],
 items(add){
  const _SKIP=new Set(["What is 0.4 + 0.3?","What is 0.6 + 0.5?","What is 0.9 - 0.4?","What is 1.6 - 0.7?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _F=(n=>(n/10).toFixed(1)),_T=v=>String(v).includes('.')?String(v).replace(/0+$/,'').replace(/\.$/,''):String(v);const _P=[];for(let x=1;x<=20;x++)for(let y=1;y<=20;y++)if(x+y<=20)_P.push([x,y]);
const _n=Math.min(_P.length,160),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const _x=_P[_i][0],_y=_P[_i][1],a=_F(_x),b=_F(_y),r=_F(_x+_y),_acc=_T(r)===r?[]:[_T(r)];
add("add","What is "+(a)+" + "+(b)+"?",r,{"t":"word","base":""+(a)+" + "+(b)+""},"Line up the points and add: "+(a)+" + "+(b)+" = "+(r)+".",_acc);}}
{const _F=(n=>(n/10).toFixed(1)),_T=v=>String(v).includes('.')?String(v).replace(/0+$/,'').replace(/\.$/,''):String(v);const _P=[];for(let x=1;x<=20;x++)for(let y=1;y<=20;y++)if(x>y)_P.push([x,y]);
const _n=Math.min(_P.length,160),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const _x=_P[_i][0],_y=_P[_i][1],a=_F(_x),b=_F(_y),r=_F(_x-_y),_acc=_T(r)===r?[]:[_T(r)];
add("take","What is "+(a)+" - "+(b)+"?",r,{"t":"word","base":""+(a)+" - "+(b)+""},"Line up the points and take away: "+(a)+" - "+(b)+" = "+(r)+".",_acc);}}
{const _F=(n=>(n/100).toFixed(2)),_T=v=>String(v).includes('.')?String(v).replace(/0+$/,'').replace(/\.$/,''):String(v);const _P=[];for(let x=1;x<=200;x++)for(let y=1;y<=200;y++)if(x+y<=200)_P.push([x,y]);
const _n=Math.min(_P.length,160),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const _x=_P[_i][0],_y=_P[_i][1],a=_F(_x),b=_F(_y),r=_F(_x+_y),_acc=_T(r)===r?[]:[_T(r)];
add("line","What is "+(a)+" + "+(b)+"?",r,{"t":"word","base":""+(a)+" + "+(b)+""},"Hundredths under hundredths, tenths under tenths: "+(a)+" + "+(b)+" = "+(r)+".",_acc);}}
 }};
