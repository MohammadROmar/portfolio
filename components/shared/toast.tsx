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
          className={`fixed right-4 bottom-4 left-4 z-50 flex max-w-sm items-center justify-between gap-4 rounded-xl border-2 px-2 py-1 ${
            error
              ? 'border-danger bg-danger-light'
              : 'border-success bg-success-light'
          }`}
        >
          <div className="flex items-center gap-4">
            {error ? (
              <XMark className="bg-danger text-danger-light box-content size-5 rounded-full p-2" />
            ) : (
              <CkeckMark className="bg-success text-success-light box-content size-5 rounded-full p-2" />
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
            className="text-background1/60 hover:text-background1 box-content cursor-pointer rounded-lg p-0.5 transition-colors duration-300 hover:bg-white max-sm:hidden"
          >
            <XMark className="size-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('toasts')!,
  );
}
