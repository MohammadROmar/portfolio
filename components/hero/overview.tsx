import CodeTag from '../shared/code-tag';
import AnimatedText from '../shared/animated-text';
import LetsTalk from './lets-talk';

export default function Overview() {
  return (
    <div className="w-fit h-fit space-y-4 animate-slide-up">
      <CodeTag
        tag="h1"
        className="text-3xl md:text-5xl lg:text-6xl flex flex-col"
      >
        <span>Hey</span>
        <span>
          I'm <span className="text-brand1">Mohammad</span>,
        </span>
        <span>Front-End Developer</span>
      </CodeTag>

      <CodeTag tag="p" className="max-w-lg font-ibm-plex-mono text-xs">
        <AnimatedText text="I help business grow by crafting amazing web experiences. If you're looking for a developer that likes to get stuff done," />
      </CodeTag>

      <LetsTalk />
    </div>
  );
}
