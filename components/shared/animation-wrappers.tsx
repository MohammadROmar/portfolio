'use client';

import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { motion, MotionProps } from 'framer-motion';

import { staggerAnimation } from '@/data/stagger-animation';

type AnimatedListProps = PropsWithChildren &
  MotionProps &
  ComponentPropsWithoutRef<'ul'>;

type AnimatedListItemProps = MotionProps &
  PropsWithChildren &
  ComponentPropsWithoutRef<'li'>;

function AnimatedList({ children, ...props }: AnimatedListProps) {
  return (
    <motion.ul {...staggerAnimation(0.2)} {...props}>
      {children}
    </motion.ul>
  );
}

function AnimatedListItem({ children, ...props }: AnimatedListItemProps) {
  return <motion.li {...props}>{children}</motion.li>;
}

export { AnimatedList, AnimatedListItem };
