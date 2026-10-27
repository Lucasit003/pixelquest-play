/* The hero card (herocard-oct27; docs/playtest/newplayer-oct27/REPORT.md idea 4): a 1200x630 picture of the player's hero
   to keep or show to family. Drawn on a canvas from the game's own art only (the title key art, the PixelLab UI skin and
   icons, the hero sprite as worn and customised); no new art. Opened from Home ("Hero card" tab) and the Journal's
   Adventure page.
   Safety (pillar 6): nothing is uploaded and there is no server -- the PNG is made in the browser and either downloaded or
   handed to the device's own share sheet (navigator.share with the file). The only personal text is the hero name the
   child typed; the panel says "Only share with people you know."
   heroCardModel(save) is pure; drawHeroCard(canvas, model, art, heroCanvas) draws with whatever images it is given
   (tests/herocard-oct27.test.js runs it under @napi-rs/canvas); the panel helpers at the end are browser-only. */
import {CLASSES,SUBJECTS} from '../game/data.js';
import {ABILITIES} from '../game/abilities.js';
import {unlocked} from '../game/math.js';
import {asleep} from '../academics/awakening.js';
import {TOPICS,mastered} from '../academics/lessons.js';
import {LEVELS,CHAPTERS,levelDone,totalStars,maxStars} from '../game/levels.js';
import {ICON_NAMES} from './icon-names.js';
import {ABILITY_ICON_IDS} from './ability-icon-names.js';
import {abilityIconName,SUBJECT_ICON,ownIconURL} from './icons.js';

export const CARD_W=1200,CARD_H=630,PLAY_URL='https://lucasit003.github.io/pixelquest-play/',GAME_TITLE='PixelQuest',GAME_SUB='The Thorn Kingdom';
export const SHARE_NOTE='Only share with people you know.';
const FONT='"Pixel Operator", monospace',INK='#3a2614',INK2='#6e4b28',CREAM='#f1e6cc',SHADOW='#1a0f0b';

export function heroCardModel(s={}){
 const hero=CLASSES[s.hero]?s.hero:'warrior',c=CLASSES[hero],typed=String(s.heroNames?.[hero]??'').trim().slice(0,24);
 const main=LEVELS.filter(l=>l.kind==='level'&&!l.hidden&&!l.optional),beaten=main.filter(l=>levelDone(s,l.id)),last=beaten[beaten.length-1]||null;
 const abilities=(ABILITIES[hero]||[]).map(a=>({id:a.id,name:a.name,on:!!(unlocked(s,a)&&!asleep(s,a)),icon:a.id in ICON_AB?{strip:'ability',i:ICON_AB[a.id]}:{name:abilityIconName(a,hero)}}));
 const subjects=Object.entries(SUBJECTS).map(([id,v])=>({id,name:v.name,color:v.color,icon:SUBJECT_ICON[id]||'book-open',count:TOPICS.filter(t=>t.subject===id&&mastered(s,t)).length}));
 return {hero,name:typed||c.name,className:c.name,level:Math.max(1,s.level|0),stars:totalStars(s),maxStars:maxStars(),
  furthest:last?{id:last.id,name:last.name,chapter:CHAPTERS.find(ch=>ch.id===last.chapter)?.name||''}:null,
  abilities,awake:abilities.filter(a=>a.on).length,subjects,topics:subjects.reduce((t,x)=>t+x.count,0),url:PLAY_URL,title:GAME_TITLE,subtitle:GAME_SUB};}
const ICON_AB=Object.fromEntries(ABILITY_ICON_IDS.map((n,i)=>[n,i]));
const ICON_IX=Object.fromEntries(ICON_NAMES.map((n,i)=>[n,i]));

