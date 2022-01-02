import { Flex } from '~/rest/components/Flex';
import MemoryScroller from '~/rest/components/MemoryScrollerV3/MemoryScroller';
import { H2 } from '~/rest/components/Typography/Header';

export default function MetaInspectorIndexRoute() {
  return (
    <Flex
      layout="centerColumn"
      css={{
        br: 8,
        fontWeight: 'bold',
        py: '50%',
        border: '1px solid white',
        width: 246,
        height: '100%',
        background: 'white',
      }}
    >
      <H2>
        {'- .. [ -'} research in progress {'- ] .. -'}
      </H2>
    </Flex>
  );
}
