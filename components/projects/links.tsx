import LinkIcon from '@/assets/icons/link';
import GithubIcon from '@/assets/icons/socialmedia/github';

type ProjectsLinksProps = { github: string; demo?: string };

function ProjectsLinks({ github, demo }: ProjectsLinksProps) {
  return (
    <div className="absolute top-1.5 right-1.5 flex items-center gap-1">
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background1 size-8 rounded-full p-2"
        >
          <LinkIcon />
        </a>
      )}

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-background1 size-8 rounded-full p-1"
      >
        <GithubIcon />
      </a>
    </div>
  );
}

export default ProjectsLinks;
