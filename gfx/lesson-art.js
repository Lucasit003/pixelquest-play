import {passages,describePassages} from './lesson-language.js';
import {villageRecords,describeHistory,chain,describeChain} from './lesson-history.js';
import {GEO_DRAW,describeGeo} from './lesson-geography.js';
import {SCI_DRAW,describeScience} from './lesson-science.js';
import {program,describeProgram} from './lesson-cs.js';
import {MID_DRAW,describeMiddle} from './lesson-middle.js';
import {HIGH_DRAW,describeHigh} from './lesson-high.js';
import {drawSprite,spriteSize,drawProp,propSize,spritesReady} from './lesson-sprites.js';
import {drawSprite as drawActor,loadSprite as loadActor,animClock} from './actors/sprites.js';
import {drawPanel,drawPixelText,measurePixelText,loadCanvasUI} from '../ui/canvas-ui.js';
export {setLessonSprites,SPRITE_NAMES} from './lesson-sprites.js';
/* v2:theater: animated scenes from pack art (dist/gfx/theater/). pic {t:'theater',scene,part} */
import {drawTheater,describeTheater,theaterLength,theaterLive} from './theater/index.js';
// Lesson step pictures (docs/LESSONS_SPEC.md §5). drawPic(ctx,pic,p,o) draws one primitive onto a
// 640×280 canvas at animation progress p (0..1); the caller owns p, so nothing here keeps time.
// describe(pic) is alt text that says what is shown without giving the answer.
// Pictures are drawn by code so the maths in them is always right; meaning never rests on colour alone.
export const PIC_W=640,PIC_H=280;
/* A shaded fraction part: solid dark gold, never hatched (hatching adds false partitions). */
const SHADE='#c9922e';
const INK='#2a1a10',APPLE='#c8372d',LEAF='#3f7d3a',BASKET='#9a6a3a',RIM='#6e4a26',DOT='#244a8a',PAPER='#efe3c8',LABEL='#2a1a10';
const clamp=v=>Math.max(0,Math.min(1,v)),ease=t=>t*t*(3-2*t),lerp=(a,b,t)=>a+(b-a)*t;
const label=(ctx,text,x,y,size=16)=>{ctx.font=`bold ${size}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';
 const w=ctx.measureText(String(text)).width+10;x=Math.max(w/2+2,Math.min(PIC_W-w/2-2,x));/* never cut off at the canvas edge */
 const ph=size>=16?30:22;ctx.fillStyle=PAPER;ctx.fillRect(x-w/2,y-ph/2,w,ph);ctx.fillStyle=LABEL;ctx.fillText(String(text),x,y);};
/* Groups: n baskets in a row, k apples in each. */
const basketLayout=(n,k)=>{const bw=Math.min(120,(PIC_W-40)/n-12),gap=(PIC_W-n*bw)/(n+1),cols=Math.ceil(Math.sqrt(k));
 return Array.from({length:n},(_,b)=>{const x=gap+b*(bw+gap),y=150;
  return {x,y,w:bw,h:70,spots:Array.from({length:k},(_,a)=>({x:x+bw/2+((a%cols)-(cols-1)/2)*Math.min(18,bw/cols),y:y+22+Math.floor(a/cols)*18}))};});};
/* Apples and baskets are pack sprites (lesson-sprites.js); the drawn shapes below are only the fallback for
   environments without images (tests) or before the sprite strip has loaded. */
const apple=(ctx,x,y,size=16)=>{if(drawSprite(ctx,'apple',x,y,size))return;ctx.fillStyle=APPLE;ctx.beginPath();ctx.arc(x,y,8,0,Math.PI*2);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.5;ctx.stroke();
 ctx.fillStyle=LEAF;ctx.fillRect(x-1,y-12,3,5);};
const groups=(ctx,{n,k,solve},p)=>{const L=basketLayout(n,k),total=n*k,shown=p*total;
 /* With the pack sprites: each basket is drawn at a whole-number scale, and its apples are heaped on its
    front at 32 px (or exactly 16 px when there are too many to fit). Without them, the plain fallback. */
 const cols=Math.ceil(Math.sqrt(k)),rows=Math.ceil(k/cols);
 L.forEach((b,i)=>{const bs=Math.min(96,spriteSize(b.w)),bottom=b.y+b.h,cx=b.x+b.w/2;
  const big=cols*30<=bs&&rows*26<=bs*0.7,as=big?32:16,step=big?30:16,rowH=big?24:14;
  if(drawSprite(ctx,'basket',cx,bottom-bs/2,bs)){
   for(let a=0;a<k;a++){const idx=i*k+a,t=clamp(shown-idx);if(t<=0)continue;const col=a%cols,row=Math.floor(a/cols),x=cx+(col-(cols-1)/2)*step,y=bottom-bs*0.32-row*rowH;apple(ctx,x,lerp(20,y,ease(t)),as);}}
  else{ctx.fillStyle=BASKET;ctx.fillRect(b.x,b.y,b.w,b.h);ctx.fillStyle=RIM;ctx.fillRect(b.x-4,b.y,b.w+8,8);ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.strokeRect(b.x,b.y,b.w,b.h);
   b.spots.forEach((s,a)=>{const idx=i*k+a,t=clamp(shown-idx);if(t<=0)return;apple(ctx,s.x,lerp(20,s.y,ease(t)),16);});}
  if(solve&&shown>=(i+1)*k-1e-6)label(ctx,(i+1)*k,b.x+b.w/2,b.y+b.h+18);});};
/* Array: r rows of c dots; may slide in from baskets, turn a quarter, or count its rows or columns. */
const gridSpots=(r,c)=>{const s=Math.min(34,200/Math.max(r,1),480/Math.max(c,1)),x0=PIC_W/2-(c-1)*s/2,y0=PIC_H/2-(r-1)*s/2;
 return Array.from({length:r*c},(_,i)=>({x:x0+(i%c)*s,y:y0+Math.floor(i/c)*s,row:Math.floor(i/c),col:i%c,s}));};
const dot=(ctx,x,y,s)=>{ctx.fillStyle=DOT;ctx.beginPath();ctx.arc(x,y,Math.max(5,s*.3),0,Math.PI*2);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.5;ctx.stroke();};
const array=(ctx,{r,c,from,turn,count,solve},p)=>{const to=gridSpots(r,c);let pts=to.map(q=>({x:q.x,y:q.y}));
 if(from==='groups'){const src=basketLayout(r,c).flatMap(b=>b.spots),t=ease(clamp(p));pts=to.map((q,i)=>({x:lerp(src[i].x,q.x,t),y:lerp(src[i].y,q.y,t)}));}
 if(turn){const a=ease(clamp(p))*Math.PI/2,cx=PIC_W/2,cy=PIC_H/2;pts=pts.map(q=>({x:cx+(q.x-cx)*Math.cos(a)-(q.y-cy)*Math.sin(a),y:cy+(q.x-cx)*Math.sin(a)+(q.y-cy)*Math.cos(a)}));}
 pts.forEach(q=>dot(ctx,q.x,q.y,to[0].s));
 const lines=count==='cols'?c:count==='rows'||solve?r:0,per=count==='cols'?r:c;
 for(let i=0;i<lines;i++){if(count&&p<(i+1)/lines-1e-6)break;
  const q=count==='cols'?to[(r-1)*c+i]:to[i*c+c-1];label(ctx,(i+1)*per,count==='cols'?q.x:q.x+q.s*.9+14,count==='cols'?q.y+q.s*.9+12:q.y);}};
/* Number line from 0 to max; jumps of hop arc in one after another. */
/* Number line {t:'line',max,hop,jumps,from,back,mark}: `jumps` hops of `hop`, starting at `from`
   (0 unless given) and going backwards when `back` is set, so subtraction and counting back are
   drawn as what they are rather than as forward hops from zero. */
const line=(ctx,{max,hop,jumps,from=0,back,mark,solve},p)=>{const x0=40,x1=PIC_W-40,y=190,X=v=>lerp(x0,x1,v/max),step=max<=20?1:max<=50?5:10,dir=back?-1:1;
 ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(x0,y);ctx.lineTo(x1,y);ctx.stroke();
 for(let v=0;v<=max;v+=step){ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(X(v),y-8);ctx.lineTo(X(v),y+8);ctx.stroke();
  if(v%(step*(max>20?2:2))===0||v===max){ctx.font='13px sans-serif';ctx.fillStyle=LABEL;ctx.textAlign='center';ctx.textBaseline='top';ctx.fillText(String(v),X(v),y+12);}}
 const done=p*jumps;
 if(from>0||back){ctx.strokeStyle=LEAF;ctx.lineWidth=3;ctx.beginPath();ctx.arc(X(from),y,9,0,Math.PI*2);ctx.stroke();}
 for(let j=0;j<jumps;j++){const t=clamp(done-j);if(t<=0)break;const va=from+dir*j*hop,vb=from+dir*(j+1)*hop;if(vb<0||vb>max)break;const a=X(va),b=X(vb),h=Math.min(70,Math.abs(b-a)*.9);
  ctx.strokeStyle=APPLE;ctx.lineWidth=3;ctx.beginPath();for(let s=0;s<=t+1e-9;s+=.05){const u=Math.min(s,t),x=lerp(a,b,u),yy=y-Math.sin(u*Math.PI)*h;s?ctx.lineTo(x,yy):ctx.moveTo(x,yy);}ctx.stroke();
  if(solve&&t>=1)label(ctx,vb,b,y-h-14,14);}
 if(mark!=null){ctx.strokeStyle=LEAF;ctx.lineWidth=3;ctx.beginPath();ctx.arc(X(mark),y,12,0,Math.PI*2);ctx.stroke();}};
/* Coins: laid out biggest value first, the way you count on. Each coin carries its value in
   writing, so nothing rests on the copper/silver colour; solve or count adds running totals. */
export const COIN={q:{c:25,r:30,name:'quarter'},d:{c:10,r:21,name:'dime'},n:{c:5,r:26,name:'nickel'},p:{c:1,r:23,name:'penny'}};
const coins=(ctx,{coins:list,count,solve},p)=>{const sorted=[...list].sort((a,b)=>COIN[b].c-COIN[a].c),n=sorted.length,wrap=n>9,per=wrap?Math.ceil(n/2):n,gap=Math.min(76,(PIC_W-60)/Math.max(per,1)),shown=p*n;let run=0;
 /* More than 9 coins wrap onto two rows so the coins keep their full size on a phone. */
 sorted.forEach((k,i)=>{const t=clamp(shown-i);run+=COIN[k].c;if(t<=0)return;const row=wrap&&i>=per?1:0,j=i-row*per,m=row?n-per:per,x=PIC_W/2-(m-1)*gap/2+j*gap,yy=wrap?(row?195:70):130,y=lerp(yy-70,yy,ease(t)),r=COIN[k].r;
  /* A pack coin sprite with its value written on a plate below it (value is never told by colour or size alone). */
  /* Quarters and nickels are drawn at 2x, dimes and pennies at 1x (real coins differ in size); pennies are copper. */
  const cs=(k==='q'||k==='n')&&gap>=64?64:32;
  if(drawSprite(ctx,k==='p'?'coin-copper':'coin-silver',x,y,cs)){ctx.fillStyle=PAPER;ctx.fillRect(x-22,y+38,44,20);ctx.strokeStyle=INK;ctx.lineWidth=1.5;ctx.strokeRect(x-22,y+38,44,20);ctx.fillStyle=INK;ctx.font='bold 14px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(`${COIN[k].c}¢`,x,y+48);}
  else{ctx.fillStyle=k==='p'?'#b8733a':'#c9ccd1';ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.stroke();
  ctx.strokeStyle=k==='p'?'#8a5226':'#9aa0a8';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(x,y,r-5,0,Math.PI*2);ctx.stroke();
  ctx.fillStyle=INK;ctx.font=`bold ${r>24?15:13}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(`${COIN[k].c}¢`,x,y);}
  if((count||solve)&&t>=1)label(ctx,`${run}¢`,x,wrap?yy+75:205,15);});};
