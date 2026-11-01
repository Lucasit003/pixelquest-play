/* polish4-oct27 (new-player playtest): the town map's "You" label is placed by hubMapHtml from map positions alone, which
   cannot know how big the numbered markers are on this screen; at the south gate it covered marker 10. After layout this
   tries the label on each side (right/left, middle/below/above, then centred above or below on a short stem) and keeps the first spot that covers no marker and stays
   inside the map, starting with the one hubMapHtml chose. DOM only; reads nothing from the save. */
const SPOTS=[['',''],['pq-map-you-left',''],['','pq-map-you-bottom'],['pq-map-you-left','pq-map-you-bottom'],['','pq-map-you-top'],['pq-map-you-left','pq-map-you-top'],['pq-map-you-above',''],['pq-map-you-below','']];
const hit=(a,b)=>Math.max(0,Math.min(a.right,b.right)-Math.max(a.left,b.left))*Math.max(0,Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top));
/** The whole fit, in order: names, then "You" clear of them, then the names again round "You", then "You" once more. */
/* improve20-d-nov1 (lane Y's leftover): on a phone the map is small enough that the Noticeboard, Inn and Library icons (and at 740x360 the
   exit and the Barracks) overlapped by a few px. Before the names are placed, icons that overlap are pushed apart (2 px gap) along the
   axis that needs the shorter move, half each, kept inside the map. A desktop map has no overlap, so nothing there moves. Returns the moves. */
export function separateMarks(root){const map=root?.querySelector?.('.pq-village-map');if(!map)return null;const frame=map.getBoundingClientRect();if(!frame.width)return null;
 const marks=[...map.querySelectorAll('.pq-map-mark')].filter(m=>m.getBoundingClientRect().width);for(const m of marks)if(m.style)m.style.translate='';
 const box=m=>{const r=m.getBoundingClientRect();return {left:r.left,right:r.right,top:r.top,bottom:r.bottom};},R=marks.map(box),off=marks.map(()=>[0,0]),G=2;
 for(let it=0;it<12;it++){let moved=false;for(let i=0;i<R.length;i++)for(let j=i+1;j<R.length;j++){const a=R[i],b=R[j],ox=Math.min(a.right,b.right)-Math.max(a.left,b.left)+G,oy=Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top)+G;if(ox<=0||oy<=0)continue;moved=true;
  const sx=(a.left+a.right)<(b.left+b.right)?-1:1,sy=(a.top+a.bottom)<(b.top+b.bottom)?-1:1,[dx,dy]=ox<=oy?[ox/2*sx,0]:[0,oy/2*sy];
  for(const [k,s] of [[i,1],[j,-1]]){const r=R[k],mx=Math.max(frame.left-r.left,Math.min(frame.right-r.right,dx*s)),my=Math.max(frame.top-r.top,Math.min(frame.bottom-r.bottom,dy*s));r.left+=mx;r.right+=mx;r.top+=my;r.bottom+=my;off[k][0]+=mx;off[k][1]+=my;}}if(!moved)break;}
 const out=[];marks.forEach((m,k)=>{const [x,y]=off[k];if(Math.abs(x)>=.5||Math.abs(y)>=.5){m.style.translate=`${Math.round(x)}px ${Math.round(y)}px`;out.push([m.dataset.place,Math.round(x),Math.round(y)]);}});return out;}
export function fitMap(root){separateMarks(root);const a=fitMapLabels(root);fitMapYou(root);if(!a)return null;const b=fitMapLabels(root),y=fitMapYou(root);return {names:b,you:y};}
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
/* improve20-y-nov1 #3 (audit4 #21): "You" covered "Home", the Library's ability badge sat on the Inn and "Next: Gate" sat on the Barracks.
   Now: a badge whose box touches another place's icon is crowded and hides (the key names the next ability anyway); the goal icon's glow
   counts as part of it; "You" is an obstacle for the names, so after "You" moves the names are laid out again round it; and two more
   spots lift a name a row clear of its icon on a short stem (above-far, below-far), for the gate at the map's edge between two places. */
export const NAME_SIDES=['','pq-name-above','pq-name-right','pq-name-left','pq-name-below-e','pq-name-below-w','pq-name-above-e','pq-name-above-w','pq-name-above-far','pq-name-below-far'];
const grow=(r,n)=>({left:r.left-n,right:r.right+n,top:r.top-n,bottom:r.bottom+n});
/** Hide the next-ability badge when it touches another place's icon. Returns how many were hidden. */
export function hideCrowdedBadges(map){let n=0;const marks=[...map.querySelectorAll('.pq-map-mark')];
 for(const b of map.querySelectorAll('.map-ability-badge')){b.classList.remove('is-crowded');b.style.removeProperty('display');const r=b.getBoundingClientRect();if(!r.width)continue;const own=b.closest('.pq-map-mark');
  if(marks.some(m=>m!==own&&hit(grow(r,2),m.getBoundingClientRect())>0)){b.classList.add('is-crowded');b.style.display='none';n++;}}
 return n;}
export function fitMapLabels(root){const map=root?.querySelector?.('.pq-village-map');if(!map)return null;const frame=map.getBoundingClientRect();if(!frame.width)return null;hideCrowdedBadges(map);
 const marks=[...map.querySelectorAll('.pq-map-mark')],fixed=[...marks.map(m=>m.classList.contains('pq-map-goal')?grow(m.getBoundingClientRect(),3):m.getBoundingClientRect()),...[...map.querySelectorAll('.map-ability-badge,.pq-map-you')].filter(e=>e.style.display!=='none').map(m=>m.getBoundingClientRect())],owner=[...marks,...[...map.querySelectorAll('.map-ability-badge,.pq-map-you')].filter(e=>e.style.display!=='none').map(e=>e.closest('.pq-map-mark'))],names=marks.map(()=>null),side=marks.map(()=>'');
 const order=marks.map((m,i)=>i).sort((a,b)=>marks[b].classList.contains('pq-map-goal')-marks[a].classList.contains('pq-map-goal'));
 const set=(m,c)=>{for(const k of NAME_SIDES)if(k)m.classList.toggle(k,k===c);};
 const cost=(i,r)=>{const pad={left:r.left-1,right:r.right+1,top:r.top-1,bottom:r.bottom+1};return fixed.reduce((t,o,k)=>t+(owner[k]===marks[i]?0:hit(pad,o)),0)+names.reduce((t,o,k)=>t+(k!==i&&o?hit(pad,o):0),0)+(r.left<frame.left||r.right>frame.right||r.top<frame.top||r.bottom>frame.bottom?1e6:0);};
 const place=i=>{const m=marks[i],name=m.querySelector('.pq-map-name');if(!name)return;let best=side[i],low=Infinity,rect=null;
  for(const c of NAME_SIDES){set(m,c);const r=name.getBoundingClientRect(),n=cost(i,r);if(n<low){low=n;best=c;rect=r;}if(!n)break;}
  set(m,best);side[i]=best;names[i]=rect;};
 for(let pass=0;pass<2;pass++)for(const i of order)place(i);
 return order.map(i=>({place:marks[i].dataset.place,side:side[i]||'below',overlap:names[i]?cost(i,names[i]):0}));}
