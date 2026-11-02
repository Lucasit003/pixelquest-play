// Spatial lesson diagrams and source-backed country maps.
/* hook-oct27 (lighter first load): the Natural Earth country outlines (about 105 KB gzipped) are not needed for the title or the
   town. A browser loads them after the title with the lesson pools (main.js; Begin waits for both); Node and jsdom load them here. */
const EAGER=typeof window==='undefined'||/jsdom/i.test(globalThis.navigator?.userAgent||'');
let COUNTRY_ATLAS=EAGER?(await import('./country-atlas.js')).COUNTRY_ATLAS:[];
let atlasTask=null;
export const countryAtlasReady=()=>COUNTRY_ATLAS.length>0;
export const loadCountryAtlas=()=>atlasTask??=import('./country-atlas.js').then(m=>{COUNTRY_ATLAS=m.COUNTRY_ATLAS;}).catch(e=>{atlasTask=null;throw e;});
const ink='#1d2a3a',paper='#f6f1e4';
const text=(c,s,x,y,size=14)=>{c.fillStyle=ink;c.font=`${size}px sans-serif`;c.textAlign='center';c.textBaseline='middle';c.fillText(String(s),x,y);};
const symbol=(c,s,x,y)=>{c.fillStyle='#477655';c.strokeStyle=ink;c.lineWidth=2;c.beginPath();if(s==='circle')c.arc(x,y,9,0,Math.PI*2);else if(s==='triangle'){c.moveTo(x,y-10);c.lineTo(x+10,y+9);c.lineTo(x-10,y+9);c.closePath();}else c.rect(x-8,y-8,16,16);c.fill();c.stroke();};
export const gridmap=(c,{cols=5,rows=5,marks=[],key=[],start,startLabel='S',path=[],highlight},p)=>{
 const size=Math.min(39,205/rows),x0=75,y0=40;
 for(let x=0;x<=cols;x++){c.strokeStyle=ink;c.lineWidth=1;c.beginPath();c.moveTo(x0+x*size,y0);c.lineTo(x0+x*size,y0+rows*size);c.stroke();if(x<cols)text(c,String.fromCharCode(65+x),x0+(x+.5)*size,23);}
 for(let y=0;y<=rows;y++){c.beginPath();c.moveTo(x0,y0+y*size);c.lineTo(x0+cols*size,y0+y*size);c.stroke();if(y<rows)text(c,y+1,54,y0+(y+.5)*size);}
 const point=a=>[x0+(a[0]+.5)*size,y0+(a[1]+.5)*size];
 if(highlight){const [x,y]=point(highlight);c.fillStyle='#e1b74766';c.fillRect(x-size/2+2,y-size/2+2,size-4,size-4);c.strokeStyle=ink;c.lineWidth=3;c.strokeRect(x-size/2+2,y-size/2+2,size-4,size-4);}
 for(const m of marks){const [x,y]=point(m.at);symbol(c,m.symbol,x,y);}
 if(start){const [x,y]=point(start);text(c,startLabel,x,y,20);}
 if(start&&path.length){c.strokeStyle='#b14432';c.lineWidth=3;c.beginPath();let pos=[...start],a=point(pos);c.moveTo(...a);path.forEach((d,i)=>{const f=Math.max(0,Math.min(1,p*path.length-i));if(!f)return;c.lineTo(...point([pos[0]+d[0]*f,pos[1]+d[1]*f]));pos=[pos[0]+d[0],pos[1]+d[1]];});c.stroke();}
 text(c,'N ↑',340,37,18);text(c,'Rows increase south ↓',450,72);text(c,'Columns increase east →',450,96);
 key.forEach((k,i)=>{symbol(c,k.symbol,357,138+i*31);text(c,`${k.symbol} = ${k.name}`,475,138+i*31);});
 if(!key.length){text(c,start?(startLabel==='E'?'E = end':'S = start'):highlight?'Outlined square = target':'Letter first, number second',445,151);text(c,'North is at the top',445,180);}
};
export const contours=(c,{base=20,interval=10,lines=4,blank=-1,hidden=[],showInterval=true,gap=55,compare},p)=>{
 /* improve20-r11f-nov2 #3: the heights under close lines take as many staggered rows (2 or 3) as their grown width needs; the caption sits below them */
 /* picframe-nov2 #3 (every contour-compare item, R11F's "20 m against 35 m" and "30 m against the caption"): three rows were the cap and the row
    step was guessed from "M", so close lines (4 or more under one tag's width) still met, and the caption could land on the last row. The
    rows now number as many as the measured width needs (up to one per line), the step is the measured grown height (b: the growth, from the
    small font's 7-unit "0"), and the lines end higher so every row and then the caption fit above the picture's bottom edge. */
 const tag=i=>i===blank||hidden.includes(i)?'? m':`${base+i*interval} m`;c.font='12px sans-serif';const lw=c.measureText(`${base+(lines-1)*interval} m`).width+6,b=Math.max(1,c.measureText('0').width/7),rh=Math.max(10*b+4,22),need=sp=>Math.min(lines,Math.max(2,Math.ceil(lw/sp)));
 const panel=(x,width,spacing,name,rows,bot)=>{text(c,name,x+width/2,22,17);for(let i=0;i<lines;i++){const xx=x+25+i*spacing;c.strokeStyle='#8a593b';c.lineWidth=3;c.beginPath();c.moveTo(xx,61);c.lineTo(xx,bot);c.stroke();text(c,tag(i),xx,bot+2+rh/2+(i%rows)*rh,12);}};
 if(compare){const ra=need(compare[0]),rb=need(compare[1]),r=Math.max(ra,rb),bot=Math.max(120,Math.min(190,Math.round(276-(r+1)*rh-2)));panel(20,275,compare[0],'Slope A',ra,bot);panel(340,275,compare[1],'Slope B',rb,bot);text(c,'Same map scale and contour interval',320,bot+2+r*rh+rh/2,14);}
 /* improve20-g-nov1 #15 (audit5 b5): a hill seen from above is nested closed rings, the lowest outside and the highest round the top, not
    straight lines (kids did not see a hill in them). Each ring's height sits on a paper tag on its right-hand side. */
 else{text(c,'Contour lines: a hill seen from above',320,20,17);const cx=300,cy=142;for(let i=0;i<lines;i++){const rx=250-i*(200/Math.max(1,lines)),ry=100-i*(80/Math.max(1,lines));c.strokeStyle='#8a593b';c.lineWidth=3;c.beginPath();c.ellipse(cx-i*6,cy+i*3,rx,ry,0,0,Math.PI*2);c.stroke();
  /* improve20-r11f-nov2 #3: when neighbouring tags would touch at the size drawn, every other ring carries its tag on its left-hand side (still on its own ring) */c.font='13px sans-serif';const alt=c.measureText('100 m').width+6>200/Math.max(1,lines)-6;const t=i===blank||hidden.includes(i)?'? m':`${base+i*interval} m`,tx=cx-i*6+(alt&&i%2?-rx:rx),ty=cy+i*3;c.fillStyle=paper;c.fillRect(tx-24,ty-11,48,22);c.strokeStyle=ink;c.lineWidth=1;c.strokeRect(tx-24,ty-11,48,22);text(c,t,tx,ty,13);}
 text(c,showInterval?`Contour interval: ${interval} m`:'Equal elevation steps between neighboring lines',320,265,15);}
};
export const rainfall=(c,{values,labels=['Apr','May','Jun'],title='Fictional rainfall record (mm)'},p)=>{
 const max=Math.max(10,...values),top=Math.ceil(max/20)*20,x0=80,y=226,w=470;
 text(c,title,320,21,17);
 for(let i=0;i<=4;i++){const yy=y-i*44;c.strokeStyle='#bec4bc';c.lineWidth=1;c.beginPath();c.moveTo(x0,yy);c.lineTo(x0+w,yy);c.stroke();text(c,top*i/4,47,yy,12);}
 values.forEach((v,i)=>{const x=x0+35+i*150,h=176*v/top*p;c.fillStyle='#497aaf';c.fillRect(x,y-h,72,h);c.strokeStyle=ink;c.strokeRect(x,y-h,72,h);/* a bar reaching the top of the scale carries its value inside, clear of the title */if(y-h-14<44){c.fillStyle=paper;c.font='15px sans-serif';c.fillText(String(v),x+36,y-h+14);}else text(c,v,x+36,y-h-14,15);text(c,labels[i],x+36,250);});
};
export const routes=(c,{a,b,scale=1},p)=>{
 const max=Math.max(a.reduce((s,n)=>s+n,0),b.reduce((s,n)=>s+n,0)),unit=470/max;
 text(c,`Two routes; each map unit represents ${scale} km`,320,24,17);
 [a,b].forEach((parts,row)=>{let x=105;const y=95+row*100;text(c,row?'B':'A',45,y+20,22);parts.forEach((v,i)=>{c.fillStyle=i?'#e1b45b':'#75a788';c.fillRect(x,y,v*unit*p,35);c.strokeStyle=ink;c.lineWidth=2;c.strokeRect(x,y,v*unit,35);text(c,`${v} unit${v===1?'':'s'}`,x+v*unit/2,y-17,14);x+=v*unit;});});
};
/* Round 3 (17 Oct): the cells use the bitmap font at double size (16px and up), so the table stays readable when a lesson on a short window shrinks the picture to about 360px */
export const sites=(c,{a,b,criteria},p)=>{
 const xl=[15,295,460],xw=[280,165,165],ys=[60,104,148,192];text(c,'Fictional settlement survey',320,20,18);
 [['Site','A','B'],['In flood zone?',a.flood?'yes':'no',b.flood?'yes':'no'],['Road distance (km)',a.road,b.road],['Farm area (ha)',a.land,b.land]].forEach((row,i)=>row.forEach((s,j)=>{c.strokeStyle='#a9ad9f';c.lineWidth=1;c.strokeRect(xl[j],ys[i]-22,xw[j],44);text(c,s,xl[j]+xw[j]/2,ys[i],16);}));
 text(c,'Rule: outside the flood zone,',320,234,16);text(c,`road at most ${criteria.road} km, farm at least ${criteria.land} ha`,320,259,16);
};
/* lines: a simplified globe grid. axis 'lat' draws parallels 70°S-70°N; 'lon' draws meridians 90°W-90°E. places:[{name,deg}] (south/west negative). */
const deg=(d,axis)=>d===0?(axis==='lat'?'0° equator':'0° prime meridian'):`${Math.abs(d)}°${axis==='lat'?(d>0?'N':'S'):(d>0?'E':'W')}`;
/* improve20-r11f-nov2 #3: at the size drawn (12 CSS px in a fitted quiz picture) the degree numbers touched. Latitude: every line keeps its number,
   in two staggered columns (odd tens left, even tens right; the equator reads 0° with "equator" written on its red line), each on its line's
   true height. Longitude: every 2nd meridian is numbered (30°; the prime meridian and any line a place sits on always), every line still drawn
   where it is. A place's name sits right of its dot, clear of the title and the next line's number. */
