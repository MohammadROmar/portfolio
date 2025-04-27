import Input from '../shared/input';
import ContactFormSubmit from './submit';

type FormContentProps = { pending: boolean; errors: { [key: string]: string } };

export default function FormContent({ pending, errors }: FormContentProps) {
  return (
    <>
      <div className="flex w-full gap-4 max-sm:flex-col md:gap-8 lg:w-fit lg:gap-16 xl:w-full">
        <Input
          as="input"
          id="name"
          type="text"
          label="Your Name *"
          placeholder="Enter your name"
          error={errors.name}
        />

        <Input
          as="input"
          id="email"
          type="email"
          label="Your Email *"
          placeholder="Enter your email"
          error={errors.email}
        />
      </div>

      <Input
        as="textarea"
        id="message"
        type="text"
        label="Your Message *"
        placeholder="Enter your needs"
        error={errors.message}
      />

      <ContactFormSubmit pending={pending} />
    </>
  );
}
