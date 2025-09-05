---
layout: ~/layouts/single.astro
id: api-data
title: API - Data
---

_Get data from data modules._

## Authentication

This endpoint requires authentication via the `token` header or `X-API-Token` header.

## Request

```http
GET /api/data/{module}
Authorization: Bearer {token}
```

Or:

```http
GET /api/data/{module}
token: {token}
```

## Response

The response format varies depending on the module requested. Here's an example:

```json
{
    "boot_time": 1651433957.3015134,
    "fqdn": "Desktop",
    "hostname": "Desktop",
    "ip_address_4": "1.1.1.1",
    "mac_address": "aa:bb:cc:dd:ee:ff",
    "platform": "Windows",
    "platform_version": "10.0.22000",
    "uptime": 7.015625,
    "uuid": "abcd-efgh-abcd-efgh-abcd",
    "version": "5.0.2",
    "version_latest": "5.0.7",
    "version_newer_available": false
}
```
