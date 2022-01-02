import { Flex } from '~/rest/components/Flex';
import MemoryScroller from '~/rest/components/MemoryScrollerV3/MemoryScroller';

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
      }}
    >
      <div>Research in Progress</div>
    </Flex>
  );
}
