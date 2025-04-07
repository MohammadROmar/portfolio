'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';

import Scene from './scene';
import LoadingIndecator from './loading-indecator';

export default function LaptopCanvas() {
  return (
    <Canvas
      camera={{ position: [-20, 3, -30] }}
      className="w-full h-full bg-transparent"
    >
      <Suspense fallback={<LoadingIndecator />}>
        <Preload all />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />

        <Scene />
      </Suspense>
    </Canvas>
  );
}
