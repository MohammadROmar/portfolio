import type { ComponentPropsWithoutRef } from 'react';

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<'input'>;

function Input({ id, label, ...props }: InputProps) {
  return (
    <p className="w-full font-ubuntu text-sm flex flex-col gap-4">
      <label htmlFor={id} className="text-brand1">
        {label}
      </label>
      <input
        id={id}
        name={id}
        {...props}
        className="w-full border-b border-brand1 outline-none"
      />
    </p>
  );
}

export default Input;
