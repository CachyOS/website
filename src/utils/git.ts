/**
 * Heavily inspired by
 * https://github.com/facebook/docusaurus/blob/46d2aa231ddb18ed67311b6195260af46d7e8bdc/packages/docusaurus-utils/src/gitUtils.ts
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { basename, dirname } from 'node:path';
import { spawnSync } from 'node:child_process';

/** Custom error thrown when git is not found in `PATH`. */
class GitNotFoundError extends Error {}

/**
 * Fetches the git history of a file and returns a relevant commit date.
 * It gets the commit date instead of author date so that amended commits
 * can have their dates updated.
 *
 * @throws Also throws when `git log` exited with non-zero, or when it outputs
 * unexpected text.
 */
export function getFileCommitDate(
    file: string,
    age: 'oldest' | 'newest' = 'oldest'
): {
    date: Date;
    timestamp: number;
} {
    let git_path = '';
    {
        const { stdout } = spawnSync('which', ['git'], {
            encoding: 'utf-8',
        });
        if (!stdout) {
            throw new GitNotFoundError(
                `Failed to retrieve git history for "${file}" because git is not installed.`
            );
        }
        git_path = stdout.replace(/\n$/, '');
    }

    const result = spawnSync(git_path, ['log', '--format=%ct', '--max-count=1', ...(age === 'oldest' ? ['--follow', '--diff-filter=A'] : []), '--', basename(file)], {
        cwd: dirname(file),
        encoding: 'utf-8',
    });

    if (result.error) {
        throw new Error(`Failed to retrieve the git history for file "${file}": ${result.error}`);
    }

    const output = result.stdout.trim();
    const regex = /^(?<timestamp>\d+)$/;
    const match = output.match(regex);

    if (!match?.groups?.timestamp) {
        throw new Error(`Failed to validate the timestamp for file "${file}"`);
    }

    const timestamp = Number(match.groups.timestamp);
    const date = new Date(timestamp * 1000);

    return { date, timestamp };
}
