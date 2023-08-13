---
layout: ~/layouts/single.astro
id: running
title: Running - Python
---

## Application

To run the application, use the following command:

```bash
python -m systembridgebackend
```

### No GUI / Headless

If you want to run the application without a GUI, you can use the following command:

```bash
python -m systembridgebackend --no-gui
```

#### Systemd Service

Here is an example systemd service. This runs as root, so you will need to have run the install commands as root for this to run.

```bash
[Unit]
Description=System Bridge
After=network.target

[Service]
ExecStart=/usr/bin/python3 -m systembridgebackend --no-gui
Restart=on-abort
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

## CLI

To run the CLI, you can use the following command:

```bash
python -m systembridgecli --help
```

This command will show you all available commands. For more details, read the [CLI](https://system-bridge.timmo.dev/docs/cli) page.

### API Key

To get the `api-key` for use in the API/WebSocket, you can use the following command:

```bash
python -m systembridgecli api-key
```

To reset your `api-key`, run this command:

```bash
python -m systembridgecli api-key --reset
```
