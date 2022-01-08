import { Flex } from '~/rest/components/Flex';

import { ContentContainer } from '~/routes/index/Content/ContentContainer';
import { HeaderContainer } from '~/routes/index/Content/HeaderContainer';

import { GlobalProvder } from '~/routes/index/GlobalProvider';

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
