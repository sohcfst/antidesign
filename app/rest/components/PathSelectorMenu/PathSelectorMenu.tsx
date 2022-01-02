import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { animate } from 'motion';
import { useEffect, useState } from 'react';
import { useKeyPress } from '~/rest/hooks/useKeyPress';

import { Routes, StyledLinky } from '../Sidebar/Sidebar';
import {
  StyledDropdownMenuArrow,
  StyledDropdownMenuContent,
  StyledDropdownMenuItem,
  StyledDropdownTrigger,
} from './PathSelectorMenu.styled';

interface PathSelectorMenuProps {
  route: Routes;
  paths: string[];
}

export const PathSelectorMenu = ({ route, paths }: PathSelectorMenuProps) => {
  const isDownPress = useKeyPress('40');

  // const origin = window ? '' : window?.location?.origin;

  useEffect(() => {
    console.log();
  }, [isDownPress]);

  return (
    <DropdownMenu.Root>
      <StyledDropdownTrigger id="artifact-route">
        {route === Routes.index ? route : `/ ${route}`}
      </StyledDropdownTrigger>

      <StyledDropdownMenuContent
        className="pathselector-menu-content"
        side="right"
        align="start"
        sideOffset={28}
        alignOffset={-14}
      >
        {paths.map((path) => {
          return (
            <StyledDropdownMenuItem asChild key={`/${route}${path}`}>
              <StyledLinky className="link" to={`/${route}${path}`}>
                {path}
              </StyledLinky>
            </StyledDropdownMenuItem>
          );
        })}

        <StyledDropdownMenuArrow />
      </StyledDropdownMenuContent>
    </DropdownMenu.Root>
  );
};
