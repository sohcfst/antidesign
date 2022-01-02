import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { animate } from 'motion';
import { useState } from 'react';

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
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(true);

    animate('#artifact-route', {
      transform: 'translateX(100px)',
    });
  };

  return (
    <DropdownMenu.Root>
      <StyledDropdownTrigger
        id="artifact-route"
        onClick={() => handleClick()}
        selected={isSelected ? 'yes' : 'nah'}
      >
        {route === Routes.index ? route : `/ ${route}`}
      </StyledDropdownTrigger>

      <StyledDropdownMenuContent
        side="right"
        align="start"
        sideOffset={30}
        alignOffset={-14}
      >
        {paths.map((path) => {
          return (
            <StyledDropdownMenuItem asChild>
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
