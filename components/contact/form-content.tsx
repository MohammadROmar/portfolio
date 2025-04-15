import Input from '../shared/input';
import ContactFormSubmit from './submit';

type FormContentProps = { pending: boolean; errors: { [key: string]: string } };

export default function FormContent({ pending, errors }: FormContentProps) {
  return (
    <>
      <div className="w-full lg:w-fit xl:w-full flex gap-4 md:gap-8 lg:gap-16">
        <Input
          id="name"
          type="text"
          label="Your name *"
          placeholder="Enter your name"
          error={errors.name}
          className="flex-1"
        />

        <Input
          id="email"
          type="email"
          label="Your email *"
          placeholder="Enter your email"
          error={errors.email}
          className="flex-1"
        />
      </div>

      <Input
        id="message"
        type="text"
        label="Your message *"
        placeholder="Enter your needs"
        error={errors.message}
      />

      <ContactFormSubmit pending={pending} />
    </>
  );
}
