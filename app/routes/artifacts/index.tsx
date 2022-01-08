import { Outlet } from 'remix';

import { useLoaderData, LoaderFunction } from 'remix';
import { db } from '~/database/db.server';
import { Flex } from '~/rest/components/Flex';
import { H2 } from '~/rest/components/Typography/Header/Header';

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
    <Flex
      layout="centerColumn"
      css={{
        br: 8,
        py: '33%',
        border: '1px solid white',
        width: 346,
        background: 'white',
        minHeight: '200vh',
      }}
    >
      <H2 css={{ position: 'fixed' }}>
        {'- .. ['} research in progress {'] .. -'}
      </H2>
    </Flex>
  );
}
