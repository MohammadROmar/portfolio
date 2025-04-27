import CodeTag from '../shared/code-tag';

export default function Bio() {
  return (
    <div className="bg-background1 max-w-3xl rounded-3xl p-4 text-xs">
      <CodeTag tag="p" className="font-ibm-plex-mono flex flex-col gap-2">
        <span className="font-ubuntu text-brand1 text-xl font-medium">
          Hello!
        </span>
        <span>
          My name is Mohammad and I specialize in web developement that utilizes
          <span className="text-brand1"> HTML</span>,
          <span className="text-brand1"> Tailwind CSS</span>,
          <span className="text-brand1"> TS</span>,
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
          I am a fourth-year student at{' '}
          <a
            href="https://damascusunivercity.edu.sy/ite/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand1"
          >
            Information Technology Engineering - Damascus University.
          </a>
        </span>

        <span>
          I also have a basic understanding of Flutter, enabling me to build
          simple and responsive mobile applications.
        </span>
      </CodeTag>
    </div>
  );
}
