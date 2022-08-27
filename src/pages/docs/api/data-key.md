---
layout: ~/layouts/single.astro
id: api-data-key
title: API - Data by Key
---

_Get data from data modules by key._

## Request

```http
GET /api/data/{module}/{key}
```

## Response

```json
{
    "key": "value",
    "last_updated": timestamp
}
```
