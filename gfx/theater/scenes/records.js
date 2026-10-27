/* Two surveys of one corner of the Oakhaven square, for history-e-change-and-continuity steps 1 and 2. In 1900
   the bench and the book stall are there; in 1910 the bench is still there, the noticeboard has appeared and
   the book stall is gone. The table in the corner is the steps' own records: 1900 bench present, noticeboard
   absent, book stall present, planter absent; 1910 bench present, noticeboard present, book stall absent,
   planter absent, titled as fictional records like the lesson's own picture. Step 2's point, that two observations say nothing about the years between, closes the scene.

   Stage: art/tiled/theater-plaza.tmx, camera at (60, 30). Parts: survey, between. */
const P='present',A='absent';
export default {
 id:'records',
 title:'Two surveys of the Oakhaven square',
 stage:{map:'plaza',w:832,h:320},
 view:{x:60,y:30},
 alt:{
  default:'Fictional Oakhaven records: one corner of the square surveyed in 1900 and in 1910.',
  survey:'Fictional Oakhaven records. In 1900 the corner has a bench and a book stall. In 1910 the bench is still there, a noticeboard has appeared and the book stall is gone. A table records each object at both dates.',
  between:'Fictional Oakhaven records. The 1910 corner with the table of both surveys; a label says the records do not show the years between 1900 and 1910.'},
 cast:[{id:'stall',atlas:'theater-stall',x:300,y:148,face:1,shadow:false},
  {id:'bench',atlas:'theater-bench',x:470,y:150,face:1,shadow:false},
  {id:'board',atlas:'theater-noticeboard',x:396,y:154,face:1,shadow:false,hidden:true},
  {id:'arch',atlas:'theater-scholar',x:664,y:270,face:-1,head:60}],
 beats:[
  {at:0,do:'part',name:'survey'},
  {at:0,do:'label',id:'year',text:'Survey, 1900',x:16,y:12,kind:'cause',bold:true,until:8},
  {at:.4,do:'table',id:'t',title:'Fictional Oakhaven records',cols:['','1900','1910'],rows:[['bench','',''],['noticeboard','',''],['book stall','',''],['planter','','']],x:12,y:96,align:'left',colW:[92,62,62]},
  {at:2.6,do:'act',who:'arch',state:'cast',dur:2},
  {at:2.8,do:'label',id:'n-bench',text:'bench',follow:'bench',dy:-50,until:7.2},{at:3,do:'cell',id:'t',r:0,c:1,v:P},{at:3.6,do:'cell',id:'t',r:1,c:1,v:A},{at:4,do:'label',id:'n-stall',text:'book stall',follow:'stall',dy:-30,dx:44,until:7.2},{at:4.2,do:'cell',id:'t',r:2,c:1,v:P},{at:4.8,do:'cell',id:'t',r:3,c:1,v:A},
  {at:7.4,do:'hide',who:'stall',dur:.8},
  {at:7.6,do:'spawn',who:'board',dur:.8},
  {at:8,do:'label',id:'year2',text:'Survey, 1910',x:16,y:12,kind:'cause',bold:true},
  {at:8.6,do:'act',who:'arch',state:'cast',dur:2},
  {at:9,do:'cell',id:'t',r:0,c:2,v:P},{at:9.4,do:'label',id:'n-board',text:'noticeboard',follow:'board',dy:-50,until:11.4},{at:9.6,do:'cell',id:'t',r:1,c:2,v:P},{at:10.2,do:'cell',id:'t',r:2,c:2,v:A},{at:10.8,do:'cell',id:'t',r:3,c:2,v:A},
  {at:11.6,do:'label',id:'same',text:'bench: present at both dates (continuity)',follow:'bench',dy:-62,dx:70,w:170},
  {at:13,do:'label',id:'new',text:'noticeboard: absent, then present (a change)',follow:'board',dy:-80,dx:-80,w:170,kind:'cause'},
  {at:17,do:'unlabel',id:'same'},{at:17,do:'unlabel',id:'new'},

  {at:17,do:'part',name:'between'},
  {at:17.4,do:'strip',id:'years',items:['1900','?','1910'],x:440,y:236,n:3},
  {at:18,do:'label',id:'gap',text:'The bench was seen in 1900 and in 1910. That does not prove it stayed there in the years between.',x:16,y:40,w:300,kind:'cause'},
  {at:22.9,do:'tryit'}],
 length:23
};
