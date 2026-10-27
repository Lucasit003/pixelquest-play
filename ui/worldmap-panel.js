/* The map's information card lives at screen resolution: whole-size Pixel Operator,
   the same pl-window frame as the modals, and measured placement away from the route. */
import {placeBoardCard} from '../gfx/worldmap-art.js';
let el=null,contentKey='',layoutKey='',sizes=[],compactSizes=[],expanded='';
const make=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls;if(text)n.textContent=text;return n;};
/* Tier icons are reused across card rebuilds: a fresh <img> per text change painted blank for a frame while it decoded,
   so every chip icon flashed whenever the selected stop changed. */
const pool=new Map();
const icon=(name,alt='')=>{let im=pool.get(name)?.pop();if(!im){im=make('img','');im.dataset.icon=name;im.src=new URL('./skin/pl-icons/tier-'+name+'.png',import.meta.url).href;im.width=im.height=16;}im.alt=alt;return im;};
const recycle=root=>{for(const im of root.querySelectorAll('img[data-icon]')){if(!pool.has(im.dataset.icon))pool.set(im.dataset.icon,[]);pool.get(im.dataset.icon).push(im);}};
export function clearMapPanel(){el?.remove();el=null;pool.clear();contentKey=layoutKey=expanded='';sizes=[];compactSizes=[];}
export function updateMapPanel(v,canvas){if(!globalThis.document?.body||!canvas?.getBoundingClientRect||!v.board)return false;
 const b=canvas.getBoundingClientRect(),scale=b.width/480;if(!scale)return false;
 if(!el){el=make('aside','worldmap-info');el.id='worldmap-info';el.setAttribute('aria-label','Selected stop');
  /* a compact card opens to the full card on a tap, and closes again on the next */
  el.addEventListener('click',e=>{if(!el.classList.contains('wm-compact')&&expanded!==contentKey)return;e.stopPropagation();expanded=expanded===contentKey?'':contentKey;layoutKey='';});document.body.append(el);}
 const key=JSON.stringify([v.chapterName,v.title,v.blurb,v.tiers,v.toast,v.chapterBorder,v.notice]);
 if(key!==contentKey){contentKey=key;el.classList.toggle('chapter-complete',!!v.chapterBorder);layoutKey='';recycle(el);const children=[make('div','wm-chapter',v.chapterName),make('h2','wm-title',v.title),make('p','wm-description',String(v.blurb||'').replace(/--+/g,'—'))];
  if(v.tiers?.length){const chips=make('div','wm-tiers');for(const t of v.tiers){const chip=make('span','wm-tier');chip.setAttribute('aria-label',t.label+': '+(t.open?t.stars+' of 3 stars':'clear '+(t.key==='heroic'?'Normal':'Heroic')+' here'));if(t.crest){chip.classList.add('earned');chip.title=t.label+' crest earned';}chip.append(icon(t.key,t.crest?t.label+' crest earned':''),make('span','wm-tier-name',t.label));if(t.open)chip.append(make('span','wm-count',t.stars+'/3'),icon('star','stars'));else chip.append(icon('lock','Locked'));chips.append(chip);}children.push(chips);}
  if(v.chapterBorder)children.push(make('p','wm-notice','Chapter Legendary clears complete.'));
  if(v.toast)children.push(make('p','wm-notice',v.toast));
  /* W1 view mode: the level paused under the map, and how to go back to it */
  if(v.notice)children.push(make('p','wm-notice wm-paused',v.notice));el.replaceChildren(...children);
 }
 const lk=key+'|'+b.width+'|'+b.height+'|'+v.touch+'|'+document.fonts?.status+'|'+(expanded===key);if(lk!==layoutKey){layoutKey=lk;el.hidden=false;sizes=[];compactSizes=[];const measure=(list,compact,widths,bare=false)=>{el.classList.toggle('wm-compact',compact);el.classList.toggle('wm-bare',bare);for(const width of widths){el.style.left=el.style.top='0px';el.style.width=compact?'max-content':width+'px';el.style.maxWidth=compact?width+'px':'';const r=el.getBoundingClientRect();const t=el.querySelector('.wm-title');if(compact&&t&&t.scrollWidth>t.clientWidth+1)continue;list.push({width,compact,bare,w:Math.ceil(r.width/scale),h:Math.ceil(r.height/scale)});}};
  measure(sizes,false,v.touch?[332,308,284,260,236,212]:[356,332,308,284,260,236,212]);measure(compactSizes,true,[332,260]);measure(compactSizes,true,[260,200,160],true);el.classList.remove('wm-bare');}
 /* Polish 24 Oct: the full card never covers the hero, the selected stop or a stop the player can walk to next; when it
    cannot fit clear of those and the chapter tabs it shrinks to a one-line card (title and tier chips) that opens on a tap. */
 const fit=(list,strict,next=true)=>{for(const c of list){const q=placeBoardCard(v,c.w,c.h,strict,next);if(q)return [q,c];}return null;};
 /* a card the player opened may cover other stops for a moment, never the hero, the selected stop or the tabs */
 const open=expanded===key,hit=fit(sizes,true)||(open&&fit(sizes,true,false))||fit(compactSizes,true)||fit(compactSizes,false)||fit(sizes,false);
 if(!hit){el.hidden=true;return false;}const [q,size]=hit;el.hidden=false;el.classList.toggle('wm-compact',size.compact);el.classList.toggle('wm-bare',!!size.bare);el.classList.toggle('wm-open',open&&!size.compact);el.style.width=size.compact?'max-content':size.width+'px';el.style.maxWidth=size.compact?size.width+'px':'';el.style.left=Math.round(b.left+q.x*scale)+'px';el.style.top=Math.round(b.top+q.y*scale)+'px';el.style.opacity=String(1-(v.fade||0));return true;
}
