import MemoryScroller from '~/components/MemoryScrollerV2/MemoryScroller';
<MemoryScroller />;

import { Outlet } from 'remix';

import { Flex } from '~/components/Flex';
import { NoiseBackground } from '~/components/Noise';
import { HeaderContainer } from '~/pages/index/ContentContainer';

import {
  Button,
  ContentContainer,
  NavContainer,
} from '~/pages/index/ContentContainer';

import { globalStyles } from '~/styles/stitches.config';

export default function PlaygroundRoute() {
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
      <HeaderContainer>P L A Y G R O U N D</HeaderContainer>
      <Flex
        css={{
          width: 1192,
          height: '80vh',
          br: 8,
          z: 1,
          background: 'transparent',
        }}
      >
        {/* <NavContainer /> */}
        <Flex
          layout="centerColumn"
          css={{
            height: '100%',

            br: 8,
            width: '100%',
            px: 24,
            fontWeight: 'bold',
            gap: 24,
            background: 'transparent',
          }}
        >
          <Flex
            css={{
              borderRadius: 8,
              border: '1px solid white',
              width: '100%',
              height: '100%',
              background: '$stitchesGrey',
              boxShadow: `0.5px 1px 1px hsl(220deg 100% 100% / 0.5),
              1px 2px 2px hsl(220deg 100% 100% / 0.5)`,
            }}
            layout={'centerColumn'}
          >
            <MemoryScroller />
            <Outlet />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
