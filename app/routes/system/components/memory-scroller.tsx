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

export const GG_BRIDGE =
  'https://avfdzphxkehjacxeupkt.supabase.in/storage/v1/object/sign/images/gg-bridge-peaking?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZ2ctYnJpZGdlLXBlYWtpbmciLCJpYXQiOjE2NDA0NTkxOTEsImV4cCI6MTk1NTgxOTE5MX0.RZS-I76QuukqefaLhKs6lv2_Q9fH_LvAg25CT_ua_08';

export const IG_PIC =
  'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/265000848_316484663676014_6570409727161427686_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=aA_14QU5NtEAX_8jSr3&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT-p9pmM8_KSV_ipOoLTVcgtoQLQ8vQpQed8TYVVW0k9fQ&oe=61CF5501&_nc_sid=4f375e 640w,https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/265000848_316484663676014_6570409727161427686_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=aA_14QU5NtEAX_8jSr3&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT_iPJfqA35hn4QLPMxwF1anO-ea4CrtyewGiqA7B-2cZg&oe=61CFF545&_nc_sid=4f375e 750w,https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/265000848_316484663676014_6570409727161427686_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=aA_14QU5NtEAX_8jSr3&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT-fhjfdIuW2pTHkpsJ4mhfcQnON8LO5lK2RS13wySs92Q&oe=61CF1786&_nc_sid=4f375e 1080w';

const urls = [GG_BRIDGE, HEAVEN, LAKE_MERRIT];

// is there an easy way to figure out what element we're inspecting? that's something i like about styled components

const Img = styled('img', {
  position: 'absolute',
  top: 0,
  left: 0,
  // '&:hover': 'transform(scale(1.2))',
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

// const MemoryContainer = ({ offset, scrollOffset }) => {
//   return (
//     <>
//       {urls.map((url, i) => (
//         <Memory
//           key={url}
//           src={url}
//           initialOffset={i * 600 + offset}
//           scrollOffset={scrollOffset}
//         />
//       ))}
//     </>
//   );
// };

const MemoryScroller = ({
  arr = [
    0.1, 0.6, -0.7, 0.4, -0.5, 0.6, 0.7, -0.1, 0.5, -0.4, 0.4, -0.5, 0.5, 0.3,
    -0.1, 0.9, 0.6, -0.4, 0.5, 0.6, -0.7, 0.1, 0.6, 0.7, 0.4, -0.5, 0.6, 0.3,
  ],
}) => {
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
            {arr.map((key, i) => {
              return (
                <Memory
                  scrollOffset={offset}
                  initialTopOffset={i * 100}
                  src={urls[0]}
                  scale={key}
                  left={1000 * key}
                />
              );
            })}
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
