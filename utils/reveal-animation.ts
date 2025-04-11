import { MotionProps } from 'framer-motion';

type RevealAnimationProps = { x?: number; y?: number };

export function revealAnimation({ x, y }: RevealAnimationProps) {
  return {
    initial: { x, y, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { once: true, margin: '-250px' },
    transition: { duration: 0.5 },
  } satisfies MotionProps;
}
