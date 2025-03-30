import { CSSProperties } from 'react';

import type { Technology } from '@/models/technology';

type LanguagesProps = {
  title: string;
  items: Technology[];
};

export default function SkillsList({ title, items }: LanguagesProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h4 className="font-ibm-plex-mono text-brand2 text-xl text-center mb-4">
        {title}
      </h4>

      <ul className="flex justify-center items-center gap-20 text-xs">
        {items.map(({ text, color, icon: Icon }) => (
          <li
            key={text}
            className="flex flex-col items-center gap-2"
            style={{ '--icon-color': color } as CSSProperties}
          >
            <div className="rounded-full p-4 box-content bg-[var(--icon-color)]">
              <Icon className="w-8 h-8 flex items-center justify-center" />
            </div>
            <h5 className="text-[var(--icon-color)]">{text}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}
