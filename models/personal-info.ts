import type { ComponentPropsWithoutRef, FC } from 'react';

export type PersonalInfo = {
  text: string;
  icon: FC<ComponentPropsWithoutRef<'svg'>>;
};
