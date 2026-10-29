// World-map drawing (Castle Crashers level select), STYLE_GUIDE rule 0: every pixel comes from a downloaded pack.
// The chapter maps are Tiled maps (art/tiled/worldmap/<chapter>.tmx) baked 1:1 by the Oakhaven pipeline
// (tools/bake-worldmap.mjs -> assets/worldmap/<chapter>.js + webp chunks and sprite atlas); this file draws them
// the way scenes/town.js draws Oakhaven, plus the map UI sliced from the Dark Ages UI pack, Shikashi icons and
// ERW animations (assets/worldmap/ui-oct25.png + ui-oct25.json), with the game's font (fonts/PixelOperator, CC0).
// Board art stays at native size; locked roads use a cached desaturation effect.
// Used by scenes/worldmap.js in the browser and by tools/bake-worldmap-review.mjs in node.
import {MAPS,ROADS,pathPoints} from '../game/worldmap-layout.js';
export const VIEW_W=480,VIEW_H=270,BAR_H=40,FRAME=12;
/* Desktop's stage bezel covers 13 * 2 CSS px inside the canvas at 1x. Keep essential UI a further
   two native pixels inside that; higher display scales and the frameless mobile view also fit. */
export const UI_SAFE_INSET=28;
let makeCanvas=(w,h)=>{if(typeof OffscreenCanvas!=='undefined')return new OffscreenCanvas(w,h);const c=document.createElement('canvas');c.width=w;c.height=h;return c;};
export const setCanvasFactory=f=>{makeCanvas=f;};
export const FONT='16px PixelOperator',FONT_BOLD='16px PixelOperatorBold';
export const BASE=new URL('../assets/worldmap/',import.meta.url);

/* ---------- loading ---------- */
const ready=im=>im&&im.complete!==false&&(im.naturalWidth??im.width??1)>0;
/* loader(url)->Promise<image>, json(url)->Promise<object>, mod(url)->Promise<module>. Browser defaults. */
export function makeArt({loader,json,mod}={}){
 loader||=url=>new Promise((ok,no)=>{const i=new Image();i.onload=()=>ok(i);i.onerror=no;i.src=url.href;});
 json||=url=>fetch(url).then(r=>r.json());mod||=url=>import(url.href);
 const art={scenes:{},ui:null,uiMeta:null};
 /* the PixelLab star for the running star total and a cleared pad's stars (art/pixellab/tiers/) */
 try{loader(new URL('../../ui/skin/pl-icons/tier-star.png',BASE)).then(i=>{art.star=i;}).catch(()=>{});}catch{}
 const plateReady=loader(new URL('../../ui/skin/pl-plate.png',BASE)).then(i=>{art.plate=i;}).catch(()=>{});
 const lockReady=loader(new URL('../../ui/skin/pl-icons/tier-lock.png',BASE)).then(i=>{art.lock=i;}).catch(()=>{});
 art.uiReady=Promise.all([plateReady,lockReady,loader(new URL('ui-oct25.png',BASE)).then(i=>{art.ui=i;}),json(new URL('ui-oct25.json',BASE)).then(j=>{art.uiMeta=j;})]).catch(()=>{});
 if(typeof FontFace!=='undefined'&&typeof document!=='undefined'&&document.fonts){for(const [fam,file] of [['PixelOperator','PixelOperator.ttf'],['PixelOperatorBold','PixelOperator-Bold.ttf']]){const f=new FontFace(fam,`url(${new URL('../../fonts/'+file,BASE).href})`);f.load().then(x=>{document.fonts.add(x);widths.clear();}).catch(()=>{});}}
 art.scene=id=>{if(art.scenes[id])return art.scenes[id];const S=art.scenes[id]={id,D:null,I:null,buckets:null,B:256};
  /* Keep the painted master intact; road dimming is a cached runtime effect. */
  if(MAPS[id]?.art){S.ready=loader(new URL(MAPS[id].art,BASE)).then(im=>{S.board=im;S.D={board:true,w:MAPS[id].w,h:MAPS[id].h};}).catch(()=>{});return S;}
  S.ready=mod(new URL(id+'.js',BASE)).then(m=>{const D=m.default;const L=f=>loader(new URL(f,BASE)).catch(()=>null);
   S.I={chunks:D.chunks.map(()=>null),pages:D.pages.map(()=>null),tiles:null,cells:null};
   S.buckets=new Map();D.sprites.forEach((s,i)=>{for(let by=Math.floor(s[2]/S.B);by<=Math.floor((s[2]+s[4])/S.B);by++)for(let bx=Math.floor(s[1]/S.B);bx<=Math.floor((s[1]+s[3])/S.B);bx++){const k=by*1024+bx;if(!S.buckets.has(k))S.buckets.set(k,[]);S.buckets.get(k).push(i);}});
   S.D=D;
   return Promise.all([...D.chunks.map((c,i)=>L(c[4]).then(im=>{S.I.chunks[i]=im;})),...D.pages.map((p,i)=>L(p[0]).then(im=>{S.I.pages[i]=im;})),
    D.anim.tiles?L(D.anim.tiles).then(im=>{S.I.tiles=im;}):null,D.anim.cellsImage?L(D.anim.cellsImage).then(im=>{S.I.cells=im;}):null]);}).catch(()=>{});
  return S;};
 return art;}

