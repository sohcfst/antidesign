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
    transition: 'opacity 200ms ease-out',
    opacity: 0.5,
  },
  '.link:hover': {
    transition: 'opacity 200ms ease-out',
    opacity: 1,
  },
});

export const Toolbar = StyledToolbar;
