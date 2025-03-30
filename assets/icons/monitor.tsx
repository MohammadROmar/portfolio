export default function MonitorIcon(
  props: React.ComponentPropsWithoutRef<'svg'>
) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 18H20C21.6569 18 23 16.6569 23 15V5C23 3.34315 21.6569 2 20 2H4C2.34315 2 1 3.34315 1 5V15C1 16.6569 2.34315 18 4 18H11V20H8C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22H16C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20H13V18ZM4 4C3.44772 4 3 4.44772 3 5V15C3 15.5523 3.44772 16 4 16H20C20.5523 16 21 15.5523 21 15V5C21 4.44772 20.5523 4 20 4H4Z"
        fill="currentColor"
      />
    </svg>
  );
}
