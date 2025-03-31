import Title from '../shared/title';
import LaptopCanvas from './laptop-canvas';

export default function Projects() {
  return (
    <section
      id="projects"
      className="spacing min-h-dvh h-dvh flex flex-col items-center justify-center bg-background2 space-y-8"
    >
      <Title text="Projects" />
      <LaptopCanvas />
    </section>
  );
}
