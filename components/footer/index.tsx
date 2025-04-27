import { socialmediaLinks } from '@/data/socialmedia-links';

export default function Footer() {
  return (
    <footer className="max-container flex items-center justify-around gap-4 border-t border-gray-700 p-2 max-md:flex-col">
      <p className="order-2 text-center text-xs md:order-1">
        &copy; {new Date().getFullYear()} Mohammad Omar, All rights reserved.
      </p>

      <ul className="order-1 flex items-center gap-4 md:order-2">
        {socialmediaLinks.map(({ label, icon: Icon, to }, i) => (
          <li key={label}>
            <a href={to} target="_blank" rel="noopener noreferrer">
              <Icon className="text-background1 bg-brand1 box-content size-4 rounded-full p-1" />
            </a>
          </li>
        ))}
      </ul>

      <p className="order-3 text-xs">
        Design on{' '}
        <a
          href="https://www.figma.com/design/KelHzFlopgUgNM29SQ3riS/Web-Developer-Portfolio-Website-Template-(Community)?m=auto&is-community-duplicate=1&fuid=1329036721309684062"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand1 underline"
        >
          Figma
        </a>
      </p>
    </footer>
  );
}
