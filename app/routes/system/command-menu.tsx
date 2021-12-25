import { blackA } from '@radix-ui/colors';
import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { styled, keyframes } from '~/styles/stitches.config';

const useCommandBar = () => {
  const [isShowing, setIsShowing] = useState(false);

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
});

const StyledContent = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 400,
});

const CommandMenu = () => {
  const { isShowing } = useCommandBar();

  return (
    <Dialog.Root open={isShowing} defaultOpen={true}>
      <Dialog.Portal>
        <StyledOverlay />
        <StyledContent>
          <Dialog.Title>lol</Dialog.Title>
          <StyledInput />
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CommandMenu;
