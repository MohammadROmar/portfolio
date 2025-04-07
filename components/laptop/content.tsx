import { Html } from '@react-three/drei';

import Profile from '../profile';

function LaptopContent() {
  return (
    <Html
      position={[0, 10.65, -10.67]}
      transform
      occlude="blending"
      className="w-[1182] h-[685] bg-background1 overflow-hidden"
    >
      <div className="w-full h-full flex justify-center items-center scale-150">
        <Profile />
      </div>
    </Html>
  );
}

export default LaptopContent;
