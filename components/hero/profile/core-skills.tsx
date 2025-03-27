import { coreSkills } from '@/data/core-skills';

export default function CoreSkills() {
  return (
    <ul className="flex flex-wrap items-center gap-2 font-ibm-plex-mono text-xs">
      {coreSkills.map((skill) => (
        <li
          key={skill}
          className="rounded-full px-2 bg-brand1 text-background1"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
