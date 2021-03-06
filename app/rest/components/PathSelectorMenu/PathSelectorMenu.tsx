import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { useEffect } from 'react';
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

const getURLRoute = (route: Routes) => {
  if (route === Routes.index) {
    return '';
  }

  return route;
};

export const PathSelectorMenu = ({ route, paths }: PathSelectorMenuProps) => {
  const isDownPress = useKeyPress('40');

  useEffect(() => {
    console.log();
  }, [isDownPress]);

  return (
    <DropdownMenu.Root>
      <StyledDropdownTrigger id="artifact-route">{route}</StyledDropdownTrigger>

      <StyledDropdownMenuContent
        className="pathselector-menu-content"
        side="right"
        align="start"
        sideOffset={28}
        alignOffset={-14}
      >
        {paths.map((path) => {
          return (
            <StyledDropdownMenuItem asChild key={`${route}${path}`}>
              <StyledLinky className="link" to={`${route}${path}`}>
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
