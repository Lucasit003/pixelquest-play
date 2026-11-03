// High School statistics pictures: `chart`, a box plot, a histogram or a scatter plot, drawn by code from the lesson's
// own numbers at progress p (0..1, owned by the caller): boxes and whiskers draw out from the median, bars grow, points
// appear one by one and then the line of fit. `area:[left,right]` (pixels) puts two charts side by side in one picture.
//
// {t:'chart', kind:'box', title, axis:[min,max], five:[min,q1,median,q3,max], values?, outliers?, fences?:[lo,hi], labels?}
// {t:'chart', kind:'hist', title, bins:[[lo,hi,count],...], xlabel?}
// {t:'chart', kind:'numline', title, axis:[min,max], rows:[...]} (see numline below)
// {t:'chart', kind:'scatter', title, x:[min,max], y:[min,max], points:[[x,y],...], line?:{m,b,label}, residuals?:[[x,y]],
//  xlabel?, ylabel?}
import {fitTitle} from './lesson-board.js';
const INK='#2a1a10',SOFT='#6a5a46',GRID='#d8c79f',AXIS='#4a3a2a',BLUE='#3f6fa0',ORANGE='#b4602e',GREEN='#4f8a3c',RED='#c8372d';
const clamp=v=>Math.max(0,Math.min(1,v));
const text=(c,s,x,y,size=13,{bold=false,align='center',color=INK}={})=>{c.fillStyle=color;c.font=`${bold?'bold ':''}${size}px sans-serif`;c.textAlign=align;c.textBaseline='middle';c.fillText(String(s),x,y);};
const num=v=>Number.isInteger(v)?`${v}`:`${Math.round(v*100)/100}`;
const stepFor=range=>[1,2,5,10,20,25,50,100,200,500,1000].find(s=>range/s<=10)||Math.ceil(range/10);
/* improve20-r11f-nov2 #3: every k-th tick or bin edge is numbered (k from 1, 2, 5, 10) so the numbers, measured at the size drawn (a fitted quiz
   picture's labels grow to 12 CSS px), keep 8 units apart; every tick stays where it is. The axis title sits a row lower (B+34) so it clears
   the grown numbers, and crowded category labels alternate between two rows. */
const every=(c,vals,stepU)=>{c.font='11px sans-serif';const need=Math.max(0,...vals.map(v=>c.measureText(num(v)).width))+8;return [1,2,5,10].find(k=>k*stepU>=need)||10;};
const everyY=(c,stepU)=>{c.font='11px sans-serif';const need=c.measureText('00').width*.7+6;return [1,2,5,10].find(k=>k*stepU>=need)||10;};
const crowded=(c,labels,w)=>{c.font='12px sans-serif';return labels.some(l=>c.measureText(String(l)).width+6>w);};
const line=(c,x0,y0,x1,y1,col=AXIS,w=2,dash)=>{c.strokeStyle=col;c.lineWidth=w;c.setLineDash?.(dash?[6,5]:[]);c.beginPath();c.moveTo(x0,y0);c.lineTo(x1,y1);c.stroke();c.setLineDash?.([]);};

/* a number line from a to b across [L, R] at height y, with round tick numbers below it */
function axis(c,a,b,L,R,y){const X=v=>L+(v-a)/(b-a)*(R-L),st=stepFor(b-a),vs=[];for(let v=Math.ceil(a/st)*st;v<=b+1e-9;v+=st)vs.push(v);const k=every(c,vs,st*(R-L)/(b-a));line(c,L,y,R,y);
 for(const v of vs){line(c,X(v),y-4,X(v),y+4,AXIS,1.5);if(Math.round(v/st)%k===0)text(c,num(v),X(v),y+14,11,{color:SOFT});}return X;}

