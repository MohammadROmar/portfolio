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
        </span>
      ))}
    </>
  );
}
