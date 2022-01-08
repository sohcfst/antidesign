import { Outlet } from 'remix';

import { Section } from '~/rest/components/Section';
import { PlaygroundHeader } from '~/rest/pages/playground/PlaygroundHeader';

export default function PlaygroundRoute() {
  return (
    <Section css={{ flexDirection: 'column', p: 24, alignItems: 'center' }}>
      <PlaygroundHeader />
      <Outlet />
    </Section>
  );
}
