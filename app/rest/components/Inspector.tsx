import { MotionValue } from 'framer-motion';
import { useState } from 'react';
import { Flex } from './Flex';
import { InlineText, Paragraph } from './Typography/Text';

interface InspectorProps {
  children: React.ReactNode;
  scrollY: MotionValue;
  containerScrollY: MotionValue;
  i: number;
}

export const Inspector = ({
  children,
  scrollY,
  i,
  containerScrollY,
}: InspectorProps) => {
  const [position, setPosition] = useState(0);
  const [containerPosition, setcontainerPosition] = useState(0);

  scrollY.onChange((y) => {
    setPosition(Math.round(100 * y) / 100);
  });

  containerScrollY.onChange((y) => {
    setcontainerPosition(Math.round(100 * y) / 100);
  });

  return (
    <>
      <Paragraph css={{ color: 'red' }}>
        LABEL : <InlineText>image{i}.jpg</InlineText>
      </Paragraph>
      <Paragraph css={{ color: 'red' }}>
        RELATIVE POS : <InlineText>{position}px</InlineText>
      </Paragraph>

      <Paragraph css={{ color: 'red' }}>
        CONTAINER POS : <InlineText>{containerPosition}px</InlineText>
      </Paragraph>

      <Flex layout={'startColumn'} css={{ p: 16, border: '1px solid red' }}>
        <>{children}</>
      </Flex>
    </>
  );
};
