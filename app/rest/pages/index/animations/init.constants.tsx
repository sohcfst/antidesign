import { animate, spring } from 'motion';
import {
  TimelineDefinition,
  TimelineSegment,
} from 'motion/types/targets/dom/timeline/types';

const spring_config = {
  duration: 0.1,
  x: { easing: spring({ velocity: 2000, stiffness: 1000, damping: 100 }) },
  y: { easing: spring({ velocity: 2000, stiffness: 1000, damping: 100 }) },
};

const ELEMENT_0_ID = '#fuckshit-0';
const keyframe_0 = { x: [0, 12], y: [0, -114] };
const animation_0: TimelineSegment = [ELEMENT_0_ID, keyframe_0, spring_config];

const ELEMENT_1_ID = '#fuckshit-1';
const keyframe_1 = { x: [0, 70], y: [0, -65] };
const animation_1: TimelineSegment = [ELEMENT_1_ID, keyframe_1, spring_config];

const ELEMENT_2_ID = '#fuckshit-2';
const keyframe_2 = { x: [0, 100], y: [0, 0] };
const animation_2: TimelineSegment = [ELEMENT_2_ID, keyframe_2, spring_config];

const ELEMENT_3_ID = '#fuckshit-3';
const keyframe_3 = { x: [0, 70], y: [0, 65] };
const animation_3: TimelineSegment = [ELEMENT_3_ID, keyframe_3, spring_config];

const ELEMENT_4_ID = '#fuckshit-4';
const keyframe_4 = { x: [0, 12], y: [0, 114] };
const animation_4: TimelineSegment = [ELEMENT_4_ID, keyframe_4, spring_config];

export const systemInit: TimelineDefinition = [
  ['#page-header', { transform: 'translateY(-300px)' }, { duration: 0.4 }],
  [
    '#pathselector-nav',
    { transform: 'translate(-700px)' },
    { duration: 0.4, at: '-0.3' },
  ],
  [
    '#controller-nav',
    { transform: 'translate(700px)' },
    { duration: 0.4, at: '-0.3' },
  ],
  animation_0,
  animation_4,
  animation_2,
  animation_1,
  animation_3,
];
