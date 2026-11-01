// Computer science pictures. program: a numbered code listing, drawn exactly as given -- values appear only where a step writes them.
/* improve20-z-nov1 #2 (audit6 #8): a line wider than the listing used to drop to the small bitmap size (about 6 CSS px on a 1280 screen);
   it now wraps at a space or comma onto an indented row under the same number. Text is drawn exactly as given; only the rows change. */
const CODE_W=532;
export const codeRows=(c,lines)=>{c.font='16px monospace';const rows=[];lines.forEach((s,i)=>{const [,num,rest]=String(s).match(/^(\d+)\. ?(.*)$/)||[,'',String(s)];
 const toks=rest.split(/(?<=[ ,])/);let cur='',k=0;const push=()=>{rows.push({i,num:k?'':num,text:(k?'   ':'')+cur.replace(/\s+$/,'')});k++;cur='';};
 for(const t of toks){if(cur&&c.measureText(((k?'   ':'')+cur+t).replace(/\s+$/,'')).width>CODE_W)push();cur+=t;}push();});return rows;};
export const program=(c,{title='Program',lines=[]},p)=>{
 const rows=codeRows(c,lines),h=Math.min(40,200/Math.max(1,rows.length)),y0=56;
 c.fillStyle='#263c36';c.font='bold 18px sans-serif';c.textAlign='left';c.textBaseline='middle';c.fillText(title,26,24);
 c.fillStyle='#1f2a33';c.fillRect(20,y0-12,600,rows.length*h+24);
 rows.forEach((r,j)=>{if(r.i/lines.length>p)return;const y=y0+j*h+h/2;
  c.font='16px monospace';c.fillStyle='#8fa3b3';c.textAlign='right';c.fillText(r.num,62,y);c.textAlign='left';c.fillStyle='#e8efe6';c.fillText(r.text,80,y);});
};
export const describeProgram=q=>`${q.title||'Program'}: `+q.lines.join('; ');