function box(c,q,p,L,R,T){const [a,b]=q.axis,yA=232,X=axis(c,a,b,L,R,yA),[mn,q1,md,q3,mx]=q.five,yb=T+(yA-T)*0.55,h=Math.min(46,(yA-T)*0.5),grow=clamp(p/0.6);
 /* everything opens out from the median */
 const at=v=>X(md)+(X(v)-X(md))*grow;
 c.fillStyle='rgba(63,111,160,0.16)';c.fillRect(at(q1),yb-h/2,at(q3)-at(q1),h);c.strokeStyle=BLUE;c.lineWidth=2.5;c.strokeRect(at(q1),yb-h/2,at(q3)-at(q1),h);
 line(c,at(mn),yb,at(q1),yb,BLUE,2.5);line(c,at(q3),yb,at(mx),yb,BLUE,2.5);line(c,at(mn),yb-h/4,at(mn),yb+h/4,BLUE,2.5);line(c,at(mx),yb-h/4,at(mx),yb+h/4,BLUE,2.5);line(c,X(md),yb-h/2,X(md),yb+h/2,ORANGE,3.5);
 if(p>=0.6){c.globalAlpha=clamp((p-0.6)/0.25);
  if(q.labels!==false){/* improve20-r11f-nov2 #3: the two label rows sit a grown label's height apart (14 units at lesson size) */c.font='bold 12px sans-serif';const st=Math.max(14,c.measureText('M').width*1.6);[[mn,'min'],[q1,'Q1'],[md,'median'],[q3,'Q3'],[mx,'max']].forEach(([v,n],i)=>text(c,`${n} ${num(v)}`,X(v),yb-h/2-12-(i%2)*st,12,{bold:true,color:n==='median'?ORANGE:BLUE}));}
  for(const v of q.values||[])/* the data themselves, as a dot strip under the box */{c.fillStyle=SOFT;c.beginPath();c.arc(X(v),yb+h/2+12,3.5,0,Math.PI*2);c.fill();}
  for(const v of q.outliers||[]){c.strokeStyle=RED;c.lineWidth=2;c.beginPath();c.arc(X(v),yb,5,0,Math.PI*2);c.stroke();text(c,num(v),X(v),yb-16,12,{bold:true,color:RED});}
  for(const v of q.fences||[]){line(c,X(v),T+4,X(v),yA-6,RED,1.5,true);text(c,`fence ${num(v)}`,X(v),T-2,11,{bold:true,color:RED});}
  c.globalAlpha=1;}}

function hist(c,q,p,L,R,T){const bins=q.bins,lo=bins[0][0],hi=bins.at(-1)[1],top=Math.max(...bins.map(b=>b[2])),ymax=Math.ceil(top/stepFor(top))*stepFor(top)||1,B=226,Lx=L+26;
 const X=v=>Lx+(v-lo)/(hi-lo)*(R-Lx),Y=v=>B-v/ymax*(B-T-8),sy=stepFor(ymax);
 {const k=everyY(c,Y(0)-Y(sy));for(let v=sy;v<=ymax+1e-9;v+=sy){line(c,Lx,Y(v),R,Y(v),GRID,1);if(Math.round(v/sy)%k===0)text(c,num(v),Lx-6,Y(v),11,{align:'right',color:SOFT});}}
 bins.forEach(([a,b,n],i)=>{const g=clamp(p/0.8*bins.length-i);if(g<=0)return;const y=B-(B-Y(n))*g;c.fillStyle='rgba(63,111,160,0.55)';c.fillRect(X(a),y,X(b)-X(a),B-y);c.strokeStyle=BLUE;c.lineWidth=2;c.strokeRect(X(a),y,X(b)-X(a),B-y);
  if(g>=1)text(c,n,(X(a)+X(b))/2,y-9,12,{bold:true});});
 line(c,Lx,B,R,B);line(c,Lx,B,Lx,T);
 {const es=[...new Set(bins.flatMap(b=>[b[0],b[1]]))],k=every(c,es,Math.min(...bins.map(b=>X(b[1])-X(b[0]))));es.forEach((v,i)=>{if(i%k===0)text(c,num(v),X(v),B+12,11,{color:SOFT});});}
 if(q.xlabel)text(c,q.xlabel,(Lx+R)/2,B+34,12,{color:SOFT});}

