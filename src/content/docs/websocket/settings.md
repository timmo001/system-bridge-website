---
title: WebSocket - Settings
---

Read and update the backend settings over the WebSocket connection.

## Get settings

Send the `GET_SETTINGS` event to retrieve the current settings. It takes no data and responds with the `SETTINGS_RESULT` type.

```json
{
    "id": "abc123",
    "token": "abc123",
    "event": "GET_SETTINGS",
    "data": {}
}
```

## Update settings

Send the `UPDATE_SETTINGS` event with the settings object to update. It responds with the `SETTINGS_UPDATED` type and the updated settings.

```json
{
    "id": "abc123",
    "token": "abc123",
    "event": "UPDATE_SETTINGS",
    "data": {
        "autostart": true,
        "logLevel": "INFO"
    }
}
```

## Settings keys

| Key | Type | Description |
| --- | --- | --- |
| `autostart` | boolean | Start the backend automatically when you log in. |
| `logLevel` | string | One of `DEBUG`, `INFO`, `WARN`, `ERROR`. Defaults to `WARN`. |
| `hotkeys` | array | List of `{ name, key }` hotkey bindings. |
| `commands.allowlist` | array | Commands that can be run via [Execute Command](/websocket/command-execute/). Each entry is `{ id, name, command, workingDir, arguments }`. |
| `disks.allowedSecondaryMountPoints` | array | Secondary mount points to include in disk data. |
| `media.directories` | array | Custom media directories as `{ name, path }`, exposed as [base directories](/websocket/filesystem/). |

:::note
Changing `autostart` or `logLevel` is applied immediately by the backend.
:::
