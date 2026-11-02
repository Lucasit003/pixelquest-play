/* Fast travel picker (25 Oct, game/fasttravel.js).
   ownernotes-a-nov1 (owner, 1 Nov: "Fast travel map: make it look a lot better"): the picker was a long list of text buttons. It is a
   map now, drawn with the game's own map art only: Oakhaven's baked town map (the same picture as the town map panel) and each
   chapter's world-map board (assets/worldmap/<chapter>.png, the PixelLab boards the world map itself shows). Every place the hero has
   visited is a pin on that picture, at its door or its pad, with its icon and its name (the town map's pins and their name layout,
   ui/map-you.js fitMap); a place not visited yet is a small dim lock on the map with no name, and its name is in the "N more to find"
   line under the map (improve20-d-nov1: names fold away until tapped). One region shows at a time; the region tabs (with a thumbnail
   of their map) switch it, and a chapter not reached yet is a closed tab. Code draws no picture here: only the pins' frames, labels
   and lines are CSS. Pins are buttons (44 px with their name on a phone, style.css "fast travel map"), in reading order, so Tab /
   Shift+Tab and Enter work. Pure: no DOM; main.js shows it and wires the tabs. */
import {MAPS,PADS} from '../game/worldmap-layout.js';
import {icon as uiIcon} from './icons.js';
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KIND={level:'Adventure',shop:'Shop',arena:'Arena'};
/* each place's icon: Oakhaven's spots use the town map's own markers and UI icons; a chapter stop shows what it is */
export const TOWN_ICON={gate:'map',library:'mk:1',guild:'swords',smith:'anvil',alchemist:'potion',inn:'mk:5',chapel:'mk:7',home:'mk:4',barracks:'shield',farm:'leaf'};
export const STOP_ICON={level:'swords',shop:'coins',arena:'helmet'};
/* the name on the map (the full name is the pin's title and aria-label) */
const SHORT={'town:gate':'Gate','town:guild':'Guild','town:smith':'Smith','town:alchemist':'Apothecary','town:inn':'Inn','town:chapel':'Chapel','town:farm':'Farm'};
const ico=(n,s=24)=>n.startsWith('mk:')?`<i class="ico" style="--i:${n.slice(3)};--s:${s}px;background-image:url(ui/skin/packicons3/town-markers.png)" aria-hidden="true"></i>`:uiIcon(n,{size:s});
const LOCK='<i class="ico travel-lock" style="--i:0;--s:16px;background-image:url(ui/skin/pl-icons/tier-lock.png)" aria-hidden="true"></i>';
const pct=(x,y,W,H)=>`left:${(x/W*100).toFixed(2)}%;top:${(y/H*100).toFixed(2)}%`;
/* one pin: here (you are here: no trip), open (a button that travels) or shut (a dim lock, no name) */
function pin(p,pos,here,ic,sub){
 /* a place with no spot on this picture (a test without the town map) still gets its pin, unplaced */
 const name=esc(p.name),short=esc(SHORT[p.id]||p.name),at=pos||'';
 if(p.id===here)return `<span class="pq-map-mark travel-pin travel-here" data-place="${esc(p.id)}" ${at?`style="${at}"`:''} title="${name}" aria-label="${name}: you are here">${ico(ic)}<b class="pq-map-name" aria-hidden="true">${short}</b></span>`;
 if(!p.open)return `<span class="pq-map-mark travel-pin travel-shut" ${at?`style="${at}"`:''} aria-hidden="true">${LOCK}</span>`;
 return `<button type="button" class="pq-map-mark travel-pin" data-travel="${esc(p.id)}" data-place="${esc(p.id)}" ${at?`style="${at}"`:''} title="${name}" aria-label="${name}: ${esc(sub)}">${ico(ic)}<b class="pq-map-name" aria-hidden="true">${short}</b></button>`;}
/* the places not visited yet, folded into one line whose names open on a tap (improve20-d-nov1, audit5 b21) */
/* improve20-r10d-nov2 #5 (kid sims nov2, polish list): the line opens by default and lists each upcoming place greyed out, a lock beside its name,
   under "Visit each once to unlock it" (owner: fast travel is free and unlocks by visiting); a tap on the line still folds it */
const more=places=>{const n=places.length;if(!n)return '';return `<details class="travel-more" open><summary><b>${n} more to find</b> <small>Visit each once to unlock it</small></summary><ul class="travel-soon">${places.map(p=>`<li title="${esc(p.name)}: visit to unlock" aria-label="${esc(p.name)}: visit to unlock">${LOCK}<b>${esc(p.name)}</b></li>`).join('')}</ul></details>`;};
const board=(key,title,img,W,H,places,here,iconOf,posOf,subOf,on)=>{
 const pins=places.map(p=>pin(p,posOf(p),here,iconOf(p),subOf(p))).join(''),hereAt=places.find(p=>p.id===here);
 const you=hereAt&&posOf(hereAt)?`<span class="pq-map-you pq-map-you-near" style="${posOf(hereAt)}" aria-hidden="true">You</span>`:'';
 return `<section class="travel-board" data-board="${key}" role="tabpanel" id="travel-board-${key}" aria-label="${esc(title)}"${on?'':' hidden'}>`
  +`<div class="pq-village-map travel-map" style="aspect-ratio:${W}/${H};--ar:${(W/H).toFixed(4)}">${img?`<img src="${esc(img)}" alt="Map of ${esc(title)}" class="pq-map-image" draggable="false">`:''}${pins}${you}</div></section>`;};
