import Title from '../shared/title';
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

      <p className="text-8xl text-brand1 absolute top-4 lg:top-[7%] right-[15%] lg:right-[30%] max-md:hidden">
        &lt;/&gt;
      </p>

      <KnownSkills />

      <Technologies />
    </section>
  );
}
