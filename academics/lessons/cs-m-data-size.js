// Middle School topic (Grade 6, CSTA 2-DA-07): bits, bytes and the size of data. Every answer is exact
// whole-number arithmetic on the numbers in its own question: n bits store 2 multiplied by itself n times
// different values; the fewest bits for N values is the smallest n whose 2^n reaches N, found by doubling;
// 8 bits make 1 byte; in this topic 1 kilobyte is exactly 1000 bytes (the topic says so wherever kilobytes
// appear); and an image takes width × height × bits per pixel bits. Every size asked in bytes or kilobytes
// divides exactly. Games, sensors and images in the questions are fictional.
const pow2=n=>{let v=1;for(let i=0;i<n;i++)v*=2;return v;};
const need=N=>{let n=0,v=1;while(v<N){v*=2;n++;}return n;};
const KB='In this topic 1 kilobyte = 1000 bytes.';
const facts=(title,rows)=>({t:'setups',title,head:'Given',rows,cols:['Amount']});
const img=(w,h,b,title)=>({t:'setups',title:title||`A ${w} × ${h} image`,head:'Fact',rows:[['width',`${w} pixels`],['height',`${h} pixels`],['bits per pixel',`${b}`]],cols:['Value']});
export default {
id:'cs-m-data-size',subject:'cs',level:4,grade:6,standard:'CSTA 2-DA-07',
title:'Bits, bytes and data size',
goal:'Work out how many values a number of bits can store and how many bits a set of values needs, convert between bits, bytes and kilobytes, and find the size of an image.',
points:20,
skills:{values:'Bits and values',bytes:'Bits, bytes and kilobytes',image:'The size of an image'},
steps:[
 {skill:'values',say:'A bit is a single 0 or 1, so one bit can store 2 different values. Each extra bit doubles the count, because every pattern so far can be followed by a 0 or by a 1.',eq:'1 bit: 2,  2 bits: 4,  3 bits: 8',pic:{t:'setups',title:'Every extra bit doubles the patterns',head:'Bits',rows:[['1','0, 1','2'],['2','00, 01, 10, 11','4'],['3','000 up to 111','8']],cols:['Patterns','Values']}},
 {skill:'values',say:'So n bits store 2 × 2 × ... × 2, with n twos, which is 2 to the power n. 8 bits store 256 values. Going the other way, 20 values need 5 bits: 4 bits store only 16, and 5 bits store 32.',eq:'2⁴ = 16 < 20 ≤ 32 = 2⁵',pic:{t:'numline',title:'Values that 4 and 5 bits can store',min:0,max:40,marks:[{v:16,label:'4 bits: 16'},{v:20,label:'20 values'},{v:32,label:'5 bits: 32'}]},
  check:{prompt:'Try it: a fictional quiz gives each of its 40 answer choices its own code. What is the fewest bits that can do that?',answer:6,options:[6,5,40,7],hint:'5 bits store 32 values and 6 bits store 64. Which is the first to reach 40?',pic:facts('Codes for 40 choices',[['different values','40'],['bits needed','?']])}},
 {skill:'bytes',say:'Bits are grouped into bytes, and 8 bits make 1 byte. To turn bits into bytes divide by 8; to turn bytes into bits multiply by 8. 96 bits is 96 ÷ 8 = 12 bytes.',eq:'96 bits ÷ 8 = 12 bytes',pic:{t:'setups',title:'8 bits = 1 byte',head:'Bits',rows:[['8','1'],['16','2'],['96','12']],cols:['Bytes']}},
 {skill:'bytes',say:'Bigger sizes use kilobytes. Computers sometimes count 1024 bytes in a kilobyte, but in this topic 1 kilobyte = 1000 bytes exactly, so 5000 bytes is 5 kilobytes and 5 kilobytes is 5000 × 8 = 40000 bits.',eq:'5 kilobytes = 5000 bytes = 40000 bits',pic:{t:'setups',title:'1 kilobyte = 1000 bytes (this topic)',head:'Kilobytes',rows:[['1','1000','8000'],['5','5000','40000']],cols:['Bytes','Bits']},
  check:{prompt:'Try it: a fictional song clip is 3 kilobytes. How many bits is that, where 1 kilobyte = 1000 bytes?',answer:24000,options:[24000,3000,24,3008],hint:'First turn kilobytes into bytes, then bytes into bits.',pic:facts('A 3-kilobyte clip',[['kilobytes','3'],['bits','?']])}},
 {skill:'image',say:'A black-and-white image stores 1 bit for every pixel: one value for black and the other for white. Its size in bits is width × height. A 16 × 8 image has 128 pixels, so it takes 128 bits, which is 128 ÷ 8 = 16 bytes.',eq:'16 × 8 × 1 = 128 bits = 16 bytes',pic:img(16,8,1,'A 16 × 8 black-and-white image')},
 {skill:'image',say:'A colour image stores more bits in each pixel. At 24 bits per pixel, a 10 × 10 image takes 10 × 10 × 24 = 2400 bits, which is 300 bytes. Multiply the pixels by the bits per pixel, then divide by 8 for bytes.',eq:'10 × 10 × 24 = 2400 bits = 300 bytes',pic:img(10,10,24,'A 10 × 10 colour image'),
  check:{prompt:'Try it: a fictional colour icon is 20 pixels wide and 10 pixels tall, with 8 bits per pixel. How many bytes does it take?',answer:200,options:[200,1600,25,30],hint:'Find the bits first: 20 × 10 × 8. Then divide by 8.',pic:img(20,10,8,'A fictional icon')}}],
progression:{requires:['cs-e-binary'],operations:3,demand:'Double for each extra bit, find the first power of 2 that reaches a count, and chain multiplying and dividing by 8 and 1000 through image sizes.'},
items(add){
 /* Bits and values: n bits -> 2^n, plain and in context, and N values -> the fewest bits. */
 for(let n=1;n<=16;n++)add('values',`How many different values can ${n} bit${n===1?'':'s'} store?`,pow2(n),facts('Bits and values',[['bits',`${n}`],['different values','?']]),`Each bit doubles the count, so ${n} bit${n===1?'':'s'} store${n===1?'s':''} 2 to the power ${n}${n>1&&n<=5?` = ${Array(n).fill(2).join(' × ')}`:''} = ${pow2(n)} values.`);
 const CTX=[[n=>`A fictional game stores each player's level in ${n} bits. How many different levels can it store?`,'levels'],[n=>`A fictional sensor sends a ${n}-bit reading. How many different readings are possible?`,'readings'],[n=>`A fictional robot stores its mood as a ${n}-bit code. How many different moods can it have?`,'moods']];
 CTX.forEach(([say,what],c)=>{for(const n of [2,4,5,7,10].map(v=>v+(c%2)))add('values',say(n),pow2(n),facts(`A ${n}-bit code`,[['bits',`${n}`],[what,'?']]),`${n} bits store 2 to the power ${n} = ${pow2(n)} different ${what}.`);});
 for(const N of [3,5,6,9,11,17,20,25,33,50,64,65,100,128,200,256,300,500,1000,1025]){const n=need(N);
  add('values',`What is the fewest bits that can give ${N} different values each their own code?`,n,facts('Codes for values',[['different values',`${N}`],['bits needed','?']]),`${n-1} bits store only ${pow2(n-1)} values, and ${n} bits store ${pow2(n)}, which is enough for ${N}.`);}
 for(const N of [4,10,16,30,60,100,250,1000]){const n=need(N);
  add('values',`A fictional drawing app offers ${N} different colours. What is the fewest bits per pixel that gives each colour its own code?`,n,facts(`${N} colours`,[['different colours',`${N}`],['bits per pixel','?']]),`${n-1} bits give only ${pow2(n-1)} codes, and ${n} bits give ${pow2(n)}, enough for ${N} colours.`);}
 /* Bits, bytes and kilobytes. */
 for(const k of [2,5,9,12,16,25,40,64,100,125])add('bytes',`How many bytes are ${8*k} bits?`,k,facts('Bits to bytes',[['bits',`${8*k}`],['bytes','?']]),`8 bits make 1 byte, so ${8*k} ÷ 8 = ${k} bytes.`);
 for(const k of [3,6,11,15,20,32,45,75,150,256])add('bytes',`How many bits are in ${k} bytes?`,8*k,facts('Bytes to bits',[['bytes',`${k}`],['bits','?']]),`Each byte is 8 bits, so ${k} × 8 = ${8*k} bits.`);
 for(const b of [2000,7000,12000,2500,4500,30000,64000,150000])add('bytes',`${KB} How many kilobytes are ${b} bytes?`,b/1000,facts('Bytes to kilobytes',[['bytes',`${b}`],['kilobytes','?']]),`${b} ÷ 1000 = ${b/1000} kilobytes.`);
 for(const k of [4,9,15,40,120,250])add('bytes',`${KB} How many bytes are in ${k} kilobytes?`,1000*k,facts('Kilobytes to bytes',[['kilobytes',`${k}`],['bytes','?']]),`${k} × 1000 = ${1000*k} bytes.`);
 for(const k of [2,5,7,12,20,50])add('bytes',`${KB} How many bits are in ${k} kilobytes?`,8000*k,facts('Kilobytes to bits',[['kilobytes',`${k}`],['bits','?']]),`${k} × 1000 = ${1000*k} bytes, and ${1000*k} × 8 = ${8000*k} bits.`);
 for(const c of [40,75,120,160,250,280])add('bytes',`A fictional text message has ${c} characters, and each character takes 1 byte. How many bits does it take?`,8*c,facts(`A ${c}-character message`,[['characters',`${c}`],['bits','?']]),`${c} characters take ${c} bytes, and ${c} × 8 = ${8*c} bits.`);
 /* Image sizes: black and white at 1 bit per pixel, and colour at a stated number of bits per pixel. */
 const BW=[[8,8],[16,12],[10,8],[24,16],[32,20],[12,10],[40,30],[64,48],[20,20],[50,40],[16,16],[100,80]];
 BW.forEach(([w,h],i)=>{const bits=w*h;
  add('image',`A black-and-white image is ${w} pixels wide and ${h} pixels tall and stores 1 bit per pixel. How many bits does it take?`,bits,img(w,h,1),`${w} × ${h} = ${bits} pixels, and each takes 1 bit: ${bits} bits.`);
  if(bits%8===0&&i%3!==2)add('image',`A black-and-white image is ${w} pixels wide and ${h} pixels tall and stores 1 bit per pixel. How many bytes does it take?`,bits/8,img(w,h,1),`${w} × ${h} × 1 = ${bits} bits, and ${bits} ÷ 8 = ${bits/8} bytes.`);});
 const COL=[[10,10,8],[20,15,4],[16,16,24],[30,20,2],[40,25,8],[12,10,16],[50,50,24],[64,32,4],[25,20,16],[80,60,8],[100,50,24],[40,40,2]];
 COL.forEach(([w,h,b],i)=>{const bits=w*h*b,bytes=bits/8;
  add('image',`A colour image is ${w} pixels wide and ${h} pixels tall and stores ${b} bits per pixel. How many bits does it take?`,bits,img(w,h,b),`${w} × ${h} = ${w*h} pixels, and ${w*h} × ${b} = ${bits} bits.`);
  if(Number.isInteger(bytes)&&i%2===0)add('image',`A colour image is ${w} pixels wide and ${h} pixels tall and stores ${b} bits per pixel. How many bytes does it take?`,bytes,img(w,h,b),`${w} × ${h} × ${b} = ${bits} bits, and ${bits} ÷ 8 = ${bytes} bytes.`);
  if(bytes%500===0)add('image',`${KB} A colour image is ${w} pixels wide and ${h} pixels tall and stores ${b} bits per pixel. How many kilobytes does it take?`,bytes/1000,img(w,h,b),`${w} × ${h} × ${b} = ${bits} bits, which is ${bits} ÷ 8 = ${bytes} bytes, or ${bytes} ÷ 1000 = ${bytes/1000} kilobytes.`);});
}
};