/* every skin file the card may draw, relative to dist/ui/ */
export const CARD_ART=['skin/keyart.webp','skin/pl-frame.png','skin/pl-window.png','skin/pl-parchment.png','skin/pl-card.png','skin/pl-plate.png','skin/divider.png','skin/star-gold.png','skin/icons.png','skin/ability-icons.png',
 'skin/rewards/scroll.png','skin/uiicons/swords.png',...new Set(Object.values(SUBJECT_ICON).map(n=>ownIconURL(n)?.replace(/^ui\//,'')).filter(Boolean))];
/* an icon by name: our own PixelLab file when there is one, else its cell in the 32 px strip */
function iconArt(art,ic){if(ic.strip==='ability')return [art['skin/ability-icons.png'],ic.i*32];const own=ownIconURL(ic.name)?.replace(/^ui\//,'');if(own&&art[own])return [art[own],0];return [art['skin/icons.png'],(ICON_IX[ic.name]??ICON_IX.sparkle)*32];}
const blit=(c,im,sx,sy,sw,sh,dx,dy,dw,dh)=>{if(im&&sw>0&&sh>0&&dw>0&&dh>0)c.drawImage(im,sx,sy,sw,sh,dx,dy,dw,dh);};
/* a 9-slice at whole scale k with the edges tiled (never stretched); fill=false leaves the middle empty */
function nine(c,im,x,y,w,h,[t,r,b,l],k=2,fill=true){if(!im)return false;const W=im.width,H=im.height,mw=W-l-r,mh=H-t-b;
 const tile=(sx,sy,sw,sh,dx,dy,dw,dh,horiz)=>{const step=(horiz?sw:sh)*k;for(let o=0;o<(horiz?dw:dh);o+=step){const part=Math.min(step,(horiz?dw:dh)-o)/k;horiz?blit(c,im,sx,sy,part,sh,dx+o,dy,part*k,sh*k):blit(c,im,sx,sy,sw,part,dx,dy+o,sw*k,part*k);}};
 if(fill)blit(c,im,l,t,mw,mh,x+l*k,y+t*k,w-(l+r)*k,h-(t+b)*k);
 tile(l,0,mw,t,x+l*k,y,w-(l+r)*k,0,true);tile(l,H-b,mw,b,x+l*k,y+h-b*k,w-(l+r)*k,0,true);
 tile(0,t,l,mh,x,y+t*k,0,h-(t+b)*k,false);tile(W-r,t,r,mh,x+w-r*k,y+t*k,0,h-(t+b)*k,false);
 blit(c,im,0,0,l,t,x,y,l*k,t*k);blit(c,im,W-r,0,r,t,x+w-r*k,y,r*k,t*k);blit(c,im,0,H-b,l,b,x,y+h-b*k,l*k,b*k);blit(c,im,W-r,H-b,r,b,x+w-r*k,y+h-b*k,r*k,b*k);return true;}
function text(c,str,x,y,{size=32,bold=false,color=INK,align='left',outline=null,max=0}={}){c.font=`${bold?'bold ':''}${size}px ${FONT}`;c.textAlign=align;c.textBaseline='alphabetic';
 let s=String(str);if(max)while(s.length>1&&c.measureText(s).width>max)s=s.slice(0,-2)+'…';
 if(outline){c.fillStyle=outline;for(const [dx,dy] of [[-2,0],[2,0],[0,-2],[0,2],[-2,-2],[2,2],[-2,2],[2,-2]])c.fillText(s,x+dx,y+dy);}c.fillStyle=color;c.fillText(s,x,y);return c.measureText(s).width;}
const icon=(c,art,ic,x,y,size=64,alpha=1)=>{const [im,sx]=iconArt(art,ic);if(!im)return;c.save();c.globalAlpha=alpha;blit(c,im,sx,0,32,32,x,y,size,size);c.restore();};

/* art: {path: loaded image} for CARD_ART; hero: a canvas with the hero already drawn (transparent), or null */
export function drawHeroCard(cv,m,art={},hero=null){if(cv.width!==CARD_W||cv.height!==CARD_H){cv.width=CARD_W;cv.height=CARD_H;}const c=cv.getContext('2d');c.imageSmoothingEnabled=false;
 c.fillStyle='#10182a';c.fillRect(0,0,CARD_W,CARD_H);
 /* left: the hero on the road to the Thorn Kingdom (the title key art at 2x, castle above, path below) */
 const L={x:34,y:34,w:420,h:562};c.save();c.beginPath();c.rect(L.x+8,L.y+8,L.w-16,L.h-16);c.clip();
 const ka=art['skin/keyart.webp'];if(ka)blit(c,ka,316,58,L.w/2,L.h/2,L.x,L.y,L.w,L.h);else{c.fillStyle='#2b3f2e';c.fillRect(L.x,L.y,L.w,L.h);}
 const g=c.createLinearGradient(0,L.y+L.h*.45,0,L.y+L.h);g.addColorStop(0,'rgba(16,24,42,0)');g.addColorStop(1,'rgba(16,24,42,.82)');c.fillStyle=g;c.fillRect(L.x,L.y,L.w,L.h);
 const foot=L.y+L.h-44;c.fillStyle='rgba(10,8,6,.45)';c.beginPath();c.ellipse(L.x+L.w/2,foot-6,78,16,0,0,Math.PI*2);c.fill();
 if(hero)c.drawImage(hero,Math.round(L.x+L.w/2-hero.width/2),Math.round(foot-hero.height));
 c.restore();
 nine(c,art['skin/pl-window.png'],L.x,L.y,L.w,L.h,[19,19,19,19],2,false);
 /* right: the record on parchment */
 const R={x:476,y:34,w:690,h:562},X=R.x+52,IW=R.w-104;nine(c,art['skin/pl-parchment.png'],R.x,R.y,R.w,R.h,[20,21,20,21],2,true);
 text(c,`${m.title.toUpperCase()} · ${m.subtitle.toUpperCase()}`,R.x+R.w/2,R.y+66,{size:16,bold:true,color:INK2,align:'center'});
 text(c,m.name,R.x+R.w/2,R.y+112,{size:48,bold:true,color:INK,align:'center',max:IW});text(c,`Level ${m.level} ${m.className}`,R.x+R.w/2,R.y+144,{size:32,color:INK2,align:'center',max:IW});
 const dv=art['skin/divider.png'];if(dv)blit(c,dv,0,0,dv.width,dv.height,Math.round(R.x+R.w/2-dv.width),R.y+152,dv.width*2,dv.height*2);
 /* stars and furthest level */
 let y=R.y+186;const st=art['skin/star-gold.png'];if(st)blit(c,st,0,0,32,32,X,y,48,48);
 text(c,`${m.stars}`,X+58,y+38,{size:48,bold:true});text(c,`of ${m.maxStars} stars`,X+60+c.measureText(`${m.stars}`).width,y+38,{size:32,color:INK2});
 icon(c,art,{name:'swords'},X+IW/2-8,y,48);text(c,'FURTHEST LEVEL BEATEN',X+IW/2+48,y+14,{size:16,bold:true,color:INK2});
 text(c,m.furthest?m.furthest.name:'Just setting out',X+IW/2+48,y+44,{size:32,bold:true,max:IW/2-52});
 if(m.furthest)text(c,m.furthest.chapter,X+IW/2+48,y+64,{size:16,color:INK2});
 /* abilities awakened: eight slots, icons for the awake ones */
 y=R.y+288;text(c,`ABILITIES AWAKENED · ${m.awake} OF ${m.abilities.length}`,X,y,{size:16,bold:true,color:INK2});
 const n=Math.max(1,m.abilities.length),gap=8,box=Math.min(68,Math.floor((IW-gap*(n-1))/n));
 m.abilities.forEach((a,i)=>{const bx=X+i*(box+gap),by=y+10;nine(c,art['skin/pl-card.png'],bx,by,box,box,[8,8,8,8],1,true);if(a.on)icon(c,art,a.icon,bx+(box-64)/2|0,by+(box-64)/2|0,64);else{c.fillStyle='rgba(20,14,10,.35)';c.fillRect(bx+6,by+6,box-12,box-12);}});
 /* topics mastered per subject */
 y=R.y+394;text(c,`TOPICS MASTERED · ${m.topics}`,X,y,{size:16,bold:true,color:INK2});
 const cols=4,cw=IW/cols;m.subjects.forEach((sj,i)=>{const cx=X+(i%cols)*cw,cy=y+8+Math.floor(i/cols)*56;icon(c,art,{name:sj.icon},cx,cy+4,48);
  text(c,`${sj.count}`,cx+54,cy+34,{size:32,bold:true});text(c,sj.name,cx+54,cy+52,{size:16,color:INK2,max:cw-58});});
 /* where to play */
 text(c,m.url,R.x+R.w/2,R.y+R.h-26,{size:16,bold:true,color:INK2,align:'center'});
 /* the frame round the whole card */
 nine(c,art['skin/pl-frame.png'],0,0,CARD_W,CARD_H,[19,19,19,19],2,false);
 return true;}

/* ---- browser side ---- */
const IMGS=new Map();
function loadImg(path){if(IMGS.has(path))return IMGS.get(path);const p=new Promise(res=>{const I=globalThis.Image;if(!I)return res(null);const im=new I();im.onload=()=>res(im);im.onerror=()=>res(null);im.src=new URL('./'+path,import.meta.url).href;});IMGS.set(path,p);return p;}
export async function loadCardArt(){const out={};await Promise.all(CARD_ART.map(async p=>{out[p]=await loadImg(p);}));try{await globalThis.document?.fonts?.load?.(`bold 48px ${FONT}`);await globalThis.document?.fonts?.load?.(`32px ${FONT}`);}catch{}return out;}
export function heroCardPanelHTML(){return `<div class="herocard-panel"><canvas id="hero-card-canvas" width="${CARD_W}" height="${CARD_H}" role="img" aria-label="Your hero card"></canvas><div class="herocard-actions"><button id="hero-card-save" class="primary">Save picture</button><button id="hero-card-share">Share</button></div><p class="herocard-note">${SHARE_NOTE} The picture is made on this device; nothing is uploaded.</p></div>`;}
export const cardFileName=m=>`pixelquest-${String(m.className||'hero').toLowerCase().replace(/[^a-z]+/g,'-')}-card.png`;
const blobOf=cv=>new Promise(res=>{try{cv.toBlob(b=>res(b),'image/png');}catch{res(null);}});
export async function saveCard(cv,m,doc=globalThis.document){const b=await blobOf(cv);if(!b||!doc)return false;const url=URL.createObjectURL(b),a=doc.createElement('a');a.href=url;a.download=cardFileName(m);doc.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);return true;}
/* the device's own share sheet when it can take a file; otherwise the same download as Save */
export async function shareCard(cv,m,nav=globalThis.navigator,doc=globalThis.document){const b=await blobOf(cv);const F=globalThis.File;
 if(b&&F&&nav?.share){const file=new F([b],cardFileName(m),{type:'image/png'}),data={files:[file],title:`${m.name} in ${GAME_TITLE}`};
  if(!nav.canShare||nav.canShare(data)){try{await nav.share(data);return 'shared';}catch(e){if(e?.name==='AbortError')return 'cancelled';}}}
 return await saveCard(cv,m,doc)?'saved':'failed';}
