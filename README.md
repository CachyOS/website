# CachyOS Website

Static site for CachyOS, built with Astro. Origin: `https://cachyos.org/`.

## About CachyOS

- Blazingly fast, customizable Linux distribution built on Arch Linux.
- Optimized packages: compiled with `x86-64-v3`, `x86-64-v4`, and `Zen4` instruction sets and LTO; core packages use PGO or BOLT where applicable.
- Kernels: includes the optimized `linux-cachyos` with the BORE scheduler; also offers EEVDF, sched-ext, ECHO, and RT options. Kernels are compiled with optimized instruction sets and LTO.
- Desktop options: KDE Plasma, GNOME, XFCE, i3, Wayfire, LXQt, Openbox, Cinnamon, COSMIC, UKUI, LXDE, MATE, Budgie, Qtile, Hyprland, and Sway (select during online installation).
- Installers: GUI (Calamares-based) and a CLI installer.

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