const beside=(c,s,x,y,size=13)=>{c.fillStyle=ink;c.font=`${size}px sans-serif`;c.textAlign='left';c.textBaseline='middle';c.fillText(String(s),x,y);};
export const lines=(c,{axis='lat',places=[]},p)=>{
 if(axis==='lat'){const y=d=>150-d*1.7;text(c,'Lines of latitude (simplified; north at the top)',370,11,13);c.font='10px sans-serif';const two=c.measureText('00').width*.7+4>17,lw=c.measureText('70°S').width,x0=two?Math.max(120,Math.round(12+2*lw+8)):120;
  for(let d=-70;d<=70;d+=10){c.strokeStyle=d?'#b9c2c8':'#b14432';c.lineWidth=d?1:3;c.beginPath();c.moveTo(x0,y(d));c.lineTo(620,y(d));c.stroke();if(!two)text(c,deg(d,'lat'),62,y(d),d?10:12);else{text(c,d?deg(d,'lat'):'0°',(d/10)%2?6+lw/2:x0-6-lw/2,y(d),d?10:12);if(!d){/* picframe-nov2 #2 (R11F's geography-3 "equator" against "Town"): the word takes the first of left-above, right-above, left-below, right-below whose span (grown 2.2x, as a fitted quiz picture grows labels) misses every place name near the equator; before, only the first place moved it */const gw=c.measureText('equator').width*2.2,nm=places.map((q,i)=>{const px=190+i*(400/Math.max(1,places.length-1||1)),py=y(q.deg)+(q.deg>=60?9:-9);c.font='13px sans-serif';return {l:px-12,r:px+14+c.measureText(q.name).width*2.2,t:Math.min(py,y(q.deg))-14,b:Math.max(py,y(q.deg))+14};});c.font='10px sans-serif';const spots=[[x0+4,y(d)-11,'left'],[616,y(d)-11,'right'],[x0+4,y(d)+11,'left'],[616,y(d)+11,'right']],clear=([sx,sy,al])=>{const l=al==='left'?sx:sx-gw;return !nm.some(n=>n.l<l+gw&&l<n.r&&n.t<sy+8&&sy-8<n.b);},r0=places.some((q,i)=>i===0&&Math.abs(q.deg)<=10),sp=spots.find(clear)||spots[r0?1:0];c.fillStyle='#b14432';c.textAlign=sp[2];c.textBaseline='middle';c.fillText('equator',sp[0],sp[1]);}}}
  places.forEach((q,i)=>{const x=190+i*(400/Math.max(1,places.length-1||1));if(i/places.length>p)return;symbol(c,'circle',x,y(q.deg));beside(c,q.name,x+14,y(q.deg)+(q.deg>=60?9:-9));});}
 else {const x=d=>320+d*3.2;text(c,'Lines of longitude (simplified; east to the right)',320,14,15);c.font='11px sans-serif';
  /* picframe-nov2 #3 (every longitude item, R11F's "90°W against 75°W" and "0° against prime meridian"): R11F stacked a place's line number
     under its numbered neighbour 12 units lower, but a fitted quiz picture grows the small font about 2x, so the rows still touched. Now
     each label's width and height are measured at the size drawn (b: the growth, from the small font's 7-unit "0"); a place's line is
     always numbered, 0° unless it would touch one (then it reads "0° prime meridian" in the caption), and any other line only when its
     number clears every number already placed. Two places 15° apart that still touch take two rows. The lines end higher so the rows fit. */
  const lab=d=>d?deg(d,'lon'):'0°',W=d=>c.measureText(lab(d)).width,b=Math.max(1,c.measureText('0').width/7),rh=10*b+4,hit=(a,e)=>Math.abs(x(a)-x(e))<(W(a)+W(e))/2+4;
  const on=[...new Set(places.map(q=>q.deg).filter(d=>d>=-90&&d<=90&&d%15===0))].sort((a,e)=>a-e),row={};for(const d of on)row[d]=on.some(e=>e<d&&row[e]===0&&hit(e,d))?1:0;
  const zl=!on.includes(0)&&on.some(d=>hit(d,0)),num=[...on];if(!on.includes(0)&&!zl)num.push(0);
  for(let d=-90;d<=90;d+=15)if(!num.includes(d)&&!num.some(e=>hit(e,d))){num.push(d);row[d]=0;}row[0]??=0;
  const rows=on.some(d=>row[d]===1)?2:1,bot=Math.max(190,Math.min(236,Math.round(278-rh*(rows+1)-2))),y1=bot+2+rh/2;
  for(let d=-90;d<=90;d+=15){c.strokeStyle=d?'#b9c2c8':'#b14432';c.lineWidth=d?1:3;c.beginPath();c.moveTo(x(d),36);c.lineTo(x(d),bot);c.stroke();if(num.includes(d))text(c,lab(d),x(d),y1+(row[d]||0)*rh,11);}
  text(c,zl?'0° prime meridian':'prime meridian',x(0),y1+rows*rh,11);
  const py1=Math.min(210,bot-14);places.forEach((q,i)=>{const y=70+i*((py1-70)/Math.max(1,places.length-1||1));if(i/places.length>p)return;symbol(c,'circle',x(q.deg),y);text(c,q.name,x(q.deg),y-17,13);});}
};
/* A geographic map, not invented teaching coordinates. Regional crops preserve Natural Earth
   country polygons and label anchors. Numbered keys keep small countries legible without
   overlapping their names or depending on colour. North is up; this is not a distance diagram. */
