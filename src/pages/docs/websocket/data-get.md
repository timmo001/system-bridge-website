---
layout: ~/layouts/single.astro
id: websocket-data-get
title: WebSocket - Requesting Data
---

To request data, send a message to the WebSocket with the `GET_DATA` event with each module to receive data from.

```json
{
  "api_key": "abc123",
  "event": "GET_DATA",
  "modules": ["disk"]
}
```
