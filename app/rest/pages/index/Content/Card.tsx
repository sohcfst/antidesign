import { Flex } from '~/rest/components/Flex';
import { styled } from '~/styles/stitches.config';

export const Card = styled(Flex, {
  height: 270,
  background: '$stitchesGrey',
  border: '1px solid white',
  br: 8,
  flexGrow: 1,
  padding: 24,
  flexDirection: 'column',
  boxShadow: `1px 2px 2px hsl(220deg 100% 100% / 0.5),
    2px 4px 4px hsl(220deg 100% 100% / 0.5)`,
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.005)',
    transition: 'all .2s cubic-bezier(0.1, 0.7, 1.0, 0.1)',
    '&:active': {
      transform: 'scale(0.995)',
    },
  },
  justifyContent: 'space-between',
  width: '100%',

  variants: {
    display: {
      preview: {
        color: '$whiteA9',
        border: `1px solid $whiteA9`,
        opacity: 0.5,
      },
    },
  },
});
