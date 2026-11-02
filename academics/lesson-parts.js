/* improve20-r11d-nov2 #3 (audit9 a13, shot 30): a lesson longer than PART_MAX steps plays in parts of nearly equal size (16 steps: two of 8;
   17: 9 and 8; 25: 9, 8 and 8). Only where the lesson breaks changes; its steps, words and pictures do not. The place is already saved on
   every step (lessons.js setStep), and at the end of a part it is saved at the next part's first step, so a break keeps the child's progress.
   Pure: no DOM, no save. */
export const PART_MAX=12;
/* the parts of an n-step lesson: [{start,end}] with end exclusive; one part for n <= PART_MAX */
export function lessonParts(n){n=Math.max(0,n|0);const count=Math.max(1,Math.ceil(n/PART_MAX)),base=Math.floor(n/count),extra=n%count,out=[];let at=0;
 for(let k=0;k<count;k++){const len=base+(k<extra?1:0);out.push({start:at,end:at+len});at+=len;}return out;}
/* the part that holds step i: {k,count,start,end,len,first,last} */
export function partOf(n,i){const ps=lessonParts(n),k=Math.max(0,ps.findIndex(p=>i>=p.start&&i<p.end)),p=ps[k]||{start:0,end:n};
 return {k,count:ps.length,start:p.start,end:p.end,len:p.end-p.start,first:i===p.start,last:i===p.end-1};}
