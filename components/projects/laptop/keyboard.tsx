import type { LaptopPart } from '@/models/laptop-part';

function LaptopKeyboard({ geometry, material }: LaptopPart) {
  return (
    <group
      name="Frame"
      position={[0, -2.75, -0.8]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={100}
    >
      <mesh
        name="Frame_ComputerFrame_0"
        castShadow
        receiveShadow
        rotation={[Math.PI / 8, 0, 0]}
        geometry={geometry}
        material={material}
      />
    </group>
  );
}

export default LaptopKeyboard;
