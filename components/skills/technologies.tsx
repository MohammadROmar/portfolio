import { technologies } from '@/data/technologies';

export default function Technologies() {
  return (
    <ul className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {technologies.map(({ text, icon: Icon }) => (
        <li
          key={text}
          className="p-2 flex items-center gap-2 md:gap-4 bg-background2/80 rounded-xl border border-white/20"
        >
          <div className="box-content bg-brand2/20 rounded-lg p-1.5 md:p-2">
            <Icon className="size-6 md:size-8" />
          </div>
          <h4 className="text-sm md:text-base font-ibm-plex-mono text-white">
            {text}
          </h4>
        </li>
      ))}
    </ul>
  );
}
