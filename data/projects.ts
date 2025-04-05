import type { Project } from '@/models/project';

import foodielandImg from '@/assets/images/projects/foodieland.jpg';
import nikeImg from '@/assets/images/projects/nike.jpg';
import stackedImg from '@/assets/images/projects/stacked.jpg';
import triplannerImg from '@/assets/images/projects/triplanner.jpg';

export const projects: Project[] = [
  {
    title: 'Stacked Game',
    description:
      'A simple game, move the colors to stack them. It uses advanced search algorithms (DFS, BFS, A*, UCS and others) to solve a given grid',
    image: stackedImg,
    github: 'https://github.com/MohammadROmar/stacked',
    live: 'https://stacked-game.vercel.app/',
    technologies: [
      { name: 'React.js', color: '#53C1DE' },
      { name: 'TailwindCSS', color: '#38bdf8' },
      { name: 'Framer Motion', color: '#bb4b96' },
      { name: 'Redux Toolkit', color: '#764ABC' },
    ],
  },
  {
    title: 'Foodieland',
    description:
      'A simple web application to browse food recipes and find cooking tips.',
    image: foodielandImg,
    github: 'https://github.com/MohammadROmar/foodieland',
    live: 'https://foodieland-two.vercel.app/',
    technologies: [
      { name: 'Next.js', color: 'white' },
      { name: 'TailwindCSS', color: '#38bdf8' },
    ],
  },
  {
    title: 'Nike',
    description:
      'Nike landing page.\nMy first Next.js and TailwindCSS project. It supports light and dark modes, and fetching data from a database.',
    github: 'https://github.com/MohammadROmar/nike-landing-page',
    live: 'https://nike-peach-ten.vercel.app/',
    image: nikeImg,
    technologies: [
      { name: 'Next.js', color: 'white' },
      { name: 'TailwindCSS', color: '#38bdf8' },
      { name: 'Better-Sqlite3', color: '#ffda44' },
    ],
  },
  {
    title: 'TriPlanner',
    description:
      'Syrian Tourism Application, built to make exploring Syria easier by allowing the tourist to reserve hotel rooms, cars, and signup for trips.',
    image: triplannerImg,
    github: 'https://github.com/MohammadROmar/TriPlanner',
    technologies: [
      { name: 'React.js', color: '#53C1DE' },
      { name: 'Framer Motion', color: '#bb4b96' },
      { name: 'React Router', color: '#D0021B' },
      { name: 'Redux Toolkit', color: '#764ABC' },
      { name: 'Tanstack Query', color: '#FFD94C' },
    ],
  },
];
