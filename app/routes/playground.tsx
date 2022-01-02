// import MemoryScroller from '~/rest/components/MemoryScrollerV2/MemoryScroller';

import { Outlet } from 'remix';

import { Flex } from '~/rest/components/Flex';

import { HeaderContainer } from '~/rest/pages/index/Content/StyledContentContainer';

export default function PlaygroundRoute() {
  return (
    <>
      <Flex layout={'centerColumn'}>
        <HeaderContainer>// P L A Y G R O U N D</HeaderContainer>
        <Flex
          css={{
            width: 912,
            height: '100%',
            br: 8,
            px: 16,
          }}
        >
          <Flex
            css={{
              border: '1px solid white',
              width: '100%',
              height: '100%',
              br: 8,
              boxShadow: `1px 2px 2px hsl(220deg 100% 100% / 0.5),
              2px 4px 4px hsl(220deg 100% 100% / 0.5)`,
            }}
          >
            <Outlet />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
