---
title: WebSocket - Execute Command
---

Run a command from the allowlist defined in your [settings](/websocket/settings/).

Send the `COMMAND_EXECUTE` event with the `commandID` of an allowlisted command:

```json
{
    "id": "abc123",
    "token": "abc123",
    "event": "COMMAND_EXECUTE",
    "data": {
        "commandID": "my-command"
    }
}
```

The command runs asynchronously. You receive a `COMMAND_EXECUTING` response immediately, followed by a `COMMAND_COMPLETED` response once it finishes.

:::caution
Only commands present in `commands.allowlist` can be executed. Requesting an unknown command returns an `ERROR` response with the `COMMAND_NOT_FOUND` subtype.
:::
