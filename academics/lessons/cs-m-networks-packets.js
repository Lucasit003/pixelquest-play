// Middle School topic (Grade 7, CSTA 2-NI-04): packets, hops and delay, in a simple model that every prompt
// names as a model. Every answer is whole-number arithmetic on the numbers in its own question here: a
// message of B bytes in packets of at most P bytes needs B ÷ P rounded up packets, every one full except
// perhaps the last; a hop is one move from one device to the next, so a route has one more hop than it has
// routers; a trip takes the sum of its hop times; a reply along the same route takes as long again; and when
// packets leave G milliseconds apart and never wait, the last one arrives (packets - 1) × G after the first
// leaves plus its own trip time. Real networks also add headers and have delays that vary; the lesson says so.
// Every network, device and message here is fictional.
const HOP='Each move from one device to the next is one hop.';
const SPLIT=P=>`In this model it is split into packets that each carry at most ${P} bytes of it, and every packet is full except perhaps the last.`;
const ceil=(a,b)=>Math.floor((a+b-1)/b);
const facts=(title,rows)=>({t:'setups',title,head:'Given',rows,cols:['Amount']});
const routeWords=({src,R,dst})=>`from the ${src} to ${R[0]}, ${R.slice(1).map(r=>`then to ${r}, `).join('')}then to the ${dst}`;
const stops=({src,R,dst})=>[['from',`the ${src}`],...R.map(r=>['via',r]),['to',`the ${dst}`]];
const routePic=(rt,extra=[])=>({t:'setups',title:'The route',head:'Stop',rows:[...stops(rt),...extra],cols:['Device']});
const hops=rt=>rt.R.length+1;
const lc=s=>s[0].toLowerCase()+s.slice(1);
const SRC=['laptop','phone','tablet','game console','school computer'],DST=['web server','game server','mail server','video server'],LET='ABCDEFGHJK';
/* Route r: 2 to 6 routers, with letters chosen by a step of 7 through ten letters, so they never repeat. */
const route=r=>({src:SRC[r%5],dst:DST[(r+r%3)%4],R:Array.from({length:2+(r%5)},(_,j)=>`Router ${LET[(r*3+j*7)%10]}`)});
const packetsLead=(B,P)=>`A fictional app sends a message of ${B} bytes. ${SPLIT(P)}`;
const NEED='How many packets does it need?',LAST=(w='message')=>`How many bytes of the ${w} are in the last packet?`;
const packetWhy=(B,P)=>{const n=ceil(B,P),r=B-(n-1)*P;return B%P?`${B} ÷ ${P} = ${Math.floor(B/P)} remainder ${B%P}: ${n-1} full packets carry ${(n-1)*P} bytes, and one more carries the last ${r}. That is ${n} packets, and the last holds ${r} byte${r===1?'':'s'}.`:`${B} ÷ ${P} = ${n} exactly, so ${n} full packets carry it all and the last one holds ${P} bytes like the rest.`;};
/* The lesson's examples and the three Try-its (kept out of the pool). */
const EXR={src:'laptop',R:['Router A','Router D','Router F'],dst:'web server'};
const TA=[2100,400],TB=[{src:'phone',R:['Router B'],dst:'game server'},{src:'phone',R:['Router C','Router F','Router G'],dst:'game server'}],TC=[4,3,5,6];
const twoWords=([a,b])=>`In a fictional network, route 1 goes ${routeWords(a)}, and route 2 goes ${routeWords(b)}. ${HOP}`;
const twoPic=([a,b])=>{const sa=stops(a),sb=stops(b),n=Math.max(sa.length,sb.length),pad=s=>[...s.slice(0,-1),...Array(n-s.length).fill(['via','']),s.at(-1)];const A=pad(sa),B=pad(sb);return {t:'setups',title:'Two routes',head:'Stop',rows:A.map((r,i)=>[r[0],r[1],B[i][1]]),cols:['Route 1','Route 2']};};
const streamWords=(n,g,h,d)=>`A fictional message is split into ${n} packets, and the sender sends one every ${g} milliseconds, starting at 0 milliseconds. Every packet makes the same ${h} hops, and in this model every hop takes ${d} milliseconds and no packet ever waits.`;
const STREAM='At how many milliseconds does the last packet arrive?';
const streamPic=(n,g,h,d)=>facts('A stream of packets',[['packets',`${n}`],['sent every',`${g} ms`],['hops each',`${h}`],['each hop',`${d} ms`]]);
export default {
id:'cs-m-networks-packets',subject:'cs',level:4,grade:7,standard:'CSTA 2-NI-04',
title:'Packets, hops and delay',
goal:'In a simple model of a network, count the packets a message needs and the size of the last one, count the hops along a route, and work out how long packets take.',
points:20,
skills:{packets:'Splitting into packets',hops:'Hops along a route',time:'Time with a delay per hop'},
steps:[
 {skill:'packets',say:'Data sent across a network is split into small pieces called packets. A real packet carries part of the message plus a header with addresses and a packet number, so the pieces can be put back in order at the other end. This topic uses a simple model in which each packet carries at most a stated number of bytes of the message.',eq:'message → packets → message',pic:facts('A message and its packets',[['message','2300 bytes'],['most per packet','500 bytes']])},
 {skill:'packets',say:'To count the packets, divide and round up. A 2300-byte message in packets of at most 500 bytes fills 4 packets with 2000 bytes, and the last 300 bytes need a fifth packet. So it takes 5 packets, and the last one carries only 300 bytes.',eq:'2300 = 4 × 500 + 300: 5 packets',pic:{t:'setups',title:'2300 bytes in packets of at most 500',head:'Packet',rows:[['1','500 bytes'],['2','500 bytes'],['3','500 bytes'],['4','500 bytes'],['5','300 bytes']],cols:['Carries']},
  check:{prompt:`Try it: ${lc(packetsLead(...TA))} ${NEED}`,answer:6,options:[6,5,7],hint:'5 packets carry 5 × 400 = 2000 bytes, and any bytes left over need one more packet.',pic:facts('The message and its packets',[['message',`${TA[0]} bytes`],['most per packet',`${TA[1]} bytes`]])}},
 {skill:'hops',say:'Routers pass each packet along towards where it is going. Each move from one device to the next is a hop. This route has 3 routers between the laptop and the web server, and 4 hops: hops are the links between devices, so there is always one more hop than there are routers.',eq:'3 routers: 4 hops',pic:routePic(EXR)},
 {skill:'hops',say:'Packets from one message do not have to follow the same route, and they can arrive out of order; the packet numbers let the receiver rebuild the message. To compare two routes, count the hops on each and take the difference.',eq:'hops = routers + 1',pic:twoPic(TB),
  check:{prompt:`Try it: ${lc(twoWords(TB))} How many more hops does route 2 make than route 1?`,answer:2,options:[2,1,3],hint:'Route 1 has 1 router and route 2 has 3. Each route has one more hop than routers.',pic:twoPic(TB)}},
 {skill:'time',say:'In this model every hop takes the same time. A packet that makes 4 hops of 5 milliseconds each takes 4 × 5 = 20 milliseconds, and a reply that comes straight back the same way takes as long again: 40 milliseconds there and back. Real delays change from moment to moment, so real times vary.',eq:'4 × 5 = 20 ms one way, 40 ms there and back',pic:routePic(EXR,[['each hop','5 ms']])},
 {skill:'time',say:'Packets do not wait for one another in this model. If 3 packets leave 2 milliseconds apart and each trip takes 20 milliseconds, the last packet leaves at 4 milliseconds and arrives at 4 + 20 = 24 milliseconds.',eq:'(3 - 1) × 2 + 20 = 24 ms',pic:streamPic(3,2,4,5),
  check:{prompt:`Try it: ${lc(streamWords(...TC))} ${STREAM}`,answer:39,options:[39,33,30],hint:'The last packet leaves at (4 - 1) × 3 milliseconds. Then add its trip of 5 hops.',pic:streamPic(...TC)}}],
progression:{requires:['cs-m-data-size'],operations:3,demand:'Divide and round up for packets and find the remainder for the last one, count links rather than devices on a route, and combine a per-hop delay with hops, a reply and a stream of packets.'},
items(add){
 const done=new Set([`${packetsLead(...TA)} ${NEED}`,`${twoWords(TB)} How many more hops does route 2 make than route 1?`,`${streamWords(...TC)} ${STREAM}`]);
 const A=(skill,p,answer,pic,why,accept)=>{if(done.has(p))return;done.add(p);add(skill,p,answer,pic,why,accept);};
 /* Packets: how many, and how full the last one is. Some messages divide exactly, so the last packet is full. */
 const MSG=[[2300,500],[1800,400],[950,200],[4100,1000],[3000,500],[720,100],[1250,250],[5600,1500],[880,300],[2001,1000],[1600,400],[6400,1400],[475,150],[3333,1000],[1000,250],[2750,600],[9100,1500],[640,128],[1500,1500],[4999,700]];
 MSG.forEach(([B,P],i)=>{const n=ceil(B,P),pic=facts('The message and its packets',[['message',`${B} bytes`],['most per packet',`${P} bytes`]]),lead=packetsLead(B,P);
  A('packets',`${lead} ${NEED}`,n,pic,packetWhy(B,P));
  if(i%4!==3)A('packets',`${lead} ${LAST()}`,B-(n-1)*P,pic,packetWhy(B,P));});
 for(const [k,P] of [[3,500],[7,1500],[12,1000],[5,800],[2,300],[9,2000]]){const B=k*1000,n=ceil(B,P),pre=`A fictional photo is ${k} kilobytes, where 1 kilobyte = 1000 bytes. ${SPLIT(P)}`,pic=facts('The photo and its packets',[['photo',`${k} kilobytes`],['most per packet',`${P} bytes`]]);
  A('packets',`${pre} ${NEED}`,n,pic,`${k} kilobytes is ${B} bytes. ${packetWhy(B,P)}`);
  A('packets',`${pre} ${LAST('photo')}`,B-(n-1)*P,pic,`${k} kilobytes is ${B} bytes. ${packetWhy(B,P)}`);}
 /* Hops: along one route, from a router on it, and the difference between two routes. */
 for(let r=0;r<12;r++){const rt=route(r),h=hops(rt),lead=`In a fictional network, a packet travels ${routeWords(rt)}. ${HOP}`,pic=routePic(rt),chain=[`the ${rt.src}`,...rt.R,`the ${rt.dst}`].join(', ');
  A('hops',`${lead} How many hops does it make?`,h,pic,`${rt.R.length} router${rt.R.length===1?'':'s'} between the ${rt.src} and the ${rt.dst} make ${h} hops: ${chain}.`);
  const k=1+((r*2)%rt.R.length),dev=rt.R[k-1];
  A('hops',`${lead} Which device has the packet after ${k} hop${k===1?'':'s'}?`,dev,pic,`Hop 1 reaches ${rt.R[0]}${k>1?`, and each later hop moves one device further, so hop ${k} reaches ${dev}`:''}.`,[dev.split(' ')[1]]);
  if(r%3!==2){const j=(r+1)%rt.R.length,from=rt.R[j],left=h-1-j;
   A('hops',`${lead} How many hops does it make from ${from} to the ${rt.dst}?`,left,pic,`From ${from} the packet still passes ${rt.R.slice(j+1).join(', ')||'no other router'} before the ${rt.dst}: ${left} hop${left===1?'':'s'}.`);}}
 for(let r=0;r<10;r++){const a=route(r),b0=route(r+5),b={...b0,src:a.src,dst:a.dst};if(hops(a)===hops(b))b.R=[...b.R,`Router ${LET[(r*3+9)%10]}`].filter((x,i,s)=>s.indexOf(x)===i);
  if(hops(a)===hops(b))continue;const [lo,hi]=hops(a)<hops(b)?[1,2]:[2,1],diff=Math.abs(hops(a)-hops(b));
  A('hops',`${twoWords([a,b])} How many more hops does route ${hi} make than route ${lo}?`,diff,twoPic([a,b]),`Route 1 has ${a.R.length} routers, so ${hops(a)} hops, and route 2 has ${b.R.length} routers, so ${hops(b)} hops. The difference is ${diff}.`);}
 /* Time: one way, there and back, different first and last hops, and a stream of packets. */
 for(let r=0;r<10;r++){const rt=route(r+2),h=hops(rt),d=[2,3,4,5,6,8,10,12,15,7][r],lead=`In a fictional network, a packet travels ${routeWords(rt)}. ${HOP}`;
  A('time',`${lead} In this model every hop takes ${d} milliseconds. How many milliseconds does the trip take?`,h*d,routePic(rt,[['each hop',`${d} ms`]]),`${h} hops × ${d} milliseconds = ${h*d} milliseconds.`);
  const d2=[4,6,3,9,5,2,7,8,11,10][r];
  A('time',`${lead} In this model every hop takes ${d2} milliseconds, and the ${rt.dst} replies at once along the same route in reverse. How many milliseconds after the packet leaves does the reply arrive?`,2*h*d2,routePic(rt,[['each hop',`${d2} ms`]]),`One way is ${h} × ${d2} = ${h*d2} milliseconds, and the reply takes as long again: ${h*d2} + ${h*d2} = ${2*h*d2} milliseconds.`);}
 for(let r=0;r<10;r++){const rt=route(r+1),h=hops(rt),a=[2,1,3,2,4,1,5,2,3,6][r],b=[6,8,5,10,7,12,4,9,15,3][r];
  A('time',`In a fictional network, a packet travels ${routeWords(rt)}. ${HOP} In this model the first and last hops take ${a} milliseconds each, and every hop from one router to another takes ${b} milliseconds. How many milliseconds does the trip take?`,2*a+(h-2)*b,routePic(rt,[['first and last hop',`${a} ms each`],['router to router',`${b} ms each`]]),`${h} hops: the first and the last take ${a} each, and the other ${h-2} go from router to router at ${b} each. ${a} + ${a} + ${h-2} × ${b} = ${2*a+(h-2)*b} milliseconds.`);}
 for(let r=0;r<10;r++){const n=[3,5,4,6,2,8,10,5,7,4][r],g=[2,1,4,3,5,2,1,6,3,10][r],h=[4,3,6,5,3,4,7,2,5,3][r],d=[5,8,3,4,10,6,2,9,4,7][r],at=(n-1)*g+h*d;
  A('time',`${streamWords(n,g,h,d)} ${STREAM}`,at,streamPic(n,g,h,d),`The last packet leaves at (${n} - 1) × ${g} = ${(n-1)*g} milliseconds, and its trip takes ${h} × ${d} = ${h*d} milliseconds, so it arrives at ${(n-1)*g} + ${h*d} = ${at} milliseconds.`);}
}
};
