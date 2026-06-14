---
title: API - MCP Server
---

System Bridge includes a [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server, letting AI assistants and other MCP clients query your system and trigger actions.

## Endpoint

```http
GET /api/mcp
```

The MCP server speaks JSON-RPC 2.0 over this endpoint and is authenticated with your API token. See [how to find your token](/using/cli/#token).

## Tools

### `system_bridge_get_data`

Get system information from one or more data modules.

- `modules` (required): An array of module names. Available modules: `battery`, `cpu`, `disks`, `displays`, `gpus`, `media`, `memory`, `networks`, `processes`, `sensors`, `system`.

### `system_bridge_send_notification`

Send a desktop notification.

- `title` (required): The notification title.
- `message` (required): The notification body.
- `icon` (optional): The icon name.

### `system_bridge_media_control`

Control media playback.

- `action` (required): One of `PLAY`, `PAUSE`, `STOP`, `NEXT`, `PREVIOUS`, `VOLUME_UP`, `VOLUME_DOWN`, `MUTE` (must be uppercase).
