/* improve20-r12c-nov2 #5 (kidsim2 #24, measured first with `node tools/balance-sim.mjs --gaps`): a hero walking straight on spent 12-15 s
   with no foe on screen between most arenas of e1-e8 and m1-m3 (500-900 px of empty lane at walking speed). In an empty lane (walking to
   the next arena, no foe alive, no arena lock) the hero strides: after LANE_DELAY s of walking the speed rises to LANE_STRIDE times, and
   after LANE_SPRINT_AT s to LANE_SPRINT times (1.8 alone still left 9-10 s on the longest lanes; with the step to 2.3 they fall to about 8).
   Running (1.5) never stacks on it. The map, the waves and the triggers are unchanged; no timer, nothing to do with learning. Pure. */
export const LANE_STRIDE=1.8,LANE_DELAY=.6,LANE_SPRINT=2.3,LANE_SPRINT_AT=2;
export const emptyLane=w=>!!w?.level&&(w.flow==='walk'||w.flow==='go')&&!w.lock&&!(w.enemies||[]).some(e=>e.hp>0)&&!(w.reinforcements||[]).length;
/* the lane's clock: the time the lane has been empty (0 while it is not); returns the speed factor for this frame */
export function laneStride(w,dt){if(!emptyLane(w)){w.laneT=0;return 1;}w.laneT=(w.laneT||0)+dt;return w.laneT>=LANE_SPRINT_AT?LANE_SPRINT:w.laneT>=LANE_DELAY?LANE_STRIDE:1;}
