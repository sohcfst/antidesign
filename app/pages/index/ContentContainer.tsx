import { Flex } from '~/components/Flex';
import { StyledPill } from '~/components/Pills';
import { LinkTray } from '~/components/Sidebar/Sidebar';
import { H1 } from '~/components/Typography/Header';
import { Paragraph } from '~/components/Typography/Text';
import { styled } from '~/styles/stitches.config';
import { artifacts } from './artifacts.constants';

interface HeaderContainerProps {
  children: React.ReactNode;
}

export const HeaderContainer = ({ children }: HeaderContainerProps) => (
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
      {children}
    </H1>
  </Flex>
);

export const NavContainer = () => (
  <Flex
    css={{
      width: 264,
      border: '1px solid white',
      br: 8,
      boxShadow: `1px 2px 2px hsl(220deg 100% 100% / 0.5),
            2px 4px 4px hsl(220deg 100% 100% / 0.5)`,
      background: '$stitchesGrey',
      height: '100%',
    }}
  >
    <LinkTray />
  </Flex>
);

interface CardProps {
  children: React.ReactNode;
}

const Card = styled(Flex, {
  background: '$stitchesGrey',
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
  justifyContent: 'space-between',
});

export const ContentContainer = () => {
  return (
    <Flex
      layout="centerColumn"
      css={{
        height: '100%',
        opacity: 1,
        br: 8,
        width: '100%',
        px: 24,
        fontWeight: 'bold',
        gap: 24,
        background: 'transparent',

        '.card': {
          transition: 'opacity 400ms ease-in-out',
        },

        '&:hover .card': {
          transition: 'opacity 400ms ease-out',
          opacity: 0.3,
        },

        '.card:hover': {
          transition: 'opacity ease-out',
          opacity: 1,
        },
      }}
    >
      {artifacts.slice(0, 5).map((artifact, i) => {
        const id = `fuckshit-${i}`;

        return (
          <Card className="card" key={id}>
            <Flex layout={'startColumn'}>
              <Paragraph css={{ fontSize: 24 }}>{artifact.title}</Paragraph>
              <Paragraph css={{ fontFamily: 'jetbrains mono' }}>
                {artifact.date}
              </Paragraph>
            </Flex>

            <Flex layout={'rowStart'} spacing={'space8'}>
              {artifact.labels.map((label) => {
                return (
                  <StyledPill key={id} pillType={label}>
                    {label}
                  </StyledPill>
                );
              })}
            </Flex>
          </Card>
        );
      })}
    </Flex>
  );
};
