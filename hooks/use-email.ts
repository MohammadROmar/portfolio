'use client';

import { sendEmail } from '@/utils/send-email';
import { FormEvent, useCallback, useState } from 'react';

type EmailState = 'waiting' | 'sent' | 'failed';

export default function useEmail() {
  const [emailState, setEmailState] = useState<EmailState>('waiting');
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function resetFormState() {
    setPending(true);
    setErrors({});
    setEmailState('waiting');
  }

  const handleFormSubmission = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      resetFormState();

      try {
        const { errors, failed } = await sendEmail(event);

        if (Object.keys(errors).length > 0) {
          setErrors(errors);
        } else if (failed) {
          setEmailState('failed');
        } else {
          setEmailState('sent');
        }
      } catch (_) {
        setEmailState('failed');
      } finally {
        setPending(false);
      }
    },
    [],
  );

  return { emailState, pending, errors, handleFormSubmission };
}
