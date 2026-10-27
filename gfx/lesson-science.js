// Science investigation pictures: two experiment setups side by side, and repeated trials as bars.
// They show only the givens -- nothing marks the changed row or prints a middle value unless the step asks (solve).
const ink='#1d2a3a',line='#a9ad9f';
const text=(c,s,x,y,size=14,bold)=>{c.fillStyle=ink;c.font=`${bold?'bold ':''}${size}px sans-serif`;c.textAlign='center';c.textBaseline='middle';c.fillText(String(s),x,y);};
/* text that fits a w x h cell: the font shrinks to 12 px, then the words break over two lines (down to 9 px) */
const fitText=(c,s,x,y,w,h,size=14,bold)=>{s=String(s);const font=n=>`${bold?'bold ':''}${n}px sans-serif`,fits=(t,n)=>{c.font=font(n);return (c.measureText?.(t).width??0)<=w-12;};
 let n=size;while(n>12&&!fits(s,n))n--;if(fits(s,n)||!s.includes(' ')||h<26){while(n>9&&!fits(s,n))n--;return text(c,s,x,y,n,bold);}
 const words=s.split(' ');let best=null;for(let i=1;i<words.length;i++){const a=words.slice(0,i).join(' '),b=words.slice(i).join(' ');c.font=font(10);const m=Math.max(c.measureText(a).width,c.measureText(b).width);if(!best||m<best.m)best={a,b,m};}
 n=Math.min(size,Math.floor((h-4)/2.3));while(n>9&&!(fits(best.a,n)&&fits(best.b,n)))n--;text(c,best.a,x,y-n*0.6,n,bold);text(c,best.b,x,y+n*0.6,n,bold);};
/* Oct 14 playtest: table text was ~10px on a laptop once the 640px canvas was scaled into the lesson; it now starts at 20px (shrinking to fit as before). */
/* setups: {title, rows:[[thing, A value, B value]], head (first heading, default Thing), cols (headings after it; default Setup A, Setup B), mark:thing (solve only)}. */
export const setups=(c,{title='Two setups',rows,head='Thing',cols=['Setup A','Setup B'],mark,solve},p)=>{
 const h=Math.min(44,190/(rows.length+1)),y0=48,w0=200,wc=400/cols.length;text(c,title,320,22,22);
 [[head,...cols],...rows].forEach((row,i)=>row.slice(0,cols.length+1).forEach((s,j)=>{const x=j===0?20:20+w0+(j-1)*wc,w=j===0?w0:wc,y=y0+i*h;
  if(i&&solve&&mark===row[0]&&p>=0.5){c.fillStyle='#f3dc8f';c.fillRect(x,y,w,h);}
  c.strokeStyle=line;c.lineWidth=1;c.strokeRect(x,y,w,h);fitText(c,s,x+w/2,y+h/2,w,h,Math.min(i?20:18,Math.floor(h*0.48)),!i);}));
};
/* trials: {what, unit, names:['A','B'], values:[[t1,t2,t3],[t1,t2,t3]], mid (solve only: outline each middle trial)}. */
const middleIndex=v=>{const o=v.map((n,i)=>[n,i]).sort((a,b)=>a[0]-b[0]||a[1]-b[1]);return o[1][1];};
export const trials=(c,{what='Result',unit='cm',names=['A','B'],values,mid,solve},p)=>{
 const max=Math.max(10,...values.flat()),top=Math.ceil(max/20)*20,y=222,x0=70;text(c,`${what} (${unit}), three trials each`,320,20,17);
 for(let i=0;i<=4;i++){const yy=y-i*42;c.strokeStyle='#d0d3c8';c.lineWidth=1;c.beginPath();c.moveTo(x0,yy);c.lineTo(620,yy);c.stroke();text(c,top*i/4,40,yy,12);}
 values.forEach((v,g)=>{const gx=x0+30+g*280,m=middleIndex(v);text(c,names[g],gx+105,262,17,true);
  v.forEach((n,i)=>{const x=gx+i*72,hh=168*n/top*p;c.fillStyle=g?'#c98a4a':'#5f8fb8';c.fillRect(x,y-hh,52,hh);c.strokeStyle=ink;c.lineWidth=mid&&solve&&i===m&&p>=0.6?4:1;c.strokeRect(x,y-hh,52,hh);text(c,n,x+26,y-hh-12,14);text(c,`trial ${i+1}`,x+26,238,11);});});
};
/* shadow: {lamp:'east'|'north'|'south'|'west', solve}. Seen from above on a compass: the stick at the centre, the lamp on
   its side of the circle, and (solve) the stick's shadow growing out the opposite way. Unsolved, the shadow's side is a "?". */
