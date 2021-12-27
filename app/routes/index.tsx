import { globalStyles, styled } from '~/styles/stitches.config';

const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

export default function Index() {
  globalStyles();

  return (
    <Flex
      css={{
        alignItems: 'center',
        flexDirection: 'column',
      }}
    />
  );
}
