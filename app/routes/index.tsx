import { Flex } from '~/rest/components/Flex';

import { ContentContainer } from '~/rest/pages/index/Content/ContentContainer';
import { HeaderContainer } from '~/rest/pages/index/Content/StyledContentContainer';

import { GlobalProvder } from '~/rest/pages/index/GlobalProvider';

export default function IndexRoute() {
  return (
    <GlobalProvder>
      <Flex layout={'centerColumn'}>
        <HeaderContainer>A N T I D E S I G N</HeaderContainer>
        <ContentContainer />
      </Flex>
    </GlobalProvder>
  );
}
