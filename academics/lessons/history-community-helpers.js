// UNVERIFIED: 44 facts in this topic were written by the local model, not computed.
// Read them before registering it -- tools/lesson-kit/review.mjs prints them. The three
// Try-it answers are the model's too. Everything else is worked out by the generators.
// Elementary topic: Every helper in a town has a job, and you know who to ask. Built from a slot sheet by tools/lesson-kit/build-lesson.mjs.
export default {
 id:"history-e-community-helpers",subject:"history",level:3,grade:2,standard:"NCSS Theme 5",
 title:"Who helps in the town",goal:"Every helper in a town has a job, and you know who to ask.",points:20,
 skills:{"jobs":"Who does what","tools":"What they use","ask":"Who to ask"},
 steps:[
 {skill:"jobs",say:"A town needs lots of helpers.  Each one has a job that the others do not do.",pic:[{"t":"theater","scene":"helpers","part":"jobs"}]},
 {skill:"jobs",say:"A firefighter puts out fires.  A doctor helps you when you are sick.",pic:[{"t":"pair","a":"puts out fires","b":"firefighter"}],eq:"firefighter, doctor",
  check:{prompt:"Each helper has a job the others do not do. Is putting out fires the doctor's job?",answer:"no",options:["no","yes"],hint:"The doctor helps sick people. Putting out fires is the firefighter's job.",pic:{"t":"word","base":"fire"}}},
 {skill:"tools",say:"Every helper uses their own tools.  A firefighter uses a fire hose.",pic:[{"t":"pair","a":"firefighter","b":"fire hose"}],eq:"fire hose"},
 {skill:"tools",say:"A doctor uses a stethoscope to listen to your heart.",pic:[{"t":"pair","a":"doctor","b":"stethoscope"}],eq:"stethoscope",
  check:{"prompt":"Which helper uses a fire hose at work?","answer":"firefighter","options":["firefighter","doctor","baker"],"hint":"Look back: the fire hose is the tool for putting out fires.","pic":{"t":"word","base":"fire hose"}}},
 {skill:"ask",say:"When something happens, you ask the helper whose job it is.  If a pipe is leaking, you ask a plumber.",pic:[{"t":"pair","a":"a leaking pipe","b":"plumber"}],eq:"leaking pipe, plumber"},
 {skill:"ask",say:"If your tooth hurts, you ask a dentist.  A dentist looks after teeth.",pic:[{"t":"pair","a":"a sore tooth","b":"dentist"}],eq:"sore tooth, dentist",
  check:{prompt:"A pipe under the sink is leaking. Which helper do you ask?",answer:"plumber",options:["plumber","dentist","vet"],hint:"Look back: who fixes leaking pipes?",pic:{"t":"word","base":"pipe"}}},
 {skill:"jobs",say:"Think about the job first, and the right helper is easy to find.",pic:[{"t":"theater","scene":"helpers","part":"ask"}]}],
 items(add){
  const _SKIP=new Set(["Who puts out fires?","Who uses a stethoscope to listen to your heart?","Your tooth hurts. Who do you go to?"]),_add=add;
  add=(s,p,a,pic,why,acc)=>{if(!_SKIP.has(String(p)))_add(s,p,a,pic,why,acc);};
{const _T=[["puts out fires","firefighter"],["helps you when you are sick","doctor"],["teaches children at school","teacher"],["brings letters to your house","mail carrier"],["keeps the streets safe","police officer"],["helps you find a book at the library","librarian"],["fixes a leaking pipe","plumber"],["bakes bread and cakes","baker"],["grows food on a farm","farmer"],["cuts hair","hairdresser"],["takes care of sick animals","vet"],["flies an airplane","pilot"],["drives the school bus","bus driver"],["cooks the food in a restaurant","chef"],["cleans and checks your teeth","dentist"],["builds houses","builder"],["gives out medicine at the pharmacy","pharmacist"],["comes in an ambulance to help","paramedic"],["draws and paints pictures","artist"],["collects the rubbish from the bins","garbage collector"]],_X={"helps you when you are sick":["nurse"],"brings letters to your house":["postal worker","mailman","postman"],"cuts hair":["barber"],"takes care of sick animals":["veterinarian"],"cooks the food in a restaurant":["cook"],"builds houses":["carpenter","construction worker"],"collects the rubbish from the bins":["trash collector","bin man"]},_A=[(k,r)=>"Who "+(k)+"?",(k,r)=>"Which helper "+(k)+"?",(k,r)=>"Someone "+(k)+". What is their job called?"],_W=[(k,r)=>"A person who "+(k)+" is called a "+(r)+"."];
for(let _j=0;_j<_A.length;_j++)for(const [k,r] of _T)
add("jobs",_A[_j](k,r),r,{"t":"word","base":r,"hint":true},_W[_j%_W.length](k,r),_X[k]);}
{const _T=[["a fire hose","firefighter"],["a stethoscope","doctor"],["a chalkboard","teacher"],["a mail bag","mail carrier"],["a police car","police officer"],["a wrench on a pipe","plumber"],["a big oven for bread","baker"],["a tractor","farmer"],["scissors and a comb","hairdresser"],["an airplane","pilot"],["an ambulance","paramedic"],["a paintbrush","artist"],["a hammer and nails","builder"],["a school bus","bus driver"]],_X={"a stethoscope":["nurse"],"a big oven for bread":["chef","cook"],"scissors and a comb":["barber"],"a paintbrush":["painter"],"a hammer and nails":["carpenter"]},_A=[(k,r)=>"Who uses "+(k)+"?",(k,r)=>"Whose job needs "+(k)+"?",(k,r)=>"You see someone with "+(k)+". What is their job?"],_W=[(k,r)=>"A "+(r)+" uses "+(k)+"."];
for(let _j=0;_j<_A.length;_j++)for(const [k,r] of _T)
add("tools",_A[_j](k,r),r,{"t":"word","base":k},_W[_j%_W.length](k,r),_X[k]);}
{const _T=[["There is a fire in a building.","firefighter"],["You feel sick and have a fever.","doctor"],["Your tooth hurts.","dentist"],["The sink is blocked and water is coming out.","plumber"],["You want to borrow a book.","librarian"],["Your dog is sick.","vet"],["You are lost in town and need help.","police officer"],["You need a haircut.","hairdresser"],["You need to buy the medicine the doctor wrote down.","pharmacist"],["Someone has fallen and cannot get up.","paramedic"]],_X={"You feel sick and have a fever.":["nurse"],"Your dog is sick.":["veterinarian"],"You need a haircut.":["barber"]},_A=[(k,r)=>""+(k)+" Who do you ask for help?",(k,r)=>""+(k)+" Whose job is it to help?"],_W=[(k,r)=>"When "+(k)+" you ask a "+(r)+"."];
for(let _j=0;_j<_A.length;_j++)for(const [k,r] of _T)
add("ask",_A[_j](k,r),r,{"t":"word","base":"help"},_W[_j%_W.length](k,r),_X[k]);}
 }};
