import Bio from './bio';
import LaptopCanvas from '../laptop/laptop-canvas';

export default function About() {
  return (
    <section
      id="about"
      className="lg:spacing min-h-dvh flex items-center bg-background2 bg-[url(/patterns/pattern1.png)] bg-cover bg-center"
    >
      <div className="max-container w-full grid grid-cols-1 lg:grid-cols-7 place-items-center items-center gap-x-16 xl:gap-x-32">
        <div className="max-lg:spacing max-lg:pb-0 space-y-8 col-span-4">
          <h3 className="w-fit text-3xl px-4 py-1 border-[3px] border-brand2 rounded-tl-2xl rounded-br-2xl bg-background1 xl:pl-32 xl:pr-16">
            About Me
          </h3>

          <Bio />
        </div>

        <div className="w-full h-[50dvh] md:h-[70dvh] max-lg:col-span-4 col-span-3">
          <LaptopCanvas />
        </div>
      </div>
    </section>
  );
}
