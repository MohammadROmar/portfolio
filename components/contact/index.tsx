import AnimationContainer from '../shared/animation-container';
import Title from '../shared/title';
import ContactForm from './form';
import StarsCanvas from './stars-canvas';

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-container spacing relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden"
    >
      <Title heading="Contact" subheading="I'm currently available for work." />

      <AnimationContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h4 className="font-ibm-plex-mono text-brand1 border-brand1 rounded-tl-3xl rounded-br-3xl border px-4 py-2 text-center text-xl md:text-2xl">
          Send Me A Message
        </h4>
      </AnimationContainer>

      <ContactForm />

      <StarsCanvas />
    </section>
  );
}
