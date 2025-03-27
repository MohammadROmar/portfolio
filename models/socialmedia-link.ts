import type { ComponentPropsWithoutRef, FC } from 'react';

export type SocialmediaLink = {
  label: string;
  to: string;
  icon: FC<ComponentPropsWithoutRef<'svg'>>;
};
