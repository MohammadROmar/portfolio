import { Html } from '@react-three/drei';

import ProjectsList from '../projects/delete/list';

function LaptopContent() {
  return (
    <Html
      position={[0, 10.65, -10.67]}
      transform
      occlude="blending"
      className="w-[1182] h-[685] bg-background1 overflow-y-auto "
    >
      <ProjectsList />
    </Html>
  );
}

export default LaptopContent;
