import { blackA } from '@radix-ui/colors';
import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useRef, useState } from 'react';
import { styled, keyframes } from '~/styles/stitches.config';
import {
  CommandMenuContainer,
  HighlighterComponent,
  ListBox,
  ListBoxChildren,
} from './CommandMenu.styled';

const useCommandBar = () => {
  const [isShowing, setIsShowing] = useState(true);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key === 'k' &&
        event.defaultPrevented === false
      ) {
        event.preventDefault();

        if (isShowing) {
          setIsShowing(false);
        } else {
          setIsShowing(true);
        }

        console.log(isShowing);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isShowing]);

  return { isShowing };
};

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const StyledOverlay = styled(Dialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledInput = styled('input', {
  background: blackA.blackA1,
  width: 640,
  padding: 8,
  border: 'none',
  borderBottom: '1px solid white',
  outline: 'none',
});

const StyledContent = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 400,
  position: 'relative',
});

const useHighlighter = () => {
  const [tabBoundingBox, setTabBoundingBox] = useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState(null);
  const [highlightedTab, setHighlightedTab] = useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);

  const highlightRef = useRef(null);
  const wrapperRef = useRef(null);

  const repositionHighlight = (e, tab) => {
    setTabBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const highlightStyles = {};

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? '0ms' : '150ms';
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  return {
    repositionHighlight,
    highlightStyles,
  };
};

const CommandMenu = () => {
  const { isShowing } = useCommandBar();
  const { repositionHighlight, highlightStyles } = useHighlighter();

  return (
    <Dialog.Root open={isShowing} defaultOpen={true}>
      <Dialog.Portal>
        {/* <StyledOverlay /> */}
        <StyledContent>
          <CommandMenuContainer>
            <HighlighterComponent
              css={{ ...highlightStyles }}
              onMouseOver={repositionHighlight}
            >
              lol
            </HighlighterComponent>

            <StyledInput placeholder="enter a command..." />
            <ListBox>
              <ListBoxChildren>sigh</ListBoxChildren>
              <ListBoxChildren>sigh</ListBoxChildren>

              <ListBoxChildren>sigh</ListBoxChildren>
            </ListBox>
          </CommandMenuContainer>
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CommandMenu;
