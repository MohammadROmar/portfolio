'use client';

import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { motion, type MotionProps } from 'framer-motion';

type AnimationWrapperProps = PropsWithChildren &
  MotionProps &
  ComponentPropsWithoutRef<'div'>;

function AnimationContainer({ children, ...props }: AnimationWrapperProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} {...props}>
      {children}
    </motion.div>
  );
}

export default AnimationContainer;
