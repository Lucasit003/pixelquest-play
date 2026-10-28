/* Stage banners in the skin (v2:ui): the levels runtime describes each banner as data
   (gfx/stage-view.js stageBanners(w)); this draws it from pack art only. Planks and ribbons are the
   Dark Ages 9-slices, text is the baked Pixel Operator bitmap font, all on the 480x270 canvas at whole
   pixels. Registered with setStageUI() from initUI. Returns false until the art has loaded, and the
   runtime then falls back to its plain text for that frame. */
import {loadCanvasUI,drawPanel,drawPixelText,measurePixelText,drawSkin} from './canvas-ui.js';
import {STAGE} from '../game/stage.js';
const PARCH='#f1e4c0',GOLD='#e8c47a',INK='#3a2817',DARK='#1a0f0b';
const R=Math.round;
/* DOM HUD plates keep their CSS size while the canvas can scale fractionally. Convert their
   rendered rectangles into camera pixels. Ignore elements outside this canvas or not displayed. */
export function bannerHudRects(canvasRect,rects,W,H){
 if(!canvasRect?.width||!canvasRect?.height)return [];
 const sx=W/canvasRect.width,sy=H/canvasRect.height;
 return rects.filter(r=>r?.width>0&&r.height>0).map(r=>({left:(r.left-canvasRect.left)*sx,top:(r.top-canvasRect.top)*sy,right:(r.right-canvasRect.left)*sx,bottom:(r.bottom-canvasRect.top)*sy})).filter(r=>r.right>0&&r.bottom>0&&r.left<W&&r.top<H);
}
const hudCache=new WeakMap();
export function stageBannerObstacles(canvas,W,H,mobileAvoid=false){
 const d=canvas?.ownerDocument||globalThis.document,w=d?.defaultView||globalThis.window;
 if(!canvas?.getBoundingClientRect||!d?.querySelectorAll)return [];
 let state=hudCache.get(canvas);
 if(!state){
  /* oct25 phone tiers: one cached projection per obstacle set (with and without the phone controls), so callers asking for both in a frame do not re-measure every time */
  state={gen:0,by:{}};hudCache.set(canvas,state);
  const dirty=()=>{state.gen++;},RO=w?.ResizeObserver||globalThis.ResizeObserver,MO=w?.MutationObserver||globalThis.MutationObserver;
  state.resize=RO?new RO(dirty):null;state.resize?.observe(canvas);
  /* main assigns boss.hidden each frame; ignore identical attribute assignments instead of
     forcing a layout read every frame while that HUD is visible or hidden. */
  state.mutation=MO?new MO(records=>{if(!records||records.some(r=>r.type!=='attributes'||r.oldValue!==r.target.getAttribute(r.attributeName)))dirty();}):null;
  /* oct25-phone2: #toast too, so a compact phone toast is avoided by elite names while it shows */
  for(const node of [d.documentElement,canvas,...d.querySelectorAll('#hud,#boss-hud,#toast')])if(node)state.mutation?.observe(node,{attributes:true,attributeOldValue:true,attributeFilter:['class','style','hidden','width','height']});
  for(const node of d.querySelectorAll('#hotbar,#touch'))state.mutation?.observe(node,{childList:true,subtree:false});
  for(const node of d.querySelectorAll('#joy-zone'))state.mutation?.observe(node,{childList:true,subtree:true,attributes:true,attributeOldValue:true,attributeFilter:['class','style']});
  for(const event of ['resize','orientationchange','pq:scale'])w?.addEventListener?.(event,dirty,{passive:true});
  w?.visualViewport?.addEventListener?.('resize',dirty,{passive:true});
  // Final transformed position can differ from the first frame of the boss entrance animation.
  for(const event of ['animationend','transitionend'])d.addEventListener?.(event,e=>{if(e.target?.matches?.('.hero-hud,.hud-sub,#boss-hud,.map-panel,#hotbar button,#touch button,#toast'))dirty();},{passive:true});
 }
 const size=`${W},${H}`,key=mobileAvoid?1:0,hit=state.by[key];
 if(!hit||hit.gen!==state.gen||hit.size!==size){
  const rects=[];
  /* latechap-oct27: a showing toast on desktop too (the armour tip sat over "ARMOUR CRACKED!" on the Void Knight) */
  for(const el of d.querySelectorAll('.hero-hud,.hud-sub,#boss-hud,.map-panel,#hotbar button,#xp-track,#touch button,#toast.show'+(mobileAvoid?',#m-menu button,#joy-ghost,#joy-zone .nipple .back':''))){
   state.resize?.observe(el);
   if(el.hidden)continue;
   const r=el.getBoundingClientRect();if(!r.width||!r.height)continue;
   const style=w?.getComputedStyle?.(el);if(style?.display==='none'||style?.visibility==='hidden'||style?.opacity==='0'&&el.id!=='joy-ghost')continue;
   rects.push(r);
  }
  state.by[key]={gen:state.gen,size,rects:bannerHudRects(canvas.getBoundingClientRect(),rects,W,H)};
 }
 return state.by[key].rects;
}
/* Prefer the existing centered anchor when clear; otherwise choose the nearest free rectangle.
   Horizontal movement costs more, so a banner normally moves just below the overlapping HUD.
   If a tiny viewport has no free rectangle, minimize covered HUD area without leaving the view. */
