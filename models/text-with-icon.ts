import type { ComponentPropsWithoutRef, FC } from 'react';

export type TextWithIcon = {
  text: string;
  icon: FC<ComponentPropsWithoutRef<'svg'>>;
};
