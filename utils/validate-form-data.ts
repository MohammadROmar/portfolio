export function validateFormData(data: { [key: string]: string }) {
  const { name, email, message } = data;
  const errors: { [key: string]: string } = {};

  if (!name || name.trim() === '') {
    errors.name = 'Name is required';
  }

  if (!message || message.trim() === '') {
    errors.message = 'Message is required';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Email is invalid';
  }

  return errors;
}
