---
layout: ~/layouts/single.astro
id: websocket-data-register-listener
title: WebSocket - Registering as a Listener
---

To register as a listener, connect to the WebSocket at `/api/websocket` and send a message with the event `REGISTER_DATA_LISTENER` including each module you want to subscribe to.

```json
{
  "token": "abc123",
  "event": "REGISTER_DATA_LISTENER",
  "modules": ["cpu", "memory", "system"]
}
```
