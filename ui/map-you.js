/* polish4-oct27 (new-player playtest): the town map's "You" label is placed by hubMapHtml from map positions alone, which
   cannot know how big the numbered markers are on this screen; at the south gate it covered marker 10. After layout this
   tries the label on each side (right/left, middle/below/above, then centred above or below on a short stem) and keeps the first spot that covers no marker and stays
   inside the map, starting with the one hubMapHtml chose. DOM only; reads nothing from the save. */
const SPOTS=[['',''],['pq-map-you-left',''],['','pq-map-you-bottom'],['pq-map-you-left','pq-map-you-bottom'],['','pq-map-you-top'],['pq-map-you-left','pq-map-you-top'],['pq-map-you-above',''],['pq-map-you-below','']];
const hit=(a,b)=>Math.max(0,Math.min(a.right,b.right)-Math.max(a.left,b.left))*Math.max(0,Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top));
export function fitMapYou(root){const map=root?.querySelector?.('.pq-village-map'),you=map?.querySelector('.pq-map-you');if(!you)return null;
 const frame=map.getBoundingClientRect();if(!frame.width)return null;const marks=[...map.querySelectorAll('.pq-map-mark')].map(m=>m.getBoundingClientRect());
 const keep=you.className.replace(/\s*pq-map-you-(?:left|top|bottom|above|below)\b/g,''),cost=()=>{const r=you.getBoundingClientRect(),pad={left:r.left-2,right:r.right+2,top:r.top-2,bottom:r.bottom+2};return marks.reduce((n,m)=>n+hit(pad,m),0)+(r.left<frame.left||r.right>frame.right||r.top<frame.top||r.bottom>frame.bottom?1e6:0);};
 const first=you.className,tries=[first,...SPOTS.map(c=>[keep,...c].filter(Boolean).join(' '))];let best=first,low=Infinity;
 for(const c of tries){you.className=c;const n=cost();if(n<low){low=n;best=c;}if(!n)break;}
 you.className=best;return {className:best,overlap:low};}
