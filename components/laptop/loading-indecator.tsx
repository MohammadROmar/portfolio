import { Html, useProgress } from '@react-three/drei';

export default function LoadingIndecator() {
  const { progress } = useProgress();

  return (
    <Html>
      <p>{progress.toFixed(2)}%</p>
    </Html>
  );
}
