import { Outlet } from 'remix';
import { Button } from '~/rest/components/Button';

import { Flex } from '~/rest/components/Flex';
import { NoiseBackground } from '~/rest/components/Noise';

import {
  HeaderContainer,
  NavContainer,
} from '~/rest/pages/index/Content/StyledContentContainer';

import { globalStyles } from '~/styles/stitches.config';

export default function SystemRoute() {
  return <Outlet />;
}
