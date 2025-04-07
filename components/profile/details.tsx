import { personalInfo } from '@/data/personal-info';

export default function Details() {
  return (
    <ul className="space-y-3 font-ibm-plex-mono text-xs text-white/70">
      {personalInfo.map(({ text, icon: Icon }) => (
        <li key={text} className="flex gap-4">
          <Icon className="w-3.5 h-3.5 text-brand1" />
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}
