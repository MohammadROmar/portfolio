'use client';

import { motion } from 'framer-motion';

import EmailToast from './email-toast';
import useEmail from '@/hooks/use-email';
import FormContent from './form-content';

export default function ContactForm() {
  const { emailState, pending, errors, handleFormSubmission } = useEmail();

  return (
    <>
      <EmailToast state={emailState} />

      <motion.form
        initial={{ y: 75, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        viewport={{ once: true, margin: '-100px' }}
        onSubmit={handleFormSubmission}
        className="bg-background2/50 flex w-full flex-col items-center justify-center gap-12 rounded-xl p-4 max-sm:gap-4 lg:w-fit xl:w-full"
      >
        <FormContent pending={pending} errors={errors} />
      </motion.form>
    </>
  );
}
