import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'CachyOS',

  origin: 'https://cachyos.org/',
  basePathname: '/',

  title: 'CachyOS — Blazingly Fast OS based on Arch Linux',
  description:
    '🚀 CachyOS is a performance-optimized Arch Linux distribution with CPU-specific package builds, advanced kernel scheduling, and an effortless installation — delivering measurable speed gains without sacrificing simplicity.',
  defaultImage: defaultImage,

  defaultTheme: 'dark', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
};

export const SITE = { ...CONFIG };
