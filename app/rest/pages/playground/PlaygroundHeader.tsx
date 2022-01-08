import { H1 } from '~/rest/components/Typography/Header/Header';

export const PlaygroundHeader = () => (
  <H1
    css={{
      fontSize: 48,
      color: 'black',
      textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white',
      textDecoration: 'line-through',
      cursor: 'pointer',
      width: 768,
      textAlign: 'center',
    }}
  >
    P L A Y G R O U N D
  </H1>
);
