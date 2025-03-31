'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import GridIcon from '@/assets/icons/grid';
import DesktopNavList from './desktop-nav-list';

export default function DesktopNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="absolute left-12 top-24 flex flex-col items-center rounded-full p-1 bg-background2 border-[1px] border-white max-md:hidden">
      <motion.button
        animate={{
          rotate: isOpen ? 90 : 0,
          transition: { delay: isOpen ? 0 : 0.25 },
        }}
        onClick={() => setIsOpen((prevValue) => !prevValue)}
        className="p-2 rounded-full bg-white cursor-pointer"
      >
        <GridIcon className="w-5 h-5 text-background2" />
      </motion.button>

      <nav>
        <AnimatePresence>{isOpen && <DesktopNavList />}</AnimatePresence>
      </nav>
    </aside>
  );
}
