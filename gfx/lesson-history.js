import {drawTownDetail} from './town-art.js';
import {drawSprite,drawProp,propSize} from './lesson-sprites.js';
/* The four recorded objects are pack art (Rule 0): ERW village props for the bench, noticeboard and planter,
   Shikashi books for the book stall. Town art is only the fallback where images are absent (tests). */
const PROP={bench:'bench',board:'noticeboard',planter:'planter'};
const names=['bench','noticeboard','book stall','planter'],kinds=['bench','board','books','planter'];
const state=n=>n===1?'present':n===0?'absent':'not recorded';
export function villageRecords(c,{records,set}){
 const h=220/records.length;
 c.fillStyle='#25382f';c.font='15px sans-serif';c.textAlign='center';c.fillText('Fictional Oakhaven'+(set?' • set '+set:'')+' • drawn from the written records',320,20);
 records.forEach((r,row)=>{const top=33+row*h;c.fillStyle='#e2e8d8';c.fillRect(12,top,616,h-4);c.fillStyle='#263c30';c.font='13px sans-serif';c.textAlign='left';c.fillText(r.label,22,top+17);
 r.values.forEach((v,i)=>{const x=255+i*101,y=top+h-23;c.fillStyle='#7a8f62';c.fillRect(x-32,y-5,64,8);if(v===1){const pn=PROP[kinds[i]],ps=pn&&propSize(pn),sc=ps?Math.max(1,Math.min(2,Math.floor((h-22)/ps.h),Math.floor(90/ps.w))):1;
  if(kinds[i]==='books'?(drawSprite(c,'book-red',x-9,y-18,32)&&drawSprite(c,'book-blue',x+9,y-18,32)):(pn&&drawProp(c,pn,x,y,sc))){}else{c.save();c.translate(x,y);const scale=Math.min(2.4,h/52);c.scale(scale,scale);drawTownDetail(c,{x:0,y:0,kind:kinds[i]});c.restore();}}else{c.strokeStyle='#536751';c.strokeRect(x-20,y-33,40,29);c.fillStyle='#25382f';c.font='19px sans-serif';c.textAlign='center';c.fillText(v===-1?'?':'—',x,y-11);}c.fillStyle='#25382f';c.font='11px sans-serif';c.textAlign='center';c.fillText(names[i],x,y+16);});});
 c.fillStyle='#25382f';c.font='12px sans-serif';c.textAlign='center';c.fillText('Object = present    — = absent    ? = not recorded',320,271);
}
export const describeHistory=q=>'Fictional Oakhaven picture drawn from the written records'+(q.set?', set '+q.set:'')+'. '+q.records.map(r=>r.label+': '+r.values.map((v,i)=>names[i]+' '+state(v)).join(', ')).join('; ');
/* chain: {people:[first, ..., writer], event, solve}. Who told whom, left to right. Only a solved step labels who saw it. */
/* Round 3 (17 Oct): every label is measured. The title wraps onto two lines instead of running off both edges, and names,
   "told" and the roles use the double-size bitmap font (16px) wherever they fit their box or gap, so they stay readable
   when a short window shrinks the picture. */
export function chain(c,{people,event,solve},p){
 const n=people.length,w=Math.min(150,560/n-20),gap=(600-n*w)/Math.max(1,n-1),y=110,W=(t,f)=>{c.font=f;return c.measureText(String(t)).width;},F='16px sans-serif';
 const title=`How the story of ${event} reached the page`;let lines=[title];if(W(title,F)>600){const ws=title.split(' ');let best=null;for(let k=1;k<ws.length;k++){const a=ws.slice(0,k).join(' '),b=ws.slice(k).join(' '),m=Math.max(W(a,F),W(b,F));if(!best||m<best.m)best={a,b,m};}lines=[best.a,best.b];}
 const tf=lines.some(t=>W(t,F)>600)?'15px sans-serif':F,role=i=>n===1?'saw it and wrote it down':i===0?'saw it':i===n-1?'wrote it down':'passed it on';
 const nf=people.every(t=>W(t,F)<=w-10)?F:'15px sans-serif',of=W('told',F)<=gap-6?F:'11px sans-serif',rf=people.every((_,i)=>{const lw=W(role(i),F);return lw<=600&&(n===1||lw<=w+gap-12);})?F:'12px sans-serif';
 c.fillStyle='#25382f';c.font=tf;c.textAlign='center';c.textBaseline='middle';lines.forEach((t,k)=>c.fillText(t,320,lines.length>1?20+k*28:28));
 people.forEach((name,i)=>{const x=20+i*(w+gap);if(i/n>p)return;c.fillStyle=solve&&i===0?'#f3dc8f':'#e2e8d8';c.fillRect(x,y,w,56);c.strokeStyle='#536751';c.lineWidth=2;c.strokeRect(x,y,w,56);
  c.fillStyle='#25382f';c.font=nf;c.fillText(name,x+w/2,y+28);
  if(solve){c.font=rf;const lw=c.measureText(role(i)).width;c.fillText(role(i),Math.max(lw/2+12,Math.min(628-lw/2,x+w/2)),y+78);}
  if(i<n-1){const ax=x+w+4,bx=x+w+gap-4;c.beginPath();c.moveTo(ax,y+28);c.lineTo(bx,y+28);c.stroke();c.beginPath();c.moveTo(bx,y+28);c.lineTo(bx-8,y+22);c.lineTo(bx-8,y+34);c.closePath();c.fillStyle='#536751';c.fill();c.fillStyle='#25382f';c.font=of;c.fillText('told',(ax+bx)/2,y+(of===F?8:14));}});
}
export const describeChain=q=>`A chain showing how the story of ${q.event} was passed along: ${q.people.join(' told ')}`+(q.solve?`; ${q.people[0]} saw it and ${q.people[q.people.length-1]} wrote it down`:'');
