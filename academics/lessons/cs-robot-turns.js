// Original CS lesson. A robot facing one of four ways turns by fixed amounts (a quarter turn right,
// a quarter turn left, or a half turn around); every answer is the result of composing those turns
// from the facing the question states, never a fact table (CSTA 1A-AP-10: sequences of commands).
const DIRS=['north','east','south','west'];
const OPP={right:'left',left:'right',around:'around'};
const DELTA={right:1,left:-1,around:2};
const step=(dir,turn)=>DIRS[(DIRS.indexOf(dir)+DELTA[turn]+8)%4];
const run=(dir,turns)=>turns.reduce(step,dir);
const cap=s=>s[0].toUpperCase()+s.slice(1);
const TURN2={right:'turn right',left:'turn left',around:'turn around'};
const deltaToTurn=d=>d===1?'right':d===3?'left':'around';
export default {
id:"cs-e-robot-turns",
subject:"cs",
level:3,
grade:2,
title:"Robot turns",
goal:"Track which way a robot faces after a sequence of quarter and half turns, and find the turn that undoes one.",
standard:"CSTA 1A-AP-10: sequences of commands",
points:20,
skills:{"face":"Which way it faces now","undo":"Undo a turn","count":"Count the right turns"},
steps:[{"skill":"face","say":"A robot can face north, east, south or west. Turn right is a quarter turn clockwise. Facing north, turn right. Now it faces east.","pic":{"t":"passages","title":"Turn right","texts":["Start: facing north","Command: turn right","Now facing: east"]}},
{"skill":"face","say":"Turn left is a quarter turn the other way. Turn around is a half turn. Then it faces the opposite way. From north, turn left gives west. From north, turn around gives south.","pic":{"t":"passages","title":"Turn left, turn around","texts":["Start: facing north","Command: turn left","Now facing: west","Command instead: turn around","Now facing: south"]},"check":{"prompt":"A robot faces east. It does: turn right, then turn right. Which way does it face now: north, east, south or west?","answer":"west","options":["west","south","north","east"],"hint":"Two right turns make a half turn. Start at east.","pic":{"t":"passages","title":"Robot turns","texts":["Start: facing east","1. turn right","2. turn right"]}}},
{"skill":"face","say":"Do the turns one at a time. After each turn, say which way it faces.","pic":{"t":"passages","title":"One at a time","texts":["Start: facing south","1. turn left → now facing east","2. turn around → now facing west"]}},
{"skill":"undo","say":"Every turn can be undone. Turn left undoes turn right. Turn right undoes turn left. Turn around undoes turn around. Two half turns make a full turn.","pic":{"t":"passages","title":"Undo a turn","texts":["Start: facing north","Turn: right","Now facing: east","Undo with: turn left"]},"check":{"prompt":"A robot facing south turns left and is now facing east. Which single turn brings it back to facing south: right, left or around?","answer":"right","options":["right","left","around"],"hint":"Each turn is undone by its opposite. What undoes turn left?","pic":{"t":"passages","title":"Robot turns","texts":["Start: facing south","Turn: left","Now facing: east"]}}},
{"skill":"count","say":"Keep turning right. You go north, east, south, west, then north again. Each turn right is one step around.","pic":{"t":"passages","title":"Turn right, again and again","texts":["Facing north","1 turn right → east","2 turn rights → south","3 turn rights → west","4 turn rights → north again"]}},
{"skill":"count","say":"Start at the first way it faces. Turn right and count each turn. Stop when it faces the new way.","pic":{"t":"passages","title":"Count the turns","texts":["Start: facing east","Target: facing north","1 turn right → south","2 turn rights → west","3 turn rights → north: reached it"]},"check":{"prompt":"The robot is facing south and needs to end up facing north. How many turn right commands in a row will do it: 1, 2 or 3?","answer":"2","options":["2","1","3"],"hint":"South, turn right to west, turn right again to north.","pic":{"t":"passages","title":"Robot turns","texts":["Start: facing south","Target: facing north"]}}}],
progression:{"requires":["cs-e-steps-in-order"],"operations":2,"demand":"Update a facing after each turn in a short list, name the single turn that undoes one already done, and count repeated right turns to a target facing."},
items(add){
 const TURNS=['right','left','around'];
 const facePic=(dir,turns)=>({t:'passages',title:'Robot turns',texts:[`Start: facing ${dir}`,...turns.map((tn,i)=>`${i+1}. ${TURN2[tn]}`)]});
 DIRS.forEach(dir=>{
  TURNS.forEach(t1=>{
   const seq1=[t1],final1=run(dir,seq1);
   add('face',`A robot starts facing ${dir}. It does: ${TURN2[t1]}. Which way does it face now: north, east, south or west?`,final1,facePic(dir,seq1),`From ${dir}, ${TURN2[t1]} leaves it facing ${final1}.`);
   TURNS.forEach(t2=>{
    const seq2=[t1,t2],final2=run(dir,seq2);
    add('face',`A robot starts facing ${dir}. It does: ${TURN2[t1]}, then ${TURN2[t2]}. Which way does it face now: north, east, south or west?`,final2,facePic(dir,seq2),`From ${dir}, ${TURN2[t1]} then ${TURN2[t2]} leaves it facing ${final2}.`);
    TURNS.forEach(t3=>{
     const seq3=[t1,t2,t3],final3=run(dir,seq3);
     add('face',`A robot starts facing ${dir}. It does: ${TURN2[t1]}, then ${TURN2[t2]}, then ${TURN2[t3]}. Which way does it face now: north, east, south or west?`,final3,facePic(dir,seq3),`From ${dir}, following the three turns leaves it facing ${final3}.`);
    });
   });
  });
  TURNS.forEach(tn=>{
   const now=step(dir,tn),undo=OPP[tn];
   add('undo',`A robot facing ${dir} does ${TURN2[tn]} and is now facing ${now}. Which single turn brings it back to facing ${dir}: right, left or around?`,undo,{t:'passages',title:'Robot turns',texts:[`Start: facing ${dir}`,`Turn: ${tn}`,`Now facing: ${now}`]},`${cap(TURN2[undo])} is the opposite of ${TURN2[tn]}, so it undoes it.`,[TURN2[undo]]);
  });
  /* Two-turn undo items: skip the pairs whose two turns cancel out (right+left, left+right,
     around+around), since those leave the robot back at its start already, with no single
     turn to name. Every other pair leaves a net quarter or half turn, and the single turn
     that undoes that net amount is computed from the pair, never looked up. */
  TURNS.forEach(t1=>{
   TURNS.forEach(t2=>{
    if(OPP[t1]===t2)return;
    const seq=[t1,t2],now2=run(dir,seq);
    const netDelta=(DELTA[t1]+DELTA[t2]+8)%4,undoDelta=(4-netDelta)%4;
    const undo2=deltaToTurn(undoDelta);
    add('undo',`A robot facing ${dir} does ${TURN2[t1]}, then ${TURN2[t2]}, and is now facing ${now2}. Which single turn brings it back to facing ${dir}: right, left or around?`,undo2,{t:'passages',title:'Robot turns',texts:[`Start: facing ${dir}`,`1. ${TURN2[t1]}`,`2. ${TURN2[t2]}`,`Now facing: ${now2}`]},`Together, ${TURN2[t1]} then ${TURN2[t2]} turn it as much as a single ${TURN2[deltaToTurn(netDelta)]}, so ${TURN2[undo2]} undoes it.`,[TURN2[undo2]]);
   });
  });
  DIRS.filter(target=>target!==dir).forEach(target=>{
   const n=(DIRS.indexOf(target)-DIRS.indexOf(dir)+4)%4;
   add('count',`A robot faces ${dir}. How many turn right commands in a row make it face ${target}: 1, 2 or 3?`,String(n),{t:'passages',title:'Robot turns',texts:[`Start: facing ${dir}`,`Target: facing ${target}`]},`Turning right ${n} time${n===1?'':'s'} from ${dir} reaches ${target}.`,[n===1?'one':n===2?'two':'three']);
  });
  /* Count with a preceding turn: the robot first does one turn (any of the three), landing on
     a new facing, and only then counts right turns to a target that is not that new facing
     (a target equal to the new facing would need 0 or 4 turns, outside the 1-3 options). */
  TURNS.forEach(pre=>{
   const mid=step(dir,pre);
   DIRS.filter(target=>target!==mid).forEach(target=>{
    const n=(DIRS.indexOf(target)-DIRS.indexOf(mid)+4)%4;
    add('count',`A robot faces ${dir} and does ${TURN2[pre]}. How many turn right commands in a row now make it face ${target}: 1, 2 or 3?`,String(n),{t:'passages',title:'Robot turns',texts:[`Start: facing ${dir}`,`Command: ${TURN2[pre]}`,`Now facing: ${mid}`,`Target: facing ${target}`]},`After ${TURN2[pre]} it faces ${mid}; turning right ${n} time${n===1?'':'s'} more reaches ${target}.`,[n===1?'one':n===2?'two':'three']);
   });
  });
 });
}
};