/* Base-ten blocks {t:'blocks',h,ten,one}: hundreds as 10x10 flats, tens as rods of 10, ones as
   cubes, in three labelled columns (not t/o: t is the primitive's own type key). regroup animates ten loose ones sliding across and snapping into one more ten. */
const BLOCK='#e0a93a',BLOCK_EDGE='#8a5a12';
const cube=(ctx,x,y,w,h)=>{ctx.fillStyle=BLOCK;ctx.fillRect(x,y,w,h);ctx.strokeStyle=BLOCK_EDGE;ctx.lineWidth=1;ctx.strokeRect(x+.5,y+.5,w-1,h-1);};
const rod=(ctx,x,y)=>{for(let i=0;i<10;i++)cube(ctx,x,y+i*8,9,8);};
const flat=(ctx,x,y)=>{for(let r=0;r<10;r++)for(let c=0;c<10;c++)cube(ctx,x+c*8,y+r*8,8,8);};
/* regroup:true trades ten ones for a ten (adding). regroup:'split' does the reverse: one ten breaks
   into ten ones, which is the move a subtraction with borrowing actually makes. */
const blocks=(ctx,{h,ten:t=0,one:o=0,regroup,count,solve},p)=>{if(regroup==='split'&&t>=1)return splitBlocks(ctx,{h,ten:t,one:o,count,solve},p);const trade=regroup===true&&o>=10,tp=trade?ease(clamp(p/0.8)):0,snapped=trade&&p>=0.8;
 /* The hundreds column only when the picture has hundreds at all, so two-digit lessons stay uncluttered. */
 const cols=h==null?[['tens',120],['ones',380]]:[['hundreds',40],['tens',250],['ones',440]],X=Object.fromEntries(cols),top=40,shownT=t+(snapped?1:0),shownO=o-(snapped?10:0);
 ctx.font='bold 15px sans-serif';ctx.textAlign='left';ctx.textBaseline='alphabetic';ctx.fillStyle=LABEL;
 for(const [w,x] of cols)ctx.fillText(w,x,top-12);
 for(let i=0;i<(h||0);i++)flat(ctx,X.hundreds+(i%2)*88,top+Math.floor(i/2)*88);
 for(let i=0;i<shownT;i++)rod(ctx,X.tens+(i%9)*16,top+Math.floor(i/9)*88);
 const onesAt=i=>({x:X.ones+(i%5)*14,y:top+Math.floor(i/5)*14});
 /* While ten ones slide across they are drawn only in flight, never also in the ones column. */
 const still=trade&&!snapped?o-10:shownO,from=trade?10:0;
 for(let i=0;i<still;i++){const q=onesAt(i+from);cube(ctx,q.x,q.y,11,11);}
 if(trade&&!snapped)for(let i=0;i<10;i++){const a=onesAt(i),b={x:X.tens+(t%9)*16,y:top+Math.floor(t/9)*88+i*8};cube(ctx,lerp(a.x,b.x,tp),lerp(a.y,b.y,tp),lerp(11,9,tp),lerp(11,8,tp));}
 if(count||solve){const shown={hundreds:[h||0,100],tens:[shownT,10],ones:[shownO,1]};
  for(const [w,x] of cols){const [n,v]=shown[w];label(ctx,`${n} ${n===1?w.slice(0,-1):w} = ${n*v}`,x+55,250,15);}}};
const splitBlocks=(ctx,{h,ten:t,one:o,count,solve},p)=>{const tp=ease(clamp(p/0.8)),done=p>=0.8;
 const cols=h==null?[['tens',120],['ones',380]]:[['hundreds',40],['tens',250],['ones',440]],X=Object.fromEntries(cols),top=40,shownT=t-1,shownO=o+(done?10:0);
 ctx.font='bold 15px sans-serif';ctx.textAlign='left';ctx.textBaseline='alphabetic';ctx.fillStyle=LABEL;
 for(const [w,x] of cols)ctx.fillText(w,x,top-12);
 for(let i=0;i<(h||0);i++)flat(ctx,X.hundreds+(i%2)*88,top+Math.floor(i/2)*88);
 for(let i=0;i<shownT;i++)rod(ctx,X.tens+(i%9)*16,top+Math.floor(i/9)*88);
 const onesAt=i=>({x:X.ones+(i%5)*14,y:top+Math.floor(i/5)*14});
 for(let i=0;i<o;i++){const q=onesAt(i);cube(ctx,q.x,q.y,11,11);}
 /* The last ten leaves its column cube by cube and lands as ten loose ones. */
 for(let i=0;i<10;i++){const a={x:X.tens+(shownT%9)*16,y:top+Math.floor(shownT/9)*88+i*8},b=onesAt(o+i);cube(ctx,lerp(a.x,b.x,tp),lerp(a.y,b.y,tp),lerp(9,11,tp),lerp(8,11,tp));}
 if(count||solve){const shown={hundreds:[h||0,100],tens:[shownT,10],ones:[shownO,1]};
  for(const [w,x] of cols){const [n,v]=shown[w];label(ctx,`${n} ${n===1?w.slice(0,-1):w} = ${n*v}`,x+55,250,15);}}};
