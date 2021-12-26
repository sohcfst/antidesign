import { purple, sky } from '@radix-ui/colors';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Flex } from '~/components/Flex';
import { NoiseBackground } from '~/components/Noise';
import { styled } from '~/styles/stitches.config';
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
  cursor: 'pointer',
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
  { y: ['400px', '0px'], x: ['-350px', '-350px'] }, // 1
  { y: ['0px', '0px'], x: ['300px', '300px'] }, // 2
  { y: ['200px', '0px'], x: ['-200px', '-200px'] }, // 3
  { y: ['100px', '100px'], x: ['400px', '400px'] }, // 4
  { y: ['400px', '200px'], x: ['50px', '50px'] }, // 5
  { y: ['100px', '-800px'], x: ['-400px', '-400px'] }, // 6
  { y: ['0px', '0px'], x: ['-300px', '-300px'] }, // 7
  { y: ['100px', '-800px'], x: ['400px', '400px'] }, // 8
  { y: ['100px', '-300px'], x: ['230px', '230px'] }, // 9
  { y: ['150px', '-500px'], x: ['-400px', '-400px'] }, // 10
  { y: ['0px', '0px'], x: ['-200px', '-200px'] }, // 11
  { y: ['100px', '-800px'], x: ['330px', '330px'] }, // 12
  { y: ['100px', '-500px'], x: ['-300px', '-300px'] }, // 13
  { y: ['400px', '0px'], x: ['-350px', '-350px'] }, // 1
  { y: ['0px', '0px'], x: ['300px', '300px'] }, // 2
  { y: ['200px', '0px'], x: ['-200px', '-200px'] }, // 3
  { y: ['100px', '100px'], x: ['400px', '400px'] }, // 4
  { y: ['400px', '200px'], x: ['50px', '50px'] }, // 5
  { y: ['100px', '-800px'], x: ['-400px', '-400px'] }, // 6
  { y: ['0px', '0px'], x: ['-300px', '-300px'] }, // 7
  { y: ['100px', '-800px'], x: ['400px', '400px'] }, // 8
  { y: ['100px', '-300px'], x: ['230px', '230px'] }, // 9
  { y: ['150px', '-500px'], x: ['-400px', '-400px'] }, // 10
  { y: ['0px', '0px'], x: ['-200px', '-200px'] }, // 11
  { y: ['100px', '-800px'], x: ['330px', '330px'] }, // 12
  { y: ['100px', '-500px'], x: ['-300px', '-300px'] }, // 13
];

const string = `${sky.sky5}, white, ${purple.purple5}`;

const PlaygroundRoute = () => {
  return (
    <>
      <ParallaxProvider>
        {/* <StickyHeader /> */}

        <Flex
          layout={'centerColumn'}
          css={{
            height: 10000,
            width: '100%',
            background: `linear-gradient(165deg, ${string}, ${string}, ${string}, ${string}, ${string})`,
            // background: 'white',
            zIndex: 0,
            backgroundBlendMode: 'screen',
            position: 'relative',
          }}
        >
          <NoiseBackground />
          {parallaxConfig.map((config, i) => {
            return (
              <Parallax x={config.x} y={config.y}>
                <Image
                  id={`parallax-image-${i + 1}`}
                  width={400}
                  src={GG_BRIDGE}
                />
              </Parallax>
            );
          })}
        </Flex>
      </ParallaxProvider>
    </>
  );
};

export default PlaygroundRoute;
