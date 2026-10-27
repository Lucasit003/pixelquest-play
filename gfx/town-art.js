/* Oakhaven visual layer. Destinations and interaction coordinates remain in maps.js. */
import {BUILDINGS} from '../game/maps.js';
const r=(c,x,y,w,h,col)=>{c.fillStyle=col;c.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h));};
const noise=n=>{const v=Math.sin(n*127.1+311.7)*43758.5453;return v-Math.floor(v);};
const oval=(c,x,y,rx,ry,col)=>{c.fillStyle=col;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill();};
const line=(c,pts,col,w=1)=>{c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.lineWidth=w;c.strokeStyle=col;c.lineCap='round';c.lineJoin='round';c.stroke();};
export const townHeight=b=>({library:141,guild:141,smith:111,alchemist:108,home:90}[b.action]||b.h);
const streets=[{w:46,p:[[336,0],[336,90],[338,170],[339,239]]},{w:34,p:[[339,325],[362,359],[398,434],[398,505],[337,549],[337,580]]},{w:27,p:[[293,259],[264,246],[240,231],[225,215]]},{w:30,p:[[386,259],[414,244],[441,230],[455,216]]},{w:29,p:[[270,302],[227,324],[187,356],[138,385]]},{w:27,p:[[407,302],[454,326],[504,355],[553,379]]},{w:23,p:[[398,504],[364,506],[330,497]]}];
function paving(c,x,y,w,h){r(c,x,y,w,h,'#686e62');let row=0;for(let yy=y;yy<y+h;yy+=7,row++){let xx=x-9+(row%2)*5;while(xx<x+w){const n=noise(xx*3+yy*7),sw=8+Math.floor(n*5);r(c,xx,yy,sw-1,6,['#969887','#8c917f','#9ea08c','#858d7d'][Math.floor(n*4)]);r(c,xx+1,yy,sw-3,1,'#acae96');if(n>.88)r(c,xx+3,yy+3,2,1,'#79816f');xx+=sw;}}}
function street(c,{p,w},seed){line(c,p,'#a49b79',w);line(c,p,'#aca280',w-7);c.beginPath();p.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.lineWidth=w;c.lineCap='round';c.lineJoin='round';for(let y=0;y<580;y+=2)for(let x=110;x<580;x+=2){const n=noise(x*17+y*11+seed);if(n<.9||!c.isPointInStroke(x,y))continue;r(c,x,y,n>.99?3:1,1,n>.97?'#c0b08a':'#968e6f');}
 for(let i=1;i<p.length;i++){const [ax,ay]=p[i-1],[bx,by]=p[i],d=Math.hypot(bx-ax,by-ay),nx=-(by-ay)/d,ny=(bx-ax)/d;for(let t=0;t<d;t+=3){const n=noise(t+i*87+seed);for(const sign of [-1,1]){const off=(w/2+1+(n-.5)*5)*sign,x=ax+(bx-ax)*t/d+nx*off,y=ay+(by-ay)*t/d+ny*off;r(c,x,y,2+n*2,1+n*2,n>.7?'#79825c':'#63774f');}}}}
