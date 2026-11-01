/* polish4-oct27 (new-player playtest): the town map's "You" label is placed by hubMapHtml from map positions alone, which
   cannot know how big the numbered markers are on this screen; at the south gate it covered marker 10. After layout this
   tries the label on each side (right/left, middle/below/above, then centred above or below on a short stem) and keeps the first spot that covers no marker and stays
   inside the map, starting with the one hubMapHtml chose. DOM only; reads nothing from the save. */
const SPOTS=[['',''],['pq-map-you-left',''],['','pq-map-you-bottom'],['pq-map-you-left','pq-map-you-bottom'],['','pq-map-you-top'],['pq-map-you-left','pq-map-you-top'],['pq-map-you-above',''],['pq-map-you-below','']];
const hit=(a,b)=>Math.max(0,Math.min(a.right,b.right)-Math.max(a.left,b.left))*Math.max(0,Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top));
export function fitMapYou(root){const map=root?.querySelector?.('.pq-village-map'),you=map?.querySelector('.pq-map-you');if(!you)return null;
 const frame=map.getBoundingClientRect();if(!frame.width)return null;const marks=[...map.querySelectorAll('.pq-map-mark,.pq-map-name')].map(m=>m.getBoundingClientRect());
 const keep=you.className.replace(/\s*pq-map-you-(?:left|top|bottom|above|below)\b/g,''),cost=()=>{const r=you.getBoundingClientRect(),pad={left:r.left-2,right:r.right+2,top:r.top-2,bottom:r.bottom+2};return marks.reduce((n,m)=>n+hit(pad,m),0)+(r.left<frame.left||r.right>frame.right||r.top<frame.top||r.bottom>frame.bottom?1e6:0);};
 const first=you.className,tries=[first,...SPOTS.map(c=>[keep,...c].filter(Boolean).join(' '))];let best=first,low=Infinity;
 for(const c of tries){you.className=c;const n=cost();if(n<low){low=n;best=c;}if(!n)break;}
 you.className=best;return {className:best,overlap:low};}
/* improve20-h-nov1 (audit2 #23): each map place carries its short name beside its icon. After layout every name tries eight spots
   round its icon (below, above, right, left, then below or above running east or west from the icon) and keeps the one that covers
   no icon, badge or other name and stays inside the map, else the one that covers least. The next goal's name goes first; a second
   pass lets every name move again now that all the others are down. Run it before fitMapYou, which then keeps "You" clear of the
   names too. DOM only; reads nothing from the save. */
export const NAME_SIDES=['','pq-name-above','pq-name-right','pq-name-left','pq-name-below-e','pq-name-below-w','pq-name-above-e','pq-name-above-w'];
export function fitMapLabels(root){const map=root?.querySelector?.('.pq-village-map');if(!map)return null;const frame=map.getBoundingClientRect();if(!frame.width)return null;
 const marks=[...map.querySelectorAll('.pq-map-mark')],fixed=[...marks,...map.querySelectorAll('.map-ability-badge')].map(m=>m.getBoundingClientRect()),names=marks.map(()=>null),side=marks.map(()=>'');
 const order=marks.map((m,i)=>i).sort((a,b)=>marks[b].classList.contains('pq-map-goal')-marks[a].classList.contains('pq-map-goal'));
 const set=(m,c)=>{for(const k of NAME_SIDES)if(k)m.classList.toggle(k,k===c);};
 const cost=(i,r)=>{const pad={left:r.left-1,right:r.right+1,top:r.top-1,bottom:r.bottom+1};return fixed.reduce((t,o)=>t+hit(pad,o),0)+names.reduce((t,o,k)=>t+(k!==i&&o?hit(pad,o):0),0)+(r.left<frame.left||r.right>frame.right||r.top<frame.top||r.bottom>frame.bottom?1e6:0);};
 const place=i=>{const m=marks[i],name=m.querySelector('.pq-map-name');if(!name)return;let best=side[i],low=Infinity,rect=null;
  for(const c of NAME_SIDES){set(m,c);const r=name.getBoundingClientRect(),n=cost(i,r);if(n<low){low=n;best=c;rect=r;}if(!n)break;}
  set(m,best);side[i]=best;names[i]=rect;};
 for(let pass=0;pass<2;pass++)for(const i of order)place(i);
 return order.map(i=>({place:marks[i].dataset.place,side:side[i]||'below',overlap:names[i]?cost(i,names[i]):0}));}
