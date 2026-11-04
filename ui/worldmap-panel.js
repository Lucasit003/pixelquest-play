/* The map's information card lives at screen resolution: whole-size Pixel Operator,
   the same pl-window frame as the modals, and measured placement away from the route. */
import {placeBoardCard,riftView,riftLabel,hallView,hallLabel} from '../gfx/worldmap-art.js';
import {abilityIcon} from './icons.js';
let el=null,contentKey='',layoutKey='',sizes=[],compactSizes=[],expanded='';
const make=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls;if(text)n.textContent=text;return n;};
/* Tier icons are reused across card rebuilds: a fresh <img> per text change painted blank for a frame while it decoded,
   so every chip icon flashed whenever the selected stop changed. */
const pool=new Map();
const icon=(name,alt='')=>{let im=pool.get(name)?.pop();if(!im){im=make('img','');im.dataset.icon=name;im.src=new URL('./skin/pl-icons/tier-'+name+'.png',import.meta.url).href;im.width=im.height=16;}im.alt=alt;return im;};
const recycle=root=>{for(const im of root.querySelectorAll('img[data-icon]')){if(!pool.has(im.dataset.icon))pool.set(im.dataset.icon,[]);pool.get(im.dataset.icon).push(im);}};
/* improve20-r16b-nov3 #7 (audit12 a15): the Rift's name plate and first-time note, at the node card's 16 px, under the portal and kept on the board */
let riftEl=null;
export function placeRiftLabel(v,canvas){const doc=globalThis.document;if(!doc?.body)return null;const at=v?.rift&&riftView(v),b=canvas?.getBoundingClientRect?.(),scale=b?.width/480;
 if(!at||!scale){if(riftEl)riftEl.hidden=true;return null;}
 if(!riftEl){riftEl=make('div','worldmap-rift');riftEl.id='worldmap-rift';riftEl.setAttribute('aria-hidden','true');doc.body.append(riftEl);}
 const k=riftLabel(v)+'|'+(v.rift.note||'');if(riftEl.dataset.k!==k){riftEl.dataset.k=k;riftEl.replaceChildren(make('strong','wm-rift-name',riftLabel(v)),...(v.rift.note?[make('span','wm-rift-note',v.rift.note)]:[]));}
 riftEl.hidden=false;const w=riftEl.offsetWidth||0,x=b.left+at.x*scale,left=Math.max(b.left+6,Math.min(b.left+b.width-w-6,x-w/2));riftEl.style.left=Math.round(left)+'px';riftEl.style.top=Math.round(b.top+(at.y+6)*scale)+'px';return riftEl;}
/* improve20-r20h-nov4 #4: the Hall of Echoes' name plate, in the Rift label's style and size (one row, 16 px, the same baseline rule), under
   its door; when that would meet the Rift's label or portal it goes beside the door, then above it */
let hallEl=null;const meets=(a,b,g=4)=>a.left<b.right+g&&a.right>b.left-g&&a.top<b.bottom+g&&a.bottom>b.top-g;
export function placeHallLabel(v,canvas){const doc=globalThis.document;if(!doc?.body)return null;const at=v?.hall&&hallView(v),b=canvas?.getBoundingClientRect?.(),scale=b?.width/480;
 if(!at||!scale){if(hallEl)hallEl.hidden=true;return null;}
 if(!hallEl){hallEl=make('div','worldmap-rift worldmap-hall');hallEl.id='worldmap-hall';hallEl.setAttribute('aria-hidden','true');doc.body.append(hallEl);}
 const lb=hallLabel(v);if(hallEl.dataset.k!==lb){hallEl.dataset.k=lb;hallEl.replaceChildren(make('strong','wm-rift-name',lb));}
 hallEl.hidden=false;const w=hallEl.offsetWidth||0,h=hallEl.offsetHeight||18,x=b.left+at.x*scale,y=b.top+at.y*scale,clampX=l=>Math.max(b.left+6,Math.min(b.left+b.width-w-6,l)),clampY=t=>Math.max(b.top+2,Math.min(b.top+b.height-h-2,t));
 const avoid=[];if(riftEl&&!riftEl.hidden&&riftEl.offsetWidth){const r=riftEl.getBoundingClientRect();avoid.push(r);}const rv=v.rift&&riftView(v);if(rv)avoid.push({left:b.left+(rv.x-16)*scale,right:b.left+(rv.x+16)*scale,top:b.top+(rv.y-36)*scale,bottom:b.top+(rv.y+6)*scale});
 const box=(l,t)=>({left:l,top:t,right:l+w,bottom:t+h}),spots=[[clampX(x-w/2),clampY(y+6*scale)],[clampX(x+18*scale),clampY(y-14*scale-h/2)],[clampX(x-18*scale-w),clampY(y-14*scale-h/2)],[clampX(x-w/2),clampY(y-34*scale-h)]];
 const [l,t]=spots.find(([l,t])=>!avoid.some(a=>meets(box(l,t),a)))||spots[0];hallEl.style.left=Math.round(l)+'px';hallEl.style.top=Math.round(t)+'px';return hallEl;}