/* Tiles: a row of colours or shapes, each named in words underneath (never colour alone). A null
   entry is the blank: a '?' box, filled with `fill` when solving. Tiles appear left to right. */
const HUE={red:'#c8372d',blue:'#2f5fb3',green:'#3f7d3a',yellow:'#e0b52d',orange:'#e07a2d',purple:'#7a4aa8'};
const SHAPE=new Set(['circle','square','triangle','star']);
const shapeAt=(ctx,kind,x,y,r,fillStyle)=>{ctx.fillStyle=fillStyle;ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.beginPath();
 if(kind==='square')ctx.rect(x-r,y-r,2*r,2*r);
 else if(kind==='triangle'){ctx.moveTo(x,y-r);ctx.lineTo(x+r,y+r);ctx.lineTo(x-r,y+r);ctx.closePath();}
 else if(kind==='star')for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.45:r;i?ctx.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr):ctx.moveTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr);}
 else ctx.arc(x,y,r,0,Math.PI*2);
 ctx.fill();ctx.stroke();};
const tiles=(ctx,{seq,fill,solve},p)=>{const n=seq.length,gap=Math.min(84,(PIC_W-40)/n),x0=PIC_W/2-(n-1)*gap/2,shown=p*n,r=Math.min(26,gap*.34);
 seq.forEach((tok,i)=>{const t=clamp(shown-i);if(t<=0)return;const x=x0+i*gap,y=120;ctx.globalAlpha=t;
  const word=tok==null?(solve&&fill?fill:'?'):tok,blank=tok==null;
  if(blank&&!(solve&&fill)){ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.setLineDash?.([6,4]);ctx.strokeRect(x-r,y-r,2*r,2*r);ctx.setLineDash?.([]);ctx.fillStyle=INK;ctx.font='bold 26px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('?',x,y);}
  else shapeAt(ctx,SHAPE.has(word)?word:'circle',x,y,r,HUE[word]||'#c9ccd1');
  if(!(blank&&!(solve&&fill)))label(ctx,word,x,y+r+22,13);
  ctx.globalAlpha=1;});};
/* Compass: a rose with N, E, S, W written out, and an arrow for the way you face. turn rotates the
   arrow a quarter (right = clockwise, left = anticlockwise) or half (around) as p runs. Optional
   map mode: two named places with an arrow between them, north up. */
const DIRS=['north','east','south','west'];
const compass=(ctx,{face,turn,mark,from,to,dir,solve},p)=>{const cx=from?180:PIC_W/2,cy=140,R=95;
 ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.beginPath();ctx.arc(cx,cy,R,0,Math.PI*2);ctx.stroke();
 DIRS.forEach((d,i)=>{const a=-Math.PI/2+i*Math.PI/2,x=cx+Math.cos(a)*(R+2),y=cy+Math.sin(a)*(R+2);
  ctx.fillStyle=d===mark?LEAF:INK;ctx.beginPath();ctx.moveTo(cx+Math.cos(a)*18,cy+Math.sin(a)*18);ctx.lineTo(x,y);ctx.lineWidth=d===mark?4:2;ctx.strokeStyle=ctx.fillStyle;ctx.stroke();
  label(ctx,d.toUpperCase(),cx+Math.cos(a)*(R+26),cy+Math.sin(a)*(R+24),14);});
 if(face){const q=turn?ease(clamp(p)):1,delta={right:1,left:-1,around:2}[turn]||0,ang=-Math.PI/2+(DIRS.indexOf(face)+delta*q)*Math.PI/2;
  ctx.strokeStyle=APPLE;ctx.fillStyle=APPLE;ctx.lineWidth=6;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(ang)*(R-22),cy+Math.sin(ang)*(R-22));ctx.stroke();
  ctx.beginPath();const hx=cx+Math.cos(ang)*(R-8),hy=cy+Math.sin(ang)*(R-8);ctx.moveTo(hx,hy);ctx.lineTo(hx-Math.cos(ang-.5)*18,hy-Math.sin(ang-.5)*18);ctx.lineTo(hx-Math.cos(ang+.5)*18,hy-Math.sin(ang+.5)*18);ctx.closePath();ctx.fill();
  ctx.fillStyle=INK;ctx.beginPath();ctx.arc(cx,cy,9,0,Math.PI*2);ctx.fill();}
 if(from){const off={north:[0,-1],south:[0,1],east:[1,0],west:[-1,0]}[dir],ax=470,ay=140,bx=ax+off[0]*110,by=ay+off[1]*90;
  label(ctx,from,ax,ay,15);if(p>=.5||!solve)label(ctx,to,bx,by,15);
  if(solve&&p>=.5){ctx.strokeStyle=LEAF;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(ax+off[0]*40,ay+off[1]*18);ctx.lineTo(bx-off[0]*40,by-off[1]*18);ctx.stroke();}}};
/* Word card: a word with its ending sliding on, the new letters in a second colour and underlined
   (so the change never rests on colour alone). With n, that many copies of the thing stand above the card.
   Art director round 3: a countable noun with pack art shows that many sprites (1 cat = one cat sprite), with the
   word card underneath as its label; counter dots stay only for nouns no downloaded pack draws. Everything sits at
   least 8 px inside the board's inner edge (the parchment border is 20 px, so 28 px from the canvas edge). */
/* Nouns that have pack art: the cat (Pet Cats Pack, CC0); frog, bird, duck (ERW Grass Land); fox (Elthen); dish, box,
   bed (ERW Village interiors); bench (ERW Village); the rest are our own PixelLab icons (lsprites-oct26). */
export const NOUN_ART=Object.freeze({cat:'cat',book:'book-blue',apple:'apple',coin:'coin',basket:'basket',egg:'egg',ball:'ball',dress:'dress',map:'map',cake:'cake',ax:'ax',fish:'fish',cup:'cup',frog:'frog',bird:'bird',duck:'duck',fox:'fox',dish:'dish',box:'box',bed:'bed',bench:'bench'});
/* PixelLab lesson props (owner #43, 8 Oct: "fix the dishes, add animated food on top"): a noun listed here draws these
   atlases in turn instead of its pack icon, animated on the wall clock (the hot dishes steam). */
export const NOUN_ANIM=Object.freeze({dish:['theater-dish-stew','theater-dish-roast','theater-dish-pancakes','theater-dish-spaghetti'],ball:['theater-ball']});
/* draw one animated noun standing on `floor` at cx, scaled to fit `room`; false while its atlas loads */
function drawNounAnim(ctx,id,cx,floor,room){const s=loadActor(id);if(!s.ready||!s.meta)return false;const m=s.meta,h=m.height||m.cell[1],w=m.width||m.cell[0];
 const sc=Math.max(1,Math.min(4,Math.floor(Math.min(100,room)/Math.max(w,h))));return drawActor(ctx,id,'idle',animClock(),cx,floor,{scale:sc})!==false;}
