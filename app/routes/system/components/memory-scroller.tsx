import { styled } from '~/styles/stitches.config';

import { Flex } from '~/components/Flex';
import { useEffect, useRef, useState } from 'react';

import {
  ScrollArea,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from '~/components/MemoryScroller/StyledMemoryScroller';

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
  scrollOffset?: number;
  initialOffset: number;
}

const Memory = ({ src, scrollOffset, initialOffset }: MemoryProps) => {
  const translateUtil = () => {
    return `translateY(${
      scrollOffset ? scrollOffset * -0.9 + initialOffset : initialOffset
    }px)`;
  };

  return (
    <Img
      src={src}
      width={400}
      css={{
        position: 'absolute',
        borderRadius: 8,
        left: 100,
        transform: translateUtil(),
      }}
    />
  );
};

const MemoryContainer = () => {
  return (
    <>
      {urls.map((url) => (
        <Memory src={url} initialOffset={100} />
      ))}
    </>
  );
};

const MemoryScroller = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [offset, setOffset] = useState(ref.current?.scrollTop);

  return (
    <Flex
      css={{
        paddingTop: 100,
      }}
      flexDirection="column"
      alignItems="center"
    >
      <ScrollArea onScroll={(e) => console.log(e)}>
        <ScrollAreaViewport
          ref={ref}
          onScroll={() => setOffset(ref.current?.scrollTop)}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            position={'relative'}
          >
            <MemoryContainer />
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
