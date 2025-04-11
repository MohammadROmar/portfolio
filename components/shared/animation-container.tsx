'use client';

import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { motion, type MotionProps } from 'framer-motion';

type AnimationContainerProps = MotionProps &
  PropsWithChildren &
  ComponentPropsWithoutRef<'div'>;

function AnimationContainer({ children, ...props }: AnimationContainerProps) {
  return <motion.div {...props}>{children}</motion.div>;
}

export default AnimationContainer;