export function drawTownGround(c){r(c,0,0,700,580,'#415a3e');const colors=['#3a543b','#3e583d','#425c3e','#465f40','#496242'];for(let y=0;y<580;y+=2)for(let x=0;x<700;x+=2){const n=Math.sin(x/55+Math.sin(y/71))*.45+Math.sin(y/43+x/101)*.3,rnd=noise(x*3+y*71);r(c,x,y,2,2,colors[Math.max(0,Math.min(4,Math.floor((n+1)*2.5)))]);const patch=Math.sin(x/17)*Math.sin(y/23);if(rnd>.978&&patch>.1){r(c,x,y,2,1,'#70804e');r(c,x+1,y-2,1,2,'#6c7e4e');}}
 const water=[];for(let y=0;y<=590;y+=8)water.push([75+Math.sin(y/80)*20,y]);line(c,water,'#6c7958',37);line(c,water,'#283f40',30);line(c,water,'#406668',25);line(c,water.map(([x,y])=>[x-7,y]),'#668980',3);for(let i=0;i<70;i++){const y=noise(i+9)*580;r(c,75+Math.sin(y/80)*20+(noise(i+20)-.5)*20,y,3+noise(i)*5,1,'#75978c');}
 for(const {p,w}of streets){line(c,p,'#526548',w+7);line(c,p,'#8b8c68',w+3);}streets.forEach((s,i)=>street(c,s,i*713));
 /* Curb, inner border and quiet paving. Four broad thresholds connect the street mouths. */
 oval(c,339,286,88,61,'#3f5141');oval(c,339,283,88,61,'#777e68');oval(c,339,282,85,58,'#b2ae90');oval(c,339,282,81,54,'#676f60');
 c.save();c.beginPath();c.ellipse(339,282,78,51,0,0,Math.PI*2);c.clip();paving(c,260,228,160,111);c.restore();
 for(let i=0;i<44;i++){const a=i*Math.PI*2/44;line(c,[[339+Math.cos(a)*81,282+Math.sin(a)*54],[339+Math.cos(a)*85,282+Math.sin(a)*58]],'#6d7561',1);}
 c.save();c.beginPath();c.ellipse(339,282,90,65,0,0,Math.PI*2);c.ellipse(339,282,77,50,0,0,Math.PI*2);c.clip('evenodd');for(const {p,w}of streets)line(c,p,'#a49b79',w);c.restore();
 for(const {p,w}of streets)for(let i=1;i<p.length;i++){const [ax,ay]=p[i-1],[bx,by]=p[i],dx=bx-ax,dy=by-ay,ex=ax-339,ey=ay-282,A=dx*dx/(84*84)+dy*dy/(57*57),B=2*(ex*dx/(84*84)+ey*dy/(57*57)),C=ex*ex/(84*84)+ey*ey/(57*57)-1,D=B*B-4*A*C;if(D<0)continue;for(const t of [(-B-Math.sqrt(D))/(2*A),(-B+Math.sqrt(D))/(2*A)]){if(t<0||t>1)continue;const x=ax+dx*t,y=ay+dy*t,d=Math.hypot(dx,dy),nx=-dy/d*(w/2-2),ny=dx/d*(w/2-2);line(c,[[x-nx,y-ny],[x+nx,y+ny]],'#6c7563',6);line(c,[[x-nx,y-ny-1],[x+nx,y+ny-1]],'#b0ac90',4);}}

 oval(c,339,285,28,17,'#596652');oval(c,339,282,27,16,'#b0ad90');oval(c,339,281,23,13,'#747e68');
 for(const b of BUILDINGS){c.save();c.beginPath();c.rect(b.x-19,b.y+1,38,15);c.clip();paving(c,b.x-19,b.y+1,38,15);c.restore();}
 /* Southern threshold and brook bridge frame arrival without blocking the road. */
 for(let y=322;y<354;y+=4){r(c,44,y,74,3,'#897552');r(c,44,y,74,1,'#b6a077');}r(c,45,319,74,3,'#403e32');r(c,45,355,74,3,'#403e32');
 for(let y=553;y<565;y+=5){r(c,315,y,44,4,'#8c9279');r(c,316,y,42,1,'#b1af92');}
 for(const [x,y,w,h]of [[177,217,23,12],[477,218,23,12],[92,382,29,13],[575,374,28,15],[286,491,22,14]]){r(c,x,y,w,h,'#343f30');r(c,x,y,w,2,'#8b8160');for(let i=0;i<5;i++){r(c,x+3+i*4,y+4,2,5,'#657d4d');r(c,x+3+i*4,y+3,2,2,x<300?'#aa947c':'#a799b1');}}
}
export const TOWN_DETAILS=[
 {kind:'bench',x:282,y:285,h:12},{kind:'bench',x:397,y:285,h:12},
 {kind:'books',x:193,y:223,h:17},{kind:'academic',x:258,y:211,h:29},
 {kind:'board',x:489,y:238,h:28},{kind:'banner',x:420,y:219,h:34},
 {kind:'anvil',x:170,y:385,h:16},{kind:'logs',x:111,y:390,h:12},{kind:'rack',x:185,y:370,h:27},
 {kind:'potions',x:578,y:389,h:19},{kind:'herbs',x:519,y:380,h:14},
 {kind:'fence',x:295,y:509,h:14},{kind:'planter',x:303,y:495,h:12},
 {kind:'entry',x:306,y:559,h:31},{kind:'entry',x:370,y:559,h:31}];
