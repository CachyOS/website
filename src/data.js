import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Download',
      href: getPermalink('/download'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Github',
      href: 'https://github.com/cachyos',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: 'https://wiki.cachyos.org/en/home/features' },
        { text: 'Team', href: getPermalink('/about/#team') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: 'https://wiki.cachyos.org/' },
        { text: 'Community Forum', href: 'https://discuss.cachyos.org/' },
      ],
    },
    {
      title: 'Distribution',
      links: [{ text: 'About', href: getPermalink('/about/#distribution') }],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ],
  socialLinks: [
    { arialabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/cachyos' },
    { arialabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/+oR-kWT47vRdmMDli' },
    { arialabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/cachyos-862292009423470592' },
    { arialabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://www.reddit.com/r/cachyos' },
    { arialabel: 'Patreon', icon: 'tabler:brand-patreon', href: 'https://www.patreon.com/CachyOS' },
    { arialabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/cachyos' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(~/assets/images/logo.svg)]"></span>
    Made by <a class="text-blue-600 dark:text-white font-bold decoration-slate-400 decoration-dotted underline" href="https://cachyos.org/"> CachyOS</a> · All rights reserved.
  `,
};