const SDIR={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]},SOPP={north:'south',east:'west',south:'north',west:'east'};
const tag=(c,s,x,y,size=17)=>{c.font=`bold ${size}px sans-serif`;const w=(c.measureText?.(s).width??s.length*size*.6)+12;c.fillStyle='#fbf3dc';c.fillRect(x-w/2,y-size*.75,w,size*1.5);c.strokeStyle=line;c.lineWidth=1;c.strokeRect(x-w/2,y-size*.75,w,size*1.5);text(c,s,x,y,size,true);};
export const shadow=(c,{lamp='east',solve},p)=>{const cx=320,cy=140,R=104,[lx,ly]=SDIR[lamp],[sx,sy]=SDIR[SOPP[lamp]];
 c.strokeStyle=ink;c.lineWidth=2;c.beginPath();c.arc(cx,cy,R,0,Math.PI*2);c.stroke();
 for(const [d,[dx,dy]] of Object.entries(SDIR))text(c,d.toUpperCase(),cx+dx*(R+(dx?42:16)),cy+dy*(R+(dy?15:0)),17,true);
 const Lx=cx+lx*R*.68,Ly=cy+ly*R*.68;c.strokeStyle='#d9a521';c.lineWidth=2;c.setLineDash?.([5,5]);c.beginPath();c.moveTo(Lx,Ly);c.lineTo(cx,cy);c.stroke();c.setLineDash?.([]);
 for(let i=0;i<8;i++){const a=i*Math.PI/4;c.beginPath();c.moveTo(Lx+Math.cos(a)*15,Ly+Math.sin(a)*15);c.lineTo(Lx+Math.cos(a)*22,Ly+Math.sin(a)*22);c.stroke();}
 c.fillStyle='#f2c94c';c.beginPath();c.arc(Lx,Ly,12,0,Math.PI*2);c.fill();c.strokeStyle=ink;c.lineWidth=1.5;c.stroke();
 const along=t=>[cx+sx*R*.78*t,cy+sy*R*.78*t],q=solve?Math.min(1,Math.max(0,p*1.4)):0;
 if(q>0){const [ex,ey]=along(q);c.strokeStyle='rgba(40,44,52,.78)';c.lineWidth=16;c.lineCap='round';c.beginPath();c.moveTo(cx,cy);c.lineTo(ex,ey);c.stroke();c.lineCap='butt';}
 c.fillStyle='#7a4b22';c.beginPath();c.arc(cx,cy,8,0,Math.PI*2);c.fill();c.strokeStyle=ink;c.lineWidth=1.5;c.stroke();
 const side=(x,y,d)=>lx?[x,y+d]:[x+d*1.6,y];
 tag(c,'lamp',...side(Lx,Ly,lx?34:0).map((v,i)=>i===0&&!lx?v+52:v));tag(c,'stick',...(lx?[cx-lx*26,cy+30]:[cx+48,cy]));
 const [tx,ty]=along(.62);if(solve&&q>=1)tag(c,'shadow',...(sx?[tx,ty-30]:[tx+58,ty]));};
/* halving (Halving the search): {left:[100,50,...,1], found}. One bar per guess, its length the most numbers still left
   after that guess when you always guess the middle, so each bar is about half the one above; found adds the guess that hits. */
export const halving=(c,{left,found},p)=>{const rows=left.length+(found?1:0),h=Math.min(34,264/rows),x0=170,W=380,top=Math.max(...left);
 left.forEach((n,i)=>{const y=8+i*h,w=Math.max(4,W*n/top*Math.min(1,Math.max(0,p*rows-i)));c.fillStyle=i?'#5f8fb8':'#8a9bb0';c.fillRect(x0,y+3,w,h-8);c.strokeStyle=ink;c.lineWidth=1;c.strokeRect(x0,y+3,w,h-8);
  c.fillStyle=ink;c.font='bold 17px sans-serif';c.textAlign='right';c.textBaseline='middle';c.fillText(i?`after guess ${i}`:'start',x0-12,y+h/2);c.textAlign='left';c.fillText(`${n} left`,x0+Math.max(w,4)+10,y+h/2);});
 if(found){const y=8+left.length*h;c.fillStyle=ink;c.font='bold 17px sans-serif';c.textAlign='right';c.textBaseline='middle';c.fillText(`guess ${left.length}`,x0-12,y+h/2);c.textAlign='left';c.fillText('finds it',x0,y+h/2);}};
export const SCI_DRAW={setups,trials,shadow,halving};
export const describeScience=q=>q.t==='halving'?`numbers still left after each middle guess: ${q.left.join(', ')}${q.found?`; guess ${q.left.length} finds it`:''}`:q.t==='shadow'?`a compass seen from above with an upright stick at the centre and a lamp to its ${q.lamp||'east'}${q.solve?`; the stick's shadow points ${SOPP[q.lamp||'east']}`:''}`:q.t==='setups'?`${q.title||'Two setups'}: `+q.rows.map(r=>`${r[0]}: `+(q.cols||['A','B']).map((h,k)=>`${h} ${r[k+1]}`).join(', ')).join('; '):
 `${q.what||'Result'} in ${q.unit||'cm'}: `+q.values.map((v,g)=>`${(q.names||['A','B'])[g]} trials ${v.join(', ')}`).join('; ');
