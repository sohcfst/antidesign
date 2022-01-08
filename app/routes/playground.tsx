import { Outlet } from 'remix';

import { Flex } from '~/rest/components/Flex';

import { HeaderContainer } from '~/rest/pages/index/Content/HeaderContainer';

export default function PlaygroundRoute() {
  return (
    <>
      <Flex layout={'centerColumn'}>
        <HeaderContainer>// P L A Y G R O U N D</HeaderContainer>
        <Flex
          layout="centerColumn"
          css={{
            width: 912,
            br: 8,
            fontWeight: 'bold',
          }}
        ></Flex>
      </Flex>
      <Outlet />
    </>
  );
}
