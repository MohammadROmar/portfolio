import { personalInfo } from '@/data/personal-info';

export default function Details() {
  return (
    <ul className="font-ibm-plex-mono space-y-3 text-xs text-white/70">
      {personalInfo.map(({ text, icon: Icon }) => (
        <li key={text} className="flex gap-4">
          <Icon className="text-brand1 h-3.5 w-3.5" />
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}
