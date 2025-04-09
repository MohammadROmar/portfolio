'use client';

import { motion } from 'framer-motion';

export default function AnimatedText({ text }: { text: string }) {
  return (
    <>
      {text.split('').map((letter, i) => (
        <span key={`${letter} ${i}`} className="relative">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0, delay: 0.026 * i }}
          >
            {letter}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.125,
              delay: 0.025 * i,
              times: [0, 0.1, 1],
              ease: 'easeInOut',
            }}
            className="absolute top-[3px] right-0 bottom-[3px] left-[1px] bg-brand1"
          />
        </span>
      ))}
    </>
  );
}
