# System Bridge Website - Agent Guidelines

Static documentation site built with Astro and Starlight.

## Quick Start

- **Dev server**: `pnpm run dev` or `astro dev`
- **Build**: `pnpm run build` or `astro build`
- **Preview**: `pnpm run preview` or `astro preview`

**Note:** No tests configured - this is a static documentation site

## Tech Stack

- **Framework**: Astro 5.x with Starlight (static output)
- **Package Manager**: pnpm (required - see packageManager in package.json)
- **Content**: Markdown/MDX in `src/content/docs/`

## Code Style

- **Indentation**: 2 spaces for code, 4 spaces for Markdown (see .editorconfig)
- **Imports**: Use `~/*` alias for `src/*` paths (configured in tsconfig.json)
- **Naming**: kebab-case for files/URLs
- **Markdown**: Use Starlight callouts and content conventions
- **Formatting**: Prettier with Astro defaults
