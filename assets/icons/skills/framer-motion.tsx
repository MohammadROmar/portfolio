export default function FramerMotionLogo(
  props: React.ComponentPropsWithoutRef<'svg'>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="3.7 3.7 43.6 43.6"
      {...props}
    >
      <path
        fill="rgba(255, 255, 255, 0.8)"
        d="M47.3 3.7v21.8L36.4 36.4 25.5 47.3 14.6 36.4l10.9-10.9v.1-.1z"
      ></path>
      <path fill="white" d="M47.3 25.5v21.8L36.4 36.4z"></path>
      <path
        fill="white"
        d="M25.5 25.5 14.6 36.4 3.7 47.3V3.7l10.9 10.9z"
      ></path>
    </svg>
  );
}