export function placeStageBanner({W,H,width,height,top,cx=W/2,obstacles=[],hardObstacles=[],margin=8,gap=5}){
 const w=Math.min(width,Math.max(1,W-2*margin)),h=Math.min(height,Math.max(1,H-2*margin)),clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
 const left=clamp(R(cx-w/2),margin,W-margin-w),y=clamp(R(top),margin,H-margin-h);
 const xs=new Set([left]),ys=new Set([y]);
 xs.add(margin);xs.add(W-margin-w);ys.add(margin);ys.add(H-margin-h);
 for(const r of [...obstacles,...hardObstacles]){xs.add(clamp(Math.ceil(r.right+gap),margin,W-margin-w));xs.add(clamp(Math.floor(r.left-gap-w),margin,W-margin-w));ys.add(clamp(Math.ceil(r.bottom+gap),margin,H-margin-h));ys.add(clamp(Math.floor(r.top-gap-h),margin,H-margin-h));}
 let best=null;
 for(const x of xs)for(const t of ys){
  if(hardObstacles.length&&(w<width||h<height||hardObstacles.some(r=>x<r.right+gap&&x+w>r.left-gap&&t<r.bottom+gap&&t+h>r.top-gap)))continue;
  const overlap=obstacles.reduce((sum,r)=>sum+Math.max(0,Math.min(x+w,r.right+gap)-Math.max(x,r.left-gap))*Math.max(0,Math.min(t+h,r.bottom+gap)-Math.max(t,r.top-gap)),0);
  const distance=2*Math.abs(x-left)+Math.abs(t-y),score=overlap*1e6+distance;
  if(!best||score<best.score)best={left:x,top:t,width:w,height:h,cx:x+w/2,score,overlap};
 }
 return best;
}
export function wrapBannerText(value,width,{bold=false,scale=1}={}){
 const lines=[];let line='';
 for(const word of String(value).split(/\s+/)){
  if(line&&measurePixelText(`${line} ${word}`,{bold,scale})<=width){line+=' '+word;continue;}
  if(line)lines.push(line);line='';
  for(const ch of word){if(line&&measurePixelText(line+ch,{bold,scale})>width){lines.push(line);line='';}line+=ch;}
 }
 if(line)lines.push(line);return lines.length?lines:[''];
}
/* Narrow and wrap a combat panel before allowing it to overlap a tall actor. */
export function fitStageText({W,H,title,top,obstacles,bold=true,scale=1,pad=40,lineHeight=14,baseHeight=26,maxWidth,compact=false}){const cap=Math.min(W-16,maxWidth||W);let best;for(const limit of [cap,...(compact?[220,180,140].filter(n=>n<cap):[])]){const lines=wrapBannerText(title,Math.max(1,limit-pad),{bold,scale}),width=Math.min(W-16,Math.max(...lines.map(s=>measurePixelText(s,{bold,scale})))+pad),height=baseHeight+(lines.length-1)*lineHeight,box=placeStageBanner({W,H,width,height,top,obstacles});if(!best||box.overlap<best.box.overlap)best={lines,box};if(!box.overlap)break;}return best;}
/* Warning priority: HUD/controls and hero are hard exclusions. Try full copy, tighter
   padding, then concise copy with all actors/CLEAR reserved before letting those yield.
   Pixel fonts stay at their smallest crisp scale (1); never clip text to fit a panel. */
