import { grayA, sky } from '@radix-ui/colors';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Flex } from '~/components/Flex';
import { styled } from '~/styles/stitches.config';
import { GG_BRIDGE } from './system/components/memory-scroller';

const Image = styled('img', {
  width: 400,
  borderRadius: 4,
  boxShadow: `  0 1px 1px hsl(0deg 0% 0% / 0.075),
  0 2px 2px hsl(0deg 0% 0% / 0.075),
  0 4px 4px hsl(0deg 0% 0% / 0.075),
  0 8px 8px hsl(0deg 0% 0% / 0.075),
  0 16px 16px hsl(0deg 0% 0% / 0.075)`,
});

const StickyHeader = styled('div', {
  background: `linear-gradient(180deg, ${sky.sky5}, white)`,
  position: 'fixed',
  height: '100vh',
  width: '100%',
  zINdex: 100,
});

const PlaygroundRoute = () => {
  return (
    <>
      <ParallaxProvider>
        <StickyHeader />
        <Flex layout={'centerColumn'} css={{ height: 2000, width: '100%' }}>
          {/* x offset is based on the main axis */}
          {/* pass in the same value twice for a static offset */}
          <Parallax y={['400px', '0px']} x={['0px', '0px']}>
            <Image id="image-1" src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['100px', '100px']} x={['330px', '330px']}>
            <Image id="image-2" width={400} src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['100px', '-200px']} x={['-300px', '-300px']}>
            <Image id="image-3" width={400} src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['200px', '-400px']} x={['0px', '0px']}>
            <Image id="image-4" src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['100px', '100px']} x={[70, 70]}>
            <Image id="image-5" width={400} src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['100px', '-200px']} x={[-70, -70]}>
            <Image id="image-6" width={400} src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['200px', '-800px']} x={[0, 0]}>
            <Image id="image-7" src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['100px', '100px']} x={[70, 70]}>
            <Image width={400} src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['100px', '-200px']} x={[-70, -70]}>
            <Image width={400} src={GG_BRIDGE}></Image>
          </Parallax>
          <Parallax y={['200px', '0px']} x={[0, 0]}>
            <Image src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['100px', '100px']} x={[70, 70]}>
            <Image width={400} src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['100px', '-200px']} x={[-70, -70]}>
            <Image width={400} src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['200px', '0px']} x={[0, 0]}>
            <Image src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['100px', '100px']} x={[70, 70]}>
            <Image width={400} src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['100px', '-200px']} x={[-70, -70]}>
            <Image width={400} src={GG_BRIDGE}></Image>
          </Parallax>
        </Flex>
      </ParallaxProvider>
    </>
  );
};

export default PlaygroundRoute;
