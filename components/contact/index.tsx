import AnimationContainer from '../shared/animation-container';
import Title from '../shared/title';
import ContactForm from './form';
import StarsCanvas from './stars-canvas';

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-container spacing min-h-screen flex flex-col justify-center items-center gap-8 relative"
    >
      <Title heading="Contact" subheading="I'm currently available for work." />

      <AnimationContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h4 className="px-4 py-2 text-xl md:text-2xl font-ibm-plex-mono text-brand1 text-center border border-brand1 rounded-br-3xl rounded-tl-3xl">
          Send Me A Message
        </h4>
      </AnimationContainer>

      <ContactForm />

      <StarsCanvas />
    </section>
  );
}
