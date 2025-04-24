'use client';

import EmailToast from './email-toast';
import useEmail from '@/hooks/use-email';
import FormContent from './form-content';

export default function ContactForm() {
  const { emailState, pending, errors, handleFormSubmission } = useEmail();

  return (
    <>
      <EmailToast state={emailState} />

      <form
        onSubmit={handleFormSubmission}
        className="w-full lg:w-fit xl:w-full flex flex-col justify-center items-center max-sm:gap-4 gap-12 bg-background2/50 p-4 rounded-xl"
      >
        <FormContent pending={pending} errors={errors} />
      </form>
    </>
  );
}
