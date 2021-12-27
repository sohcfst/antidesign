import { Link } from 'remix';
import { styled } from '~/styles/stitches.config';

import { Toolbar } from './StyledLinkTray';
import { Paragraph } from '../Typography/Text';

const StyledLinky = styled(Link, {
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
});

export const LinkTray = () => {
  return (
    <Toolbar orientation="vertical">
      <Paragraph css={{ textDecoration: 'underline' }}> routes </Paragraph>

      <StyledLinky to="/">/</StyledLinky>

      <StyledLinky to="/playground">/ playground</StyledLinky>
      {/* <StyledLinky to="/">/ sonicdreams</StyledLinky>
      <StyledLinky to="/">/ cadence</StyledLinky>
      <StyledLinky to="/playground">/ artifacts</StyledLinky> */}
    </Toolbar>
  );
};
