import { Html } from '@react-three/drei';

import Profile from '../profile';

function LaptopContent() {
  return (
    <Html
      position={[0, 10.65, -10.67]}
      transform
      occlude="blending"
      className="bg-background1 h-[685] w-[1182] overflow-hidden"
    >
      <div className="flex h-full w-full scale-150 items-center justify-center">
        <Profile />
      </div>
    </Html>
  );
}

export default LaptopContent;
