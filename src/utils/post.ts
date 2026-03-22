import type { CollectionEntry } from 'astro:content';
import { getFileCommitDate } from './git';

export const getLastUpdated = (entry: CollectionEntry<'post'>): Date | undefined => {
  const currentFilePath = `src/content/post/` + entry.id + '.md';
  let date = undefined;
  if (!date) {
    try {
      ({ date } = getFileCommitDate(currentFilePath, 'newest'));
    } catch (e) {
      console.log(e);
    }
  }
  return date;
};

export const getCreatedDate = (entry: CollectionEntry<'post'>): Date | undefined => {
  const currentFilePath = `src/content/post/` + entry.id + '.md';
  let date = undefined;
  if (!date) {
    try {
      ({ date } = getFileCommitDate(currentFilePath, 'oldest'));
    } catch (e) {
      console.log(e);
    }
  }
  return date;
};
