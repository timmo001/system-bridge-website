---
layout: ~/layouts/single.astro
id: data
title: Data
---

_Get data from data modules._

## Request

```http
GET /api/data/{module}
```

## Response

```json
{
    "key": "value",
    "last_updated": {
        "key": timestamp
    }
}
```
