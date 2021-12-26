import { purple, sky } from '@radix-ui/colors';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Flex } from '~/components/Flex';
import { styled, keyframes } from '~/styles/stitches.config';
import { GG_BRIDGE } from './system/components/memory-scroller';

const Image = styled('img', {
  maxWidth: 400,
  borderRadius: 4,
  boxShadow: `  0 1px 1px hsl(0deg 0% 0% / 0.075),
  0 2px 2px hsl(0deg 0% 0% / 0.075),
  0 4px 4px hsl(0deg 0% 0% / 0.075),
  0 8px 8px hsl(0deg 0% 0% / 0.075),
  0 16px 16px hsl(0deg 0% 0% / 0.075)`,
  zIndex: -1,
  position: 'relative',
});

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
  { y: ['400px', '0px'], x: ['0px', '0px'] },
  { y: ['100px', '100px'], x: ['330px', '330px'] },
  { y: ['400px', '0px'], x: ['-200px', '-200px'] },
  { y: ['100px', '100px'], x: ['330px', '330px'] },
  { y: ['400px', '0px'], x: ['-200px', '-200px'] },
  { y: ['100px', '100px'], x: ['330px', '330px'] },
  { y: ['400px', '0px'], x: ['-200px', '-200px'] },
  { y: ['100px', '100px'], x: ['330px', '330px'] },
  { y: ['400px', '0px'], x: ['-200px', '-200px'] },
  { y: ['100px', '100px'], x: ['330px', '330px'] },
  { y: ['400px', '0px'], x: ['-200px', '-200px'] },
  { y: ['100px', '100px'], x: ['330px', '330px'] },
  { y: ['400px', '0px'], x: ['-200px', '-200px'] },
  { y: ['100px', '100px'], x: ['330px', '330px'] },
  { y: ['400px', '0px'], x: ['-200px', '-200px'] },
  { y: ['100px', '100px'], x: ['330px', '330px'] },
  { y: ['400px', '0px'], x: ['-200px', '-200px'] },
  { y: ['100px', '100px'], x: ['330px', '330px'] },
  { y: ['400px', '0px'], x: ['-200px', '-200px'] },
  { y: ['100px', '100px'], x: ['330px', '330px'] },
];

const noiseAnimation = keyframes({
  '0%': { transform: 'translate(0, 0)' },
  '10%': { transform: 'translate(-5%, -5%)' },
  '20%': { transform: 'translate(-10%, 5%)' },
  '30%': { transform: 'translate(5%, -10%)' },
  '40%': { transform: 'translate(-5%, 15%)' },
  '50%': { transform: 'translate(-10%,5%)' },
  '60%': { transform: 'translate(15%,0)' },
  '70%': { transform: 'translate(0,10%)' },
  '80%': { transform: 'translate(-15%,0)' },
  '90%': { transform: 'translate(10%, 5%)' },
  '100%': { transform: 'translate(5%, 0)' },
});

export const NoiseBackground = styled('div', {
  position: 'fixed',
  top: '-50%',
  left: '-50%',
  right: '-50%',
  bottom: '-50%',
  width: '200%',
  height: '200vh',
  background:
    "transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0",
  backgroundRepeat: 'repeat',
  animation: `${noiseAnimation} 1s infinite`,
  opacity: '0.7',
  color: 'red',
  zIndex: 0,
});

const string = `${sky.sky5}, white, ${purple.purple5}`;

const PlaygroundRoute = () => {
  return (
    <>
      <ParallaxProvider>
        {/* <StickyHeader /> */}

        <Flex
          layout={'centerColumn'}
          css={{
            height: 'fit-content',
            width: '100%',
            background: `linear-gradient(165deg, ${string}, ${string}, ${string})`,
            // background: 'white',
            zIndex: 0,
            backgroundBlendMode: 'screen',
          }}
        >
          {parallaxConfig.map((config, i) => {
            return (
              <Parallax x={config.x} y={config.y}>
                <Image id={`parallax-image-${i}`} width={400} src={GG_BRIDGE} />
              </Parallax>
            );
          })}
          <NoiseBackground />

          {/* <Parallax y={['100px', '100px']} x={[70, 70]}>
            <Image width={400} src={GG_BRIDGE}></Image>
          </Parallax> */}

          {/* <Parallax y={['100px', '-200px']} x={['-300px', '-300px']}>
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
          </Parallax> */}
        </Flex>
      </ParallaxProvider>
    </>
  );
};

export default PlaygroundRoute;
