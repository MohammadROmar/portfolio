import SocialmediaLink from './socialmedia-link';
import { socialmediaLinks } from '@/data/socialmedia-links';

export default function SocialmediaLinks() {
  return (
    <ul className="flex gap-4 max-md:hidden">
      {socialmediaLinks.map((link) => (
        <SocialmediaLink key={link.label} {...link} />
      ))}
    </ul>
  );
}
