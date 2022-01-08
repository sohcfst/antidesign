import { Flex } from '~/rest/components/Flex';

import { useViewportScroll } from 'framer-motion';
import { H2 } from '~/rest/components/Typography/Header';

import { GG_BRIDGE } from '~/rest/pages/index/Content/images';
import { Inspector } from '../Inspector';
import { MemoryV2 } from './Memory';
import { Image } from '../Image';
import { getConfig } from './demo.constants';
import { EtherealStrip } from './EtherealStrip';

const xConfig = [0, 300, -250, 250, -300];

const MemoryScroller = () => {
  const { scrollY } = useViewportScroll();
  const config = getConfig(scrollY);

  return (
    <>
      <H2 css={{ pt: 24 }}>SYSTEM : NOSTALGIA</H2>
      <Flex
        css={{
          width: '100%',
          height: 5000,
          overflowX: 'visible',
          justifyContent: 'center',
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
          {/* {xConfig.map((x) => (
            <MemoryV2 key={`memory-${1}`} offset={300} x={x}>
              <Inspector scrollY={config[0].y} i={1} containerScrollY={scrollY}>
                <Image id={`parallax-image-100`} width={350} src={GG_BRIDGE} />
              </Inspector>
            </MemoryV2>
          ))} */}

          {/* {config.map((config, i) => {
            return (
              <MemoryV2 key={`memory-${i}`} offset={100}>
                <Inspector scrollY={config.y} i={i} containerScrollY={scrollY}>
                  <Image
                    id={`parallax-image-100`}
                    width={350}
                    src={GG_BRIDGE}
                  />
                </Inspector>
              </MemoryV2>
            );
          })} */}
        </Flex>
      </Flex>
    </>
  );
};

export default MemoryScroller;
