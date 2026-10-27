// Middle School topic (Grade 8, NGSS MS-LS3-2): one gene, two alleles and the Punnett square. Every answer is
// computed by filling the square here: each parent gives one of its two alleles, the four boxes are equally
// likely, a capital (dominant) allele shows its trait whenever it is present, and the small (recessive) allele
// shows only in a pair of two. Each box is 25%. Organisms and traits are fictional; no answer is a genotype typed
// as letters, because answers are checked without regard to capitals.
const ORG=[
 {o:'flower',L:'R',d:'red petals',r:'yellow petals',v:'are',q:'petals',dw:'red',rw:'yellow'},
 {o:'beetle',L:'G',d:'a green shell',r:'a brown shell',v:'is',q:'shell',dw:'green',rw:'brown'},
 {o:'lizard',L:'S',d:'a striped tail',r:'a plain tail',v:'is',q:'tail',dw:'striped',rw:'plain'},
 {o:'sunflower',L:'T',d:'tall stems',r:'short stems',v:'are',q:'stems',dw:'tall',rw:'short'},
 {o:'fish',L:'B',d:'blue fins',r:'silver fins',v:'are',q:'fins',dw:'blue',rw:'silver'},
 {o:'mouse',L:'D',d:'dark fur',r:'light fur',v:'is',q:'fur',dw:'dark',rw:'light'},
 {o:'bean plant',L:'P',d:'purple pods',r:'white pods',v:'are',q:'pods',dw:'purple',rw:'white'},
 {o:'snail',L:'C',d:'curled antennae',r:'straight antennae',v:'are',q:'antennae',dw:'curled',rw:'straight'}];