export const BOARD_SAFE=28;
const word=(ctx,{base,suffix='',n,mark,solve},p)=>{const t=suffix?ease(clamp(p)):1,show=solve||!suffix||p>0;
 /* a noun with pack art and no count still shows the thing once above its card */
 n=n??(spritesReady()&&NOUN_ART[base]&&propSize(NOUN_ART[base])?1:0);
 /* 24 Oct playtest: a noun with no picture (wish, bus...) drew plain dots that meant nothing; it shows its word card alone */
 if(!NOUN_ART[base]&&!NOUN_ANIM[base])n=0;
 const fs=n?44:54,hh=n?38:48,y=n?PIC_H-BOARD_SAFE-hh:110,ul=Math.round(fs*.56);
 ctx.font=`bold ${fs}px sans-serif`;ctx.textBaseline='middle';ctx.textAlign='left';const wb=ctx.measureText(base).width,ws=suffix?ctx.measureText(suffix).width:0,x=PIC_W/2-(wb+ws)/2;
 ctx.fillStyle=PAPER;ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.strokeRect(x-24,y-hh,wb+ws+48,hh*2);
 ctx.fillStyle=INK;ctx.fillText(base,x,y);if(mark!=null){ctx.strokeStyle=LEAF;ctx.lineWidth=3;const wm=ctx.measureText(base.slice(0,-mark)).width;ctx.beginPath();ctx.moveTo(x+wm,y+ul);ctx.lineTo(x+wb,y+ul);ctx.stroke();}
 if(suffix&&show){ctx.globalAlpha=t;ctx.fillStyle=APPLE;ctx.fillText(suffix,x+wb+(1-t)*40,y);ctx.strokeStyle=APPLE;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(x+wb+(1-t)*40,y+ul);ctx.lineTo(x+wb+ws+(1-t)*40,y+ul);ctx.stroke();ctx.globalAlpha=1;}
 if(!n)return;
 /* the objects stand on a line 16 px above the card, in the room between it and the top of the board */
 const art=NOUN_ART[base],sz=art&&propSize(art),floor=y-hh-16,room=floor-BOARD_SAFE;
 const sc=sz?Math.max(1,Math.min(4,Math.floor(Math.min(72,room)/Math.max(sz.w,sz.h)))):0,sw=sz?sz.w*sc:28;
 const anim=NOUN_ANIM[base],gw=anim?Math.max(sw,100):sw;
 const gap=Math.min(Math.max(gw+24,60),(PIC_W-2*BOARD_SAFE-gw)/Math.max(1,n-1));
 for(let i=0;i<n;i++){const cx=PIC_W/2-(n-1)*gap/2+i*gap;if(anim&&drawNounAnim(ctx,anim[i%anim.length],cx,floor,room))continue;if(sz&&drawProp(ctx,art,cx,floor,sc))continue;ctx.fillStyle=DOT;ctx.beginPath();ctx.arc(cx,floor-18,14,0,Math.PI*2);ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.5;ctx.stroke();}};
/* Matter: a jar holding a solid (a block that keeps its shape), a liquid (settled in the bottom,
   taking the jar's shape) or a gas (bits spread through the whole jar), with the state written
   under it. change runs one state into the next as p goes 0 to 1. Several jars sit side by side. */
const NEXT={melt:['solid','liquid'],freeze:['liquid','solid'],boil:['liquid','gas'],condense:['gas','liquid']};
const jarAt=(ctx,x,y,w,h,state,a=1,label_)=>{ctx.globalAlpha=a;
 if(state==='solid'){ctx.fillStyle='#8fb7d9';ctx.fillRect(x+w*.3,y+h-w*.4-6,w*.4,w*.4);ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.strokeRect(x+w*.3,y+h-w*.4-6,w*.4,w*.4);}
 else if(state==='liquid'){ctx.fillStyle='#5b8fd0';ctx.beginPath();ctx.moveTo(x+4,y+h*.55);for(let i=0;i<=8;i++)ctx.lineTo(x+4+(w-8)*i/8,y+h*.55+Math.sin(i*1.4)*3);ctx.lineTo(x+w-4,y+h-4);ctx.lineTo(x+4,y+h-4);ctx.closePath();ctx.fill();}
 else if(state==='gas'){ctx.fillStyle='#8a9bb0';for(let i=0;i<18;i++){const u=((i*37)%17)/17,v=((i*53)%19)/19;ctx.beginPath();ctx.arc(x+10+u*(w-20),y+14+v*(h-28),4,0,Math.PI*2);ctx.fill();}}
 ctx.globalAlpha=1;};
const matter=(ctx,{jars,change,solve},p)=>{const list=jars||[{state:NEXT[change]?.[0]||'solid'}],n=list.length,w=110,h=150,gap=Math.min(190,(PIC_W-40)/n),x0=PIC_W/2-(n-1)*gap/2-w/2,y=40;
 list.forEach((j,i)=>{const x=x0+i*gap;ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x,y+h);ctx.lineTo(x+w,y+h);ctx.lineTo(x+w,y);ctx.stroke();
  const ch=j.change||change,pair=ch&&NEXT[ch],t=pair?ease(clamp(p)):1;
  if(pair){jarAt(ctx,x,y,w,h,pair[0],1-t);jarAt(ctx,x,y,w,h,pair[1],t);}else jarAt(ctx,x,y,w,h,j.state);
  const word=j.label||(pair?(t<.5?pair[0]:pair[1]):j.state);if(!j.hide||solve)label(ctx,word,x+w/2,y+h+22,15);});};
/* Timeline: events as numbered stops along an arrow, labels alternating above and below so long
   ones never collide; they appear in order as p runs. A null event is a '?' stop that solve fills. */
const timeline=(ctx,{events,fill,solve,ends},p)=>{const n=events.length,x0=50,x1=PIC_W-50,y=150,X=i=>n<2?PIC_W/2:lerp(x0+20,x1-40,i/(n-1)),shown=p*n;
 ctx.strokeStyle=INK;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(x0,y);ctx.lineTo(x1,y);ctx.stroke();
 ctx.fillStyle=INK;ctx.beginPath();ctx.moveTo(x1+14,y);ctx.lineTo(x1-4,y-10);ctx.lineTo(x1-4,y+10);ctx.closePath();ctx.fill();
 ctx.font='13px sans-serif';ctx.textBaseline='middle';ctx.textAlign='left';ctx.fillText(ends?.[0]??'← earlier',x0,y+95);ctx.textAlign='right';ctx.fillText(ends?.[1]??'later →',x1+14,y+95);
 events.forEach((e,i)=>{const t=clamp(shown-i);if(t<=0)return;const x=X(i),up=i%2===0;ctx.globalAlpha=t;
  ctx.fillStyle=e==null?PAPER:DOT;ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,11,0,Math.PI*2);ctx.fill();ctx.stroke();
  ctx.fillStyle=e==null?INK:PAPER;ctx.font='bold 12px sans-serif';ctx.textAlign='center';ctx.fillText(e==null?'?':String(i+1),x,y);
  ctx.strokeStyle=INK;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x,y+(up?-12:12));ctx.lineTo(x,y+(up?-38:38));ctx.stroke();
  const text=String(e==null?(solve&&fill?fill:'?'):e);ctx.font='bold 13px sans-serif';
  /* 17 Oct: a label wider than the room to its same-side neighbours wraps onto stacked lines, growing away from the arrow */
  const room=Math.min((n<2?PIC_W:2*(X(1)-X(0)))-14,2*Math.min(x,PIC_W-x)-8),words=text.split(' '),rows=[];for(const w of words){const last=rows.at(-1);if(last!=null&&ctx.measureText(last+' '+w).width+10<=room)rows[rows.length-1]=last+' '+w;else rows.push(w);}
  rows.forEach((r,k)=>label(ctx,r,x,y+(up?-52-(rows.length-1-k)*20:52+k*20),13));ctx.globalAlpha=1;});};
/* Bar: reserved for fractions (topic 2); drawn plainly so a draft that uses it still renders. */
const bar=(ctx,{parts,shade},p)=>{const x0=80,w=PIC_W-160,y=110,h=60,pw=w/parts;
 for(let i=0;i<parts;i++){ctx.fillStyle=i<shade*clamp(p*1.0001)?SHADE:PAPER;ctx.fillRect(x0+i*pw,y,pw,h);ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.strokeRect(x0+i*pw,y,pw,h);}};
/* Bars: up to three fraction bars of the same whole, stacked, each labelled with its fraction, so unit
   fractions can be compared side by side. A child counts parts, so the ONLY lines inside a bar are its
   denominator's partitions (art review, 8 Oct: hatching cut a filled half into four slivers and read as
   4/8). Shaded parts are a solid dark gold against pale paper -- a lightness difference, not colour alone --
   and the fraction is also written beside the bar. */
const bars=(ctx,{rows,solve},p)=>{const y0=(PIC_H-rows.length*40-(rows.length-1)*30)/2;
 rows.forEach(({parts,shade,fill},i)=>{const x0=130,w=PIC_W-190,h=40,pw=w/parts,y=y0+i*(40+30),ask=shade==null,sh=ask?(solve?fill||0:0):shade;
  for(let c=0;c<parts;c++){const on=c<sh*clamp(p*1.0001),cx=x0+c*pw;ctx.fillStyle=on?SHADE:PAPER;ctx.fillRect(cx,y,pw,h);ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.strokeRect(cx,y,pw,h);}
  label(ctx,`${ask&&!solve?'?':sh}/${parts}`,65,y+h/2,18);});};
