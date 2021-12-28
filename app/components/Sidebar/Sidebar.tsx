import { Link } from 'remix';
import { styled } from '~/styles/stitches.config';

import { Toolbar } from './StyledLinkTray';
import { Paragraph } from '../Typography/Text';

const StyledLinky = styled(Link, {
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  width: '100%',
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

      <StyledLinky className="link" to="/">
        /
      </StyledLinky>

      <StyledLinky className="link" to={`/${Routes.system}`}>
        / {Routes.system}
      </StyledLinky>

      <StyledLinky className="link" to={`/${Routes.playground}`}>
        / {Routes.playground}
      </StyledLinky>

      <StyledLinky className="link" to={`/${Routes.sonicdreams}`}>
        / {Routes.sonicdreams}
      </StyledLinky>

      <StyledLinky className="link" to={`/${Routes.artifacts}`}>
        / {Routes.artifacts}
      </StyledLinky>
    </Toolbar>
  );
};
