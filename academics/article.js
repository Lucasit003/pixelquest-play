/* improve20-r20g-nov4 #2 (audit14 #7): "a" or "an" before a number, by how the number is read aloud. "an" when the reading starts with a
   vowel sound: eight..., eleven, eighteen, and their thousands and millions (8, 80-89, 800-899, 8,000, 11, 18, 11,000, 18,000, 11 million),
   a 4-digit year read in pairs (an 1812 map, an 1873 novel), and money read as its number (an $8 allowance, an $80 jacket); "a" otherwise
   (a 1, a 7, a 100, a 118, a 1,800). Lesson files carry no imports, so each one that needs it holds the same one-line copy (`AN`), and
   tests/improve20-r20g-nov4.test.js checks every copy against this one. Pure. */
export function anBefore(n){const r=String(n??'').trim().replace(/^[$£€]/,'').split('.')[0].replace(/,+$/,'');if(!/^\d[\d,]*$/.test(r))return false;const d=r.replace(/,/g,'');
 if(d[0]==='8')return true;if(!/^1[18]/.test(d))return false;return d.length%3===2||!r.includes(',')&&d.length===4;}
export const article=(n,cap=false)=>{const a=anBefore(n)?'an':'a';return cap?a[0].toUpperCase()+a.slice(1):a;};
/* Every "a"/"A" straight before a number becomes "an"/"An" where the number needs it. Only ever a -> an: an existing "an" is left alone. */
export const fixNumberArticles=s=>typeof s!=='string'?s:s.replace(/\b([Aa]) (?=\$?(\d[\d,]*(?:\.\d+)?))/g,(m,a,x)=>anBefore(x)?a+'n ':m);
