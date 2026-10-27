/* Canvas UI kit (v2:ui): the same skin and font as the DOM UI, for things drawn on the game canvas
   (stage banners, WAVE / GO / VICTORY, boss name cards, damage numbers). Rule 0: everything is a blit of
   downloaded art. Text comes from bitmap atlases baked from Pixel Operator (CC0) by
   tools/bake-bitmap-font.py; panels are the Dark Ages 9-slices (ui/skin/), with edges TILED, never
   stretched. Scales are whole numbers. Node-safe: with no Image, everything returns false.

   import {loadCanvasUI,drawPixelText,measurePixelText,drawPanel,drawSkin} from '../ui/canvas-ui.js';
   loadCanvasUI();                                    // start loading once; draws are no-ops until ready
   drawPanel(c,'banner',x,y,w,h,{scale:1});           // 'plank' | 'ornate' | 'parchment' | 'banner' | 'slot' | 'charcoal'
   drawPixelText(c,'WAVE 2',cx,y,{scale:2,align:'center',color:'#f1e6cc',outline:'#1a0f0b',bold:true});
   drawSkin(c,'crest',cx,y,{scale:1,align:'center'}); // any ui/skin/<name>.png: crest, divider, pip, fx-burst...
   Returns the drawn width (text) or true (panels) once the art has loaded, false before. */
import {FONT} from './font/pixel-operator.js';
const IMG=new Map(),TINT=new Map();
const url=p=>new URL(p,import.meta.url).href;
function img(path){
 const had=IMG.get(path);if(had)return had;
 const I=globalThis.Image;if(!I)return null;
 const im=new I();const rec={im,ready:false};im.onload=()=>{rec.ready=true;};im.src=url(path);IMG.set(path,rec);return rec;
}
const ready=r=>!!(r&&r.ready&&r.im.width);
export function loadCanvasUI(){for(const p of ['./font/pixel-operator.png','./font/pixel-operator-bold.png',...Object.values(PANELS).map(p=>p.src),...['crest','divider','pip','chain-tile','fx-burst','fx-swirl'].map(n=>`./skin/${n}.png`)])img(p);}
/* A recolour of the font bitmap: same pixels, new colour (Rule 0 allows a tint). Cached per colour. */
function tinted(weight,color){
 const key=weight+color;if(TINT.has(key))return TINT.get(key);
 const f=FONT[weight],r=img('./font/'+f.image);if(!ready(r))return null;
 const doc=globalThis.document;if(!doc)return null;
 const cv=doc.createElement('canvas');cv.width=r.im.width;cv.height=r.im.height;const x=cv.getContext('2d');if(!x)return null;
 x.drawImage(r.im,0,0);x.globalCompositeOperation='source-in';x.fillStyle=color;x.fillRect(0,0,cv.width,cv.height);
 TINT.set(key,cv);while(TINT.size>64)TINT.delete(TINT.keys().next().value);return cv;
}
/* Characters the font lacks become the closest glyphs it has (never '?'): math signs, arrows,
   superscripts, symbols; accented letters fall back to their base letter. */
const SUB={'−':'-','–':'-','—':'-','‘':"'",'’':"'",'′':"'",'“':'"','”':'"','‹':'<','›':'>','«':'"','»':'"','…':'...','•':'·','◆':'*','◇':'*','✧':'*','★':'*','♥':'*','⚠':'!','✓':'v','✔':'v',
 '→':'>','←':'<','↑':'^','↓':'v','≤':'<=','≥':'>=','≠':'=','≈':'~','±':'+-','√':'v','∨':'v','⊕':'+','×':'x','÷':'/','½':'1/2','⅓':'1/3','¼':'1/4','¾':'3/4','µ':'u','§':'S','¢':'c','°':'o',
 '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁺':'+','⁻':'-','ⁿ':'n','ˣ':'x','₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9','\u00a0':' '};