/* ---------- UI cells ---------- */
const cell=(art,name,i=0)=>{const m=art.uiMeta?.[name];if(!m)return null;const n=m.frames.length;return m.frames[((Math.floor(i)%n)+n)%n];};
export const frameIndex=(art,name,t)=>Math.floor(t*(art.uiMeta?.[name]?.fps||8));
/* Blit a UI cell with its anchor: ax/ay are fractions of the cell (0.5,1 = bottom centre). */
export function blit(c,art,name,x,y,{i=0,ax=.5,ay=1,alpha=1,flip=false}={}){const f=cell(art,name,i);if(!f||!ready(art.ui))return;const [sx,sy,w,h]=f;const dx=Math.round(x-w*ax),dy=Math.round(y-h*ay);
 c.save();c.globalAlpha*=alpha;if(flip){c.translate(dx+w,dy);c.scale(-1,1);c.drawImage(art.ui,sx,sy,w,h,0,0,w,h);}else c.drawImage(art.ui,sx,sy,w,h,dx,dy,w,h);c.restore();}
/* 9-slice with tiled (never stretched) edges and centre. */
export function slice9(c,art,name,x,y,w,h,{noCentre=false}={}){const m=art.uiMeta?.[name];if(!m||!ready(art.ui))return;const [sx,sy,sw,sh]=m.frames[0],k=m.slice;x=Math.round(x);y=Math.round(y);w=Math.round(w);h=Math.round(h);
 const mw=sw-2*k,mh=sh-2*k,tile=(px,py,pw,ph,dx,dy,dw,dh)=>{for(let yy=0;yy<dh;yy+=ph)for(let xx=0;xx<dw;xx+=pw){const cw=Math.min(pw,dw-xx),ch=Math.min(ph,dh-yy);c.drawImage(art.ui,px,py,cw,ch,dx+xx,dy+yy,cw,ch);}};
 if(!noCentre)tile(sx+k,sy+k,mw,mh,x+k,y+k,w-2*k,h-2*k);
 tile(sx+k,sy,mw,k,x+k,y,w-2*k,k);tile(sx+k,sy+sh-k,mw,k,x+k,y+h-k,w-2*k,k);tile(sx,sy+k,k,mh,x,y+k,k,h-2*k);tile(sx+sw-k,sy+k,k,mh,x+w-k,y+k,k,h-2*k);
 c.drawImage(art.ui,sx,sy,k,k,x,y,k,k);c.drawImage(art.ui,sx+sw-k,sy,k,k,x+w-k,y,k,k);c.drawImage(art.ui,sx,sy+sh-k,k,k,x,y+h-k,k,k);c.drawImage(art.ui,sx+sw-k,sy+sh-k,k,k,x+w-k,y+h-k,k,k);}

/* ---------- text: the game's pixel font file ---------- */
const widths=new Map();let probe=null;
/* Width by rendering, because measureText is unreliable for registered fonts in some canvases. */
export function textWidth(str,font=FONT){const key=font+'|'+str;if(widths.has(key))return widths.get(key);probe||=makeCanvas(512,24);/* combatpolish-oct28: these scratch canvases are read back with getImageData (the probe on every new label width), so they ask to stay on the CPU: no willReadFrequently console warning */const g=probe.getContext('2d',{willReadFrequently:true});g.clearRect(0,0,512,24);g.font=font;g.textBaseline='top';g.fillStyle='#000';g.fillText(str,0,2);
 const d=g.getImageData(0,0,512,24).data;let r=0;for(let x=511;x>=0&&!r;x--)for(let y=0;y<24;y++)if(d[(y*512+x)*4+3]>40){r=x+1;break;}const w=r||Math.round(str.length*6);widths.set(key,w);return w;}
export function text(c,str,x,y,{font=FONT,color='#2a1a10',align='left',shadow=null}={}){const w=textWidth(str,font);const px=Math.round(align==='center'?x-w/2:align==='right'?x-w:x);c.font=font;c.textBaseline='top';
 if(shadow){c.fillStyle=shadow;c.fillText(str,px,Math.round(y)+1);}c.fillStyle=color;c.fillText(str,px,Math.round(y));return w;}
export function wrap(str,maxW,font=FONT){const words=String(str).split(/\s+/).filter(Boolean),lines=[];let cur='';for(const w of words){const nx=cur?cur+' '+w:w;if(textWidth(nx,font)>maxW&&cur){lines.push(cur);cur=w;}else cur=nx;}if(cur)lines.push(cur);return lines;}

