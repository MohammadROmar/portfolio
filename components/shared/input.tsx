import type { InputProps, TextareaProps } from '@/models/input-component-props';

function Input({ as, id, label, error, ...props }: InputProps | TextareaProps) {
  let component = <></>;
  const customProps = {
    id,
    name: id,
    autoComplete: 'off',
    className:
      'w-full caret-brand1 border border-brand2/50 rounded-md p-2 outline-none bg-background1 resize-none',
  };

  if (as === 'input') {
    component = <input {...customProps} {...(props as InputProps)} />;
  } else {
    component = (
      <textarea
        {...customProps}
        rows={7}
        maxLength={500}
        {...(props as TextareaProps)}
      />
    );
  }

  return (
    <div className="flex w-full flex-col gap-2">
      <p className="font-ubuntu flex w-full flex-col gap-1 text-sm">
        <label htmlFor={id} className="text-brand2">
          {label}
        </label>

        {component}
      </p>

      {error && <p className="block text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default Input;
