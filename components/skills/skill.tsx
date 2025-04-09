import { CSSProperties } from 'react';

import type { Technology } from '@/models/technology';

function Skill({ text, color, icon: Icon }: Technology) {
  return (
    <li
      className="flex flex-col items-center gap-2"
      style={{ '--icon-color': color } as CSSProperties}
    >
      <div className="rounded-full p-6 box-content bg-[var(--icon-color)]">
        <Icon className="size-8 flex items-center justify-center" />
      </div>
      <h5 className="text-[var(--icon-color)] text-center">{text}</h5>
    </li>
  );
}

export default Skill;
