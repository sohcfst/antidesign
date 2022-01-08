import { Flex } from '~/rest/components/Flex';

import { styled } from '~/styles/stitches.config';

export const StyledContentContainer = styled(Flex, {
  height: '100%',
  maxWidth: 1192,
  width: 768,
  opacity: 1,
  br: 8,
  px: 24,
  fontWeight: 'bold',
  gap: 24,
  background: 'transparent',

  '.card': {
    transition:
      'opacity 400ms ease-in-out, background-color 1000ms ease-in-out',
  },

  '&:hover .card': {
    transition: 'opacity 400ms ease-out',
    opacity: 0.3,
  },

  '.card:hover': {
    transition: 'opacity ease-out',
    opacity: 1,
  },
});
