/* improve20-r12c-nov2 #5 (kidsim2 #24, measured first with `node tools/balance-sim.mjs --gaps`): a hero walking straight on spent 12-15 s
   with no foe on screen between most arenas of e1-e8 and m1-m3 (500-900 px of empty lane at walking speed). In an empty lane (walking to
   the next arena, no foe alive, no arena lock) the hero strides: after LANE_DELAY s of walking the speed rises to LANE_STRIDE times, and
   after LANE_SPRINT_AT s to LANE_SPRINT times (1.8 alone still left 9-10 s on the longest lanes; with the step to 2.3 they fall to about 8).
   Running (1.5) never stacks on it. The map, the waves and the triggers are unchanged; no timer, nothing to do with learning. Pure. */
export const LANE_STRIDE=1.8,LANE_DELAY=.6,LANE_SPRINT=2.3,LANE_SPRINT_AT=2;
export const emptyLane=w=>!!w?.level&&(w.flow==='walk'||w.flow==='go')&&!w.lock&&!(w.enemies||[]).some(e=>e.hp>0)&&!(w.reinforcements||[]).length;
/* the lane's clock: the time the lane has been empty (0 while it is not); returns the speed factor for this frame */
export function laneStride(w,dt){if(!emptyLane(w)){w.laneT=0;return 1;}w.laneT=(w.laneT||0)+dt;return w.laneT>=LANE_SPRINT_AT?LANE_SPRINT:w.laneT>=LANE_DELAY?LANE_STRIDE:1;}
/* improve20-r13c-nov2 #4 (audit10 a19): the run cycle is timed for running (RUN_PACE, 1.5x walk); in the stride it played at that rate while
   the hero moved at 1.8-2.3x, so the feet slid. The cycle's clock now runs at pace / RUN_PACE, never slower than the run and capped at
   RUN_ANIM_CAP (1.4x: 2.3 / 1.5 would be 1.53, too fast to read). k: the speed factor this frame (laneStride, or 1.5 while running) */
/* improve20-r14b-nov3 #6 (audit11 #9, shot 03): at the 1.4x cap the 2.3x sprint still covered about 1.1 run strides per cycle step, so the feet
   glided. The cap is now the sprint's own pace, LANE_SPRINT / RUN_PACE (1.53x): the 16 fps run cycle plays at about 24.5 fps, 3 strides a second,
   with no glide. The lane speeds are unchanged, so pars and stars are too. */
export const RUN_PACE=1.5,RUN_ANIM_CAP=LANE_SPRINT/RUN_PACE;
export const runAnimRate=k=>k>RUN_PACE?Math.min(RUN_ANIM_CAP,k/RUN_PACE):1;
