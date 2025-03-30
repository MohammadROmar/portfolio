import Image from 'next/image';

import Bio from './bio';
import codingImg from '@/assets/images/coding.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="spacing-x min-h-dvh bg-[url(/patterns/pattern1.png)] bg-background2 bg-cover bg-center flex items-center"
    >
      <div className="w-full flex max-lg:flex-col justify-center items-center gap-16 xl:gap-32 xl:ml-32 xl:mr-16">
        <div className="space-y-8">
          <h3 className="w-fit text-3xl px-4 py-1 border-[3px] border-brand2 rounded-tl-2xl rounded-br-2xl bg-background1">
            About Me
          </h3>

          <Bio />
        </div>

        <Image
          src={codingImg}
          alt="An image of someone coding."
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
