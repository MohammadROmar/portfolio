import Image from 'next/image';

import { AnimatedListItem } from '../shared/animation-wrappers';
import ProjectsLinks from './links';
import TechnologiesUsed from './technologies';
import type { Project } from '@/models/project';

function ProjectCard(project: Project) {
  return (
    <AnimatedListItem
      variants={{
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
      }}
      className="bg-background1 shadow-brand1/5 hover:shadow-brand1/10 flex flex-col gap-2 rounded-2xl p-3 shadow-lg transition-shadow duration-500"
    >
      <div className="border-brand1/50 relative overflow-hidden rounded-lg border">
        <Image src={project.image} alt={project.title} />

        <ProjectsLinks github={project.github} demo={project.live} />
      </div>

      <h4 className="text-brand1 text-xl font-medium">{project.title}</h4>

      <p className="font-ibm-plex-mono text-xs whitespace-pre-line text-white/80">
        {project.description}
      </p>

      <hr className="text-gray-700" />

      <TechnologiesUsed technologies={project.technologies} />
    </AnimatedListItem>
  );
}

export default ProjectCard;
