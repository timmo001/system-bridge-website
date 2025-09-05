# Agent Guidelines for System Bridge Website

## Build Commands

- **Build**: `npm run build` or `astro build`
- **Dev server**: `npm run dev` or `astro dev`
- **Preview**: `npm run preview` or `astro preview`
- **Clean**: `npm run clean`

## Code Quality

- **Format**: `npm run format` or `prettier --write .`
- **Lint**: Use ESLint with `eslint .` (extends astro/recommended)
- **No tests configured** - this is a static documentation site

## Code Style Guidelines

- **Framework**: Astro with TypeScript
- **Indentation**: 2 spaces (configured in .editorconfig)
- **Imports**: Use `~/*` alias for `src/*` paths
- **Styling**: Tailwind CSS with fluid typography plugin
- **Naming**: kebab-case for files, PascalCase for components
- **Types**: Strict TypeScript with ESNext target
- **Formatting**: Prettier with Astro and Tailwind plugins
- **Error handling**: Standard try/catch where needed
- **Components**: Use Astro components with frontmatter for props
