// Every question here is computed by a generator, answers included; nothing was asserted
// by the model. Only the three Try-it answers and the wording need an eye.
// Elementary topic: Split a total into equal groups and see how many are in each. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"math-e-sharing-equally",subject:"math",level:3,grade:3,standard:"CCSS 3.OA.A.2",
 title:"Sharing equally",goal:"Split a total into equal groups and see how many are in each.",points:20,
 skills:{"share":"Sharing out","groups":"How many groups","each":"How many in each"},
 steps:[
 {skill:"share",say:"Imagine you have 12 candies and you want to share them equally among 3 friends.",pic:[{"t":"groups","n":3,"k":4}],eq:"12 ÷ 3 = 4",
  check:{prompt:"If you have 12 candies and share them equally among 3 friends, how many candies does each friend get?",answer:4,options:[4,3,5],hint:"Divide 12 by 3.",pic:{"t":"groups","n":3,"k":4}}},
 {skill:"share",say:"First, we put one candy in each friend's hand.  We do this 3 times, so each friend gets 3 candies.",pic:[{"t":"groups","n":3,"k":3}],eq:"12 ÷ 3 = 4"},
 {skill:"share",say:"Then, we give one more candy to each friend.  Now each friend has 4 candies.",pic:[{"t":"groups","n":3,"k":4}],eq:"12 ÷ 3 = 4",
  check:{prompt:"If you have 18 candies and share them equally among 3 friends, how many candies does each friend get?",answer:6,options:[6,5,7],hint:"Divide 18 by 3.",pic:{"t":"groups","n":3,"k":6}}},
 {skill:"groups",say:"If you have 12 candies and you want to share them equally, you can make 3 groups of 4 candies each.",pic:[{"t":"groups","n":3,"k":4}],eq:"12 ÷ 3 = 4"},
 {skill:"each",say:"In each group, there are 4 candies.  So, each friend gets 4 candies.",pic:[{"t":"groups","n":3,"k":4}],eq:"12 ÷ 3 = 4",
  check:{prompt:"If you have 20 candies and share them equally among 4 friends, how many candies does each friend get?",answer:5,options:[5,4,6],hint:"Divide 20 by 4.",pic:{"t":"groups","n":4,"k":5}}},
 {skill:"share",say:"Sharing equally means giving the same number of candies to each friend.  In this case, each friend gets 4 candies.",pic:[{"t":"groups","n":3,"k":4}],eq:"12 ÷ 3 = 4"}],
 items(add){
  const _SKIP=new Set(["If you have 12 candies and share them equally among 3 friends, how many candies does each friend get?","If you have 18 candies and share them equally among 3 friends, how many candies does each friend get?","If you have 20 candies and share them equally among 4 friends, how many candies does each friend get?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["share","groups","each"];let _q=0;const _P=[];
for(let a=4;a<=81;a++)for(let b=2;b<=9;b++)if(b!==0&&a%b===0)_P.push([a,b]);
const _n=Math.min(_P.length,150),_st=_n?Math.max(1,Math.floor(_P.length/_n)):1;for(let _i=0;_i<_P.length;_i+=_st){const [a,b]=_P[_i],_r=a/b,ta=Math.floor(a/10),tb=Math.floor(b/10),oa=a%10,ob=b%10,total=_r,r=_r;
add(_SK[_q++%_SK.length],"If you have "+(a)+" candies and share them equally among "+(b)+" friends, how many candies does each friend get?",r,{"t":"groups","n":b,"k":r},"Share "+(a)+" into "+(b)+" equal groups: "+(a)+" ÷ "+(b)+" = "+(r)+". Each friend gets "+(r)+".");}}
 }};
