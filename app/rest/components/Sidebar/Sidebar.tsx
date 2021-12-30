import { Link } from 'remix';
import { styled } from '~/styles/stitches.config';

import { Toolbar } from './StyledSidebar';
import { Paragraph } from '../Typography/Text';
import { PathSelectorMenu } from '../PathSelectorMenu/PathSelectorMenu';

export const StyledLinky = styled(Link, {
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '16px',
  width: '100%',
  display: 'inline-block',
  px: 16,

  '&:hover': {
    color: 'black',
  },
});

export enum Routes {
  playground = 'playground',
  sonicdreams = 'sonicdreams',
  system = 'system',
  artifacts = 'artifacts',
  index = '/',
}

export const LinkTray = () => {
  return (
    <Toolbar orientation="vertical">
      <Paragraph css={{ textDecoration: 'underline' }}>
        P A T H S E L E C T O R
      </Paragraph>

      <PathSelectorMenu route={Routes.index} />

      <PathSelectorMenu route={Routes.artifacts} />

      <PathSelectorMenu route={Routes.playground} />

      <PathSelectorMenu route={Routes.system} />
    </Toolbar>
  );
};
