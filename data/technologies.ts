import {
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  TypescriptIcon,
  DartIcon,
  SQLIcon,
  FlutterIcon,
  ThreeJsIcon,
  TailwindcssIcon,
  ReactJsIcon,
  NextJsIcon,
  FramerMotionIcon,
  ReactRouterDomIcon,
  ReactQueryLogo,
  ReduxIcon,
} from '@/assets/icons/skills';
import type { Technology } from '@/models/technology';

export const languages: Technology[] = [
  { text: 'Html', icon: HtmlIcon, color: '#f06529' },
  { text: 'CSS', icon: CssIcon, color: '#2965f1' },
  { text: 'Javascript', icon: JavascriptIcon, color: '#F7DF1E' },
  { text: 'Typescript', icon: TypescriptIcon, color: '#3178c6' },
  { text: 'Dart', icon: DartIcon, color: '#3178c6' },
  { text: 'SQL', icon: SQLIcon, color: '#ffda44' },
];

export const technologies: Technology[] = [
  { text: 'Flutter', icon: FlutterIcon, color: '#00569E' },
  { text: 'Three.js', icon: ThreeJsIcon, color: 'white' },
  { text: 'Tailwind CSS', icon: TailwindcssIcon, color: '#38bdf8' },
  { text: 'React.js', icon: ReactJsIcon, color: '#53C1DE' },
  { text: 'Next.js', icon: NextJsIcon, color: 'white' },
];

export const packages: Technology[] = [
  { text: 'Framer Motion', icon: FramerMotionIcon, color: '#bb4b96' },
  { text: 'React Router', icon: ReactRouterDomIcon, color: '#D0021B' },
  { text: 'Tanstack Query', icon: ReactQueryLogo, color: '#FFD94C' },
  { text: 'Redux', icon: ReduxIcon, color: '#764ABC' },
];
