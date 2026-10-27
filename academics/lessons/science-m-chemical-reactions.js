// Middle School topic (Grade 8, NGSS MS-PS1-5): chemical reactions conserve atoms and mass. Atom counts are
// computed here by reading each formula (an element symbol, then its subscript, 1 if none) and multiplying by
// the coefficient. The equations are standard balanced equations, and every one is checked here, atom by atom,
// before it is used. Mass questions use fictional substances: a sealed container keeps its mass, and in an open
// one the missing mass is the gas that escaped. Every scenario is fictional.
const SUB='₀₁₂₃₄₅₆₇₈₉';
const NAME={H:'hydrogen',O:'oxygen',C:'carbon',N:'nitrogen',Na:'sodium',Cl:'chlorine',Fe:'iron',Ca:'calcium',Mg:'magnesium',Al:'aluminium',K:'potassium',Zn:'zinc',Cu:'copper',S:'sulfur'};
const atoms=f=>{const out={};for(const [,el,n] of f.matchAll(/([A-Z][a-z]?)([₀-₉]*)/g))out[el]=(out[el]||0)+(n?+[...n].map(d=>SUB.indexOf(d)).join(''):1);return out;};
const termAtoms=([c,f])=>Object.fromEntries(Object.entries(atoms(f)).map(([e,n])=>[e,c*n]));
const sideAtoms=side=>side.reduce((o,t)=>{for(const [e,n] of Object.entries(termAtoms(t)))o[e]=(o[e]||0)+n;return o;},{});
const same=(a,b)=>Object.keys({...a,...b}).every(e=>a[e]===b[e]);
const term=([c,f],blank)=>`${blank?'? ':c===1?'':c}${f}`;
const eqn=(E,b=-1)=>{let k=0;const side=s=>s.map(t=>term(t,k++===b)).join(' + ');return `${side(E.L)} → ${side(E.R)}`;};
const EQ=[
 {L:[[2,'H₂'],[1,'O₂']],R:[[2,'H₂O']]},{L:[[1,'CH₄'],[2,'O₂']],R:[[1,'CO₂'],[2,'H₂O']]},{L:[[1,'N₂'],[3,'H₂']],R:[[2,'NH₃']]},
 {L:[[4,'Fe'],[3,'O₂']],R:[[2,'Fe₂O₃']]},{L:[[2,'Na'],[1,'Cl₂']],R:[[2,'NaCl']]},{L:[[1,'C'],[1,'O₂']],R:[[1,'CO₂']]},
 {L:[[2,'Mg'],[1,'O₂']],R:[[2,'MgO']]},{L:[[2,'H₂O₂']],R:[[2,'H₂O'],[1,'O₂']]},{L:[[1,'CaCO₃']],R:[[1,'CaO'],[1,'CO₂']]},
 {L:[[2,'CO'],[1,'O₂']],R:[[2,'CO₂']]},{L:[[4,'Al'],[3,'O₂']],R:[[2,'Al₂O₃']]},{L:[[1,'C₃H₈'],[5,'O₂']],R:[[3,'CO₂'],[4,'H₂O']]},
 {L:[[2,'KClO₃']],R:[[2,'KCl'],[3,'O₂']]},{L:[[1,'Zn'],[2,'HCl']],R:[[1,'ZnCl₂'],[1,'H₂']]},{L:[[2,'H₂O']],R:[[2,'H₂'],[1,'O₂']]},
 {L:[[1,'C₆H₁₂O₆'],[6,'O₂']],R:[[6,'CO₂'],[6,'H₂O']]},{L:[[2,'Cu'],[1,'O₂']],R:[[2,'CuO']]},{L:[[1,'S'],[1,'O₂']],R:[[1,'SO₂']]},
 {L:[[2,'SO₂'],[1,'O₂']],R:[[2,'SO₃']]},{L:[[1,'N₂'],[1,'O₂']],R:[[2,'NO']]}];
