import { Flex } from '~/rest/components/Flex';
import { LinkTray } from '~/rest/components/Sidebar/Sidebar';

export const NavContainer = () => (
  <Flex
    id="page-nav"
    css={{
      border: '1px solid white',
      width: 214,
      br: 8,
      backgroundColor: '$stitchesGrey',
      boxShadow: `1px 2px 2px hsl(220deg 100% 100% / 0.5),
      2px 4px 4px hsl(220deg 100% 100% / 0.5)`,
    }}
  >
    <LinkTray />
  </Flex>
);
