import type { MetaFunction } from 'remix';
import { getCssText, globalStyles, styled } from './styles/stitches.config';
import { Head } from './rest/pages/root/Head';
import { AllThatBullShit } from './rest/pages/root/AllThatBullshit';

import { Outlet } from 'remix';

import { NoiseBackground } from '~/rest/components/Noise';
import { ButtonContainer } from '~/rest/pages/index/ButtonContainer';

import { GlobalProvder } from '~/rest/pages/index/GlobalProvider';
import { NavContainer } from './rest/pages/index/Content/NavContainer';
import { SidebarFlex, Root } from './rest/pages/root/Root.styled';
import { Flex } from './rest/components/Flex';

import { Main } from './rest/components/Main';

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
          <ButtonContainer />

          <Root id="root">
            <Flex
              css={{
                flexGrow: 1,
                position: 'sticky',
                top: 176,
                alignSelf: 'flex-start',
              }}
            >
              <SidebarFlex id="pathselector-nav">
                <NavContainer title={'P A T H S E L E C T O R'} />
              </SidebarFlex>
            </Flex>

            <Main>
              <Outlet />
            </Main>
          </Root>
        </GlobalProvder>
        <AllThatBullShit />
      </body>
    </html>
  );
}
