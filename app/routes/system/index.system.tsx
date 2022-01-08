import { Outlet } from 'remix';

import { useLoaderData } from 'remix';

import { Flex } from '~/rest/components/Flex';
import { ButtonContainer } from '~/routes/index/ButtonContainer';
import { HeaderContainer } from '~/routes/index/Content/HeaderContainer';

import { GlobalProvder } from '~/routes/index/GlobalProvider';
import { loader } from './loader/loader.server';

export default function SystemIndexRoute() {
  const { images } = useLoaderData();

  return (
    <GlobalProvder>
      <Flex layout={'centerColumn'}>
        <HeaderContainer>A N T I D E S I G N // S Y S T E M</HeaderContainer>
        <ButtonContainer />
        <Flex css={{ width: 948 }}></Flex>
        <div>wip</div>
      </Flex>
    </GlobalProvder>
  );
}

export { loader };
