import { Flex } from '~/rest/components/Flex';
import { LinkTray } from '~/rest/components/Sidebar/Sidebar';

export const NavContainer = () => (
  <Flex
    id="page-nav"
    css={{
      backgroundColor: '$stitchesGrey',
      width: 214,
      border: '1px solid white',
      br: 8,
      boxShadow: `1px 2px 2px hsl(220deg 100% 100% / 0.5),
            2px 4px 4px hsl(220deg 100% 100% / 0.5)`,
      background: '$stitchesGrey',
      height: '950px',
      flex: '950px',
      alignSelf: 'end',
      position: 'fixed',
      left: 24,
      top: 132,
    }}
  >
    <LinkTray />
  </Flex>
);
