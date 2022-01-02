import { timeline } from 'motion';
import { Button } from '~/rest/components/Button';
import { Flex } from '~/rest/components/Flex';
import { systemInit } from './animations/init.constants';
import { systemReset } from './animations/reset.constants';
import { setIsSystemInitialized, useGlobalContext } from './GlobalProvider';

export const ButtonContainer = () => {
  const { state, dispatch } = useGlobalContext();

  return (
    <Flex
      id="page-button-container"
      css={{
        position: 'absolute',
        top: 16,
        left: 40,
        gap: 16,
      }}
    >
      <Button
        active={'show'}
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