function scatter(c,q,p,L,R,T){const [x0,x1]=q.x,[y0,y1]=q.y,B=q.xlabel?222:232,Lx=L+30,X=v=>Lx+(v-x0)/(x1-x0)*(R-Lx),Y=v=>B-(v-y0)/(y1-y0)*(B-T),sx=stepFor(x1-x0),sy=stepFor(y1-y0);
 let corner=false;{const vs=[];for(let v=Math.ceil(x0/sx)*sx;v<=x1+1e-9;v+=sx)vs.push(v);const k=every(c,vs,sx*(R-Lx)/(x1-x0));for(const v of vs){line(c,X(v),T,X(v),B,GRID,1);if(Math.round(v/sx)%k===0){text(c,num(v),X(v),B+12,11,{color:SOFT});if(Math.abs(v-x0)<1e-9)corner=true;}}}
 /* picframe-nov2 #2 (R11F's science-5 "10" against "0"): when the x axis is numbered at its corner and the numbers grow (b, from the small font's 7-unit "0"), the y axis's bottom number sits just above the axis line instead of across it, midway between the next y number and the corner's x number */
 {c.font='11px sans-serif';const gb=Math.max(1,c.measureText('0').width/7),k=everyY(c,Y(0)-Y(sy)),lift=corner&&gb>1.15?Math.max(0,Y(y0)-((Y(y0+k*sy)+5*gb)+(B+12-5*gb))/2):0;for(let v=Math.ceil(y0/sy)*sy;v<=y1+1e-9;v+=sy){line(c,Lx,Y(v),R,Y(v),GRID,1);if(Math.round(v/sy)%k===0&&!(v===y0&&x0===0&&y0===0))text(c,num(v),Lx-6,Y(v)-(Math.abs(v-y0)<1e-9?lift:0),11,{align:'right',color:SOFT});}}
 line(c,Lx,B,R,B);line(c,Lx,B,Lx,T);
 if(q.xlabel)text(c,q.xlabel,(Lx+R)/2,B+34,12,{color:SOFT});
 if(q.ylabel){c.save();c.translate(L+6,(T+B)/2);c.rotate?.(-Math.PI/2);text(c,q.ylabel,0,0,12,{color:SOFT});c.restore();}
 const pts=q.points||[],shown=Math.floor(clamp(p/0.6)*pts.length+1e-9);
 pts.slice(0,shown).forEach(([x,y])=>{c.fillStyle=BLUE;c.beginPath();c.arc(X(x),Y(y),4.5,0,Math.PI*2);c.fill();});
 if(q.line&&p>0.6){const f=clamp((p-0.6)/0.25),{m,b}=q.line,xe=x0+(x1-x0)*f;c.save();c.beginPath();c.rect(Lx,T,R-Lx,B-T);c.clip?.();line(c,X(x0),Y(m*x0+b),X(xe),Y(m*xe+b),ORANGE,3);c.restore();
  if(f>=1&&q.line.label){const xl=x0+(x1-x0)*0.82;text(c,q.line.label,X(xl),Math.max(T+8,Y(m*xl+b)-16),13,{bold:true,color:ORANGE});}}
 if(q.line&&p>=0.9)for(const [x,y] of q.residuals||[]){const yp=q.line.m*x+q.line.b;line(c,X(x),Y(y),X(x),Y(yp),RED,2,true);c.strokeStyle=RED;c.lineWidth=2;c.beginPath();c.arc(X(x),Y(y),6.5,0,Math.PI*2);c.stroke();
  text(c,`residual ${num(y-yp)}`,X(x)+(X(x)>R-90?-12:12),(Y(y)+Y(yp))/2,12,{bold:true,align:X(x)>R-90?'right':'left',color:RED});}}

/* bars: labelled bars for categories, negative values below the axis: bars:[{label,value,col?}], unit?:'$', show values */
/* improve20-r14c-nov3 #6 (picframe2 follow-up): with a negative bar the names sit a row lower, and crowded names alternate onto a second row
   below that, so the second row ("deaths" in science-5's rates chart) ran off the bottom of the picture. Then the bars end BARS_LIFT units
   higher, which keeps that row inside it. */
const BARS_LIFT=26;
function catbars(c,q,p,L,R,T){const bs=q.bars||[],vals=bs.map(b=>b.value),hi=Math.max(0,...vals),lo=Math.min(0,...vals),span=(hi-lo)||1,w=(R-L-20)/bs.length,two=crowded(c,bs.map(b=>b.label),w),B=222-(two&&lo<0?BARS_LIFT:0),Y=v=>B-(v-lo)/span*(B-T-14),zero=Y(0),cols=[BLUE,ORANGE,GREEN,'#8a4f9e',RED];
 line(c,L,zero,R,zero);
 /* picframe2-nov2 #4: a negative bar's value sits under the bar's end; when that would touch the bar's name ("net migration" against "-3" on a
    phone) it sits just above the zero line in the bar's own column instead */
 c.font='bold 12px sans-serif';const hh=5*c.measureText('0').width/8,nameY=B+(lo<0?28:14);
 bs.forEach((b,i)=>{const g=clamp(p/0.8*bs.length-i);const x=L+10+i*w+w*0.15,bw=w*0.7,top=zero+(Y(b.value)-zero)*g;c.fillStyle=typeof b.col==='string'?b.col:cols[(b.col??i)%cols.length];c.globalAlpha=0.75;c.fillRect(x,Math.min(zero,top),bw,Math.abs(top-zero));c.globalAlpha=1;
  text(c,b.label,x+bw/2,nameY+(two&&i%2?22:0),12,{color:SOFT});if(g>=1)text(c,`${q.unit||''}${b.value<0?'-':''}${(q.unit?Math.abs(b.value):Math.abs(b.value)).toLocaleString('en-US')}${q.suffix||''}`,x+bw/2,b.value<0?(top+11+2*hh+2>nameY+(two&&i%2?22:0)?zero-10:top+11):top-10,12,{bold:true});});}

