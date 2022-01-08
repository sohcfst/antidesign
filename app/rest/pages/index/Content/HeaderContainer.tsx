import { Flex } from '~/rest/components/Flex';
import { H1 } from '~/rest/components/Typography/Header';

interface HeaderContainerProps {
  children: React.ReactNode;
}

export const HeaderContainer = ({ children }: HeaderContainerProps) => (
  <Flex
    id="page-header"
    css={{
      height: 98,
      br: 8,
      padding: 24,
      z: 1,
      width: '100%',
      justifyContent: 'start',
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
