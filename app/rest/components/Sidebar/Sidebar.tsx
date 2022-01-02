import { Link } from 'remix';
import { styled } from '~/styles/stitches.config';

import { StyledToolbar } from './StyledSidebar';
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

const playgroundPaths = ['/', '/system-nostalgia', '/meta-inspector'];

const rootPaths = ['/', '/artifacts', '/playground', '/system'];

const artifactPaths = ['/_001', '/_002', '/_003'];

interface LinkTrayProps {
  title: string;
}

export const LinkTray = ({ title }: LinkTrayProps) => {
  return (
    <StyledToolbar orientation="vertical">
      <Paragraph css={{ textDecoration: 'underline' }}>{title}</Paragraph>

      <PathSelectorMenu route={Routes.index} paths={rootPaths} />

      <PathSelectorMenu route={Routes.artifacts} paths={artifactPaths} />

      <PathSelectorMenu route={Routes.playground} paths={playgroundPaths} />

      {/* <PathSelectorMenu route={Routes.system} paths={playgroundPaths} /> */}
    </StyledToolbar>
  );
};
