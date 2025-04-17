'use client';

import Toast from '../shared/toast';
import useEmail from '@/hooks/use-email';
import FormContent from './form-content';

export default function ContactForm() {
  const { emailState, pending, errors, handleFormSubmission } = useEmail();

  const emailSent = emailState === 'sent';
  const emailFailed = emailState === 'failed';

  return (
    <>
      {(emailFailed || emailSent) && (
        <Toast
          title={emailFailed ? 'Failed to send email' : 'Email sent'}
          text={
            emailFailed
              ? 'Please try again later.'
              : 'Your message has been sent.'
          }
          error={emailFailed}
        />
      )}

      <form
        onSubmit={handleFormSubmission}
        className="w-full lg:w-fit xl:w-full flex flex-col justify-center items-center gap-12"
      >
        <FormContent pending={pending} errors={errors} />
      </form>
    </>
  );
}
