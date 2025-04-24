import { validateFormData } from './validate-form-data';

export async function sendEmail(event: React.FormEvent<HTMLFormElement>) {
  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());
  const { name, email, message } = data as { [key: string]: string };

  const errors = validateFormData({ name, email, message });
  if (Object.keys(errors).length > 0) {
    return { errors, failed: true };
  }

  const time = new Date().toLocaleString(undefined, {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  const emailContent = {
    name,
    time,
    email,
    message,
    title: `Message from ${name}`,
  };

  const emailjs = (await import('@emailjs/browser')).default;

  const emailStatus = await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    emailContent,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  );

  return emailStatus.status < 400
    ? { errors: {}, failed: false }
    : { errors: {}, failed: true };
}
