// Middle School lesson pictures (docs/MIDDLE_SCHOOL_SPEC.md §5): ratio tapes, a number line with
// negatives, fraction pieces fitting into a length, an equation as a pan balance, and a dot plot.
// Each is drawn by code from the question's own numbers at progress p (0..1, owned by the caller),
// so the maths in a picture is always right. Totals, distances and answers appear only with
// `solve` (teaching steps and hints); quiz pictures never carry them, and describe() never gives them.
const INK='#2a1a10',SOFT='#6a5a46',GRID='#c9b48a',A='#5f8fb8',B='#c98a4a',C='#7aa35a',PAPER2='#fffaf0',HI='#f3dc8f';
const clamp=v=>Math.max(0,Math.min(1,v));
const text=(c,s,x,y,size=14,{bold=false,align='center',color=INK}={})=>{c.fillStyle=color;c.font=`${bold?'bold ':''}${size}px sans-serif`;c.textAlign=align;c.textBaseline='middle';c.fillText(String(s),x,y);};
const frac=([n,d])=>d===1?`${n}`:`${n}/${d}`;

/* tape: {rows:[{label,n}], groups (copies of the base ratio shown), title, solve}. Each batch is one column
   with the same width in every row, so the batches line up; with solve, each row's total is written at its end. */
export const tape=(c,{rows,groups=1,title,solve},p)=>{
 if(title)text(c,title,320,22,16,{bold:true});
 const most=Math.max(...rows.map(r=>r.n)),gap=12,x0=150,avail=420,w=Math.min(40,(avail-gap*(groups-1))/(most*groups)),gw=most*w+gap,h=36,vgap=(220-rows.length*h)/(rows.length+1);
 const shown=Math.max(1,Math.ceil(clamp(p)*groups-1e-9));
 for(let g=1;g<shown;g++){const x=x0+g*gw-gap/2;c.strokeStyle=GRID;c.lineWidth=1;c.setLineDash?.([4,4]);c.beginPath();c.moveTo(x,48);c.lineTo(x,250);c.stroke();c.setLineDash?.([]);}
 rows.forEach((r,i)=>{const y=40+vgap*(i+1)+h*i;text(c,r.label,x0-14,y+h/2,15,{bold:true,align:'right'});
  for(let g=0;g<shown;g++)for(let k=0;k<r.n;k++){const x=x0+g*gw+k*w;c.fillStyle=i%3===0?A:i%3===1?B:C;c.fillRect(x,y,w-2,h);c.strokeStyle=INK;c.lineWidth=1;c.strokeRect(x,y,w-2,h);}
  if(solve&&p>=1)text(c,`${r.n*groups}`,x0+groups*gw-gap+24,y+h/2,17,{bold:true});});
 if(groups>1&&p>=1)for(let g=0;g<groups;g++)text(c,`batch ${g+1}`,x0+g*gw+most*w/2,262,11,{color:SOFT});
};

/* numline: {min,max,marks:[{v,label}],span:[a,b] (a bracket between two marks; its length only with solve),title}. */
export const numline=(c,{min,max,marks=[],span,title,solve},p)=>{
 if(title)text(c,title,320,22,16,{bold:true});
 const x0=40,x1=600,y=170,X=v=>x0+(v-min)/(max-min)*(x1-x0),range=max-min,step=range<=24?1:range<=60?5:10,lab=range<=24?(range<=16?1:2):step;
 c.strokeStyle=INK;c.lineWidth=3;c.beginPath();c.moveTo(x0-12,y);c.lineTo(x1+12,y);c.stroke();
 c.beginPath();c.moveTo(x0-12,y);c.lineTo(x0-2,y-6);c.moveTo(x0-12,y);c.lineTo(x0-2,y+6);c.moveTo(x1+12,y);c.lineTo(x1+2,y-6);c.moveTo(x1+12,y);c.lineTo(x1+2,y+6);c.stroke();
 for(let v=Math.ceil(min/step)*step;v<=max;v+=step){const zero=v===0;c.lineWidth=zero?3:1.5;c.beginPath();c.moveTo(X(v),y-(zero?12:8));c.lineTo(X(v),y+(zero?12:8));c.stroke();
  if(v%lab===0||zero)text(c,v,X(v),y+24,zero?15:13,{bold:zero});}
 const shown=marks.slice(0,Math.max(1,Math.ceil(clamp(p)*marks.length-1e-9)));
 shown.forEach((m,i)=>{c.fillStyle=i%2?B:A;c.beginPath();c.arc(X(m.v),y,8,0,Math.PI*2);c.fill();c.strokeStyle=INK;c.lineWidth=2;c.stroke();text(c,m.label??m.v,X(m.v),y-26-(i%2)*20,14,{bold:true});});
 if(span&&p>=0.6){const [a,b]=span,ya=y+50;c.strokeStyle=solve?'#3f7d3a':SOFT;c.lineWidth=2;c.beginPath();c.moveTo(X(a),ya-8);c.lineTo(X(a),ya);c.lineTo(X(b),ya);c.lineTo(X(b),ya-8);c.stroke();
  if(solve&&p>=1)text(c,a===0||b===0?`${Math.abs(b-a)} from zero`:`${Math.abs(b-a)} apart`,(X(a)+X(b))/2,ya+16,15,{bold:true,color:'#2f5a25'});}
};

