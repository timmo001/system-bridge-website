---
title: WebSocket - Media control
---

Send the `MEDIA_CONTROL` event with an `action` to control media playback.

Available actions:

- `PLAY`
- `PAUSE`
- `STOP`
- `NEXT`
- `PREVIOUS`
- `VOLUME_UP`
- `VOLUME_DOWN`
- `MUTE`

```json
{
    "id": "abc123",
    "token": "abc123",
    "event": "MEDIA_CONTROL",
    "data": {
        "action": "PAUSE"
    }
}
```
