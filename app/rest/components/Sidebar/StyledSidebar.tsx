import { styled } from '~/styles/stitches.config';

import * as ToolbarPrimitive from '@radix-ui/react-toolbar';

export const StyledToolbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  padding: 16,
  borderRadius: 16,
  gap: 24,

  '&:hover .link': {
    transition: 'opacity 200ms ease-in',
    opacity: 0.5,
  },

  '.link:hover': {
    transition: 'opacity ease-in',
    opacity: 1,
  },

  '.link': {
    transition: 'opacity 400ms ease-in-out',
  },
});
