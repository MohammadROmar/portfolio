'use client';

import { motion } from 'framer-motion';

import SendIcon from '@/assets/icons/send';
import LoadingSpinner from '@/assets/icons/loading-spinner';

export default function ContactFormSubmit({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="text-background1 bg-brand1 flex cursor-pointer items-center rounded-full px-6 py-2 text-lg disabled:bg-[#0b8a77]"
    >
      <ButtonText pending={pending} />
      {pending ? (
        <LoadingSpinner className="ml-4 size-5 animate-spin" />
      ) : (
        <SendIcon className="ml-4 size-5" />
      )}
    </button>
  );
}

function ButtonText({ pending }: { pending: boolean }) {
  return (
    <motion.p
      key={`${pending}`}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 'auto', opacity: 1 }}
      transition={{ duration: 0.5 }}
      layout="size"
      className="overflow-hidden whitespace-nowrap"
    >
      {pending ? 'Sending' : 'Send Message'}
    </motion.p>
  );
}