for(const E of EQ)if(!same(sideAtoms(E.L),sideAtoms(E.R)))throw new Error(`not balanced: ${eqn(E)}`);
const sides=(E,b)=>({t:'setups',title:'A chemical equation',head:'',rows:[['left side',eqn({L:E.L,R:[]},b).replace(/ → $/,'')],['right side',eqn({L:[],R:E.R},b-E.L.length).replace(/^ → /,'')]],cols:['Terms']});
const FORM=['H₂O','CO₂','O₂','CH₄','NaCl','Fe₂O₃','NH₃','C₆H₁₂O₆','CaCO₃','MgO','H₂O₂','Al₂O₃','C₃H₈','SO₃','KCl'];
const label=(c,f)=>({t:'setups',title:'A fictional lab label',head:'',rows:[['label',`${c===1?'':c}${f}`]],cols:['Reads']});
export default {
id:'science-m-chemical-reactions',subject:'science',level:4,grade:8,standard:'NGSS MS-PS1-5',
title:'Chemical reactions: atoms and mass',
goal:'Count the atoms a chemical formula stands for, use the conservation of mass in sealed and open containers, and balance a chemical equation.',
points:20,
skills:{atoms:'Counting atoms',mass:'Mass is conserved',balance:'Balanced equations'},
steps:[
 {skill:'atoms',say:'All matter is made of atoms. A chemical formula lists the atoms in one molecule: the small number after a symbol counts that kind of atom, and a symbol with no small number counts 1. H₂O has 2 hydrogen atoms and 1 oxygen atom, 3 atoms in all.',pic:{t:'setups',title:'One molecule of H₂O',head:'Atom',rows:[['hydrogen, H','2'],['oxygen, O','1']],cols:['Count']}},
 {skill:'atoms',say:'A big number in front, the coefficient, counts whole molecules, so it multiplies every atom in the formula. 3CO₂ is 3 molecules of carbon dioxide: 3 × 1 = 3 carbon atoms and 3 × 2 = 6 oxygen atoms.',eq:'3CO₂: 3 carbon, 6 oxygen',pic:{t:'setups',title:'3CO₂',head:'Atom',rows:[['carbon, C','3 × 1 = 3'],['oxygen, O','3 × 2 = 6']],cols:['Count']},
  check:{prompt:'Try it: a fictional lab label reads 2H₂O. How many hydrogen atoms does 2H₂O stand for?',answer:4,options:[4,2,3],hint:'The 2 in front multiplies the 2 hydrogen atoms in each molecule.',pic:label(2,'H₂O')}},
 {skill:'mass',say:'In a chemical reaction the atoms of the starting substances, the reactants, rearrange into new substances, the products. No atom is made or destroyed, so in a sealed container the total mass before a reaction equals the total mass after it.',pic:{t:'setups',title:'A sealed flask',head:'',rows:[['before the reaction','reactants'],['after the reaction','products, the same mass']],cols:['Holds']}},
 {skill:'mass',say:'So the mass of the reactants equals the mass of the products. If 12 g of a fictional substance reacts completely with 20 g of another, the products have a mass of 12 + 20 = 32 g. Working backwards, 32 − 12 = 20 g of the second substance was used.',eq:'12 g + 20 g = 32 g',pic:{t:'setups',title:'A fictional reaction',head:'',rows:[['substance A','12 g'],['substance B','20 g'],['products','32 g']],cols:['Mass']},
  check:{prompt:'Try it: in a fictional sealed flask, 30 g of substance A reacts with 18 g of substance B, and both are used up. What is the total mass of the products, in grams?',answer:48,options:[48,12,30],hint:'In a sealed flask the products have the same mass as the reactants.',pic:{t:'setups',title:'A fictional sealed flask',head:'',rows:[['substance A','30 g'],['substance B','18 g'],['products','?']],cols:['Mass']}}},
 {skill:'mass',say:'In an open container a gas can escape into the air, so the mass left behind is less. The mass has not vanished: the missing grams are the gas. A fictional dish that goes from 50 g to 42 g gave off 50 − 42 = 8 g of gas.',pic:{t:'setups',title:'A fictional open dish',head:'',rows:[['before','50 g'],['after','42 g'],['gas that escaped','8 g']],cols:['Mass']}},
 {skill:'balance',say:'A balanced chemical equation has the same number of each kind of atom on both sides of the arrow. 2H₂ + O₂ → 2H₂O has 2 × 2 = 4 hydrogen atoms and 2 oxygen atoms on each side.',eq:'2H₂ + O₂ → 2H₂O',pic:sides(EQ[0],-1)},
 {skill:'balance',say:'To balance an equation, change the coefficients, never the small numbers, because changing those would make a different substance. In CH₄ + 2O₂ → CO₂ + 2H₂O, the left side has 2 × 2 = 4 oxygen atoms and the right side has 2 + 2 = 4.',eq:'CH₄ + 2O₂ → CO₂ + 2H₂O',pic:sides(EQ[1],-1),
  check:{prompt:'Try it: a fictional student is balancing ? H₂ + O₂ → 2H₂O. What number replaces the ? to balance it?',answer:2,options:[2,1,4],hint:'The right side has 4 hydrogen atoms. How many H₂ molecules hold 4?',pic:sides(EQ[0],0)}}],
progression:{requires:['science-e-conservation-of-mass','science-m-density-mixtures'],operations:2,demand:'Multiply a subscript by a coefficient and add across terms, add or subtract masses, and find the coefficient that makes both sides match.'},
items(add){
 let i=0;
 /* Atoms of one element in a labelled amount (the Try-it's hydrogen in 2H₂O is left out). */
 FORM.forEach((f,j)=>{const els=Object.keys(atoms(f));
  for(const c of [[2,4],[3,5],[2,3],[4,5],[3,4]][j%5]){const el=els[(i++)%els.length];if(c===2&&f==='H₂O'&&el==='H')continue;const n=termAtoms([c,f])[el];
   add('atoms',`A fictional lab label reads ${c}${f}. How many ${NAME[el]} atoms does ${c}${f} stand for?`,n,label(c,f),`Each molecule of ${f} has ${atoms(f)[el]} ${NAME[el]} atom${atoms(f)[el]===1?'':'s'}, so ${c} molecules have ${c} × ${atoms(f)[el]} = ${n}.`);}
  const all=Object.values(atoms(f)).reduce((a,b)=>a+b,0),c=[2,3,4,5][j%4];
  add('atoms',`A fictional lab label reads ${f}. How many atoms in all are in one molecule of ${f}?`,all,label(1,f),`Add the atoms: ${Object.entries(atoms(f)).map(([e,n])=>`${n} ${NAME[e]}`).join(', ')}, ${all} in all.`);
  add('atoms',`A fictional lab label reads ${c}${f}. How many atoms in all does ${c}${f} stand for?`,c*all,label(c,f),`One molecule of ${f} has ${all} atoms, so ${c} molecules have ${c} × ${all} = ${c*all}.`);});
 /* Mass in sealed and open containers, with fictional substances. */
 [[30,12],[45,25],[8,64],[56,32],[14,6],[72,48],[19,81],[100,35]].forEach(([a,b],j)=>{
  add('mass',`In a fictional sealed flask, ${a} g of substance A reacts with ${b} g of substance B, and both are used up completely. What is the total mass of the products, in grams?`,a+b,{t:'setups',title:'A fictional sealed flask',head:'',rows:[['substance A',`${a} g`],['substance B',`${b} g`],['products','?']],cols:['Mass']},`No atoms are made or destroyed, so the products have ${a} + ${b} = ${a+b} g.`);
  add('mass',`In a fictional sealed jar, ${a} g of substance X reacts completely with substance Y to make ${a+b} g of products, using up all of both. How many grams of substance Y were used?`,b,{t:'setups',title:'A fictional sealed jar',head:'',rows:[['substance X',`${a} g`],['substance Y','?'],['products',`${a+b} g`]],cols:['Mass']},`Reactants and products have the same mass, so Y was ${a+b} - ${a} = ${b} g.`);});
 [[50,42],[120,95],[64,58],[200,156],[37,30],[90,72],[150,138],[48,33]].forEach(([m,k])=>{
  add('mass',`A fictional reaction in an open dish starts with ${m} g of reactants. A gas forms and escapes into the air, and the dish then holds ${k} g. How many grams of gas escaped?`,m-k,{t:'setups',title:'A fictional open dish',head:'',rows:[['before',`${m} g`],['after',`${k} g`],['gas that escaped','?']],cols:['Mass']},`The missing mass is the gas: ${m} - ${k} = ${m-k} g.`);
  add('mass',`A fictional sealed bottle and everything in it have a mass of ${m+k} g before a reaction inside it. Nothing gets in or out. What is the mass of the bottle and everything in it after the reaction, in grams?`,m+k,{t:'setups',title:'A fictional sealed bottle',head:'',rows:[['before',`${m+k} g`],['after','?']],cols:['Mass']},`In a sealed container no mass is gained or lost, so it is still ${m+k} g.`);});
 /* The coefficient that balances an equation (the Try-it's first blank in 2H₂ + O₂ → 2H₂O is left out). */
 EQ.forEach((E,j)=>{const T=[...E.L,...E.R];T.forEach(([c],b)=>{if(c<2||(j===0&&b===0))return;
  add('balance',`A fictional student is balancing ${eqn(E,b)}. What number replaces the ? to balance it?`,c,sides(E,b),`With ${c} there, both sides have ${Object.entries(sideAtoms(E.L)).map(([e,n])=>`${n} ${NAME[e]}`).join(', ')}: ${eqn(E)}.`);});
  /* Atoms of one element on one side. */
  const els=Object.keys(sideAtoms(E.L)),el=els[j%els.length],right=j%2===1,n=(right?sideAtoms(E.R):sideAtoms(E.L))[el];
  add('balance',`A fictional worksheet shows ${eqn(E)}. How many ${NAME[el]} atoms are on the ${right?'right':'left'} side?`,n,sides(E,-1),`Count ${el} in every term on the ${right?'right':'left'}: ${n}.`);
  /* Balanced or not: every listed equation, and the same one with its last coefficient raised by 1. */
  if(j%5<3){const wrong={L:E.L,R:E.R.map((t,k)=>k===E.R.length-1?[t[0]+1,t[1]]:t)},ok=j%2===0,F=ok?E:wrong;
   add('balance',`A fictional student writes ${eqn(F)}. Is this equation balanced: yes or no?`,ok?'yes':'no',sides(F,-1),ok?`Both sides have ${Object.entries(sideAtoms(E.L)).map(([e,n])=>`${n} ${NAME[e]}`).join(', ')}, so it is balanced.`:`The left side has ${Object.entries(sideAtoms(F.L)).map(([e,n])=>`${n} ${NAME[e]}`).join(', ')}, but the right side has ${Object.entries(sideAtoms(F.R)).map(([e,n])=>`${n} ${NAME[e]}`).join(', ')}, so it is not balanced.`);}});
}
};
