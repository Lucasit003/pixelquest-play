/* Passage pictures show only the supplied text, never a keyed answer or selected clue. */
/* Round 3 (17 Oct): the 12px "Read the whole sentence" footnote went; scaled into a lesson on a short window it was about 8px, too small to read. */
/* small: a 14px body for long lists, such as five dated records, so a wrapped line stays inside its box. */
export function passages(c,{title,texts,small}){
 c.textAlign='left';c.textBaseline='alphabetic';c.fillStyle='#263c36';c.font='bold 19px sans-serif';c.fillText(title,26,30);
 const h=212/texts.length;
 texts.forEach((text,i)=>{const y=46+i*h;c.fillStyle='#fffaf0';c.fillRect(20,y,600,h-10);c.strokeStyle='#ac9a78';c.lineWidth=1;c.strokeRect(20,y,600,h-10);c.fillStyle='#385e57';c.font='bold 16px sans-serif';if(texts.length>1)c.fillText(String.fromCharCode(65+i),34,y+25);c.fillStyle='#283c37';c.font=small?'14px sans-serif':'17px sans-serif';let line='',yy=y+(small?21:25);for(const word of text.split(' ')){const next=line?line+' '+word:word;if(c.measureText(next).width>(texts.length>1?526:572)){c.fillText(line,texts.length>1?66:34,yy);yy+=small?17:23;line=word;}else line=next;}c.fillText(line,texts.length>1?66:34,yy);});
}
/* One passage gets no letter: an "A" beside a lone sentence reads like an answer choice (learning-flow fix, 17 Oct). */
export const describePassages=q=>q.title+'. '+q.texts.map((s,i)=>(q.texts.length>1?String.fromCharCode(65+i)+': ':'')+s).join(' ');
