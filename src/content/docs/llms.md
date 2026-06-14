---
title: LLMs
description: Feed the System Bridge documentation to AI assistants using llms.txt.
---

The System Bridge documentation is published in formats that large language models can read directly, following the [llms.txt](https://llmstxt.org) convention. Point an assistant at one of these files to give it the docs as context.

## Available files

- [`/llms.txt`](https://system-bridge.timmo.dev/llms.txt) - an index of the documentation with links to each section. Use this when you want the model to pick what it needs.
- [`/llms-full.txt`](https://system-bridge.timmo.dev/llms-full.txt) - the entire documentation in a single file. Use this for the most complete context.
- [`/llms-small.txt`](https://system-bridge.timmo.dev/llms-small.txt) - a trimmed version for smaller context windows.

These files are generated from the docs at build time, so they stay in sync with the rest of the site.

## How to use them

- Paste one of the URLs above into an AI assistant and ask it to read the page.
- Use the actions in the page header on any docs page to copy the page as Markdown.

## Relationship to MCP

`llms.txt` gives an assistant the documentation. The [MCP server](/api/mcp/) goes further and lets an assistant read live system data and control your machine over the [Model Context Protocol](https://modelcontextprotocol.io). Use `llms.txt` to help a model understand System Bridge, and the MCP server to let it act on your system.
