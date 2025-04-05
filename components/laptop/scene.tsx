import LaptopModel from '.';

export default function Scene() {
  return (
    <group>
      <directionalLight intensity={3} />

      <group scale={1} position={[0, 1, 0]}>
        <LaptopModel />
      </group>
    </group>
  );
}
