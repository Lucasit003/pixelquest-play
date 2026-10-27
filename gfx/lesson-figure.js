// High School geometry pictures: `figure`, named points joined into polygons, segments and lines, with
// angle marks, right-angle boxes, equal-length ticks, parallel arrows, circles and arcs, on a blank board
// or a coordinate grid. Everything is placed from the lesson's own coordinates at one scale for x and y,
// so a right angle looks right and a ratio drawn is the ratio stated. Drawn at progress p (0..1, owned
// by the caller): shapes trace in order through p = 0.7, then marks and measurements appear.
//
// {t:'figure', title, grid:{x:[a,b],y:[c,d]} (optional), view:[x0,x1,y0,y1] (optional; else fitted to the points),
//  pts:{A:[x,y],...}, hide:'names not to label', dots:'names to dot' (default: every point),
//  polys:[{v:'ABC',col,fill,name}], segs:[{v:'AB',col,dash,ticks,arrows,label,side,line,ray,w}] (side: 1 or -1 puts the label on that side; line runs both ways
//  to the edge, ray from A through B; w is the stroke width), circles:[{c:'O',r|through,col}],
//  arcs:[{c:'O',from:'A',to:'B',col,label,w}] (counterclockwise from A to B; w 1.5 for a compass mark), angles:[{v:'ABC',label,right,arcs,r,col,dist}] (r: arc radius in px; dist: how far out the label sits),
//  place:{A:135} (a point's label direction in degrees, counterclockwise from east),
//  notes:[{at:[x,y],text,col}]}
import {fitTitle} from './lesson-board.js';
const INK='#2a1a10',SOFT='#6a5a46',GRID='#d8c79f',AXIS='#4a3a2a',COL=['#3f6fa0','#b4602e','#4f8a3c','#8a4f9e','#c8372d'];
const FILL=['rgba(63,111,160,0.14)','rgba(180,96,46,0.14)','rgba(79,138,60,0.14)','rgba(138,79,158,0.14)','rgba(200,55,45,0.12)'];
const clamp=v=>Math.max(0,Math.min(1,v));
/* halo: a parchment patch behind the label, so a label that crosses a line or the grid stays readable */
const text=(c,s,x,y,size=14,{bold=false,align='center',color=INK,halo=false}={})=>{c.font=`${bold?'bold ':''}${size}px sans-serif`;c.textAlign=align;c.textBaseline='middle';
 if(halo){const w=c.measureText(String(s)).width+6,left=align==='center'?x-w/2:align==='right'?x-w+3:x-3;c.fillStyle='rgba(241,229,203,0.88)';c.fillRect(left,y-size*0.62,w,size*1.24);}
 c.fillStyle=color;c.fillText(String(s),x,y);};
/* how far a label's centre must sit from a point or line, along direction (nx, ny), to clear it */
const clear=(c,s,size,nx,ny,gap=6)=>{c.font=`bold ${size}px sans-serif`;const w=c.measureText(String(s)).width;return gap+Math.abs(nx)*w/2+Math.abs(ny)*size*0.6;};
const num=v=>Number.isInteger(v)?`${v}`:`${Math.round(v*100)/100}`;
const stepFor=range=>[1,2,5,10,20,25,50,100].find(s=>range/s<=12)||Math.ceil(range/10);
/* point names: a letter, then any primes or digits (A, P′, B1) */
const ids=v=>String(v||'').match(/[A-Za-z][′'\u2080-\u20890-9]*/g)||[];
const col=(k,i=0)=>typeof k==='string'?k:COL[(k??i)%COL.length];
/* A polyline drawn up to fraction f of its length. */
function stroke(c,P,f){if(f<=0||P.length<2)return;let total=0;for(let i=1;i<P.length;i++)total+=Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]);
 let left=total*clamp(f);c.beginPath();c.moveTo(...P[0]);for(let i=1;i<P.length&&left>0;i++){const d=Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]),u=Math.min(1,left/d);c.lineTo(P[i-1][0]+(P[i][0]-P[i-1][0])*u,P[i-1][1]+(P[i][1]-P[i-1][1])*u);left-=d;}c.stroke();}

