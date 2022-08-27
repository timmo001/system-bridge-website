---
layout: ~/layouts/single.astro
id: api-media-files
title: API - Media - Files
---

_List files from system._

## Request

```http
GET /api/media/files?base={base}&path={path}
```

Base is the base directory to search from. Path is the relative path to the file from the base.

The avaliable base directories are:

- documents
- downloads
- home
- music
- pictures
- videos

## Response

```json
{
    "foo": "bar"
}
```
