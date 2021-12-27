import { styled } from '~/styles/stitches.config';

import * as ToolbarPrimitive from '@radix-ui/react-toolbar';

export const StyledToolbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  padding: 16,
  borderRadius: 16,
  gap: 24,
});

export const Toolbar = StyledToolbar;
