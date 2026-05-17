import type { CollectionEntry } from 'astro:content';
import { getFileCommitDate } from './git';

export const getLastUpdated = (entry: CollectionEntry<'post'>): Date | undefined => {
  const currentFilePath = `src/content/post/` + entry.id + '.md';
  let date = undefined;
  try {
    ({ date } = getFileCommitDate(currentFilePath, 'newest'));
  } catch (e) {
    const fallback = entry.data.updateDate || entry.data.publishDate;
    if (fallback) return fallback;
  }
  return date;
};

export const getCreatedDate = (entry: CollectionEntry<'post'>): Date | undefined => {
  const currentFilePath = `src/content/post/` + entry.id + '.md';
  let date = undefined;
  try {
    ({ date } = getFileCommitDate(currentFilePath, 'oldest'));
  } catch (e) {
    return entry.data.publishDate;
  }
  return date;
};
