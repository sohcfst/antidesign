import { createContext, useState } from 'react';
import { Flex } from '~/components/Flex';
import { LinkTray } from '~/components/Sidebar/Sidebar';
import { H1 } from '~/components/Typography/Header';
import { Paragraph } from '~/components/Typography/Text';
import { styled } from '~/styles/stitches.config';
import { artifacts } from './artifacts.constants';
import { onMouseEnter, onMouseLeave, useCardContext } from './CardProvider';

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

export const Button = styled('button', {
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
  fontWeight: 'bold',

  '&:active': {
    transform: 'scale(0.98)',
  },
});

export const NavContainer = () => (
  <Flex
    css={{
      // position: 'fixed',
      width: 264,
      height: '100%',
      border: '1px solid white',
      br: 8,
      boxShadow: `1px 2px 2px hsl(220deg 100% 100% / 0.5),
            2px 4px 4px hsl(220deg 100% 100% / 0.5)`,
      background: '$stitchesGrey',
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
});
export const ContentContainer = () => {
  return (
    <Flex
      layout="centerColumn"
      css={{
        height: '100%',

        br: 8,
        width: '100%',
        px: 24,
        fontWeight: 'bold',
        gap: 24,
        background: 'transparent',
        '&:hover .card': {
          opacity: 0.5,
        },
        '.card:hover': {
          opacity: 1,
        },
      }}
    >
      {artifacts.slice(0, 5).map((lol, i) => {
        const id = `fuckshit-${i}`;
        return (
          <Card className="card">
            <Paragraph css={{ fontSize: 24 }}>{lol.title}</Paragraph>
            <Paragraph css={{ fontFamily: 'jetbrains mono' }}>
              {lol.date}
            </Paragraph>
          </Card>
        );
      })}
    </Flex>
  );
};