/* ---------- the scene ---------- */
const frameAt=(durs,ms)=>{const total=durs.reduce((a,b)=>a+b,0)||1;let t=ms%total;for(let i=0;i<durs.length;i++){if(t<durs[i])return i;t-=durs[i];}return 0;};
/* Top-left of the view for a camera centre; the map may slide under the frame and bar, never further. */
/* The winding board fills the native view; drawing and taps share the identity transform. */
export function boardPoint(chapter,x,y,inverse=false){const [dx,dy,k]=MAPS[chapter]?.view||[0,0,1];return inverse?{x:(x-dx)/k,y:(y-dy)/k}:{x:dx+x*k,y:dy+y*k};}
export function camera(chapter,cam){const m=MAPS[chapter];if(m.fit)return{x:Math.round((m.w-VIEW_W)/2),y:Math.round((m.h-VIEW_H)/2)};return{x:Math.round(Math.max(-FRAME,Math.min(m.w-VIEW_W+FRAME,cam.x-VIEW_W/2))),y:Math.round(Math.max(-FRAME,Math.min(m.h-BAR.y,cam.y-VIEW_H/2)))};}
/* view: {chapter, cam:{x,y} (centre), nodes:[{id,x,y,kind,state,boss}], sel, hero:{x,y,moving}, drawHero(c,x,y,t),
          title, boss, subtitle, blurb, tierLine, stars, blurbAlpha, fade, banner, chapterName, toast, reveal:{pts,p}, burst:{x,y,t}} */
export function drawWorldmap(c,v,art,t){c.save();c.imageSmoothingEnabled=false;c.fillStyle='#1d2b22';c.fillRect(0,0,VIEW_W,VIEW_H);
 const S=art.scene(v.chapter),D=S.D;if(D?.board){drawBoard(c,v,art,S,t);c.setTransform(1,0,0,1,0,0);drawSign(c,v,art,t);c.restore();return;}if(D){const I=S.I,{x:ox,y:oy}=camera(v.chapter,v.cam);
 c.translate(-ox,-oy);const vx0=ox,vy0=oy,vx1=ox+VIEW_W,vy1=oy+VIEW_H;
 D.chunks.forEach(([x,y,w,h],i)=>{if(x<vx1&&x+w>vx0&&y<vy1&&y+h>vy0&&ready(I.chunks[i]))c.drawImage(I.chunks[i],x,y);});
 const A=D.anim,T=D.tile,ms=t*1000;
 if(A.cells.length&&ready(I.tiles)&&ready(I.cells)){const crop=(n,x,y)=>{if(n>=0)c.drawImage(I.cells,(n%A.cols)*T,Math.floor(n/A.cols)*T,T,T,x,y,T,T);};
  for(const r of A.cells){const x=r[0]*T,y=r[1]*T;if(x>=vx1||x+T<=vx0||y>=vy1||y+T<=vy0)continue;crop(r[2],x,y);for(let i=3;i<r.length;i+=3){const durs=A.durs[r[i]],f=(frameAt(durs,ms)+r[i+1])%durs.length;c.drawImage(I.tiles,f*T,r[i]*T,T,T,x,y,T,T);crop(r[i+2],x,y);}}}
 /* sprites in view in baked order, with the pad markers and the hero slotted in by their feet */
 const seen=new Set(),list=[];for(let by=Math.floor((vy0-8)/S.B);by<=Math.floor((vy1+8)/S.B);by++)for(let bx=Math.floor((vx0-8)/S.B);bx<=Math.floor((vx1+8)/S.B);bx++)
  for(const i of S.buckets.get(by*1024+bx)??[])if(!seen.has(i)){seen.add(i);const s=D.sprites[i];if(s[1]<vx1&&s[1]+s[3]>vx0&&s[2]<vy1&&s[2]+s[4]>vy0)list.push(i);}
 list.sort((a,b)=>a-b);
 const figs=[];for(const n of v.nodes){if(n.x<vx0-80||n.x>vx1+80||n.y<vy0-80||n.y>vy1+80)continue;figs.push({y:n.y+8,draw:()=>drawPad(c,art,n,n.id===v.sel,t)});}
 for(const w of v.wanderers||[])if(w.x>vx0-40&&w.x<vx1+40&&w.y>vy0-40&&w.y<vy1+60)figs.push({y:w.y,draw:()=>v.drawWanderer?.(c,w)});
 figs.push({y:v.hero.y+.5,draw:()=>{v.drawHero?.(c,Math.round(v.hero.x),Math.round(v.hero.y),t);if(v.sel&&!v.hero.moving){const b=Math.round((Math.sin(t*Math.PI*2/.8)+1));blit(c,art,'marker',v.hero.x,v.hero.y-50+b);}}});
 figs.sort((a,b)=>a.y-b.y);let fi=0;
 for(const i of list){const s=D.sprites[i];while(fi<figs.length&&figs[fi].y<s[5])figs[fi++].draw();drawSprite(c,I,D,s,ms);}
 while(fi<figs.length)figs[fi++].draw();
 drawFlyers(c,art,vx0,vy0,t);
 if(v.reveal)drawReveal(c,art,v.reveal,t);if(v.burst)blit(c,art,'sparkle',v.burst.x,v.burst.y+12,{i:Math.floor(v.burst.t*24)});
 c.setTransform(1,0,0,1,0,0);}
 drawUI(c,v,art,t);c.restore();}
function drawSprite(c,I,D,s,ms){const [ei,x,y,w,h,,fl,d]=s,e=D.entries[ei],page=I.pages[e[0]];if(!ready(page))return;
 const f=d>=0?frameAt(D.durs[d],ms+x*7+y*3):0,cols=e[7]||1,sx=e[1]+(f%cols)*e[3],sy=e[2]+Math.floor(f/cols)*e[4];const rx=Math.round(x),ry=Math.round(y),rw=Math.round(w),rh=Math.round(h);
 if(fl&3){c.save();c.translate(rx+(fl&1?rw:0),ry+(fl&2?rh:0));c.scale(fl&1?-1:1,fl&2?-1:1);c.drawImage(page,sx,sy,e[3],e[4],0,0,rw,rh);c.restore();}else c.drawImage(page,sx,sy,e[3],e[4],rx,ry,rw,rh);}

