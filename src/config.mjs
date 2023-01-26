import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'CachyOS',

  origin: 'https://cachyos.org/',
  basePathname: '/',
  trailingSlash: false,

  title: 'CachyOS — Blazingly Fast OS based on Arch Linux',
  description:
    '🚀 CachyOS is an Arch Linux-based distribution that offers an easy installation, several customization options to suit every user, and special optimizations for improved performance while remaining simple.',
  defaultImage: defaultImage,

  defaultTheme: 'dark', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
};

export const SITE = { ...CONFIG };
