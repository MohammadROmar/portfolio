import Link from 'next/link';

import CodeTag from '../shared/code-tag';
import MailIcon from '@/assets/icons/mail';

export default function Overview() {
  return (
    <div className="w-fit h-fit space-y-4">
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
        I help business grow by crafting amazing web experiences. If you're
        looking for a developer that likes to get stuff done,{' '}
      </CodeTag>

      <Link
        href="/#contact"
        prefetch={false}
        className="w-fit ml-4 flex items-center gap-4"
      >
        <p className="text-3xl text-brand1">Let's Talk</p>
        <div className="rounded-full bg-gray-700 p-2">
          <MailIcon className="w-5 h-5 text-brand1" />
        </div>
      </Link>
    </div>
  );
}
