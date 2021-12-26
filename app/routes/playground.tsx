import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Flex } from '~/components/Flex';
import { styled } from '~/styles/stitches.config';
import { GG_BRIDGE } from './system/components/memory-scroller';

const Image = styled('img', {
  position: 'absolute',
});

const PlaygroundRoute = () => {
  return (
    <>
      <ParallaxProvider>
        <Flex
          // layout={'centerColumn'}
          css={{ height: 3000 }}
          position={'relative'}
        >
          <Parallax y={[0, 0]} x={[0, 0]}>
            <Image width={400} src={GG_BRIDGE}></Image>
          </Parallax>
          {/* <Parallax y={[400, 20]}>
            <Image width={400} src={GG_BRIDGE}></Image>
          </Parallax>
          <Parallax y={[-60, 20]}>
            <Image width={400} src={GG_BRIDGE}></Image>
          </Parallax> */}
          {/* <Parallax y={[-80, 20]}>
          <img width={400} src={GG_BRIDGE}></img>
        </Parallax>
        <Parallax y={[-100, 20]}>
          <img width={400} src={GG_BRIDGE}></img>
        </Parallax>
        <Parallax y={[-100, 20]}>
          <img width={400} src={GG_BRIDGE}></img>
        </Parallax>
        <Parallax y={[-140, 20]}>
          <img width={400} src={GG_BRIDGE}></img>
        </Parallax> */}
          <Parallax y={[1000, 20]}>
            <Image width={400} src={GG_BRIDGE}></Image>
          </Parallax>
        </Flex>
      </ParallaxProvider>
    </>
  );
};

export default PlaygroundRoute;
