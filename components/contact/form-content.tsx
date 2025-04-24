import Input from '../shared/input';
import ContactFormSubmit from './submit';

type FormContentProps = { pending: boolean; errors: { [key: string]: string } };

export default function FormContent({ pending, errors }: FormContentProps) {
  return (
    <>
      <div className="w-full lg:w-fit xl:w-full flex max-sm:flex-col gap-4 md:gap-8 lg:gap-16">
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
