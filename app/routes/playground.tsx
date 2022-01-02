// import MemoryScroller from '~/rest/components/MemoryScrollerV2/MemoryScroller';

import { Outlet } from 'remix';

import { Flex } from '~/rest/components/Flex';

import { HeaderContainer } from '~/rest/pages/index/Content/StyledContentContainer';

import { useEffect, useState } from 'react';
import MemoryScroller from '../rest/components/MemoryScrollerV3/memory-scroller';

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
      <Flex layout={'centerColumn'}>
        <HeaderContainer>/ P L A Y G R O U N D</HeaderContainer>
        <Flex
          css={{
            height: '80vh',
            br: 8,
            z: 1,
          }}
        >
          <Flex
            layout="centerColumn"
            css={{
              height: '100%',
              br: 8,

              px: 24,
              fontWeight: 'bold',
              gap: 24,
            }}
          >
            <Flex
              css={{
                width: '100%',
                height: '100%',
              }}
              layout={'centerColumn'}
            >
              <MemoryScroller />
              <Outlet />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
