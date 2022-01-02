import { Outlet } from 'remix';

import { useLoaderData, LoaderFunction } from 'remix';
import { db } from '~/database/db.server';
import { Flex } from '~/rest/components/Flex';
import { ButtonContainer } from '~/rest/pages/index/ButtonContainer';

import { HeaderContainer } from '~/rest/pages/index/Content/StyledContentContainer';
import { GlobalProvder } from '~/rest/pages/index/GlobalProvider';

export interface Image {
  url: string;
  caption: string;
}

export type LoaderData = {
  images: Image[];
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    images: await db.image.findMany(),
  };

  return data;
};

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
