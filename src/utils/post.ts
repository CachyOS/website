import type { Post } from '../types';
import { getFileCommitDate } from './git';
import { getProjectRootDir } from './directories';

export const getLastUpdated = ( entry: Post): Date | undefined => {
    const currentFilePath = `${getProjectRootDir()}/src/content/post/` + entry.id;
    let date = undefined;
    if (!date) {
        try {
            ({ date } = getFileCommitDate(currentFilePath, 'newest'));
        } catch(e) {
            console.log(e);

        }
    }
    return date;
};

export const getCreatedDate = ( entry: Post): Date | undefined => {
    const currentFilePath = `${getProjectRootDir()}/src/content/post/` + entry.id;
    console.log(currentFilePath);
    let date = undefined;
    if (!date) {
        try {
            ({ date } = getFileCommitDate(currentFilePath, 'oldest'));
        } catch(e) {
            console.log(e);
        }
    }
    return date;
}
