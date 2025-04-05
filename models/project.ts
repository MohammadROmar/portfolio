import { StaticImageData } from 'next/image';

export type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  github: string;
  live?: string;
  technologies: { name: string; color: string }[];
};
