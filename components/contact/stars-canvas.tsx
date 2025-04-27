'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';

import Stars from './stars';

export default function StarsCanvas() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Preload all />

        <Suspense>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
}
