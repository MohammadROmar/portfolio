import Link from 'next/link';

import AnimationContainer from '../shared/animation-container';
import MailIcon from '@/assets/icons/mail';

export default function LetsTalk() {
  return (
    <AnimationContainer
      initial={{ opacity: 0, rotate: -15 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 3.5 }}
      className="origin-left"
    >
      <Link
        href="/#contact"
        prefetch={false}
        className="ml-4 flex w-fit items-center gap-4"
      >
        <p className="text-brand1 text-3xl">Let's Talk</p>
        <div className="rounded-full bg-gray-700 p-2">
          <MailIcon className="text-brand1 size-5" />
        </div>
      </Link>
    </AnimationContainer>
  );
}
