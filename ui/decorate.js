/* Icons on main.js's panels without touching their markup (rubric F4: every item, currency and loot
   has an icon from the one icon set). Watches #modal-content and decorates by view:
   smith -> weapon and armour icons per card; alchemist -> potion; level board -> a kind icon per pad;
   everywhere -> the "◆" currency glyph becomes the coin icon. */
import {CLASSES} from '../game/data.js';
import {lockCards} from './title.js';
import {icon,gearImgIcon} from './icons.js';
const PAD={level:'swords',shop:'coins',arena:'skill-ring',home:'tent'};
export function decorate(root,view,save){
 if(!root)return;
 const hero=CLASSES[save?.hero]||CLASSES.warrior;
 if(view==='smith')root.querySelectorAll('.card').forEach(card=>{/* cards with their PixelLab gear icon (main.js smith, review round 2) keep only that */if(card.querySelector('.card-ico,.smith-ico'))return;const b=card.querySelector('[data-buy]');if(!b)return;
  /* one icon per tier: the shop line's own PixelLab gear icon (ui/skin/gear, packicons3-oct25; was the pack's tier cells) */
  const [kind,t]=b.dataset.buy.split(':'),tier=Math.max(0,Math.min(3,+t||0)),w=hero.weapon||'sword',key=Object.keys(CLASSES).find(k=>CLASSES[k]===hero)||'warrior';
  card.insertAdjacentHTML('afterbegin',`<span class="card-ico">${gearImgIcon(kind==='weapon'?`${w}-${tier}`:`armor-${key}-${tier}`,{size:64})}</span>`);});
 /* Home > Change hero offers the same slice */
 if(view==='heroes')lockCards(root);
 if(view==='alchemist')root.querySelectorAll('.card').forEach(card=>{if(!card.querySelector('.card-ico'))card.insertAdjacentHTML('afterbegin',`<span class="card-ico">${icon(card.querySelector('[data-potion-buy=regen]')?'potion-green':'potion',{size:64})}</span>`);});
 root.querySelectorAll('.level-pad').forEach(card=>{if(card.querySelector('.card-ico'))return;const k=card.dataset.kind||'level';
  card.insertAdjacentHTML('afterbegin',`<span class="card-ico">${icon(card.dataset.state==='done'?'chest':PAD[k]||'swords',{size:32})}</span>`);});
 /* the Bestiary line in a level result: a book, not a skull and crossbones (art direction round 3) */
 root.querySelectorAll('.level-bestiary img.level-icon').forEach(img=>{const t=root.ownerDocument.createElement('span');t.innerHTML=icon('book-arcane',{size:32});img.replaceWith(t.firstChild);});
 /* currency glyph -> coin icon, in text nodes only */
 const walker=root.ownerDocument.createTreeWalker(root,4);const hits=[];
 while(walker.nextNode()){const n=walker.currentNode;if(n.nodeValue.includes('◆')&&!n.parentElement?.closest('.ico,script,style'))hits.push(n);}
 for(const n of hits){const span=root.ownerDocument.createElement('span');span.innerHTML=n.nodeValue.split('◆').map(t=>t.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))).join(icon('coin',{size:32,label:'gold'}).replace('class="ico"','class="ico ico-inline"'));n.replaceWith(...span.childNodes);}
}