/* fit: {total:[n,d] the length, piece:[n,d] one piece, unit, solve}. Draws the length in wholes and lays pieces
   along it; with solve the pieces are numbered. share:k instead of piece cuts the length into k equal parts. */
export const fit=(c,{total,piece,share,unit='',title,solve},p)=>{
 if(title)text(c,title,320,22,16,{bold:true});
 const L=total[0]/total[1],wholes=Math.max(1,Math.ceil(L-1e-9)),x0=50,x1=590,y=110,h=50,X=v=>x0+v/wholes*(x1-x0);
 c.fillStyle=PAPER2;c.fillRect(x0,y,x1-x0,h);c.strokeStyle=GRID;c.lineWidth=1;c.strokeRect(x0,y,x1-x0,h);
 for(let w=0;w<=wholes;w++){c.strokeStyle=INK;c.lineWidth=2;c.beginPath();c.moveTo(X(w),y+h);c.lineTo(X(w),y+h+12);c.stroke();text(c,`${w}${unit&&w===wholes?' '+unit:''}`,X(w),y+h+26,14);}
 const size=share?L/share:piece[0]/piece[1],count=Math.round(L/size*1e6)/1e6,n=Math.ceil(count-1e-9),shown=Math.min(n,Math.ceil(clamp(p)*n-1e-9));
 for(let i=0;i<shown;i++){const a=X(i*size),b=X(Math.min(L,(i+1)*size));c.fillStyle=i%2?B:A;c.fillRect(a,y+4,b-a-2,h-8);c.strokeStyle=INK;c.lineWidth=1.5;c.strokeRect(a,y+4,b-a-2,h-8);if(solve&&p>=1&&b-a>14)text(c,i+1,(a+b)/2,y+h/2,14,{bold:true,color:'#fff'});}
 c.strokeStyle=INK;c.lineWidth=3;c.beginPath();c.moveTo(X(L),y-10);c.lineTo(X(L),y+h+4);c.stroke();if(total[0]%total[1])text(c,`${frac(total)}${unit?' '+unit:''}`,X(L),y-22,15,{bold:true});
 text(c,share?`cut into ${share} equal parts`:`pieces of ${frac(piece)}${unit?' '+unit:''}`,320,236,15,{color:SOFT});
};

