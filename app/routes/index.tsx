import { Flex } from '~/components/Flex';
import { NoiseBackground } from '~/components/Noise';
import { LinkTray } from '~/components/Sidebar/Sidebar';
import { H1 } from '~/components/Typography/Header';
import { globalStyles } from '~/styles/stitches.config';

export default function Index() {
  globalStyles();

  return (
    <Flex css={{ py: 40 }} layout={'centerColumn'}>
      <NoiseBackground />
      <Flex
        layout={'centerColumn'}
        css={{
          border: '1px solid white',
          width: 1192,
          height: 98,
          br: 8,
          padding: 16,
          z: 1,
          background: '$stitchesGrey',
        }}
      >
        <H1
          css={{
            fontSize: 48,
            color: 'black',
            textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white',
          }}
        >
          ANTIDESIGN
        </H1>
      </Flex>

      <Flex
        css={{
          width: 1192,
          height: '80vh',
          br: 8,
          z: 1,
          background: '$stitchesGrey',
        }}
      >
        <Flex
          css={{
            width: 200,
            height: '100%',
            border: '1px solid white',
            br: 8,
          }}
        >
          <LinkTray></LinkTray>
        </Flex>
        <Flex
          css={{
            height: '100%',
            border: '1px solid white',
            br: 8,
            width: '100%',
            padding: 16,
          }}
        >
          i be wearing carhartt with no works in progress
        </Flex>
      </Flex>
    </Flex>
  );
}
