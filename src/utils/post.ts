import type { CollectionEntry } from 'astro:content';
import { getFileCommitDate } from './git';

export const getLastUpdated = (entry: CollectionEntry<'post'>): Date | undefined => {
  const currentFilePath = `src/content/post/` + entry.id + '.md';
  let date: Date | undefined;
  try {
    ({ date } = getFileCommitDate(currentFilePath, 'newest'));
  } catch {
    const fallback = entry.data.updateDate || entry.data.publishDate;
    if (fallback) return fallback;
  }
  return date;
};

export const getCreatedDate = (entry: CollectionEntry<'post'>): Date | undefined => {
  const currentFilePath = `src/content/post/` + entry.id + '.md';
  let date: Date | undefined;
  try {
    ({ date } = getFileCommitDate(currentFilePath, 'oldest'));
  } catch {
    return entry.data.publishDate;
  }
  return date;
};
