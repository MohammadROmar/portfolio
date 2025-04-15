import type { ComponentPropsWithoutRef } from 'react';

type InputProps = {
  id: string;
  label: string;
  error?: string;
} & ComponentPropsWithoutRef<'input'>;

function Input({ id, label, error, ...props }: InputProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="w-full font-ubuntu text-sm flex flex-col gap-4">
        <label htmlFor={id} className="text-brand1">
          {label}
        </label>

        <input
          id={id}
          name={id}
          autoComplete="off"
          {...props}
          className="w-full caret-brand1 border-b border-brand1 outline-none"
        />
      </p>

      {error && <p className="block text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default Input;
