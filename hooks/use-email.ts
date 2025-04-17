'use client';

import { sendEmail } from '@/utils/send-email';
import { FormEvent, useCallback, useState } from 'react';

type EmailState = 'waiting' | 'sent' | 'failed';

export default function useEmail() {
  const [emailState, setEmailState] = useState<EmailState>('waiting');
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleFormSubmission = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setPending(true);
      setErrors({});
      setEmailState('waiting');

      try {
        const result = await sendEmail(event);
        const errors = result.errors;
        const errorsNumber = Object.keys(errors).length;

        if (errorsNumber > 0) {
          setErrors(errors);
        } else if (result.failed) {
          setEmailState('failed');
        } else if (!result.failed) {
          setEmailState('sent');
        }
      } catch (_) {
        setEmailState('failed');
      }

      setPending(false);
    },
    []
  );

  return { emailState, pending, errors, handleFormSubmission };
}
