import BriefcaseIcon from '@/assets/icons/briefcase';
import LinkIcon from '@/assets/icons/link';
import MailIcon from '@/assets/icons/mail';
import MapPinIcon from '@/assets/icons/map-pin';
import type { PersonalInfo } from '@/models/personal-info';

export const personalInfo: PersonalInfo[] = [
  { icon: MailIcon, text: 'mohammad.riyad.omar@gmail.com' },
  { icon: MapPinIcon, text: 'Damascus - Syria' },
  { icon: BriefcaseIcon, text: 'Full-time / Freelancer' },
  { icon: LinkIcon, text: 'www.some-url.com' },
];
