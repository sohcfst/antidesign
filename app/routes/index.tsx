import { timeline } from 'motion';
import { Button } from '~/components/Button';
import { Flex } from '~/components/Flex';
import { NoiseBackground } from '~/components/Noise';
import { systemInit } from '~/pages/index/animations/init.constants';

import { systemReset } from '~/pages/index/animations/reset.constants';

import { HeaderContainer } from '~/pages/index/ContentContainer';

import { ContentContainer, NavContainer } from '~/pages/index/ContentContainer';
import {
  GlobalProvder,
  setIsSystemInitialized,
  useGlobalContext,
} from '~/pages/index/GlobalProvider';

export default function Index() {
  return (
    <GlobalProvder>
      <Flex css={{ py: 40 }} layout={'centerColumn'}>
        <NoiseBackground />
        <HeaderContainer>A N T I D E S I G N</HeaderContainer>
        <ButtonContainer />
        <Flex
          css={{
            width: 1192,
            height: '80vh',
            br: 8,
            z: 1,
            background: 'transparent',
          }}
        >
          <NavContainer />
          <ContentContainer />
        </Flex>
      </Flex>
    </GlobalProvder>
  );
}

export const ButtonContainer = () => {
  const { state, dispatch } = useGlobalContext();

  return (
    <Flex
      id="page-button-container"
      css={{
        position: 'absolute',
        top: 16,
        left: 16,
        gap: 16,
      }}
    >
      <Button
        onClick={() => {
          if (state.isSystemInitialized) {
            dispatch(setIsSystemInitialized({ isSystemInitialized: false }));
            timeline(systemReset);
          } else {
            dispatch(setIsSystemInitialized({ isSystemInitialized: true }));
            timeline(systemInit);
          }
        }}
      >
        {state.isSystemInitialized ? 'SYSTEM.__reset()' : 'SYSTEM.__init()'}
      </Button>
    </Flex>
  );
};
