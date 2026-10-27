// High School lesson pictures (docs/HIGH_SCHOOL_SPEC.md §5): `plot`, a coordinate grid with lines
// y = m·x + b, parabolas y = a(x - h)² + k, graphs made of straight pieces and labelled points. Drawn by code from the question's own
// numbers at progress p (0..1, owned by the caller; lines and curves draw from left to right), so the
// maths in a picture is always right. describe() names what is drawn and never states an answer.
const INK='#2a1a10',SOFT='#6a5a46',GRID='#d8c79f',AXIS='#4a3a2a',COL=['#3f6fa0','#b4602e','#4f8a3c','#8a4f9e'];
const clamp=v=>Math.max(0,Math.min(1,v));
const AREA=[['rgba(63,111,160,0.22)','rgba(63,111,160,0.6)'],['rgba(180,96,46,0.22)','rgba(180,96,46,0.6)'],['rgba(79,138,60,0.22)','rgba(79,138,60,0.6)'],['rgba(138,79,158,0.2)','rgba(138,79,158,0.6)']];
const text=(c,s,x,y,size=14,{bold=false,align='center',color=INK}={})=>{c.fillStyle=color;c.font=`${bold?'bold ':''}${size}px sans-serif`;c.textAlign=align;c.textBaseline='middle';c.fillText(String(s),x,y);};
const num=v=>Number.isInteger(v)?`${v}`:`${Math.round(v*100)/100}`;
/* A round grid step that gives about 4 to 12 lines across a range. */
const stepFor=range=>[1,2,5,10,20,25,50,100,200,500,1000].find(s=>range/s<=12)||Math.ceil(range/10);

/* plot: {title, x:[min,max], y:[min,max], lines:[{m,b,label,dash}], curves:[{a,h,k,label}], paths:[{pts:[[x,y],...],label}],
   points:[{x,y,label}], areas:[{pts:[[x,y],...],col}], vlines:[{x,label,dash}]}. An area is a filled polygon (an area under a curve, a Riemann
   rectangle, a half-plane), drawn under everything else and faded in with p. A path joins its points with straight pieces and is drawn only between its first and last x.
   The board inside the parchment border is 28..612 x 28..252; the grid keeps 8 px clear of it. */
