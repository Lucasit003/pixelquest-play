// UNVERIFIED: 42 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: Classrooms long ago (about a hundred years ago or earlier) had things we rarely see today, and newer things do many of those jobs now. Real schools vary. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"history-e-school-then-and-now",subject:"history",level:3,grade:2,standard:"NCSS Theme 2",
 title:"School then and now",goal:"Classrooms long ago (about a hundred years ago or earlier) had things we rarely see today, and newer things do many of those jobs now. Real schools vary.",points:20,
 skills:{"then":"School long ago","now":"School today","swap":"What replaced what"},
 steps:[
 {skill:"then",say:"Long ago, many children wrote on a slate with a piece of chalk, and wiped it clean to start again.",pic:[{"t":"pair","a":"a slate","b":"chalk"}]},
 {skill:"then",say:"Ink came in a pot on the desk, and the pen was dipped into it.",pic:[{"t":"pair","a":"an inkwell","b":"a dipping pen"}],
  check:{prompt:"What did children dip their pens into long ago?",answer:"an inkwell",options:["an inkwell","a tablet","a water bottle"],hint:"It was a little pot of ink on the desk.",pic:{"t":"pair","a":"a pen","b":null}}},
 {skill:"now",say:"Today a child writes with a ballpoint pen, and types on a tablet or a computer.",pic:[{"t":"pair","a":"a ballpoint pen","b":"a tablet"}]},
 {skill:"now",say:"The classroom is warmed by heating, not by a coal stove in the corner.",pic:[{"t":"pair","a":"a coal stove","b":"heating"}],
  check:{prompt:"Is a coal stove in the classroom something from long ago or today?",answer:"long ago",options:["long ago","today"],hint:"Classrooms have heating now.",pic:{"t":"pair","a":"a coal stove","b":null}}},
 {skill:"swap",say:"Many old things have something newer that does their job.  A tablet does some of a slate's job, and a ballpoint pen does the job of an inkwell and dipping pen.",pic:[{"t":"pair","a":"a slate","b":"a tablet"}],eq:"slate became tablet"},
 {skill:"swap",say:"Ask what a thing was for, and you can find what replaced it.",pic:[{"t":"timeline","events":["long ago","today"]}],
  check:{prompt:"A slate was the thing children wrote on. What does that job today?",answer:"a tablet",options:["a tablet","an inkwell","a coal stove"],hint:"You write on it and wipe it clean again.",pic:{"t":"pair","a":"a slate","b":null}}}],
 items(add){
  const _SKIP=new Set(["What did children dip their pens into long ago?","Is a coal stove in the classroom something from long ago or today?","A slate was the thing children wrote on. What does that job today?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _SK=["then","now"];let _q=0;/* A typed label: "mammal" for "mammals", "nonliving" for "non-living". */
const _V=r=>{const v=new Set([r.replace(/-/g,' '),r.replace(/-/g,''),(/^[aeiou]/i.test(r)?'an ':'a ')+r]);if(/^[0-9]+ /.test(r))v.add(r.split(' ')[0]);if(/^(a|an|the) /i.test(r))v.add(r.replace(/^(a|an|the) /i,''));v.add(/s$/.test(r)?r.slice(0,-1):r+'s');v.delete(r);return [...v];};
const _T=[["a slate to write on","long ago"],["an inkwell on the desk","long ago"],["a dipping pen","long ago"],["a coal stove in the corner","long ago"],["a one-room schoolhouse","long ago"],["a hand bell rung by the teacher","long ago"],["a water bucket with one shared cup","long ago"],["a wood box for the stove","long ago"],["a wooden desk joined to the bench","long ago"],["an oil lamp for light","long ago"],["a recitation bench at the front of the room","long ago"],["a quill pen made from a feather","long ago"],["a tablet","today"],["a computer","today"],["a smartboard","today"],["a ballpoint pen","today"],["a school bus","today"],["a plastic water bottle","today"],["a photocopier","today"],["a calculator","today"],["electric lights","today"],["a printed workbook","today"],["a whiteboard marker","today"],["a projector","today"],["a coal bucket by the stove","long ago"],["a slate pencil","long ago"],["a horse and cart to get to school","long ago"],["a laptop","today"],["headphones for listening","today"],["a color printer","today"]],_A=[(x,r,labels)=>"Is "+(x)+" from school long ago or school today?",(x,r,labels)=>"Long ago or today: "+(x)+"?",(x,r,labels)=>"Would you find "+(x)+" in a classroom long ago, or in one today?"],_W=[(x,r,labels)=>""+(x)+" belongs to school "+(r)+"."],labels="long ago or today";
for(let _j=0;_j<_A.length;_j++)for(const [x,r] of _T)
add(_SK[_q++%_SK.length],_A[_j](x,r,labels),r,{"t":"pair","a":x,"b":null},_W[_j%_W.length](x,r,labels),_V(r));}
{const _T=[["a slate","a tablet"],["an inkwell and dipping pen","a ballpoint pen"],["a blackboard","a whiteboard"],["a coal stove","heating"],["an oil lamp","electric lights"],["an abacus","a calculator"],["copying every page by hand","a photocopier"],["a hand bell","an electric bell"],["walking miles to school","a school bus"],["a one-room schoolhouse","a school with a class in each room"],["a class of every age in one room","a class for each age"],["a filmstrip projector","a digital projector"]],_X={"a slate":["a whiteboard","a computer"],"a blackboard":["a smartboard"],"copying every page by hand":["a printer"]},_A=[(k,r)=>"Long ago children used "+(k)+". What does that job today?",(k,r)=>""+(k)+" was used long ago. What took its place?"],_W=[(k,r)=>""+(k)+" was replaced by "+(r)+"."];
for(let _j=0;_j<_A.length;_j++)for(const [k,r] of _T)
add("swap",_A[_j](k,r),r,{"t":"pair","a":k,"b":null},_W[_j%_W.length](k,r),_X[k]);}
 }};
