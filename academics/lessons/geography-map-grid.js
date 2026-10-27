// Original geography lesson. Fictional maps; answers are calculated from their givens.
export default {
id:"geography-e-map-grid",
subject:"geography",
level:3,
grade:3,
title:"Reading map grid references",
goal:"Combine a column letter and row number, then track a move on a map.",
standard:"Geographic inquiry and map reasoning",
points:20,
skills:{"reference":"Combine letter and number","read":"Separate column and row","move":"Move to a neighbor"},
steps:[{"skill":"reference","say":"This map uses columns A to E from left to right and rows 1 to 5 from top to bottom. Other maps can use different conventions, so read the labels first.","pic":{"t":"gridmap","cols":5,"rows":5}},{"skill":"reference","say":"A grid reference puts the column letter first and the row number second. Column C and row 4 meet at C4.","pic":{"t":"gridmap","cols":5,"rows":5,"highlight":[2,3]},"check":{"prompt":"On this grid, column D meets row 2. Write the grid reference.","answer":"D2","options":["D2","2D","D3"],"hint":"Write the column letter before the row number.","pic":{"t":"gridmap","cols":5,"rows":5,"highlight":[3,1]}}},{"skill":"read","say":"In B3, B is the column and 3 is the row. North is up here, so larger row numbers are farther south.","pic":{"t":"gridmap","cols":5,"rows":5,"highlight":[1,2]}},{"skill":"read","say":"Do not swap the two parts. E1 is the fifth column in the top row.","pic":{"t":"gridmap","cols":5,"rows":5,"highlight":[4,0]},"check":{"prompt":"For grid reference A5, which number tells the row?","answer":5,"options":[5,1,4],"hint":"The number in A5 is the row.","pic":{"t":"gridmap","cols":5,"rows":5,"highlight":[0,4]}}},{"skill":"move","say":"One square east changes B3 to C3. The column moves right by one and the row stays the same.","pic":{"t":"gridmap","cols":5,"rows":5,"start":[1,2],"path":[[1,0]]}},{"skill":"move","say":"One square north changes C3 to C2. The number gets smaller because the rows are numbered from the top.","pic":{"t":"gridmap","cols":5,"rows":5,"start":[2,2],"path":[[0,-1]]},"check":{"prompt":"Start at D4 on this north-up grid. Move one square north. Where do you finish?","answer":"D3","options":["D3","D5","C4"],"hint":"North goes up one row: 4 becomes 3.","pic":{"t":"gridmap","cols":5,"rows":5,"start":[3,3]}}}],
progression:{"requires":["geography-e-map-key"],"operations":2,"demand":"Combine a column letter and row number, then track a move on a map."},
items(add){

const ref=(x,y)=>String.fromCharCode(65+x)+(y+1),p=(x,y)=>({t:'gridmap',highlight:[x,y]});
for(let x=0;x<5;x++)for(let y=0;y<5;y++){
 const r=ref(x,y);add('reference','On a north-up map with columns A-E and rows 1-5 from top to bottom, name the square in column '+r[0]+' and row '+(y+1)+'.',r,p(x,y),'Column first, row second: '+r+'.');
 add('read','On our A-E, 1-5 map, what is the row number of square '+r+'?',y+1,p(x,y),'The number is the row.');
 add('read','On our A-E, 1-5 map, what is the column letter of square '+r+'?',r[0],p(x,y),'The letter is the column.');
 for(const [dir,dx,dy] of [['east',1,0],['west',-1,0],['north',0,-1],['south',0,1]])if(x+dx>=0&&x+dx<5&&y+dy>=0&&y+dy<5)add('move','On our north-up grid, begin at '+r+' and travel one square '+dir+'. Give the destination reference.',ref(x+dx,y+dy),{t:'gridmap',start:[x,y]},'Change only the coordinate in the direction of travel.');
}
}
};
