import Link from 'next/link';

import AnimationContainer from '../shared/animation-container';
import MailIcon from '@/assets/icons/mail';

export default function LetsTalk() {
  return (
    <AnimationContainer
      initial={{ opacity: 0, rotate: -15 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 3.25 }}
      className="origin-left"
    >
      <Link
        href="/#contact"
        prefetch={false}
        className="w-fit ml-4 flex items-center gap-4"
      >
        <p className="text-3xl text-brand1">Let's Talk</p>
        <div className="rounded-full bg-gray-700 p-2">
          <MailIcon className="size-5 text-brand1" />
        </div>
      </Link>
    </AnimationContainer>
  );
}
