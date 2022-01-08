import { Flex } from '~/rest/components/Flex';
import { styled } from '~/styles/stitches.config';

export const Root = styled(Flex);

export const SidebarFlex = styled(Flex, {
  br: 8,
  z: 1,
  position: 'sticky',
  top: 176,
  background: 'transparent',
  flexGrow: 1,
  justifyContent: 'flex-end',
  height: 600,
});
