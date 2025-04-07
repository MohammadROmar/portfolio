import AboutMe from './about-me';
import Details from './details';
import CoreSkills from './core-skills';
import DownloadCV from './download-cv';

export default function Profile({ rounded }: { rounded?: boolean }) {
  const styles = `w-fit h-fit flex flex-col gap-6 items-center relative px-4 py-6 bg-background1${
    rounded
      ? ' border-white border-[3px] rounded-tl-[7rem] rounded-br-[7rem] before:absolute before:w-full before:h-full before:bg-brand1 before:-top-1.5 before:-left-1.5 before:rounded-[inherit] before:-z-10'
      : ''
  }`;

  return (
    <div className={styles}>
      <AboutMe />

      <Details />

      <CoreSkills />

      <DownloadCV />
    </div>
  );
}
