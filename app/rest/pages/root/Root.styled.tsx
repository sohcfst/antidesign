import { Flex } from '~/rest/components/Flex';
import { styled } from '~/styles/stitches.config';

export const Root = styled(Flex, {
  height: '100%',
  positon: 'relative',
  overflow: 'scroll',
});

export const SidebarFlex = styled(Flex, {
  br: 8,
  z: 1,

  background: 'transparent',
  flexGrow: 1,
  justifyContent: 'flex-end',
  height: 600,
  overflow: 'scroll',
});
