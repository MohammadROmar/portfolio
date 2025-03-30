export default function Tools() {
  return (
    <ul className="w-fit h-fit flex flex-col gap-8 bg-background2 rounded-[4rem] p-8">
      <li>
        <p className="flex items-center gap-4">
          <span className="text-brand1 text-5xl">5</span>
          <span className="w-min font-ibm-plex-mono text-sm">
            Programming Languages
          </span>
        </p>
      </li>

      <li>
        <p className="flex items-center gap-4">
          <span className="text-brand1 text-5xl">3</span>
          <span className="w-min font-ibm-plex-mono text-sm">
            Development Tools
          </span>
        </p>
      </li>
    </ul>
  );
}
