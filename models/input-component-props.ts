import type { ComponentPropsWithoutRef } from 'react';

type BaseProps = {
  as: 'input' | 'textarea';
  id: string;
  label: string;
  error?: string;
};

export type InputProps = BaseProps & ComponentPropsWithoutRef<'input'>;

export type TextareaProps = BaseProps & ComponentPropsWithoutRef<'textarea'>;
