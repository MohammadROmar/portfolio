'use client';

import { sendEmail } from '@/utils/send-email';
import { FormEvent, useCallback, useState } from 'react';

export default function useEmail() {
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleFormSubmission = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setPending(true);

      const result = await sendEmail(event);
      const errors = result?.errors;

      if (errors && Object.keys(errors).length > 0) {
        setErrors(errors);
      }

      setPending(false);
    },
    []
  );

  return { pending, errors, handleFormSubmission };
}
