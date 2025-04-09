import Link from 'next/link';
import { motion } from 'framer-motion';

import { navigationLinks } from '@/data/nav-links';

export default function DesktopNavList() {
  return (
    <motion.ul
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0, transition: { delay: 0.25 } }}
      className="flex flex-col items-center"
    >
      {navigationLinks.map(({ label, to, icon: Icon }) => (
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.25 } }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          key={label}
          className="py-3"
        >
          <Link href={to} prefetch={false}>
            <Icon className="size-5" />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
