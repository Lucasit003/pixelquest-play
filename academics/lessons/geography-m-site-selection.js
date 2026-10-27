// Middle School topic (Grade 8, C3 D2.Geo.4.6-8 and D2.Geo.12.6-8): choosing a site with several criteria, the way
// map layers are combined. Every answer is computed from the fictional site table and the criteria stated in its own
// question: a site is suitable only if it meets every criterion; each criterion met scores 1 point; and the best
// site is the one with the highest score. Every valley, site and measurement is fictional.
const V=[
 {name:'Ashdown Valley',sites:[['A',1.5,4,'low',0.5],['B',4,8,'low',2],['C',2,15,'high',1],['D',0.5,6,'medium',3],['E',2.5,9,'low',1.5],['F',5,3,'high',0.2]]},
 {name:'Birch Hollow',sites:[['A',3,12,'low',1],['B',1,5,'high',0.5],['C',2,7,'low',4],['D',6,2,'low',0.8],['E',0.8,11,'medium',2.5],['F',1.8,6,'low',1.2]]},
 {name:'Cobble Dale',sites:[['A',0.6,9,'high',2],['B',2.2,4,'low',0.4],['C',3.5,14,'medium',1],['D',1.2,7,'low',3.5],['E',4.5,5,'low',0.9],['F',2.8,10,'low',2]]},
 {name:'Dunham Plain',sites:[['A',2,3,'medium',1],['B',0.4,6,'low',2],['C',5,8,'low',0.6],['D',1.6,13,'low',1.4],['E',3,2,'high',0.3],['F',2.4,5,'low',2.6]]},
 {name:'Elder Fen',sites:[['A',1,10,'low',3],['B',2.6,4,'medium',0.7],['C',0.9,5,'low',1.1],['D',3.8,6,'low',2.2],['E',1.4,12,'high',0.5],['F',2.1,8,'low',1.9]]}];
