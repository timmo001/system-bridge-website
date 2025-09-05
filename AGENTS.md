# Agent Guidelines for System Bridge Website

## Build Commands

-   **Build**: `pnpm run build` or `astro build`
-   **Dev server**: `pnpm run dev` or `astro dev`
-   **Preview**: `pnpm run preview` or `astro preview`
-   **Clean**: `pnpm run clean`

## Code Quality

-   **Format**: `pnpm run format` or `prettier --write .`
-   **Lint**: Use ESLint with `eslint .` (extends astro/recommended)
-   **No tests configured** - this is a static documentation site

## Code Style Guidelines

-   **Framework**: Astro with TypeScript
-   **Indentation**: 2 spaces (configured in .editorconfig)
-   **Imports**: Use `~/*` alias for `src/*` paths
-   **Styling**: Tailwind CSS with fluid typography plugin
-   **Naming**: kebab-case for files, PascalCase for components
-   **Types**: Strict TypeScript with ESNext target
-   **Formatting**: Prettier with Astro and Tailwind plugins
-   **Error handling**: Standard try/catch where needed
-   **Components**: Use Astro components with frontmatter for props