/* Pad states from pack art: locked = a barricade across the stone ring; cleared = a planted pennant; open = the
   crop sparkle glimmering in the ring; chapter boss = a flame skull; shop / arena = coins / crossed swords. */
function drawPad(c,art,n,sel,t){const x=n.x,y=n.y;
 /* every state sprite stands beside the ring at 1x: barricade across it when locked, a pennant planted on the right
    when cleared, the ERW sparkle in it while open, a skull on the left of the chapter boss, coins / swords for shop / arena */
 if(n.state==='locked'||n.state==='soon'){blit(c,art,'barricade',x,y+12);return;}
 /* cleared: the hero's victory flag planted beside the ring; still to do: a gold arrow bobbing over it (Castle Crashers) */
 if(n.kind==='level'&&n.state==='done')blit(c,art,art.uiMeta?.flag?'flag':'pennant',x+26,y+8,{i:frameIndex(art,art.uiMeta?.flag?'flag':'pennant',t)+Math.floor(x)});
 if(n.kind==='level'&&n.state==='open'&&!sel){blit(c,art,'sparkle',x,y+14,{i:frameIndex(art,'sparkle',t)+Math.floor(x/7)});if(art.uiMeta?.['arrow-down'])blit(c,art,'arrow-down',x,y-24+Math.round(Math.sin(t*4+x*.01)*2));}
 const icon=n.kind==='shop'?'icon-coins':n.kind==='arena'?'icon-swords':n.boss?'icon-skull':null;
 if(icon)blit(c,art,icon,x-34,y+14);}
/* Ambient life from pack loops: a bird crosses the view every 8 s and a butterfly every 9 s, on gentle curves. */
function drawFlyers(c,art,vx0,vy0,t,birdOnly){const bird=Math.floor(t/8),bp=(t%8)/8,bdir=bird%2?-1:1;if(bp<.7){const p=bp/.7,x=vx0+(bdir>0?-30+p*(VIEW_W+60):VIEW_W+30-p*(VIEW_W+60)),y=vy0+60+(bird*53%90)+Math.sin(p*6)*8;blit(c,art,'bird',x,y,{i:frameIndex(art,'bird',t),flip:bdir<0,ay:.5});}
 if(birdOnly)return;const fly=Math.floor((t+4)/9),fp=((t+4)%9)/9;if(fp<.8){const p=fp/.8,x=vx0+40+p*(VIEW_W-80),y=vy0+170-(fly*37%60)+Math.sin(p*14)*10+Math.sin(p*3)*20;blit(c,art,'butterfly',x,y,{i:frameIndex(art,'butterfly',t),flip:fly%2===1,ay:.5});}}
function drawReveal(c,art,r,t){const n=r.pts.length,k=Math.floor(r.p*(n-1));for(let j=0;j<5;j++){const i=k-j*5;if(i<0)break;const [x,y]=r.pts[i];blit(c,art,'sparkle',x,y+12,{i:Math.floor(t*14)+j*3,alpha:1-j*.18});}}


/* ---------- a painted board (owner 16 Oct: "make our map simpler") ---------- */
/* The chapter fits the view. Locked pads and roads are grey; cleared stops carry flags and stars. */
/* whole-pixel ellipse (row spans), so pad effects stay as crisp as the picture */
function pixEllipse(c,x,y,rx,ry){x=Math.round(x);y=Math.round(y);for(let dy=-ry;dy<=ry;dy++){const h=Math.round(rx*Math.sqrt(Math.max(0,1-(dy/(ry+.5))**2)));if(h>0)c.fillRect(x-h,y+dy,h*2+1,1);}}
const TIER_TINT={normal:null,heroic:[200,210,224],legendary:[246,196,64]};const tintCache={};
/* the flag's blue cloth recoloured once per tier: Heroic silver, Legendary gold */
function tintedFlag(art,tier,i){const rgb=TIER_TINT[tier];if(!rgb||!ready(art.ui))return null;const k=tier+i;if(tintCache[k])return tintCache[k];const f=cell(art,'flag',i);if(!f)return null;const [sx,sy,w,h]=f,cv=makeCanvas(w,h),g=cv.getContext('2d',{willReadFrequently:true});g.drawImage(art.ui,sx,sy,w,h,0,0,w,h);
 const d=g.getImageData(0,0,w,h);for(let p=0;p<d.data.length;p+=4){const r=d.data[p],gg=d.data[p+1],b=d.data[p+2];if(b>r+30&&b>gg+10){const l=(r+gg+b)/3/110;d.data[p]=Math.min(255,rgb[0]*l);d.data[p+1]=Math.min(255,rgb[1]*l);d.data[p+2]=Math.min(255,rgb[2]*l);}}g.putImageData(d,0,0);return tintCache[k]=cv;}
