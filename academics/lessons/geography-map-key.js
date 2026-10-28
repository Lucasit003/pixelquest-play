// Original geography lesson. Fictional maps; answers are calculated from their givens.
export default {
id:"geography-e-map-key",
subject:"geography",
level:3,
grade:2,
title:"Map symbols and keys",
goal:"Use a map key to name places and count matching symbols.",
standard:"Geographic inquiry and map reasoning",
points:20,
skills:{"read":"Read a key","find":"Choose a symbol","count":"Count places"},
steps:[{"skill":"read","say":"A map key explains the symbols on that map. In this made-up village map, a triangle means a well, a circle means a farm, and a square means a school.","pic":{"t":"gridmap","cols":5,"rows":5,"key":[{"symbol":"triangle","name":"well"},{"symbol":"circle","name":"farm"},{"symbol":"square","name":"school"}],"marks":[{"at":[1,1],"symbol":"triangle"},{"at":[3,2],"symbol":"circle"},{"at":[2,3],"symbol":"square"}]}},{"skill":"read","say":"Match a symbol to the key before naming a place. Here the triangle marks a well. A different map could use a different key.","pic":{"t":"gridmap","cols":5,"rows":5,"key":[{"symbol":"triangle","name":"well"},{"symbol":"circle","name":"farm"},{"symbol":"square","name":"school"}],"marks":[{"at":[1,1],"symbol":"triangle"}]},"check":{"prompt":"In our example key, triangle means well and circle means farm. What place does a circle show?","answer":"farm","options":["farm","well","school"],"hint":"Match circle to the stated key.","pic":{"t":"gridmap","cols":5,"rows":5,"key":[{"symbol":"triangle","name":"well"},{"symbol":"circle","name":"farm"}],"marks":[{"at":[1,1],"symbol":"circle"}]}}},{"skill":"find","say":"To add a school to this map, choose the square from its key. Shape and the written key tell you the meaning; color alone does not.","pic":{"t":"gridmap","cols":5,"rows":5,"key":[{"symbol":"triangle","name":"well"},{"symbol":"circle","name":"farm"},{"symbol":"square","name":"school"}],"marks":[{"at":[2,3],"symbol":"square"}]}},{"skill":"find","say":"A symbol stands for a kind of place, not its size. A square school symbol does not tell us how large the real school is.","pic":{"t":"gridmap","cols":5,"rows":5,"key":[{"symbol":"triangle","name":"well"},{"symbol":"circle","name":"farm"},{"symbol":"square","name":"school"}]},"check":{"prompt":"Read the key on this map. The map has one big well and one tiny well. Which symbol marks each of them?","answer":"triangle","options":["triangle","square","circle"],"hint":"A symbol shows what kind of place it is, not how big it is. Both are wells.","pic":{"t":"gridmap","cols":5,"rows":5,"marks":[{"at":[1,1],"symbol":"triangle"},{"at":[3,3],"symbol":"triangle"},{"at":[4,0],"symbol":"circle"},{"at":[0,4],"symbol":"square"}],"key":[{"symbol":"triangle","name":"well"},{"symbol":"circle","name":"farm"},{"symbol":"square","name":"school"}]}}},{"skill":"count","say":"To count farms, count only circles in this example. Two circle symbols show two farms; ignore the triangle well.","pic":{"t":"gridmap","cols":5,"rows":5,"key":[{"symbol":"triangle","name":"well"},{"symbol":"circle","name":"farm"},{"symbol":"square","name":"school"}],"marks":[{"at":[1,1],"symbol":"circle"},{"at":[3,2],"symbol":"circle"},{"at":[2,3],"symbol":"triangle"}]}},{"skill":"count","say":"Read the key again whenever you move to a different map. Keep matching the symbol and counting only the kind of place asked for.","pic":{"t":"gridmap","cols":5,"rows":5,"key":[{"symbol":"triangle","name":"well"},{"symbol":"circle","name":"farm"},{"symbol":"square","name":"school"}],"marks":[{"at":[0,1],"symbol":"square"},{"at":[2,1],"symbol":"square"},{"at":[4,1],"symbol":"circle"}]},"check":{"prompt":"A map key says square means school. A map shows two squares and one circle. How many schools does it show?","answer":2,"options":[2,1,3],"hint":"Count only the two square symbols.","pic":{"t":"gridmap","cols":5,"rows":5,"key":[{"symbol":"square","name":"school"}],"marks":[{"at":[0,1],"symbol":"square"},{"at":[2,1],"symbol":"square"},{"at":[4,1],"symbol":"circle"}]}}}],
progression:{"requires":[],"operations":1,"demand":"Use a map key to name places and count matching symbols."},
items(add){

const symbols=['triangle','circle','square'],names=['well','farm','school'],orders=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
for(const order of orders){const key=symbols.map((symbol,i)=>({symbol,name:names[order[i]]})),keyText=key.map(k=>k.symbol+' = '+k.name).join('; ');
 for(let i=0;i<3;i++){
  {const p={t:'gridmap',key,marks:[{at:[1,1],symbol:symbols[i]}]};
   add('read','Map key: '+keyText+'. A '+symbols[i]+' appears on this map. What kind of place is it?',key[i].name,p,'Match '+symbols[i]+' to '+key[i].name+' in this map key.');}
  add('find','Map key: '+keyText+'. Which shape represents a '+key[i].name+'?',symbols[i],{t:'gridmap',key},'Read the key entry for '+key[i].name+'.');
 }
 for(let n=1;n<=4;n++)for(let other=1;other<=3;other++){
  const marks=[...Array.from({length:n},(_,i)=>({at:[i,1],symbol:'triangle'})),...Array.from({length:other},(_,i)=>({at:[i,3],symbol:'circle'}))];
  add('count','Map key: '+keyText+'. The map has '+n+(n===1?' triangle':' triangles')+' and '+other+(other===1?' circle':' circles')+'. How many '+key[0].name+'s are shown?',n,{t:'gridmap',key,marks},'On this map each triangle stands for a '+key[0].name+', so count only the triangles: '+n+'.');
 }
}
}
};
