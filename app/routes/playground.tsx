import { grayA, purple, sky } from '@radix-ui/colors';
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

const StickyHeader = styled('div', {});

interface ParallaxProps {
  x: string[];
  y: string[];
}

{
  /* x offset is based on the main axis */
}
{
  /* pass in the same value twice for a static offset */
}
const parallaxConfig: ParallaxProps[] = [
  // { y: ['400px', '0px'], x: ['0px', '0px'] },
  // { y: ['100px', '100px'], x: ['330px', '330px'] },
];

const PlaygroundRoute = () => {
  return (
    <>
      <ParallaxProvider>
        <StickyHeader />

        <Flex
          layout={'centerColumn'}
          css={{
            height: '4000px',
            width: '100%',
            background: `linear-gradient(165deg, ${sky.sky5}, white, ${purple.purple5})`,
            zIndex: 100,
          }}
        >
          {parallaxConfig.map((config, i) => {
            <Parallax {...config}>
              <Image id={`parallax-image-${i}`} src={GG_BRIDGE}></Image>
            </Parallax>;
          })}

          <Parallax y={['100px', '-200px']} x={['-300px', '-300px']}>
            <Image id="image-3" width={400} src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['200px', '-400px']} x={['150px', '150px']}>
            <Image id="image-4" src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['300px', '300px']} x={['400px', '400px']}>
            <Image id="image-5" width={400} src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['100px', '-900px']} x={[-70, -70]}>
            <Image id="image-6" width={400} src={GG_BRIDGE}></Image>
          </Parallax>

          <Parallax y={['200px', '-800px']} x={['-200px', '-200px']}>
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