/* A clean half-size token: about 24 px tall, comparable to the huts and stop flags. */
let heroCv=null;export const HERO_K=.5;
function drawSmallHero(c,v,t){heroCv||=makeCanvas(160,128);const g=heroCv.getContext('2d');g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,160,128);g.imageSmoothingEnabled=false;
 v.drawHero?.(g,80,112,t);c.save();c.imageSmoothingEnabled=false;const x=Math.round(v.hero.x),y=Math.round(v.hero.y);
 c.globalAlpha=.35;c.fillStyle='#1a2a14';pixEllipse(c,x,y,5,2);c.globalAlpha=1;c.drawImage(heroCv,0,0,160,128,x-80*HERO_K,y+1-112*HERO_K,160*HERO_K,128*HERO_K);c.restore();}
/* Tint only cream road pixels near traced closed links. Scenery is never repainted. */
export function drawLockedRoads(c,v,S){if(!ready(S.board)||!v.closed?.length)return;
 const key=JSON.stringify(v.closed);if(S.dimKey!==key){const cv=makeCanvas(VIEW_W,VIEW_H),g=cv.getContext('2d',{willReadFrequently:true});g.drawImage(S.board,0,0);const im=g.getImageData(0,0,VIEW_W,VIEW_H),d=im.data,mask=new Uint8Array(VIEW_W*VIEW_H);
  for(const road of v.closed)for(const [px,py] of road.pts)for(let y=Math.max(0,Math.floor(py-8));y<=Math.min(VIEW_H-1,py+8);y++)for(let x=Math.max(0,Math.floor(px-10));x<=Math.min(VIEW_W-1,px+10);x++)if((x-px)**2/100+(y-py)**2/64<=1)mask[y*VIEW_W+x]=1;
  for(let i=0;i<d.length;i+=4){const [r,bg,b]=[d[i],d[i+1],d[i+2]];if(mask[i/4]&&r>190&&bg>150&&b>65&&r-b<195&&r>=bg){const l=Math.round((r*.3+bg*.59+b*.11)*.65);d[i]=l;d[i+1]=l+3;d[i+2]=l+4;}else d[i+3]=0;}
  g.putImageData(im,0,0);S.dim=cv;S.dimKey=key;
 }c.drawImage(S.dim,0,0);}
function drawBoard(c,v,art,S,t){if(v.reduced)t=0;const {x:ox,y:oy}=camera(v.chapter,v.cam),P=MAPS[v.chapter].pad||[14,7],[dx,dy,k]=MAPS[v.chapter].view||[0,0,1];c.fillStyle='#253d2b';c.fillRect(0,0,VIEW_W,VIEW_H);c.translate(dx,dy);c.scale(k,k);c.translate(-ox,-oy);
 if(ready(S.board))c.drawImage(S.board,0,0);
 drawLockedRoads(c,v,S);
 /* the pale gull belongs to the green forest; it is out of place over Emberkeep's lava */
 if(v.chapter==='elderwood')drawFlyers(c,art,0,0,t,true);const front=[];
 for(const n of v.nodes){const x=Math.round(n.x),y=Math.round(n.y);
  /* Every stop stays visible; a small existing lock icon marks unreached pads. */
  const locked=n.state==='locked'||n.state==='soon';c.fillStyle=locked?'#55595b':'#8b6236';pixEllipse(c,x,y,P[0],P[1]);c.fillStyle=locked?'#929798':'#f5d58b';pixEllipse(c,x,y,P[0]-1,P[1]-1);
  if(locked){if(ready(art.lock))c.drawImage(art.lock,x-6,y-10,12,12);continue;}
  if(n.next){const a=.5+.35*Math.sin(t*Math.PI*2/1.5);c.save();c.globalAlpha=a;c.fillStyle='#ffd84a';pixEllipse(c,x,y,P[0]+1,P[1]+1);c.restore();c.fillStyle='#fff3b0';c.globalAlpha=.5+a;for(const [dx,dy] of [[-P[0]-2,0],[P[0]+2,0]])c.fillRect(x+dx-(dx<0?0:1),y+dy-1,1,3);c.globalAlpha=1;}
  if(n.state==='done'&&n.kind==='level'){const i=frameIndex(art,'flag',t)+Math.floor(x),tf=tintedFlag(art,n.tier,((i%2)+2)%2);front.push(()=>{const f=cell(art,'flag',i),fx=x+14,fy=y-31;if(tf)c.drawImage(tf,fx,fy,26,32);else if(f&&ready(art.ui))c.drawImage(art.ui,...f,fx,fy,26,32);});
   if(n.stars&&art.star){const k=n.stars;c.fillStyle='#203238';c.fillRect(x-14,y-4,29,11);for(let j=0;j<3;j++){const sx=x-13+j*9,sy=y-3;c.save();c.globalAlpha=j<k?1:.35;c.imageSmoothingEnabled=false;c.drawImage(art.star,3,3,26,26,sx,sy,8,8);c.restore();}}}
  if(n.boss&&n.state!=='done'&&n.state!=='soon')front.push(()=>{const f=cell(art,'icon-skull');if(f&&ready(art.ui))c.drawImage(art.ui,f[0],f[1],f[2],f[3],x-P[0]-14,y-10,16,16);});}
 for(const f of front)f();
 drawSmallHero(c,v,t);
 if(v.reveal)drawReveal(c,art,v.reveal,t);if(v.burst)blit(c,art,'sparkle',v.burst.x,v.burst.y+12,{i:Math.floor(v.burst.t*24)});}
