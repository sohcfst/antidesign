import { spring } from 'motion';
import { TimelineDefinition } from 'motion/types/targets/dom/timeline/types';

const optionsConfig = {
  offset: [0, 0.5, 1],
  transform: {},
};

const transformJerkConfig1 = {
  transform: ['translate(0px, 0px)', 'translate(70px, -65px)'],
  optionsConfig,
};

const transformJerkConfig2 = {
  transform: ['translate(0px)', 'translate(120px)', 'translate(110px'],
  optionsConfig,
};

const transformJerkConfig3 = {
  transform: ['translate(0px, 0px)', 'translate(70px, 65px)'],
  optionsConfig,
};

const transformJerkConfig4 = {
  transform: ['translate(0px, 0px)', 'translate(12px, 114px)'],
  optionsConfig,
};

const transformConfig0 = {
  transform: ['translate(0px, 0px)', 'translate(12px, -114px)'],
  optionsConfig,
};

export const systemInit: TimelineDefinition = [
  // ['#page-nav', { transform: 'translate(-700px)' }, { duration: 0.5 }],
  // ['#page-header', { transform: 'translateY(-300px)' }, { duration: 0.5 }],
  ['#fuckshit-0', { x: [0, 100] }, { duration: 0.1, easing: spring() }],
  ['#fuckshit-1', { x: [0, 100] }, { duration: 0.1, easing: spring() }],
  // ['#fuckshit-1', transformJerkConfig1],
  // ['#fuckshit-3', transformJerkConfig3, { at: '-0.3' }],
  // ['#fuckshit-2', transformJerkConfig2],
];
