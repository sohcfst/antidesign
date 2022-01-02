import { Flex } from '~/rest/components/Flex';
import { styled } from '~/styles/stitches.config';

export const SiteFlex = styled(Flex, {
  flexGrow: 1,
  pt: 105,
});

export const SidebarFlex = styled(Flex, {
  br: 8,
  z: 1,
  background: 'transparent',
  // pt: 95,
  width: 300,
  justifyContent: 'center',
  height: 928,
  position: 'sticky',
  top: 200,
});

export const ContentFlex = styled(Flex, {
  flexGrow: 1,
});
