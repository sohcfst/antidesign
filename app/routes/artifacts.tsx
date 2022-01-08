import { Outlet } from 'remix';
import { Section } from '~/rest/components/Section';
import { StyledHeader } from '~/rest/components/Typography/Header/Header.styled';

export default function ArtifactsRoute() {
  return (
    <Section css={{ flexDirection: 'column', p: 24, alignItems: 'center' }}>
      <StyledHeader>A R T I F A C T S</StyledHeader>
      <Outlet />
    </Section>
  );
}
