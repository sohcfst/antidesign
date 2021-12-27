import { Flex } from '~/components/Flex';
import { NoiseBackground } from '~/components/Noise';
import { LinkTray } from '~/components/Sidebar/Sidebar';
import { H1 } from '~/components/Typography/Header';
import { Paragraph } from '~/components/Typography/Text';
import { globalStyles } from '~/styles/stitches.config';

export default function Index() {
  globalStyles();
  const lol = [
    { title: 'ARTIFACT_0001', date: 'AUGUST 8, 1906' },
    { title: 'ARTIFACT_0023', date: 'AUGUST 8, 1906' },
    { title: 'ARTIFACT_0112', date: 'AUGUST 8, 1906' },
    { title: 'ARTIFACT_0014', date: 'AUGUST 8, 1906' },
  ];

  return (
    <Flex css={{ py: 40 }} layout={'centerColumn'}>
      <NoiseBackground />
      <Flex
        layout={'centerColumn'}
        css={{
          width: 1192,
          height: 98,
          br: 8,
          padding: 16,
          z: 1,
        }}
      >
        <H1
          css={{
            fontSize: 48,
            color: 'black',
            textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white',
            textDecoration: 'line-through',
            cursor: 'pointer',
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
            boxShadow: `0 1px 1px hsl(0deg 100% 100% / 0.075),
            0 2px 2px hsl(0deg 100% 100% / 0.075),
            0 4px 4px hsl(0deg 100% 100% / 0.075),
            0 8px 8px hsl(0deg 100% 100% / 0.075),
            0 16px 16px hsl(0deg 100% 100% / 0.075)`,
          }}
        >
          <LinkTray />
        </Flex>
        <Flex
          layout="centerColumn"
          css={{
            height: '100%',

            br: 8,
            width: '100%',
            px: 24,
            fontWeight: 'bold',
            gap: 16,
          }}
        >
          {lol.map((lol) => {
            return (
              <Flex
                css={{
                  height: '100%',
                  border: '1px solid white',
                  br: 8,
                  width: '100%',
                  padding: 24,
                  flexDirection: 'column',
                }}
              >
                <Paragraph css={{ fontSize: 24 }}>{lol.title}</Paragraph>
                <Paragraph>{lol.date}</Paragraph>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
