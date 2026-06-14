---
title: WebSocket - Registering as a Listener
---

To register as a listener, connect to the WebSocket at `/api/websocket` and send a message with the event `REGISTER_DATA_LISTENER` including each module you want to subscribe to.

```json
{
    "id": "abc123",
    "token": "abc123",
    "event": "REGISTER_DATA_LISTENER",
    "data": { "modules": ["cpu", "memory", "system"] }
}
```

The backend replies with a `DATA_LISTENER_REGISTERED` response, then sends a [`DATA_UPDATE`](/websocket/data-receive/) message whenever a subscribed module changes.

## Unregistering

To stop receiving updates, send the `UNREGISTER_DATA_LISTENER` event. It takes no data and responds with the `DATA_LISTENER_UNREGISTERED` type.

```json
{
    "id": "abc123",
    "token": "abc123",
    "event": "UNREGISTER_DATA_LISTENER",
    "data": {}
}
```
