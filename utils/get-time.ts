export const getTime = () =>
  new Date().toLocaleString(undefined, {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
