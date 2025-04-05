import Skill from './skill';
import type { Technology } from '@/models/technology';

type LanguagesProps = { title: string; items: Technology[] };

export default function SkillsList({ title, items }: LanguagesProps) {
  return (
    <div className="flex flex-col justify-center items-center font-ibm-plex-mono">
      <h4 className="text-brand2 text-xl text-center mb-4">{title}</h4>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:items-center gap-20 text-xs">
        {items.map((skill) => (
          <Skill key={skill.text} {...skill} />
        ))}
      </ul>
    </div>
  );
}
