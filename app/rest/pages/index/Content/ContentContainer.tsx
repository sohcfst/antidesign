import { timeline } from 'motion';
import { TimelineDefinition } from 'motion/types/targets/dom/timeline/types';
import { useEffect, useState } from 'react';
import { Flex } from '~/rest/components/Flex';
import { StyledPill } from '~/rest/components/Pills';

import { Paragraph } from '~/rest/components/Typography/Text';

import { sequence1, sequence2 } from '../animations/slideSequence';

import { artifacts } from '../artifacts.constants';
import { setArtifact, useGlobalContext } from '../GlobalProvider';
import { Card, StyledContentContainer } from './StyledContentContainer';

export const ContentContainer = () => {
  const { state, dispatch } = useGlobalContext();

  const [systemEngaged, setSystemEngaged] = useState(false);

  const onCardClick = (id: string) => {
    dispatch(setArtifact({ currentArtifact: id }));

    if (systemEngaged) {
      setSystemEngaged(false);
      timeline(sequence1 as TimelineDefinition, {});
    } else {
      timeline(sequence2 as TimelineDefinition);
      setSystemEngaged(true);
    }
  };

  useEffect(() => {}, [state.currentArtifact]);

  return (
    <StyledContentContainer layout={'centerColumn'}>
      {artifacts.map((artifact, i) => {
        const id = `fuckshit-${i}`;

        return (
          <Card
            id={id}
            className="card"
            key={id}
            onClick={() => onCardClick(id)}
            display={artifact.isPreviewMode && 'preview'}
          >
            <Flex layout={'startColumn'}>
              <Paragraph css={{ fontSize: 18 }}>{artifact.title}</Paragraph>
              <Paragraph css={{ fontFamily: 'jetbrains mono', fontSize: 14 }}>
                published: {artifact.date}
              </Paragraph>

              {artifact.isPreviewMode && (
                <Paragraph css={{ fontWeight: 'normal', py: 16 }}>
                  {'- .. ['} research in progress {'] .. -'}
                </Paragraph>
              )}
            </Flex>

            <Flex layout={'rowStart'} spacing={'space8'}>
              {artifact.labels.map((label) => {
                return (
                  <StyledPill key={id + label} pillType={label}>
                    {label}
                  </StyledPill>
                );
              })}
            </Flex>
          </Card>
        );
      })}
    </StyledContentContainer>
  );
};
