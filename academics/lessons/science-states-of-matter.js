// Elementary topic: solids, liquids and gases. Questions come from a checked list of everyday things,
// each with the state it is in at room temperature, and from four changes of state.
const SOLID=['a rock','a spoon','an ice cube','a book','a chair','a pencil','a coin','an apple','a shoe','a brick','a key','a crayon'];
const LIQUID=['water','milk','juice','cooking oil','soup broth','rain','lemonade','vinegar'];
const GAS=['air','steam','the air in a balloon','the air in a bike tire','the fizz in a soda'];
const STATE=[...SOLID.map(x=>[x,'solid']),...LIQUID.map(x=>[x,'liquid']),...GAS.map(x=>[x,'gas'])];
const CHANGE=[['ice','heat','melts','water','liquid'],['water','heat','boils','steam','gas'],['water','cool','freezes','ice','solid'],['steam','cool','condenses','water','liquid']];
const SHAPE={solid:'It keeps its own shape.',liquid:'It takes the shape of its container.',gas:'It spreads out to fill its whole container.'};
export default {
 id:'science-e-states-of-matter',subject:'science',level:3,grade:2,standard:'NGSS 2-PS1-1, 2-PS1-4',
 title:'Solids, liquids and gases',goal:'Tell the three states of matter apart, and see how heating and cooling change them.',points:20,
 skills:{solid:'Solids',liquid:'Liquids',gas:'Gases',change:'Changing state'},
 steps:[
  {skill:'solid',say:'Everything around you is matter. A solid keeps its own shape, like a block of ice.',pic:[{t:'matter',jars:[{state:'solid'}]}]},
  {skill:'liquid',say:'A liquid flows. It takes the shape of whatever holds it, like water in a jar.',pic:[{t:'matter',jars:[{state:'liquid'}]}],
   check:{prompt:'Ben pours milk from a carton into a cup, and it takes the shape of the cup. Is milk a solid, a liquid or a gas?',answer:'liquid',options:['liquid','solid','gas'],hint:'Things that flow and take the shape of their container are liquids.'}},
  {skill:'gas',say:'A gas spreads out to fill all the space it can, like the air inside a balloon.',pic:[{t:'matter',jars:[{state:'gas'}]}]},
  {skill:'gas',say:'Solid, liquid, gas: three states of matter.',pic:[{t:'matter',jars:[{state:'solid'},{state:'liquid'},{state:'gas'}]}],eq:'solid, liquid, gas',
   check:{prompt:'Which one spreads out to fill a whole room: a brick, some juice, or the smell of cookies in the air?',answer:'the smell of cookies in the air',options:['the smell of cookies in the air','a brick','some juice'],hint:'A gas spreads out to fill all the space it can.'}},
  {skill:'change',say:'Heating can change a state. Heat ice and it melts into water.',pic:[{t:'matter',change:'melt'}],eq:'ice + heat = water',dur:3},
  {skill:'change',say:'Heat water enough and it boils into steam, a gas.',pic:[{t:'matter',change:'boil'}],eq:'water + heat = steam',dur:3},
  {skill:'change',say:'Cooling changes it back. Cool water enough and it freezes into ice.',pic:[{t:'matter',change:'freeze'}],eq:'water - heat = ice',dur:3,
   check:{prompt:'Ana leaves a cup of apple juice in the freezer overnight. In the morning the juice is frozen hard. Is it now a solid, a liquid or a gas?',answer:'solid',options:['solid','liquid','gas'],hint:'Frozen juice keeps its own shape, like a block of ice.'}}],
 items(add){
  for(const [x,st] of STATE){
   add(st,`Is ${x} a solid, a liquid or a gas?`,st,{t:'matter',jars:[{state:st}],hint:true},`${x[0].toUpperCase()+x.slice(1)} is a ${st}. ${SHAPE[st]}`);
   add(st,`Does ${x} keep its own shape, yes or no?`,st==='solid'?'yes':'no',{t:'matter',jars:[{state:st}],hint:true},`${x[0].toUpperCase()+x.slice(1)} is a ${st}. ${SHAPE[st]}`);
   add(st,`Does ${x} spread out to fill its whole container, yes or no?`,st==='gas'?'yes':'no',{t:'matter',jars:[{state:st}],hint:true},`${x[0].toUpperCase()+x.slice(1)} is a ${st}. ${st==='liquid'?'It takes the shape of the part of the container it is in, but it does not spread out to fill all of it.':SHAPE[st]}`);}
  /* One of each state, named in a fixed rotation so every question has exactly one right answer. */
  SOLID.forEach((s,i)=>{const l=LIQUID[i%LIQUID.length],g=GAS[i%GAS.length];
   for(const [st,x,opts] of [['solid',s,[l,s,g]],['liquid',l,[s,g,l]],['gas',g,[l,s,g]]])
    add(st,`Which of these is a ${st}: ${opts[0]}, ${opts[1]} or ${opts[2]}?`,x,{t:'matter',jars:[{state:'solid',hide:true},{state:'liquid',hide:true},{state:'gas',hide:true}],hint:true},`${x[0].toUpperCase()+x.slice(1)} is the ${st}. ${SHAPE[st]}`);});
  for(const [from,how,verb,to,st] of CHANGE){const ch={melts:'melt',boils:'boil',freezes:'freeze',condenses:'condense'}[verb];
   add('change',`If you ${how} ${from} enough, what does it turn into?`,to,{t:'matter',change:ch,hint:true},`${from[0].toUpperCase()+from.slice(1)} ${verb} into ${to} when you ${how} it.`);
   add('change',`When ${from} ${verb} into ${to}, is ${to} a solid, a liquid or a gas?`,st,{t:'matter',change:ch,hint:true},`${to[0].toUpperCase()+to.slice(1)} is a ${st}.`);}}};
