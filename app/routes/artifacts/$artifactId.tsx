import { Outlet } from 'remix';
import { Flex } from '~/rest/components/Flex';
import { H2 } from '~/rest/components/Typography/Header';
import { HeaderContainer } from '~/rest/pages/index/Content/StyledContentContainer';

export default function ArtifactId() {
  return (
    <Flex
      layout="centerColumn"
      css={{
        br: 8,
        fontWeight: 'bold',
        px: 24,
        height: '100%',
      }}
    >
      <HeaderContainer>// A R T I F A C T_####</HeaderContainer>
      <Flex
        layout="centerColumn"
        css={{
          width: 912,
          br: 8,
          fontWeight: 'bold',
        }}
      >
        <Flex
          layout="centerColumn"
          css={{
            br: 8,
            fontWeight: 'bold',
            py: '33%',
            border: '1px solid white',
            width: 346,
            background: 'white',
          }}
        >
          <H2 css={{ position: 'fixed' }}>
            {'- .. ['} research in progress {'] .. -'}
          </H2>
        </Flex>
      </Flex>

      <Outlet />
    </Flex>
  );
}
