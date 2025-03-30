import type { NavigationLink as SocialmediaLinkProps } from '@/models/socialmedia-link';

function SocialmediaLink({ label, to, icon: Icon }: SocialmediaLinkProps) {
  return (
    <li>
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1"
      >
        <Icon className="w-4 h-4 text-brand1" />
        <p className="font-ibm-plex-mono text-xs max-lg:hidden">{label}</p>
      </a>
    </li>
  );
}

export default SocialmediaLink;
