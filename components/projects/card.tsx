import Image from 'next/image';

import ProjectsLinks from './links';
import ProjectsList from './list';
import type { Project } from '@/models/project';

function ProjectCard(project: Project) {
  return (
    <li className="flex flex-col gap-2 rounded-2xl bg-background1 p-3 shadow-lg shadow-brand1/5 hover:shadow-brand1/10 transition-shadow duration-300">
      <div className="relative rounded-lg overflow-hidden border border-brand1/50">
        <Image src={project.image} alt={project.title} />

        <ProjectsLinks github={project.github} demo={project.live} />
      </div>

      <h4 className="text-xl text-brand1 font-medium">{project.title}</h4>

      <p className="font-ibm-plex-mono text-xs text-white/80 whitespace-pre-line">
        {project.description}
      </p>

      <hr className="text-gray-700" />

      <ProjectsList project={project} />
    </li>
  );
}

export default ProjectCard;
