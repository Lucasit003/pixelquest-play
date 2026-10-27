// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Count how many times a line runs when one loop sits inside another. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"cs-e-loops-in-loops",subject:"cs",level:3,grade:4,standard:"CSTA 1B-AP-10",
 title:"Loops inside loops",goal:"Count how many times a line runs when one loop sits inside another.",points:20,
 skills:{"inner":"The inside loop","total":"How many times in all","rows":"Rows and columns"},
 steps:[
 {skill:"inner",say:"A loop repeats what is inside it.  Put a loop inside a loop and the inside one runs again every time.",pic:[{"t":"array","r":3,"c":4}],eq:"outer 3, inner 4"},
 {skill:"total",say:"Repeat 3 times: inside, repeat 4 times: draw a dot.  The dot line runs 12 times.",pic:[{"t":"array","r":3,"c":4}],eq:"3 x 4 = 12",
  check:{"prompt":"A loop repeats 2 times. Inside it, another repeats 5 times. How many times does the inside line run?","answer":10,"options":[10,7,2,5],"hint":"Each of the 2 turns runs the inner loop 5 times.","pic":{"t":"array","r":2,"c":5}}},
 {skill:"rows",say:"It is a grid.  The outer loop counts the rows, the inner loop counts the dots in a row.",pic:[{"t":"array","r":4,"c":5}],eq:"4 rows of 5"},
 {skill:"total",say:"So the total is the two counts multiplied, not added.",pic:[{"t":"array","r":2,"c":6}],eq:"2 x 6 = 12, not 8",
  check:{prompt:"Outer loop 2, inner loop 6. How many times in all?",answer:12,options:[12,8,6,2],hint:"Multiply, do not add.",pic:{"t":"array","r":2,"c":6}}},
 {skill:"inner",say:"Change only the inner loop and each row gets longer: 3 rows of 7 is 21.",pic:[{"t":"array","r":3,"c":7}],eq:"3 x 7 = 21",
  check:{"prompt":"Outer loop 4, inner loop 6. How many times in all?","answer":24,"options":[24,10,4,6],"hint":"4 rows of 6.","pic":{"t":"array","r":4,"c":6}}},
 {skill:"rows",say:"Outer times inner.  That is how many times the inside line runs.",pic:[{"t":"array","r":5,"c":5}],eq:"5 x 5 = 25"}],
 items(add){
  const _SKIP=new Set(["A loop repeats 3 times. Inside it, another repeats 4 times. How many times does the inside line run?","Outer loop 2, inner loop 6. How many times in all?","Outer loop 3, inner loop 7. How many times in all?","A grid is drawn by a loop of 9 rows with a loop of 3 dots inside. How many dots are drawn?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _P=[];
for(let a=2;a<=12;a++)for(let b=2;b<=12;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("total","An outer loop repeats "+(a)+" times. Inside it, a loop repeats "+(b)+" times. How many times does the inside line run?",r,{"t":"array","r":a,"c":b},""+(a)+" turns, each running the inner loop "+(b)+" times: "+(a)+" x "+(b)+" = "+(r)+".");}}
{const _P=[];
for(let a=2;a<=12;a++)for(let b=2;b<=12;b++)if(true)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a*b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("rows","A grid is drawn by a loop of "+(a)+" rows with a loop of "+(b)+" dots inside. How many dots are drawn?",r,{"t":"array","r":a,"c":b},""+(a)+" rows of "+(b)+" dots is "+(r)+" dots.");}}
{const _P=[];
for(let a=12;a<=144;a++)for(let b=2;b<=12;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add("inner","The inside line ran "+(a)+" times and the outer loop repeated "+(b)+" times. How many times did the inner loop repeat?",r,{"t":"word","base":""+(a)+" / "+(b)+""},""+(a)+" divided by "+(b)+" is "+(r)+".");}}
 }};