const describeBars=q=>`${q.rows.length} bars the same size: `+q.rows.map(r=>`one cut into ${r.parts} equal parts with ${r.shade==null?'how many':r.shade} shaded`).join(', ');
/* Pair: two word cards for synonyms and antonyms. rel 'same' puts an equals sign between them and 'opposite' a
   double arrow, each with its name written under it (never colour alone). A null b is a dashed '?' card that solve fills. */
const pair=(ctx,{a,b,rel,fill,solve},p)=>{const card=(cx,text,dashed)=>{ctx.fillStyle=PAPER;ctx.fillRect(cx-100,70,200,80);ctx.setLineDash?.(dashed?[8,6]:[]);ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.strokeRect(cx-100,70,200,80);ctx.setLineDash?.([]);
  ctx.font='bold 32px sans-serif';if(ctx.measureText(String(text)).width>188)ctx.font='bold 15px sans-serif';/* 17 Oct: a long card word drops to the small size so it stays on its card */ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=INK;ctx.fillText(text,cx,110);};
 card(160,a,false);const t=ease(clamp(p/0.6));ctx.globalAlpha=t;card(lerp(600,480,t),b==null?(solve&&fill?fill:'?'):b,b==null&&!(solve&&fill));ctx.globalAlpha=1;
 if(p>=0.6&&rel){const seg=(x0,y0,x1,y1)=>{ctx.beginPath();ctx.moveTo(x0,y0);ctx.lineTo(x1,y1);ctx.stroke();};ctx.strokeStyle=INK;ctx.lineWidth=4;
  if(rel==='same'){seg(300,100,340,100);seg(300,120,340,120);}else{seg(290,110,350,110);seg(290,110,302,102);seg(290,110,302,118);seg(350,110,338,102);seg(350,110,338,118);}
  label(ctx,rel==='same'?'synonyms: almost the same meaning':'antonyms: opposite meanings',320,200,16);}};
const describePair=q=>`two word cards: ${q.a} and ${q.b==null?'a blank':q.b}`;
/* Rule: an if-then flowchart. The question sits in a diamond, yes leads left to the "then" box and no leads
   right to the "otherwise" box; an optional input is written above. With solve, the path taken (pick) is drawn
   thick and green, so the branch never rests on colour alone. */
/* Round 3 (17 Oct): every label is measured. The question wraps onto two lines and the diamond widens (to 360) before
   its text drops from the double-size bitmap font to the small one, and both boxes share the largest font their words fit, and a box grows to fit them (moving in from the
   picture's edge), so long cards such as "secondhand account" are never cut off or drawn over the diamond. */
const rule=(ctx,{cond,yes,no,input,pick,solve},p)=>{
 const path=(pts,col,w)=>{ctx.strokeStyle=col;ctx.lineWidth=w;ctx.beginPath();pts.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.stroke();};
 const W=(t,f)=>{ctx.font=f;return ctx.measureText(String(t)).width;},BIG='bold 17px sans-serif',SMALL='bold 15px sans-serif';
 const words=String(cond).split(' '),split=()=>{let best=[String(cond)],m=W(cond,BIG);for(let i=1;i<words.length;i++){const a=words.slice(0,i).join(' '),b=words.slice(i).join(' '),w=Math.max(W(a,BIG),W(b,BIG));if(w<m){m=w;best=[a,b];}}return [best,m];};
 /* half-width the diamond needs so a line of half-width w whose glyphs reach d above the centre stays inside it (half-height h) */
 const need=(w,d,h)=>Math.ceil((w/2+6)/(1-d/h));let lines=[String(cond)],cf=BIG,hh=48,hw=Math.max(120,need(W(cond,BIG),12,48));
 if(hw>180){const [two,m]=split(),h2=need(m,24,60);if(two.length>1&&h2<=180){lines=two;hh=60;hw=Math.max(120,h2);}else{cf=SMALL;hw=Math.min(180,Math.max(120,need(W(cond,SMALL),7,48)));}}
 const cf2=['bold 18px sans-serif','16px sans-serif',SMALL].find(f=>W(yes,f)+24<=300&&W(no,f)+24<=300)||SMALL,card=t=>({t,f:cf2,bw:Math.max(170,Math.ceil(W(t,cf2)+24))}),cy=card(yes),cn=card(no);
 const lx=320-hw,rx=320+hw,xy=Math.max(cy.bw/2+6,Math.min(100,lx-30)),xn=Math.min(PIC_W-cn.bw/2-6,Math.max(540,rx+30));
 const box=(cx,k,col,w)=>{ctx.fillStyle=PAPER;ctx.fillRect(cx-k.bw/2,192,k.bw,46);ctx.strokeStyle=col;ctx.lineWidth=w;ctx.strokeRect(cx-k.bw/2,192,k.bw,46);ctx.fillStyle=INK;ctx.font=k.f;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(k.t,cx,215);};
 const Y=[[lx,110],[xy,110],[xy,192]],N=[[rx,110],[xn,110],[xn,192]];
 if(input){label(ctx,input,320,22,16);path([[320,34],[320,110-hh]],INK,2);}
 ctx.beginPath();ctx.moveTo(320,110-hh);ctx.lineTo(rx,110);ctx.lineTo(320,110+hh);ctx.lineTo(lx,110);ctx.closePath();ctx.fillStyle=PAPER;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.stroke();
 ctx.fillStyle=INK;ctx.font=cf;ctx.textAlign='center';ctx.textBaseline='middle';lines.forEach((t,i)=>ctx.fillText(t,320,110+(i-(lines.length-1)/2)*24));
 path(Y,INK,2);path(N,INK,2);label(ctx,'yes',xy,84,16);label(ctx,'no',xn,84,16);box(xy,cy,INK,2);box(xn,cn,INK,2);
 if(solve&&(pick==='yes'||pick==='no')&&p>=0.5){path(pick==='yes'?Y:N,LEAF,6);box(pick==='yes'?xy:xn,pick==='yes'?cy:cn,LEAF,5);}};
const describeRule=q=>`a flowchart asking "${q.cond}": yes leads to ${q.yes}, no leads to ${q.no}`+(q.input?`; the input is ${q.input}`:'');
/* Cycle: stages in boxes around an oval, joined by arrows going clockwise, for things that go around and
   around (the water cycle). Stages fade in one after another; a null stage is a dashed '?' box that solve
   fills, and mark outlines one stage in a thick green box. */
const cycle=(ctx,{stages,mark,fill,solve},p)=>{const n=stages.length,step=2*Math.PI/n,A=i=>Math.PI+i*step,P=a=>[320+Math.cos(a)*205,140+Math.sin(a)*95],shown=i=>p>=1?1:clamp(p*n-i);
 /* Round 3: stage names use the double-size bitmap font (16px) whenever every box still fits inside the picture, so they stay readable on a short window; long names keep 15px */
 const shownText=i=>{const t=stages[i];return t==null?(solve&&fill?fill:'?'):t;};ctx.font='bold 16px sans-serif';
 const big=stages.every((_,i)=>{const [x]=P(A(i)),w=ctx.measureText(shownText(i)).width+16;return x-w/2>=6&&x+w/2<=634;}),font=big?'bold 16px sans-serif':'bold 15px sans-serif',bh=big?38:30;
 for(let i=0;i<n;i++){const a0=A(i)+0.4,a1=A(i)+step-0.4; ctx.strokeStyle=INK;ctx.lineWidth=3;ctx.beginPath();
 for(let k=0;k<=20;k++){const [x,y]=P(a0+(a1-a0)*k/20);k?ctx.lineTo(x,y):ctx.moveTo(x,y);} ctx.stroke();
 const [ex,ey]=P(a1),[bx,by]=P(a1-0.05),d=Math.atan2(ey-by,ex-bx);
 ctx.fillStyle=INK;ctx.beginPath();ctx.moveTo(ex+Math.cos(d)*6,ey+Math.sin(d)*6);ctx.lineTo(ex-Math.cos(d)*6-Math.sin(d)*7,ey-Math.sin(d)*6+Math.cos(d)*7);ctx.lineTo(ex-Math.cos(d)*6+Math.sin(d)*7,ey-Math.sin(d)*6-Math.cos(d)*7);ctx.closePath();ctx.fill();}
 for(let i=0;i<n;i++){const s=stages[i],blank=s==null&&!(solve&&fill),text=s==null?(blank?'?':fill):s,[x,y]=P(A(i));
 ctx.globalAlpha=shown(i);ctx.font=font;const w=ctx.measureText(text).width+16;
 ctx.fillStyle=PAPER;ctx.fillRect(x-w/2,y-bh/2,w,bh);
 ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.setLineDash?.(blank?[6,4]:[]);ctx.strokeRect(x-w/2,y-bh/2,w,bh);ctx.setLineDash?.([]);
 if(mark!=null&&text===mark){ctx.strokeStyle=LEAF;ctx.lineWidth=5;ctx.strokeRect(x-w/2,y-bh/2,w,bh);}
 ctx.fillStyle=INK;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,x,y);ctx.globalAlpha=1;}};
