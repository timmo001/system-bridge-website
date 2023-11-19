---
layout: ~/layouts/single.astro
id: running
title: Running
---

## Application

You can run the application from the shortcut in your start menu / applications called `System Bridge`.

### Linux

Linux users can also run the application from the terminal. This is useful for debugging and reporting startup issues.

```bash
systembridge
```

### Autostart

To enable autostart, open settings via the system tray icon, enable autostart and click the save icon. The application will now be added to startup.

### No GUI / Headless

If you want to run the application without a GUI, you can use the following command:

```bash
systembridge --no-gui
```

#### Systemd Service

Here is an example systemd service. This runs as root, so you will need to have run the install commands as root for this to run.

```bash
[Unit]
Description=System Bridge
After=network.target

[Service]
ExecStart=/usr/bin/systembridge --no-gui
Restart=on-abort
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

### Token

The `token` is essential to connect to the API/WebSocket. You can copy this using the tray menu, or reading the logs after starting the application (useful if running headless or with `--no-gui`).

You can also use the CLI which is provided by the `systembridgecli` package which you will need to install Python first before

```bash
python -m pip install --upgrade systembridgecli
```

```bash
python -m systembridgecli token
```

To reset your `token`, run this command:

```bash
python -m systembridgecli token --reset
```
