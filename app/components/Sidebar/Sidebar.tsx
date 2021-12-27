import { Link } from 'remix';
import { styled } from '~/styles/stitches.config';

import { Toolbar } from './StyledLinkTray';
import { Paragraph } from '../Typography/Text';

const StyledLinky = styled(Link, {
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
});

enum Routes {
  playground = 'playground',
  sonicdreams = 'sonicdreams',
  system = 'system',
  artifacts = 'artifacts',
}

export const LinkTray = () => {
  return (
    <Toolbar orientation="vertical">
      <Paragraph css={{ textDecoration: 'underline' }}>
        P A T H S E L E C T O R
      </Paragraph>

      <StyledLinky to="/">/</StyledLinky>

      <StyledLinky to={`/${Routes.system}`}>/ {Routes.system}</StyledLinky>

      <StyledLinky to={`/${Routes.playground}`}>
        / {Routes.playground}
      </StyledLinky>

      <StyledLinky to={`/${Routes.sonicdreams}`}>
        / {Routes.sonicdreams}
      </StyledLinky>

      <StyledLinky to={`/${Routes.artifacts}`}>
        / {Routes.artifacts}
      </StyledLinky>
    </Toolbar>
  );
};
