import { Flex } from '~/rest/components/Flex';
import { H1 } from '~/rest/components/Typography/Header';
import { styled } from '~/styles/stitches.config';

interface HeaderContainerProps {
  children: React.ReactNode;
}

export const HeaderContainer = ({ children }: HeaderContainerProps) => (
  <Flex
    id="page-header"
    css={{
      height: 98,
      br: 8,
      padding: 16,
      z: 1,
      width: '100%',
      justifyContent: 'center',
      background: 'transparent',
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

export const Card = styled(Flex, {
  height: 270,
  background: '$stitchesGrey',
  border: '1px solid white',
  br: 8,
  width: '864px',
  padding: 24,
  flexDirection: 'column',
  boxShadow: `1px 2px 2px hsl(220deg 100% 100% / 0.5),
    2px 4px 4px hsl(220deg 100% 100% / 0.5)`,
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.005)',
    transition: 'all .2s cubic-bezier(0.1, 0.7, 1.0, 0.1)',
    '&:active': {
      transform: 'scale(0.995)',
    },
  },
  justifyContent: 'space-between',

  variants: {
    display: {
      preview: {
        color: '$whiteA9',
        border: `1px solid $whiteA9`,
        opacity: 0.5,
      },
    },
  },
});

export const StyledContentContainer = styled(Flex, {
  height: '100%',
  opacity: 1,
  br: 8,

  px: 24,
  fontWeight: 'bold',
  gap: 24,
  background: 'transparent',

  '.card': {
    transition:
      'opacity 400ms ease-in-out, background-color 1000ms ease-in-out',
  },

  '&:hover .card': {
    transition: 'opacity 400ms ease-out',
    opacity: 0.3,
  },

  '.card:hover': {
    transition: 'opacity ease-out',
    opacity: 1,
  },
});
