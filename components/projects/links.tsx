import LinkIcon from '@/assets/icons/link';
import GithubIcon from '@/assets/icons/socialmedia/github';

type ProjectsLinksProps = { github: string; demo?: string };

function ProjectsLinks({ github, demo }: ProjectsLinksProps) {
  return (
    <div className="flex items-center gap-1 absolute top-1.5 right-1.5">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 p-2 bg-background1 rounded-full"
        >
          <LinkIcon />
        </a>
      )}

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 p-1 bg-background1 rounded-full"
      >
        <GithubIcon />
      </a>
    </div>
  );
}

export default ProjectsLinks;
