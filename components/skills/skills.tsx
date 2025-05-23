import { skills } from '@/data/skills';
import { AnimatedList, AnimatedListItem } from '../shared/animation-wrappers';

export default function Skills() {
  return (
    <AnimatedList className="flex max-md:flex-col gap-20 font-ibm-plex-mono text-xs text-background1 text-center">
      {skills.map(({ text, subtext, icon: Icon }) => (
        <AnimatedListItem
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, scale: [1, 1.1, 1] },
          }}
          key={text}
          className="flex flex-col items-center gap-2 pr-4 pl-[1.375rem] py-2 bg-brand2 rounded-lg overflow-hidden relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[#0C73B8]"
        >
          <Icon className="size-8" />

          <h4 className="text-lg">{text}</h4>

          <p>{subtext}</p>
        </AnimatedListItem>
      ))}
    </AnimatedList>
  );
}
