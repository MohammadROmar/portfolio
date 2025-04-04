function Title({ text }: { text: string }) {
  return (
    <div className="w-min space-y-2">
      <h3 className="text-5xl text-brand1 text-center">{text}</h3>

      <div className="w-full relative before:absolute before:left-0 before:bottom-1/2 before:translate-y-1/2 before:rounded-full before:w-1.5 before:h-1.5 before:bg-brand1 after:absolute after:right-0 after:bottom-1/2 after:translate-y-1/2 after:rounded-full after:w-1.5 after:h-1.5 after:bg-brand1">
        <hr className="absolute right-0 left-0 bottom-0 text-brand1" />
      </div>
    </div>
  );
}

export default Title;