/* The one sign: the stop's name at the bottom centre, a small Enter key beside it when the stop can be entered; Home on the
   left, the star total on the right (tap it, or Tab, for stats). */
export const SIGN={y:240,h:22};
export const SIGN_HIT={home:[UI_SAFE_INSET+4,SIGN.y,80,SIGN.h],stats:[VIEW_W-UI_SAFE_INSET-4-84,SIGN.y,84,SIGN.h],play:[UI_SAFE_INSET+88,SIGN.y,VIEW_W-2*UI_SAFE_INSET-180,SIGN.h]};
/* 34 native pixels are at least 44 CSS pixels on the reviewed landscape phones; drawing and taps share them. */
const TOUCH_SIGN_HIT=Object.fromEntries(Object.entries(SIGN_HIT).map(([k,[x,y,w,h]])=>[k,[x,y+h-34,w,34]]));
export const signHit=touch=>touch?TOUCH_SIGN_HIT:SIGN_HIT;
/* W1 chapter tabs (24 Oct port): top right, hung from the frame's top rim so they hide as little of the painting as they can
   (a lower row covered Thorn Keep's towers), right edge in line with the star total; fixed widths so a tap is hit-tested
   without measuring text. Touch tabs are 31 native px tall: at least 44 CSS px on the reviewed landscape phones. */
export const TABS={w:86,gap:4,right:VIEW_W-UI_SAFE_INSET-4};
export const tabRect=(i,n,touch)=>{const h=touch?31:20,y=touch?0:3;return [TABS.right-n*TABS.w-(n-1)*TABS.gap+i*(TABS.w+TABS.gap),y,TABS.w,h];};
export function tabHit(x,y,tabs,touch){const n=tabs?.length||0;for(let i=0;i<n;i++){const [rx,ry,rw,rh]=tabRect(i,n,touch);if(x>=rx&&x<rx+rw&&y>=ry&&y<ry+rh)return i;}return -1;}
/* Fast travel (25 Oct): a tab of the same make on the left of the top rim, opposite the chapter tabs; v.travelTab is its label
   (none in view mode or the ending's look back). Touch: 31 native px tall, at least 44 CSS px. */
export const travelTabRect=touch=>{const h=touch?31:20,y=touch?0:3;return [UI_SAFE_INSET+4,y,116,h];};
export function travelTabHit(x,y,v,touch){if(!v)return false;const [rx,ry,rw,rh]=travelTabRect(touch);return x>=rx&&x<rx+rw&&y>=ry&&y<ry+rh;}
function drawTabs(c,v,art){if(v.travelTab){const [x,y,w,h]=travelTabRect(v.touch);c.save();footerPanel(c,art,x,y,w,h);text(c,v.travelTab,x+w/2,y+(h-16)/2,{font:FONT_BOLD,color:'#fff3ce',align:'center'});c.restore();}const tabs=v.tabs||[];/* polish2-oct29 (readiness #12): a closed chapter's tab was the whole tab at 60% alpha, so its name read as faded mush. The plate dims
   a little; the name stays solid in a muted parchment colour (regular weight, so it fits beside the lock) behind a lock, so it reads clearly and clearly as locked. An open tab
   is drawn at full strength. */
 tabs.forEach((tb,i)=>{const [x,y,w,h]=tabRect(i,tabs.length,v.touch),ty=y+(h-16)/2;c.save();if(!tb.open)c.globalAlpha=.8;
 if(tb.active)slice9(c,art,'parchment',x,y,w,h);else footerPanel(c,art,x,y,w,h);c.globalAlpha=1;
 if(!tb.open&&ready(art.lock)){const tw=textWidth(tb.name,FONT),lx=Math.round(x+w/2-(tw+12)/2);c.drawImage(art.lock,lx,Math.round(y+(h-10)/2),10,10);text(c,tb.name,lx+12,ty,{font:FONT,color:'#d8c9a8'});}
 else text(c,tb.name,x+w/2,ty,{font:FONT_BOLD,color:tb.active?'#2a1a10':tb.open?'#fff3ce':'#d8c9a8',align:'center'});c.restore();});}
/* the board keeps only the frame's carved rim: its dark inner panel colour is cleared once, so the picture runs up to the rim */
let thin=null;function thinFrame(art){if(thin||!ready(art.ui)||!art.uiMeta?.frame)return thin;const [sx,sy,w,h]=art.uiMeta.frame.frames[0],cv=makeCanvas(w,h),g=cv.getContext('2d',{willReadFrequently:true});g.drawImage(art.ui,sx,sy,w,h,0,0,w,h);
 const d=g.getImageData(0,0,w,h);for(let i=0;i<d.data.length;i+=4)if(d.data[i]===46&&d.data[i+1]===50&&d.data[i+2]===42)d.data[i+3]=0;g.putImageData(d,0,0);return thin={ui:cv,uiMeta:{frame:{frames:[[0,0,w,h]],slice:art.uiMeta.frame.slice}}};}
const kidText=s=>String(s||'').replace(/--+/g,'—');
/* The chapter tabs are kept clear too when the card can go elsewhere (strict: only then); otherwise the card may cover them
   rather than vanish (it takes no pointer events, so the tabs still answer taps under it). */
