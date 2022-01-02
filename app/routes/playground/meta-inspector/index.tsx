import { Flex } from '~/rest/components/Flex';
import MemoryScroller from '~/rest/components/MemoryScrollerV3/MemoryScroller';
import { H2 } from '~/rest/components/Typography/Header';

export default function MetaInspectorIndexRoute() {
  return (
    <Flex
      layout="centerColumn"
      css={{
        height: '100%',
        width: '100%',
        br: 8,
        fontWeight: 'bold',
        py: '50%',
        background: '$stitchesGrey',
      }}
    >
      <H2>
        {'- .. ['} research in progress {'] .. -'}
      </H2>
    </Flex>
  );
}
