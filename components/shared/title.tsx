import AnimationContainer from './animation-container';
import { revealAnimation } from '@/utils/reveal-animation';

type TitleProps = { heading: string; subheading: string };

function Title({ heading, subheading }: TitleProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <AnimationContainer
        {...revealAnimation({ width: 0, margin: '-100px' })}
        className="w-min space-y-2"
      >
        <h3 className="text-brand1 overflow-hidden text-center text-5xl">
          {heading}
        </h3>

        <div className="before:bg-brand1 after:bg-brand1 relative w-full before:absolute before:bottom-1/2 before:left-0 before:h-1.5 before:w-1.5 before:translate-y-1/2 before:rounded-full after:absolute after:right-0 after:bottom-1/2 after:h-1.5 after:w-1.5 after:translate-y-1/2 after:rounded-full">
          <hr className="text-brand1 absolute right-0 bottom-0 left-0" />
        </div>
      </AnimationContainer>

      <AnimationContainer {...revealAnimation({ margin: '-100px' })}>
        <p className="font-ibm-plex-mono max-w-3xl pt-2 text-xs">
          {subheading}
        </p>
      </AnimationContainer>
    </div>
  );
}

export default Title;
