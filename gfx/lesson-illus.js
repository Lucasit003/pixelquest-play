// Illustrations for lesson pictures: `art`, pixel-art drawings made with PixelLab (the owner's tool, 9 Oct 2026) and
// kept in assets/lesson/art/. They show real things -- plants, animals, cells, places, people -- and never carry a number
// or label the lesson depends on: labels are drawn in code beside them, so they stay exact. An image loads on first use;
// until then (and in tests) a plain frame with its label is drawn, so a picture is never blank, and when an image
// arrives the page is told with a 'pq-art' event so it can repaint. Node renderers preload with preloadArt().
//
// {t:'art', title, items:[{src:'heredity/pea-purple.png', x:160, y:236, h:150, label:'purple: PP or Pp', col}]}
// x is the centre and y the bottom of the drawing, in the 640 x 280 picture; h is its height in pixels.
const INK='#2a1a10',SOFT='#6a5a46',COL=['#3f6fa0','#b4602e','#4f8a3c','#8a4f9e','#c8372d'];
const clamp=v=>Math.max(0,Math.min(1,v));
const CACHE=new Map();
const urlOf=src=>new URL(`../assets/lesson/art/${src}`,import.meta.url);
/* the browser loads on demand; a failed load leaves the frame in place */
function request(src){
 if(CACHE.has(src)||typeof globalThis.Image!=='function'||!globalThis.document)return;
 CACHE.set(src,null);const img=new globalThis.Image();
 img.onload=()=>{CACHE.set(src,img);while(CACHE.size>32)CACHE.delete(CACHE.keys().next().value);try{globalThis.dispatchEvent?.(new globalThis.Event('pq-art'));}catch{}};
 img.src=urlOf(src).href;
}
/* Node: load every image a lesson uses before drawing it, with a loader such as @napi-rs/canvas loadImage */
export async function preloadArt(srcs,load){for(const s of new Set(srcs))if(!CACHE.get(s)){try{CACHE.set(s,await load(decodeURIComponent(urlOf(s).pathname)));}catch{CACHE.delete(s);}}}
export const artSources=pics=>[].concat(pics||[]).flatMap(p=>Array.isArray(p)?artSources(p):p?.t==='art'?(p.items||[p]).map(i=>i.src):[]);
const text=(c,s,x,y,size=13,{bold=false,color=INK}={})=>{c.fillStyle=color;c.font=`${bold?'bold ':''}${size}px sans-serif`;c.textAlign='center';c.textBaseline='middle';c.fillText(String(s),x,y);};

export const art=(c,q,p)=>{
 if(q.title)text(c,q.title,320,34,16,{bold:true});
 const items=q.items||[q];
 items.forEach((it,i)=>{const a=clamp(p*1.4*items.length-i*0.9);if(a<=0)return;const img=CACHE.get(it.src),h=it.h||150,x=it.x??320,y=it.y??236,col=typeof it.col==='string'?it.col:COL[(it.col??i)%COL.length];
  c.globalAlpha=a;
  if(img&&img.width&&typeof c.drawImage==='function'){const w=img.width*h/img.height,prev=c.imageSmoothingEnabled;c.imageSmoothingEnabled=false;c.drawImage(img,Math.round(x-w/2),Math.round(y-h),Math.round(w),Math.round(h));c.imageSmoothingEnabled=prev;}
  else{request(it.src);const w=h*0.8;c.strokeStyle='rgba(106,90,70,0.45)';c.lineWidth=2;c.setLineDash?.([6,5]);c.strokeRect(x-w/2,y-h,w,h);c.setLineDash?.([]);}
  if(it.label)text(c,it.label,x,y+14,13,{bold:true,color:col});
  c.globalAlpha=1;});
};
export const describeArt=q=>`${q.title?q.title+': ':''}${(q.items||[q]).map(i=>i.alt||i.label||'a drawing').join('; ')}`;
