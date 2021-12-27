import { Flex } from '~/components/Flex';
import { NoiseBackground } from '~/components/Noise';
import { LinkTray } from '~/components/Sidebar/Sidebar';
import { H1 } from '~/components/Typography/Header';
import { Paragraph } from '~/components/Typography/Text';
import { globalStyles, styled } from '~/styles/stitches.config';

export default function Index() {
  globalStyles();
  const lol = [
    { title: 'ARTIFACT_0001 : css strategies', date: 'AUGUST 8, 1906' },
    {
      title: 'ARTIFACT_0023 : multistep flow architecture',
      date: 'AUGUST 8, 1906',
    },
    {
      title: 'ARTIFACT_0112 : state management in react',
      date: 'AUGUST 8, 1906',
    },
    { title: 'ARTIFACT_0014: site inspirations', date: 'AUGUST 8, 1906' },
  ];

  const Button = styled('button', {
    px: 16,
    py: 8,
    unset: 'all',
    inset: 'none',
    background: '$stitchesGrey',
    borderRadius: 4,
    border: '1px solid white',
    width: 'fit-content',
    cursor: 'pointer',
    boxShadow: `0.5px 1px 1px hsl(220deg 100% 100% / 0.5),
    1px 2px 2px hsl(220deg 100% 100% / 0.5)`,

    '&:active': {
      transform: 'scale(0.98)',
    },
  });

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
            boxShadow: `1px 2px 2px hsl(220deg 100% 100% / 0.5),
            2px 4px 4px hsl(220deg 100% 100% / 0.5)`,
          }}
        >
          <LinkTray />
          {/* <Button>SYSTEM.init()</Button> */}
        </Flex>
        <Flex
          layout="centerColumn"
          css={{
            height: '100%',

            br: 8,
            width: '100%',
            px: 24,
            fontWeight: 'bold',
            gap: 24,
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
                  boxShadow: `1px 2px 2px hsl(220deg 100% 100% / 0.5),
                  2px 4px 4px hsl(220deg 100% 100% / 0.5)`,
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.005)',
                    transition: 'all .05s cubic-bezier(0.1, 0.7, 1.0, 0.1)',
                    '&:active': {
                      transform: 'scale(0.995)',
                    },
                  },
                }}
              >
                <Paragraph css={{ fontSize: 24 }}>{lol.title}</Paragraph>
                <Paragraph>{lol.date}</Paragraph>
                <Button>SYSTEM.__init()</Button>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
