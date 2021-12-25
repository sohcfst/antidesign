import { globalStyles, styled } from '~/styles/stitches.config';

const Flex = styled('div', {
  display: 'flex',
});

export default function Index() {
  globalStyles();
  return (
    <Flex
      css={{
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>truly have no clue what this is for yet lol</h1>
      <h2>or do i ?</h2>
    </Flex>
  );
}
