import { coreSkills } from '@/data/core-skills';

export default function CoreSkills() {
  return (
    <ul className="font-ibm-plex-mono flex flex-wrap items-center gap-2 text-xs">
      {coreSkills.map((skill) => (
        <li
          key={skill}
          className="bg-brand1 text-background1 rounded-full px-2"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