export function drawTownDetail(c,k){const {x,y,kind}=k,ink='#27332e',wood='#786042',lit='#b29a6d';c.save();c.translate(x,y);oval(c,1,0,kind==='bench'?13:10,3,'#21392e66');
 const box=(a,b,w,h,col)=>r(c,a,b,w,h,col),post=(a,h)=>{box(a,-h,3,h,ink);box(a,-h,1,h,wood);};
 if(kind==='bench'){post(-10,10);post(8,10);box(-13,-13,26,3,ink);box(-12,-12,24,1,lit);box(-13,-7,26,4,wood);box(-12,-7,24,1,lit);}
 if(kind==='books'||kind==='potions'){post(-8,12);post(7,12);box(-11,-12,23,3,wood);box(-11,-12,23,1,lit);if(kind==='books'){for(let i=0;i<3;i++){box(-8+i*5,-16-i%2*2,8,3,['#596b8a','#695174','#87674a'][i]);box(-7+i*5,-15-i%2*2,6,1,'#c9bea0');}}else for(let i=0;i<4;i++){box(-8+i*5,-18-i%2*2,4,6,ink);box(-7+i*5,-20-i%2*2,2,3,'#b29f7d');box(-7+i*5,-17-i%2*2,2,3,['#809ca7','#8f7faa','#74a18a','#b58e65'][i]);}}
 if(kind==='board'){post(-10,24);post(9,24);box(-13,-28,28,19,ink);box(-12,-27,26,17,wood);for(const [a,b]of [[-9,-24],[1,-22]]){box(a,b,8,10,'#c9bd96');box(a+1,b+2,6,1,'#827453');box(a+1,b+4,4,1,'#827453');}box(-15,-29,32,3,'#9a8158');}
 if(kind==='banner'||kind==='academic'){post(0,31);box(-2,-32,13,2,lit);box(4,-29,10,18,ink);box(5,-28,8,15,kind==='banner'?'#963f39':'#575988');box(5,-28,8,1,'#ccaf79');if(kind==='banner'){box(8,-25,2,10,'#d5b574');box(6,-21,6,2,'#d5b574');}else{box(6,-24,6,5,'#d5c8a5');box(8,-24,1,5,'#7d7991');}}
 if(kind==='anvil'){box(-7,-5,14,5,ink);box(-4,-10,8,7,'#57646a');box(-10,-15,19,5,'#32434b');box(-9,-15,17,2,'#91a0a1');line(c,[[8,-14],[14,-13],[8,-10]],'#6f7d80',2);}
 if(kind==='logs'){for(let i=0;i<4;i++){box(-9+i%2*9,-4-Math.floor(i/2)*5,11,4,'#514332');box(-9+i%2*9,-4-Math.floor(i/2)*5,3,3,lit);}}
 if(kind==='rack'){post(-8,23);post(9,23);box(-10,-21,22,3,wood);for(let i=0;i<3;i++){box(-6+i*6,-25,2,20,'#49545a');box(-6+i*6,-25,1,16,'#afb4a6');box(-8+i*6,-10,6,2,'#b09860');}}
 if(kind==='herbs'||kind==='planter'){box(-7,-7,15,7,wood);box(-8,-8,17,2,lit);for(let i=0;i<4;i++){box(-6+i*4,-12-i%2*3,3,5,'#73864f');box(-5+i*4,-13-i%2*3,2,2,kind==='planter'?'#b78a80':'#899b63');}}
 if(kind==='fence'){for(let i=0;i<4;i++)post(-12+i*8,14);box(-13,-11,29,2,lit);box(-13,-5,29,2,wood);}
 if(kind==='entry'){box(-5,-24,11,24,'#536153');box(-4,-24,9,2,'#a4a588');box(-6,-25,13,3,'#8a9078');box(-3,-32,7,7,ink);box(-2,-31,5,5,'#d5b679');box(0,-30,1,4,'#ffe2a0');}
 c.restore();}
