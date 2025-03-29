import CodeIcon from '@/assets/icons/code';
import MailIcon from '@/assets/icons/mail';
import MonitorIcon from '@/assets/icons/monitor';
import UserIcon from '@/assets/icons/user';
import type { NavigationLink } from '@/models/socialmedia-link';

export const navigationLinks: NavigationLink[] = [
  { label: 'About', to: '/#about', icon: UserIcon },
  { label: 'Skills', to: '/#skills', icon: CodeIcon },
  { label: 'Projects', to: '/#projects', icon: MonitorIcon },
  { label: 'Contact', to: '/#contact', icon: MailIcon },
];
