import slugify from 'limax';

import { SITE } from '~/config.mjs';
import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));

export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');

export const BLOG_BASE = cleanSlug('blog');
export const CATEGORY_BASE = cleanSlug('category');
export const TAG_BASE = cleanSlug('tag');

export const POST_PERMALINK_PATTERN = trimSlash(`${BLOG_BASE}/%slug%`);

export const getCanonical = (path = ''): URL => new URL(path, SITE.origin);

export const getPermalink = (slug = '', type = 'page'): string => {
  let permalink: string;

  switch (type) {
    case 'category':
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case 'tag':
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;
    case 'post':
      permalink = createPath(trimSlash(slug));
      break;
    case 'page':
    default:
      permalink = createPath(slug);
      break;
  }

  return definitivePermalink(permalink);
};

export const getHomePermalink = (): string => getPermalink('/');

export const getBlogPermalink = (): string => getPermalink(BLOG_BASE);

export const getAsset = (path: string): string =>
  '/' +
  [SITE.basePathname, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');

const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const definitivePermalink = (permalink: string): string => createPath(SITE.basePathname, permalink);
