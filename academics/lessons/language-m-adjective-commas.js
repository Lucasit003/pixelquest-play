// Middle School topic (Grade 7, CCSS L.7.2a): commas between adjectives, and the order of adjectives. Every phrase
// is built here from adjectives tagged with a kind, and the answers follow from the rules the lesson states: two
// adjectives of the same kind (two opinions) are coordinate and take a comma; adjectives of different kinds are
// cumulative, take no comma, and go in the usual order opinion, size, age, shape, colour, material. The "and" test
// agrees with the rule for every phrase built here: coordinate adjectives still read naturally joined with "and".
const KIND=['opinion','size','age','shape','colour','material'];
const ADJ={opinion:['cheerful','friendly','clever','gentle','lovely','noisy','brave','tidy'],size:['big','small','tiny','huge','tall'],age:['old','new','ancient'],shape:['round','square','flat'],colour:['red','blue','green','yellow','brown'],material:['wooden','woollen','glass','cotton','metal']};
/* Nouns that each adjective kind can describe sensibly: people and animals take opinions, size and age; objects take all but opinions of character. */
const LIVING=['dog','neighbour','pony','teacher','parrot','goat'];
const THING=['box','scarf','table','ball','kite','cup','bowl','chair'];
const CHAR=['cheerful','friendly','clever','gentle','brave','noisy'];
/* The adjectives each object noun can sensibly take, so no phrase is a square ball or a woollen cup. */
const SUIT={box:['small','tiny','big','huge','old','new','ancient','square','flat','red','blue','green','yellow','brown','wooden','metal','lovely','tidy'],scarf:['small','big','old','new','red','blue','green','yellow','woollen','cotton','lovely','tidy'],table:['small','big','huge','tall','old','new','ancient','round','square','red','blue','green','yellow','wooden','glass','metal','lovely','tidy'],ball:['small','tiny','big','huge','old','new','round','red','blue','green','yellow','brown','lovely'],kite:['small','tiny','big','huge','old','new','square','red','blue','green','yellow','brown','cotton','lovely'],cup:['small','tiny','big','old','new','ancient','round','red','blue','green','yellow','brown','glass','metal','lovely','tidy'],bowl:['small','tiny','big','huge','old','new','ancient','round','flat','red','blue','green','yellow','brown','wooden','glass','metal','lovely'],chair:['small','tiny','big','huge','tall','old','new','ancient','red','blue','green','yellow','wooden','metal','lovely','tidy']};
const OBJ_OP=['lovely','tidy'];
const art=w=>/^[aeiou]/.test(w)?'an':'a';
const phrase=(adjs,comma,noun)=>`${art(adjs[0])} ${adjs.join(comma?', ':' ')} ${noun}`;
const cap=s=>s[0].toUpperCase()+s.slice(1);
const pic=(rows,hint)=>({t:'setups',title:'Adjectives and their kinds',head:'Adjective',rows,cols:['Kind'],...(hint?{hint:true}:{})});
const kindOf=a=>KIND.find(k=>ADJ[k].includes(a));
export default {
id:'language-m-adjective-commas',subject:'language',level:4,grade:7,standard:'CCSS L.7.2a',
title:'Commas between adjectives',
goal:'Tell coordinate adjectives, which take a comma, from cumulative adjectives, which do not, and put adjectives of different kinds in their usual order.',
points:20,
skills:{comma:'Coordinate or cumulative',order:'Order of adjectives',choose:'Choosing the correct phrase'},
steps:[
 {skill:'comma',say:'When two adjectives describe a noun equally, they are coordinate, and a comma goes between them: "a cheerful, friendly dog". Test it: you could say "a cheerful and friendly dog", or "a friendly, cheerful dog", and it still sounds right.',pic:pic([['cheerful','opinion'],['friendly','opinion']])},
 {skill:'comma',say:'When the adjectives are of different kinds, they are cumulative: each one describes everything after it, and no comma goes between them. "A big red ball" needs no comma, because "a big and red ball" and "a red big ball" both sound wrong.',pic:pic([['big','size'],['red','colour']]),
  check:{prompt:'Try it: in this topic two adjectives of the same kind take a comma, and adjectives of different kinds do not. Should there be a comma between the adjectives in "a clever brave parrot": yes or no?',answer:'yes',options:['yes','no'],hint:'Clever and brave are both opinions.',pic:pic([['clever','opinion'],['brave','opinion']])}},
 {skill:'order',say:'Cumulative adjectives go in a usual order: opinion, size, age, shape, colour, material. So we say "a lovely old wooden table", never "a wooden old lovely table".',pic:{t:'setups',title:'The usual order',head:'Place',rows:[['first','opinion'],['then','size'],['then','age'],['then','shape'],['then','colour'],['last','material']],cols:['Kind']}},
 {skill:'order',say:'To order two adjectives, find each one’s kind and put the kind that comes earlier first. Small is a size and blue is a colour, and size comes before colour: "a small blue cup".',pic:pic([['small','size'],['blue','colour']]),
  check:{prompt:'Try it: using the usual order of opinion, size, age, shape, colour, material, which phrase is in the usual order: A "a green huge kite" or B "a huge green kite"?',answer:'B',options:['A','B'],hint:'Huge is a size and green is a colour.',pic:pic([['huge','size'],['green','colour']])}},
 {skill:'choose',say:'Put the two rules together. Same kind: a comma. Different kinds: the usual order and no comma. "A gentle, noisy goat" takes a comma; "a tiny square box" does not.',pic:pic([['gentle, noisy','opinion, opinion: comma'],['tiny square','size, shape: no comma']])},
 {skill:'choose',say:'A comma never goes between the last adjective and the noun: "a cheerful, friendly dog", not "a cheerful, friendly, dog". And a comma between cumulative adjectives is a mistake: "a big, red ball" is wrong.',pic:pic([['a cheerful, friendly dog','correct'],['a big, red ball','wrong']]),
  check:{prompt:'Try it: which phrase is punctuated correctly by this topic’s rules: A "a tall, old neighbour" or B "a tall old neighbour"?',answer:'B',options:['A','B'],hint:'Tall is a size and old is an age: different kinds.',pic:pic([['tall','size'],['old','age']])}}],
progression:{requires:['language-e-adjectives','language-m-parenthetical-commas'],operations:2,demand:'Name each adjective’s kind, decide coordinate or cumulative, and order different kinds as opinion, size, age, shape, colour, material.'},
items(add){
 const RULE='In this topic two adjectives of the same kind take a comma, and adjectives of different kinds do not.';
 const ORDER='Using the usual order of opinion, size, age, shape, colour, material,';
 const yn=[];
 /* Coordinate pairs: two opinions about a living thing (the Try-it's clever brave parrot is left out). */
 const coord=[];for(let i=0;i<CHAR.length;i++)for(let j=0;j<CHAR.length;j++)if(i!==j&&(i+j)%2===0)coord.push([CHAR[i],CHAR[j],LIVING[(i+2*j)%LIVING.length]]);
 coord.push(['lovely','tidy','box'],['tidy','lovely','chair']);
 /* Cumulative pairs: different kinds, in the usual order. */
 const cumul=[];const pairsK=[['opinion','size'],['size','colour'],['age','material'],['colour','material'],['size','age'],['shape','colour'],['opinion','colour'],['size','material'],['age','colour'],['size','shape']];
 pairsK.forEach(([k1,k2],i)=>{const A1=k1==='opinion'?OBJ_OP:ADJ[k1];let got=0;
  for(let r=0;r<40&&got<4;r++){const x=A1[(i+r)%A1.length],y=ADJ[k2][(i*2+r*3)%ADJ[k2].length],n=THING[(i+r*5)%THING.length];if(SUIT[n].includes(x)&&SUIT[n].includes(y)&&!cumul.some(c=>c[0]===x&&c[1]===y)){cumul.push([x,y,n]);got++;}}});
 const seen=new Set(),u=a=>{const k=a.join(' ');if(seen.has(k))return false;seen.add(k);return true;};
 coord.filter(u).forEach(([a,b,n],k)=>{if(a==='clever'&&b==='brave'&&n==='parrot')return;
  add('comma',`${RULE} Should there be a comma between the adjectives in "${phrase([a,b],false,n)}": yes or no?`,'yes',pic([[a,'opinion'],[b,'opinion']]),`${cap(a)} and ${b} are both opinions, so they are coordinate: "${phrase([a,b],true,n)}".`);yn.push('yes');
  add('choose',`${RULE} Which phrase is punctuated correctly: A "${phrase(k%2?[a,b]:[a,b],k%2===0,n)}" or B "${phrase([a,b],k%2!==0,n)}"?`,k%2===0?'A':'B',pic([[a,'opinion'],[b,'opinion']]),`Both are opinions, so a comma goes between them: "${phrase([a,b],true,n)}".`,[k%2===0?'a':'b']);});
 cumul.filter(u).forEach(([a,b,n],k)=>{const ka=kindOf(a),kb=kindOf(b);
  if(k%3===0){add('comma',`${RULE} Should there be a comma between the adjectives in "${phrase([a,b],false,n)}": yes or no?`,'no',pic([[a,ka],[b,kb]]),`${cap(a)} is ${art(ka)} ${ka} and ${b} is ${art(kb)} ${kb}: different kinds, so no comma.`);yn.push('no');}
  if(!(a==='huge'&&b==='green'))add('order',`${ORDER} which phrase is in the usual order: A "${phrase(k%2?[b,a]:[a,b],false,n)}" or B "${phrase(k%2?[a,b]:[b,a],false,n)}"?`,k%2?'B':'A',pic([[a,ka],[b,kb]]),`${cap(ka)} comes before ${kb}, so "${phrase([a,b],false,n)}".`,[k%2?'b':'a']);
  if(k%3===0)add('order',`${ORDER} which kind of adjective comes first: ${k%2?`${kb} or ${ka}`:`${ka} or ${kb}`}?`,ka,pic([[a,ka],[b,kb]],true),`In the usual order ${ka} comes before ${kb}.`);
  if(k%2===1&&!(a==='tall'&&b==='old'))add('choose',`${RULE} Which phrase is punctuated correctly: A "${phrase([a,b],k%4===1,n)}" or B "${phrase([a,b],k%4!==1,n)}"?`,k%4===1?'B':'A',pic([[a,ka],[b,kb]]),`${cap(ka)} and ${kb} are different kinds, so no comma: "${phrase([a,b],false,n)}".`,[k%4===1?'b':'a']);});
 /* Three adjectives: two opinions and a colour or material. The comma goes only between the opinions. */
 [['cheerful','friendly','red','parrot'],['lovely','tidy','wooden','box'],['brave','gentle','brown','pony'],['clever','noisy','green','parrot'],['lovely','tidy','glass','bowl'],['friendly','gentle','black','dog']].forEach(([a,b,c,n],k)=>{
  const right=`${art(a)} ${a}, ${b} ${c} ${n}`,wrong=k%2?`${art(a)} ${a}, ${b}, ${c} ${n}`:`${art(a)} ${a} ${b} ${c} ${n}`,first=k%3===0;
  add('choose',`${RULE} Which phrase is punctuated correctly: A "${first?right:wrong}" or B "${first?wrong:right}"?`,first?'A':'B',pic([[a,'opinion'],[b,'opinion'],[c,ADJ.material.includes(c)?'material':'colour']]),`Only the two opinions are coordinate, so the comma goes between ${a} and ${b} and nowhere else: "${right}".`,[first?'a':'b']);});
}
};