/* numline: one or more number lines, each with an inequality drawn on it: a ray from a dot, or a span between two dots.
   A closed dot is included (≤, ≥), an open dot is not (<, >). rows:[{label, ray:{at,dir:'left'|'right',closed}} or
   {label, span:{from,to,closedFrom,closedTo}} or {label, rays:[ray, ray]}, ints?:true marks the whole numbers inside] */
function numline(c,q,p,L,R,T){const [a,b]=q.axis,rows=q.rows||[],gap=(240-T)/rows.length;
 rows.forEach((r,i)=>{const y=T+gap*(i+0.62),Lx=L+(r.label?120:0),X=axis(c,a,b,Lx,R,y),f=clamp(p/0.7),col=[BLUE,ORANGE,GREEN][i%3];
  if(r.label)text(c,r.label,L+4,y,15,{bold:true,align:'left',color:col});
  const dot=(v,closed)=>{c.beginPath();c.arc(X(v),y,6.5,0,Math.PI*2);c.fillStyle=closed?col:'#f1e5cb';c.fill();c.strokeStyle=col;c.lineWidth=2.5;c.stroke();};
  const ray=({at,dir,closed})=>{const end=dir==='right'?b:a,to=at+(end-at)*f;line(c,X(at),y,X(to),y,col,5);if(f>=1){const s=dir==='right'?1:-1;c.fillStyle=col;c.beginPath();c.moveTo(X(end)+s*8,y);c.lineTo(X(end)-s*4,y-7);c.lineTo(X(end)-s*4,y+7);c.closePath();c.fill();}dot(at,closed);};
  for(const rr of [r.ray,...(r.rays||[])].filter(Boolean))ray(rr);
  if(r.span){const {from,to,closedFrom,closedTo}=r.span;line(c,X(from),y,X(from+(to-from)*f),y,col,5);dot(from,closedFrom);if(f>=1)dot(to,closedTo);
   if(r.ints&&p>=0.9)for(let v=Math.ceil(from);v<=to;v++){if((v===from&&!closedFrom)||(v===to&&!closedTo))continue;text(c,'•',X(v),y-14,16,{bold:true,color:RED});}}});}

/* picframe2-nov2 #4: a full-width chart title too wide for the 16 px line (it dropped to the small size, 8-11 CSS px on a phone) wraps onto two
   lines (lesson-board fitTitle, the plot's rule) and the chart starts lower */
export const chart=(c,q,p)=>{const [L,R]=q.area||[40,600],wide=!!q.title&&!q.area&&(c.font='bold 16px sans-serif',c.measureText(String(q.title)).width>600),tl=wide&&(c.font='bold 15px sans-serif',c.measureText(String(q.title)).width>600),T=q.title?(tl?70:58):36;
 if(q.title){if(wide)fitTitle(c,q.title,tl?32:34);else text(c,q.title,(L+R)/2,34,q.area?14:16,{bold:true});}
 (q.kind==='box'?box:q.kind==='hist'?hist:q.kind==='numline'?numline:q.kind==='bars'?catbars:scatter)(c,q,p,L,R,T);};

const listed=a=>a.map((s,i)=>`${i===0?'':i===a.length-1?' and ':', '}${s}`).join('');
export const describeChart=q=>`${q.title?q.title+': ':''}`+(q.kind==='box'?`a box plot on a number line from ${q.axis[0]} to ${q.axis[1]}, minimum ${q.five[0]}, first quartile ${q.five[1]}, median ${q.five[2]}, third quartile ${q.five[3]}, maximum ${q.five[4]}${q.outliers?.length?`, with ${listed(q.outliers.map(String))} marked as outliers`:''}`:
 q.kind==='bars'?`a bar chart: ${listed((q.bars||[]).map(b=>`${b.label} ${b.value}`))}`:
 q.kind==='numline'?`number lines from ${q.axis[0]} to ${q.axis[1]} showing ${listed((q.rows||[]).map(r=>r.label||'an inequality'))}`:
 q.kind==='hist'?`a histogram with ${q.bins.length} bars: ${listed(q.bins.map(([a,b,n])=>`${n} from ${a} to ${b}`))}`:
 `a scatter plot of ${q.points?.length||0} points${q.line?`, with the line ${q.line.label||'of fit'}`:''}`);
