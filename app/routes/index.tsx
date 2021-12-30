import { Outlet } from 'remix';

import { Flex } from '~/rest/components/Flex';
import { NoiseBackground } from '~/rest/components/Noise';
import { ButtonContainer } from '~/rest/pages/index/ButtonContainer';

import { ContentContainer } from '~/rest/pages/index/Content/ContentContainer';
import {
  HeaderContainer,
  NavContainer,
} from '~/rest/pages/index/Content/StyledContentContainer';

import { GlobalProvder } from '~/rest/pages/index/GlobalProvider';

export default function Index() {
  return (
    <GlobalProvder>
      <Outlet />
      <Flex css={{ py: 40 }} layout={'centerColumn'}>
        <NoiseBackground />
        <HeaderContainer>A N T I D E S I G N</HeaderContainer>
        <ButtonContainer />
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
    </GlobalProvder>
  );
}
