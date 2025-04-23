import { AnimatedList } from '../shared/animation-wrappers';
import ProjectCard from './card';
import { projects } from '@/data/projects';

export default function ProjectsList() {
  return (
    <AnimatedList className="max-container grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.github} {...project} />
      ))}
    </AnimatedList>
  );
}
