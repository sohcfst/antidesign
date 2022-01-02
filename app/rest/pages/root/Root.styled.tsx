import { Flex } from '~/rest/components/Flex';
import { styled } from '~/styles/stitches.config';

export const SiteFlex = styled(Flex, {
  flexGrow: 1,
  pt: 65,
});

export const SidebarFlex = styled(Flex, {
  br: 8,
  z: 1,
  background: 'transparent',

  minWidth: 300,
  justifyContent: 'center',
  height: 600,
  position: 'sticky',
  top: 160,
});

export const ContentFlex = styled(Flex, {
  flexGrow: 1,
});
