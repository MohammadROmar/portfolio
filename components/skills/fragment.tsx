'use client';

import { motion } from 'framer-motion';

export default function AnimatedFragment() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.25 } }}
      viewport={{ once: true, margin: '-100px' }}
      className="text-8xl text-brand1 absolute top-4 lg:top-[7%] right-[15%] lg:right-[30%] max-md:hidden overflow-hidden"
    >
      &lt;/&gt;
    </motion.p>
  );
}
