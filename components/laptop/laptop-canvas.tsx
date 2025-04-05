'use client';

import { Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

import Scene from './scene';
import LoadingIndecator from './loading-indecator';

/*
<div className="w-full h-dvh max-md:h-[60dvh] pb-6 md:pb-16 lg:pb-32">
  <LaptopCanvas />
</div>
*/

export default function LaptopCanvas() {
  return (
    <Canvas
      // camera={{ position: [-20, 3, -30] }}
      camera={{ position: [-0.04, 1, -12] }}
      className="w-full h-full bg-background2"
    >
      <Suspense fallback={<LoadingIndecator />}>
        <Preload all />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
        <Test />

        <Scene />
      </Suspense>
    </Canvas>
  );
}

function Test() {
  const { camera } = useThree();
  console.log(camera.position);

  return <></>;
}
