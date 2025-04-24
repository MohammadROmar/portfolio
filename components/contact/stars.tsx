import { useMemo, useRef } from 'react';
import { Points as ThreePoints } from 'three';
import { useFrame } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import { inSphere } from 'maath/random';

export default function Stars() {
  const starsRef = useRef<ThreePoints>(null);

  useFrame((_, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x -= delta / 10;
      starsRef.current.rotation.y -= delta / 15;
    }
  });

  const points = useMemo(() => {
    const data = inSphere(new Float64Array(4800), { radius: 1.2 });
    return new Float32Array(data);
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={starsRef} positions={points} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
