import type { NavigationLink } from '@/models/socialmedia-link';

import GithubIcon from '@/assets/icons/socialmedia/github';
import TelegramIcon from '@/assets/icons/socialmedia/telegram';
import FacebookIcon from '@/assets/icons/socialmedia/facebook';

export const socialmediaLinks: NavigationLink[] = [
  { label: 'Github', to: 'https://github.com/MohammadROmar', icon: GithubIcon },
  { label: 'Telegram', to: 'https://t.me/MohammadROmar', icon: TelegramIcon },
  {
    label: 'Facebook',
    to: 'https://www.facebook.com/profile.php?id=100024573283781',
    icon: FacebookIcon,
  },
];
