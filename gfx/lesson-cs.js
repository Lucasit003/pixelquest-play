// Computer science pictures. program: a numbered code listing, drawn exactly as given -- values appear only where a step writes them.
export const program=(c,{title='Program',lines=[]},p)=>{
 const h=Math.min(40,200/Math.max(1,lines.length)),y0=56;
 c.fillStyle='#263c36';c.font='bold 18px sans-serif';c.textAlign='left';c.textBaseline='middle';c.fillText(title,26,24);
 c.fillStyle='#1f2a33';c.fillRect(20,y0-12,600,lines.length*h+24);
 lines.forEach((s,i)=>{if(i/lines.length>p)return;const y=y0+i*h+h/2,[,num,rest]=String(s).match(/^(\d+)\. ?(.*)$/)||[,'',String(s)];
  c.font='16px monospace';c.fillStyle='#8fa3b3';c.textAlign='right';c.fillText(num,62,y);c.textAlign='left';c.fillStyle='#e8efe6';c.fillText(rest,80,y);});
};
export const describeProgram=q=>`${q.title||'Program'}: `+q.lines.join('; ');
