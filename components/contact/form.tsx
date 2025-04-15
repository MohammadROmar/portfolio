'use client';

import useEmail from '@/hooks/use-email';
import FormContent from './form-content';

export default function ContactForm() {
  const { pending, errors, handleFormSubmission } = useEmail();

  return (
    <form
      onSubmit={handleFormSubmission}
      className="w-full lg:w-fit xl:w-full flex flex-col justify-center items-center gap-12"
    >
      <FormContent pending={pending} errors={errors} />
    </form>
  );
}
