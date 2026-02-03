---
layout: ~/layouts/single.astro
id: websocket-data-get
title: WebSocket - Requesting Data
---

To request data, send a message to the WebSocket with the `GET_DATA` event with each module to receive data from.

```json
{
    "id": "abc123",
    "token": "abc123",
    "event": "GET_DATA",
    "data": {
        "modules": ["system"]
    }
}
```
