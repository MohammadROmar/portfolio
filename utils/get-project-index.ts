import { projects } from '@/data/projects';

export function getProjectIndexOnIncrease(prevProject: number) {
  return prevProject === projects.length - 1 ? 0 : prevProject + 1;
}

export function getProjectIndexOnDecrease(prevProject: number) {
  return prevProject === 0 ? projects.length - 1 : prevProject - 1;
}