export const plot=(c,{title,x=[-10,10],y=[-10,10],lines=[],curves=[],paths=[],points=[],areas=[],vlines=[]},p)=>{
 const [x0v,x1v]=x,[y0v,y1v]=y,L=70,R=596,T=title?54:40,Bm=236;
 const X=v=>L+(v-x0v)/(x1v-x0v)*(R-L),Y=v=>Bm-(v-y0v)/(y1v-y0v)*(Bm-T);
 if(title)fitTitle(c,title,34);
 const sx=stepFor(x1v-x0v),sy=stepFor(y1v-y0v);
 c.lineWidth=1;c.strokeStyle=GRID;
 for(let v=Math.ceil(x0v/sx)*sx;v<=x1v+1e-9;v+=sx){c.beginPath();c.moveTo(X(v),T);c.lineTo(X(v),Bm);c.stroke();}
 for(let v=Math.ceil(y0v/sy)*sy;v<=y1v+1e-9;v+=sy){c.beginPath();c.moveTo(L,Y(v));c.lineTo(R,Y(v));c.stroke();}
 /* axes through zero when zero is in range, else along the low edge */
 const ax=x0v<=0&&x1v>=0?X(0):L,ay=y0v<=0&&y1v>=0?Y(0):Bm;
 c.strokeStyle=AXIS;c.lineWidth=2;c.beginPath();c.moveTo(L,ay);c.lineTo(R,ay);c.moveTo(ax,T);c.lineTo(ax,Bm);c.stroke();
 for(let v=Math.ceil(x0v/sx)*sx;v<=x1v+1e-9;v+=sx)if(v!==0||ay===Bm)text(c,num(v),X(v),Math.min(Bm+10,ay+12),11,{color:SOFT});
 for(let v=Math.ceil(y0v/sy)*sy;v<=y1v+1e-9;v+=sy)if(v!==0||ax===L)text(c,num(v),Math.max(L-6,ax-6),Y(v),11,{align:'right',color:SOFT});
 text(c,'x',R+8,ay,12,{bold:true,color:SOFT});text(c,'y',ax,T-9,12,{bold:true,color:SOFT});
 /* areas, clipped to the grid, faded in under the graphs */
 if(areas.length){c.save();c.beginPath();c.rect(L,T,R-L,Bm-T);c.clip?.();c.globalAlpha=clamp(p*1.5);
  areas.forEach((a,i)=>{const col=AREA[(a.col??i)%AREA.length];c.fillStyle=col[0];c.strokeStyle=col[1];c.lineWidth=1.5;c.beginPath();a.pts.forEach(([u,v],j)=>j?c.lineTo(X(u),Y(v)):c.moveTo(X(u),Y(v)));c.closePath();c.fill();if(a.edge!==false)c.stroke();});
  c.globalAlpha=1;c.restore();}
 /* 17 Oct: label boxes already taken (point dots and their labels), so a graph's label is placed where it overlaps none and stays inside the grid */
 const W=(s,z=13)=>{c.font=`bold ${z}px sans-serif`;return c.measureText(String(s)).width;},taken=[],hit=(b)=>taken.some(o=>b[0]<o[2]&&b[2]>o[0]&&b[1]<o[3]&&b[3]>o[1]);
 /* does a graph pass through a label box? (the label's own graph and every line and curve) */
 const pathF=P=>v=>{for(let j=0;j+1<P.length;j++){const [a,ya]=P[j],[b,yb]=P[j+1];if(v>=a-1e-9&&v<=b+1e-9)return ya+(yb-ya)*(v-a)/(b-a);}return NaN;};
 const fns=[...lines.map(l=>v=>l.m*v+l.b),...curves.map(q=>v=>q.a*(v-q.h)**2+q.k),...paths.map(q=>pathF(q.pts)),...(y0v<=0&&y1v>=0?[()=>0]:[])],cross=(bx,own)=>[own,...fns].filter(Boolean).some(g=>{for(let px=bx[0];px<=bx[2];px+=3){const py=Y(g(x0v+(px-L)/(R-L)*(x1v-x0v)));if(py>=bx[1]-3&&py<=bx[3]+3)return true;}return false;});
 const inGrid=b=>b[0]>=L-4&&b[2]<=R+4&&b[1]>=T-4&&b[3]<=Bm+4;
 /* point labels: the first corner (up-right, up-left, down-right, down-left) clear of every graph and earlier label, inside the grid */
 taken.push([ax-34,T,ax+2,Bm],[L,ay+3,R,ay+20]);
 const ptAt=new Map();for(const pt of points){if(pt.x<x0v||pt.x>x1v||pt.y<y0v||pt.y>y1v)continue;const px=X(pt.x),py=Y(pt.y);taken.push([px-8,py-8,px+8,py+8]);}
 for(const pt of points){if(!pt.label||pt.x<x0v||pt.x>x1v||pt.y<y0v||pt.y>y1v)continue;const px=X(pt.x),py=Y(pt.y),w=W(pt.label);let first=null,pick=null;
  for(const [sx,sy] of [[1,-1],[-1,-1],[1,1],[-1,1]]){const x=sx>0?px+10:px-10-w,y=py+sy*14,b=[x,y-10,x+w,y+10];first=first||[x,y,b];if(inGrid(b)&&!hit(b)&&!cross(b)){pick=[x,y,b];break;}}
  pick=pick||first;taken.push(pick[2]);ptAt.set(pt,pick);}
 /* lines and curves, clipped to the grid, drawn left to right with p */
 const xEnd=x0v+(x1v-x0v)*clamp(p<=0?0.02:p);
 const trace=(f,col,label,k,dash,lastX=x1v)=>{c.save();c.beginPath();c.rect(L,T,R-L,Bm-T);c.clip?.();c.strokeStyle=col;c.lineWidth=3;c.setLineDash?.(dash?[9,7]:[]);c.beginPath();
  const n=240;let started=false;for(let i=0;i<=n;i++){const xv=x0v+(xEnd-x0v)*i/n,yv=f(xv);if(!Number.isFinite(yv))continue;const px=X(xv),py=Y(yv);if(!started){c.moveTo(px,py);started=true;}else c.lineTo(px,py);}
  c.stroke();c.restore();
  if(label&&p>=1){/* label near the right end of the graph (a path may stop short of the grid's edge), inside the grid, clear of the taken boxes */const w=W(label),at=fr=>{const xv=Math.min(x1v-(x1v-x0v)*fr,lastX-(x1v-x0v)*0.05),yv=Math.max(y0v,Math.min(y1v,f(xv)));return [Math.max(L+w/2+2,Math.min(R-w/2-2,X(xv))),Y(yv)];};
   let best=null,first=null;pick:for(const dy of [-14,14,-30,30,-48,48])for(const fr of [0.06+0.1*k,0.16+0.1*k,0.28,0.4,0.52,0.64,0.76]){const [cx,py]=at(fr),cy=Math.max(T+10,Math.min(Bm-10,py+dy)),bx=[cx-w/2-2,cy-10,cx+w/2+2,cy+10];first=first||[cx,cy,bx];if(!hit(bx)&&!cross(bx,f)){best=[cx,cy,bx];break pick;}}
   /* nothing clear near the graph: the first clear spot in the grid, scanning from the top right */
   if(!best)scan:for(let cy=T+12;cy<=Bm-12;cy+=12)for(let cx=R-w/2-4;cx>=L+w/2+4;cx-=12){const bx=[cx-w/2-2,cy-10,cx+w/2+2,cy+10];if(!hit(bx)&&!cross(bx,f)){best=[cx,cy,bx];break scan;}}
   best=best||first;taken.push(best[2]);text(c,label,best[0],best[1],13,{bold:true,color:col});}};
 lines.forEach((l,i)=>trace(v=>l.m*v+l.b,COL[i%COL.length],l.label,i,l.dash));
 curves.forEach((q,i)=>trace(v=>q.a*(v-q.h)**2+q.k,COL[(lines.length+i)%COL.length],q.label,lines.length+i));
 paths.forEach((q,i)=>{const P=q.pts,k=lines.length+curves.length+i;trace(pathF(P),COL[k%COL.length],q.label,k,q.dash,P.at(-1)[0]);});
 /* vertical lines (a money supply, x = a), drawn upward with p */
 vlines.forEach((v,i)=>{if(v.x<x0v||v.x>x1v)return;const col=COL[(lines.length+curves.length+paths.length+i)%COL.length];c.save();c.strokeStyle=col;c.lineWidth=3;c.setLineDash?.(v.dash?[9,7]:[]);c.beginPath();c.moveTo(X(v.x),Bm);c.lineTo(X(v.x),Bm-(Bm-T)*clamp(p<=0?0.02:p));c.stroke();c.restore();
  if(v.label&&p>=1)text(c,v.label,X(v.x)+6,T+10,13,{bold:true,align:'left',color:col});});
 for(const pt of points){if(pt.x<x0v||pt.x>x1v||pt.y<y0v||pt.y>y1v)continue;c.fillStyle='#c8372d';c.beginPath();c.arc(X(pt.x),Y(pt.y),6,0,Math.PI*2);c.fill();c.strokeStyle=INK;c.lineWidth=1.5;c.stroke();
  const at=ptAt.get(pt);if(pt.label&&at)text(c,pt.label,at[0],at[1],13,{bold:true,align:'left'});}
};

import {figure,describeFigure} from './lesson-figure.js';
import {chart,describeChart} from './lesson-chart.js';
import {board,describeBoard,fitTitle} from './lesson-board.js';
import {art,describeArt} from './lesson-illus.js';
export const HIGH_DRAW={plot,figure,chart,board,art};
const lineSaid=l=>l.label||'a straight line';
export const describeHigh=q=>q.t==='figure'?describeFigure(q):q.t==='chart'?describeChart(q):q.t==='board'?describeBoard(q):q.t==='art'?describeArt(q):q.t==='plot'?`${q.title?q.title+': ':''}a coordinate grid, x from ${q.x?.[0]??-10} to ${q.x?.[1]??10}`+
 [...(q.areas||[]).map(()=>'a shaded region'),...(q.vlines||[]).map(v=>v.label||`the vertical line x = ${v.x}`),...(q.lines||[]).map(lineSaid),...(q.curves||[]).map(k=>k.label||'a parabola'),...(q.paths||[]).map(k=>k.label||'a graph made of straight pieces'),...(q.points||[]).map(p=>p.label?`the point ${p.label}`:'a marked point')].map((s,i,a)=>`${i===0?', showing ':i===a.length-1?' and ':', '}${s}`).join(''):'a picture';
