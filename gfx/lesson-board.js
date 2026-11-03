// High School worked solutions: `board`, the lines of a solution written one under another as a teacher writes them,
// each with an optional reason beside it, revealed one at a time with progress p (0..1, owned by the caller). The last
// line can be boxed as the result. Nothing is computed here: the lesson writes the lines, and its tests check them.
//
// {t:'board', title, lines:['3(x - 4) + 5 = 2x + 7', ...], why:['distribute', ...] (optional, one per line), box:true}
const INK='#2a1a10',SOFT='#6a5a46',ACCENT='#b4602e',BLUE='#3f6fa0';
const clamp=v=>Math.max(0,Math.min(1,v));
const text=(c,s,x,y,size,{bold=false,align='left',color=INK}={})=>{c.fillStyle=color;c.font=`${bold?'bold ':''}${size}px sans-serif`;c.textAlign=align;c.textBaseline='middle';c.fillText(String(s),x,y);};

/* A picture title that always fits (17 Oct): the big bitmap size when it fits in max px, else the small one, else two small lines. */
export const fitTitle=(c,s,y=34,max=600,color=INK)=>{s=String(s);const w=z=>{c.font=`bold ${z}px sans-serif`;return c.measureText(s).width;};
 if(w(16)<=max){text(c,s,320,y,16,{bold:true,align:'center',color});return;}if(w(15)<=max){text(c,s,320,y,15,{bold:true,align:'center',color});return;}
 const words=s.split(' ');let k=1,best=1,bw=1e9;for(;k<words.length;k++){const a=words.slice(0,k).join(' '),b2=words.slice(k).join(' ');c.font='bold 15px sans-serif';const m=Math.max(c.measureText(a).width,c.measureText(b2).width);if(m<bw){bw=m;best=k;}}
 /* picframe2-nov2 #4: the two lines are spaced by their measured height (at least the old 18 units), so lines grown to 12 px on a phone never touch */
 c.font='bold 15px sans-serif';const hs=Math.max(9,5*c.measureText('0').width/7+2);text(c,words.slice(0,best).join(' '),320,y-hs,15,{bold:true,align:'center',color});text(c,words.slice(best).join(' '),320,y+hs,15,{bold:true,align:'center',color});};
/* improve20-j-nov1 #3 (audit3 #20: "what we want to prove" read as 11 px grey on parchment): a reason beside a line is drawn in ink at
   HELP_PX CSS px. The picture is shown at c.pqCss CSS px per picture unit (gfx/lesson-art.js crispCtx; about 0.7 on a desktop), and the
   label font is 16 picture units, so it grows by HELP_PX / (16 x pqCss) (at most 1.6x, beyond any phone boost the text layer already
   gives), only as far as it stays inside the card; never smaller than before. */
export const HELP_PX=14,HELP_INK=INK;
export const helpBoost=(css,phone=1,w=0,x=0)=>{if(!(css>0))return 1;let b=Math.min(1.6,Math.max(1,HELP_PX/(16*css*phone)));if(w>0&&x+w*b>628)b=Math.max(1,(628-x)/w);return b;};
const helpLabel=(c,s,x,y)=>{c.font='14px sans-serif';const phone=c.pqUnit>0&&16*c.pqUnit<12?Math.min(1.6,12/(16*c.pqUnit)):1,b=helpBoost(c.pqCss,phone,c.measureText(String(s)).width,x);
 if(b===1){text(c,s,x,y,14,{color:HELP_INK});return;}c.save();c.translate(x,y);c.scale(b,b);text(c,s,0,0,14,{color:HELP_INK});c.restore();};
export const board=(c,{title,lines=[],why=[],box=false},p)=>{
 if(title)fitTitle(c,title,34);
 const T=title?62:40,B=248,n=Math.max(1,lines.length),gap=Math.min(36,(B-T)/n),top=T+((B-T)-gap*n)/2+gap/2;
 /* Round 10 (17 Oct): the size is chosen by width as well as by line gap. A big line that ran past the card used to be shrunk
    and slid inside by the text layer while its box kept the old place, so text crossed the card edge; now the whole board
    drops to the small size first, and the box is measured from the same font as its text. */
 let size=gap>=30?19:gap>=24?17:15;
 const fits=z=>{c.font=`bold ${z}px sans-serif`;const wb=Math.max(...lines.map(l=>c.measureText(l).width));c.font=`${z}px sans-serif`;const w=Math.max(wb,...lines.map(l=>c.measureText(l).width));const ok=w+(why.some(Boolean)?62:24)<=616;if(!ok||!lines.every(l=>l.includes(' = ')))return ok;
  /* an equals-aligned board hangs each line on x = 320 (250 with reasons), so each side of the sign must fit too */
  const cx=why.some(Boolean)?250:320;return lines.every(l=>{const a=c.measureText(l.slice(0,l.indexOf(' = ')+1)).width;return cx-a>=12&&cx-a+c.measureText(l).width<=628;});};
 if(size>15&&!fits(size))size=15;
 /* the equals signs line up when every line has one, the way a solution is written on a board */
 c.font=`${size}px sans-serif`;
 /* a line may start with '= ' to continue the one above it */
 /* the first line may also be a bare expression that the '= ' lines below it continue */
 const eq=lines.every((l,i)=>l.includes(' = ')||l.startsWith('= ')||(i===0&&lines.length>1&&lines.slice(1).every(m=>m.startsWith('= ')))),
  left=l=>!eq||l.startsWith('= ')?0:l.includes(' = ')?c.measureText(l.slice(0,l.indexOf(' = ')+1)).width:c.measureText(l+' ').width,widest=Math.max(...lines.map(l=>c.measureText(l).width)),
  hasWhy=why.some(Boolean),bare=eq&&!lines[0].includes(' = '),
  /* a bare first line starts the block; the '= ' lines under it are indented a little, as on a board */
  x0=hasWhy?60:320-widest/2,col=bare?x0+28:eq?(hasWhy?250:320):(hasWhy?70:320-widest/2);
 lines.forEach((l,i)=>{const show=clamp(p*1.05*n-i);if(show<=0)return;c.globalAlpha=Math.min(1,show*1.6);const y=top+i*gap,last=i===n-1&&box;
  c.font=`${last?'bold ':''}${size}px sans-serif`;const x=bare?(i===0?x0:col):eq?col-left(l):col;
  text(c,l,x,y,size,{bold:last,color:last?ACCENT:INK});
  if(last){const w=c.measureText(l).width;c.strokeStyle=ACCENT;c.lineWidth=2;c.strokeRect(x-8,y-gap*0.42,w+16,gap*0.84);}
  if(why[i])helpLabel(c,why[i],Math.max(x+c.measureText(l).width+28,bare?x0+widest+24:eq?430:col+widest+28),y);
  c.globalAlpha=1;});
 /* a soft rule under the title, like the line at the top of a board */
 if(title){c.strokeStyle='rgba(106,90,70,0.35)';c.lineWidth=1;c.beginPath();c.moveTo(150,50);c.lineTo(490,50);c.stroke();}
};
export const describeBoard=q=>`${q.title?q.title+': ':''}a worked solution, line by line: ${q.lines.join('; ')}`;
