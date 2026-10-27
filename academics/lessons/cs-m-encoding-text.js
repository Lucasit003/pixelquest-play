// Middle School topic (Grade 7, CSTA 2-DA-07): text as numbers. Every prompt about codes states the table:
// A = 65, B = 66, C = 67 and so on up to Z = 90, the ASCII codes for capital letters, so a letter's code is
// 65 plus how far it comes after A. Every answer is worked out here from that rule: a word becomes one code
// per letter, codes turn back into letters by taking away 65, a message stored at 8 bits per character takes
// 8 bits for every letter and every space, the fewest bits for N different characters is the smallest n
// whose 2 to the power n reaches N (found by doubling), and a code in binary is written with 8 place values
// from 128 down to 1. True and false answers are kept to half each.
const TABLE='In this table A = 65, B = 66, C = 67 and so on up to Z = 90, the ASCII codes for capital letters.';
const BYTE='A computer stores each character in 8 bits.';
const code=ch=>65+'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(ch);
const letter=n=>'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n-65];
const codes=w=>[...w].map(code);
const after=ch=>code(ch)-65;
const need=N=>{let n=0,v=1;while(v<N){v*=2;n++;}return n;};
const pow2=n=>{let v=1;for(let i=0;i<n;i++)v*=2;return v;};
const binary=n=>{let s='';for(let p=128;p>=1;p/=2){if(n>=p){s+='1';n-=p;}else s+='0';}return s;};
const table=(rows,title='Capital letter codes')=>({t:'setups',title,head:'Letter',rows:[['A','65'],['Z','90'],...rows],cols:['Code']});
const facts=(title,rows)=>({t:'setups',title,head:'Given',rows,cols:['Amount']});
const spaced=a=>a.join(' ');
const TF=b=>b?['true',['yes']]:['false',['no']];
/* The lesson's examples and the three Try-its (kept out of the pool). */
const TA='HAT',TB='FISH',TC='CODE QUEST';
const ASK_CODES=w=>`What are the codes for the word ${w}, in order?`,ASK_WORD=c=>`Which word do the codes ${c} spell?`;
const ASK_MSG=m=>`${BYTE} Every letter and every space is one character. How many bits does the message "${m}" take?`;
const lc=s=>s[0].toLowerCase()+s.slice(1);
export default {
id:'cs-m-encoding-text',subject:'cs',level:4,grade:7,standard:'CSTA 2-DA-07',
title:'Encoding text as numbers',
goal:'Turn capital letters and words into their ASCII codes and back, and work out how many bits a character and a whole message take.',
points:20,
skills:{encode:'Letters to codes',decode:'Codes to letters',bits:'Bits for text'},
steps:[
 {skill:'encode',say:'A computer stores text as numbers. Every character gets a code from a table that computers agree on. In the ASCII table the capital letters run in order: A = 65, B = 66, C = 67, and so on up to Z = 90.',eq:'A = 65, B = 66, ..., Z = 90',pic:table([['B','66'],['C','67']],'ASCII codes for capital letters')},
 {skill:'encode',say:'To find a letter\'s code, count how far the letter comes after A and add that to 65. K comes 10 letters after A, so its code is 65 + 10 = 75. A word becomes one code for each letter, in order: CAT is 67 65 84.',eq:'K = 65 + 10 = 75',pic:table([['K','75'],['word CAT','67 65 84']]),
  check:{prompt:`Try it: ${lc(TABLE)} ${ASK_CODES(TA)}`,answer:spaced(codes(TA)),options:[spaced(codes(TA)),'72 66 84','71 65 83'],hint:'H comes 7 letters after A, A is 65, and T comes 19 letters after A.',pic:table([['word',TA]])}},
 {skill:'decode',say:'Decoding works backwards: take 65 away from a code to find how far its letter comes after A. 77 - 65 = 12, and the letter 12 after A is M. In the same way the codes 68 79 71 spell DOG.',eq:'77 - 65 = 12: M',pic:table([['M','77'],['codes 68 79 71','DOG']])},
 {skill:'decode',say:'Because the codes keep alphabetical order, a computer can put words in order by comparing codes: C is 67 and D is 68, so CAT comes before DOG. Small letters have codes of their own, starting at a = 97, so A and a are different characters.',eq:'67 < 68, so CAT comes before DOG',pic:table([['C','67'],['D','68']]),
  check:{prompt:`Try it: ${lc(TABLE)} ${ASK_WORD(spaced(codes(TB)))}`,answer:TB,options:[TB,'FIRE','GJTI'],hint:'Take 65 away from each code: 70 - 65 = 5, and the letter 5 after A is F.',pic:table([['codes',spaced(codes(TB))]])}},
 {skill:'bits',say:'Computers usually store each ASCII character in one byte, which is 8 bits. So a message takes 8 bits for every character, and a space is a character too. HELLO has 5 characters, so it takes 5 × 8 = 40 bits.',eq:'5 characters × 8 bits = 40 bits',pic:facts('HELLO at 8 bits each',[['characters','5'],['bits per character','8'],['bits','40']])},
 {skill:'bits',say:'How many bits a code needs depends on how many characters must be told apart. 26 capital letters need at least 5 bits, because 4 bits give only 16 codes and 5 bits give 32. ASCII has 128 codes, so it needs 7 bits, and each one is stored in a byte of 8.',eq:'2⁴ = 16 < 26 ≤ 32 = 2⁵',pic:{t:'numline',title:'Codes that 4 and 5 bits give',min:0,max:40,marks:[{v:16,label:'4 bits: 16'},{v:26,label:'26 letters'},{v:32,label:'5 bits: 32'}]},
  check:{prompt:`Try it: ${lc(ASK_MSG(TC))}`,answer:80,options:[80,72,10],hint:'Count the characters in CODE QUEST, and count the space as one of them. Then multiply by 8.',pic:facts('The message',[['message',TC],['bits per character','8']])}},
 {skill:'bits',say:'A code can be written in binary with 8 place values: 128, 64, 32, 16, 8, 4, 2 and 1. 67 = 64 + 2 + 1, so the 8 bits for C are 01000011. Every capital letter starts 010, because every code from 65 to 90 is 64 plus less than 32.',eq:'67 = 64 + 2 + 1 = 01000011',pic:{t:'setups',title:'C = 67 in 8 bits',head:'Place value',rows:[['128','0'],['64','1'],['32','0'],['16','0'],['8','0'],['4','0'],['2','1'],['1','1']],cols:['Bit']}}],
progression:{requires:['cs-m-data-size','cs-e-binary','cs-e-secret-codes'],operations:3,demand:'Turn letters into codes by their distance from A and back again, multiply characters by bits per character, find the first power of 2 that reaches a count, and write a code in 8 place values.'},
items(add){
 const done=new Set([`${TABLE} ${ASK_CODES(TA)}`,`${TABLE} ${ASK_WORD(spaced(codes(TB)))}`,ASK_MSG(TC)]);
 const A=(skill,p,answer,pic,why,accept)=>{if(done.has(p))return;done.add(p);add(skill,p,answer,pic,why,accept);};
 const how=ch=>`${ch} comes ${after(ch)} letter${after(ch)===1?'':'s'} after A, so its code is 65 + ${after(ch)} = ${code(ch)}`;
 /* Letters to codes: one letter, a whole word, and how far apart two codes are. */
 for(const ch of 'DFHKMPRTVWXY')A('encode',`${TABLE} What is the code for ${ch}?`,code(ch),table([[ch,'?']]),`${how(ch)}.`);
 for(const w of ['SUN','MAP','QUEST','PIXEL','CODE','BYTE','LOOP','GAME','ROBOT','KING','STAR','MOON','TREE','LAMP','BOOK','JUMP','WAVE','ZOO']){const c=spaced(codes(w));
  A('encode',`${TABLE} ${ASK_CODES(w)}`,c,table([['word',w]]),`One code per letter: ${[...w].map(ch=>`${ch} = ${code(ch)}`).join(', ')}. So ${w} is ${c}.`,[codes(w).join(', '),codes(w).join(',')]);}
 for(const [x,y] of [['T','M'],['P','D'],['W','K'],['S','E'],['Y','F'],['R','H'],['V','J'],['O','G'],['X','L'],['U','I']])
  A('encode',`${TABLE} How much bigger is the code for ${x} than the code for ${y}?`,code(x)-code(y),table([[x,'?'],[y,'?']]),`${x} = ${code(x)} and ${y} = ${code(y)}, so the difference is ${code(x)-code(y)}: the same as how many letters ${x} comes after ${y}.`);
 /* Codes to letters: one code, a whole word, and the letter a stated distance after another. */
 for(const ch of 'EGIJLNOQSUWY')A('decode',`${TABLE} Which letter has the code ${code(ch)}?`,ch,table([['?',`${code(ch)}`]]),`${code(ch)} - 65 = ${after(ch)}, and the letter ${after(ch)} after A is ${ch}.`,[`"${ch}"`]);
 for(const w of ['SWORD','CASTLE','RIVER','LEMON','OCEAN','NORTH','MAGIC','HERO','GOLD','BRIDGE','APPLE','TIGER','VOTE','SHIP','NEST','YARD','QUIZ','JAZZ']){const c=spaced(codes(w));
  A('decode',`${TABLE} ${ASK_WORD(c)}`,w,table([['codes',c]]),`Take 65 away from each code: ${codes(w).map(n=>`${n} - 65 = ${n-65}, ${letter(n)}`).join('; ')}. The word is ${w}.`,[`"${w}"`]);}
 for(const [x,k] of [['G',5],['B',9],['K',8],['D',14],['M',6],['C',20],['H',11],['A',17],['J',3],['E',19]]){const y=letter(code(x)+k);
  A('decode',`${TABLE} Which letter's code is ${k} more than the code for ${x}?`,y,table([[x,'?'],['?',`${k} more`]]),`${x} = ${code(x)}, and ${code(x)} + ${k} = ${code(x)+k}. ${code(x)+k} - 65 = ${code(x)+k-65}, which is ${y}.`,[`"${y}"`]);}
 /* Bits for text: words and messages at 8 bits per character, the fewest bits for a set of characters,
    whether a number of bits is enough, and a code in 8-bit binary. */
 for(const w of ['PLANET','DRAGONFLY','KEY','WIZARD','ARROW','TREASURE','LANTERN','MAPLE','QUIZ','KEYBOARD','COMPUTER','AXE'])
  A('bits',`${BYTE} How many bits does the word ${w} take?`,8*w.length,facts(`The word ${w}`,[['word',w],['bits per character','8']]),`${w} has ${w.length} characters, and ${w.length} × 8 = ${8*w.length} bits.`);
 for(const m of ['GO NOW','LEVEL UP','GAME OVER','YOU WIN','SAVE ME','NEW QUEST','OPEN THE GATE','READY SET GO']){const n=m.length,sp=m.split(' ').length-1;
  A('bits',ASK_MSG(m),8*n,facts('The message',[['message',m],['bits per character','8']]),`"${m}" has ${n-sp} letters and ${sp} space${sp===1?'':'s'}: ${n} characters, and ${n} × 8 = ${8*n} bits.`);}
 for(const N of [26,52,10,62,95,36,200,300]){const n=need(N);
  A('bits',`A fictional alphabet has ${N} different characters. What is the fewest bits per character that gives each one its own code?`,n,facts(`${N} characters`,[['different characters',`${N}`],['bits per character','?']]),`${n-1} bits give only ${pow2(n-1)} codes, and ${n} bits give ${pow2(n)}, which is enough for ${N}.`);}
 for(const [b,N] of [[5,26],[4,26],[6,52],[5,52],[7,128],[6,100],[3,8],[3,9],[4,16],[7,200],[8,256],[5,33]]){const yes=pow2(b)>=N,[a,acc]=TF(yes);
  A('bits',`Is this true or false: ${b} bits per character are enough to give each of ${N} different characters its own code?`,a,facts('Bits and characters',[['bits per character',`${b}`],['different characters',`${N}`]]),`${b} bits give ${pow2(b)} different codes, which is ${yes?'':'not '}enough for ${N} characters, so it is ${a}.`,acc);}
 for(const ch of 'BEJMQSVY'){const n=code(ch),s=binary(n),parts=[128,64,32,16,8,4,2,1].filter((p,i)=>s[i]==='1');
  A('bits',`${TABLE} What is the code for ${ch} written as an 8-bit binary number?`,s,table([[ch,'?']]),`${how(ch)}, and ${n} = ${parts.join(' + ')}. With place values 128, 64, 32, 16, 8, 4, 2 and 1 that is ${s}.`,[`${s.slice(0,4)} ${s.slice(4)}`]);}
}
};
