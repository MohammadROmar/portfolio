import AnimationContainer from '../shared/animation-container';
import CodeTag from '../shared/code-tag';
import AnimatedText from '../shared/animated-text';
import LetsTalk from './lets-talk';
import { revealAnimation } from '@/utils/reveal-animation';

export default function Overview() {
  return (
    <AnimationContainer
      {...revealAnimation({ y: 75 })}
      className="h-fit w-fit space-y-4"
    >
      <CodeTag
        tag="h1"
        className="flex flex-col text-3xl md:text-5xl lg:text-6xl"
      >
        <span>Hey</span>
        <span>
          I'm <span className="text-brand1">Mohammad</span>,
        </span>
        <span>Front-End Developer</span>
      </CodeTag>

      <CodeTag tag="p" className="font-ibm-plex-mono max-w-lg text-xs">
        <AnimatedText text="I help business grow by crafting amazing web experiences. If you're looking for a developer that likes to get stuff done," />
      </CodeTag>

      <LetsTalk />
    </AnimationContainer>
  );
}
