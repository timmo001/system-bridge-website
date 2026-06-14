# Docs Page Workflow (Starlight)

Use this skill when adding or restructuring documentation pages.

## Create a New Page

1. Add a kebab-case file in `src/content/docs/`.
2. Use YAML frontmatter with `title` and optional `description`.
3. Keep headings in order (H2 under the page title).
4. Use Starlight callouts for notes and warnings.
5. Use language tags on code fences.

Example:

```md
---
title: Open URL
description: Trigger a URL open action over WebSocket.
---

## Request

```json
{ "type": "open-url", "url": "https://example.com" }
```
```

## Update the Sidebar

1. Edit `astro.config.mjs`.
2. Add a new `items` entry under the right section.
3. Use the slug path relative to `src/content/docs/`.

Example:

```js
{ label: 'Open URL', slug: 'websocket/open-url' }
```

## Link Conventions

- Internal docs links: `/docs/...`.
- External links in MDX: include `target="_blank"` and `rel="noopener noreferrer"`.

## Quick Local Check

Run `pnpm dev` and open the page route to verify layout and headings.