/* balance: {left,right,title,result (written with solve),step (the move, written with solve)}. The beam stays level: the two sides are equal. */
export const balance=(c,{left,right,title,result,step,solve},p)=>{
 if(title)text(c,title,320,22,16,{bold:true});
 const cx=320,by=76;c.fillStyle='#8a6a42';c.beginPath();c.moveTo(cx-30,204);c.lineTo(cx+30,204);c.lineTo(cx,by+6);c.closePath();c.fill();c.strokeStyle=INK;c.lineWidth=2;c.stroke();
 c.strokeStyle=INK;c.lineWidth=5;c.beginPath();c.moveTo(cx-230,by);c.lineTo(cx+230,by);c.stroke();
 const pan=(x,s)=>{c.lineWidth=1.5;c.beginPath();c.moveTo(x,by);c.lineTo(x-70,by+44);c.moveTo(x,by);c.lineTo(x+70,by+44);c.stroke();c.fillStyle=PAPER2;c.fillRect(x-90,by+44,180,48);c.strokeStyle=INK;c.lineWidth=2;c.strokeRect(x-90,by+44,180,48);text(c,s,x,by+68,22,{bold:true});};
 pan(cx-170,left);pan(cx+170,right);text(c,'=',cx,by-20,26,{bold:true});
 if(solve&&p>=0.5&&step)text(c,step,cx,222,15,{color:SOFT});
 if(solve&&p>=1&&result){c.fillStyle=HI;c.fillRect(cx-80,238,160,28);text(c,result,cx,252,18,{bold:true});}
};

/* dots: {values,min,max,title,unit,solve,mean,median}. A dot plot; with solve, the mean and median are marked. */
export const dots=(c,{values,min,max,title,unit='',mean,median,solve},p)=>{
 if(title)text(c,title,320,22,16,{bold:true});
 const x0=50,x1=590,y=222,X=v=>x0+(v-min)/(max-min)*(x1-x0),range=max-min,step=range<=20?1:range<=50?5:10,lab=range<=20?(range<=12?1:2):step;
 c.strokeStyle=INK;c.lineWidth=2;c.beginPath();c.moveTo(x0-10,y);c.lineTo(x1+10,y);c.stroke();
 for(let v=Math.ceil(min/step)*step;v<=max;v+=step){c.beginPath();c.moveTo(X(v),y-5);c.lineTo(X(v),y+5);c.stroke();if(v%lab===0)text(c,v,X(v),y+18,13);}
 if(unit)text(c,unit,x1+10,y+38,12,{align:'right',color:SOFT});
 const seen={},shown=values.slice(0,Math.max(1,Math.ceil(clamp(p)*values.length-1e-9)));
 for(const v of shown){const k=seen[v]=(seen[v]||0)+1;c.fillStyle=A;c.beginPath();c.arc(X(v),y-6-k*18+4,8,0,Math.PI*2);c.fill();c.strokeStyle=INK;c.lineWidth=1.5;c.stroke();}
 if(solve&&p>=1){if(mean!=null){c.fillStyle='#c8372d';c.beginPath();c.moveTo(X(mean),y+28);c.lineTo(X(mean)-8,y+42);c.lineTo(X(mean)+8,y+42);c.closePath();c.fill();text(c,`mean ${mean}`,X(mean),y-128,14,{bold:true,color:'#8c2a22'});}
  if(median!=null){c.strokeStyle='#3f7d3a';c.lineWidth=2;c.setLineDash?.([5,4]);c.beginPath();c.moveTo(X(median),y-118);c.lineTo(X(median),y);c.stroke();c.setLineDash?.([]);text(c,`median ${median}`,X(median),y-148+(mean===median?-16:0),14,{bold:true,color:'#2f5a25'});}}
};

export const MID_DRAW={tape,numline,fit,balance,dots};
export const describeMiddle=q=>
 q.t==='tape'?`${q.title?q.title+': ':''}a tape diagram, `+q.rows.map(r=>`${r.label} ${r.n} part${r.n===1?'':'s'}`).join(' and ')+(q.groups>1?`, repeated ${q.groups} times`:''):
 q.t==='numline'?`${q.title?q.title+': ':''}a number line from ${q.min} to ${q.max}`+(q.marks?.length?` with ${q.marks.map(m=>m.label??m.v).join(', ')} marked`:''):
 q.t==='fit'?`${q.title?q.title+': ':''}a length of ${frac(q.total)}${q.unit?' '+q.unit:''}, `+(q.share?`cut into ${q.share} equal parts`:`with pieces of ${frac(q.piece)} laid along it`):
 q.t==='balance'?`${q.title?q.title+': ':''}a level balance: ${q.left} on one side, ${q.right} on the other`:
 q.t==='dots'?`${q.title?q.title+': ':''}a dot plot of ${q.values.length} values: ${q.values.join(', ')}${q.unit?' '+q.unit:''}`:'a picture';
