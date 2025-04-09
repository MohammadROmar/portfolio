'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import MailIcon from '@/assets/icons/mail';

export default function LetsTalk() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -15 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ delay: 3.25 }}
      className="origin-left"
    >
      <Link
        href="/#contact"
        prefetch={false}
        className="w-fit ml-4 flex items-center gap-4"
      >
        <p className="text-3xl text-brand1">Let's Talk</p>
        <div className="rounded-full bg-gray-700 p-2">
          <MailIcon className="size-5 text-brand1" />
        </div>
      </Link>
    </motion.div>
  );
}