const GREEK={'α':'a','β':'b','γ':'g','δ':'d','ε':'e','η':'e','θ':'th','ι':'i','κ':'k','λ':'l','μ':'u','ν':'n','ο':'o','π':'pi','ρ':'r','σ':'s','ς':'s','τ':'t','φ':'ph','χ':'ch','ω':'w','Δ':'D','Ω':'W'};
export function glyphText(text,{bold=false}={}){
 const g=FONT[bold?'bold':'regular'].glyphs;let out='';
 for(const ch of String(text)){
  if(g[ch]){out+=ch;continue;}
  const sub=SUB[ch]??GREEK[ch]??GREEK[ch.normalize('NFD').replace(/[\u0300-\u036f]/g,'')];
  if(sub!==undefined&&[...sub].every(c=>g[c])){out+=sub;continue;}
  const base=ch.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  out+=base&&[...base].every(c=>g[c])?base:(/\s/.test(ch)?' ':'');
 }
 return out;
}
/* Every character of these strings can be drawn (directly or substituted): for tests and tools. */
export function missingGlyphs(text,{bold=false}={}){const g=FONT[bold?'bold':'regular'].glyphs;return [...new Set([...String(text)].filter(ch=>!/\s/.test(ch)&&!g[ch]&&!glyphText(ch,{bold})))];}
export function measurePixelText(text,{scale=1,bold=false}={}){const g=FONT[bold?'bold':'regular'].glyphs;let w=0;for(const ch of glyphText(text,{bold}))w+=g[ch][2];return w*scale;}
export function drawPixelText(c,text,x,y,{scale=1,color='#f1e6cc',outline='#1a0f0b',shadow=null,bold=false,align='left',baseline='alphabetic'}={}){
 const weight=bold?'bold':'regular',f=FONT[weight],s=Math.max(1,Math.round(scale)),shown=glyphText(text,{bold}),w=measurePixelText(shown,{scale:s,bold});
 let x0=Math.round(align==='center'?x-w/2:align==='right'?x-w:x),y0=Math.round(y-(baseline==='top'?0:baseline==='middle'?f.height*s/2:f.ascent*s));
 const draw=(col,dx,dy)=>{const atlas=tinted(weight,col);if(!atlas)return false;let cx=x0+dx;
  for(const ch of shown){const gl=f.glyphs[ch];if(!gl)continue;c.drawImage(atlas,gl[0],0,gl[1],f.height,cx-f.pad*s,y0+dy,gl[1]*s,f.height*s);cx+=gl[2]*s;}return true;};
 const prev=c.imageSmoothingEnabled;c.imageSmoothingEnabled=false;
 if(shadow&&!draw(shadow,0,2*s)){c.imageSmoothingEnabled=prev;return false;}
 if(outline)for(const [dx,dy] of [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]])if(!draw(outline,dx*s,dy*s)){c.imageSmoothingEnabled=prev;return false;}
 const ok=draw(color,0,0);c.imageSmoothingEnabled=prev;return ok?w:false;
}
/* 9-slice sources: image, slice inset (art px). */
const PANELS={plank:{src:'./skin/panel-plain.png',k:12},charcoal:{src:'./skin/panel-plain-2.png',k:12},ornate:{src:'./skin/panel.png',k:24},parchment:{src:'./skin/parchment.png',k:10},
 banner:{src:'./skin/btn-primary.png',k:[2,9]},button:{src:'./skin/btn.png',k:[2,9]},slot:{src:'./skin/slot.png',k:6}};
export function drawPanel(c,kind,x,y,w,h,{scale=1}={}){
 const P=PANELS[kind]||PANELS.plank,r=img(P.src);if(!ready(r))return false;
 const im=r.im,s=Math.max(1,Math.round(scale)),[ky,kx]=Array.isArray(P.k)?P.k:[P.k,P.k],W=im.width,H=im.height;
 x=Math.round(x);y=Math.round(y);w=Math.round(w);h=Math.round(h);
 const prev=c.imageSmoothingEnabled;c.imageSmoothingEnabled=false;
 const blit=(sx,sy,sw,sh,dx,dy)=>c.drawImage(im,sx,sy,sw,sh,dx,dy,sw*s,sh*s);
 /* tile a source strip across a destination span, clipping the last tile */
 const tileX=(sx,sy,sw,sh,dx,dy,span)=>{for(let o=0;o<span;o+=sw*s){const cw=Math.min(sw,Math.ceil((span-o)/s));c.drawImage(im,sx,sy,cw,sh,dx+o,dy,cw*s,sh*s);}};
 const tileY=(sx,sy,sw,sh,dx,dy,span)=>{for(let o=0;o<span;o+=sh*s){const ch=Math.min(sh,Math.ceil((span-o)/s));c.drawImage(im,sx,sy,sw,ch,dx,dy+o,sw*s,ch*s);}};
 const iw=W-2*kx,ih=H-2*ky,cw=w-2*kx*s,ch=h-2*ky*s;if(iw<=0||ih<=0){c.imageSmoothingEnabled=prev;return false;}
 /* centre */
 for(let oy=0;oy<ch;oy+=ih*s){const hh=Math.min(ih,Math.ceil((ch-oy)/s));tileX(kx,ky,iw,hh,x+kx*s,y+ky*s+oy,cw);}
 /* edges */
 tileX(kx,0,iw,ky,x+kx*s,y,cw);tileX(kx,H-ky,iw,ky,x+kx*s,y+h-ky*s,cw);
 tileY(0,ky,kx,ih,x,y+ky*s,ch);tileY(W-kx,ky,kx,ih,x+w-kx*s,y+ky*s,ch);
 /* corners */
 blit(0,0,kx,ky,x,y);blit(W-kx,0,kx,ky,x+w-kx*s,y);blit(0,H-ky,kx,ky,x,y+h-ky*s);blit(W-kx,H-ky,kx,ky,x+w-kx*s,y+h-ky*s);
 c.imageSmoothingEnabled=prev;return true;
}
/* Any skin image, whole-number scale. frame/frames pick a cell of a horizontal strip (fx-burst, fx-swirl). */
export function drawSkin(c,name,x,y,{scale=1,align='left',frame=0,frames=1}={}){
 const r=img(`./skin/${name}.png`);if(!ready(r))return false;
 const im=r.im,s=Math.max(1,Math.round(scale)),fw=im.width/frames,dx=Math.round(align==='center'?x-fw*s/2:align==='right'?x-fw*s:x);
 const prev=c.imageSmoothingEnabled;c.imageSmoothingEnabled=false;c.drawImage(im,Math.floor(frame)%frames*fw,0,fw,im.height,dx,Math.round(y),fw*s,im.height*s);c.imageSmoothingEnabled=prev;return true;
}
