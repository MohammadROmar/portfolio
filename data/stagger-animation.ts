export function staggerAnimation(duration: number) {
  return {
    variants: {
      hidden: {},
      visible: { transition: { staggerChildren: duration } },
    },
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-100px' },
  };
}
