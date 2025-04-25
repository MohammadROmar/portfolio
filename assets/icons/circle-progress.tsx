function CircleProgress({ progress }: { progress: number }) {
  const percentage = -2.51 * progress + 251;

  return (
    <div className="relative w-fit">
      <svg
        width="100"
        height="100"
        viewBox="-12.5 -12.5 125 125"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          r="40"
          cx="50"
          cy="50"
          stroke="var(--color-brand1)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="transparent"
          strokeDashoffset={percentage}
          strokeDasharray="251.20000000000002px"
        />
      </svg>

      <p className="text-brand1 absolute top-1/2 left-1/2 transform-[translateX(-50%)_translateY(-50%)]">
        {progress}
      </p>
    </div>
  );
}

export default CircleProgress;
