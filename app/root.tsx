import type { MetaFunction } from 'remix';
import { getCssText, globalStyles } from './styles/stitches.config';
import { Head } from './rest/pages/root/Head';
import { AllThatBullShit } from './rest/pages/root/AllThatBullshit';

import { Outlet } from 'remix';

import { Flex } from '~/rest/components/Flex';
import { NoiseBackground } from '~/rest/components/Noise';
import { ButtonContainer } from '~/rest/pages/index/ButtonContainer';

import { GlobalProvder } from '~/rest/pages/index/GlobalProvider';
import { NavContainer } from './rest/pages/index/Content/NavContainer';

export const meta: MetaFunction = () => {
  return { title: 'antidesign' };
};

const ThreeNoiseBackground = () => (
  <>
    <NoiseBackground />
    <NoiseBackground />
  </>
);

export default function App() {
  globalStyles();
  return (
    <html lang="en">
      <Head />
      <body>
        <GlobalProvder>
          <ThreeNoiseBackground />
          <Flex css={{ py: 40 }} layout={'centerColumn'}>
            <ButtonContainer />

            <Flex
              css={{
                height: '80vh',
                br: 8,
                z: 1,
                background: 'transparent',
                justifyContent: 'center',
              }}
            >
              <NavContainer />
              <Outlet />
            </Flex>
          </Flex>
        </GlobalProvder>
        <AllThatBullShit />
      </body>
    </html>
  );
}