export function clearMapPanel(){riftEl?.remove();riftEl=null;hallEl?.remove();hallEl=null;el?.remove();el=null;pool.clear();contentKey=layoutKey=expanded='';sizes=[];compactSizes=[];}
export function updateMapPanel(v,canvas){if(!globalThis.document?.body||!canvas?.getBoundingClientRect||!v.board){if(riftEl)riftEl.hidden=true;if(hallEl)hallEl.hidden=true;return false;}
 const b=canvas.getBoundingClientRect(),scale=b.width/480;if(!scale)return false;placeRiftLabel(v,canvas);placeHallLabel(v,canvas);
 if(!el){el=make('aside','worldmap-info');el.id='worldmap-info';el.setAttribute('aria-label','Selected stop');
  /* a compact card opens to the full card on a tap, and closes again on the next */
  el.addEventListener('click',e=>{if(!el.classList.contains('wm-compact')&&expanded!==contentKey)return;e.stopPropagation();expanded=expanded===contentKey?'':contentKey;layoutKey='';});document.body.append(el);}
 const key=JSON.stringify([v.chapterName,v.title,v.inside,v.bossLine,v.gradeLine,v.heroicLead,v.blurb,v.tiers,v.toast,/* improve20-r22w-nov4 #3 */v.questLine,v.chapterBorder,v.notice,v.power?[v.power.id,v.power.a?.id,v.power.text||'']:null]);
 if(key!==contentKey){contentKey=key;el.classList.toggle('chapter-complete',!!v.chapterBorder);layoutKey='';recycle(el);const dash=t=>String(t||'').replace(/--+/g,'—'),children=[make('div','wm-chapter',v.chapterName),make('h2','wm-title',v.title)];
  /* polish2-oct29: what is inside (the level's blurb and boss), then the goal; a stop with no blurb shows the goal alone, as before */
  if(v.inside)children.push(make('p','wm-inside',dash(v.inside)));if(v.bossLine)children.push(make('p','wm-boss',v.bossLine));/* improve20-r8a-nov1 #4 */if(v.gradeLine)children.push(make('p','wm-grade',v.gradeLine));/* improve20-r20j-nov4 #3: a rune seal in this level */if(v.sealLine)children.push(make('p','wm-seal',v.sealLine));/* improve20-r22w-nov4 #3: a quest step on this pad */if(v.questLine)children.push(make('p','wm-quest',v.questLine));/* improve20-r10c-nov2 #19: an overlevelled or all-stars stop leads with Heroic, in place of its goal line, and its Heroic chip glows */if(v.heroicLead){const p=make('p','wm-heroic');p.append(icon('heroic',''),make('span','',v.heroicLead));children.push(p);}else if(!v.power)children.push(make('p','wm-description'+(v.inside?' wm-goal':''),dash(v.blurb)));
  if(v.tiers?.length){const chips=make('div','wm-tiers');for(const t of v.tiers){const chip=make('span','wm-tier');chip.setAttribute('aria-label',t.label+': '+(t.open?t.stars+' of 3 stars':'clear '+(t.key==='heroic'?'Normal':'Heroic')+' here'));if(t.crest){chip.classList.add('earned');chip.title=t.label+' crest earned';}if(v.heroicLead&&t.key==='heroic')chip.classList.add('wm-tier-lead');chip.append(icon(t.key,t.crest?t.label+' crest earned':''),make('span','wm-tier-name',t.label));if(t.open)chip.append(make('span','wm-count',t.stars+'/3'),icon('star','stars'));else chip.append(icon('lock','Locked'));chips.append(chip);}children.push(chips);}
  /* improve20-r12a-nov2: a power gate (game/levels.js powerGate): the power's icon, what it needs (a won pad beside the gate says it too) and one button to the Library */
  if(v.power){const box=make('div','wm-power');box.dataset.powerGate=v.power.id;const ic=make('span','wm-power-ico');ic.innerHTML=abilityIcon(v.power.a,v.power.hero,32);box.append(ic);if(v.power.text)box.append(make('p','wm-power-text',v.power.text));const go=make('button','wm-power-go primary',v.power.label||'Go to the Library');go.type='button';go.dataset.powerGo=v.power.id;go.addEventListener('click',e=>{e.stopPropagation();v.power.go?.();});box.append(go);children.push(box);/* power first, then the star gate */if(v.blurb)children.push(make('p','wm-description',dash(v.blurb)));}
  if(v.chapterBorder)children.push(make('p','wm-notice','Chapter Legendary clears complete.'));
  if(v.toast)children.push(make('p','wm-notice',v.toast));
  /* W1 view mode: the level paused under the map, and how to go back to it */
  if(v.notice)children.push(make('p','wm-notice wm-paused',v.notice));el.replaceChildren(...children);
 }
 const lk=key+'|'+b.width+'|'+b.height+'|'+v.touch+'|'+document.fonts?.status+'|'+(expanded===key);if(lk!==layoutKey){layoutKey=lk;el.hidden=false;sizes=[];compactSizes=[];const measure=(list,compact,widths,bare=false)=>{el.classList.toggle('wm-compact',compact);el.classList.toggle('wm-bare',bare);for(const width of widths){el.style.left=el.style.top='0px';el.style.width=compact?'max-content':width+'px';el.style.maxWidth=compact?width+'px':'';const r=el.getBoundingClientRect();const t=el.querySelector('.wm-title');if(compact&&t&&t.scrollWidth>t.clientWidth+1)continue;list.push({width,compact,bare,w:Math.ceil(r.width/scale),h:Math.ceil(r.height/scale)});}};
  measure(sizes,false,v.touch?[332,308,284,260,236,212]:[356,332,308,284,260,236,212]);measure(compactSizes,true,[332,260]);/* polish2-oct29: a phone tries the smallest card first (least map covered) */if(v.touch)sizes.sort((p,q)=>p.w*p.h-q.w*q.h);measure(compactSizes,true,[260,200,160],true);el.classList.remove('wm-bare');}
 /* Polish 24 Oct: the full card never covers the hero, the selected stop or a stop the player can walk to next; when it
    cannot fit clear of those and the chapter tabs it shrinks to a one-line card (title and tier chips) that opens on a tap. */
 const fit=(list,strict,next=true,corners=false)=>{for(const c of list){const q=placeBoardCard(v,c.w,c.h,strict,next,corners);if(q)return [q,c];}return null;};
 /* a card the player opened may cover other stops for a moment, never the hero, the selected stop or the tabs */
 /* polish2-oct29 (readiness #12): on a phone the full card covered the middle of the map. A touch screen takes the full card only in a
    corner clear of the hero, the selected stop and its road; otherwise the one-line card in a corner (a tap opens it) */
 /* stargate-oct29: a phone's compact card hid the map's notice (the locked chapter tab's stars hint), so a notice opens the card while it shows */
 const open=expanded===key||!!(v.touch&&(v.toast||v.power)),hit=(v.touch&&!open?fit(sizes,true,true,true)||fit(compactSizes,true,true,true)||fit(compactSizes,true):null)||fit(sizes,true)||(open&&fit(sizes,true,false))||fit(compactSizes,true)||fit(compactSizes,false)||fit(sizes,false);
 if(!hit){el.hidden=true;return false;}const [q,size]=hit;el.hidden=false;el.classList.toggle('wm-compact',size.compact);el.classList.toggle('wm-bare',!!size.bare);el.classList.toggle('wm-open',open&&!size.compact);el.style.width=size.compact?'max-content':size.width+'px';el.style.maxWidth=size.compact?size.width+'px':'';el.style.left=Math.round(b.left+q.x*scale)+'px';el.style.top=Math.round(b.top+q.y*scale)+'px';el.style.opacity=String(1-(v.fade||0));return true;
}
