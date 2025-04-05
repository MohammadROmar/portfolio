import Title from '../shared/title';
import ProjectCard from './card';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="spacing flex flex-col items-center justify-center min-h-dvh bg-background2 space-y-8 relative z-0"
    >
      <div className="flex flex-col items-center text-center">
        <Title text="Projects" />

        <p className="max-w-3xl text-xs font-ibm-plex-mono pt-2">
          Following projects showcases my skills and experience through
          real-wprld examples of my work. Each project is briefly described with
          links to code repositories and live demo in it. It reflects my ability
          to solve complex problems, work with different technologies, and
          manage projects effectively.
        </p>
      </div>

      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.github} {...project} />
        ))}
      </ul>
    </section>
  );
}
