import Title from '../shared/title';
import AnimatedFragment from './fragment';
import KnownSkills from './skills';
import Technologies from './technologies';

export default function Skills() {
  return (
    <section
      id="skills"
      className="spacing min-h-screen flex flex-col justify-center items-center gap-8 relative bg-[url(/patterns/pattern2.png)] bg-center bg-cover"
    >
      <Title
        heading="Skills"
        subheading="I am striving to never stop learning and improving"
      />

      <AnimatedFragment />

      <KnownSkills />

      <Technologies />
    </section>
  );
}
