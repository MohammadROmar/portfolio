import AboutMe from '../hero/profile/about-me';
import LaptopModel from './laptop';

export default function Scene() {
  return (
    <group>
      <directionalLight intensity={3} />

      <color args={[26, 30, 35]} />

      <group scale={1.5}>
        <LaptopModel>
          <AboutMe />
          <AboutMe />
          <AboutMe />
          <AboutMe />
          <AboutMe />
          <AboutMe />
          <AboutMe />
        </LaptopModel>
      </group>
    </group>
  );
}
