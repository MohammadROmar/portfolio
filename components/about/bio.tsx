import CodeTag from '../shared/code-tag';

export default function Bio() {
  return (
    <div className="max-w-3xl text-xs p-4 rounded-3xl bg-background1">
      <CodeTag tag="p" className="font-ibm-plex-mono flex flex-col gap-2">
        <span className="font-ubuntu font-medium text-xl text-brand1">
          Hello!
        </span>
        <span>
          My name is Mohammad and I specialize in web developement that utilizes
          <span className="text-brand1"> HTML</span>,
          <span className="text-brand1"> Tailwind CSS</span>,
          <span className="text-brand1"> JS</span>,
          <span className="text-brand1"> React.js</span> and
          <span className="text-brand1"> Next.js</span>.
        </span>

        <span>
          I am a highly motivated individual and eternal optimist dedicated to
          writing clear, concise, robust code that works. Striving to never stop
          learning and improving.
        </span>

        <span>
          I like to have my perspective and belief systems challenged so that I
          see the world through new eyes.
        </span>

        <span>
          I am also a fourth-year student at{' '}
          <a
            href="https://damascusunivercity.edu.sy/ite/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand1"
          >
            Information Technology Engineering - Damascus University.
          </a>
        </span>
      </CodeTag>
    </div>
  );
}