export const figure=(c,q,p)=>{
 const pts=q.pts||{},names=Object.keys(pts),L=44,R=596,T=q.title?56:38,B=q.grid?240:248;
 /* the world window: the grid, the view, or the points and circles with a margin */
 let x0,x1,y0,y1;
 if(q.grid)[x0,x1,y0,y1]=[...q.grid.x,...q.grid.y];
 else if(q.view)[x0,x1,y0,y1]=q.view;
 else{const xs=[],ys=[];for(const n of names){xs.push(pts[n][0]);ys.push(pts[n][1]);}
  for(const k of q.circles||[]){const [cx,cy]=pts[k.c],r=k.r??Math.hypot(pts[k.through][0]-cx,pts[k.through][1]-cy);xs.push(cx-r,cx+r);ys.push(cy-r,cy+r);}
  x0=Math.min(...xs);x1=Math.max(...xs);y0=Math.min(...ys);y1=Math.max(...ys);const m=Math.max(x1-x0,y1-y0)*0.12||1;x0-=m;x1+=m;y0-=m;y1+=m;}
 const s=Math.min((R-L)/(x1-x0),(B-T)/(y1-y0)),ox=(L+R)/2-(x0+x1)/2*s,oy=(T+B)/2+(y0+y1)/2*s;
 const X=v=>ox+v*s,Y=v=>oy-v*s,P=n=>[X(pts[n][0]),Y(pts[n][1])];
 if(q.title)fitTitle(c,q.title,34);
 if(q.grid){const sx=stepFor(x1-x0),sy=stepFor(y1-y0),every=(st)=>[1,2,5,10,20,50].map(k=>k*st).find(k=>k*s>=24)||st,lx=every(sx),ly=every(sy);c.lineWidth=1;c.strokeStyle=GRID;
  for(let v=Math.ceil(x0/sx)*sx;v<=x1+1e-9;v+=sx){c.beginPath();c.moveTo(X(v),Y(y0));c.lineTo(X(v),Y(y1));c.stroke();}
  for(let v=Math.ceil(y0/sy)*sy;v<=y1+1e-9;v+=sy){c.beginPath();c.moveTo(X(x0),Y(v));c.lineTo(X(x1),Y(v));c.stroke();}
  const ax=x0<=0&&x1>=0?X(0):X(x0),ay=y0<=0&&y1>=0?Y(0):Y(y0);c.strokeStyle=AXIS;c.lineWidth=2;c.beginPath();c.moveTo(X(x0),ay);c.lineTo(X(x1),ay);c.moveTo(ax,Y(y0));c.lineTo(ax,Y(y1));c.stroke();
  /* numbers only as often as there is room for them: at least 24 px apart */
  for(let v=Math.ceil(x0/lx)*lx;v<=x1+1e-9;v+=lx)if(Math.abs(v)>1e-9)text(c,num(v),X(v),ay+11,11,{color:SOFT});
  for(let v=Math.ceil(y0/ly)*ly;v<=y1+1e-9;v+=ly)if(Math.abs(v)>1e-9)text(c,num(v),ax-6,Y(v),11,{align:'right',color:SOFT});}
 /* the order shapes trace in, sharing p from 0 to 0.7 */
 const shapes=[...(q.polys||[]).map(o=>['poly',o]),...(q.segs||[]).map(o=>['seg',o]),...(q.circles||[]).map(o=>['circle',o]),...(q.arcs||[]).map(o=>['arc',o])];
 const share=k=>clamp((p/0.7-k/shapes.length)*shapes.length),late=clamp((p-0.7)/0.2);
 const cx=names.length?names.reduce((a,n)=>a+P(n)[0],0)/names.length:320,cy=names.length?names.reduce((a,n)=>a+P(n)[1],0)/names.length:140;
 /* labels sit away from the middle of the shape they belong to: the first polygon holding them, else the whole figure */
 const home=list=>{const o=(q.polys||[]).find(o=>list.every(n=>ids(o.v).includes(n)));if(!o)return [cx,cy];const V=ids(o.v).map(P);return [V.reduce((a,v)=>a+v[0],0)/V.length,V.reduce((a,v)=>a+v[1],0)/V.length];};
 const away=([x,y],d,[hx,hy]=[cx,cy])=>{const dx=x-hx,dy=y-hy,h=Math.hypot(dx,dy);return h<1?[x+d*0.7,y-d*0.7]:[x+dx/h*d,y+dy/h*d];};
 const full=(a,b)=>{/* a line through a and b, out to the edges of the board */const dx=b[0]-a[0],dy=b[1]-a[1],h=Math.hypot(dx,dy)||1,k=900/h;return [[a[0]-dx*k,a[1]-dy*k],[b[0]+dx*k,b[1]+dy*k]];};
 c.save();c.beginPath();c.rect(28,T-6,584,B-T+20);c.clip?.();c.lineCap='round';c.lineJoin='round';
 shapes.forEach(([kind,o],k)=>{const f=share(k);if(f<=0)return;
  /* on a grid, shapes stay inside the grid */if(q.grid){c.save();c.beginPath();c.rect(X(x0),Y(y1),X(x1)-X(x0),Y(y0)-Y(y1));c.clip?.();}
  const color=col(o.col,k);c.strokeStyle=color;c.lineWidth=o.w??(kind==='arc'?5:3);c.setLineDash?.(o.dash?[8,6]:[]);
  if(kind==='poly'){const V=ids(o.v).map(P);if(o.fill!==false&&f>=1){c.fillStyle=FILL[(o.col??k)%FILL.length];c.beginPath();c.moveTo(...V[0]);V.slice(1).forEach(v=>c.lineTo(...v));c.closePath();c.fill();}stroke(c,[...V,V[0]],f);}
  if(kind==='seg'){const [a,b]=ids(o.v).map(P);stroke(c,o.line?full(a,b):o.ray?[a,full(a,b)[1]]:[a,b],f);}
  if(kind==='circle'){const [px,py]=P(o.c),r=(o.r??Math.hypot(pts[o.through][0]-pts[o.c][0],pts[o.through][1]-pts[o.c][1]))*s;c.beginPath();c.arc(px,py,r,0,Math.PI*2*f);c.stroke();}
  if(kind==='arc'){const [px,py]=P(o.c),A=P(o.from),Bp=P(o.to),r=Math.hypot(A[0]-px,A[1]-py),a0=Math.atan2(A[1]-py,A[0]-px);let a1=Math.atan2(Bp[1]-py,Bp[0]-px);
   /* counterclockwise on paper is clockwise on the canvas, whose y runs down */while(a1>a0)a1-=Math.PI*2;c.beginPath();c.arc(px,py,r,a0,a0+(a1-a0)*f,true);c.stroke();}
  if(q.grid)c.restore();});
 c.setLineDash?.([]);
 /* marks and measurements */
 if(late>0){c.globalAlpha=late;
  (q.segs||[]).forEach((o,k)=>{const [a,b]=ids(o.v).map(P),mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,h=Math.hypot(b[0]-a[0],b[1]-a[1])||1,ux=(b[0]-a[0])/h,uy=(b[1]-a[1])/h;c.strokeStyle=col(o.col,(q.polys||[]).length+k);c.lineWidth=2;
   for(let i=0;i<(o.ticks||0);i++){const off=(i-(o.ticks-1)/2)*6;c.beginPath();c.moveTo(mx+ux*off-uy*7,my+uy*off+ux*7);c.lineTo(mx+ux*off+uy*7,my+uy*off-ux*7);c.stroke();}
   for(let i=0;i<(o.arrows||0);i++){const off=(i-(o.arrows-1)/2)*8+(o.ticks?18:0);c.beginPath();c.moveTo(mx+ux*(off-6)-uy*6,my+uy*(off-6)+ux*6);c.lineTo(mx+ux*off,my+uy*off);c.lineTo(mx+ux*(off-6)+uy*6,my+uy*(off-6)-ux*6);c.stroke();}
   if(o.label!=null){const n1=[-uy,ux],[hx,hy]=home(ids(o.v)),side=o.side??((n1[0]*(mx-hx)+n1[1]*(my-hy))>=0?1:-1);const d=clear(c,o.label,14,n1[0],n1[1]);text(c,o.label,mx+n1[0]*side*d,my+n1[1]*side*d,14,{bold:true,halo:true,color:col(o.col,(q.polys||[]).length+k)});}});
  (q.polys||[]).forEach(o=>{if(!o.label)return;const V=ids(o.v).map(P);text(c,o.label,V.reduce((a,v)=>a+v[0],0)/V.length,V.reduce((a,v)=>a+v[1],0)/V.length,13,{bold:true,color:SOFT});});
  (q.arcs||[]).forEach((o,k)=>{if(o.label==null)return;const [px,py]=P(o.c),A=P(o.from),Bp=P(o.to),r=Math.hypot(A[0]-px,A[1]-py),a0=Math.atan2(A[1]-py,A[0]-px);let a1=Math.atan2(Bp[1]-py,Bp[0]-px);while(a1>a0)a1-=Math.PI*2;const m=(a0+a1)/2;
   const d=r+clear(c,o.label,14,Math.cos(m),Math.sin(m));text(c,o.label,px+Math.cos(m)*d,py+Math.sin(m)*d,14,{bold:true,halo:true,color:col(o.col,shapes.length-(q.arcs.length-k))});});
  (q.angles||[]).forEach((o,k)=>{const [a,v,b]=ids(o.v).map(P),ta=Math.atan2(a[1]-v[1],a[0]-v[0]),tb=Math.atan2(b[1]-v[1],b[0]-v[0]);let d=tb-ta;while(d>Math.PI)d-=Math.PI*2;while(d<-Math.PI)d+=Math.PI*2;
   c.strokeStyle=col(o.col??'#c8372d');c.lineWidth=2;
   if(o.right){const r=12,u=[Math.cos(ta),Math.sin(ta)],w=[Math.cos(tb),Math.sin(tb)];c.beginPath();c.moveTo(v[0]+u[0]*r,v[1]+u[1]*r);c.lineTo(v[0]+(u[0]+w[0])*r,v[1]+(u[1]+w[1])*r);c.lineTo(v[0]+w[0]*r,v[1]+w[1]*r);c.stroke();}
   else for(let i=0;i<(o.arcs||1);i++){c.beginPath();c.arc(v[0],v[1],(o.r||20)+i*5,ta,ta+d,d<0);c.stroke();}
   if(o.label!=null){const m=ta+d/2,r=o.dist??(o.right?30:Math.max((o.r||20)+14,Math.min(52,16/Math.max(0.2,Math.abs(Math.sin(d/2))))));text(c,o.label,v[0]+Math.cos(m)*r,v[1]+Math.sin(m)*r,14,{bold:true,halo:true,color:col(o.col??'#c8372d')});}});
  for(const n of q.notes||[])text(c,n.text,X(n.at[0]),Y(n.at[1]),13,{bold:true,halo:true,color:col(n.col??SOFT)});
  c.globalAlpha=1;}
 /* points and their names, from the start so the narration can name them */
 const dots=q.dots==null?names:ids(q.dots),hide=ids(q.hide);
 for(const n of names){const v=P(n);if(dots.includes(n)){c.fillStyle=INK;c.beginPath();c.arc(v[0],v[1],3.5,0,Math.PI*2);c.fill();}
  if(!hide.includes(n)){const pl=q.place?.[n],[lx,ly]=pl!=null?[v[0]+Math.cos(pl*Math.PI/180)*16,v[1]-Math.sin(pl*Math.PI/180)*16]:away(v,15,home([n]));text(c,n,lx,ly,15,{bold:true,halo:true});}}
 c.restore();
};
const listed=a=>a.map((s,i)=>`${i===0?'':i===a.length-1?' and ':', '}${s}`).join('');
export const describeFigure=q=>{const shape=v=>ids(v).length===3?`triangle ${v}`:ids(v).length===4?`quadrilateral ${v}`:`polygon ${v}`,parts=[
 ...(q.polys||[]).map(o=>o.name||shape(o.v)),...(q.segs||[]).map(o=>`${o.line?'line':'segment'} ${o.v}${o.label!=null?` marked ${o.label}`:''}`),
 ...(q.circles||[]).map(o=>`a circle centred at ${o.c}`),...(q.arcs||[]).map(o=>`arc ${o.from}${o.to}${o.label!=null?` marked ${o.label}`:''}`),
 ...(q.angles||[]).map(o=>o.right?`a right angle at ${ids(o.v)[1]}`:`angle ${o.v}${o.label!=null?` marked ${o.label}`:''}`),...(q.notes||[]).map(n=>n.text)];
 return `${q.title?q.title+': ':''}${q.grid?'a coordinate grid with ':'a figure with '}${parts.length?listed(parts):'labelled points'}`;};
