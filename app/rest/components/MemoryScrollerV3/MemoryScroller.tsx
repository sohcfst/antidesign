import { styled } from '~/styles/stitches.config';

import { Children, useEffect, useRef, useState } from 'react';

import { Flex } from '~/rest/components/Flex';

import { blackA, sky } from '@radix-ui/colors';
import {
  motion,
  MotionValue,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { H2 } from '~/rest/components/Typography/Header';
import { Paragraph } from '~/rest/components/Typography/Text';

export const Image = styled('img', {
  borderRadius: 4,
  boxShadow: `0 1px 1px hsl(0deg 0% 0% / 0.075),
  0 2px 2px hsl(0deg 0% 0% / 0.075),
  0 4px 4px hsl(0deg 0% 0% / 0.075),
  0 8px 8px hsl(0deg 0% 0% / 0.075),
  0 16px 16px hsl(0deg 0% 0% / 0.075)`,
  zIndex: -1,
  position: 'relative',
  cursor: 'pointer',

  '&:hover': {
    transform: 'scale(1.01)',
    transition: 'all .1s cubic-bezier(0.1, 0.7, 1.0, 0.1)',
  },

  '&:active': {
    transform: 'scale(0.995)',
  },
});
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
    { y: useTransform(scrollY, [0, 200], [3, -100]), x: 0 },
    { y: useTransform(scrollY, [100, 100], [1000, 1]), x: -200 },
    { y: useTransform(scrollY, [0, 300], [300, -800]), x: 300 },
    { y: useTransform(scrollY, [0, 400], [300, -700]), x: -250 },
    { y: useTransform(scrollY, [0, 500], [100, -300]), x: 0 },
    { y: useTransform(scrollY, [0, 1100], [100, -1000]), x: 250 },
    { y: useTransform(scrollY, [0, 1200], [100, -1000]), x: -300 },
    { y: useTransform(scrollY, [0, 1300], [100, -1000]), x: 200 },
    { y: useTransform(scrollY, [0, 1400], [100, -1000]), x: -300 },
    { y: useTransform(scrollY, [0, 1500], [100, -1000]), x: 250 },
  ];
};

const gradientString = `${sky.sky5}, white`;

const EtherealStrip = () => (
  <Flex
    css={{
      py: 500,
      width: 440,
      height: 10000,

      position: 'absolute',
      br: 8,
      background: `linear-gradient(175deg, ${gradientString}, ${gradientString}, ${gradientString})`,
      z: -1,
      boxShadow: `0 2px 10px ${blackA.blackA7}`,
    }}
  />
);

interface InspectorProps {
  children: React.ReactNode;
  scrollY: MotionValue;
  i: number;
}

const Inspector = ({ children, scrollY, i }: InspectorProps) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [position, setPosition] = useState(0);

  scrollY.onChange((y) => {
    setPosition(Math.round(100 * y) / 100);
  });

  return (
    <>
      <Paragraph css={{ color: 'red' }}>LABEL: image {i}</Paragraph>
      <Paragraph css={{ color: 'red' }}>POSITION: {position}px</Paragraph>

      <Flex
        ref={ref}
        layout={'startColumn'}
        css={{ p: 16, border: '1px solid red' }}
      >
        <>{children}</>
      </Flex>
    </>
  );
};

const MemoryScroller = () => {
  const { scrollY } = useViewportScroll();
  const config = getConfig(scrollY);

  return (
    <>
      <H2 css={{ pt: 24 }}>SYSTEM : NOSTALGIA</H2>
      <Flex
        css={{
          width: '100%',
          height: 10000,
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
          {config.map((config, i) => {
            return (
              <Memory y={config.y} x={config.x} key={`memory-${i}`}>
                <Inspector scrollY={config.y} i={i}>
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

export default MemoryScroller;
