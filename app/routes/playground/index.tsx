import { Flex } from '~/rest/components/Flex';
import { H2 } from '~/rest/components/Typography/Header/Header';
import { StyledContentContainer } from '~/rest/pages/index/Content/StyledContentContainer';

export default function PlaygroundRoute() {
  return (
    <Flex css={{ pt: 16 }}>
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
    </Flex>
  );
}
