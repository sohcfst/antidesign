import { styled, keyframes } from '~/styles/stitches.config';

const opacityTransition = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const H1 = styled('h1', {
  fontSize: 72,
  position: 'fixed',
  zIndex: 12,
  textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
  animation: `1s ${opacityTransition} ease-in-out`,
});

export const H2 = styled('h2', {
  fontSize: 36,

  zIndex: 12,
  textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
  animation: `1s ${opacityTransition} ease-in-out`,
});
