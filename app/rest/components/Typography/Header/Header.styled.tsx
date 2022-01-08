import { styled } from '~/styles/stitches.config';
import { H1 } from './Header';

export const StyledHeader = styled(H1, {
  fontSize: 48,
  color: 'black',
  textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white',
  textDecoration: 'line-through',
  cursor: 'pointer',
  width: 768,
  textAlign: 'center',
});
