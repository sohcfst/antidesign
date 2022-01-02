import type { MetaFunction } from 'remix';
import { getCssText, globalStyles, styled } from './styles/stitches.config';
import { Head } from './rest/pages/root/Head';
import { AllThatBullShit } from './rest/pages/root/AllThatBullshit';

import { Outlet } from 'remix';

import { NoiseBackground } from '~/rest/components/Noise';
import { ButtonContainer } from '~/rest/pages/index/ButtonContainer';

import { GlobalProvder } from '~/rest/pages/index/GlobalProvider';
import { NavContainer } from './rest/pages/index/Content/NavContainer';
import {
  ContentFlex,
  SidebarFlex,
  SiteFlex,
} from './rest/pages/root/Root.styled';

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

          <SiteFlex role="navigation">
            <SidebarFlex>
              <NavContainer />
            </SidebarFlex>

            <ContentFlex layout={'centerColumn'} role="main">
              <Outlet />
            </ContentFlex>
          </SiteFlex>
        </GlobalProvder>
        <AllThatBullShit />
      </body>
    </html>
  );
}
