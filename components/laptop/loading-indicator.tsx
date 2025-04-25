import { Html, useProgress } from '@react-three/drei';

import CircleProgress from '@/assets/icons/circle-progress';

export default function LoadingIndicator() {
  const { progress } = useProgress();

  return (
    <Html className="relative">
      <div className="absolute top-1/2 left-1/2 transform-[translateX(-50%)_translateY(-50%)]">
        <CircleProgress progress={Math.round(progress)} />
      </div>
    </Html>
  );
}
