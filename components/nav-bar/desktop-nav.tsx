'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import GridIcon from '@/assets/icons/grid';
import DesktopNavList from './desktop-nav-list';

export default function DesktopNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="bg-background2 absolute top-24 left-12 flex flex-col items-center rounded-full border border-white p-1 max-md:hidden">
      <motion.button
        animate={{
          rotate: isOpen ? 90 : 0,
          transition: { delay: isOpen ? 0 : 0.25 },
        }}
        onClick={() => setIsOpen((prevValue) => !prevValue)}
        className="cursor-pointer rounded-full bg-white p-2"
      >
        <GridIcon className="text-background2 size-5" />
      </motion.button>

      <nav>
        <AnimatePresence>{isOpen && <DesktopNavList />}</AnimatePresence>
      </nav>
    </aside>
  );
}
