import type { Dispatch, SetStateAction } from 'react';

import ArrowRightIcon from '@/assets/icons/arrow-right';
import {
  getProjectIndexOnDecrease,
  getProjectIndexOnIncrease,
} from '@/utils/get-project-index';

type ButtonsProps = { setProjectIndex: Dispatch<SetStateAction<number>> };

function Buttons({ setProjectIndex }: ButtonsProps) {
  return (
    <>
      <button
        onClick={() => setProjectIndex(getProjectIndexOnIncrease)}
        className="absolute top-1/2 -translate-x-1/2 right-0 text-brand1 text-5xl rounded-full p-2 bg-background2 cursor-pointer"
      >
        <ArrowRightIcon className="w-14 h-14 text-brand1" />
      </button>

      <button
        onClick={() => setProjectIndex(getProjectIndexOnDecrease)}
        className="absolute top-1/2 -translate-x-1/2 left-12 text-brand1 text-5xl rounded-full p-2 bg-background2 cursor-pointer"
      >
        <ArrowRightIcon className="w-14 h-14 text-brand1 rotate-180" />
      </button>
    </>
  );
}

export default Buttons;
