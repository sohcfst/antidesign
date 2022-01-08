import { Flex } from '~/rest/components/Flex';
import { Memory } from '~/rest/components/MemoryScrollerV3/Memory';
import { MemoryScroller } from '~/rest/components/MemoryScrollerV3/MemoryScroller';
// import MemoryScroller from '~/rest/components/SCROLLERv4/MemoryScroller';

export default function SystemNostalgiaV2IndexRoute() {
  return (
    <Flex
      layout="centerColumn"
      css={{
        height: '100%',
        width: '100%',
        br: 8,
        fontWeight: 'bold',
        position: 'relative',
      }}
    >
      <MemoryScroller />
    </Flex>
  );
}