const describeCycle=q=>`a cycle going around: ${q.stages.map(s=>s==null?'a blank':s).join(', then ')}, and back to the start`;
/* Ruler: a thing lying above a centimeter or inch ruler, drawn to true scale (46 px an inch, 18 px a
   centimeter), with dashed guides down from both of its ends. It slides into place; solve hops across it
   one unit at a time and then writes its length. */
const ruler=(ctx,{max,unit,from=0,to,thing,solve},p)=>{
 const PX=unit==='in'?46:18,x0=(PIC_W-max*PX)/2,X=v=>x0+v*PX;
 const L=X(0)-12,R=X(max)+12;
 ctx.fillStyle='#f0d58a';ctx.fillRect(L,180,R-L,50);ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.strokeRect(L,180,R-L,50);
 for(let v=0;v<=max;v++){
  ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(X(v),180);ctx.lineTo(X(v),198);ctx.stroke();
  ctx.fillStyle=INK;ctx.font='13px sans-serif';ctx.textAlign='center';ctx.textBaseline='top';ctx.fillText(v,X(v),201);
  if(v<max){
   ctx.strokeStyle=INK;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(X(v+0.5),180);ctx.lineTo(X(v+0.5),189);ctx.stroke();
  }
 }
 ctx.fillStyle=INK;ctx.font='12px sans-serif';ctx.textAlign='right';ctx.textBaseline='bottom';ctx.fillText(unit==='cm'?'centimeters':'inches',X(max)+8,228);
 const dy=lerp(-60,0,ease(clamp(p/0.5)));
 ctx.fillStyle=APPLE;ctx.fillRect(X(from),118+dy,X(to)-X(from),24);ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.strokeRect(X(from),118+dy,X(to)-X(from),24);
 ctx.strokeStyle=INK;ctx.lineWidth=1;ctx.setLineDash?.([4,4]);
 ctx.beginPath();ctx.moveTo(X(from),142);ctx.lineTo(X(from),180);ctx.stroke();
 ctx.beginPath();ctx.moveTo(X(to),142);ctx.lineTo(X(to),180);ctx.stroke();
 ctx.setLineDash?.([]);
 if(thing&&p>=0.5)label(ctx,thing,(X(from)+X(to))/2,100,14);
 if(solve){
  if(p>=1)label(ctx,`${to-from} ${unit==='cm'?'cm':'in'}`,(X(from)+X(to))/2,62,16);
  for(let k=from;k<to;k++){
   if((p-0.5)*2*(to-from) > k-from){
    ctx.strokeStyle=LEAF;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(X(k),180);ctx.quadraticCurveTo((X(k)+X(k+1))/2,164,X(k+1),180);ctx.stroke();
   }
  }
 }
};
const describeRuler=q=>`${/^(the|one) /.test(q.thing||'')?q.thing:`a ${q.thing||'thing'}`} lying above ${q.unit==='cm'?'a centimeter':'an inch'} ruler that runs from 0 to ${q.max}`;
/* World: a plain world map, north at the top, drawn from coarse continent outlines (longitude and latitude
   projected straight onto the canvas, so the Pacific shows on both edges). mark outlines one continent, or boxes
   an ocean's name, with a thick green line; blank writes '?' for one name until solve. */
const LAND={"North America":[[40,35,50,29,60,27,87,29,107,29,128,32,162,26,178,29,187,40,163,46,167,49,183,52,190,41,213,44,227,57,220,64,210,69,203,72,193,78,193,82,185,88,187,96,183,96,182,91,172,90,163,91,158,94,158,102,163,107,170,104,175,104,173,111,180,113,182,119,187,122,191,123,188,124,182,123,177,117,167,113,160,111,145,105,143,101,133,91,125,86,118,82,113,75,113,66,108,60,100,54,92,47,77,44,67,46,57,50,45,53,53,47,45,44],[198,17,220,11,262,10,287,13,287,26,278,29,253,37,247,44,237,40,230,34,220,22],[170,25,187,23,203,29,190,32,173,32]],"South America":[[191,123,200,117,213,120,220,123,233,128,237,135,247,139,262,145,262,149,255,158,252,169,240,175,232,187,223,194,217,195,212,204,208,211,205,219,200,217,195,208,198,196,201,181,203,163,193,157,185,144,187,137,192,129]],Europe:[[304,79,305,70,318,69,318,65,313,63,318,60,323,58,328,55,333,54,334,49,338,48,341,51,343,54,352,53,355,49,360,48,360,45,368,44,358,44,356,43,356,40,362,37,357,36,348,41,351,44,347,50,341,50,338,47,333,47,329,46,328,41,337,38,343,33,350,30,360,28,370,29,375,31,388,34,393,32,408,32,420,31,420,44,418,50,417,58,407,64,402,65,398,70,387,69,382,67,377,68,372,65,368,67,367,70,367,73,363,74,360,78,358,80,355,77,353,73,352,72,347,69,343,66,341,67,343,72,347,73,351,75,347,78,346,75,340,72,337,69,332,69,325,70,325,72,320,76,319,78,317,80,311,81,308,79],[311,60,323,58,321,55,318,52,317,48,315,47,312,47,310,50,312,52,315,53,313,55,313,57],[303,57,310,57,310,53,308,52,303,54],[280,37,283,35,293,35,298,37,290,39,283,39]],Africa:[[292,104,293,99,298,94,303,91,304,87,310,81,317,82,325,80,337,79,338,82,337,84,339,85,345,86,353,89,353,86,360,87,368,88,373,88,374,91,377,94,382,104,384,108,391,116,392,118,406,118,405,120,400,128,390,137,387,140,385,146,388,151,388,158,378,166,379,172,374,179,367,186,357,187,351,187,350,182,345,175,340,161,343,152,340,143,335,137,336,130,334,129,327,126,317,128,308,129,301,125,295,119,292,113,293,107],[402,154,404,159,398,173,393,173,393,167,394,160]],Asia:[[420,31,433,31,437,25,445,26,453,24,465,23,487,19,495,18,508,24,528,25,553,25,570,27,587,29,603,29,620,31,620,36,612,38,617,41,603,44,592,47,587,54,580,58,580,49,570,45,557,46,545,53,555,57,553,63,545,70,537,71,536,82,531,83,530,79,528,76,522,74,523,79,518,82,522,87,523,90,520,96,515,100,508,102,503,104,500,103,497,107,502,117,497,122,495,120,490,117,487,115,487,123,493,133,488,131,484,123,483,113,478,111,477,106,473,103,470,102,465,103,464,105,460,108,453,112,453,120,449,123,447,119,442,110,441,104,437,101,432,98,423,98,415,97,414,94,407,94,403,90,400,90,403,96,406,99,412,99,414,96,420,101,415,107,407,111,395,116,392,116,385,104,380,95,378,93,378,91,377,88,379,85,380,82,380,80,370,81,366,79,364,76,368,73,372,73,380,72,389,72,387,69,398,70,402,65,407,64,417,58,418,50,420,44],[537,88,540,84,545,85,553,82,555,78,557,72,553,73,553,78,547,81,541,82,537,85],[553,72,563,70,560,68,557,66,553,70],[502,133,515,125,518,128,517,134,513,142,504,140],[479,127,483,129,493,138,497,144,490,142,482,133],[496,146,510,146,511,149,497,147],[520,107,524,107,527,116,530,125,528,126,523,125,522,113],[453,121,456,124,455,126,453,126]],Australia:[[509,169,510,176,512,187,516,189,525,187,530,184,538,183,545,188,550,189,553,193,560,194,564,195,570,192,575,182,576,178,575,173,571,170,563,164,562,158,559,157,558,152,556,155,556,161,553,162,547,159,548,154,541,153,537,155,536,158,530,157,523,163,520,166,513,167],[562,197,567,198,567,201,563,202,561,198]],Antarctica:[[20,254,53,254,70,251,95,248,120,247,153,246,187,246,207,239,225,231,220,234,217,242,220,249,245,254,270,252,295,245,320,242,353,242,387,240,412,237,437,239,453,237,487,236,520,236,553,236,587,242,603,245,620,254,620,272,20,272]]};
const NAME_AT={"North America":[[153,64]],"South America":[[220,160]],Europe:[[357,54]],Africa:[[352,126]],Asia:[[478,57]],Australia:[[543,175]],Antarctica:[[320,257]],"Pacific Ocean":[[78,120],[575,118]],"Atlantic Ocean":[[253,93]],"Indian Ocean":[[450,169]],"Arctic Ocean":[[370,14]],"Southern Ocean":[[370,223]]};
const world=(ctx,{mark,blank,solve,names},p)=>{
 const shape=f=>{ctx.beginPath();ctx.moveTo(f[0],f[1]);for(let i=2;i<f.length;i+=2)ctx.lineTo(f[i],f[i+1]);ctx.closePath();};
 ctx.fillStyle='#a9cfe3';ctx.fillRect(0,0,PIC_W,PIC_H);
 for(const polys of Object.values(LAND))for(const f of polys){shape(f);ctx.fillStyle='#d8c48e';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1;ctx.stroke();}
 if(mark&&p>=0.6){if(LAND[mark]){ctx.strokeStyle=LEAF;ctx.lineWidth=4;for(const f of LAND[mark]){shape(f);ctx.stroke();}}else if(NAME_AT[mark]){ctx.strokeStyle=LEAF;ctx.lineWidth=4;for(const [x,y] of NAME_AT[mark]){ctx.strokeRect(x-65,y-15,130,30);}}}
 if(names!==false&&p>=0.3){for(const [name,points] of Object.entries(NAME_AT)){for(const [x,y] of points){label(ctx,name===blank&&!solve?'?':name,x,y,12);}}}
};
const describeWorld=q=>`a world map with north at the top, showing the seven continents and five oceans${q.blank?', with one name hidden':''}${q.mark&&q.mark!==q.blank?`, with ${q.mark} outlined`:''}`;
const DRAW={theater:drawTheater,passages,villageRecords,chain,program,...GEO_DRAW,...SCI_DRAW,...MID_DRAW,...HIGH_DRAW,groups,array,line,bar,coins,blocks,tiles,compass,word,matter,timeline,bars,pair,rule,cycle,ruler,world};
export const PRIMITIVES=Object.freeze(Object.keys(DRAW));
/* Pictures are drawn in PIC_W x PIC_H units. Give the canvas a backing store as sharp as its on-screen size and the
   screen's pixel density (up to 4x), and scale the context to match, so picture text is crisp instead of a stretched
   640-pixel bitmap. Resizing a canvas clears it, so this runs before each first draw. */
