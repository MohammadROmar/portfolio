import type { PropsWithChildren } from 'react';

type CodeTagProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
} & PropsWithChildren;

const STYLES = 'font-ibm-plex-mono text-xs text-brand2';

function CodeTag({ tag, className, children }: CodeTagProps) {
  const Component = tag;
  const styles = 'pl-4 py-2 ' + (className ?? '');

  return (
    <Component className="flex flex-col">
      <span className={STYLES}>&lt;{tag}&gt;</span>
      <span className={styles}>{children}</span>
      <span className={STYLES}>&lt;/{tag}&gt;</span>
    </Component>
  );
}

export default CodeTag;
