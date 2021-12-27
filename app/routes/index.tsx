import { Flex } from '~/components/Flex';
import { NoiseBackground } from '~/components/Noise';
import { HeaderContainer } from '~/pages/index/ContentContainer';

import {
  Button,
  ContentContainer,
  NavContainer,
} from '~/pages/index/ContentContainer';

import { globalStyles } from '~/styles/stitches.config';

export default function Index() {
  globalStyles();

  return (
    <Flex css={{ py: 40 }} layout={'centerColumn'}>
      <NoiseBackground />
      <Flex
        css={{
          position: 'absolute',
          top: 16,
          right: 16,
          gap: 16,
        }}
      >
        <Button>SYSTEM.__init()</Button>
        <Button>SYSTEM.__exit()</Button>
      </Flex>
      <HeaderContainer />
      <Flex
        css={{
          width: 1192,
          height: '80vh',
          br: 8,
          z: 1,
          background: 'transparent',
        }}
      >
        <NavContainer />
        <ContentContainer />
      </Flex>
    </Flex>
  );
}
