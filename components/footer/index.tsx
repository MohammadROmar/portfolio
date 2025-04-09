import { socialmediaLinks } from '@/data/socialmedia-links';

const ORDERS = ['order-1 lg:order-2', 'order-2 lg:order-1', 'order-3'];

export default function Footer() {
  return (
    <footer className="p-2 flex max-md:flex-col justify-around items-center gap-4 border-t border-gray-700">
      <p className="order-2 md:order-1 text-xs text-center">
        &copy; {new Date().getFullYear()} Mohammad Omar, All rights reserved.
      </p>

      <ul className="order-1 md:order-2 flex items-center gap-4">
        {socialmediaLinks.map(({ label, icon: Icon, to }, i) => (
          <li key={label}>
            <a href={to} target="_blank" rel="noopener noreferrer">
              <Icon className="size-4 p-1 box-content text-background1 rounded-full bg-brand2" />
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
