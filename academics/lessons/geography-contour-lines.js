// Original geography lesson. Fictional maps; answers are calculated from their givens.
export default {
id:"geography-e-contour-lines",
subject:"geography",
level:3,
grade:4,
title:"Elevation and contour intervals",
goal:"Infer missing elevations and compare slope steepness using contour evidence.",
standard:"Geographic inquiry and map reasoning",
points:20,
skills:{"interval":"Find a contour interval","height":"Infer a missing elevation","slope":"Compare slopes"},
steps:[{"skill":"interval","say":"A contour line connects places at the same elevation. In this drawing, each brown line is a different height on a hillside viewed from above.","pic":{"t":"contours","base":20,"interval":10,"lines":4}},{"skill":"interval","say":"The contour interval is the height difference between neighboring lines. Labels 20, 30, 40, 50 meters have a 10-meter interval.","pic":{"t":"contours","base":20,"interval":10,"lines":4},"check":{"prompt":"Neighboring contour lines are labeled 50 m and 75 m. What is the contour interval in meters?","answer":25,"options":[25,50,125],"hint":"Subtract the lower label from the higher one.","pic":{"t":"contours","base":50,"interval":25,"lines":2,"showInterval":false}}},{"skill":"height","say":"If heights rise by 10 meters at each line, the blank between 20 and 40 is 30 meters. Check the direction the labels increase.","pic":{"t":"contours","base":20,"interval":10,"lines":3,"blank":1}},{"skill":"height","say":"When only the first and third lines are labeled, there are two equal intervals between them. A rise from 20 to 60 across two intervals means 20 meters per interval.","pic":{"t":"contours","base":20,"interval":20,"lines":3,"blank":1,"showInterval":false},"check":{"prompt":"Three neighboring contour lines rise equally: 30 m, a blank, then 70 m. What elevation belongs on the blank?","answer":50,"options":[50,40,60],"hint":"The 40-meter total rise spans two equal intervals.","pic":{"t":"contours","base":30,"interval":20,"lines":3,"blank":1,"showInterval":false}}},{"skill":"slope","say":"At the same map scale and contour interval, closer contour lines mean the same rise over less horizontal distance, so the slope is steeper.","pic":{"t":"contours","base":20,"interval":10,"lines":4,"compare":[18,60]}},{"skill":"slope","say":"Compare spacing only when scale and interval match. A map with a different interval cannot be compared just by how crowded its lines look.","pic":{"t":"contours","base":20,"interval":10,"lines":4,"compare":[60,18]},"check":{"prompt":"At the same scale and contour interval, slope A has widely spaced lines and B has closely spaced lines. Which is steeper?","answer":"B","options":["B","A","same"],"hint":"The same rise occurs over less horizontal distance on B.","pic":{"t":"contours","base":20,"interval":10,"lines":4,"compare":[60,18]}}}],
progression:{"requires":["geography-e-map-grid"],"operations":2,"demand":"Infer missing elevations and compare slope steepness using contour evidence."},
items(add){

for(let base=20;base<=180;base+=20)for(const interval of [5,10,20])for(const n of [2,3,4]){
 const high=base+n*interval,pic={t:'contours',base,interval,lines:n+1,hidden:Array.from({length:n-1},(_,i)=>i+1),showInterval:false,gap:55};
 add('interval','A hillside has '+n+' equal contour intervals from '+base+' m to '+high+' m. What is one interval in meters?',interval,pic,'Subtract '+base+' from '+high+', then divide by '+n+' intervals.');
 add('height','Contour elevations increase from '+base+' m with a '+interval+' m interval. What is the elevation after crossing '+n+' intervals uphill?',high,{t:'contours',base,interval,lines:n+1,blank:n,gap:55},'Start at '+base+' and add '+n+' intervals of '+interval+' m.');
}
for(const interval of [5,10,20])for(const a of [15,25,35,50])for(const b of [15,25,35,50])if(a!==b)add('slope','On the same-scale hillside maps, both contour intervals are '+interval+' m. A has '+a+' mm between lines; B has '+b+' mm. Which slope is steeper: A or B?',a<b?'A':'B',{t:'contours',base:20,interval,lines:4,compare:[a,b]},'The smaller horizontal gap for the same rise is the steeper slope.');

}
};