export function shortWarning(title){return title.replace(/Step off the glowing (?:row|lane|ground)/gi,'Leave the glow').replace(/Move to the green lane/gi,'Use the green lane').replace(/Move out of the glowing circles/gi,'Leave the circles').replace(/Leave the glowing circles/gi,'Leave the circles').replace(/(Walk|Back) away from (?:the \w+|her|him)/g,'$1 away').replace(/Watch the glowing ground/gi,'Watch the glow').replace(/Hit the one with a shadow/gi,'Hit the shadowed one');}
export function fitStageWarning({W,H,title,top,hardObstacles=[],obstacles=[]}){
 const hard=hardObstacles,all=[...hard,...obstacles],cap=Math.min(260,W-16),short=shortWarning(title);
 const variants=[{title,pad:36,lineHeight:14,baseHeight:26},{title,pad:16,lineHeight:12,baseHeight:22},{title:short,pad:16,lineHeight:12,baseHeight:22}];
 for(const reserveActors of [true,false]){
  let best=null;
  for(const v of variants)for(const limit of [cap,220,180,140,110].filter((n,i,a)=>n<=cap&&a.indexOf(n)===i)){
   const lines=wrapBannerText(v.title,limit-v.pad,{bold:true}),width=Math.max(...lines.map(s=>measurePixelText(s,{bold:true})))+v.pad,height=v.baseHeight+(lines.length-1)*v.lineHeight;
   const box=placeStageBanner({W,H,width,height,top,obstacles:reserveActors?[]:obstacles,hardObstacles:reserveActors?all:hard});
   if(!box)continue;
   const result={lines,box,lineHeight:v.lineHeight,textTop:v.baseHeight===22?16:18};
   if(reserveActors)return result;
   if(!best||box.score<best.box.score)best=result;
  }
  if(best)return best;
 }
 /* No readable rectangle exists (e.g. a moved joystick fills the last gap). Do not
    cover controls or the hero, or fall back to the old unpositioned center text. */
 return null;
}
/* oct24-endgame (playtest ch3 minor): the stage banners drawn in the last few frames, in camera pixels, plus the DOM HUD plates;
   gfx/world.js keeps floating combat words ("SHIELDED", "ARMOUR CRACKED!") out of them, since both draw over the world */
const drawnBanners=[],clock=()=>globalThis.performance?.now?.()??0;
export function labelObstacles(canvas,W,H){const now=clock();return [...stageBannerObstacles(canvas,W,H),...drawnBanners.filter(b=>now-b.at<150)];}
/* a plank sized to its text, centred on cx */
function plank(c,kind,cx,y,w,h){return drawPanel(c,kind,R(cx-w/2),R(y),R(w),R(h));}
function text(c,s,x,y,o){return drawPixelText(c,s,x,y,{align:'center',outline:DARK,...o})!==false;}
/* Layout follows the camera view (STAGE.camW x camH: 480x270 on desktop, e.g. 370x180 on phones). The runtime's
   y values are for 270 rows; each banner keeps its own internal spacing and only its anchor moves, so on desktop
   unobstructed positions stay unchanged. Short announcements also avoid the measured DOM HUD. */
