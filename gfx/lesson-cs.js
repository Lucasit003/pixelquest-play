// Computer science pictures. program: a numbered code listing, drawn exactly as given -- values appear only where a step writes them.
/* improve20-z-nov1 #2 (audit6 #8): a line wider than the listing used to drop to the small bitmap size (about 6 CSS px on a 1280 screen);
   it now wraps at a space or comma onto an indented row under the same number. Text is drawn exactly as given; only the rows change. */
const CODE_W=532;
export const codeRows=(c,lines,F=16)=>{c.font=`${F}px monospace`;const rows=[];lines.forEach((s,i)=>{const [,num,rest]=String(s).match(/^(\d+)\. ?(.*)$/)||[,'',String(s)];
 const toks=rest.split(/(?<=[ ,])/);let cur='',k=0;const push=()=>{rows.push({i,num:k?'':num,text:(k?'   ':'')+cur.replace(/\s+$/,'')});k++;cur='';};
 for(const t of toks){if(cur&&c.measureText(((k?'   ':'')+cur+t).replace(/\s+$/,'')).width>CODE_W)push();cur+=t;}push();});return rows;};
/* improve20-r7c-nov1 #4 (audit6 #22): a short listing used about half its box at 16px; the code now takes the largest size up to 26px at which
   its rows fit the 200-unit listing area with no more wrapping than at 16px, and the dark listing fills the box with the rows centred in it. Text is unchanged. */
export const programFit=(c,lines)=>{const base=codeRows(c,lines).length;for(const F of [26,24,22,20,18]){const rows=codeRows(c,lines,F);if(rows.length===base&&rows.length*F*1.6<=200)return {rows,F,h:Math.min(F*2,200/rows.length)};}
 const rows=codeRows(c,lines);return {rows,F:16,h:Math.min(40,200/Math.max(1,rows.length))};};
export const program=(c,{title='Program',lines=[]},p)=>{
 const {rows,F,h}=programFit(c,lines),y0=56+(200-rows.length*h)/2;
 c.fillStyle='#263c36';c.font='bold 18px sans-serif';c.textAlign='left';c.textBaseline='middle';c.fillText(title,26,24);
 c.fillStyle='#1f2a33';c.fillRect(20,44,600,Math.max(224,rows.length*h+24));
 rows.forEach((r,j)=>{if(r.i/lines.length>p)return;const y=y0+j*h+h/2;
  c.font=`${F}px monospace`;c.fillStyle='#8fa3b3';c.textAlign='right';c.fillText(r.num,62,y);c.textAlign='left';c.fillStyle='#e8efe6';c.fillText(r.text,80,y);});
};
export const describeProgram=q=>`${q.title||'Program'}: `+q.lines.join('; ');
