import { Outlet } from 'remix';
import { Flex } from '~/rest/components/Flex';
import { H2 } from '~/rest/components/Typography/Header';

export default function ArtifactId() {
  return (
    <Flex
      layout="centerColumn"
      css={{
        height: '100%',
        br: 8,
        fontWeight: 'bold',
        py: '50%',
      }}
    >
      <Flex
        css={{
          height: '100%',
          width: 912,
          br: 8,
          fontWeight: 'bold',
        }}
      ></Flex>
      <H2>Research in Progress</H2>
      <Outlet />
    </Flex>
  );
}
