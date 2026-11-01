// Elementary topic: reading and comparing temperatures. Every temperature is a whole number of
// degrees Celsius from 0 to 40, worked out by a fixed formula from a place index and a day index
// (2*i*i+14*i+9*d*i+3*d+2, wrapped into 0..40) -- never random, never from a fact table, so every
// answer below is computed from how the question was built, not looked up. The d*i term makes the
// day change which place is warmer, not just shift every reading by the same amount, so a child
// cannot answer from memory of one day's order. Places are neutral "Station A".."Station L" labels
// (Oakhaven's weather network) rather than named locations like a pond or a bakery, so no reading
// implies a real-world claim (a pond is not being taught to run hotter than a greenhouse) and a big
// day-to-day change is just a data point, not a claim about how a real place behaves. The handful of
// pairs where the formula happens to give both places the same reading on a day are skipped when
// building compare/change questions, since a tie has no true "warmer" answer.
const PLACES=['Station A','Station B','Station C','Station D','Station E','Station F','Station G','Station H','Station I','Station J','Station K','Station L'];
const N=PLACES.length,DAYS=6,dayName=d=>`Day ${d+1}`;
const temp=(d,i)=>(2*i*i+14*i+9*d*i+3*d+2)%41;
const letterOf=p=>p.slice(-1);
const tableFor=d=>({t:'setups',title:`${dayName(d)}: temperatures in Oakhaven`,rows:PLACES.map((p,i)=>[p,`${temp(d,i)}°C`]),head:'Place',cols:['Temperature']});
export default {
id:"science-e-thermometers",
subject:"science",
level:3,
grade:2,
title:"Reading temperatures",
goal:"Read a temperature in degrees Celsius from a table, tell which of two places is warmer or colder, and find how many degrees warmer or colder one is than the other.",
standard:"Measurement in science: read and compare temperatures (degrees Celsius)",
points:20,
skills:{"read":"Read a temperature","compare":"Warmer or colder","change":"How many degrees"},
steps:[
{skill:"read",say:"A thermometer tells how hot or cold it is. It counts in degrees Celsius. We write °C. This table lists many weather stations.",pic:tableFor(0)},
{skill:"read",say:"Find the row for the station you want. Then read the number next to it. That number is its temperature.",pic:tableFor(1),check:{prompt:`On ${dayName(1)}, the table shows the temperature at Station E. What is it? Type just the number of degrees.`,answer:temp(1,4),options:[temp(1,4),temp(1,4)+3,temp(1,4)-3],hint:"Find Station E's row. Read the number beside it.",pic:tableFor(1)}},
{skill:"compare",say:"The bigger number is warmer. The smaller number is colder. 12°C is colder than 20°C. 12 is smaller than 20.",pic:{t:'setups',title:'Two readings',rows:[['Place A','12°C'],['Place B','20°C']],head:'Place',cols:['Temperature']}},
{skill:"compare",say:"Any two stations work the same way. Read both numbers. Then compare them. The bigger number is warmer.",pic:tableFor(2),check:{prompt:`On ${dayName(2)}, is Station H warmer or colder than Station K?`,answer:temp(2,7)>temp(2,10)?'warmer':'colder',options:['warmer','colder'],hint:"Read both numbers. Then compare them.",pic:tableFor(2)}},
{skill:"change",say:"How many degrees warmer is it? Take the small number from the big one. Place A is 20°C. Place B is 12°C. 20 minus 12 is 8. So Place A is 8 degrees warmer.",pic:{t:'setups',title:'Two readings',rows:[['Place A','20°C'],['Place B','12°C']],head:'Place',cols:['Temperature']}},
{skill:"change",say:"It works both ways. Place A is 8 degrees warmer than Place B. So Place B is 8 degrees colder than Place A.",pic:{t:'setups',title:'Two readings',rows:[['Place A','20°C'],['Place B','12°C']],head:'Place',cols:['Temperature']},check:{prompt:`On ${dayName(3)}, how many degrees warmer is Station D than Station J?`,answer:Math.abs(temp(3,3)-temp(3,9)),options:[Math.abs(temp(3,3)-temp(3,9)),Math.abs(temp(3,3)-temp(3,9))+2,Math.abs(temp(3,3)-temp(3,9))-2],hint:"Subtract the smaller reading from the bigger one.",pic:tableFor(3)}}],
progression:{"requires":["science-e-states-of-matter"],"operations":2,"demand":"Read a value out of a table, compare two whole numbers up to 40, and subtract the smaller from the bigger to find a difference."},
items(add){
 for(let d=0;d<DAYS;d++){
  const pic=tableFor(d);
  PLACES.forEach((p,i)=>{
   if(i%3===0)add('read',`According to the table for ${dayName(d)}, what is the temperature at ${p}? Type just the number of degrees.`,temp(d,i),pic,`${p}'s row in the ${dayName(d)} table reads ${temp(d,i)}°C.`);
   else if(i%3===1)add('read',`Look at the ${dayName(d)} table. How many degrees Celsius does it show for ${p}? Type just the number.`,temp(d,i),pic,`${p}'s row in the ${dayName(d)} table reads ${temp(d,i)}°C.`);
   else add('read',`On ${dayName(d)}, the table lists a reading for ${p}. What is that reading? Type just the number of degrees.`,temp(d,i),pic,`${p}'s row in the ${dayName(d)} table reads ${temp(d,i)}°C.`);});
  for(let off=1;off<=4;off++){
   for(let i=0;i<N;i+=2){
    const j=(i+off)%N,a=PLACES[i],b=PLACES[j],ta=temp(d,i),tb=temp(d,j);
    if(ta===tb)continue;
    const warmer=ta>tb?a:b,colder=ta>tb?b:a,hi=Math.max(ta,tb),lo=Math.min(ta,tb);
    const firstIsWarmer=(d+off+i)%2===0,first=firstIsWarmer?warmer:colder,second=firstIsWarmer?colder:warmer;
    add('compare',`On ${dayName(d)}, which is warmer: ${first} or ${second}?`,warmer,pic,`${warmer} reads ${hi}°C and ${colder} reads ${lo}°C, so ${warmer} is warmer.`,[letterOf(warmer)]);
    add('compare',`On ${dayName(d)}, which is colder: ${second} or ${first}?`,colder,pic,`${colder} reads ${lo}°C and ${warmer} reads ${hi}°C, so ${colder} is colder.`,[letterOf(colder)]);
    const diff=hi-lo;
    const degWord=diff===1?'degree':'degrees';
    if((d+off+i)%2===0)add('change',`On ${dayName(d)}, how many degrees warmer is ${warmer} than ${colder}?`,diff,pic,`${warmer} reads ${hi}°C and ${colder} reads ${lo}°C, a difference of ${diff} ${degWord}.`);
    else add('change',`On ${dayName(d)}, how many degrees colder is ${colder} than ${warmer}?`,diff,pic,`${colder} reads ${lo}°C and ${warmer} reads ${hi}°C, a difference of ${diff} ${degWord}.`);
   }
  }
 }
}
};
