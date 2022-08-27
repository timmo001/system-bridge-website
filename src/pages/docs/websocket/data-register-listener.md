---
layout: ~/layouts/single.astro
id: data-register-listener
title: WebSocket - Registering as a Listener
---

To register as a listener, connect to the WebSocket at `/api/websocket` and send a message with the event `REGISTER_DATA_LISTENER` including each module you want to subscribe to.

```json
{
  "event": "REGISTER_DATA_LISTENER",
  "api-key": "abc123",
  "modules": ["cpu", "memory", "system"]
}
```
