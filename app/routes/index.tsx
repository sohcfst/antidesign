import { Section } from '~/rest/components/Section';
import { StyledHeader } from '~/rest/components/Typography/Header/Header.styled';

import { ContentContainer } from '~/rest/pages/index/Content/ContentContainer';

export default function IndexRoute() {
  return (
    <Section css={{ flexDirection: 'column', p: 24 }}>
      <StyledHeader>A N T I D E S I G N</StyledHeader>
      <ContentContainer />
    </Section>
  );
}