export const stageBannerText=(b,touch=false)=>touch&&b.touchTitle?b.touchTitle:b.title;
export function stageBanner(c,b){
 b={...b,title:stageBannerText(b,c.canvas?.ownerDocument?.documentElement?.classList.contains('m-mode'))};
 const W=STAGE.camW||480,H=STAGE.camH||270,cx=Math.round(W/2),Y=y=>Math.round(y*H/270),fitW=w=>Math.min(W-8,w);
 c.save();c.globalAlpha*=b.alpha??1;let ok=true;
 const BW=s=>measurePixelText(s,{bold:true});
 if(['wave','cleared','prompt','quote'].includes(b.kind)){
  const kind=b.kind,clear=kind==='cleared',quote=kind==='quote',bold=!quote,scale=clear&&BW(b.title)*2+40<=W-16?2:1,pad=kind==='prompt'?36:40;
  const lineHeight=clear?24:14,oldTop=clear?Y(b.y)-26:quote?(b.compact?Y(b.y):Math.max(Y(b.y),Y(80)))-16:kind==='wave'?Y(b.y)-15:Y(b.y)-16;
  const hud=stageBannerObstacles(c.canvas,W,H,b.mobileAvoid),warning=b.step==='danger',layout=warning?fitStageWarning({W,H,title:b.title,top:oldTop,hardObstacles:[...hud,...(b.hardObstacles||[])],obstacles:b.obstacles||[]}):fitStageText({W,H,title:b.title,top:oldTop,obstacles:[...hud,...(b.obstacles||[])],bold,scale,pad,lineHeight,baseHeight:clear?36:kind==='wave'?22:26,maxWidth:b.maxWidth,compact:b.compact});
  if(!layout){c.restore();return true;}
  const {lines,box}=layout;
  /* oct24-endgame (playtest ch3 minor): world labels ("SHIELDED") read where the banners were drawn last frame to stay clear of them */
  drawnBanners.push({left:box.cx-box.width/2,top:box.top,right:box.cx+box.width/2,bottom:box.top+box.height,at:clock()});if(drawnBanners.length>8)drawnBanners.shift();
  if(quote&&b.compact&&box.overlap>0){c.restore();return true;}
  const panel=clear||quote?'parchment':kind==='wave'?'banner':'plank',color=clear?'#7a3a12':quote?INK:kind==='wave'?'#fff2d0':PARCH,outline=clear||quote?null:kind==='wave'?'#2a0d08':DARK;
  ok=plank(c,panel,box.cx,box.top,box.width,box.height);
  for(let i=0;i<lines.length;i++)ok=text(c,lines[i],box.cx,box.top+(layout.textTop??(clear?28:kind==='wave'?16:18))+i*(layout.lineHeight??lineHeight),{scale,bold,color,outline})&&ok;
 }else if(b.kind==='intro'){
  const w=fitW(Math.max(BW(b.title)*2,BW(b.sub))+48),t=Y(98);
  ok=plank(c,'plank',cx,t,w,62)&&drawSkin(c,'crest',cx,t-14,{align:'center'})&&text(c,b.title,cx,t+30,{scale:2,bold:true,color:PARCH})&&text(c,b.sub,cx,t+48,{color:GOLD});
 }else if(b.kind==='go'){
  /* GO sits at the right edge of the view, whatever its width (the runtime's x assumes 480); oct25-exploit: on phones it also keeps
     off the Map/Journal/Menu buttons (at 740x360 it was drawn under them) */
  /* ...and steps aside from HUD it would cover (the phone potion and action buttons sit on that edge) */
  const x0=W-(480-R(b.x)),y0=Y(b.y),gw=BW('GO')*2+26,box=placeStageBanner({W,H,width:gw,height:30,top:y0-18,cx:x0-22-BW('GO')*2+gw/2,obstacles:stageBannerObstacles(c.canvas,W,H,true)});
  const x=x0+R(box.left-(x0-22-BW('GO')*2)),y=y0+R(box.top-(y0-18));ok=text(c,'GO',x-22,y,{scale:2,bold:true,color:GOLD,align:'right'})&&drawSkin(c,'tip-right',x-18,y-15,{scale:2});
 }else if(b.kind==='boss'){
  /* small views (phones) get a compact card high in the frame, clear of the touch pads */
  const small=H<230,ts=small?1:2,off=R((1-(b.slide??1))*-18);c.globalAlpha*=b.slide??1;
  const line=b.line?`“${b.line}”`:'',lw=line?measurePixelText(line):0,w=fitW(Math.max(BW(b.title)*ts,BW(b.sub),lw)+48),h=small?(line?58:42):(line?76:58);
  if(small){
   /* oct25 phone tiers: at 844x390 and 740x360 the one-line card ran under the potion and ability buttons ("...face the warlo").
      The quote wraps and the card takes the nearest spot clear of the touch buttons and HUD plates. */
   const hud=stageBannerObstacles(c.canvas,W,H,true),top=Math.round(H*.22);let fit=null;
   for(const limit of [W-16,300,260,220,180].filter((n,i,a)=>n<=W-16&&a.indexOf(n)===i)){
    const ql=line?wrapBannerText(line,limit-48):[],cw=Math.min(W-16,Math.max(BW(b.title),BW(b.sub),...ql.map(s=>measurePixelText(s)))+48),ch=line?42+16+(ql.length-1)*12:42;
    const box=placeStageBanner({W,H,width:cw,height:ch+14,top:top-14,obstacles:hud});if(!fit||box.overlap<fit.box.overlap)fit={ql,box,ch};if(!box.overlap)break;}
   const {ql,box,ch}=fit,bx=R(box.cx),bt=box.top+14;
   ok=plank(c,'plank',bx-off,bt,box.width,ch)&&drawSkin(c,'crest',bx-off,bt-14,{align:'center'})&&text(c,b.title,bx-off,bt+20,{bold:true,color:PARCH})&&text(c,b.sub,bx+off,bt+34,{color:GOLD})&&ql.every((s,i)=>text(c,s,bx,bt+50+i*12,{color:PARCH}));
  }else{
  const t=Math.min(Y(150),H-h-6),o=[30,48,66];
  ok=plank(c,'plank',cx-off,t,w,h)&&drawSkin(c,'crest',cx-off,t-14,{align:'center'})&&text(c,b.title,cx-off,t+o[0],{scale:ts,bold:true,color:PARCH})&&text(c,b.sub,cx+off,t+o[1],{color:GOLD})&&(!line||text(c,line,cx,t+o[2],{color:PARCH}));}
 }else if(b.kind==='victory'){
  const w=BW(b.title)*2+72,t=Y(78);ok=plank(c,'ornate',cx,t,w,80)&&drawSkin(c,'crest',cx,t-14,{align:'center'})&&text(c,b.title,cx,t+50,{scale:2,bold:true,color:GOLD});
 }else ok=false;
 c.restore();return ok;
}
/* Register with the levels runtime. Safe to call before stage-view.js exists (it loads softly). */
export async function installStageBanners(){
 loadCanvasUI();
 try{const sv=await import('../gfx/stage-view.js');sv.setStageUI?.({banner:stageBanner});}catch{}
 globalThis.PQ_UI={...(globalThis.PQ_UI||{}),stageBanner};
}
