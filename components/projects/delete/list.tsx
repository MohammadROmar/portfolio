'use client';

import Image from 'next/image';
import { useState } from 'react';

import ProjectLinks from './project-links';
import Buttons from './buttons';
import { projects } from '@/data/projects';

export default function ProjectsList() {
  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <ul className="w-full h-full relative">
      <Image
        src={projects[projectIndex].image}
        alt=""
        fill
        className="object-cover object-center"
      />

      <Buttons setProjectIndex={setProjectIndex} />

      <ProjectLinks
        live={projects[projectIndex].live}
        github={projects[projectIndex].github}
      />
    </ul>
  );
}
