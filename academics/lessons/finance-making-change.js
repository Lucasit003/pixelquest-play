// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Change is what is left after you pay. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"finance-e-making-change",subject:"finance",level:3,grade:2,standard:"CCSS 2.MD.C.8",
 title:"Making change",goal:"Change is what is left after you pay.",points:20,
 skills:{"pay":"Paying","left":"What is left","count":"Counting the change"},
 steps:[
 {skill:"pay",say:"When you buy something, you pay with money.",pic:[{"t":"coins","coins":["q","n"]}],eq:"Example: Paying 30 cents for a toy."},
 {skill:"left",say:"After you pay, the store gives you change.  Change is what is left after you pay.",pic:[{"t":"coins","coins":["q","n"]}],eq:"Example: If you pay 30 cents and the toy costs 25 cents, the change is 5 cents.",
  check:{prompt:"If you pay 40 cents for a toy that costs 27 cents, how much change do you get?",answer:13,options:[13,12,14,15],hint:"Subtract the cost from the amount paid: 40 cents - 27 cents = 13 cents.",pic:{"t":"coins","coins":["q","d","n"]}}},
 {skill:"count",say:"To count the change, you add up all the coins.",pic:[{"t":"coins","coins":["q","q","d","n","n","n","p","p","p","p","p"]}],eq:"Example: 2 quarters, 1 dime, 3 nickels, and 5 pennies make 80 cents."},
 {skill:"pay",say:"Always pay with enough money to cover the cost of the item.",pic:[{"t":"coins","coins":["q"]}],eq:"Example: If a toy costs 25 cents, you need at least 25 cents in coins.",
  check:{prompt:"If you pay with 50 cents and the toy costs 35 cents, how much change do you get?",answer:15,options:[15,14,16,17],hint:"Subtract the cost from the amount paid: 50 cents - 35 cents = 15 cents.",pic:{"t":"coins","coins":["q","q"]}}},
 {skill:"left",say:"If you pay more than the cost, the store gives you change back.",pic:[{"t":"coins","coins":["q","n"]}],eq:"Example: If you pay 30 cents for a 25-cent toy, you get 5 cents back as change."},
 {skill:"count",say:"Count the change carefully to make sure you get the right amount back.",pic:[{"t":"coins","coins":["q","q","d","n","n","n","p","p","p","p","p"]}],eq:"Example: Count 2 quarters, 1 dime, 3 nickels, and 5 pennies to make sure it adds up to 80 cents.",
  check:{prompt:"If you pay 60 cents for a toy that costs 48 cents, how much change do you get?",answer:12,options:[12,11,13,14],hint:"Subtract the cost from the amount paid: 60 cents - 48 cents = 12 cents.",pic:{"t":"coins","coins":["q","q","d"]}}}],
 items(add){
  const _SKIP=new Set(["If you pay 40 cents for a toy that costs 27 cents, how much change do you get?","If you pay with 50 cents and the toy costs 35 cents, how much change do you get?","If you pay 60 cents for a toy that costs 48 cents, how much change do you get?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["pay","left","count"];let _q=0;const _P=[];/* the coins pictured are the amount paid, fewest coins first */const _cn=v=>{const o=[];for(const [k,c] of [["q",25],["d",10],["n",5],["p",1]])while(v>=c){o.push(k);v-=c;}return o;};
for(let a=25;a<=100;a++)for(let b=5;b<=95;b++)if(a-b>0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a-b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add(_SK[_q++%_SK.length],"If you pay "+(a)+" cents for something that costs "+(b)+" cents, how much change do you get?",r,{"t":"coins","coins":_cn(a)},"Change is what you paid take away the cost: "+(a)+" - "+(b)+" = "+(r)+" cents.");}}
 }};
