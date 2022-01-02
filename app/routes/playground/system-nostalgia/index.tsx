import { Flex } from '~/rest/components/Flex';
import MemoryScroller from '~/rest/components/MemoryScrollerV3/memory-scroller';

export default function SystemNostalgiaIndexRoute() {
  return (
    <Flex
      layout="centerColumn"
      css={{
        height: '100%',
        width: '100%',
        br: 8,
        fontWeight: 'bold',
      }}
    >
      <MemoryScroller />
    </Flex>
  );
}
