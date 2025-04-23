import Title from '../shared/title';
import ProjectsList from './projects-list';

export default function Projects() {
  return (
    <section
      id="projects"
      className="spacing flex flex-col  justify-center items-center min-h-screen bg-background2 bg-[url(/patterns/pattern3.png)] md:bg-[length:70%_100%] lg:bg-[length:46%_60%] xl:bg-[length:33%_75%] space-y-8 relative z-0"
    >
      <Title
        heading="Projects"
        subheading="Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively."
      />

      <ProjectsList />
    </section>
  );
}
