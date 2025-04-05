import LinkIcon from '@/assets/icons/link';
import GithubIcon from '@/assets/icons/socialmedia/github';

type ProjectLinksProps = { live?: string; github: string };

export default function ProjectLinks({ live, github }: ProjectLinksProps) {
  return (
    <div className="absolute bottom-4 right-4 flex items-center justify-center gap-4">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="w-20 h-20 p-4 bg-background2 rounded-full"
        >
          <LinkIcon />
        </a>
      )}

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-20 h-20 p-2 bg-background2 rounded-full"
      >
        <GithubIcon />
      </a>
    </div>
  );
}
