import { Flex } from '~/rest/components/Flex';

import { useViewportScroll } from 'framer-motion';
import { H2 } from '~/rest/components/Typography/Header/Header';

import { GG_BRIDGE } from '~/rest/pages/index/Content/images';
import { Inspector } from '../Inspector';
import { Memory } from './Memory';
import { Image } from '../Image';
import { getConfig } from './demo.constants';
import { EtherealStrip } from './EtherealStrip';

const MemoryScroller = () => {
  const { scrollY } = useViewportScroll();
  const config = getConfig(scrollY);

  return (
    <>
      <H2 css={{ position: 'absolute' }}>SYSTEM : NOSTALGIA</H2>
      <Flex
        css={{
          width: '100%',
          height: 5000,
          overflowX: 'visible',
          justifyContent: 'center',
          pt: 25,
        }}
      >
        <EtherealStrip />
        <Flex
          layout={'centerColumn'}
          css={{
            margin: '0 auto',
            overflowX: 'visible',
          }}
        >
          {config.map((config, i) => {
            return (
              <Memory y={config.y} x={config.x} key={`memory-${i}`}>
                <Inspector scrollY={config.y} i={i} containerScrollY={scrollY}>
                  <Image
                    id={`parallax-image-100`}
                    width={350}
                    src={GG_BRIDGE}
                  />
                </Inspector>
              </Memory>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
};

export { MemoryScroller };
