import { styled } from '~/styles/stitches.config';

import { Children, useEffect, useRef, useState } from 'react';

import { Flex } from '~/rest/components/Flex';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { blackA, green, mauve, purple, sky, whiteA } from '@radix-ui/colors';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import {
  ContentImage,
  Image,
  parallaxConfig,
  StyledContent,
  StyledOverlay,
} from '~/rest/components/MemoryScrollerV2/MemoryScrollerV2.style';

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

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: 1192,
  height: 948,
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const Img = styled('img', {
  position: 'absolute',
  top: 0,
  left: 0,
});

interface MemoryProps {
  src: string;
  scrollOffset?: number;
  initialTopOffset: number;
  scale: number;
  left: number;
}

const Memory = ({
  src,
  scrollOffset,
  initialTopOffset,
  scale,
  left,
}: MemoryProps) => {
  const translateUtil = () => {
    return `translateY(${
      scrollOffset ? scrollOffset * -scale + initialTopOffset : initialTopOffset
    }px)`;
  };

  return (
    <Img
      src={src}
      width={400}
      css={{
        position: 'absolute',
        borderRadius: 8,
        left,
        transform: translateUtil(),
      }}
    />
  );
};

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
  border: '1px solid whiteA',
});
const SCROLLBAR_SIZE = 10;

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  background: blackA.blackA6,
  transition: 'background 160ms ease-out',
  '&:hover': { background: blackA.blackA8 },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {
  motion,
  MotionValue,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import { H1 } from '~/rest/components/Typography/Header';
import { Paragraph } from '~/rest/components/Typography/Text';
const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: mauve.mauve10,
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

interface ParallaxProps {
  x?: MotionValue | number;
  y?: MotionValue | number;
  children: React.ReactNode;
}

const Parallax = ({ children, y, x }: ParallaxProps) => {
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
    useTransform(scrollY, [0, 300], [100, -1000]),
    useTransform(scrollY, [0, 400], [200, -600]),
    useTransform(scrollY, [0, 500], [-100, -700]),
    useTransform(scrollY, [0, 600], [300, -900]),
    useTransform(scrollY, [0, 700], [0, -300]),
    useTransform(scrollY, [0, 800], [100, -700]),
    useTransform(scrollY, [0, 900], [200, -400]),
    useTransform(scrollY, [0, 1300], [-100, -100]),
    useTransform(scrollY, [0, 1400], [300, -800]),
    useTransform(scrollY, [0, 1500], [0, -2000]),
  ];
};

const MemoryScroller = () => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { scrollY } = useElementScroll(ref);
  const config = [
    { y: useTransform(scrollY, [0, 300], [200, -1000]), x: 100 },
    { y: useTransform(scrollY, [0, 400], [300, -600]), x: -200 },
    { y: useTransform(scrollY, [0, 300], [300, -1000]), x: 300 },
    { y: useTransform(scrollY, [0, 400], [300, -700]), x: -300 },
    { y: useTransform(scrollY, [0, 500], [100, -300]), x: 0 },
    { y: useTransform(scrollY, [0, 1100], [100, -1000]), x: 300 },
    { y: useTransform(scrollY, [0, 1200], [100, -1000]), x: -300 },
    { y: useTransform(scrollY, [0, 1300], [100, -1000]), x: 200 },
    { y: useTransform(scrollY, [0, 1400], [100, -1000]), x: -300 },
    { y: useTransform(scrollY, [0, 500], [100, -1000]), x: 350 },
  ];

  const gradientString = `${sky.sky5}, white`;

  return (
    <Flex
      css={{
        border: '1px solid white',
        br: 8,
      }}
      flexDirection="column"
      alignItems="center"
    >
      <H1>SYSTEM : NOSTALGIA</H1>
      <StyledScrollArea>
        <StyledViewport ref={ref}>
          <Flex
            layout={'centerColumn'}
            css={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(175deg, ${gradientString}, ${gradientString}, ${gradientString})`,
            }}
          >
            {config.map((config, i) => {
              return (
                <Parallax y={config.y} x={config.x}>
                  <Paragraph css={{ color: 'black' }}>image {i}</Paragraph>

                  <Image
                    id={`parallax-image-100`}
                    width={400}
                    src={GG_BRIDGE}
                  />
                </Parallax>
              );
            })}
          </Flex>
        </StyledViewport>

        <StyledScrollbar orientation="vertical">
          <StyledThumb />
        </StyledScrollbar>
      </StyledScrollArea>
    </Flex>
  );
};

export default MemoryScroller;
