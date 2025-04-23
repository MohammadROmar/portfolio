import { MotionProps } from 'framer-motion';

type RevealAnimationProps = {
  x?: number;
  y?: number;
  width?: number | string;
  margin?: string;
};

export function revealAnimation({ x, y, width, margin }: RevealAnimationProps) {
  return {
    initial: { x, y, width, opacity: 0 },
    whileInView: {
      x: 0,
      y: 0,
      width: width !== undefined ? 'auto' : undefined,
      opacity: 1,
    },
    viewport: { once: true, margin: margin !== undefined ? margin : '-200px' },
    transition: { duration: 0.5 },
  } satisfies MotionProps;
}
