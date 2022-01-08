const optionsConfig = { offset: [0, 0.3, 1] };

import { TimelineDefinition } from 'motion/types/targets/dom/timeline/types';

const resetConfig = {
  transform: ['translate(0px, 0px)'],
  optionsConfig,
};

const headerJerkConfig = {
  transform: ['translateY(-300px)', 'translateY(10px)', 'translateY(0px)'],
  optionsConfig,
};

const pathselectorSpringConfig = {
  transform: ['translateX(-700px)', 'translateX(10px)', 'translateX(0px)'],
  optionsConfig,
};

const controllerSpringConfig = {
  transform: ['translateX(700px)', 'translateX(10px)', 'translateX(0px)'],
  optionsConfig,
};

const transformJerkConfig0 = {
  transform: [
    'translate(12px, -114px)',
    'translate(-10px, 10px)',
    'translate(0px, 0px)',
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
  transform: ['translate(110px)', 'translate(-10px)', 'translate(0px)'],
  optionsConfig,
};

const transformJerkConfig3 = {
  transform: [
    'translate(70px, 65px)',
    'translate(-10px, -10px)',
    'translate(0px, 0px)',
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

export const systemReset: TimelineDefinition = [
  ['#fuckshit-2', transformJerkConfig2],
  ['#fuckshit-1', resetConfig],
  ['#fuckshit-3', transformJerkConfig3, { at: '-0.3' }],
  ['#fuckshit-0', transformJerkConfig0],
  ['#fuckshit-4', resetConfig, { at: '-0.3' }],
  ['#page-nav', pathselectorSpringConfig, { duration: 0.45 }],
  [
    '#pathselector-nav',
    pathselectorSpringConfig,
    { duration: 0.45, at: '-0.3' },
  ],
  ['#controller-nav', controllerSpringConfig, { duration: 0.45, at: '-0.3' }],
  ['#page-header', headerJerkConfig, { duration: 0.45 }],
];
