import { TimelineDefinition } from 'motion/types/targets/dom/timeline/types';

const transformConfig = {
  transform: ['translateX(0px)', 'translateX(820px)', 'translateX(800px)'],
};

const optionsConfig = { offset: [0, 0.3, 1] };
const optionsConfigWithRelativeDelay = { ...optionsConfig, at: '+0.1' };

export const sequence2 = [
  ['#fuckshit-0', transformConfig, optionsConfig],
  ['#fuckshit-1', transformConfig, optionsConfigWithRelativeDelay],
  ['#fuckshit-2', transformConfig, optionsConfigWithRelativeDelay],
  ['#fuckshit-3', transformConfig, optionsConfigWithRelativeDelay],
  ['#fuckshit-4', transformConfig, optionsConfigWithRelativeDelay],
];

export const sequence1 = [
  ['#fuckshit-0', { transform: 'translateX(0px)' }, {}],
  ['#fuckshit-1', { transform: 'translateX(0px)' }, { at: '+0.1' }],
  ['#fuckshit-2', { transform: 'translateX(0px)' }, { at: '+0.1' }],
  ['#fuckshit-3', { transform: 'translateX(0px)' }, { at: '+0.1' }],
  ['#fuckshit-4', { transform: 'translateX(0px)' }, { at: '+0.1' }],
];

const transformJerkConfig0 = {
  transform: [
    'translate(0px, 0px)',
    'translate(18px, -124px)',
    'translate(12px, -114px)',
  ],
  optionsConfig,
};

const transformJerkConfig1 = {
  transform: [
    'translate(0px, 0px)',
    'translate(80px, -72px)',
    'translate(70px, -65px)',
  ],
  optionsConfig,
};

const transformJerkConfig2 = {
  transform: ['translate(0px)', 'translate(120px)', 'translate(110px'],
  optionsConfig,
};

const transformJerkConfig3 = {
  transform: [
    'translate(0px, 0px)',
    'translate(80px, 72px)',
    'translate(70px, 65px)',
  ],
  optionsConfig,
};

const transformJerkConfig4 = {
  transform: [
    'translate(0px, 0px)',
    'translate(18px, 124px)',
    'translate(12px, 114px)',
  ],
  optionsConfig,
};

export const systemInit: TimelineDefinition = [
  ['#page-nav', { transform: 'translate(-500px)' }, { duration: 0.5 }],
  ['#page-header', { transform: 'translateY(-300px)' }, { duration: 0.5 }],
  ['#fuckshit-0', transformJerkConfig0, { at: '' }],
  ['#fuckshit-4', transformJerkConfig4, { at: '-0.3' }],
  ['#fuckshit-1', transformJerkConfig1],
  ['#fuckshit-3', transformJerkConfig3, { at: '-0.3' }],
  ['#fuckshit-2', transformJerkConfig2],
];
