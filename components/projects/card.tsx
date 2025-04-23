'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import ProjectsLinks from './links';
import TechnologiesUsed from './technologies';
import type { Project } from '@/models/project';

function ProjectCard(project: Project) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
      }}
      className="flex flex-col gap-2 rounded-2xl bg-background1 p-3 shadow-lg shadow-brand1/5 hover:shadow-brand1/10 transition-shadow duration-300"
    >
      <div className="relative rounded-lg overflow-hidden border border-brand1/50">
        <Image src={project.image} alt={project.title} />

        <ProjectsLinks github={project.github} demo={project.live} />
      </div>

      <h4 className="text-xl text-brand1 font-medium">{project.title}</h4>

      <p className="font-ibm-plex-mono text-xs text-white/80 whitespace-pre-line">
        {project.description}
      </p>

      <hr className="text-gray-700" />

      <TechnologiesUsed technologies={project.technologies} />
    </motion.li>
  );
}

export default ProjectCard;
