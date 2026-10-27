// Original geography lesson. Hand-written, certain table only: physical features are shapes of land or
// water made by nature, human features are things people built. Borderline words (lake, forest, park, field
// can be argued either way depending on how they were formed) are dropped on purpose. Every answer follows
// mechanically from which list the generator drew the word from and how the question was built around it.
const PHYSICAL=['mountain','hill','river','valley','cliff','beach','island','waterfall','cave','volcano','desert','ocean'];
const HUMAN=['road','bridge','farm','school','railway','canal','tunnel','factory','lighthouse','airport','castle','harbour'];
const cap=s=>s[0].toUpperCase()+s.slice(1);
const kind=f=>HUMAN.includes(f)?'human':'physical';
const plural=f=>/[^aeiou]y$/.test(f)?f.slice(0,-1)+'ies':f+'s';
const art=f=>/^[aeiou]/i.test(f)?'an':'a';
const Art=f=>cap(art(f));
export default {
id:"geography-e-physical-human",
subject:"geography",
level:3,
grade:3,
title:"Physical and human features",
goal:"Tell a feature made by nature from a feature built by people, on a map or in a place name.",
standard:"Geographic skills: distinguish physical and human features",
points:20,
skills:{"sort":"Physical or human","pick":"Spot the human feature","made":"Made by people: yes or no"},
steps:[{"skill":"sort","say":"A physical feature is a shape of land or water that nature made, without any help from people. A mountain, a river and a cliff are all physical features.","pic":{"t":"passages","title":"Made by nature","texts":["mountain","river","cliff","valley"]}},
{"skill":"sort","say":"A human feature is something people built. A road, a bridge and a school are all human features, because people made them, not nature.","pic":{"t":"passages","title":"Made by people","texts":["road","bridge","school","railway"]},"check":{"prompt":"A cave is a hole worn into rock by wind or water, with no builders involved. Physical feature or human feature?","answer":"physical","options":["physical","human"],"hint":"Ask whether nature made it or people built it.","pic":{"t":"passages","title":"Read it","texts":["cave"]}}},
{"skill":"pick","say":"On a map you often see one of each kind close together, like a farm next to a hill. To pick out the human feature, ask which one people built.","pic":{"t":"passages","title":"Two features","texts":["hill","farm"]}},
{"skill":"pick","say":"The human feature is not always named first. Read both words and check each one against what nature makes and what people build.","pic":{"t":"passages","title":"Two features","texts":["airport","desert"]},"check":{"prompt":"Which is a human feature: volcano or lighthouse?","answer":"lighthouse","options":["volcano","lighthouse"],"hint":"A lighthouse is built by people; a volcano is not.","pic":{"t":"passages","title":"Choose one","texts":["volcano","lighthouse"]}}},
{"skill":"made","say":"A quick test: ask whether people made the feature. If nature made it, the answer is no, even if people use it every day, the way farmers use a valley.","pic":{"t":"passages","title":"Made by people?","texts":["valley","tunnel"]}},
{"skill":"made","say":"Some features look plain but are still built, like a canal, which is a waterway people dug, not one a river carved on its own.","pic":{"t":"passages","title":"Made by people?","texts":["canal"]},"check":{"prompt":"A harbour is a sheltered place built for boats to dock. Made by people: yes or no?","answer":"yes","options":["yes","no"],"hint":"People build harbours for boats to dock.","pic":{"t":"passages","title":"Read it","texts":["harbour"]}}}],
progression:{"requires":["geography-e-land-and-water"],"operations":1,"demand":"Classify a named feature as physical or human, pick the human feature out of a pair, and test whether people made it."},
items(add){
 const SORT_Q=[f=>`Is ${art(f)} ${f} a physical feature or a human feature?`,f=>`Sort ${f}: physical or human?`,f=>`${Art(f)} ${f} is what kind of feature: physical or human?`];
 const SORT_W=[f=>`${Art(f)} ${f} is a ${kind(f)} feature.`,f=>`${cap(f)} sorts as ${kind(f)}.`,f=>`${cap(f)} is ${kind(f)}, not the other kind.`];
 const MADE_Q=[f=>`Was ${art(f)} ${f} made by people: yes or no?`,f=>`Did people make ${art(f)} ${f}: yes or no?`,f=>`Is ${art(f)} ${f} a feature made by people: yes or no?`];
 const pic1=f=>({t:'passages',title:'Read it',texts:[cap(f)]});
 const ACC={physical:['natural','nature','physical feature','a physical feature'],human:['man-made','man made','built','people','human feature','a human feature']};
 const ALL=[...PHYSICAL,...HUMAN];
 for(let j=0;j<SORT_Q.length;j++)for(const f of ALL){
  const k=kind(f);
  add('sort',SORT_Q[j](f),k,pic1(f),SORT_W[j](f),ACC[k]);
 }
 for(let j=0;j<MADE_Q.length;j++)for(const f of ALL){
  const yn=HUMAN.includes(f)?'yes':'no';
  add('made',MADE_Q[j](f),yn,pic1(f),yn==='yes'?`People built the ${f}.`:`Nature made the ${f}, not people.`);
 }
 for(let i=0;i<HUMAN.length;i++){
  const h=HUMAN[i],partners=[PHYSICAL[i],PHYSICAL[(i+6)%12]];
  for(const p of partners){
   const orders=[[h,p],[p,h]];
   for(const [a,b] of orders){
    const prompt=`Which is a human feature: ${a} or ${b}?`;
    add('pick',prompt,h,{t:'passages',title:'Choose one',texts:[a,b]},`${cap(h)} is built by people; ${p} is not.`,[plural(h),...(h==='harbour'?['harbor','harbors']:[])]);
   }
  }
 }
}
};
