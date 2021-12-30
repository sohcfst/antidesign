import MemoryScroller from '~/rest/components/MemoryScrollerV2/MemoryScroller';
<MemoryScroller />;

import { Outlet } from 'remix';

import { Flex } from '~/rest/components/Flex';
import { NoiseBackground } from '~/rest/components/Noise';
import { ContentContainer } from '~/rest/pages/index/Content/ContentContainer';
import {
  HeaderContainer,
  NavContainer,
} from '~/rest/pages/index/Content/StyledContentContainer';

import { Button } from '~/rest/components/Button';
import { useEffect, useState } from 'react';

const useIsSSR = () => {
  // we always start off in "SSR mode", to ensure our initial browser render
  // matches the SSR render
  const [isSsr, setIsSsr] = useState(true);

  useEffect(() => {
    setIsSsr(false);
  }, []);

  return isSsr;
};

export default function PlaygroundRoute() {
  const isSSR = useIsSSR();

  return (
    <>
      {!isSSR && (
        <Flex css={{ py: 40 }} layout={'centerColumn'}>
          <NoiseBackground />

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
      )}
    </>
  );
}