const an=L=>`${/[AEFHILMNORSX]/.test(L)?"an":"a"} ${L}`;
const rule=g=>`In a fictional ${g.o}, ${g.d} (${g.L}) ${g.v} dominant over ${g.r} (${g.L.toLowerCase()}).`;
/* Genotypes 2 (two dominant), 1 (one of each) and 0 (two recessive), written with the organism's letter. */
const gt=(g,k)=>k===2?g.L+g.L:k===1?g.L+g.L.toLowerCase():g.L.toLowerCase()+g.L.toLowerCase();
const alleles=(g,k)=>gt(g,k).split('');
const square=(g,a,b)=>{const top=alleles(g,a),side=alleles(g,b);return side.map(s=>top.map(t=>[s,t].sort((x,y)=>(x===x.toUpperCase()?0:1)-(y===y.toUpperCase()?0:1)).join('')));};
const count=(g,a,b,k)=>square(g,a,b).flat().filter(x=>x===gt(g,k)).length;
const showsDom=x=>x!==x.toLowerCase();
const pic=(g,a,b,fill)=>{const top=alleles(g,a),side=alleles(g,b),sq=square(g,a,b);return {t:'setups',title:`Punnett square: ${gt(g,a)} × ${gt(g,b)}`,head:'',rows:side.map((s,i)=>[s,...(fill?sq[i]:['?','?'])]),cols:top};};
const cross=(g,a,b)=>`A ${g.o} with genotype ${gt(g,a)} is crossed with a ${g.o} with genotype ${gt(g,b)}.`;
const CROSSES=[[2,0],[2,1],[1,1],[1,0]];
const ORDER=[2,1,0];
export default {
id:'science-m-genetics-punnett',subject:'science',level:4,grade:8,standard:'NGSS MS-LS3-2',
title:'Genes and Punnett squares',
goal:'Tell a dominant allele from a recessive one, fill a Punnett square for one gene, and find the chance of each trait in the offspring.',
points:20,
skills:{traits:'Genotype and trait',square:'Filling a Punnett square',odds:'Chances in a cross'},
steps:[
 {skill:'traits',say:'Genes come in different versions called alleles. A body cell carries two alleles for each gene, one from each parent. A dominant allele, written as a capital letter such as R, shows its trait whenever it is there. A recessive allele, a small letter such as r, shows its trait only when both alleles are recessive.',pic:{t:'setups',title:'Two alleles for one gene',head:'',rows:[['from one parent','R or r'],['from the other parent','R or r']],cols:['Allele']}},
 {skill:'traits',say:'The pair of alleles is the genotype, and the trait you can see is the phenotype. In a fictional flower where red petals R are dominant over yellow petals r, RR and Rr flowers are red, and only rr flowers are yellow. RR and rr are homozygous, two of the same allele; Rr is heterozygous, one of each.',pic:{t:'setups',title:'A fictional flower',head:'Genotype',rows:[['RR','red','homozygous'],['Rr','red','heterozygous'],['rr','yellow','homozygous']],cols:['Petals','Alleles']},
  check:{prompt:'Try it: in a fictional beetle, a green shell (G) is dominant over a brown shell (g). What colour is the shell of a beetle with genotype Gg: green or brown?',answer:'green',options:['green','brown'],hint:'A dominant allele shows whenever it is there.',pic:{t:'setups',title:'A fictional beetle',head:'',rows:[['genotype','Gg'],['shell','?']],cols:['Value']}}},
 {skill:'square',say:'A Punnett square shows every way the parents’ alleles can combine. Write one parent’s two alleles across the top and the other parent’s down the side. Each box takes one allele from its column and one from its row.',pic:pic(ORG[0],1,0,false)},
 {skill:'square',say:'Crossing Rr with rr fills the boxes Rr, Rr, rr and rr: 2 boxes are Rr and 2 boxes are rr. Write the capital letter first, so rR is written Rr.',pic:pic(ORG[0],1,0,true),
  check:{prompt:'Try it: in a fictional flower, red petals (R) are dominant over yellow petals (r). A flower with genotype Rr is crossed with another flower with genotype Rr. How many of the 4 boxes of the Punnett square show genotype rr?',answer:1,options:[1,2,0],hint:'Fill the four boxes, one allele from the top and one from the side.',pic:pic(ORG[0],1,1,false)}},
 {skill:'odds',say:'Each of the 4 boxes is an equally likely outcome, so each box is a 25% chance. Crossing Rr with Rr gives RR, Rr, Rr and rr: 3 of the 4 boxes hold an R, so 3 × 25 = 75% of the offspring are expected to have red petals and 25% yellow petals.',pic:pic(ORG[0],1,1,true)},
 {skill:'odds',say:'A Punnett square predicts chances, not exact counts. Of 40 offspring from Rr × Rr, about 40 × 25 ÷ 100 = 10 are expected to have yellow petals, but a real group of offspring can differ from the prediction.',pic:{t:'setups',title:'40 offspring of Rr × Rr',head:'',rows:[['red petals','about 30'],['yellow petals','about 10']],cols:['Expected']},
  check:{prompt:'Try it: in a fictional sunflower, tall stems (T) are dominant over short stems (t). A sunflower with genotype Tt is crossed with a sunflower with genotype tt. What percent of the offspring are expected to have short stems?',answer:50,options:[50,25,75],hint:'Fill the square, then count the boxes with tt. Each box is 25%.',pic:pic(ORG[3],1,0,false)}}],
progression:{requires:['science-e-life-cycles','math-m-probability'],operations:2,demand:'Fill a 2 × 2 square from two genotypes, count boxes, turn a count of 4 into a percent, and scale it to a group.'},
items(add){
 ORG.forEach((g,j)=>{const R=rule(g);
  /* Trait from genotype, homozygous or heterozygous, and copies of the recessive allele. */
  for(const k of ORDER){const G=gt(g,k),tr=k?g.dw:g.rw;
   add('traits',`${R} Which ${g.q} does a ${g.o} with genotype ${G} have: ${g.dw} or ${g.rw}?`,tr,{t:'setups',title:`A fictional ${g.o}`,head:'',rows:[['genotype',G],[g.q,'?']],cols:['Value']},k?`${G} has the dominant allele ${g.L}, so the ${g.o} has ${g.d}.`:`${G} has two recessive alleles, so the ${g.o} has ${g.r}.`);
   add('traits',`${R} Is a ${g.o} with genotype ${G} homozygous or heterozygous?`,k===1?'heterozygous':'homozygous',{t:'setups',title:`A fictional ${g.o}`,head:'',rows:[['genotype',G]],cols:['Value']},k===1?`${G} has one allele of each kind, so it is heterozygous.`:`${G} has two of the same allele, so it is homozygous.`);
   add('traits',`${R} How many copies of the recessive allele ${g.L.toLowerCase()} does a ${g.o} with genotype ${G} carry?`,2-k,{t:'setups',title:`A fictional ${g.o}`,head:'',rows:[['genotype',G]],cols:['Value']},`${G} has ${2-k} small ${g.L.toLowerCase()}${2-k===1?'':'s'}.`);}
  /* Boxes of one genotype in a square (the Try-it's flower Rr × Rr asking about rr is left out). */
  CROSSES.forEach(([a,b],c)=>{const k=ORDER[(j+c)%3];if(j===0&&a===1&&b===1&&k===0)return;const n=count(g,a,b,k);
   add('square',`${R} ${cross(g,a,b)} How many of the 4 boxes of the Punnett square show genotype ${gt(g,k)}?`,n,pic(g,a,b,false),`The boxes are ${square(g,a,b).flat().join(', ')}, so ${n} show ${gt(g,k)}.`);});
  /* Percent with each trait (the Try-it's sunflower Tt × tt asking about short stems is left out). */
  CROSSES.forEach(([a,b],c)=>{const dom=(j+c)%2===0;if(j===3&&a===1&&b===0&&!dom)return;const boxes=square(g,a,b).flat(),n=boxes.filter(x=>showsDom(x)===dom).length;
   add('odds',`${R} ${cross(g,a,b)} What percent of the offspring are expected to have ${dom?g.d:g.r}?`,n*25,pic(g,a,b,false),`The boxes are ${boxes.join(', ')}. ${n} of the 4 ${dom?`hold ${an(g.L)}`:`are ${gt(g,0)}`}, and each box is 25%, so ${n} × 25 = ${n*25}%.`);});
  /* Expected numbers in a group of offspring. */
  [[1,1],[1,0]].forEach(([a,b],c)=>{const N=[8,12,20,40,100,16,24,60][(j+c)%8],dom=c===0?j%2===0:j%2===1,boxes=square(g,a,b).flat(),n=boxes.filter(x=>showsDom(x)===dom).length;
   add('odds',`${R} ${cross(g,a,b)} Out of ${N} offspring, about how many are expected to have ${dom?g.d:g.r}?`,N*n/4,pic(g,a,b,false),`${n} of the 4 boxes ${dom?`hold ${an(g.L)}`:`are ${gt(g,0)}`}, so about ${N} × ${n} ÷ 4 = ${N*n/4} of the ${N}.`);});});
}
};
