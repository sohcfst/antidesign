import { styled } from '~/styles/stitches.config';

export const Image = styled('img', {
  borderRadius: 4,
  boxShadow: `0 1px 1px hsl(0deg 0% 0% / 0.075),
  0 2px 2px hsl(0deg 0% 0% / 0.075),
  0 4px 4px hsl(0deg 0% 0% / 0.075),
  0 8px 8px hsl(0deg 0% 0% / 0.075),
  0 16px 16px hsl(0deg 0% 0% / 0.075)`,
  zIndex: -1,
  position: 'relative',
  cursor: 'pointer',

  '&:hover': {
    transform: 'scale(1.01)',
    transition: 'all .1s cubic-bezier(0.1, 0.7, 1.0, 0.1)',
  },

  '&:active': {
    transform: 'scale(0.995)',
  },
});
