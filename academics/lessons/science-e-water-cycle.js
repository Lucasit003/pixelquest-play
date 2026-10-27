// Elementary topic: the water cycle. Questions come from a checked list of everyday water phenomena,
// each with the step of the water cycle it represents, and from examples of each step.
const S=['evaporation','condensation','precipitation','collection'];
const NAMES=[['What do we call it when the sun warms water and it turns into water vapor?','evaporation'],['Which step of the water cycle turns liquid water into a gas?','evaporation'],['In which step does liquid water change into water vapor at its surface?','evaporation'],['What do we call it when water vapor cools and turns into tiny drops of liquid water?','condensation'],['Which step of the water cycle turns water vapor back into liquid water?','condensation'],['Which step of the water cycle happens when water vapor cools enough to form liquid drops?','condensation'],['What do we call it when water falls from clouds as rain, snow, sleet or hail?','precipitation'],['Which step of the water cycle brings water down from the clouds?','precipitation'],['Rain, snow, sleet and hail are all kinds of which step of the water cycle?','precipitation'],['What do we call it when water gathers in oceans, lakes and rivers?','collection'],['Which step of the water cycle stores water in oceans, lakes and under the ground?','collection'],['In which step of the water cycle does rainwater flow into rivers and lakes?','collection']];
const EX={evaporation:['A puddle dries up on a sunny day.','Wet clothes on a line dry in the sun.','The sun warms the ocean, and some of its water rises into the air as vapor.','A wet sidewalk dries in the afternoon sun.','Water in an open bowl slowly disappears on a hot day.','Sweat dries on your skin.','A wet towel left in the sun becomes dry.','After you swim, your wet hair dries in the sun.','A dish of salty water dries out and leaves the salt behind.','The morning dew dries up as the sun comes out.','A freshly washed car dries in the sun.'],
condensation:['Tiny drops of water form on the outside of a cold glass of lemonade.','Dew forms on the grass on a cool morning.','A bathroom mirror fogs up during a hot shower.','Water vapor cools high in the sky and forms a cloud of liquid drops.','Your breath fogs up a cold window.','Fog forms over a lake on a cool night.','Drops of water form on the inside of a pot lid while soup cooks.','Your glasses fog up when you walk into a warm room from the cold.','Clouds of liquid drops form as moist air rises and cools enough for condensation.','Drops form on the inside of a car window on a cold morning.'],
precipitation:['Rain falls from dark clouds.','Snow falls on the mountains.','Hail falls during a storm.','Sleet falls on a cold winter day.','Big drops of rain fall onto the roof.','Snowflakes drift down from the clouds.','A thunderstorm drops rain on the town.','Rain from a cloud falls on a field of corn.','Snow falls and covers the playground.','Drizzle falls lightly from gray clouds.','Ice pellets bounce off the car during a hailstorm.'],
collection:['Water runs down a hill into a river.','A stream fills a pond with water.','Melted snow flows into a lake.','Water soaks into the ground and is stored underground.','A river carries water to the ocean.','Water gathers in a low spot and makes a big puddle.','Water fills a lake behind a dam.','Small streams join together into a big river.','Water collects deep under the soil as groundwater.','Water from melting ice fills a mountain lake.']};

const WHAT={evaporation:'liquid water changes into water vapor, a gas',condensation:'water vapor changes into liquid drops; the drops can form clouds or appear on a cool surface',precipitation:'water falls from clouds as rain, snow, sleet or hail',collection:'water gathers in oceans, lakes, rivers and under the ground'};
const cap=x=>x[0].toUpperCase()+x.slice(1);

