import Title from '../shared/title';
import SkillsList from './list';
import KnownSkills from './skills';
import { languages, technologies, packages } from '@/data/technologies';

export default function Skills() {
  return (
    <section
      id="skills"
      className="spacing min-h-dvh flex flex-col justify-center items-center gap-8 relative bg-[url(/patterns/pattern2.png)] bg-center bg-cover"
    >
      <div className="flex flex-col justify-center items-center">
        <Title text="Skills" />
        <p className="font-ibm-plex-mono text-xs pt-2">
          I am striving to never stop learning and improving
        </p>
      </div>

      <p className="text-8xl text-brand1 absolute top-1/6 right-1/4">
        &lt;/&gt;
      </p>

      <KnownSkills />

      <SkillsList title="Programming Languages" items={languages} />
      <SkillsList title="Technologies" items={technologies} />
      <SkillsList title="Packages" items={packages} />
    </section>
  );
}
