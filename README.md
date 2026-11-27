# CachyOS Website

Static site for CachyOS, built with Astro. Origin: `https://cachyos.org/`.

## Scripts

All commands run from the project root.

- `dev`: start the Astro dev server.
- `start`: alias of `dev`.
- `build`: build the production site to `./dist`.
- `preview`: preview a local production build.
- `astro`: run Astro CLI commands (e.g., `astro add`, `astro check`).
- `format`: format the repository with Prettier.
- `lint:eslint`: run ESLint on the project.
- `subfont`: subset and inline fonts for the built site in `dist`.

Examples using Bun:

- `bun install`
- `bun run dev`
- `bun run build`
- `bun run preview`
- `bun run format`
- `bun run lint:eslint`

## Tech Stack

- Astro 5
- Tailwind CSS 4
- React (optional components)

## Development

- Install dependencies: `bun install`
- Start dev server: `bun run dev` (defaults to `http://localhost:4321`)
- Build: `bun run build`
- Preview: `bun run preview`

## Translations

The site's text lives in `src/locales/`: `en.json` is the English source and each other language has its own file (`eu.json` is Basque). Translators only edit their language's file. Pages that are translated also exist under their language's folder, so `/eu/download` is the Basque download page.

- To fix or update a translation, edit the value in your language's file. Keep `{{placeholders}}` and HTML tags as they are.
- The `Translations` workflow fails when English text has no translation in another language's file, so you can see what's new after a change.
- Names (CachyOS, GitHub, SourceForge…) are kept as written. The list is `doNotTranslate` in `localize.config.json`.
- Text in components goes through `t('key')`. After changing English text, run `npx localize-dev run --files <changed files>` to update the keys and locale files.

So far only the download page, header and footer are translated.
