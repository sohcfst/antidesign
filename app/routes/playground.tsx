import { Outlet } from 'remix';

import { Section } from '~/rest/components/Section';
import { StyledHeader } from '~/rest/components/Typography/Header/Header.styled';

export default function PlaygroundRoute() {
  return (
    <Section css={{ flexDirection: 'column', p: 24, alignItems: 'center' }}>
      <StyledHeader>P L A Y G R O U N D</StyledHeader>
      <Outlet />
    </Section>
  );
}
