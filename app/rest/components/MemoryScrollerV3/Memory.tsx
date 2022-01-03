import { motion, MotionValue } from 'framer-motion';

interface MemoryProps {
  x?: MotionValue | number;
  y?: MotionValue | number;
  children: React.ReactNode;
}

export const Memory = ({ children, y, x }: MemoryProps) => {
  return (
    <motion.div
      style={{
        x,
        y,
      }}
    >
      {children}
    </motion.div>
  );
};
