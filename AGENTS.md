# System Bridge Website - Agent Guidelines

Static documentation site built with Astro.

## Quick Start

- **Dev server**: `pnpm run dev` or `astro dev`
- **Build**: `pnpm run build` or `astro build`
- **Preview**: `pnpm run preview` or `astro preview`
- **Clean**: `pnpm run clean` (removes dist, node_modules, assets)
- **Format**: `pnpm run format` or `prettier --write .`
- **Lint**: `eslint .` (extends plugin:astro/recommended)

**Note:** No tests configured - this is a static documentation site

## Tech Stack

- **Framework**: Astro 5.x with TypeScript (static output, Vercel adapter)
- **Package Manager**: pnpm (required - see packageManager in package.json)
- **Styling**: Tailwind CSS with fluid typography plugin, scoped `<style>` blocks in components
- **Icons**: Use `astro-icon` with Icon component from "astro-icon/components"

## Code Style

- **Indentation**: 2 spaces for code, 4 spaces for Markdown (see .editorconfig)
- **Imports**: Use `~/*` alias for `src/*` paths (configured in tsconfig.json)
- **Data**: JSON files in `src/data/` for structured content
- **Naming**: kebab-case for files/URLs, PascalCase for Astro components
- **TypeScript**: ESNext target, module resolution set to node
- **Markdown**: Uses custom remark/rehype callout plugins
- **Scripts**: Inline `<script>` tags in .astro files for interactivity
- **Formatting**: Prettier with astro and tailwindcss plugins (empty config = defaults)
