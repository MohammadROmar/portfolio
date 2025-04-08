import Input from '../shared/input';

export default function ContactForm() {
  return (
    <form className="w-full lg:w-fit xl:w-full flex flex-col justify-center items-center gap-12">
      <div className="w-full lg:w-fit xl:w-full flex gap-4 md:gap-8 lg:gap-16">
        <Input
          id="name"
          label="Your name *"
          placeholder="Enter your name"
          className="flex-1"
        />
        <Input
          id="name"
          label="Your email *"
          placeholder="Enter your email"
          className="flex-1"
        />
      </div>

      <Input id="name" label="Your message *" placeholder="Enter your needs" />

      <button className="px-4 py-2 rounded-full bg-brand1 text-background1">
        Send Message
      </button>
    </form>
  );
}
