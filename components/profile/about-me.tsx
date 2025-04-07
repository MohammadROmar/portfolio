import Image from 'next/image';

import profileImg from '@/assets/images/profile-photo.png';

export default function AboutMe() {
  return (
    <div className="text-center">
      <Image
        src={profileImg}
        alt="An image of a developer."
        priority
        fetchPriority="high"
        className="m-auto pb-4"
      />

      <h2 className="text-2xl font-medium">Mohammad</h2>
      <p className="font-ibm-plex-mono text-xs text-white/70">
        Front-End Developer
      </p>
    </div>
  );
}
