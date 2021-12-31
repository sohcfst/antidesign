import { Outlet } from 'remix';
import { Button } from '~/rest/components/Button';

import { Flex } from '~/rest/components/Flex';
import { NoiseBackground } from '~/rest/components/Noise';
import { ContentContainer } from '~/rest/pages/index/Content/ContentContainer';
import { HeaderContainer } from '~/rest/pages/index/Content/StyledContentContainer';

import { globalStyles } from '~/styles/stitches.config';

export default function SystemRoute() {
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
      <HeaderContainer>S O N I C D R E A M S</HeaderContainer>
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
            <Outlet />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
