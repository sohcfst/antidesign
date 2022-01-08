import { Flex } from '~/rest/components/Flex';
import { H2 } from '~/rest/components/Typography/Header';

export default function PlaygroundRoute() {
  return (
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
  );
}
