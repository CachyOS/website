export const SITE = {
  name: 'CachyOS',

  origin: 'https://cachyos.org',
  basePathname: '/',
  trailingSlash: false,

  title: 'CachyOS — Blazingly Fast OS based on Arch Linux',
  description:
    '🚀 CachyOS is an Arch Linux-based distribution that offers an easy installation, several customization options to suit every user, and special optimizations for improved performance while remaining simple.',
};

export const BLOG = {
  disabled: false,
  postsPerPage: 4,

  blog: {
    disabled: false,
    pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
  },

  post: {
    disabled: false,
    pathname: '', // empty for /some-post, value for /pathname/some-post
  },

  category: {
    disabled: false,
    pathname: 'category', // set empty to change from /category/some-category to /some-category
  },

  tag: {
    disabled: false,
    pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
  },
};
