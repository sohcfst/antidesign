const optionsConfig = {
  offset: [0, 1],
};

const optionsConfigWithRelativeDelay = { ...optionsConfig, at: '+0.1' };

const transformConfig = {
  transform: ['translateX(0px)', 'translateX(820px)', 'translateX(800px)'],
};

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
