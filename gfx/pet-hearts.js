/* kidfix-a-oct31: the small hearts that rise over a companion while the hero pets it (gfx/actors/pet-sprites.js). An effect drawn
   in code, kept apart from the companion, which is only ever its PixelLab atlas. */
const HEART=['.##.##.','#######','#######','.#####.','..###..','...#...'];
export function drawHearts(c,x,y,age,still){c.save();for(let i=0;i<3;i++){const a=age-i*.28;if(a<0||a>1.1)continue;const k=a/1.1,hx=Math.round(x+(i-1)*9+(still?0:Math.sin(a*6+i)*2)),hy=Math.round(y-8-k*22);c.globalAlpha=Math.max(0,1-k*k);
 c.fillStyle='#2a1420';for(let r=0;r<HEART.length;r++)for(let q=0;q<7;q++)if(HEART[r][q]==='#')c.fillRect(hx-4+q,hy-3+r+1,1,1);c.fillStyle='#ef5d7a';for(let r=0;r<HEART.length;r++)for(let q=0;q<7;q++)if(HEART[r][q]==='#')c.fillRect(hx-4+q,hy-3+r,1,1);c.fillStyle='#ffd2dc';c.fillRect(hx-3,hy-2,1,1);}c.restore();}
