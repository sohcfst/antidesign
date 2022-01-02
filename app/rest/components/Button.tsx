import { styled } from '~/styles/stitches.config';

export const Button = styled('button', {
  minWidth: 170,
  py: 8,
  unset: 'all',
  inset: 'none',
  background: '$stitchesGrey',
  borderRadius: 8,
  border: '1px solid white',
  width: 'fit-content',
  cursor: 'pointer',
  boxShadow: `0.5px 1px 1px hsl(220deg 100% 100% / 0.5),
  1px 2px 2px hsl(220deg 100% 100% / 0.5)`,
  fontWeight: 'bold',

  '&:active': {
    transform: 'scale(0.98)',
  },

  '&:hover': {
    backgroundColor: '$whiteA5',
    boxShadow: `0.7px 1.2px 1.2px hsl(220deg 100% 100% / 0.5),
    1.2px 2.4px 2.4px hsl(220deg 100% 100% / 0.5)`,
    transition: 'background-color 100ms ease-in-out',
  },

  variants: {
    active: {
      show: {
        backgroundColor: '$whiteA2',
      },
    },
  },
});
