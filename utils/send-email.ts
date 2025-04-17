export async function sendEmail(event: React.FormEvent<HTMLFormElement>) {
  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());
  const { name, email, message } = data as { [key: string]: string };

  const errors: { [key: string]: string } = {};

  if (!name || name.trim().length === 0) {
    errors.name = 'Name is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.email = 'Email is invalid';
  }

  if (!message || message.trim().length === 0) {
    errors.message = 'Message is required';
  }

  if (errors.name || errors.email || errors.message) {
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
