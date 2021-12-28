import { timeline } from 'motion';
import { Button } from '~/components/Button';
import { Flex } from '~/components/Flex';
import { NoiseBackground } from '~/components/Noise';
import { systemInit } from '~/pages/index/animation.constants';
import { CardProvider } from '~/pages/index/CardProvider';
import { HeaderContainer } from '~/pages/index/ContentContainer';

import { ContentContainer, NavContainer } from '~/pages/index/ContentContainer';

import { globalStyles } from '~/styles/stitches.config';

export default function Index() {
  globalStyles();

  return (
    <CardProvider>
      <Flex css={{ py: 40 }} layout={'centerColumn'}>
        <NoiseBackground />
        <Flex
          id="page-button-container"
          css={{
            position: 'absolute',
            top: 16,
            right: 16,
            gap: 16,
          }}
        >
          <Button onClick={() => timeline(systemInit)}>SYSTEM.__init()</Button>
          {/* <Button>SYSTEM.__exit()</Button> */}
        </Flex>
        <HeaderContainer>A N T I D E S I G N</HeaderContainer>
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
    </CardProvider>
  );
}
