import MonitorIcon from '@/assets/icons/monitor';
import SmartphoneIcon from '@/assets/icons/smartphone';
import { Skill } from '@/models/skill';

export const skills: Skill[] = [
  {
    text: 'Web Developement',
    subtext: 'Html·TailwindCSS·TS·Next.js',
    icon: MonitorIcon,
  },
  { text: 'App Developement', subtext: 'Flutter', icon: SmartphoneIcon },
];
