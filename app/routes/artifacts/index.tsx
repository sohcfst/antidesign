import { Outlet } from 'remix';

import { useLoaderData, LoaderFunction } from 'remix';
import { db } from '~/database/db.server';
import { Flex } from '~/rest/components/Flex';
import { ButtonContainer } from '~/routes/index/ButtonContainer';
import { ContentContainer } from '~/routes/index/Content/ContentContainer';
import { HeaderContainer } from '~/routes/index/Content/HeaderContainer';

import { GlobalProvder } from '~/routes/index/GlobalProvider';

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

export default function ArtifactsIndexRoute() {
  const { images } = useLoaderData();

  return (
    <GlobalProvder>
      <Flex layout={'centerColumn'}>
        <HeaderContainer>// A R T I F A C T S</HeaderContainer>
        <ButtonContainer />
        <ContentContainer />
        <Outlet />
      </Flex>
    </GlobalProvder>
  );
}
