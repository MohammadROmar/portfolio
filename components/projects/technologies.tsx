import { CSSProperties } from 'react';

type TechnologiesUsedProps = {
  technologies: { name: string; color: string }[];
};

function TechnologiesUsed({ technologies }: TechnologiesUsedProps) {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {technologies.map((tech) => (
        <li key={tech.name}>
          <p
            className="text-[var(--tech-text-color)] text-xs"
            style={{ '--tech-text-color': tech.color } as CSSProperties}
          >
            {tech.name}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default TechnologiesUsed;
