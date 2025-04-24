import { memo } from 'react';

import Toast from '../shared/toast';

type EmailToastProps = { state: 'sent' | 'failed' | 'waiting' };

function EmailToast({ state }: EmailToastProps) {
  if (state === 'waiting') return null;

  const emailFailed = state === 'failed';

  return (
    <Toast
      title={emailFailed ? 'Failed to send email' : 'Email sent'}
      text={
        emailFailed ? 'Please try again later.' : 'Your message has been sent.'
      }
      error={emailFailed}
    />
  );
}

export default memo(EmailToast);