/* the region's "N more to find" line sits under the tabs, so the map can take the whole height of a phone held sideways */
const fold=(key,places,here,on)=>{const m=more(places.filter(p=>!p.open&&p.id!==here));return m?`<div class="travel-fold" data-fold="${key}"${on?'':' hidden'}>${m}</div>`:'';};
const tab=(key,title,thumb,count,on,shut,total=count)=>shut
 ?`<button type="button" role="tab" class="travel-tab travel-tab-shut" disabled aria-selected="false" title="Not reached yet. Walk there on the world map to unlock its stops."><span class="travel-thumb" style="background-image:url(${esc(thumb)})" aria-hidden="true"></span><b>${esc(title)}</b><small>${LOCK}Not reached yet</small></button>`
 :`<button type="button" role="tab" class="travel-tab${on?' is-on':''}" data-tab="${key}" aria-selected="${on}" aria-controls="travel-board-${key}"><span class="travel-thumb" style="background-image:url(${esc(thumb)})" aria-hidden="true"></span><b>${esc(title)}</b><small>${total>count?`${count} of ${total} places`:`${count} ${count===1?'place':'places'}`}</small></button>`;
/* the chapter board's picture (the world map's own) */
export const boardArt=id=>MAPS[id]?.art?`assets/worldmap/${MAPS[id].art}`:null;
/** list: travelList(save); here: the place id the hero stands at (no trip to it); town: {img, w, h, spots: {id: {x, y}}} (scenes/town.js
    hubTravelMap: Oakhaven's map picture and each spot's door on it); tab: the region to open on (else the one holding `here`, else
    Oakhaven); touch: the lead says "Tap". */
export function travelPickerHTML(list,{here=null,town=null,tab:want=null,touch=false}={}){
 const reached=list.chapters.filter(c=>c.reached);
 const hereIn=here&&list.town.some(p=>p.id===here)?'town':reached.find(c=>c.stops.some(p=>p.id===here))?.id;
 const open=[...(want&&(want==='town'||reached.some(c=>c.id===want))?[want]:[]),hereIn,'town'].find(Boolean);
 const tw=town?.w||4,th=town?.h||3,tpos=p=>{const q=town?.spots?.[p.id.slice(5)];return q?pct(q.x,q.y,tw,th):null;};
 const tabs=[tab('town','Oakhaven',town?.img||'',list.town.filter(p=>p.open).length,open==='town',false,list.town.length),
  ...list.chapters.map(c=>tab(c.id,c.name,boardArt(c.id)||'',c.stops.filter(p=>p.open).length,open===c.id,!c.reached,c.stops.length))].join('');
 const boards=[board('town','Oakhaven',town?.img,tw,th,list.town,here,p=>TOWN_ICON[p.id.slice(5)]||'map',tpos,p=>p.note,open==='town'),
  ...reached.map(c=>{const M=MAPS[c.id]||{w:480,h:270};return board(c.id,c.name,boardArt(c.id),M.w,M.h,c.stops,here,p=>STOP_ICON[p.kind]||'swords',p=>PADS[p.id]?pct(PADS[p.id].x,PADS[p.id].y,M.w,M.h):null,p=>(KIND[p.kind]||'Stop')+(p.optional?' · side path':''),open===c.id);})].join('');
 const folds=[fold('town',list.town,here,open==='town'),...reached.map(c=>fold(c.id,c.stops,here,open===c.id))].join('');
 return `<div class="travel-picker travel-atlas"><div class="travel-side"><p class="travel-lead"><span class="travel-free">Free</span> ${list.count} ${list.count===1?'place':'places'} unlocked.<span class="travel-how"> ${touch?'Tap':'Pick'} a place on the map to go there.</span></p>`
  +`<div class="travel-tabs" role="tablist" aria-label="Regions">${tabs}</div>${folds}</div><div class="travel-boards">${boards}</div></div>`;}
/* improve20-r10b-nov2 #10 (kid sims nov2: the hint was 25 words and replaced after about 5 s): the "New: fast travel" line is short, names
   the key (or the Map button on a phone), stays TRAVEL_HINT_MS, and a new key or tap lifts it once it has been up TRAVEL_LIFT_MS */
export const TRAVEL_HINT_MS=8000,TRAVEL_LIFT_MS=3000;
export const travelHintText=(touch,key='M')=>touch?'New: fast travel! Tap Map, then Fast travel.':`New: fast travel! Press ${key}, then Fast travel.`;
export const travelLiftDue=(at,now)=>at>0&&now-at>=TRAVEL_LIFT_MS;
