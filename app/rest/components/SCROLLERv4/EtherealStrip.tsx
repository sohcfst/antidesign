import { blackA, purple, sky } from '@radix-ui/colors';
import { Flex } from '../Flex';

const gradientString = `${sky.sky5}, white, ${purple.purple5}`;

export const EtherealStrip = () => (
  <Flex
    css={{
      py: 500,
      width: 440,
      height: 5000,
      position: 'absolute',
      br: 8,
      background: `linear-gradient(175deg, ${gradientString}, ${gradientString}, ${gradientString})`,
      z: -1,
      // background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
      backgroundSize: '400% 400%',
      animation: 'gradient 10s ease infinite',
      boxShadow: `0 2px 10px ${blackA.blackA7}`,
    }}
  />
);
