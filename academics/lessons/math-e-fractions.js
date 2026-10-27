// Elementary topic: fractions. Generated questions, so every fraction and comparison is computed.
const D=[2,3,4,6,8];
const WORDS={2:['one half','a half','half'],3:['one third','a third','third'],4:['one fourth','a fourth','fourth','one quarter','a quarter','quarter'],6:['one sixth','a sixth','sixth'],8:['one eighth','an eighth','eighth']};
const ACC=b=>[`1 / ${b}`,`1 /${b}`,`1/ ${b}`,...WORDS[b]];
const THINGS=[['granola bar','eat'],['sandwich','eat'],['loaf of bread','eat'],['pan of cornbread','eat'],['ribbon','paint'],['fence board','paint'],['strip of paper','color'],['garden bed','water']];
const two=(a,b)=>({t:'bars',rows:[{parts:a,shade:1},{parts:b,shade:1}]});

export default {
 id:'math-e-fractions',subject:'math',level:3,grade:3,standard:'CCSS 3.NF.A.1, 3.NF.A.3d, 3.G.A.2',
 title:'Unit fractions',goal:'Name one equal part of a whole as a fraction, and compare unit fractions.',points:20,
 skills:{name:'Naming one part',whole:'Parts in a whole',compare:'Comparing unit fractions'},
 steps:[
  {skill:'name',say:'A fraction names a part of a whole. First the whole is cut into equal parts, all the same size.',pic:[{t:'bar',parts:4,shade:0}],eq:'4 equal parts'},
  {skill:'name',say:'One of the 4 equal parts is one fourth of the whole. We write it 1/4.',pic:[{t:'bar',parts:4,shade:1}],eq:'1/4'},
  {skill:'name',say:'The bottom number tells how many equal parts make the whole. The top number 1 means one of those parts.',pic:[{t:'bar',parts:3,shade:1}],eq:'1/3',
   check:{prompt:'A bar is cut into 6 equal parts and 1 part is shaded. What fraction is shaded?',answer:'1/6',options:['1/6','1/5','6/1'],hint:'Count all the equal parts. That number goes on the bottom.',pic:{t:'bar',parts:6,shade:1}}},
  {skill:'whole',say:'It takes 3 thirds to make one whole bar.',pic:[{t:'bar',parts:3,shade:3}],eq:'1/3 + 1/3 + 1/3 = 1 whole'},
  {skill:'whole',say:'The bottom number also tells how many of those parts fill the whole. 8 eighths make one whole.',pic:[{t:'bar',parts:8,shade:8}],eq:'8 eighths = 1 whole',
   check:{prompt:'How many 1/4 pieces fill one whole bar?',answer:4,options:[4,1,8],hint:'The bottom number tells how many equal parts make the whole.',pic:{t:'bar',parts:4,shade:4}}},
  {skill:'compare',say:'More parts means smaller parts. 1/2 of a bar is bigger than 1/4 of the same bar.',pic:[two(2,4)],eq:'1/2 > 1/4'},
  {skill:'compare',say:'Cut the same whole into more equal parts and each part gets smaller. So 1/3 is bigger than 1/8.',pic:[two(3,8)],eq:'1/3 > 1/8',
   check:{prompt:'Which is smaller: 1/2 of a pizza or 1/6 of the same pizza?',answer:'1/6',options:['1/6','1/2','They are the same size'],hint:'The more equal parts you cut, the smaller each part is.',pic:{t:'bars',rows:[{parts:2,shade:1},{parts:6,shade:1}]}}}],
 items(add){
  for(const [thing,verb] of THINGS)for(const b of D)add('name',`You cut a ${thing} into ${b} equal parts and ${verb} 1 part. What fraction of the ${thing} do you ${verb}?`,`1/${b}`,{t:'bar',parts:b,shade:1,hint:true},`The ${thing} has ${b} equal parts and you ${verb} 1 of them, so that is 1/${b}.`,ACC(b));
  for(const [thing] of THINGS)for(const b of D)add('whole',`A ${thing} is cut into equal parts, and each part is 1/${b} of it. How many parts are there?`,b,{t:'bar',parts:b,shade:b,hint:true},`It takes ${b} parts of size 1/${b} to make one whole, so there are ${b} parts.`);
  let k=0;for(const a of D)for(const b of D)if(a<b)for(const word of ['bigger','smaller'])for(const [x,y] of [[a,b],[b,a]]){const [thing,verb]=THINGS[k%THINGS.length];k++;const n=word==='bigger'?a:b;const answer=`1/${n}`;add('compare',`Which is ${word}: 1/${x} of a ${thing} or 1/${y} of the same ${thing}?`,answer,{t:'bars',rows:[{parts:x,shade:1},{parts:y,shade:1}],hint:true},`Cut into ${b} equal parts, each part is smaller than when cut into ${a}. So 1/${a} is bigger and 1/${b} is smaller.`,ACC(n));}}};
