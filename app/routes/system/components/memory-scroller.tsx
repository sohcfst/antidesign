import { styled } from '~/styles/stitches.config';

import { mauve, blackA } from '@radix-ui/colors';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { Flex } from '~/components/Flex';
import { useEffect, useRef } from 'react';

const SCROLLBAR_SIZE = 10;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: 1000,
  height: 1000,
  // borderRadius: 8,
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  justifySelf: 'center',
  borderRadius: 'inherit',
  boxShadow: 'inset 0 -20px white',
});

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

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: blackA.blackA8,
});

// Exports
const ScrollArea = StyledScrollArea;
const ScrollAreaViewport = StyledViewport;
const ScrollAreaScrollbar = StyledScrollbar;
const ScrollAreaThumb = StyledThumb;
const ScrollAreaCorner = StyledCorner;

const LAKE_MERRIT =
  'https://avfdzphxkehjacxeupkt.supabase.in/storage/v1/object/sign/images/char.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvY2hhci5qcGciLCJpYXQiOjE2NDA0NTkxODcsImV4cCI6MTk1NTgxOTE4N30.Z4hWTTO1EoWPatxzmN4VhlSC5leeek71k_WXjA_GSWo';

const HEAVEN =
  'https://avfdzphxkehjacxeupkt.supabase.in/storage/v1/object/sign/images/heaven?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvaGVhdmVuIiwiaWF0IjoxNjQwNDU5MTkwLCJleHAiOjE5NTU4MTkxOTB9.Xmf6kuxATdtx2E91JVWrlUrRjOot22likVflDBm3MEg';

const GG_BRIDGE =
  'https://avfdzphxkehjacxeupkt.supabase.in/storage/v1/object/sign/images/gg-bridge-peaking?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZ2ctYnJpZGdlLXBlYWtpbmciLCJpYXQiOjE2NDA0NTkxOTEsImV4cCI6MTk1NTgxOTE5MX0.RZS-I76QuukqefaLhKs6lv2_Q9fH_LvAg25CT_ua_08';

const urls = [GG_BRIDGE, HEAVEN, LAKE_MERRIT];

// is there an easy way to figure out what element we're inspecting? that's something i like about styled components

const Img = styled('img', {
  position: 'absolute',
  top: 0,
  left: 0,
});

interface MemoryProps {
  src: string;
}

const Memory1 = ({ src }: MemoryProps) => {
  return (
    <Img
      src={src}
      width={400}
      css={{ position: 'absolute', borderRadius: 8 }}
    />
  );
};

const Memory2 = ({ src }: MemoryProps) => {
  return (
    <Img
      src={src}
      width={400}
      css={{ position: 'absolute', borderRadius: 8, top: 400 }}
    />
  );
};

const Memory3 = ({ src }: MemoryProps) => {
  const ref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
      const img = ref.current;
      if (img) {
        console.log(img.scrollY);
      }
    });
  }, [ref]);

  return (
    <Img
      ref={ref}
      src={src}
      width={400}
      css={{ position: 'absolute', borderRadius: 8, top: 30000 }}
    />
  );
};

const MemoryContainer = () => {
  return (
    <>
      {urls.map((url) => (
        <Memory1 src={url} />
      ))}
    </>
  );
};

const MemoryScroller = () => {
  // const ref = useRef();

  // useEffect(() => {
  //   ref.addEventListener('scroll', () => {
  //     console.log(window.scrollY);
  //     const img = ref.current;
  //     if (img) {
  //       console.log(img.scrollY);
  //     }
  //   });
  // }, [ref]);

  return (
    <Flex
      css={{
        paddingTop: 100,
      }}
      flexDirection="column"
      alignItems="center"
    >
      <ScrollArea onScroll={(e) => console.log(e)}>
        <ScrollAreaViewport onScroll={(e) => console.log(e.target.scrollTop)}>
          <Flex
            flexDirection="column"
            alignItems="center"
            position={'relative'}
          >
            <Memory1 src={GG_BRIDGE} />
            <Memory2 src={LAKE_MERRIT} />
            <Memory3 src={HEAVEN} />
          </Flex>
        </ScrollAreaViewport>

        <ScrollAreaScrollbar orientation="vertical">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>

        <ScrollAreaCorner />
      </ScrollArea>
    </Flex>
  );
};

export default MemoryScroller;
