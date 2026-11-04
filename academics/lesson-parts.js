/* improve20-r11d-nov2 #3 (audit9 a13, shot 30): a lesson longer than PART_MAX steps plays in parts of nearly equal size (16 steps: two of 8;
   17: 9 and 8; 25: 9, 8 and 8). Only where the lesson breaks changes; its steps, words and pictures do not. The place is already saved on
   every step (lessons.js setStep), and at the end of a part it is saved at the next part's first step, so a break keeps the child's progress.
   Pure: no DOM, no save. */
/* improve20-r19a-nov3 #1 (R18E length study, option B): a High School lesson plays in parts that end at natural breaks, just after a Try-it,
   6-10 steps each (academics/hs-part-breaks.js, proposed by tools/build-hs-part-breaks.mjs and read by hand). `brk` is the list of step
   indices where a new part starts. partBreaks(t) gives it only while the lesson's steps still match the pinned digest, so a later content
   edit falls back to the equal split until the breaks are reviewed. Steps, ids and the saved place (`at`/`reached`) are unchanged: a part is
   only a range of step indices, so a save at any step opens in the part that holds it. */
import {HS_PART_BREAKS} from './hs-part-breaks.js';import {hash} from './bank.js';
export const PART_MAX=12;
/* improve20-r19a-nov3 #1: a break list is used only when it is ascending and inside the lesson */
const okBreaks=(n,brk)=>Array.isArray(brk)&&brk.length>0&&brk.every((b,k)=>Number.isInteger(b)&&b>0&&b<n&&(k===0||b>brk[k-1]));
/* the parts of an n-step lesson: [{start,end}] with end exclusive; one part for n <= PART_MAX (or the parts that `brk` marks) */
export function lessonParts(n,brk){n=Math.max(0,n|0);if(okBreaks(n,brk)){const cut=[0,...brk,n];return cut.slice(1).map((e,k)=>({start:cut[k],end:e}));}const count=Math.max(1,Math.ceil(n/PART_MAX)),base=Math.floor(n/count),extra=n%count,out=[];let at=0;
 for(let k=0;k<count;k++){const len=base+(k<extra?1:0);out.push({start:at,end:at+len});at+=len;}return out;}
/* the part that holds step i: {k,count,start,end,len,first,last,brk} */
export function partOf(n,i,brk){const ps=lessonParts(n,brk),k=Math.max(0,ps.findIndex(p=>i>=p.start&&i<p.end)),p=ps[k]||{start:0,end:n};
 return {k,count:ps.length,start:p.start,end:p.end,len:p.end-p.start,first:i===p.start,last:i===p.end-1,brk:okBreaks(n,brk)?brk:null};}
/* improve20-r19a-nov3 #1: the digest a lesson's breaks are pinned to, and the breaks for a loaded topic (null: use the equal split) */
export const stepsDigest=steps=>hash(JSON.stringify(steps));
const memo=new WeakMap();
export function partBreaks(t){const e=t&&HS_PART_BREAKS[t.id];if(!e||!Array.isArray(t.steps))return null;if(memo.has(t.steps))return memo.get(t.steps);const v=stepsDigest(t.steps)===e.digest&&okBreaks(t.steps.length,e.at)?e.at:null;memo.set(t.steps,v);return v;}
