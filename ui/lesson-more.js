/* improve20-r7c-nov1 #4 (audit6 #22): a Middle or High School step over MORE_WORDS words shows its first sentences (up to about that many) and a
   "more" button for the rest. The step's TEXT only: a Try-it prompt is never cut (its id comes from its text), and Read to me reads it all. */
export const MORE_WORDS=50;
export function splitSay(say){const txt=String(say||''),n=txt.trim().split(/\s+/).length;if(n<=MORE_WORDS)return [txt,''];
 const cuts=[...txt.matchAll(/[.!?](?=\s+[A-Z0-9"“(])/g)].map(m=>m.index+1).filter(i=>{const w=txt.slice(0,i).trim().split(/\s+/).length;return w>=15&&w<=MORE_WORDS&&n-w>=6;});
 const at=cuts.at(-1);return at?[txt.slice(0,at),txt.slice(at).trim()]:[txt,''];}
