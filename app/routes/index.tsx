import { Section } from '~/rest/components/Section';
import { H1 } from '~/rest/components/Typography/Header';

import { ContentContainer } from '~/rest/pages/index/Content/ContentContainer';
import { HeaderContainer } from '~/rest/pages/index/Content/HeaderContainer';

import { GlobalProvder } from '~/rest/pages/index/GlobalProvider';

const AntidesignHeader = () => (
  <H1
    css={{
      fontSize: 48,
      color: 'black',
      textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white',
      textDecoration: 'line-through',
      cursor: 'pointer',
    }}
  >
    A N T I D E S I G N
  </H1>
);

export default function IndexRoute() {
  return (
    <GlobalProvder>
      <Section css={{ flexDirection: 'column', p: 24 }}>
        <AntidesignHeader />
        <ContentContainer />
      </Section>
    </GlobalProvder>
  );
}
