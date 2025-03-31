import type { PropsWithChildren } from 'react';
import { Html } from '@react-three/drei';

function LaptopContent({ children }: PropsWithChildren) {
  return (
    <Html
      position={[0, 10.65, -10.67]}
      transform
      occlude="blending"
      className="w-[1182] h-[685] bg-background1 overflow-y-auto pt-4"
    >
      {children}
    </Html>
  );
}

export default LaptopContent;
