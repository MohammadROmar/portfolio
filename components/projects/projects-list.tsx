'use client';

import { motion } from 'framer-motion';

import ProjectCard from './card';
import { projects } from '@/data/projects';
import { staggerAnimation } from '@/data/stagger-animation';

export default function ProjectsList() {
  return (
    <motion.ul
      {...staggerAnimation(0.2)}
      className="max-container grid md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {projects.map((project) => (
        <ProjectCard key={project.github} {...project} />
      ))}
    </motion.ul>
  );
}