export const countryMapLayout=({view,countries})=>{
 const [west,south,east,north]=view,cos=Math.cos((south+north)*Math.PI/360),scale=Math.min(404/((east-west)*cos),207/(north-south));
 const width=(east-west)*cos*scale,height=(north-south)*scale,left=16+(404-width)/2,top=36+(207-height)/2;
 const project=([lon,lat])=>[left+(lon-west)*cos*scale,top+(north-lat)*scale];
 return {project,selected:countries.map(name=>COUNTRY_ATLAS.find(row=>row.name===name)),frame:{left,top,width,height}};
};
export const countrymap=(c,q)=>{
 const {project,selected}=countryMapLayout(q),[west,south,east,north]=q.view,palette=['#85b789','#e2b35b','#87b5d0','#c5a0c9'];
 text(c,q.title??q.continent,320,18,20);
 c.save();c.beginPath();c.rect(16,36,404,207);c.clip();c.fillStyle='#bed9e7';c.fillRect(16,36,404,207);
 for(const row of COUNTRY_ATLAS){
  const [w,s,e,n]=row.bounds;if(e<west||w>east||n<south||s>north)continue;
  const selectedIndex=q.countries.indexOf(row.name);c.fillStyle=selectedIndex<0?'#e0d7bd':palette[selectedIndex];c.strokeStyle='#687268';c.lineWidth=selectedIndex<0?.65:1.4;
  for(const poly of row.polys){c.beginPath();for(const ring of poly){ring.forEach((point,i)=>{const [x,y]=project(point);if(i)c.lineTo(x,y);else c.moveTo(x,y);});c.closePath();}c.fill('evenodd');c.stroke();}
 }
 const pin=(i,x,y)=>{c.fillStyle=paper;c.strokeStyle=ink;c.lineWidth=1.5;c.beginPath();c.arc(x,y,10,0,Math.PI*2);c.fill();c.stroke();text(c,i+1,x,y,14);};
 selected.forEach((row,i)=>pin(i,...project(row.at)));c.restore();
 c.strokeStyle=ink;c.lineWidth=1;c.strokeRect(16,36,404,207);
 text(c,'Match the numbers',530,54,15);
 selected.forEach((row,i)=>{const y=91+i*35;pin(i,446,y);c.fillStyle=ink;c.font='16px sans-serif';c.textAlign='left';c.textBaseline='middle';c.fillText(row.name,463,y);});
 text(c,'N ↑',391,55,15);text(c,'Simplified map · North at the top',218,262,13);
};
export const GEO_DRAW={gridmap,contours,rainfall,routes,sites,lines,countrymap};
export const describeGeo=q=>q.t==='countrymap'?`A north-up regional map${q.continent?` for ${q.continent}`:''}. Highlighted country outlines and numbered labels: ${q.countries.map((name,i)=>`${i+1}: ${name}`).join('; ')}. These countries have most of their land in ${q.continent} in our seven-continent model. Coastlines and borders are simplified.`:q.t==='lines'?`Simplified ${q.axis==='lon'?'longitude':'latitude'} grid. `+(q.places||[]).map(x=>`${x.name} at ${deg(x.deg,q.axis||'lat')}`).join('; '):q.t==='gridmap'?`Map grid: ${q.cols||5} columns A onward, ${q.rows||5} rows numbered from the top. North is up.${q.highlight?` Highlighted column ${q.highlight[0]+1}, row ${q.highlight[1]+1}.`:''}${q.start?` ${q.startLabel==='E'?'End':'Start'} at ${String.fromCharCode(65+q.start[0])}${q.start[1]+1}.`:''}${q.path?.length?` Route offsets in column and row order: ${q.path.map(d=>d.join(', ')).join('; ')}.`:''} ${(q.key||[]).map(k=>`${k.symbol} means ${k.name}`).join('; ')} ${(q.marks||[]).map(m=>`${m.symbol} in ${String.fromCharCode(65+m.at[0])}${m.at[1]+1}`).join('; ')}`:q.t==='contours'?`Hillside contour lines with elevations ${Array.from({length:q.lines||4},(_,i)=>i===q.blank||q.hidden?.includes(i)?'unknown':(q.base||20)+i*(q.interval||10)+' m').join(', ')}.${q.compare?` Same scale: slope A lines ${q.compare[0]} units apart, slope B ${q.compare[1]} units apart.`:''}`:q.t==='rainfall'?`${q.title||'Fictional rainfall in mm'}: ${(q.labels||['Apr','May','Jun']).map((s,i)=>`${s} ${q.values[i]}`).join(', ')}`:q.t==='routes'?`Route A legs ${q.a.join(' and ')} map units; route B legs ${q.b.join(' and ')} map units; each unit is ${q.scale} km.`:`Survey: A flood zone ${q.a.flood?'yes':'no'}, road ${q.a.road} km, farm ${q.a.land} ha; B flood zone ${q.b.flood?'yes':'no'}, road ${q.b.road} km, farm ${q.b.land} ha. Rules: no flood zone, road at most ${q.criteria.road} km, farm at least ${q.criteria.land} ha.`;
