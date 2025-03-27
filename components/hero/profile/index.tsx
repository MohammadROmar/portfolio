import AboutMe from './about-me';
import Details from './details';
import CoreSkills from './core-skills';
import DwnloadCV from './download-cv';

export default function Profile() {
  return (
    <div className="w-fit h-fit px-4 py-6 bg-background1 border-white border-[3px] rounded-tl-[7rem] rounded-br-[7rem] flex flex-col gap-6 items-center relative before:absolute before:w-full before:h-full before:bg-brand1 before:-top-1.5 before:-left-1.5 before:rounded-[inherit] before:-z-10">
      <AboutMe />

      <Details />

      <CoreSkills />

      <DwnloadCV />
    </div>
  );
}