/* v2:theater: when the picture has room for at least one device pixel per picture unit, it is shown at a whole
   number k of device pixels per unit (its CSS width snapped down to 640*k/dpr) and gets .pixel-fit, which
   style.css renders with image-rendering:pixelated, so sprites and theater scenes are never resampled (style
   rule 2). When snapping would lose more than a third of the room (or on phones) it keeps the old fit and smooth scaling. */
export function crispCtx(el){const dpr=globalThis.devicePixelRatio||1,live=!!(el.style&&el.clientWidth);if(live)el.style.width='';
 /* content box: clientWidth/Height include padding, the CSS width may include the border too (border-box) */
 let padX=0,padY=0,extra=0;if(live&&typeof getComputedStyle==='function'){const cs=getComputedStyle(el),n=v=>parseFloat(v)||0;padX=n(cs.paddingLeft)+n(cs.paddingRight);padY=n(cs.paddingTop)+n(cs.paddingBottom);
  if(cs.boxSizing==='border-box')extra=padX+n(cs.borderLeftWidth)+n(cs.borderRightWidth);}
 const room=live?Math.min(el.clientWidth-padX,el.clientHeight?(el.clientHeight-padY)*PIC_W/PIC_H:Infinity):PIC_W;
 /* snap only when the whole-number size keeps at least 65% of the room (style rule 2: letterbox before blur); a smaller one would be too small, so it fits smoothly instead */
 const kf=Math.floor(dpr*room/PIC_W),fit=live&&kf>=1&&PIC_W*kf/dpr>=.65*room,k=Math.max(1,Math.min(4,fit?kf:Math.ceil(dpr*room/PIC_W)));
 if(fit){el.style.width=`${PIC_W*k/dpr+extra}px`;el.classList?.add('pixel-fit');}else el.classList?.remove('pixel-fit');
 if(el.width!==PIC_W*k){el.width=PIC_W*k;el.height=PIC_H*k;}const ctx=el.getContext('2d');ctx.setTransform?.(k,0,0,k,0,0);
 /* oct25-quizpolish (P7): labels grow to LABEL_MIN CSS px on a phone (pixelText) */
 if(ctx)ctx.pqUnit=live&&el.ownerDocument?.documentElement?.classList?.contains('m-mode')?room/PIC_W:0;return ctx;}
/* How long a step's picture runs, and whether it keeps drawing after that (theater idle loops). */
export const picLength=(pic,dur=2.5)=>{const one=[].concat(pic)[0];return one?.t==='theater'?theaterLength(one):dur;};
export const picLive=pic=>[].concat(pic).some(one=>one?.t==='theater'&&theaterLive(one));
/* One type system and one board (art review round 2): the picture sits on the UI pack's parchment panel, and
   every label is drawn in the Pixel Operator bitmap font (ui/canvas-ui.js) at a whole scale. Primitives keep
   calling fillText/measureText; this wrapper routes them to the bitmap font once it has loaded, and falls back
   to the canvas font before that (and in Node). */
const pixelReady=c=>{try{return drawPixelText(c,'',0,0,{outline:null})!==false;}catch{return false;}};
/* The bitmap font has no superscripts, subscripts, degree sign or math signs (it would draw x³ as "x3", 40° as "40o" and drop ∫), so a label with
   any of them is drawn in the canvas font instead, where they are real characters. */
const MATH_GLYPH=/[\u00b0\u00b2\u00b3\u00b9\u02e3\u2070-\u209f∫∑ΣπθΔ√∞≤≥′×÷≈±≠∠△∥⊥≅→←↑↓]/;
const fontOf=f=>{const m=/(bold )?(\d+(?:\.\d+)?)px/.exec(f||'')||[];return {bold:!!m[1],scale:(+m[2]||14)>=16?2:1};};
/* Round 3 (17 Oct): those canvas-font labels never go below 16px, the bitmap font's own size, so a 10px "40°N" stays readable once the picture is scaled down */
const mathFont=(t,f,b=1)=>{const o=t.font;t.font=o.replace(/(\d+(?:\.\d+)?)px/,(m,n)=>`${Math.max(16,+n)*b}px`);const r=f();t.font=o;return r;};
/* oct25-quizpolish (P7): on a phone a lesson picture is drawn at about half size, so its 16px labels read at 7-9 CSS px. crispCtx sets
   ctx.pqUnit (CSS px per picture unit, phone mode only) and a label whose font would show under LABEL_MIN CSS px grows to it (at most 1.6x;
   the big bitmap size is never boosted, so a painter that measures text never drops a title to the small size for it);
   each label grows about its own anchor, and a label that would then run wider than the picture grows only as far as it fits. */
/* oct26-phonelesson: a phone lesson picture's CSS width (border bw included) in a lesson body room px tall (less eqH, the equation line over
   it) and textW px wide (its content box less the column gap): as tall as the room allows, but never so wide that the step's text column
   gets under PHONE_TEXT px. */
