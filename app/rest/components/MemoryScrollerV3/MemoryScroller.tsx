import { styled } from '~/styles/stitches.config';

import { Children, useEffect, useRef, useState } from 'react';

import { Flex } from '~/rest/components/Flex';

import { sky } from '@radix-ui/colors';
import {
  motion,
  MotionValue,
  useElementScroll,
  useTransform,
} from 'framer-motion';
import { H2 } from '~/rest/components/Typography/Header';
import { Paragraph } from '~/rest/components/Typography/Text';

import { Image } from '~/rest/components/MemoryScrollerV2/MemoryScrollerV2.style';
import {
  StyledScrollArea,
  StyledScrollbar,
  StyledThumb,
  StyledViewport,
} from './Scrollable.styled';
import { GG_BRIDGE } from '~/rest/pages/index/Content/images';

// is there an easy way to figure out what element we're inspecting? that's something i like about styled components

interface ParallaxProps {
  x?: MotionValue | number;
  y?: MotionValue | number;
  children: React.ReactNode;
}

const Memory = ({ children, y, x }: ParallaxProps) => {
  return (
    <motion.div
      style={{
        x,
        y,
      }}
    >
      {children}
    </motion.div>
  );
};

const getConfig = (scrollY: MotionValue<number>) => {
  return [
    { y: useTransform(scrollY, [1, 200], [1, -300]), x: 0 },
    { y: useTransform(scrollY, [100, 100], [1000, 1]), x: 0 },
    { y: useTransform(scrollY, [0, 300], [300, -1000]), x: 300 },
    { y: useTransform(scrollY, [0, 400], [300, -700]), x: -300 },
    { y: useTransform(scrollY, [0, 500], [100, -300]), x: 0 },
    { y: useTransform(scrollY, [0, 1100], [100, -1000]), x: 300 },
    { y: useTransform(scrollY, [0, 1200], [100, -1000]), x: -300 },
    { y: useTransform(scrollY, [0, 1300], [100, -1000]), x: 200 },
    { y: useTransform(scrollY, [0, 1400], [100, -1000]), x: -300 },
    { y: useTransform(scrollY, [0, 500], [100, -1000]), x: 350 },
  ];
};

const gradientString = `${sky.sky5}, white`;

const EtherealStrip = () => (
  <Flex
    css={{
      py: 500,
      width: 440,
      height: 10000,
      left: '25%',
      position: 'absolute',
      br: 8,
      background: `linear-gradient(175deg, ${gradientString}, ${gradientString}, ${gradientString})`,
      z: -1,
    }}
  />
);

const MemoryScroller = () => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { scrollY } = useElementScroll(ref);

  const config = getConfig(scrollY);

  return (
    <>
      <H2 css={{ pt: 24 }}>SYSTEM : NOSTALGIA</H2>
      <StyledScrollArea css={{ display: 'flex', width: '100%', height: 10000 }}>
        <StyledViewport ref={ref}>
          <EtherealStrip />
          <Flex
            layout={'centerColumn'}
            css={{
              py: 250,
              margin: '0 auto',
            }}
          >
            {config.map((config, i) => {
              return (
                <Memory y={config.y} x={config.x} key={`memory-${i}`}>
                  <Paragraph css={{ color: 'black' }}>image {i}</Paragraph>
                  <Paragraph css={{ color: 'black' }}>
                    motion value: {config.y.getVelocity()}
                  </Paragraph>
                  <Paragraph css={{ color: 'black' }}>
                    scrollY: {scrollY.get()}
                  </Paragraph>
                  <Image
                    id={`parallax-image-100`}
                    width={350}
                    src={GG_BRIDGE}
                  />
                </Memory>
              );
            })}
          </Flex>
        </StyledViewport>

        <StyledScrollbar orientation="vertical">
          <StyledThumb />
        </StyledScrollbar>
      </StyledScrollArea>
    </>
  );
};

export default MemoryScroller;
