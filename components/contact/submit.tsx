'use client';

import { motion } from 'framer-motion';

import SendIcon from '@/assets/icons/send';
import LoadingSpinner from '@/assets/icons/loading-spinner';

export default function ContactFormSubmit({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-6 py-2 flex items-center text-lg rounded-full text-background1 bg-brand1 cursor-pointer disabled:bg-[#0b8a77] disabled:"
    >
      <ButtonText pending={pending} />
      {pending ? (
        <LoadingSpinner className="size-5 animate-spin ml-4" />
      ) : (
        <SendIcon className="size-5 ml-4" />
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
