import { keyframes, styled } from '~/styles/stitches.config';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const StyledDropdownMenuContent = styled(DropdownMenu.Content, {
  border: '1px solid white',
  br: 4,
  background: '$stitchesGrey',
  py: 16,
  px: 16,
  width: 'fit-content',
  boxShadow: `1px 2px 2px hsl(220deg 100% 100% / 0.5),
    2px 4px 4px hsl(220deg 100% 100% / 0.5)`,
  fontSize: 12,
  gap: 12,
  display: 'flex',
  flexDirection: 'column',
});

const slide = keyframes({
  '0%': { transform: `translateX(0px)` },
  '100%': { transform: `translateX(40px)` },
});

export const StyledDropdownMenuItem = styled(DropdownMenu.Item, {
  width: '100%',
  br: 4,

  '&:hover': {
    background: '$whiteA12',
    color: 'black',
  },

  '&:focus': {
    background: '$whiteA12',
    color: 'black',
  },
});

export const StyledDropdownTrigger = styled(DropdownMenu.Trigger, {
  background: 'transparent',
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'block',
  width: '100%',
  textAlign: 'left',
  br: 4,
  py: 4,

  '&:hover': {
    transform: 'scale(1.07)',
    background: 'white',
    color: '$stitchesGrey',
  },

  variants: {
    selected: {
      yes: {
        animation: `${slide} 200ms`,
        transform: 'translateX(100px)',
      },
      nah: {
        transform: `translateX(0px)`,
      },
    },
  },
});

export const StyledDropdownMenuArrow = styled(DropdownMenu.Arrow, {
  fill: 'white',
  transform: 'translateX(22px)',
});