/* polish2-oct29 (readiness #12): corners=true tries the four corners only (a phone's card never lands in the middle of the map) */
export function placeBoardCard(v,w,h,strict=false,next=true,corners=false){const bottom=signHit(v.touch).home[1],focus=[...boardFocusRects(v),...(next?boardNextRects(v):[])],tabs=[...(v.tabs||[]).map((_,i,a)=>{const [x,y,ww,hh]=tabRect(i,a.length,v.touch);return {x,y,w:ww,h:hh+4};}),...(v.travelTab?[(([x,y,ww,hh])=>({x,y,w:ww,h:hh+4}))(travelTabRect(v.touch))]:[])],spots=[[16,16],[VIEW_W-w-16,16],[16,bottom-h-8],[VIEW_W-w-16,bottom-h-8]];
 const overlaps=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
 for(const protectedRects of strict||!tabs.length?[[...focus,...tabs]]:[[...focus,...tabs],focus]){
  const clear=a=>a.x>=12&&a.y>=12&&a.x+a.w<=468&&a.y+a.h<=bottom-4&&protectedRects.every(b=>!overlaps(a,b));
  for(const [x,y] of spots){const q={x,y,w,h};if(clear(q))return q;}
  if(corners)continue;
  for(let y=12;y+h<=bottom-4;y+=4)for(let x=12;x+w<=468;x+=4){const q={x,y,w,h};if(clear(q))return q;}}return null;}
/* Polish 24 Oct: every stop the player can walk to next is protected too. A tap or click walks the road to any open stop,
   so that is every open stop on the board, not only the focused stop's road neighbours. */
export function boardNextRects(v){const id=v.focusId||v.sel;return (v.nodes||[]).filter(n=>n.id!==id&&!['locked','soon'].includes(n.state)).map(n=>({x:n.x-18,y:n.y-28,w:40,h:40}));}
/* Protect the half-size hero, selected stop/flag, and the local approach to both. */
export function boardFocusRects(v){const points=[v.hero,(v.nodes||[]).find(n=>n.id===(v.focusId||v.sel))].filter(Boolean),rects=points.map(p=>({x:p.x-18,y:p.y-28,w:40,h:40}));
 for(const [a,b] of ROADS[v.chapter]||[])for(const [x,y] of pathPoints(v.chapter,a,b))if(points.some(p=>Math.hypot(x-p.x,y-p.y)<24))rects.push({x:x-10,y:y-8,w:20,h:16});return rects;}
function footerPanel(c,art,x,y,w,h){if(!ready(art.plate))return;const skin={ui:art.plate,uiMeta:{plate:{frames:[[0,0,art.plate.width,art.plate.height]],slice:8}}};slice9(c,skin,'plate',x,y,w,h);}
function footerGroup(key,label,touch){const kw=touch?0:Math.max(18,textWidth(key,FONT_BOLD)+8),gap=touch?0:5,lw=textWidth(label,FONT_BOLD);return {kw,gap,lw,w:kw+gap+lw};}
function footerAction(c,art,cx,y,key,label,touch){const g=footerGroup(key,label,touch),left=Math.round(cx-g.w/2);
 if(!touch){slice9(c,art,'keycap',left,y+2,g.kw,18);text(c,key,left+g.kw/2,y+3,{font:FONT_BOLD,color:'#f4e6c4',align:'center'});}text(c,label,left+g.kw+g.gap,y+3,{font:FONT_BOLD,color:'#fff3ce'});}
/* The centre plate is sized to its badge + label and centred on the screen, so the group always sits in the middle of
   its own plate (no empty strip beside it); the tap area stays the wider SIGN_HIT.play. */
export function playPlate(label,touch){const [px,,pw]=SIGN_HIT.play,g=footerGroup('Enter',label,touch),w=Math.min(pw+6,Math.max(96,g.w+28)),cx=px+pw/2;return {x:Math.round(cx-w/2),w,cx};}
function drawSign(c,v,art,t){const tf=thinFrame(art);slice9(c,tf||art,'frame',0,0,VIEW_W,VIEW_H,{noCentre:true});const H=signHit(v.touch),y=H.home[1],h=H.home[3],textY=y+(h-SIGN.h)/2;
 for(const k of ['home','stats']){const [x,yy,w,h]=H[k];footerPanel(c,art,x-3,yy,w+6,h);}
 {const [hx,,hw]=H.home;footerAction(c,art,hx+hw/2,textY,'H','Home',v.touch);}
 if(v.action){const label=kidText(v.action).replace(/^Enter:\s*/,''),p=playPlate(label,v.touch);footerPanel(c,art,p.x,y,p.w,h);footerAction(c,art,p.cx,textY,'Enter',label,v.touch);}
 drawTabs(c,v,art);
 const sx=VIEW_W-UI_SAFE_INSET-10,lab=`${v.starCount??0}/${v.starMax??0}`,lw=textWidth(lab);text(c,lab,sx,textY+3,{color:'#f4e6c4',align:'right'});if(art.star){c.imageSmoothingEnabled=false;c.drawImage(art.star,sx-lw-19,textY+2,16,16);}

 if(v.fade>0){c.fillStyle=`rgba(14,20,16,${Math.min(1,v.fade)})`;c.fillRect(0,0,VIEW_W,VIEW_H);}}

