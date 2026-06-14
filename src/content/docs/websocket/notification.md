---
title: WebSocket - Send notification
---

Send the `NOTIFICATION` event to show a desktop notification. `title` and `message` are required; the rest are optional.

```json
{
    "id": "abc123",
    "token": "abc123",
    "event": "NOTIFICATION",
    "data": {
        "title": "Hello",
        "message": "World"
    }
}
```

Available fields:

- `title` (required): The notification title.
- `message` (required): The notification body.
- `icon` (optional): The icon name.
- `duration` (optional): How long to show the notification, in milliseconds.
- `actionUrl` (optional): A URL to open when the notification is clicked.
- `actionPath` (optional): A file or folder path to open when the notification is clicked.
- `sound` (optional): Path to a sound file to play with the notification.