/* Criteria: [text, test on a site row [label, river km, slope %, flood risk, road km]]. */
const CR={river:k=>[`within ${k} km of the river`,s=>s[1]<=k],slope:k=>[`a slope under ${k}%`,s=>s[2]<k],flood:()=>['low flood risk',s=>s[3]==='low'],road:k=>[`within ${k} km of a road`,s=>s[4]<=k]};
const SETS=[[CR.river(3),CR.slope(10),CR.flood()],[CR.river(2.5),CR.flood(),CR.road(2)],[CR.slope(8),CR.flood(),CR.road(1.5)],[CR.river(2),CR.slope(9),CR.road(2.5)],[CR.river(4),CR.slope(7),CR.flood(),CR.road(2)]];
const and=l=>l.length<2?l.join(''):`${l.slice(0,-1).join(', ')} and ${l.at(-1)}`;
const said=v=>`In fictional ${v.name}, the possible sites are: ${v.sites.map(([l,r,sl,f,rd])=>`site ${l}, ${r} km from the river, ${sl}% slope, ${f} flood risk, ${rd} km from a road`).join('; ')}.`;
const pic=v=>({t:'setups',title:`Fictional ${v.name}: sites`,head:'Site',rows:v.sites.map(([l,r,sl,f,rd])=>[l,`${r} km`,`${sl}%`,f,`${rd} km`]),cols:['To river','Slope','Flood risk','To road']});
const score=(s,set)=>set.filter(([,t])=>t(s)).length;
export default {
id:'geography-m-site-selection',subject:'geography',level:4,grade:8,standard:'C3 D2.Geo.4.6-8, D2.Geo.12.6-8',
title:'Choosing a site with several criteria',
goal:'Test sites against several criteria at once, count the suitable sites, and pick the best site by scoring how many criteria each meets.',
points:20,
skills:{test:'Testing a site',count:'Counting suitable sites',best:'Choosing the best site'},
steps:[
 {skill:'test',say:'Planners choose sites for farms, schools or homes by laying several maps over each other: distance to water, steepness, flood risk, roads. Each map rules some places out. This fictional table lists six sites in Ashdown Valley with four measurements each.',pic:pic(V[0])},
 {skill:'test',say:'A suitable site must meet every criterion. For "within 3 km of the river, a slope under 10% and low flood risk", site A (1.5 km, 4%, low) passes all three, but site C fails on slope (15%) and flood risk (high).',pic:pic(V[0]),
  check:{prompt:'Try it: in fictional Ashdown Valley, site E is 2.5 km from the river, has a 9% slope, low flood risk and is 1.5 km from a road. Does it meet all of these criteria: within 3 km of the river, a slope under 10% and low flood risk? Answer yes or no.',answer:'yes',options:['yes','no'],hint:'Check each criterion in turn: 2.5 km, 9%, low.',pic:pic(V[0])}},
 {skill:'count',say:'Count the suitable sites by testing every row. In Ashdown Valley, for those three criteria, only A and E pass: B and F are too far from the river, C fails on slope and flood risk, and D has medium flood risk. So 2 sites are suitable.',pic:pic(V[0])},
 {skill:'count',say:'Adding a criterion can only keep the count the same or make it smaller, because a site must now pass one more test. Adding "within 1 km of a road" to the three Ashdown criteria leaves only site A.',pic:pic(V[0]),
  check:{prompt:'Try it: in fictional Ashdown Valley, sites A, B, D and E have low or medium flood risk, and sites A, D and F have a slope under 7%. How many sites have both a slope under 7% and low or medium flood risk?',answer:2,options:[2,3,5],hint:'Count the sites that appear in both lists.',pic:pic(V[0])}},
 {skill:'best',say:'When no site meets every criterion, or several do, planners score them: 1 point for each criterion met. The site with the highest score is the best compromise.',pic:pic(V[0])},
 {skill:'best',say:'Score each site against the same list. For the four criteria within 4 km of the river, a slope under 7%, low flood risk and within 2 km of a road, Ashdown’s site A scores 4, site B scores 3 and site F scores 2.',pic:pic(V[0]),
  check:{prompt:'Try it: in fictional Ashdown Valley, site D is 0.5 km from the river, has a 6% slope, medium flood risk and is 3 km from a road. Scoring 1 point for each of these criteria it meets, within 4 km of the river, a slope under 7%, low flood risk and within 2 km of a road, what is site D’s score?',answer:2,options:[2,3,1],hint:'It meets the river and slope criteria. Check flood risk and road.',pic:pic(V[0])}}],
progression:{requires:['geography-e-settlement-evidence','geography-m-ratio-scale'],operations:3,demand:'Test each row against several conditions, keep only rows that pass all of them, and score rows by how many conditions they pass.'},
items(add){
 V.forEach((v,j)=>{const S=said(v),P=pic(v);
  SETS.forEach((set,c)=>{if(c%2!==j%2&&c!==4)return;const C=`these criteria: ${and(set.map(x=>x[0]))}`,ok=v.sites.filter(s=>score(s,set)===set.length);
   /* Testing each site. */
   let fails=0;v.sites.forEach((s,k)=>{if(j===0&&c===0&&s[0]==='E')return;const pass=score(s,set)===set.length;if(!pass&&fails++>=Math.max(1,ok.length))return;
    add('test',`${S} Does site ${s[0]} meet all of ${C}? Answer yes or no.`,pass?'yes':'no',P,pass?`Site ${s[0]} passes all ${set.length}.`:`Site ${s[0]} fails: ${set.filter(([,t])=>!t(s)).map(x=>x[0]).join('; ')}.`);});
   /* Counting suitable sites, and naming one when exactly one passes. */
   add('count',`${S} How many sites meet all of ${C}?`,ok.length,P,ok.length?`Only ${and(ok.map(s=>`site ${s[0]}`))} pass every test.`:'No site passes every test.');
   if(ok.length===1)add('count',`${S} Which site is the only one that meets all of ${C}?`,ok[0][0],P,`Only site ${ok[0][0]} passes every test.`,[`site ${ok[0][0].toLowerCase()}`]);
   /* Scores and the best site. */
   v.sites.forEach((s,k)=>{if((k+c)%2||(j===0&&c===4&&s[0]==='D'))return;
    add('best',`${S} Scoring 1 point for each of ${C} that a site meets, what is site ${s[0]}’s score?`,score(s,set),P,`Site ${s[0]} meets ${score(s,set)}: ${set.filter(([,t])=>t(s)).map(x=>x[0]).join('; ')||'none'}.`);});
   const sc=v.sites.map(s=>score(s,set)),top=Math.max(...sc);
   if(sc.filter(x=>x===top).length===1)add('best',`${S} Scoring 1 point for each of ${C} that a site meets, which site scores highest?`,v.sites[sc.indexOf(top)][0],P,`The scores are ${v.sites.map((s,k)=>`${s[0]} ${sc[k]}`).join(', ')}, so site ${v.sites[sc.indexOf(top)][0]} is best.`,[`site ${v.sites[sc.indexOf(top)][0].toLowerCase()}`]);
   else add('best',`${S} Scoring 1 point for each of ${C} that a site meets, how many sites share the highest score?`,sc.filter(x=>x===top).length,P,`The scores are ${v.sites.map((s,k)=>`${s[0]} ${sc[k]}`).join(', ')}; ${sc.filter(x=>x===top).length} sites score ${top}.`);});});
}
};
