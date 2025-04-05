import type { LaptopPart } from '@/models/laptop-part';

export default function LaptopScreen({ geometry, material }: LaptopPart) {
  return (
    <group
      name="Screen"
      position={[0, 0.65, -10.3]}
      rotation={[Math.PI, 0, -Math.PI]}
      scale={[100, 100, 88.235]}
    >
      <mesh
        name="Screen_ComputerScreen_0"
        castShadow
        receiveShadow
        geometry={geometry}
        material={material}
      />
    </group>
  );
}
