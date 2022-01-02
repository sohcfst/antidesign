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

const LAKE_MERRIT =
  'https://avfdzphxkehjacxeupkt.supabase.in/storage/v1/object/sign/images/char.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2hhci5qcGciLCJpYXQiOjE2NDA0NTkxODcsImV4cCI6MTk1NTgxOTE4N30.Z4hWTTO1EoWPatxzmN4VhlSC5leeek71k_WXjA_GSWo';

const HEAVEN =
  'https://avfdzphxkehjacxeupkt.supabase.in/storage/v1/object/sign/images/heaven?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvaGVhdmVuIiwiaWF0IjoxNjQwNDU5MTkwLCJleHAiOjE5NTU4MTkxOTB9.Xmf6kuxATdtx2E91JVWrlUrRjOot22likVflDBm3MEg';

export const GG_BRIDGE =
  'https://avfdzphxkehjacxeupkt.supabase.in/storage/v1/object/sign/images/gg-bridge-peaking?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZ2ctYnJpZGdlLXBlYWtpbmciLCJpYXQiOjE2NDA0NTkxOTEsImV4cCI6MTk1NTgxOTE5MX0.RZS-I76QuukqefaLhKs6lv2_Q9fH_LvAg25CT_ua_08';

export const IG_PIC =
  'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/265000848_316484663676014_6570409727161427686_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=aA_14QU5NtEAX_8jSr3&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT-p9pmM8_KSV_ipOoLTVcgtoQLQ8vQpQed8TYVVW0k9fQ&oe=61CF5501&_nc_sid=4f375e 640w,https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/265000848_316484663676014_6570409727161427686_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=aA_14QU5NtEAX_8jSr3&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_iPJfqA35hn4QLPMxwF1anO-ea4CrtyewGiqA7B-2cZg&oe=61CFF545&_nc_sid=4f375e 750w,https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/265000848_316484663676014_6570409727161427686_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=aA_14QU5NtEAX_8jSr3&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT-fhjfdIuW2pTHkpsJ4mhfcQnON8LO5lK2RS13wySs92Q&oe=61CF1786&_nc_sid=4f375e 1080w';

const urls = [GG_BRIDGE, HEAVEN, LAKE_MERRIT];

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
      left: '25%',
      position: 'absolute',
      height: '100%',
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
      <StyledScrollArea css={{ display: 'flex', width: '100%' }}>
        <StyledViewport ref={ref}>
          <EtherealStrip />
          <Flex
            layout={'centerColumn'}
            css={{
              py: 500,
              margin: '0 auto',
              height: '100%',
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
