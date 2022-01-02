import { Flex } from '~/rest/components/Flex';
import { LinkTray } from '~/rest/components/Sidebar/Sidebar';

interface NavContainerProps {
  title: string;
}

export const NavContainer = ({ title }: NavContainerProps) => (
  <Flex
    css={{
      border: '1px solid white',
      width: 'fit-content',
      br: 8,
      backgroundColor: '$stitchesGrey',
      boxShadow: `1px 2px 2px hsl(220deg 100% 100% / 0.5),
      2px 4px 4px hsl(220deg 100% 100% / 0.5)`,
    }}
  >
    <LinkTray title={title} />
  </Flex>
);
