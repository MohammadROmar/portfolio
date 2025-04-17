import Bio from './bio';
import LaptopCanvas from '../laptop/laptop-canvas';
import AnimationContainer from '../shared/animation-container';
import { revealAnimation } from '@/utils/reveal-animation';

export default function About() {
  return (
    <section
      id="about"
      className="lg:spacing min-h-screen flex items-center bg-background2 bg-[url(/patterns/pattern1.png)] bg-cover bg-center"
    >
      <div className="max-container w-full grid grid-cols-1 lg:grid-cols-7 place-items-center items-center gap-x-16 xl:gap-x-32">
        <AnimationContainer
          {...revealAnimation({ x: -75 })}
          className="max-lg:spacing max-lg:pb-0 space-y-8 col-span-4"
        >
          <h3 className="w-fit text-3xl px-4 py-1 border-[3px] border-brand2 rounded-tl-2xl rounded-br-2xl bg-background1 xl:pl-32 xl:pr-16">
            About Me
          </h3>

          <Bio />
        </AnimationContainer>

        <AnimationContainer
          {...revealAnimation({ x: 75 })}
          className="w-full h-[50vh] md:h-[70vh] max-lg:col-span-4 col-span-3"
        >
          <LaptopCanvas />
        </AnimationContainer>
      </div>
    </section>
  );
}
