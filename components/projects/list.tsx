import { CSSProperties } from 'react';

import type { Project } from '@/models/project';

export default function ProjectsList({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {project.technologies.map((tech) => (
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
