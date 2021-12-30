import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { animate } from 'motion';
import { useState } from 'react';
import { keyframes, styled } from '~/styles/stitches.config';
import { Routes, StyledLinky } from '../Sidebar/Sidebar';

const StyledDropdownMenuContent = styled(DropdownMenu.Content, {
  border: '1px solid white',
  br: 4,
  background: '$stitchesGrey',
  py: 16,
  px: 16,
  width: 150,
  boxShadow: `0.7px 1.2px 1.2px hsl(220deg 100% 100% / 0.5)`,
  fontSize: 12,
});

const slide = keyframes({
  '0%': { transform: `translateX(0px)` },
  '100%': { transform: `translateX(40px)` },
});

const StyledDropdownMenuItem = styled(DropdownMenu.Item, {
  width: '100%',
  br: 4,
  // ml: 10,
  '&:hover': {
    background: '$whiteA12',
    color: 'black',
  },

  '&:focus': {
    background: '$whiteA12',
    color: 'black',
  },
});

const StyledDropdownTrigger = styled(DropdownMenu.Trigger, {
  background: 'transparent',
  fontWeight: 'bold',
  cursor: 'pointer',

  variants: {
    selected: {
      yes: {
        animation: `${slide} 200ms`,
      },
      nah: {
        transform: `translateX(0px)`,
      },
    },
  },
});

const StyledDropdownMenuArrow = styled(DropdownMenu.Arrow, {
  fill: 'white',
  transform: 'translateX(22px)',
});

export const PathSelectorMenu = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    console.log('lol');
    animate('#artifact-route', {
      transform: 'translateX(100px)',
    });
  };

  return (
    <DropdownMenu.Root>
      <StyledDropdownTrigger id="artifact-route" onClick={() => handleClick()}>
        / {Routes.artifacts}
      </StyledDropdownTrigger>

      <StyledDropdownMenuContent
        side="right"
        align="start"
        sideOffset={10}
        alignOffset={-14}
      >
        <StyledDropdownMenuItem>
          <StyledLinky className="link" to={`/${Routes.artifacts}/`}>
            /
          </StyledLinky>
        </StyledDropdownMenuItem>

        <StyledDropdownMenuItem>
          <StyledLinky className="link" to={`/${Routes.artifacts}/001`}>
            /0001
          </StyledLinky>
        </StyledDropdownMenuItem>

        <StyledDropdownMenuItem>
          <StyledLinky className="link" to={`/${Routes.artifacts}/001`}>
            /0002
          </StyledLinky>
        </StyledDropdownMenuItem>

        <StyledDropdownMenuItem>
          <StyledLinky className="link" to={`/${Routes.artifacts}/001`}>
            /0003
          </StyledLinky>
        </StyledDropdownMenuItem>

        <StyledDropdownMenuItem>
          <StyledLinky className="link" to={`/${Routes.artifacts}/001`}>
            /0004
          </StyledLinky>
        </StyledDropdownMenuItem>
        <StyledDropdownMenuArrow />
      </StyledDropdownMenuContent>
    </DropdownMenu.Root>
  );
};
