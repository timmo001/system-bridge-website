---
layout: ~/layouts/single.astro
id: data-get
title: WebSocket - Requesting Data
---

To request data, send a message to the WebSocket with the `GET_DATA` event with each module to receive data from.

```json
{
  "event": "GET_DATA",
  "api-key": "abc123",
  "modules": ["disk"]
}
```
