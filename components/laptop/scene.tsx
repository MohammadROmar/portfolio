import LaptopModel from '.';

export default function Scene() {
  return (
    <group scale={0.9}>
      <directionalLight intensity={3} />

      <group scale={1.3} position={[3.5, 0, 0]}>
        <LaptopModel />
      </group>
    </group>
  );
}
