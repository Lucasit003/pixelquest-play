/* improve20-r7c-nov1 #4 (audit6 #22): a Middle or High School step over MORE_WORDS words shows its first sentences (up to about that many) and a
   "more" button for the rest. The step's TEXT only: a Try-it prompt is never cut (its id comes from its text), and Read to me reads it all. */
export const MORE_WORDS=50;
/* improve20-r21a-nov4 #5 (audit15 #14, shot 28: "Nested loops" step 4 showed the sentence about the last loop while its picture and eq showed
   the folded sentence's 18): with the step passed in, a fold never hides the sentence its eq (or its picture's text) works out. That sentence is the
   last one naming the eq's result (its last number), or else the last number in the picture's own text; the fold may only start after it, and a
   step whose picture or eq names a number the text never says is not folded at all, so nothing the picture shows is ever folded away. */
const NUMS=/\d+(?:[.,]\d+)*/g;
const picText=p=>{const out=[];const walk=v=>{if(v==null)return;if(typeof v==='string')out.push(v);else if(Array.isArray(v))v.forEach(walk);else if(typeof v==='object')for(const k of Object.keys(v))if(k!=='t')walk(v[k]);};walk(p);return out.join(' ');};
export function picAnchor(txt,st){if(!st||!(st.eq||st.pic))return 0;const key=(String(st.eq||'').match(NUMS)||[]).at(-1)||(picText(st.pic).match(NUMS)||[]).at(-1);if(!key)return 0;
 const re=new RegExp(`(?<![\\d.,])${key.replace(/[.]/g,'\\.')}(?![\\d]|[.,]\\d)`,'g');let end=-1;for(const m of txt.matchAll(re)){const stop=txt.slice(m.index).search(/[.!?](\s|$)/);end=stop<0?txt.length:m.index+stop+1;}return end<0?txt.length:end;}
export function splitSay(say,st){const txt=String(say||''),n=txt.trim().split(/\s+/).length;if(n<=MORE_WORDS)return [txt,''];
 const after=picAnchor(txt,st);
 const cuts=[...txt.matchAll(/[.!?](?=\s+[A-Z0-9"“(])/g)].map(m=>m.index+1).filter(i=>{const w=txt.slice(0,i).trim().split(/\s+/).length;return i>=after&&w>=15&&w<=MORE_WORDS&&n-w>=6;});
 const at=cuts.at(-1);return at?[txt.slice(0,at),txt.slice(at).trim()]:[txt,''];}
/* improve20-r20f-nov4 #5 (audit14 #15, shot 18: the APUSH "1898 outcomes" table ran past the lesson frame with no sign that it went on): a lesson
   body with a text card picture (.text-pic: a table, passages or a code listing) that is cut off by the frame gets a fade over its bottom edge and a
   "scroll ▾" button (it scrolls the body down); both go once the end is in view. Desktop only: in touch mode (html.m-mode) main.js moreCue's
   "More ↓" footer button already does this for any cut-off body. ResizeObserver catches the layout settling (fonts, the picture's
   fit) and a window resize; nothing is timed. */
export const SCROLL_CUE='scroll ▾';
export const cueDue=(sh,ch,top)=>sh-ch>8&&top+ch<sh-8;
export function scrollCue(body){if(!body||body.dataset.cue)return;const doc=body.ownerDocument,R=doc.defaultView?.ResizeObserver;body.dataset.cue='1';
 const sync=()=>{if(!body.isConnected){ro?.disconnect();return;}let cue=body.querySelector(':scope>.lesson-scroll-cue');const on=/* phones and tablets already have main.js moreCue ("More ↓" in the footer) */!doc.documentElement.classList.contains('m-mode')&&body.classList.contains('text-pic')&&cueDue(body.scrollHeight,body.clientHeight,body.scrollTop);
  if(!on){cue?.remove();return;}if(cue)return;cue=doc.createElement('div');cue.className='lesson-scroll-cue';cue.setAttribute('aria-hidden','true');cue.innerHTML=`<button type="button" class="lesson-scroll-go" tabindex="-1">${SCROLL_CUE}</button>`;
  cue.querySelector('button').onclick=e=>{e.preventDefault();e.stopPropagation();body.scrollBy?.({top:Math.max(60,body.clientHeight*.7),behavior:'smooth'});};body.append(cue);};
 const ro=R?new R(sync):null;ro?.observe(body);for(const c of body.children)ro?.observe(c);body.addEventListener('scroll',sync,{passive:true});body.pqCue=sync;sync();return sync;}
