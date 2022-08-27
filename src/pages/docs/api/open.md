---
layout: ~/layouts/single.astro
id: open
title: Open
---

_Open files or urls._

## Request

```http
POST /api/open
```

### Path

```json
{
    "path": "C:\\path\\to\\file.ext"
}
```

### URL

```json
{
    "url": "https://system-bridge.timmo.dev"
}
```

## Response

### Path

```json
{
    "message": "Opening path: C:\\path\\to\\file.ext"
}
```

### URL

```json
{
    "message": "Opening URL: https://system-bridge.timmo.dev"
}
```
