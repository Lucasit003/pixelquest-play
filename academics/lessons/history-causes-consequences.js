// Original history lesson. Fictional Oakhaven records; each answer follows from the "because" links the record states
// and the order of its dates (C3 D2.His.14.3-5: explain probable causes and effects of events).
const CHAINS=[['the mill closed','many families moved away','the school lost half its pupils','the school joined with the next village'],
 ['a railway station opened','farmers sent grain to the city','the market grew','a second bakery opened'],
 ['a flood washed away the bridge','carts had to go the long way round','food at the market cost more','the council built a stone bridge'],
 ['a dry summer ruined the wheat','bread became scarce','the bakers baked with rye','more rye fields were planted'],
 ['a library opened in the hall','more children borrowed books','the school started a reading club'],
 ['the old well was found to be dirty','many people fell ill','the council dug a new well']];
const OTHER=['a clock was put on the hall','the church bell was repainted','a fair was held in the square','the pond froze for a week','a statue was put up by the gate','the market cross was cleaned'];
const cap=s=>s[0].toUpperCase()+s.slice(1),L='ABCDE';
export default {
id:"history-e-causes-consequences",
subject:"history",
level:3,
grade:5,
title:"Causes and consequences",
goal:"Trace a chain of causes in a record, tell direct from indirect results, and set aside an event the record does not connect.",
standard:"C3 D2.His.14.3-5: explain probable causes and effects of events",
points:20,
skills:{"direct":"Find a direct result","chain":"Follow a chain of causes","order":"Causes come first"},
steps:[{"skill":"direct","say":"A cause makes something happen; a consequence is what happens because of it. In this fictional record, the mill closing is a cause, and families moving away is its consequence.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":["1910: The mill closed.","1912: Because the mill closed, many families moved away."]}},
{"skill":"chain","say":"Consequences can become causes. Families moving away made the school lose pupils. So the mill closing helped cause the smaller school too, but not directly: it worked through the families leaving.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":["1910: The mill closed.","1912: Because the mill closed, many families moved away.","1915: Because many families moved away, the school lost half its pupils."]},"check":{"prompt":"In another fictional record, a storm knocked down the bridge in 1920, so carts took the long road in 1921, and because carts took the long road, the market opened late in 1922. What was the direct cause of the market opening late: the storm or the long road?","answer":"the long road","options":["the long road","the storm"],"hint":"Direct means the step just before it.","pic":{"t":"passages","title":"Another fictional record","texts":["1920: A storm knocked down the bridge.","1921: Because the bridge was down, carts took the long road.","1922: Because carts took the long road, the market opened late."]}}},
{"skill":"order","say":"A cause must happen before its consequence. An event that happened in 1913 cannot have caused an event in 1911.","pic":{"t":"passages","title":"Order matters","texts":["1911: The pond froze for a week.","1913: A clock was put on the hall."]}},
{"skill":"order","say":"Coming first is not enough, though. The clock on the hall came before the school lost pupils, but nothing in the record connects them. Only a stated link, like because, joins events into a chain.","pic":{"t":"passages","title":"Fictional Oakhaven record","texts":["1910: The mill closed.","1912: Because the mill closed, many families moved away.","1913: A clock was put on the hall.","1915: Because many families moved away, the school lost half its pupils."]},"check":{"prompt":"A record says the pond froze in 1908 and the bridge was repaired in 1906. Could the frozen pond have caused the bridge repair: yes or no?","answer":"no","options":["no","yes"],"hint":"Which came first?","pic":{"t":"passages","title":"Order matters","texts":["1906: The bridge was repaired.","1908: The pond froze."]}}},
{"skill":"chain","say":"To follow a chain, start at the event nothing else in the chain caused, then follow each because forward. Each step is a direct result of the one before.","pic":{"t":"passages","title":"Follow the becauses","texts":["A railway station opened.","Because it opened, farmers sent grain to the city.","Because farmers sent grain, the market grew."]}},
{"skill":"chain","say":"Here is a made-up story from long ago, at the Oakhaven bridge. The river was too deep to wade, so the narrow stone bridge was the only way across.","pic":{"t":"theater","scene":"bridge","part":"approach"}},
{"skill":"direct","say":"The Red army had to cross the narrow bridge a few soldiers at a time. Because so few could cross at once, the Blue army stopped them at the end of the bridge.","pic":{"t":"theater","scene":"bridge","part":"cross"}},
{"skill":"chain","say":"Because the Red army could not get across, it turned back. Because it turned back, the two lords met on the bridge and agreed to share it. Each consequence became the cause of the next.","pic":{"t":"theater","scene":"bridge","part":"peace"}},
{"skill":"direct","say":"A record states what its writer believed caused what. Historians check those links against other sources, as in the evidence lesson. Here we read what the record claims.","pic":{"t":"passages","title":"According to the record","texts":["Read the because links.","Check the dates.","Set aside events the record does not connect."]},"check":{"prompt":"A record says a dry summer ruined the wheat, so bread became scarce, so the bakers baked with rye. Which event started the chain: the dry summer, the scarce bread or the rye baking?","answer":"the dry summer","options":["the dry summer","the scarce bread","the rye baking"],"hint":"Which one did nothing else in the chain cause?","pic":{"t":"passages","title":"According to the record","texts":["A dry summer ruined the wheat.","So bread became scarce.","So the bakers baked with rye."]}}}],
progression:{"requires":["history-e-weighing-evidence","history-e-decades-centuries"],"operations":3,"demand":"Follow stated links through several steps, separate direct from indirect results, and use dates to rule out impossible causes."},
items(add){
 CHAINS.forEach((chain,ci)=>[1900,1920,1950].forEach((y0,yi)=>{
  const years=chain.map((e,i)=>y0+ci+i*3),slot=(ci+yi)%chain.length,other={text:OTHER[(ci+yi*2)%6],year:slot?years[slot-1]+1:y0-2,other:true};
  const events=chain.map((text,i)=>({text,year:years[i],i}));events.splice(slot,0,other);
  const lines=events.map((e,k)=>`${e.year}: `+(e.other||e.i===0?cap(e.text):`Because ${chain[e.i-1]}, ${e.text}`)+'.'),letter=e=>L[events.indexOf(e)];
  const record='Fictional Oakhaven record. '+events.map((e,k)=>`${L[k]}, ${lines[k]}`).join(' ')+' ',pic={t:'passages',title:'Fictional Oakhaven record',texts:lines,small:true};
  const all=events.map((e,k)=>L[k]),list=all.slice(0,-1).join(', ')+' or '+all[all.length-1],link=events.filter(e=>!e.other);
  add('chain',record+`Which event started the chain of causes: ${list}?`,letter(link[0]),pic,'It is the first link; nothing else in the record caused it.');
  add('order',record+`Which event does the record not connect to the others: ${list}?`,letter(other),pic,'No because links it to anything, even though it has a date among them.');
  link.slice(0,-1).forEach((e,i)=>add('direct',record+`According to the record, which event was a direct result of event ${letter(e)}: ${list}?`,letter(link[i+1]),pic,`Event ${letter(link[i+1])} says it happened because of ${letter(e)}.`));
  const ask=(a,b)=>add('chain',record+`According to the record, did event ${letter(a)} help cause event ${letter(b)}: yes or no?`,!a.other&&!b.other&&a.i<b.i?'yes':'no',pic,a.other||b.other?`The record gives no link between them.`:a.i<b.i?`Follow the becauses from ${letter(a)} forward to ${letter(b)}.`:`${letter(a)} came after ${letter(b)}; a cause must come first.`);
  ask(link[0],link[link.length-1]);ask(link[1],link[0]);ask(other,link[link.length-1]);ask(link[0],link[1]);
 }));
}
};
