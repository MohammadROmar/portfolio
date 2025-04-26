import Link from 'next/link';
import Image from 'next/image';

import HomeIcon from '@/assets/icons/home';
import notFoundImg from '@/assets/images/not-found.png';

export default function NotFoundPage() {
  return (
    <section className="max-container min-h-[68vh] md:min-h-[77vh] spacing mt-22 mb-8 py-0 flex max-md:flex-col md:flex-row-reverse md:items-center max-md:">
      <div className="md:flex-1 h-[40vh] md:h-[70vh] relative">
        <Image
          src={notFoundImg}
          alt="Laptop image with 404 error code in it."
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 800px"
          className="object-center object-contain"
        />
      </div>

      <div className="max-md:mt-8 max-md:text-center md:flex-1 flex flex-col md:justify-center max-md:items-center md:gap-2">
        <h2 className="text-4xl md:text-6xl text-brand1">Oops...</h2>
        <h3 className="text-2xl md:text-4xl text-danger max-md:mt-2">
          Page Not Found
        </h3>
        <p className="text-white/80">This page doesn't exist!</p>

        <Link
          href="/"
          prefetch={false}
          className="w-fit max-md:mt-2 px-6 py-2 md:mt-8 flex items-center gap-4 text-lg md:text-xl rounded-full text-background1 bg-brand1"
        >
          <p className="whitespace-nowrap">Back to home</p>
          <HomeIcon className="size-5" />
        </Link>
      </div>
    </section>
  );
}
