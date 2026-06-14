---
title: MCP Server
description: Connect agents to System Bridge over the Model Context Protocol to query system data and trigger actions.
---

System Bridge includes a [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server, letting agents and other MCP clients query your system and trigger actions.

## Connecting

The MCP server runs over a WebSocket connection at:

```http
GET /api/mcp
```

By default this is served on port `9170`, so the full URL is usually `ws://{host}:9170/api/mcp`. Replace `{host}` with the hostname or IP address of the machine running System Bridge. The port can be changed with the `SYSTEM_BRIDGE_PORT` environment variable.

## Authentication

The connection is authenticated with your API token, passed one of two ways:

- As a query parameter: `ws://{host}:9170/api/mcp?token={token}`
- As an `Authorization: Bearer {token}` header on the upgrade request.

See [how to find your token](/using/cli/#token). Connections with a missing or invalid token are rejected with `401 Unauthorized`.

## Setup

Agents launch MCP servers as a local command and talk to them over stdio. Because System Bridge serves MCP over a WebSocket, a bridge such as [`websocat`](https://github.com/vi/websocat) is needed to pipe stdio to the WebSocket.

With `websocat` installed, add System Bridge to your agent's MCP config:

```json title="mcp.json"
{
  "mcpServers": {
    "system-bridge": {
      "command": "websocat",
      "args": ["ws://localhost:9170/api/mcp?token=YOUR_TOKEN"]
    }
  }
}
```

- Replace `localhost` with the host running System Bridge if the agent is on another machine.
- Replace `YOUR_TOKEN` with your API token. See [how to find your token](/using/cli/#token).

:::note
The config key and file location vary by agent. Check your agent's MCP documentation for where its config lives and which key it uses.
:::

## Tools

### `system_bridge_get_data`

Get current system information from one or more data modules. The tool returns each requested module's latest data as JSON.

- `modules` (required): An array of module names to fetch.

Available modules:

| Module | Description |
| --- | --- |
| `battery` | Charge level, charging state, and time remaining. |
| `cpu` | Usage, frequency, core counts, and per-core load. |
| `disks` | Mounted devices, partitions, and used/free space. |
| `displays` | Connected displays, resolution, and refresh rate. |
| `gpus` | GPU model, load, memory, and temperature. |
| `media` | Currently playing media: title, artist, and playback state. |
| `memory` | Physical and virtual memory usage. |
| `networks` | Network interfaces, addresses, and throughput. |
| `processes` | Running processes with CPU and memory usage. |
| `sensors` | Hardware sensors such as temperatures and fan speeds. |
| `system` | Hostname, OS, uptime, users, and version details. |

Example arguments:

```json
{ "modules": ["cpu", "memory", "battery"] }
```

### `system_bridge_send_notification`

Send a desktop notification to the machine running System Bridge.

- `title` (required): The notification title.
- `message` (required): The notification body text.
- `icon` (optional): An icon name to display with the notification.

Example arguments:

```json
{ "title": "Build finished", "message": "All tests passed", "icon": "dialog-information" }
```

### `system_bridge_media_control`

Control playback of the system's current media session.

- `action` (required): The action to perform. Must be uppercase.

Available actions:

| Action | Effect |
| --- | --- |
| `PLAY` | Resume playback. |
| `PAUSE` | Pause playback. |
| `STOP` | Stop playback. |
| `NEXT` | Skip to the next track. |
| `PREVIOUS` | Return to the previous track. |
| `VOLUME_UP` | Raise the volume. |
| `VOLUME_DOWN` | Lower the volume. |
| `MUTE` | Toggle mute. |

Example arguments:

```json
{ "action": "PAUSE" }
```
</content>
