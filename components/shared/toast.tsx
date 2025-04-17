'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import XMark from '@/assets/icons/x-mark';
import CkeckMark from '@/assets/icons/ckeck-mark';

type ToastProps = { title: string; text: string; error?: boolean };

export default function Toast({ title, text, error }: ToastProps) {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timeout = setTimeout(() => setVisible(false), 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 75, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 75, opacity: 0 }}
          className={`fixed z-50 bottom-8 right-8 max-md:left-8 flex items-center gap-4 w-full max-w-md rounded-xl px-2 py-1 text-background1 border-2 ${
            error
              ? 'border-fail bg-fail-light'
              : 'border-success bg-success-light'
          }`}
        >
          {error ? (
            <XMark className="size-5 box-content p-2 bg-fail text-fail-light rounded-full" />
          ) : (
            <CkeckMark className="size-5 box-content p-2 bg-success text-success-light rounded-full" />
          )}

          <div>
            <h4 className="text-xl leading-tight">{title}</h4>
            <p className="opacity-60 leading-tight">{text}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('toasts')!
  );
}
