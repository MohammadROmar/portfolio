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
          aria-live="polite"
          className={`max-w-sm px-2 py-1 flex justify-between items-center gap-4 fixed right-4 bottom-4 left-4 z-50 rounded-xl border-2 ${
            error
              ? 'border-danger bg-danger-light'
              : 'border-success bg-success-light'
          }`}
        >
          <div className="flex items-center gap-4">
            {error ? (
              <XMark className="size-5 box-content p-2 bg-danger text-danger-light rounded-full" />
            ) : (
              <CkeckMark className="size-5 box-content p-2 bg-success text-success-light rounded-full" />
            )}

            <div>
              <h4
                className={`text-lg leading-tight ${
                  error ? 'text-danger' : 'text-success'
                }`}
              >
                {title}
              </h4>
              <p className="text-background1/60 leading-tight">{text}</p>
            </div>
          </div>

          <button
            onClick={() => setVisible(false)}
            className="text-background1/60 rounded-lg box-content p-0.5 cursor-pointer hover:text-background1 max-sm:hidden hover:bg-white transition-colors duration-300"
          >
            <XMark className="size-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('toasts')!
  );
}