export default {
 id:'science-e-water-cycle',subject:'science',level:3,grade:3,standard:'NGSS 2-ESS2-3, 5-ESS2-1',
 title:'The water cycle',goal:'Recognize four parts of a simple water-cycle model and follow one route through it.',points:20,
 skills:{steps:'Four parts of our model',order:'Following one route',example:'Spotting a process'},
 steps:[
  {skill:'steps',say:'Water on Earth takes many routes. Our simple model follows four parts of one route through the water cycle.', pic:[{t:'cycle',stages:S}], eq:'evaporation, condensation, precipitation, collection'},
  {skill:'steps',say:'Evaporation: the sun warms water in this example. Liquid water changes into water vapor, an invisible gas. The picture uses wisps to represent it.', pic:[{t:'theater',scene:'water-cycle',part:'evaporation'}], eq:'liquid water turns into water vapor'},
  {skill:'steps',say:'Condensation: water vapor can cool enough to form tiny drops. These drops can form clouds. Clouds can also contain ice crystals.', pic:[{t:'theater',scene:'water-cycle',part:'condensation'}], eq:'water vapor turns into tiny drops'},
  {skill:'steps',say:'Precipitation: water drops or ice crystals grow big and heavy enough to fall from clouds. Rain, snow, sleet and hail are forms of precipitation.', pic:[{t:'theater',scene:'water-cycle',part:'precipitation'}], eq:'rain, snow, sleet, hail',
   /* 19 Oct: this Try-it moved here from the condensation step, whose caption names the answer */
   check:{prompt:'Which process changes water vapor into the tiny liquid drops in a cloud?',answer:'condensation',options:['condensation','evaporation','collection'],hint:'It is the step where water vapor cools and turns back into liquid.',pic:{t:'cycle',stages:['evaporation','condensation','precipitation','collection']}}},
  {skill:'steps',say:'Collection: the water gathers in oceans, lakes, rivers and under the ground.', pic:[{t:'theater',scene:'water-cycle',part:'collection'}], eq:'oceans, lakes, rivers, ground'},
  {skill:'order',say:'Then some lake water evaporates in our model. Other water can flow away or soak into the ground: this is one possible route.', pic:[{t:'theater',scene:'water-cycle',part:'again'}], eq:'collection, then evaporation again',
   check:{prompt:'In our four-part model, which step follows collection when lake water changes into vapor?',answer:'evaporation',options:['evaporation','precipitation','condensation'],hint:'The sun warms collected water, and it rises into the air as vapor.'}},
  {skill:'example',say:'Look for a change into vapor or liquid drops, water falling from clouds, or water gathering. These processes can happen in many places.', pic:[{t:'cycle',stages:S}], eq:'vapor, liquid drops, falling, gathering',
   check:{prompt:'Drops of water form on the outside of a cold can of juice. Which step of the water cycle is this like?',answer:'condensation',options:['condensation','evaporation','precipitation'],hint:'Water vapor in the air cools on the cold can and turns into liquid drops.'}}
 ],
 items(add){
  for(const [q,a] of NAMES){
   add('steps',q,a,{t:'cycle',stages:S,mark:a,hint:true},`${cap(a)} is the step where ${WHAT[a]}.`);
  }
  add('steps','During evaporation, water turns into which state of matter: solid, liquid or gas?','gas',{t:'cycle',stages:S,mark:'evaporation',hint:true},'In evaporation, liquid water turns into water vapor, which is a gas.');
  add('steps','During condensation, water vapor turns into which state of matter: solid, liquid or gas?','liquid',{t:'cycle',stages:S,mark:'condensation',hint:true},'In condensation, water vapor cools and turns into drops of liquid water.');
  let j=0;
  for(const s of S){
   for(const e of EX[s]){
    j++;
    let o=S[(S.indexOf(s)+1+j%3)%4];
    add('example',`${e} Which step of the water cycle is this?`,s,{t:'cycle',stages:S,mark:s,hint:true},`This is ${s}: ${WHAT[s]}.`);
    add('example',j%2===0?`${e} Is this ${s} or ${o}?`:`${e} Is this ${o} or ${s}?`,s,{t:'cycle',stages:S,mark:s,hint:true},`This is ${s}: ${WHAT[s]}.`);
   }
  }
  for(let i=0;i<4;i++){
   let s=S[i], nx=S[(i+1)%4], pv=S[(i+3)%4], blank=a=>S.map(x=>x===a?null:x);
   add('order',`In our four-part water-cycle model, which step comes right after ${s}?`,nx,{t:'cycle',stages:blank(nx),fill:nx,hint:true},`Our model follows evaporation, condensation, precipitation and collection. Water can take other routes too. After ${s} comes ${nx}.`);
   add('order',`In our four-part water-cycle model, which step comes right before ${s}?`,pv,{t:'cycle',stages:blank(pv),fill:pv,hint:true},`Our model follows evaporation, condensation, precipitation and collection. Water can take other routes too. Before ${s} comes ${pv}.`);
   add('order',`In our four-part water-cycle model, which step comes after ${pv} and before ${nx}?`,s,{t:'cycle',stages:blank(s),fill:s,hint:true},`Our model follows evaporation, condensation, precipitation and collection. Water can take other routes too. ${cap(s)} comes between ${pv} and ${nx}.`);
  }
 }
};
