import Logo from './logo';
import SocialmediaLinks from './socialmedia-links';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 py-4 spacing-x">
      <div className=" flex items-center justify-between">
        <Logo />

        <SocialmediaLinks />
      </div>

      <hr className="text-gray-700 mt-4" />
    </header>
  );
}
