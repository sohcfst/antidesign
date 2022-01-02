import { styled } from '~/styles/stitches.config';

export const HighlighterComponent = styled('div', {
  background: 'hsl(0 0% 90.9%)',
  position: 'absolute',
  top: 40,
  left: 16,
  borderRadius: 4,
  height: 32,
  transition: '0.15s ease',
  transitionProperty: 'width, transform, opacity',
  border: '1px solid white',
});

export const CommandMenuContainer = styled('div', {
  width: 'fit-content',
  position: 'relative',
});

export const ListBox = styled('ul', {
  padding: 36,
});

export const ListBoxChildren = styled('li', {
  height: 36,
});