export const PHONE_TEXT=280;
export const phonePicWidth=(room,textW,eqH=0,bw=6)=>{const cap=Math.max(200,Math.min(PIC_W+bw,textW-PHONE_TEXT));return Math.min(cap,Math.floor((Math.max(90,room-eqH)-bw)*PIC_W/PIC_H+bw));};
/* oct26-phonelesson: 12 (was 11). With the bigger phone picture (main.js phonePic) most labels need no more growth than they had at 11. */
export const LABEL_MIN=12;
/* the factor for a label of em px (picture units) on a canvas drawn at unit CSS px per picture unit; 1 off a phone (unit 0) */
export const labelBoost=(unit,em=16)=>unit>0&&em*unit<LABEL_MIN?Math.min(1.6,LABEL_MIN/(em*unit)):1;
const fitBoost=(b,w)=>b>1&&w*b>PIC_W-8?Math.max(1,(PIC_W-8)/w):b,mathPx=f=>Math.max(16,+(/(\d+(?:\.\d+)?)px/.exec(f||'')||[0,16])[1]);
function pixelText(ctx){
 if(!pixelReady(ctx))return ctx;
 const U=ctx.pqUnit>0?ctx.pqUnit:0,bOf=em=>labelBoost(U,em);
 /* inside(t,x,w,al) -> x moved so a w-wide run stays 4px inside the picture; only when unrotated (a rotated axis title is left alone), in picture units */
 const base=ctx.getTransform?.(),inside=(t,x,w,al)=>{const m=t.getTransform?.();if(!m||!base||m.b||m.c||!m.a)return x;const k=m.a/base.a,l=(al==='center'?x-w/2:al==='right'||al==='end'?x-w:x),pl=(m.a*l+m.e-base.e)/base.a,pw=w*k;
  if(pw>PIC_W-8||(pl>=4&&pl+pw<=PIC_W-4))return x;return x+(pl<4?4-pl:PIC_W-4-(pl+pw))/k;},
  over=(t,x,w,al)=>{const m=t.getTransform?.();if(!m||!base||m.b||m.c||!m.a)return false;const l=(al==='center'?x-w/2:al==='right'||al==='end'?x-w:x),pl=(m.a*l+m.e-base.e)/base.a;return pl<4||pl+w*m.a/base.a>PIC_W-4;};
 return new Proxy(ctx,{get(t,k){
  if(k==='fillText')return (s,x,y)=>{if(MATH_GLYPH.test(String(s))){const b=fitBoost(bOf(mathPx(t.font)),mathFont(t,()=>t.measureText(String(s)).width));mathFont(t,()=>t.fillText(s,inside(t,x,t.measureText(String(s)).width,t.textAlign),y),b);return;}const f=fontOf(t.font),col=typeof t.fillStyle==='string'?t.fillStyle:INK,al=t.textAlign==='center'?'center':(t.textAlign==='right'||t.textAlign==='end')?'right':'left',bl=t.textBaseline==='middle'?'middle':(t.textBaseline==='top'||t.textBaseline==='hanging')?'top':'alphabetic';
   /* 17 Oct: text never runs off the picture: a big line that would cross an edge drops to the small size, then slides inside */
   const str=String(s);let b=fitBoost(bOf(16*f.scale),measurePixelText(str,f)),w=measurePixelText(str,f)*b;if(f.scale===2&&over(t,x,w,al)){f.scale=1;b=fitBoost(bOf(16),measurePixelText(str,f));w=measurePixelText(str,f)*b;}x=inside(t,x,w,al);
   if(b>1){t.save();t.translate(x,y);t.scale(b,b);const ok=drawPixelText(t,str,0,0,{scale:f.scale,bold:f.bold,color:col,outline:null,align:al,baseline:bl});t.restore();if(ok===false)t.fillText(s,x,y);return;}
   if(drawPixelText(t,str,x,y,{scale:f.scale,bold:f.bold,color:col,outline:null,align:al,baseline:bl})===false)t.fillText(s,x,y);};
  if(k==='measureText')return s=>{if(MATH_GLYPH.test(String(s))){const w=mathFont(t,()=>t.measureText(s).width);return {width:w*fitBoost(bOf(mathPx(t.font)),w)};}const f=fontOf(t.font),w=measurePixelText(String(s),f);return {width:w*fitBoost(bOf(16*f.scale),w)};};
  const v=t[k];return typeof v==='function'?v.bind(t):v;},set(t,k,v){t[k]=v;return true;}});
}
export function drawPic(ctx,pic,p=1,o={}){const list=Array.isArray(pic)?pic:[pic],q=o.reduced?1:clamp(p);
 ctx.save();loadCanvasUI();ctx.fillStyle=PAPER;ctx.fillRect(0,0,PIC_W,PIC_H);drawPanel(ctx,'parchment',0,0,PIC_W,PIC_H,{scale:2});
 const c=pixelText(ctx);
 for(const one of list){const f=DRAW[one?.t];if(!f)throw new Error(`lesson-art: unknown primitive ${one?.t}`);f(c,one,q,o);}
 ctx.restore();}
export function describe(pic){const list=Array.isArray(pic)?pic:[pic];return list.map(q=>
 q.t==='theater'?describeTheater(q):
 q.t==='passages'?describePassages(q):
 q.t==='villageRecords'?describeHistory(q):
 q.t==='chain'?describeChain(q):
 q.t==='program'?describeProgram(q):
 GEO_DRAW[q.t]?describeGeo(q):
 SCI_DRAW[q.t]?describeScience(q):
 MID_DRAW[q.t]?describeMiddle(q):
 HIGH_DRAW[q.t]?describeHigh(q):
 q.t==='groups'?`${q.n} baskets with ${q.k} apples in each`:
 q.t==='array'?(q.turn?`${q.r} rows of ${q.c} dots, turning on its side`:`${q.r} rows of ${q.c} dots`):
 q.t==='line'?`a number line from 0 to ${q.max} with ${q.jumps} jump${q.jumps===1?'':'s'} of ${q.hop}${q.back?' backwards':''}${q.from?` starting at ${q.from}`:''}${q.mark!=null?`, with ${q.mark} circled`:''}`:
 q.t==='bar'?`a bar cut into ${q.parts} equal parts, ${q.shade} shaded`:
 q.t==='bars'?describeBars(q):
 q.t==='pair'?describePair(q):
 q.t==='rule'?describeRule(q):
 q.t==='cycle'?describeCycle(q):
 q.t==='ruler'?describeRuler(q):
 q.t==='world'?describeWorld(q):
 q.t==='coins'?coinWords(q.coins):
 q.t==='timeline'?`${q.ends?`a chain, ${q.ends[0].replace(/[←→]/g,'').trim()} first`:'a timeline, earlier to later'}: ${q.events.map(e=>e==null?'a blank':e).join(', ')}`:
 q.t==='matter'?(q.jars?q.jars.map(j=>`a jar of ${j.hide?'something':j.state}`).join(', '):`a jar where a ${NEXT[q.change]?.[0]} changes`):
 q.t==='word'?`the word ${q.base}${q.suffix&&q.solve?` with ${q.suffix} added`:''}${q.n&&(NOUN_ART[q.base]||NOUN_ANIM[q.base])?`, and ${q.n} of them`:''}`:
 q.t==='compass'?(q.from?`a compass rose, and ${q.to} beside ${q.from} on a map with north at the top`:q.face?`a compass rose with an arrow facing ${q.face}${q.turn?`, turning ${q.turn}`:''}`:'a compass rose'):
 q.t==='tiles'?q.seq.map(x=>x==null?'a blank':x).join(', '):
 q.t==='blocks'?`base-ten blocks: ${q.h||0} hundreds, ${q.ten||0} tens and ${q.one||0} ones${q.regroup==='split'&&q.ten>=1?', with one ten breaking into ten ones':q.regroup&&q.one>=10?', with ten ones being traded for a ten':''}`:'a picture').join('; ');}
/* "2 dimes, 1 nickel and 3 pennies": names and how many of each, never the total. */
export function coinWords(list){const n={};for(const k of list)n[k]=(n[k]||0)+1;const parts=['q','d','n','p'].filter(k=>n[k]).map(k=>`${n[k]} ${n[k]===1?COIN[k].name:k==='p'?'pennies':COIN[k].name+'s'}`);
 return parts.length>1?`${parts.slice(0,-1).join(', ')} and ${parts.at(-1)}`:parts[0]||'no coins';}
