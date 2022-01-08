import { Section } from '~/rest/components/Section';
import { AntidesignHeader } from '~/rest/pages/index/AntidesignHeader';

import { ContentContainer } from '~/rest/pages/index/Content/ContentContainer';

export default function IndexRoute() {
  return (
    <Section css={{ flexDirection: 'column', p: 24 }}>
      <AntidesignHeader />
      <ContentContainer />
    </Section>
  );
}
