export default function TailwindcssLogo(
  props: React.ComponentPropsWithoutRef<'svg'>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="white"
        d="M12 6.036q-4 0-5 3.976 1.5-1.987 3.5-1.491c.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12q4 0 5-3.976-1.5 1.987-3.5 1.491c-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134M7 12q-4 0-5 3.976 1.5-1.988 3.5-1.491c.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134q4 0 5-3.976-1.5 1.987-3.5 1.491c-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12"
      ></path>
    </svg>
  );
}