/* ---------- UI: frame, bottom bar, blurb, chapter title, toast ---------- */
/* The frame extends FRAME below the hit area; reserve its full height before the safe inset. */
export const BAR={x:36,y:VIEW_H-BAR_H-FRAME-UI_SAFE_INSET,w:408,h:BAR_H};
export const BAR_HIT={home:[BAR.x,BAR.y,124,BAR.h],stats:[BAR.x+BAR.w-124,BAR.y,124,BAR.h],play:[BAR.x+124,BAR.y,BAR.w-248,BAR.h]};
function drawUI(c,v,art,t){
 slice9(c,art,'frame',0,0,VIEW_W,VIEW_H,{noCentre:true});
 const blurbTop=v.blurb&&v.blurbAlpha>0&&!(v.banner>0)?drawBlurb(c,v,art):null;
 const {x,y,w,h}=BAR;slice9(c,art,'frame',x,y,w,h+FRAME);
 const key=(kx,cap)=>{const kw=Math.max(20,textWidth(cap,FONT_BOLD)+10);slice9(c,art,'keycap',kx,y+10,kw,20);text(c,cap,kx+kw/2,y+12,{font:FONT_BOLD,color:'#f4e6c4',align:'center'});return kw;};
 const hk=key(x+14,v.homeKey||'H');text(c,v.homeLabel||'Return Home',x+14+hk+5,y+12,{color:'#f4e6c4',shadow:'#1a0f08'});
 const sk=v.statsKey||'Tab',skw=Math.max(20,textWidth(sk,FONT_BOLD)+10);key(x+w-14-skw,sk);text(c,v.statsLabel||'Stats',x+w-14-skw-6,y+12,{color:'#f4e6c4',shadow:'#1a0f08',align:'right'});
 const pw=152,px=Math.round(VIEW_W/2-pw/2);slice9(c,art,'parchment',px,y+3,pw,h-3);
 if(v.title)text(c,v.title,VIEW_W/2,y+6,{color:'#2a1a10',align:'center'});
 if(v.action)text(c,v.action,VIEW_W/2,y+21,{font:FONT_BOLD,color:'#2a1a10',align:'center'});else if(v.boss)text(c,v.boss,VIEW_W/2,y+21,{font:FONT_BOLD,color:'#2a1a10',align:'center'});else if(v.subtitle)text(c,v.subtitle,VIEW_W/2,y+21,{color:'#3a2616',align:'center'});
 /* the difficulty ladder's running total (scenes/worldmap.js view().stars), top left inside the frame */
 if(v.stars){const st=art.star?16:0,sw=textWidth(v.stars)+16+st;slice9(c,art,'parchment',UI_SAFE_INSET,UI_SAFE_INSET+4,sw,22);if(st){const sm=c.imageSmoothingEnabled;c.imageSmoothingEnabled=false;c.drawImage(art.star,UI_SAFE_INSET+5,UI_SAFE_INSET+7,16,16);c.imageSmoothingEnabled=sm;}text(c,v.stars,UI_SAFE_INSET+8+st,UI_SAFE_INSET+7);}
 if(v.banner>0){const a=Math.min(1,v.banner);c.save();c.globalAlpha=a;const bw=Math.max(160,textWidth(v.chapterName,FONT_BOLD)+40),bx=Math.round(VIEW_W/2-bw/2);slice9(c,art,'parchment',bx,UI_SAFE_INSET+4,bw,26);text(c,v.chapterName,VIEW_W/2,UI_SAFE_INSET+9,{font:FONT_BOLD,align:'center'});c.restore();}
 /* a bottom blurb pushes the toast above it (playtest 14 Oct: 'A new road is open' covered the next stop's blurb) */
 if(v.toast){const tw=textWidth(v.toast)+24,tx=Math.round(VIEW_W/2-tw/2),ty=Math.min(BAR.y-30,blurbTop!=null&&v.blurbAt==='bottom'?blurbTop-28:Infinity);slice9(c,art,'parchment',tx,ty,tw,24);text(c,v.toast,VIEW_W/2,ty+5,{align:'center'});}
 if(v.fade>0){c.fillStyle=`rgba(14,20,16,${Math.min(1,v.fade)})`;c.fillRect(0,0,VIEW_W,VIEW_H);}}
/* The focused pad's blurb: shown for about two seconds, then it fades. A top blurb sits under the star total (browser check 14 Oct). It sits on the side of the screen away from
   the road ahead (v.blurbAt 'top' or 'bottom'), so it never covers the way on. */
function drawBlurb(c,v,art){const lines=[...wrap(v.blurb,330).slice(0,2),...(v.tierLine?[v.tierLine]:[])],w=Math.max(...lines.map(l=>textWidth(l)))+24,h=lines.length*14+12,x=Math.round(VIEW_W/2-w/2),y=v.blurbAt==='bottom'?BAR.y-h-2:UI_SAFE_INSET+(v.stars?30:6);
 c.save();c.globalAlpha=Math.min(1,v.blurbAlpha);slice9(c,art,'parchment',x,y,w,h);lines.forEach((ln,i)=>text(c,ln,VIEW_W/2,y+6+i*14,{align:'center'}));c.restore();return y;}
