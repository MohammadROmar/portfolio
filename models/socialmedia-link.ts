import type { ComponentPropsWithoutRef, FC } from 'react';

export type NavigationLink = {
  label: string;
  to: string;
  icon: FC<ComponentPropsWithoutRef<'svg'>>;
};
