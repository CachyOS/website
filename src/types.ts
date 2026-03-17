import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export interface MetaSEO {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;
  ogTitle?: string;
  ogType?: string;
}

export interface Post {
  id: string;
  permalink: string;
  publishDate: Date;
  updateDate?: Date;
  title: string;
  excerpt?: string;
  image?: string;
  category?: string;
  tags?: Array<string>;
  author?: string;
  metadata: Partial<MetaData>;
  draft?: boolean;
  Content?: AstroComponentFactory;
  content?: string;
  readingTime?: number;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;
  canonical?: string;
  description?: string;
  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface SupportOption {
  label: string;
  text: string;
  mode: 'text' | 'link';
}

export interface CallToAction {
  variant: string;
  target: string;
  text: Promise<string>;
  icon: string;
  class: string;
}
