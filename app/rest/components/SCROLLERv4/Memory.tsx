import { useState, useRef, useLayoutEffect, ReactNode } from 'react';
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

type ParallaxProps = {
  children: ReactNode;
  offset?: number;
  x?: number;
  clampInitial?: boolean;
  clampFinal?: boolean;
};

const MemoryV2 = ({
  children,
  offset = 50,
  x = 100,
  clampInitial,
  clampFinal,
}: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useViewportScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  console.log({ initial, final });

  const yRange = useTransform(
    scrollY,
    [initial, final],
    [clampInitial ? 0 : offset, clampFinal ? 0 : -offset * 2]
  );
  const y = useSpring(yRange, { stiffness: 1000, damping: 70 });

  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [ref]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div ref={ref} style={{ x, y }}>
      {children}
    </motion.div>
  );
};

export { MemoryV2 };
