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
