import { useRef, type PropsWithChildren } from 'react';
import { Group, MathUtils } from 'three';
import { useFrame } from '@react-three/fiber';

function LaptopWrapper({ children }: PropsWithChildren) {
  const modelRef = useRef<Group>(null);

  useFrame((state) => {
    if (modelRef.current) {
      const t = state.clock.getElapsedTime();

      modelRef.current.rotation.x = MathUtils.lerp(
        modelRef.current.rotation.x,
        Math.cos(t / 2) / 20 + 0.25,
        0.5,
      );

      modelRef.current.rotation.z = MathUtils.lerp(
        modelRef.current.rotation.z,
        Math.sin(t / 8) / 20,
        0.1,
      );

      modelRef.current.position.y = MathUtils.lerp(
        modelRef.current.position.y,
        (-2 + Math.sin(t / 2)) / 2,
        0.1,
      );
    }
  });

  return (
    <group ref={modelRef} dispose={null} rotation={[0, Math.PI, 0]}>
      {children}
    </group>
  );
}

export default LaptopWrapper;
