import Logo from './logo';
import SocialmediaLinks from './socialmedia-links';

export default function Header() {
  return (
    <header className="max-container spacing absolute top-0 right-0 left-0 py-4">
      <div className="flex items-center justify-between">
        <Logo />

        <SocialmediaLinks />
      </div>

      <hr className="mt-4 text-gray-700" />
    </header>
  );
}
