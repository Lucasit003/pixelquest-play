// Original geography lesson. Fictional maps; answers are calculated from their givens.
export default {
id:"geography-e-grid-routes",
subject:"geography",
level:3,
grade:3,
title:"Following a route through the village",
goal:"Follow two directions in order, keep track of the new position, and count the journey.",
standard:"Geographic inquiry and map reasoning",
points:20,
skills:{"finish":"Follow two legs","distance":"Count all squares traveled","reverse":"Undo a route"},
steps:[{"skill":"finish","say":"Start at B4, move two squares east to D4, then one square north to D3. The second move starts where the first ends.","pic":{"t":"gridmap","cols":5,"rows":5,"start":[1,3],"path":[[2,0],[0,-1]]}},{"skill":"finish","say":"Write an intermediate reference to keep track: B4, D4, D3. North decreases the row number on this map.","pic":{"t":"gridmap","cols":5,"rows":5,"start":[1,3],"path":[[2,0],[0,-1]]},"check":{"prompt":"Start at A4, move 2 squares east, then 2 north. Where do you end?","answer":"C2","options":["C2","C4","A2"],"hint":"A4 to C4, then C4 to C2.","pic":{"t":"gridmap","cols":5,"rows":5,"start":[0,3]}}},{"skill":"distance","say":"Count both legs of the journey. Two squares east plus one square north is three squares traveled, even though the route turns.","pic":{"t":"gridmap","cols":5,"rows":5,"start":[1,3],"path":[[2,0],[0,-1]]}},{"skill":"distance","say":"The distance traveled is a count of grid steps. This lesson does not yet turn those steps into kilometers.","pic":{"t":"gridmap","cols":5,"rows":5,"start":[0,4],"path":[[3,0],[0,-2]]},"check":{"prompt":"A village walk travels 3 grid squares east and then 2 north. How many grid squares are traveled?","answer":5,"options":[5,1,6],"hint":"Add both legs: 3 + 2.","pic":{"t":"gridmap","cols":5,"rows":5,"start":[0,4],"path":[[3,0],[0,-2]]}}},{"skill":"reverse","say":"To undo a route, reverse its order and each direction. After east then north, go south then west to get back.","pic":{"t":"gridmap","cols":5,"rows":5,"start":[3,2],"path":[[0,1],[-2,0]]}},{"skill":"reverse","say":"If you ended at D3 after two east and one north, undo one north by going south to D4, then go two west to B4.","pic":{"t":"gridmap","cols":5,"rows":5,"start":[3,2],"path":[[0,1],[-2,0]]},"check":{"prompt":"A route ends at D2 after 1 square east, then 1 north. Where did it start?","answer":"C3","options":["C3","E1","C1"],"hint":"Undo the north leg with south, then undo east with west.","pic":{"t":"gridmap","cols":5,"rows":5,"start":[3,1],"startLabel":"E"}}}],
progression:{"requires":["geography-e-map-grid"],"operations":2,"demand":"Follow two directions in order, keep track of the new position, and count the journey."},
items(add){

const ref=(x,y)=>String.fromCharCode(65+x)+(y+1);
for(let x=0;x<5;x++)for(let y=0;y<5;y++)for(const dx of [-2,-1,1,2])for(const dy of [-2,-1,1,2]){
 const xx=x+dx,yy=y+dy;if(xx<0||xx>4||yy<0||yy>4)continue;
 const start=ref(x,y),end=ref(xx,yy),a=Math.abs(dx),b=Math.abs(dy),dirs=a+' '+(dx>0?'east':'west')+' then '+b+' '+(dy>0?'south':'north');
 const pic={t:'gridmap',start:[x,y]};
 add('finish','Village grid A-E, rows 1-5 downwards, north up: start '+start+'; travel '+dirs+' (in squares). What is the final reference?',end,pic,'First change the column, then the row: '+end+'.');
 add('distance','Village route from '+start+' goes '+dirs+' (in squares). How many squares are traveled altogether?',a+b,pic,'Add the two leg lengths, '+a+' + '+b+'.');
 add('reverse','Village grid A-E, rows 1-5 downwards, north up: a route ends at '+end+' after '+dirs+' (in squares). What was the start reference?',start,{t:'gridmap',start:[xx,yy],startLabel:'E'},'Undo the second direction, then the first direction.');
}
}
};
