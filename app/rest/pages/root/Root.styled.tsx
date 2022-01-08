import { Flex } from '~/rest/components/Flex';
import { styled } from '~/styles/stitches.config';

export const Root = styled(Flex, {
  flexGrow: 1,
  pt: 65,
});

export const SidebarFlex = styled(Flex, {
  br: 8,
  z: 1,
  background: 'transparent',
  flexGrow: 1,
  minWidth: 300,
  justifyContent: 'flex-end',
  height: 600,
  position: 'sticky',
  top: 176,
});

export const ContentFlex = styled(Flex, {
  flexGrow: 1,
});
