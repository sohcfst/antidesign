import { MotionValue, useTransform } from 'framer-motion';

export const getConfig = (scrollY: MotionValue<number>) => {
  return [
    // as scrollY 0 approaches 1000,
    { y: useTransform(scrollY, [0, 1000], [0, -100]), x: 0 },
    { y: useTransform(scrollY, [200, 100], [0, 1]), x: -200 },
    { y: useTransform(scrollY, [0, 300], [300, -800]), x: 300 },
    { y: useTransform(scrollY, [0, 400], [300, -1000]), x: -250 },
    { y: useTransform(scrollY, [0, 500], [100, -300]), x: 0 },
    { y: useTransform(scrollY, [0, 1100], [100, -1000]), x: 250 },
    { y: useTransform(scrollY, [0, 1200], [100, -1000]), x: -300 },
    { y: useTransform(scrollY, [0, 1300], [100, -1000]), x: 200 },
    { y: useTransform(scrollY, [0, 1400], [100, -1000]), x: -300 },
    { y: useTransform(scrollY, [0, 1500], [100, -1000]), x: 250 },
  ];
};
