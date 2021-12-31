import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Flex } from '../Flex';
import { NoiseBackground } from '../Noise';
import { H1 } from '../Typography/Header';
import {
  ContentImage,
  gradientString,
  Image,
  parallaxConfig,
  StyledContent,
  StyledOverlay,
} from './MemoryScrollerV2.style';
import * as DialogPrimitive from '@radix-ui/react-dialog';
export const GG_BRIDGE =
  'https://avfdzphxkehjacxeupkt.supabase.in/storage/v1/object/sign/images/gg-bridge-peaking?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZ2ctYnJpZGdlLXBlYWtpbmciLCJpYXQiOjE2NDA0NTkxOTEsImV4cCI6MTk1NTgxOTE5MX0.RZS-I76QuukqefaLhKs6lv2_Q9fH_LvAg25CT_ua_08';

const MemoryScroller = () => {
  return (
    <>
      <ParallaxProvider>
        <Flex layout={'centerColumn'} css={{ pt: 24, px: 24 }}>
          <H1>SYSTEM : NOSTALGIA</H1>
        </Flex>
        <Flex
          layout={'centerColumn'}
          css={{
            height: 10000,
            width: '864px',
            background: `linear-gradient(175deg, ${gradientString}, ${gradientString}, ${gradientString})`,
            zIndex: 0,
            // backgroundBlendMode: 'screen',
            position: 'relative',
            paddingTop: 200,
            br: 8,
          }}
        >
          <NoiseBackground />
          {parallaxConfig.map((config, i) => {
            return (
              <Parallax x={config.x} y={config.y}>
                <DialogPrimitive.Root>
                  <DialogPrimitive.Trigger asChild>
                    <Image
                      id={`parallax-image-${i + 1}`}
                      width={400}
                      src={GG_BRIDGE}
                    />
                  </DialogPrimitive.Trigger>
                  <DialogPrimitive.Portal>
                    <StyledOverlay />
                    <StyledContent>
                      <ContentImage
                        id={`parallax-image-${i + 1}`}
                        src={GG_BRIDGE}
                      />
                    </StyledContent>
                  </DialogPrimitive.Portal>
                </DialogPrimitive.Root>
              </Parallax>
            );
          })}
        </Flex>
      </ParallaxProvider>
    </>
  );
};

export default MemoryScroller;
