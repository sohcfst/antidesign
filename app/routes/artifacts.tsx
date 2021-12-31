import { Outlet } from 'remix';
import { Button } from '~/rest/components/Button';

import { Flex } from '~/rest/components/Flex';
import { NoiseBackground } from '~/rest/components/Noise';
import { ContentContainer } from '~/rest/pages/index/Content/ContentContainer';
import {
  HeaderContainer,
  NavContainer,
} from '~/rest/pages/index/Content/StyledContentContainer';

import { globalStyles } from '~/styles/stitches.config';

export default function ArtifactsRoute() {
  return <Outlet />;
}
