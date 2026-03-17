import { getFileCommitDate } from './git';

const getCommitDate = (path: string | undefined, type: 'newest' | 'oldest'): Date => {
  if (!path) {
    throw new Error(`No path provided to get ${type} commit date`);
  }

  try {
    return getFileCommitDate(path, type).date;
  } catch (e) {
    throw new Error(`Failed to get ${type} commit date for path: ${path}`, { cause: e });
  }
};

export const getLastUpdated = (path?: string): Date => getCommitDate(path, 'newest');

export const getCreatedDate = (path?: string): Date => getCommitDate(path, 'oldest');
