import Bio from './bio';
import LaptopCanvas from '../laptop/laptop-canvas';
import AnimationContainer from '../shared/animation-container';
import { revealAnimation } from '@/utils/reveal-animation';

export default function About() {
  return (
    <section
      id="about"
      className="lg:spacing bg-background2 flex min-h-screen items-center bg-[url(/patterns/pattern1.png)] bg-cover bg-center"
    >
      <div className="max-container grid w-full grid-cols-1 place-items-center items-center gap-x-16 lg:grid-cols-7 xl:gap-x-32">
        <AnimationContainer
          {...revealAnimation({ x: -75 })}
          className="max-lg:spacing col-span-4 space-y-8 max-lg:pb-0"
        >
          <h3 className="border-brand2 bg-background1 w-fit rounded-tl-2xl rounded-br-2xl border-[3px] px-4 py-1 text-3xl xl:pr-16 xl:pl-32">
            About Me
          </h3>

          <Bio />
        </AnimationContainer>

        <AnimationContainer
          {...revealAnimation({ x: 75 })}
          className="col-span-3 h-[50vh] w-full max-lg:col-span-4 md:h-[70vh]"
        >
          <LaptopCanvas />
        </AnimationContainer>
      </div>
    </section>
  );
}
